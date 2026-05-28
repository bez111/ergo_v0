import { NextResponse } from "next/server"
import { devServiceCategories, serializableDevServices } from "@/lib/dev-services/catalog"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

interface Probe {
  ok: boolean
  status: number | null
  ms: number
  error: string | null
}

export async function GET(req: Request) {
  const started = Date.now()
  const origin = new URL(req.url).origin
  const services = serializableDevServices()
  const faucetConfigured = isFaucetConfigured()

  const [
    siteHealth,
    agentLive,
    receiptStorage,
    sageAccord,
    mcpHealth,
    agentLaunchKit,
    walletAgentPolicy,
    walletAgentReferenceFlow,
    walletAgentPolicyPlayground,
    ergoConnect,
    economicMcpTools,
    agentServicePublish,
    agentReputation,
    agentJobAcceptance,
    agentJobQuote,
  ] = await Promise.all([
    probe(`${origin}/api/health`),
    probe(`${origin}/api/agent-economy/live`),
    probe(`${origin}/api/sage/receipt/blob-probe-2026-05-16`),
    probe(`${origin}/api/sage/accord`),
    probe("https://mcp.ergoblockchain.org/health"),
    probe(`${origin}/api/agent-economy/launch-kit`),
    probe(`${origin}/api/agent-economy/wallet-agent/policy-check`),
    probe(`${origin}/api/agent-economy/wallet-agent/reference-flow`),
    probe(`${origin}/build/agent-payments/policy-playground`),
    probe(`${origin}/.well-known/ergo-connect.json`),
    probe(`${origin}/api/agents/mcp-tools`),
    probe(`${origin}/api/agents/publish`),
    probe(`${origin}/api/agents/reputation`),
    probe(`${origin}/api/jobs/accept`),
    probe(`${origin}/api/jobs/quote`),
  ])

  return NextResponse.json(
    {
      ok: true,
      type: "ergo.dev_services_index.v1",
      generated_at: new Date().toISOString(),
      took_ms: Date.now() - started,
      posture: {
        label: "developer_utility_belt",
        note: "Human-facing tools live under /build/services. Machine-facing helpers live under /api/dev/*.",
      },
      counts: {
        total: services.length,
        live: services.filter((service) => service.state === "live").length,
        guarded: services.filter((service) => service.state === "guarded").length,
        machine_readable: services.filter((service) => service.machineReadable).length,
      },
      categories: devServiceCategories,
      faucet: {
        configured: faucetConfigured,
        enabled: process.env.ERGO_TESTNET_FAUCET_ENABLED === "true" && faucetConfigured,
        endpoint: "/api/dev/faucet",
        reason: faucetConfigured
          ? null
          : "Set a dedicated faucet backend/wallet and anti-abuse gate before enabling payouts.",
      },
      services,
      probes: {
        site_health: siteHealth,
        agent_live: agentLive,
        receipt_storage: receiptStorage,
        sage_accord: sageAccord,
        mcp_health: mcpHealth,
        agent_launch_kit: agentLaunchKit,
        wallet_agent_policy: walletAgentPolicy,
        wallet_agent_reference_flow: walletAgentReferenceFlow,
        wallet_agent_policy_playground: walletAgentPolicyPlayground,
        ergo_connect: ergoConnect,
        economic_mcp_tools: economicMcpTools,
        agent_service_publish: agentServicePublish,
        agent_reputation: agentReputation,
        agent_job_acceptance: agentJobAcceptance,
        agent_job_quote: agentJobQuote,
      },
    },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=180",
      },
    },
  )
}

async function probe(url: string): Promise<Probe> {
  const started = Date.now()
  try {
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
      signal: AbortSignal.timeout(2_500),
    })
    return {
      ok: res.ok,
      status: res.status,
      ms: Date.now() - started,
      error: res.ok ? null : `HTTP ${res.status}`,
    }
  } catch (error) {
    return {
      ok: false,
      status: null,
      ms: Date.now() - started,
      error: error instanceof Error ? error.message : "probe failed",
    }
  }
}

function isFaucetConfigured() {
  return Boolean(
    process.env.ERGO_TESTNET_FAUCET_BACKEND_URL ||
      (process.env.ERGO_TESTNET_FAUCET_WALLET_ADDRESS && process.env.ERGO_TESTNET_FAUCET_TURNSTILE_SECRET),
  )
}
