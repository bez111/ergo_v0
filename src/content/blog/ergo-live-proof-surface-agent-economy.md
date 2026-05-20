---
title: "Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy"
slug: "/blog/ergo-live-proof-surface-agent-economy"
seo_title: "Ergo Live Proof Surface: Sage Receipts, MCP, Accord Evidence and Agent Hub"
meta_description: "Ergoblockchain.org now exposes a live agent-economy proof surface: Sage full receipt bundles, signed Accord L1 evidence, MCP, Agent Hub, ErgoScript Playground and explicit mainnet gates."
excerpt: "The Ergo site is becoming more than a narrative website. It now exposes live agent-economy infrastructure: Sage full receipts, signed L1 evidence, MCP, Agent Hub, an ErgoScript playground and clear audit-gated mainnet boundaries."
author: "Ergo Developer Relations"
date_published: "2026-05-20"
date_modified: "2026-05-20"
category: "Build Log"
status: "Public site update. Live testnet proof, signed L1 evidence, audit-gated mainnet path."
tags: ["Ergo", "Agent Economy", "Sage", "Accord Protocol", "MCP", "ErgoScript", "AI Agent Payments"]
target_keywords: ["Ergo agent economy", "AI agent payments", "Sage AI agent", "Accord Protocol receipts", "MCP endpoint", "ErgoScript playground"]
---

# Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy

Most blockchain websites are narrative surfaces.

They explain the protocol, publish documentation, point to wallets, list ecosystem projects and argue for a thesis. That still matters. But it is no longer enough for the agent economy.

If autonomous agents are going to pay for work, verify results, exchange receipts and interact with public infrastructure, then the website should not only describe those flows. It should expose them.

That is what ergoblockchain.org is becoming: a live proof surface for the Ergo agent economy.

The site now has human pages, machine-readable APIs, public receipt endpoints, an Agent Economy Live Hub, a public MCP endpoint, an ErgoScript Playground and explicit gates that separate testnet proof from mainnet readiness.

The important claim is precise:

```text
Ergo's base chain is live. Sage and Accord on this site are live testnet proof. Mainnet claims remain audit-gated.
```

## TL;DR

### The site is now evidence-shaped

Ergoblockchain.org is moving from "content plus demos" toward a public proof surface: receipts, status APIs, MCP, signed evidence and live readiness gates.

### Sage has a full receipt bundle

A post-Blob paid Sage flow produced a full receipt bundle with Agreement JSON, Verification Receipt JSON and Settlement Receipt JSON.

### Sage L1 evidence is signed

The first post-Blob receipt passed a Sage L1 Accord conformance run, and the signed artifact is public.

### MCP gives agents an entry point

Humans browse pages. Agents call tools. `mcp.ergoblockchain.org` is the machine-facing surface.

### Mainnet language stays locked

This is live testnet proof, not audited mainnet infrastructure. Testnet identity and signer evidence are published; external review and audit-bound mainnet script identity remain the gates.

## What changed

The latest build cycle moved the site from "content plus demos" toward "content plus evidence."

The site can now show:

- what Sage is doing;
- what receipt storage exists;
- what Accord evidence is published;
- what MCP endpoint agents can call;
- what developer surfaces are live;
- what remains blocked before mainnet language is allowed.

This matters because an agent economy cannot be proven by copywriting.

It needs artifacts.

A user should be able to open a receipt. A developer should be able to inspect JSON. A dashboard should be able to read a status API. An agent should be able to discover tools. A verifier should be able to check a signed evidence file.

That is the direction.

## Sage now has a full receipt bundle

Sage is the AI concierge on ergoblockchain.org.

Free questions stay free. Premium-shaped requests trigger a payment flow. Sage prices the request, asks for an Ergo testnet Note, verifies the Note against the quote and task hash, then serves the premium answer.

Earlier, Sage already produced a real Ergo testnet redemption transaction. That proved the on-chain settlement path.

