import { motion, useReducedMotion } from 'framer-motion'

import type { Service } from '@/types'
import { CARD_HOVER_TRANSITION } from '@/constants/animations'
import { cn } from '@/utils/cn'

import { DynamicIcon } from './DynamicIcon'

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
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      transition={CARD_HOVER_TRANSITION}
      className={cn(
        'flex h-full flex-col rounded-card border-2 border-[rgba(43,88,118,0.15)] bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover md:p-9',
        className
      )}
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
    </motion.article>
  )
}
