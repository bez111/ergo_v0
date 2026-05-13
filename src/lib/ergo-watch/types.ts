export type ExplorerInfo = {
  lastBlockId: string
  height: number
  maxBoxGix?: number
  maxTxGix?: number
  params?: {
    height?: number
    storageFeeFactor?: number
    minValuePerByte?: number
    maxBlockSize?: number
    maxBlockCost?: number
    blockVersion?: number
    tokenAccessCost?: number
    inputCost?: number
    dataInputCost?: number
    outputCost?: number
  }
}

export type ExplorerBlock = {
  id: string
  height: number
  epoch?: number
  version?: number
  timestamp?: number
  transactionsCount?: number
  miner?: {
    address?: string
    name?: string
  }
  size?: number
  difficulty?: number
  minerReward?: number
}

export type ExplorerBlocksResponse = {
  items?: ExplorerBlock[]
  total?: number
}

export type ExplorerV0Info = {
  version?: string
  supply?: number
  transactionAverage?: number
  hashRate?: number
}

export type ErgoWatchMetricState = "live" | "derived" | "unavailable"

export type ErgoWatchMetric = {
  id: string
  title: string
  value: string
  description: string
  source: string
  href: string
  state: ErgoWatchMetricState
}

export type ErgoWatchSource = {
  id: string
  label: string
  href: string
  ok: boolean
}

export type SigmaUsdSnapshot = {
  status: "partial" | "unavailable"
  updatedAt: string | null
  note: string
  metrics: ErgoWatchMetric[]
}

export type AgentEconomyMetricState = "prototype" | "research"

export type AgentEconomyMetric = {
  id: string
  title: string
  value: string
  state: AgentEconomyMetricState
  description: string
}

export type AgentEconomySnapshot = {
  status: "prototype"
  eventStreamStatus: "not_connected"
  note: string
  metrics: AgentEconomyMetric[]
}

export type MiningShare = {
  id: string
  label: string
  address: string | null
  blocks: number
  share: number
  rewardErg: number
}

export type ErgoWatchSeriesPoint = {
  height: number
  value: number
}

export type ErgoWatchHealthStatus = "ok" | "watch" | "stale" | "unavailable"

export type ErgoWatchHealthPanel = {
  id: string
  title: string
  status: ErgoWatchHealthStatus
  value: string
  description: string
}

export type ErgoWatchTrendDirection = "up" | "down" | "flat" | "unavailable"

export type ErgoWatchSeriesStats = {
  latest: number | null
  average: number | null
  min: number | null
  max: number | null
  changePercent: number | null
  direction: ErgoWatchTrendDirection
}

export type ErgoWatchSnapshot = {
  generatedAt: string
  cacheSeconds: number
  sampleSize: number
  sourceStatus: {
    reachable: number
    total: number
  }
  sources: ErgoWatchSource[]
  chain: {
    height: number | null
    latestBlockId: string | null
    latestBlockAge: string
    avgBlockTimeSeconds: number | null
    topMinerShare: number | null
  }
  emission: {
    circulatingSupplyErg: number | null
    maxSupplyErg: number
    remainingEmissionErg: number | null
    circulatingPercent: number | null
  }
  health: ErgoWatchHealthPanel[]
  series: {
    blockTimeSeconds: ErgoWatchSeriesPoint[]
    difficulty: ErgoWatchSeriesPoint[]
    transactions: ErgoWatchSeriesPoint[]
  }
  seriesStats: {
    blockTimeSeconds: ErgoWatchSeriesStats
    difficulty: ErgoWatchSeriesStats
    transactions: ErgoWatchSeriesStats
  }
  metrics: ErgoWatchMetric[]
  miningDistribution: MiningShare[]
  defi: {
    sigmaUsd: SigmaUsdSnapshot
  }
  agentEconomy: AgentEconomySnapshot
}
