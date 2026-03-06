import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
// Relative base works for both custom domain (root) and project URL (subpath).
const repoName = 'yudkin-personal-portfolio'
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? `/${repoName}/`,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})