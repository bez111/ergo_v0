import { ArrowRight, Code2, Play, ReceiptText, ServerCog, TerminalSquare } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

const buildTools = [
  {
    title: "Quickstart",
    description: "Start building on Ergo with the shortest path through tools, docs, and first transactions.",
    href: "/build/quickstart",
    icon: TerminalSquare,
    label: "Start here",
  },
  {
    title: "ErgoScript Playground",
    description: "Compile examples, inspect P2S output, and validate ErgoTree flow in the browser.",
    href: "/build/playground",
    icon: Code2,
    label: "Open tool",
  },
  {
    title: "Agent Payments",
    description: "Follow the Accord/Sage payment path from quote to receipt and on-chain evidence.",
    href: "/build/agent-payments",
    icon: ReceiptText,
    label: "Inspect flow",
  },
  {
    title: "Developer Services",
    description: "Use the faucet surface, address inspector, box/tx lookup, receipt verifier, hasher, and service index.",
    href: "/build/services",
    icon: ServerCog,
    label: "Open workbench",
  },
]

export default function BuildIndexPage() {
  return (
    <BackgroundWrapper>
      <main className="min-h-screen text-white">
        <Breadcrumbs items={[{ name: "Build", href: "/build" }]} variant="hidden" />

        <section className="px-4 pb-16 pt-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                <Play className="h-3.5 w-3.5" />
                Developer entrypoint
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Build on Ergo
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                One place for the practical builder path: quickstart, live
                ErgoScript experiments, and the agent-payment proof stack.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {buildTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex min-h-[260px] flex-col rounded-2xl border border-white/10 bg-black/75 p-6 transition-colors hover:border-orange-500/45 hover:bg-orange-500/[0.035]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10">
                      <tool.icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-orange-300" />
                  </div>
                  <h2 className="mt-7 text-2xl font-semibold text-white group-hover:text-orange-100">
                    {tool.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                    {tool.description}
                  </p>
                  <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-orange-300">
                    {tool.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </BackgroundWrapper>
  )
}
