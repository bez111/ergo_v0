# Final Batch Deploy Checklist

Use this for the next deploy batch after local code/content changes. The
post-Blob receipt and signed L1 evidence gates are already complete.

## User-owned gates

- [x] DNS resolves:

```bash
dig +short mcp.ergoblockchain.org A
dig +short mcp.ergoblockchain.org AAAA
curl -fsS https://mcp.ergoblockchain.org/health
```

- [x] One settled post-Blob paid Sage flow exists:
  `f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81`.
- [x] `BLOB_READ_WRITE_TOKEN` is present and `/api/sage/receipt/blob-probe-2026-05-16` reports `storage_healthy = true`.
- [x] `/api/sage/receipt/<id>` returns:

```text
completeness = full_receipt_bundle
```

- [x] Final hub subdomain is chosen: `agents.ergoblockchain.org`.
- [x] Accord registry evidence for Sage L1 is prepared with the latest settled receipt.
- [x] Permanent settlement signer endpoint is configured for fresh testnet redemption.
- [x] Testnet script identity, audit scope, and signer ops evidence manifests are published.

## Preflight

```bash
cd /Users/alexanderbezkrovny/Desktop/ergo_v0
npm run audit:claims
npm run audit:blog
npm run audit:agent-economy-gate
npm run type-check
npm run qa:mobile-crawl -- --discover-only --out artifacts/mobile-crawl/latest-discovery
npx eslint src/proxy.ts \
  src/app/api/agent-economy/live/route.ts \
  src/app/api/agent-economy/mainnet-gate/route.ts \
  src/app/api/sage/signer-health/route.ts \
  'src/app/[locale]/agent-economy/live/AgentEconomyLiveClient.tsx' \
  src/lib/agent-economy/mainnet-gate.ts
npm run sage:conformance:evidence
npm run build
```

Local route smoke before build, with the dev server running on port `3001`:

```bash
npm run dev -- --port 3001
npm run smoke:routes
```

Full mobile crawl gate after the local production server is running:

```bash
npm run start -- --port 3001
BASE_URL=http://localhost:3001 npm run qa:sitemap-crawl -- --out artifacts/mobile-crawl/full-status --concurrency=8 --timeout=45000 --crawl-links=false
BASE_URL=http://localhost:3001 npm run qa:mobile-crawl -- --out artifacts/mobile-crawl/full-mobile-matrix --viewports=mobile-360:360x740,mobile-390:390x844,mobile-430:430x932 --concurrency=4 --timeout=45000 --crawl-links=false
```

Widget package:

```bash
cd /Users/alexanderbezkrovny/Desktop/sage-widget
npm run typecheck
npm run build
```

MCP:

```bash
cd /Users/alexanderbezkrovny/Desktop/ergoblockchain-mcp
npx tsc --noEmit --pretty false
npm run smoke
```

## Production smoke after deploy

```bash
curl -fsS https://www.ergoblockchain.org/api/agent-economy/live
curl -fsS https://www.ergoblockchain.org/api/agent-economy/mainnet-gate
curl -fsS https://www.ergoblockchain.org/api/sage/signer-health
curl -fsS https://www.ergoblockchain.org/agent-economy/live
npm run smoke:routes:prod
```

Expected:

- Live Hub page loads.
- `receipt-storage = live`.
- `full-receipt-bundle = live` after paid flow.
- `accord-conformance = live`.
- `accord-registry = live`.
- `mcp-dns = live` after DNS.
- `mainnet-audit-gate = blocked` until external audit and audit-bound mainnet script identity exist.

## Do not ship if

- `/api/sage/receipt/<id>` regresses to `chain_proof_only` for the new post-Blob flow.
- Build emits a new WASM/runtime warning.
- Full mobile crawl has `failureCount > 0` on the local production server.
- Mainnet gate accidentally opens without audit/script identity artifacts.
- The chosen hub subdomain redirects away from `/agent-economy/live`.
- `npm run audit:claims` finds forbidden live-site wording.
