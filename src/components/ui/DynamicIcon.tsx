import { icons } from 'lucide-react'

import { cn } from '@/utils/cn'

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export function DynamicIcon({ name, size = 24, className }: DynamicIconProps) {
  let IconComponent = icons[name as keyof typeof icons]

  if (!IconComponent && name === 'Code2') {
    IconComponent = icons.Code
  }
  if (!IconComponent && name === 'BarChart3') {
    IconComponent = icons.ChartColumn
  }
  if (!IconComponent && name === 'BarChart2') {
    IconComponent = icons.ChartNoAxesColumn
  }

  if (!IconComponent) {
    return null
  }

  return <IconComponent size={size} className={cn(className)} aria-hidden="true" />
}
