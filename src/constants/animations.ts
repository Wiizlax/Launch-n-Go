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

// ── Pile portfolio (cartes 3D) ───────────────────────────────────────────────

export const DECK_STACK_TRANSITION: Transition = {
  duration: 0.62,
  ease: [0.22, 1, 0.36, 1],
}

export const DECK_STACK_TRANSITION_REDUCED: Transition = {
  duration: 0.2,
  ease: [0.25, 0.46, 0.45, 0.94],
}

/**
 * Transition — feuillet : lever, rotation, passage derrière (zIndex sur le wrapper),
 * puis atterrissage. 6 keyframes — times alignés avec DECK_FLIP_WRAPPER_Z.
 */
export const DECK_FLIP_TRANSITION: Transition = {
  duration: 1.22,
  times: [0, 0.12, 0.34, 0.52, 0.76, 1],
  ease: [0.22, 1, 0.36, 1],
}

/** z-index du wrapper carte : au-dessus du tas pendant le lift, puis sous mi/fond (20/10) */
export const DECK_FLIP_WRAPPER_Z = [30, 56, 56, 6, 4, 0] as const

export const DECK_FLIP_KEYFRAMES = {
  rotateY: [0, -12, -48, -102, -168, -178],
  x: [0, 6, 14, 10, -6, 0],
  y: [0, -14, -22, -32, -50, -58],
  scale: [1, 1.03, 1.01, 0.96, 0.87, 0.82],
  opacity: [1, 1, 1, 1, 0.4, 0],
  z: [0, 64, 92, 36, -28, -12],
} as const

export const DECK_STACK_FRONT = {
  rotateY: 0,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  z: 0,
  zIndex: 30,
} as const

export const DECK_STACK_MID = {
  rotateY: 0,
  x: 0,
  y: -28,
  scale: 0.94,
  opacity: 0.99,
  z: 0,
  zIndex: 20,
} as const

export const DECK_STACK_BACK = {
  rotateY: 0,
  x: 0,
  y: -52,
  scale: 0.88,
  opacity: 0.88,
  z: 0,
  zIndex: 10,
} as const

export const DECK_STACK_HIDDEN = {
  rotateY: 0,
  x: 0,
  y: -58,
  scale: 0.84,
  opacity: 0,
  z: 0,
  zIndex: 0,
} as const

