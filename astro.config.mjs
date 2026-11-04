import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The address the site is served from. Until ehsanullahapps.com is bought this is the GitHub Pages
// address; after that, change it to https://ehsanullahapps.com and add public/CNAME (see README).
export default defineConfig({
  site: 'https://ehsan-ullah-tariq.github.io',
  integrations: [sitemap()],
});
