import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

import { ContactForm, Container, SectionHeader } from '@/components/ui'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { SECTION_COPY, SITE_CONFIG } from '@/constants'

export function ContactSection() {
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()

  return (
    <section id="contact" aria-label="Contact" className="bg-cream py-12 md:py-16">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleBefore={SECTION_COPY.contact.titleBefore}
              accent={SECTION_COPY.contact.accent}
              accentClassName={SECTION_COPY.contact.accentClass}
              titleAfter={SECTION_COPY.contact.afterAccent}
              subtitle={SECTION_COPY.contact.subtitle}
            />
          </motion.div>
          <div className="mt-8 grid grid-cols-1 gap-10 md:mt-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              variants={fadeUp}
              className="rounded-card bg-gradient-to-br from-accent-blue to-[#1a3d52] p-8 text-white shadow-card md:p-10"
            >
              <h3 className="text-2xl font-medium md:text-3xl">{SITE_CONFIG.contactCardTitle}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                {SITE_CONFIG.contactCardIntro}
              </p>
              <ul className="mt-8 space-y-5 text-base">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white/80">{SITE_CONFIG.emailLabel}</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-blue rounded"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white/80">{SITE_CONFIG.phoneLabel}</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                      className="text-white underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent-blue rounded"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-yellow" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-white/80">{SITE_CONFIG.addressLabel}</p>
                    <p>{SITE_CONFIG.address}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
