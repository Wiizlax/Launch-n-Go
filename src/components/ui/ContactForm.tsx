import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CONTACT_FORM, CONTACT_TOAST_SUCCESS_MS } from '@/constants'
import { cn } from '@/utils/cn'

import { Button } from './Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet est trop court'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

const inputClass =
  'w-full rounded-card border-2 border-[rgba(43,88,118,0.15)] bg-input-bg px-4 py-3 text-ink placeholder:text-ink/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    if (!showSuccessToast) return
    const id = window.setTimeout(() => setShowSuccessToast(false), CONTACT_TOAST_SUCCESS_MS)
    return () => window.clearTimeout(id)
  }, [showSuccessToast])

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null)
    const base = import.meta.env.VITE_CONTACT_API_URL?.replace(/\/$/, '') ?? ''
    const url = `${base}/api/contact`
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        setSubmitError(CONTACT_FORM.errorGeneric)
        return
      }
      reset()
      setShowSuccessToast(true)
    } catch {
      setSubmitError(CONTACT_FORM.errorGeneric)
    }
  }

  return (
    <>
      {showSuccessToast ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            'fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2',
            'rounded-card border border-emerald-200/90 bg-emerald-50 px-4 py-3 text-sm text-ink shadow-card',
            'transition-opacity duration-300 md:left-auto md:right-6 md:translate-x-0',
          )}
        >
          <p className="font-medium leading-snug">{CONTACT_FORM.success}</p>
        </div>
      ) : null}
      <form
        className={cn('flex flex-col gap-6', className)}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Formulaire de contact"
      >
        {submitError ? (
          <p className="rounded-card border border-accent-orange/30 bg-input-bg p-4 text-accent-orange" role="alert">
            {submitError}
          </p>
        ) : null}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-medium text-ink">
              {CONTACT_FORM.nameLabel}
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder={CONTACT_FORM.namePlaceholder}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={inputClass}
              {...register('name')}
            />
            {errors.name ? (
              <p id="contact-name-error" className="text-sm text-accent-orange" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="font-medium text-ink">
              {CONTACT_FORM.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder={CONTACT_FORM.emailPlaceholder}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={inputClass}
              {...register('email')}
            />
            {errors.email ? (
              <p id="contact-email-error" className="text-sm text-accent-orange" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-subject" className="font-medium text-ink">
            {CONTACT_FORM.subjectLabel}
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder={CONTACT_FORM.subjectPlaceholder}
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
            className={inputClass}
            {...register('subject')}
          />
          {errors.subject ? (
            <p id="contact-subject-error" className="text-sm text-accent-orange" role="alert">
              {errors.subject.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className="font-medium text-ink">
            {CONTACT_FORM.messageLabel}
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder={CONTACT_FORM.messagePlaceholder}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={cn(inputClass, 'min-h-[172px] resize-y')}
            {...register('message')}
          />
          {errors.message ? (
            <p id="contact-message-error" className="text-sm text-accent-orange" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full md:w-auto md:self-start"
        >
          {CONTACT_FORM.submit}
          <Send size={20} className="shrink-0" aria-hidden />
        </Button>
      </form>
    </>
  )
}
