import { NextResponse } from "next/server"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"
export const revalidate = 0

function nullableEnv(name: string) {
  const value = process.env[name]
  return value && value.trim().length > 0 ? value.trim() : null
}

function vercelUrl() {
  const raw = nullableEnv("VERCEL_URL")
  if (!raw) return null
  return raw.startsWith("http") ? raw : `https://${raw}`
}

export function GET() {
  const completed = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state === "open")
  const pending = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open")
  const commit = nullableEnv("VERCEL_GIT_COMMIT_SHA")

  return NextResponse.json(
    {
      ok: true,
      type: "ergo.agent_economy.current_release.v0",
      version: "v0",
      status: "runtime_release_status_not_audit_report",
      generated_at: new Date().toISOString(),
      public_claim:
        "Runtime release status for the currently served Agent Economy surface. This is not an external audit report and does not open mainnet readiness.",
      release: {
        site_repo: "https://github.com/bez111/ergo_v0",
        site_commit: commit,
        site_commit_short: commit?.slice(0, 12) ?? null,
        git_ref: nullableEnv("VERCEL_GIT_COMMIT_REF"),
        vercel_env: nullableEnv("VERCEL_ENV"),
        vercel_url: vercelUrl(),
        production_url: "https://www.ergoblockchain.org",
      },
      mainnet_gate: {
        status: agentEconomyMainnetGate.status,
        completed: completed.length,
        pending: pending.length,
        mainnet_ready: false,
      },
      evidence: {
        schema: "https://www.ergoblockchain.org/agent-economy/current-release.schema.v0.json",
        release_watchlist: "https://www.ergoblockchain.org/agent-economy/release-watchlist.v0.json",
        release_attestation_2026_05_23:
          "https://www.ergoblockchain.org/agent-economy/release-attestation-2026-05-23.v0.json",
        mainnet_gate: "https://www.ergoblockchain.org/api/agent-economy/mainnet-gate",
      },
      limitations: [
        "This endpoint reports the runtime release context for the currently served deployment.",
        "It is not a signed external audit report.",
        "It does not replace pinned release attestation artifacts.",
        "Mainnet remains blocked until external review and audit-bound mainnet script identity exist.",
      ],
    },
    {
      headers: {
        "cache-control": "no-store",
        Link: '</agent-economy/current-release.schema.v0.json>; rel="describedby"; type="application/schema+json"',
      },
    },
  )
}
