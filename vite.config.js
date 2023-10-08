import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@domain', replacement: '/src/app/domain' },
      { find: '@infra', replacement: '/src/app/infrastructure' },
      { find: '@aplication', replacement: '/src/app/aplication' }
    ]
  }
})
