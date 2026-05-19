---
title: "Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy"
slug: "/blog/agent-economy-live-proof-site-update"
seo_title: "Ergo Agent Economy Site Update: Live Hub, MCP, Sage Receipts and Testnet Roadmap"
meta_description: "What is now live on ergoblockchain.org: Agent Economy Live Hub, MCP endpoint, Sage testnet payments, receipt storage, ErgoScript playground, and the audit-gated roadmap."
excerpt: "The Ergo site is no longer only a documentation and narrative surface. It now exposes live agent-economy infrastructure: Agent Hub, MCP, Sage receipts, an ErgoScript playground and clear testnet/mainnet gates."
author: "Ergo Developer Relations"
date_published: "2026-05-18"
date_modified: "2026-05-18"
status: "Public site update. The website infrastructure is live; Sage/Accord payment flows remain testnet-first and audit-gated until signed conformance evidence and mainnet manifests are published."
tags: ["Ergo", "Agent Economy", "Sage", "MCP", "Accord Protocol", "ErgoScript Playground"]
target_keywords: ["Ergo agent economy", "AI agent payments", "Sage AI agent", "MCP endpoint", "Accord Protocol receipts", "ErgoScript playground"]
---

# Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy

For years, blockchain websites have mostly been narrative surfaces. They explain the protocol, link to wallets, list ecosystem projects, publish documentation and argue for a point of view.

Ergoblockchain.org still does those things. But the site is now moving into a different role: it is becoming a live proof surface for the Ergo agent economy.

That means the website is no longer only where we describe autonomous payments, programmable work agreements and machine-readable settlement. It is also where the pieces can be inspected: public endpoints, receipt APIs, an Agent Economy cockpit, a testnet Sage payment flow, an MCP endpoint, an ErgoScript playground and explicit gates around what is live, what is testnet and what is not ready for mainnet claims.

This article is a clean status update: what is working now, what remains experimental, and where the site is going next.

## TL;DR

### The site now has a live Agent Economy surface

The new Agent Economy Live Hub gives humans and machines one place to inspect the state of Sage, receipts, MCP, playground work, widget work and mainnet readiness gates.

### MCP is live as public infrastructure

`mcp.ergoblockchain.org` now resolves to the public MCP service. `/health` is for checks, while `/mcp` is the Streamable HTTP endpoint for MCP clients.

### Sage has a real Ergo testnet settlement trail

Sage has already produced a real Ergo testnet redemption transaction. New Blob-era paid turns can persist the full receipt bundle: Agreement JSON, Verification Receipt JSON and Settlement Receipt JSON.

### The important caveat remains testnet first

Sage/Accord is not being presented as audited mainnet infrastructure. The correct status is live website infrastructure, testnet payment proof, audit-gated mainnet path.

### The destination is a live cockpit, not just a blog

The long-term direction is a site where developers, wallets, agents and community members can inspect the state of the agent economy from the same public source of truth.

## What Changed

The last build cycle moved the site from "content plus demos" toward "content plus evidence."

Before, a reader could learn the thesis:

- autonomous agents need programmable money;
- payments alone are not enough;
- work agreements need verification receipts;
- Ergo's eUTXO model is a strong fit for deterministic agent settlement;
- Accord gives the stack a shared vocabulary for Agreement, Verification Receipt and Settlement Receipt.

Now the site can also expose live surfaces around that thesis.

An agent or developer can hit an endpoint. A user can open a receipt page. A wallet or dashboard can read a status API. A builder can test ErgoScript in the browser. The Agent Hub can show which parts are live, which are degraded and which are gated until evidence exists.

That shift matters because the agent economy cannot be proven by copywriting. It needs inspectable artifacts.

## What Is Live Now

The table below separates live website infrastructure from testnet protocol claims.

| Surface | Where | What it does | Current status |
|---|---|---|---|
| Agent Economy Live Hub | `/agent-economy/live` and `agents.ergoblockchain.org` | A cockpit for the agent-economy stack: Sage, receipts, MCP, widget work, playground and readiness gates. | Live website surface. |
| Agent status API | `/api/agent-economy/live` | Machine-readable summary for dashboards, agents and future widgets. | Live API. |
| Public MCP endpoint | `mcp.ergoblockchain.org` | MCP Streamable HTTP endpoint plus health checks. | Live infrastructure. |
| Sage paid flow | Sage on the site | 402-style premium request, testnet Note verification and settlement trail. | Testnet proof. |
| Sage receipt API | `/api/sage/receipt/<id>` | Machine-readable receipt source of truth for Sage evidence. | Live API; full bundle appears for new Blob-era paid turns. |
| Blob receipt storage | Vercel Blob | Durable storage for Agreement JSON, Verification Receipt JSON and Settlement Receipt JSON. | Storage configured and healthy. |
| ErgoScript Playground | `/build/playground` | Browser workbench for ErgoScript examples and sigma-rust WASM. | Live developer surface. |
| Sage widget source | `sage-widget` repo | Activity feed package today, with paid widget surface moving toward chat, quote, verify, receipt link and tenant config. | Source prepared; publish lifecycle remains separate. |

