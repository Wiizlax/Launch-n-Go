/** Titres et sous-titres des sections (hors hero / contact / footer) */
export const SECTION_COPY = {
  services: {
    titleBefore: 'Nos ',
    accent: 'Services',
    accentClass: 'text-accent-blue',
    subtitle: 'Des solutions complètes pour tous vos besoins digitaux',
  },
  portfolio: {
    titleBefore: 'Nos ',
    accent: 'Réalisations',
    accentClass: 'text-accent-orange',
    subtitle: 'Découvrez quelques projets que nous avons concrétisés pour nos clients',
  },
  process: {
    titleBefore: 'Notre ',
    accent: 'Processus',
    accentClass: 'text-accent-yellow',
    subtitle: 'Une méthode éprouvée pour garantir le succès de votre projet',
  },
  testimonials: {
    titleBefore: 'Ce que disent nos ',
    accent: 'clients',
    accentClass: 'text-accent-blue',
    subtitle: 'La satisfaction de nos clients est notre priorité',
  },
  contact: {
    titleBefore: '',
    accent: 'Contactez',
    afterAccent: '-nous',
    accentClass: 'text-accent-orange',
    subtitle: 'Prêt à lancer votre projet ? Parlons-en ensemble',
  },
} as const
