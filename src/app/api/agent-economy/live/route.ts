import { NextResponse } from "next/server"
import { agentEntrypoints, recommendedAgentSummary } from "@/lib/agent-economy/agent-discovery"
import { agentEconomyMainnetGate, type MainnetGateBlocker } from "@/lib/agent-economy/mainnet-gate"

type GateState = "live" | "pending" | "blocked" | "degraded"

interface ProbeResult<T = unknown> {
  ok: boolean
  status: number | null
  ms: number
  data: T | null
  error: string | null
}

interface SageActivityEvent {
  txId?: string
  noteBoxId?: string
  type?: string
}

interface SageActivityResponse {
  ok?: boolean
  total?: number
  events?: SageActivityEvent[]
}

interface SageReceiptResponse {
  ok?: boolean
  id?: string
  completeness?: string
  public_receipt_url?: string
}

interface SageReceiptStorageHealthResponse {
  ok?: boolean
  storage_configured?: boolean
  storage_healthy?: boolean
  writable?: boolean
  readable?: boolean
  error?: string | null
}

interface SageSignerHealthResponse {
  ok?: boolean
  configured?: boolean
  reachable?: boolean
  status?: string
  settlement_mode?: string
  version?: string | null
  ops?: {
    latest_event?: {
      kind?: string
      created_at?: string
      receipt_id?: string
      note_box_id?: string
      error?: string
    } | null
    latest_event_status?: string
  }
}

interface SageRegistryEvidenceResponse {
  status?: string
  achieved_level?: string | null
  ready_for_registry?: boolean
  receipt_id?: string | null
  signed_artifact_url?: string | null
  public_signing_key_url?: string | null
}

interface SageRegistryProviderResponse {
  conformance?: {
    level?: string
    result_uri?: string | null
    receipt_uri?: string | null
  }
  live_proof?: {
    latest_full_receipt_bundle?: {
      receipt_id?: string
    }
  }
}

interface NpmPackageResponse {
  name?: string
  version?: string
}

interface LifecycleStage {
  id: string
  label: string
  state: GateState
  detail: string
  evidence_href: string
}

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

const MCP_FLY_HEALTH_URL = "https://ergoblockchain-mcp.fly.dev/health"
const MCP_DNS_HEALTH_URL = "https://mcp.ergoblockchain.org/health"
const SAGE_REGISTRY_URL =
  "https://raw.githubusercontent.com/accord-protocol/accord-protocol/main/registry/providers/sage.json"
const SAGE_WIDGET_NPM_URL = "https://registry.npmjs.org/@ergoblockchain%2Fsage-widget/latest"
const SAGE_WIDGET_TARGET_VERSION = "0.3.0"

