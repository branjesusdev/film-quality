import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@domain', replacement: '/src/app/domain' },
      { find: '@infra', replacement: '/src/app/infrastructure' }
    ]
  }
})
