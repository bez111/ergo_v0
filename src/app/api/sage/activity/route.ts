/**
 * GET /api/sage/activity
 *
 * Returns the most recent on-chain activity for Sage's seller wallet —
 * settlements (Note redemptions), issuances, and plain transfers. The
 * /agent-economy page renders this as a live "Sage activity" feed so the
 * thesis ("we eat our own food") is visibly proven, not just claimed.
 *
 * No auth, no rate limit — explorer data is already public; we just shape
 * it into Sage-domain language.
 */

import { NextResponse } from "next/server"
import { fetchSageActivity } from "@/lib/sage/explorer/fetch-tx"

export const runtime = "nodejs"
export const revalidate = 30

export async function GET(req: Request) {
  const url = new URL(req.url)
  const limit = Math.min(Number(url.searchParams.get("limit") ?? "8"), 25)

  const SAGE_NETWORK = (process.env.SAGE_NETWORK ?? "testnet") as "mainnet" | "testnet"
  const SAGE_ADDRESS = process.env.SAGE_WALLET_ADDRESS

  if (!SAGE_ADDRESS) {
    return NextResponse.json(
      {
        ok: false,
        network: SAGE_NETWORK,
        receiver: "",
        total: 0,
        events: [],
        error: "SAGE_WALLET_ADDRESS not configured",
      },
      { headers: { "cache-control": "no-store" } },
    )
  }

  const result = await fetchSageActivity(SAGE_ADDRESS, limit, SAGE_NETWORK)

  return NextResponse.json(result, {
    headers: { "cache-control": "public, max-age=30, s-maxage=30" },
  })
}
