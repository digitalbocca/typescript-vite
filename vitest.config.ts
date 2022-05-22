/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      extension: [
        'vue',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue()
  ]
})
