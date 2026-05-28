import type { Metadata } from "next"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  ExternalLink,
  FileJson2,
  PackageCheck,
  ReceiptText,
  ShieldAlert,
  SlidersHorizontal,
  TerminalSquare,
  WalletCards,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const installCode = `npm install @ergoblockchain/sage-widget`

const reactCode = `import { SagePaymentWidget } from "@ergoblockchain/sage-widget/react"

export function PaidAgentPanel() {
  return (
    <SagePaymentWidget
      tenant={{ id: "my-agent-app", label: "My Agent App" }}
      paymentInstructions={{
        helperText: "Create the quoted Ergo testnet Note, then paste the Note box id.",
        walletLauncherLabel: "Open my testnet wallet",
      }}
      onPaymentIntent={(intent) => console.log("wallet intent", intent)}
      onReceipt={(receipt) => console.log("receipt", receipt.receiptUrl)}
      onReceiptBundle={(bundle) => console.log(bundle.completeness)}
      walletLauncher={async (intent) => {
        // Your app owns policy, wallet UI, ErgoPay/Fleet integration and signing.
        // Return { ok: true, noteBoxId } after creating the testnet Note.
        console.log(intent.amountErg, intent.receiverAddress, intent.taskHash)
        return { ok: true }
      }}
    />
  )
}`

const apiCode = `import {
  fetchSageQuote,
  createSagePaymentIntent,
  verifySagePayment,
  fetchSageReceipt,
} from "@ergoblockchain/sage-widget"

const question = "/deep explain Accord receipts"
const quote = await fetchSageQuote({ question })
if (!quote.quote) throw new Error("No premium quote returned")

const intent = createSagePaymentIntent({
  question,
  quote: quote.quote,
  tenant: { id: "my-agent-app", label: "My Agent App" },
})

// Run your local wallet policy before signing.
// v0.5 source includes helpers to create the policy-check request.
const noteBoxId = await createNoteWithYourWallet(intent)

const verified = await verifySagePayment({
  quote: quote.quote,
  question,
  noteBoxId,
})

const receipt = await fetchSageReceipt(verified.receiptId)
console.log(receipt.completeness)`

const intentShape = `{
  "type": "sage.payment_intent.v1",
  "network": "ergo-testnet",
  "amountErg": "0.001",
  "receiverAddress": "...",
  "reserveBoxId": "...",
  "taskHash": "...",
  "verifyEndpoint": "https://www.ergoblockchain.org/api/sage/verify-payment",
  "receiptEndpointTemplate": "https://www.ergoblockchain.org/api/sage/receipt/{receiptId}"
}`

const policyShape = `{
  "profile": {
    "type": "ergo.agent_economy.wallet_agent_policy_profile.v0",
    "network": "testnet",
    "per_action_spend_cap": "0.050000000",
    "allowed_actions": ["sign_specific_transaction"]
  },
  "proposed_action": {
    "network": "testnet",
    "action": "sign_specific_transaction",
    "amount": "0.005000000",
    "spent_today": "0.000000000",
    "fee": "0.001000000",
    "receipt_expected": true
  }
}`

const steps: Array<{
  title: string
  body: string
  icon: LucideIcon
}> = [
  {
    title: "Install the widget",
    body: "Use the npm package for React, vanilla DOM, typed API clients, and receipt helpers.",
    icon: PackageCheck,
  },
  {
    title: "Ask for a quote",
    body: "Premium-shaped requests return price, task hash, receiver, reserve, expiry, and deadline.",
    icon: ClipboardCheck,
  },
  {
    title: "Hand intent to wallet",
    body: "The package emits a portable intent. Your app runs wallet policy and owns signing.",
    icon: WalletCards,
  },
  {
    title: "Verify and fetch receipt",
    body: "Sage verifies the Note box id, streams the answer, and publishes the receipt bundle.",
    icon: ReceiptText,
  },
]

