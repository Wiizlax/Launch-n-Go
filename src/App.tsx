import { lazy, Suspense } from 'react'

import {
  ContactSection,
  Footer,
  Header,
  HeroSection,
  ProcessSection,
  ServicesSection,
} from '@/components/sections'

const PortfolioSection = lazy(async () => {
  const m = await import('@/components/sections/PortfolioSection')
  return { default: m.PortfolioSection }
})

const TestimonialsSection = lazy(async () => {
  const m = await import('@/components/sections/TestimonialsSection')
  return { default: m.TestimonialsSection }
})

function SectionSkeleton() {
  return (
    <div
      className="bg-section-warm py-12 md:py-16"
      aria-hidden
    >
      <div className="mx-auto max-w-content px-4 md:px-6 lg:px-8">
        <div className="h-64 animate-pulse rounded-card bg-white/60" />
      </div>
    </div>
  )
}

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <Suspense fallback={<SectionSkeleton />}>
          <PortfolioSection />
        </Suspense>
        <ProcessSection />
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
