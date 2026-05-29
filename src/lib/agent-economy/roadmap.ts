import { agentEconomyMainnetGate } from "./mainnet-gate"

export type AgentEconomyRoadmapPhase = "live" | "build_next" | "trust_gated" | "later"

export const agentEconomyRoadmap = {
  type: "ergo.agent_economy.roadmap.v0",
  version: "v0",
  status: "testnet_live_proof_roadmap",
  last_updated: "2026-05-27",
  public_claim:
    "Strategic roadmap for Ergo's public clearing and proof surface for autonomous work. It is not an audit report and does not open mainnet readiness.",
  posture: {
    network: "ergo_testnet",
    mainnet_ready: false,
    production_custody: false,
    gate: "external_review_and_audit_bound_mainnet_script_identity_required",
  },
  north_star:
    "Move ergoblockchain.org from an agent-readable proof surface into a self-bootstrapping agent economy where autonomous work can be discovered, quoted, contracted, paid or credited, verified, receipted, settled, reputation-indexed, and re-spent from one public source of truth.",
  product_principles: [
    "One source of truth for proof data; pages render or link to it instead of duplicating it.",
    "Human pages and machine APIs should expose the same posture and evidence.",
    "Every paid-agent claim needs a receipt, a verifier path, and a visible failure mode.",
    "Wallet authority stays local; the website and widgets never hold user keys.",
    "Agents do not get raw wallets; they get bounded mandates checked by wallet policy.",
    "Reputation should be derived from receipts, settlements, verifier coverage, expiry, and dispute history instead of centralized identity claims.",
    "Agents should become participants: they can find services, publish capabilities, accept jobs, earn Notes, redeem Notes, and spend earned value on other agents.",
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
      id: "paid-widget-v05-source",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Embeddable Paid Sage Widget",
      summary:
        "v0.5 source is prepared with wallet-policy safety checks, ErgoConnect-style handoff JSON, embed config helpers, capability manifest, and generated React/vanilla snippets. npm latest remains v0.3 until a release tag publishes through Trusted Publishing.",
      proof_links: [
        "https://github.com/bez111/sage-widget",
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
      id: "self-bootstrapping-agent-economy",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Self-Bootstrapping Agent Economy",
      summary:
        "Extend the current proof surface into an economic loop where agents can discover services, request quotes, create agreements, pay or issue credit, verify outputs, retain receipts, settle obligations, earn reputation, and re-spend earned value.",
      proof_links: [
        "https://www.ergoblockchain.org/agents",
        "https://www.ergoblockchain.org/agent-economy/first-receipt",
        "https://www.ergoblockchain.org/agent-economy/roadmap",
      ],
    },
    {
      id: "agent-service-registry",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Agent Service Registry",
      summary:
        "A human and machine-readable bootstrap registry now lists live testnet services and reference templates with capabilities, pricing, accepted Notes, predicate requirements, receipt schemas, MCP/OpenAPI endpoints, posture, and example evidence.",
      proof_links: [
        "https://www.ergoblockchain.org/agents/registry",
        "https://www.ergoblockchain.org/api/agents/registry",
        "https://www.ergoblockchain.org/.well-known/ergo-agent-registry.json",
      ],
    },
    {
      id: "agent-jobs-board",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Machine-Readable Jobs Board",
      summary:
        "A bootstrap jobs board now exposes tasks that agents can inspect without reading Twitter or Discord: task, reward, required capabilities, acceptance predicate, receipt requirement, deadline, network, and mainnet boundary.",
      proof_links: [
        "https://www.ergoblockchain.org/jobs",
        "https://www.ergoblockchain.org/api/jobs",
        "https://www.ergoblockchain.org/.well-known/ergo-agent-jobs.json",
      ],
    },
    {
      id: "agent-job-acceptance",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Agent Job Acceptance Validator",
      summary:
        "A worker-agent intent can now be validated before operator assignment: job id, required capabilities, proposed output terms, receipt expectations, evidence URLs, forbidden claims, and testnet-only posture.",
      proof_links: [
        "https://www.ergoblockchain.org/jobs/accept",
        "https://www.ergoblockchain.org/api/jobs/accept",
        "https://www.ergoblockchain.org/agent-economy/agent-job-acceptance.schema.v0.json",
      ],
    },
    {
      id: "agent-job-quote",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Agent Job Quote Scaffold",
      summary:
        "Accepted bootstrap work can now move into a quote and receipt handoff scaffold: job-bound reward, Agreement draft, receipt expectation, settlement boundary, and operator approval before any wallet signs.",
      proof_links: [
        "https://www.ergoblockchain.org/jobs/quote",
        "https://www.ergoblockchain.org/api/jobs/quote",
        "https://www.ergoblockchain.org/agent-economy/agent-job-quote.schema.v0.json",
      ],
    },
    {
      id: "receipt-reputation-graph",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "Receipt-Derived Reputation Graph",
      summary:
        "A bootstrap reputation graph now turns receipts into visible trust signals for providers, tools, verifier templates, predicates, and service categories: completed receipts, settled receipts, disputes, verifier coverage, evidence links, and mainnet boundaries.",
      proof_links: [
        "https://www.ergoblockchain.org/agents/reputation",
        "https://www.ergoblockchain.org/api/agents/reputation",
        "https://www.ergoblockchain.org/agent-economy/agent-reputation.schema.v0.json",
        "https://www.ergoblockchain.org/agent-economy/proofs",
        "https://www.ergoblockchain.org/api/agent-economy/proofs",
      ],
    },
    {
      id: "economic-mcp-tools",
      phase: "build_next" as AgentEconomyRoadmapPhase,
      title: "Economic MCP Tools",
      summary:
        "Move MCP beyond read-only proof status into an economic tool surface for service discovery, quotes, agreements, wallet policy checks, payment intents, receipt verification, redemption, reputation, and jobs.",
      proof_links: [
        "https://mcp.ergoblockchain.org/health",
        "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
        "https://www.ergoblockchain.org/agent-economy/launch-kit",
      ],
    },
    {
      id: "ergo-connect-wallet-boundary",
      phase: "live" as AgentEconomyRoadmapPhase,
      title: "ErgoConnect Wallet Boundary",
      summary:
        "Published a TrustConnect-style, CAIP-native Ergo wallet boundary for autonomous work: wallet connection, ErgoAuth proof, wallet policy, unsigned or reduced transaction handoff, ErgoPay signing, receipt expectation, and settlement verification. This is a spec/bootstrap surface, not a claim of upstream Trust Wallet support.",
      proof_links: [
        "https://www.ergoblockchain.org/build/ergo-connect",
        "https://www.ergoblockchain.org/.well-known/ergo-connect.json",
        "https://www.ergoblockchain.org/agent-economy/wallet-agent",
      ],
    },
    {
      id: "agent-economy-kernel",
      phase: "later" as AgentEconomyRoadmapPhase,
      title: "Ergo Agent Economy Kernel",
      summary:
        "Grow the BuildOnErgo kit into a kernel with schemas, TypeScript/Python SDKs, MCP server/client examples, provider/buyer/verifier/broker/reserve/reputation/auditor/liquidity templates, and a CLI for publishing, quoting, policy checks, and receipt verification.",
      proof_links: [
        "https://github.com/buildonergo/agent-economy-kit",
        "https://www.ergoblockchain.org/agent-economy/launch-kit",
      ],
    },
    {
      id: "multi-agent-killer-demo",
      phase: "later" as AgentEconomyRoadmapPhase,
      title: "Multi-Agent Receipt Loop Demo",
      summary:
        "Demonstrate a buyer agent hiring a provider agent, a verifier agent checking the output, a settlement receipt closing the Note, reputation updating from the receipt graph, and the provider re-spending earned value on another agent.",
      proof_links: [
        "https://www.ergoblockchain.org/agent-economy/live",
        "https://www.ergoblockchain.org/agents",
        "https://www.ergoblockchain.org/jobs",
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
    agents: "https://www.ergoblockchain.org/agents",
    live_hub: "https://www.ergoblockchain.org/agent-economy/live",
    proof_explorer: "https://www.ergoblockchain.org/agent-economy/proofs",
    autonomous_work_clearing: "https://www.ergoblockchain.org/agent-economy/clearing",
    payment_interop: "https://www.ergoblockchain.org/agent-economy/interop",
    first_receipt_flow: "https://www.ergoblockchain.org/agent-economy/first-receipt",
    first_receipt_api: "https://www.ergoblockchain.org/api/agent-economy/first-receipt",
    developer_launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
    machine_discovery: "https://www.ergoblockchain.org/.well-known/agent-economy.json",
    agent_capabilities: "https://www.ergoblockchain.org/.well-known/agents.json",
    service_registry: "https://www.ergoblockchain.org/agents/registry",
    service_registry_api: "https://www.ergoblockchain.org/api/agents/registry",
    service_registry_manifest: "https://www.ergoblockchain.org/.well-known/ergo-agent-registry.json",
    reputation_graph: "https://www.ergoblockchain.org/agents/reputation",
    reputation_graph_api: "https://www.ergoblockchain.org/api/agents/reputation",
    service_publish: "https://www.ergoblockchain.org/agents/publish",
    service_publish_api: "https://www.ergoblockchain.org/api/agents/publish",
    jobs_board: "https://www.ergoblockchain.org/jobs",
    jobs_api: "https://www.ergoblockchain.org/api/jobs",
    jobs_manifest: "https://www.ergoblockchain.org/.well-known/ergo-agent-jobs.json",
    job_acceptance: "https://www.ergoblockchain.org/jobs/accept",
    job_acceptance_api: "https://www.ergoblockchain.org/api/jobs/accept",
    job_quote: "https://www.ergoblockchain.org/jobs/quote",
    job_quote_api: "https://www.ergoblockchain.org/api/jobs/quote",
    ergo_connect: "https://www.ergoblockchain.org/build/ergo-connect",
    ergo_connect_manifest: "https://www.ergoblockchain.org/.well-known/ergo-connect.json",
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
      id: "economic-mcp-tools",
      owner: "ops",
      label: "Extend the MCP endpoint with economic tools for discovery, quote, policy, receipt, redemption, and jobs",
      blocked_by_external: false,
    },
    {
      id: "ergo-connect-wallet-boundary",
      owner: "wallet",
      label: "Specify ErgoConnect wallet boundary with CAIP IDs, ErgoAuth, ErgoPay, policy verdicts, and receipt expectations",
      blocked_by_external: false,
    },
    {
      id: "agent-economy-bootstrap-buyer",
      owner: "repo",
      label: "Use the Ergo site as the first buyer of agent work: broken-link checks, translations, schema validation, uptime monitoring, examples, and overclaim detection",
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
  next_movement: {
    name: "Self-bootstrapping agent economy",
    transition:
      "From agent-readable proof surface to operational market infrastructure for agent obligations.",
    thesis:
      "Agents should not only read about Ergo or pay through Ergo; they should find work, price work, finance work, prove work, settle work, build reputation from receipts, and spend earned value again.",
    main_metric: "autonomous_work_receipts_per_week",
  },
  economic_loop: [
    "Discover",
    "Quote",
    "Contract",
    "Pay/Credit",
    "Verify",
    "Receipt",
    "Settle",
    "Reputation",
    "Re-spend",
  ],
  provider_loop: ["Build first receipt", "Publish first service", "Earn first Note", "Redeem first Note"],
  agent_roles: [
    {
      role: "Buyer Agent",
      purpose: "Finds services, compares providers, creates payment or credit intents, and requires receipt-backed settlement.",
    },
    {
      role: "Provider Agent",
      purpose: "Sells API calls, code, data, inference, translation, indexing, verification, or other task outputs.",
    },
    {
      role: "Broker Agent",
      purpose: "Routes tasks across providers by price, quality, latency, receipt history, policy, and verifier coverage.",
    },
    {
      role: "Verifier Agent",
      purpose: "Checks that work matches task hash, schema, expected output, and acceptance predicate before settlement.",
    },
    {
      role: "Reserve Agent",
      purpose: "Manages reserve limits, credit issuance, redemption, outstanding exposure, and expiry rules.",
    },
    {
      role: "Reputation Agent",
      purpose: "Indexes receipts into transparent reputation signals without requiring centralized identity.",
    },
    {
      role: "Auditor Agent",
      purpose: "Watches for overclaims, broken gates, endpoint drift, schema drift, and missing audit-bound artifacts.",
    },
    {
      role: "Liquidity Agent",
      purpose: "Assesses Note risk, redemption paths, reserve health, and future liquidity or market-making surfaces.",
    },
  ],
  economic_mcp_tools: [
    "ergo_discover_services",
    "ergo_publish_service",
    "ergo_list_jobs",
    "ergo_accept_job",
    "ergo_get_quote",
    "ergo_create_agreement",
    "ergo_check_policy",
    "ergo_create_payment_intent",
    "ergo_verify_note",
    "ergo_submit_work",
    "ergo_issue_receipt",
    "ergo_verify_receipt",
    "ergo_redeem_note",
    "ergo_query_reputation",
  ],
  first_markets: ["code agents", "doc agents", "verifier agents", "indexer agents", "MCP integration agents"],
  economy_metrics: [
    "agents_registered",
    "services_published",
    "open_jobs",
    "quotes_issued",
    "receipts_generated",
    "settlements_completed",
    "notes_issued",
    "notes_redeemed",
    "active_reserves",
    "average_settlement_time",
    "verifier_coverage",
    "failed_or_expired_jobs",
    "top_accepted_predicates",
    "top_service_categories",
    "autonomous_work_receipts_per_week",
  ],
  bootstrap_jobs: [
    "broken-link detection",
    "translation cleanup",
    "OpenAPI and JSON Schema validation",
    "receipt verification",
    "developer example generation",
    "wallet-policy scenario testing",
    "ecosystem project indexing",
    "MCP uptime monitoring",
    "documentation snippet drafting",
    "overclaim detection",
  ],
  ergo_connect: {
    purpose: "Wallet boundary for autonomous work settlement on Ergo.",
    positioning:
      "Connect wallets, delegate safely, sign only policy-approved intents, and attach each agent action to a verifiable receipt.",
    safe_claim:
      "Ergo can implement a TrustConnect-style CAIP-native namespace adapter and propose it upstream.",
    do_not_claim: "Do not claim Trust Wallet or TrustConnect production support for Ergo until upstream support exists.",
    caip: {
      namespace: "ergo",
      mainnet: "ergo:b0244dfc267baca974a4caee06120321",
      testnet: "ergo:e7553c9a716bb3983ac8b0c21689a1f3",
      account_format: "ergo:<chainId>:<base58Address>",
      asset_format: "ergo:<chainId>:<assetIdHex>",
    },
    capabilities: [
      "connect_wallet",
      "prove_address_control",
      "create_payment_intent",
      "check_agent_policy",
      "sign_reduced_transaction",
      "submit_transaction",
      "verify_receipt",
    ],
    packages: [
      "@ergoblockchain/connect-core",
      "@ergoblockchain/connect-ergo-react",
      "@ergoblockchain/connect-ergopay",
      "@ergoblockchain/connect-ergoauth",
    ],
    demo: "Agent cannot spend unless wallet policy allows it; allowed intents can be signed through ErgoPay and resolved into receipt-backed settlement.",
  },
  trust_boundaries: [
    "Testnet agent economy can be public, experimental, and receipt-backed.",
    "Mainnet pilot stays capped, reviewed, script-identity-bound, and explicitly limited.",
    "Production economy remains closed until external review, exact script identity, operational controls, and public gate artifacts exist.",
    "MCP tools prepare intents and proofs; they do not hold private keys or silently sign transactions.",
    "x402 can be treated as a payment handshake; Ergo remains positioned as clearing memory and settlement proof.",
  ],
  mainnet_gate: {
    status: agentEconomyMainnetGate.status,
    mainnet_ready: false,
    pending_blockers: agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open"),
    artifacts: agentEconomyMainnetGate.artifacts,
  },
} as const
