import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextResponse } from "next/server"

export const revalidate = 300
export const dynamic = "force-dynamic"

const DISCOVERY_PATH = join(process.cwd(), "public/.well-known/agent-economy.json")

export async function GET() {
  const discovery = JSON.parse(await readFile(DISCOVERY_PATH, "utf8"))

  return NextResponse.json(discovery, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/discovery.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
