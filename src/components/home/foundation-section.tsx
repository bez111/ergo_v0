import { Link } from "@/i18n/navigation"
import { Calendar, Github, FileText, BarChart3, ShieldCheck, ArrowRight } from "lucide-react"

/**
 * Foundation section — answers "What is Ergo?" for visitors who land on the
 * homepage without prior context. Sits below the hero and before the agent
 * economy positioning.
 *
 * Strategic intent (per E-E-A-T audit):
 *   - Plain-language definition with verifiable facts
 *   - Source links next to every claim (no orphan numbers)
 *   - Provenance signals (open-source, fair launch date, GitHub)
 *   - Authority block — who maintains the protocol
 */

const FACTS: { label: string; value: string; source?: { href: string; label: string } }[] = [
  {
    label: "Network type",
    value: "Layer-1 Proof-of-Work blockchain",
    source: { href: "/technology/secure-pow", label: "Autolykos v2 spec" },
  },
  {
    label: "State model",
    value: "Extended UTXO (eUTXO) with ErgoScript",
    source: { href: "/technology/eutxo-model", label: "eUTXO docs" },
  },
  {
    label: "Native token",
    value: "ERG · max supply 97,739,925",
    source: { href: "https://explorer.ergoplatform.com", label: "Explorer" },
  },
  {
    label: "Launched",
    value: "July 2019, fair launch",
    source: { href: "/blog/ergo-manifesto", label: "Manifesto" },
  },
  {
    label: "Pre-mine / VC allocation",
    value: "None",
    source: { href: "https://github.com/ergoplatform/ergo", label: "Reference client" },
  },
  {
    label: "Block time",
    value: "~120 seconds",
    source: { href: "https://explorer.ergoplatform.com", label: "Live data" },
  },
]

export function FoundationSection() {
  return (
    <section
      id="what-is-ergo"
      className="py-20 sm:py-24 border-t border-white/5 bg-black"
      aria-labelledby="what-is-ergo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-10">
          <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-3">
            Foundations
          </p>
          <h2
            id="what-is-ergo-heading"
            className="font-extrabold tracking-tight text-white"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            What is Ergo?
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Plain-language explanation */}
          <div className="space-y-5 text-neutral-300 leading-relaxed">
            <p style={{ fontSize: "clamp(16px, 1.7vw, 19px)" }}>
              <strong className="text-white">Ergo is an open-source Layer-1 blockchain</strong> launched in
              July 2019. It uses Proof-of-Work consensus (Autolykos v2) and an Extended UTXO
              (eUTXO) model with smart contracts written in <Link href="/technology/ergoscript" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">ErgoScript</Link>.
              The native token is <strong className="text-white">ERG</strong>, with a fixed maximum supply of
              97,739,925 — there was no pre-mine, no ICO, and no VC allocation.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
              The eUTXO model lets transactions execute deterministically — agents can compute the exact
              cost of a transaction <em>before</em> submitting it, with no surprise gas spikes or
              reentrancy risk. <Link href="/technology/babel-fees" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Babel Fees</Link>{" "}
              let users pay transaction fees in tokens other than ERG, and{" "}
              <Link href="/technology/storage-rent" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Storage Rent</Link>{" "}
              keeps long-term state size manageable.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
              These properties — predictable cost, deterministic execution, no central kill switch — are why
              Ergo is well suited as a settlement layer for autonomous AI agent commerce. That positioning
              is explained further in the{" "}
              <Link href="/agent-economy" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
                agent economy hub
              </Link>{" "}
              and the {" "}
              <Link href="/blog/agent-economy-manifesto" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
                manifesto
              </Link>.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
              >
                <span>New to Ergo? Start here</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/legal/risk"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-neutral-300 font-mono font-semibold uppercase tracking-wider px-5 py-2.5 rounded-2xl border-2 border-white/15 hover:border-white/30 transition-all text-sm"
              >
                <span>Read the risks</span>
              </Link>
            </div>
          </div>

          {/* Verifiable facts panel */}
          <div className="rounded-3xl border border-white/10 bg-neutral-950/60 p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="w-4 h-4 text-orange-400" aria-hidden="true" />
              <p className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                Verifiable facts
              </p>
            </div>
            <dl className="space-y-3.5 text-sm">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 pb-3.5 border-b border-white/5 last:border-0"
                >
                  <dt className="text-neutral-500 font-mono text-xs uppercase tracking-wider mt-1">
                    {f.label}
                  </dt>
                  <dd className="text-neutral-100 leading-snug">
                    {f.value}
                    {f.source && (
                      <>
                        {" "}
                        <a
                          href={f.source.href}
                          target={f.source.href.startsWith("http") ? "_blank" : undefined}
                          rel={f.source.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-orange-400 hover:text-orange-300 text-xs font-mono"
                        >
                          [{f.source.label}]
                        </a>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Authority footer */}
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                Last reviewed 2026-05-06
              </span>
              <a
                href="https://github.com/ergoplatform/ergo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
              >
                <Github className="w-3 h-3" aria-hidden="true" />
                Source code
              </a>
              <Link
                href="/legal/editorial"
                className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
              >
                <FileText className="w-3 h-3" aria-hidden="true" />
                Editorial policy
              </Link>
              <Link
                href="/network-status"
                className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
              >
                <BarChart3 className="w-3 h-3" aria-hidden="true" />
                Live network
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
