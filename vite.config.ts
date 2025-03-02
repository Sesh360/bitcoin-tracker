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
  base: '/bitcoin-tracker/', // Your base path for GitHub Pages
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
          // Enhanced fix for MIME type issues
          const sanitizedName = name.replace(/\.[jt]sx?$/, '.js');
          return sanitizedName.replace(/[?#]/g, '');
        }
      }
    },
    chunkSizeWarningLimit: 1600,
    sourcemap: false,
    // Fix for MIME type errors
    assetsInlineLimit: 0,
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})