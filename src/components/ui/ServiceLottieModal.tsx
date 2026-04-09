import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, type PointerEvent } from 'react'

import { SERVICE_LOTTIE_MODAL_ID } from '@/constants'
import type { Service } from '@/types'
import { cn } from '@/utils/cn'

/** Pastels alignés sur les cartes services (mêmes bases rgba que ServiceCard). */
const toneModalHeader = {
  blue: 'border-b border-[rgba(43,88,118,0.18)] bg-[rgba(43,88,118,0.08)] text-ink',
  coral: 'border-b border-[rgba(232,93,64,0.2)] bg-[rgba(232,93,64,0.08)] text-ink',
  yellow: 'border-b border-[rgba(251,191,36,0.35)] bg-[rgba(251,191,36,0.12)] text-ink',
} as const

const toneTitle = {
  blue: 'text-accent-blue',
  coral: 'text-accent-orange',
  yellow: 'text-accent-blue',
} as const

const toneCloseButton = {
  blue: 'text-muted hover:bg-[rgba(43,88,118,0.12)] hover:text-ink focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  coral:
    'text-muted hover:bg-[rgba(232,93,64,0.12)] hover:text-ink focus-visible:ring-accent-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  yellow:
    'text-muted hover:bg-[rgba(251,191,36,0.22)] hover:text-ink focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white',
} as const

const toneFooterButton = {
  blue: 'border-2 border-[rgba(43,88,118,0.22)] bg-[rgba(43,88,118,0.1)] text-accent-blue hover:bg-[rgba(43,88,118,0.14)] focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  coral:
    'border-2 border-[rgba(232,93,64,0.24)] bg-[rgba(232,93,64,0.1)] text-accent-orange hover:bg-[rgba(232,93,64,0.14)] focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  yellow:
    'border-2 border-[rgba(251,191,36,0.45)] bg-[rgba(251,191,36,0.18)] text-ink hover:bg-[rgba(251,191,36,0.26)] focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white',
} as const

interface ServiceLottieModalProps {
  service: Service | null
  onDismiss: () => void
}

export function ServiceLottieModal({ service, onDismiss }: ServiceLottieModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const reduceMotion = useReducedMotion()
  const reactTitleId = useId()
  const titleId = `${SERVICE_LOTTIE_MODAL_ID}-${reactTitleId}`

  const handleCloseEvent = useCallback(() => {
    onDismiss()
  }, [onDismiss])

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (service) {
      el.showModal()
    } else {
      el.close()
    }
  }, [service])

  const handleBackdropPointerDown = useCallback(
    (event: PointerEvent<HTMLDialogElement>) => {
      if (event.target === dialogRef.current) {
        dialogRef.current?.close()
      }
    },
    []
  )

  const handleCloseClick = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      id={SERVICE_LOTTIE_MODAL_ID}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 m-0 max-h-[min(90dvh,900px)] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2',
        'overflow-hidden p-0',
        'rounded-card border-2 border-solid border-border-card bg-white shadow-card-hover',
        'backdrop:bg-ink/60 backdrop:backdrop-blur-sm',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2'
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClose={handleCloseEvent}
      onPointerDown={handleBackdropPointerDown}
    >
      {service ? (
        <div className="flex max-h-[min(90dvh,900px)] flex-col overflow-hidden rounded-card bg-white">
          <header
            className={cn(
              'flex shrink-0 items-start justify-between gap-4 rounded-t-card px-6 py-5 md:px-8 md:py-6',
              toneModalHeader[service.tone]
            )}
          >
            <h2
              id={titleId}
              className={cn(
                'min-w-0 flex-1 pr-2 font-sans text-xl font-semibold leading-tight md:text-2xl',
                toneTitle[service.tone]
              )}
            >
              {service.title}
            </h2>
            <button
              type="button"
              className={cn(
                '-m-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors',
                'focus-visible:outline-none focus-visible:ring-2',
                toneCloseButton[service.tone]
              )}
              aria-label="Fermer la fenêtre du service"
              onClick={handleCloseClick}
            >
              <X size={24} aria-hidden="true" strokeWidth={2.25} />
            </button>
          </header>

          <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-white">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-6 md:px-8 md:pb-8 md:pt-8">
              <div
                className={cn(
                  'grid gap-8',
                  'md:grid-cols-[minmax(0,1fr)_minmax(0,260px)] md:items-start'
                )}
              >
                <p className="max-w-prose text-base leading-relaxed text-muted">
                  {service.modalDetail}
                </p>

                <div
                  className={cn(
                    'flex h-52 w-full items-center justify-center rounded-card border border-border-card',
                    'bg-white p-4 shadow-card md:h-60'
                  )}
                  aria-hidden="true"
                >
                  <DotLottieReact
                    key={service.id}
                    src={service.lottieSrc}
                    loop={reduceMotion !== true}
                    autoplay={reduceMotion !== true}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-stretch md:justify-start">
                <button
                  type="button"
                  className={cn(
                    'w-full rounded-full px-8 py-3 text-center text-base font-medium transition-all md:w-auto',
                    'focus-visible:outline-none',
                    toneFooterButton[service.tone]
                  )}
                  onClick={handleCloseClick}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
