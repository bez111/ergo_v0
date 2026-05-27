import type { Metadata } from "next"
import { ArrowRight, FileCheck2, Globe2, Layers3, ReceiptText, ShieldCheck } from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createTechArticleSchema, getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

const PATH = "/agent-economy/interop"
const origin = siteConfig.siteUrl

const keywords = [
  "x402 vs Accord",
  "AP2 vs Ergo",
  "agent payments vs clearing",
  "Agentic Commerce Protocol",
  "AI agent payment protocols",
  "autonomous work clearing",
  "machine payments",
  "HTTP 402 payments",
  "agent marketplace settlement",
  "verifiable receipts blockchain",
  "Ergo agent economy",
  "PoW eUTXO settlement",
]

const layers = [
  {
    name: "x402",
    role: "HTTP payment handshake",
    bestAt: "Resource servers returning payment requirements and clients retrying with a payment payload.",
    ergoFit: "Pairs well with Ergo/Accord when a paid request should also produce a durable work agreement and receipt bundle.",
    source: "https://docs.cdp.coinbase.com/x402/docs/client-server-model",
  },
  {
    name: "Google AP2",
    role: "Authorization and accountability",
    bestAt: "Signed mandates and audit trails for user intent, cart contents, and payment authorization.",
    ergoFit: "Complements Ergo when agent authority needs to be proven before work settlement happens.",
    source: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol",
  },
  {
    name: "Stripe Agentic Commerce",
    role: "Merchant checkout",
    bestAt: "Helping AI platforms and businesses complete purchases through existing commerce and payment networks.",
    ergoFit: "Can coexist with Ergo. Checkout rails solve purchasing; Ergo targets programmable work obligations and settlement memory.",
    source: "https://docs.stripe.com/agentic-commerce",
  },
  {
    name: "Agent marketplaces",
    role: "Discovery and bidding",
    bestAt: "Posting tasks, letting agents bid, and routing work to providers or agent owners.",
    ergoFit: "Marketplaces still need durable proof of task terms, verification, failed work, and settlement. Ergo receipts can be that memory layer.",
    source: "https://market.near.ai/",
  },
  {
    name: "Ergo + Accord",
    role: "Clearing and proof",
    bestAt: "Task-conditioned credit, eUTXO predicates, receipt bundles, wallet policy, and audit-gated PoW settlement.",
    ergoFit: "This is the layer the site is proving today on testnet: paid work can be agreed, verified, receipted, and settled.",
    source: "/agent-economy/proofs",
  },
]

const claims = [
  "x402 lets agents pay for a resource.",
  "AP2 helps prove who authorized an agent purchase.",
  "Stripe helps agents buy through merchant networks.",
  "Marketplaces help agents discover and bid on work.",
  "Ergo turns autonomous work into receipted, programmable settlement evidence.",
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "x402, AP2, Stripe, Marketplaces, and Ergo | Agent Payment Interop",
    description:
      "A practical interoperability map for AI agent payments: x402 payment handshakes, AP2 authorization, Stripe merchant checkout, marketplaces, and Ergo's clearing and proof layer.",
    keywords,
    alternates: getAlternates(PATH, locale),
    openGraph: {
      type: "article",
      url: getCanonicalUrl(PATH, locale),
      siteName: "Ergo Blockchain",
      title: "Agent Payment Interop: x402, AP2, Stripe, Marketplaces, and Ergo",
      description:
        "Ergo does not need to replace every agent payment standard. It can become the receipt and settlement layer that completes the stack.",
      images: [{ url: `${origin}/og/agent-economy.jpg`, width: 1200, height: 630, alt: "Agent payment interoperability map" }],
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Agent Payment Interop: x402, AP2, Stripe, Marketplaces, and Ergo",
      description:
        "Payment handshake, authorization, checkout, marketplaces, and clearing are different layers. Ergo targets the proof and settlement layer.",
      images: [`${origin}/og/agent-economy.jpg`],
      site: siteConfig.twitterHandle,
    },
    other: {
      "ai-content-type": "agent-payment-interop-map",
      "ai-topic": "x402, AP2, Stripe agentic commerce, AI agent marketplaces, Ergo clearing",
    },
  }
}

