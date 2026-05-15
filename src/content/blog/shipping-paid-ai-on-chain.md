---
title: "Shipping the first paid AI agent on a blockchain"
slug: "/blog/shipping-paid-ai-on-chain"
seo_title: "Shipping the first paid AI agent on a blockchain — Sage build log"
meta_description: "How Sage — the agent-economy concierge on ergoblockchain.org — was built end-to-end on Ergo testnet using the Accord Protocol. Architecture, code surface, three real bugs we hit, and what verify-only mode means."
excerpt: "Sage is a Claude concierge that takes 0.001 testnet ERG via an Accord Note for premium answers, settled on Ergo. The site now demonstrates the agent-economy thesis it argues for. This is the build log."
author: "Ergo Developer Relations"
date_published: "2026-05-15"
date_modified: "2026-05-15"
tags: ["Agent Economy", "Accord Protocol", "Sage", "build log", "Ergo testnet", "AI agent payments", "Claude", "Fleet SDK"]
target_keywords: ["paid AI agent on blockchain", "Sage Ergo concierge", "Accord Protocol live demo", "AI agent on-chain payment", "agent economy working demo"]
---

# Shipping the first paid AI agent on a blockchain

For the last six months [the site you're on](https://www.ergoblockchain.org) argued a thesis: autonomous AI agents will need programmable money — bounded credit, machine-readable terms, work verification, settlement receipts. The [Agent Economy Manifesto](/blog/agent-economy-manifesto) made the case. The architecture page laid out the [four primitives](/build/agent-payments). The blog explained [why agents can't use Stripe](/blog/agents-cant-use-stripe).

That was theory. As of this week, the site itself is the working demo.

**Sage** is the chat widget bottom-right of every page. Ask it anything substantive about Ergo, the agent economy, or Accord. The free tier is Claude Haiku 4.5 over an indexed corpus of the docs. Ask `/code` or anything that triggers the premium-detection gate, and Sage returns HTTP 402 with a quote: 0.001 testnet ERG, payable as an Accord Note pinned to a task hash. Pay it. Sage's rail adapter verifies the Note on chain, then Claude Sonnet 4.6 streams the answer. Every paid turn becomes a public receipt at `/r/sage/<box_id>` with Schema.org `Action` markup so search engines and AI engines can index the settlement.

This post is the build log. What it does, what it took, three bugs that ate hours, and what's honestly not done yet.

## What Sage is and what it does

Sage is a single-tenant agent-economy concierge:

- **Free tier** — Haiku 4.5 over BM25 retrieval of the indexed Ergo docs and blog. ~250-word answers. Refuses to invent code, refuses price talk, refuses off-topic. Costs ~$0.001 per turn on the Anthropic side; rate-limited per IP.
- **Premium tier** — Sonnet 4.6 with deeper retrieval (RAG_K=10 vs 5), 2400 max_tokens vs 800, and explicit reasoning. Gated by a 402 challenge: a paid Note on Ergo testnet unlocks one premium turn.
- **Receipts** — every paid turn produces a public URL with Note box id, issuance tx, value, deadline, and a Schema.org `Action` block that AI engines and crawlers can read.

The premium gate triggers when the user's question matches one of: explicit `/command` prefix, code-shaped intent, deep-research phrasing, length over 400 characters, or a multi-turn follow-up in a long thread. Heuristics in `src/lib/sage/payments/gate.ts`. We bias toward false negatives — better to under-charge than to surprise the first 100 users.

## The four primitives doing the work

Sage isn't built on a custom payment SDK. It composes the same four primitives the [Accord Protocol](https://github.com/accord-protocol/accord-protocol) defines and the manifesto argues for:

