import { NextResponse } from "next/server"
import { getAgentEconomyEventSummary } from "@/lib/agent-economy/events"

export const revalidate = 300
export const dynamic = "force-dynamic"

export function GET() {
  return NextResponse.json(getAgentEconomyEventSummary(), {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  })
}
