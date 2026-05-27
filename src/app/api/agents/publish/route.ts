import { NextResponse } from "next/server"
import {
  agentServicePublishGuide,
  exampleAgentServiceManifest,
  validateAgentServiceManifest,
} from "@/lib/agent-economy/agent-market"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentServicePublishGuide,
      example_validation: validateAgentServiceManifest(exampleAgentServiceManifest),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
        Link: '</agent-economy/agent-service-publish.schema.v0.json>; rel="describedby"; type="application/schema+json"',
      },
    },
  )
}

export async function POST(req: Request) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      validateAgentServiceManifest(null),
      {
        status: 400,
        headers: {
          Link: '</agent-economy/agent-service-publish.schema.v0.json>; rel="describedby"; type="application/schema+json"',
        },
      },
    )
  }

  const validation = validateAgentServiceManifest(body)
  return NextResponse.json(validation, {
    status: validation.accepted_for_operator_review ? 200 : 400,
    headers: {
      "Cache-Control": "no-store",
      Link: '</agent-economy/agent-service-publish.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
