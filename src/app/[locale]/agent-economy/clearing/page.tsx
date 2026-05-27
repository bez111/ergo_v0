import type { Metadata } from "next"
import {
  ArrowRight,
  BadgeCheck,
  FileJson2,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const PATH = "/agent-economy/clearing"
const origin = siteConfig.siteUrl

const keywords = [
  "autonomous work clearing",
  "agent economy clearing",
  "AI agent payments",
  "agent payment receipts",
  "programmable credit",
  "task-conditioned payments",
  "verifiable settlement",
  "eUTXO agent payments",
  "ErgoScript predicates",
  "PoW eUTXO blockchain",
  "DeFi privacy sound money",
  "blockchain for AI agents",
  "machine-to-machine commerce",
]

const loop = [
  ["Intent", "The buyer agent or user states the task, budget, deadline, and acceptable evidence."],
  ["Work", "A provider, tool, API, or sub-agent performs the job under explicit terms."],
  ["Credit", "A bounded instrument can represent spend authority before final settlement."],
  ["Predicate", "Acceptance rules define when payment can be claimed or rejected."],
  ["Receipt", "Agreement, verification, settlement, hashes, and chain references remain inspectable."],
  ["Settlement", "The obligation closes on a neutral ledger with a public audit trail."],
]

const primitives = [
  {
    title: "eUTXO state",
    body: "Explicit boxes make agent state easier to inspect before acting, without hidden global contract state.",
  },
  {
    title: "ErgoScript predicates",
    body: "Task-conditioned acceptance rules can live in spending conditions, not only in off-chain prose.",
  },
  {
    title: "Native tokens and Notes",
    body: "Reserve, Note, and Tracker patterns can model bounded credit, budgets, and agent-specific instruments.",
  },
  {
    title: "Babel Fees",
    body: "Supported token-to-ERG fee paths can reduce native-token bootstrapping where suitable liquidity exists.",
  },
  {
    title: "PoW settlement",
    body: "Probabilistic proof-of-work settlement gives a neutral base layer without validator governance controls.",
  },
  {
    title: "Receipt bundles",
    body: "The strongest proof is not only a transaction hash. It is the agreement, verification receipt, settlement receipt, and chain proof together.",
  },
]

const faq = [
  {
    question: "How is autonomous work clearing different from agent payments?",
    answer:
      "Agent payments answer whether value moved. Autonomous work clearing answers the full obligation: what work was requested, which terms applied, how the result was verified, what receipt remains, and how settlement closed.",
  },
  {
    question: "Is the Ergo agent-economy proof surface mainnet-ready?",
    answer:
      "No. The public proof surface is live as testnet evidence. Mainnet/payment-production claims remain closed until external review artifacts and audit-bound script identities are published.",
  },
  {
    question: "Why use receipts instead of only transaction hashes?",
    answer:
      "A transaction hash cannot reconstruct the full work agreement. A receipt bundle preserves the agreement JSON, verification receipt JSON, settlement receipt JSON, and the on-chain references needed to verify the flow later.",
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Autonomous Work Clearing on Ergo | Paid, Proven, Settled",
    description:
      "Autonomous work needs more than payments. Learn how Ergo's PoW/eUTXO, ErgoScript, programmable credit, receipts, wallet policy, and audit-gated settlement form a clearing surface for AI agents.",
    keywords,
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      title: "Autonomous Work Clearing on Ergo",
      description:
        "The category page for autonomous work clearing: intent, work, credit, predicates, receipts, and settlement on a PoW/eUTXO base layer.",
      images: [{ url: `${origin}/og/agent-economy.jpg`, width: 1200, height: 630, alt: "Autonomous work clearing on Ergo" }],
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Autonomous Work Clearing on Ergo",
      description:
        "Payments move value. Clearing resolves obligations. Ergo turns autonomous work into verifiable economic records.",
      images: [`${origin}/og/agent-economy.jpg`],
      site: siteConfig.twitterHandle,
    },
    other: {
      "ai-content-type": "agent-economy-category-page",
      "ai-topic": "autonomous work clearing, AI agent payments, receipts, settlement, Ergo eUTXO",
    },
  }
}

