import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@domain": path.resolve(__dirname, "./src/domain/").toString(),
      "@infrastructure": path.resolve(__dirname, "./src/infrastructure/").toString(),
      "@component": path.resolve(__dirname, "./src/ui/components/").toString(),
      "@page": path.resolve(__dirname, "./src/ui/pages/").toString(),
      "@hook": path.resolve(__dirname, "./src/ui/hooks/").toString(),
      "@layout": path.resolve(__dirname, "./src/ui/layouts/").toString(),
      "@config": path.resolve(__dirname, "./src/config/").toString(),
      "@ui": path.resolve(__dirname, "./src/ui/").toString(),
      "@views": path.resolve(__dirname, "./src/ui/views").toString(),
    }
  }
})
