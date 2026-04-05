export type NavItemMobileSuffixIcon = 'sparkles'

export interface NavItem {
  label: string
  href: string
  external?: boolean
  /** Icône affichée après le libellé dans le menu mobile uniquement */
  mobileSuffixIcon?: NavItemMobileSuffixIcon
}
