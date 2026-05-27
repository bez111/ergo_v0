import { NextResponse } from "next/server"
import { agentEntrypoints, recommendedAgentSummary } from "@/lib/agent-economy/agent-discovery"
import { agentEconomyDeveloperLaunchKit } from "@/lib/agent-economy/developer-launch-kit"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      recommended_summary: recommendedAgentSummary,
      agent_entrypoint: agentEntrypoints.human_agent_page,
      agent_capabilities: agentEntrypoints.agent_capabilities_api,
      ...agentEconomyDeveloperLaunchKit,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=180",
        Link: '</agent-economy/developer-launch-kit.schema.v0.json>; rel="describedby"; type="application/schema+json"',
      },
    },
  )
}
