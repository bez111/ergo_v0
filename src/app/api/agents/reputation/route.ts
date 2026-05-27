import { NextResponse } from "next/server"
import { agentReputationGraph } from "@/lib/agent-economy/agent-reputation"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(agentReputationGraph, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/agent-reputation.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
