import { NextResponse } from "next/server"
import { walletAgentReferenceFlow } from "@/lib/agent-economy/wallet-agent-reference-flow"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...walletAgentReferenceFlow,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  )
}
