// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],
  adapter: cloudflare(
    {
      platformProxy: {
        enabled: true
      }
    }
  ),
  vite: {
    resolve: {
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined
    }
  }
});