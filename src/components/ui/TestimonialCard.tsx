import { Star } from 'lucide-react'

import type { Testimonial } from '@/types'
import { cn } from '@/utils/cn'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        'flex h-full min-h-[280px] w-[min(100vw-2rem,440px)] max-w-[440px] shrink-0 flex-col rounded-card border-2 border-[rgba(43,88,118,0.15)] bg-white p-8 shadow-card sm:w-[420px] md:w-[440px]',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.avatarAlt}
          width={64}
          height={64}
          className="h-16 w-16 shrink-0 rounded-full border-2 border-accent-blue object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="min-w-0">
          <h3 className="text-lg font-medium text-ink">{testimonial.name}</h3>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-4 flex gap-1" aria-label={`Note : ${testimonial.rating} sur 5`}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="h-5 w-5 shrink-0 fill-accent-yellow text-accent-yellow" aria-hidden />
        ))}
      </p>
      <blockquote className="mt-4 min-h-0 flex-1 break-words text-pretty text-base leading-[26px] text-muted">
        <span aria-hidden="true">«&nbsp;</span>
        {testimonial.content}
        <span aria-hidden="true">&nbsp;»</span>
      </blockquote>
    </article>
  )
}
