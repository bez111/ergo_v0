import { ArrowRight, FileCheck2, GitBranch, LockKeyhole, ReceiptText } from "lucide-react"
import { Link } from "@/i18n/navigation"

const loopEn = [
  ["Intent", "The user, wallet, or agent states the job."],
  ["Work", "A provider, tool, API, or sub-agent performs it."],
  ["Credit", "Bounded Notes coordinate value before final settlement."],
  ["Predicate", "ErgoScript defines the acceptance rule."],
  ["Receipt", "Agreement, verification, and settlement stay inspectable."],
  ["Settlement", "The obligation closes on a neutral PoW ledger."],
] as const

const loopRu = [
  ["Intent", "Пользователь, кошелёк или агент формулирует задачу."],
  ["Work", "Провайдер, инструмент, API или sub-agent выполняет работу."],
  ["Credit", "Ограниченные Notes координируют ценность до финального расчёта."],
  ["Predicate", "ErgoScript задаёт правило принятия результата."],
  ["Receipt", "Agreement, verification и settlement остаются проверяемыми."],
  ["Settlement", "Обязательство закрывается на нейтральном PoW-слое."],
] as const

export function AutonomousClearingSection({ locale }: { locale: string }) {
  const ru = locale === "ru"
  const loop = ru ? loopRu : loopEn

  return (
    <section className="border-y border-white/8 bg-black/65 py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-orange-300">
              <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ru ? "Автономный клиринг работы" : "Autonomous Work Clearing"}</span>
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {ru
                ? "Платёж двигает value. Клиринг закрывает обязательства."
                : "Payments move value. Clearing resolves obligations."}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              {ru
                ? "Агентская экономика не заканчивается платежом. Ей нужны условия, ограниченный кредит, проверка работы, receipt-память и публичный расчёт без центрального counterparty."
                : "Agent economies do not end at payment. They need terms, bounded credit, work verification, receipt memory, and public settlement without a central counterparty."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/agent-economy/proofs"
                className="inline-flex min-h-[44px] items-center gap-2 border border-orange-500 bg-orange-500 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
                style={{ borderRadius: 8 }}
              >
                <ReceiptText className="h-4 w-4" aria-hidden="true" />
                {ru ? "Открыть proof explorer" : "Open proof explorer"}
              </Link>
              <Link
                href="/agent-economy/trust"
                className="inline-flex min-h-[44px] items-center gap-2 border border-white/20 bg-white/[0.03] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 transition-colors hover:border-red-300/60 hover:bg-red-500/10 hover:text-red-100"
                style={{ borderRadius: 8 }}
              >
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                {ru ? "Проверить trust gate" : "Check trust gate"}
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="border border-white/10 bg-white/[0.03] p-4 sm:p-5" style={{ borderRadius: 8 }}>
              <div className="flex items-start gap-3">
                <FileCheck2 className="mt-1 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-300">
                    {"Intent -> Work -> Credit -> Predicate -> Receipt -> Settlement"}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {ru
                      ? "Это не slogan, а экономический цикл: что заказано, чем ограничено, как проверено и где закрыто."
                      : "This is the economic loop: what was requested, what constrained it, how it was verified, and where it settled."}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3" style={{ borderRadius: 8 }}>
              {loop.map(([label, body], index) => (
                <div key={label} className="min-h-[136px] bg-neutral-950/95 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      0{index + 1}
                    </span>
                    <span className="h-2 w-2 bg-orange-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{body}</p>
                </div>
              ))}
            </div>

            <Link
              href="/agent-economy/launch-kit"
              className="group inline-flex items-center justify-between gap-4 border border-orange-500/25 bg-orange-500/[0.06] p-4 text-left transition-colors hover:border-orange-400/55 hover:bg-orange-500/10"
              style={{ borderRadius: 8 }}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-300">
                  {ru ? "Developer path" : "Developer path"}
                </p>
                <p className="mt-1 text-sm text-neutral-300">
                  {ru
                    ? "Соберите первый проверяемый agent receipt и держите mainnet boundary явной."
                    : "Build the first verifiable agent receipt while keeping the mainnet boundary explicit."}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-orange-300 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
