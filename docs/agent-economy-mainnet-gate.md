# Agent Economy Mainnet Gate

Status: closed.

The Agent Economy stack is a live testnet proof. It must not be described as
production-ready or mainnet-ready until every artifact below is published and
cross-linked from the Live Hub.

## Required artifacts

- Post-Blob Sage receipt bundle with:
  - Agreement JSON
  - Verification Receipt JSON
  - Settlement Receipt JSON
- Signed Accord conformance result for the Sage provider endpoint.
- Public provider signing key for verifying signed conformance artifacts.
- Registry evidence update pointing to the signed conformance artifact.
- Exact contract identity manifest:
  - network
  - contract source artifact hashes
  - compiled script hashes
  - Reserve / Note / Tracker / Acceptance Predicate identifiers
- Audit manifest:
  - scope
  - reviewed commit/artifact hashes
  - reviewer identity
  - finding status
- Signer operations runbook:
  - health/readiness checks
  - limits
  - failure logging
  - failover procedure

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
