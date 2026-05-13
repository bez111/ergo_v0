import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  ExternalLink,
  FileText,
  GitBranch,
  ShieldCheck,
  Terminal,
} from "lucide-react"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/navigation"
import type { AgentDemo } from "../_data"

function statusClass(status: AgentDemo["status"]) {
  if (status === "Prototype") return "border-orange-500/30 bg-orange-500/10 text-orange-300"
  if (status === "Research") return "border-purple-500/30 bg-purple-500/10 text-purple-300"
  return "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
}

export function DemoDetailPage({ demo }: { demo: AgentDemo }) {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <section className="relative overflow-hidden pt-32 pb-14">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Demos", href: "/demos" },
                { name: demo.title, href: `/demos/${demo.slug}` },
              ]}
              className="mb-10 opacity-70"
            />

            <Link
              href="/demos"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-400 transition-colors hover:text-orange-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to demos
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-orange-400">
                    {demo.badge}
                  </span>
                </div>

                <h1
                  className="mb-6 font-extrabold tracking-tight text-white"
                  style={{
                    fontSize: "clamp(38px, 6vw, 76px)",
                    lineHeight: 1,
                  }}
                >
                  {demo.title}
                </h1>

                <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
                  {demo.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`https://github.com/accord-protocol/accord-protocol/tree/main/${demo.repoPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-orange-500 bg-orange-500 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-black transition-all hover:border-orange-600 hover:bg-orange-600"
                  >
                    <span>{demo.primaryCta}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/ergo-watch#agent-economy"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/15 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-200 transition-all hover:border-white/30 hover:bg-white/5"
                  >
                    Agent metrics
                  </Link>
                </div>
              </div>

              <Card className="rounded-3xl border border-white/8 bg-black/80">
                <CardContent className="p-7">
                  <div className="mb-5 flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                        Status
                      </p>
                      <h2 className="text-2xl font-extrabold text-white">{demo.status}</h2>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider ${statusClass(demo.status)}`}
                    >
                      {demo.status}
                    </span>
                  </div>
                  <p className="leading-relaxed text-neutral-400">{demo.summary}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Card className="rounded-3xl border border-white/8 bg-black/80">
              <CardContent className="p-7 md:p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                    <GitBranch className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400">
                      Flow
                    </p>
                    <h2 className="text-2xl font-extrabold text-white">What happens</h2>
                  </div>
                </div>
                <ol className="space-y-4">
                  {demo.flow.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-orange-500/25 bg-orange-500/10 font-mono text-xs text-orange-300">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-neutral-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/8 bg-black/80">
              <CardContent className="p-7 md:p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                    <FileText className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-orange-400">
                      Receipt shape
                    </p>
                    <h2 className="text-2xl font-extrabold text-white">Fields to inspect</h2>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {demo.receipts.map((field) => (
                    <div
                      key={field}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 font-mono text-sm text-neutral-300"
                    >
                      {field}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t border-white/5 bg-neutral-950/40 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Card className="rounded-3xl border border-white/8 bg-black/80">
              <CardContent className="p-7 md:p-8">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                    <Terminal className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">Run modes</h2>
                </div>
                <div className="space-y-4">
                  {demo.modes.map((mode) => (
                    <div
                      key={mode.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p className="font-bold text-white">{mode.label}</p>
                        <span className="font-mono text-xs text-orange-300">{mode.value}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-neutral-400">{mode.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/8 bg-black/80">
              <CardContent className="p-7 md:p-8">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10">
                    <ShieldCheck className="h-5 w-5 text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">Safety rules</h2>
                </div>
                <div className="space-y-3">
                  {demo.security.map((rule) => (
                    <div key={rule} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                      <p className="text-sm leading-relaxed text-neutral-300">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="rounded-3xl border border-white/8 bg-black/80">
              <CardContent className="p-7 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-orange-400">
                      Expected JSON
                    </p>
                    <h2 className="text-2xl font-extrabold text-white">Demo output shape</h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-neutral-400">
                    No mainnet
                  </span>
                </div>
                <pre className="overflow-x-auto rounded-2xl border border-white/8 bg-neutral-950 p-5 font-mono text-sm leading-relaxed text-neutral-300">
                  <code>{demo.sample}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
