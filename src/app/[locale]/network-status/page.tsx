import type { Metadata } from "next"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { networkMetrics } from "@/lib/network-metrics"
import { Activity, BarChart3, Coins, Clock, Server, Zap, ExternalLink } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Ergo Network Status — Live Hashrate, Block Time, Supply",
    description: "Live Ergo blockchain metrics: hashrate, average block time, ERG supply, transactions per day, active nodes. With sources, methodology, and links to the explorer.",
    alternates: getAlternates("/network-status", locale),
    openGraph: {
      type: "website",
      url: getCanonicalUrl("/network-status", locale),
      siteName: "Ergo Platform",
      title: "Ergo Network Status — Live Metrics",
      description: "Hashrate, block time, supply, transactions per day. Sourced from the Ergo explorer with refresh dates.",
      locale: getOgLocale(locale),
    },
    robots: { index: true, follow: true },
  }
}

const EXPLORER = "https://explorer.ergoplatform.com"
const API = "https://api.ergoplatform.com"

const LAST_REFRESHED = "2026-05-06"
const LAST_REFRESHED_NOTE =
  "Snapshot from the Ergo explorer. Numbers shift block-by-block — for live values, follow the explorer link next to each metric."

export default function NetworkStatusPage() {
  const m = networkMetrics

  const fmt = new Intl.NumberFormat("en-US")

  const supplyPct = ((m.supply.current / m.supply.max) * 100).toFixed(1)

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            Network
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Ergo Network Status
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            Live network metrics sourced from the Ergo explorer. This page is the canonical reference for
            claims about Ergo&apos;s hashrate, block time, supply, and other on-chain measurements that
            appear elsewhere on the site.
          </p>
          <p className="text-xs text-neutral-500 font-mono mt-4">
            Snapshot refreshed: {LAST_REFRESHED} · Source:{" "}
            <a href={EXPLORER} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
              explorer.ergoplatform.com
            </a>
          </p>
        </header>

        {/* Metrics grid */}
        <section className="mb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <MetricCard
            icon={Zap}
            label="Network hashrate"
            value={`${m.hashrate.value} ${m.hashrate.unit}`}
            trend={m.hashrate.trend}
            source="explorer"
            href={`${EXPLORER}/en/charts`}
          />
          <MetricCard
            icon={Clock}
            label="Average block time"
            value={`${m.blockTime.value} ${m.blockTime.unit}`}
            trend={m.blockTime.status}
            source="explorer (target: 120 s)"
            href={`${EXPLORER}/en/blocks`}
          />
          <MetricCard
            icon={Coins}
            label="Circulating supply"
            value={`${m.supply.current}M ${m.supply.unit}`}
            trend={`${supplyPct}% of max (${m.supply.max}M)`}
            source="emission schedule"
            href={`${EXPLORER}/en/charts`}
          />
          <MetricCard
            icon={BarChart3}
            label="Active addresses"
            value={fmt.format(m.activeAddresses.value)}
            trend={m.activeAddresses.trend}
            source="explorer"
            href={`${EXPLORER}/en/charts`}
          />
          <MetricCard
            icon={Activity}
            label="Transactions / day"
            value={fmt.format(m.transactionsPerDay.value)}
            trend={m.transactionsPerDay.trend}
            source="explorer"
            href={`${EXPLORER}/en/transactions`}
          />
          <MetricCard
            icon={Server}
            label="Active nodes"
            value={fmt.format(m.activeNodes.value)}
            trend={m.activeNodes.trend}
            source="public peer scan"
            href="https://github.com/ergoplatform/ergo"
          />
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-3xl border border-white/10 bg-neutral-950/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Methodology</h2>
          <div className="space-y-3 text-neutral-300 leading-relaxed text-sm">
            <p>
              <strong className="text-white">Refresh cadence:</strong> these numbers are updated manually
              when this page is reviewed (typically monthly, with a refresh after major protocol or
              emission events). For live block-by-block values, use the explorer link next to each metric.
            </p>
            <p>
              <strong className="text-white">Hashrate</strong> is reported as a network-wide rolling
              average from the explorer&apos;s charts API ({API}). It can swing materially day-over-day,
              especially around mining difficulty adjustments.
            </p>
            <p>
              <strong className="text-white">Block time</strong> targets ~120 seconds via the Autolykos v2
              difficulty adjustment. Short-term averages can drift above or below the target between
              adjustment epochs.
            </p>
            <p>
              <strong className="text-white">Supply numbers</strong> are derived from the deterministic
              emission schedule plus the storage-rent recovery flow. Maximum supply is fixed at
              97,739,925 ERG.
            </p>
            <p>
              <strong className="text-white">Active addresses / transactions per day</strong> are
              raw on-chain counts and include all activity — wallet shuffling, dApp interactions,
              automated agent flows, etc. They are not user counts.
            </p>
          </div>
          <p className="text-xs text-neutral-500 font-mono mt-5 italic">
            {LAST_REFRESHED_NOTE}
          </p>
        </section>

        {/* Verification links */}
        <section className="rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/8 via-black/80 to-black/80 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Verify the numbers yourself</h2>
          <p className="text-neutral-300 text-sm leading-relaxed mb-5">
            All Ergo on-chain data is publicly queryable. You don&apos;t have to trust this page — you can
            re-derive every number above from the explorer or by running your own node.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <ExternalLinkCard href={EXPLORER} title="Block explorer" sub="explorer.ergoplatform.com" />
            <ExternalLinkCard href={`${API}/api/v1/info`} title="Network info API" sub="JSON: height, supply, difficulty" />
            <ExternalLinkCard href="https://github.com/ergoplatform/ergo" title="Run your own node" sub="github.com/ergoplatform/ergo" />
            <ExternalLinkCard href="https://github.com/ergoplatform/eips" title="Protocol specs (EIPs)" sub="github.com/ergoplatform/eips" />
          </div>
        </section>
      </article>
    </main>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  source,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  trend?: string
  source: string
  href: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-950/60 p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-orange-400" />
        </div>
        <span className="text-neutral-400 font-mono text-[11px] uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 leading-tight">
        {value}
      </div>
      {trend && (
        <div className="text-xs text-neutral-400 mb-3">{trend}</div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-orange-400 hover:text-orange-300 font-mono inline-flex items-center gap-1 transition-colors"
      >
        <span>[{source}]</span>
        <ExternalLink className="w-2.5 h-2.5" />
      </a>
    </div>
  )
}

function ExternalLinkCard({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-white/10 bg-black/60 p-4 hover:border-orange-500/30 transition-colors"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-white text-sm group-hover:text-orange-100 transition-colors truncate">
            {title}
          </h3>
          <p className="text-neutral-500 text-xs font-mono truncate">{sub}</p>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-orange-400 transition-colors shrink-0" />
      </div>
    </a>
  )
}