export default function AgentPaymentInteropPage() {
  const schemas = [
    createTechArticleSchema(PATH, {
      headline: "Agent Payment Interop: x402, AP2, Stripe, Marketplaces, and Ergo",
      description:
        "A practical interoperability map for positioning Ergo as a clearing and proof layer rather than a replacement for every agent-payment protocol.",
      image: "/og/agent-economy.jpg",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      keywords,
      proficiencyLevel: "Intermediate",
    }),
    createBreadcrumbSchema(
      [
        { name: "Agent Economy", href: "/agent-economy" },
        { name: "Interop Map", href: PATH },
      ],
      false
    ),
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
                { name: "Interop Map", href: PATH },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
                  Agent payment interop
                </p>
                <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                  Not one rail. A stack of responsibilities.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The agent economy will use many rails. x402 is useful for HTTP
                  payment handshakes. AP2 is useful for authorization and
                  accountability. Stripe is strong at merchant checkout.
                  Marketplaces help discover work. Ergo&apos;s opportunity is the
                  clearing layer: programmable credit, predicates, receipts, and
                  settlement memory.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/agent-economy/clearing"
                    className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-black transition hover:bg-orange-400"
                  >
                    Read clearing thesis <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/demos/x402-accord-gateway"
                    className="inline-flex items-center gap-2 rounded-md border border-orange-500/40 px-5 py-3 font-mono text-sm uppercase tracking-[0.16em] text-orange-200 transition hover:bg-orange-500/10"
                  >
                    Open x402 demo
                  </Link>
                </div>
              </div>

              <aside className="rounded-lg border border-white/10 bg-black/80 p-6">
                <Layers3 className="h-6 w-6 text-orange-300" />
                <h2 className="mt-4 text-xl font-bold">The clean positioning</h2>
                <div className="mt-5 space-y-3">
                  {claims.map((claim) => (
                    <div key={claim} className="flex gap-3 text-sm text-neutral-300">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                      <span>{claim}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/70 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-orange-300">
              Layer map
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">
              Payment, authority, checkout, discovery, and clearing are different jobs.
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {layers.map((layer) => (
                <article key={layer.name} className="rounded-lg border border-white/10 bg-[#050505]/95 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-300">{layer.role}</p>
                      <h3 className="mt-2 text-2xl font-bold">{layer.name}</h3>
                    </div>
                    <a
                      href={layer.source}
                      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-300 transition hover:border-orange-500/40 hover:text-orange-200"
                    >
                      Source <Globe2 className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-md border border-white/10 bg-black/60 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">Best at</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{layer.bestAt}</p>
                    </div>
                    <div className="rounded-md border border-orange-500/20 bg-orange-500/10 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-orange-300">Ergo fit</p>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-200">{layer.ergoFit}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <Link href="/r/sage/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81" className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-5 transition hover:bg-orange-500/15">
              <ReceiptText className="h-5 w-5 text-orange-300" />
              <h3 className="mt-4 font-bold">Receipt-first proof</h3>
              <p className="mt-2 text-sm text-neutral-300">Inspect Agreement JSON, Verification Receipt JSON, Settlement Receipt JSON, and chain proof.</p>
            </Link>
            <Link href="/agent-economy/launch-kit" className="rounded-lg border border-green-500/20 bg-green-500/10 p-5 transition hover:bg-green-500/15">
              <FileCheck2 className="h-5 w-5 text-green-300" />
              <h3 className="mt-4 font-bold">Developer golden path</h3>
              <p className="mt-2 text-sm text-neutral-300">Build against one receipt flow before exploring the entire API surface.</p>
            </Link>
            <Link href="/agent-economy/trust" className="rounded-lg border border-red-500/20 bg-red-500/10 p-5 transition hover:bg-red-500/15">
              <ShieldCheck className="h-5 w-5 text-red-300" />
              <h3 className="mt-4 font-bold">Mainnet boundary</h3>
              <p className="mt-2 text-sm text-neutral-300">Keep testnet proof separate from production and mainnet readiness claims.</p>
            </Link>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
