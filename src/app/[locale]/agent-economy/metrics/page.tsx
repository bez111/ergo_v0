import type { Metadata } from "next"
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle,
  Database,
  ExternalLink,
  FileCheck,
  GitBranch,
  Landmark,
  Network,
  ShieldCheck,
  TimerReset,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import {
  ERGO_EXPLORER_API,
  getErgoWatchSnapshot,
} from "@/lib/ergo-watch/snapshot"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

export const revalidate = 300
export const dynamic = "force-dynamic"

const metricIcons = {
  "circulating-supply": Landmark,
  "max-supply": ShieldCheck,
  "emission-remaining": TimerReset,
  "block-height": Network,
  "latest-block": Database,
  epoch: TimerReset,
  "epoch-blocks-left": TimerReset,
  "avg-block-time": Activity,
  "estimated-hashrate": Activity,
  "explorer-hashrate": Activity,
  difficulty: BarChart3,
  "miner-reward": Landmark,
  "latest-miner": Activity,
  "sample-transactions": BarChart3,
  "block-size": Database,
  "max-block-size": Network,
  "min-value-per-byte": ShieldCheck,
  "storage-fee-factor": BarChart3,
} as const

const overlayMetrics = [
  {
    title: "Accord Agreements",
    status: "Prototype",
    description: "Count signed work agreements, requested tools, price terms and expiry windows.",
    icon: FileCheck,
  },
  {
    title: "Verification Receipts",
    status: "Prototype",
    description: "Track accepted, rejected and disputed work outcomes without treating demos as production.",
    icon: ShieldCheck,
  },
  {
    title: "Settlement Receipts",
    status: "Prototype",
    description: "Connect verified work to mock, testnet or audited future settlement references.",
    icon: CheckCircle,
  },
  {
    title: "Agent Credit Notes",
    status: "Research",
    description: "Measure note issuance, redemption, expiry and failed acceptance predicates.",
    icon: GitBranch,
  },
  {
    title: "Wallet Policy Events",
    status: "Draft",
    description: "Surface spending caps, recipient allowlists, blocked spends and human approval thresholds.",
    icon: TimerReset,
  },
]

function formatNumber(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US").format(value)
}

function formatPercent(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value)}%`
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(new Date(value))
}

function metricStateLabel(state: "live" | "derived" | "unavailable") {
  if (state === "live") return "Live"
  if (state === "derived") return "Derived"
  return "Unavailable"
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Metrics | Direct Ergo Chain Data + Accord Overlay",
    description:
      "A testnet-first metrics layer for the Ergo Agent Economy: direct public Ergo Explorer API data plus future Accord agreement, verification, settlement and agent-credit metrics.",
    alternates: getAlternates("/agent-economy/metrics", locale),
    openGraph: {
      title: "Agent Economy Metrics on Ergo",
      description:
        "Direct Ergo chain data plus agreement, verification, settlement and agent-credit metrics for the agent economy.",
      url: getCanonicalUrl("/agent-economy/metrics", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.png`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy metrics layer",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Economy Metrics on Ergo",
      description:
        "Direct Ergo chain visibility plus a testnet-first Accord metrics overlay.",
      images: [`${BASE_URL}/og/agent-economy.png`],
    },
  }
}

