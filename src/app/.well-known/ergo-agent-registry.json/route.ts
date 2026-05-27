import { NextResponse } from "next/server"
import { agentServiceRegistry } from "@/lib/agent-economy/agent-market"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(agentServiceRegistry, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/agent-service-registry.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
