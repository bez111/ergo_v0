# Agent Economy Evidence Pack

Current status as of 2026-05-24: testnet live proof, not mainnet readiness.

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

agent_economy_discovery
https://www.ergoblockchain.org/.well-known/agent-economy.json

agent_economy_discovery_api
https://www.ergoblockchain.org/api/agent-economy/discovery

agent_economy_discovery_schema
https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json

agent_economy_openapi
https://www.ergoblockchain.org/agent-economy/openapi.v0.json

developer_services_api
https://www.ergoblockchain.org/api/dev/services

developer_tools_api
https://www.ergoblockchain.org/api/dev/tools

release_watchlist
https://www.ergoblockchain.org/agent-economy/release-watchlist.v0.json

release_watchlist_schema
https://www.ergoblockchain.org/agent-economy/release-watchlist.schema.v0.json

current_release_api
https://www.ergoblockchain.org/api/agent-economy/release/current

current_release_schema
https://www.ergoblockchain.org/agent-economy/current-release.schema.v0.json

release_attestation_2026_05_23
https://www.ergoblockchain.org/agent-economy/release-attestation-2026-05-23.v0.json

release_attestation_schema
https://www.ergoblockchain.org/agent-economy/release-attestation.schema.v0.json

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
- The Agent Economy discovery descriptor and API are published for machine-readable agent surface discovery.
- The Agent Economy OpenAPI manifest is published for API client and documentation tooling.
- The release watchlist is published as the post-deploy operational contract for health, security headers, signer, MCP, receipt, and mainnet gate invariants.
- The current release API reports the runtime Git/Vercel context for the currently served deployment without requiring a new static attestation on every deploy.
- The 2026-05-23 release attestation pins the deployed commit, Vercel deployment id, package-lock hash, npm audit status, post-deploy watch status, production health, and route smoke result.
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
npm run watch:agent-economy
```
