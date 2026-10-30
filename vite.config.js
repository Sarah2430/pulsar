import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths, so the same build works at the root of pulsar-lb.com
  // and under https://sarah2430.github.io/pulsar/
  base: './',
})
