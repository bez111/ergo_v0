---
title: "ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments"
slug: "/blog/ergoscript-acceptance-predicates"
seo_title: "ErgoScript Acceptance Predicates: On-Chain Task Verification for AI Agent Payments"
meta_description: "Learn how ErgoScript acceptance predicates encode task-completion conditions inside payment UTxOs, enabling AI agents to verify work with fewer off-chain trust assumptions."
excerpt: "Acceptance predicates turn a payment into a conditionally redeemable work contract: the receiver can redeem only when the agreed task condition is satisfied."
author: "Ergo Developer Relations"
date_published: "2026-03-12"
date_modified: "2026-05-08"
status: "Technical explainer. Example predicates are educational; production scripts require audit and exact test vectors."
tags: ["ErgoScript", "AI agent payments", "acceptance predicates", "eUTXO", "work verification"]
target_keywords: ["ErgoScript acceptance predicate", "AI agent task verification", "on-chain work verification", "programmable payment conditions", "Ergo smart contracts"]
---

# ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments

**Status as of May 2026:** acceptance predicates are a design pattern built on ErgoScript and eUTXO. The examples below are educational and should not be deployed with real funds without review, test vectors and audit.

Most payment systems answer one question: did the payer send money?

Agent commerce needs a harder question: did the receiver complete the work that the payment was for?

If an AI agent pays for a static API response, a simple payment receipt may be enough. But if the agent pays another agent to summarize a document, solve a task, produce a proof, generate code, classify data or return a signed result, payment alone is insufficient. The payer needs a way to bind redemption to acceptance.

An **acceptance predicate** is that binding. It is a condition embedded in the payment instrument itself. The receiver can redeem only if the predicate evaluates to true.

In Ergo terms, the predicate lives in an ErgoScript spending condition. It can inspect values, registers, context variables, signatures, block height and other transaction data. The result is a payment that behaves more like a self-enforcing work contract than a blind transfer.

## TL;DR

### Payment is not the same as acceptance

A transaction proves value moved. It does not prove that work was delivered. Acceptance predicates add a verification rule to the payment.

### eUTXO makes the predicate explicit

In Ergo, a UTxO has a spending condition. To redeem a Note or payment box, the spender must create a transaction that satisfies that condition. The rule is visible and deterministic.

### The simplest predicate checks a task hash

For example: "redeem this Note only if the submitted output hashes to the expected digest before the deadline." This is not enough for every task, but it is the minimal pattern.

### Predicates reduce trust; they do not eliminate all trust

If the predicate verifies a hash of known output, trust is low. If it relies on a third-party verifier, the verifier becomes part of the trust model. The predicate makes assumptions explicit; it does not make impossible tasks magically verifiable.

## The problem: agents pay for outcomes, not just access

A human can handle ambiguity. If a contractor does bad work, the human can complain, dispute, renegotiate or refuse future payment. An autonomous agent needs clearer rules.

Consider a simple agent pipeline:

1. Research agent pays data agent for a dataset.
2. Data agent pays cleaning agent for normalized records.
3. Cleaning agent pays model agent for inference.
4. Research agent pays editor agent for final output.

Every step has a different definition of success. "Payment happened" is not enough. The pipeline needs acceptance rules:

- Was the dataset signed by the expected provider?
- Did the cleaned data match the expected schema?
- Did the model output hash match the committed result?
- Was the response delivered before deadline?
- Did the verifier sign acceptance?

Without programmable acceptance, every rule lives off-chain in application code. That creates a centralized trust point.

## The core pattern

A minimal acceptance predicate has four parts:

1. **Task commitment** — what output or proof is expected?
2. **Deadline** — until when can the Note be redeemed?
3. **Receiver or verifier authorization** — who can redeem or accept?
4. **Redemption rule** — what must be true in the spending transaction?

A simplified predicate might say:

```scala
val submittedOutput = getVar[Coll[Byte]](0).get
val outputHashOk = blake2b256(submittedOutput) == TASK_HASH
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT
val receiverOk = proveDlog(RECEIVER_PK)

sigmaProp(outputHashOk && beforeDeadline) && receiverOk
```

This says: the receiver may redeem before expiry if the transaction includes task output whose Blake2b-256 hash matches the committed task hash.

In a real system, the output may not be the full task result. It could be a signed receipt, a proof, a verifier statement, a Merkle root, or a digest of an externally stored artifact.

## Why Blake2b consistency matters

If the ErgoScript predicate uses `blake2b256`, the client code must compute the same digest. Do not compute SHA-256 in the client and Blake2b in the contract unless the article clearly says the code is pseudocode.

A JavaScript helper should look more like this:

```ts
import { blake2b } from "@noble/hashes/blake2b";
import { bytesToHex, utf8ToBytes } from "@noble/hashes/utils";

export function taskHash(output: string): string {
  const digest = blake2b(utf8ToBytes(output), { dkLen: 32 });
  return bytesToHex(digest);
}

const expected = taskHash("the answer is 42");
console.log(expected);
```

The exact bytes matter. Normalize strings, encodings and line endings before hashing. Otherwise two agents may disagree about the digest of the same human-readable output.

## Acceptance predicates vs escrow

Traditional escrow says: put funds in the middle, then release them after someone decides work is complete.

Acceptance predicates say: put the release rule in the spending condition. The rule can be objective, partially objective or verifier-based.

| Model | Who decides? | Strength | Weakness |
|---|---|---|---|
| Manual escrow | Human arbitrator | Flexible | Slow, centralized, expensive |
| API-side billing | Service server | Simple | Server is trusted |
| Oracle-based release | External oracle | Works for external facts | Oracle trust and latency |
| HTLC | Hash preimage | Simple and robust | Limited condition expressiveness |
| Ergo acceptance predicate | ErgoScript rule | Programmable and explicit | Only verifies what the script can observe or what a verifier signs |

