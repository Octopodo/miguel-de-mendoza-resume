import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://octopodo.github.io/",
  base: "/miguel-de-mendoza-resume",
  integrations: [tailwind()]
});