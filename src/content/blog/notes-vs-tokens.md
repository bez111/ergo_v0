---
title: "Notes vs Tokens: Programmable Bearer Instruments for AI Agent Payments"
slug: "/blog/notes-vs-tokens"
seo_title: "Notes vs Tokens: Programmable Bearer Instruments for AI Agent Payments"
meta_description: "Compare Ergo Notes and native tokens: when AI agents need programmable IOUs, Reserve backing, expiry, acceptance predicates and deferred settlement."
excerpt: "Tokens are great for ownership. Notes are better for bounded, expiring, conditionally redeemable credit in autonomous agent workflows."
author: "Ergo Developer Relations"
date_published: "2026-02-26"
date_modified: "2026-05-08"
status: "Conceptual explainer. ChainCash/Basis Note implementations remain prototype/testnet-first until audited."
tags: ["Ergo Notes", "native tokens", "AI agent payments", "bearer instruments", "programmable credit"]
target_keywords: ["Notes vs tokens", "Ergo Notes", "programmable bearer instruments", "AI agent credit", "Reserve backed Notes"]
---

# Notes vs Tokens: Programmable Bearer Instruments for AI Agent Payments

**Status as of May 2026:** Ergo native tokens are a live protocol feature. The Note/Reserve/Tracker systems discussed here are reference patterns and prototypes unless a specific implementation is audited and marked production-ready.

Blockchains are good at tokens. A token can represent ownership, membership, liquidity, voting power, a collectible, a stablecoin claim or a simple unit of value. Tokens are familiar, composable and easy to transfer.

But AI agents do not only need assets. They need budgets.

A parent agent may need to give a sub-agent permission to spend up to 0.5 ERG on data calls before Friday. A service provider may accept a claim that can be redeemed later if the task output matches a predicate. A multi-agent workflow may need small, expiring, conditionally redeemable instruments that circulate before final settlement.

That is not what a simple token is for.

That is what a **Note** is for.

## TL;DR

### Tokens represent ownership

A native token is a transferable asset. It is excellent for fungible balances, governance, NFTs, LP positions and simple payments.

### Notes represent conditional credit

A Note is a programmable bearer instrument. It can reference a Reserve, carry an expiry, encode a value and include acceptance conditions.

### Agents need Notes when payment depends on work

If a payment should be redeemed only after a task is accepted, or if a sub-agent should receive a bounded budget, Notes are more expressive than tokens.

### Notes and tokens compose

This is not a competition. A real agent economy can use tokens for ownership and Notes for programmable payment flows.

## What is a token?

An Ergo native token is a first-class asset in the eUTXO model. It can be minted, transferred and held directly in UTxOs. It does not require an ERC-20-style wrapper contract.

Tokens work well when the question is simple:

> Who owns how many units of this asset?

Use tokens for:

- community currencies;
- governance rights;
- NFTs;
- liquidity positions;
- protocol shares;
- simple unconditional payments;
- reward points;
- stable assets or wrapped assets;
- assets that should not expire automatically.

A token transfer is direct. If the receiver gets the token, ownership changed. That simplicity is the strength.

## What is a Note?

A Note is a higher-level instrument built on eUTXO. It is a UTxO-shaped claim with rules. It can point to a Reserve, specify value, expire at a block height and require an acceptance predicate before redemption.

The economic analogy is closer to a cheque, voucher, bond coupon or bearer IOU than to cash.

A Note can answer questions a token usually cannot answer by itself:

- Which Reserve backs this claim?
- When does it expire?
- What work must be accepted before redemption?
- Has this Note already been redeemed?
- Which verifier or predicate controls acceptance?
- Can this Note be settled in a batch?

## Key differences

| Property | Token | Note |
|---|---|---|
| Core meaning | Ownership of an asset | Claim against a Reserve or issuer policy |
| Settlement | Immediate transfer | Deferred redemption |
| Expiry | Usually none | Built in |
| Acceptance conditions | Not native to transfer | Core feature |
| Backing | Optional or external | Reserve reference can be explicit |
| Agent budget use | Limited | Strong |
| Batch settlement | Not the main model | Natural fit |
| Governance use | Strong | Weak |
| Long-lived liquidity | Strong | Usually wrong tool |
| Task-conditional payment | Requires extra logic | Native design goal |

## The Note lifecycle

A useful Note system needs a complete lifecycle.

### 1. Create a Reserve

The Reserve is the backing source. It holds collateral or defines issuer rules. A counterparty can inspect the Reserve before accepting Notes.

### 2. Issue a Note

The issuer creates a Note that references the Reserve. The Note may encode value, expiry, receiver constraints, task hash or verifier policy.

### 3. Transfer the Note

The Note can move between agents as a bearer instrument. The recipient evaluates whether the Reserve and terms are acceptable.

### 4. Perform work

The receiver or downstream agent completes the task, calls an API, delivers output or obtains a verifier receipt.

### 5. Redeem the Note

The Note is spent in a transaction that satisfies its predicate. The Reserve pays out or updates state according to the rules.

### 6. Update the Tracker

A Tracker prevents double-redemption. It records spent Note IDs or equivalent state transitions.

