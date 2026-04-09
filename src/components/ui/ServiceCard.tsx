import { motion, useReducedMotion } from 'framer-motion'

import { DynamicIcon } from './DynamicIcon'

import { SERVICE_LOTTIE_MODAL_ID } from '@/constants'
import { CARD_HOVER_TRANSITION } from '@/constants/animations'
import type { Service } from '@/types'
import { cn } from '@/utils/cn'

const toneStyles = {
  blue: 'bg-[rgba(43,88,118,0.1)] border-[rgba(43,88,118,0.2)] text-accent-blue',
  coral: 'bg-[rgba(232,93,64,0.1)] border-[rgba(232,93,64,0.2)] text-accent-orange',
  yellow: 'bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.2)] text-accent-yellow',
} as const

/** Couleur d’icône lisible sur le fond pastel du ton */
const iconToneClass = {
  blue: 'text-accent-blue',
  coral: 'text-accent-orange',
  yellow: 'text-accent-blue',
} as const

interface ServiceCardProps {
  service: Service
  className?: string
  onOpen: () => void
  isModalOpen?: boolean
}

export function ServiceCard({ service, className, onOpen, isModalOpen = false }: ServiceCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      transition={CARD_HOVER_TRANSITION}
      className={cn(
        'flex h-full w-full flex-col rounded-card border-2 border-[rgba(43,88,118,0.15)] bg-white p-8 text-left shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-9',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
        className
      )}
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-expanded={isModalOpen}
      aria-controls={SERVICE_LOTTIE_MODAL_ID}
    >
      <div
        className={cn(
          'flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-card border-2',
          toneStyles[service.tone]
        )}
      >
        <DynamicIcon
          name={service.icon}
          size={32}
          className={cn('shrink-0', iconToneClass[service.tone])}
        />
      </div>
      <h3 className="mt-6 text-xl font-medium text-ink md:text-2xl">{service.title}</h3>
      <p className="mt-2 flex-1 text-base leading-[26px] text-muted">{service.description}</p>
    </motion.button>
  )
}
