import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    server: {
      allowedHosts: ['app'],
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL || 'http://localhost:3000',
                changeOrigin: true,
            },
        }
    },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './cleanup_test_setup.js',
  }
});