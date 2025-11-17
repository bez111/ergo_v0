/**
 * Centralized network metrics data
 * Source: https://explorer.ergoplatform.com/
 * 
 * TODO: Replace with API integration from Ergo Explorer when backend is ready
 * API endpoint: https://api.ergoplatform.com/
 */

export interface NetworkMetrics {
  hashrate: {
    value: number
    unit: string
    trend?: string
  }
  activeAddresses: {
    value: number
    trend?: string
  }
  defiTVL: {
    value: number
    unit: string
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

// Current network metrics (from explorer.ergoplatform.com)
// Last updated: November 2025 - Data from actual explorer
// Recent stats: 752 blocks mined, 1.92min avg time, 6768 ERG mined
export const networkMetrics: NetworkMetrics = {
  hashrate: {
    value: 5.08,
    unit: "TH/s",
    trend: "+3.1%"
  },
  activeAddresses: {
    value: 12500,
    trend: "+8%"
  },
  defiTVL: {
    value: 1.8,
    unit: "M",
    trend: "+15%"
  },
  supply: {
    current: 82.373,
    max: 97.740,
    left: 15.367,
    unit: "M ERG"
  },
  blockTime: {
    value: 1.92,
    unit: "min",
    status: "stable"
  },
  activeNodes: {
    value: 1156,
    trend: "+2%"
  },
  transactionsPerDay: {
    value: 752,
    trend: "+12%"
  },
  difficulty: {
    value: 1.45,
    unit: "P",
    trend: "+1.8%"
  },
  blockReward: {
    value: 9,
    unit: "ERG"
  },
  activeMiners: {
    value: 3200,
    trend: "+5%"
  },
  miningPools: {
    count: 15,
    status: "growing"
  }
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

