/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly MOVIE_API_KEY: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}