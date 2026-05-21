import type { Metadata } from "next"
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileJson2,
  GitBranch,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  TerminalSquare,
  WalletCards,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"
import { SageWidgetLiveDemo } from "./SageWidgetLiveDemo"

const BASE_URL = "https://www.ergoblockchain.org"
const LATEST_RECEIPT_ID = "f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"

const reactExample = `import { SagePaymentWidget } from "@ergoblockchain/sage-widget/react"

export function PaidSagePanel() {
  return (
    <SagePaymentWidget
      tenant={{ id: "my-ergo-app", label: "My Ergo app" }}
      paymentInstructions={{
        helperText: "Issue the quoted testnet Note, then paste the Note box id.",
        walletLauncherLabel: "Open my testnet wallet",
        walletUrl: "https://www.ergoblockchain.org/build/agent-payments",
      }}
      onQuote={(quote) => console.log("quote", quote.quote)}
      onPaymentIntent={(intent) => console.log("wallet intent", intent)}
      onReceipt={(receipt) => console.log("receipt", receipt.receiptUrl)}
      onReceiptBundle={(bundle) => console.log(bundle.completeness)}
      walletLauncher={async (intent) => {
        // Host-owned wallet flow. Return { ok: true, noteBoxId } when ready.
        console.log(intent.amountErg, intent.receiverAddress, intent.taskHash)
        return { ok: true }
      }}
    />
  )
}`

const vanillaExample = `import { mountSagePaymentWidget } from "@ergoblockchain/sage-widget/vanilla"

const handle = mountSagePaymentWidget(
  document.getElementById("sage-chat")!,
  {
    tenant: { id: "docs-footer", label: "Docs footer" },
  },
)

await handle.send("/code show me a Fleet SDK example")
console.log(handle.status().receiptBundle?.completeness)`

