---
title: "Accord Protocol Q2 2026 Update: What Shipped in Ergo’s Agent Economy Stack"
slug: "/blog/ergo-agent-economy-q2-2026"
seo_title: "Accord Protocol Q2 2026: AI Agent Payments SDK, MCP Server and Ergo Testnet Demos"
meta_description: "Accord Protocol Q2 2026 update: AI agent payment SDKs, Ergo Notes, MCP tooling, Sage's hosted testnet proof, and the audit-gated mainnet roadmap."
excerpt: "Accord Protocol now ships a testnet-first agreement layer, full Note lifecycle, framework adapters and MCP tooling, with Sage providing the first hosted testnet proof and durable full receipt storage for new paid turns."
author: "Ergo Developer Relations"
date_published: "2026-05-06"
date_modified: "2026-05-20"
status: "Testnet beta. Mainnet usage of Accord, ChainCash/Basis reference contracts and agent-payment SDK flows remains gated by signed audit manifests."
tags: ["Accord Protocol", "Ergo", "AI agent payments", "MCP", "x402", "developer update"]
target_keywords: ["Accord Protocol", "AI agent payments SDK", "Ergo agent payments", "MCP server payments", "x402 work verification", "autonomous agent settlement"]
---

# Accord Protocol Q2 2026 Update: What Shipped in Ergo’s Agent Economy Stack

**Status as of May 2026:** Ergo’s base protocol primitives are live on mainnet. Accord Protocol, the Ergo agent-payment SDKs, ChainCash/Basis reference contracts and the public demos are **testnet-first** unless explicitly marked otherwise. Mainnet production use should remain blocked until signed audit manifests are published and verified.

Two months ago the first public Ergo agent-payment SDK answered a narrow question: can an autonomous software agent make a payment on Ergo without a human sitting in the loop? The answer was yes, but the first release was deliberately small. It could send value, issue a basic Note, expose a few helpers and prove the direction.

Q2 changes the shape of the project. The work has moved from a single Ergo rail SDK into **Accord Protocol**: an open agreement protocol for autonomous agent work. The Ergo rail remains the first end-to-end reference implementation, but the framing is now broader. MCP explains how agents call tools. A2A-style protocols explain how agents communicate. x402-style flows explain how a paid HTTP request can happen. Accord explains what was promised, how completion was verified, and how settlement was recorded.

That distinction matters. Payment alone is not the whole problem. A paid API call only tells you that money moved. Agent commerce also needs an agreement: who requested the work, what output was expected, what verifier accepted it, what rail settled it, and what happens if the work is partial, late or invalid. Accord is the layer that turns a payment into a verifiable work contract.

## TL;DR

### Accord is now the umbrella protocol

The former `ergo-agent-economy` repository has migrated to Accord Protocol. The repo now describes a rail-agnostic agreement layer with Ergo, Rosen, Base/EVM and x402-compatible reference rails. The Ergo rail still provides the most complete end-to-end implementation because eUTXO, ErgoScript, Notes, Reserves and acceptance predicates fit the design naturally.

### The stack is testnet-first and audit-gated

The project is open source and working, but not production-certified. The repo status is explicit: **testnet beta** and **mainnet blocked until signed audit manifests**. Builders should treat the current code as a reference implementation for prototypes, demos and testnet deployments.

### Sage is now the first hosted testnet proof

Since this article first shipped, Sage on ergoblockchain.org has moved from roadmap item to live testnet proof: a 402-style premium flow, a public activity feed, one real Ergo testnet redemption transaction, durable full receipt storage for new paid turns, and signed Sage L1 conformance evidence for the first post-Blob full receipt bundle. The first settlement receipt remains chain-proof-only because it predates storage. The published `@ergoblockchain/sage-widget` v0.1.0 package exposes the activity-feed component. The MCP endpoint is live at `mcp.ergoblockchain.org`.

### The Note lifecycle is now implemented end to end

The Ergo rail now covers the full Reserve → Note → Tracker → Acceptance Predicate path: creating a Reserve, issuing Notes, checking Notes, redeeming Notes, settling batches and deploying Tracker state. That is the minimum viable lifecycle for programmable bearer instruments.

### Three developer surfaces are available

TypeScript/Node, Python and MCP tooling let builders approach the stack from different runtimes. A JavaScript agent can issue Notes. A Python agent can pay an API. An MCP-compatible host can expose payment tools to an AI assistant or developer environment.

### The next bottleneck is audit and operations evidence

Durable receipt storage and signed Sage L1 conformance evidence are live for the first post-Blob receipt. The next phase is updated registry evidence, a permanent controlled signer endpoint, exact script identity manifests, external security review, clear status manifests, and more framework integrations.

