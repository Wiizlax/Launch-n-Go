import { SITE_CONFIG } from '@/constants'
import { cn } from '@/utils/cn'

interface BrandLogoProps {
  className?: string
  /** Surcharge des classes Tailwind sur l’image (ex. logo plus petit dans le footer). */
  imageClassName?: string
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <a href="#hero" className={className} aria-label={`${SITE_CONFIG.name}, accueil`}>
      <img
        src="/logoo.png"
        alt="Launch'n Go"
        width={300}
        height={90}
        className={cn(
          'h-16 w-auto sm:h-20 md:h-24 lg:h-28',
          imageClassName,
        )}
        decoding="async"
      />
    </a>
  )
}
