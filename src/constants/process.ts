import type { ProcessStep } from '@/types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    step: '01',
    title: 'Découverte',
    description:
      'Nous analysons vos besoins et définissons ensemble les objectifs du projet',
    icon: 'Lightbulb',
    tone: 'yellow',
    numberColor: 'yellow',
  },
  {
    id: 'design',
    step: '02',
    title: 'Design',
    description: "Création de maquettes et prototypes interactifs pour valider l'expérience",
    icon: 'Palette',
    tone: 'blue',
    numberColor: 'blue',
  },
  {
    id: 'development',
    step: '03',
    title: 'Développement',
    description: 'Développement avec les meilleures technologies et tests réguliers',
    icon: 'Code2',
    tone: 'coral',
    numberColor: 'coral',
  },
  {
    id: 'launch',
    step: '04',
    title: 'Lancement',
    description: 'Mise en production et accompagnement pour assurer le succès',
    icon: 'Rocket',
    tone: 'yellow',
    numberColor: 'yellow',
  },
]
