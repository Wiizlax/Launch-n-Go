import { useReducedMotion, type Variants } from 'framer-motion'

import { FADE_UP } from '@/constants/animations'

export function useFadeUpVariants(): Variants {
  const reduce = useReducedMotion()
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }
  return FADE_UP
}

export function useStaggerSafe(): Variants {
  const reduce = useReducedMotion()
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.2 },
      },
    }
  }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  }
}
