"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Bot,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Code2,
  Coins,
  Shield,
  Zap,
  CreditCard,
  Globe,
  Clock,
  ChevronDown,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const TOC = [
  { label: "The Setup: What Agents Need", href: "#setup" },
  { label: "Why Stripe Fails", href: "#stripe-fails" },
  { label: "Why Lightning Fails", href: "#lightning-fails" },
  { label: "Why Ethereum Fails", href: "#ethereum-fails" },
  { label: "What Agents Actually Need", href: "#what-agents-need" },
  { label: "The Ergo Stack", href: "#ergo-stack" },
  { label: "Code: First Agent Payment", href: "#code" },
  { label: "FAQ", href: "#faq" },
]

const STRIPE_FAILURES = [
  {
    icon: CreditCard,
    title: "Requires a merchant account",
    body: "Every Stripe integration requires KYC, a bank account, a registered business or individual identity. An AI agent is an ephemeral process — it has no SSN, no bank, no registration. The account requirement is fundamental to how Stripe operates. It's not a missing API endpoint; the entire model is built around persistent human identity.",
  },
  {
    icon: Globe,
    title: "No programmable acceptance conditions",
    body: "When a user pays on Stripe, the payment succeeds or fails based on card validity. That's it. You can't tell Stripe: 'accept this payment only if the agent delivered task output X and the hash matches.' That conditional logic must live in your application layer — off-chain, centralized, fragile. Every dispute is a customer service ticket.",
  },
  {
    icon: Coins,
    title: "Micropayments are economically broken",
    body: "Stripe's fee is 2.9% + $0.30 per transaction. An agent calling an API at $0.001 costs $0.30 in Stripe fees. The payment costs 300x more than the service. You could batch payments, but then you need credit, which means accounts and trust, which brings you back to square one. The math doesn't work at machine speed.",
  },
  {
    icon: Clock,
    title: "No programmable credit layer",
    body: "Multi-agent pipelines need internal credit: an orchestrator issues a budget to sub-agents, sub-agents spend from that budget paying services, services later reconcile against the orchestrator. Stripe has no concept of issuing programmable IOUs with spending limits and acceptance conditions. You'd build a separate ledger — and trust it.",
  },
]

const LIGHTNING_FAILURES = [
  {
    title: "Requires persistent channels",
    body: "Lightning channels must be opened and funded before payments can flow. Ephemeral agents can't maintain persistent state — they spin up for one task and disappear. Opening a channel for each agent instance defeats the purpose.",
  },
  {
    title: "Both parties must be online",
    body: "Lightning payments require the recipient to be online and responsive. In an agent pipeline with asynchronous tasks, this assumption breaks. An agent completes work, tries to collect payment — the recipient node is offline. Payment fails.",
  },
  {
    title: "No conditional acceptance",
    body: "Lightning has HTLCs (hash-time-locked contracts), which provide some conditionality. But they don't support arbitrary ErgoScript-style acceptance predicates. You can't say 'accept this payment if the preimage matches AND the task hash is correct AND the deadline hasn't passed.' HTLCs are binary.",
  },
]

const AGENT_REQUIREMENTS = [
  {
    icon: Bot,
    title: "No identity requirement",
    ergo: "Any key pair. Babel Fees remove ERG bootstrapping.",
    bad: "Stripe: KYC required. Lightning: channel setup required.",
  },
  {
    icon: Code2,
    title: "Programmable acceptance",
    ergo: "ErgoScript acceptance predicates embedded in the Note.",
    bad: "Stripe: logic lives off-chain. Lightning: HTLCs only.",
  },
  {
    icon: Coins,
    title: "Micropayment viability",
    ergo: "~$0.01 per tx. $0.001 API calls viable with Note batching.",
    bad: "Stripe: $0.30 minimum fee. Lightning: channel friction.",
  },
  {
    icon: Shield,
    title: "Credit issuance",
    ergo: "Reserve → Notes → sub-agents. Protocol-level, no trust.",
    bad: "Stripe: no programmable IOU layer. Lightning: no reserve concept.",
  },
  {
    icon: Zap,
    title: "Ephemeral operation",
    ergo: "Spin up, transact, disappear. No persistent state required.",
    bad: "Stripe: persistent merchant account. Lightning: channel management.",
  },
]

