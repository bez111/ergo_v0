import { NextResponse } from "next/server"
import {
  evaluateWalletAgentPolicy,
  WALLET_AGENT_POLICY_CHECK_URL,
  WALLET_AGENT_POLICY_CHECK_SCHEMA_URL,
  WALLET_AGENT_POLICY_PROFILE_TYPE,
  WALLET_AGENT_POLICY_SCHEMA_URL,
  WALLET_AGENT_POLICY_TEMPLATE_URL,
  walletAgentPolicyExampleRequest,
} from "@/lib/agent-economy/wallet-agent-policy"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      type: "ergo.agent_economy.wallet_agent_policy_check_endpoint.v0",
      policy_profile_type: WALLET_AGENT_POLICY_PROFILE_TYPE,
      schema: WALLET_AGENT_POLICY_SCHEMA_URL,
      request_schema: WALLET_AGENT_POLICY_CHECK_SCHEMA_URL,
      template: WALLET_AGENT_POLICY_TEMPLATE_URL,
      check_api: WALLET_AGENT_POLICY_CHECK_URL,
      methods: ["GET", "POST"],
      post_body: {
        profile: "WalletAgentPolicyProfile",
        proposed_action: "WalletAgentProposedAction",
      },
      strict_contract: [
        "monetary fields must be decimal strings, not floats or scientific notation",
        "unknown profile or proposed-action fields fail closed",
        "unknown allowed_actions fail closed",
        "task_hash must be canonical hex with minimum length",
        "receipt_retention must be required with a known v0 mode",
        "mainnet-disabled profiles cannot authorize signing",
      ],
      example_request: walletAgentPolicyExampleRequest,
      example_verdict: evaluateWalletAgentPolicy(
        walletAgentPolicyExampleRequest.profile,
        walletAgentPolicyExampleRequest.proposed_action,
        new Date("2026-05-22T00:00:00.000Z"),
      ),
      signing_boundary:
        "This endpoint evaluates policy only. It never signs, broadcasts, stores private keys, or grants wallet authority.",
    },
    {
      headers: {
        "cache-control": "no-store",
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
      {
        ok: false,
        error: "invalid_json",
      },
      {
        status: 400,
        headers: {
          "cache-control": "no-store",
        },
      },
    )
  }

  const payload = body && typeof body === "object" && !Array.isArray(body)
    ? (body as Record<string, unknown>)
    : {}
  const profile = payload.profile ?? body
  const proposedAction = payload.proposed_action ?? payload.action
  const verdict = evaluateWalletAgentPolicy(profile, proposedAction)

  return NextResponse.json(verdict, {
    headers: {
      "cache-control": "no-store",
    },
  })
}
