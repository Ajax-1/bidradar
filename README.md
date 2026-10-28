# BidRadar website

Static marketing site for BidRadar, built with [Astro](https://astro.build). No server, no database, no secrets. Hosted free on GitHub Pages; deploys automatically on every push to `main` (see `.github/workflows/deploy.yml`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/bidradar/
npm run build    # static output in dist/
```

## Placeholders (all in `site.config.mjs`)

| What | Where | What to do |
|---|---|---|
| Domain | `site.config.mjs` → `url`, `basePath` | Set `url: 'https://yourdomain.com'`, `basePath: '/'`, add `public/CNAME` with the bare domain, and set the custom domain in the repo's Settings → Pages. |
| Creem payment links | `site.config.mjs` → `checkout.founding`, `checkout.standard` | Paste the two Creem checkout URLs. Empty = Subscribe buttons open an email to us. |
| Founding plan on/off | `site.config.mjs` → `pricing.foundingOpen` | Set to `false` once the first 10 customers have subscribed. |
| Email signup form | `site.config.mjs` → `signupForm.action` | Paste the POST endpoint of your form/newsletter service. Fields sent: `email`, `trades`, `states`, `source`. Empty = form opens a pre-filled email to us. |
| Logo | `src/components/Logo.astro`, `public/favicon.svg`, `public/og.png` | Replace the geometric placeholder mark. |

## Where content lives

- Sample opportunities and the Oct 24-27 counts: `src/data/sample.ts`
- FAQ (also used for structured data and `/llms.txt`): `src/data/faq.ts`
- Pages: `src/pages/` (home, sample, pricing, about, terms, privacy, refund, thanks, 404)
- `/llms.txt` and `/robots.txt` are generated from `src/pages/llms.txt.ts` and `src/pages/robots.txt.ts`
