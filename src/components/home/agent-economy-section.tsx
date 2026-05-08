"use client"

import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { Bot, CreditCard, GitBranch, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const BRAND = "#ff8800"

const PILLARS = [
  {
    icon: Bot,
    title: "Notes",
    desc: "Programmable IOUs. Issue, transfer, and redeem bearer instruments — without a bank.",
    href: "/build/agent-payments#note",
  },
  {
    icon: CreditCard,
    title: "Trust Rules",
    desc: "ErgoScript acceptance predicates: 'accept payment only if task hash matches and deadline hasn't passed.'",
    href: "/build/agent-payments#predicate",
  },
  {
    icon: GitBranch,
    title: "Community Money",
    desc: "Deploy a reserve and issue a community currency in one transaction. Native protocol support.",
    href: "/build/agent-payments#community",
  },
]

export function AgentEconomySection() {
  return (
    <section className="py-24 border-t border-white/5 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-5">
              <Bot className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">
                Agent Economy
              </span>
            </div>
            <h2
              className="font-extrabold tracking-tight text-white"
              style={{
                fontSize: "clamp(26px, 3.5vw, 44px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Built for the{" "}
              <span style={{ color: BRAND }}>agent economy</span>
            </h2>
            <p
              className="text-neutral-400 mt-4"
              style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.5, maxWidth: "54ch" }}
            >
              Autonomous agents need more than payments. Ergo is the only settlement layer with
              programmable credit, acceptance predicates, and verifiable reserves built in.
            </p>
          </div>

          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/agent-economy"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-5 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm whitespace-nowrap"
            >
              <span>See the stack</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link
                href={p.href}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-3xl"
              >
                <Card className="h-full bg-black/80 border border-white/8 rounded-3xl group-hover:border-orange-500/40 group-hover:-translate-y-0.5 transition-all duration-300 cursor-pointer p-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all">
                    <p.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-100 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {p.desc}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/agent-economy"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-mono font-semibold uppercase tracking-wider px-6 py-3 rounded-2xl border-2 border-orange-500 hover:border-orange-600 transition-all text-sm"
            >
              <span>See the full stack</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
