/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACK_END_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
