import { ArrowRight } from 'lucide-react'

import type { Project } from '@/types'
import { PORTFOLIO_STACK_COPY } from '@/constants/portfolio'
import { cn } from '@/utils/cn'

interface StackedProjectCardProps {
  project: Project
  displayIndex: number
  metadataLine: string
  isFront: boolean
  onNextClick: () => void
  nextDisabled: boolean
  isFlipping: boolean
}

export function StackedProjectCard({
  project,
  displayIndex,
  metadataLine,
  isFront,
  onNextClick,
  nextDisabled,
  isFlipping,
}: StackedProjectCardProps) {
  const badge = String(displayIndex).padStart(2, '0')
  const badgeClassName =
    'inline-flex w-fit rounded-full border border-accent-blue px-3 py-1 text-sm font-medium text-ink'

  return (
    <div
      className={cn(
        'flex h-full min-h-[320px] flex-col gap-8 rounded-card border-2 border-border-card bg-white p-6 shadow-card md:min-h-[360px] md:flex-row md:gap-10 md:p-8'
      )}
    >
      <div className="order-2 flex min-h-0 min-w-0 flex-1 flex-col md:order-1 md:self-stretch">
        <span className={cn(badgeClassName, 'hidden md:inline-flex')}>{badge}</span>
        <p className="mt-0 text-xs font-medium uppercase tracking-widest text-muted md:mt-4">{metadataLine}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.2)] px-3 py-1 text-sm text-accent-yellow"
            >
              {tag}
            </li>
          ))}
        </ul>
        {isFront ? (
          <div className="mt-auto shrink-0 pt-6 md:pt-8">
            <button
              type="button"
              onClick={onNextClick}
              disabled={nextDisabled}
              aria-label={PORTFOLIO_STACK_COPY.nextProjectAria}
              aria-busy={isFlipping}
              className={cn(
                'inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-blue px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors',
                'hover:bg-accent-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
                nextDisabled && 'cursor-not-allowed opacity-60'
              )}
            >
              {PORTFOLIO_STACK_COPY.nextProject}
              <ArrowRight className="size-3.5 shrink-0" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
      <div className="order-1 flex w-full shrink-0 flex-col items-start gap-3 md:order-2 md:w-[42%] md:gap-0">
        <span className={cn(badgeClassName, 'md:hidden')}>{badge}</span>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-auto md:min-h-[260px] lg:min-h-[300px]">
          <img
            src={project.image}
            alt={isFront ? project.imageAlt : ''}
            width={800}
            height={450}
            className="h-full w-full object-cover"
            loading={isFront ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={isFront ? 'high' : 'low'}
          />
        </div>
      </div>
    </div>
  )
}
