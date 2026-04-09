export type ServiceIconTone = 'blue' | 'coral' | 'yellow'

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  /** Chemin public vers le fichier `.lottie` (ex. `/lottie/coding.lottie`). */
  lottieSrc: string
  /** Texte détaillé affiché dans le modal du service. */
  modalDetail: string
  tone: ServiceIconTone
}
