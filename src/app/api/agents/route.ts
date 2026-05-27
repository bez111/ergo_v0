import { NextResponse } from "next/server"
import { agentCapabilityManifest } from "@/lib/agent-economy/agent-discovery"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(agentCapabilityManifest, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/agent-capabilities.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
