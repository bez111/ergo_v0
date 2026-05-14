"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, Blocks, Zap, TrendingUp, Coins, RefreshCw, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"

interface ErgoV1Info {
  height: number
  maxTxGix: number
}

interface ErgoV0Info {
  supply: number
  transactionAverage: number
  hashRate: number
}

interface LiveStats {
  height: number
  totalTxs: number
  avgTxPerDay: number
  hashRateTH: number
  supplyERG: number
  uptimeDays: number
}

const LAUNCH_DATE = new Date("2019-07-01")
const MAX_SUPPLY = 97_739_924

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  live,
}: {
  icon: React.ElementType
  label: string
  value: string
  sub?: string
  live?: boolean
}) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 border-r border-white/10 last:border-r-0">
      <div className="p-1.5 rounded-md bg-orange-500/10 shrink-0">
        <Icon className="w-3.5 h-3.5 text-orange-400" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-bold text-sm tabular-nums">{value}</span>
          {live && (
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          )}
        </div>
        <div className="text-gray-500 text-xs leading-none mt-0.5">{label}</div>
        {sub && <div className="text-gray-600 text-xs leading-none mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

export function LiveNetworkStats() {
  const [stats, setStats] = useState<LiveStats | null>(null)
  const [loading, setLoading] = useState(true)

  async function fetchStats() {
    try {
      const [v1Res, v0Res] = await Promise.all([
        fetch("https://api.ergoplatform.com/api/v1/info", { cache: "no-store" }),
        fetch("https://api.ergoplatform.com/api/v0/info", { cache: "no-store" }),
      ])

      if (!v1Res.ok || !v0Res.ok) return

      const v1: ErgoV1Info = await v1Res.json()
      const v0: ErgoV0Info = await v0Res.json()

      const uptimeDays = Math.floor(
        (Date.now() - LAUNCH_DATE.getTime()) / (1000 * 60 * 60 * 24)
      )

      setStats({
        height: v1.height,
        totalTxs: v1.maxTxGix,
        avgTxPerDay: v0.transactionAverage,
        hashRateTH: Math.round(v0.hashRate / 1e12),
        supplyERG: Math.floor(v0.supply / 1e9),
        uptimeDays,
      })
    } catch {
      // silently fail — show nothing if API unreachable
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 30_000) // refresh every 30s
    return () => clearInterval(interval)
  }, [])

  if (loading || !stats) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="border-y border-white/8 bg-black/60 backdrop-blur-sm"
      >
        {/* Outer flex pins the Ergo Watch CTA to the right at all viewport
            widths and keeps it OUTSIDE the horizontally scrollable stat
            strip. Previously the CTA sat inside the scroll container as
            the last child — on touch devices the swipe to reach it was
            captured as a scroll gesture instead of a tap, and on desktop
            the link could fall into the overflow clip zone making the
            click land on the container, not the anchor. */}
        <div className="container mx-auto px-4">
          <div className="flex items-stretch gap-2">
            <div className="flex items-center overflow-x-auto scrollbar-hide flex-1 min-w-0">
              {/* Live indicator */}
              <div className="flex items-center gap-2 px-4 py-3 border-r border-white/10 shrink-0">
                <Activity className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400 text-xs font-medium uppercase tracking-wider">Live</span>
              </div>

              <StatCard
                icon={Blocks}
                label="Block height"
                value={stats.height.toLocaleString()}
                live
              />
              <StatCard
                icon={TrendingUp}
                label="Transactions"
                value={formatNumber(stats.totalTxs)}
              />
              <StatCard
                icon={Activity}
                label="Avg tx/day"
                value={stats.avgTxPerDay.toLocaleString()}
              />
              <StatCard
                icon={Zap}
                label="Hash rate"
                value={`${stats.hashRateTH} TH/s`}
              />
              <StatCard
                icon={Coins}
                label="Circulating"
                value={`${formatNumber(stats.supplyERG)} ERG`}
                sub={`of ${formatNumber(MAX_SUPPLY)} max`}
              />
              <StatCard
                icon={RefreshCw}
                label="Uptime"
                value={`${stats.uptimeDays.toLocaleString()} days`}
                sub="since launch"
              />
            </div>

            {/* Pinned CTA — never inside the scroll container.
                Reliability fixes layered in:
                - min-h-[44px] meets the iOS HIG tap-target minimum.
                - touch-action: manipulation kills the 300ms double-tap
                  zoom delay so the tap registers immediately.
                - translateZ(0) forces its own compositing layer; without
                  it the parent's backdrop-blur-sm has a known WebKit bug
                  that swallows pointer events on grandchildren.
                - relative + z-10 puts it above any framer-motion ghosts
                  from the parent's enter animation. */}
            <Link
              href="/ergo-watch"
              aria-label="Open the Ergo Watch live network metrics dashboard"
              style={{ touchAction: "manipulation", transform: "translateZ(0)" }}
              className="relative z-10 flex shrink-0 items-center gap-2 self-stretch min-h-[44px] px-4 py-3 text-xs font-mono uppercase tracking-wider text-orange-400 border-l border-white/10 hover:text-orange-300 hover:bg-orange-500/10 active:bg-orange-500/20 focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 transition-colors"
            >
              <span>Ergo Watch</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