The right design depends on the task. A hash predicate works for committed outputs. A verifier signature works for subjective quality. A zero-knowledge credential may work for privacy-preserving acceptance. The predicate makes the trust model visible.

## What predicates can verify

Acceptance predicates can work well for:

- exact output hashes;
- signed verifier receipts;
- deadline checks;
- budget limits;
- receiver authorization;
- token or Note properties;
- Reserve references;
- Tracker updates;
- simple data commitments;
- proofs passed through transaction context.

## What predicates cannot verify alone

A predicate cannot magically inspect arbitrary off-chain reality. It cannot know whether a generated essay is "good" unless the quality criterion is encoded or a verifier signs a receipt. It cannot know whether an API response was useful unless that usefulness is reduced to a checkable condition.

This is not a flaw. It is a discipline: if you cannot define acceptance, you cannot automate payment safely.

## Register layout example

A Note-style payment could encode task data in registers:

| Register | Meaning |
|---|---|
| R4 | Reserve box ID or agreement ID |
| R5 | Expiry block height |
| R6 | Task hash or task commitment |
| R7 | Verifier public key, policy ID or service metadata |

The redemption transaction can then provide context variables:

| Context variable | Meaning |
|---|---|
| Var 0 | Submitted output or receipt bytes |
| Var 1 | Optional verifier signature |
| Var 2 | Optional metadata or Merkle proof |

Keep the layout documented. A predicate that no one can decode is not a usable protocol.

## A verifier-based predicate

Some tasks require subjective acceptance. In that case, the predicate can require a verifier signature.

```scala
val receipt = getVar[Coll[Byte]](0).get
val receiptHashOk = blake2b256(receipt) == RECEIPT_HASH
val verifierOk = proveDlog(VERIFIER_PK)
val beforeDeadline = HEIGHT < EXPIRY_HEIGHT

sigmaProp(receiptHashOk && beforeDeadline) && verifierOk
```

This does not eliminate verifier trust. It scopes it. The verifier's role is explicit, and the receipt can be archived, audited or challenged by application policy.

## Why this matters for Accord

Accord describes work agreements and verification receipts. ErgoScript acceptance predicates are one way to enforce those receipts on a settlement rail.

A future flow can look like this:

1. Accord Agreement defines task, price and verifier.
2. Ergo Note encodes payment value, expiry and predicate.
3. Worker completes task.
4. Verifier emits Verification Receipt.
5. Worker redeems Note if predicate accepts the receipt.
6. Settlement Receipt records the redemption transaction.

That is a complete work-payment loop: agreement, verification, settlement.

## Threat model

### Replay attack

A worker reuses the same receipt for multiple payments. Mitigation: include callId, agreement ID or Note ID in the signed/verifiable receipt.

### Late redemption

A worker redeems after deadline. Mitigation: include `HEIGHT < expiry` in the predicate.

### Wrong task output

A worker submits output for another task. Mitigation: include task hash, agreement ID and payer/receiver data in the commitment.

### Verifier capture

A verifier accepts bad work. Mitigation: use reputation, multi-verifier threshold, stake, audit logs or objective predicates where possible.

### Encoding mismatch

Agents hash different byte representations. Mitigation: publish canonical encoding and test vectors.

### Contract bug

The predicate has a logic error. Mitigation: testnet, formal review, external audit and signed manifests.

## Best practices

- Publish predicate source and compiled hash.
- Use canonical encodings.
- Include test vectors.
- Keep predicates narrow.
- Separate payment receipt from work receipt.
- Add expiry.
- Add replay protection.
- Avoid subjective predicates unless a verifier is explicit.
- Do not deploy unaudited examples with real funds.

## FAQ

### What is an acceptance predicate?

An acceptance predicate is a programmable condition that must be satisfied before a payment instrument can be redeemed. In an Ergo agent-payment context, it can bind redemption to task output, a verifier receipt, a deadline or another condition encoded in ErgoScript.

### Does this remove the need for escrow?

It can remove some escrow use cases, especially when the acceptance rule is objective. If the work requires subjective judgment, you may still need a verifier or dispute process. The difference is that the verifier's role can be encoded and audited.

### Can Ethereum implement the same idea?

Ethereum can implement conditional payment contracts, but the design is usually application-level and may involve escrow contracts, upgradeability choices, oracle design, gas dynamics and account-model risks. Ergo's eUTXO model makes the payment object and spending rule explicit.

### Are acceptance predicates production-ready?

The underlying ErgoScript capability is real, but any specific predicate must be reviewed. A demo predicate is not a production contract. Use testnet, publish test vectors and wait for audits before mainnet usage.

### What is the simplest useful predicate?

The simplest useful predicate checks a task hash and a deadline: redeem only if the submitted output hashes to the committed digest before expiry. It is limited, but it demonstrates the core concept.

## Article JSON-LD draft

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "ErgoScript Acceptance Predicates: On-Chain Work Verification for AI Agent Payments",
  "description": "Learn how ErgoScript acceptance predicates encode task-completion conditions inside payment UTxOs, enabling AI agents to verify work with fewer off-chain trust assumptions.",
  "datePublished": "2026-03-12",
  "dateModified": "2026-05-08",
  "author": { "@type": "Organization", "name": "Ergo Developer Relations" },
  "publisher": { "@type": "Organization", "name": "Ergo Platform" },
  "mainEntityOfPage": "https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates",
  "keywords": ["ErgoScript", "acceptance predicates", "AI agent payments", "eUTXO", "work verification"]
}
```

## Source notes

- Original article: https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates
- Accord Protocol repo: https://github.com/accord-protocol/accord-protocol
- Ergo technology page: https://www.ergoblockchain.org/technology