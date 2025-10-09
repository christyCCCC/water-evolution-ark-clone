import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/water-evolution-ark-clone/', // 讓 GitHub Pages 能正確載入檔案
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
