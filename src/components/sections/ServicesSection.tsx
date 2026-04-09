import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import { Container, SectionHeader, ServiceCard, ServiceLottieModal } from '@/components/ui'
import { useFadeUpVariants, useStaggerSafe } from '@/hooks'
import { SECTION_COPY, SERVICES } from '@/constants'
import type { Service } from '@/types'

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const fadeUp = useFadeUpVariants()
  const stagger = useStaggerSafe()

  const handleDismissModal = useCallback(() => {
    setSelectedService(null)
  }, [])

  return (
    <section
      id="services"
      aria-label="Nos services"
      className="bg-cream py-12 md:py-16"
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
              titleBefore={SECTION_COPY.services.titleBefore}
              accent={SECTION_COPY.services.accent}
              accentClassName={SECTION_COPY.services.accentClass}
              subtitle={SECTION_COPY.services.subtitle}
            />
          </motion.div>
          <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={fadeUp} className="h-full min-h-0">
                <ServiceCard
                  service={service}
                  className="h-full"
                  isModalOpen={selectedService?.id === service.id}
                  onOpen={() => setSelectedService(service)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
      <ServiceLottieModal service={selectedService} onDismiss={handleDismissModal} />
    </section>
  )
}
