import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { Github, FileText, Users, Code2, ShieldCheck, Network, ArrowRight, ExternalLink } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "About Ergo Platform | Open-Source Blockchain Project",
    description: "Who maintains Ergo: open-source contributors, governance through soft forks, no foundation multisig, fair-launched 2019. Reference client, research, and how to participate.",
    alternates: getAlternates("/about", locale),
    openGraph: {
      type: "website",
      url: getCanonicalUrl("/about", locale),
      siteName: "Ergo Platform",
      title: "About Ergo Platform",
      description: "Open-source Layer-1 PoW blockchain launched July 2019. Maintained by community contributors. Fair launch, no pre-mine, no VC.",
      locale: getOgLocale(locale),
    },
    robots: { index: true, follow: true },
  }
}

const FACTS = [
  { label: "Project type", value: "Open-source Layer-1 blockchain protocol" },
  { label: "Launched", value: "July 2019 — fair launch, no ICO, no pre-mine, no VC" },
  { label: "License", value: "Reference client: CC0 / MIT — fully open" },
  { label: "Governance", value: "Soft fork upgrades coordinated through public proposals (EIPs)" },
  { label: "Funding", value: "Community treasury (storage rent + voluntary contributions); no foundation multisig" },
  { label: "Maintainers", value: "Volunteer contributors — protocol developers, ecosystem builders, technical writers" },
]

const RESOURCES = [
  { name: "Reference client (Scala)", url: "https://github.com/ergoplatform/ergo", description: "The Ergo node implementation" },
  { name: "GitHub organization", url: "https://github.com/ergoplatform", description: "All Ergo-maintained repositories" },
  { name: "Whitepaper", url: "https://ergoplatform.org/en/documents/whitepaper.pdf", description: "Original protocol design (PDF)" },
  { name: "Research papers", url: "https://ergoplatform.org/en/documents/", description: "Sigma Protocols, eUTXO, NIPoPoWs, more" },
  { name: "Ergo Improvement Proposals (EIPs)", url: "https://github.com/ergoplatform/eips", description: "Public protocol upgrade specs" },
  { name: "Community forum", url: "https://www.ergoforum.org/", description: "Long-form discussions, design debates" },
]

const COMMUNITY = [
  { name: "Discord", url: "https://discord.com/invite/ergo-platform-668903786361651200", role: "General discussion, support" },
  { name: "Telegram", url: "https://t.me/ergoplatform", role: "Announcements, casual chat" },
  { name: "Twitter / X", url: "https://x.com/BuildOnErgo", role: "Project news, ecosystem highlights" },
  { name: "Reddit", url: "https://www.reddit.com/r/ergonauts/", role: "Long-form community discussion" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About Ergo Platform</h1>
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            Ergo is an open-source Layer-1 Proof-of-Work blockchain launched in July 2019. It combines
            Bitcoin&apos;s security model with smart contract programmability through the Extended UTXO (eUTXO)
            model and ErgoScript. There is no central company behind the project — it&apos;s maintained by
            volunteer contributors.
          </p>
        </header>

        {/* Verifiable facts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
            Project facts
          </h2>
          <div className="rounded-3xl border border-white/10 bg-neutral-950/60 p-6">
            <dl className="space-y-3.5 text-sm">
              {FACTS.map((f) => (
                <div key={f.label} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-4 gap-y-1 pb-3.5 border-b border-white/5 last:border-0">
                  <dt className="text-neutral-500 font-mono text-xs uppercase tracking-wider mt-0.5">{f.label}</dt>
                  <dd className="text-neutral-100 leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What Ergo is for */}
        <section className="mb-12 space-y-4 text-neutral-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-3">What Ergo is for</h2>
          <p>
            The protocol is designed for use cases where deterministic execution and predictable cost matter
            more than raw throughput: programmable money, decentralized finance with auditable contracts,
            optional privacy through Sigma Protocols, and — increasingly — settlement infrastructure for
            autonomous AI agents.
          </p>
          <p>
            Ergo doesn&apos;t target the maximum-TPS niche. It targets the &quot;does this transaction execute
            exactly as I expect, every time, at a known cost?&quot; niche. That&apos;s why eUTXO, Babel Fees,
            and ErgoScript acceptance predicates exist.
          </p>
          <div className="pt-2">
            <Link
              href="/agent-economy"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-mono text-sm transition-colors"
            >
              <span>Read the agent economy positioning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Governance */}
        <section className="mb-12 space-y-4 text-neutral-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-3">How the protocol changes</h2>
          <p>
            There is no foundation multisig with the power to halt the network or freeze funds. Protocol
            upgrades happen through soft forks coordinated by public proposals (Ergo Improvement Proposals).
            Miners signal support through their blocks. Anyone can submit an EIP.
          </p>
          <p>
            Day-to-day site changes (this website, blog posts, docs) are handled through the public
            <a href="https://github.com/bez111/ergo_v0" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline"> GitHub repository</a> using
            standard pull-request review. Editorial standards are documented in the{" "}
            <Link href="/legal/editorial" className="text-orange-400 hover:underline">Editorial Policy</Link>.
          </p>
        </section>

        {/* Where to find primary sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-400" />
            Primary sources
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {RESOURCES.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-neutral-950/40 p-5 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm flex items-center gap-1.5 group-hover:text-orange-100 transition-colors">
                      {r.name}
                      <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-orange-400" />
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1.5 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-5 flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-400" />
            Community channels
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {COMMUNITY.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/10 bg-neutral-950/40 p-5 hover:border-orange-500/30 transition-colors"
              >
                <h3 className="font-bold text-white text-sm flex items-center gap-1.5 group-hover:text-orange-100 transition-colors">
                  {c.name}
                  <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-orange-400" />
                </h3>
                <p className="text-neutral-400 text-xs mt-1.5 leading-relaxed">{c.role}</p>
              </a>
            ))}
          </div>
        </section>

        {/* How to contribute */}
        <section className="rounded-3xl border border-orange-500/25 bg-gradient-to-br from-orange-500/8 via-black/80 to-black/80 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-orange-400" />
            How to contribute
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed mb-5">
            Ergo is open source — protocol, tooling, ecosystem dApps, this website, and documentation. There
            is no application process. Pick something, open a pull request, or start a discussion.
          </p>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-start gap-2">
              <Github className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <span>
                <strong className="text-white">Protocol:</strong>{" "}
                <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">github.com/ergoplatform/ergo</a> — Scala reference client, EIPs, research
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Code2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <span>
                <strong className="text-white">Agent economy:</strong>{" "}
                <a href="https://github.com/bez111/ergo-agent-economy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">github.com/bez111/ergo-agent-economy</a> — SDKs (TS/Python/MCP), examples
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Network className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
              <span>
                <strong className="text-white">Ecosystem:</strong>{" "}
                <Link href="/ecosystem" className="text-orange-400 hover:underline">browse projects</Link> {" "}
                — wallets, dApps, infrastructure, dev tools
              </span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
