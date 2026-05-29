type GateState = "live" | "pending" | "blocked" | "degraded"

interface ProbeSnapshot {
  ok: boolean
  status: number | null
  ms: number
  error: string | null
}

const LATEST_FULL_RECEIPT_ID = "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
const LATEST_FULL_RECEIPT_URL = `https://www.ergoblockchain.org/r/sage/${LATEST_FULL_RECEIPT_ID}`
const LATEST_FULL_RECEIPT_API = `https://www.ergoblockchain.org/api/sage/receipt/${LATEST_FULL_RECEIPT_ID}`
const LATEST_FULL_RECEIPT_EXPLORER =
  `https://testnet.ergoplatform.com/transactions/${LATEST_FULL_RECEIPT_ID}`

export const agentEconomyLiveSnapshot = {
  ok: true,
  generated_at: "2026-05-24T19:34:46.303Z",
  took_ms: 0,
  posture: {
    label: "testnet_live_proof",
    mainnet_ready: false,
    note:
      "Live testnet proof. Full receipt, signed L1 conformance evidence, signer ops, and testnet identity are published; mainnet claims remain blocked until an audit-bound mainnet script identity and external review artifact exist.",
  },
  summary: {
    gates_live: 23,
    gates_total: 24,
    storage_configured: true,
    receipt_storage_healthy: true,
    latest_full_receipt_id: LATEST_FULL_RECEIPT_ID,
    accord_conformance_level: "L1",
    accord_conformance_evidence:
      "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json",
    accord_registry_merged: true,
    sage_widget_npm_version: "0.3.0",
    sage_widget_npm_published: true,
    sage_wallet_event_count: 13,
    sage_settlement_count: 2,
    sage_signer_status: "up",
    mainnet_gate_status: "closed",
    review_pack_published: true,
    wallet_agent_spec_published: true,
    wallet_agent_policy_check_published: true,
    wallet_agent_reference_flow_published: true,
    wallet_agent_policy_playground_published: true,
    developer_launch_kit_published: true,
    agent_service_publish_published: true,
    provider_onboarding_published: true,
    agent_reputation_published: true,
    agent_job_acceptance_published: true,
    agent_job_quote_published: true,
  },
  mainnet_gate: {
    status: "closed",
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
    ],
  },
  lifecycle: [
    {
      id: "intent",
      label: "Intent captured",
      state: "live" as GateState,
      detail: "Sage accepts a user question and canonicalizes the task.",
      evidence_href: "/api/sage/chat",
    },
    {
      id: "quote",
      label: "Accord quote",
      state: "live" as GateState,
      detail: "Accord provider endpoint describes the payment challenge and receipt schema.",
      evidence_href: "/api/sage/accord",
    },
    {
      id: "note",
      label: "Ergo Note payment",
      state: "live" as GateState,
      detail: "2 settled Note flows are visible in activity.",
      evidence_href: "/api/sage/activity",
    },
    {
      id: "receipt",
      label: "Full receipt bundle",
      state: "live" as GateState,
      detail: "Full bundle stored with Agreement, Verification Receipt, Settlement Receipt, and chain proof.",
      evidence_href: LATEST_FULL_RECEIPT_URL,
    },
    {
      id: "conformance",
      label: "Accord conformance",
      state: "live" as GateState,
      detail: "Signed L1 conformance evidence is published and resolves to the full bundle.",
      evidence_href: "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json",
    },
    {
      id: "mcp",
      label: "MCP tool surface",
      state: "live" as GateState,
      detail: "Public MCP DNS and health endpoint are live.",
      evidence_href: "https://mcp.ergoblockchain.org/health",
    },
    {
      id: "widget",
      label: "Embeddable widget",
      state: "live" as GateState,
      detail: "Sage widget 0.3.0 is published for host-owned wallet flows.",
      evidence_href: "/agent-economy/sage-widget",
    },
    {
      id: "mainnet",
      label: "Mainnet/audit gate",
      state: "blocked" as GateState,
      detail: "Mainnet language stays closed until audit-bound script identity and external review evidence are published.",
      evidence_href: "/api/agent-economy/mainnet-gate",
    },
  ],
  gates: [
    ["sage-activity", "Sage activity", "live", "13 wallet events, 2 settlement rows", "/api/sage/activity"],
    ["receipt-storage", "Receipt storage", "live", "Vercel Blob write/read probe passed for receipt bundles", "/api/sage/receipt/blob-probe-2026-05-16"],
    ["full-receipt-bundle", "Full receipt bundle", "live", "Latest full bundle: f8752d10...763d81", LATEST_FULL_RECEIPT_URL],
    ["accord-bridge", "Accord/402 bridge", "live", "Descriptor level: L1", "/api/sage/accord"],
    ["accord-conformance", "Accord conformance", "live", "Signed L1 evidence published for the latest full receipt bundle", "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json"],
    ["accord-registry", "Accord registry", "live", "Canonical Accord registry includes Sage L1 evidence", "https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json"],
    ["sage-signer", "Sage signer ops", "live", "Settlement signer reachable (0.1.0)", "/api/sage/signer-health"],
    ["sage-widget", "Sage widget", "live", "npm latest 0.3.0 exposes payment intents, wallet launcher hooks, typed API clients, and receipt callbacks", "/agent-economy/sage-widget"],
    ["developer-launch-kit", "Developer launch kit", "live", "Five-minute developer path and JSON launch manifest are published", "/agent-economy/launch-kit"],
    ["proof-explorer", "Proof explorer", "live", "Human proof explorer page is available for receipt, conformance, MCP, widget, and gate inspection", "/agent-economy/proofs"],
    ["wallet-agent-spec", "Wallet-agent spec", "live", "Local wallet-agent policy, simulation, and signing boundary is published", "/agent-economy/wallet-agent"],
    ["wallet-agent-policy", "Wallet-agent policy check", "live", "Policy profile schema, template, and deterministic verdict API are published", "/api/agent-economy/wallet-agent/policy-check"],
    ["wallet-agent-reference-flow", "Wallet-agent reference flow", "live", "Reference runner API is published for host-owned wallet flows", "/build/agent-payments/wallet-agent-runner"],
    ["wallet-agent-policy-playground", "Wallet-agent policy playground", "live", "Interactive policy verdict playground is available for developers", "/build/agent-payments/policy-playground"],
    ["ergo-connect-wallet-boundary", "ErgoConnect wallet boundary", "live", "CAIP-native wallet boundary manifest is published for ErgoAuth, ErgoPay, policy, and receipt expectations", "/build/ergo-connect"],
    ["agent-service-publish", "Agent service publish validator", "live", "Provider manifest validation is published before registry operator review", "/agents/publish"],
    ["provider-onboarding", "Provider onboarding path", "live", "Provider golden path links service publish, MCP tools, job acceptance, quote scaffold, receipt expectation, and wallet boundary", "/agents/onboarding"],
    ["agent-reputation-graph", "Agent reputation graph", "live", "Receipt-derived reputation graph is published with evidence links and mainnet boundary", "/agents/reputation"],
    ["agent-job-acceptance", "Agent job acceptance validator", "live", "Worker intent validation is published before job operator assignment", "/jobs/accept"],
    ["agent-job-quote", "Agent job quote scaffold", "live", "Quote, Agreement draft, receipt expectation, and settlement handoff scaffold is published", "/jobs/quote"],
    ["mcp-fly", "MCP Fly endpoint", "live", "Service 0.1.0 responding", "https://ergoblockchain-mcp.fly.dev/health"],
    ["mcp-dns", "MCP public DNS", "live", "mcp.ergoblockchain.org is resolving", "https://mcp.ergoblockchain.org/health"],
    ["playground", "ErgoScript playground", "live", "Runtime live; async WASM build warning cleared", "/build/playground"],
    ["mainnet-audit-gate", "Mainnet/audit gate", "blocked", "Closed; 2 audit/mainnet artifacts still pending", "/api/agent-economy/mainnet-gate"],
    ["audit-review-pack", "Review pack", "live", "External review handoff pack is published", "/agent-economy/review-pack"],
  ].map(([id, label, state, detail, href]) => ({
    id,
    label,
    state: state as GateState,
    detail,
    href,
  })),
  next_actions: [
    {
      id: "exact-contract-identity",
      label: "Exact script hashes and contract identity",
      owner: "audit",
      blocked_by_external: true,
    },
    {
      id: "external-audit-manifests",
      label: "Audit manifests",
      owner: "audit",
      blocked_by_external: true,
    },
  ],
}

