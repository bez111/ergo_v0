# Agent Economy Reviewer Handoff

Status as of 2026-05-23: ready for external review, not mainnet ready.

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
https://www.ergoblockchain.org/agent-economy/release-watchlist.schema.v0.json
```

The schemas require concrete reviewer identity, reviewed commits, package and
deployment identifiers, findings, residual risk, signature payload metadata, and
mainnet script identity bindings. They are strict by design: an incomplete
template should fail review.

## Review Workflow

1. Pin the reviewed repositories and commits.
2. Pin deployment identifiers and package-lock hash.
3. Record npm audit status and post-deploy watch status.
4. Inspect the full Sage receipt bundle and confirm Agreement JSON,
   Verification Receipt JSON, and Settlement Receipt JSON are present.
5. Confirm signed Accord L1 evidence covers the same receipt id.
6. Review stale/replayed/wrong-recipient/wrong-value/wrong-reserve/wrong-task
   Note rejection behavior.
7. Review wallet-agent policy-check denial behavior for wrong recipient,
   wrong reserve, over-cap amount, stale expiry, invalid task hash, missing
   receipt retention, unknown profile or action fields, malformed decimal
   strings, invalid receipt-retention modes, and mainnet-disabled actions.
8. Confirm the policy playground demonstrates allowed and blocked verdicts
   without wallet authority, signing, or broadcast.
9. Review the wallet-agent reference runner boundary: denied verdicts stop the
   flow, simulation happens before signing, and signing stays in the host-owned
   wallet layer.
10. Review signer limits, health, failure logging, and runbook posture.
11. Run or inspect the release watchlist and confirm security headers, MCP
    health, full receipt bundle, signer health, and mainnet gate invariants.
12. Produce the external review manifest.
13. Produce the audit-bound mainnet script identity manifest.
14. Mark each finding as blocking or non-blocking for mainnet language.
15. Only after both completed artifacts exist should the mainnet gate source be
    updated away from `null`.

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
