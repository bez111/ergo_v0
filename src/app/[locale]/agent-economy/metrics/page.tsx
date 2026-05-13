import type { Metadata } from "next"
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle,
  Database,
  ExternalLink,
  FileCheck,
  GitBranch,
  Landmark,
  Network,
  ShieldCheck,
  TimerReset,
} from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"
const ERGO_EXPLORER_API = "https://api.ergoplatform.com/api/v1"
const BLOCK_INTERVAL_SECONDS = 120

export const revalidate = 300

type ExplorerInfo = {
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

type ExplorerBlock = {
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

type ExplorerBlocksResponse = {
  items?: ExplorerBlock[]
  total?: number
}

const overlayMetrics = [
  {
    title: "Accord Agreements",
    status: "Prototype",
    description: "Count signed work agreements, requested tools, price terms and expiry windows.",
    icon: FileCheck,
  },
  {
    title: "Verification Receipts",
    status: "Prototype",
    description: "Track accepted, rejected and disputed work outcomes without treating demos as production.",
    icon: ShieldCheck,
  },
  {
    title: "Settlement Receipts",
    status: "Prototype",
    description: "Connect verified work to mock, testnet or audited future settlement references.",
    icon: CheckCircle,
  },
  {
    title: "Agent Credit Notes",
    status: "Research",
    description: "Measure note issuance, redemption, expiry and failed acceptance predicates.",
    icon: GitBranch,
  },
  {
    title: "Wallet Policy Events",
    status: "Draft",
    description: "Surface spending caps, recipient allowlists, blocked spends and human approval thresholds.",
    icon: TimerReset,
  },
]

function formatNumber(value: number | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US").format(value)
}

function formatCompact(value: number | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value)
}

function formatBytes(value: number | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return "Unavailable"
  if (value < 1024) return `${formatNumber(value)} B`
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`
  return `${(value / (1024 * 1024)).toFixed(2)} MB`
}

function formatErg(nanoErg: number | undefined) {
  if (typeof nanoErg !== "number" || !Number.isFinite(nanoErg)) return "Unavailable"
  return `${new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
  }).format(nanoErg / 1_000_000_000)} ERG`
}

function formatAge(timestamp: number | undefined) {
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

function shortHash(value: string | undefined) {
  if (!value) return "Unavailable"
  return `${value.slice(0, 10)}...${value.slice(-6)}`
}

function shortAddress(value: string | undefined) {
  if (!value) return "Address unavailable"
  return `${value.slice(0, 8)}...${value.slice(-8)}`
}

async function fetchExplorerJson<T>(path: string) {
  try {
    const response = await fetch(`${ERGO_EXPLORER_API}${path}`, {
      headers: { accept: "application/json" },
      next: { revalidate },
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  }
}

async function getDirectChainMetrics() {
  const [info, blockResponse] = await Promise.all([
    fetchExplorerJson<ExplorerInfo>("/info"),
    fetchExplorerJson<ExplorerBlocksResponse>("/blocks?limit=1"),
  ])

  const latestBlock = blockResponse?.items?.[0]
  const sourceStatus = [info, latestBlock].filter(Boolean).length
  const epochProgress =
    typeof latestBlock?.height === "number"
      ? `${formatNumber(latestBlock.height % 1024)} / 1,024`
      : "Unavailable"
  const estimatedBlocksLeft =
    typeof latestBlock?.height === "number" ? 1024 - (latestBlock.height % 1024) : undefined

  return {
    sourceStatus,
    metrics: [
      {
        title: "Block height",
        value: formatNumber(info?.height ?? latestBlock?.height),
        description: "Latest indexed mainnet height from the public Ergo Explorer API.",
        source: "Explorer API / info",
        href: `${ERGO_EXPLORER_API}/info`,
        icon: Network,
      },
      {
        title: "Latest block",
        value: shortHash(latestBlock?.id ?? info?.lastBlockId),
        description: latestBlock?.timestamp
          ? `Observed ${formatAge(latestBlock.timestamp)}.`
          : "Latest block hash from Explorer API.",
        source: "Explorer API / blocks",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: Database,
      },
      {
        title: "Epoch",
        value: formatNumber(latestBlock?.epoch),
        description: `Epoch progress: ${epochProgress}.`,
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: TimerReset,
      },
      {
        title: "Epoch blocks left",
        value: formatNumber(estimatedBlocksLeft),
        description: `Approximate remaining blocks at ${BLOCK_INTERVAL_SECONDS}s target spacing.`,
        source: "Derived from height",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: TimerReset,
      },
      {
        title: "Latest block txs",
        value: formatNumber(latestBlock?.transactionsCount),
        description: "Transaction count in the most recent block returned by Explorer API.",
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: Activity,
      },
      {
        title: "Difficulty",
        value: formatCompact(latestBlock?.difficulty),
        description: "Mining difficulty reported on the latest indexed block.",
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: BarChart3,
      },
      {
        title: "Miner reward",
        value: formatErg(latestBlock?.minerReward),
        description: "Current reward emitted by the latest block sample.",
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: Landmark,
      },
      {
        title: "Latest miner",
        value: latestBlock?.miner?.name || "Unknown",
        description: shortAddress(latestBlock?.miner?.address),
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: Activity,
      },
      {
        title: "Block size",
        value: formatBytes(latestBlock?.size),
        description: "Serialized size of the latest indexed block sample.",
        source: "Latest block",
        href: `${ERGO_EXPLORER_API}/blocks?limit=1`,
        icon: Database,
      },
      {
        title: "Max block size",
        value: formatBytes(info?.params?.maxBlockSize),
        description: "Current protocol parameter from Explorer API network info.",
        source: "Explorer API / info",
        href: `${ERGO_EXPLORER_API}/info`,
        icon: Network,
      },
      {
        title: "Min value per byte",
        value:
          typeof info?.params?.minValuePerByte === "number"
            ? `${formatNumber(info.params.minValuePerByte)} nanoERG`
            : "Unavailable",
        description: "Minimum box value density from current protocol parameters.",
        source: "Explorer API / info",
        href: `${ERGO_EXPLORER_API}/info`,
        icon: ShieldCheck,
      },
      {
        title: "Storage fee factor",
        value: formatNumber(info?.params?.storageFeeFactor),
        description: "Storage rent parameter exposed by the public chain info endpoint.",
        source: "Explorer API / info",
        href: `${ERGO_EXPLORER_API}/info`,
        icon: BarChart3,
      },
    ],
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Metrics | Direct Ergo Chain Data + Accord Overlay",
    description:
      "A testnet-first metrics layer for the Ergo Agent Economy: direct public Ergo Explorer API data plus future Accord agreement, verification, settlement and agent-credit metrics.",
    alternates: getAlternates("/agent-economy/metrics", locale),
    openGraph: {
      title: "Agent Economy Metrics on Ergo",
      description:
        "Direct Ergo chain data plus agreement, verification, settlement and agent-credit metrics for the agent economy.",
      url: getCanonicalUrl("/agent-economy/metrics", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.png`,
          width: 1200,
          height: 630,
          alt: "Ergo Agent Economy metrics layer",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Economy Metrics on Ergo",
      description:
        "Direct Ergo chain visibility plus a testnet-first Accord metrics overlay.",
      images: [`${BASE_URL}/og/agent-economy.png`],
    },
  }
}