The next missing piece was durable receipt storage.

That is now live.

A post-Blob paid Sage flow produced a settled full receipt bundle:

```text
83ac762fd75fbe702eec19ad74ec8ac696243ea889974de6eca92216937bb8d3
```

Receipt API:

```text
/api/sage/receipt/83ac762fd75fbe702eec19ad74ec8ac696243ea889974de6eca92216937bb8d3
```

That bundle stores the three objects that matter:

| Receipt piece | Why it matters |
|---|---|
| Agreement JSON | Records what was requested, price, task hash, verifier and payment terms. |
| Verification Receipt JSON | Records what Sage verified before serving the premium response. |
| Settlement Receipt JSON | Records how the payment flow closed on-chain from the protocol point of view. |

This is the difference between "a transaction happened" and "this exact work agreement was verified."

A blockchain transaction alone cannot reconstruct the full question, agreement terms or verification receipt. The receipt API becomes the source of truth. Blog posts and UI pages should link to it, not duplicate it.

## Sage L1 Accord evidence is signed

The first post-Blob full receipt bundle was then used for an Accord conformance run.

Sage passed L1 network conformance against the public Accord endpoint:

```text
/api/sage/accord
```

The signed artifact is published here:

```text
/evidence/sage/conformance-l1-2026-05-20.signed.json
```

The provider signing key is published here:

```text
/evidence/sage/provider-signing-key.json
```

This is important because the claim is now machine-checkable.

The site does not merely say "Sage is compatible." It publishes a signed artifact that tools can verify. That is the kind of evidence an agent registry, dashboard or external verifier can consume.

The level is also deliberately precise: Sage has signed L1 evidence. That is not the same as audited mainnet readiness. It is one public gate completed.

## MCP is live for agents

Humans browse pages.

Agents call tools.

That is why the site now has a public MCP endpoint:

```text
https://mcp.ergoblockchain.org/health
https://mcp.ergoblockchain.org/mcp
```

The root URL may show a simple JSON "not found" response in a browser. That is fine. The root route is not the service. `/health` is for checks, and `/mcp` is the Streamable HTTP endpoint for MCP clients.

This gives the site a machine-facing entry point.

Over time, that surface can expose receipt lookup, protocol status, developer discovery, payment tools and conformance evidence to compatible agent hosts.

## Agent Hub is the cockpit

The human-facing side is the Agent Economy Live Hub:

```text
/agent-economy/live
agents.ergoblockchain.org
```

The goal is not another marketing landing page.

The goal is a cockpit.

A builder should be able to open one page and see:

- Sage activity;
- receipt storage;
- the latest full receipt bundle;
- Accord conformance state;
- MCP health;
- signer status;
- widget status;
- ErgoScript playground status;
- mainnet gate state.

The same state is exposed through:

```text
/api/agent-economy/live
```

That makes the hub useful for both humans and machines.

## ErgoScript Playground is the developer workbench

The agent-economy thesis eventually has to meet code.

That is why the site also includes an ErgoScript Playground at:

```text
/build/playground
```

The playground gives developers a browser workbench for ErgoScript examples and sigma-rust WASM paths. The long-term direction is to connect articles, docs and examples to runnable contract snippets:

- task hash predicates;
- Note expiry examples;
- verifier signature examples;
- acceptance predicates;
- script identity manifests;
- receipt-linked contract examples.

Educational content becomes stronger when it can point into executable surfaces.

## What is live now

