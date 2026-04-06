import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket } from 'lucide-react'

import { Container, buttonLinkClass } from '@/components/ui'
import { HeroTabletMockup } from '@/components/sections/HeroTabletMockup'
import { cn } from '@/utils/cn'
import { SITE_CONFIG, STATS } from '@/constants'

const statColor: Record<string, string> = {
  blue: 'text-accent-blue',
  coral: 'text-accent-orange',
  yellow: 'text-accent-yellow',
}

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label="Présentation"
      className="relative overflow-hidden bg-gradient-to-br from-cream via-section-warm to-cream pb-10 pt-8 md:pb-14 md:pt-10"
    >
      <div className="pointer-events-none absolute right-6 top-20 text-accent-yellow/30 md:right-10 md:top-20">
        <Sparkles size={64} strokeWidth={1.25} aria-hidden />
      </div>
      <div className="pointer-events-none absolute bottom-24 left-6 text-accent-blue/10 md:bottom-32">
        <Rocket size={80} strokeWidth={1} aria-hidden />
      </div>
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.2)] px-4 py-2 text-sm text-ink"
        >
          <Sparkles size={18} className="text-accent-yellow" aria-hidden />
          {SITE_CONFIG.tagline}
        </motion.div>
        <motion.h1
          className="mt-8 max-w-4xl text-4xl font-medium leading-tight text-ink md:text-6xl md:leading-[1.05] lg:text-[72px] lg:leading-[72px]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.08, duration: reduce ? 0 : 0.5 }}
        >
          <span className="block md:inline">{SITE_CONFIG.heroTitleLine1}</span>{' '}
          <span className="text-accent-blue">{SITE_CONFIG.heroTitleHighlight}</span>{' '}
          <span className="block md:inline">
            {SITE_CONFIG.heroTitleMid}{' '}
            <span className="relative inline-block">
              {SITE_CONFIG.heroTitleEnd}
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 -rotate-1 rounded-sm bg-[rgba(251,191,36,0.4)]"
                aria-hidden
              />
            </span>
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-7 text-muted md:text-xl md:leading-7"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.15, duration: reduce ? 0 : 0.45 }}
        >
          {SITE_CONFIG.heroSubtitle}
        </motion.p>
        <motion.div
          className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.22, duration: reduce ? 0 : 0.45 }}
        >
          <a
            href="#contact"
            className={buttonLinkClass('primary', 'lg', 'w-full sm:w-auto')}
            aria-label="Aller à la section contact pour démarrer votre projet"
          >
            {SITE_CONFIG.ctaPrimary}
            <ArrowRight size={20} aria-hidden />
          </a>
          <a
            href="#portfolio"
            className={cn(
              'inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent-blue bg-white px-8 py-4 text-base font-medium text-accent-blue transition hover:bg-accent-blue hover:text-white sm:w-auto'
            )}
            aria-label="Aller à la section nos réalisations"
          >
            {SITE_CONFIG.ctaSecondary}
          </a>
        </motion.div>
        <HeroTabletMockup />
        <div className="mt-12 w-full max-w-3xl border-t border-[rgba(43,88,118,0.075)] pt-6 md:max-w-4xl lg:max-w-3xl">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center gap-2 text-center">
                <span
                  className={cn(
                    'text-3xl font-normal md:text-4xl',
                    statColor[stat.color] ?? 'text-ink'
                  )}
                >
                  {stat.display}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
