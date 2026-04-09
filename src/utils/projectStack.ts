import type { Project } from '@/types'

/** Rôle dans la pile : 0 = devant … ≥3 = masqué */
export function getProjectStackRole(
  projectIndex: number,
  frontIndex: number,
  total: number
): number {
  return (projectIndex - frontIndex + total) % total
}

/** Ligne type « 2024 • E-commerce • React • Stripe » pour la carte projet */
export function formatProjectMetadataLine(project: Project): string {
  const parts: string[] = []
  if (project.year) parts.push(project.year)
  parts.push(project.categoryLabel.toUpperCase())
  for (const tag of project.tags) {
    parts.push(tag.toUpperCase())
  }
  return parts.join(' • ')
}
