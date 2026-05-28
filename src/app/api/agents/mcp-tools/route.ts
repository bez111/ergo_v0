import { NextResponse } from "next/server"
import { economicMcpManifest } from "@/lib/agent-economy/economic-mcp"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(economicMcpManifest, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/economic-mcp-tools.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
