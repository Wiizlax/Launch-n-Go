import { Github, Linkedin, Mail } from 'lucide-react'

import { BrandLogo, Container } from '@/components/ui'
import { cn } from '@/utils/cn'
import type { SocialId } from '@/types'
import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  FOOTER_SOCIALS,
  SITE_CONFIG,
} from '@/constants'

const socialIconMap: Record<SocialId, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export function Footer() {
  return (
    <footer className="border-t border-[rgba(43,88,118,0.15)] bg-cream py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="max-w-sm">
            <BrandLogo imageClassName="h-12 w-auto sm:h-14 md:h-16 lg:h-[4.5rem]" />
            <p className="mt-6 text-base leading-relaxed text-muted">{SITE_CONFIG.footerTagline}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {FOOTER_SOCIALS.map((social) => {
                const Icon = socialIconMap[social.id]
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target={social.id === 'email' ? undefined : '_blank'}
                      rel={social.id === 'email' ? undefined : 'noopener noreferrer'}
                      aria-label={social.ariaLabel}
                      className={cn(
                        'inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[rgba(43,88,118,0.15)]',
                        'text-accent-blue transition hover:bg-accent-blue hover:text-white'
                      )}
                    >
                      <Icon size={20} aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.id}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={`${col.id}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-base text-muted transition hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(43,88,118,0.12)] pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>{SITE_CONFIG.copyright}</p>
          <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
            {FOOTER_LEGAL.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
