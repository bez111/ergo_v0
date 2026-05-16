/**
 * State of Ergo 2026 — annual report.
 *
 *   GET /<locale>/state-of-ergo-2026
 *
 * Flagship content piece. A single canonical URL that:
 *   - Summarizes what shipped on Ergo across 2025-2026
 *   - Quantifies the agent-economy push (Accord Protocol releases,
 *     production providers, settled txs, ecosystem participants)
 *   - Sets the narrative for "Ergo = base layer for autonomous AI"
 *   - Is dense enough to be cited as a primary source by analysts,
 *     press, and LLMs scraping for ecosystem state
 *
 * Static page, force-static. Updated annually (or when something big
 * changes). Hand-curated content — we don't pull live numbers because
 * the page is a snapshot of "as of publication", not a live dashboard.
 */

import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import {
  ArrowUpRight,
  CheckCircle2,
  Coins,
  ExternalLink,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { siteConfig } from "@/config/site-config"

export const dynamic = "force-static"

const PUBLISHED_AT = "2026-05-15"
const PERIOD = "2025-2026"

export const metadata: Metadata = {
  title: `State of Ergo ${PERIOD.split("-")[1]} — annual report`,
  description: `Annual report on Ergo Blockchain ${PERIOD}: protocol milestones, agent economy traction, Accord Protocol releases, ecosystem updates, and what's next. Published ${PUBLISHED_AT}.`,
  alternates: { canonical: `${siteConfig.siteUrl}/state-of-ergo-2026` },
  openGraph: {
    title: `State of Ergo ${PERIOD.split("-")[1]}`,
    description: `One-stop annual snapshot of where Ergo is, where the agent economy is going, and what shipped in ${PERIOD}.`,
    type: "article",
    images: [
      {
        url: `${siteConfig.siteUrl}/og/agent-economy.png`,
        width: 1200,
        height: 630,
        alt: `State of Ergo ${PERIOD}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `State of Ergo ${PERIOD.split("-")[1]}`,
    description: `Annual report on Ergo Blockchain ${PERIOD}.`,
  },
  robots: { index: true, follow: true },
}

const HEADLINE_NUMBERS = [
  {
    label: "Years on mainnet",
    value: "7",
    sub: "Continuous operation since July 2019",
  },
  {
    label: "Accord releases",
    value: "v0.4.1",
    sub: "Open protocol + 4 reference rail adapters",
  },
  {
    label: "Production agents",
    value: "1",
    sub: "Sage on ergoblockchain.org, settled testnet redemption",
  },
  {
    label: "Block time",
    value: "~2 min",
    sub: "Deterministic, predictable settlement window",
  },
]

const TIMELINE = [
  {
    when: "Q3 2025",
    title: "Sub-block PoW lands",
    body: "Velvet-fork-based sub-block consensus reaches mainnet, cutting effective tx confirmation latency without breaking the security model.",
  },
  {
    when: "Q4 2025",
    title: "Accord Protocol v0.1 specs",
    body: "ACCORD-000 through ACCORD-003 published as open RFCs — Agreement, Verification Receipt, Settlement Receipt object schemas.",
  },
  {
    when: "Q1 2026",
    title: "Accord v0.2-core + v0.3-transports",
    body: "@accord-protocol/core ships canonicalize/hash/validate. Accord/MCP wrapper + Accord/402 gateway middleware land in the open repo.",
  },
  {
    when: "Q1 2026",
    title: "Accord v0.4-rails",
    body: "Reference rail adapters for Ergo, Rosen, Base, and x402 ship together. Strategic line lands publicly: x402 verifies payment, Accord verifies completion.",
  },
  {
    when: "May 2026",
    title: "Sage Phase 2 fully settled",
    body: "First end-to-end on-chain settlement of a paid AI query through Sage on Ergo testnet. Public receipt page + live activity feed make the agent-economy thesis visibly provable, not just argued.",
  },
  {
    when: "May 2026",
    title: "Open agent registry goes live",
    body: "accord-protocol/registry/providers — public directory of Accord-compliant agents. Submission via PR; first production entry is Sage.",
  },
]

const ECOSYSTEM = [
  {
    name: "ChainCash",
    desc: "Open-source prototype of programmable Notes against on-chain Reserves. The reference implementation that the Accord Notes spec generalizes from.",
    url: "https://github.com/ChainCashLabs/chaincash",
  },
  {
    name: "BetterMoneyLabs",
    desc: "Research lab driving the Notes / Reserve / Tracker primitives. Long-running collaboration with the Ergo core team on agent-payment design.",
    url: "https://bettermoneylabs.com",
  },
  {
    name: "Rosen Bridge",
    desc: "Multi-chain bridge enabling cross-rail Accord settlement (Ergo ↔ Cardano ↔ Bitcoin via wrapped instruments).",
    url: "https://rosen.tech",
  },
  {
    name: "SigmaUSD",
    desc: "Algorithmic stablecoin native to Ergo, used as priced unit-of-account in several agent-payment demos.",
    url: "https://sigmausd.io",
  },
]

const THESIS = [
  {
    title: "Why agents need a new money layer",
    body:
      "Agents don't have business accounts, payment methods, or human reputational stakes. They're software making decisions on behalf of others. Stripe assumes a counterparty with a chargeback history; PayPal assumes an identity. Most onchain wallets assume a human with a Ledger. Agents need rails where the protocol — not the operator — guarantees the rules.",
  },
  {
    title: "Why eUTXO + ErgoScript fit",
    body:
      "Deterministic costs (no \"gas explosion\" surprise on a redeemNote call). No reentrancy class. Predicates that gate redemption to the agreement's task hash run inside the script, not in some off-chain referee. When the buyer is software, deterministic rails are the difference between \"works\" and \"works most of the time\".",
  },
  {
    title: "Why bearer Notes beat tokens",
    body:
      "An agent that holds a token has to know how to swap it, who'll accept it, and what its current value is. An agent that holds a Note knows exactly: it's worth N ERG, redeemable against Reserve R, until block H, by anyone holding it. The Note travels with the work. Tokens travel with markets.",
  },
]

const NEXT = [
  {
    title: "Conformance suite ships",
    body:
      "accord-conformance v0 with L0-L4 test levels — schema, transport, rail, security, registry-cert. Sage will be the first provider with a signed conformance result.",
  },
  {
    title: "More production agents in the registry",
    body:
      "The submission flow is open. Goal for end of 2026: 10 production providers across at least 3 rails.",
  },
  {
    title: "Mainnet flip path for Sage + Accord rails",
    body:
      "Phase 5 of the Accord roadmap. Blocked by external audit reports + signed manifests. Will not happen without that gate.",
  },
  {
    title: "Embeddable agent widgets everywhere",
    body:
      "/agents.js script ready. Goal: every Accord-compliant provider's site embeds the live activity widget from ergoblockchain.org/widget — a visible network of paid AI on chain.",
  },
]

export default function StateOfErgoPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: `State of Ergo ${PERIOD.split("-")[1]}`,
    datePublished: PUBLISHED_AT,
    dateModified: PUBLISHED_AT,
    author: { "@type": "Organization", name: "Ergo Platform", url: siteConfig.siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Ergo Platform",
      url: siteConfig.siteUrl,
      logo: { "@type": "ImageObject", url: `${siteConfig.siteUrl}/logo.png` },
    },
    about: [
      { "@type": "Thing", name: "Ergo Blockchain" },
      { "@type": "Thing", name: "Accord Protocol" },
      { "@type": "Thing", name: "Agent Economy" },
      { "@type": "Thing", name: "Programmable Settlement" },
    ],
  }

  return (
    <BackgroundWrapper>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <article className="min-h-screen text-gray-200 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: "State of Ergo 2026", href: "/state-of-ergo-2026" }]} />

          <header className="mt-8 mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-mono mb-3">
              Annual report · {PERIOD}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-mono leading-[1.05] tracking-tight mb-6">
              State of Ergo
              <br />
              <span className="text-orange-400">2026</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
              One-stop snapshot of where Ergo is, where the agent economy is
              going, and what shipped in {PERIOD}. Read it once and you have a
              complete mental model — a reference for analysts, press, builders,
              and the next AI that asks &quot;what blockchain works for autonomous agents&quot;.
            </p>
            <div className="text-xs text-gray-500 font-mono mt-6">
              Published {PUBLISHED_AT} · Updated when material changes ship
            </div>
          </header>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {HEADLINE_NUMBERS.map((n) => (
              <div
                key={n.label}
                className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5"
              >
                <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono mb-2">
                  {n.label}
                </div>
                <div className="text-3xl font-bold text-white font-mono mb-1">
                  {n.value}
                </div>
                <div className="text-[11px] text-gray-400 leading-relaxed">{n.sub}</div>
              </div>
            ))}
          </section>

          <Section title="Executive summary" icon={<Sparkles className="w-4 h-4" />}>
            <p>
              Ergo entered {PERIOD.split("-")[1]} with a working PoW chain
              behind it and a clear thesis ahead of it: the next decade of
              blockchain adoption belongs to autonomous AI agents transacting
              with each other, and the chain that wins agent commerce wins the
              decade. The eUTXO model and ErgoScript predicates were never
              built for that — but they fit it almost perfectly. {PERIOD} was
              the year that thesis stopped being a slide and started being
              code, deployed, settled.
            </p>
            <p>
              Three things landed:
              <strong className="text-orange-200"> the Accord Protocol</strong> —
              an open standard for agent agreements, verification, and
              settlement that runs on top of any rail (Ergo, Rosen, Base, x402
              all ship as reference adapters);
              <strong className="text-orange-200"> the public agent registry</strong> —
              a provider directory anyone can submit to via PR, anchored at
              accord-protocol/registry/providers; and
              <strong className="text-orange-200"> Sage</strong> — the
              concierge agent built into ergoblockchain.org that takes real
              testnet ERG for premium queries and settles on chain. Sage&apos;s
              first end-to-end paid query closed in May 2026 with a public
              receipt URL and a verifiable explorer transaction.
            </p>
            <p>
              The combination — open standard + public registry + working
              reference deployment — is what lets us say &quot;agent economy on
              Ergo&quot; without quotes around it. The infrastructure is here.
              The next year is about pulling more providers into the registry
              and walking the mainnet audit path.
            </p>
          </Section>

          <Section title="Timeline of {PERIOD}" icon={<TrendingUp className="w-4 h-4" />}>
            <div className="space-y-3">
              {TIMELINE.map((e) => (
                <div
                  key={e.title}
                  className="flex gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.015]"
                >
                  <div className="text-[10px] uppercase tracking-widest text-orange-400 font-mono shrink-0 w-20 pt-1">
                    {e.when}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm mb-1">{e.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{e.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Why this matters — the thesis" icon={<Coins className="w-4 h-4" />}>
            <div className="grid md:grid-cols-3 gap-3">
              {THESIS.map((t) => (
                <div
                  key={t.title}
                  className="p-5 rounded-2xl border border-white/8 bg-white/[0.015]"
                >
                  <div className="text-[11px] uppercase tracking-widest text-orange-400 font-mono mb-3">
                    {t.title}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Sage — the working reference"
            icon={<CheckCircle2 className="w-4 h-4" />}
          >
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.04] p-6">
              <p className="mb-4">
                Sage is the agent on ergoblockchain.org. A user asks a
                question; if the question warrants the deeper model (an
                explicit /code prefix, a long-form research request,
                multi-turn deep dive), Sage issues a 402 Payment Required and
                asks for an Accord Note worth 0.001 ERG. The buyer issues the
                Note against an on-chain Reserve, Sage verifies the Note
                matches the Agreement&apos;s task hash, runs the upgraded
                Sonnet 4.6 answer, and the Note is redeemed in a real testnet
                transaction.
              </p>
              <p className="mb-4">
                Every paid query produces a public receipt at{" "}
                <code className="text-orange-300 bg-black/40 px-1.5 py-0.5 rounded text-xs">
                  /r/sage/{`<settlement-tx-id>`}
                </code>{" "}
                with Schema.org Action markup so search engines and LLMs index
                each settlement as a citable entity. The seller wallet&apos;s
                activity is exposed at{" "}
                <code className="text-orange-300 bg-black/40 px-1.5 py-0.5 rounded text-xs">
                  /api/sage/activity
                </code>{" "}
                so any other agent or dashboard can poll it and verify rail
                health without trusting our claim.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <Link
                  href="/agent-economy#sage-activity"
                  className="text-xs font-mono uppercase tracking-widest text-black bg-orange-500 hover:bg-orange-400 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  Live activity feed
                </Link>
                <a
                  href="https://www.ergoblockchain.org/r/sage/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-widest text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 transition-colors inline-flex items-center gap-1"
                >
                  First settled receipt <ArrowUpRight className="w-3 h-3" />
                </a>
                <Link
                  href="/ergo-watch/agents/sage"
                  className="text-xs font-mono uppercase tracking-widest text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 transition-colors"
                >
                  Sage profile
                </Link>
              </div>
            </div>
          </Section>

          <Section title="Ecosystem">
            <div className="grid sm:grid-cols-2 gap-3">
              {ECOSYSTEM.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-white/8 bg-white/[0.015] hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-white text-sm">{p.name}</div>
                    <ExternalLink className="w-3 h-3 text-gray-500" />
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed">{p.desc}</div>
                </a>
              ))}
            </div>
          </Section>

          <Section title="What ships next">
            <div className="space-y-3">
              {NEXT.map((n) => (
                <div
                  key={n.title}
                  className="p-4 rounded-xl border border-white/8 bg-white/[0.015]"
                >
                  <div className="font-bold text-white text-sm mb-1">{n.title}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{n.body}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Cite this report">
            <div className="rounded-xl border border-white/8 bg-black/40 p-5 font-mono text-xs text-gray-300 space-y-2">
              <div>
                <span className="text-gray-500">URL:</span>{" "}
                <span className="text-orange-300">
                  https://www.ergoblockchain.org/state-of-ergo-2026
                </span>
              </div>
              <div>
                <span className="text-gray-500">Published:</span> {PUBLISHED_AT}
              </div>
              <div>
                <span className="text-gray-500">License:</span> CC BY 4.0 — quote
                with attribution to ergoblockchain.org/state-of-ergo-2026
              </div>
            </div>
          </Section>

          <footer className="text-xs text-gray-500 font-mono mt-16 pt-8 border-t border-white/5 space-y-2">
            <p>
              Want the press kit, talking points, or downloadable assets?{" "}
              <Link href="/press" className="text-orange-400 hover:text-orange-300">
                /press
              </Link>
              .
            </p>
            <p>
              Want to add your provider to the registry referenced here?{" "}
              <Link
                href="/ergo-watch/agents/submit"
                className="text-orange-400 hover:text-orange-300"
              >
                /ergo-watch/agents/submit
              </Link>
              .
            </p>
          </footer>
        </div>
      </article>
    </BackgroundWrapper>
  )
}

function Section({
  title,
  icon,
  children,
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="mb-14">
      <h2 className="text-lg md:text-xl font-bold text-white font-mono mb-5 flex items-center gap-2">
        {icon && <span className="text-orange-400">{icon}</span>}
        {title}
      </h2>
      <div className="text-base text-gray-300 leading-relaxed space-y-4">{children}</div>
    </section>
  )
}