export async function GET(req: Request) {
  const started = Date.now()
  const requestOrigin = new URL(req.url).origin
  const siteBaseUrl = trimSlash(process.env.AGENT_ECONOMY_LIVE_BASE_URL ?? requestOrigin)

  const [activity, storage, accord, conformanceEvidence, registry, signer, widgetNpm, mcpFly, mcpDns, mainnetGate, reviewPack, launchKit, proofExplorer, walletAgent, walletAgentPolicy, walletAgentReferenceFlow, walletAgentPolicyPlayground, ergoConnect, economicMcpTools, agentServicePublish, providerOnboarding, agentReputation, agentJobAcceptance, agentJobQuote] = await Promise.all([
    probeJson<SageActivityResponse>(`${siteBaseUrl}/api/sage/activity?limit=8`),
    probeJson<SageReceiptStorageHealthResponse>(
      `${siteBaseUrl}/api/sage/receipt/blob-probe-2026-05-16`,
    ),
    probeJson<{ ok?: boolean; type?: string; level?: string }>(`${siteBaseUrl}/api/sage/accord`),
    probeJson<SageRegistryEvidenceResponse>(`${siteBaseUrl}/evidence/sage/latest-evidence.json`),
    probeJson<SageRegistryProviderResponse>(SAGE_REGISTRY_URL),
    probeJson<SageSignerHealthResponse>(`${siteBaseUrl}/api/sage/signer-health`),
    probeJson<NpmPackageResponse>(SAGE_WIDGET_NPM_URL),
    probeJson<{ ok?: boolean; service?: string; version?: string }>(MCP_FLY_HEALTH_URL),
    probeJson<{ ok?: boolean; service?: string }>(MCP_DNS_HEALTH_URL),
    probeJson<{ ok?: boolean; status?: string; blockers?: unknown[] }>(
      `${siteBaseUrl}/api/agent-economy/mainnet-gate`,
    ),
    probeJson<{ ok?: boolean; status?: string; type?: string }>(
      `${siteBaseUrl}/api/agent-economy/review-pack`,
    ),
    probeJson<{ ok?: boolean; status?: string; type?: string }>(
      `${siteBaseUrl}/api/agent-economy/launch-kit`,
    ),
    probePage(`${siteBaseUrl}/agent-economy/proofs`),
    probeJson<{ ok?: boolean; status?: string; type?: string }>(
      `${siteBaseUrl}/api/agent-economy/wallet-agent`,
    ),
    probeJson<{ ok?: boolean; type?: string; example_verdict?: { allowed?: boolean } }>(
      `${siteBaseUrl}/api/agent-economy/wallet-agent/policy-check`,
    ),
    probeJson<{ ok?: boolean; type?: string; status?: string }>(
      `${siteBaseUrl}/api/agent-economy/wallet-agent/reference-flow`,
    ),
    probePage(`${siteBaseUrl}/build/agent-payments/policy-playground`),
    probeJson<{ type?: string; status?: string; security_boundary?: { agents_do_not_hold_private_keys?: boolean } }>(
      `${siteBaseUrl}/.well-known/ergo-connect.json`,
    ),
    probeJson<{ type?: string; status?: string; runtime_boundary?: { mcp_tools_sign_transactions?: boolean } }>(
      `${siteBaseUrl}/api/agents/mcp-tools`,
    ),
    probeJson<{ ok?: boolean; type?: string; example_validation?: { accepted_for_operator_review?: boolean } }>(
      `${siteBaseUrl}/api/agents/publish`,
    ),
    probeJson<{ type?: string; status?: string; safety_boundaries?: { operator_review_required?: boolean } }>(
      `${siteBaseUrl}/api/agents/onboarding`,
    ),
    probeJson<{ type?: string; status?: string; summary?: { receipt_backed_subjects?: number } }>(
      `${siteBaseUrl}/api/agents/reputation`,
    ),
    probeJson<{ ok?: boolean; type?: string; example_validation?: { accepted_for_operator_review?: boolean } }>(
      `${siteBaseUrl}/api/jobs/accept`,
    ),
    probeJson<{ ok?: boolean; type?: string; example_validation?: { quote_scaffold_ready?: boolean } }>(
      `${siteBaseUrl}/api/jobs/quote`,
    ),
  ])

  const latestFullReceipt = await discoverLatestFullReceipt(
    siteBaseUrl,
    activity.data,
    conformanceEvidence.data?.receipt_id ?? null,
    signer.data?.ops?.latest_event?.receipt_id ?? signer.data?.ops?.latest_event?.note_box_id ?? null,
  )
  const activityEvents = activity.data?.events ?? []
  const settlementCount = activityEvents.filter((event) => event.type === "settlement").length
  const storageConfigured = storage.data?.storage_configured === true
  const storageHealthy = storage.data?.ok === true && storage.data.storage_healthy === true
  const signerState = signerGateState(signer)
  const mainnetGateStatus = mainnetGate.data?.status ?? agentEconomyMainnetGate.status
  const remoteMainnetBlockers = (mainnetGate.data as { blockers?: MainnetGateBlocker[] } | null)?.blockers
  const mainnetBlockers = (Array.isArray(remoteMainnetBlockers) ? remoteMainnetBlockers : agentEconomyMainnetGate.blockers)
    .filter((blocker) => blocker.state !== "open")
  const conformanceEvidencePassed = conformanceEvidence.data?.status === "passed" &&
    Boolean(conformanceEvidence.data.achieved_level) &&
    conformanceEvidence.data.ready_for_registry === true
  const conformanceLevel = conformanceEvidence.data?.achieved_level ?? null
  const conformanceReceiptId = conformanceEvidence.data?.receipt_id ?? null
  const conformanceHref = conformanceEvidence.data?.signed_artifact_url ?? "/evidence/sage/latest-evidence.json"
  const conformanceReceiptResolved = Boolean(
    latestFullReceipt?.id && conformanceReceiptId === latestFullReceipt.id,
  )
  const conformancePassed = conformanceEvidencePassed && conformanceReceiptResolved
  const registryMerged = conformancePassed &&
    registry.data?.conformance?.level === conformanceLevel &&
    registry.data?.conformance?.result_uri === conformanceHref &&
    registry.data?.live_proof?.latest_full_receipt_bundle?.receipt_id === conformanceReceiptId
  const widgetNpmVersion = widgetNpm.data?.version ?? null
  const widgetPublished = Boolean(widgetNpm.ok && widgetNpmVersion && isAtLeastVersion(widgetNpmVersion, SAGE_WIDGET_TARGET_VERSION))

  const gates = [
    gate(
      "sage-activity",
      "Sage activity",
      activity.ok && activity.data?.ok === true ? "live" : "degraded",
      activity.ok
        ? `${activity.data?.total ?? 0} wallet events, ${settlementCount} settlement rows`
        : activity.error ?? "activity endpoint unavailable",
      "/api/sage/activity",
    ),
    gate(
      "receipt-storage",
      "Receipt storage",
      storageHealthy ? "live" : "blocked",
      storageHealthy
        ? "Vercel Blob write/read probe passed for receipt bundles"
        : storage.data?.error ?? storage.error ?? "BLOB_READ_WRITE_TOKEN is not visible or Blob probe failed",
      "/api/sage/receipt/blob-probe-2026-05-16",
    ),
    gate(
      "full-receipt-bundle",
      "Full receipt bundle",
      latestFullReceipt ? "live" : "blocked",
      latestFullReceipt
        ? `Latest full bundle: ${shortId(latestFullReceipt.id)}`
        : "Needs one new paid Sage flow after Blob",
      latestFullReceipt?.public_receipt_url ?? "/api/sage/receipt/blob-probe-2026-05-16",
    ),
    gate(
      "accord-bridge",
      "Accord/402 bridge",
      accord.ok && accord.data?.ok === true ? "live" : "degraded",
      accord.ok ? `Descriptor level: ${accord.data?.level ?? "reported"}` : accord.error ?? "descriptor unavailable",
      "/api/sage/accord",
    ),
    gate(
      "accord-conformance",
      "Accord conformance",
      conformanceEvidencePassed
        ? conformanceReceiptResolved
          ? "live"
          : latestFullReceipt
            ? "pending"
            : "degraded"
        : latestFullReceipt
          ? "pending"
          : "blocked",
      conformanceEvidencePassed
        ? conformanceReceiptResolved
          ? `Signed ${conformanceLevel} evidence published for the latest full receipt bundle`
          : latestFullReceipt
            ? `Signed ${conformanceLevel} evidence references ${shortId(conformanceReceiptId ?? undefined)}, not the latest readable full receipt`
            : `Signed ${conformanceLevel} evidence is published, but the referenced full receipt is not currently readable`
        : latestFullReceipt
          ? "Ready for conformance run and signed evidence"
          : "Blocked until a full receipt bundle exists",
      conformanceHref,
    ),
    gate(
      "accord-registry",
      "Accord registry",
      registryMerged ? "live" : conformancePassed ? "pending" : "blocked",
      registryMerged
        ? "Canonical Accord registry includes Sage L1 evidence"
        : conformancePassed
          ? "Signed evidence is published; registry merge still needs confirmation"
          : "Blocked until signed conformance evidence is published",
      "https://github.com/accord-protocol/accord-protocol/blob/main/registry/providers/sage.json",
    ),
    gate(
      "sage-signer",
      "Sage signer ops",
      signerState,
      signerDetail(signer),
      "/api/sage/signer-health",
    ),
    gate(
      "sage-widget",
      "Sage widget",
      widgetPublished ? "live" : "pending",
      widgetPublished
        ? `npm latest ${widgetNpmVersion} exposes payment intents, wallet launcher hooks, React, vanilla, typed API clients, and receipt callbacks`
        : widgetNpmVersion
          ? `Source v${SAGE_WIDGET_TARGET_VERSION} is ready; npm latest is still ${widgetNpmVersion}`
          : widgetNpm.error ?? "Source is ready; npm registry probe is not reporting latest version",
      "/agent-economy/sage-widget",
    ),
    gate(
      "developer-launch-kit",
      "Developer launch kit",
      launchKit.ok && launchKit.data?.ok === true ? "live" : "degraded",
      launchKit.ok && launchKit.data?.ok === true
        ? "Five-minute developer path and JSON launch manifest are published"
        : launchKit.error ?? "developer launch kit endpoint unavailable",
      "/agent-economy/launch-kit",
    ),
    gate(
      "proof-explorer",
      "Proof explorer",
      proofExplorer.ok ? "live" : "degraded",
      proofExplorer.ok
        ? "Human proof explorer page is available for receipt, conformance, MCP, widget, and gate inspection"
        : proofExplorer.error ?? "proof explorer endpoint unavailable",
      "/agent-economy/proofs",
    ),
    gate(
      "wallet-agent-spec",
      "Wallet-agent spec",
      walletAgent.ok && walletAgent.data?.ok === true ? "live" : "degraded",
      walletAgent.ok && walletAgent.data?.ok === true
        ? "Local wallet-agent policy, simulation, and signing boundary is published"
        : walletAgent.error ?? "wallet-agent spec endpoint unavailable",
      "/agent-economy/wallet-agent",
    ),
    gate(
      "wallet-agent-policy",
      "Wallet-agent policy check",
      walletAgentPolicy.ok &&
        walletAgentPolicy.data?.ok === true &&
        walletAgentPolicy.data.example_verdict?.allowed === true
        ? "live"
        : "degraded",
      walletAgentPolicy.ok && walletAgentPolicy.data?.ok === true
        ? "Policy profile schema, template, and deterministic verdict API are published"
        : walletAgentPolicy.error ?? "wallet-agent policy-check endpoint unavailable",
      "/api/agent-economy/wallet-agent/policy-check",
    ),
    gate(
      "wallet-agent-reference-flow",
      "Wallet-agent reference flow",
      walletAgentReferenceFlow.ok && walletAgentReferenceFlow.data?.ok === true
        ? "live"
        : "degraded",
      walletAgentReferenceFlow.ok && walletAgentReferenceFlow.data?.ok === true
        ? "Reference runner API is published for host-owned wallet flows"
        : walletAgentReferenceFlow.error ?? "wallet-agent reference flow endpoint unavailable",
      "/build/agent-payments/wallet-agent-runner",
    ),
    gate(
      "wallet-agent-policy-playground",
      "Wallet-agent policy playground",
      walletAgentPolicyPlayground.ok ? "live" : "degraded",
      walletAgentPolicyPlayground.ok
        ? "Interactive policy verdict playground is available for developers"
        : walletAgentPolicyPlayground.error ?? "wallet-agent policy playground unavailable",
      "/build/agent-payments/policy-playground",
    ),
    gate(
      "ergo-connect-wallet-boundary",
      "ErgoConnect wallet boundary",
      ergoConnect.ok && ergoConnect.data?.security_boundary?.agents_do_not_hold_private_keys === true
        ? "live"
        : "degraded",
      ergoConnect.ok
        ? "CAIP-native wallet boundary manifest is published for ErgoAuth, ErgoPay, policy, and receipt expectations"
        : ergoConnect.error ?? "ErgoConnect manifest unavailable",
      "/build/ergo-connect",
    ),
    gate(
      "economic-mcp-tool-contracts",
      "Economic MCP tool contracts",
      economicMcpTools.ok &&
        economicMcpTools.data?.type === "ergo.economic_mcp_tools.v0" &&
        economicMcpTools.data.runtime_boundary?.mcp_tools_sign_transactions === false
        ? "live"
        : "degraded",
      economicMcpTools.ok
        ? "Safe MCP tool contracts are published; runtime tools prepare intents and proof checks, not signatures"
        : economicMcpTools.error ?? "economic MCP tool manifest unavailable",
      "/agents/mcp",
    ),
    gate(
      "agent-service-publish",
      "Agent service publish validator",
      agentServicePublish.ok &&
        agentServicePublish.data?.ok === true &&
        agentServicePublish.data.example_validation?.accepted_for_operator_review === true
        ? "live"
        : "degraded",
      agentServicePublish.ok && agentServicePublish.data?.ok === true
        ? "Provider manifest validation is published before registry operator review"
        : agentServicePublish.error ?? "agent service publish validator unavailable",
      "/agents/publish",
    ),
    gate(
      "provider-onboarding",
      "Provider onboarding path",
      providerOnboarding.ok &&
        providerOnboarding.data?.type === "ergo.provider_onboarding_path.v0" &&
        providerOnboarding.data.safety_boundaries?.operator_review_required === true
        ? "live"
        : "degraded",
      providerOnboarding.ok
        ? "Provider golden path links service publish, MCP tools, job acceptance, quote scaffold, receipt expectation, and wallet boundary"
        : providerOnboarding.error ?? "provider onboarding path unavailable",
      "/agents/onboarding",
    ),
    gate(
      "agent-reputation-graph",
      "Agent reputation graph",
      agentReputation.ok &&
        agentReputation.data?.type === "ergo.agent_reputation_graph.v0" &&
        Number(agentReputation.data.summary?.receipt_backed_subjects ?? 0) > 0
        ? "live"
        : "degraded",
      agentReputation.ok
        ? "Receipt-derived reputation graph is published with evidence links and mainnet boundary"
        : agentReputation.error ?? "agent reputation graph unavailable",
      "/agents/reputation",
    ),
    gate(
      "agent-job-acceptance",
      "Agent job acceptance validator",
      agentJobAcceptance.ok &&
        agentJobAcceptance.data?.ok === true &&
        agentJobAcceptance.data.example_validation?.accepted_for_operator_review === true
        ? "live"
        : "degraded",
      agentJobAcceptance.ok && agentJobAcceptance.data?.ok === true
        ? "Worker intent validation is published before job operator assignment"
        : agentJobAcceptance.error ?? "agent job acceptance validator unavailable",
      "/jobs/accept",
    ),
    gate(
      "agent-job-quote",
      "Agent job quote scaffold",
      agentJobQuote.ok &&
        agentJobQuote.data?.ok === true &&
        agentJobQuote.data.example_validation?.quote_scaffold_ready === true
        ? "live"
        : "degraded",
      agentJobQuote.ok && agentJobQuote.data?.ok === true
        ? "Quote, Agreement draft, receipt expectation, and settlement handoff scaffold is published"
        : agentJobQuote.error ?? "agent job quote scaffold unavailable",
      "/jobs/quote",
    ),
    gate(
      "mcp-fly",
      "MCP Fly endpoint",
      mcpFly.ok && mcpFly.data?.ok === true ? "live" : "degraded",
      mcpFly.ok ? `Service ${mcpFly.data?.version ?? "0.1.0"} responding` : mcpFly.error ?? "Fly health failed",
      MCP_FLY_HEALTH_URL,
    ),
    gate(
      "mcp-dns",
      "MCP public DNS",
      mcpDns.ok && mcpDns.data?.ok === true ? "live" : "pending",
      mcpDns.ok ? "mcp.ergoblockchain.org is resolving" : "Public MCP DNS or health probe is not responding",
      MCP_DNS_HEALTH_URL,
    ),
    gate(
      "playground",
      "ErgoScript playground",
      "live",
      "Runtime live; async WASM build warning cleared",
      "/build/playground",
    ),
    gate(
      "mainnet-audit-gate",
      "Mainnet/audit gate",
      mainnetGateStatus === "open" ? "live" : "blocked",
      mainnetGateStatus === "open"
        ? "All mainnet gate artifacts are published"
        : mainnetBlockers.length > 0
          ? `Closed; ${mainnetBlockers.length} audit/mainnet artifacts still pending`
          : "Closed until audit-bound script identity and external review evidence are published",
      "/api/agent-economy/mainnet-gate",
    ),
    gate(
      "audit-review-pack",
      "Review pack",
      reviewPack.ok && reviewPack.data?.ok === true ? "live" : "degraded",
      reviewPack.ok && reviewPack.data?.ok === true
        ? "External review handoff pack is published"
        : reviewPack.error ?? "review pack endpoint unavailable",
      "/agent-economy/review-pack",
    ),
  ]
  const lifecycle = buildLifecycle({
    accordLive: accord.ok && accord.data?.ok === true,
    settlementCount,
    storageHealthy,
    latestFullReceipt,
    conformancePassed,
    conformanceEvidencePassed,
    conformanceReceiptResolved,
    conformanceLevel,
    conformanceHref,
    widgetPublished,
    widgetNpmVersion,
    mcpFlyLive: mcpFly.ok && mcpFly.data?.ok === true,
    mcpDnsLive: mcpDns.ok && mcpDns.data?.ok === true,
    mainnetGateStatus,
  })

  const body = {
    ok: true,
    type: "agent_economy.live_status.v1",
    recommended_summary: recommendedAgentSummary,
    agent_entrypoint: agentEntrypoints.human_agent_page,
    agent_capabilities: agentEntrypoints.agent_capabilities_api,
    generated_at: new Date().toISOString(),
    took_ms: Date.now() - started,
    posture: {
      label: "testnet_live_proof",
      mainnet_ready: false,
      note: "Live testnet proof. Full receipt, signed L1 conformance evidence, signer ops, and testnet identity are published; mainnet claims remain blocked until an audit-bound mainnet script identity and external review artifact exist.",
    },
    monitor: {
      request_origin: requestOrigin,
      site_base_url: siteBaseUrl,
      agents: agentEntrypoints.human_agent_page,
      capabilities_api: agentEntrypoints.agent_capabilities_api,
    },
    summary: {
      gates_live: gates.filter((item) => item.state === "live").length,
      gates_total: gates.length,
      storage_configured: storageConfigured,
      receipt_storage_healthy: storageHealthy,
      latest_full_receipt_id: latestFullReceipt?.id ?? null,
      accord_conformance_level: conformanceEvidencePassed ? conformanceLevel : null,
      accord_conformance_evidence: conformanceEvidencePassed ? conformanceHref : null,
      accord_conformance_receipt_resolved: conformanceReceiptResolved,
      accord_registry_merged: registryMerged,
      sage_widget_npm_version: widgetNpmVersion,
      sage_widget_npm_published: widgetPublished,
      wallet_agent_spec_published: walletAgent.ok && walletAgent.data?.ok === true,
      wallet_agent_policy_check_published:
        walletAgentPolicy.ok && walletAgentPolicy.data?.ok === true,
      wallet_agent_reference_flow_published:
        walletAgentReferenceFlow.ok && walletAgentReferenceFlow.data?.ok === true,
      wallet_agent_policy_playground_published: walletAgentPolicyPlayground.ok,
      developer_launch_kit_published: launchKit.ok && launchKit.data?.ok === true,
      economic_mcp_tools_published:
        economicMcpTools.ok && economicMcpTools.data?.type === "ergo.economic_mcp_tools.v0",
      agent_service_publish_published:
        agentServicePublish.ok && agentServicePublish.data?.ok === true,
      provider_onboarding_published:
        providerOnboarding.ok && providerOnboarding.data?.type === "ergo.provider_onboarding_path.v0",
      agent_reputation_published:
        agentReputation.ok && agentReputation.data?.type === "ergo.agent_reputation_graph.v0",
      agent_job_acceptance_published:
        agentJobAcceptance.ok && agentJobAcceptance.data?.ok === true,
      agent_job_quote_published:
        agentJobQuote.ok && agentJobQuote.data?.ok === true,
      proof_explorer_published: proofExplorer.ok,
      sage_wallet_event_count: activity.data?.total ?? 0,
      sage_settlement_count: settlementCount,
      sage_signer_status: signer.data?.status ?? (signer.ok ? "unknown" : "unreachable"),
      mainnet_gate_status: mainnetGateStatus,
      review_pack_published: reviewPack.ok && reviewPack.data?.ok === true,
    },
    mainnet_gate: mainnetGate.data?.blockers ? mainnetGate.data : {
      ok: true,
      ...agentEconomyMainnetGate,
    },
    lifecycle,
    gates,
    next_actions: [
      ...(mcpDns.ok && mcpDns.data?.ok === true ? [] : [{
        id: "mcp-dns",
        label: "Restore mcp.ergoblockchain.org DNS and health",
        owner: "dns",
        blocked_by_external: true,
      }]),
      ...(latestFullReceipt ? [] : [{
        id: "post-blob-paid-flow",
        label: "Run one new paid Sage flow to create a full receipt bundle",
        owner: "wallet",
        blocked_by_external: true,
      }]),
      ...(conformanceEvidencePassed && !conformanceReceiptResolved ? [{
        id: "conformance-receipt-resolution",
        label: "Make the signed conformance receipt resolve as full_receipt_bundle from /api/sage/receipt/<id>",
        owner: "storage",
        blocked_by_external: !storageHealthy,
      }] : conformancePassed && !registryMerged ? [{
        id: "registry-evidence",
        label: "Merge the Accord registry PR with the signed Sage artifact",
        owner: "repo",
        blocked_by_external: false,
      }] : !conformanceEvidencePassed ? [{
        id: "accord-conformance",
        label: latestFullReceipt
          ? "Publish signed conformance evidence for the full receipt bundle"
          : "Run conformance against the new receipt and publish signed evidence",
        owner: "repo",
        blocked_by_external: !latestFullReceipt,
      }] : []),
      ...(signerState === "live" ? [] : [{
        id: "sage-signer-ops",
        label: "Configure the permanent Sage settlement signer endpoint",
        owner: "ops",
        blocked_by_external: true,
      }]),
      ...(widgetPublished ? [] : [{
        id: "sage-widget-npm",
        label: "Publish @ergoblockchain/sage-widget v0.3.0 through npm Trusted Publishing",
        owner: "release",
        blocked_by_external: true,
      }]),
      ...mainnetBlockers.map((blocker) => ({
        id: blocker.id,
        label: blocker.label,
        owner: blocker.owner,
        blocked_by_external: blocker.owner === "audit",
      })),
    ],
    probes: {
      sage_activity: publicProbe(activity),
      receipt_storage: publicProbe(storage),
      accord: publicProbe(accord),
      accord_conformance_evidence: publicProbe(conformanceEvidence),
      accord_registry: publicProbe(registry),
      sage_signer: publicProbe(signer),
      sage_widget_npm: publicProbe(widgetNpm),
      developer_launch_kit: publicProbe(launchKit),
      proof_explorer: publicProbe(proofExplorer),
      wallet_agent_spec: publicProbe(walletAgent),
      wallet_agent_policy_check: publicProbe(walletAgentPolicy),
      wallet_agent_reference_flow: publicProbe(walletAgentReferenceFlow),
      wallet_agent_policy_playground: publicProbe(walletAgentPolicyPlayground),
      ergo_connect: publicProbe(ergoConnect),
      economic_mcp_tools: publicProbe(economicMcpTools),
      agent_service_publish: publicProbe(agentServicePublish),
      provider_onboarding: publicProbe(providerOnboarding),
      agent_reputation: publicProbe(agentReputation),
      agent_job_acceptance: publicProbe(agentJobAcceptance),
      agent_job_quote: publicProbe(agentJobQuote),
      mcp_fly: publicProbe(mcpFly),
      mcp_dns: publicProbe(mcpDns),
      mainnet_gate: publicProbe(mainnetGate),
      audit_review_pack: publicProbe(reviewPack),
    },
  }

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=120",
    },
  })
}

