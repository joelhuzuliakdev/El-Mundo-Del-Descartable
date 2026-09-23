import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Reemplazar por el dominio final del sitio cuando esté disponible.
const SITE_URL = process.env.PUBLIC_SITE_URL || "https://elmundodeldescartable.com.ar";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
