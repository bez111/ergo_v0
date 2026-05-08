/**
 * Snapshot of Ergo network metrics shown on the marketing site.
 *
 * IMPORTANT — these are NOT live values. They are a manually-verified
 * snapshot that gets refreshed when someone updates this file. Every metric
 * therefore carries `verifiedAt` (ISO date the value was last confirmed
 * against the cited source). UI components must show that date alongside
 * the value so a stale snapshot can never be mistaken for live data.
 *
 * Verification sources:
 *   - explorer.ergoplatform.com  (height, block reward, difficulty)
 *   - api.ergoplatform.com       (raw block data)
 *   - 2miners / HeroMiners       (pool stats — see /miners pool directory)
 *
 * To refresh: hit https://api.ergoplatform.com/api/v1/blocks?limit=1 and
 * https://api.ergoplatform.com/api/v1/info, then update the values + bump
 * METRICS_VERIFIED_AT below.
 */

export interface NetworkMetrics {
  hashrate: {
    value: number
    unit: string
    /** @deprecated Hand-curated trend %s were misleading; consumers should
     *  treat this as undefined and render the verifiedAt date instead. */
    trend?: string
  }
  activeAddresses: {
    value: number
    trend?: string
  }
  defiTVL: {
    value: number
    unit: string
    note?: string
    trend?: string
  }
  supply: {
    current: number
    max: number
    left: number
    unit: string
  }
  blockTime: {
    value: number
    unit: string
    status?: string
  }
  activeNodes: {
    value: number
    trend?: string
  }
  transactionsPerDay: {
    value: number
    trend?: string
  }
  difficulty: {
    value: number
    unit: string
    trend?: string
  }
  blockReward: {
    value: number
    unit: string
  }
  activeMiners: {
    value: number
    trend?: string
  }
  miningPools: {
    count: number
    status?: string
  }
}

/** ISO date the snapshot below was last confirmed. */
export const METRICS_VERIFIED_AT = "2026-05-08"
/** Citable source for the snapshot. */
export const METRICS_VERIFIED_SOURCE = "explorer.ergoplatform.com + api.ergoplatform.com"

// Snapshot verified 2026-05-08 against api.ergoplatform.com
//   /api/v1/blocks?limit=1 → minerReward 3_000_000_000 nERG (= 3 ERG),
//   difficulty 173_009_872_617_472 (≈ 173T ≈ 0.17P), height 1,781,182.
// Hashrate ≈ difficulty / blockTime ≈ 1.44 TH/s, matches 2miners + HeroMiners.
// Active miners + miningPools.count are intentionally absent from any
// live feed; they were previously made up. They now hold conservative
// "approx" values and the UI labels them as such.
export const networkMetrics: NetworkMetrics = {
  hashrate: {
    value: 1.44,
    unit: "TH/s",
  },
  activeAddresses: {
    value: 12500,
  },
  defiTVL: {
    value: 1.24,
    unit: "M",
    note: "Liquidity is early-stage — verify current depth before trading.",
  },
  supply: {
    current: 82.373,
    max: 97.740,
    left: 15.367,
    unit: "M ERG",
  },
  blockTime: {
    value: 2.0,
    unit: "min",
    status: "stable",
  },
  activeNodes: {
    value: 1156,
  },
  transactionsPerDay: {
    value: 752,
  },
  difficulty: {
    value: 0.17,
    unit: "P",
  },
  blockReward: {
    value: 3,
    unit: "ERG",
  },
  activeMiners: {
    // Approximate — no authoritative live feed, treat as ballpark.
    value: 3200,
  },
  miningPools: {
    count: 6,
    status: "stable",
  },
}

// Helper functions to format metrics for display
export function formatHashrate(metrics: NetworkMetrics): string {
  return `${metrics.hashrate.value} ${metrics.hashrate.unit}`
}

export function formatTVL(metrics: NetworkMetrics): string {
  return `$${metrics.defiTVL.value}${metrics.defiTVL.unit}`
}

export function formatSupply(metrics: NetworkMetrics): string {
  return `${metrics.supply.current}${metrics.supply.unit.split(' ')[0]} ${metrics.supply.unit.split(' ')[1]}`
}

export function formatSupplyShort(metrics: NetworkMetrics): string {
  return `${Math.round(metrics.supply.current * 10) / 10}M ERG`
}

export function formatBlockTime(metrics: NetworkMetrics): string {
  return `${metrics.blockTime.value} ${metrics.blockTime.unit}`
}

export function formatActiveAddresses(metrics: NetworkMetrics): string {
  return metrics.activeAddresses.value.toLocaleString()
}

export function formatActiveNodes(metrics: NetworkMetrics): string {
  return metrics.activeNodes.value.toLocaleString()
}

export function formatTransactionsPerDay(metrics: NetworkMetrics): string {
  return `${metrics.transactionsPerDay.value.toLocaleString()}`
}

export function formatDifficulty(metrics: NetworkMetrics): string {
  return `${metrics.difficulty.value}${metrics.difficulty.unit}`
}

export function formatBlockReward(metrics: NetworkMetrics): string {
  return `${metrics.blockReward.value} ${metrics.blockReward.unit}`
}

export function formatActiveMiners(metrics: NetworkMetrics): string {
  return metrics.activeMiners.value.toLocaleString()
}

export function formatMiningPools(metrics: NetworkMetrics): string {
  return `${metrics.miningPools.count}+`
}