function gate(id: string, label: string, state: GateState, detail: string, href: string) {
  return { id, label, state, detail, href }
}

async function discoverLatestFullReceipt(
  origin: string,
  activity: SageActivityResponse | null,
  evidenceReceiptId: string | null,
  signerOpsReceiptId: string | null,
): Promise<SageReceiptResponse | null> {
  const candidates = new Set<string>()
  if (signerOpsReceiptId) candidates.add(signerOpsReceiptId)
  if (evidenceReceiptId) candidates.add(evidenceReceiptId)
  for (const event of activity?.events ?? []) {
    if (typeof event.txId === "string") candidates.add(event.txId)
    if (typeof event.noteBoxId === "string") candidates.add(event.noteBoxId)
  }

  const receipts = await Promise.all(
    Array.from(candidates).slice(0, 8).map((id) =>
      probeJson<SageReceiptResponse>(
        `${origin}/api/sage/receipt/${encodeURIComponent(id)}`,
        { timeoutMs: 2_500 },
      ),
    ),
  )

  const full = receipts.find(
    (receipt) => receipt.data?.ok === true && receipt.data.completeness === "full_receipt_bundle",
  )
  if (full?.data) return full.data

  return null
}

async function probeJson<T>(
  url: string,
  opts: { timeoutMs?: number } = {},
): Promise<ProbeResult<T>> {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(opts.timeoutMs ?? 4_000),
    })
    const text = await res.text()
    const parsed = parseJsonProbe<T>(text, url)
    return {
      ok: res.ok && parsed.error === null,
      status: res.status,
      ms: Date.now() - started,
      data: parsed.data,
      error: parsed.error ?? (res.ok ? null : `HTTP ${res.status}`),
    }
  } catch (error) {
    return {
      ok: false,
      status: null,
      ms: Date.now() - started,
      data: null,
      error: error instanceof Error ? error.message : "probe failed",
    }
  }
}

