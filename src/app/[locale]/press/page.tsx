/**
 * Press kit / media assets page.
 *
 *   GET /<locale>/press
 *
 * One-stop landing for journalists, podcasters, conference organizers,
 * and integration partners. Surfaces:
 *   - Boilerplate descriptions (1-line, 1-paragraph, 3-paragraph)
 *   - Brand assets (logos, OG cards) with download links
 *   - Quick stats / talking points (manually curated)
 *   - Spokesperson channels + best contact path
 *   - Permission notes (what reuse is OK without asking)
 *
 * Static page, force-static — no live data, just polished copy.
 */

import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { ArrowUpRight, Download, ExternalLink, Mail } from "lucide-react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { siteConfig } from "@/config/site-config"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Press kit — Ergo Blockchain | Logos, descriptions, contact",
  description:
    "Press resources for Ergo Blockchain — boilerplate descriptions, downloadable logos and OG cards, talking points, and contact channels for journalists and partners.",
  alternates: { canonical: `${siteConfig.siteUrl}/press` },
  openGraph: {
    title: "Press kit — Ergo Blockchain",
    description:
      "Logos, OG cards, boilerplate copy, and contact channels for journalists, podcasters, and integration partners covering Ergo and Accord Protocol.",
    type: "website",
  },
  robots: { index: true, follow: true },
}

const BOILERPLATE = {
  oneLine:
    "Ergo is a programmable-settlement blockchain optimized for autonomous agent commerce, with native bearer instruments, deterministic ErgoScript predicates, and a working agent-economy reference stack via the Accord Protocol.",
  oneParagraph:
    "Ergo Blockchain is a long-running PoW chain (mainnet since 2019) whose eUTXO model and ErgoScript predicates make it a natural settlement layer for AI agents that need to pay each other deterministically. Through the Accord Protocol — an open standard developed alongside the platform — agents express agreements, exchange verification receipts, and settle on Ergo using bearer Notes against on-chain Reserves. Sage, the on-site concierge agent, is the first hosted testnet reference implementation: it has produced a real testnet redemption, durable full receipt storage, and signed L1 conformance evidence.",
  threeParagraph: [
    "Ergo Blockchain (ERG) is a Layer-1 PoW network mainnet since 2019, built on the eUTXO model and ErgoScript — a strongly-typed, deterministic smart-contract language designed for safety properties that matter when software agents are signing on behalf of others. Ergo's native primitives include bearer Notes (stateless instruments that move value with their holder), Reserve boxes (collateral that backs Notes), Acceptance Predicates (predicates a payee embeds in their script to gate redemption), and Babel Fees (supported token-to-ERG fee paths).",
    "These primitives turn out to be exactly what autonomous AI agents need to transact with each other. Agents are software — they don't have payment methods, business accounts, or human reputational stakes — so existing rails (Stripe, PayPal, even most onchain wallets) don't fit. Through the Accord Protocol, agents agree on a piece of work via a signed Agreement, the buyer issues a Note pinned to the agreement's task hash, the seller verifies the Note matches and produces the work, and the Note is redeemed against the buyer's Reserve. The whole flow is deterministic, settled on chain, and produces a public receipt.",
    "Sage, the agent on ergoblockchain.org, is the first hosted testnet proof of this stack. A user asks a question; if the question warrants the deeper model, Sage issues a 402 Payment Required and asks for a Note worth 0.001 ERG; the buyer pays; Sage verifies on chain, runs the upgraded answer, and stores the receipt bundle. Redemption has already been proven on Ergo testnet, while mainnet language remains audit-gated.",
  ],
}

const ASSETS: Array<{
  title: string
  desc: string
  href: string
  ext: string
  recommended?: boolean
}> = [
  {
    title: "Ergo logo (SVG, color)",
    desc: "Vector. Use on any background — both light and dark variants embedded.",
    href: "/logo-ergo.svg",
    ext: "svg",
    recommended: true,
  },
  {
    title: "Ergo logo (PNG, 512px)",
    desc: "Raster. For tools that don't accept SVG.",
    href: "/logo.png",
    ext: "png",
  },
  {
    title: "OG card — Agent Economy",
    desc: "1200×630 social card for the agent-economy hub page.",
    href: "/og/agent-economy.jpg",
    ext: "png",
  },
  {
    title: "OG card — Agent Payments architecture",
    desc: "1200×630 social card for the build/agent-payments page.",
    href: "/og/agent-payments.jpg",
    ext: "png",
  },
]

const TALKING_POINTS = [
  {
    title: "Working chain, working agent",
    body:
      "Ergo mainnet since 2019. Sage settled its first paid query on testnet in May 2026 with a public receipt URL — the agent-economy thesis is provable, not promised.",
  },
  {
    title: "Why eUTXO + ErgoScript fits agents",
    body:
      "Deterministic costs, no reentrancy class of bugs, predicates that gate redemption to a specific task hash. When the buyer is software, deterministic rails matter more than ergonomic ones.",
  },
  {
    title: "Accord Protocol = the open standard",
    body:
      "Agreements / Verification Receipts / Settlement Receipts on top of any rail. x402 verifies payment, Accord verifies completion. Specs are public; reference adapters cover Ergo, Rosen, Base, x402.",
  },
  {
    title: "Open registry, open submission",
    body:
      "Any provider can join the public registry through one PR — directory, profile pages, conformance tracking. No gatekeeper.",
  },
]

