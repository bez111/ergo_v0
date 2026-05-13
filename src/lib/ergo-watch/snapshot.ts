import { unstable_cache } from "next/cache"
import { getAgentEconomyEventSummary } from "@/lib/agent-economy/events"
import type {
  ErgoWatchHealthPanel,
  ErgoWatchMetric,
  ErgoWatchSnapshot,
  ErgoWatchSeriesPoint,
  ErgoWatchSeriesStats,
  ExplorerBlocksResponse,
  ExplorerBlock,
  ExplorerBox,
  ExplorerBoxesResponse,
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
export const SIGMAUSD_BANK_ADDRESS =
  "MUbV38YgqHy7XbsoXWF5z7EZm524Ybdwe5p9WDrbhruZRtehkRPT92imXer2eTkjwPDfboa1pR3zb3deVKVq3H7Xt98qcTqLuSBSbHb7izzo5jphEpcnqyKJ2xhmpNPVvmtbdJNdvdopPrHHDBbAGGeW7XYTQwEeoRfosXzcDtiGgw97b2aqjTsNFmZk7khBEQywjYfmoDc9nUCJMZ3vbSspnYo3LarLe55mh2Np8MNJqUN9APA6XkhZCrTTDRZb1B4krgFY1sVMswg2ceqguZRvC9pqt3tUUxmSnB24N6dowfVJKhLXwHPbrkHViBv1AKAJTmEaQW2DN1fRmD9ypXxZk8GXmYtxTtrj3BiunQ4qzUCu1eGzxSREjpkFSi2ATLSSDqUwxtRz639sHM6Lav4axoJNPCHbY8pvuBKUxgnGRex8LEGM8DeEJwaJCaoy8dBw9Lz49nq5mSsXLeoC4xpTUmp47Bh7GAZtwkaNreCu74m9rcZ8Di4w1cmdsiK1NWuDh9pJ2Bv7u3EfcurHFVqCkT3P86JUbKnXeNxCypfrWsFuYNKYqmjsix82g9vWcGMmAcu5nagxD4iET86iE2tMMfZZ5vqZNvntQswJyQqv2Wc6MTh4jQx1q2qJZCQe4QdEK63meTGbZNNKMctHQbp3gRkZYNrBtxQyVtNLR8xEY8zGp85GeQKbb37vqLXxRpGiigAdMe3XZA4hhYPmAAU5hpSMYaRAjtvvMT3bNiHRACGrfjvSsEG9G2zY5in2YWz5X9zXQLGTYRsQ4uNFkYoQRCBdjNxGv6R58Xq74zCgt19TxYZ87gPWxkXpWwTaHogG1eps8WXt8QzwJ9rVx6Vu9a5GjtcGsQxHovWmYixgBU8X9fPNJ9UQhYyAWbjtRSuVBtDAmoV1gCBEPwnYVP5GCGhCocbwoYhZkZjFZy6ws4uxVLid3FxuvhWvQrVEDYp7WRvGXbNdCbcSXnbeTrPMey1WPaXX"
export const SIGMAUSD_BANK_BOX_API = `${ERGO_EXPLORER_API}/boxes/unspent/byAddress/${SIGMAUSD_BANK_ADDRESS}?limit=10`
export const SIGUSD_TOKEN_ID = "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04"
export const SIGRSV_TOKEN_ID = "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0"
export const ERG_USD_ORACLE_NFT_ID = "011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f"
export const ERG_USD_ORACLE_BOX_API = `${ERGO_EXPLORER_API}/boxes/unspent/byTokenId/${ERG_USD_ORACLE_NFT_ID}?limit=5`

const BLOCKS_PER_EPOCH = 1024
const TARGET_BLOCK_INTERVAL_SECONDS = 120
const MAX_SUPPLY_ERG = 97_739_925
const NANO_ERG_IN_ERG = 1_000_000_000
const SIGMAUSD_MIN_BOX_VALUE_NANOERG = 1_000_000

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
  return `${formatDecimal(nanoErg / NANO_ERG_IN_ERG, 4)} ERG`
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

function getRegisterNumber(box: ExplorerBox | null, registerId: "R4" | "R5") {
  const register = box?.additionalRegisters?.[registerId]
  if (typeof register === "number" && Number.isFinite(register)) return register
  if (typeof register === "string") {
    const parsed = Number(register)
    return Number.isFinite(parsed) ? parsed : null
  }

  if (register && typeof register === "object" && typeof register.renderedValue === "string") {
    const parsed = Number(register.renderedValue)
    return Number.isFinite(parsed) ? parsed : null
  }

  return null
}

function getTokenAmount(box: ExplorerBox | null, tokenId: string) {
  const asset = box?.assets?.find((item) => item.tokenId === tokenId)
  return typeof asset?.amount === "number" && Number.isFinite(asset.amount) ? asset.amount : null
}

function getSigmaUsdBankBox(boxes: ExplorerBoxesResponse | null) {
  const candidates = boxes?.items?.filter((box) => {
    const hasSigUsd = box.assets?.some((asset) => asset.tokenId === SIGUSD_TOKEN_ID)
    const hasSigRsv = box.assets?.some((asset) => asset.tokenId === SIGRSV_TOKEN_ID)
    return hasSigUsd && hasSigRsv
  })

  if (!candidates?.length) return null

  return candidates.sort((a, b) => (b.value ?? 0) - (a.value ?? 0))[0]
}

function getOracleBox(boxes: ExplorerBoxesResponse | null, tokenId: string) {
  return boxes?.items?.find((box) => box.assets?.some((asset) => asset.tokenId === tokenId)) ?? null
}

function getSigmaUsdSnapshot({
  stablecoins,
  protocol,
  bankBoxes,
  oracleBoxes,
}: {
  stablecoins: DefiLlamaStablecoinsResponse | null
  protocol: DefiLlamaProtocolResponse | null
  bankBoxes: ExplorerBoxesResponse | null
  oracleBoxes: ExplorerBoxesResponse | null
}): ErgoWatchSnapshot["defi"]["sigmaUsd"] {
  const bankBox = getSigmaUsdBankBox(bankBoxes)
  const oracleBox = getOracleBox(oracleBoxes, ERG_USD_ORACLE_NFT_ID)
  const onChainSigUsdRaw = getRegisterNumber(bankBox, "R4")
  const onChainSigRsvSupply = getRegisterNumber(bankBox, "R5")
  const oracleNanoErgPerUsd = getRegisterNumber(oracleBox, "R4")
  const onChainSigUsdSupply =
    typeof onChainSigUsdRaw === "number" && Number.isFinite(onChainSigUsdRaw)
      ? onChainSigUsdRaw / 100
      : null
  const baseReservesErg =
    typeof bankBox?.value === "number" && Number.isFinite(bankBox.value)
      ? Math.max(0, bankBox.value - SIGMAUSD_MIN_BOX_VALUE_NANOERG) / NANO_ERG_IN_ERG
      : null
  const bankSigUsdBalance = getTokenAmount(bankBox, SIGUSD_TOKEN_ID)
  const bankSigRsvBalance = getTokenAmount(bankBox, SIGRSV_TOKEN_ID)
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
  const oracleErgUsd =
    typeof oracleNanoErgPerUsd === "number" && oracleNanoErgPerUsd > 0
      ? NANO_ERG_IN_ERG / oracleNanoErgPerUsd
      : null
  const onChainReserveValueUsd =
    typeof baseReservesErg === "number" && typeof oracleErgUsd === "number"
      ? baseReservesErg * oracleErgUsd
      : null
  const ageUsdLiabilitiesErg =
    typeof onChainSigUsdRaw === "number" && typeof oracleNanoErgPerUsd === "number"
      ? (onChainSigUsdRaw * Math.floor(oracleNanoErgPerUsd / 100)) / NANO_ERG_IN_ERG
      : null
  const nominalLiabilitiesUsd = onChainSigUsdSupply ?? sigUsdSupply
  const equityUsd =
    typeof onChainReserveValueUsd === "number" && typeof nominalLiabilitiesUsd === "number"
      ? onChainReserveValueUsd - nominalLiabilitiesUsd
      : typeof reserveValueUsd === "number" && typeof nominalLiabilitiesUsd === "number"
        ? reserveValueUsd - nominalLiabilitiesUsd
        : null
  const equityErg =
    typeof baseReservesErg === "number" && typeof ageUsdLiabilitiesErg === "number"
      ? baseReservesErg - ageUsdLiabilitiesErg
      : null
  const reserveRatio =
    typeof baseReservesErg === "number" &&
    typeof ageUsdLiabilitiesErg === "number" &&
    ageUsdLiabilitiesErg > 0
      ? (baseReservesErg / ageUsdLiabilitiesErg) * 100
      : null
  const equityRatio =
    typeof equityErg === "number" && typeof ageUsdLiabilitiesErg === "number" && ageUsdLiabilitiesErg > 0
      ? (equityErg / ageUsdLiabilitiesErg) * 100
      : null
  const latestProtocolPoint = protocol?.tvl?.[protocol.tvl.length - 1]
  const updatedAt =
    bankBox || oracleBox ? new Date().toISOString() : typeof latestProtocolPoint?.date === "number"
      ? new Date(latestProtocolPoint.date * 1000).toISOString()
      : null
  const hasPartialData =
    Boolean(bankBox) ||
    Boolean(oracleBox) ||
    typeof sigUsdSupply === "number" ||
    typeof sigUsdPrice === "number" ||
    typeof reserveValueUsd === "number"

  return {
    status: bankBox && oracleBox ? "live" : hasPartialData ? "partial" : "unavailable",
    updatedAt,
    bankBox: {
      id: bankBox?.boxId ?? null,
      height: bankBox?.settlementHeight ?? bankBox?.creationHeight ?? null,
    },
    oracleBox: {
      id: oracleBox?.boxId ?? null,
      height: oracleBox?.settlementHeight ?? oracleBox?.creationHeight ?? null,
    },
    note:
      bankBox && oracleBox
        ? "Bank and ERG/USD oracle boxes are read directly from Ergo Explorer. SigUSD/SigRSV use bank R4/R5; liabilities and ratios use the oracle R4 datapoint."
        : bankBox
          ? "Bank box state is read directly from Ergo Explorer. Oracle-box exact AgeUSD ratios remain unavailable until the ERG/USD oracle source is reachable."
        : "SigmaUSD exact reserve ratio requires decoding the AgeUSD bank and oracle boxes. Until that source is reachable, reserve ratio, SigRSV supply and ERG base reserves stay unavailable instead of being guessed.",
    metrics: [
      metric(
        "sigusd-supply",
        "SigUSD supply",
        typeof onChainSigUsdSupply === "number"
          ? `${formatDecimal(onChainSigUsdSupply, 2)} SigUSD`
          : typeof sigUsdSupply === "number"
            ? `${formatDecimal(sigUsdSupply, 2)} SigUSD`
            : "Unavailable",
        typeof onChainSigUsdSupply === "number"
          ? "Circulating SigUSD from the SigmaUSD bank box R4 register."
          : "SigmaUSD circulating amount reported by DefiLlama stablecoin data for Ergo.",
        typeof onChainSigUsdSupply === "number" ? "SigmaUSD bank box R4" : "DefiLlama stablecoins",
        typeof onChainSigUsdSupply === "number" ? SIGMAUSD_BANK_BOX_API : DEFILLAMA_STABLECOINS_API,
        typeof onChainSigUsdSupply === "number" || typeof sigUsdSupply === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigusd-price",
        "ERG/USD oracle",
        typeof oracleErgUsd === "number"
          ? formatUsd(oracleErgUsd, 4)
          : typeof sigUsdPrice === "number"
            ? formatUsd(sigUsdPrice, 4)
            : "Unavailable",
        typeof oracleErgUsd === "number"
          ? `On-chain ERG/USD oracle datapoint: ${formatNumber(oracleNanoErgPerUsd)} nanoERG per USD.`
          : "Reported DefiLlama market quote when available. This is not an on-chain oracle read or a peg guarantee.",
        typeof oracleErgUsd === "number" ? "ERG/USD oracle box R4" : "DefiLlama stablecoins",
        typeof oracleErgUsd === "number" ? ERG_USD_ORACLE_BOX_API : DEFILLAMA_STABLECOINS_API,
        typeof oracleErgUsd === "number" || typeof sigUsdPrice === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigusd-reserve-value",
        "ERG reserves",
        typeof baseReservesErg === "number"
          ? `${formatDecimal(baseReservesErg, 4)} ERG`
          : formatUsd(reserveValueUsd, 0),
        typeof baseReservesErg === "number"
          ? `On-chain bank-box reserves. Oracle-valued reserve: ${formatUsd(onChainReserveValueUsd, 0)}; DefiLlama TVL: ${formatUsd(reserveValueUsd, 0)}.`
          : "DefiLlama SigmaUSD protocol TVL on Ergo. ERG base reserves require on-chain bank-box decoding.",
        typeof baseReservesErg === "number" ? "SigmaUSD bank box value" : "DefiLlama SigmaUSD protocol",
        typeof baseReservesErg === "number" ? SIGMAUSD_BANK_BOX_API : DEFILLAMA_SIGMAUSD_API,
        typeof baseReservesErg === "number" || typeof reserveValueUsd === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigrsv-supply",
        "SigRSV supply",
        typeof onChainSigRsvSupply === "number"
          ? `${formatNumber(onChainSigRsvSupply)} SigRSV`
          : "Unavailable",
        typeof onChainSigRsvSupply === "number"
          ? `Circulating SigRSV from the SigmaUSD bank box R5 register. Bank token balance: ${formatNumber(bankSigRsvBalance)}.`
          : "Requires SigmaUSD bank-box state. This page does not infer it from secondary sources.",
        "SigmaUSD bank box R5",
        SIGMAUSD_BANK_BOX_API,
        typeof onChainSigRsvSupply === "number" ? "live" : "unavailable",
      ),
      metric(
        "sigusd-liabilities",
        "Liabilities",
        typeof ageUsdLiabilitiesErg === "number"
          ? `${formatDecimal(ageUsdLiabilitiesErg, 4)} ERG`
          : formatUsd(nominalLiabilitiesUsd, 0),
        typeof ageUsdLiabilitiesErg === "number"
          ? `AgeUSD liabilities from bank R4 and oracle R4. Nominal liability: ${formatUsd(nominalLiabilitiesUsd, 0)}. Bank SigUSD token balance: ${formatNumber(bankSigUsdBalance)} raw units.`
          : typeof nominalLiabilitiesUsd === "number"
            ? `Nominal $1 liability per circulating SigUSD. Bank SigUSD token balance: ${formatNumber(bankSigUsdBalance)} raw units.`
          : "Exact liabilities require the same on-chain state used by SigmaUSD/AgeUSD contracts.",
        typeof ageUsdLiabilitiesErg === "number"
          ? "Derived from bank R4 + oracle R4"
          : typeof onChainSigUsdSupply === "number"
            ? "Derived from bank box R4"
            : "SigmaUSD on-chain state",
        typeof ageUsdLiabilitiesErg === "number" || typeof onChainSigUsdSupply === "number"
          ? SIGMAUSD_BANK_BOX_API
          : "https://github.com/anon-real/sigma-usd",
        typeof ageUsdLiabilitiesErg === "number" || typeof nominalLiabilitiesUsd === "number"
          ? "derived"
          : "unavailable",
      ),
      metric(
        "sigusd-equity-ratio",
        "Equity ratio",
        typeof equityRatio === "number" ? `${formatDecimal(equityRatio, 1)}%` : "Unavailable",
        typeof equityRatio === "number"
          ? `On-chain equity: ${formatDecimal(equityErg, 4)} ERG (${formatUsd(equityUsd, 0)}). Reserve ratio: ${formatDecimal(reserveRatio, 1)}%.`
          : "Exact equity or reserve ratio is withheld until bank-box and oracle-box decoding is wired.",
        "Derived from bank box + ERG/USD oracle",
        ERG_USD_ORACLE_BOX_API,
        typeof equityRatio === "number" ? "derived" : "unavailable",
      ),
    ],
  }
}

function getAgentEconomySnapshot(): ErgoWatchSnapshot["agentEconomy"] {
  const summary = getAgentEconomyEventSummary()

  return {
    status: "prototype",
    eventStreamStatus: summary.eventStreamStatus,
    eventCount: summary.eventCount,
    latestEventAt: summary.latestEventAt,
    note: summary.note,
    metrics: [
      {
        id: "agreements",
        title: "Agreements",
        value: "Prototype",
        state: "prototype",
        description: `${summary.counts.agreements} prototype agreement event. Live site counters wait for signed demo receipts.`,
      },
      {
        id: "verification-receipts",
        title: "Verification Receipts",
        value: "Prototype",
        state: "prototype",
        description: `${summary.counts.verificationReceipts} prototype verification event. Production metrics stay off until real demo events exist.`,
      },
      {
        id: "settlement-receipts",
        title: "Settlement Receipts",
        value: "Prototype",
        state: "prototype",
        description: `${summary.counts.settlementReceipts} prototype settlement event. Rail references remain mock/testnet-first.`,
      },
      {
        id: "agent-credit-notes",
        title: "Agent Credit Notes",
        value: "Research",
        state: "research",
        description: `${summary.counts.creditNotes} research design event. Bounded credit Notes require testnet flows before live counters.`,
      },
    ],
  }
}

async function buildErgoWatchSnapshot(): Promise<ErgoWatchSnapshot> {
  const [
    info,
    v0Info,
    blockResponse,
    stablecoins,
    sigmaUsdProtocol,
    sigmaUsdBankBoxes,
    sigmaUsdOracleBoxes,
  ] =
    await Promise.all([
      fetchExplorerJson<ExplorerInfo>("/info"),
      fetchExplorerV0Json<ExplorerV0Info>("/info"),
      fetchExplorerJson<ExplorerBlocksResponse>(`/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`),
      fetchUrlJson<DefiLlamaStablecoinsResponse>(DEFILLAMA_STABLECOINS_API),
      fetchUrlJson<DefiLlamaProtocolResponse>(DEFILLAMA_SIGMAUSD_API),
      fetchExplorerJson<ExplorerBoxesResponse>(
        `/boxes/unspent/byAddress/${SIGMAUSD_BANK_ADDRESS}?limit=10`,
      ),
      fetchExplorerJson<ExplorerBoxesResponse>(
        `/boxes/unspent/byTokenId/${ERG_USD_ORACLE_NFT_ID}?limit=5`,
      ),
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
  const sigmaUsd = getSigmaUsdSnapshot({
    stablecoins,
    protocol: sigmaUsdProtocol,
    bankBoxes: sigmaUsdBankBoxes,
    oracleBoxes: sigmaUsdOracleBoxes,
  })
  const sigmaUsdStablecoinOk = Boolean(stablecoins)
  const sigmaUsdProtocolOk = Boolean(sigmaUsdProtocol)
  const sigmaUsdBankOk = Boolean(sigmaUsd.bankBox.id)
  const sigmaUsdOracleOk = Boolean(sigmaUsd.oracleBox.id)
  const sourceStatus = {
    reachable: [
      info,
      v0Info,
      blocks.length ? blockResponse : null,
      sigmaUsdStablecoinOk ? stablecoins : null,
      sigmaUsdProtocolOk ? sigmaUsdProtocol : null,
      sigmaUsdBankOk ? sigmaUsdBankBoxes : null,
      sigmaUsdOracleOk ? sigmaUsdOracleBoxes : null,
    ].filter(Boolean).length,
    total: 7,
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
      {
        id: "sigmausd-bank-box",
        label: "Explorer API / SigmaUSD bank box",
        href: SIGMAUSD_BANK_BOX_API,
        ok: sigmaUsdBankOk,
      },
      {
        id: "erg-usd-oracle-box",
        label: "Explorer API / ERG-USD oracle box",
        href: ERG_USD_ORACLE_BOX_API,
        ok: sigmaUsdOracleOk,
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
  ["ergo-watch-snapshot-v5"],
  { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
)