## Naming and migration

The rebrand created a necessary distinction that every developer should understand before building.

| Layer | Canonical name | What it means |
|---|---|---|
| Umbrella protocol | Accord Protocol | Agreement, verification receipts, settlement receipts and cross-rail specs. |
| Canonical packages | `@accord-protocol/*` | Shared types, conformance tools, Accord/MCP, Accord/402 and cross-rail protocol objects. |
| Ergo reference rail | `ergo-agent-*` packages | The Ergo-specific SDKs for Notes, Reserves, Trackers, acceptance predicates and testnet demos. |
| Reference contracts | ChainCash / Basis prototypes | Open-source reference implementation of programmable Notes and credit flows; not audited. |

A simple rule of thumb: if you are reading the cross-rail spec, start with `@accord-protocol/*`. If you are building an Ergo testnet agent today, start with the `ergo-agent-*` rail packages. If you are deploying anything involving real user funds, stop at the audit gate.

## What shipped

### 1. Full Note lifecycle

The core milestone is the Note lifecycle. A Note is not merely a token. It is a programmable bearer instrument: a UTxO-shaped claim against a Reserve, with value, expiry, redemption rules and optional acceptance logic.

The current lifecycle includes:

1. **Create a Reserve** — deploy collateral and define issuance rules.
2. **Issue a Note** — create a programmable claim against the Reserve.
3. **Check a Note** — decode registers, expiry and acceptance parameters.
4. **Redeem a Note** — spend the Note when the predicate is satisfied.
5. **Settle a batch** — redeem multiple Notes together to reduce settlement overhead.
6. **Update a Tracker** — prevent double-redemption across the credit system.

For agents, this is the difference between “send a coin” and “issue spendable budget with rules.” A parent agent can issue a bounded Note to a sub-agent. The sub-agent can pay a tool provider. The tool provider can later redeem accepted Notes in a batch. The Reserve remains the auditable source of backing.

### 2. Agreement, verification and settlement receipts

Accord adds a vocabulary above the rail.

An **Accord Agreement** answers: what was requested, by whom, for how much, under which verification rule?

A **Verification Receipt** answers: did a verifier accept, reject or partially accept the work?

A **Settlement Receipt** answers: did value settle, on which rail, with which transaction or payment proof?

That separation is the main strategic upgrade. It means Accord can talk to x402-style HTTP payments, Ergo Notes, stablecoin rails or future settlement systems while preserving the same work-agreement structure.

## Ten examples builders can run

The repo now includes a practical sequence rather than a single hello-world:

1. Basic agent-to-agent payment.
2. Note payment instead of raw ERG.
3. Acceptance predicate attached to task output.
4. Orchestrator budget for sub-agents.
5. Paid API server.
6. Python agent paying for an API call.
7. Streaming pay for usage-based services.
8. Treasury multisig for multi-agent budgets.
9. CrewAI multi-agent settlement example.
10. AutoGen agent with an Ergo payment tool.

The examples should remain testnet-first. That is a feature, not a weakness. Agent payments are a new surface area: key custody, replay protection, refunds, partial work, verifier trust and failed settlement all need careful handling before mainnet flows are recommended.

## Framework adapters

Agent builders do not want to become blockchain specialists before shipping a prototype. The SDK direction is therefore correct: meet developers inside the frameworks they already use.

### LangChain

LangChain examples expose payment and Note operations as tools. A chain or agent can request a paid resource, check whether a Note was accepted, and continue once payment or verification completes.

### OpenAI function calling

The OpenAI-style function interface turns payment into a callable operation. The model does not need to understand UTxO details; it receives a constrained tool definition and the host application enforces policy.

### CrewAI and AutoGen

Multi-agent frameworks make the payment problem more obvious. A coordinator assigns work to agents. Agents call APIs, delegate subtasks and produce outputs. Without internal budget instruments, all costs collapse back to the human operator. Notes allow the budget to move with the task.

### MCP

MCP matters because it is a practical bridge between AI assistants, developer tools and external capabilities. An MCP payment server can expose “pay,” “issue Note,” “check Note” or “verify work” to a compatible host. That makes payment a tool, not a custom integration.

## Where x402 fits

x402 is important because it brings back HTTP 402 Payment Required as a real programmatic payment pattern. A server can respond with payment instructions, the client can attach a payment payload, and a facilitator can verify and settle the payment. That is a clean interface for paid APIs, paywalled content and machine-to-machine requests.

Accord should not pretend to replace x402. The stronger positioning is:

