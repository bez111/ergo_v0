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
Yes, on testnet today for quote, payment verification, durable full receipt,
and signed L1 conformance evidence. Mainnet remains closed until exact script
identity, signer operations, and audit artifacts are published.
```

## Product Shape

- `agents.ergoblockchain.org` becomes the short entry point.
- `/agent-economy/roadmap` becomes the public helicopter view for live, next,
  trust-gated, and later work.
- `/api/agent-economy/roadmap` remains the machine-readable source for that
  roadmap.
- `/agent-economy/live` remains the canonical Live Hub route.
- `/api/agent-economy/live` remains the machine-readable source for hub status.
- `/api/sage/receipt/<id>` remains the single source of receipt truth.

## Strategic Helicopter View

Current state:

```text
The public proof surface is live.
```

Agents and builders can now inspect discovery, jobs, quotes, wallet-policy
checks, receipts, reputation, MCP tools, proof state, and the mainnet gate from
one source of truth.

The next strategic move is not another page. The next proof is a repeatable
developer loop:

```text
BuildOnErgo Agent Economy Kit + Multi-Agent Receipt Loop Demo
```

The kit should let a developer reproduce the economic cycle locally without
cloning the full site:

- schemas;
- CLI;
- receipt verifier;
- provider onboarding;
- job acceptance;
- job quote scaffolds;
- wallet-boundary examples;
- MCP server/client examples.

The killer demo should show the market loop end to end:

```text
buyer agent -> provider agent -> verifier agent -> settlement receipt ->
reputation update -> provider re-spends earned value on another agent
```

This turns the site from "we described the agent economy" into "any builder can
replay the loop and connect to the public proof surface."

## 90-Day Shape

### 0-30 days: Developer reproducibility

- Publish the BuildOnErgo Agent Economy Kit as the local developer kernel.
- Polish the paid Sage widget into a third-party embeddable flow: chat, quote,
  Note verification, receipt link, tenant config, and wallet-policy handoff.
- Tighten wallet-agent runner around intent intake, policy verdict, simulation,
  host-owned signing, broadcast handoff, receipt retention, and overclaim
  prevention.
- Keep MCP runtime smoke checks aligned with deployed economic tools after every
  deploy.

### 30-60 days: Market proof

- Ship the multi-agent receipt loop demo: buyer, provider, verifier, settlement
  receipt, reputation update, and re-spend.
- Improve the reputation graph with clearer receipt evidence, verifier coverage,
  dispute fields, and provider examples.
- Publish provider templates for API calls, code checks, translation, indexing,
  monitoring, schema validation, and other small services.

### 60-90 days: Trust gate

- Prepare the external review pack and reviewer workflow for independent
  findings.
- Prepare audit-bound mainnet script identity manifests with source-to-ErgoTree
  mapping, hashes, addresses, limits, and package versions.
- Draft the controlled mainnet readiness path while public language remains
  testnet live proof until the gate opens.

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

- External audit/review report and audit-bound mainnet script identity before any
  mainnet language.

## Current Live Batch

Live in production:

- Live Hub lifecycle view.
- Agent subdomain routing.
- Signer health endpoint and signer ops hardening.
- Mainnet gate endpoint and audit-manifest skeleton.
- Accord conformance evidence exporter.
- Accord registry evidence is merged upstream for Sage L1.
- Sage widget paid embed callbacks and receipt bundle fetch.
- Dedicated MCP endpoint runbook for DNS, health checks, smoke checks, and failure modes.
- Published settled post-Blob full receipt bundle, permanent testnet signer, and signed Sage L1 conformance evidence.
- Wallet-agent policy-check API.
- Wallet-agent policy playground.
- Wallet-agent reference runner.
- Developer services index with live probes for Sage, MCP, wallet-agent policy, receipt storage, and agent host surfaces.
- Production routes for `agents.ergoblockchain.org`.
- Developer launch kit with a five-minute path, API recipes, npm widget surface, guardrails, machine-readable JSON, and JSON Schema.
- Public MCP runtime `0.3.2` advertises the safe economic tools for discovery, jobs, quotes, policy checks, receipt verification, reputation, and guarded redemption boundaries.

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

The settled post-Blob `full_receipt_bundle`, permanent testnet signer, and signed L1 evidence are done. The
remaining order is:

1. Publish an external audit/review report.
2. Publish audit-bound mainnet script identity manifests.
3. Update risk disclosure with reviewer findings and residual risks.
4. Keep wallet-agent surfaces testnet-first until external review exists.
