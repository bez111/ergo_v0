import type { Metadata } from "next"
import type { ReactNode } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  ExternalLink,
  FileJson2,
  LockKeyhole,
  Route,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { agentEconomyRoadmap, type AgentEconomyRoadmapPhase } from "@/lib/agent-economy/roadmap"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const phaseCopy: Record<AgentEconomyRoadmapPhase, { label: string; badge: string; className: string }> = {
  live: {
    label: "Live now",
    badge: "testnet proof",
    className: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  },
  build_next: {
    label: "Build next",
    badge: "repo work",
    className: "border-orange-400/35 bg-orange-500/10 text-orange-100",
  },
  trust_gated: {
    label: "Trust gated",
    badge: "external",
    className: "border-red-400/35 bg-red-500/10 text-red-100",
  },
  later: {
    label: "Later",
    badge: "strategy",
    className: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  },
}

const phaseOrder: AgentEconomyRoadmapPhase[] = ["live", "build_next", "trust_gated", "later"]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Roadmap | Ergo",
    description:
      "A strategic roadmap for Ergo's autonomous work clearing and proof surface: what is live now, what is being built next, and what remains audit-gated before mainnet.",
    alternates: getAlternates("/agent-economy/roadmap", locale),
    openGraph: {
      title: "Ergo Agent Economy Roadmap",
      description:
        "The public roadmap for autonomous work clearing on Ergo: live testnet proof, receipt bundles, developer surfaces, widget work, wallet-agent references, and mainnet gates.",
      url: getCanonicalUrl("/agent-economy/roadmap", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy roadmap",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Agent Economy Roadmap",
      description:
        "Live proof now, receipt-first developer surfaces next, and a closed mainnet gate until review artifacts exist.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
    other: {
      "ai-content-type": "agent-economy-roadmap",
      "ai-topic": "Ergo Agent Economy roadmap, live proof surface, mainnet gate, developer onboarding",
    },
  }
}

export default function AgentEconomyRoadmapPage() {
  const roadmap = agentEconomyRoadmap
  const liveCount = roadmap.phases.filter((phase) => phase.phase === "live").length
  const nextCount = roadmap.phases.filter((phase) => phase.phase === "build_next").length
  const gatedCount = roadmap.phases.filter((phase) => phase.phase === "trust_gated").length

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Roadmap", href: "/agent-economy/roadmap" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <Compass className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Strategic roadmap
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  The site is becoming a public proof terminal for autonomous work.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The roadmap is deliberately evidence-first: live testnet
                  proof, full receipt bundles, developer entrypoints,
                  wallet-agent boundaries, and a closed mainnet gate until
                  external review artifacts exist.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <RoadmapLink
                    href="/api/agent-economy/roadmap"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    JSON roadmap
                    <FileJson2 className="h-4 w-4" />
                  </RoadmapLink>
                  <RoadmapLink
                    href="/agent-economy/proofs"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Proof Explorer
                    <ArrowRight className="h-4 w-4" />
                  </RoadmapLink>
                  <RoadmapLink
                    href="/agent-economy/roadmap.schema.v0.json"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    JSON schema
                    <FileJson2 className="h-4 w-4" />
                  </RoadmapLink>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Public posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {roadmap.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {roadmap.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <Metric label="Live" value={String(liveCount)} />
                  <Metric label="Next" value={String(nextCount)} />
                  <Metric label="Gated" value={String(gatedCount)} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="North star"
              title="One public surface for claims, proofs, and gates."
              body={roadmap.north_star}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {roadmap.product_principles.map((principle) => (
                <div key={principle} className="rounded-lg border border-white/10 bg-black/70 p-5">
                  <CheckCircle2 className="h-5 w-5 text-orange-300" />
                  <p className="mt-4 text-sm leading-relaxed text-neutral-300">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Roadmap"
              title="Live, next, gated, later."
              body="Each lane links to public evidence instead of asking readers to trust a roadmap claim."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-4">
              {phaseOrder.map((phase) => {
                const copy = phaseCopy[phase]
                const items = roadmap.phases.filter((item) => item.phase === phase)

                return (
                  <div key={phase} className="min-w-0">
                    <div className={`rounded-lg border px-4 py-3 ${copy.className}`}>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-80">
                        {copy.badge}
                      </div>
                      <h2 className="mt-1 text-lg font-semibold text-white">{copy.label}</h2>
                    </div>
                    <div className="mt-4 space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="rounded-lg border border-white/10 bg-black/70 p-5">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.summary}</p>
                          <div className="mt-5 space-y-2">
                            {item.proof_links.slice(0, 3).map((href) => (
                              <RoadmapLink
                                key={href}
                                href={href}
                                className="flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-300 transition hover:border-orange-500/35 hover:text-white"
                              >
                                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                                <span className="truncate">{shortUrl(href)}</span>
                              </RoadmapLink>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Paths"
              title="The strategic map is also machine-readable."
              body="These paths are the stable entrypoints for builders, agents, and reviewers."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Object.entries(roadmap.primary_paths).map(([label, href]) => (
                <RoadmapLink
                  key={label}
                  href={href}
                  className="group rounded-lg border border-white/10 bg-black/70 p-5 transition hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange-500/25 bg-orange-500/10">
                      <Route className="h-5 w-5 text-orange-300" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold capitalize text-white">{label.replace(/_/g, " ")}</h3>
                  <p className="mt-2 truncate font-mono text-xs text-neutral-500">{shortUrl(href)}</p>
                </RoadmapLink>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Next actions"
              title="What moves the site to the next level."
              body="Repo work can keep moving locally. Trust gates require external review artifacts before public posture changes."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {roadmap.next_actions.map((action) => (
                <div key={action.id} className="rounded-lg border border-white/10 bg-black/70 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
                        action.blocked_by_external
                          ? "border-red-400/35 bg-red-500/10 text-red-100"
                          : "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                      }`}
                    >
                      {action.blocked_by_external ? "external gate" : "repo work"}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      owner: {action.owner}
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">{action.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/70 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-red-200" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-red-100">
                  Mainnet gate
                </span>
              </div>
              <h2 className="mt-5 max-w-3xl text-3xl font-bold text-white md:text-4xl">
                Still closed by design.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-300">
                The current public state is stronger because it refuses to blur
                testnet proof with production readiness. The remaining blockers
                are explicit and externally gated.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/80 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">Status</span>
                <span className="rounded-full border border-red-400/35 bg-red-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-red-100">
                  {roadmap.mainnet_gate.status}
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {roadmap.mainnet_gate.pending_blockers.map((blocker) => (
                  <div key={blocker.id} className="border-t border-white/10 pt-4">
                    <div className="text-sm font-semibold text-white">{blocker.label}</div>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-400">{blocker.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">{eyebrow}</div>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  )
}

function RoadmapLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  const external = href.startsWith("http")
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function shortUrl(href: string) {
  return href.replace("https://www.ergoblockchain.org", "").replace("https://agents.ergoblockchain.org", "agents:")
}
