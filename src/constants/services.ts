import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    icon: 'Code2',
    title: 'Développement Web',
    description:
      'Applications web modernes avec React, Next.js et les dernières technologies',
    tone: 'blue',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Applications Mobiles',
    description: 'Apps natives et cross-platform pour iOS et Android',
    tone: 'coral',
  },
  {
    id: 'ui-ux',
    icon: 'Palette',
    title: 'Design UI/UX',
    description: 'Interfaces intuitives et designs sur mesure qui convertissent',
    tone: 'yellow',
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description: 'Solutions de vente en ligne performantes et sécurisées',
    tone: 'blue',
  },
  {
    id: 'mvp',
    icon: 'Rocket',
    title: 'MVP & Prototypes',
    description: 'Lancez rapidement votre produit avec un MVP fonctionnel',
    tone: 'coral',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Dashboards & Analytics',
    description: 'Tableaux de bord personnalisés pour visualiser vos données',
    tone: 'yellow',
  },
]
