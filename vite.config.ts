import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Swapp-client/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
