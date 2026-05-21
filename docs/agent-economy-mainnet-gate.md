# Agent Economy Mainnet Gate

Status: closed.

The Agent Economy stack is a live testnet proof. It must not be described as
production-ready or mainnet-ready until every artifact below is published and
cross-linked from the Live Hub.

## Required artifacts

Published:

- Post-Blob Sage receipt bundle with Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON.
- Signed Accord L1 conformance result for the Sage provider endpoint.
- Public provider signing key for verifying signed conformance artifacts.
- Accord registry evidence pointing to the signed conformance artifact.
- Testnet observed script identity manifest.
- Testnet signer operations runbook and evidence manifest.
- Audit readiness checklist for external reviewer handoff.
- Public MCP DNS and health endpoint.

Still required before any mainnet language:

- Audit-bound mainnet contract identity manifest: network, contract source artifact hashes, compiled script hashes, and Reserve / Note / Tracker / Acceptance Predicate identifiers.
- External audit or review report: scope, reviewed commit/artifact hashes, reviewer identity, finding status, remediation state, and residual risks.

## Public language rule

Allowed now:

```text
Ergo Agent Economy testnet live proof
```

Not allowed yet:

```text
mainnet ready
production ready
audited
certified
```

## Machine-readable source

The current gate is exposed at:

```text
/api/agent-economy/mainnet-gate
```

Live Hub consumes that endpoint and should remain the public source for the
current status.

In the machine-readable gate, a blocker with `state = "open"` means that the
required artifact has opened that gate. The still-required work is also exposed
as `pending_blockers` for consumers that only need the remaining list.
