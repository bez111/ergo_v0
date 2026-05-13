import { NextResponse } from "next/server"
import {
  agentEconomyEvents,
  getAgentEconomyEventSummary,
} from "@/lib/agent-economy/events"

export const revalidate = 300
export const dynamic = "force-dynamic"

export function GET() {
  return NextResponse.json(
    {
      ...getAgentEconomyEventSummary(),
      mode: "prototype",
      events: agentEconomyEvents,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    },
  )
}