export default function AutonomousWorkClearingPage() {
  const schemas = [
    createTechArticleSchema(PATH, {
      headline: "Autonomous Work Clearing on Ergo",
      description:
        "A category page explaining why AI agents need clearing, receipts, programmable credit, predicates, wallet policy, and settlement.",
      image: "/og/agent-economy.jpg",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      keywords,
      proficiencyLevel: "Beginner",
    }),
    createBreadcrumbSchema(
      [
        { name: "Agent Economy", href: "/agent-economy" },
        { name: "Autonomous Work Clearing", href: PATH },
      ],
      false
    ),
    createFAQSchema(faq),
  ]

  return (
    <BackgroundWrapper>
      {renderSchemaScripts(schemas)}
      <main className="min-h-screen text-white">
        <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Autonomous Work Clearing", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
                  Category thesis
                </p>
                <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                  Payments move value. Clearing resolves obligations.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  Autonomous agents will not only send payments. They will ask
                  for work, delegate budgets, accept results conditionally,
                  retain receipts, and close obligations. Ergo is positioning
                  as a PoW/eUTXO clearing and proof surface for that full loop.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
                    className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-black transition hover:bg-orange-400"
                  >
                    Open receipt <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/proofs"
                    className="inline-flex items-center gap-2 rounded-md border border-orange-500/40 px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-orange-200 transition hover:bg-orange-500/10"
                  >
                    Inspect proof
                  </Link>
                </div>
              </div>

              <aside className="rounded-lg border border-orange-500/25 bg-black/80 p-6 shadow-2xl shadow-orange-950/30">
                <div className="flex items-center gap-3">
                  <ReceiptText className="h-6 w-6 text-orange-300" />
                  <h2 className="text-xl font-bold">What clearing proves</h2>
                </div>
                <div className="mt-6 space-y-4 text-sm text-neutral-300">
                  <p>What task was agreed?</p>
                  <p>Which condition accepted the work?</p>
                  <p>Was payment verified against the task hash?</p>
                  <p>Which receipt remains after settlement?</p>
                  <p>Which mainnet claims are still blocked?</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/70 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
              Clearing loop
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
              Intent -&gt; Work -&gt; Credit -&gt; Predicate -&gt; Receipt -&gt; Settlement
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {loop.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-[#050505]/90 p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">{title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
                Why Ergo
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Crypto keywords stay. The category gets sharper.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Ergo remains a PoW/eUTXO blockchain for DeFi, privacy, sound
                money, smart contracts, native tokens, Babel Fees, and
                censorship-resistant settlement. The agent-economy layer gives
                those primitives a new job: autonomous work clearing.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {primitives.map((item) => (
                <article key={item.title} className="rounded-lg border border-white/10 bg-black/80 p-5">
                  <BadgeCheck className="h-5 w-5 text-orange-300" />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <Link href="/agent-economy/live" className="rounded-lg border border-green-500/20 bg-green-500/10 p-5 transition hover:bg-green-500/15">
              <ShieldCheck className="h-5 w-5 text-green-300" />
              <h3 className="mt-4 font-bold">Live testnet proof</h3>
              <p className="mt-2 text-sm text-neutral-300">See the cockpit for receipts, Sage, MCP, widget, signer, and gates.</p>
            </Link>
            <Link href="/agent-economy/launch-kit" className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-5 transition hover:bg-orange-500/15">
              <FileJson2 className="h-5 w-5 text-orange-300" />
              <h3 className="mt-4 font-bold">Build first receipt</h3>
              <p className="mt-2 text-sm text-neutral-300">Follow the golden path from status to receipt bundle and policy check.</p>
            </Link>
            <Link href="/agent-economy/trust" className="rounded-lg border border-red-500/20 bg-red-500/10 p-5 transition hover:bg-red-500/15">
              <LockKeyhole className="h-5 w-5 text-red-300" />
              <h3 className="mt-4 font-bold">Mainnet gate closed</h3>
              <p className="mt-2 text-sm text-neutral-300">Production/mainnet claims remain blocked until review and script identity are published.</p>
            </Link>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
