import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://olinccc.github.io/Alterego",
  base: "/Alterego",
  trailingSlash: "never",
  outDir: "docs",
  vite: {
    plugins: [tailwindcss()]
  },
  typescript: {
    strict: false,
    check: false
  }
});