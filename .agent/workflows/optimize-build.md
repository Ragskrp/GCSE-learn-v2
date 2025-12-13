---
description: Reduce build size and speed up CI builds for the GCSE‑learn‑v2 project
---

## Goal
Provide a concise, actionable workflow to shrink the Netlify/Next.js build artifact size and make each CI run faster.

## Prerequisites
- You are on the `main` branch of the repository.
- `pnpm` is installed on the CI runner (Netlify already provides it).
- You have write access to the repository.

## Steps
1. **Enable SWC minification** (default in Next 14, but ensure it’s on).
   ```json
   // next.config.js
   module.exports = {
     swcMinify: true,
   };
   ```
2. **Turn off source maps for production** – they increase bundle size.
   ```js
   // next.config.js (add to the existing export)
   const isProd = process.env.NODE_ENV === 'production';
   module.exports = {
     ...existingConfig,
     productionBrowserSourceMaps: false,
   };
   ```
3. **Remove unused locales** (e.g., moment.js, date‑fns locales).
   ```js
   // next.config.js
   module.exports = {
     i18n: {
       locales: ['en'], // keep only the ones you need
       defaultLocale: 'en',
     },
   };
   ```
4. **Add bundle‑analyzer** to spot large modules.
   ```bash
   pnpm add -D @next/bundle-analyzer
   ```
   ```js
   // next.config.js
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   });
   module.exports = withBundleAnalyzer({
     // other config …
   });
   ```
   Run locally with `ANALYZE=true pnpm dev` and inspect the generated report.
5. **Dynamic import heavy components** (e.g., markdown renderer, charts) so they are only loaded when needed.
   ```js
   const Markdown = dynamic(() => import('react-markdown'));
   ```
6. **Prune dev‑dependencies before the Netlify build**.
   Add a `build` script in `package.json`:
   ```json
   "scripts": {
     "prebuild": "pnpm prune --prod",
     "build": "next build"
   }
   ```
7. **Cache `node_modules` and the Next.js cache** in Netlify.
   Edit `netlify.toml`:
   ```toml
   [build]
     command = "pnpm install && pnpm run build"
     publish = ".next"

   [build.environment]
     NODE_VERSION = "20"

   [cache]
     paths = ["node_modules", ".next/cache"]
   ```
8. **Generate a standalone build** – Netlify only needs the compiled output.
   ```js
   // next.config.js
   module.exports = {
     output: 'standalone',
   };
   ```
   This drops `node_modules` from the final artifact and reduces the upload size.
9. **Compress static assets** (images, fonts) using `next‑image‑optimizer` or by converting them to WebP.
   ```bash
   pnpm add -D next-optimized-images
   ```
   Follow the plugin docs to enable automatic WebP conversion.
10. **Commit the changes** and push – Netlify will now run a slimmer, faster build.

## Verification
- After the next push, open the Netlify build log and note the **Build time** and **Upload size**.
- Open the generated bundle‑analyzer report (`.next/analyze/client.html`) to confirm no unexpected large packages remain.

---
*This workflow can be run repeatedly; each step is idempotent.*
