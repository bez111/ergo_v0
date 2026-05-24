import { agentEconomyMainnetGate } from "./mainnet-gate"

export const agentEconomyReviewPack = {
  type: "ergo.agent_economy.external_review_pack.v0",
  version: "v0",
  status: "ready_for_external_review_not_audit_report",
  last_reviewed: "2026-05-24",
  public_claim:
    "This is a reviewer handoff pack for the testnet live proof. It is not an external audit report and does not open mainnet readiness.",
  posture: {
    network: "testnet",
    mainnet_ready: false,
    allowed_language: [
      "testnet live proof",
      "signed Sage L1 conformance evidence",
      "full post-Blob receipt bundle",
      "audit-gated mainnet path",
    ],
    forbidden_language: [
      "Sage is mainnet ready",
      "Accord is production certified",
      "ChainCash/Basis contracts are audited",
      "the current Sage payment scripts are safe for real funds",
    ],
  },
  entrypoints: {
    human_review_page: "https://www.ergoblockchain.org/agent-economy/review-pack",
    machine_review_pack: "https://www.ergoblockchain.org/api/agent-economy/review-pack",
    agent_economy_start: "https://www.ergoblockchain.org/agent-economy/start",
    agent_economy_roadmap: "https://www.ergoblockchain.org/agent-economy/roadmap",
    agent_economy_roadmap_api: "https://www.ergoblockchain.org/api/agent-economy/roadmap",
    agent_economy_roadmap_schema:
      "https://www.ergoblockchain.org/agent-economy/roadmap.schema.v0.json",
    developer_launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
    developer_launch_kit_api: "https://www.ergoblockchain.org/api/agent-economy/launch-kit",
    developer_launch_kit_schema: "https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json",
    developer_services_api: "https://www.ergoblockchain.org/api/dev/services",
    developer_tools_api: "https://www.ergoblockchain.org/api/dev/tools",
    agent_economy_discovery: "https://www.ergoblockchain.org/.well-known/agent-economy.json",
    agent_economy_discovery_api: "https://www.ergoblockchain.org/api/agent-economy/discovery",
    agent_economy_discovery_schema: "https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json",
    accord_provider_descriptor: "https://www.ergoblockchain.org/.well-known/accord",
    agent_economy_openapi: "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
    proof_explorer: "https://www.ergoblockchain.org/agent-economy/proofs",
    proof_explorer_api: "https://www.ergoblockchain.org/api/agent-economy/proofs",
    proof_explorer_schema: "https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
    live_hub: "https://www.ergoblockchain.org/agent-economy/live",
    trust_gate: "https://www.ergoblockchain.org/agent-economy/trust",
    mainnet_gate_api: "https://www.ergoblockchain.org/api/agent-economy/mainnet-gate",
  },
  repositories: {
    site: "https://github.com/bez111/ergo_v0",
    sage_widget: "https://github.com/bez111/sage-widget",
    mcp: "https://github.com/bez111/ergoblockchain-mcp",
    accord_registry: "https://github.com/accord-protocol/accord-protocol",
  },
  evidence: {
    ...agentEconomyMainnetGate.artifacts,
    review_pack_page: "https://www.ergoblockchain.org/agent-economy/review-pack",
    review_pack_api: "https://www.ergoblockchain.org/api/agent-economy/review-pack",
    agent_economy_start: "https://www.ergoblockchain.org/agent-economy/start",
    agent_economy_roadmap: "https://www.ergoblockchain.org/agent-economy/roadmap",
    agent_economy_roadmap_api: "https://www.ergoblockchain.org/api/agent-economy/roadmap",
    agent_economy_roadmap_schema:
      "https://www.ergoblockchain.org/agent-economy/roadmap.schema.v0.json",
    developer_launch_kit: "https://www.ergoblockchain.org/agent-economy/launch-kit",
    developer_launch_kit_api: "https://www.ergoblockchain.org/api/agent-economy/launch-kit",
    developer_launch_kit_schema:
      "https://www.ergoblockchain.org/agent-economy/developer-launch-kit.schema.v0.json",
    developer_services_api: "https://www.ergoblockchain.org/api/dev/services",
    developer_tools_api: "https://www.ergoblockchain.org/api/dev/tools",
    agent_economy_discovery: "https://www.ergoblockchain.org/.well-known/agent-economy.json",
    agent_economy_discovery_api: "https://www.ergoblockchain.org/api/agent-economy/discovery",
    agent_economy_discovery_schema:
      "https://www.ergoblockchain.org/agent-economy/discovery.schema.v0.json",
    accord_provider_descriptor: "https://www.ergoblockchain.org/.well-known/accord",
    agent_economy_openapi: "https://www.ergoblockchain.org/agent-economy/openapi.v0.json",
    proof_explorer: "https://www.ergoblockchain.org/agent-economy/proofs",
    proof_explorer_api: "https://www.ergoblockchain.org/api/agent-economy/proofs",
    proof_explorer_schema:
      "https://www.ergoblockchain.org/agent-economy/proof-explorer.schema.v0.json",
    release_watchlist:
      "https://www.ergoblockchain.org/agent-economy/release-watchlist.v0.json",
    release_watchlist_schema:
      "https://www.ergoblockchain.org/agent-economy/release-watchlist.schema.v0.json",
    current_release_api:
      "https://www.ergoblockchain.org/api/agent-economy/release/current",
    current_release_schema:
      "https://www.ergoblockchain.org/agent-economy/current-release.schema.v0.json",
    release_attestation_2026_05_23:
      "https://www.ergoblockchain.org/agent-economy/release-attestation-2026-05-23.v0.json",
    release_attestation_schema:
      "https://www.ergoblockchain.org/agent-economy/release-attestation.schema.v0.json",
    wallet_agent_safety_spec: "https://www.ergoblockchain.org/agent-economy/wallet-agent",
    wallet_agent_safety_spec_api: "https://www.ergoblockchain.org/api/agent-economy/wallet-agent",
    wallet_agent_policy_schema:
      "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.schema.v0.json",
    wallet_agent_policy_check_schema:
      "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy-check.schema.v0.json",
    wallet_agent_policy_template:
      "https://www.ergoblockchain.org/agent-economy/wallet-agent-policy.profile.template.json",
    wallet_agent_policy_check_api:
      "https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check",
    wallet_agent_reference_flow:
      "https://www.ergoblockchain.org/build/agent-payments/wallet-agent-runner",
    wallet_agent_reference_flow_api:
      "https://www.ergoblockchain.org/api/agent-economy/wallet-agent/reference-flow",
    wallet_agent_reference_flow_manifest:
      "https://www.ergoblockchain.org/agent-economy/wallet-agent-reference-flow.v0.json",
    wallet_agent_policy_playground:
      "https://www.ergoblockchain.org/build/agent-payments/policy-playground",
    external_audit_review_schema:
      "https://www.ergoblockchain.org/agent-economy/external-audit-review.schema.v0.json",
    mainnet_script_identity_schema:
      "https://www.ergoblockchain.org/agent-economy/mainnet-script-identity.schema.v0.json",
    reviewer_handoff_doc: "https://github.com/bez111/ergo_v0/blob/main/docs/agent-economy-reviewer-handoff.md",
    mcp_endpoint_runbook: "https://github.com/bez111/ergo_v0/blob/main/docs/mcp-endpoint-runbook.md",
    sage_widget_npm: "https://www.npmjs.com/package/@ergoblockchain/sage-widget/v/0.3.0",
  },
  review_scope: {
    included: [
      "Sage quote, chat, verify-payment, signer-health, activity, and receipt APIs",
      "Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON shape and durability",
      "Task hash canonicalization across quote, verify, receipt, conformance, and widget surfaces",
      "Vercel Blob receipt storage write/read and fallback behavior",
      "Sage testnet signer policy, limits, failure logging, health, and runbook",
      "Observed Ergo testnet Reserve, Note, registers, and settlement identity",
      "Accord L1 conformance evidence and provider signing key publication",
      "MCP endpoint as public machine-facing infrastructure",
      "Agent Economy start page as the canonical orientation path for live, verifiable, buildable, and mainnet-gated surfaces",
      "Agent Economy discovery descriptor and API as the canonical machine-readable entrypoint for agent surfaces, Sage evidence, MCP, packages, schemas, and verification commands",
      "Agent Economy OpenAPI manifest for public API client and documentation tooling",
      "Developer launch kit, service index, and stateless tools API as the public onboarding surface",
      "Proof explorer as the public evidence board for receipts, conformance evidence, MCP health, widget state, and the mainnet gate",
      "Sage widget v0.3.0 as host-owned wallet handoff surface",
      "Wallet-agent safety spec, policy-check API, policy playground, and reference runner for local policy, simulation, signing boundaries, strict decimal/task-hash validation, unknown-field rejection, and receipt retention",
      "Public wording and mainnet gate controls",
      "Release watchlist, security header checks, npm audit expectation, and post-deploy smoke targets",
      "Current release API that reports the runtime Git/Vercel release context without creating a new static attestation for every deploy",
      "Release attestation artifact that records the reviewed commit, deployment id, npm audit result, post-deploy watch result, and mainnet gate invariants",
    ],
    excluded_until_separate_review: [
      "real-funds mainnet custody",
      "third-party wallet internals",
      "third-party tenant deployments",
      "exchange or fiat integrations",
      "unpublished production signer setup",
      "claims about unaudited mainnet contract safety",
    ],
  },
  reviewer_checklist: [
    "Record reviewer identity, date, public key or durable attribution method.",
    "Pin reviewed repository commits and deployment identifiers.",
    "Record package versions, lockfile hash, and relevant workflow runs.",
    "Verify that /.well-known/agent-economy.json and /api/agent-economy/discovery describe the same testnet-only surface and keep mainnet_ready=false.",
    "Verify that /api/dev/services and /api/dev/tools are stateless helper surfaces and do not sign, broadcast, or mutate chain state.",
    "Verify that the full receipt bundle contains Agreement JSON, Verification Receipt JSON, and Settlement Receipt JSON.",
    "Verify that signed conformance evidence covers the same receipt id.",
    "Verify that stale, unrelated, wrong-recipient, wrong-value, wrong-reserve, or replayed Notes cannot satisfy a premium Sage request.",
    "Verify that receipt completeness distinguishes full_receipt_bundle from chain_proof_only.",
    "Verify that wallet-agent policy-check rejects malformed decimals, negative spend, invalid task hashes, unknown profile/action fields, unknown allowed actions, invalid receipt-retention modes, and mainnet-disabled actions.",
    "Review signer policy limits, failure logging, failover posture, and redaction guarantees.",
    "Verify that the wallet-agent policy-check API denies wrong-recipient, wrong-reserve, over-cap, stale-expiry, and missing-receipt actions before any signing request.",
    "Verify that the wallet-agent policy playground demonstrates both allowed and blocked verdicts without touching wallet authority.",
    "Verify that the wallet-agent reference flow keeps signing inside the host-owned wallet layer and stops after a denied policy verdict.",
    "Verify that release watch targets, security headers, and mainnet gate invariants stay green after every production deploy.",
    "Verify that the current release API reports the served commit and keeps mainnet_ready false.",
    "Verify that the release attestation pins the reviewed commit, Vercel deployment id, package-lock hash, and check results.",
    "Confirm that public site wording remains testnet-only until both pending mainnet gates are closed.",
    "Publish findings with severity, status, remediation reference, and residual risk.",
  ],
  local_commands: [
    "npm run type-check",
    "npm run audit:blog",
    "npm run audit:locales",
    "npm run audit:agent-economy-gate",
    "npm audit --audit-level=moderate",
    "npm run smoke:routes",
    "npm run smoke:staging",
    "npm run watch:agent-economy",
  ],
  acceptance_workflow: [
    "The external reviewer pins reviewed commits, deployment id, lockfile hash, package versions, and evidence URLs.",
    "The reviewer publishes a completed external-audit-review.manifest.v0.json that satisfies the public schema.",
    "A completed mainnet-script-identity.manifest.v0.json binds every mainnet script to source artifact hash, compiled ErgoTree hash, address, and test vectors.",
    "Every finding states severity, status, remediation reference, residual risk, and whether it blocks mainnet language.",
    "The mainnet gate remains closed until both completed non-template artifacts are linked from /api/agent-economy/mainnet-gate.",
  ],
  mainnet_gate_rule: {
    status: agentEconomyMainnetGate.status,
    completed_blockers: agentEconomyMainnetGate.blockers
      .filter((blocker) => blocker.state === "open")
      .map((blocker) => blocker.id),
    pending_blockers: agentEconomyMainnetGate.blockers
      .filter((blocker) => blocker.state !== "open")
      .map((blocker) => blocker.id),
    must_remain_closed_until: [
      "external_audit_report is a completed non-template artifact",
      "mainnet_script_identity is a completed audit-bound non-template artifact",
    ],
    template_files_are_not_sufficient: true,
  },
} as const
