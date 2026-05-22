import type { Metadata } from "next"
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileJson2,
  GitBranch,
  KeyRound,
  LockKeyhole,
  ReceiptText,
  ShieldCheck,
  TerminalSquare,
  WalletCards,
  type LucideIcon,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Link } from "@/i18n/navigation"
import { walletAgentReferenceFlow } from "@/lib/agent-economy/wallet-agent-reference-flow"
import { getAlternates, getCanonicalUrl, getOgLocale } from "@/lib/seo"

const BASE_URL = "https://www.ergoblockchain.org"

const stageIcons: LucideIcon[] = [
  FileJson2,
  GitBranch,
  Code2,
  ShieldCheck,
  TerminalSquare,
  WalletCards,
  ArrowRight,
  CheckCircle2,
  ReceiptText,
]

const runnerCode = `const profile = await loadLocalPolicyProfile()
const intent = await getSagePaymentIntent(question)
const proposedAction = normalizeIntentForPolicyCheck(profile, intent)

const verdict = await fetch(
  "https://www.ergoblockchain.org/api/agent-economy/wallet-agent/policy-check",
  {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ profile, proposed_action: proposedAction }),
  },
).then((res) => res.json())

if (!verdict.allowed) {
  throw new Error(verdict.reasons.join(", "))
}

const unsignedTx = await wallet.simulateExactNoteTransaction(intent)
const signedTx = await wallet.signExactTransaction(unsignedTx)
const noteBoxId = await wallet.broadcast(signedTx)
const receipt = await verifySagePaymentAndFetchReceipt(intent, noteBoxId)
await retainReceipt(receipt)`

const intentMap = `{
  "network": "testnet",
  "action": "sign_specific_transaction",
  "amount": intent.amountErg,
  "recipient": intent.receiverAddress,
  "reserve": intent.reserveBoxId,
  "expiry_height_delta": intent.expiryHeightDelta,
  "task_hash": intent.taskHash,
  "receipt_expected": true
}`

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: "Wallet-Agent Reference Runner | Ergo Agent Payments",
    description:
      "A testnet-first reference runner for local wallet agents on Ergo: load policy, check payment intent, simulate an exact transaction, sign locally, verify, and retain receipts.",
    alternates: getAlternates("/build/agent-payments/wallet-agent-runner", locale),
    openGraph: {
      title: "Ergo Wallet-Agent Reference Runner",
      description:
        "The practical developer path for host-owned wallet agents: policy verdict, exact transaction simulation, local signing, and receipt retention.",
      url: getCanonicalUrl("/build/agent-payments/wallet-agent-runner", locale),
      siteName: "Ergo Blockchain",
      images: [
        {
          url: `${BASE_URL}/og/agent-economy.jpg`,
          width: 1200,
          height: 630,
          alt: "Ergo wallet-agent reference runner",
        },
      ],
      type: "website",
      locale: getOgLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: "Ergo Wallet-Agent Reference Runner",
      description:
        "Policy verdict, exact simulation, host-owned wallet signing, and receipt retention for Ergo testnet agent payments.",
      images: [`${BASE_URL}/og/agent-economy.jpg`],
      creator: "@ergoplatform",
      site: "@ergoplatform",
    },
  }
}

export default function WalletAgentRunnerPage() {
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
                { name: "Wallet-Agent Runner", href: "/build/agent-payments/wallet-agent-runner" },
              ]}
              className="mb-8 opacity-70"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <WalletCards className="h-3.5 w-3.5 text-orange-300" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                    Reference runner
                  </span>
                </div>
                <h1 className="mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
                  A wallet agent should prove policy before it asks for a signature.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-300">
                  This reference flow is the practical bridge between the Sage
                  widget, local wallet policy, exact transaction simulation,
                  and durable receipts. It is testnet-first and deliberately
                  non-custodial.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/api/agent-economy/wallet-agent/reference-flow"
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-500 bg-orange-500 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                  >
                    Reference JSON
                    <FileJson2 className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/api/agent-economy/wallet-agent/policy-check"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10"
                  >
                    Policy-check API
                    <ShieldCheck className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/75 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      Current status
                    </div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      {walletAgentReferenceFlow.status.replace(/_/g, " ")}
                    </div>
                  </div>
                  <LockKeyhole className="h-9 w-9 text-orange-300" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {walletAgentReferenceFlow.public_claim}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <MiniStat label="Custody" value="host-owned" />
                  <MiniStat label="Network" value="testnet" />
                  <MiniStat label="Signer" value="local wallet" />
                  <MiniStat label="Mainnet" value="closed" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Flow"
              title="The reference runner is a narrow corridor."
              body="Every stage has one actor, one output, and one reason to exist. That makes the flow easier to inspect, test, and reject before signing."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {walletAgentReferenceFlow.stages.map((stage, index) => {
                const Icon = stageIcons[index] ?? ShieldCheck
                return (
                  <div key={stage.id} className="rounded-lg border border-white/10 bg-black/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/25 bg-orange-500/10">
                        <Icon className="h-5 w-5 text-orange-300" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-white">{stage.label}</h2>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-orange-200">
                      {stage.actor.replace(/_/g, " ")}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">{stage.rule}</p>
                    <div className="mt-4 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-xs text-neutral-300">
                      {stage.output}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-black/45 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeader
                eyebrow="Runner skeleton"
                title="The wallet layer owns the dangerous part."
                body="The page, widget, and API can help produce intent and verdicts. They do not receive seed phrases, broad signing rights, or custody authority."
              />
              <div className="mt-7 grid gap-3">
                {walletAgentReferenceFlow.hard_boundaries.map((boundary) => (
                  <div key={boundary} className="flex gap-3 rounded-lg border border-red-500/20 bg-red-500/[0.035] p-4">
                    <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-red-200" />
                    <p className="text-sm leading-relaxed text-neutral-300">{boundary}</p>
                  </div>
                ))}
              </div>
            </div>
            <CodePanel title="Reference skeleton" body={runnerCode} />
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <CodePanel title="Intent to policy action" body={intentMap} />
            <div className="rounded-lg border border-white/10 bg-black/70 p-5">
              <h2 className="text-xl font-bold text-white">Reference checks</h2>
              <div className="mt-5 grid gap-3">
                {walletAgentReferenceFlow.reference_checks.map((check) => (
                  <div key={check} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                    <p className="text-sm leading-relaxed text-neutral-300">{check}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black/50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Entrypoints"
              title="Human docs and machine contracts point to the same flow."
              body="The runner is intentionally redundant with the API contracts. A developer can read the page, while an agent or test harness can inspect the JSON."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {Object.entries(walletAgentReferenceFlow.entrypoints).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-black/70 p-5 transition-colors hover:border-orange-500/35 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-orange-200">
                      {label.replace(/_/g, " ")}
                    </h2>
                    <ExternalLink className="h-4 w-4 text-orange-300" />
                  </div>
                  <p className="mt-4 break-words text-sm leading-relaxed text-neutral-400">{href}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.025] px-3 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">{label}</div>
      <div className="mt-1 truncate font-mono text-sm font-semibold text-orange-50">{value}</div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-orange-300">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">{body}</p>
    </div>
  )
}

function CodePanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/80">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="font-mono text-xs uppercase tracking-widest text-orange-200">{title}</div>
        <TerminalSquare className="h-4 w-4 text-neutral-500" />
      </div>
      <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-neutral-300">
        <code>{body}</code>
      </pre>
    </div>
  )
}