### 7. Settle batches

For many small payments, recipients can redeem multiple accepted Notes in a single batch, reducing overhead.

## When agents need Notes

### Task-conditional payments

Agent A wants to pay Agent B only if B returns output matching a committed hash or accepted verifier receipt. A token transfer cannot express that condition by itself. A Note can.

### Multi-agent budgets

An orchestrator gives sub-agents limited spending power. The budget should expire, stay within a Reserve limit and possibly be restricted to a service category. A Note is a natural instrument for that.

### Deferred settlement

A service provider may accept many small Notes throughout the day and redeem them later. This avoids settling every tiny interaction immediately.

### Internal credit

A trusted issuer may want to create spendable credit inside a bounded network. Notes can represent claims against a Reserve or issuer policy.

### Work marketplaces

A buyer posts a task. A worker accepts a Note. A verifier signs the receipt. The worker redeems after acceptance. This is a cleaner primitive than “send token now and hope the work arrives.”

## When tokens are better

### Long-lived ownership

Governance rights, staking positions, NFTs and LP shares should usually be tokens. They are not temporary payment claims.

### Simple unconditional transfers

If the goal is “send 10 units to this address,” use a token. Do not add Note complexity where no condition is needed.

### Liquid markets

Tokens are better for exchange, market making and general liquidity. Notes are more contextual and may carry issuer, expiry and predicate risk.

### Public assets

If many unrelated users should recognize and hold an asset indefinitely, token semantics are more appropriate.

## When not to use Notes

Do not use Notes just because they sound advanced. Avoid them when:

- no expiry is needed;
- no acceptance condition is needed;
- the instrument should trade freely as a standardized asset;
- the Reserve is not understandable to users;
- the implementation is unaudited and real funds are involved;
- the task cannot be verified objectively or by a trusted verifier;
- users would confuse Notes with stablecoins or guaranteed deposits.

Notes are powerful because they are specific. They are not a universal replacement for tokens.

## Example: agent API budget

Imagine a research agent that needs to call paid data APIs. The human operator does not want to give the agent an unrestricted wallet.

The operator creates a Reserve and issues three Notes:

- 0.05 ERG Note for weather data, expires in 24 hours.
- 0.10 ERG Note for market data, expires in 12 hours.
- 0.20 ERG Note for document retrieval, requires receipt hash.

The agent can spend within those bounds. If compromised, it cannot exceed the issued Notes. If the Notes expire, the budget closes. If a service cannot satisfy the acceptance predicate, it cannot redeem.

That is safer than giving the agent a raw wallet balance.

## Example: multi-agent workflow

A coordinator hires three sub-agents:

1. Extractor agent: parse documents.
2. Analyst agent: summarize findings.
3. Verifier agent: validate outputs.

The coordinator issues Notes to each. The extractor’s Note requires a schema-valid output. The analyst’s Note requires a hash of the accepted summary. The verifier’s Note requires a signed validation receipt. Each Note can settle later against the Reserve.

The payment graph now mirrors the work graph.

## Risk model

A Note is only as good as its Reserve, predicate and implementation.

Ask:

- Is the Reserve real and sufficient?
- Who can issue Notes?
- Can outstanding Notes exceed backing?
- How is double-redemption prevented?
- What happens after expiry?
- Who verifies work?
- Is the script audited?
- Can users understand the risk?

If those answers are unclear, do not deploy with real funds.

## FAQ

### Can you use Ergo native tokens for agent payments?

Yes. For simple unconditional payments, native tokens work well. Notes become useful when the payment needs expiry, Reserve backing, deferred settlement or a work-acceptance condition.

### What is a bearer instrument?

A bearer instrument is something the holder can present for redemption or value transfer. In this context, a Note is a programmable claim that can be transferred between agents and redeemed according to its script rules.

### Are Notes the same as stablecoins?

No. A stablecoin is usually a fungible token designed to track an external unit of account. A Note is a contextual claim against a Reserve or issuer policy. It may be denominated in ERG, a token or another unit, but its defining feature is programmable redemption.

### Can Notes be traded in DeFi?

Possibly, but that is not their primary purpose. Because Notes may carry expiry, issuer and predicate risk, they are more complex than fungible tokens. Any DeFi integration should make those risks explicit.

### Are Notes production-ready today?

The concept is strong, and Ergo’s eUTXO model supports the pattern. Specific Note systems such as ChainCash/Basis reference contracts should be treated as prototype or testnet-first unless audited and clearly marked production-ready.

## Article JSON-LD draft

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Notes vs Tokens: Programmable Bearer Instruments for AI Agent Payments",
  "description": "Compare Ergo Notes and native tokens: when AI agents need programmable IOUs, Reserve backing, expiry, acceptance predicates and deferred settlement.",
  "datePublished": "2026-02-26",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/notes-vs-tokens",
  "keywords": ["Ergo Notes", "native tokens", "AI agent payments", "programmable credit", "bearer instruments"]
}
```

## Source notes

- Original article: https://www.ergoblockchain.org/blog/notes-vs-tokens
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- Ergo technology page: https://www.ergoblockchain.org/technology
