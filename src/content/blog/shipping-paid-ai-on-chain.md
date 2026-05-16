---
title: "Shipping Sage: a paid AI agent settled on Ergo testnet"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "Shipping Sage: a paid AI agent settled on Ergo testnet"
meta_description: "How Sage, the AI concierge on ergoblockchain.org, moved from verify-only paid answers to a real Ergo testnet redemption transaction using the Accord Protocol pattern."
excerpt: "Sage now has a real Ergo testnet settlement trail and durable full receipt storage for new paid turns: Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and a chain-anchored public receipt API."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-16"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# Shipping Sage: a paid AI agent settled on Ergo testnet

For the last six months [the site you are on](https://www.ergoblockchain.org) argued a thesis: autonomous AI agents will need programmable money - bounded credit, machine-readable terms, work verification, and settlement receipts. The [Agent Economy Manifesto](/blog/agent-economy-manifesto) made the case. The architecture page laid out the [agent-payment primitives](/build/agent-payments). The blog explained [why agents cannot simply use Stripe](/blog/agents-cant-use-stripe).

That was theory. Sage is the working testnet demo.

**Sage** is the chat widget in the bottom-right corner of ergoblockchain.org. Free questions stay free. Premium questions - code-shaped, deep-research, long, or explicit `/command` requests - trigger an HTTP 402-style payment flow. The user issues an Ergo testnet Note, Sage verifies it, serves the premium answer, and, when the signer is available, redeems the Note on-chain.

As of 2026-05-15, Sage has produced a real Ergo testnet redemption transaction:

```text
f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef
```

- Explorer: <https://testnet.ergoplatform.com/transactions/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef>
- Public receipt: <https://www.ergoblockchain.org/r/sage/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef>
- Receipt JSON: <https://www.ergoblockchain.org/api/sage/receipt/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef>
- Live activity feed: <https://www.ergoblockchain.org/api/sage/activity>

This post is the build log: what Sage does, what is proven, what is still deliberately not claimed, and what has to ship next before we can call the Sage pilot a full protocol pass.

Update as of 2026-05-16: durable receipt storage is live for new paid Sage turns. The first settlement transaction above predates that storage layer, so it remains a chain-proof receipt. New post-storage paid turns can now persist the full Agreement, Verification Receipt, and Settlement Receipt bundle in `/api/sage/receipt/<id>`.

## What Sage Does

Sage is a single-site agent-economy concierge:

- **Free tier** - Claude Haiku over an indexed corpus of Ergo docs and blog posts. Short answers, conservative refusal behavior, rate-limited per IP.
- **Premium tier** - Claude Sonnet with deeper retrieval, larger answer budget, and a payment gate. One premium turn costs `0.001` testnet ERG.
- **Receipts** - paid turns resolve to public Sage receipt pages. The first full redemption also appears in Sage's live activity feed and the Ergo testnet explorer.

The premium gate is intentionally conservative. It triggers on explicit `/command` prefixes, code-request hints, deep-research phrasing, very long questions, or multi-turn follow-ups in a long thread. The heuristic lives in `src/lib/sage/payments/gate.ts`. We bias toward false negatives: under-charge early users rather than surprise them.

## The Primitives Doing The Work

Sage is not a custom one-off payment widget. It uses the same vocabulary the [Accord Protocol](https://github.com/accord-protocol/accord-protocol) defines:

| Primitive | What it does in Sage |
|-----------|----------------------|
| **Reserve** | A `0.1` ERG box on Ergo testnet that backs Sage's Note flow. One-time setup. Reserve box `4af1816c...628a4d` was created in tx `195f769d...1f041`. |
| **Note** | A testnet ERG bearer instrument issued for a premium turn. The live proof Note carried `0.001` ERG, a reserve reference in R4, expiry in R5, and the task hash in R6. |
| **Task binding** | Sage verifies `blake2b256(task_output)` against the Note's R6 through the Accord Ergo rail before serving the premium answer. In the current live path this is an Accord/rail verification guarantee, not a claim that a custom audited ErgoScript enforced every predicate on mainnet. |
| **Settlement receipt trail** | Once redeemed, the Note spend becomes visible on Ergo testnet and the receipt page can anchor to the settlement transaction. |

That last nuance matters. The architecture is designed for stronger script-level enforcement, and the SDK supports compiled script paths, but the current public Sage proof should be described precisely: **testnet Note verification plus real on-chain redemption**, not audited mainnet custody and not a completed mainnet-ready spending-condition audit.

## End-To-End Lifecycle Of One Paid Query

```text
1.  User asks a premium-shaped question.
2.  Widget POST /api/sage/chat -> server returns a payment-required response.
3.  Widget POST /api/sage/quote -> server returns SageQuote:
      receiver_address  3Wz1Lmu...AY28w
      reserve_box_id    4af1816c...628a4d
      task_hash         blake2b256(canonicalized question)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        quote freshness deadline
4.  Payment panel renders the quote with copy buttons and instructions.
5.  Buyer issues a Note with R4=reserve, R5=expiry, R6=task_hash.
6.  Note tx confirms on Ergo testnet.
7.  Buyer pastes note_box_id into the panel and clicks Verify.
8.  Server POST /api/sage/verify-payment:
      - rails-ergo fetches the Note from chain
      - checks R4 reserve binding
      - checks R5 expiry
      - checks R6 task hash
      - checks value >= price
9.  Server returns a payment token and receipt reference.
10. Widget resumes the chat with paymentToken.
11. /api/sage/chat routes to the premium model path.
12. Premium answer streams back to the user.
13. If the signer is available, Sage redeems the Note.
14. The settlement tx becomes visible on Ergo testnet and on /r/sage/<id>.
```

The first confirmed full redemption landed at Ergo testnet block `345673`.

## What Changed After The First Ship

The first Sage version shipped in **verify-only mode**.

That meant Sage verified the buyer's Note and delivered the premium response, but deferred the final seller redemption transaction. This was deliberate. Putting a seller wallet private key directly into a serverless environment is poor operational hygiene: compromise of an LLM API key should not imply compromise of the payment wallet.

The signer is now wired for the live testnet flow.

That moves Sage from "verified, settlement pending" to "settled on Ergo testnet" for the first proof transaction. The public activity feed now reports a `settlement` event, and the receipt page for the settlement tx returns HTTP 200.

## What Is Proven

The current public proof shows that:

- Sage can detect a premium request.
- Sage can price it as an Ergo testnet Note.
- A buyer can issue the Note.
- Sage can verify the Note against the quote.
- Sage can serve the premium answer after verification.
- Sage can redeem a Note on Ergo testnet.
- The settlement transaction is externally visible.
- Other agents, dashboards, or conformance tools can poll the activity feed instead of trusting a screenshot.

That is a real milestone.

## What Is Not Proven Yet

This does **not** certify mainnet use.

It also does **not** make the Sage pilot a full Accord protocol `pass` yet.

The remaining piece is conformance evidence. The storage path for full receipt bundles is now implemented, but a protocol pass needs one new paid Sage turn after the Blob deployment, then an external conformance run against the stored bundle.

The honest status is:

> On-chain Sage settlement is proven. Full receipt storage is live for new receipts. Signed conformance evidence is still pending.

That distinction is important. Old chain-only receipts cannot be magically upgraded because the original Agreement and signed verification receipt were not stored at the time. New receipts can carry the full bundle.

## Code Surface

The Sage payment path lives in a small set of files:

```text
src/lib/sage/
├── retrieve.ts                 Retrieval over the doc index
├── rate-limit.ts               Per-IP sliding window
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() heuristics
│   ├── note-ops.ts             Explorer response normalization for rails-ergo
│   ├── token.ts                HMAC payment token, bound to question hash
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               signer URL, local seed, or verify-only fallback
│   └── types.ts                SageQuote, PaymentProof, result types
└── explorer/
    └── fetch-tx.ts             Testnet explorer fetcher and activity shaping

src/app/api/sage/
├── activity/route.ts           Public Sage chain activity feed
├── accord/route.ts             Accord/402 conformance bridge
├── chat/route.ts               SSE streaming endpoint, premium-aware
├── quote/route.ts              POST { question } -> SageQuote
├── receipt/[id]/route.ts       Public machine-readable receipt source of truth
└── verify-payment/route.ts     POST { quote, question, noteBoxId } -> token

src/app/[locale]/r/sage/[id]/
└── page.tsx                    Public receipt page

scripts/sage-signer/
├── bootstrap.mjs               Reserve and self-test helper
└── signer.mjs                  Standalone HTTP signer
```

The bulk of the complexity is not the chat UI. It is the payment boundary: canonicalizing the task, preserving the exact bytes being hashed, normalizing explorer data, and keeping the signing key outside the website runtime.

## Three Real Problems We Hit

### 1. Explorer Box Lookups Needed Fallbacks

Sage's verification path depends on reading a fresh Note box from Ergo testnet. In practice, the explorer shape was not as clean as a single happy-path endpoint. The code now wraps and normalizes the explorer response so the rail adapter sees the box shape it expects.

### 2. Registers Arrived As Objects, Not Plain Hex

The v1 testnet explorer can return `additionalRegisters` as objects like:

```text
{ serializedValue, sigmaType, renderedValue }
```

Some SDK paths expected plain serialized hex strings. Without normalization, register parsing fails before the rail can inspect R4/R5/R6. `src/lib/sage/payments/note-ops.ts` flattens those registers before handing them to the Accord Ergo rail.

### 3. Task Hashes Must Name The Exact Bytes

`rails-ergo` computes `blake2b256(task_output)` and compares it to the Note's R6.

That means `task_output` must be the exact canonicalized question bytes the Note committed to. A session-token hash, payment-token hash, or HMAC binding hash is not interchangeable.

This was the biggest implementation lesson: when two layers use hashes, variable names must say what is being hashed.

## Current Trust Posture

Sage is a live testnet demonstration.

The correct posture is still conservative:

- testnet only;
- no mainnet certification;
- no external audit claim;
- old pre-storage receipts may remain chain-proof-only;
- no claim of Accord conformance until the signed artifact is published;
- no claim that every future deployment is safe by copying this one;
- external audit and mainnet manifests still pending.

That is not weakness. It is the difference between a credible build log and marketing.

## What's Next

The next step is not "prove settlement" or "add storage." Those parts have happened.

The next step is to turn the implementation into evidence:

- create one new paid Sage turn now that Blob storage is live;
- confirm `/api/sage/receipt/<id>` returns `completeness: "full_receipt_bundle"`;
- run the Accord conformance runner against `/api/sage/accord`;
- sign the conformance artifact;
- publish the artifact URI in the Accord registry evidence.

After that, Sage can move from "settlement proven and storage-ready" to a protocol-level pass.

Then come the bigger roadmap items:

- surface the Accord provider registry on the site;
- show live agent activity in more places;
- expand the published `@ergoblockchain/sage-widget` v0.1.0 package from activity-feed components into a fuller reusable Sage embed;
- move the public MCP endpoint from the live Fly URL to `mcp.ergoblockchain.org` once DNS is live;
- run external audits before any mainnet claims;
- sign exact script/contract manifests before any controlled mainnet launch.

## Try It

[Open ergoblockchain.org](https://www.ergoblockchain.org). Bottom-right, click **Ask Sage**.

Free questions stay free. Premium-shaped questions trigger the testnet payment panel. Use testnet funds only.

The useful point is simple: this is no longer just a page about agent payments. It is a working testnet agent payment path with a real on-chain settlement trail.

## FAQ

### Why testnet and not mainnet?

Because mainnet requires external audits, signed manifests, and exact script or contract identity. The current Accord stack is still v0.x, and Sage is intentionally a testnet proof. Mainnet claims come later, after the audit artifacts exist.

### Does Sage still work without the signer?

Yes. If `SAGE_SIGNER_URL` and local signing are unavailable, Sage can still run in verify-only mode: it verifies the buyer's Note and can serve the premium answer, while redemption is deferred. The current public milestone is stronger than that: the signer has produced at least one real Ergo testnet redemption transaction.

### Is the current Sage pilot a full Accord pass?

Not yet. The chain settlement is real and full receipt storage is live for new paid turns, but the next public claim needs a signed conformance artifact generated from a post-storage receipt. Until then, the pilot is best described as settlement-proven, storage-ready, and conformance-pending.

### How is this different from x402?

x402 standardizes payment-required HTTP flows. Accord adds a work-agreement and receipt layer around rail-specific payment proofs. Sage demonstrates that pattern on Ergo testnet Notes; x402 can be another rail in the same broader model.

### Where do the Anthropic API costs go?

The website operator pays normal LLM API costs. Premium testnet payments are a protocol proof, not a production margin model. Mainnet economics are intentionally out of scope for this v0 testnet ship.
