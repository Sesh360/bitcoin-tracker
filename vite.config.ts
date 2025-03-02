/// <reference types="vitest" />
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  base: '/bitcoin-tracker/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        sanitizeFileName(name) {
          return name.replace(/\.[jt]sx?$/, '.js');
        }
      }
    },
    chunkSizeWarningLimit: 1600,
    sourcemap: false
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})