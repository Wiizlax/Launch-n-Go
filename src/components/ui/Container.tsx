import { cn } from '@/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 md:px-8 lg:px-14', className)}>
      {children}
    </div>
  )
}
