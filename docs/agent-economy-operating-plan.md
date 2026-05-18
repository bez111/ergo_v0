# Ergo Agent Economy Operating Plan

This site is being turned into a live proof layer for the Ergo Agent Economy.
The goal is not a marketing page. The goal is a public cockpit where a builder
can inspect the actual system state: Sage, receipts, Accord, MCP, widget,
playground, signer health, and the mainnet gate.

## North Star

Make the site answer one question instantly:

```text
Can an autonomous agent ask for work, receive a quote, pay on Ergo, get a
durable receipt, and expose the result to other tools?
```

The target answer is:

```text
Yes, on testnet today. Mainnet remains closed until conformance, exact script
identity, and audit artifacts are published.
```

## Product Shape

- `agents.ergoblockchain.org` or `agenthub.ergoblockchain.org` becomes the
  short entry point.
- `/agent-economy/live` remains the canonical Live Hub route.
- `/api/agent-economy/live` remains the machine-readable source for hub status.
- `/api/sage/receipt/<id>` remains the single source of receipt truth.

## Live Proof Lifecycle

1. Intent captured by Sage.
2. Accord quote / payment challenge generated.
3. Ergo Note payment appears on testnet.
4. Full Sage receipt bundle is stored in Blob:
   - Agreement JSON
   - Verification Receipt JSON
   - Settlement Receipt JSON
5. Accord conformance runs against that receipt.
6. Signed evidence updates the Accord registry.
7. MCP endpoint exposes docs/tools to external agents.
8. Sage widget embeds the paid flow in third-party sites.
9. Mainnet/audit gate stays closed until evidence is complete.

## Current External Blockers

- DNS: `mcp.ergoblockchain.org`.
- One new paid Sage flow after Blob.
- Final hub subdomain choice:
  - `agents.ergoblockchain.org`
  - `agenthub.ergoblockchain.org`
  - `agentichub.ergoblockchain.org`

## Current Internal Batch

Prepared locally:

- Live Hub lifecycle view.
- Agent subdomain routing.
- Signer health endpoint and signer ops hardening.
- Mainnet gate endpoint and audit-manifest skeleton.
- Accord conformance evidence exporter.
- Sage widget paid embed callbacks and receipt bundle fetch.
- MCP DNS runbook.

## Final Public Language

Use:

```text
Ergo Agent Economy testnet live proof
```

Do not use until the gate opens:

```text
mainnet ready
production ready
audited
certified
```

## What Opens The Next Level

The first post-Blob `full_receipt_bundle` is the unlock. After that, the order
is:

1. Run `npm run sage:conformance:evidence`.
2. Sign the conformance artifact.
3. Update Accord registry evidence.
4. Run final full build and smoke tests.
5. Deploy one batch.
