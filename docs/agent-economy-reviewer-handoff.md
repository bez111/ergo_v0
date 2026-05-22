# Agent Economy Reviewer Handoff

Status as of 2026-05-22: ready for external review, not mainnet ready.

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
```

The schemas require concrete reviewer identity, reviewed commits, package and
deployment identifiers, findings, residual risk, signature payload metadata, and
mainnet script identity bindings. They are strict by design: an incomplete
template should fail review.

## Review Workflow

1. Pin the reviewed repositories and commits.
2. Pin deployment identifiers and package-lock hash.
3. Inspect the full Sage receipt bundle and confirm Agreement JSON,
   Verification Receipt JSON, and Settlement Receipt JSON are present.
4. Confirm signed Accord L1 evidence covers the same receipt id.
5. Review stale/replayed/wrong-recipient/wrong-value/wrong-reserve/wrong-task
   Note rejection behavior.
6. Review signer limits, health, failure logging, and runbook posture.
7. Produce the external review manifest.
8. Produce the audit-bound mainnet script identity manifest.
9. Mark each finding as blocking or non-blocking for mainnet language.
10. Only after both completed artifacts exist should the mainnet gate source be
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
