import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useId, useState } from 'react'

import { BrandLogo, Container } from '@/components/ui'
import { MobileNavOverlay } from '@/components/sections/MobileNavOverlay'
import { NAV_ITEMS, SITE_CONFIG } from '@/constants'

export function Header() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close])

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(43,88,118,0.15)] bg-cream/80 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between md:h-24 lg:h-28">
        <BrandLogo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent-orange px-6 py-2.5 text-base text-white shadow-header transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
          >
            {SITE_CONFIG.headerCta}
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </Container>
      {open ? <MobileNavOverlay panelId={panelId} onClose={close} /> : null}
    </header>
  )
}