const ERGO_STACK = [
  {
    number: "01",
    name: "Reserve",
    desc: "A UTxO holding ERG as collateral. Script enforces: notes issued ≤ reserve value. Source of truth for the credit system.",
    code: "sigmaProp(issuedNotes <= SELF.value && PK(issuerKey))",
  },
  {
    number: "02",
    name: "Note",
    desc: "A programmable IOU. Bearer instrument with value, expiry, and optional acceptance predicate. Transferred between agents as payment.",
    code: `// Note register layout
R4: reserveBoxId    // which Reserve backs this Note
R5: expiryHeight    // HEIGHT < R5 required to redeem
R6: taskHash        // acceptance predicate data`,
  },
  {
    number: "03",
    name: "Tracker",
    desc: "Anti-double-spend registry. Redemption tx must include Tracker. Script verifies Note ID not already redeemed.",
    code: "sigmaProp(!spentIds.contains(noteId) && validRegistryUpdate)",
  },
  {
    number: "04",
    name: "Acceptance Predicate",
    desc: "The key innovation. Logic embedded in the payment itself — not in your app layer.",
    code: `// Accept payment only if task hash matches
sigmaProp(
  blake2b256(getVar[Coll[Byte]](0).get) == TASK_HASH &&
  HEIGHT < DEADLINE &&
  noteValue >= PRICE
)`,
  },
]

const FLEET_CODE = `import { TransactionBuilder, OutputBuilder, SColl, SByte } from "@fleet-sdk/core";

// Agent pays for an API call — encodes task hash in acceptance predicate
const TASK_HASH = "a1b2c3..."; // blake2b256 of expected task output
const PRICE_NANOERG = 1_000_000n; // 0.001 ERG

const noteOutput = new OutputBuilder(PRICE_NANOERG, API_PROVIDER_ADDRESS)
  .setAdditionalRegisters({
    R4: SColl(SByte, Buffer.from(RESERVE_BOX_ID, "hex")),
    R5: SByte(currentHeight + 100), // expires in 100 blocks
    R6: SColl(SByte, Buffer.from(TASK_HASH, "hex")),
  });

const tx = new TransactionBuilder(currentHeight)
  .from(agentInputBoxes)
  .to(noteOutput)
  .sendChangeTo(AGENT_ADDRESS)
  .payMinFee()
  .build();

// → Sign and submit. API provider validates the Note predicate on redemption.
// No Stripe. No KYC. No off-chain oracle. One transaction.`

const FAQ_ITEMS = [
  {
    q: "What if the agent completes a task but the payment doesn't execute?",
    a: "With an acceptance predicate, the payment executes atomically when the agent provides the task proof. There is no separate 'did they do the work?' check — the blockchain enforces it. If the task proof is invalid, the Note cannot be redeemed.",
  },
  {
    q: "What if the agent is malicious and provides a fake task hash?",
    a: "The acceptance predicate verifies the hash at redemption time. If the agent submits a wrong preimage, `blake2b256(preimage) ≠ TASK_HASH`, and the redemption transaction is rejected by the blockchain. The Note expires worthless. No dispute needed.",
  },
  {
    q: "How does an agent get funded in the first place?",
    a: "An orchestrator issues Notes against a Reserve it controls. Sub-agents receive Notes as their operating budget. They spend Notes paying services. Services batch-redeem Notes against the Reserve. The orchestrator tops up the Reserve as needed. No Stripe account anywhere in this pipeline.",
  },
  {
    q: "Is ChainCash production-ready?",
    a: "Yes. ChainCash is live on Ergo mainnet, open source, built by BetterMoneyLabs. It implements the full Note+Reserve+Tracker stack. Developers can use ChainCash contracts directly or as templates for custom agent payment systems.",
  },
]

