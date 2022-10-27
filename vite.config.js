import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://brian890804.github.io/homestay/',
  plugins: [react()],
  server: {
    // host: '192.168.1.112'
    // host:'192.168.18.69'
  }
})