> **x402 verifies payment. Accord verifies completion. Ergo settles programmable value.**

A paid request can use an x402-style challenge. The work agreement can be recorded in Accord. The settlement can happen through Ergo Notes, Rosen assets, an EVM stablecoin rail or another adapter. The important point is not which rail wins every payment; it is whether the agreement, verification and settlement are composable.

## What you can build today

Use the current stack for testnet experiments such as:

- a paid API endpoint that returns data after a verified testnet payment;
- an MCP tool that charges per call;
- a parent agent that issues Notes to sub-agents with spending limits;
- a work marketplace where the buyer pays only after a verifier accepts output;
- a streaming inference demo with small metered payments;
- a documentation demo showing the difference between payment verification and work verification.

Do not use the unaudited reference contracts for real-money credit issuance. Do not hold user funds. Do not advertise production readiness before the audit manifests exist.

## Roadmap for the rest of 2026

### 1. External audit and signed manifests

The top priority is security review. A signed audit manifest should specify the exact script hash, compiled ErgoTree, package version, rail adapter and deployment network. “Audited” must mean a specific artifact, not a broad claim.

### 2. Standard discovery

Agents need a predictable way to discover payment terms. A future standard could expose `.well-known/accord.json`, HTTP headers or an x402-compatible extension describing price, rail, accepted assets, verification rule and refund policy.

### 3. Hosted testnet reference dApp and conformance evidence

Sage now covers the first hosted testnet proof: a builder can open the site, trigger a 402-style premium flow, verify a testnet Note, inspect a real settlement transaction, inspect a post-Blob full receipt bundle, and verify signed Sage L1 conformance evidence. The remaining reference-dApp work is registry evidence, permanent signer operations, exact script identity and audit manifests that external tools can verify without relying on article prose.

### 4. Conformance tests

Every rail adapter should produce comparable agreement, verification and settlement receipts. Conformance tests are what make Accord a protocol instead of a collection of examples.

### 5. More framework integrations

LangGraph, LlamaIndex, Vercel AI SDK, DSPy and local agent frameworks should all have simple payment hooks. The best SDK is the one a builder can add without changing their application architecture.

## Implementation notes for builders

Start on testnet. Use small values. Use explicit allowlists. Keep private keys out of source code. Add replay protection to every paid action. Treat verification as a separate step from payment. Log both payment receipts and work receipts. Make refunds and failed-work handling explicit.

A good demo does not hide failure modes. It shows them.

## FAQ

### Is Accord Protocol production-ready?

No. The current public repo is a testnet-first reference implementation. It is useful for prototypes, demos and developer exploration. Mainnet production use should remain blocked until signed audit manifests identify reviewed scripts, package versions and rail adapters.

### What is the difference between Accord and Ergo agent payments?

Accord is the agreement layer: terms, verification receipts and settlement receipts. Ergo agent payments are one rail implementation: Notes, Reserves, Trackers and acceptance predicates on Ergo. Accord can describe work agreements across rails; Ergo provides the most complete programmable settlement primitive set today.

### Why keep `ergo-agent-*` packages after the Accord rebrand?

Because they remain useful as Ergo-specific entry points. The canonical umbrella may be Accord, but builders who want to create Ergo Notes or run testnet Ergo examples still need rail-specific SDKs. The key is to label them clearly as reference rail packages.

### How is Accord different from x402?

x402 focuses on payment over HTTP: a resource requires payment, the client submits a payment payload, and verification/settlement unlocks access. Accord focuses on work agreements: what was promised, how it was verified and how settlement was recorded. They can compose well.

### What should the next demo show?

Sage now shows the first version of that flow, including a post-storage paid receipt and signed Accord L1 evidence. The next demo should close the operations gap with a permanent signer endpoint, registry evidence, exact script identity, audit manifests, and the same Ergo Note settlement path.

## Article JSON-LD draft

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Accord Protocol Q2 2026 Update: What Shipped in Ergo’s Agent Economy Stack",
  "description": "Accord Protocol Q2 2026 update: AI agent payment SDKs, Ergo Notes, MCP tooling, Sage's hosted testnet proof and the audit-gated mainnet roadmap.",
  "datePublished": "2026-05-06",
  "dateModified": "2026-05-16",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026",
  "keywords": ["Accord Protocol", "AI agent payments", "Ergo", "MCP", "x402", "testnet"]
}
```

## Source notes

- Current blog article: https://www.ergoblockchain.org/blog/ergo-agent-economy-q2-2026
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- x402 documentation: https://docs.cdp.coinbase.com/x402/welcome
- Article structured data guidance: https://developers.google.com/search/docs/appearance/structured-data/article
