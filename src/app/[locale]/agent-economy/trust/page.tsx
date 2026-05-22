import type { Metadata } from "next"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  FileJson2,
  Fingerprint,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyMainnetGate } from "@/lib/agent-economy/mainnet-gate"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Trust Gate | Ergo",
    description:
      "Inspect the public evidence pack for Ergo's agent-economy testnet proof, mainnet gate, audit blockers, script identity manifests, receipts, and signed conformance artifacts.",
    alternates: getAlternates("/agent-economy/trust", locale),
    openGraph: {
      title: "Ergo Agent Economy Trust Gate",
      description:
        "A public trust surface for Sage receipts, signed Accord evidence, testnet identity, signer ops, and the audit-gated mainnet path.",
      url: getCanonicalUrl("/agent-economy/trust", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy trust gate",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Trust Gate",
      description:
        "Inspect the evidence pack and the remaining audit blockers before any mainnet claims.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

const artifactEntries = Object.entries(agentEconomyMainnetGate.artifacts)

const completedBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state === "open")
const pendingBlockers = agentEconomyMainnetGate.blockers.filter((blocker) => blocker.state !== "open")

export default function AgentEconomyTrustPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Trust Gate", href: "/agent-economy/trust" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5">
                  <LockKeyhole className="h-3.5 w-3.5 text-red-200" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-red-100">
                    Mainnet gate closed
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Trust evidence before mainnet language.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This page is the human-readable view of the same gate exposed
                  by the API. It separates live testnet proof from production
                  claims, and keeps every receipt, evidence file, runbook, and
                  pending audit artifact inspectable from one place.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/api/agent-economy/mainnet-gate"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Inspect JSON gate
                    <FileJson2 className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/review-pack"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Review pack
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/live"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Live Hub
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-red-500/25 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Public posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-red-50">
                      {agentEconomyMainnetGate.status}
                    </div>
                  </div>
                  <AlertTriangle className="h-9 w-9 text-red-200" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-red-50/75">
                  {agentEconomyMainnetGate.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <GateStat label="Open proofs" value={String(completedBlockers.length)} />
                  <GateStat label="Pending gates" value={String(pendingBlockers.length)} />
                  <GateStat label="Reviewed" value={agentEconomyMainnetGate.last_reviewed} />
                  <GateStat label="Mainnet" value="blocked" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {agentEconomyMainnetGate.blockers.map((blocker) => (
                <div
                  key={blocker.id}
                  className={`rounded-lg border p-5 ${
                    blocker.state === "open"
                      ? "border-orange-500/25 bg-orange-500/[0.055]"
                      : "border-red-500/25 bg-red-500/[0.045]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035]">
                      {blocker.state === "open" ? (
                        <CheckCircle2 className="h-5 w-5 text-orange-300" />
                      ) : (
                        <Fingerprint className="h-5 w-5 text-red-200" />
                      )}
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-300">
                      {blocker.state}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-white">{blocker.label}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{blocker.detail}</p>
                  <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    Owner: {blocker.owner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                  Evidence pack
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  One public list of artifacts.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
                The API is the source of truth; this page only renders the same
                artifacts for human review. Empty rows are intentionally visible
                so nobody mistakes the testnet proof for audited mainnet status.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/70">
              {artifactEntries.map(([key, value], index) => (
                <ArtifactRow key={key} name={formatArtifactName(key)} href={value} first={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <TrustStep
              icon={BadgeCheck}
              title="Testnet proof"
              body="Sage has full receipt storage, signed Accord L1 evidence, signer ops evidence, MCP DNS, and an observed testnet script identity."
            />
            <TrustStep
              icon={ShieldCheck}
              title="Audit binding"
              body="The remaining work is to bind source, compiler versions, script hashes, addresses, limits, and deployment identity to an external review."
            />
            <TrustStep
              icon={LockKeyhole}
              title="Mainnet unlock"
              body="Only an external review artifact plus an audit-bound mainnet script identity can open the mainnet gate."
            />
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function GateStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-sm font-semibold text-red-50">{value}</div>
    </div>
  )
}

function ArtifactRow({ name, href, first }: { name: string; href: string | null; first: boolean }) {
  const enabled = typeof href === "string" && href.length > 0
  const internalHref = enabled && href.startsWith(BASE_URL)
    ? href.slice(BASE_URL.length) || "/"
    : null
  const rowClass = `${first ? "" : "border-t border-white/10"} grid gap-3 px-4 py-4 sm:grid-cols-[260px_minmax(0,1fr)_120px] sm:items-center`

  return (
    <div className={rowClass}>
      <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">{name}</div>
      <div className="min-w-0 truncate text-sm text-neutral-300">
        {enabled ? href : "not published yet"}
      </div>
      {enabled && internalHref ? (
        <Link
          href={internalHref}
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300 hover:text-orange-200"
        >
          Open
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      ) : enabled ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-orange-300 hover:text-orange-200"
        >
          Open
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">Pending</span>
      )}
    </div>
  )
}

function TrustStep({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof BadgeCheck
  title: string
  body: string
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
      <Icon className="h-6 w-6 text-orange-300" />
      <h2 className="mt-5 text-xl font-bold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function formatArtifactName(key: string) {
  return key.replace(/_/g, " ")
}
