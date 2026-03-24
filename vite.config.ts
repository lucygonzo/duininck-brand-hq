import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/duininck-brand-hq/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'brand-guide': 'brand-guide.html',
      },
    },
  },
});
