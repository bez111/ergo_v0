import { NextResponse } from "next/server"
import { providerOnboardingPath } from "@/lib/agent-economy/provider-onboarding"

export const revalidate = 300

export async function GET() {
  return NextResponse.json(providerOnboardingPath, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
      Link: '</agent-economy/provider-onboarding.schema.v0.json>; rel="describedby"; type="application/schema+json"',
    },
  })
}
