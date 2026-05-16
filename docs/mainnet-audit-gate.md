# Mainnet and audit gate

This site can describe Sage, Accord, ChainCash/Basis patterns, and Ergo agent-payment demos as testnet-first public proofs. It must not claim production or mainnet readiness for the Accord stack until the gate below is complete.

## Current public claim

Allowed:

- Ergo base protocol is live on mainnet.
- Sage has a public Ergo testnet payment proof.
- Sage has produced at least one real Ergo testnet redemption transaction.
- Durable full receipt storage is live for new paid Sage turns.
- `/api/sage/receipt/<id>` is the machine-readable source of truth for Sage receipts.
- Accord conformance is pending until a post-storage receipt produces a signed artifact and registry evidence.

Not allowed yet:

- "Sage is mainnet ready."
- "Accord is production certified."
- "ChainCash/Basis contracts are audited."
- "The current Sage script is safe for real funds."
- "Full Accord pass" before signed conformance evidence exists.

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
- Say "conformance pending" until the signed artifact and registry evidence are published.
- Separate "Ergo mainnet is live" from "Accord/Sage mainnet readiness."
- Link to `/legal/risk`, `/legal/security`, and the relevant receipt or conformance evidence.

## Release checklist

Before changing public copy to mainnet/production wording:

- [ ] Full receipt bundle exists for a post-storage Sage paid turn.
- [ ] `npm run sage:conformance -- --receipt <id>` passes.
- [ ] Conformance result is signed.
- [ ] Signed artifact is published at a stable URI.
- [ ] Accord registry evidence points to that artifact.
- [ ] External audit or review manifest is published.
- [ ] Script identity manifest is published.
- [ ] Signer ops runbook is current.
- [ ] Risk disclosure is updated.