const rules = [
  "Use testnet only until external review and audit-bound mainnet script identity are published.",
  "Do not let the widget sign funds. Keep custody and wallet policy in the host app.",
  "Treat /api/sage/receipt/<id> as the source of truth. Pages and widgets should display or link to it.",
  "Log payment intent, verification result, receipt URL, and receipt completeness in your own telemetry.",
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Build Your First Verifiable Agent Receipt / Paid Agent Flow on Ergo",
    description:
      "A developer quickstart for embedding Sage autonomous work settlement: install the package, request a quote, create a testnet Note, verify payment, and fetch the full receipt bundle.",
    alternates: getAlternates("/build/agent-payments/quickstart", locale),
    openGraph: {
      title: "Build Your First Verifiable Agent Receipt on Ergo",
      description:
        "Install the Sage widget, emit a payment intent, verify an Ergo testnet Note, and fetch the full receipt bundle.",
      url: getCanonicalUrl("/build/agent-payments/quickstart", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo verifiable agent receipt quickstart",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Build Your First Paid Agent Flow on Ergo",
      description:
        "A practical quickstart for Sage quote, payment intent, Note verification, and receipt bundles.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function AgentPaymentQuickstartPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs
              items={[
                { name: "Build", href: "/build" },
                { name: "Agent Payments", href: "/build/agent-payments" },
                { name: "Quickstart", href: "/build/agent-payments/quickstart" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <TerminalSquare className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Developer quickstart
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  Build your first paid agent flow on Ergo.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This is the shortest honest path from a web app to Sage:
                  quote a premium task, hand a structured intent to your wallet
                  layer, verify the testnet Note, then fetch the machine-readable
                  receipt bundle.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/agent-economy/sage-widget"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Open widget demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/build/agent-payments/wallet-agent-runner"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Wallet runner
                    <WalletCards className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/build/agent-payments/policy-playground"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Policy playground
                    <SlidersHorizontal className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://github.com/bez111/sage-widget"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Package source
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-lg border border-red-500/25 bg-red-500/[0.045] p-5">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                  <div>
                    <h2 className="text-lg font-semibold text-red-50">Testnet first</h2>
                    <p className="mt-3 text-sm leading-relaxed text-red-50/75">
                      The live flow is useful because it is inspectable. It is
                      not audited mainnet infrastructure. Keep real funds out of
                      this path until the mainnet gate is explicitly opened.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                Copy-paste path
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Start with the widget. Drop lower only when you need custom UX.
              </h2>
              <p className="mt-5 leading-relaxed text-neutral-400">
                The React widget is the fastest surface for product teams. The
                typed API clients are for wallets, agents, and custom developer
                tools that need to own every screen and log line.
              </p>
            </div>
            <div className="grid gap-4">
              <CodePanel title="Install" body={installCode} />
              <CodePanel title="React paid widget" body={reactCode} />
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <CodePanel title="Typed API flow" body={apiCode} />
            <CodePanel title="Payment intent shape" body={intentShape} />
            <CodePanel title="Policy-check shape" body={policyShape} />
          </div>
        </section>

        <section className="border-y border-white/5 bg-neutral-950/55 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">
                Operating rules
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Keep the proof surface boring where it matters.
              </h2>
              <div className="mt-7 grid gap-3">
                {rules.map((rule, index) => (
                  <div key={rule} className="flex gap-3 rounded-lg border border-white/10 bg-black/55 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        Rule {index + 1}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-200">{rule}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-orange-500/25 bg-orange-500/[0.045] p-5">
              <FileJson2 className="h-7 w-7 text-orange-300" />
              <h3 className="mt-5 text-xl font-semibold text-white">Receipt API is the truth</h3>
              <p className="mt-3 text-sm leading-relaxed text-orange-50/75">
                After verification, link to the public receipt page for humans
                and store the API receipt URL for machines. The receipt bundle
                is where Agreement JSON, Verification Receipt JSON, and
                Settlement Receipt JSON belong.
              </p>
              <Link
                href="/api/sage/receipt/f8752d10a2ece92fbc88065c3b92b94da621ec65943098f43c9e084deb763d81"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-orange-400/30 bg-orange-500/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-orange-100 hover:bg-orange-500/15"
              >
                Inspect latest bundle
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-black/65 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Next after the quickstart</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-neutral-400">
                  Turn this into a wallet-specific integration: policy limits,
                  ErgoPay or Fleet construction, local signing, transaction
                  simulation, Note box discovery, verification, and receipt
                  storage in your own app.
                </p>
              </div>
              <Link
                href="/agent-economy/live"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
              >
                View Live Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function StepCard({
  step,
  index,
}: {
  step: { title: string; body: string; icon: LucideIcon }
  index: number
}) {
  const Icon = step.icon
  return (
    <div className="rounded-lg border border-white/10 bg-black/70 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10">
          <Icon className="h-5 w-5 text-orange-300" />
        </div>
        <div className="font-mono text-xs text-neutral-500">0{index + 1}</div>
      </div>
      <h2 className="mt-5 text-lg font-bold text-white">{step.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{step.body}</p>
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
