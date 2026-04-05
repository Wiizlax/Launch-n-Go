export type ProcessTone = 'yellow' | 'blue' | 'coral'

export interface ProcessStep {
  id: string
  step: string
  title: string
  description: string
  icon: string
  tone: ProcessTone
  numberColor: ProcessTone
}
