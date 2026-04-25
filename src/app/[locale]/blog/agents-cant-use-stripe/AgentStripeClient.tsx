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
  Code2,
  Coins,
  Shield,
  Zap,
  CreditCard,
  Globe,
  Clock,
  ChevronDown,
  Network,
  Eye,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareInline } from "@/components/blog/share-inline"
import { ShareCTA } from "@/components/blog/share-cta"

const articleContents = [
  { label: "The Setup: What Agents Are", href: "#setup" },
  { label: "Why Stripe Fails", href: "#stripe-fails" },
  { label: "Why Lightning Fails", href: "#lightning-fails" },
  { label: "Why Ethereum Fails", href: "#ethereum-fails" },
  { label: "What Agents Actually Need", href: "#what-agents-need" },
  { label: "The Ergo Stack", href: "#ergo-stack" },
  { label: "Code: First Agent Payment", href: "#code" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: CreditCard,
    title: "Stripe Requires Identity",
    description: "KYC, bank account, registered identity — an AI agent has none of these. The model is built around persistent human identity agents simply don't have.",
  },
  {
    icon: Globe,
    title: "No Programmable Acceptance",
    description: "You can't tell Stripe: accept this payment only if the agent delivered task output X and the hash matches. That logic must live off-chain.",
  },
  {
    icon: Coins,
    title: "Micropayments Are Broken",
    description: "Stripe's fee is $0.30 minimum. An agent calling an API at $0.001 costs 300x in fees. The math doesn't work at machine speed.",
  },
  {
    icon: Shield,
    title: "Ergo Has All Four Primitives",
    description: "Reserve, Note, Tracker, Acceptance Predicate — all at the protocol level. No wrappers, no off-chain trust, no identity requirement.",
  },
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
    a: "The acceptance predicate verifies the hash at redemption time. If the agent submits a wrong preimage, blake2b256(preimage) ≠ TASK_HASH, and the redemption transaction is rejected by the blockchain. The Note expires worthless. No dispute needed.",
  },
  {
    q: "How does an agent get funded in the first place?",
    a: "An orchestrator issues Notes against a Reserve it controls. Sub-agents receive Notes as their operating budget. They spend Notes paying services. Services batch-redeem Notes against the Reserve. The orchestrator tops up the Reserve as needed. No Stripe account anywhere in this pipeline.",
  },
  {
    q: "Is ChainCash production-ready?",
    a: "Yes. ChainCash is an open-source prototype on Ergo, open source, built by BetterMoneyLabs. It implements the full Note+Reserve+Tracker stack. Developers can use ChainCash contracts directly or as templates for custom agent payment systems.",
  },
]

