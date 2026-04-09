import { motion, useReducedMotion } from 'framer-motion'

import { Container, DynamicIcon, SectionHeader } from '@/components/ui'
import { CARD_HOVER_TRANSITION } from '@/constants/animations'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { cn } from '@/utils/cn'
import type { ProcessTone } from '@/types'
import { PROCESS_STEPS, SECTION_COPY } from '@/constants'

const boxTone: Record<ProcessTone, string> = {
  yellow: 'border-[rgba(251,191,36,0.35)] bg-[rgba(251,191,36,0.12)]',
  blue: 'border-[rgba(43,88,118,0.2)] bg-[rgba(43,88,118,0.08)]',
  coral: 'border-[rgba(232,93,64,0.25)] bg-[rgba(232,93,64,0.08)]',
}

const badgeTone: Record<ProcessTone, string> = {
  yellow: 'bg-accent-yellow text-ink',
  blue: 'bg-accent-blue text-white',
  coral: 'bg-accent-orange text-white',
}

/** Icône lisible sur le fond pastel de l’étape */
const stepIconClass: Record<ProcessTone, string> = {
  yellow: 'text-ink',
  blue: 'text-accent-blue',
  coral: 'text-accent-orange',
}

type ConnectorVariant = 'yellow' | 'coral' | 'blue'

const CONNECTOR_STROKE: Record<ConnectorVariant, string> = {
  yellow: '#FBBF24',
  coral: '#E85D40',
  blue: '#2B5876',
}

const CONNECTOR_SEQUENCE: ConnectorVariant[] = ['yellow', 'coral', 'blue']

function ProcessConnector({
  variant,
  connectorIndex,
}: {
  variant: ConnectorVariant
  connectorIndex: number
}) {
  const markerId = `process-connector-arrow-${connectorIndex}`
  const color = CONNECTOR_STROKE[variant]

  return (
    <div
      className="hidden h-32 min-w-[48px] flex-1 items-center px-1 md:flex"
      aria-hidden
    >
      <svg
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        className="h-10 w-full overflow-visible"
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="9"
            markerHeight="9"
            refX="8"
            refY="4.5"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0 0 L9 4.5 L0 9 Z" fill={color} />
          </marker>
        </defs>
        <path
          d="M2 22 Q 32 6 60 22 T 118 20"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      </svg>
    </div>
  )
}

export function ProcessSection() {
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="process"
      aria-label="Notre processus"
      className="bg-cream pt-14 pb-12 md:py-16"
    >
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleBefore={SECTION_COPY.process.titleBefore}
              accent={SECTION_COPY.process.accent}
              accentClassName={SECTION_COPY.process.accentClass}
              subtitle={SECTION_COPY.process.subtitle}
            />
          </motion.div>

          <div className="relative mt-10 hidden w-full items-start justify-center md:mt-12 md:flex">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.id} className="contents">
                <motion.div
                  variants={fadeUp}
                  className="flex min-w-0 max-w-[240px] flex-1 flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                    transition={CARD_HOVER_TRANSITION}
                    className={cn(
                      'relative flex h-32 w-32 shrink-0 items-center justify-center rounded-card border-2 shadow-card transition-shadow duration-300 hover:shadow-card-hover',
                      boxTone[step.tone]
                    )}
                  >
                    <DynamicIcon
                      name={step.icon}
                      size={40}
                      className={cn('shrink-0', stepIconClass[step.tone])}
                    />
                    <span
                      className={cn(
                        'absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium shadow-card',
                        badgeTone[step.numberColor]
                      )}
                    >
                      {step.step}
                    </span>
                  </motion.div>
                  <h3 className="mt-6 text-lg font-medium text-ink md:text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted md:text-base md:leading-[26px]">
                    {step.description}
                  </p>
                </motion.div>
                {index < PROCESS_STEPS.length - 1 ? (
                  <ProcessConnector
                    variant={CONNECTOR_SEQUENCE[index]!}
                    connectorIndex={index}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <ol className="mt-8 space-y-10 md:hidden">
            {PROCESS_STEPS.map((step) => (
              <motion.li key={step.id} variants={fadeUp} className="flex gap-6">
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  transition={CARD_HOVER_TRANSITION}
                  className={cn(
                    'relative z-10 flex h-32 w-32 shrink-0 items-center justify-center rounded-card border-2 shadow-card transition-shadow duration-300 hover:shadow-card-hover',
                    boxTone[step.tone]
                  )}
                >
                  <DynamicIcon
                    name={step.icon}
                    size={36}
                    className={cn('shrink-0', stepIconClass[step.tone])}
                  />
                  <span
                    className={cn(
                      'absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium shadow-card',
                      badgeTone[step.numberColor]
                    )}
                  >
                    {step.step}
                  </span>
                </motion.div>
                <div className="pt-2">
                  <h3 className="text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-base leading-[26px] text-muted">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </section>
  )
}
