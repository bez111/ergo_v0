import { NextResponse } from "next/server"
import { agentEconomyReviewPack } from "@/lib/agent-economy/review-pack"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentEconomyReviewPack,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  )
}
