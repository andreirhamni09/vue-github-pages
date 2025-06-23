import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: 'https://github.com/andreirhamni09/vue-github-pages.git', // wajib diisi agar path benar
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})