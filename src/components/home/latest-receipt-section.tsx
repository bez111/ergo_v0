import { ArrowRight, ExternalLink, FileCheck2, LockKeyhole, ReceiptText } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { agentEconomyLiveSnapshot } from "@/lib/agent-economy/static-proof-snapshots"

const receiptId = agentEconomyLiveSnapshot.summary.latest_full_receipt_id

const proofAtoms = [
  {
    label: "Agreement JSON",
    value: "task, terms, buyer, provider",
  },
  {
    label: "Verification Receipt JSON",
    value: "task hash and Note proof",
  },
  {
    label: "Settlement Receipt JSON",
    value: "redemption and settlement tx",
  },
  {
    label: "Mainnet claim",
    value: "closed until audit artifacts",
  },
]

export function LatestReceiptSection({ locale }: { locale: string }) {
  const ru = locale === "ru"

  if (!receiptId) return null

  return (
    <section className="border-y border-white/8 bg-neutral-950/95 py-12 md:py-14">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-orange-300">
              <ReceiptText className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ru ? "Последний full receipt" : "Latest full receipt"}</span>
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {ru
                ? "Откройте receipt. Проверьте работу, условия и расчёт."
                : "Open the receipt. Inspect the work, terms, and settlement."}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300">
              {ru
                ? "Транзакция показывает, что value сдвинулся. Full receipt bundle показывает, какая работа была согласована, как она была проверена и чем закрылась на Ergo testnet."
                : "A transaction proves value moved. A full receipt bundle proves what work was agreed, how it was verified, and how the obligation closed on Ergo testnet."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/r/sage/${receiptId}`}
                className="inline-flex min-h-[44px] items-center gap-2 border border-orange-500 bg-orange-500 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                style={{ borderRadius: 8 }}
              >
                <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                {ru ? "Открыть receipt" : "Open receipt"}
              </Link>
              <a
                href={`/api/sage/receipt/${receiptId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 border border-white/15 bg-white/[0.035] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 transition-colors hover:border-orange-500/45 hover:bg-orange-500/10 hover:text-orange-100"
                style={{ borderRadius: 8 }}
              >
                JSON API
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <Link
                href="/agent-economy/trust"
                className="inline-flex min-h-[44px] items-center gap-2 border border-red-400/30 bg-red-500/[0.045] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-red-100 transition-colors hover:border-red-300/55 hover:bg-red-500/10"
                style={{ borderRadius: 8 }}
              >
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                {ru ? "Mainnet gate" : "Mainnet gate"}
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-black/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:p-5">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  Receipt id
                </div>
                <div className="mt-1 break-all font-mono text-sm text-orange-100">
                  {receiptId}
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/35 bg-orange-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]" />
                testnet settled
              </span>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {proofAtoms.map((item) => (
                <div key={item.label} className="rounded-md border border-white/10 bg-neutral-950/90 p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm text-neutral-200">{item.value}</div>
                </div>
              ))}
            </div>

            <Link
              href="/agent-economy/proofs"
              className="group mt-4 flex items-center justify-between gap-4 rounded-md border border-orange-500/20 bg-orange-500/[0.055] p-3 text-left transition-colors hover:border-orange-400/50 hover:bg-orange-500/10"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300">
                  {ru ? "Proof explorer" : "Proof explorer"}
                </div>
                <div className="mt-1 text-sm text-neutral-300">
                  {ru
                    ? "Проверьте этот receipt рядом с conformance, MCP, widget и mainnet gate."
                    : "Verify this receipt beside conformance, MCP, widget, and the mainnet gate."}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-orange-300 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
