import { useCallback, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useStackedProjectDeck(projectCount: number) {
  const [frontIndex, setFrontIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const reduceMotion = useReducedMotion()
  const flipCompleteGuard = useRef(false)

  const requestAdvance = useCallback(() => {
    if (projectCount <= 1) return
    if (isFlipping) return
    if (reduceMotion) {
      setFrontIndex((i) => (i + 1) % projectCount)
      return
    }
    flipCompleteGuard.current = false
    setIsFlipping(true)
  }, [projectCount, isFlipping, reduceMotion])

  const completeFlip = useCallback(() => {
    if (flipCompleteGuard.current) return
    flipCompleteGuard.current = true
    setFrontIndex((i) => (i + 1) % projectCount)
    setIsFlipping(false)
    queueMicrotask(() => {
      flipCompleteGuard.current = false
    })
  }, [projectCount])

  return {
    frontIndex,
    isFlipping,
    reduceMotion: Boolean(reduceMotion),
    requestAdvance,
    completeFlip,
  }
}
