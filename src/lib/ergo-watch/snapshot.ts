import { unstable_cache } from "next/cache"
import type {
  ErgoWatchMetric,
  ErgoWatchSnapshot,
  ExplorerBlocksResponse,
  ExplorerBlock,
  ExplorerInfo,
  MiningShare,
} from "./types"

export const ERGO_EXPLORER_API = "https://api.ergoplatform.com/api/v1"
export const ERGO_WATCH_REVALIDATE_SECONDS = 300
export const ERGO_WATCH_SAMPLE_BLOCKS = 100

const BLOCKS_PER_EPOCH = 1024
const TARGET_BLOCK_INTERVAL_SECONDS = 120

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

function shortHash(value: string | undefined | null) {
  if (!value) return "Unavailable"
  return `${value.slice(0, 10)}...${value.slice(-6)}`
}

function shortAddress(value: string | undefined | null) {
  if (!value) return "Unknown miner"
  return `${value.slice(0, 8)}...${value.slice(-8)}`
}

async function fetchExplorerJson<T>(path: string) {
  try {
    const response = await fetch(`${ERGO_EXPLORER_API}${path}`, {
      headers: { accept: "application/json" },
      next: { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
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

async function buildErgoWatchSnapshot(): Promise<ErgoWatchSnapshot> {
  const [info, blockResponse] = await Promise.all([
    fetchExplorerJson<ExplorerInfo>("/info"),
    fetchExplorerJson<ExplorerBlocksResponse>(`/blocks?limit=${ERGO_WATCH_SAMPLE_BLOCKS}`),
  ])

  const blocks = blockResponse?.items ?? []
  const latestBlock = blocks[0]
  const latestHeight = info?.height ?? latestBlock?.height ?? null
  const latestBlockId = latestBlock?.id ?? info?.lastBlockId ?? null
  const avgBlockTimeSeconds = getAverageBlockTimeSeconds(blocks)
  const miningDistribution = getMiningDistribution(blocks)
  const topMinerShare = miningDistribution[0]?.share ?? null
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
  const sourceStatus = {
    reachable: [info, blocks.length ? blockResponse : null].filter(Boolean).length,
    total: 2,
  }

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
    ],
    chain: {
      height: latestHeight,
      latestBlockId,
      latestBlockAge: formatAge(latestBlock?.timestamp),
      avgBlockTimeSeconds,
      topMinerShare,
    },
    metrics: [
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
  }
}

export const getErgoWatchSnapshot = unstable_cache(
  buildErgoWatchSnapshot,
  ["ergo-watch-snapshot-v1"],
  { revalidate: ERGO_WATCH_REVALIDATE_SECONDS },
)
