import { NextResponse } from "next/server"
import {
  ERGO_WATCH_REVALIDATE_SECONDS,
  getErgoWatchSnapshot,
} from "@/lib/ergo-watch/snapshot"

export const revalidate = ERGO_WATCH_REVALIDATE_SECONDS

export async function GET() {
  const snapshot = await getErgoWatchSnapshot()

  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": `s-maxage=${ERGO_WATCH_REVALIDATE_SECONDS}, stale-while-revalidate=${ERGO_WATCH_REVALIDATE_SECONDS * 2}`,
    },
  })
}
