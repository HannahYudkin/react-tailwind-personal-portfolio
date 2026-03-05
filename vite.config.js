import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
// Base must match where the site is served:
// - Custom domain (e.g. HannahYudkin.com): served at root → base '/'
// - Project URL (e.g. username.github.io/repo): served under repo name → base '/repo/'
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