const receiptChecks = [
  {
    label: "Agreement JSON",
    state: "live" as GateState,
    value: "blake2b256:0x7bbe425952efa0b912207e7c4b322079a0b5b3027cc5bc95b076376e4aeff404",
  },
  {
    label: "Verification receipt",
    state: "live" as GateState,
    value: "blake2b256:0xca885a458db9e584a54ceefdadfa3feb02e33c9978469311a3fee7dbacd2f767",
  },
  {
    label: "Settlement receipt",
    state: "live" as GateState,
    value: "blake2b256:0x80790a943f0189e5639b7070ddfe3aef43ab28aee40c193daa4c2d06bdf998c8",
  },
  {
    label: "On-chain settlement",
    state: "live" as GateState,
    value: LATEST_FULL_RECEIPT_ID,
  },
]

export const agentEconomyProofSnapshot = {
  ok: true,
  generated_at: "2026-05-24T19:34:46.462Z",
  posture: {
    label: "testnet_live_proof",
    mainnet_ready: false,
    note:
      "Public proof explorer for Ergo's testnet-first agent economy surfaces. API and JSON artifacts are evidence, not SEO landing pages.",
  },
  summary: {
    proof_count: 13,
    live_count: 12,
    full_receipt_count: 1,
    chain_only_receipt_count: 0,
    latest_full_receipt_id: LATEST_FULL_RECEIPT_ID,
    gates_live: 22,
    gates_total: 23,
    mainnet_gate_status: "closed",
  },
  surfaces: {
    human_page: "https://www.ergoblockchain.org/agent-economy/proofs",
    machine_api: "https://www.ergoblockchain.org/api/agent-economy/proofs",
    schema: "https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
    live_hub: "https://www.ergoblockchain.org/agent-economy/live",
    launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
  },
  verify_steps: [
    {
      id: "proof-board",
      label: "Proof board",
      url: "https://www.ergoblockchain.org/api/agent-economy/proofs",
      command: "curl -sS https://www.ergoblockchain.org/api/agent-economy/proofs",
      expect: "ok=true, posture.mainnet_ready=false, proofs[] with receipts, MCP, widget, and gate records.",
    },
    {
      id: "receipt-source",
      label: "Receipt source",
      url: LATEST_FULL_RECEIPT_API,
      command: `curl -sS ${LATEST_FULL_RECEIPT_API}`,
      expect: "One receipt API returns chain proof plus Agreement, Verification Receipt, and Settlement Receipt JSON.",
    },
    {
      id: "mcp-health",
      label: "MCP endpoint",
      url: "https://mcp.ergoblockchain.org/health",
      command: "curl -sS https://mcp.ergoblockchain.org/health",
      expect: "Public machine endpoint reports ok=true for health probes.",
    },
    {
      id: "schema-contract",
      label: "Schema contract",
      url: "https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
      command: "curl -sS https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
      expect: "JSON Schema binds the API shape and keeps mainnet_ready=false until the audit gate opens.",
    },
  ],
  proofs: [
    {
      id: `receipt:${LATEST_FULL_RECEIPT_ID}`,
      kind: "receipt_bundle" as const,
      title: "Full Sage receipt bundle",
      state: "live" as GateState,
      status: "full_receipt_bundle",
      description:
        "Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and chain evidence resolve from one receipt API.",
      updated_at: "2026-05-21T11:15:59Z",
      primary_url: LATEST_FULL_RECEIPT_URL,
      api_url: LATEST_FULL_RECEIPT_API,
      explorer_url: LATEST_FULL_RECEIPT_EXPLORER,
      identifiers: {
        receipt_id: LATEST_FULL_RECEIPT_ID,
        note_box_id: "c942939bead0faa601dfea59e222784052ff6d01709c670f036c53395ab72630",
        settlement_tx_id: LATEST_FULL_RECEIPT_ID,
        agreement_id: "acc_BGYV1X1X34PA2W2V1CSBGYN5ZF",
        verification_receipt_id: "vr_KCJ6SM1PY3T3M3YYWN2R2MYBBB",
        settlement_receipt_id: "sr_EMT2RKDVZMBKWYAJRY3CCPFYDT",
        task_hash: "9674cd3942614a20dc66e08a5d9fa4dfadcb511d6a9096b5eaf94a14230ced33",
      } as Record<string, string | null>,
      checks: receiptChecks,
    },
    {
      id: "conformance:sage-l1",
      kind: "conformance_evidence" as const,
      title: "Signed Sage Accord conformance",
      state: "live" as GateState,
      status: "passed",
      description: "Signed L1 evidence binds Sage to a full receipt bundle and the Accord registry surface.",
      updated_at: null,
      primary_url: "https://www.ergoblockchain.org/evidence/sage/conformance-l1-2026-05-21.signed.json",
      api_url: "https://www.ergoblockchain.org/evidence/sage/latest-evidence.json",
      identifiers: {
        receipt_id: LATEST_FULL_RECEIPT_ID,
        achieved_level: "L1",
        ready_for_registry: "true",
        receipt_completeness: "full_receipt_bundle",
      } as Record<string, string | null>,
      checks: [
        { label: "Evidence status", state: "live" as GateState, value: "passed" },
        { label: "Conformance level", state: "live" as GateState, value: "L1" },
        { label: "Registry readiness", state: "live" as GateState, value: "true" },
        { label: "Referenced receipt API", state: "live" as GateState, value: "full_receipt_bundle" },
      ],
    },
    {
      id: "mcp:public-endpoint",
      kind: "mcp_endpoint" as const,
      title: "Public MCP endpoint",
      state: "live" as GateState,
      status: "reachable",
      description: "Streamable HTTP MCP health is publicly reachable for machines and developer probes.",
      updated_at: null,
      primary_url: "https://mcp.ergoblockchain.org/health",
      api_url: "https://mcp.ergoblockchain.org/health",
      identifiers: { service: "ergoblockchain-mcp", version: "0.1.0", host: "mcp.ergoblockchain.org" } as Record<string, string | null>,
      checks: [{ label: "Health", state: "live" as GateState, value: "ok" }],
    },
    {
      id: "npm:sage-widget",
      kind: "widget_package" as const,
      title: "Sage embeddable widget package",
      state: "live" as GateState,
      status: "v0.3.0",
      description:
        "React and vanilla widget package for quote, payment intent, host wallet launch, verification, and receipt callbacks.",
      updated_at: null,
      primary_url: "https://www.npmjs.com/package/@ergoblockchain/sage-widget",
      api_url: "https://registry.npmjs.org/@ergoblockchain%2Fsage-widget/latest",
      identifiers: { package: "@ergoblockchain/sage-widget", version: "0.3.0" } as Record<string, string | null>,
      checks: [{ label: "npm latest", state: "live" as GateState, value: "0.3.0" }],
    },
    {
      id: "gate:mainnet",
      kind: "mainnet_gate" as const,
      title: "Mainnet/audit gate",
      state: "blocked" as GateState,
      status: "closed",
      description:
        "Mainnet readiness stays closed until external review and audit-bound script identity evidence are published.",
      updated_at: null,
      primary_url: "https://www.ergoblockchain.org/agent-economy/trust",
      api_url: "https://www.ergoblockchain.org/api/agent-economy/mainnet-gate",
      identifiers: { mainnet_ready: "false", pending_blockers: "2" } as Record<string, string | null>,
      checks: [
        { label: "Exact script hashes and contract identity", state: "blocked" as GateState, value: "audit" },
        { label: "Audit manifests", state: "blocked" as GateState, value: "audit" },
      ],
    },
  ],
}

