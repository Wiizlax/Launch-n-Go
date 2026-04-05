/** Durée d’affichage du toast de succès après envoi du formulaire (ms). */
export const CONTACT_TOAST_SUCCESS_MS = 4500

export const CONTACT_FORM = {
  nameLabel: 'Nom complet',
  namePlaceholder: 'Jean Dupont',
  emailLabel: 'Email',
  emailPlaceholder: 'jean@example.com',
  subjectLabel: 'Sujet',
  subjectPlaceholder: "Développement d'une application web",
  messageLabel: 'Message',
  messagePlaceholder: 'Décrivez votre projet en quelques lignes...',
  submit: 'Envoyer le message',
  success: 'Merci ! Votre message a bien été envoyé. Nous vous répondrons dès que possible.',
  errorGeneric:
    "L'envoi a échoué. Réessayez dans un instant ou écrivez-nous directement par email.",
} as const