const receiptExample = `import {
  createSagePaymentIntent,
  fetchSageQuote,
  fetchSageReceipt,
  isFullSageReceiptBundle,
} from "@ergoblockchain/sage-widget"

const question = "/deep explain Accord receipts"
const quoteResponse = await fetchSageQuote({ question })
if (!quoteResponse.quote) throw new Error("No premium quote returned")

const intent = createSagePaymentIntent({
  question,
  quote: quoteResponse.quote,
})

const receipt = await fetchSageReceipt("${LATEST_RECEIPT_ID}")

if (isFullSageReceiptBundle(receipt)) {
  console.log(receipt.accord?.agreement_json)
}`

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Sage Widget | Embed Paid Agent Payments on Ergo",
    description:
      "Embed Sage as a React or vanilla widget: chat, quote, manual Note verification, receipt links, and full Accord receipt bundles for Ergo testnet proof flows.",
    alternates: getAlternates("/agent-economy/sage-widget", locale),
    openGraph: {
      title: "Sage Widget for Ergo Agent Payments",
      description:
        "A source-ready embeddable Sage widget for paid agent flows: quote, Note proof, verification, receipt bundle, and live testnet evidence.",
      url: getCanonicalUrl("/agent-economy/sage-widget", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Sage widget for Ergo agent payments",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Sage Widget for Ergo Agent Payments",
      description:
        "React and vanilla embed surface for Sage paid testnet turns, receipt bundles, and Accord evidence.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

const statusItems: Array<{
  label: string
  value: string
  detail: string
  icon: LucideIcon
  tone: "live" | "pending" | "blocked"
}> = [
  {
    label: "Source",
    value: "v0.3 candidate",
    detail: "Source is prepared with payment intent JSON, wallet launcher hooks, React, vanilla, typed API helpers, and smoke checks.",
    icon: GitBranch,
    tone: "live",
  },
  {
    label: "npm",
    value: "publish next",
    detail: "Public npm latest remains v0.2.0 until the v0.3 package is published from the sage-widget repo.",
    icon: PackageCheck,
    tone: "pending",
  },
  {
    label: "Receipt",
    value: "full bundle",
    detail: "The canonical Sage host has a settled post-Blob receipt with Agreement, Verification, and Settlement JSON.",
    icon: ReceiptText,
    tone: "live",
  },
  {
    label: "Mainnet",
    value: "closed",
    detail: "This is testnet live proof. Mainnet remains blocked by external review and audit-bound script identity.",
    icon: ShieldCheck,
    tone: "blocked",
  },
]

const flowItems = [
  {
    title: "Ask",
    body: "The host app embeds Sage and sends a normal question or a premium command.",
    icon: Bot,
  },
  {
    title: "Quote",
    body: "Sage returns a task hash, receiver, reserve, price, expiry, and deadline for a testnet Note.",
    icon: WalletCards,
  },
  {
    title: "Verify",
    body: "The user or host wallet creates the Note. The widget submits the Note box id to Sage for verification.",
    icon: Boxes,
  },
  {
    title: "Receipt",
    body: "Sage streams the answer and exposes both public receipt URL and machine-readable receipt bundle.",
    icon: FileJson2,
  },
]

const releaseChecklist = [
  "v0.3 source adds portable SagePaymentIntent JSON for host-owned wallet flows",
  "Published tarball should include root, React, vanilla, type declarations, README, and license",
  "Live host demo calls the production Sage quote, verify, chat, and receipt APIs",
  "Keep wallet signing outside the widget; host apps own wallet policy and signing",
  "Keep mainnet wording closed until external audit evidence exists",
]

export default function SageWidgetPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Agent Economy", href: "/agent-economy" },
                { name: "Sage Widget", href: "/agent-economy/sage-widget" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <TerminalSquare className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Embeddable Sage
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Put paid Sage turns inside any Ergo app.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  The widget is the product surface for the live proof stack:
                  chat, quote, testnet Note verification, receipt links, and
                  full Accord receipt bundles without turning the host app into
                  a payment backend.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/bez111/sage-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    GitHub source
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/@ergoblockchain/sage-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-orange-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    npm package
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/build/agent-payments/quickstart"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Quickstart
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/agent-economy/live"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Live Hub
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Release posture
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">v0.3 publish candidate</div>
                  </div>
                  <BadgeCheck className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  The source is ready for the v0.3 paid widget surface. npm
                  publish is the next external step; the canonical Sage host
                  remains a testnet proof, with mainnet wording closed behind
                  audit evidence.
                </p>
                <div className="mt-5 rounded-md border border-white/10 bg-white/[0.03] p-3 font-mono text-xs text-neutral-300">
                  npm install @ergoblockchain/sage-widget
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statusItems.map((item) => (
              <StatusCard key={item.label} item={item} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                  Payment lifecycle
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  The widget shows the flow. The receipt API remains the truth.
                </h2>
                <p className="mt-5 leading-relaxed text-neutral-400">
                  The host app can own design and wallet UX, while Sage owns the
                  protocol evidence: quote, payment verification, answer stream,
                  public receipt page, and JSON bundle. No article, dashboard,
                  or widget should duplicate receipt facts as a second database.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {flowItems.map((item, index) => (
                  <FlowCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SageWidgetLiveDemo />
          </div>
        </section>

        <section className="border-y border-white/5 bg-neutral-950/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            <CodePanel title="React paid widget" body={reactExample} />
            <CodePanel title="Vanilla mount" body={vanillaExample} />
            <CodePanel title="Receipt-first apps" body={receiptExample} />
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                Release gate
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                What changed now that this is the public install path.
              </h2>
              <div className="mt-7 grid gap-3">
                {releaseChecklist.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-white/10 bg-black/55 p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 font-mono text-xs text-orange-200">
                      {index + 1}
                    </div>
                    <div className="text-sm leading-relaxed text-neutral-200">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-red-500/25 bg-red-500/[0.045] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                <div>
                  <h3 className="text-lg font-semibold text-red-50">Mainnet gate stays closed</h3>
                  <p className="mt-3 text-sm leading-relaxed text-red-50/75">
                    The widget deliberately does not sign wallet transactions.
                    It can verify a Note and show receipts for the canonical
                    testnet proof flow, but production/mainnet language still
                    requires external review and audited script identity.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/api/agent-economy/mainnet-gate"
                  className="inline-flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-red-100 hover:bg-red-500/15"
                >
                  Mainnet gate JSON
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={`/api/sage/receipt/${LATEST_RECEIPT_ID}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-orange-400/30 bg-orange-500/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-orange-100 hover:bg-orange-500/15"
                >
                  Latest receipt
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-orange-500/25 bg-orange-500/[0.045] p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Next product move</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-orange-50/75">
                  This page is now the canonical install doc and live host
                  demo. The next upgrade is a reviewed wallet flow that can
                  issue the Note without weakening the receipt API as the source
                  of truth.
                </p>
              </div>
              <Link
                href="/build/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
              >
                Developer services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function StatusCard({
  item,
}: {
  item: {
    label: string
    value: string
    detail: string
    icon: LucideIcon
    tone: "live" | "pending" | "blocked"
  }
}) {
  const toneClass = {
    live: "border-orange-500/30 bg-orange-500/10 text-orange-100",
    pending: "border-yellow-500/30 bg-yellow-500/10 text-yellow-100",
    blocked: "border-red-500/30 bg-red-500/10 text-red-100",
  }[item.tone]
  const Icon = item.icon

  return (
    <div className="rounded-lg border border-white/10 bg-black/70 p-5">
      <div className="flex items-start justify-between gap-4">
        <Icon className="h-5 w-5 text-orange-300" />
        <span className={`rounded-full border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${toneClass}`}>
          {item.tone}
        </span>
      </div>
      <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{item.label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{item.value}</div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.detail}</p>
    </div>
  )
}

function FlowCard({
  item,
  index,
}: {
  item: { title: string; body: string; icon: LucideIcon }
  index: number
}) {
  const Icon = item.icon
  return (
    <div className="rounded-lg border border-white/10 bg-black/65 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10">
          <Icon className="h-5 w-5 text-orange-300" />
        </div>
        <div className="font-mono text-xs text-neutral-500">0{index + 1}</div>
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
    </div>
  )
}

function CodePanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/80">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <Code2 className="h-4 w-4 text-orange-300" />
        <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-300">{title}</h2>
      </div>
      <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed text-neutral-300">
        <code>{body}</code>
      </pre>
    </div>
  )
}
