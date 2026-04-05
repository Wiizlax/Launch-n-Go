export type ServiceIconTone = 'blue' | 'coral' | 'yellow'

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  tone: ServiceIconTone
}
