import type { Metadata } from "next"
import {
  Activity,
  BarChart3,
  Bot,
  Database,
  ExternalLink,
  Landmark,
  Network,
  ShieldCheck,
  TimerReset,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import {
  ERGO_WATCH_FETCH_TIMEOUT_MS,
  getErgoWatchSnapshot,
} from "@/lib/ergo-watch/snapshot"
import type {
  ErgoWatchHealthStatus,
  ErgoWatchSeriesPoint,
  ErgoWatchSeriesStats,
} from "@/lib/ergo-watch/types"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { ErgoWatchLookupPanel } from "./_components/lookup-panel"

const BASE_URL = "https://www.ergoblockchain.org"

export const revalidate = 300
export const dynamic = "force-dynamic"

function formatNumber(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US").format(value)
}

function formatPercent(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value)}%`
}

function formatDecimal(value: number | null | undefined, maximumFractionDigits = 2) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value)
}

function formatUsd(value: number | null | undefined, maximumFractionDigits = 0) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(value)
}

function formatErgValue(value: number | null | undefined, maximumFractionDigits = 2) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return `${formatDecimal(value, maximumFractionDigits)} ERG`
}

function formatBytes(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  if (value < 1024) return `${formatNumber(value)} B`
  if (value < 1024 * 1024) return `${formatDecimal(value / 1024, 1)} KB`
  return `${formatDecimal(value / (1024 * 1024), 2)} MB`
}

function shortHash(value: string | null | undefined) {
  if (!value) return "Unavailable"
  if (value.length <= 18) return value
  return `${value.slice(0, 10)}...${value.slice(-6)}`
}

function formatSeriesValue(value: number | null, mode: "seconds" | "integer" | "compact") {
  if (value === null) return "Unavailable"
  if (mode === "seconds") return `${formatNumber(value)}s`
  if (mode === "compact") {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(value)
  }

  return formatNumber(value)
}

function formatChangePercent(value: number | null) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  const sign = value > 0 ? "+" : ""
  return `${sign}${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value)}%`
}

function healthStatusLabel(status: ErgoWatchHealthStatus) {
  if (status === "ok") return "OK"
  if (status === "watch") return "Watch"
  if (status === "stale") return "Stale"
  return "Unavailable"
}

function healthStatusClass(status: ErgoWatchHealthStatus) {
  if (status === "ok") return "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
  if (status === "watch") return "border-orange-500/25 bg-orange-500/10 text-orange-300"
  if (status === "stale") return "border-red-500/25 bg-red-500/10 text-red-300"
  return "border-white/10 bg-white/5 text-neutral-400"
}

function trendClass(stats: ErgoWatchSeriesStats) {
  if (stats.direction === "up") return "text-orange-300"
  if (stats.direction === "down") return "text-cyan-300"
  if (stats.direction === "flat") return "text-neutral-300"
  return "text-neutral-500"
}

function TrendIcon({ stats }: { stats: ErgoWatchSeriesStats }) {
  if (stats.direction === "up") return <TrendingUp className="h-4 w-4" />
  if (stats.direction === "down") return <TrendingDown className="h-4 w-4" />
  return <Activity className="h-4 w-4" />
}

function BarSeries({
  points,
  mode,
  heightClassName = "h-48",
}: {
  points: ErgoWatchSeriesPoint[]
  mode: "seconds" | "integer" | "compact"
  heightClassName?: string
}) {
  if (!points.length) {
    return (
      <div
        className={`${heightClassName} flex items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-sm text-neutral-500`}
      >
        Unavailable
      </div>
    )
  }

  const values = points.map((point) => point.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(1, max - min)
  const latest = points[points.length - 1]

  return (
    <div>
      <div
        className={`${heightClassName} mb-4 flex items-end gap-1 rounded-2xl border border-white/8 bg-white/[0.03] p-3`}
      >
        {points.map((point) => {
          const height = 10 + ((point.value - min) / range) * 90

          return (
            <div
              key={`${point.height}-${point.value}`}
              className="flex-1 rounded-t bg-orange-500/75"
              style={{ height: `${height}%` }}
              title={`#${point.height}: ${formatSeriesValue(point.value, mode)}`}
            />
          )
        })}
      </div>
      <div className="flex items-center justify-between gap-4 font-mono text-xs text-neutral-500">
        <span>#{points[0]?.height}</span>
        <span className="text-orange-300">
          Latest: {latest ? formatSeriesValue(latest.value, mode) : "Unavailable"}
        </span>
        <span>#{latest?.height}</span>
      </div>
    </div>
  )
}

