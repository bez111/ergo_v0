import { NextResponse } from "next/server"
import {
  agentServicePublishGuide,
  createAgentServiceSubmitDraft,
  exampleAgentServiceManifest,
  validateAgentServiceManifest,
} from "@/lib/agent-economy/agent-market"

export const revalidate = 300

const schemaLinkHeader = [
  '</agent-economy/agent-service-publish.schema.v0.json>; rel="describedby"; type="application/schema+json"',
  '</agent-economy/agent-service-submit-draft.schema.v0.json>; rel="describedby"; type="application/schema+json"',
].join(", ")

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentServicePublishGuide,
      example_validation: validateAgentServiceManifest(exampleAgentServiceManifest),
      example_submit_draft: createAgentServiceSubmitDraft(exampleAgentServiceManifest),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
        Link: schemaLinkHeader,
      },
    },
  )
}

export async function POST(req: Request) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    const validation = validateAgentServiceManifest(null)
    return NextResponse.json(
      {
        ...validation,
        submit_draft: createAgentServiceSubmitDraft(null),
      },
      {
        status: 400,
        headers: {
          Link: schemaLinkHeader,
        },
      },
    )
  }

  const validation = validateAgentServiceManifest(body)
  return NextResponse.json(
    {
      ...validation,
      submit_draft: createAgentServiceSubmitDraft(body),
    },
    {
      status: validation.accepted_for_operator_review ? 200 : 400,
      headers: {
        "Cache-Control": "no-store",
        Link: schemaLinkHeader,
      },
    },
  )
}
