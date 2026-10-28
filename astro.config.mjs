// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  base: SITE.basePath,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/(thanks|404)\/?$/.test(page) })],
});
