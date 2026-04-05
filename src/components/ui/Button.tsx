import { cn } from '@/utils/cn'

const variants = {
  primary:
    'bg-accent-orange text-white shadow-btn hover:brightness-95 focus-visible:ring-accent-orange',
  outline:
    'border-2 border-accent-blue bg-white text-accent-blue hover:bg-accent-blue hover:text-white',
  ghost: 'text-accent-blue hover:underline',
} as const

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-base rounded-full',
  lg: 'px-8 py-4 text-base rounded-full',
} as const

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
        variants[variant],
        sizes[size],
        (disabled || isLoading) && 'pointer-events-none opacity-60',
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? <span className="text-sm">…</span> : null}
      {children}
    </button>
  )
}

export function buttonLinkClass(
  variant: keyof typeof variants = 'primary',
  size: keyof typeof sizes = 'md',
  className?: string
) {
  return cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
    variants[variant],
    sizes[size],
    className
  )
}
