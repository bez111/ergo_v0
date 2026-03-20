"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Code2,
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield,
  Zap,
  Bot,
  ChevronDown,
  Lock,
  FileText,
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
  { label: "The Problem: Off-Chain Logic", href: "#problem" },
  { label: "What Is an Acceptance Predicate?", href: "#what-is" },
  { label: "How It Works On-Chain", href: "#how-it-works" },
  { label: "Code: Task Hash Verification", href: "#code-task-hash" },
  { label: "Code: Deadline + Credential", href: "#code-deadline" },
  { label: "Code: Multi-Agent Pipeline", href: "#code-pipeline" },
  { label: "Why Not Ethereum?", href: "#why-not-eth" },
  { label: "FAQ", href: "#faq" },
]

const PROBLEMS = [
  {
    icon: XCircle,
    title: "Off-chain escrow: a trusted third party",
    body: "The standard pattern: Agent A pays into an escrow smart contract. Agent B completes the task. An oracle or trusted server verifies completion and releases funds. Every step adds a trust assumption. The oracle can lie. The escrow can be exploited. The server can go down. This is not autonomous commerce — it's traditional commerce with extra steps.",
  },
  {
    icon: XCircle,
    title: "Centralized dispute resolution",
    body: "When Agent B claims completion and Agent A disagrees, someone must adjudicate. In practice that means a centralized service, an emergency multisig, or a governance vote. Autonomous agents can't participate in any of these mechanisms. The dispute is unresolvable.",
  },
  {
    icon: XCircle,
    title: "Atomic swaps: wrong abstraction",
    body: "Atomic swaps exchange asset A for asset B simultaneously. Agent payments aren't asset swaps — they're conditional releases. 'Pay me when I prove I computed the correct output' is fundamentally different from 'swap my token for yours.' The atomicity is at the wrong layer.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is an acceptance predicate in Ergo?",
    a: "An ErgoScript condition embedded in a UTxO's spending script that encodes the conditions under which a payment is valid. For example: 'this Note can only be spent if the spender provides a value whose blake2b256 hash matches the value stored in R6.' The condition is enforced by miners — no trusted third party.",
  },
  {
    q: "How does the receiver provide the task output?",
    a: "Through context variables — getVar[Coll[Byte]](0). When constructing the spending transaction, the redeemer includes the task output as a context variable. ErgoScript reads it, hashes it, and compares against the stored hash. If it matches, the script succeeds and the payment is released.",
  },
  {
    q: "Can acceptance predicates expire?",
    a: "Yes. The predicate can include HEIGHT < expiryBlock as a condition. If the deadline passes without redemption, the Note can be recovered by the issuer. This allows agent payment flows with hard deadlines — 'complete this task before block X or the payment is void.'",
  },
  {
    q: "What's the difference between an acceptance predicate and a Solidity escrow?",
    a: "A Solidity escrow is a separate smart contract that holds funds and has its own state. An acceptance predicate is a spending condition embedded directly in the payment UTxO — there's no separate contract, no separate deployment, no additional trust surface. The payment IS the contract.",
  },
  {
    q: "Can acceptance predicates use zero-knowledge proofs?",
    a: "Yes. ErgoScript has native Sigma Protocol support. An acceptance predicate can require proveDlog(R6.get) — meaning the redeemer must prove they hold a specific private key — without revealing the key. This allows credential-based acceptance without identity disclosure.",
  },
]

