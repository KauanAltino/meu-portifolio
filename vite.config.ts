import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/meu-portifolio/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['react-icons', '@emailjs/browser', 'framer-motion'],
  },
})
