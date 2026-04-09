import type { KeyboardEvent } from 'react'

import { motion } from 'framer-motion'

import { PROJECTS } from '@/constants'
import { PORTFOLIO_STACK_COPY } from '@/constants/portfolio'
import {
  DECK_FLIP_KEYFRAMES,
  DECK_FLIP_TRANSITION,
  DECK_FLIP_WRAPPER_Z,
  DECK_STACK_BACK,
  DECK_STACK_FRONT,
  DECK_STACK_HIDDEN,
  DECK_STACK_MID,
  DECK_STACK_TRANSITION,
  DECK_STACK_TRANSITION_REDUCED,
} from '@/constants/animations'
import { useStackedProjectDeck } from '@/hooks'
import { cn } from '@/utils/cn'
import { formatProjectMetadataLine, getProjectStackRole } from '@/utils/projectStack'

import { StackedProjectCard } from './StackedProjectCard'

function stackMotionForRole(role: number) {
  if (role === 0) return { ...DECK_STACK_FRONT }
  if (role === 1) return { ...DECK_STACK_MID }
  if (role === 2) return { ...DECK_STACK_BACK }
  return { ...DECK_STACK_HIDDEN }
}

function wrapperZForRole(role: number): number {
  if (role === 0) return DECK_STACK_FRONT.zIndex
  if (role === 1) return DECK_STACK_MID.zIndex
  if (role === 2) return DECK_STACK_BACK.zIndex
  return DECK_STACK_HIDDEN.zIndex
}

export function StackedProjectDeck() {
  const n = PROJECTS.length
  const { frontIndex, isFlipping, reduceMotion, requestAdvance, completeFlip } = useStackedProjectDeck(n)
  const frontProject = PROJECTS[frontIndex]
  const nextDisabled = n <= 1 || isFlipping

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight') return
    e.preventDefault()
    if (!nextDisabled) requestAdvance()
  }

  return (
    <div
      role="group"
      aria-label={PORTFOLIO_STACK_COPY.deckGroupLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="rounded-card outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {PORTFOLIO_STACK_COPY.projectShownLivePrefix} {frontProject?.title}
      </p>
      <div
        className="relative mx-auto w-full max-w-4xl overflow-visible px-3 sm:px-5 md:px-8"
        style={
          reduceMotion
            ? undefined
            : { perspective: 1200, perspectiveOrigin: '50% 18%' }
        }
      >
        <div className="relative min-h-[37rem] w-full overflow-visible pb-8 pt-2 md:min-h-[26rem] md:pb-6">
          {PROJECTS.map((project, i) => {
            const role = getProjectStackRole(i, frontIndex, n)
            const isExitTarget = isFlipping && i === frontIndex
            const isFront = role === 0

            const animate = reduceMotion
              ? stackMotionForRole(role)
              : isExitTarget
                ? { ...DECK_FLIP_KEYFRAMES }
                : stackMotionForRole(role)

            const transition = reduceMotion
              ? DECK_STACK_TRANSITION_REDUCED
              : isExitTarget
                ? DECK_FLIP_TRANSITION
                : DECK_STACK_TRANSITION

            const wrapperAnimate =
              reduceMotion || !isExitTarget
                ? { zIndex: wrapperZForRole(role) }
                : { zIndex: [...DECK_FLIP_WRAPPER_Z] }

            const wrapperTransition = reduceMotion
              ? DECK_STACK_TRANSITION_REDUCED
              : isExitTarget
                ? DECK_FLIP_TRANSITION
                : DECK_STACK_TRANSITION

            const handleAnimComplete = () => {
              if (isFlipping && i === frontIndex) {
                completeFlip()
              }
            }

            return (
              <motion.div
                key={project.id}
                layout={false}
                initial={false}
                className={cn(
                  'absolute left-1/2 top-8 w-full max-w-3xl -translate-x-1/2',
                  role >= 3 && 'pointer-events-none'
                )}
                animate={wrapperAnimate}
                transition={wrapperTransition}
              >
                <motion.article
                  layout={false}
                  initial={false}
                  className="w-full"
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  aria-hidden={!isFront}
                  animate={animate}
                  transition={transition}
                  onAnimationComplete={handleAnimComplete}
                >
                  <StackedProjectCard
                    project={project}
                    displayIndex={i + 1}
                    metadataLine={formatProjectMetadataLine(project)}
                    isFront={isFront}
                    onNextClick={requestAdvance}
                    nextDisabled={nextDisabled}
                    isFlipping={isFlipping}
                  />
                </motion.article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