export function AgentStripeClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Why AI Agents Can't Use Stripe", href: "/blog/agents-cant-use-stripe" },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Why AI Agents Can't Use Stripe — and What They Need Instead
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Stripe, PayPal, and every payment rail built for humans shares the same fatal flaw for autonomous agents: they assume a persistent identity and a centralized trust layer. Here is what agents actually need from money — and why Ergo already has it.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Why AI Agents Can't Use Stripe — and What They Need Instead"
                url="https://www.ergoblockchain.org/blog/agents-cant-use-stripe"
              />
            </div>
          </motion.div>

          {/* TL;DR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
            <div className="grid gap-2">
              {tldrItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <item.icon className="w-5 h-5 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 2xl:hidden"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-orange-400" />
                  Article Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {articleContents.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors py-1"
                    >
                      → {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* Setup */}
          <motion.section
            id="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Setup: What Agents Actually Are</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Imagine a software agent: it receives a task via an API, calls an LLM, queries a database, generates a result, and bills the requestor for the compute used. Simple. Except the moment you try to make that billing step real, every existing payment system breaks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The problem isn't the technology. It's the assumptions. Every payment processor, every bank, every payment network built since the 1960s was designed around one axiom: <strong className="text-white">the payer is a human with a stable identity</strong>. An agent violates all of these assumptions at once.
              </p>
              <div className="space-y-3">
                {[
                  "No stable identity — agents are ephemeral processes",
                  "No KYC — agents are code, not persons",
                  "Sub-cent transactions — fees must be fractions of a cent",
                  "Conditional acceptance — payment contingent on task completion",
                  "Machine speed — no human approval loops",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Let's walk through each existing solution and see exactly where it breaks.
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Why Stripe Fails */}
          <motion.section
            id="stripe-fails"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Stripe Fails for Agents</h2>
            <div className="grid gap-6 mb-8">
              {STRIPE_FAILURES.map((f, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-red-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                          <f.icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{f.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-8">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">The conclusion:</strong> Stripe's problems aren't bugs — they're fundamental design decisions optimized for human commerce. You can't patch Stripe to work for agents. You need different infrastructure from the ground up.
              </p>
            </div>
          </motion.section>

          {/* Why Lightning Fails */}
          <motion.section
            id="lightning-fails"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Lightning Fails for Agents</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Lightning solves the micropayment cost problem. $0.001 per payment is totally viable on Lightning. So why doesn't it work for agents?
              </p>
            </div>
            <div className="space-y-6">
              {LIGHTNING_FAILURES.map((f, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-black border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-yellow-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Ethereum Fails */}
          <motion.section
            id="ethereum-fails"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Ethereum Fails for Agents</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ethereum has programmable money. Smart contracts. This should work. Right?
              </p>
              <div className="space-y-4">
                {[
                  { problem: "Gas is unpredictable", detail: "Agents need to know the exact cost of a transaction before submitting. On Ethereum, gas price can spike 10x between the simulation and execution. A $0.05 transaction becomes $5. Autonomous agents can't handle this variance." },
                  { problem: "Reentrancy attacks are possible", detail: "The account model with shared global state allows reentrancy. An agent running thousands of transactions is a high-value target for reentrancy exploits. The DAO hack proved this at scale. Ergo's eUTXO makes it structurally impossible." },
                  { problem: "No protocol-level bearer instruments", detail: "There's no Note+Reserve+Tracker primitive on Ethereum. You'd build it as an application — with all the trust, upgrade risk, and complexity that entails. ChainCash would need to be an ERC-20 wrapper around an escrow contract. That's not the same." },
                  { problem: "MEV destroys agent economics", detail: "Maximal Extractable Value lets miners/validators reorder transactions. For an agent that pays for an API response contingent on a hash match, MEV can extract value from time-sensitive flows. Ergo's eUTXO limits MEV vectors by design." },
                  { problem: "ETH required for gas bootstrapping", detail: "Every agent needs ETH to pay gas. For ephemeral agents, pre-funding thousands of wallets with ETH is an operational nightmare. ERC-4337 helps, but adds complexity and cost. Ergo's Babel Fees solve this cleanly at the protocol level." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">{item.problem}</p>
                      <p className="text-gray-300 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* What Agents Actually Need */}
          <motion.section
            id="what-agents-need"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Agents Actually Need from Money</h2>
            <div className="grid gap-6">
              {AGENT_REQUIREMENTS.map((r, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <r.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg mb-3">{r.title}</h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex gap-2 items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-green-400 font-medium text-sm">Ergo: </span>
                                <span className="text-gray-300 text-sm">{r.ergo}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 items-start">
                              <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              <span className="text-gray-400 text-sm">{r.bad}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* The Ergo Stack */}
          <motion.section
            id="ergo-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Ergo Stack for Agent Payments</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Ergo implements all five agent payment requirements at the protocol level — not as application-layer workarounds. Here's the stack:
              </p>
            </div>
            <div className="space-y-6">
              {ERGO_STACK.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-black border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-orange-400/50 font-mono text-sm">{layer.number}</span>
                    <h3 className="text-white font-bold text-lg">{layer.name}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{layer.desc}</p>
                  <pre className="bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-xs font-mono text-orange-300 overflow-x-auto">
                    {layer.code}
                  </pre>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Code */}
          <motion.section
            id="code"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Code: Agent Pays for an API Call</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Here's what the actual agent payment code looks like using Fleet SDK. This is all you need. No Stripe SDK, no KYC, no merchant account.
              </p>
              <div>
                <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                  <span className="text-xs text-gray-500 font-mono">agent-pay.js</span>
                  <span className="text-xs text-gray-500">Fleet SDK — @fleet-sdk/core</span>
                </div>
                <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">
                  {FLEET_CODE}
                </pre>
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-orange-400">The key insight:</strong> The acceptance predicate is embedded in the Note output. The API provider's redemption script verifies the task hash automatically. No off-chain oracle. No escrow contract. No dispute mechanism. The payment IS the contract.
                </p>
              </Card>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/build/quickstart"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Full Quickstart
                </Link>
                <Link
                  href="/build/agent-payments"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  Architecture Reference
                </Link>
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-left">{item.q}</h3>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black/50 border border-white/5 rounded-xl">
                        <p className="text-gray-300 leading-relaxed">{item.a}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <ShareCTA
            title="Why AI Agents Can't Use Stripe — and What They Need Instead"
            description="The payment rails built for humans fail autonomous agents. Ergo has the primitives agents actually need — at the protocol level."
            url="https://www.ergoblockchain.org/blog/agents-cant-use-stripe"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/agent-economy-manifesto" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">The Agent Economy Manifesto</h3>
                        <p className="text-gray-400 text-sm mb-2">Five theses on why every AI system will need to pay and be paid — and which chain wins</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/ergoscript-acceptance-predicates" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Code2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Acceptance Predicates</h3>
                        <p className="text-gray-400 text-sm mb-2">How task completion logic lives inside the payment itself — enforced by miners</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Development
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.section>

          <FinalCTASimple />
        </div>
      </div>
    </BackgroundWrapper>
  )
}