This is the right shape for a proof surface: not one giant "demo," but several small, inspectable surfaces that can be composed.

## Sage Is The First Hosted Testnet Proof

Sage is the AI concierge on the site. Free questions stay free. Premium-shaped requests trigger a payment gate.

The payment flow is intentionally close to an HTTP 402 pattern:

1. A user asks a premium-shaped question.
2. Sage returns payment requirements instead of pretending the answer is free.
3. The user creates an Ergo testnet Note.
4. Sage verifies the Note against the quote and task hash.
5. Sage serves the premium answer.
6. When the signer path is available, Sage redeems the Note on Ergo testnet.
7. The receipt API and receipt page expose the result.

This proves something specific and useful: an AI agent interaction can be bound to a payment quote, verified against an on-chain testnet artifact and then exposed as a public receipt trail.

It does not prove everything yet. That distinction is important.

The first real Sage settlement happened before durable receipt storage was added, so that early receipt remains chain-proof-only. Blob storage is now live for new paid turns. The next paid Sage turn after that deployment is the one that should produce the first full receipt bundle.

That bundle is the object we care about:

| Receipt piece | Why it matters |
|---|---|
| Agreement JSON | Records what was requested, price, task hash, verifier and payment terms. |
| Verification Receipt JSON | Records what Sage verified before serving the premium response. |
| Settlement Receipt JSON | Records how the payment settled on-chain. |

Without the Agreement JSON, an old transaction cannot fully reconstruct what was promised. The chain can prove a transaction existed. It cannot recover the whole work agreement if the site never stored it.

That is why receipt storage matters. It turns "a transaction happened" into "this exact work agreement was verified and settled."

## MCP Is A Public Entry Point For Agents

The MCP endpoint is another important part of the site direction.

Humans browse pages. Agents call tools.

If the website is going to support the agent economy, it needs both surfaces. A page can explain the protocol. An MCP endpoint can expose capabilities to compatible clients and agent hosts.

The domain now reflects that:

- `https://mcp.ergoblockchain.org/health` is for health checks.
- `https://mcp.ergoblockchain.org/mcp` is the Streamable HTTP MCP endpoint.

Opening the root URL in a browser may show a simple "not found" style response. That is fine. The root is not the product. The health route and MCP route are the actual service surfaces.

Over time, this can become the machine-facing side of the site: payment tools, receipt lookup, protocol status, developer discovery and conformance evidence.

## Agent Hub Is The Human Cockpit

The Agent Hub is the human-facing cockpit for the same idea.

The goal is not to create another marketing landing page. The goal is to gather the live parts of the stack into one scan-friendly surface:

- what is live;
- what is testnet;
- what is degraded;
- what is blocked by external actions;
- what has evidence;
- what still needs audit or conformance artifacts.

This is useful for developers because they can see where to start. It is useful for community members because it shows actual progress instead of vague roadmaps. It is useful for agents because the same state can be mirrored through APIs.

The most important design principle is that Agent Hub should not become a second database of truth.

The site now follows a simpler rule:

> Receipt data lives once. Other surfaces display it or link to it.

For Sage, `/api/sage/receipt/<id>` should be the machine-readable source of truth. The receipt page should render it. Blog posts should tell the story and link to it. Registry entries should summarize and link to evidence.

That keeps the stack auditable.

## ErgoScript Playground Is The Developer Workbench

The ErgoScript Playground gives the site a builder surface instead of only a reader surface.

This matters because the agent-economy thesis is inseparable from ErgoScript. Acceptance predicates, Notes, Reserves, Trackers and settlement rules are not just slogans. They are code paths.

The playground lets developers inspect and experiment with script-shaped ideas directly in the browser. Monaco provides the editing surface. sigma-rust WASM gives the path toward real ErgoScript tooling in the client.

The long-term version of this is bigger than a playground:

- examples for common agent-payment predicates;
- task-hash verification templates;
- Note expiry examples;
- verifier-signature examples;
- contract identity manifests;
- links from blog posts and docs into runnable snippets.

That is where educational content becomes executable content.

## What Is Deliberately Not Claimed

The site now has more live infrastructure, so the claims need to be stricter, not looser.

Here is the honest boundary:

