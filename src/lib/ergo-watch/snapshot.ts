import { unstable_cache } from "next/cache"
import type {
  ErgoWatchHealthPanel,
  ErgoWatchMetric,
  ErgoWatchSnapshot,
  ErgoWatchSeriesPoint,
  ErgoWatchSeriesStats,
  ExplorerBlocksResponse,
  ExplorerBlock,
  ExplorerInfo,
  ExplorerV0Info,
  MiningShare,
} from "./types"

export const ERGO_EXPLORER_API = "https://api.ergoplatform.com/api/v1"
export const ERGO_EXPLORER_V0_API = "https://api.ergoplatform.com/api/v0"
export const DEFILLAMA_STABLECOINS_API = "https://stablecoins.llama.fi/stablecoins?includePrices=true"
export const DEFILLAMA_SIGMAUSD_API = "https://api.llama.fi/protocol/sigmausd"
export const ERGO_WATCH_REVALIDATE_SECONDS = 300
export const ERGO_WATCH_SAMPLE_BLOCKS = 100
export const ERGO_WATCH_FETCH_TIMEOUT_MS = 10_000

const BLOCKS_PER_EPOCH = 1024
const TARGET_BLOCK_INTERVAL_SECONDS = 120
const MAX_SUPPLY_ERG = 97_739_925

type DefiLlamaStablecoinAsset = {
  name?: string
  symbol?: string
  price?: number
  circulating?: {
    peggedUSD?: number
  }
  chainCirculating?: {
    Ergo?: {
      current?: {
        peggedUSD?: number
      }
    }
  }
}

type DefiLlamaStablecoinsResponse = {
  peggedAssets?: DefiLlamaStablecoinAsset[]
}

type DefiLlamaProtocolResponse = {
  chain?: string
  currentChainTvls?: {
    Ergo?: number
  }
  tvl?: Array<{
    date?: number
    totalLiquidityUSD?: number
  }>
}

function formatNumber(value: number | undefined | null) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US").format(value)
}

function formatDecimal(value: number | undefined | null, maximumFractionDigits = 2) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value)
}

function formatCompact(value: number | undefined | null) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value)
}

function formatUsd(value: number | undefined | null, maximumFractionDigits = 0) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(value)
}

