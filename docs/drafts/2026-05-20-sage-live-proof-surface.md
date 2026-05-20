# Draft: From Website to Live Proof Surface

Working title:

```text
Ergoblockchain.org Is Becoming a Live Proof Surface for the Agent Economy
```

## Core claim

Ergoblockchain.org is no longer only a content site. It is becoming a public operating surface for Ergo's agent economy: human pages, machine APIs, receipts, status gates, MCP, an ErgoScript playground, and signed evidence in one place.

## What shipped

- Agent Economy Live Hub at `/agent-economy/live` and `agents.ergoblockchain.org`.
- Public MCP service at `mcp.ergoblockchain.org` with `/health` and `/mcp`.
- Vercel Blob backed Sage receipts.
- First post-Blob full Sage receipt bundle:
  `09a9e5c0e5e5ca716bfc7c856aa4ece42a0655ad06f8806cf054c79c09eb318c`.
- Signed Sage L1 Accord conformance evidence:
  `/evidence/sage/conformance-l1-2026-05-20.signed.json`.
- Public provider signing key:
  `/evidence/sage/provider-signing-key.json`.
- Agent registry UI overlay so Sage shows current local evidence even before the upstream registry PR merges.
- Mainnet gate remains closed and explicit.
- Press copy, roadmap copy, blog status copy and Sage retrieval index were updated to avoid stale "conformance pending" language.

## What the evidence proves

Sage can:

- price a premium request as an Ergo testnet Note;
- verify a payment against quote and task hash;
- store Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON;
- expose a public receipt API as the source of truth;
- pass an L1 Accord network conformance run against the public endpoint;
- publish a signed artifact that tools can verify.

## What it does not prove

This is not mainnet readiness.

Do not claim:

- audited payment infrastructure;
- safe real-funds custody;
- full registry certification beyond L1 evidence;
- production signer operations.

The remaining gates are exact script identity, external audit manifests, and a permanent controlled signer endpoint.

## The strongest narrative

Most crypto sites explain why something should matter. This site is starting to show a working public surface:

- a human can read the story;
- a developer can inspect the receipt;
- an agent can call MCP;
- a dashboard can read `/api/agent-economy/live`;
- a verifier can check the signed artifact;
- the site itself refuses to overclaim mainnet readiness.

That combination is the point.

## Suggested article structure

1. The old web was narrative. The new site is evidence.
2. The Agent Hub is the cockpit.
3. Sage is the first hosted testnet proof.
4. Receipt storage is the difference between "a tx happened" and "this exact agreement was verified."
5. Signed L1 evidence makes the claim machine-checkable.
6. MCP gives agents a public entry point.
7. The mainnet gate stays closed because credibility beats hype.
8. The next frontier: permanent signer ops, registry PR, script identity, audits, paid widget, wallet agents.

## Copy blocks

Short version:

```text
The Ergo site is becoming a live proof surface for the agent economy. Sage now has a post-Blob full receipt bundle, signed L1 Accord evidence, public MCP, an Agent Hub, and explicit mainnet gates. The claim is not "mainnet ready." The claim is stronger because it is precise: testnet proof, public receipts, signed evidence, audit-gated path.
```

Tweet-size version:

```text
Ergoblockchain.org is turning into a live proof surface, not just a website.

Sage now has:
- full receipt bundle
- signed Accord L1 evidence
- public MCP
- Agent Hub
- explicit mainnet gate

Testnet proof first. Mainnet only after scripts, signer ops and audits.
```

