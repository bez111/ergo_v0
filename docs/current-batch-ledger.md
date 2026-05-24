# Current Local Batch Ledger

Status as of 2026-05-24: local batch in progress, not deployed.

This file records the current release batch so the final deploy window can be
reviewed without reconstructing intent from a large diff.

## Included In This Batch

- Agent Economy Developer Launch Kit:
  - start page: `/agent-economy/start`
  - human page: `/agent-economy/launch-kit`
  - JSON API: `/api/agent-economy/launch-kit`
  - JSON Schema: `/agent-economy/developer-launch-kit.schema.v0.json`
  - Discovery API: `/api/agent-economy/discovery`
  - OpenAPI contract: `/agent-economy/openapi.v0.json`
  - roadmap page/API/schema: `/agent-economy/roadmap`, `/api/agent-economy/roadmap`, `/agent-economy/roadmap.schema.v0.json`
  - developer services API: `/api/dev/services`
  - stateless developer tools API: `/api/dev/tools`
  - paid Sage flow contract: `/api/sage/quote`, `/api/sage/verify-payment`, `/api/sage/chat`, `/api/sage/receipt/<id>`
  - wallet-agent policy-check request schema: `/agent-economy/wallet-agent-policy-check.schema.v0.json`
- Agent Economy Proof Explorer:
  - human page: `/agent-economy/proofs`
  - JSON API: `/api/agent-economy/proofs`
  - JSON Schema: `/agent-economy/proof-explorer.schema.v0.json`
  - verify steps for full receipt bundle, signed conformance evidence, MCP health, widget state, activity, and mainnet gate
- Agent host aliases for `agents.ergoblockchain.org`:
  - `/`
  - `/start`
  - `/live`
  - `/launch-kit`
  - `/proofs`
  - `/api/discovery`
  - `/api/launch-kit`
  - `/api/proofs`
  - `agenthub.ergoblockchain.org` is intentionally not part of this batch.
- Live Hub integration:
  - developer launch kit gate
  - hero CTA
  - fallback lifecycle link
- Developer services integration:
  - launch kit service card
  - launch kit probe
  - full receipt bundle example in the receipt verifier
- Machine-readable discovery:
  - `/.well-known/agent-economy.json`
  - `/api/agent-economy/discovery`
  - `/agent-economy/discovery.schema.v0.json`
  - `/agent-economy/openapi.v0.json`
  - `/agent-economy/roadmap`
  - `/api/agent-economy/roadmap`
  - `/agent-economy/roadmap.schema.v0.json`
  - `/api/dev/services`
  - `/api/dev/tools`
  - `/api/sage/quote`
  - `/api/sage/verify-payment`
  - `/api/sage/chat`
  - `/.well-known/accord`
  - search index
  - `llms.txt`
  - `llms-full.txt`
  - Sage index
  - sitemap entries
- Audit/review evidence:
  - audit manifest links
  - review pack links
  - mainnet gate artifact links
  - gate audit assertions
  - agent host route drift audit
- Wallet-agent policy hardening:
  - strict decimal-string checks for amount, spent_today, and fee
  - fail-closed behavior for unknown profile/action fields
  - fail-closed behavior for unknown allowed actions and invalid receipt-retention modes
  - canonical hex task-hash minimum-length check
  - policy playground tampered-payload preset
- MCP operations:
  - dedicated MCP endpoint runbook
  - DNS, health, smoke, and failure-mode checks
- Batch QA:
  - `npm run preflight:batch`
  - `npm run preflight:batch -- --build` for the final deploy window
  - route smoke split between fast local dev and full deep-docs checks
  - Next dev type-noise cleanup for `tsconfig.json` and `next-env.d.ts`
- Blog/content polish:
  - superseded CMS duplicate slug suppressed from the blog list
  - latest Sage receipt/evidence links use the current post-Blob full bundle
  - public copy consistently points to `agents.ergoblockchain.org`, not a second agenthub domain
- Visual QA polish:
  - desktop header language label no longer causes horizontal overflow around 1280px
  - Live Hub heading exposes clean accessible text
  - local webpack dev check passed for `/agent-economy/live`, `/agent-economy/launch-kit`, and `/blog`
- Adjacent package check:
  - `/Users/alexanderbezkrovny/Desktop/sage-widget`
  - `@ergoblockchain/sage-widget@0.3.0`
  - `npm run typecheck` clean
  - `npm run smoke` clean
- Adjacent MCP check:
  - `/Users/alexanderbezkrovny/Desktop/ergoblockchain-mcp`
  - `@ergoblockchain/mcp-server@0.1.0`
  - `npm run type-check` clean
  - `npm run build` clean
  - local `npm run smoke` clean against `127.0.0.1:8787`

## Explicitly Not Included

- No production deploy.
- No push to `main`.
- No mainnet readiness claim.
- No external audit report.
- No audit-bound mainnet script identity.
- No production custody/signing expansion.

## Current Passing Local Gate

```bash
npm run preflight:batch
```

Expected:

```text
content claim audit clean
blog content audit clean
agent economy gate audit clean
mainnet_ready = false
Localization audit failures = 0
tsc --noEmit clean
git diff --check clean
```

## Final Deploy Window

Before deploy, run:

```bash
npm run preflight:batch -- --build
```

Then run production smoke after deployment:

```bash
npm run smoke:routes:prod
curl -fsS https://www.ergoblockchain.org/api/agent-economy/live
curl -fsS https://www.ergoblockchain.org/.well-known/agent-economy.json
curl -fsS https://www.ergoblockchain.org/api/agent-economy/discovery
curl -fsS https://www.ergoblockchain.org/api/agent-economy/launch-kit
curl -fsS https://www.ergoblockchain.org/api/agent-economy/proofs
curl -fsS https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json
curl -fsS https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json
curl -fsS https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json
curl -fsS https://www.ergoblockchain.org/agent-economy/openapi.v0.json
curl -fsS https://www.ergoblockchain.org/agent-economy/wallet-agent-policy-check.schema.v0.json
curl -fsS https://mcp.ergoblockchain.org/health
npm run watch:agent-economy
```
