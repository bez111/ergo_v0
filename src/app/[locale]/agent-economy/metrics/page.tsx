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

const upstreamMetrics = [
  {
    title: "Network parameters",
    description: "Epoch, proposals, protocol parameters and recent miner vote configuration.",
    href: "https://ergo.watch/dashboards/network",
    icon: Network,
  },
  {
    title: "Mining distribution",
    description: "Hashrate, difficulty, block time and recent miner or pool share.",
    href: "https://ergo.watch/dashboards/mining",
    icon: Activity,
  },
  {
    title: "Emission and supply",
    description: "Circulating supply, current block reward and next reward reduction.",
    href: "https://ergo.watch/dashboards/emission",
    icon: BarChart3,
  },
  {
    title: "Address counts",
    description: "P2PK, contract and reward address counts from indexed chain data.",
    href: "https://ergo.watch/dashboards/addresses",
    icon: Database,
  },
  {
    title: "SigmaUSD state",
    description: "SigUSD, SigRSV, reserves, liabilities, equity, ratio and TVL.",
    href: "https://ergo.watch/dashboards/sigmausd",
    icon: Landmark,
  },
]

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Agent Economy Metrics | ErgoWatch-powered Network Data + Accord Overlay",
    description:
      "A testnet-first metrics layer for the Ergo Agent Economy: ErgoWatch upstream dashboards for network data plus future Accord agreement, verification, settlement and agent-credit metrics.",
    alternates: getAlternates("/agent-economy/metrics", locale),
    openGraph: {
      title: "Agent Economy Metrics on Ergo",
      description:
        "ErgoWatch powers network visibility. Accord adds agreement, verification, settlement and agent-credit metrics without replacing upstream analytics.",
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
        "ErgoWatch-powered chain visibility plus a testnet-first Accord metrics overlay.",
      images: [`${BASE_URL}/og/agent-economy.png`],
    },
  }
}

export default function AgentEconomyMetricsPage() {
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
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                ErgoWatch data.
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
                ErgoWatch already tracks the chain. This page defines the missing agent-economy layer:
                agreements, verification receipts, settlement receipts, policy events and bounded credit
                instruments. No copied ErgoWatch frontend. No fake live numbers.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ergo.watch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
                >
                  <span>Open ErgoWatch</span>
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
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-start">
              <div>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
                  Upstream first
                </p>
                <h2
                  className="font-extrabold tracking-tight text-white mb-6"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  We do not replace ErgoWatch.
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-6" style={{ maxWidth: "56ch" }}>
                  The ErgoWatch backend is MIT licensed and indexes Ergo chain data into PostgreSQL from
                  a synced Ergo node. Its frontend repository does not currently expose a license, so this
                  page uses original UI and links to ErgoWatch as the upstream analytics source.
                </p>
                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-5">
                  <p className="text-white font-semibold leading-relaxed">
                    Rule: ErgoWatch for network truth. Accord for agent workflow truth. The website
                    connects both without pretending prototypes are production metrics.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {upstreamMetrics.map((metric) => (
                  <a
                    key={metric.title}
                    href={metric.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-3xl"
                  >
                    <Card className="h-full bg-black/80 border border-white/8 rounded-3xl hover:border-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center gap-4">
                          <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex shrink-0 items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all">
                            <metric.icon className="w-5 h-5 text-orange-400" />
                          </div>
                          <h3 className="font-bold text-white text-base group-hover:text-orange-100 transition-colors">
                            {metric.title}
                          </h3>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                          {metric.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-orange-500/70 group-hover:text-orange-400 transition-colors text-xs font-mono">
                          <span>View upstream</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
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
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                What ErgoWatch does not count yet.
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
                  body: "Blocks, mining, emission, address and contract state come from existing Ergo analytics sources such as ErgoWatch.",
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
