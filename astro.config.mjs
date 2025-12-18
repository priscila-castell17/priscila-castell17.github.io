// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://priscila-castell17.github.io", // Aquí defines la URL pública de tu página
  vite: {
    plugins: [tailwindcss()],
  },
});
