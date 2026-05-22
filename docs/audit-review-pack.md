# Agent Economy Audit Review Pack

Current status as of 2026-05-22: testnet live proof, not mainnet readiness.

This pack is the handoff for an external reviewer. Its job is to make the
review boundary exact enough that the public site can keep making precise
claims without sliding into production or mainnet language.

## Public Evidence To Inspect

```text
Live Hub
https://www.ergoblockchain.org/agent-economy/live

Human review pack
https://www.ergoblockchain.org/agent-economy/review-pack

Machine-readable review pack
https://www.ergoblockchain.org/api/agent-economy/review-pack

Live status API
https://www.ergoblockchain.org/api/agent-economy/live

Mainnet gate API
https://www.ergoblockchain.org/api/agent-economy/mainnet-gate

Wallet-agent safety spec
https://www.ergoblockchain.org/agent-economy/wallet-agent

Wallet-agent policy profile schema
https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.schema.v0.json

Wallet-agent policy profile template
https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.profile.template.json

Wallet-agent policy-check API
https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check

Wallet-agent reference runner
https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner

Wallet-agent reference flow API
https://www.ergoblockchain.org/api/agent-economy/wallet-agent/reference-flow

Wallet-agent reference flow manifest
https://www.ergoblockchain.org/agent-economy/wallet-agent-reference-flow.v0.json

Full Sage receipt bundle
https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81

Signed Accord L1 evidence
https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json

Provider signing key
https://www.ergoblockchain.org/evidence/sage/provider-signing-key.json

Observed testnet script identity
https://www.ergoblockchain.org/agent-economy/script-identity-manifest.v0.json

Signer operations evidence
https://www.ergoblockchain.org/agent-economy/signer-ops-evidence.v0.json

Draft audit scope
https://www.ergoblockchain.org/agent-economy/audit-scope-manifest.v0.json

Audit readiness checklist
https://www.ergoblockchain.org/agent-economy/audit-readiness-checklist.v0.json

External review template
https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.template.json

External review schema
https://www.ergoblockchain.org/agent-economy/external-audit-review.schema.v0.json

Mainnet script identity template
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.template.json

Mainnet script identity schema
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.schema.v0.json

Reviewer handoff
https://github.com/bez111/ergo_v0/blob/main/docs/agent-economy-reviewer-handoff.md
```

## Review Boundary

The current review target is the hosted Sage/Accord testnet proof surface:

- Sage quote, chat, payment verification, and receipt APIs.
- Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON.
- Vercel Blob receipt durability and retrieval model.
- Accord L1 conformance evidence publication.
- Sage testnet signer redemption policy and public health evidence.
- Observed Ergo testnet Reserve, Note, register, and settlement identity.
- Agent Economy Live Hub status API and public claim controls.
- MCP endpoint only as public machine-facing infrastructure, not as a custody
  or payment signer.
- Wallet-agent safety spec and policy-check API only as local policy and
  simulation boundary evidence, not as wallet software.
- Wallet-agent reference runner only as a host-owned wallet integration path,
  not as a site-operated signer.
- Published Sage widget v0.3 package only as an embeddable testnet proof
  surface. Wallet signing remains outside the widget until separately reviewed.

Out of scope until explicitly added:

- Real-funds mainnet custody.
- Third-party wallet internals.
- Third-party tenant deployments.
- Exchange integrations.
- Any unpublished production signing setup.

## Required Reviewer Outputs

An acceptable review artifact should include:

- reviewer identity and date;
- reviewed repository commit;
- reviewed deployment id, if relevant;
- reviewed lockfile hash;
- reviewed package versions;
- reviewed public evidence URLs;
- findings with severity, status, remediation reference, and residual risk;
- explicit statement on whether any finding blocks mainnet language;
- signature, public key, or other durable attribution.
- conformance with the public external review schema.

The audit-bound mainnet identity artifact should include exact source artifact
hashes, compiled ErgoTree hashes, mainnet addresses, package versions, compiler
or serialization toolchain, test vectors, and a link back to the completed
external review manifest.

## Minimum Questions

The review should answer these questions directly:

- Can a stale, unrelated, or replayed Note satisfy a premium Sage request?
- Is task hash canonicalization stable across quote, verify, receipt, and
  conformance?
- Can Agreement JSON or receipt JSON be tampered with after creation without
  detection?
- Does the receipt API clearly distinguish full receipt bundles from chain-only
  proofs?
- Can the signer be tricked into settling a transaction with a wrong recipient,
  wrong value, wrong Note, wrong reserve, or over-limit output?
- Does the wallet-agent policy-check API reject wrong-recipient, wrong-reserve,
  over-cap, stale-expiry, missing-receipt, or mainnet-disabled actions before a
  wallet is asked to sign?
- Does the wallet-agent reference runner stop after a denied verdict and keep
  all signing inside the host-owned wallet layer?
- Are signer limits, failure logging, health checks, and failover procedures
  sufficient for the stated testnet pilot?
- Does public wording stay inside "testnet proof" and avoid production or
  mainnet readiness claims?
- Are all mainnet claims blocked until an audit-bound mainnet script identity
  and external review are published?

## Mainnet Gate Rule

The mainnet gate must remain closed until both artifacts exist as non-template
public files:

```text
/agent-economy/external-audit-review.manifest.v0.json
/agent-economy/mainnet-script-identity.manifest.v0.json
```

The template files are intentionally not enough to open the gate.

Completed artifacts should satisfy:

```text
/agent-economy/external-audit-review.schema.v0.json
/agent-economy/mainnet-script-identity.schema.v0.json
```

## Local Verification

Run:

```bash
npm run audit:agent-economy-gate
```

The check should report the current state as:

```text
completed = 4
pending = 2
mainnet_ready = false
```
