import { NextResponse } from "next/server"
import { ergoConnectBoundary } from "@/lib/agent-economy/ergo-connect"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(ergoConnectBoundary, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/ergo-connect.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
