import { NextResponse } from "next/server"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  const completedBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state === "open")
  const pendingBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open")

  return NextResponse.json(
    {
      ok: true,
      ...agentEconomyMainnetGate,
      progress: {
        completed: completedBlockers.length,
        pending: pendingBlockers.length,
        total: agentEconomyMainnetGate.blockers.length,
      },
      completed_blockers: completedBlockers,
      pending_blockers: pendingBlockers,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  )
}
