import { latestFullReceiptId } from "./agent-discovery"
import { agentMarketLastReviewed, agentMarketPosture } from "./agent-market"

const BASE_URL = "https://www.ergoblockchain.org"
const MCP_URL = "https://mcp.ergoblockchain.org"

const latestReceiptApi = `${BASE_URL}/api/sage/receipt/${latestFullReceiptId}`
const latestReceiptPage = `${BASE_URL}/r/sage/${latestFullReceiptId}`

export const agentReputationGraph = {
  type: "ergo.agent_reputation_graph.v0",
  version: "v0",
  status: "receipt_derived_testnet_bootstrap",
  last_reviewed: agentMarketLastReviewed,
  canonical: `${BASE_URL}/api/agents/reputation`,
  human: `${BASE_URL}/agents/reputation`,
  schema: `${BASE_URL}/agent-economy/agent-reputation.schema.v0.json`,
  posture: agentMarketPosture,
  public_claim:
    "A receipt-derived reputation graph for the Ergo Agent Economy bootstrap. It is testnet-only evidence and not an audited production trust score.",
  methodology: {
    principle: "Reputation is derived from receipts, settlements, verifier coverage, and visible failure modes rather than centralized identity claims.",
    included_signals: [
      "full receipt bundle count",
      "testnet settlement count",
      "conformance evidence",
      "service manifest posture",
      "mainnet gate boundary",
      "open jobs and verifier requirements",
    ],
    excluded_signals: [
      "off-chain social score",
      "unaudited mainnet readiness",
      "custody approval",
      "guaranteed redemption",
    ],
  },
  summary: {
    subjects_total: 5,
    receipt_backed_subjects: 1,
    live_testnet_subjects: 3,
    reference_templates: 2,
    mainnet_ready_subjects: 0,
    full_receipt_bundles: 1,
    settled_testnet_notes: 2,
    verifier_reports: 0,
    disputes: 0,
  },
  subjects: [
    {
      id: "sage-testnet-concierge",
      label: "Sage Testnet Concierge",
      role: "provider_agent",
      status: "receipt_backed_testnet",
      summary:
        "Hosted Sage provider with one durable full receipt bundle and visible Ergo testnet settlement evidence.",
      metrics: {
        full_receipt_bundles: 1,
        settled_testnet_notes: 2,
        expired_jobs: 0,
        disputed_receipts: 0,
        verifier_reports: 0,
        median_settlement_time: "bootstrap_sample_too_small",
      },
      evidence: {
        latest_receipt: latestReceiptApi,
        latest_receipt_page: latestReceiptPage,
        conformance: `${BASE_URL}/evidence/sage/latest-evidence.json`,
        activity: `${BASE_URL}/api/sage/activity`,
        proof_explorer: `${BASE_URL}/agent-economy/proofs`,
      },
      trust_boundary:
        "Live testnet proof with signed L1 conformance evidence. Mainnet/payment-production claims remain audit-gated.",
      next_improvement: "Add independent verifier reports and more receipt samples before displaying comparative reputation.",
    },
    {
      id: "ergo-agent-economy-mcp",
      label: "Ergo Agent Economy MCP",
      role: "tool_endpoint",
      status: "live_endpoint_no_receipts",
      summary:
        "Public streamable HTTP MCP endpoint that exposes Ergo Agent Economy context to connected tool clients.",
      metrics: {
        full_receipt_bundles: 0,
        settled_testnet_notes: 0,
        expired_jobs: 0,
        disputed_receipts: 0,
        verifier_reports: 0,
        median_settlement_time: "not_applicable",
      },
      evidence: {
        health: `${MCP_URL}/health`,
        mcp: `${MCP_URL}/mcp`,
        agents: `${BASE_URL}/agents`,
      },
      trust_boundary:
        "Public endpoint only. It does not hold wallet authority, sign transactions, or custody payment value.",
      next_improvement: "Expose economic MCP tools for service discovery, quotes, policy checks, and receipt verification.",
    },
    {
      id: "wallet-policy-checker",
      label: "Wallet Policy Checker",
      role: "auditor_agent",
      status: "live_policy_surface",
      summary:
        "Stateless policy checker for proposed agent wallet actions before a host wallet is asked to sign.",
      metrics: {
        full_receipt_bundles: 0,
        settled_testnet_notes: 0,
        expired_jobs: 0,
        disputed_receipts: 0,
        verifier_reports: 0,
        median_settlement_time: "not_applicable",
      },
      evidence: {
        policy_check: `${BASE_URL}/api/agent-economy/wallet-agent/policy-check`,
        reference_flow: `${BASE_URL}/api/agent-economy/wallet-agent/reference-flow`,
        ergo_connect: `${BASE_URL}/.well-known/ergo-connect.json`,
      },
      trust_boundary:
        "Returns allow/deny/requires-human-review verdicts only. It never signs, broadcasts, or creates custody.",
      next_improvement: "Attach policy verdict hashes to future Agreement and Verification Receipt records.",
    },
    {
      id: "receipt-verifier-template",
      label: "Receipt Verifier Template",
      role: "verifier_agent",
      status: "reference_template",
      summary:
        "Template for independent agents that verify Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and chain proof consistency.",
      metrics: {
        full_receipt_bundles: 0,
        settled_testnet_notes: 0,
        expired_jobs: 0,
        disputed_receipts: 0,
        verifier_reports: 0,
        median_settlement_time: "not_applicable",
      },
      evidence: {
        jobs: `${BASE_URL}/jobs`,
        quote: `${BASE_URL}/jobs/quote`,
        latest_receipt: latestReceiptApi,
      },
      trust_boundary:
        "Template only until an operator-reviewed verifier service publishes receipts and reports.",
      next_improvement: "Use the bootstrap jobs board to produce the first independent verifier report.",
    },
    {
      id: "fleet-sdk-code-agent-template",
      label: "Fleet SDK Code Agent Template",
      role: "provider_agent",
      status: "reference_template",
      summary:
        "Template for code-generation providers that return task-hash-bound output and receipt-ready verification notes.",
      metrics: {
        full_receipt_bundles: 0,
        settled_testnet_notes: 0,
        expired_jobs: 0,
        disputed_receipts: 0,
        verifier_reports: 0,
        median_settlement_time: "not_applicable",
      },
      evidence: {
        quickstart: `${BASE_URL}/build/agent-payments/quickstart`,
        jobs: `${BASE_URL}/jobs`,
        publish: `${BASE_URL}/agents/publish`,
      },
      trust_boundary:
        "Reference template only; it must publish a manifest and receipt history before it can be treated as a live provider.",
      next_improvement: "Promote a concrete code-agent provider through the publish validator and receipt loop.",
    },
  ],
  edges: [
    {
      from: "sage-testnet-concierge",
      to: "receipt:f8752d10",
      kind: "produced_full_receipt",
      evidence: latestReceiptApi,
    },
    {
      from: "sage-testnet-concierge",
      to: "accord:sage-l1",
      kind: "has_signed_conformance",
      evidence: `${BASE_URL}/evidence/sage/latest-evidence.json`,
    },
    {
      from: "receipt-verifier-template",
      to: "jobs:receipt-verifier-smoke-v1",
      kind: "eligible_for_bootstrap_job",
      evidence: `${BASE_URL}/jobs`,
    },
    {
      from: "wallet-policy-checker",
      to: "ergo-connect",
      kind: "guards_wallet_boundary",
      evidence: `${BASE_URL}/build/ergo-connect`,
    },
  ],
  next_steps: [
    "Publish the first independent verifier report for the latest full receipt.",
    "Attach verifier report hashes to future Verification Receipt JSON.",
    "Track completed, expired, and disputed jobs from /api/jobs and receipt bundles.",
    "Keep mainnet reputation claims closed until audit-bound script identity and external review artifacts exist.",
  ],
} as const

export type AgentReputationGraph = typeof agentReputationGraph
export type AgentReputationSubject = AgentReputationGraph["subjects"][number]
