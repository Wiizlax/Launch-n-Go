import { Sparkles, X } from 'lucide-react'
import { createPortal } from 'react-dom'

import { NAV_ITEMS, SITE_CONFIG } from '@/constants'
import { BrandLogo, Container } from '@/components/ui'
import { cn } from '@/utils/cn'

interface MobileNavOverlayProps {
  panelId: string
  onClose: () => void
}

export function MobileNavOverlay({ panelId, onClose }: MobileNavOverlayProps) {
  return createPortal(
    <div
      id={panelId}
      className="fixed inset-0 z-[60] flex flex-col bg-cream md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div
        className="absolute inset-0 z-0 cursor-default"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pointer-events-none">
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-6 pb-24">
          <Sparkles
            className="text-accent-yellow/25"
            size={120}
            strokeWidth={1}
            aria-hidden
          />
        </div>

        <Container
          className={cn(
            'pointer-events-auto relative z-10 flex h-[4.5rem] shrink-0 items-center justify-between',
            'border-b border-[rgba(43,88,118,0.15)]',
          )}
        >
          <BrandLogo />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink"
            aria-label="Fermer le menu"
            onClick={onClose}
          >
            <X size={26} aria-hidden />
          </button>
        </Container>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col pointer-events-none">
          <Container className="pointer-events-auto shrink-0 pt-10">
            <nav className="flex flex-col gap-8" aria-label="Navigation principale (mobile)">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-2xl font-semibold text-ink"
                  onClick={onClose}
                >
                  {item.label}
                  {item.mobileSuffixIcon === 'sparkles' ? (
                    <Sparkles className="text-accent-yellow" size={22} strokeWidth={2} aria-hidden />
                  ) : null}
                </a>
              ))}
            </nav>
          </Container>

          <div className="min-h-[3rem] flex-1 pointer-events-none" aria-hidden />

          <Container className="pointer-events-auto relative z-10 flex shrink-0 justify-center pb-10 pt-4">
            <a
              href="#contact"
              className="rounded-full bg-accent-orange px-8 py-3.5 text-center text-base font-medium text-white shadow-header transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
              onClick={onClose}
            >
              {SITE_CONFIG.headerCta}
            </a>
          </Container>
        </div>
      </div>
    </div>,
    document.body,
  )
}
