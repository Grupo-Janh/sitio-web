// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://grupo-janh.netlify.app/',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});