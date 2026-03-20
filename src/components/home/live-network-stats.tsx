"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, Blocks, Zap, TrendingUp, Coins, RefreshCw } from "lucide-react"

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
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

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
      setLastUpdated(new Date())
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
        <div className="container mx-auto px-4">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
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
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
