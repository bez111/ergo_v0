# Agent Economy Reviewer Handoff

Status as of 2026-05-24: ready for external review, not mainnet ready.

This document turns the public review pack into a concrete reviewer workflow.
It is meant for the person or team producing the first independent review
artifact for the Sage/Accord testnet proof surface.

## Canonical Starting Points

```text
Human review pack
https://www.ergoblockchain.org/agent-economy/review-pack

Machine-readable review pack
https://www.ergoblockchain.org/api/agent-economy/review-pack

Live status API
https://www.ergoblockchain.org/api/agent-economy/live

Proof explorer
https://www.ergoblockchain.org/agent-economy/proofs

Machine-readable proof explorer
https://www.ergoblockchain.org/api/agent-economy/proofs

Proof explorer schema
https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json

Agent Economy discovery descriptor
https://www.ergoblockchain.org/.well-known/agent-economy.json

Agent Economy discovery API
https://www.ergoblockchain.org/api/agent-economy/discovery

Agent Economy discovery schema
https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json

Agent Economy OpenAPI manifest
https://www.ergoblockchain.org/agent-economy/openapi.v0.json

Developer services API
https://www.ergoblockchain.org/api/dev/services

Developer tools API
https://www.ergoblockchain.org/api/dev/tools

Sage Accord provider descriptor
https://www.ergoblockchain.org/.well-known/accord

Mainnet gate API
https://www.ergoblockchain.org/api/agent-economy/mainnet-gate

Wallet-agent policy-check API
https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check

Wallet-agent policy playground
https://www.ergoblockchain.org/build/agent-payments/policy-playground

Wallet-agent reference runner
https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner

Release watchlist
https://www.ergoblockchain.org/agent-economy/release-watchlist.v0.json

Current release API
https://www.ergoblockchain.org/api/agent-economy/release/current

Release attestation 2026-05-23
https://www.ergoblockchain.org/agent-economy/release-attestation-2026-05-23.v0.json
```

## Required Output Files

The review is not accepted as gate evidence until these two non-template files
exist as public artifacts:

```text
external_audit_report
https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.v0.json

mainnet_script_identity
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.v0.json
```

The current template files are intentionally insufficient:

```text
https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.template.json
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.template.json
```

## JSON Contracts

Completed artifacts should satisfy these schemas:

```text
https://www.ergoblockchain.org/agent-economy/external-audit-review.schema.v0.json
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.schema.v0.json
https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.schema.v0.json
https://www.ergoblockchain.org/agent-economy/wallet-agent-policy-check.schema.v0.json
https://www.ergoblockchain.org/agent-economy/wallet-agent-reference-flow.v0.json
https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json
https://www.ergoblockchain.org/agent-economy/openapi.v0.json
https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json
https://www.ergoblockchain.org/agent-economy/release-watchlist.schema.v0.json
https://www.ergoblockchain.org/agent-economy/current-release.schema.v0.json
https://www.ergoblockchain.org/agent-economy/release-attestation.schema.v0.json
```

The schemas require concrete reviewer identity, reviewed commits, package and
deployment identifiers, findings, residual risk, signature payload metadata, and
mainnet script identity bindings. They are strict by design: an incomplete
template should fail review.

## Review Workflow

1. Pin the reviewed repositories and commits.
2. Pin deployment identifiers and package-lock hash.
3. Record npm audit status and post-deploy watch status.
4. Inspect the current release API for the commit and runtime deployment URL
   currently served by production.
5. Inspect the release attestation for the reviewed commit, Vercel deployment
   id, package-lock hash, security status, check results, and limitations.
6. Inspect the proof explorer and confirm it links the expected receipt,
   conformance, MCP, widget, and mainnet-gate evidence.
7. Inspect the discovery descriptor and confirm it points to the same Proof
   API, Sage receipt, signed conformance evidence, MCP endpoint, package
   surface, schemas, and verification commands.
8. Inspect the full Sage receipt bundle and confirm Agreement JSON,
   Verification Receipt JSON, and Settlement Receipt JSON are present.
9. Run Sage proof reconciliation and confirm storage, receipt, signed
   evidence, Live API, Proof API, and mainnet-gate invariants agree.
10. Confirm signed Accord L1 evidence covers the same receipt id.
11. Review stale/replayed/wrong-recipient/wrong-value/wrong-reserve/wrong-task
   Note rejection behavior.
12. Review wallet-agent policy-check denial behavior for wrong recipient,
   wrong reserve, over-cap amount, stale expiry, invalid task hash, missing
   receipt retention, unknown profile or action fields, malformed decimal
   strings, invalid receipt-retention modes, and mainnet-disabled actions.
13. Confirm the policy playground demonstrates allowed and blocked verdicts
   without wallet authority, signing, or broadcast.
14. Review the wallet-agent reference runner boundary: denied verdicts stop the
   flow, simulation happens before signing, and signing stays in the host-owned
   wallet layer.
15. Review signer limits, health, failure logging, and runbook posture.
16. Run or inspect the release watchlist and confirm security headers, MCP
    health, full receipt bundle, signer health, and mainnet gate invariants.
17. Produce the external review manifest.
18. Produce the audit-bound mainnet script identity manifest.
19. Mark each finding as blocking or non-blocking for mainnet language.
20. Only after both completed artifacts exist should the mainnet gate source be
    updated away from `null`.

## Proof Reconciliation

After a deploy, run:

```bash
npm run watch:agent-economy
```

For a staging or preview host, run:

```bash
BASE_URL=https://<deployment-url> npm run watch:agent-economy
```

The reconciliation command is stricter than checking one page manually. It
must verify Blob receipt storage, the full Sage receipt bundle, signed Accord
L1 evidence, the Live API, the Proof API, and the closed mainnet gate as one
consistent proof chain. A passing signed conformance artifact is not enough if
the referenced receipt API no longer resolves as `full_receipt_bundle`.

## Mainnet Gate Acceptance Rule

The mainnet gate stays closed unless both are true:

- `external_audit_report` points to a completed non-template artifact.
- `mainnet_script_identity` points to a completed audit-bound non-template
  artifact.

The site guard must continue to report:

```text
completed = 4
pending = 2
mainnet_ready = false
```

until those two conditions are met.
