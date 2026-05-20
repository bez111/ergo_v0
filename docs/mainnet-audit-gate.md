# Mainnet and audit gate

This site can describe Sage, Accord, ChainCash/Basis patterns, and Ergo agent-payment demos as testnet-first public proofs. It must not claim production or mainnet readiness for the Accord stack until the gate below is complete.

## Current public claim

Allowed:

- Ergo base protocol is live on mainnet.
- Sage has a public Ergo testnet payment proof.
- Sage has produced at least one real Ergo testnet redemption transaction.
- Durable full receipt storage is live for new paid Sage turns.
- A post-Blob paid Sage flow produced a full receipt bundle with Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON.
- Sage has signed public Accord L1 conformance evidence for that receipt bundle.
- A testnet observed script identity manifest is published.
- A draft audit scope manifest is published.
- Testnet signer operations evidence is published.
- `/api/sage/receipt/<id>` is the machine-readable source of truth for Sage receipts.
- The current published evidence is still testnet-only and does not open mainnet readiness.

Not allowed yet:

- "Sage is mainnet ready."
- "Accord is production certified."
- "ChainCash/Basis contracts are audited."
- "The current Sage script is safe for real funds."
- "Full Accord pass" or "registry-certified" beyond the currently published Sage L1 evidence.

## Required artifacts before mainnet claims

1. Exact package versions

```text
@accord-protocol/core
@accord-protocol/rails-ergo
ergo-agent-pay
ergo-agent-kit
site commit hash
```

2. Contract identity manifest

```text
script name
source file
compiler/toolchain version
serialized script bytes hash
P2S address
test vectors
known limits
```

3. Receipt and conformance evidence

```text
post-Blob full Sage receipt id
Agreement JSON hash
Verification Receipt JSON hash
Settlement Receipt JSON hash
conformance artifact hash
signature
public artifact URI
Accord registry evidence URI
```

4. External review

```text
reviewer
scope
date
commit hash
findings
remediation commit
residual risks
```

5. Operational controls

```text
signer custody model
spending limits
allowlists
monitoring
incident response
refund path
key rotation
public risk disclosure
```

## Site language rule

When writing articles, docs, pages, press text, or social copy:

- Say "testnet proof" unless a specific audited mainnet deployment is being referenced.
- Say "durable receipt storage for new paid turns" rather than implying old receipts were upgraded.
- Say "signed Sage L1 conformance evidence is published" only when linking to the signed artifact.
- Separate "Ergo mainnet is live" from "Accord/Sage mainnet readiness."
- Link to `/legal/risk`, `/legal/security`, and the relevant receipt or conformance evidence.

## Release checklist

Before changing public copy to mainnet/production wording:

- [x] Full receipt bundle exists for a post-storage Sage paid turn.
- [x] `npm run sage:conformance:evidence` passes for the post-storage receipt.
- [x] Conformance result is signed.
- [x] Signed artifact is published at a stable URI.
- [x] Accord registry evidence points to that artifact.
- [x] Testnet observed script identity manifest is published.
- [x] Draft audit scope manifest is published.
- [x] Testnet signer ops evidence and runbook are current.
- [ ] External audit or review report is published.
- [ ] Audit-bound mainnet script identity manifest is published.
- [ ] Risk disclosure is updated.
