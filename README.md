# Launch'n Go

## À propos

**Launch'n Go** est un site one-page (landing) présentant une activité de création d’applications web sur mesure. Le projet sert de vitrine : sections hero, statistiques, services, portfolio, processus, témoignages et contact. L’interface est en français, pensée pour être lisible, accessible de base et agréable sur mobile comme sur bureau.

Ce dépôt est destiné à être **lu par n’importe qui** : étudiants, recruteurs ou développeurs curieux du code.

## Fonctionnalités principales

- Mise en page responsive, navigation par ancres, en-tête fixe.
- Contenu structuré (textes et données) dans `src/constants/`, typé en TypeScript.
- Animations au scroll et au survol (Framer Motion), avec prise en compte possible des préférences de mouvement réduit.
- **Formulaire de contact** validé (React Hook Form + Zod), avec retour utilisateur (toast de succès, message d’erreur).
- **Envoi d’e-mails** côté serveur via [Resend](https://resend.com) (expéditeur de test `onboarding@resend.dev`), sans exposer la clé API dans le navigateur.

## Stack technique

| Domaine        | Choix |
|----------------|--------|
| Langage        | TypeScript (mode strict) |
| UI             | React 18 |
| Build / dev    | Vite 6 |
| Styles         | Tailwind CSS 3 |
| Animations     | Framer Motion |
| Icônes         | Lucide React |
| Formulaires    | React Hook Form + Zod |
| API contact    | Node.js, Express, CORS, `dotenv` |
| E-mail         | SDK Resend |

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou plus recommandé (aligné sur Resend).
- Un compte [Resend](https://resend.com) et une clé API pour tester l’envoi réel des messages.

## Installation

```bash
git clone <url-du-depot>
cd launch-n-go
npm install
```

Copier `.env.example` vers `.env` et renseigner au minimum :

- `RESEND_API_KEY` — clé API Resend (ne jamais la commiter).
- `CONTACT_RECIPIENT_EMAIL` — adresse qui reçoit les messages du formulaire.

## Scripts npm

| Commande        | Rôle |
|-----------------|------|
| `npm run dev`   | Lance **Vite** (front) et **l’API contact** en parallèle (recommandé en local). |
| `npm run dev:vite` | Front seul (sans envoi de mail si l’API n’est pas joignable). |
| `npm run dev:api`  | API contact seule (rechargement avec `tsx watch`). |
| `npm run start:api` | Démarre l’API une fois (sans watch). |
| `npm run build` | Vérification TypeScript + build de production du front (`dist/`). |
| `npm run preview` | Prévisualise le build statique (sans l’API par défaut). |
| `npm run lint`  | ESLint sur le projet. |

En développement, Vite **proxy** les requêtes `/api` vers l’API (port `3001` par défaut), ce qui permet au formulaire d’appeler `POST /api/contact` sans configuration CORS supplémentaire.

## Structure utile du dépôt

```
src/
  components/     # UI réutilisable + sections de la page
  constants/      # Données et textes (pas de chaînes “magiques” dans le JSX)
  hooks/
  styles/
  types/
server/
  contact-api.ts  # Point d’entrée Express : POST /api/contact
```

Les règles de conception du projet (composants, Tailwind, données, accessibilité) peuvent se trouver sous `.cursor/rules/` si vous utilisez Cursor.

## Licence et auteur

Site construit par @Wiizlax