// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind Vite plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
