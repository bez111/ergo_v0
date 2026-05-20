# Agent Economy Evidence Pack

Current status as of 2026-05-20: testnet live proof, not mainnet readiness.

## Published evidence

```text
full_receipt_bundle
https://www.ergoblockchain.org/api/sage/receipt/83ac762fd75fbe702eec19ad74ec8ac696243ea889974de6eca92216937bb8d3

signed_conformance_result
https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-20.signed.json

latest_evidence_summary
https://www.ergoblockchain.org/evidence/sage/latest-evidence.json

testnet_script_identity
https://www.ergoblockchain.org/agent-economy/script-identity-manifest.v0.json

signer_ops_evidence
https://www.ergoblockchain.org/agent-economy/signer-ops-evidence.v0.json

audit_scope_manifest
https://www.ergoblockchain.org/agent-economy/audit-scope-manifest.v0.json

mainnet_gate
https://www.ergoblockchain.org/api/agent-economy/mainnet-gate
```

## What this proves

- A paid Sage turn produced a settled Ergo testnet transaction.
- The same turn has a durable full receipt bundle: Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON.
- Sage passed Accord L1 network conformance against that receipt.
- The conformance result is signed by `provider://sage-ergoblockchain`.
- A permanent testnet signer service is reachable and address-matched.
- The observed testnet wallet, reserve, note, registers, and settlement identifiers are published.

## What remains blocked

- External audit or review report.
- Audit-bound mainnet script identity.
- Production custody, monitoring, incident response, and key-rotation evidence for any real-funds deployment.

Until those are published, use only:

```text
testnet live proof
audit-gated mainnet path
```
