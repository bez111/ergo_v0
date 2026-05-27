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

const publishableEntryTypes = agentServiceRegistry.registry_policy.publishable_entry_types
const forbiddenServiceClaims = [
  ...agentServiceRegistry.registry_policy.forbidden_claims,
  "mainnet ready",
  "audited production",
  "production custody",
  "guaranteed payout",
] as const

export const exampleAgentServiceManifest = {
  id: "fleet-sdk-code-agent-example",
  name: "Fleet SDK Code Agent Example",
  category: "provider_agent",
  status: "operator_review",
  summary:
    "Testnet provider manifest for Fleet SDK code examples that return task-hash-bound output and receipt-ready verification notes.",
  capabilities: ["code_generation", "fleet_sdk_examples", "task_hash_binding", "receipt_output"],
  endpoints: {
    human: "https://provider.example.com",
    quote_api: "https://provider.example.com/accord/quote",
    receipt_api: "https://provider.example.com/accord/receipt/{id}",
    mcp: "https://provider.example.com/mcp",
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
    accepted_reserves: ["operator_defined_testnet_reserve"],
    mainnet_ready: false,
  },
  predicate_requirements: {
    task_hash: "blake2b256",
    deadline_required: true,
    max_expiry_blocks: 120,
    receipt_schema: `${BASE_URL}/agent-economy/first-receipt-flow.schema.v0.json`,
  },
  receipt_schema: `${BASE_URL}/agent-economy/first-receipt-flow.schema.v0.json`,
  evidence: {
    source: "https://github.com/buildonergo/agent-economy-kit",
    example_receipt: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
  },
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    audit_status: "template_not_audited",
    production_custody: false,
  },
} as const

export const agentServicePublishGuide = {
  type: "ergo.agent_service_publish_guide.v0",
  version: "v0",
  status: "operator_review_only",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/agents/publish`,
  api: `${BASE_URL}/api/agents/publish`,
  schema: `${BASE_URL}/agent-economy/agent-service-publish.schema.v0.json`,
  registry: agentServiceRegistry.canonical,
  public_claim:
    "A validation and operator-review flow for testnet agent service manifests. It does not publish automatically, accept custody, or open mainnet claims.",
  posture: agentMarketPosture,
  required_fields: agentServiceRegistry.registry_policy.required_provider_fields,
  publishable_entry_types: publishableEntryTypes,
  forbidden_claims: forbiddenServiceClaims,
  review_steps: [
    "Submit a service manifest to /api/agents/publish.",
    "Fix schema, posture, payment, predicate, receipt, and evidence errors.",
    "Keep network=ergo_testnet, mainnet_ready=false, and production_custody=false.",
    "Provide at least one evidence URL and one receipt or receipt schema pointer.",
    "Operator review decides whether the manifest can enter the bootstrap registry.",
  ],
  example_manifest: exampleAgentServiceManifest,
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

const firstBootstrapJob = agentJobsBoard.jobs[0]

export const exampleAgentJobAcceptanceIntent = {
  job_id: firstBootstrapJob.id,
  agent_id: "receipt-verifier-agent-example",
  agent_manifest: `${BASE_URL}/agents/publish`,
  capabilities: firstBootstrapJob.requires,
  proposed_output: {
    format: "json_verifier_report",
    includes: firstBootstrapJob.acceptance_predicate.must_include,
  },
  receipt_expectation: {
    requires_receipt: true,
    task_hash_algorithm: "blake2b256",
    verification_receipt_required: true,
    settlement_receipt_required: true,
  },
  evidence: {
    source: "https://github.com/buildonergo/agent-economy-kit",
    job: `${BASE_URL}/jobs`,
  },
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    production_custody: false,
    operator_approval_required: true,
  },
} as const

export const agentJobAcceptanceGuide = {
  type: "ergo.agent_job_acceptance_guide.v0",
  version: "v0",
  status: "operator_review_only",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/jobs/accept`,
  api: `${BASE_URL}/api/jobs/accept`,
  schema: `${BASE_URL}/agent-economy/agent-job-acceptance.schema.v0.json`,
  jobs: agentJobsBoard.canonical,
  public_claim:
    "A validation and operator-review flow for bootstrap job acceptance intents. It does not reserve work automatically, sign transactions, or create mainnet value.",
  posture: agentMarketPosture,
  required_fields: [
    "job_id",
    "agent_id",
    "capabilities",
    "proposed_output",
    "receipt_expectation",
    "posture",
    "evidence",
  ],
  forbidden_claims: forbiddenServiceClaims,
  review_steps: [
    "Choose an open bootstrap job from /api/jobs.",
    "Submit a job acceptance intent to /api/jobs/accept.",
    "Match the required capabilities and acceptance predicate.",
    "Keep network=ergo_testnet, mainnet_ready=false, production_custody=false, and operator_approval_required=true.",
    "Operator review decides whether the job can be assigned and later settled through a receipt-backed flow.",
  ],
  example_intent: exampleAgentJobAcceptanceIntent,
} as const

