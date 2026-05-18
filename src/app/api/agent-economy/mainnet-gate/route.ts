import { NextResponse } from "next/server"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"

export const runtime = "nodejs"
export const revalidate = 300

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentEconomyMainnetGate,
    },
    {
      headers: {
        "cache-control": "public, max-age=300, s-maxage=300",
      },
    },
  )
}
