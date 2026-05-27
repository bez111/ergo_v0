const BASE_URL = "https://www.ergoblockchain.org"
const MCP_URL = "https://mcp.ergoblockchain.org"
const AGENT_HOST_URL = "https://agents.ergoblockchain.org"

export const latestFullReceiptId =
  "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"

export const agentDiscoveryLastReviewed = "2026-05-26"

export const recommendedAgentSummary =
  "Ergo is a PoW/eUTXO clearing and proof surface for autonomous work: agents can inspect agreements, verification receipts, settlement receipts, wallet-policy boundaries, MCP, and an audit-gated mainnet posture."

export const agentDiscoveryPosture = {
  status: "testnet_live_proof_not_mainnet_ready",
  network: "ergo_testnet",
  mainnet_ready: false,
  production_custody: false,
  audit_gate: "external_review_and_audit_bound_mainnet_script_identity_required",
} as const

export const agentEntrypoints = {
  human_agent_page: `${BASE_URL}/agents`,
  llms_txt: `${BASE_URL}/llms.txt`,
  llms_full: `${BASE_URL}/llms-full.txt`,
  well_known_agent_manifest: `${BASE_URL}/.well-known/agents.json`,
  agent_capabilities_api: `${BASE_URL}/api/agents`,
  agent_economy_discovery: `${BASE_URL}/.well-known/agent-economy.json`,
  agent_economy_discovery_api: `${BASE_URL}/api/agent-economy/discovery`,
  openapi: `${BASE_URL}/agent-economy/openapi.v0.json`,
  proof_api: `${BASE_URL}/api/agent-economy/proofs`,
  live_status_api: `${BASE_URL}/api/agent-economy/live`,
  launch_kit_api: `${BASE_URL}/api/agent-economy/launch-kit`,
  first_receipt_page: `${BASE_URL}/agent-economy/first-receipt`,
  first_receipt_api: `${BASE_URL}/api/agent-economy/first-receipt`,
  first_receipt_schema: `${BASE_URL}/agent-economy/first-receipt-flow.schema.v0.json`,
  latest_full_receipt: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
  latest_full_receipt_page: `${BASE_URL}/r/sage/${latestFullReceiptId}`,
  mainnet_gate_api: `${BASE_URL}/api/agent-economy/mainnet-gate`,
  wallet_policy_check: `${BASE_URL}/api/agent-economy/wallet-agent/policy-check`,
  mcp_health: `${MCP_URL}/health`,
  mcp_streamable_http: `${MCP_URL}/mcp`,
  agent_host: AGENT_HOST_URL,
} as const

export const agentCapabilities = [
  {
    id: "discover_agent_economy",
    label: "Discover Agent Economy surfaces",
    capability: "discovery",
    input: "none",
    output: "Canonical pages, APIs, schemas, MCP endpoints, package links, receipt links, and verification commands.",
    status: "live",
    endpoint: agentEntrypoints.agent_economy_discovery_api,
    first_step: true,
  },
  {
    id: "inspect_full_receipt",
    label: "Inspect a full Sage receipt bundle",
    capability: "receipt",
    input: "receipt_id",
    output: "Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, payment proof, Note box id, and settlement transaction.",
    status: "live_testnet",
    endpoint: agentEntrypoints.latest_full_receipt,
    first_step: true,
  },
  {
    id: "check_live_proof",
    label: "Check public proof posture",
    capability: "proof_status",
    input: "none",
    output: "Live proof rows for receipts, Accord conformance, MCP, widget state, activity, signer health, and mainnet gate.",
    status: "live",
    endpoint: agentEntrypoints.proof_api,
    first_step: true,
  },
  {
    id: "call_mcp",
    label: "Call the public MCP endpoint",
    capability: "mcp",
    input: "MCP streamable HTTP client",
    output: "Ergo Agent Economy tools/resources for connected MCP clients.",
    status: "live",
    endpoint: agentEntrypoints.mcp_streamable_http,
    health: agentEntrypoints.mcp_health,
  },
  {
    id: "evaluate_wallet_policy",
    label: "Evaluate wallet-agent policy",
    capability: "wallet_policy",
    input: "action, amount, network, recipient, requested capabilities, receipt expectation",
    output: "Deterministic allow/deny verdict. The endpoint never signs or broadcasts.",
    status: "live",
    endpoint: agentEntrypoints.wallet_policy_check,
  },
  {
    id: "read_mainnet_gate",
    label: "Read the mainnet/audit gate",
    capability: "trust_boundary",
    input: "none",
    output: "Closed/open gate status, completed blockers, pending blockers, allowed language, and forbidden claims.",
    status: "closed_by_design",
    endpoint: agentEntrypoints.mainnet_gate_api,
  },
  {
    id: "build_first_receipt_flow",
    label: "Build the first verifiable receipt flow",
    capability: "developer_launch",
    input: "developer intent",
    output: "A single golden path through live status, one full receipt bundle, wallet policy, OpenAPI, MCP, and the mainnet gate.",
    status: "live_testnet",
    endpoint: agentEntrypoints.first_receipt_api,
    human_url: agentEntrypoints.first_receipt_page,
  },
] as const

