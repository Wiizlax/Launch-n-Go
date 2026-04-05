import type { Transition, Variants } from 'framer-motion'

/** Hover carte — spring (utiliser avec useReducedMotion pour désactiver le scale) */
export const CARD_HOVER_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 22,
}

export const TRANSITION_EASE: Transition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_EASE,
  },
}

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

