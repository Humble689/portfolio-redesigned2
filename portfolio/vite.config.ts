import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      closeBundle() {
        // Copy CNAME file to dist folder for GitHub Pages
        try {
          copyFileSync(join(__dirname, 'CNAME'), join(__dirname, 'dist', 'CNAME'))
        } catch (error) {
          console.warn('CNAME file not found or already exists')
        }
      },
    },
  ],
  base: '/', // Use '/' for custom domain
})