export default async function AgentEconomyMetricsPage() {
  const { metrics, sourceStatus } = await getDirectChainMetrics()

  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Metrics", href: "/agent-economy/metrics" },
              ]}
              className="mb-10 opacity-70"
            />

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
                <Bot className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                  Agent Economy Metrics
                </span>
              </div>

              <h1
                className="font-extrabold tracking-tight mb-6 text-white"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1,
                }}
              >
                Direct Ergo chain data.
                <br />
                <span className="text-orange-400">Agent metrics overlay.</span>
              </h1>

              <p
                className="text-neutral-300 mb-10"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 22px)",
                  lineHeight: 1.5,
                  maxWidth: "62ch",
                }}
              >
                This is the new-design surface for ergowatch.ergoblockchain.org. It connects
                directly to public Ergo Explorer API endpoints for chain state, then adds the
                missing agent-economy layer: agreements, verification receipts, settlement receipts,
                policy events and bounded credit instruments. No copied frontend. No fake live numbers.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`${ERGO_EXPLORER_API}/info`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                >
                  <span>Open chain API</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/agent-economy"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500/10 text-orange-400 font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-sm"
                >
                  <span>Back to agent economy</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                Direct chain data
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.1,
                }}
              >
                Our own chain visibility layer.
              </h2>
              <p className="text-neutral-400 mt-4 max-w-3xl leading-relaxed">
                Values are read server-side from public Ergo Explorer API endpoints and cached for five
                minutes. If a source is unreachable, the metric shows Unavailable instead of inventing a
                number or sending visitors to a dead upstream dashboard.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-orange-300">
                Sources reachable: {sourceStatus}/2 · {sourceStatus === 2 ? "live/cached" : "partial data"}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {metrics.map((metric) => (
                <Card
                  key={metric.title}
                  className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/35 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center">
                        <metric.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">{metric.title}</h3>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-orange-400/80">
                          {metric.source}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 text-3xl font-extrabold tracking-tight text-white">
                      {metric.value}
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{metric.description}</p>
                    <a
                      href={metric.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-orange-500/70 hover:text-orange-400 transition-colors text-xs font-mono"
                    >
                      <span>Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                Agent overlay
              </p>
              <h2
                className="font-extrabold tracking-tight text-white"
                style={{
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  lineHeight: 1.1,
                }}
              >
                What ordinary chain analytics do not count yet.
              </h2>
              <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
                These are the metrics that make agent commerce different from ordinary chain analytics.
                They remain prototype or draft until Accord demos and audited contracts produce reliable,
                signed event streams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {overlayMetrics.map((metric) => (
                <Card
                  key={metric.title}
                  className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/35 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center">
                        <metric.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">{metric.title}</h3>
                        <span className="mt-1 inline-flex rounded-full border border-orange-500/25 bg-orange-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-orange-300">
                          {metric.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-5">
              {[
                {
                  label: "1",
                  title: "Chain state",
                  body: "Blocks, miner rewards, difficulty and protocol parameters come directly from public Ergo chain APIs.",
                },
                {
                  label: "2",
                  title: "Work state",
                  body: "Accord records what was promised, how it was verified, and how a settlement reference was produced.",
                },
                {
                  label: "3",
                  title: "Credit state",
                  body: "Notes, reserves, trackers and wallet policy events explain how agents coordinate future work before final settlement.",
                },
              ].map((step) => (
                <Card key={step.label} className="bg-black/80 border border-white/8 rounded-3xl">
                  <CardContent className="p-7">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-500/25 bg-orange-500/10 font-mono text-sm font-bold text-orange-300">
                        {step.label}
                      </span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-neutral-400 leading-relaxed">{step.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