| Area | Current claim | What is not claimed yet |
|---|---|---|
| Ergo base chain | Ergo is live. | This article does not claim new consensus functionality. |
| Sage | Hosted testnet proof with real settlement trail. | Not audited mainnet payment infrastructure. |
| Accord receipts | Storage path is live for new paid turns. | No full protocol pass until a Blob-era receipt is generated and conformance is signed. |
| MCP | Public endpoint is live. | Not a guarantee that every future tool is production ready. |
| Widget | Package and source surfaces exist. | The full embeddable paid chat widget is still the next level. |
| Mainnet | Mainnet gate is intentionally closed. | No production readiness claim before audit manifests and exact script identity are published. |

This posture is not modesty for its own sake. It is how infrastructure becomes credible.

If a website claims "production ready" before signed artifacts, exact script hashes, signer runbooks and audit manifests exist, it weakens the whole project. A better strategy is to let public evidence accumulate and make the next gate obvious.

## Where The Site Is Going

The helicopter view is simple:

Ergoblockchain.org is becoming the public operating surface for Ergo's agent economy.

That has five layers.

| Layer | What it should become |
|---|---|
| Narrative | Clear articles explaining why eUTXO, PoW, ErgoScript, Notes and receipts matter for autonomous agents. |
| Developer workbench | Playground, examples, quickstarts, SDK links and runnable scripts. |
| Live cockpit | Agent Hub with status, activity, receipts, endpoints and readiness gates. |
| Machine interface | MCP, JSON APIs, receipt lookup and registry evidence that agents can consume. |
| Trust layer | Signed conformance artifacts, audit manifests, script identities and mainnet gates. |

The site should not merely say "Ergo is good for agents." It should show the agent stack operating in public.

The best future version feels like this:

- a developer opens Agent Hub and sees what is live;
- an agent calls MCP to discover tools;
- a paid Sage task creates a full receipt bundle;
- a registry entry links to signed evidence;
- a playground example shows the predicate behind the payment;
- a wallet or dashboard can verify the status without trusting a blog post.

That is a much stronger claim than a whitepaper. It is a live, inspectable system.

## Next Milestones

The next steps are concrete.

### 1. Run one new paid Sage flow after Blob

This is the immediate proof task. One new paid Sage turn should create a full receipt bundle under `/api/sage/receipt/<id>`.

The expected status should move from chain proof to full receipt bundle.

### 2. Run Accord conformance

Once the full bundle exists, it should be checked against the Accord conformance path. The output should be a signed artifact, not just a developer note.

### 3. Update registry evidence

The Accord or Sage registry entry should link to the conformance evidence and receipt bundle without duplicating the entire receipt object.

### 4. Harden signer operations

The signer path needs operational polish: health display, failure logging, limits, monitoring, fallback/runbook and clearer redemption failure visibility.

### 5. Expand Sage widget v0.1 toward a paid widget

The next widget level is not only an activity feed. It should become an embeddable paid Sage surface: chat, quote, verify, receipt link and tenant configuration.

### 6. Keep mainnet behind the audit gate

Before mainnet claims, the site should publish exact script identity, audit manifests, package versions and signed contract evidence.

## Why This Is Cool

The cool part is not that the site has more pages.

The cool part is that the site is starting to act like the thing it describes.

An agent economy needs:

- human-readable explanation;
- machine-readable status;
- payment terms;
- receipts;
- verification;
- settlement proof;
- developer tooling;
- public gates that separate demos from production.

Those pieces are now appearing on the same public surface.

That is the right direction for Ergo. The chain's strongest advantages are not hype-cycle features. They are boring-in-a-good-way primitives: explicit state, programmable spending conditions, predictable validation, native tokens, PoW settlement and composable contracts.

Autonomous agents need exactly that kind of boring substrate. They need rules they can inspect before acting. They need receipts other systems can verify later. They need payment instruments that can encode more than "money moved."

The site is now being reshaped around that idea.

## FAQ

### Is Sage live on mainnet?

No. Sage is a hosted testnet proof. It has a real Ergo testnet settlement trail and live website infrastructure, but it should not be treated as audited mainnet payment infrastructure.

### What is the most important next proof?

One new paid Sage turn after Blob storage. That should produce a full receipt bundle with Agreement JSON, Verification Receipt JSON and Settlement Receipt JSON.

### Why does the MCP root show a simple error in the browser?

Because the root route is not the MCP service. Use `/health` for health checks and `/mcp` for MCP Streamable HTTP clients.

### Why not put all receipt data in the blog article?

Because articles should not be databases. The source of truth should be `/api/sage/receipt/<id>`. Articles should explain the story and link to evidence.

### When can the site claim mainnet readiness?

After signed conformance evidence, audit manifests, exact script identities, package versions and operational signer controls are published for the relevant production flow.
