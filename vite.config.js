import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site https://<kullanici>.github.io/portfolio/ adresinde yayinlandigi icin base "/portfolio/"
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
