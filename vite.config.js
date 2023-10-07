import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@domain', replacement: '/src/app/domain' },
      { find: '@infra', replacement: '/src/app/infrastructure' },
      { find: '@aplication', replacement: '/src/app/aplication' }
    ]
  }
})