function formatBytes(value: number | undefined | null) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  if (value < 1024) return `${formatNumber(value)} B`
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`
  return `${(value / (1024 * 1024)).toFixed(2)} MB`
}

function formatErg(nanoErg: number | undefined | null) {
  if (typeof nanoErg !== "number" || !Number.isFinite(nanoErg)) return "Unavailable"
  return `${formatDecimal(nanoErg / 1_000_000_000, 4)} ERG`
}

function formatErgAmount(erg: number | undefined | null, maximumFractionDigits = 0) {
  if (typeof erg !== "number" || !Number.isFinite(erg)) return "Unavailable"
  return `${formatDecimal(erg, maximumFractionDigits)} ERG`
}

function formatAge(timestamp: number | undefined | null) {
  if (typeof timestamp !== "number" || !Number.isFinite(timestamp)) return "Timestamp unavailable"

  const seconds = Math.max(0, Math.floor((Date.now() - timestamp) / 1000))
  if (seconds < 10) return "just now"
  if (seconds < 60) return `${seconds}s ago`

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 48) return `${hours}h ago`

  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

function getAgeSeconds(timestamp: number | undefined | null) {
  if (typeof timestamp !== "number" || !Number.isFinite(timestamp)) return null
  return Math.max(0, Math.floor((Date.now() - timestamp) / 1000))
}

function shortHash(value: string | undefined | null) {
  if (!value) return "Unavailable"
  return `${value.slice(0, 10)}...${value.slice(-6)}`
}

function shortAddress(value: string | undefined | null) {
  if (!value) return "Unknown miner"
  return `${value.slice(0, 8)}...${value.slice(-8)}`
}

async function fetchExplorerJson<T>(path: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), ERGO_WATCH_FETCH_TIMEOUT_MS)

  try {
    const response = await fetch(`${ERGO_EXPLORER_API}${path}`, {
      headers: { accept: "application/json" },
      next: { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
      signal: controller.signal,
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

async function fetchExplorerV0Json<T>(path: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), ERGO_WATCH_FETCH_TIMEOUT_MS)

  try {
    const response = await fetch(`${ERGO_EXPLORER_V0_API}${path}`, {
      headers: { accept: "application/json" },
      next: { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
      signal: controller.signal,
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

async function fetchUrlJson<T>(url: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), ERGO_WATCH_FETCH_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      headers: { accept: "application/json" },
      next: { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
      signal: controller.signal,
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

function metric(
  id: string,
  title: string,
  value: string,
  description: string,
  source: string,
  href: string,
  state: ErgoWatchMetric["state"] = value === "Unavailable" ? "unavailable" : "live",
): ErgoWatchMetric {
  return { id, title, value, description, source, href, state }
}

function getAverageBlockTimeSeconds(blocks: ExplorerBlock[]) {
  const timestamps = blocks
    .map((block) => block.timestamp)
    .filter((timestamp): timestamp is number => typeof timestamp === "number")

  if (timestamps.length < 2) return null

  const deltas = timestamps
    .slice(0, -1)
    .map((timestamp, index) => timestamp - timestamps[index + 1])
    .map((delta) => Math.round(delta / 1000))
    .filter((delta) => delta > 0 && delta < 60 * 60)

  if (!deltas.length) return null
  return Math.round(deltas.reduce((sum, delta) => sum + delta, 0) / deltas.length)
}

function getBlockTimeSeries(blocks: ExplorerBlock[]): ErgoWatchSeriesPoint[] {
  return blocks
    .slice(0, -1)
    .map((block, index) => {
      const nextBlock = blocks[index + 1]
      const value =
        typeof block.timestamp === "number" && typeof nextBlock.timestamp === "number"
          ? Math.round((block.timestamp - nextBlock.timestamp) / 1000)
          : null

      if (value === null || value <= 0 || value > 60 * 60) return null
      return { height: block.height, value }
    })
    .filter((point): point is ErgoWatchSeriesPoint => Boolean(point))
    .slice(0, 48)
    .reverse()
}

function getNumericSeries(
  blocks: ExplorerBlock[],
  selector: (block: ExplorerBlock) => number | undefined,
): ErgoWatchSeriesPoint[] {
  return blocks
    .map((block) => {
      const value = selector(block)
      if (typeof value !== "number" || !Number.isFinite(value)) return null
      return { height: block.height, value }
    })
    .filter((point): point is ErgoWatchSeriesPoint => Boolean(point))
    .slice(0, 48)
    .reverse()
}

function getSeriesStats(points: ErgoWatchSeriesPoint[]): ErgoWatchSeriesStats {
  if (!points.length) {
    return {
      latest: null,
      average: null,
      min: null,
      max: null,
      changePercent: null,
      direction: "unavailable",
    }
  }

  const values = points.map((point) => point.value)
  const latest = values[values.length - 1]
  const first = values[0]
  const average = values.reduce((sum, value) => sum + value, 0) / values.length
  const changePercent = first ? ((latest - first) / first) * 100 : null

  let direction: ErgoWatchSeriesStats["direction"] = "flat"
  if (changePercent !== null && Math.abs(changePercent) >= 1) {
    direction = changePercent > 0 ? "up" : "down"
  }

  return {
    latest,
    average,
    min: Math.min(...values),
    max: Math.max(...values),
    changePercent,
    direction,
  }
}

function healthPanel(
  id: string,
  title: string,
  status: ErgoWatchHealthPanel["status"],
  value: string,
  description: string,
): ErgoWatchHealthPanel {
  return { id, title, status, value, description }
}

function getHealthPanels({
  sourceReachable,
  sourceTotal,
  latestBlockAgeSeconds,
  avgBlockTimeSeconds,
  topMinerShare,
}: {
  sourceReachable: number
  sourceTotal: number
  latestBlockAgeSeconds: number | null
  avgBlockTimeSeconds: number | null
  topMinerShare: number | null
}): ErgoWatchHealthPanel[] {
  const sourceStatus =
    sourceReachable === sourceTotal ? "ok" : sourceReachable === 0 ? "unavailable" : "watch"
  const latestStatus =
    latestBlockAgeSeconds === null
      ? "unavailable"
      : latestBlockAgeSeconds <= 15 * 60
        ? "ok"
        : latestBlockAgeSeconds <= 60 * 60
          ? "watch"
          : "stale"
  const blockTimeStatus =
    avgBlockTimeSeconds === null
      ? "unavailable"
      : avgBlockTimeSeconds >= 60 && avgBlockTimeSeconds <= 240
        ? "ok"
        : "watch"
  const minerStatus =
    topMinerShare === null ? "unavailable" : topMinerShare < 40 ? "ok" : "watch"

  return [
    healthPanel(
      "sources",
      "Source coverage",
      sourceStatus,
      `${sourceReachable}/${sourceTotal}`,
      "Reachable public runtime sources used for this snapshot.",
    ),
    healthPanel(
      "latest-block",
      "Latest block freshness",
      latestStatus,
      latestBlockAgeSeconds === null ? "Unavailable" : formatAge(Date.now() - latestBlockAgeSeconds * 1000),
      "Freshness of the latest block visible through Explorer API.",
    ),
    healthPanel(
      "block-time",
      "Block time sample",
      blockTimeStatus,
      avgBlockTimeSeconds === null ? "Unavailable" : `${formatNumber(avgBlockTimeSeconds)}s`,
      "Average observed interval across the sampled recent blocks.",
    ),
    healthPanel(
      "miner-concentration",
      "Top miner share",
      minerStatus,
      topMinerShare === null ? "Unavailable" : `${formatDecimal(topMinerShare, 1)}%`,
      "Share of sampled blocks mined by the leading observed miner.",
    ),
  ]
}

function getMiningDistribution(blocks: ExplorerBlock[]): MiningShare[] {
  const miners = new Map<string, MiningShare>()

  for (const block of blocks) {
    const address = block.miner?.address ?? null
    const label = block.miner?.name || shortAddress(address)
    const id = address ?? label
    const previous = miners.get(id)
    const rewardErg =
      typeof block.minerReward === "number" && Number.isFinite(block.minerReward)
        ? block.minerReward / 1_000_000_000
        : 0

    if (previous) {
      previous.blocks += 1
      previous.rewardErg += rewardErg
    } else {
      miners.set(id, {
        id,
        label,
        address,
        blocks: 1,
        share: 0,
        rewardErg,
      })
    }
  }

  return Array.from(miners.values())
    .map((miner) => ({
      ...miner,
      share: blocks.length ? (miner.blocks / blocks.length) * 100 : 0,
    }))
    .sort((a, b) => b.blocks - a.blocks)
    .slice(0, 8)
}

function getSigmaUsdSnapshot({
  stablecoins,
  protocol,
}: {
  stablecoins: DefiLlamaStablecoinsResponse | null
  protocol: DefiLlamaProtocolResponse | null
}): ErgoWatchSnapshot["defi"]["sigmaUsd"] {
  const sigUsdAsset = stablecoins?.peggedAssets?.find((asset) => {
    const symbol = asset.symbol?.toLowerCase()
    const name = asset.name?.toLowerCase()
    return symbol === "sigusd" || name === "sigmausd"
  })
  const sigUsdSupply =
    sigUsdAsset?.chainCirculating?.Ergo?.current?.peggedUSD ??
    sigUsdAsset?.circulating?.peggedUSD ??
    null
  const sigUsdPrice = sigUsdAsset?.price ?? null
  const reserveValueUsd = protocol?.currentChainTvls?.Ergo ?? null
  const latestProtocolPoint = protocol?.tvl?.[protocol.tvl.length - 1]
  const updatedAt =
    typeof latestProtocolPoint?.date === "number"
      ? new Date(latestProtocolPoint.date * 1000).toISOString()
      : null
  const hasPartialData =
    typeof sigUsdSupply === "number" ||
    typeof sigUsdPrice === "number" ||
    typeof reserveValueUsd === "number"

  return {
    status: hasPartialData ? "partial" : "unavailable",
    updatedAt,
    note:
      "SigmaUSD exact reserve ratio requires decoding the AgeUSD bank and oracle boxes. Until that source is wired, reserve ratio, SigRSV supply and ERG base reserves stay unavailable instead of being guessed.",
    metrics: [
      metric(
        "sigusd-supply",
        "SigUSD supply",
        typeof sigUsdSupply === "number" ? `${formatDecimal(sigUsdSupply, 2)} SigUSD` : "Unavailable",
        "SigmaUSD circulating amount reported by DefiLlama stablecoin data for Ergo.",
        "DefiLlama stablecoins",
        DEFILLAMA_STABLECOINS_API,
        typeof sigUsdSupply === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigusd-price",
        "SigUSD price",
        typeof sigUsdPrice === "number" ? formatUsd(sigUsdPrice, 4) : "Unavailable",
        "Reported peg price when DefiLlama provides it. This is not an on-chain oracle read.",
        "DefiLlama stablecoins",
        DEFILLAMA_STABLECOINS_API,
        typeof sigUsdPrice === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigusd-reserve-value",
        "Reserve value",
        formatUsd(reserveValueUsd, 0),
        "DefiLlama SigmaUSD protocol TVL on Ergo. ERG base reserves require on-chain bank-box decoding.",
        "DefiLlama SigmaUSD protocol",
        DEFILLAMA_SIGMAUSD_API,
        typeof reserveValueUsd === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigrsv-supply",
        "SigRSV supply",
        "Unavailable",
        "Requires SigmaUSD bank-box state. This page does not infer it from secondary sources.",
        "SigmaUSD on-chain state",
        "https://github.com/anon-real/sigma-usd",
        "unavailable",
      ),
      metric(
        "sigusd-liabilities",
        "Liabilities",
        "Unavailable",
        "Exact liabilities require the same on-chain state used by SigmaUSD/AgeUSD contracts.",
        "SigmaUSD on-chain state",
        "https://github.com/anon-real/sigma-usd",
        "unavailable",
      ),
      metric(
        "sigusd-equity-ratio",
        "Equity ratio",
        "Unavailable",
        "Exact equity or reserve ratio is withheld until bank-box and oracle-box decoding is wired.",
        "SigmaUSD on-chain state",
        "https://github.com/anon-real/sigma-usd",
        "unavailable",
      ),
    ],
  }
}

function getAgentEconomySnapshot(): ErgoWatchSnapshot["agentEconomy"] {
  return {
    status: "prototype",
    eventStreamStatus: "not_connected",
    note:
      "These are honest prototype states, not live counters. They become live after Accord demos emit a timestamped event stream.",
    metrics: [
      {
        id: "agreements",
        title: "Agreements",
        value: "Prototype",
        state: "prototype",
        description: "Accord Agreement objects exist in the protocol layer; live site counters wait for demo events.",
      },
      {
        id: "verification-receipts",
        title: "Verification Receipts",
        value: "Prototype",
        state: "prototype",
        description: "Work-verification receipts are planned for x402/MCP/API demos before production metrics.",
      },
      {
        id: "settlement-receipts",
        title: "Settlement Receipts",
        value: "Prototype",
        state: "prototype",
        description: "Settlement receipts will become live once demo rails publish verifiable settlement events.",
      },
      {
        id: "agent-credit-notes",
        title: "Agent Credit Notes",
        value: "Research",
        state: "research",
        description: "Bounded, policy-constrained credit Notes remain research until testnet flows are demonstrated.",
      },
    ],
  }
}

async function buildErgoWatchSnapshot(): Promise<ErgoWatchSnapshot> {
  const [info, v0Info, blockResponse, stablecoins, sigmaUsdProtocol] = await Promise.all([
    fetchExplorerJson<ExplorerInfo>("/info"),
    fetchExplorerV0Json<ExplorerV0Info>("/info"),
    fetchExplorerJson<ExplorerBlocksResponse>(`/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`),
    fetchUrlJson<DefiLlamaStablecoinsResponse>(DEFILLAMA_STABLECOINS_API),
    fetchUrlJson<DefiLlamaProtocolResponse>(DEFILLAMA_SIGMAUSD_API),
  ])

  const blocks = blockResponse?.items ?? []
  const latestBlock = blocks[0]
  const latestHeight = info?.height ?? latestBlock?.height ?? null
  const latestBlockId = latestBlock?.id ?? info?.lastBlockId ?? null
  const latestBlockAgeSeconds = getAgeSeconds(latestBlock?.timestamp)
  const avgBlockTimeSeconds = getAverageBlockTimeSeconds(blocks)
  const miningDistribution = getMiningDistribution(blocks)
  const topMinerShare = miningDistribution[0]?.share ?? null
  const series = {
    blockTimeSeconds: getBlockTimeSeries(blocks),
    difficulty: getNumericSeries(blocks, (block) => block.difficulty),
    transactions: getNumericSeries(blocks, (block) => block.transactionsCount),
  }
  const seriesStats = {
    blockTimeSeconds: getSeriesStats(series.blockTimeSeconds),
    difficulty: getSeriesStats(series.difficulty),
    transactions: getSeriesStats(series.transactions),
  }
  const epochProgress =
    typeof latestHeight === "number" ? `${formatNumber(latestHeight % BLOCKS_PER_EPOCH)} / ${formatNumber(BLOCKS_PER_EPOCH)}` : "Unavailable"
  const epochBlocksLeft =
    typeof latestHeight === "number" ? BLOCKS_PER_EPOCH - (latestHeight % BLOCKS_PER_EPOCH) : null
  const totalTransactions = blocks.reduce((sum, block) => sum + (block.transactionsCount ?? 0), 0)
  const avgTransactionsPerBlock = blocks.length ? totalTransactions / blocks.length : null
  const estimatedHashrateTh =
    typeof latestBlock?.difficulty === "number" && avgBlockTimeSeconds
      ? latestBlock.difficulty / avgBlockTimeSeconds / 1_000_000_000_000
      : null
  const explorerHashrateTh =
    typeof v0Info?.hashRate === "number" && Number.isFinite(v0Info.hashRate)
      ? v0Info.hashRate / 1_000_000_000_000
      : null
  const circulatingSupplyErg =
    typeof v0Info?.supply === "number" && Number.isFinite(v0Info.supply)
      ? v0Info.supply / 1_000_000_000
      : null
  const remainingEmissionErg =
    typeof circulatingSupplyErg === "number"
      ? Math.max(0, MAX_SUPPLY_ERG - circulatingSupplyErg)
      : null
  const circulatingPercent =
    typeof circulatingSupplyErg === "number" ? (circulatingSupplyErg / MAX_SUPPLY_ERG) * 100 : null
  const sigmaUsd = getSigmaUsdSnapshot({ stablecoins, protocol: sigmaUsdProtocol })
  const sigmaUsdStablecoinOk = sigmaUsd.metrics.some(
    (item) => item.id === "sigusd-supply" && item.state !== "unavailable",
  )
  const sigmaUsdProtocolOk = sigmaUsd.metrics.some(
    (item) => item.id === "sigusd-reserve-value" && item.state !== "unavailable",
  )
  const sourceStatus = {
    reachable: [
      info,
      v0Info,
      blocks.length ? blockResponse : null,
      sigmaUsdStablecoinOk ? stablecoins : null,
      sigmaUsdProtocolOk ? sigmaUsdProtocol : null,
    ].filter(Boolean).length,
    total: 5,
  }
  const health = getHealthPanels({
    sourceReachable: sourceStatus.reachable,
    sourceTotal: sourceStatus.total,
    latestBlockAgeSeconds,
    avgBlockTimeSeconds,
    topMinerShare,
  })

  return {
    generatedAt: new Date().toISOString(),
    cacheSeconds: ERGO_WATCH_REVALIDATE_SECONDS,
    sampleSize: blocks.length,
    sourceStatus,
    sources: [
      {
        id: "info",
        label: "Explorer API / info",
        href: `${ERGO_EXPLORER_API}/info`,
        ok: Boolean(info),
      },
      {
        id: "blocks",
        label: `Explorer API / last ${ERGO_WATCH_SAMPLE_BLOCKS} blocks`,
        href: `${ERGO_EXPLORER_API}/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`,
        ok: blocks.length > 0,
      },
      {
        id: "v0-info",
        label: "Explorer API v0 / supply",
        href: `${ERGO_EXPLORER_V0_API}/info`,
        ok: Boolean(v0Info),
      },
      {
        id: "defillama-stablecoins",
        label: "DefiLlama / SigmaUSD supply",
        href: DEFILLAMA_STABLECOINS_API,
        ok: sigmaUsdStablecoinOk,
      },
      {
        id: "defillama-sigmausd",
        label: "DefiLlama / SigmaUSD TVL",
        href: DEFILLAMA_SIGMAUSD_API,
        ok: sigmaUsdProtocolOk,
      },
    ],
    chain: {
      height: latestHeight,
      latestBlockId,
      latestBlockAge: formatAge(latestBlock?.timestamp),
      avgBlockTimeSeconds,
      topMinerShare,
    },
    emission: {
      circulatingSupplyErg,
      maxSupplyErg: MAX_SUPPLY_ERG,
      remainingEmissionErg,
      circulatingPercent,
    },
    health,
    series,
    seriesStats,
    metrics: [
      metric(
        "circulating-supply",
        "Circulating supply",
        formatErgAmount(circulatingSupplyErg, 0),
        "Supply reported by the public Ergo Explorer v0 info endpoint.",
        "Explorer API v0 / info",
        `${ERGO_EXPLORER_V0_API}/info`,
      ),
      metric(
        "max-supply",
        "Max supply",
        formatErgAmount(MAX_SUPPLY_ERG, 0),
        "Fixed ERG supply cap used for the emission progress calculation.",
        "Protocol monetary policy",
        `${ERGO_EXPLORER_V0_API}/info`,
        "derived",
      ),
      metric(
        "emission-remaining",
        "Emission remaining",
        formatErgAmount(remainingEmissionErg, 0),
        circulatingPercent
          ? `${formatDecimal(circulatingPercent, 2)}% of max supply is reported as circulating.`
          : "Remaining emission is unavailable until supply data is reachable.",
        "Derived from v0 supply",
        `${ERGO_EXPLORER_V0_API}/info`,
        remainingEmissionErg === null ? "unavailable" : "derived",
      ),
      metric(
        "block-height",
        "Block height",
        formatNumber(latestHeight),
        "Latest indexed mainnet height from the public Ergo Explorer API.",
        "Explorer API / info",
        `${ERGO_EXPLORER_API}/info`,
      ),
      metric(
        "latest-block",
        "Latest block",
        shortHash(latestBlockId),
        latestBlock?.timestamp ? `Observed ${formatAge(latestBlock.timestamp)}.` : "Latest block hash from Explorer API.",
        "Explorer API / blocks",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "epoch",
        "Epoch",
        formatNumber(latestBlock?.epoch),
        `Epoch progress: ${epochProgress}.`,
        "Latest block",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "epoch-blocks-left",
        "Epoch blocks left",
        formatNumber(epochBlocksLeft),
        `Approximate remaining blocks at ${TARGET_BLOCK_INTERVAL_SECONDS}s target spacing.`,
        "Derived from height",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
        "derived",
      ),
      metric(
        "avg-block-time",
        "Avg block time",
        avgBlockTimeSeconds ? `${formatNumber(avgBlockTimeSeconds)}s` : "Unavailable",
        `Average across the latest ${formatNumber(blocks.length)} indexed blocks.`,
        "Derived from blocks",
        `${ERGO_EXPLORER_API}/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`,
        avgBlockTimeSeconds ? "derived" : "unavailable",
      ),
      metric(
        "estimated-hashrate",
        "Estimated hashrate",
        estimatedHashrateTh ? `${formatDecimal(estimatedHashrateTh)} TH/s` : "Unavailable",
        "Estimated from latest difficulty divided by sampled average block time.",
        "Derived from blocks",
        `${ERGO_EXPLORER_API}/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`,
        estimatedHashrateTh ? "derived" : "unavailable",
      ),
      metric(
        "explorer-hashrate",
        "Explorer hashrate",
        explorerHashrateTh ? `${formatDecimal(explorerHashrateTh)} TH/s` : "Unavailable",
        "Hashrate reported directly by the Explorer v0 info endpoint.",
        "Explorer API v0 / info",
        `${ERGO_EXPLORER_V0_API}/info`,
      ),
      metric(
        "difficulty",
        "Difficulty",
        formatCompact(latestBlock?.difficulty),
        "Mining difficulty reported on the latest indexed block.",
        "Latest block",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "miner-reward",
        "Miner reward",
        formatErg(latestBlock?.minerReward),
        "Current reward emitted by the latest block sample.",
        "Latest block",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "latest-miner",
        "Latest miner",
        latestBlock?.miner?.name || shortAddress(latestBlock?.miner?.address),
        shortAddress(latestBlock?.miner?.address),
        "Latest block",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "sample-transactions",
        "Sample txs",
        formatNumber(totalTransactions),
        `${formatDecimal(avgTransactionsPerBlock, 1)} tx/block across the latest ${formatNumber(blocks.length)} blocks.`,
        "Derived from blocks",
        `${ERGO_EXPLORER_API}/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`,
        blocks.length ? "derived" : "unavailable",
      ),
      metric(
        "block-size",
        "Latest block size",
        formatBytes(latestBlock?.size),
        "Serialized size of the latest indexed block sample.",
        "Latest block",
        `${ERGO_EXPLORER_API}/blocks?limit=1`,
      ),
      metric(
        "max-block-size",
        "Max block size",
        formatBytes(info?.params?.maxBlockSize),
        "Current protocol parameter from Explorer API network info.",
        "Explorer API / info",
        `${ERGO_EXPLORER_API}/info`,
      ),
      metric(
        "min-value-per-byte",
        "Min value per byte",
        typeof info?.params?.minValuePerByte === "number"
          ? `${formatNumber(info.params.minValuePerByte)} nanoERG`
          : "Unavailable",
        "Minimum box value density from current protocol parameters.",
        "Explorer API / info",
        `${ERGO_EXPLORER_API}/info`,
      ),
      metric(
        "storage-fee-factor",
        "Storage fee factor",
        formatNumber(info?.params?.storageFeeFactor),
        "Storage rent parameter exposed by the public chain info endpoint.",
        "Explorer API / info",
        `${ERGO_EXPLORER_API}/info`,
      ),
    ],
    miningDistribution,
    defi: {
      sigmaUsd,
    },
    agentEconomy: getAgentEconomySnapshot(),
  }
}

export const getErgoWatchSnapshot = unstable_cache(
  buildErgoWatchSnapshot,
  ["ergo-watch-snapshot-v2"],
  { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
)
