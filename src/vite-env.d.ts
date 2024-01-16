/// <reference types="vite/client" />

// eslint-disable-next-line check-file/filename-naming-convention
interface ImportMetaEnv {
	readonly VITE_API_BASE_URL: string
	readonly VITE_API_ENDPOINT: string
	readonly VITE_API_CLIENT_ID: string
	readonly VITE_API_CLIENT_SECRET: string
	readonly VITE_SENTRY_DSN: string
	readonly VITE_SENTRY_TRACING_ORIGIN: string
	readonly VITE_ENVIRONMENT: 'development' | 'production' | 'staging'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