const SPOKESPEOPLE = [
  {
    label: "General + technical questions",
    contact: "https://github.com/ergoplatform",
    via: "GitHub Discussions",
  },
  {
    label: "Accord Protocol + agent economy",
    contact: "https://github.com/accord-protocol/accord-protocol/discussions",
    via: "GitHub Discussions",
  },
  {
    label: "Press / partnerships",
    contact: "press@ergoplatform.org",
    via: "Email",
  },
]

export default function PressKitPage() {
  return (
    <BackgroundWrapper>
      <article className="min-h-screen text-gray-200 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[{ name: "Press kit", href: "/press" }]}
          />

          <header className="mt-8 mb-12">
            <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 font-mono mb-3">
              Media · partners · journalists
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-mono leading-tight tracking-tight mb-4">
              Press kit
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              Boilerplate copy, brand assets, talking points, and the right
              contact for whatever you&apos;re working on. Reuse without asking,
              attribute clearly. If you need something not listed, ping the
              channels at the bottom.
            </p>
          </header>

          <Section title="Boilerplate descriptions">
            <Block label="One-line">
              <p className="text-gray-300 leading-relaxed">{BOILERPLATE.oneLine}</p>
            </Block>
            <Block label="One paragraph">
              <p className="text-gray-300 leading-relaxed">{BOILERPLATE.oneParagraph}</p>
            </Block>
            <Block label="Three paragraphs (long-form)">
              {BOILERPLATE.threeParagraph.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </Block>
          </Section>

          <Section title="Brand assets">
            <div className="grid sm:grid-cols-2 gap-4">
              {ASSETS.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  download
                  className={`flex flex-col gap-3 p-4 rounded-2xl border transition-colors ${
                    a.recommended
                      ? "border-orange-500/30 bg-orange-500/[0.03] hover:border-orange-500/50"
                      : "border-white/8 bg-white/[0.02] hover:border-orange-500/30"
                  }`}
                >
                  <div className="aspect-[2/1] rounded-lg bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
                    <Image
                      src={a.href}
                      alt={a.title}
                      width={400}
                      height={200}
                      className="max-w-[80%] max-h-[80%] object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-bold text-white text-sm">{a.title}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{a.desc}</div>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-orange-300">
                      <Download className="w-3 h-3" /> {a.ext}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500 font-mono">
              All assets above are released for editorial reuse. Don&apos;t alter
              the wordmark; brand color is{" "}
              <code className="text-orange-300">#ff8800</code>; preferred type
              is JetBrains Mono for code, Inter for UI.
            </p>
          </Section>

          <Section title="Talking points">
            <div className="grid md:grid-cols-2 gap-3">
              {TALKING_POINTS.map((t) => (
                <div
                  key={t.title}
                  className="p-4 rounded-xl border border-white/8 bg-white/[0.015]"
                >
                  <div className="text-[11px] uppercase tracking-widest text-orange-400 font-mono mb-2">
                    {t.title}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Live proof you can quote">
            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5">
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Sage&apos;s first end-to-end settled paid query — buyer issued a
                Note, Sage verified, settled on chain.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.ergoblockchain.org/r/sage/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-widest text-black bg-orange-500 hover:bg-orange-400 px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1"
                >
                  Public receipt <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://testnet.ergoplatform.com/transactions/f697e4841dd9a0c689d0b83a311130b85a0cfbab123230a6c40284b44c4cafef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-widest text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 inline-flex items-center gap-1"
                >
                  Explorer <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  href="/agent-economy#sage-activity"
                  className="text-xs font-mono uppercase tracking-widest text-orange-300 hover:text-orange-200 px-3 py-1.5 rounded-md border border-orange-500/30 hover:border-orange-500/50 inline-flex items-center gap-1"
                >
                  Live activity feed
                </Link>
              </div>
            </div>
          </Section>

          <Section title="Contacts">
            <div className="space-y-2">
              {SPOKESPEOPLE.map((s) => (
                <a
                  key={s.label}
                  href={s.contact.startsWith("http") ? s.contact : `mailto:${s.contact}`}
                  target={s.contact.startsWith("http") ? "_blank" : undefined}
                  rel={s.contact.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.015] hover:border-orange-500/30 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white">{s.label}</div>
                    <div className="text-xs text-gray-500 font-mono mt-0.5 truncate">
                      {s.contact}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 shrink-0">
                    {s.via}
                  </span>
                </a>
              ))}
            </div>
          </Section>

          <footer className="text-xs text-gray-500 font-mono mt-16 pt-8 border-t border-white/5">
            <p>
              Last updated 2026-05-15. Page is canonical at{" "}
              <Link href="/press" className="text-orange-400 hover:text-orange-300">
                ergoblockchain.org/press
              </Link>
              .
            </p>
          </footer>
        </div>
      </article>
    </BackgroundWrapper>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs uppercase tracking-[0.25em] text-orange-400 font-mono mb-5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.015]">
      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-3">
        {label}
      </div>
      {children}
    </div>
  )
}
