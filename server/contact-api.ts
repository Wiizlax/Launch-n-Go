import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { Resend } from 'resend'
import { z } from 'zod'

const contactBodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

const PORT =
  Number(process.env.PORT) || Number(process.env.CONTACT_API_PORT) || 3001

const defaultOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
]

function normalizeOrigin(url: string): string {
  return url.trim().replace(/\/$/, '')
}

function getOrigins(): string[] {
  const raw = process.env.ALLOWED_ORIGIN
  if (raw?.trim()) {
    return raw.split(',').map((s) => normalizeOrigin(s))
  }
  return defaultOrigins
}

const app = express()
app.use(express.json({ limit: '100kb' }))

app.use(
  cors({
    origin: (origin, callback) => {
      const allowed = getOrigins()
      const reqOrigin = origin ? normalizeOrigin(origin) : null
      if (!reqOrigin || allowed.includes(reqOrigin)) {
        callback(null, true)
        return
      }
      // Ne pas passer une Error : Express renverrait 500 sur le preflight OPTIONS.
      callback(null, false)
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }),
)

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.post('/api/contact', async (req, res) => {
  const parsed = contactBodySchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'invalid_payload' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_RECIPIENT_EMAIL
  if (!apiKey || !to) {
    console.error('Missing RESEND_API_KEY or CONTACT_RECIPIENT_EMAIL')
    res.status(500).json({ error: 'server_config' })
    return
  }

  const { name, email, subject, message } = parsed.data
  const resend = new Resend(apiKey)

  const html = `
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to],
      replyTo: email,
      subject: `[Launch'n Go] ${subject}`,
      html,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      res.status(500).json({ error: 'send_failed' })
      return
    }
    res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'send_failed' })
  }
})

/** Render / Heroku fournissent PORT : il faut écouter sur toutes les interfaces. */
const listenHost = process.env.PORT ? '0.0.0.0' : '127.0.0.1'

app.listen(PORT, listenHost, () => {
  console.log(`Contact API listening on http://${listenHost}:${PORT}`)
})
