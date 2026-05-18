# Mobile Crawl QA Runbook

This runbook defines the full-page mobile crawl gate for the site. It is meant to turn mobile QA from manual spot-checking into a repeatable release check.

## What "full crawl" means

A full crawl has two layers:

1. Sitemap discovery: read every sitemap recursively and build the complete HTML route list.
2. Render QA: open every route in a real Chromium mobile viewport and check for:
   - HTTP or application error bodies.
   - document-level horizontal overflow.
   - page errors and console errors.
   - local request failures.
   - small tap targets.
   - possible clipped text.
   - fixed or sticky elements escaping the viewport.

The crawl writes both machine-readable JSON and a Markdown report.

## Commands

Start from the site repo:

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0
```

Discovery only:

```bash
npm run qa:mobile-crawl -- --discover-only --out artifacts/mobile-crawl/latest-discovery
```

Status-only crawl:

```bash
BASE_URL=http://localhost:3001 npm run qa:sitemap-crawl -- \
  --out artifacts/mobile-crawl/full-status \
  --concurrency=8 \
  --timeout=45000 \
  --crawl-links=false
```

Full mobile render crawl:

```bash
BASE_URL=http://localhost:3001 npm run qa:mobile-crawl -- \
  --out artifacts/mobile-crawl/full-mobile \
  --viewports=mobile-360:360x740 \
  --concurrency=4 \
  --timeout=45000 \
  --crawl-links=false
```

High-confidence mobile pass for the final release window:

```bash
BASE_URL=http://localhost:3001 npm run qa:mobile-crawl -- \
  --out artifacts/mobile-crawl/full-mobile-matrix \
  --viewports=mobile-360:360x740,mobile-390:390x844,mobile-430:430x932 \
  --concurrency=4 \
  --timeout=45000 \
  --crawl-links=false
```

## Important: do not certify from `next dev`

`next dev` is useful for spot checks, but it is not authoritative for a full 5,000+ URL crawl. Rare routes can trigger cold compilation and exceed the crawl timeout even when the page is valid.

For the final gate, use a production local server:

```bash
npm run build
npm run start -- --port 3001
```

Then run the status and mobile render crawls above.

## Current baseline

The current sitemap discovery found 5,677 HTML routes. A full render crawl should be saved under `artifacts/mobile-crawl/full-mobile*` during the final build window, after the remaining external gates are ready.

## Pass criteria

- `failureCount = 0`.
- Any warning touching navigation, checkout/payment, Sage receipt, Agent Economy Live Hub, docs, blog, ecosystem, or playground pages is triaged before deploy.
- Screenshots for failed pages are inspected, not just counted.
- `npm run type-check`, `npm run audit:claims`, and `npm run smoke:routes` pass in the same release batch.
