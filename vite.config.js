import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/water-evolution-ark-clone/', // 添加這行
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
