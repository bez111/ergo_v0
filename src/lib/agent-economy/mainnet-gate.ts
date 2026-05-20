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
  last_reviewed: "2026-05-20",
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
      state: "closed",
      owner: "audit",
      detail:
        "Publish exact ErgoScript/Fleet artifacts, script hashes, network, and deployment identifiers for every payment primitive.",
    },
    {
      id: "external-audit-manifests",
      label: "Audit manifests",
      state: "closed",
      owner: "audit",
      detail:
        "Attach audit scope, findings status, artifact hashes, and signed reviewer identity before any mainnet language.",
    },
    {
      id: "signer-ops-runbook",
      label: "Signer operations hardening",
      state: "pending",
      owner: "ops",
      detail:
        "Keep signer health, limits, failure logging, failover, and manual runbook visible in the Live Hub.",
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
    "script identity manifest",
    "audit manifest",
    "signer operations runbook",
    "permanent signer endpoint",
  ],
}
