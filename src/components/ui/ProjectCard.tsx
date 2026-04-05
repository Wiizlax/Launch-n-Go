import { motion, useReducedMotion } from 'framer-motion'

import type { Project } from '@/types'
import { CARD_HOVER_TRANSITION } from '@/constants/animations'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      transition={CARD_HOVER_TRANSITION}
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-card border-2 border-[rgba(43,88,118,0.15)] bg-white p-0.5 shadow-card transition-shadow duration-300 hover:shadow-card-hover',
        className
      )}
    >
      <div className="relative aspect-[358/202] w-full overflow-hidden rounded-t-[14px]">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={450}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent-orange px-3 py-1 text-sm text-white">
          {project.categoryLabel}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col px-6 pb-6 pt-6">
        <h3 className="text-lg font-medium text-ink md:text-xl">{project.title}</h3>
        <p className="mt-2 text-base leading-[26px] text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[rgba(251,191,36,0.3)] bg-[rgba(251,191,36,0.2)] px-3 py-1 text-sm text-accent-yellow"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