export default async function AgentEconomyMetricsPage() {
  const snapshot = await getErgoWatchSnapshot()

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Metrics", href: "/agent-economy/metrics" },
              ]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Bot className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Agent Economy Metrics
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight mb-6 text-white"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1,
                }}
              >
                Direct Ergo chain data.
                <br />
                <span className="text-orange-400">Agent metrics overlay.</span>
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.5,
                  maxWidth: "62ch",
                }}
              >
                This is the new-design surface for ergowatch.ergoblockchain.org. It reads
                public Ergo Explorer API data, computes a cached network snapshot, and adds the
                missing agent-economy layer: agreements, verification receipts, settlement receipts,
                policy events and bounded credit instruments.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/api/ergo-watch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                >
                  <span>Open JSON snapshot</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`${ERGO_EXPLORER_API}/info`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                >
                  <span>Open chain API</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/agent-economy"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-neutral-200 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-white/15 hover:border-white/30 transition-all text-sm"
                >
                  <span>Back to agent economy</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                Cached chain snapshot
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.1,
                }}
              >
                Network state, mining sample and protocol parameters.
              </h2>
              <p className="text-neutral-400 mt-4 max-w-3xl leading-relaxed">
                Values are read server-side from public Ergo Explorer API endpoints and cached for
                five minutes. If a source is unreachable, the metric shows Unavailable instead of
                inventing a number.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-orange-300">
                Sources reachable: {snapshot.sourceStatus.reachable}/{snapshot.sourceStatus.total} ·
                Sample: {formatNumber(snapshot.sampleSize)} blocks · Updated:{" "}
                {formatDateTime(snapshot.generatedAt)}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {snapshot.metrics.map((metric) => {
                const Icon =
                  metricIcons[metric.id as keyof typeof metricIcons] ?? BarChart3

                return (
                  <Card
                    key={metric.id}
                    className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/35 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base">{metric.title}</h3>
                          <p className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80">
                            {metricStateLabel(metric.state)}
                          </p>
                        </div>
                      </div>
                      <div className="mb-3 text-3xl font-extrabold tracking-tight text-white">
                        {metric.value}
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">{metric.description}</p>
                      <a
                        href={metric.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-orange-500/70 hover:text-orange-400 transition-colors text-xs font-mono"
                      >
                        <span>{metric.source}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                        Mining distribution
                      </p>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        Last {formatNumber(snapshot.sampleSize)} blocks by miner.
                      </h2>
                    </div>
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                      <Activity className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    {snapshot.miningDistribution.length ? (
                      snapshot.miningDistribution.map((miner) => (
                        <div key={miner.id}>
                          <div className="mb-2 flex items-center justify-between gap-4">
                            <div className="min-w-0">
                              <p className="truncate font-bold text-white">{miner.label}</p>
                              <p className="truncate font-mono text-xs text-neutral-500">
                                {miner.address ?? "Unknown address"}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-mono text-sm text-orange-300">
                                {formatPercent(miner.share)}
                              </p>
                              <p className="font-mono text-xs text-neutral-500">
                                {formatNumber(miner.blocks)} blocks
                              </p>
                            </div>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/8">
                            <div
                              className="h-full rounded-full bg-orange-500"
                              style={{ width: `${Math.min(100, Math.max(1, miner.share))}%` }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-neutral-400">Mining distribution is unavailable right now.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-5">
                {[
                  {
                    title: "Average block time",
                    value: snapshot.chain.avgBlockTimeSeconds
                      ? `${formatNumber(snapshot.chain.avgBlockTimeSeconds)}s`
                      : "Unavailable",
                    body: `Computed from the latest ${formatNumber(snapshot.sampleSize)} blocks.`,
                  },
                  {
                    title: "Top miner share",
                    value: formatPercent(snapshot.chain.topMinerShare),
                    body: "Share of sampled blocks mined by the leading observed miner.",
                  },
                  {
                    title: "Snapshot API",
                    value: "/api/ergo-watch",
                    body: `Server-side cache: ${formatNumber(snapshot.cacheSeconds)} seconds.`,
                  },
                ].map((item) => (
                  <Card key={item.title} className="bg-black/80 border border-white/8 rounded-3xl">
                    <CardContent className="p-7">
                      <p className="font-mono text-xs uppercase tracking-wider text-orange-400 mb-3">
                        {item.title}
                      </p>
                      <div className="text-3xl font-extrabold text-white mb-3">{item.value}</div>
                      <p className="text-neutral-400 leading-relaxed">{item.body}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-stretch">
              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                    Emission / Supply
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    Circulating ERG from Explorer API.
                  </h2>
                  <p className="text-neutral-400 leading-relaxed mb-7">
                    Supply is read from the public Explorer v0 info endpoint. Remaining emission is
                    derived from the fixed ERG supply cap and shown as a transparent calculation, not
                    as an invented live metric.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <div className="mb-2 flex justify-between gap-4 font-mono text-xs uppercase tracking-wider">
                        <span className="text-neutral-500">Circulating</span>
                        <span className="text-orange-300">
                          {formatPercent(snapshot.emission.circulatingPercent)}
                        </span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-orange-500"
                          style={{
                            width: `${Math.min(100, Math.max(0, snapshot.emission.circulatingPercent ?? 0))}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {[
                        {
                          label: "Reported circulating",
                          value:
                            snapshot.emission.circulatingSupplyErg === null
                              ? "Unavailable"
                              : `${formatNumber(Math.round(snapshot.emission.circulatingSupplyErg))} ERG`,
                        },
                        {
                          label: "Fixed max supply",
                          value: `${formatNumber(snapshot.emission.maxSupplyErg)} ERG`,
                        },
                        {
                          label: "Remaining emission",
                          value:
                            snapshot.emission.remainingEmissionErg === null
                              ? "Unavailable"
                              : `${formatNumber(Math.round(snapshot.emission.remainingEmissionErg))} ERG`,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                        >
                          <span className="text-sm text-neutral-400">{item.label}</span>
                          <span className="font-mono text-sm text-white">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                        Runtime-safe
                      </p>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        Chain calls happen at runtime, not during build.
                      </h2>
                    </div>
                    <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                      <TimerReset className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {snapshot.sources.map((source) => (
                      <a
                        key={source.id}
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-orange-500/30"
                      >
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="font-mono text-xs uppercase tracking-wider text-orange-300">
                            {source.ok ? "Reachable" : "Unavailable"}
                          </span>
                          <ExternalLink className="h-3.5 w-3.5 text-orange-400" />
                        </div>
                        <p className="font-bold text-white">{source.label}</p>
                      </a>
                    ))}
                  </div>

                  <p className="mt-6 text-neutral-400 leading-relaxed">
                    The page and JSON endpoint are dynamic/cached, so deployment does not wait on
                    external chain APIs. Visitors get a five-minute snapshot; failed sources degrade
                    into explicit unavailable states.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                Agent overlay
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.1,
                }}
              >
                What ordinary chain analytics do not count yet.
              </h2>
              <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
                These are the metrics that make agent commerce different from ordinary chain analytics.
                They remain prototype or draft until Accord demos and audited contracts produce reliable,
                signed event streams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {overlayMetrics.map((metric) => (
                <Card
                  key={metric.title}
                  className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/35 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center">
                        <metric.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">{metric.title}</h3>
                        <span className="mt-1 inline-flex rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-orange-300">
                          {metric.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-5">
              {[
                {
                  label: "1",
                  title: "Chain state",
                  body: "Blocks, miner rewards, difficulty and protocol parameters come directly from public Ergo chain APIs.",
                },
                {
                  label: "2",
                  title: "Work state",
                  body: "Accord records what was promised, how it was verified, and how a settlement reference was produced.",
                },
                {
                  label: "3",
                  title: "Credit state",
                  body: "Notes, reserves, trackers and wallet policy events explain how agents coordinate future work before final settlement.",
                },
              ].map((step) => (
                <Card key={step.label} className="bg-black/80 border border-white/8 rounded-3xl">
                  <CardContent className="p-7">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-500/25 bg-orange-500/10 font-mono text-sm font-bold text-orange-300">
                        {step.label}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{step.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