function parseJsonProbe<T>(text: string, url: string): { data: T | null; error: string | null } {
  if (!text) return { data: null, error: null }

  try {
    return { data: JSON.parse(text) as T, error: null }
  } catch (error) {
    const path = safePathname(url)
    const message = error instanceof Error ? error.message : "invalid JSON"
    return {
      data: null,
      error: `Invalid JSON from ${path}: ${message}`,
    }
  }
}

function safePathname(url: string) {
  try {
    return new URL(url).pathname
  } catch {
    return url.slice(0, 120)
  }
}

async function probePage(
  url: string,
  opts: { timeoutMs?: number } = {},
): Promise<ProbeResult<null>> {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(opts.timeoutMs ?? 4_000),
    })
    return {
      ok: res.ok,
      status: res.status,
      ms: Date.now() - started,
      data: null,
      error: res.ok ? null : `HTTP ${res.status}`,
    }
  } catch (error) {
    return {
      ok: false,
      status: null,
      ms: Date.now() - started,
      data: null,
      error: error instanceof Error ? error.message : "probe failed",
    }
  }
}

function publicProbe<T>(probe: ProbeResult<T>) {
  return {
    ok: probe.ok,
    status: probe.status,
    ms: probe.ms,
    error: probe.error,
  }
}

function shortId(id?: string) {
  if (!id) return "unknown"
  return id.length > 14 ? `${id.slice(0, 8)}...${id.slice(-6)}` : id
}

