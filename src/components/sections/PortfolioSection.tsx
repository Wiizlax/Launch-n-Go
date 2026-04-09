import { motion } from 'framer-motion'

import { Container, SectionHeader, StackedProjectDeck } from '@/components/ui'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { SECTION_COPY } from '@/constants'

export function PortfolioSection() {
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()

  return (
    <section
      id="portfolio"
      aria-label="Nos réalisations"
      className="bg-section-warm pt-12 pb-16 md:py-16"
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
              titleBefore={SECTION_COPY.portfolio.titleBefore}
              accent={SECTION_COPY.portfolio.accent}
              accentClassName={SECTION_COPY.portfolio.accentClass}
              subtitle={SECTION_COPY.portfolio.subtitle}
            />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 mb-8 md:mb-0 md:mt-10">
            <StackedProjectDeck />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
