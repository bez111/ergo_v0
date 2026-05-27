import { NextResponse } from "next/server"
import {
  agentJobQuoteGuide,
  exampleAgentJobQuoteRequest,
  validateAgentJobQuoteRequest,
} from "@/lib/agent-economy/agent-market"

export const revalidate = 300

const schemaLink = '</agent-economy/agent-job-quote.schema.v0.json>; rel="describedby"; type="application/schema+json"'

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      ...agentJobQuoteGuide,
      example_validation: validateAgentJobQuoteRequest(exampleAgentJobQuoteRequest),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
        Link: schemaLink,
      },
    },
  )
}

export async function POST(req: Request) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json(validateAgentJobQuoteRequest(null), {
      status: 400,
      headers: {
        Link: schemaLink,
      },
    })
  }

  const validation = validateAgentJobQuoteRequest(body)
  return NextResponse.json(validation, {
    status: validation.quote_scaffold_ready ? 200 : 400,
    headers: {
      "Cache-Control": "no-store",
      Link: schemaLink,
    },
  })
}
