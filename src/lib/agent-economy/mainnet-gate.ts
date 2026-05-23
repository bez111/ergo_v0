export type MainnetGateState = "closed" | "pending" | "open"

export interface MainnetGateBlocker {
  id: string
  label: string
  state: MainnetGateState
  owner: "repo" | "wallet" | "dns" | "ops" | "audit"
  detail: string
}

export const agentEconomyMainnetGate = {
  type: "ergo.agent_economy.mainnet_gate.v0",
  version: "v0",
  status: "closed" as MainnetGateState,
  last_reviewed: "2026-05-21",
  public_claim:
    "Testnet live proof only. Do not claim production or mainnet readiness until every blocker is open.",
  blockers: [
    {
      id: "post-blob-full-receipt",
      label: "Post-Blob full Sage receipt bundle",
      state: "open",
      owner: "wallet",
      detail:
        "A post-Blob paid Sage flow produced a durable full receipt bundle with Agreement, Verification Receipt, and Settlement Receipt JSON.",
    },
    {
      id: "accord-conformance-signed",
      label: "Signed Accord conformance evidence",
      state: "open",
      owner: "repo",
      detail:
        "L1 conformance passed against the full receipt bundle and a signed public evidence artifact is published.",
    },
    {
      id: "exact-contract-identity",
      label: "Exact script hashes and contract identity",
      state: "pending",
      owner: "audit",
      detail:
        "A testnet observed identity manifest is published; mainnet still needs audited source-to-ErgoTree mapping, package versions, and deployment identifiers for every payment primitive.",
    },
    {
      id: "external-audit-manifests",
      label: "Audit manifests",
      state: "pending",
      owner: "audit",
      detail:
        "A draft audit scope manifest is published; signed external review findings are still required before any mainnet language.",
    },
    {
      id: "signer-ops-runbook",
      label: "Signer operations hardening",
      state: "open",
      owner: "ops",
      detail:
        "Permanent Fly signer is live on testnet with health checks, policy limits, failure logging, and runbook visibility in the Live Hub.",
    },
    {
      id: "mcp-dns",
      label: "MCP public DNS",
      state: "open",
      owner: "dns",
      detail:
        "mcp.ergoblockchain.org resolves to the Fly service and the public health and MCP endpoints respond.",
    },
  ] satisfies MainnetGateBlocker[],
  required_artifacts: [
    "full Sage receipt bundle",
    "signed Accord conformance result",
    "public provider signing key",
    "registry evidence update",
    "testnet script identity manifest",
    "audit scope manifest",
    "external audit or review artifact",
    "signer operations evidence",
    "signer operations runbook",
    "permanent signer endpoint",
  ],
  artifacts: {
    full_receipt_bundle:
      "https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
    signed_conformance_result:
      "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json",
    latest_evidence: "https://www.ergoblockchain.org/evidence/sage/latest-evidence.json",
    script_identity_manifest:
      "https://www.ergoblockchain.org/agent-economy/script-identity-manifest.v0.json",
    audit_scope_manifest:
      "https://www.ergoblockchain.org/agent-economy/audit-scope-manifest.v0.json",
    audit_readiness_checklist:
      "https://www.ergoblockchain.org/agent-economy/audit-readiness-checklist.v0.json",
    review_pack: "https://www.ergoblockchain.org/agent-economy/review-pack",
    review_pack_api: "https://www.ergoblockchain.org/api/agent-economy/review-pack",
    developer_launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
    developer_launch_kit_api: "https://www.ergoblockchain.org/api/agent-economy/launch-kit",
    developer_launch_kit_schema:
      "https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json",
    wallet_agent_policy_check_schema:
      "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy-check.schema.v0.json",
    signer_ops_evidence:
      "https://www.ergoblockchain.org/agent-economy/signer-ops-evidence.v0.json",
    external_audit_review_template:
      "https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.template.json",
    external_audit_review_schema:
      "https://www.ergoblockchain.org/agent-economy/external-audit-review.schema.v0.json",
    mainnet_script_identity_template:
      "https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.template.json",
    mainnet_script_identity_schema:
      "https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.schema.v0.json",
    mcp_endpoint_runbook: "https://github.com/bez111/ergo_v0/blob/main/docs/mcp-endpoint-runbook.md",
    signer_runbook: "https://github.com/bez111/ergo_v0/blob/main/docs/sage-signer-ops.md",
    external_audit_report: null,
    mainnet_script_identity: null,
  },
}
