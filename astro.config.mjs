import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://octopodo.github.io/',
  base: '/miguel-de-mendoza-resume',
  integrations: [tailwind(), vue()]
})
