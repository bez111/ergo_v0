import { NextResponse } from "next/server"
import { agentEconomyRoadmap } from "@/lib/agent-economy/roadmap"

export const runtime = "nodejs"
export const revalidate = 300

export function GET() {
  return NextResponse.json(agentEconomyRoadmap, {
    headers: {
      "cache-control": "public, max-age=300, s-maxage=300, stale-while-revalidate=3600",
      Link: '</agent-economy/roadmap.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
