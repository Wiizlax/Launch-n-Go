import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  titleBefore: string
  accent: string
  accentClassName: string
  titleAfter?: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  titleBefore,
  accent,
  accentClassName,
  titleAfter,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      <h2 className="text-3xl font-medium leading-tight text-ink md:text-5xl md:leading-none">
        {titleBefore}
        <span className={cn('font-medium', accentClassName)}>{accent}</span>
        {titleAfter}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-muted md:mt-4 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}
