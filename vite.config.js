
// https://vite.dev/config/
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['qrcode.react'],
  },
  base: "/", // Cần thiết khi deploy trên Vercel
  build: {
    outDir: "dist", // Thư mục chứa file build
  },
  server: {
    open: true, 
  },
});


