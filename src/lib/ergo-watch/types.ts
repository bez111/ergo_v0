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

export type ExplorerBoxAsset = {
  tokenId?: string
  index?: number
  amount?: number
  name?: string
  decimals?: number
  type?: string
}

export type ExplorerRegister = {
  serializedValue?: string
  sigmaType?: string
  renderedValue?: string
}

export type ExplorerBox = {
  boxId?: string
  transactionId?: string
  blockId?: string
  value?: number
  creationHeight?: number
  settlementHeight?: number
  assets?: ExplorerBoxAsset[]
  additionalRegisters?: Record<string, ExplorerRegister | string | number>
}

export type ExplorerBoxesResponse = {
  items?: ExplorerBox[]
  total?: number
}

export type ExplorerV0Info = {
  version?: string
  supply?: number
  transactionAverage?: number
  hashRate?: number
}

export type ExplorerAsset = {
  id?: string
  boxId?: string
  emissionAmount?: number
  name?: string
  description?: string
  type?: string
  decimals?: number
}

export type ExplorerAssetsResponse = {
  items?: ExplorerAsset[]
  total?: number
}

export type ExplorerUnconfirmedTransaction = {
  id?: string
  inputs?: unknown[]
  outputs?: Array<{
    value?: number
    assets?: ExplorerBoxAsset[]
  }>
  creationTimestamp?: number
  size?: number
}

export type ExplorerUnconfirmedTransactionsResponse = {
  items?: ExplorerUnconfirmedTransaction[]
  total?: number
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
  status: "live" | "partial" | "unavailable"
  updatedAt: string | null
  note: string
  bankBox: {
    id: string | null
    height: number | null
  }
  oracleBox: {
    id: string | null
    height: number | null
  }
  calculations: {
    sigUsdSupply: number | null
    sigRsvSupply: number | null
    ergReserves: number | null
    oracleNanoErgPerUsd: number | null
    oracleErgUsd: number | null
    liabilitiesErg: number | null
    nominalLiabilitiesUsd: number | null
    reserveValueUsd: number | null
    equityErg: number | null
    equityUsd: number | null
    reserveRatio: number | null
    equityRatio: number | null
  }
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
  eventStreamStatus: "prototype" | "not_connected"
  eventCount: number
  latestEventAt: string | null
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

export type ErgoWatchActivityTransaction = {
  id: string
  age: string
  inputs: number
  outputs: number
  valueErg: number
  assetCount: number
  sizeBytes: number | null
}

export type ErgoWatchAssetSummary = {
  id: string
  name: string
  type: string
  emissionAmount: number | null
  decimals: number | null
  boxId: string | null
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
  activity: {
    status: "live" | "unavailable"
    mempoolTransactions: number | null
    sampleSize: number
    unconfirmed: ErgoWatchActivityTransaction[]
  }
  assets: {
    status: "live" | "unavailable"
    total: number | null
    latest: ErgoWatchAssetSummary[]
  }
  defi: {
    sigmaUsd: SigmaUsdSnapshot
  }
  agentEconomy: AgentEconomySnapshot
}