| Primitive | What it does in Sage |
|-----------|----------------------|
| **Reserve** | A 0.1-ERG box on Ergo testnet that backs every Note. One-time setup. Box id `4af1816c…` (verifiable on [explorer](https://testnet.ergoplatform.com/transactions/195f769dc25d36244c271ff8bdc2be65b3f184a0440459fb67116f9b55d1f041)). |
| **Note** | A bearer instrument issued against the Reserve. Carries 0.001 ERG, expires at `+120 blocks`, and has the question's task hash in register R6. |
| **Acceptance Predicate** | The ErgoScript spending condition embedded in the Note: blake2b256(task_output) == R6. Forces redemption to commit to the correct work. |
| **Tracker** | Optional in v0 — Sage's free tier doesn't need one because each Note is bound to a unique task hash; double-redemption is detected by chain state. |

Together these turn payment into a small contract for work. The Note isn't a transfer with a receipt attached — it *is* the receipt, with the redemption rule built in.

## End-to-end lifecycle of one paid query

```text
1.  User types: "/code show me a Fleet SDK example"
2.  Widget POST /api/sage/chat → server returns 402 with rationale
3.  Widget POST /api/sage/quote → server returns SageQuote:
      receiver_address  3Wz1Lmu…AY28w        (Sage testnet wallet)
      reserve_box_id    4af1816c…628a4d       (real on-chain Reserve)
      task_hash         9674cd…ced33          (blake2b256 of canonicalized question)
      price             0.001 testnet ERG
      deadline          +120 blocks
      expires_at        T+10min                (server-side quote freshness)
4.  PaymentPanel renders quote with copy buttons + "how to pay" walkthrough
5.  Buyer wallet (Nautilus / our bootstrap CLI / any compatible wallet)
    issues a Note with R4=reserve, R5=expiry, R6=task_hash
6.  Note tx confirms on Ergo testnet (~2 min)
7.  Buyer pastes note_box_id into the panel → Verify
8.  Server POST /api/sage/verify-payment:
      • rails-ergo verifyPayment fetches Note from chain
      • checks R4 reserve binding, R5 expiry, R6 task hash, value ≥ price
      • verified
9.  Server returns HMAC payment token + receipt id + (optionally) settlement tx
10. Widget resumes the chat with paymentToken
11. /api/sage/chat sees valid token → routes to Sonnet 4.6 + deeper RAG
12. Premium answer streams via SSE with "PREMIUM · paid" badge
13. "view receipt →" link points to /r/sage/<box_or_tx_id>
14. Receipt page server-renders with Schema.org Action markup
```

Twelve discrete steps. Two on-chain transactions (Note issuance + optional settlement). One LLM call. One public receipt page indexable by every search and AI engine in the world.

## Code surface — what we actually built

The whole thing fits in a small set of files. The bulk of the complexity lives in two places: the rail adapter wrapping (because the testnet explorer's API has quirks) and the wallet abstraction (because we don't put the signing key on Vercel).

```
src/lib/sage/
├── retrieve.ts                 BM25 retrieval over the doc index
├── rate-limit.ts               Per-IP sliding window
├── payments/
│   ├── agreement.ts            buildSageQuote() + canonicalizeQuestion()
│   ├── gate.ts                 decidePremium() heuristics
│   ├── note-ops.ts             ErgoNoteOps wrapper that normalizes
│   │                           v1 explorer's object-format registers
│   ├── token.ts                HMAC-SHA256 payment token, 30-min TTL,
│   │                           bound to question hash so a stolen
│   │                           token can't unlock a different question
│   ├── verify.ts               rails-ergo verifyPayment + settle
│   ├── wallet.ts               getSageAgent(): ErgoAgentPay singleton,
│   │                           signer = remote URL or local seed (or
│   │                           verify-only mode if neither configured)
│   └── types.ts                SageQuote, PaymentProof, etc.
└── explorer/
    └── fetch-tx.ts             Testnet explorer fetcher with v1 quirks

src/app/api/sage/
├── chat/route.ts               SSE streaming endpoint, premium-aware
├── quote/route.ts              POST { question } → SageQuote | { premium: false }
└── verify-payment/route.ts     POST { quote, question, noteBoxId } → token

src/components/sage/
├── SageWidget.tsx              Floating chat, orchestrates payment flow
├── PaymentPanel.tsx            402 → quote → input → verify
└── MessageBody.tsx             Minimal markdown renderer

src/app/[locale]/r/sage/[id]/
└── page.tsx                    Public receipt, Schema.org Action

scripts/sage-signer/
├── bootstrap.mjs               --reserve, --issue-note, --balance, --env-out
└── signer.mjs                  Standalone HTTP signer, Fleet SDK Prover
```

Total Sage code: ~2500 lines across the chat, the payments lib, the widget, the receipt page, and the bootstrap CLI. The bootstrap CLI is what created the on-chain Reserve and what we use to issue self-test Notes — it's also a useful reference for any other paid-MCP service that wants to ship on Ergo without writing the signer wiring from scratch.

## Three real problems we hit

### 1. The testnet explorer's `/boxes/{id}` endpoint is silently broken for unspent boxes

Sage's `verifyPayment` calls `ergo-agent-pay.checkNote(boxId)`. That hits the v1 explorer at `/boxes/{box_id}`. For SPENT outputs it works. For UNSPENT boxes — the case that actually matters, since we're verifying a freshly-issued Note that hasn't been redeemed yet — it 404s. The same box appears in `/boxes/unspent/byAddress/{addr}` perfectly.

The receipt page hit the same wall.

We work around it with a fallback in `fetch-tx.ts`: if the standalone lookup misses, scan the wallet's unspent list and find the match. It's ugly. It's the right move until we file an upstream fix or move off the v1 endpoint entirely.

### 2. The v1 explorer returns registers as objects, not hex strings

`ergo-agent-pay@0.3.0` types `additionalRegisters` as `Record<string, string>` and calls `regs.R5.slice(2)` to strip the sigma type prefix. The v1 testnet explorer actually returns each register as `{ serializedValue, sigmaType, renderedValue }`. The `.slice()` call dies with `e.slice is not a function` and the surrounding rails-ergo `verifyPayment` maps the error to `NOTE_NOT_FOUND`.

We wrap the agent with a Proxy in `note-ops.ts` that intercepts `network.getBox` and flattens any object-shaped registers to their `serializedValue` hex string. Drop-in `ErgoNoteOps` replacement. ~30 lines including imports. Once `ergo-agent-pay@0.4` accepts both shapes upstream, the wrapper goes away.

### 3. We were sending the wrong `task_output` to the rail

This one cost an afternoon. rails-ergo's `verifyPayment` computes `blake2b256(task_output)` and compares it to the Note's R6. The Note was issued with `R6 = blake2b256(canonicalize(question))`. So `task_output` must equal `canonicalize(question)` — the raw bytes whose hash matches R6.

We had been sending `hashQuestionForToken(question)` — a totally different HMAC hash used elsewhere for token-binding. Result: `TASK_HASH_MISMATCH` on every paid turn.

The fix is one line in `verify-payment/route.ts`. The lesson is the comment we left next to it: when two layers both involve hashing, name the variables for what they hash, not for what they're called in the protocol.

## What "verify-only mode" means and why we shipped it

Sage currently runs in **verify-only mode**: the `verifyPayment` step runs on every paid turn (read-only — no signature needed), but the second on-chain transaction (the one that redeems the Note and moves the 0.001 ERG into Sage's wallet) is **deferred**.

This is intentional, not a bug. Two reasons:

1. **The signing key lives outside Vercel.** Putting the seller wallet's private key in a serverless env var is bad operational hygiene. Compromise of `ANTHROPIC_API_KEY` shouldn't drain the wallet. So redemption signing happens via a local HTTP signer (`scripts/sage-signer/signer.mjs`) the operator runs on their own machine and exposes via `cloudflared tunnel`. Sage POSTs unsigned txs to it; the signer validates against a per-tx spending cap + recipient whitelist before signing.
2. **The Note auto-refunds at expiry.** If Sage doesn't redeem the Note before its `+120 blocks` deadline, the Note's spending condition reverts the funds back to the buyer's reserve. So a deferred redemption doesn't trap money — at worst it's a free premium answer, which is fine in the testnet bring-up phase.

Receipts in verify-only mode show a yellow `verified · pending redemption` badge. When the signer is wired and the next paid query lands, both that turn and any unredeemed past Notes flip to a green `settled` view automatically — the page upgrades itself when the chain state changes.

The Twitter announce will say "verified, settlement pending in this run" honestly. The signer wiring is a one-evening task; we don't want to overstate.

## What's next

- **Settler online.** Tunnel the signer, set `SAGE_SIGNER_URL` on Vercel, see the next paid Note flip from pending to settled with a real on-chain redemption tx.
- **Accord conformance.** Run `@accord-protocol/conformance --target https://www.ergoblockchain.org/api/sage/quote`, sign the result with an ed25519 key, publish the signed artifact, update Sage's [registry entry](https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json) with the conformance hash. Sage becomes the first L4-certified provider in the public Accord registry.
- **Agent registry surfaced on the site.** `/ergo-watch/agents` will fetch the Accord registry and render every listed provider with their capabilities, rails, and recent receipts. Sage's profile page becomes one of many.
- **Live agent activity strip on the homepage.** Latest paid receipts across the registry, scrolling under the network stats. The site goes from "we describe the agent economy" to "here's what it's doing right now."
- **Multi-tenant Sage.** Extract the widget into a standalone `@accord/sage-widget` npm package. Any docs site can drop in `<script src="…/sage.js" data-rag="…" data-receiver="9f…">` and have its own paid concierge with its own Ergo wallet. Distribution multiplier — every embed is a new Ergo receiver address on a new domain.

## Try it

[Open ergoblockchain.org](https://www.ergoblockchain.org). Bottom-right, the orange **Ask Sage** button. Free questions stay free. Ask `/code` or anything substantive — the payment panel walks you through issuing a testnet Note. Use a testnet wallet ([Nautilus](https://github.com/capt-nemo429/nautilus-wallet) is the standard, or run `node scripts/sage-signer/bootstrap.mjs --issue-note` from a clone of the repo) and `0.001` testnet ERG (the [faucet](https://testnet.ergoplatform.com/faucet) gives ~1 ERG per request).

Source: [the ergoblockchain.org repo](https://github.com/ergoplatform) ships everything described above. The Accord pattern Sage uses is the canonical buyer/seller wiring at [`examples/16-paid-mcp-ergo-testnet`](https://github.com/accord-protocol/accord-protocol/tree/main/examples/16-paid-mcp-ergo-testnet).

The manifesto and the working agent are now the same thing. That's the whole point.

## FAQ

### Why testnet and not mainnet?

Two reasons. First, the redemption contract uses Sage's seller wallet as the spending condition with no audit. Mainnet writes against unaudited ErgoScript should never happen — the production-safety gates in `ergo-agent-pay` actively block them. Second, the entire Accord stack is at v0.4 and the conformance manifests are still in `draft-pre-audit`. Mainnet is on the roadmap; today's evidence is testnet.

### How is this different from x402 or Stripe Agentic Commerce?

x402 is a payment-required protocol — the "402 challenge" pattern is the same. The difference is the rail. x402 typically wraps a card / Stripe payment and treats the chain as a reporting layer. Accord puts the work-acceptance rule into the spending condition itself: the Note can't be redeemed unless the seller actually delivered work that hashes to the agreement's task hash. Stripe Agentic Commerce is the buyer-side mirror — agents holding cards. Useful for human-authorized purchases. Different layer from agent-to-agent settlement.

### Does it work without the signer?

Yes. That's the verify-only mode described above. The premium answer flows on every successful verify; only the second on-chain transaction (Sage's redemption) is deferred. Receipts show "settlement pending" until the signer is online.

### Can I run my own Sage?

Soon, properly — that's the multi-tenant work in the "What's next" section. Today, you can clone the repo, configure your own wallet via `scripts/sage-signer/bootstrap.mjs`, and run a Sage instance from your own deploy. Documentation in [`docs/sage-provisioning.md`](https://github.com/ergoplatform).

### Where do the Anthropic API costs go?

The Anthropic API key is in Vercel env. We pay for free-tier traffic. Premium turns recover the LLM cost via the Note (0.001 ERG ≈ $0.0007 at testnet "rates" if you imagine them as real). The economics of mainnet pricing are open — the v0 ship is a proof point, not a margin model.
