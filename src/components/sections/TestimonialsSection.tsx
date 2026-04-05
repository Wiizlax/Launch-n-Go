import { motion, useReducedMotion } from 'framer-motion'

import { Container, SectionHeader, TestimonialCard } from '@/components/ui'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { SECTION_COPY, TESTIMONIALS } from '@/constants'

const MARQUEE_DURATION_SEC = 55

export function TestimonialsSection() {
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()
  const reduceMotion = useReducedMotion()

  const loopItems = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section
      id="testimonials"
      aria-label="Témoignages clients"
      className="bg-section-warm py-12 md:py-16"
    >
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              titleBefore={SECTION_COPY.testimonials.titleBefore}
              accent={SECTION_COPY.testimonials.accent}
              accentClassName={SECTION_COPY.testimonials.accentClass}
              subtitle={SECTION_COPY.testimonials.subtitle}
            />
          </motion.div>
        </motion.div>
      </Container>

      <div className="mt-8 w-full overflow-hidden md:mt-10">
        {reduceMotion ? (
          <div
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pb-2 [scrollbar-gutter:stable] md:px-6"
            role="list"
            aria-label="Liste des témoignages, faire défiler horizontalement"
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="snap-start" role="listitem">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max gap-8 px-4 md:px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: MARQUEE_DURATION_SEC,
              ease: 'linear',
            }}
            role="list"
            aria-label="Témoignages clients"
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                role={index < TESTIMONIALS.length ? 'listitem' : 'presentation'}
                className="shrink-0"
                aria-hidden={index >= TESTIMONIALS.length ? true : undefined}
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
