import { agentEconomyMainnetGate } from "./mainnet-gate"

export type AgentEconomyRoadmapPhase = "live" | "build_next" | "trust_gated" | "later"

export const agentEconomyRoadmap = {
  type: "ergo.agent_economy.roadmap.v0",
  version: "v0",
  status: "testnet_live_proof_roadmap",
  last_updated: "2026-05-26",
  public_claim:
    "Strategic roadmap for Ergo's public clearing and proof surface for autonomous work. It is not an audit report and does not open mainnet readiness.",
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    production_custody: false,
    gate: "external_review_and_audit_bound_mainnet_script_identity_required",
  },
  north_star:
    "Make ergoblockchain.org the public PoW/eUTXO proof terminal where autonomous work can be quoted, paid, policy-checked, verified, receipted, and settlement-gated from one source of truth.",
  product_principles: [
    "One source of truth for proof data; pages render or link to it instead of duplicating it.",
    "Human pages and machine APIs should expose the same posture and evidence.",
    "Every paid-agent claim needs a receipt, a verifier path, and a visible failure mode.",
    "Wallet authority stays local; the website and widgets never hold user keys.",
    "Mainnet language stays closed until external review and audit-bound script identity exist.",
    "Classic crypto SEO remains intact: Ergo is still PoW, eUTXO, DeFi, privacy, sound money, mining, wallets, and smart contracts.",
  ],
  phases: [
    {
      id: "category-positioning",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Autonomous Work Clearing Positioning",
      summary:
        "The homepage and SEO now frame Ergo as the place where autonomous work gets paid, proven, and settled, while preserving core crypto language around PoW/eUTXO, DeFi, privacy, sound money, mining, wallets, and ErgoScript.",
      proof_links: [
        "https://www.ergoblockchain.org/",
        "https://www.ergoblockchain.org/agent-economy/clearing",
        "https://www.ergoblockchain.org/agent-economy/interop",
      ],
    },
    {
      id: "live-proof-surface",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Live Proof Surface",
      summary:
        "The site exposes a testnet Sage payment flow, full receipt bundle, signed L1 conformance evidence, public MCP endpoint, Proof Explorer, Live Hub, and developer services.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/live",
        "https://www.ergoblockchain.org/agent-economy/proofs",
        "https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
        "https://mcp.ergoblockchain.org/health",
      ],
    },
    {
      id: "developer-onboarding",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Developer Launch Path",
      summary:
        "A builder can start from one full receipt, inspect discovery/OpenAPI, try stateless developer tools, run policy checks, and embed the Sage widget in testnet mode.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/first-receipt",
        "https://www.ergoblockchain.org/api/agent-economy/first-receipt",
        "https://agents.ergoblockchain.org/start",
        "https://www.ergoblockchain.org/.well-known/agent-economy.json",
        "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
        "https://www.ergoblockchain.org/build/services",
      ],
    },
    {
      id: "receipt-first-funnel",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Receipt-First Conversion Funnel",
      summary:
        "The strongest public demo is the full receipt bundle: Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and on-chain settlement evidence from a single receipt API.",
      proof_links: [
        "https://www.ergoblockchain.org/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
        "https://www.ergoblockchain.org/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81",
        "https://www.ergoblockchain.org/agent-economy/proofs",
      ],
    },
    {
      id: "paid-widget-v04",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Embeddable Paid Sage Widget",
      summary:
        "Move the published widget from a strong v0.3 payment surface toward a polished host demo: quote, wallet launch, verification, chat, receipt callback, tenant config, and failure-state UX.",
      proof_links: [
        "https://www.npmjs.com/package/@ergoblockchain/sage-widget",
        "https://www.ergoblockchain.org/agent-economy/sage-widget",
      ],
    },
    {
      id: "buildonergo-builder-kit",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "BuildOnErgo Agent Economy Kit",
      summary:
        "Publish a small public developer kit under buildonergo with a receipt verifier, schemas, golden-path docs, and examples that can be used without cloning the full site.",
      proof_links: [
        "https://github.com/buildonergo/agent-economy-kit",
        "https://www.ergoblockchain.org/agent-economy/launch-kit",
        "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
      ],
    },
    {
      id: "interop-comparison-pages",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Interop And Comparison Pages",
      summary:
        "Keep building canonical SEO and AI-search pages that compare payment handshakes, agent authorization, merchant checkout, marketplaces, and Ergo's clearing/proof layer.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/interop",
        "https://www.ergoblockchain.org/agent-economy/clearing",
        "https://www.ergoblockchain.org/blog/state-of-agent-payments-2026",
      ],
    },
    {
      id: "wallet-agent-reference",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Wallet-Agent Reference Layer",
      summary:
        "Turn policy-check, playground, and runner into a tighter reference path for local wallet agents: intent intake, policy verdict, simulation, host-owned signing, broadcast, and receipt retention.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/wallet-agent",
        "https://www.ergoblockchain.org/build/agent-payments/policy-playground",
        "https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner",
      ],
    },
    {
      id: "external-review",
      phase: "trust_gated" as AgentEconomyRoadmapPhase,
      title: "External Review Gate",
      summary:
        "Publish an independent review or audit artifact that pins scope, findings, residual risks, and what remains excluded before any mainnet wording changes.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/review-pack",
        "https://www.ergoblockchain.org/agent-economy/external-audit-review.manifest.template.json",
      ],
    },
    {
      id: "mainnet-script-identity",
      phase: "trust_gated" as AgentEconomyRoadmapPhase,
      title: "Audit-Bound Mainnet Script Identity",
      summary:
        "Publish exact source-to-ErgoTree mapping, package versions, script hashes, addresses, limits, and reviewer binding before any controlled mainnet launch.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.manifest.template.json",
        "https://www.ergoblockchain.org/api/agent-economy/mainnet-gate",
      ],
    },
    {
      id: "agent-marketplace",
      phase: "later" as AgentEconomyRoadmapPhase,
      title: "Agent Marketplace And Provider Registry",
      summary:
        "Expose provider profiles, payment capabilities, conformance state, uptime, receipt examples, and safety metadata so agents can choose services by evidence instead of copy.",
      proof_links: [
        "https://www.ergoblockchain.org/.well-known/accord",
        "https://github.com/accord-protocol/accord-protocol",
      ],
    },
  ],
  primary_paths: {
    human_start: "https://www.ergoblockchain.org/agent-economy/start",
    live_hub: "https://www.ergoblockchain.org/agent-economy/live",
    proof_explorer: "https://www.ergoblockchain.org/agent-economy/proofs",
    autonomous_work_clearing: "https://www.ergoblockchain.org/agent-economy/clearing",
    payment_interop: "https://www.ergoblockchain.org/agent-economy/interop",
    first_receipt_flow: "https://www.ergoblockchain.org/agent-economy/first-receipt",
    first_receipt_api: "https://www.ergoblockchain.org/api/agent-economy/first-receipt",
    developer_launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
    machine_discovery: "https://www.ergoblockchain.org/.well-known/agent-economy.json",
    openapi: "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
  },
  next_actions: [
    {
      id: "widget-host-demo",
      owner: "repo",
      label: "Polish a hosted Sage widget demo for third-party embedding",
      blocked_by_external: false,
    },
    {
      id: "buildonergo-agent-economy-kit",
      owner: "repo",
      label: "Publish the BuildOnErgo Agent Economy Kit with receipt verifier, schemas, and golden-path examples",
      blocked_by_external: false,
    },
    {
      id: "wallet-agent-reference-flow",
      owner: "repo",
      label: "Tighten wallet-agent runner around policy, simulation, signing boundary, and receipts",
      blocked_by_external: false,
    },
    {
      id: "external-review-artifact",
      owner: "audit",
      label: "Publish external review findings and residual risk manifest",
      blocked_by_external: true,
    },
    {
      id: "mainnet-script-identity",
      owner: "audit",
      label: "Bind mainnet script identity to reviewed source and exact deployment artifacts",
      blocked_by_external: true,
    },
  ],
  mainnet_gate: {
    status: agentEconomyMainnetGate.status,
    mainnet_ready: false,
    pending_blockers: agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open"),
    artifacts: agentEconomyMainnetGate.artifacts,
  },
} as const