function SeriesStatsRow({
  stats,
  mode,
}: {
  stats: ErgoWatchSeriesStats
  mode: "seconds" | "integer" | "compact"
}) {
  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-3">
      {[
        { label: "Average", value: formatSeriesValue(stats.average, mode) },
        {
          label: "Range",
          value:
            stats.min === null || stats.max === null
              ? "Unavailable"
              : `${formatSeriesValue(stats.min, mode)} - ${formatSeriesValue(stats.max, mode)}`,
        },
        { label: "Change", value: formatChangePercent(stats.changePercent), trend: true },
      ].map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 ${item.trend ? trendClass(stats) : ""}`}
        >
          <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
            {item.label}
          </p>
          <p className="flex items-center gap-2 font-mono text-sm text-white">
            {item.trend ? <TrendIcon stats={stats} /> : null}
            {item.value}
          </p>
        </div>
      ))}
    </div>
  )
}

function metricStateClass(state: "live" | "derived" | "unavailable" | "prototype" | "research") {
  if (state === "live") return "border-emerald-500/25 bg-emerald-500/10 text-emerald-300"
  if (state === "derived") return "border-cyan-500/25 bg-cyan-500/10 text-cyan-300"
  if (state === "prototype") return "border-orange-500/25 bg-orange-500/10 text-orange-300"
  if (state === "research") return "border-purple-500/25 bg-purple-500/10 text-purple-300"
  return "border-white/10 bg-white/5 text-neutral-400"
}

function formatSourceTime(value: string | null) {
  if (!value) return "Timestamp unavailable"

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Ergo Watch | Live Ergo Network Metrics",
    description:
      "A runtime-safe Ergo network analytics hub powered by public Ergo Explorer data, with block, mining, emission and future agent-economy metrics.",
    alternates: getAlternates("/ergo-watch", locale),
    openGraph: {
      title: "Ergo Watch",
      description:
        "Live Ergo network metrics, mining distribution, emission progress and agent-economy analytics in the new Ergo design.",
      url: getCanonicalUrl("/ergo-watch", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo Watch metrics dashboard",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Watch",
      description: "Live Ergo network metrics and agent-economy analytics.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
    },
  }
}

export default async function ErgoWatchPage() {
  const snapshot = await getErgoWatchSnapshot()
  const failedHealth = snapshot.health.find(
    (item) => item.status === "stale" || item.status === "unavailable",
  )
  const watchedHealth = snapshot.health.find((item) => item.status === "watch")
  const overallHealthStatus: ErgoWatchHealthStatus = failedHealth
    ? failedHealth.status
    : watchedHealth
      ? "watch"
      : "ok"
  const overallHealthLabel =
    overallHealthStatus === "ok"
      ? "Network sample healthy"
      : overallHealthStatus === "watch"
        ? "Watch active"
        : overallHealthStatus === "stale"
          ? "Chain sample stale"
          : "Data unavailable"

  const headlineStats = [
    {
      label: "Height",
      value: formatNumber(snapshot.chain.height),
      body: `Latest block observed ${snapshot.chain.latestBlockAge}.`,
      icon: Network,
      status: snapshot.chain.height === null ? "unavailable" : "ok",
    },
    {
      label: "Block time",
      value:
        snapshot.chain.avgBlockTimeSeconds === null
          ? "Unavailable"
          : `${formatNumber(snapshot.chain.avgBlockTimeSeconds)}s`,
      body: `Average across ${formatNumber(snapshot.sampleSize)} sampled blocks.`,
      icon: TimerReset,
      status:
        snapshot.chain.avgBlockTimeSeconds === null
          ? "unavailable"
          : snapshot.chain.avgBlockTimeSeconds >= 60 && snapshot.chain.avgBlockTimeSeconds <= 240
            ? "ok"
            : "watch",
    },
    {
      label: "Top miner share",
      value: formatPercent(snapshot.chain.topMinerShare),
      body: "Largest observed miner share in the recent block sample.",
      icon: Activity,
      status:
        snapshot.chain.topMinerShare === null
          ? "unavailable"
          : snapshot.chain.topMinerShare < 40
            ? "ok"
            : "watch",
    },
    {
      label: "Source coverage",
      value: `${snapshot.sourceStatus.reachable}/${snapshot.sourceStatus.total}`,
      body: `Server cache: ${formatNumber(snapshot.cacheSeconds)}s. Fetch timeout: ${formatNumber(ERGO_WATCH_FETCH_TIMEOUT_MS / 1000)}s.`,
      icon: Database,
      status:
        snapshot.sourceStatus.reachable === snapshot.sourceStatus.total
          ? "ok"
          : snapshot.sourceStatus.reachable === 0
            ? "unavailable"
            : "watch",
    },
  ]

  const chartCards = [
    {
      title: "Block time",
      body: "Observed seconds between adjacent recent blocks.",
      points: snapshot.series.blockTimeSeconds,
      stats: snapshot.seriesStats.blockTimeSeconds,
      mode: "seconds" as const,
      icon: TimerReset,
    },
    {
      title: "Transactions per block",
      body: "Transaction count per sampled recent block.",
      points: snapshot.series.transactions,
      stats: snapshot.seriesStats.transactions,
      mode: "integer" as const,
      icon: BarChart3,
    },
    {
      title: "Difficulty",
      body: "Difficulty reported on each sampled block.",
      points: snapshot.series.difficulty,
      stats: snapshot.seriesStats.difficulty,
      mode: "compact" as const,
      icon: ShieldCheck,
    },
  ]
  const sigmaUsd = snapshot.defi.sigmaUsd
  const sigmaUsdCalculations = [
    {
      label: "Reserve",
      value: formatErgValue(sigmaUsd.calculations.ergReserves, 4),
      body: "Bank box value minus the minimum box value.",
    },
    {
      label: "Liabilities",
      value: formatErgValue(sigmaUsd.calculations.liabilitiesErg, 4),
      body: "SigUSD supply priced through the ERG/USD oracle box.",
    },
    {
      label: "Reserve ratio",
      value: formatPercent(sigmaUsd.calculations.reserveRatio),
      body: "ERG reserves divided by AgeUSD liabilities.",
    },
    {
      label: "Equity",
      value: formatErgValue(sigmaUsd.calculations.equityErg, 4),
      body: `${formatUsd(sigmaUsd.calculations.equityUsd, 0)} at the current oracle datapoint.`,
    },
    {
      label: "Oracle price",
      value: formatUsd(sigmaUsd.calculations.oracleErgUsd, 4),
      body:
        sigmaUsd.calculations.oracleNanoErgPerUsd === null
          ? "Oracle register unavailable."
          : `${formatNumber(sigmaUsd.calculations.oracleNanoErgPerUsd)} nanoERG per USD.`,
    },
    {
      label: "SigRSV supply",
      value:
        sigmaUsd.calculations.sigRsvSupply === null
          ? "Unavailable"
          : `${formatNumber(sigmaUsd.calculations.sigRsvSupply)} SigRSV`,
      body: "Circulating reserve token supply from bank R5.",
    },
  ]
  const sigmaUsdFormulaRows = [
    {
      label: "SigUSD supply",
      value: "bank.R4 / 100",
    },
    {
      label: "ERG/USD",
      value: "1,000,000,000 / oracle.R4",
    },
    {
      label: "Liabilities",
      value: "bank.R4 * floor(oracle.R4 / 100) / 1e9",
    },
    {
      label: "Reserve ratio",
      value: "bank ERG reserve / liabilities ERG",
    },
    {
      label: "Equity ratio",
      value: "(bank ERG reserve - liabilities ERG) / liabilities ERG",
    },
  ]
  const watchSections = [
    { href: "#network", label: "Network" },
    { href: "#activity", label: "Activity" },
    { href: "#tokens", label: "Tokens" },
    { href: "#mining", label: "Mining" },
    { href: "#emission", label: "Emission" },
    { href: "#defi", label: "DeFi" },
    { href: "#agent-economy", label: "Agent Economy" },
    { href: "#sources", label: "Sources" },
  ]

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden pt-32 pb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Ecosystem", href: "/ecosystem" },
                { name: "Ergo Watch", href: "/ergo-watch" },
              ]}
              className="mb-10 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <BarChart3 className="h-3.5 w-3.5 text-orange-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-orange-400">
                    Ergo Watch
                  </span>
                </div>

                <h1
                  className="mb-6 font-extrabold tracking-tight text-white"
                  style={{
                    fontSize: "clamp(38px, 6vw, 82px)",
                    lineHeight: 1,
                  }}
                >
                  Network analytics.
                  <br />
                  <span className="text-orange-400">No fake data.</span>
                </h1>

                <p
                  className="mb-8 text-neutral-300"
                  style={{
                    fontSize: "clamp(17px, 2vw, 22px)",
                    lineHeight: 1.5,
                    maxWidth: "62ch",
                  }}
                >
                  A new-design Ergo metrics hub for ergowatch.ergoblockchain.org. It reads
                  public Ergo Explorer data at runtime, caches a safe snapshot, and marks missing
                  sources honestly instead of pretending broken analytics are live.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/api/ergo-watch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-orange-500 bg-orange-500 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-all hover:border-orange-600 hover:bg-orange-600"
                  >
                    <span>Open JSON</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#agent-economy"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/15 bg-transparent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-all hover:border-white/30 hover:bg-white/5"
                  >
                    <Bot className="h-4 w-4" />
                    <span>Agent overlay</span>
                  </a>
                </div>
              </div>

              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7">
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Current sample
                      </p>
                      <h2 className="text-3xl font-extrabold text-white">{overallHealthLabel}</h2>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${healthStatusClass(overallHealthStatus)}`}
                    >
                      {healthStatusLabel(overallHealthStatus)}
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {snapshot.health.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                      >
                        <div>
                          <p className="font-bold text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                            {item.description}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-mono text-sm text-orange-300">{item.value}</p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                            {healthStatusLabel(item.status)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-30 border-y border-white/8 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex min-w-max items-center gap-2 py-3" aria-label="Ergo Watch sections">
              {watchSections.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors hover:border-orange-500/35 hover:bg-orange-500/10 hover:text-orange-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="network" className="scroll-mt-32 pb-20 pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {headlineStats.map((item) => (
                <Card key={item.label} className="bg-black/80 border border-white/8 rounded-3xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <item.icon className="h-5 w-5 text-orange-400" />
                      </div>
                      <span
                        className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${healthStatusClass(item.status as ErgoWatchHealthStatus)}`}
                      >
                        {healthStatusLabel(item.status as ErgoWatchHealthStatus)}
                      </span>
                    </div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
                      {item.label}
                    </p>
                    <div className="mb-3 text-3xl font-extrabold text-white">{item.value}</div>
                    <p className="text-sm leading-relaxed text-neutral-400">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                  Live charts
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 46px)",
                    lineHeight: 1.1,
                  }}
                >
                  Last blocks as readable signals.
                </h2>
              </div>
              <p className="max-w-xl text-neutral-400">
                These charts are derived from the latest Explorer block sample. Full historical
                indexing comes later; this page avoids fake history.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {chartCards.map((chart) => (
                <Card key={chart.title} className="bg-black/80 border border-white/8 rounded-3xl">
                  <CardContent className="p-7">
                    <div className="mb-6 flex items-start justify-between gap-5">
                      <div>
                        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-orange-400">
                          {chart.title}
                        </p>
                        <p className="text-sm leading-relaxed text-neutral-400">{chart.body}</p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                        <chart.icon className="h-5 w-5 text-orange-400" />
                      </div>
                    </div>
                    <BarSeries points={chart.points} mode={chart.mode} />
                    <SeriesStatsRow stats={chart.stats} mode={chart.mode} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="activity" className="scroll-mt-32 py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                  Runtime activity
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 46px)",
                    lineHeight: 1.1,
                  }}
                >
                  Mempool and token signals.
                </h2>
              </div>
              <p className="leading-relaxed text-neutral-400">
                This layer uses live public Explorer endpoints. If mempool or asset data is
                unavailable, the dashboard marks it as unavailable instead of filling the gap with
                stale historical guesses.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Unconfirmed transactions
                      </p>
                      <h3 className="text-2xl font-extrabold text-white">
                        {snapshot.activity.mempoolTransactions === null
                          ? "Mempool unavailable"
                          : `${formatNumber(snapshot.activity.mempoolTransactions)} in mempool`}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                        Sampled from Explorer v0 unconfirmed transaction data.
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${metricStateClass(snapshot.activity.status === "live" ? "live" : "unavailable")}`}
                    >
                      {snapshot.activity.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {snapshot.activity.unconfirmed.length ? (
                      snapshot.activity.unconfirmed.map((transaction) => (
                        <a
                          key={transaction.id}
                          href={`https://api.ergoplatform.com/api/v0/transactions/unconfirmed/${transaction.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-orange-500/30"
                        >
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <p className="font-mono text-sm text-white">{shortHash(transaction.id)}</p>
                            <ExternalLink className="h-3.5 w-3.5 text-orange-400" />
                          </div>
                          <div className="grid gap-2 font-mono text-xs text-neutral-500 sm:grid-cols-4">
                            <span>{transaction.age}</span>
                            <span>{formatErgValue(transaction.valueErg, 4)}</span>
                            <span>
                              {formatNumber(transaction.inputs)} in / {formatNumber(transaction.outputs)} out
                            </span>
                            <span>
                              {formatNumber(transaction.assetCount)} assets / {formatBytes(transaction.sizeBytes)}
                            </span>
                          </div>
                        </a>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm leading-relaxed text-neutral-400">
                        No unconfirmed transaction sample is reachable right now.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card id="tokens" className="scroll-mt-32 bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Token registry
                      </p>
                      <h3 className="text-2xl font-extrabold text-white">
                        {snapshot.assets.total === null
                          ? "Assets unavailable"
                          : `${formatNumber(snapshot.assets.total)} assets indexed`}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                        Latest asset records exposed by Explorer API. This is a registry signal, not
                        a popularity ranking.
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${metricStateClass(snapshot.assets.status === "live" ? "live" : "unavailable")}`}
                    >
                      {snapshot.assets.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {snapshot.assets.latest.length ? (
                      snapshot.assets.latest.map((asset) => (
                        <a
                          key={asset.id}
                          href={`https://api.ergoplatform.com/api/v1/boxes/unspent/byTokenId/${asset.id}?limit=20`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors hover:border-orange-500/30"
                        >
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="truncate font-bold text-white">{asset.name}</p>
                              <p className="truncate font-mono text-xs text-neutral-500">
                                {shortHash(asset.id)}
                              </p>
                            </div>
                            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                          </div>
                          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                            <span>{asset.type}</span>
                            <span>Emission {formatNumber(asset.emissionAmount)}</span>
                            <span>Decimals {formatNumber(asset.decimals)}</span>
                          </div>
                        </a>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm leading-relaxed text-neutral-400">
                        Asset registry data is unavailable right now.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <ErgoWatchLookupPanel />
            </div>
          </div>
        </section>

        <section id="mining" className="scroll-mt-32 py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card id="emission" className="scroll-mt-32 bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Mining distribution
                      </p>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        Last {formatNumber(snapshot.sampleSize)} blocks by miner.
                      </h2>
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 sm:flex">
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

              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                    Emission / Supply
                  </p>
                  <h2 className="mb-4 text-2xl md:text-3xl font-extrabold text-white">
                    Reported circulating ERG.
                  </h2>
                  <p className="mb-7 leading-relaxed text-neutral-400">
                    Supply is read from public Explorer data. Remaining emission is derived from
                    Ergo&apos;s fixed max supply.
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="defi" className="scroll-mt-32 py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                  DeFi / SigmaUSD
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 46px)",
                    lineHeight: 1.1,
                  }}
                >
                  Stablecoin state without fake certainty.
                </h2>
              </div>
              <p className="leading-relaxed text-neutral-400">
                SigmaUSD data is shown only when a source is reachable and labeled. Bank-box
                registers and the ERG/USD oracle box are read from Ergo Explorer; secondary data
                remains clearly marked when used as comparison or fallback.
              </p>
            </div>

            <Card className="bg-black/80 border border-white/8 rounded-3xl">
              <CardContent className="p-7 md:p-8">
                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                      <Landmark className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">SigmaUSD state</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">
                        {snapshot.defi.sigmaUsd.note}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                      Snapshot time
                    </p>
                    <p className="mt-1 font-mono text-xs text-orange-300">
                      {formatSourceTime(snapshot.defi.sigmaUsd.updatedAt)}
                    </p>
                    {snapshot.defi.sigmaUsd.bankBox.height ? (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Bank box height #{formatNumber(snapshot.defi.sigmaUsd.bankBox.height)}
                      </p>
                    ) : null}
                    {snapshot.defi.sigmaUsd.oracleBox.height ? (
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Oracle height #{formatNumber(snapshot.defi.sigmaUsd.oracleBox.height)}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {snapshot.defi.sigmaUsd.metrics.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-orange-500/30"
                    >
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span
                          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${metricStateClass(item.state)}`}
                        >
                          {item.state}
                        </span>
                        <ExternalLink className="h-3.5 w-3.5 text-orange-400" />
                      </div>
                      <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                        {item.title}
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-white">{item.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                        {item.description}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {sigmaUsdCalculations.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                    >
                      <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-white">{item.value}</p>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-300">
                      Calculation policy
                    </p>
                    <h4 className="text-xl font-extrabold text-white">No inferred reserves.</h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                      SigmaUSD reserve, liability and ratio values are shown only when the bank box
                      and ERG/USD oracle box are reachable. DefiLlama remains a labeled secondary
                      comparison source, not the authority for the on-chain ratios.
                    </p>
                    <a
                      href="/api/ergo-watch/sigmausd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-black/30 px-4 py-2 font-mono text-xs uppercase tracking-wider text-orange-300 transition-colors hover:bg-orange-500/15"
                    >
                      Open SigmaUSD JSON
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-orange-400">
                      How it is calculated
                    </p>
                    <div className="grid gap-3">
                      {sigmaUsdFormulaRows.map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-2 rounded-xl border border-white/8 bg-black/30 p-3 sm:grid-cols-[0.35fr_0.65fr] sm:items-center"
                        >
                          <p className="font-bold text-white">{item.label}</p>
                          <p className="overflow-x-auto font-mono text-xs text-neutral-400">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="agent-economy" className="scroll-mt-32 py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <Card className="bg-black/80 border border-white/8 rounded-3xl">
                <CardContent className="p-7 md:p-8">
                  <div className="mb-7 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                      <Bot className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Agent Economy
                      </p>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                        Prototype metrics, clearly labeled.
                      </h2>
                    </div>
                  </div>
                  <p className="leading-relaxed text-neutral-400">{snapshot.agentEconomy.note}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Prototype events
                      </p>
                      <p className="mt-1 font-mono text-sm text-orange-300">
                        {formatNumber(snapshot.agentEconomy.eventCount)}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                        Latest event
                      </p>
                      <p className="mt-1 font-mono text-sm text-orange-300">
                        {formatSourceTime(snapshot.agentEconomy.latestEventAt)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/ergo-watch/agents"
                      className="inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-orange-300 transition-colors hover:bg-orange-500/15"
                    >
                      Agent registry →
                    </Link>
                    <Link
                      href="/demos/x402-accord-gateway"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors hover:border-orange-500/35 hover:text-orange-300"
                    >
                      x402 gateway demo
                    </Link>
                    <Link
                      href="/demos/agent-credit-note"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors hover:border-orange-500/35 hover:text-orange-300"
                    >
                      Credit Note demo
                    </Link>
                    <a
                      href="/api/agent-economy/events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-neutral-300 transition-colors hover:border-orange-500/35 hover:text-orange-300"
                    >
                      Event JSON
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                {snapshot.agentEconomy.metrics.map((item) => (
                  <Card key={item.id} className="bg-black/80 border border-white/8 rounded-3xl">
                    <CardContent className="p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <span
                          className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${metricStateClass(item.state)}`}
                        >
                          {item.value}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-neutral-400">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sources" className="scroll-mt-32 py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-black/80 border border-white/8 rounded-3xl">
              <CardContent className="grid gap-6 p-7 md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
                    Source policy
                  </p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    Runtime data, explicit degradation.
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