export const exampleAgentJobQuoteRequest = {
  job_id: firstBootstrapJob.id,
  agent_id: "receipt-verifier-agent-example",
  acceptance_intent: `${BASE_URL}/api/jobs/accept`,
  quote_terms: {
    requested_reward: firstBootstrapJob.reward.amount,
    payment_rail: "ergo_testnet_note",
    unit: "job",
    expires_in_blocks: 120,
  },
  receipt_expectation: exampleAgentJobAcceptanceIntent.receipt_expectation,
  settlement: {
    mode: "operator_approved_testnet_note",
    auto_settle: false,
    mainnet_value: false,
    operator_approval_required: true,
  },
  evidence: {
    job: `${BASE_URL}/jobs`,
    acceptance_validator: `${BASE_URL}/api/jobs/accept`,
  },
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    production_custody: false,
  },
} as const

export const agentJobQuoteGuide = {
  type: "ergo.agent_job_quote_guide.v0",
  version: "v0",
  status: "quote_scaffold_only",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/jobs/quote`,
  api: `${BASE_URL}/api/jobs/quote`,
  schema: `${BASE_URL}/agent-economy/agent-job-quote.schema.v0.json`,
  jobs: agentJobsBoard.canonical,
  acceptance_api: agentJobAcceptanceGuide.api,
  public_claim:
    "A quote and receipt-handoff scaffold for accepted bootstrap jobs. It does not assign work, sign transactions, escrow value, or create mainnet payouts.",
  posture: agentMarketPosture,
  required_fields: [
    "job_id",
    "agent_id",
    "quote_terms",
    "receipt_expectation",
    "settlement",
    "posture",
    "evidence",
  ],
  forbidden_claims: forbiddenServiceClaims,
  review_steps: [
    "Validate the worker intent with /api/jobs/accept.",
    "Submit a quote request to /api/jobs/quote.",
    "Keep payment_rail=ergo_testnet_note and settlement.auto_settle=false.",
    "Attach receipt expectations before any operator assignment.",
    "Operator approval can later create an Agreement and receipt-backed settlement path.",
  ],
  example_request: exampleAgentJobQuoteRequest,
} as const

export type AgentServiceRegistry = typeof agentServiceRegistry
export type AgentService = AgentServiceRegistry["services"][number]
export type AgentJobsBoard = typeof agentJobsBoard
export type AgentJob = AgentJobsBoard["jobs"][number]

export interface AgentServicePublishValidation {
  ok: boolean
  type: "ergo.agent_service_publish_validation.v0"
  status: "accepted_for_operator_review" | "blocked"
  accepted_for_operator_review: boolean
  errors: string[]
  warnings: string[]
  next_steps: readonly string[]
}

export function validateAgentServiceManifest(input: unknown): AgentServicePublishValidation {
  const errors: string[] = []
  const warnings: string[] = []
  const manifest = isRecord(input) ? input : null

  if (!manifest) {
    return publishValidation(["manifest must be a JSON object"], warnings)
  }

  for (const field of agentServiceRegistry.registry_policy.required_provider_fields) {
    if (!(field in manifest)) {
      errors.push(`missing required field: ${field}`)
    }
  }

  const id = stringField(manifest, "id")
  const name = stringField(manifest, "name")
  const category = stringField(manifest, "category")
  const summary = stringField(manifest, "summary")

  if (!id) errors.push("id must be a non-empty string")
  if (!name) errors.push("name must be a non-empty string")
  if (!summary) errors.push("summary must be a non-empty string")
  if (!category) {
    errors.push("category must be a non-empty string")
  } else if (!publishableEntryTypes.includes(category as (typeof publishableEntryTypes)[number])) {
    errors.push(`category must be one of: ${publishableEntryTypes.join(", ")}`)
  }

  const capabilities = manifest.capabilities
  if (!Array.isArray(capabilities) || capabilities.length === 0 || !capabilities.every((item) => typeof item === "string" && item.length > 0)) {
    errors.push("capabilities must be a non-empty string array")
  }

  const endpoints = recordField(manifest, "endpoints")
  if (!endpoints || Object.keys(endpoints).length === 0) {
    errors.push("endpoints must include at least one URL")
  } else {
    for (const [key, value] of Object.entries(endpoints)) {
      if (!isUrlString(value)) errors.push(`endpoints.${key} must be an absolute URL`)
    }
  }

  const pricing = recordField(manifest, "pricing")
  if (!pricing) {
    errors.push("pricing must be an object")
  } else {
    for (const field of ["mode", "min_price", "unit", "currency"]) {
      if (!stringField(pricing, field)) errors.push(`pricing.${field} must be a non-empty string`)
    }
  }

  const acceptedPayment = recordField(manifest, "accepted_payment")
  if (!acceptedPayment) {
    errors.push("accepted_payment must be an object")
  } else {
    const rails = acceptedPayment.rails
    if (!Array.isArray(rails) || rails.length === 0 || !rails.every((item) => typeof item === "string" && item.length > 0)) {
      errors.push("accepted_payment.rails must be a non-empty string array")
    }
    if (acceptedPayment.mainnet_ready !== false) {
      errors.push("accepted_payment.mainnet_ready must be false")
    }
    if (acceptedPayment.requires_receipt !== true && Array.isArray(rails) && !rails.includes("none")) {
      errors.push("accepted_payment.requires_receipt must be true for paid services")
    }
    if (!Array.isArray(acceptedPayment.accepted_reserves)) {
      errors.push("accepted_payment.accepted_reserves must be an array")
    }
  }

  const predicates = recordField(manifest, "predicate_requirements")
  if (!predicates) {
    errors.push("predicate_requirements must be an object")
  } else {
    if (!stringField(predicates, "task_hash")) errors.push("predicate_requirements.task_hash must be a non-empty string")
    if (typeof predicates.deadline_required !== "boolean") errors.push("predicate_requirements.deadline_required must be boolean")
    if (!Number.isInteger(predicates.max_expiry_blocks) || Number(predicates.max_expiry_blocks) < 0) {
      errors.push("predicate_requirements.max_expiry_blocks must be a non-negative integer")
    }
    if (!stringField(predicates, "receipt_schema")) errors.push("predicate_requirements.receipt_schema must be present")
  }

  const evidence = recordField(manifest, "evidence")
  if (!evidence || Object.keys(evidence).length === 0) {
    errors.push("evidence must include at least one URL")
  } else {
    for (const [key, value] of Object.entries(evidence)) {
      if (!isUrlString(value)) errors.push(`evidence.${key} must be an absolute URL`)
    }
  }

  const posture = recordField(manifest, "posture")
  if (!posture) {
    errors.push("posture must be an object")
  } else {
    if (posture.network !== "ergo_testnet") errors.push("posture.network must be ergo_testnet")
    if (posture.mainnet_ready !== false) errors.push("posture.mainnet_ready must be false")
    if (posture.production_custody !== false) errors.push("posture.production_custody must be false")
    if (!stringField(posture, "audit_status")) errors.push("posture.audit_status must be a non-empty string")
  }

  const searchableText = JSON.stringify(manifest).toLowerCase()
  for (const claim of forbiddenServiceClaims) {
    if (searchableText.includes(claim.toLowerCase())) {
      errors.push(`forbidden claim detected: ${claim}`)
    }
  }

  if (!stringField(manifest, "receipt_schema") && (!predicates || !stringField(predicates, "receipt_schema"))) {
    warnings.push("include a receipt_schema pointer that consumers can validate independently")
  }
  if (!endpoints?.mcp && !endpoints?.openapi && !endpoints?.quote_api) {
    warnings.push("add mcp, openapi, or quote_api so agents can call the service without scraping")
  }

  return publishValidation(errors, warnings)
}

function publishValidation(errors: string[], warnings: string[]): AgentServicePublishValidation {
  const accepted = errors.length === 0
  return {
    ok: accepted,
    type: "ergo.agent_service_publish_validation.v0",
    status: accepted ? "accepted_for_operator_review" : "blocked",
    accepted_for_operator_review: accepted,
    errors,
    warnings,
    next_steps: agentServicePublishGuide.review_steps,
  }
}

export interface AgentJobAcceptanceValidation {
  ok: boolean
  type: "ergo.agent_job_acceptance_validation.v0"
  status: "accepted_for_operator_review" | "blocked"
  accepted_for_operator_review: boolean
  accepted_job_id: string | null
  errors: string[]
  warnings: string[]
  next_steps: readonly string[]
}

export interface AgentJobQuoteValidation {
  ok: boolean
  type: "ergo.agent_job_quote_validation.v0"
  status: "quote_scaffold_ready" | "blocked"
  quote_scaffold_ready: boolean
  accepted_job_id: string | null
  quote: {
    quote_id: string
    job_id: string
    agent_id: string
    network: "ergo_testnet"
    reward: AgentJob["reward"]
    agreement_draft: {
      task: string
      required_capabilities: readonly string[]
      acceptance_predicate: AgentJob["acceptance_predicate"]
      deadline: string
      receipt_required: true
    }
    receipt_expectation: Record<string, unknown>
    settlement_handoff: {
      mode: "operator_approved_testnet_note"
      auto_settle: false
      mainnet_value: false
      operator_approval_required: true
    }
  } | null
  errors: string[]
  warnings: string[]
  next_steps: readonly string[]
}

export function validateAgentJobAcceptanceIntent(input: unknown): AgentJobAcceptanceValidation {
  const errors: string[] = []
  const warnings: string[] = []
  const intent = isRecord(input) ? input : null

  if (!intent) {
    return jobAcceptanceValidation(null, ["intent must be a JSON object"], warnings)
  }

  for (const field of agentJobAcceptanceGuide.required_fields) {
    if (!(field in intent)) {
      errors.push(`missing required field: ${field}`)
    }
  }

  const jobId = stringField(intent, "job_id")
  const agentId = stringField(intent, "agent_id")
  const job = jobId ? agentJobsBoard.jobs.find((item) => item.id === jobId) : null

  if (!jobId) errors.push("job_id must be a non-empty string")
  if (!agentId) errors.push("agent_id must be a non-empty string")
  if (jobId && !job) errors.push(`job_id is not open on the bootstrap board: ${jobId}`)
  if (job && job.status !== "open_bootstrap") errors.push(`job ${job.id} is not open_bootstrap`)

  const capabilities = intent.capabilities
  if (!Array.isArray(capabilities) || capabilities.length === 0 || !capabilities.every((item) => typeof item === "string" && item.length > 0)) {
    errors.push("capabilities must be a non-empty string array")
  } else if (job) {
    const missing = job.requires.filter((requirement) => !capabilities.includes(requirement))
    if (missing.length > 0) {
      errors.push(`capabilities missing required job requirements: ${missing.join(", ")}`)
    }
  }

  const proposedOutput = recordField(intent, "proposed_output")
  if (!proposedOutput) {
    errors.push("proposed_output must be an object")
  } else {
    if (!stringField(proposedOutput, "format")) errors.push("proposed_output.format must be a non-empty string")
    const includes = proposedOutput.includes
    if (!Array.isArray(includes) || includes.length === 0 || !includes.every((item) => typeof item === "string" && item.length > 0)) {
      errors.push("proposed_output.includes must be a non-empty string array")
    } else if (job) {
      const missingIncludes = job.acceptance_predicate.must_include.filter((item) => !includes.includes(item))
      if (missingIncludes.length > 0) {
        errors.push(`proposed_output.includes missing required acceptance terms: ${missingIncludes.join(", ")}`)
      }
    }
  }

  const receiptExpectation = recordField(intent, "receipt_expectation")
  if (!receiptExpectation) {
    errors.push("receipt_expectation must be an object")
  } else {
    if (receiptExpectation.requires_receipt !== true) errors.push("receipt_expectation.requires_receipt must be true")
    if (receiptExpectation.task_hash_algorithm !== "blake2b256") {
      errors.push("receipt_expectation.task_hash_algorithm must be blake2b256")
    }
    if (receiptExpectation.verification_receipt_required !== true) {
      errors.push("receipt_expectation.verification_receipt_required must be true")
    }
    if (receiptExpectation.settlement_receipt_required !== true) {
      errors.push("receipt_expectation.settlement_receipt_required must be true")
    }
  }

  const evidence = recordField(intent, "evidence")
  if (!evidence || Object.keys(evidence).length === 0) {
    errors.push("evidence must include at least one URL")
  } else {
    for (const [key, value] of Object.entries(evidence)) {
      if (!isUrlString(value)) errors.push(`evidence.${key} must be an absolute URL`)
    }
  }

  const posture = recordField(intent, "posture")
  if (!posture) {
    errors.push("posture must be an object")
  } else {
    if (posture.network !== "ergo_testnet") errors.push("posture.network must be ergo_testnet")
    if (posture.mainnet_ready !== false) errors.push("posture.mainnet_ready must be false")
    if (posture.production_custody !== false) errors.push("posture.production_custody must be false")
    if (posture.operator_approval_required !== true) {
      errors.push("posture.operator_approval_required must be true")
    }
  }

  const searchableText = JSON.stringify(intent).toLowerCase()
  const jobForbiddenClaims = job?.acceptance_predicate.must_not_claim ?? []
  for (const claim of [...forbiddenServiceClaims, ...jobForbiddenClaims]) {
    if (searchableText.includes(claim.toLowerCase())) {
      errors.push(`forbidden claim detected: ${claim}`)
    }
  }

  if (job && new Date(job.deadline).getTime() < Date.now()) {
    warnings.push(`job deadline has passed: ${job.deadline}`)
  }
  const agentManifest = stringField(intent, "agent_manifest")
  if (!agentManifest) {
    warnings.push("include agent_manifest or service manifest URL so operators can inspect the provider boundary")
  } else if (!isUrlString(agentManifest)) {
    errors.push("agent_manifest must be an absolute URL when provided")
  }

  return jobAcceptanceValidation(job?.id ?? jobId ?? null, errors, warnings)
}

function jobAcceptanceValidation(
  acceptedJobId: string | null,
  errors: string[],
  warnings: string[],
): AgentJobAcceptanceValidation {
  const accepted = errors.length === 0
  return {
    ok: accepted,
    type: "ergo.agent_job_acceptance_validation.v0",
    status: accepted ? "accepted_for_operator_review" : "blocked",
    accepted_for_operator_review: accepted,
    accepted_job_id: accepted ? acceptedJobId : null,
    errors,
    warnings,
    next_steps: agentJobAcceptanceGuide.review_steps,
  }
}

export function validateAgentJobQuoteRequest(input: unknown): AgentJobQuoteValidation {
  const errors: string[] = []
  const warnings: string[] = []
  const request = isRecord(input) ? input : null

  if (!request) {
    return jobQuoteValidation(null, null, errors.concat("quote request must be a JSON object"), warnings)
  }

  for (const field of agentJobQuoteGuide.required_fields) {
    if (!(field in request)) {
      errors.push(`missing required field: ${field}`)
    }
  }

  const jobId = stringField(request, "job_id")
  const agentId = stringField(request, "agent_id")
  const job = jobId ? agentJobsBoard.jobs.find((item) => item.id === jobId) : null

  if (!jobId) errors.push("job_id must be a non-empty string")
  if (!agentId) errors.push("agent_id must be a non-empty string")
  if (jobId && !job) errors.push(`job_id is not open on the bootstrap board: ${jobId}`)
  if (job && job.status !== "open_bootstrap") errors.push(`job ${job.id} is not open_bootstrap`)

  const quoteTerms = recordField(request, "quote_terms")
  if (!quoteTerms) {
    errors.push("quote_terms must be an object")
  } else {
    if (quoteTerms.payment_rail !== "ergo_testnet_note") errors.push("quote_terms.payment_rail must be ergo_testnet_note")
    if (!stringField(quoteTerms, "requested_reward")) errors.push("quote_terms.requested_reward must be a non-empty string")
    if (job && stringField(quoteTerms, "requested_reward") !== job.reward.amount) {
      warnings.push(`requested_reward differs from board reward: ${job.reward.amount}`)
    }
    if (quoteTerms.unit !== "job") errors.push("quote_terms.unit must be job")
    const expiresInBlocks = quoteTerms.expires_in_blocks
    if (typeof expiresInBlocks !== "number" || !Number.isFinite(expiresInBlocks) || expiresInBlocks <= 0) {
      errors.push("quote_terms.expires_in_blocks must be a positive number")
    }
  }

  const receiptExpectation = recordField(request, "receipt_expectation")
  validateReceiptExpectation(receiptExpectation, errors)

  const settlement = recordField(request, "settlement")
  if (!settlement) {
    errors.push("settlement must be an object")
  } else {
    if (settlement.mode !== "operator_approved_testnet_note") {
      errors.push("settlement.mode must be operator_approved_testnet_note")
    }
    if (settlement.auto_settle !== false) errors.push("settlement.auto_settle must be false")
    if (settlement.mainnet_value !== false) errors.push("settlement.mainnet_value must be false")
    if (settlement.operator_approval_required !== true) {
      errors.push("settlement.operator_approval_required must be true")
    }
  }

  const evidence = recordField(request, "evidence")
  if (!evidence || Object.keys(evidence).length === 0) {
    errors.push("evidence must include at least one URL")
  } else {
    for (const [key, value] of Object.entries(evidence)) {
      if (!isUrlString(value)) errors.push(`evidence.${key} must be an absolute URL`)
    }
  }

  const posture = recordField(request, "posture")
  if (!posture) {
    errors.push("posture must be an object")
  } else {
    if (posture.network !== "ergo_testnet") errors.push("posture.network must be ergo_testnet")
    if (posture.mainnet_ready !== false) errors.push("posture.mainnet_ready must be false")
    if (posture.production_custody !== false) errors.push("posture.production_custody must be false")
  }

  const acceptanceIntent = stringField(request, "acceptance_intent")
  if (!acceptanceIntent) {
    warnings.push("include acceptance_intent URL or id so operators can link this quote to a validated job acceptance")
  } else if (!isUrlString(acceptanceIntent)) {
    errors.push("acceptance_intent must be an absolute URL when provided")
  }

  const searchableText = JSON.stringify(request).toLowerCase()
  const jobForbiddenClaims = job?.acceptance_predicate.must_not_claim ?? []
  for (const claim of [...forbiddenServiceClaims, ...jobForbiddenClaims]) {
    if (searchableText.includes(claim.toLowerCase())) {
      errors.push(`forbidden claim detected: ${claim}`)
    }
  }

  return jobQuoteValidation(job ?? null, agentId ?? null, errors, warnings)
}

function validateReceiptExpectation(value: Record<string, unknown> | null, errors: string[]) {
  if (!value) {
    errors.push("receipt_expectation must be an object")
    return
  }

  if (value.requires_receipt !== true) errors.push("receipt_expectation.requires_receipt must be true")
  if (value.task_hash_algorithm !== "blake2b256") {
    errors.push("receipt_expectation.task_hash_algorithm must be blake2b256")
  }
  if (value.verification_receipt_required !== true) {
    errors.push("receipt_expectation.verification_receipt_required must be true")
  }
  if (value.settlement_receipt_required !== true) {
    errors.push("receipt_expectation.settlement_receipt_required must be true")
  }
}

function jobQuoteValidation(
  job: AgentJob | null,
  agentId: string | null,
  errors: string[],
  warnings: string[],
): AgentJobQuoteValidation {
  const quote = errors.length === 0 && job && agentId
    ? {
        quote_id: `quote:${job.id}:${agentId}`,
        job_id: job.id,
        agent_id: agentId,
        network: "ergo_testnet" as const,
        reward: job.reward,
        agreement_draft: {
          task: job.task,
          required_capabilities: job.requires,
          acceptance_predicate: job.acceptance_predicate,
          deadline: job.deadline,
          receipt_required: true as const,
        },
        receipt_expectation: exampleAgentJobQuoteRequest.receipt_expectation,
        settlement_handoff: exampleAgentJobQuoteRequest.settlement,
      }
    : null

  return {
    ok: Boolean(quote),
    type: "ergo.agent_job_quote_validation.v0",
    status: quote ? "quote_scaffold_ready" : "blocked",
    quote_scaffold_ready: Boolean(quote),
    accepted_job_id: quote?.job_id ?? null,
    quote,
    errors,
    warnings,
    next_steps: agentJobQuoteGuide.review_steps,
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function recordField(record: Record<string, unknown>, field: string): Record<string, unknown> | null {
  const value = record[field]
  return isRecord(value) ? value : null
}

function stringField(record: Record<string, unknown>, field: string): string | null {
  const value = record[field]
  return typeof value === "string" && value.trim().length > 0 ? value : null
}

function isUrlString(value: unknown): value is string {
  if (typeof value !== "string") return false
  try {
    const url = new URL(value)
    return url.protocol === "https:" || url.protocol === "http:"
  } catch {
    return false
  }
}
