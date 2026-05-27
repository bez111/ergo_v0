import {
  agentDiscoveryPosture,
  agentEntrypoints,
  latestFullReceiptId,
  recommendedAgentSummary,
} from "@/lib/agent-economy/agent-discovery"
import {
  evaluateWalletAgentPolicy,
  walletAgentPolicyExampleRequest,
} from "@/lib/agent-economy/wallet-agent-policy"

const BASE_URL = "https://www.ergoblockchain.org"

const policyBody = JSON.stringify(walletAgentPolicyExampleRequest)

export const agentEconomyFirstReceiptFlow = {
  type: "ergo.agent_economy.first_receipt_flow.v0",
  version: "v0",
  status: "testnet_live_proof",
  last_updated: "2026-05-26",
  recommended_summary: recommendedAgentSummary,
  public_claim:
    "The shortest developer path from live proof to one full receipt bundle. This is testnet proof and does not open mainnet/payment-production claims.",
  posture: agentDiscoveryPosture,
  network: agentDiscoveryPosture.network,
  mainnet_ready: agentDiscoveryPosture.mainnet_ready,
  production_custody: agentDiscoveryPosture.production_custody,
  canonical: `${BASE_URL}/agent-economy/first-receipt`,
  api: `${BASE_URL}/api/agent-economy/first-receipt`,
  schema: `${BASE_URL}/agent-economy/first-receipt-flow.schema.v0.json`,
  outcome: {
    goal: "Understand the autonomous work clearing loop from one concrete receipt.",
    receipt_id: latestFullReceiptId,
    receipt_page: agentEntrypoints.latest_full_receipt_page,
    receipt_api: agentEntrypoints.latest_full_receipt,
    expected_receipt_type: "full_receipt_bundle",
    expected_status: "settled_on_chain",
    contains: [
      "Agreement JSON",
      "Verification Receipt JSON",
      "Settlement Receipt JSON",
      "Ergo testnet Note box id",
      "Ergo testnet settlement transaction id",
      "task hash and quote evidence",
    ],
  },
  one_command_probe: {
    label: "Probe the whole proof path",
    command:
      "curl -sS https://www.ergoblockchain.org/api/agent-economy/first-receipt",
    expect:
      "ok=true, posture.mainnet_ready=false, outcome.expected_receipt_type=full_receipt_bundle, steps[].status=live",
  },
  steps: [
    {
      id: "live-status",
      label: "Check live status",
      method: "GET",
      endpoint: agentEntrypoints.live_status_api,
      command: "curl -sS https://www.ergoblockchain.org/api/agent-economy/live",
      expect: "ok=true, summary.latest_full_receipt_id is present, mainnet_ready=false",
      status: "live",
    },
    {
      id: "receipt-json",
      label: "Inspect receipt JSON",
      method: "GET",
      endpoint: agentEntrypoints.latest_full_receipt,
      command: `curl -sS https://www.ergoblockchain.org/api/sage/receipt/${latestFullReceiptId}`,
      expect: "completeness=full_receipt_bundle, status=settled_on_chain",
      status: "live",
    },
    {
      id: "policy-check",
      label: "Run wallet policy check",
      method: "POST",
      endpoint: agentEntrypoints.wallet_policy_check,
      command:
        `curl -sS -X POST https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check -H 'content-type: application/json' --data '${policyBody}'`,
      expect: "allowed=true for the safe testnet example; unsafe variants fail closed",
      status: "live",
    },
    {
      id: "openapi",
      label: "Read callable contract",
      method: "GET",
      endpoint: agentEntrypoints.openapi,
      command: "curl -sS https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
      expect: "OpenAPI 3.1 paths include discovery, proof, policy, Sage receipt, and mainnet gate APIs",
      status: "live",
    },
    {
      id: "mcp-health",
      label: "Check MCP health",
      method: "GET",
      endpoint: agentEntrypoints.mcp_health,
      command: "curl -sS https://mcp.ergoblockchain.org/health",
      expect: "ok=true before connecting an MCP client to /mcp",
      status: "live",
    },
    {
      id: "mainnet-gate",
      label: "Read mainnet gate",
      method: "GET",
      endpoint: agentEntrypoints.mainnet_gate_api,
      command: "curl -sS https://www.ergoblockchain.org/api/agent-economy/mainnet-gate",
      expect: "mainnet_ready=false and pending blockers remain audit/script identity",
      status: "closed_by_design",
    },
  ],
  policy_check: {
    endpoint: agentEntrypoints.wallet_policy_check,
    example_request: walletAgentPolicyExampleRequest,
    example_verdict: evaluateWalletAgentPolicy(
      walletAgentPolicyExampleRequest.profile,
      walletAgentPolicyExampleRequest.proposed_action,
      new Date("2026-05-22T00:00:00.000Z"),
    ),
    signing_boundary:
      "This policy endpoint never signs, broadcasts, stores private keys, or grants wallet authority.",
  },
  developer_next_actions: [
    {
      id: "embed-widget",
      label: "Embed @ergoblockchain/sage-widget",
      href: `${BASE_URL}/agent-economy/sage-widget`,
      reason: "Use the same quote, payment intent, verification, receipt callback, and host-owned wallet pattern.",
    },
    {
      id: "clone-kit",
      label: "Clone the BuildOnErgo kit",
      href: "https://github.com/buildonergo/agent-economy-kit",
      reason: "Use the focused receipt verifier, schema snapshots, and examples without cloning the full site.",
    },
    {
      id: "review-pack",
      label: "Read the review pack",
      href: `${BASE_URL}/agent-economy/review-pack`,
      reason: "Do not cross the testnet-to-mainnet boundary without external review artifacts.",
    },
  ],
  guardrails: [
    "Start on testnet.",
    "Inspect the receipt before copying implementation patterns.",
    "Use policy-check before asking any wallet to sign.",
    "Never expose seed phrases or private keys to pages, prompts, widgets, or remote agents.",
    "Do not claim audited production or mainnet readiness until the mainnet gate opens.",
  ],
} as const