| Surface | Where | Status |
|---|---|---|
| Agent Economy Live Hub | `/agent-economy/live` | Live website surface. |
| Agent status API | `/api/agent-economy/live` | Live machine-readable status. |
| MCP endpoint | `mcp.ergoblockchain.org` | Live public infrastructure. |
| Sage paid flow | Site chat widget | Live testnet proof. |
| Sage receipt API | `/api/sage/receipt/{id}` | Full post-Blob bundle published. |
| Accord evidence | `/evidence/sage/conformance-l1-2026-05-20.signed.json` | Signed L1 evidence published. |
| Testnet script identity | `/agent-economy/script-identity-manifest.v0.json` | Observed testnet wallet, Note, Reserve and settlement identity published. |
| Signer ops evidence | `/agent-economy/signer-ops-evidence.v0.json` | Permanent testnet signer endpoint and operations evidence published. |
| Audit scope manifest | `/agent-economy/audit-scope-manifest.v0.json` | Draft review scope published. Not an independent audit report. |
| ErgoScript Playground | `/build/playground` | Live developer surface. |
| Mainnet gate | `/api/agent-economy/mainnet-gate` | Closed by design: 4 gates completed, 2 trust gates pending. |

## What is not claimed

The site now has more live infrastructure, so the public wording has to be stricter, not looser.

Not claimed:

- Sage is mainnet ready.
- Accord is production certified.
- ChainCash or Basis contracts are audited.
- The current payment scripts are safe for real funds.
- Testnet signer operations evidence equals production custody.
- Signed L1 evidence equals full audit readiness.

The correct public posture is:

```text
Live testnet proof. Signed L1 evidence. Audit-gated mainnet path.
```

That is stronger than hype because it is inspectable.

## What remains

The next gates are clear.

First, the Accord registry profile now points to the new Sage evidence and receipt bundle. That makes the registry a durable pointer to the same public proof surface instead of a separate database of facts.

Second, the testnet signer now has a permanent controlled endpoint and a public operations evidence manifest. That evidence is published, but it is still testnet operations evidence, not a production custody claim.

Third, testnet script identity is now published as an observed manifest. Mainnet still needs audit-bound source artifacts, compiled script hashes, addresses, network, package versions and known limits.

Fourth, external audit or review manifests need to exist before any mainnet claim.

Finally, the Sage widget can move beyond activity feed embedding into a full paid widget: chat, quote, verify, receipt link and tenant config.

In machine-readable form, the mainnet gate now reports:

```text
completed = 4
pending = 2
```

The two remaining trust gates are external review and audit-bound mainnet script identity.

## Why this matters

The most interesting part is not that the site has more pages.

The interesting part is that the site is starting to behave like the system it describes.

An agent economy needs:

- machine-readable terms;
- payment proofs;
- verification receipts;
- settlement receipts;
- public status;
- developer tools;
- signed evidence;
- strict readiness gates.

Those pieces are now appearing on the same public surface.

That is the right direction for Ergo.

Ergo's strengths are not noise-cycle features. They are explicit state, deterministic validation, programmable spending conditions, native tokens, PoW settlement and ErgoScript predicates.

Autonomous agents need that kind of substrate.

They need rules they can inspect before acting. They need receipts they can verify later. They need payment instruments that encode more than "money moved."

Ergoblockchain.org is becoming the place where that stack can be inspected in public.

Not just described.

Proven.

## FAQ

### Is Sage live on mainnet?

No. Sage is a hosted testnet proof. It has a real Ergo testnet settlement trail, a full post-Blob receipt bundle and signed L1 evidence, but it should not be treated as audited mainnet payment infrastructure.

### What should developers inspect first?

Start with `/api/agent-economy/live`, then inspect the Sage receipt API and the signed evidence artifact. The article is the story; those endpoints are the source of truth.

### Why does MCP matter here?

MCP gives agents and compatible clients a machine-facing entry point. The site should serve humans through pages and agents through tools.

### What is the next strongest proof?

External review and audit-bound mainnet identity. The full receipt bundle, signed L1 evidence, registry evidence, testnet signer evidence and observed testnet script identity already exist; the next trust layer is independent review.

### When can the site claim mainnet readiness?

Only after an external audit/review report, audit-bound script identities, package versions and production signer controls are published for the relevant production flow. Signed Sage L1 evidence is a completed gate, not the whole gate.
