/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL du backend contact (ex. https://api.example.com) — sans slash final. Vide = même origine / proxy Vite. */
  readonly VITE_CONTACT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
