// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages sirve el sitio en /amano-web/. Si algún día se usa un dominio
// propio, cambiar `site` y borrar `base`.
export default defineConfig({
  site: "https://surikkkmeetra.github.io",
  base: "/amano-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
