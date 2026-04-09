import type { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    icon: 'Code2',
    title: 'Développement Web',
    description:
      'Applications web modernes avec React, Next.js et les dernières technologies',
    lottieSrc: '/lottie/coding.lottie',
    modalDetail:
      'Nous concevons des applications web performantes et maintenables : architecture claire, composants réutilisables, accessibilité et SEO pris en compte dès le départ. Que ce soit un site vitrine, un outil métier ou une plateforme complexe, nous choisissons la stack adaptée (React, Next.js, TypeScript) pour livrer un produit fiable et évolutif.',
    tone: 'blue',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Applications Mobiles',
    description: 'Apps natives et cross-platform pour iOS et Android',
    lottieSrc: '/lottie/mobile.lottie',
    modalDetail:
      'Votre produit doit être disponible partout : nous développons des expériences mobiles cohérentes, du prototype à la publication sur les stores. Approche native ou cross-platform selon vos contraintes de délai, budget et fonctionnalités, avec une attention particulière aux performances et à l’ergonomie tactile.',
    tone: 'coral',
  },
  {
    id: 'ui-ux',
    icon: 'Palette',
    title: 'Design UI/UX',
    description: 'Interfaces intuitives et designs sur mesure qui convertissent',
    lottieSrc: '/lottie/designer.lottie',
    modalDetail:
      'Un bon design ne se voit pas seulement : il guide l’utilisateur et renforce la confiance. Nous travaillons sur l’information architecture, les parcours, les maquettes et un design system pour garantir une interface homogène. Objectif : clarté, accessibilité et conversion, sans sacrifier l’identité de votre marque.',
    tone: 'yellow',
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description: 'Solutions de vente en ligne performantes et sécurisées',
    lottieSrc: '/lottie/online-shop.lottie',
    modalDetail:
      'Nous mettons en place des boutiques en ligne solides : catalogue, panier, tunnel de paiement, gestion des commandes et conformité (données clients, paiement sécurisé). L’accent est mis sur la vitesse de chargement, la clarté des fiches produit et une expérience d’achat fluide sur mobile comme sur desktop.',
    tone: 'blue',
  },
  {
    id: 'mvp',
    icon: 'Rocket',
    title: 'MVP & Prototypes',
    description: 'Lancez rapidement votre produit avec un MVP fonctionnel',
    lottieSrc: '/lottie/social-media-marketing.lottie',
    modalDetail:
      'Valider une idée rapidement sans tout construire d’un coup : nous définissons avec vous le périmètre minimal utile, priorisons les fonctionnalités à fort impact et livrons un MVP testable par de vrais utilisateurs. Itérations courtes, retours terrain et feuille de route claire pour la suite du produit.',
    tone: 'coral',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Dashboards & Analytics',
    description: 'Tableaux de bord personnalisés pour visualiser vos données',
    lottieSrc: '/lottie/dashboard.lottie',
    modalDetail:
      'Transformez vos données en décisions : tableaux de bord sur mesure, indicateurs pertinents et visualisations lisibles pour vos équipes. Nous connectons vos sources (CRM, analytics, APIs) et concevons des vues adaptées à chaque rôle, afin de suivre la performance et d’ajuster votre stratégie en continu.',
    tone: 'yellow',
  },
]
