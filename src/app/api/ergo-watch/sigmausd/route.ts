import { NextResponse } from "next/server"
import {
  ERGO_WATCH_REVALIDATE_SECONDS,
  getErgoWatchSnapshot,
} from "@/lib/ergo-watch/snapshot"

export const revalidate = 300
export const dynamic = "force-dynamic"

export async function GET() {
  const snapshot = await getErgoWatchSnapshot()

  return NextResponse.json(
    {
      generatedAt: snapshot.generatedAt,
      cacheSeconds: snapshot.cacheSeconds,
      sigmaUsd: snapshot.defi.sigmaUsd,
      sources: snapshot.sources.filter((source) =>
        ["defillama-stablecoins", "defillama-sigmausd", "sigmausd-bank-box", "erg-usd-oracle-box"].includes(
          source.id,
        ),
      ),
    },
    {
      headers: {
        "Cache-Control": `s-maxage=${ERGO_WATCH_REVALIDATE_SECONDS}, stale-while-revalidate=${ERGO_WATCH_REVALIDATE_SECONDS * 2}`,
      },
    },
  )
}
