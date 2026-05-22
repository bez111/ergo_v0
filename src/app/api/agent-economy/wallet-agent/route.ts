import { NextResponse } from "next/server"
import { agentEconomyWalletAgentSpec } from "@/lib/agent-economy/wallet-agent"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentEconomyWalletAgentSpec,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  )
}
