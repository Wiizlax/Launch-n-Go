import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

import {
  HERO_TABLET_DEVICE_VARIANTS,
  HERO_TABLET_IMAGE_ALT,
  HERO_TABLET_IMAGE_HEIGHT,
  HERO_TABLET_IMAGE_SRC,
  HERO_TABLET_IMAGE_WIDTH,
  HERO_TABLET_REDUCED_VARIANTS,
  HERO_TABLET_SCREEN_REVEAL_VARIANTS,
} from '@/constants'
import { cn } from '@/utils/cn'

const viewport = { once: true, amount: 0.2 }

interface HeroTabletMockupProps {
  className?: string
}

export function HeroTabletMockup({ className }: HeroTabletMockupProps) {
  const reduce = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rootRef, viewport)

  const wrapperClass = cn(
    'mx-auto mt-14 w-full max-w-xl px-2 sm:max-w-2xl md:max-w-3xl',
    className,
  )

  const img = (
    <img
      src={HERO_TABLET_IMAGE_SRC}
      alt={HERO_TABLET_IMAGE_ALT}
      width={HERO_TABLET_IMAGE_WIDTH}
      height={HERO_TABLET_IMAGE_HEIGHT}
      className="h-auto w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  )

  if (reduce) {
    return (
      <div ref={rootRef} className={wrapperClass}>
        <motion.div
          variants={HERO_TABLET_REDUCED_VARIANTS}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="rounded-[1.75rem] bg-ink p-2.5 shadow-[0_32px_64px_-24px_rgba(26,35,50,0.45)] md:rounded-[2rem] md:p-3">
            <div className="overflow-hidden rounded-xl bg-black md:rounded-2xl">{img}</div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className={cn(wrapperClass, '[perspective:1200px]')}>
      <motion.div
        className="will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
        variants={HERO_TABLET_DEVICE_VARIANTS}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="rounded-[1.75rem] bg-ink p-2.5 shadow-[0_32px_64px_-24px_rgba(26,35,50,0.45)] md:rounded-[2rem] md:p-3">
          <motion.div
            className="overflow-hidden rounded-xl bg-black will-change-transform md:rounded-2xl"
            variants={HERO_TABLET_SCREEN_REVEAL_VARIANTS}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img
              src={HERO_TABLET_IMAGE_SRC}
              alt={HERO_TABLET_IMAGE_ALT}
              width={HERO_TABLET_IMAGE_WIDTH}
              height={HERO_TABLET_IMAGE_HEIGHT}
              className="h-auto w-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
