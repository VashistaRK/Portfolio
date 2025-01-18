import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Add this line to specify the base path
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  }

});
