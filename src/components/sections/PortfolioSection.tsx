import { motion } from 'framer-motion'

import { Container, ProjectCard, SectionHeader } from '@/components/ui'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { PROJECTS, SECTION_COPY } from '@/constants'

export function PortfolioSection() {
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()

  return (
    <section
      id="portfolio"
      aria-label="Nos réalisations"
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
              titleBefore={SECTION_COPY.portfolio.titleBefore}
              accent={SECTION_COPY.portfolio.accent}
              accentClassName={SECTION_COPY.portfolio.accentClass}
              subtitle={SECTION_COPY.portfolio.subtitle}
            />
          </motion.div>
          <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={fadeUp} className="h-full min-h-0">
                <ProjectCard project={project} className="h-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
