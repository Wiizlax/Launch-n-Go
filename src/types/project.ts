export interface Project {
  id: string
  /** Année affichée dans la ligne métadonnées (optionnel) */
  year?: string
  categoryLabel: string
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
}
