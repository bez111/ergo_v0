import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { ShieldCheck, AlertTriangle, ExternalLink, FileText, Github } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "Ergo Security Audits & Maturity",
    description: "Maturity status of Ergo's protocol code, ecosystem prototypes, and reference implementations. What's been audited, what hasn't, and how to verify yourself.",
    alternates: getAlternates("/audits", locale),
    openGraph: {
      type: "website",
      url: getCanonicalUrl("/audits", locale),
      siteName: "Ergo Platform",
      title: "Ergo Security Audits & Maturity",
      description: "What's audited, what's experimental, what's prototype. Honest maturity matrix for the Ergo stack.",
      locale: getOgLocale(locale),
    },
    robots: { index: true, follow: true },
  }
}

const LAST_REVIEWED = "2026-05-06"

type Maturity = "Mainnet" | "Beta" | "Prototype" | "Research"

const STACK = [
  {
    name: "Ergo node (Scala reference client)",
    repo: "https://github.com/ergoplatform/ergo",
    maturity: "Mainnet" as Maturity,
    runningSince: "July 2019",
    notes: "The reference protocol implementation. Open source, peer-reviewed via EIPs and academic publications. Multiple independent third-party clients exist. The protocol has run continuously since launch with no chain halts to date.",
    sources: [
      { label: "Source code", href: "https://github.com/ergoplatform/ergo" },
      { label: "EIPs", href: "https://github.com/ergoplatform/eips" },
      { label: "Whitepaper", href: "https://ergoplatform.org/en/documents/whitepaper.pdf" },
    ],
  },
  {
    name: "ErgoScript / Sigma Protocols",
    repo: "https://github.com/ScorexFoundation/sigmastate-interpreter",
    maturity: "Mainnet" as Maturity,
    runningSince: "July 2019",
    notes: "Smart contract language and cryptographic protocol implementation. Live since mainnet genesis. Sigma Protocols are based on peer-reviewed cryptographic research published before launch.",
    sources: [
      { label: "Sigmastate interpreter", href: "https://github.com/ScorexFoundation/sigmastate-interpreter" },
      { label: "Sigma Protocols paper", href: "https://docs.ergoplatform.com/dev/scs/sigma/" },
    ],
  },
  {
    name: "Sigma Rust",
    repo: "https://github.com/ergoplatform/sigma-rust",
    maturity: "Mainnet" as Maturity,
    runningSince: "Production-used since 2021",
    notes: "Rust implementation of Ergo's transaction building, ErgoScript interpreter, and serialization. Used by major wallets and infrastructure. No formal third-party audit published — review the source and use it for the value at risk.",
    sources: [
      { label: "Source code", href: "https://github.com/ergoplatform/sigma-rust" },
    ],
  },
  {
    name: "Fleet SDK",
    repo: "https://github.com/fleet-sdk",
    maturity: "Beta" as Maturity,
    runningSince: "2023",
    notes: "TypeScript transaction-building library. Widely used in production dApps and browser wallets. Open source and battle-tested in real flows, but no formal security audit published.",
    sources: [
      { label: "GitHub org", href: "https://github.com/fleet-sdk" },
      { label: "Docs", href: "https://fleet-sdk.github.io/docs/" },
    ],
  },
  {
    name: "Nautilus Wallet",
    repo: "https://github.com/capt-nemo429/nautilus-wallet",
    maturity: "Beta" as Maturity,
    runningSince: "2022",
    notes: "Most-used Ergo browser wallet. Open source. Self-custody. No third-party security audit published — verify the URL before connecting (web wallets carry phishing risk) and use a hardware wallet for significant balances.",
    sources: [
      { label: "Source code", href: "https://github.com/capt-nemo429/nautilus-wallet" },
    ],
  },
  {
    name: "Rosen Bridge",
    repo: "https://github.com/rosen-bridge",
    maturity: "Beta" as Maturity,
    runningSince: "2024",
    notes: "Multi-signature bridge to Ethereum, Cardano, Bitcoin and others. Cross-chain bridges have historically been targeted by major exploits across the industry. Use small amounts; review the multi-sig set; don't bridge funds you can't afford to lose.",
    sources: [
      { label: "GitHub org", href: "https://github.com/rosen-bridge" },
    ],
  },
  {
    name: "ChainCash",
    repo: "https://github.com/ChainCashLabs/chaincash",
    maturity: "Prototype" as Maturity,
    runningSince: "Active R&D, 2025—",
    notes: "Reference implementation of the Note + Reserve + Tracker payment stack on Ergo. The repository describes itself as prototype / very rough prototyping code. No production releases or security audits. Use for research, testnet experiments, or small-amount mainnet trials only.",
    sources: [
      { label: "Source code", href: "https://github.com/ChainCashLabs/chaincash" },
      { label: "Status notice", href: "https://github.com/ChainCashLabs/chaincash#status" },
    ],
  },
  {
    name: "ergo-agent-economy SDK",
    repo: "https://github.com/bez111/ergo-agent-economy",
    maturity: "Prototype" as Maturity,
    runningSince: "March 2026",
    notes: "Open-source agent payment SDK. Three packages (TS, Python, MCP) with 10 working examples (LangChain, OpenAI, CrewAI, AutoGen). Pre-1.0, no security audit. Suitable for testnet development and small-amount experiments.",
    sources: [
      { label: "Source code", href: "https://github.com/bez111/ergo-agent-economy" },
      { label: "Q2 2026 update", href: "/blog/ergo-agent-economy-q2-2026" },
    ],
  },
  {
    name: "Spectrum Finance (DEX)",
    repo: "https://github.com/spectrum-finance",
    maturity: "Mainnet" as Maturity,
    runningSince: "2022",
    notes: "Cross-chain DEX with AMM on Ergo. Live on mainnet with significant user activity. Independent third-party security audit status: review their public docs before depositing larger amounts.",
    sources: [
      { label: "GitHub org", href: "https://github.com/spectrum-finance" },
    ],
  },
  {
    name: "SigmaUSD",
    repo: "https://github.com/anon-real/sigmausd",
    maturity: "Mainnet" as Maturity,
    runningSince: "2021",
    notes: "Algorithmic stablecoin on Ergo with ERG collateral. Live on mainnet for several years with documented mechanism. As with any algorithmic stablecoin: understand the collateral mechanism before depositing and watch reserve ratio risk during volatile markets.",
    sources: [
      { label: "Mechanism docs", href: "https://docs.ergoplatform.com/uses/stablecoins/" },
    ],
  },
]

