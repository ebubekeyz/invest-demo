import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  sever: {
    proxy: {
      '/api': 'https://trex-holding-server.com/',
    },
  },
  plugins: [react()],
});
