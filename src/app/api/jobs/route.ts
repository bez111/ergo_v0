import { NextResponse } from "next/server"
import { agentJobsBoard } from "@/lib/agent-economy/agent-market"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(agentJobsBoard, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/agent-jobs.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
