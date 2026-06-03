import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 1. インポートを追加

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // 2. plugins に追加
  },
});