const MATURITY_STYLE: Record<Maturity, string> = {
  Mainnet: "text-green-300 bg-green-500/10 border-green-500/30",
  Beta: "text-blue-300 bg-blue-500/10 border-blue-500/30",
  Prototype: "text-yellow-300 bg-yellow-500/10 border-yellow-500/30",
  Research: "text-neutral-300 bg-neutral-500/10 border-neutral-500/30",
}

export default function AuditsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">Security</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Audits &amp; Maturity Status
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            Honest maturity classification for the Ergo protocol, key infrastructure, and ecosystem
            prototypes. Don&apos;t take our word for it — every entry links to source code so you can
            verify yourself.
          </p>
          <p className="text-xs text-neutral-500 font-mono mt-4">
            Last reviewed: {LAST_REVIEWED} ·{" "}
            <Link href="/legal/editorial" className="text-orange-400 hover:underline">editorial policy</Link> ·{" "}
            <Link href="/legal/security" className="text-orange-400 hover:underline">responsible disclosure</Link>
          </p>
        </header>

        {/* Legend */}
        <section className="mb-10 rounded-3xl border border-white/10 bg-neutral-950/60 p-6">
          <h2 className="text-sm font-mono text-orange-400 uppercase tracking-wider mb-4">Maturity legend</h2>
          <dl className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="inline-flex items-center gap-2 mb-1.5">
                <Badge maturity="Mainnet" />
                <span className="text-white font-bold">Mainnet</span>
              </dt>
              <dd className="text-neutral-400 text-xs leading-relaxed">
                Live in production for ≥ 1 year with documented review process. Still — verify before
                committing significant value.
              </dd>
            </div>
            <div>
              <dt className="inline-flex items-center gap-2 mb-1.5">
                <Badge maturity="Beta" />
                <span className="text-white font-bold">Beta</span>
              </dt>
              <dd className="text-neutral-400 text-xs leading-relaxed">
                Production-used but pre-1.0 or without published third-party audit. Suitable for typical
                use; review for larger amounts.
              </dd>
            </div>
            <div>
              <dt className="inline-flex items-center gap-2 mb-1.5">
                <Badge maturity="Prototype" />
                <span className="text-white font-bold">Prototype</span>
              </dt>
              <dd className="text-neutral-400 text-xs leading-relaxed">
                Active research / pre-release code. Expect breaking changes. No production releases or
                audits. Testnet first.
              </dd>
            </div>
            <div>
              <dt className="inline-flex items-center gap-2 mb-1.5">
                <Badge maturity="Research" />
                <span className="text-white font-bold">Research</span>
              </dt>
              <dd className="text-neutral-400 text-xs leading-relaxed">
                Specification or design phase only. No deployable code yet.
              </dd>
            </div>
          </dl>
        </section>

        {/* Stack table */}
        <section className="mb-10 space-y-4">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-neutral-950/60 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-neutral-500 text-xs font-mono mt-1">Active since {item.runningSince}</p>
                </div>
                <Badge maturity={item.maturity} />
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                {item.notes}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {item.sources.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>[{s.label}]</span>
                    {s.href.startsWith("http") && <ExternalLink className="w-2.5 h-2.5" />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Risk reminder */}
        <section className="rounded-3xl border border-red-500/30 bg-red-500/5 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Maturity classification is not a guarantee</h2>
              <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                Even Mainnet-classified software can have undiscovered bugs. Even audited systems have been
                exploited. The classification on this page reflects deployment history and review process,
                not a security guarantee.
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Read the{" "}
                <Link href="/legal/risk" className="text-orange-400 hover:underline">full risk disclosure</Link>{" "}
                and report anything you find through the{" "}
                <Link href="/legal/security" className="text-orange-400 hover:underline">responsible disclosure policy</Link>.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

function Badge({ maturity }: { maturity: Maturity }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider border rounded-full px-2.5 py-1 ${MATURITY_STYLE[maturity]}`}
    >
      {maturity === "Mainnet" ? (
        <ShieldCheck className="w-3 h-3" />
      ) : maturity === "Prototype" ? (
        <AlertTriangle className="w-3 h-3" />
      ) : maturity === "Beta" ? (
        <Github className="w-3 h-3" />
      ) : (
        <FileText className="w-3 h-3" />
      )}
      <span>{maturity}</span>
    </span>
  )
}
