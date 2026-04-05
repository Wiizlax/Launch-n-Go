export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  id: string
  title: string
  links: FooterLink[]
}

export type SocialId = 'github' | 'linkedin' | 'email'

export interface SocialLink {
  id: SocialId
  href: string
  ariaLabel: string
}
