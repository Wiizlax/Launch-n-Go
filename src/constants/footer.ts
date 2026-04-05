import type { FooterColumn, SocialLink } from '@/types'

export const FOOTER_SOCIALS: SocialLink[] = [
  { id: 'github', href: 'https://github.com/Wiizlax', ariaLabel: "Tom Simonis sur GitHub" },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/tom-simonis/',
    ariaLabel: 'Tom Simonis sur LinkedIn',
  },
  {
    id: 'email',
    href: 'mailto:tomsimonis71@gmail.com',
    ariaLabel: "Envoyer un email à Tom Simonis",
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: 'services',
    title: 'Services',
    links: [
      { label: 'Développement Web', href: '#services' },
      { label: 'Applications Mobiles', href: '#services' },
      { label: 'Design UI/UX', href: '#services' },
      { label: 'E-commerce', href: '#services' },
    ],
  },
  {
    id: 'company',
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#' },
      { label: 'Nos réalisations', href: '#portfolio' },
      { label: 'Blog', href: '#' },
      { label: 'Carrières', href: '#' },
    ],
  },
  {
    id: 'resources',
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export const FOOTER_LEGAL = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
] as const