export function AcceptancePredicatesClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <BackgroundWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "ErgoScript Acceptance Predicates", href: "/blog/ergoscript-acceptance-predicates" },
          ]}
          className="mb-10 opacity-70"
        />

        <div className="flex gap-12 relative">
          <aside className="hidden xl:block w-56 shrink-0">
            <StickyTOC items={TOC} />
          </aside>

          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Hero */}
            <motion.header variants={stagger} initial="hidden" animate="visible" className="pt-8 pb-12">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Code2 className="w-3.5 h-3.5" />
                  Development
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  10 min read
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  Advanced
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                ErgoScript Acceptance Predicates
                <span className="block text-orange-400 mt-1">The Missing Primitive for Agent Payments</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-6">
                Every agent payment system eventually needs to answer the same question: how does the paying agent know the receiving agent actually did the work? The standard answer — escrow, oracles, dispute resolution — introduces trust at exactly the layer where agents need trustlessness. ErgoScript acceptance predicates solve this differently: the condition lives in the payment itself, enforced by miners.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-gray-500 border-t border-white/10 pt-6">
                <span>Developer Relations</span>
                <span>·</span>
                <time>March 20, 2026</time>
              </motion.div>
            </motion.header>

            {/* The Problem */}
            <section id="problem" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  The Problem: Off-Chain Logic
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-8">
                  When an agent pays for a service, how is task completion enforced? Three common approaches — all wrong for autonomous agents.
                </motion.p>
                <div className="space-y-4">
                  {PROBLEMS.map((p, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 flex gap-4">
                      <p.icon className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-semibold mb-1 text-sm">{p.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* What Is */}
            <section id="what-is" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  What Is an Acceptance Predicate?
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">
                  An acceptance predicate is an ErgoScript condition embedded in a UTxO's spending script that encodes the conditions under which a payment is considered valid.
                </motion.p>
                <motion.div variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In the eUTXO model, every UTxO has a <strong className="text-white">spending script</strong> — an ErgoScript program that must return <code className="text-orange-300 text-sm">true</code> for the UTxO to be spent. For a simple payment, this script checks a signature. For an agent payment with an acceptance predicate, the script additionally checks:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[
                      "The task output hash — blake2b256(provided_output) == stored_hash",
                      "The deadline — HEIGHT < expiry_block",
                      "The redeemer's credentials — proveDlog(stored_key)",
                      "Any combination of the above with AND / OR logic",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <code className="text-gray-300">{item}</code>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp} className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 flex gap-3">
                  <Shield className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-sm">
                    <strong className="text-white">The key insight:</strong> the condition is enforced by every full node validating the transaction. There is no oracle, no escrow contract, no trusted server, no dispute resolution layer. The payment IS the contract. If the condition fails, the payment simply cannot be spent — not "can be disputed," not "can be clawed back by admin" — cannot be spent, period.
                  </p>
                </motion.div>
              </motion.div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  How It Works On-Chain
                </motion.h2>
                <div className="space-y-4">
                  {[
                    { n: "01", title: "Agent A creates a Note with a spending script", body: "The Note UTxO's script includes the acceptance predicate: the expected task hash (stored in R6), the expiry height (R5), and optionally credential requirements. This is encoded at Note creation — before any work is done." },
                    { n: "02", title: "Agent A pays Agent B with the Note", body: "Agent B receives the Note UTxO. They can verify the spending script — the acceptance condition is publicly visible. They know exactly what they need to provide to redeem the payment." },
                    { n: "03", title: "Agent B completes the task", body: "Agent B executes the task and produces the output. They compute blake2b256(output) locally and verify it matches the hash in R6. If it matches, they proceed to redemption." },
                    { n: "04", title: "Agent B constructs the redemption transaction", body: "Agent B includes the task output as context variable 0 in the spending transaction. The ErgoScript evaluator reads getVar[Coll[Byte]](0), hashes it, compares against R6. If equal, the script returns true." },
                    { n: "05", title: "Miners validate and include the transaction", body: "Every miner (and full node) independently runs the ErgoScript. No miner can include the transaction unless the acceptance predicate is satisfied. The payment is released. Trustless, final, on-chain." },
                  ].map((step, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                      <span className="text-orange-400/50 font-mono text-sm font-bold shrink-0 mt-0.5">{step.n}</span>
                      <div>
                        <h3 className="text-white font-semibold mb-1 text-sm">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Code: Task Hash */}
            <section id="code-task-hash" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  Code: Task Hash Verification
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">
                  The most common acceptance predicate: "pay only if the redeemer provides the correct task output."
                </motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">ergoscript</span>
                    <span className="text-xs text-gray-600">acceptance_predicate.ergo</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`{
  // Acceptance predicate: task hash verification
  //
  // R5: expiry block height (SInt)
  // R6: expected task output hash (SColl[SByte], 32 bytes)
  //
  // To redeem: provide task output as context variable 0
  // Miners verify: blake2b256(output) == R6

  val expiry       = R5[Int].get
  val expectedHash = R6[Coll[Byte]].get

  val taskOutput   = getVar[Coll[Byte]](0).get   // provided at redemption
  val actualHash   = blake2b256(taskOutput)

  sigmaProp(
    HEIGHT < expiry       &&   // not expired
    actualHash == expectedHash  // task completed correctly
  )
}`}</pre>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-4">
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">create_conditional_note.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`import { OutputBuilder, SInt, SColl, SByte } from "@fleet-sdk/core";
import crypto from "crypto";

const EXPECTED_OUTPUT = "task result: the answer is 42";
const taskHash = crypto.createHash("sha256")
  .update(EXPECTED_OUTPUT).digest(); // use blake2b256 in production

// Create Note with acceptance predicate encoded in registers
const noteOutput = new OutputBuilder("5000000", receiverAddress)
  .setAdditionalRegisters({
    R5: SInt(currentHeight + 100),                  // expiry: 100 blocks
    R6: SColl(SByte, taskHash),                     // expected hash
  });
// The spending script must be set to the acceptance_predicate.ergo above`}</pre>
                </motion.div>
              </motion.div>
            </section>

            {/* Code: Deadline + Credential */}
            <section id="code-deadline" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  Code: Deadline + Credential
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">
                  Combine task hash with credential proof — only a specific agent identity can redeem.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">ergoscript</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`{
  // Acceptance predicate: task hash + authorized redeemer
  //
  // R5: expiry height
  // R6: task hash
  // R7: authorized redeemer public key (GroupElement)

  val expiry       = R5[Int].get
  val expectedHash = R6[Coll[Byte]].get
  val authorizedPK = R7[GroupElement].get    // specific agent's public key

  val taskOutput   = getVar[Coll[Byte]](0).get
  val actualHash   = blake2b256(taskOutput)

  // Both conditions must hold:
  // 1. Task was completed correctly
  // 2. Redeemer is the authorized agent (ZK proof, no key revealed)
  sigmaProp(
    HEIGHT < expiry             &&
    actualHash == expectedHash  &&
    proveDlog(authorizedPK)         // agent proves key ownership without revealing it
  )
}`}</pre>
                </motion.div>
              </motion.div>
            </section>

            {/* Code: Multi-Agent Pipeline */}
            <section id="code-pipeline" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-2">
                  Code: Multi-Agent Pipeline
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-400 mb-6">
                  Orchestrator issues Notes with different predicates to different sub-agents. Each sub-agent redeems independently.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center justify-between bg-black/60 border border-white/10 rounded-t-lg px-4 py-2">
                    <span className="text-xs text-gray-500 font-mono">javascript</span>
                    <span className="text-xs text-gray-600">orchestrator.js</span>
                  </div>
                  <pre className="bg-black/40 border border-t-0 border-white/10 rounded-b-lg p-4 text-sm font-mono text-gray-200 overflow-x-auto leading-relaxed">{`// Orchestrator issues budget to sub-agents via Notes
// Each Note has a different acceptance predicate (different task hash)

const tasks = [
  { agent: agentA_address, task: "fetch weather data",   fee: "1000000" },
  { agent: agentB_address, task: "run sentiment model",  fee: "2000000" },
  { agent: agentC_address, task: "write summary report", fee: "3000000" },
];

const outputs = tasks.map(({ agent, task, fee }) => {
  const expectedHash = computeExpectedHash(task); // known output hash

  return new OutputBuilder(fee, agent)
    .setAdditionalRegisters({
      R5: SInt(currentHeight + 200),         // same deadline for all
      R6: SColl(SByte, expectedHash),        // task-specific acceptance
    });
});

// One transaction issues all three Notes
const tx = new TransactionBuilder(currentHeight)
  .from(orchestratorInputs)
  .to(outputs)
  .sendChangeTo(orchestratorAddress)
  .payMinFee()
  .build();

// Sub-agents redeem independently — no round-trip to orchestrator needed`}</pre>
                </motion.div>
              </motion.div>
            </section>

            {/* Why Not Ethereum */}
            <section id="why-not-eth" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
                  Why Not Ethereum?
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Solidity escrow contract", ergo: "Spending condition in the UTxO", eth: "Separate deployed contract" },
                    { label: "Task verification", ergo: "blake2b256 in ErgoScript, verified by miners", eth: "Off-chain oracle or trusted verifier" },
                    { label: "Reentrancy risk", ergo: "None — eUTXO spent exactly once", eth: "Must use reentrancy guards" },
                    { label: "Gas cost to check", ergo: "~$0.01 flat", eth: "Variable, spikes during congestion" },
                    { label: "Deployment required", ergo: "No — predicate is in the UTxO", eth: "Yes — separate contract deployment" },
                    { label: "Formal verification", ergo: "Tractable — non-Turing-complete", eth: "Hard — Turing-complete EVM" },
                  ].map((row, i) => (
                    <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-gray-500 text-xs font-mono mb-2">{row.label}</p>
                      <div className="flex gap-3 text-sm">
                        <div className="flex-1">
                          <p className="text-orange-400 text-xs mb-1">Ergo</p>
                          <p className="text-gray-300">{row.ergo}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-500 text-xs mb-1">Ethereum</p>
                          <p className="text-gray-500">{row.eth}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16 scroll-mt-24">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-8">FAQ</motion.h2>
                <div className="space-y-3">
                  {FAQ_ITEMS.map((item, i) => (
                    <motion.div key={i} variants={fadeUp}>
                      <Collapsible open={openFAQ === i} onOpenChange={(open) => setOpenFAQ(open ? i : null)}>
                        <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left hover:border-orange-500/30 transition-colors">
                          <span className="text-white font-medium text-sm pr-4">{item.q}</span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFAQ === i ? "rotate-180" : ""}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="bg-white/3 border border-t-0 border-white/10 rounded-b-xl px-5 py-4">
                          <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-16 bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 flex gap-4">
              <FileText className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">Ready to implement?</p>
                <p className="text-gray-400 text-sm mb-3">Working Fleet SDK code for acceptance predicates is in the open source repo. Start with example 03.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/build/quickstart" className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                    10-Minute Quickstart <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a href="https://github.com/bez111/ergo-agent-economy" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                    GitHub Examples <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </article>
        </div>
      </div>

      <FinalCTASimple
        title="Build trustless agent payments"
        description="Acceptance predicates turn payments into enforceable contracts. No escrow. No oracle. No dispute resolution."
      />
    </BackgroundWrapper>
  )
}
