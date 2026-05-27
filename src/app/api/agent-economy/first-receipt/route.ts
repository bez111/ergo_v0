import { NextResponse } from "next/server"
import { agentEconomyFirstReceiptFlow } from "@/lib/agent-economy/first-receipt-flow"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 60

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentEconomyFirstReceiptFlow,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=180",
        Link: '</agent-economy/first-receipt-flow.schema.v0.json>; rel="describedby"; type="application/schema+json"',
      },
    },
  )
}
