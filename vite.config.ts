import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/_variables.scss')}";`,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});