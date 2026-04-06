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

/** Tablette hero — entrée 3D du device (tween long, apparition progressive) */
export const HERO_TABLET_DEVICE_TRANSITION: Transition = {
  duration: 1.4,
  ease: [0.22, 1, 0.36, 1],
}

export const HERO_TABLET_DEVICE_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 28,
    rotateY: -14,
    scale: 0.86,
    z: -64,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
    transition: HERO_TABLET_DEVICE_TRANSITION,
  },
}

const HERO_TABLET_SCREEN_REVEAL_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

/** Tablette hero — révélation écran 2D après le device (fade, léger scale/y, clip) */
export const HERO_TABLET_SCREEN_REVEAL_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 14,
    clipPath: 'inset(6% 6% 6% 6%)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      delay: 0.58,
      duration: 0.7,
      ease: HERO_TABLET_SCREEN_REVEAL_EASE,
    },
  },
}

/** Tablette hero — `prefers-reduced-motion` : pas de 3D */
export const HERO_TABLET_REDUCED_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