export function AgentStripeClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <Breadcrumbs
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Why AI Agents Can't Use Stripe", href: "/blog/agents-cant-use-stripe" },
        ]}
        className="mb-10 opacity-70"
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex gap-8">
          {/* ── Main content ── */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Header */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mb-10"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
                  <Bot className="w-3.5 h-3.5" />
                  Agent Economy
                </span>
                <span className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">
                  10 min read
                </span>
                <span className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">
                  Intermediate
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
              >
                Why AI Agents Can't Use Stripe — and What They Need Instead
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                Stripe, PayPal, and every payment rail built for humans shares the same fatal flaw
                for autonomous agents: they assume a persistent identity and a centralized trust
                layer. Here is what agents actually need from money — and why Ergo already has it.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 text-sm text-gray-400 border-b border-white/10 pb-6"
              >
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs">
                  DR
                </div>
                <div>
                  <span className="text-white">Developer Relations</span>
                  <span className="mx-2">·</span>
                  March 20, 2026
                </div>
              </motion.div>
            </motion.div>

            {/* ── Section: Setup ── */}
            <section id="setup" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
                  The setup: what agents actually are
                </motion.h2>
                <motion.div variants={fadeUp} className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Imagine a software agent: it receives a task via an API, calls an LLM, queries
                    a database, generates a result, and bills the requestor for the compute used.
                    Simple. Except the moment you try to make that billing step real, every
                    existing payment system breaks.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The problem isn't the technology. It's the assumptions. Every payment
                    processor, every bank, every payment network built since the 1960s was
                    designed around one axiom: <strong className="text-white">the payer is a human with a stable identity</strong>.
                    An agent violates all of these assumptions at once.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-4 ml-4">
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />No stable identity — agents are ephemeral processes</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />No KYC — agents are code, not persons</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />Sub-cent transactions — fees must be fractions of a cent</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />Conditional acceptance — payment contingent on task completion</li>
                    <li className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />Machine speed — no human approval loops</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Let's walk through each existing solution and see exactly where it breaks.
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* ── Section: Stripe fails ── */}
            <section id="stripe-fails" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  Why Stripe fails for agents
                </motion.h2>
                <div className="space-y-5">
                  {STRIPE_FAILURES.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-red-500/5 border border-red-500/20 rounded-xl p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                          <f.icon className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={fadeUp}
                  className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">The conclusion:</strong> Stripe's problems aren't
                    bugs — they're fundamental design decisions optimized for human commerce. You
                    can't patch Stripe to work for agents. You need different infrastructure from
                    the ground up.
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* ── Section: Lightning fails ── */}
            <section id="lightning-fails" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  Why Lightning fails for agents
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-300 mb-6 leading-relaxed">
                  Lightning solves the micropayment cost problem. $0.001 per payment is totally
                  viable on Lightning. So why doesn't it work for agents?
                </motion.p>
                <div className="space-y-4">
                  {LIGHTNING_FAILURES.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="border-l-2 border-yellow-500/40 bg-yellow-500/5 rounded-r-xl pl-5 pr-4 py-4"
                    >
                      <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Section: Ethereum fails ── */}
            <section id="ethereum-fails" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
                  Why Ethereum fails for agents
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-300 mb-5 leading-relaxed">
                  Ethereum has programmable money. Smart contracts. This should work. Right?
                </motion.p>
                <motion.div variants={fadeUp} className="space-y-3">
                  {[
                    { problem: "Gas is unpredictable", detail: "Agents need to know the exact cost of a transaction before submitting. On Ethereum, gas price can spike 10x between the simulation and execution. A $0.05 transaction becomes $5. Autonomous agents can't handle this variance." },
                    { problem: "Reentrancy attacks are possible", detail: "The account model with shared global state allows reentrancy. An agent running thousands of transactions is a high-value target for reentrancy exploits. The DAO hack proved this at scale. Ergo's eUTXO makes it structurally impossible." },
                    { problem: "No protocol-level bearer instruments", detail: "There's no Note+Reserve+Tracker primitive on Ethereum. You'd build it as an application — with all the trust, upgrade risk, and complexity that entails. ChainCash would need to be an ERC-20 wrapper around an escrow contract. That's not the same." },
                    { problem: "MEV destroys agent economics", detail: "Maximal Extractable Value lets miners/validators reorder transactions. For an agent that pays for an API response contingent on a hash match, MEV can extract value from time-sensitive flows. Ergo's eUTXO limits MEV vectors by design." },
                    { problem: "ETH required for gas bootstrapping", detail: "Every agent needs ETH to pay gas. For ephemeral agents, pre-funding thousands of wallets with ETH is an operational nightmare. ERC-4337 helps, but adds complexity and cost. Ergo's Babel Fees solve this cleanly at the protocol level." },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-white font-medium mb-1">
                        <XCircle className="w-4 h-4 text-red-400 inline mr-2" />
                        {item.problem}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed pl-6">{item.detail}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </section>

            {/* ── Section: What agents need ── */}
            <section id="what-agents-need" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  What agents actually need from money
                </motion.h2>
                <div className="space-y-4">
                  {AGENT_REQUIREMENTS.map((r, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-500/10 rounded-lg shrink-0">
                          <r.icon className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-3">{r.title}</h3>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div className="flex gap-2 items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-green-400 font-medium">Ergo: </span>
                                <span className="text-gray-300">{r.ergo}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 items-start">
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              <span className="text-gray-400">{r.bad}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Section: Ergo stack ── */}
            <section id="ergo-stack" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
                  The Ergo stack for agent payments
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-300 mb-8 leading-relaxed">
                  Ergo implements all five agent payment requirements at the protocol level — not as
                  application-layer workarounds. Here's the stack:
                </motion.p>
                <div className="space-y-6">
                  {ERGO_STACK.map((layer, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="bg-white/5 border border-white/10 rounded-xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-orange-400/50 font-mono text-sm">{layer.number}</span>
                        <h3 className="text-white font-bold">{layer.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{layer.desc}</p>
                      <pre className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-orange-300 overflow-x-auto">
                        {layer.code}
                      </pre>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Section: Code ── */}
            <section id="code" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
                  Code: agent pays for an API call
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-300 mb-6 leading-relaxed">
                  Here's what the actual agent payment code looks like using Fleet SDK. This is all
                  you need. No Stripe SDK, no KYC, no merchant account.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">agent-pay.js</span>
                    <span className="text-xs text-gray-500">Fleet SDK — @fleet-sdk/core</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">
                    {FLEET_CODE}
                  </pre>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 bg-orange-500/10 border border-orange-500/30 rounded-xl p-5"
                >
                  <p className="text-gray-200 text-sm leading-relaxed">
                    <strong className="text-orange-400">The key insight:</strong> The acceptance
                    predicate is embedded in the Note output. The API provider's redemption script
                    verifies the task hash automatically. No off-chain oracle. No escrow contract.
                    No dispute mechanism. The payment IS the contract.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-4 flex gap-3 flex-wrap">
                  <Link
                    href="/build/quickstart"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Full Quickstart <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/build/agent-payments"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Architecture Reference
                  </Link>
                </motion.div>
              </motion.div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" className="mb-14 scroll-mt-20">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </motion.h2>
                <div className="space-y-3">
                  {FAQ_ITEMS.map((faq, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Collapsible
                        open={openFAQ === i}
                        onOpenChange={(open) => setOpenFAQ(open ? i : null)}
                      >
                        <CollapsibleTrigger className="w-full text-left flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-colors">
                          <span className="text-white font-medium pr-4">{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                              openFAQ === i ? "rotate-180" : ""
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="bg-white/3 border border-t-0 border-white/10 rounded-b-xl px-5 py-4">
                            <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── Author ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border-t border-white/10 pt-8 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold shrink-0">
                DR
              </div>
              <div>
                <div className="text-white font-semibold">Developer Relations</div>
                <div className="text-gray-400 text-sm">Ergo Platform</div>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Helping developers build the agent economy on Ergo. Find us in the Ergo Discord
                  developer channels.
                </p>
              </div>
            </motion.div>
          </article>

          {/* ── Sidebar TOC ── */}
          <aside className="hidden lg:block w-64 shrink-0">
            <StickyTOC items={TOC.map((t) => ({ label: t.label, href: t.href }))} />
          </aside>
        </div>
      </div>

      <FinalCTASimple
        title="Build the agent economy"
        description="Notes, Reserves, and Acceptance Predicates are ready. First transaction in under 10 minutes."
      />
    </BackgroundWrapper>
  )
}