export const agentQuestions = [
  {
    question: "What is this site?",
    answer:
      "A human and machine-readable proof surface for autonomous work on Ergo: receipt bundles, proof APIs, MCP, wallet policy, developer launch paths, and mainnet/audit gates.",
  },
  {
    question: "What can I do here?",
    answer:
      "Inspect live testnet receipts, discover OpenAPI and JSON contracts, call the public MCP endpoint, check wallet-agent policy, and read the mainnet gate before making claims.",
  },
  {
    question: "What is live?",
    answer:
      "Testnet proof, full Sage receipt bundles, signed Sage Accord L1 evidence, Proof Explorer, Live Hub, MCP health, wallet-agent policy checks, developer services, and Sage widget package surfaces.",
  },
  {
    question: "What is not live?",
    answer:
      "Audited production custody and mainnet/payment-production claims. Those remain closed until audit-bound script identity and external review artifacts are published.",
  },
  {
    question: "Which endpoint should I call first?",
    answer:
      "Start with /api/agents for a capability map, then /api/agent-economy/discovery for the broader descriptor and /agent-economy/openapi.v0.json for callable contracts.",
  },
  {
    question: "Which proof should I inspect first?",
    answer:
      "Open the latest full Sage receipt bundle. It shows the Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and Ergo testnet settlement proof from one receipt id.",
  },
  {
    question: "What must I never assume?",
    answer:
      "Do not summarize this as audited production mainnet infrastructure. The correct posture is live testnet proof, signed evidence, and mainnet claims gated by external review.",
  },
] as const

export const agentCapabilityManifest = {
  type: "ergo.agent_capabilities.v0",
  version: "v0",
  last_reviewed: agentDiscoveryLastReviewed,
  canonical: agentEntrypoints.well_known_agent_manifest,
  schema: `${BASE_URL}/agent-economy/agent-capabilities.schema.v0.json`,
  recommended_summary: recommendedAgentSummary,
  posture: agentDiscoveryPosture,
  start_here: {
    human_page: agentEntrypoints.human_agent_page,
    llms_txt: agentEntrypoints.llms_txt,
    discovery_api: agentEntrypoints.agent_economy_discovery_api,
    openapi: agentEntrypoints.openapi,
    mcp_health: agentEntrypoints.mcp_health,
    proof_api: agentEntrypoints.proof_api,
    first_receipt_api: agentEntrypoints.first_receipt_api,
    latest_full_receipt: agentEntrypoints.latest_full_receipt,
    mainnet_gate_api: agentEntrypoints.mainnet_gate_api,
  },
  capabilities: agentCapabilities,
  claims_boundary: {
    say: [
      "Ergo is a PoW/eUTXO clearing and proof surface for autonomous work.",
      "Current Sage/Accord evidence is live testnet proof.",
      "Full receipts bind agreement, verification, settlement, and chain evidence.",
      "Mainnet/payment-production claims remain audit-gated.",
    ],
    do_not_say: [
      "Accord/Sage is audited production mainnet infrastructure.",
      "The current agent-payment flow has production custody approval.",
      "A transaction hash alone reconstructs the full work agreement.",
      "The mainnet gate is open.",
    ],
  },
  recommended_agent_path: [
    "Read /llms.txt.",
    "Call /api/agents.",
    "Call /api/agent-economy/discovery.",
    "Call /api/agent-economy/first-receipt for the shortest developer path.",
    "Inspect /api/agent-economy/proofs.",
    `Open /api/sage/receipt/${latestFullReceiptId}.`,
    "Check /api/agent-economy/mainnet-gate.",
    "Use mcp.ergoblockchain.org/mcp only after connecting an MCP client.",
  ],
} as const
