import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://scottscharl.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
