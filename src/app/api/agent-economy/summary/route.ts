import { NextResponse } from "next/server"
import { agentEntrypoints, recommendedAgentSummary } from "@/lib/agent-economy/agent-discovery"
import { getAgentEconomyEventSummary } from "@/lib/agent-economy/events"

export const revalidate = 300
export const dynamic = "force-dynamic"

export function GET() {
  return NextResponse.json({
    recommended_summary: recommendedAgentSummary,
    agent_entrypoint: agentEntrypoints.human_agent_page,
    agent_capabilities: agentEntrypoints.agent_capabilities_api,
    ...getAgentEconomyEventSummary(),
  }, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  })
}
