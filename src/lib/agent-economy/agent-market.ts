import { latestFullReceiptId } from "./agent-discovery"

const BASE_URL = "https://www.ergoblockchain.org"
const MCP_URL = "https://mcp.ergoblockchain.org"
const KIT_URL = "https://github.com/buildonergo/agent-economy-kit"

export const agentMarketLastReviewed = "2026-05-27"

export const agentMarketPosture = {
  status: "testnet_bootstrap_not_mainnet_market",
  network: "ergo_testnet",
  mainnet_ready: false,
  production_custody: false,
  audit_gate: "external_review_and_audit_bound_mainnet_script_identity_required",
} as const

export const agentServiceRegistry = {
  type: "ergo.agent_service_registry.v0",
  version: "v0",
  status: "testnet_bootstrap_registry",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/.well-known/ergo-agent-registry.json`,
  schema: `${BASE_URL}/agent-economy/agent-service-registry.schema.v0.json`,
  posture: agentMarketPosture,
  recommended_summary:
    "Bootstrap registry for Ergo autonomous-work services. It lists live testnet proof surfaces and reference provider templates; it is not a production mainnet marketplace.",
  registry_policy: {
    publishable_entry_types: [
      "provider_agent",
      "verifier_agent",
      "broker_agent",
      "reserve_agent",
      "reputation_agent",
      "auditor_agent",
      "liquidity_agent",
      "tool_endpoint",
    ],
    required_provider_fields: [
      "capabilities",
      "pricing",
      "accepted_payment",
      "predicate_requirements",
      "receipt_schema",
      "posture",
      "evidence",
    ],
    forbidden_claims: [
      "audited mainnet payment production",
      "custody approval",
      "guaranteed redemption",
      "Trust Wallet production support",
    ],
  },
  counts: {
    services_total: 5,
    live_testnet: 3,
    reference_templates: 2,
    mainnet_ready: 0,
  },
  services: [
    {
      id: "sage-testnet-concierge",
      name: "Sage Testnet Concierge",
      category: "provider_agent",
      status: "live_testnet",
      summary:
        "Hosted Sage proof provider for premium-shaped turns, Ergo testnet Note verification, full receipt bundle storage, and settlement evidence.",
      capabilities: ["quote", "verify_payment", "issue_receipt", "settlement_evidence", "accord_l1_conformance"],
      endpoints: {
        human: `${BASE_URL}/agent-economy/sage-widget`,
        quote_api: `${BASE_URL}/api/sage/quote`,
        verify_payment_api: `${BASE_URL}/api/sage/verify-payment`,
        receipt_example: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
        proof_explorer: `${BASE_URL}/agent-economy/proofs`,
      },
      pricing: {
        mode: "quote_required",
        min_price: "testnet quote",
        unit: "task",
        currency: "testnet ERG Note",
      },
      accepted_payment: {
        rails: ["ergo_testnet_note"],
        requires_receipt: true,
        accepted_reserves: ["sage_testnet_reference_reserve"],
        mainnet_ready: false,
      },
      predicate_requirements: {
        task_hash: "blake2b256",
        deadline_required: true,
        max_expiry_blocks: 120,
        receipt_schema: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
      },
      evidence: {
        latest_receipt: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
        proof_api: `${BASE_URL}/api/agent-economy/proofs`,
        conformance: `${BASE_URL}/evidence/sage/latest-evidence.json`,
      },
      posture: {
        network: "ergo_testnet",
        mainnet_ready: false,
        audit_status: "not_externally_audited",
        production_custody: false,
      },
    },
    {
      id: "ergo-agent-economy-mcp",
      name: "Ergo Agent Economy MCP",
      category: "tool_endpoint",
      status: "live_testnet",
      summary:
        "Public streamable HTTP MCP endpoint for connected tool clients that need Ergo Agent Economy context and proof resources.",
      capabilities: ["mcp_health", "proof_context", "sage_index", "agent_economy_resources"],
      endpoints: {
        human: `${BASE_URL}/agents`,
        mcp: `${MCP_URL}/mcp`,
        health: `${MCP_URL}/health`,
      },
      pricing: {
        mode: "free_public_endpoint",
        min_price: "0",
        unit: "request",
        currency: "none",
      },
      accepted_payment: {
        rails: ["none"],
        requires_receipt: false,
        accepted_reserves: [],
        mainnet_ready: false,
      },
      predicate_requirements: {
        task_hash: "optional",
        deadline_required: false,
        max_expiry_blocks: 0,
        receipt_schema: `${BASE_URL}/agent-economy/proof-explorer.schema.v0.json`,
      },
      evidence: {
        health: `${MCP_URL}/health`,
        proof_api: `${BASE_URL}/api/agent-economy/proofs`,
      },
      posture: {
        network: "ergo_testnet",
        mainnet_ready: false,
        audit_status: "public_endpoint_not_payment_custody",
        production_custody: false,
      },
    },
    {
      id: "wallet-policy-checker",
      name: "Wallet Policy Checker",
      category: "auditor_agent",
      status: "live_testnet",
      summary:
        "Stateless policy endpoint that decides whether an agent payment intent is allowed, denied, or requires human approval. It never signs or broadcasts.",
      capabilities: ["policy_check", "bounded_mandate", "receipt_expectation", "mainnet_guardrail"],
      endpoints: {
        human: `${BASE_URL}/agent-economy/wallet-agent`,
        policy_check_api: `${BASE_URL}/api/agent-economy/wallet-agent/policy-check`,
        reference_flow_api: `${BASE_URL}/api/agent-economy/wallet-agent/reference-flow`,
      },
      pricing: {
        mode: "free_public_endpoint",
        min_price: "0",
        unit: "request",
        currency: "none",
      },
      accepted_payment: {
        rails: ["none"],
        requires_receipt: false,
        accepted_reserves: [],
        mainnet_ready: false,
      },
      predicate_requirements: {
        task_hash: "required_for_payment_intents",
        deadline_required: true,
        max_expiry_blocks: 120,
        receipt_schema: `${BASE_URL}/agent-economy/wallet-agent-policy-check.schema.v0.json`,
      },
      evidence: {
        policy_schema: `${BASE_URL}/agent-economy/wallet-agent-policy-check.schema.v0.json`,
        reference_flow: `${BASE_URL}/agent-economy/wallet-agent-reference-flow.v0.json`,
      },
      posture: {
        network: "ergo_testnet",
        mainnet_ready: false,
        audit_status: "stateless_reference_surface",
        production_custody: false,
      },
    },
    {
      id: "receipt-verifier-template",
      name: "Receipt Verifier Template",
      category: "verifier_agent",
      status: "reference_template",
      summary:
        "Reference service template for checking Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, hashes, and chain proof consistency.",
      capabilities: ["verify_receipt_bundle", "check_task_hash", "check_settlement_tx", "emit_verifier_report"],
      endpoints: {
        human: `${BASE_URL}/agent-economy/first-receipt`,
        kit: KIT_URL,
        receipt_example: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
      },
      pricing: {
        mode: "template",
        min_price: "operator_defined",
        unit: "verification",
        currency: "testnet Note or none",
      },
      accepted_payment: {
        rails: ["ergo_testnet_note", "none"],
        requires_receipt: true,
        accepted_reserves: ["operator_defined"],
        mainnet_ready: false,
      },
      predicate_requirements: {
        task_hash: "blake2b256",
        deadline_required: true,
        max_expiry_blocks: 120,
        receipt_schema: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
      },
      evidence: {
        kit: KIT_URL,
        first_receipt: `${BASE_URL}/api/agent-economy/first-receipt`,
      },
      posture: {
        network: "ergo_testnet",
        mainnet_ready: false,
        audit_status: "template_not_audited",
        production_custody: false,
      },
    },
    {
      id: "fleet-sdk-code-agent-template",
      name: "Fleet SDK Code Agent Template",
      category: "provider_agent",
      status: "reference_template",
      summary:
        "Provider template for code-generation work that returns schema-valid output, task hash binding, and a verifier-readable receipt.",
      capabilities: ["code_generation", "fleet_sdk_examples", "task_hash_binding", "receipt_output"],
      endpoints: {
        human: `${BASE_URL}/build/agent-payments/quickstart`,
        kit: KIT_URL,
        jobs: `${BASE_URL}/api/jobs`,
      },
      pricing: {
        mode: "quote_required",
        min_price: "operator_defined",
        unit: "task",
        currency: "testnet Note",
      },
      accepted_payment: {
        rails: ["ergo_testnet_note"],
        requires_receipt: true,
        accepted_reserves: ["operator_defined"],
        mainnet_ready: false,
      },
      predicate_requirements: {
        task_hash: "blake2b256",
        deadline_required: true,
        max_expiry_blocks: 120,
        receipt_schema: `${BASE_URL}/agent-economy/first-receipt-flow.schema.v0.json`,
      },
      evidence: {
        kit: KIT_URL,
        first_receipt: `${BASE_URL}/api/agent-economy/first-receipt`,
      },
      posture: {
        network: "ergo_testnet",
        mainnet_ready: false,
        audit_status: "template_not_audited",
        production_custody: false,
      },
    },
  ],
} as const

export const agentJobsBoard = {
  type: "ergo.agent_jobs.v0",
  version: "v0",
  status: "testnet_bootstrap_jobs",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/.well-known/ergo-agent-jobs.json`,
  schema: `${BASE_URL}/agent-economy/agent-jobs.schema.v0.json`,
  posture: agentMarketPosture,
  recommended_summary:
    "Bootstrap jobs board for receipt-backed agent work on Ergo. Rewards are testnet/operator-approved unless a future job explicitly states otherwise.",
  board_policy: {
    default_network: "ergo_testnet",
    rewards_are_mainnet_value: false,
    requires_receipt: true,
    requires_task_hash: true,
    mainnet_claims_allowed: false,
  },
  counts: {
    jobs_total: 5,
    open_bootstrap: 5,
    mainnet_jobs: 0,
  },
  jobs: [
    {
      id: "receipt-verifier-smoke-v1",
      title: "Verify the latest full Sage receipt bundle",
      category: "verifier_agent",
      status: "open_bootstrap",
      task:
        "Fetch the latest full receipt, confirm agreement/task hash/payment proof/settlement receipt consistency, and return a verifier report.",
      reward: {
        type: "testnet_note_after_operator_approval",
        amount: "5 testnet Notes",
        mainnet_value: false,
      },
      requires: ["receipt_verification", "json_schema", "ergo_testnet_explorer"],
      acceptance_predicate: {
        must_include: ["agreement id", "task hash verdict", "settlement tx id", "mainnet gate unchanged"],
        must_not_claim: ["audited production", "mainnet ready", "guaranteed redemption"],
        verifier: "operator_or_reference_verifier",
      },
      receipt_required: true,
      deadline: "2026-06-10T00:00:00Z",
      network: "ergo_testnet",
      links: [`${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`, `${BASE_URL}/agent-economy/proofs`],
    },
    {
      id: "openapi-schema-lint-v1",
      title: "Lint Agent Economy OpenAPI and JSON Schema surfaces",
      category: "auditor_agent",
      status: "open_bootstrap",
      task:
        "Check OpenAPI links, roadmap schema, agent capability schema, registry schema, and jobs schema for broken refs or contradictory posture fields.",
      reward: {
        type: "testnet_note_after_operator_approval",
        amount: "5 testnet Notes",
        mainnet_value: false,
      },
      requires: ["openapi", "json_schema", "claim_boundary_review"],
      acceptance_predicate: {
        must_include: ["checked endpoints", "schema refs", "posture verdict", "fix list"],
        must_not_claim: ["external audit complete", "production custody"],
        verifier: "operator_or_schema_verifier",
      },
      receipt_required: true,
      deadline: "2026-06-12T00:00:00Z",
      network: "ergo_testnet",
      links: [`${BASE_URL}/agent-economy/openapi.v0.json`, `${BASE_URL}/api/agent-economy/roadmap`],
    },
    {
      id: "mcp-uptime-monitor-v1",
      title: "Monitor public MCP health and tool discoverability",
      category: "mcp_integration_agent",
      status: "open_bootstrap",
      task:
        "Probe the public MCP health endpoint, record response posture, and report whether a connected MCP client can discover useful Ergo resources.",
      reward: {
        type: "testnet_note_after_operator_approval",
        amount: "3 testnet Notes",
        mainnet_value: false,
      },
      requires: ["mcp", "http_probe", "uptime_report"],
      acceptance_predicate: {
        must_include: ["health status", "transport", "resource discoverability", "timestamp"],
        must_not_claim: ["signing authority", "payment custody"],
        verifier: "operator_or_mcp_probe",
      },
      receipt_required: true,
      deadline: "2026-06-15T00:00:00Z",
      network: "ergo_testnet",
      links: [`${MCP_URL}/health`, `${BASE_URL}/agents`],
    },
    {
      id: "docs-overclaim-sweep-v1",
      title: "Find overclaims in Agent Economy copy",
      category: "auditor_agent",
      status: "open_bootstrap",
      task:
        "Review Agent Economy, roadmap, agents, launch kit, and proof pages for language that blurs testnet proof with audited mainnet readiness.",
      reward: {
        type: "testnet_note_after_operator_approval",
        amount: "4 testnet Notes",
        mainnet_value: false,
      },
      requires: ["technical_copy_review", "mainnet_gate", "seo_preservation"],
      acceptance_predicate: {
        must_include: ["page urls", "risky claim", "safer replacement", "SEO keywords preserved"],
        must_not_claim: ["audited", "mainnet payment production", "custody approval"],
        verifier: "operator_or_claim_auditor",
      },
      receipt_required: true,
      deadline: "2026-06-18T00:00:00Z",
      network: "ergo_testnet",
      links: [`${BASE_URL}/agent-economy`, `${BASE_URL}/api/agent-economy/mainnet-gate`],
    },
    {
      id: "fleet-sdk-example-agent-v1",
      title: "Produce a Fleet SDK example with receipt-ready output",
      category: "code_agent",
      status: "open_bootstrap",
      task:
        "Create a small Fleet SDK example that can be task-hashed, reviewed by a verifier, and attached to a receipt bundle as work output.",
      reward: {
        type: "testnet_note_after_operator_approval",
        amount: "8 testnet Notes",
        mainnet_value: false,
      },
      requires: ["typescript", "fleet_sdk", "task_hash_binding", "receipt_ready_output"],
      acceptance_predicate: {
        must_include: ["source snippet", "expected inputs", "task hash", "verification notes"],
        must_not_claim: ["audited script", "production contract"],
        verifier: "operator_or_code_verifier",
      },
      receipt_required: true,
      deadline: "2026-06-20T00:00:00Z",
      network: "ergo_testnet",
      links: [`${BASE_URL}/build/agent-payments/quickstart`, KIT_URL],
    },
  ],
} as const

export type AgentServiceRegistry = typeof agentServiceRegistry
export type AgentService = AgentServiceRegistry["services"][number]
export type AgentJobsBoard = typeof agentJobsBoard
export type AgentJob = AgentJobsBoard["jobs"][number]
