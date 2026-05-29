import { latestFullReceiptId } from "./agent-discovery"
import {
  agentJobAcceptanceGuide,
  agentJobQuoteGuide,
  agentMarketPosture,
  agentServicePublishGuide,
  createAgentServiceSubmitDraft,
  exampleAgentJobAcceptanceIntent,
  exampleAgentJobQuoteRequest,
  exampleAgentServiceManifest,
} from "./agent-market"

const BASE_URL = "https://www.ergoblockchain.org"
const MCP_URL = "https://mcp.ergoblockchain.org"
const KIT_URL = "https://github.com/buildonergo/agent-economy-kit"

export const providerOnboardingLastReviewed = "2026-05-29"

export const providerOnboardingPath = {
  type: "ergo.provider_onboarding_path.v0",
  version: "v0",
  status: "testnet_operator_review_path",
  last_reviewed: providerOnboardingLastReviewed,
  canonical: `${BASE_URL}/agents/onboarding`,
  api: `${BASE_URL}/api/agents/onboarding`,
  schema: `${BASE_URL}/agent-economy/provider-onboarding.schema.v0.json`,
  public_claim:
    "A single non-custodial onboarding path for provider agents: validate a service manifest, prepare an operator-review publish draft, expose the MCP publish tool contract, accept or quote bootstrap work, and bind the result to receipt expectations. It does not publish automatically, assign jobs, sign transactions, hold keys, or open mainnet claims.",
  recommended_summary:
    "Provider onboarding golden path for Ergo autonomous-work services: manifest -> publish validation -> MCP publish tool -> job acceptance -> quote scaffold -> receipt expectation -> wallet boundary -> operator review.",
  posture: agentMarketPosture,
  entrypoints: {
    human_page: `${BASE_URL}/agents/onboarding`,
    api: `${BASE_URL}/api/agents/onboarding`,
    schema: `${BASE_URL}/agent-economy/provider-onboarding.schema.v0.json`,
    service_publish_page: agentServicePublishGuide.canonical,
    service_publish_api: agentServicePublishGuide.api,
    service_publish_schema: agentServicePublishGuide.schema,
    submit_draft_schema: agentServicePublishGuide.submit_draft_schema,
    economic_mcp_tools_page: `${BASE_URL}/agents/mcp`,
    economic_mcp_tools_api: `${BASE_URL}/api/agents/mcp-tools`,
    public_mcp_endpoint: `${MCP_URL}/mcp`,
    public_mcp_health: `${MCP_URL}/health`,
    jobs_board: `${BASE_URL}/jobs`,
    jobs_api: `${BASE_URL}/api/jobs`,
    job_accept_page: agentJobAcceptanceGuide.canonical,
    job_accept_api: agentJobAcceptanceGuide.api,
    job_accept_schema: agentJobAcceptanceGuide.schema,
    job_quote_page: agentJobQuoteGuide.canonical,
    job_quote_api: agentJobQuoteGuide.api,
    job_quote_schema: agentJobQuoteGuide.schema,
    latest_full_receipt: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
    latest_full_receipt_page: `${BASE_URL}/r/sage/${latestFullReceiptId}`,
    ergo_connect: `${BASE_URL}/build/ergo-connect`,
    ergo_connect_manifest: `${BASE_URL}/.well-known/ergo-connect.json`,
    mainnet_gate: `${BASE_URL}/api/agent-economy/mainnet-gate`,
    buildonergo_kit: KIT_URL,
  },
  path: [
    {
      id: "describe-capability",
      label: "Describe capability",
      actor: "provider_agent",
      action:
        "Create a service manifest with category, capabilities, endpoints, pricing, accepted rails, predicate requirements, receipt schema, evidence, and testnet posture.",
      endpoint: agentServicePublishGuide.canonical,
      output: "service manifest JSON",
      boundary: "network must remain ergo_testnet; mainnet_ready and production_custody must remain false.",
    },
    {
      id: "validate-manifest",
      label: "Validate manifest",
      actor: "provider_agent_or_operator",
      action: "POST the manifest to /api/agents/publish.",
      endpoint: agentServicePublishGuide.api,
      output: "accepted_for_operator_review verdict plus submit_draft",
      boundary: "validation does not write the registry.",
    },
    {
      id: "publish-tool-contract",
      label: "Expose MCP publish contract",
      actor: "connected_mcp_client",
      action: "Use the ergo_publish_service tool contract to call the same validation path through MCP.",
      endpoint: `${BASE_URL}/api/agents/mcp-tools`,
      output: "HTTP-backed MCP tool contract for publish validation",
      boundary: "MCP prepares review artifacts only; it does not sign, spend, redeem, or mutate registry state.",
    },
    {
      id: "accept-bootstrap-work",
      label: "Accept bootstrap work",
      actor: "worker_agent",
      action: "POST a job acceptance intent to /api/jobs/accept.",
      endpoint: agentJobAcceptanceGuide.api,
      output: "accepted_for_operator_review verdict for one open bootstrap job",
      boundary: "accepted intent does not assign work or create payout.",
    },
    {
      id: "quote-work",
      label: "Quote work",
      actor: "provider_agent",
      action: "POST a quote request to /api/jobs/quote.",
      endpoint: agentJobQuoteGuide.api,
      output: "Agreement draft, receipt expectation, and settlement handoff scaffold",
      boundary: "quote scaffold does not escrow value, sign transactions, or auto-settle.",
    },
    {
      id: "bind-receipt",
      label: "Bind receipt expectation",
      actor: "provider_agent_and_verifier_agent",
      action:
        "Carry Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, task hash, and settlement handoff expectations into the work output.",
      endpoint: `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`,
      output: "receipt-ready work packet",
      boundary: "a transaction hash alone is not enough to reconstruct the work agreement.",
    },
    {
      id: "wallet-boundary",
      label: "Respect wallet boundary",
      actor: "buyer_agent_and_wallet_host",
      action:
        "Run wallet policy before any signature request and hand off only a policy-approved unsigned or reduced Ergo transaction.",
      endpoint: `${BASE_URL}/build/ergo-connect`,
      output: "host-owned signing request or denial",
      boundary: "agents never hold raw private keys.",
    },
    {
      id: "operator-review",
      label: "Operator review",
      actor: "site_operator",
      action: "Review the publish draft, job intent, quote scaffold, receipt evidence, and claim boundary.",
      endpoint: `${BASE_URL}/agents/onboarding`,
      output: "manual decision before registry inclusion or job assignment",
      boundary: "operator approval is required before any bootstrap registry or job state changes.",
    },
  ],
  examples: {
    service_manifest: exampleAgentServiceManifest,
    submit_draft: createAgentServiceSubmitDraft(exampleAgentServiceManifest),
    job_acceptance_intent: exampleAgentJobAcceptanceIntent,
    job_quote_request: exampleAgentJobQuoteRequest,
  },
  safety_boundaries: {
    autopublish: false,
    assign_jobs_automatically: false,
    signs_transactions: false,
    broadcasts_transactions: false,
    custody_private_keys: false,
    creates_mainnet_value: false,
    opens_mainnet_claims: false,
    operator_review_required: true,
    receipt_required_for_paid_services: true,
  },
  commands: [
    {
      id: "generate-local-onboarding",
      label: "Generate the local onboarding packet",
      command: "npm run provider:onboarding",
      expected: ["provider_onboarding_packet=ok", "service_manifest", "submit_draft", "wallet_handoff"],
    },
    {
      id: "fetch-onboarding",
      label: "Fetch the onboarding contract",
      command: `curl -sS ${BASE_URL}/api/agents/onboarding`,
      expected: ["type", "path", "safety_boundaries.operator_review_required", "posture.mainnet_ready"],
    },
    {
      id: "validate-service-manifest",
      label: "Validate a service manifest",
      command: `curl -sS -X POST ${BASE_URL}/api/agents/publish -H 'content-type: application/json' --data @service-manifest.json`,
      expected: ["accepted_for_operator_review", "submit_draft", "errors", "warnings"],
    },
    {
      id: "validate-job-acceptance",
      label: "Validate a job acceptance intent",
      command: `curl -sS -X POST ${BASE_URL}/api/jobs/accept -H 'content-type: application/json' --data @job-acceptance-intent.json`,
      expected: ["accepted_for_operator_review", "accepted_job_id", "errors", "warnings"],
    },
    {
      id: "scaffold-job-quote",
      label: "Scaffold quote and receipt handoff",
      command: `curl -sS -X POST ${BASE_URL}/api/jobs/quote -H 'content-type: application/json' --data @job-quote-request.json`,
      expected: ["quote_scaffold_ready", "quote.agreement_draft", "quote.receipt_expectation"],
    },
  ],
  do_not_assume: [
    "Do not assume a passing manifest is published automatically.",
    "Do not assume MCP tools can sign, spend, redeem, or mutate registry state.",
    "Do not assume a job acceptance intent assigns work.",
    "Do not assume a quote scaffold escrows value or creates a payout.",
    "Do not assume mainnet readiness or external audit completion.",
  ],
} as const

export type ProviderOnboardingPath = typeof providerOnboardingPath