function trimSlash(value: string) {
  return value.replace(/\/+$/, "")
}

function isAtLeastVersion(version: string, target: string) {
  const parse = (value: string) => value.split(".").map((part) => Number.parseInt(part, 10) || 0)
  const currentParts = parse(version)
  const targetParts = parse(target)
  for (let i = 0; i < Math.max(currentParts.length, targetParts.length); i += 1) {
    const current = currentParts[i] ?? 0
    const required = targetParts[i] ?? 0
    if (current > required) return true
    if (current < required) return false
  }
  return true
}

function buildLifecycle(opts: {
  accordLive: boolean
  settlementCount: number
  storageHealthy: boolean
  latestFullReceipt: SageReceiptResponse | null
  conformancePassed: boolean
  conformanceEvidencePassed: boolean
  conformanceReceiptResolved: boolean
  conformanceLevel: string | null
  conformanceHref: string
  widgetPublished: boolean
  widgetNpmVersion: string | null
  mcpFlyLive: boolean
  mcpDnsLive: boolean
  mainnetGateStatus: string
}): LifecycleStage[] {
  return [
    {
      id: "intent",
      label: "Intent captured",
      state: "live",
      detail: "Sage accepts a user question and canonicalizes the task.",
      evidence_href: "/api/sage/chat",
    },
    {
      id: "quote",
      label: "Accord quote",
      state: opts.accordLive ? "live" : "degraded",
      detail: opts.accordLive
        ? "Accord provider endpoint describes the payment challenge and receipt schema."
        : "Accord provider endpoint is not reporting cleanly.",
      evidence_href: "/api/sage/accord",
    },
    {
      id: "note",
      label: "Ergo Note payment",
      state: opts.latestFullReceipt || opts.settlementCount > 0 ? "live" : "pending",
      detail: opts.settlementCount > 0
        ? `${opts.settlementCount} settled Note flow(s) visible in activity.`
        : opts.latestFullReceipt
          ? `Paid Note verified for ${shortId(opts.latestFullReceipt.id)}; redemption is tracked separately.`
          : "Waiting for the first paid Note flow.",
      evidence_href: "/api/sage/activity",
    },
    {
      id: "receipt",
      label: "Full receipt bundle",
      state: opts.latestFullReceipt ? "live" : "blocked",
      detail: opts.latestFullReceipt
        ? `Full bundle stored for ${shortId(opts.latestFullReceipt.id)}.`
        : opts.storageHealthy
          ? "Needs one new paid Sage flow after Blob storage."
          : "Receipt storage must pass the Blob write/read probe first.",
      evidence_href: opts.latestFullReceipt?.public_receipt_url ?? "/api/sage/receipt/blob-probe-2026-05-16",
    },
    {
      id: "conformance",
      label: "Accord conformance",
      state: opts.conformancePassed
        ? "live"
        : opts.conformanceEvidencePassed
          ? "degraded"
          : opts.latestFullReceipt
            ? "pending"
            : "blocked",
      detail: opts.conformancePassed
        ? `Signed ${opts.conformanceLevel ?? "L1"} conformance evidence is published and its receipt resolves as a full bundle.`
        : opts.conformanceEvidencePassed
          ? "Signed conformance evidence is published, but its referenced receipt is not currently readable as a full receipt bundle."
        : opts.latestFullReceipt
          ? "Ready for signed conformance artifact generation."
          : "Blocked by the missing full receipt bundle.",
      evidence_href: opts.conformanceEvidencePassed ? opts.conformanceHref : "/api/sage/accord",
    },
    {
      id: "mcp",
      label: "MCP tool surface",
      state: opts.mcpDnsLive ? "live" : opts.mcpFlyLive ? "pending" : "degraded",
      detail: opts.mcpDnsLive
        ? "Public MCP DNS is resolving."
        : opts.mcpFlyLive
          ? "Fly endpoint works; public DNS is the remaining gate."
          : "MCP service health is degraded.",
      evidence_href: opts.mcpDnsLive ? MCP_DNS_HEALTH_URL : MCP_FLY_HEALTH_URL,
    },
    {
      id: "widget",
      label: "Embeddable widget",
      state: opts.widgetPublished ? "live" : "pending",
      detail: opts.widgetPublished
        ? `Sage widget ${opts.widgetNpmVersion ?? "v0.3"} is published for host-owned wallet flows.`
        : "Sage widget v0.3 source is prepared; npm Trusted Publishing setup is the next release gate.",
      evidence_href: "/agent-economy/sage-widget",
    },
    {
      id: "mainnet",
      label: "Mainnet/audit gate",
      state: opts.mainnetGateStatus === "open" ? "live" : "blocked",
      detail: "Mainnet language stays closed until audit-bound script identity and external review evidence are published.",
      evidence_href: "/api/agent-economy/mainnet-gate",
    },
  ]
}

function signerGateState(probe: ProbeResult<SageSignerHealthResponse>): GateState {
  if (!probe.ok) return "degraded"
  if (probe.data?.configured === false) return "pending"
  if (probe.data?.reachable === true) return "live"
  return "degraded"
}

function signerDetail(probe: ProbeResult<SageSignerHealthResponse>): string {
  if (!probe.ok) return probe.error ?? "Signer health endpoint unavailable"
  if (probe.data?.configured === false) {
    return "Verify-only mode; redemption settlement waits for SAGE_SIGNER_URL"
  }
  if (probe.data?.reachable === true) {
    return `Settlement signer reachable${probe.data.version ? ` (${probe.data.version})` : ""}`
  }
  return "Signer configured but health is not reachable; verify-only fallback should remain available"
}
