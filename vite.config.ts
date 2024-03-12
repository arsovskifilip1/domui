import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080, // Specify the port for Vite's development server
  },
  plugins: [react()],
})
