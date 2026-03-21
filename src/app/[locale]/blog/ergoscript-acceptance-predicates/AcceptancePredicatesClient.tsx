"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import {
  Code2,
  CheckCircle,
  XCircle,
  Shield,
  Zap,
  Bot,
  ChevronDown,
  Lock,
  FileText,
  Eye,
  Network,
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
  { label: "The Problem: Off-Chain Logic", href: "#problem" },
  { label: "What Is an Acceptance Predicate?", href: "#what-is" },
  { label: "How It Works On-Chain", href: "#how-it-works" },
  { label: "Code: Task Hash Verification", href: "#code-task-hash" },
  { label: "Code: Deadline + Credential", href: "#code-deadline" },
  { label: "Code: Multi-Agent Pipeline", href: "#code-pipeline" },
  { label: "Why Not Ethereum?", href: "#why-not-eth" },
  { label: "FAQ", href: "#faq" },
]

const tldrItems = [
  {
    icon: XCircle,
    title: "Off-Chain Logic Creates Trust Vulnerabilities",
    description: "Escrow, oracles, and dispute resolution all introduce centralized trust at exactly the layer where autonomous agents need trustlessness.",
  },
  {
    icon: Shield,
    title: "Acceptance Predicates Live In the Payment",
    description: "An ErgoScript condition embedded in the UTxO spending script encodes task completion logic. The payment IS the contract.",
  },
  {
    icon: Code2,
    title: "Miners Enforce the Condition",
    description: "No oracle, no escrow, no trusted server. Every full node runs the ErgoScript independently. If the condition fails, the payment simply cannot be spent.",
  },
  {
    icon: CheckCircle,
    title: "Composable: Hash, Credentials, Deadlines",
    description: "Combine blake2b256 hash verification, proveDlog credential proofs, and HEIGHT expiry conditions with AND/OR logic — all in one predicate.",
  },
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

const HOW_IT_WORKS_STEPS = [
  { n: "01", title: "Agent A creates a Note with a spending script", body: "The Note UTxO's script includes the acceptance predicate: the expected task hash (stored in R6), the expiry height (R5), and optionally credential requirements. This is encoded at Note creation — before any work is done." },
  { n: "02", title: "Agent A pays Agent B with the Note", body: "Agent B receives the Note UTxO. They can verify the spending script — the acceptance condition is publicly visible. They know exactly what they need to provide to redeem the payment." },
  { n: "03", title: "Agent B completes the task", body: "Agent B executes the task and produces the output. They compute blake2b256(output) locally and verify it matches the hash in R6. If it matches, they proceed to redemption." },
  { n: "04", title: "Agent B constructs the redemption transaction", body: "Agent B includes the task output as context variable 0 in the spending transaction. The ErgoScript evaluator reads getVar[Coll[Byte]](0), hashes it, compares against R6. If equal, the script returns true." },
  { n: "05", title: "Miners validate and include the transaction", body: "Every miner (and full node) independently runs the ErgoScript. No miner can include the transaction unless the acceptance predicate is satisfied. The payment is released. Trustless, final, on-chain." },
]

const WHY_NOT_ETH_ROWS = [
  { label: "Solidity escrow contract", ergo: "Spending condition in the UTxO", eth: "Separate deployed contract" },
  { label: "Task verification", ergo: "blake2b256 in ErgoScript, verified by miners", eth: "Off-chain oracle or trusted verifier" },
  { label: "Reentrancy risk", ergo: "None — eUTXO spent exactly once", eth: "Must use reentrancy guards" },
  { label: "Gas cost to check", ergo: "~$0.01 flat", eth: "Variable, spikes during congestion" },
  { label: "Deployment required", ergo: "No — predicate is in the UTxO", eth: "Yes — separate contract deployment" },
  { label: "Formal verification", ergo: "Tractable — non-Turing-complete", eth: "Hard — Turing-complete EVM" },
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
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "ErgoScript Acceptance Predicates", href: "/blog/ergoscript-acceptance-predicates" },
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
              ErgoScript Acceptance Predicates: The Missing Primitive for Agent Payments
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Every agent payment system eventually needs to answer the same question: how does the paying agent know the receiving agent actually did the work? The standard answer — escrow, oracles, dispute resolution — introduces trust at exactly the layer where agents need trustlessness. ErgoScript acceptance predicates solve this differently: the condition lives in the payment itself, enforced by miners.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="ErgoScript Acceptance Predicates: The Missing Primitive for Agent Payments"
                url="https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates"
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

          {/* The Problem */}
          <motion.section
            id="problem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Problem: Off-Chain Logic</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                When an agent pays for a service, how is task completion enforced? Three common approaches — all wrong for autonomous agents.
              </p>
            </div>
            <div className="grid gap-6">
              {PROBLEMS.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-red-400/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
                          <p.icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{p.body}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What Is an Acceptance Predicate */}
          <motion.section
            id="what-is"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Is an Acceptance Predicate?</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                An acceptance predicate is an ErgoScript condition embedded in a UTxO's spending script that encodes the conditions under which a payment is considered valid.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In the eUTXO model, every UTxO has a <strong className="text-white">spending script</strong> — an ErgoScript program that must return <code className="text-orange-300 text-sm">true</code> for the UTxO to be spent. For a simple payment, this script checks a signature. For an agent payment with an acceptance predicate, the script additionally checks:
              </p>
              <div className="space-y-3">
                {[
                  "The task output hash — blake2b256(provided_output) == stored_hash",
                  "The deadline — HEIGHT < expiry_block",
                  "The redeemer's credentials — proveDlog(stored_key)",
                  "Any combination of the above with AND / OR logic",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <code className="text-gray-300">{item}</code>
                  </div>
                ))}
              </div>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">The key insight:</strong> the condition is enforced by every full node validating the transaction. There is no oracle, no escrow contract, no trusted server, no dispute resolution layer. The payment IS the contract. If the condition fails, the payment simply cannot be spent — not "can be disputed," not "can be clawed back by admin" — cannot be spent, period.
                  </p>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* How It Works On-Chain */}
          <motion.section
            id="how-it-works"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">How It Works On-Chain</h2>
            <div className="space-y-6">
              {HOW_IT_WORKS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-black border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Code: Task Hash */}
          <motion.section
            id="code-task-hash"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Code: Task Hash Verification</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The most common acceptance predicate: "pay only if the redeemer provides the correct task output."
              </p>
              <div>
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
              </div>
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Code: Deadline + Credential */}
          <motion.section
            id="code-deadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Code: Deadline + Credential</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Combine task hash with credential proof — only a specific agent identity can redeem.
              </p>
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Code: Multi-Agent Pipeline */}
          <motion.section
            id="code-pipeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Code: Multi-Agent Pipeline</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Orchestrator issues Notes with different predicates to different sub-agents. Each sub-agent redeems independently.
              </p>
              <div>
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
              </div>
            </div>
          </motion.section>

          {/* Why Not Ethereum */}
          <motion.section
            id="why-not-eth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Not Ethereum?</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ethereum has programmable contracts, but the architecture is fundamentally different — and more complex for agent payments.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {WHY_NOT_ETH_ROWS.map((row, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-500 text-xs font-mono mb-2">{row.label}</p>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <p className="text-orange-400 text-xs mb-1">Ergo</p>
                        <p className="text-gray-300 text-sm">{row.ergo}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-500 text-xs mb-1">Ethereum</p>
                        <p className="text-gray-500 text-sm">{row.eth}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

          <div className="mb-8">
            <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-2">Ready to implement?</p>
                  <p className="text-gray-300 leading-relaxed mb-4">Working Fleet SDK code for acceptance predicates is in the open source repo. Start with example 03.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/build/quickstart" className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                      10-Minute Quickstart →
                    </Link>
                    <a href="https://github.com/bez111/ergo-agent-economy" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors">
                      GitHub Examples →
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <ShareCTA
            title="ErgoScript Acceptance Predicates: The Missing Primitive for Agent Payments"
            description="How task completion logic lives inside the payment itself — enforced by miners, not oracles or escrow contracts."
            url="https://www.ergoblockchain.org/blog/ergoscript-acceptance-predicates"
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
              <Link href="/blog/agents-cant-use-stripe" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Bot className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Why Agents Can't Use Stripe</h3>
                        <p className="text-gray-400 text-sm mb-2">The structural problems with every human-centric payment rail</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Analysis
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/build-agent-pays-for-api" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Build an Agent That Pays for API Calls</h3>
                        <p className="text-gray-400 text-sm mb-2">Full tutorial: agent wallet, payment flow, on-chain verification</p>
                        <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400 text-xs">
                          Tutorial
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
