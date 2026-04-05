import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useId, useState } from 'react'

import { NAV_ITEMS, SITE_CONFIG } from '@/constants'
import { BrandLogo, Container } from '@/components/ui'
import { cn } from '@/utils/cn'

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
      <Container className="flex h-[4.25rem] items-center justify-between md:h-[5.75rem] lg:h-24">
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
      {open ? (
        <div
          id={panelId}
          className="fixed inset-0 top-[4.25rem] z-40 flex flex-col gap-4 bg-cream/98 px-6 py-8 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn('text-lg text-ink/90')}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 rounded-full bg-accent-orange px-6 py-3 text-center text-white shadow-header"
            onClick={close}
          >
            {SITE_CONFIG.headerCta}
          </a>
        </div>
      ) : null}
    </header>
  )
}
