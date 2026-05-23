# Agent Economy Evidence Pack

Current status as of 2026-05-21: testnet live proof, not mainnet readiness.

## Published evidence

```text
full_receipt_bundle
https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81

signed_conformance_result
https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json

latest_evidence_summary
https://www.ergoblockchain.org/evidence/sage/latest-evidence.json

review_pack
https://www.ergoblockchain.org/agent-economy/review-pack

review_pack_api
https://www.ergoblockchain.org/api/agent-economy/review-pack

developer_launch_kit
https://www.ergoblockchain.org/agent-economy/launch-kit

developer_launch_kit_api
https://www.ergoblockchain.org/api/agent-economy/launch-kit

developer_launch_kit_schema
https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json

wallet_agent_policy_check_schema
https://www.ergoblockchain.org/agent-economy/wallet-agent-policy-check.schema.v0.json

wallet_agent_safety_spec
https://www.ergoblockchain.org/agent-economy/wallet-agent

wallet_agent_safety_spec_api
https://www.ergoblockchain.org/api/agent-economy/wallet-agent

testnet_script_identity
https://www.ergoblockchain.org/agent-economy/script-identity-manifest.v0.json

signer_ops_evidence
https://www.ergoblockchain.org/agent-economy/signer-ops-evidence.v0.json

audit_scope_manifest
https://www.ergoblockchain.org/agent-economy/audit-scope-manifest.v0.json

audit_readiness_checklist
https://www.ergoblockchain.org/agent-economy/audit-readiness-checklist.v0.json

external_review_template
https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.template.json

external_review_schema
https://www.ergoblockchain.org/agent-economy/external-audit-review.schema.v0.json

mainnet_script_identity_template
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.template.json

mainnet_script_identity_schema
https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.schema.v0.json

reviewer_handoff
https://github.com/bez111/ergo_v0/blob/main/docs/agent-economy-reviewer-handoff.md

mcp_endpoint_runbook
https://github.com/bez111/ergo_v0/blob/main/docs/mcp-endpoint-runbook.md

mainnet_gate
https://www.ergoblockchain.org/api/agent-economy/mainnet-gate
```

## What this proves

- A paid Sage turn produced a settled Ergo testnet transaction.
- The same turn has a durable full receipt bundle: Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON.
- Sage passed Accord L1 network conformance against that receipt.
- The conformance result is signed by `provider://sage-ergoblockchain`.
- A permanent testnet signer service is reachable and address-matched.
- The MCP endpoint has a dedicated DNS, health, smoke, and failure-mode runbook.
- The observed testnet wallet, reserve, note, registers, and settlement identifiers are published.
- The public audit readiness checklist is published for an external reviewer.
- The developer launch kit is published as a human page, JSON manifest, and JSON Schema.
- The local wallet-agent safety boundary is published as a human page and JSON API.
- The external review and mainnet script identity templates are published, but they are not completed artifacts.
- The mainnet gate currently has 4 completed gates and 2 pending trust gates.

## What remains blocked

- External audit or review report.
- Audit-bound mainnet script identity.
- Production custody, monitoring, incident response, and key-rotation evidence for any real-funds deployment.

Until those are published, use only:

```text
testnet live proof
audit-gated mainnet path
```

Local guardrail:

```bash
npm run audit:agent-economy-gate
```
