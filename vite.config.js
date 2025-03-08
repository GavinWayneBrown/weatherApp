import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Make sure Vite starts in the correct directory
  build: {
    outDir: 'dist',  // Ensures the output goes to dist/
  }
});

