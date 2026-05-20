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

Still required before any mainnet language:

- Registry evidence update pointing to the signed conformance artifact.
- Exact contract identity manifest: network, contract source artifact hashes, compiled script hashes, and Reserve / Note / Tracker / Acceptance Predicate identifiers.
- Audit manifest: scope, reviewed commit/artifact hashes, reviewer identity, and finding status.
- Signer operations runbook and hardening evidence: health/readiness checks, limits, failure logging, and failover procedure.

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