const okProbe = (ms: number): ProbeSnapshot => ({ ok: true, status: 200, ms, error: null })

export const devServicesSnapshot = {
  ok: true,
  generated_at: "2026-05-24T19:34:46.295Z",
  counts: {
    total: 23,
    live: 21,
    guarded: 2,
    machine_readable: 20,
  },
  faucet: {
    configured: false,
    enabled: false,
    fallback_url: "https://testnet.ergofaucet.org/",
    reason: "Set a dedicated faucet backend/wallet and anti-abuse gate before enabling payouts.",
  },
  probes: {
    site_health: okProbe(63),
    agent_live: okProbe(1893),
    receipt_storage: okProbe(351),
    sage_accord: okProbe(1286),
    mcp_health: okProbe(171),
    agent_launch_kit: okProbe(66),
    wallet_agent_policy: okProbe(84),
    wallet_agent_reference_flow: okProbe(1325),
    wallet_agent_policy_playground: okProbe(86),
    ergo_connect: okProbe(79),
    agent_service_publish: okProbe(58),
    provider_onboarding: okProbe(61),
    agent_reputation: okProbe(57),
    agent_job_acceptance: okProbe(58),
    agent_job_quote: okProbe(61),
  },
}

export const sageActivitySnapshot = {
  ok: true,
  network: "testnet" as const,
  receiver: "3WwRauZrYjaQYgnS9P6U4i7Ng7MBzn8MSh4yPXA9qgcySrmkEdn6",
  total: 13,
  events: [
    {
      txId: LATEST_FULL_RECEIPT_ID,
      blockHeight: 356728,
      timestamp: 1779362275030,
      type: "settlement" as const,
      inflowNanoErg: 59878800000,
      paymentNanoErg: 1000000,
      noteBoxId: "c942939bead0faa601dfea59e222784052ff6d01709c670f036c53395ab72630",
    },
    {
      txId: "30ace821d11a3f19098f0d9dee09c016c858da105efa6904aef4a84bb6782a88",
      blockHeight: 356726,
      timestamp: 1779362090028,
      type: "issuance" as const,
      inflowNanoErg: 59879900000,
      paymentNanoErg: 1000000,
      noteBoxId: "c942939bead0faa601dfea59e222784052ff6d01709c670f036c53395ab72630",
    },
    {
      txId: "83ac762fd75fbe702eec19ad74ec8ac696243ea889974de6eca92216937bb8d3",
      blockHeight: 355491,
      timestamp: 1779306601829,
      type: "settlement" as const,
      inflowNanoErg: 59882000000,
      paymentNanoErg: 1000000,
      noteBoxId: "2c7ea0802ff5c36cf72859f0ade09e095812ad35bc89ebe00ca48816fa656415",
    },
    {
      txId: "cdec5f44316bf7338bbeccca049c055551521e9490392a95c722fd358a0dce79",
      blockHeight: 355489,
      timestamp: 1779306405093,
      type: "issuance" as const,
      inflowNanoErg: 59883100000,
      paymentNanoErg: 1000000,
      noteBoxId: "2c7ea0802ff5c36cf72859f0ade09e095812ad35bc89ebe00ca48816fa656415",
    },
  ],
}
