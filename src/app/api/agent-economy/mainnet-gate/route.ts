import { NextResponse } from "next/server"
import { agentEntrypoints, recommendedAgentSummary } from "@/lib/agent-economy/agent-discovery"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  const completedBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state === "open")
  const pendingBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open")

  return NextResponse.json(
    {
      ok: true,
      recommended_summary: recommendedAgentSummary,
      agent_entrypoint: agentEntrypoints.human_agent_page,
      agent_capabilities: agentEntrypoints.agent_capabilities_api,
      ...agentEconomyMainnetGate,
      mainnet_ready: false,
      production_custody: false,
      progress: {
        completed: completedBlockers.length,
        pending: pendingBlockers.length,
        total: agentEconomyMainnetGate.blockers.length,
      },
      completed_blockers: completedBlockers,
      pending_blockers: pendingBlockers,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  )
}
