"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import { useState } from "react"
import { motion } from "framer-motion"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { ExpandableInfographic } from "@/components/blog/expandable-infographic"
import { StickyTOC } from "@/components/blog/sticky-toc"
import {
  Code,
  Database,
  Eye,
  CheckCircle,
  ChevronDown,
  Lock,
  Layers,
  Network
} from "lucide-react"
import { Link } from "@/i18n/navigation"

export default function ErgoScriptArticleClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: Code,
      title: "Functional, Not Imperative",
      description:
        "ErgoScript is a functional smart contract language. Scripts don’t “run”, they validate conditions on eUTXO spends and return True or False.",
    },
    {
      icon: Layers,
      title: "Built For eUTXO",
      description:
        "The Ergo scripting language is designed for Ergo’s eUTXO model, enforcing spending rules on individual boxes instead of mutating global account state.",
    },
    {
      icon: Database,
      title: "Registers & Context",
      description:
        "Each UTXO has registers (R3–R9) for custom data and scripts see full transaction context, enabling expressive, stateless smart contracts on Ergo.",
    },
    {
      icon: Lock,
      title: "Secure By Design",
      description:
        "No loops, no mutable variables, no global memory. This removes many attack vectors common on EVM chains and makes audits far more predictable.",
    },
    {
      icon: Eye,
      title: "Sigma Protocol Ready",
      description:
        "ErgoScript natively supports Sigma protocols, enabling lightweight zero-knowledge conditions and privacy-preserving Ergo smart contracts.",
    },
  ]

  const faqItems = [
    {
      question: "Is ErgoScript Turing complete?",
      answer:
        "ErgoScript deliberately avoids unbounded loops and dynamic computation. It’s not Turing complete in the usual imperative sense, but it is expressive enough to build complex, composable dApps while keeping validation predictable and safe.",
    },
    {
      question: "How is ErgoScript different from Solidity?",
      answer:
        "Solidity runs imperative code that mutates global contract state in an Account model. ErgoScript validates local box spends in the eUTXO model. There is no global mutable state, no re-entrancy, and validation cost is known and checkable off-chain.",
    },
    {
      question: "Do Ergo smart contracts have state?",
      answer:
        "There is no single global contract state. Instead, “state” lives in boxes and their registers. Updating state means spending an old box and creating a new one with updated data and preserved logic.",
    },
    {
      question: "Do I need to know Scala to write ErgoScript?",
      answer:
        "ErgoScript is inspired by Scala, but you don’t need to be a Scala expert. The syntax is relatively compact and most dApps can be built by learning the ErgoScript primitives and eUTXO patterns.",
    },
    {
      question: "Where does off-chain logic live?",
      answer:
        "More logic lives off-chain compared to Solidity. Off-chain code (wallets, backends, libraries) assembles transactions and box flows, while on-chain ErgoScript focuses on validation rules only. This keeps the chain lean but requires good box-flow design.",
    },
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "What Is ErgoScript?", href: "#what-is-ergoscript" },
    { label: "How ErgoScript Works", href: "#how-ergoscript-works" },
    { label: "Registers & Context", href: "#registers-and-context" },
    { label: "Simple ErgoScript Examples", href: "#examples" },
    { label: "Why ErgoScript Is Different", href: "#why-different" },
    { label: "Sigma Protocols & Privacy", href: "#sigma-protocols" },
    { label: "Real dApps Built With ErgoScript", href: "#real-dapps" },
    { label: "Limitations & Best Practices", href: "#limitations" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "Frequently Asked Questions", href: "#faq" },
  ]

  return (
    <BackgroundWrapper>
      {/* Sticky TOC for wide screens */}
      <StickyTOC items={articleContents} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              {
                name: "ErgoScript in 30 Minutes: Practical Intro to Ergo’s Smart Contract Language",
                href: "/blog/ergoscript-introduction",
              },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              ErgoScript in 30 Minutes: A Practical Introduction to Ergo’s Smart Contract Language
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              ErgoScript is the Ergo blockchain's functional smart contract language, purpose-built for the
              <Link href="/technology/eutxo-model" className="text-orange-400 hover:underline"> eUTXO model</Link>. In this guide, you'll learn how ErgoScript works, see practical ErgoScript examples,
              and understand what makes Ergo smart contracts secure, stateless, and predictable.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="ErgoScript in 30 Minutes: A Practical Introduction to Ergo's Smart Contract Language"
                url="https://www.ergoblockchain.org/blog/ergoscript-introduction"
                utm="?utm_source=share_hero"
              />
            </div>
          </motion.header>

          {/* TL;DR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">TL;DR</h2>
            <div className="grid gap-3">
              {tldrItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <Card className="bg-black border border-white/10 rounded-xl">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contents - Hidden on 2xl where sticky TOC shows */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12 2xl:hidden"
          >
            <Card className="bg-black/80 border border-orange-500/20 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-400" />
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

          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            {/* Introduction */}
            <section
              id="introduction"
              className="bg-black border border-white/20 rounded-3xl p-8 mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Introduction</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                ErgoScript is Ergo’s dedicated smart contract language, based on Scala and designed from the
                ground up for the Ergo blockchain. While EVM platforms primarily use Solidity, ErgoScript
                reflects the unique properties of the eUTXO model and focuses on secure, functional smart
                contracts.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Instead of mutating global account balances, ErgoScript enforces conditions for spending
                UTXOs – unspent transaction outputs, or “boxes” of coins. The result is a predictable,
                auditable, and strongly constrained environment for Ergo smart contracts and dApps.
              </p>

              <p className="text-gray-300 leading-relaxed">
                In this 30-minute introduction you'll learn what ErgoScript is, how it works with the eUTXO
                model, see simple ErgoScript examples, and understand where it differs from Solidity, Bitcoin
                Script, and Cardano's Plutus.
              </p>
            </section>

            {/* ErgoScript Infographic */}
            <section className="mb-12">
              <ExpandableInfographic
                src="/og/infographics/ergoscript-introduction.png"
                alt="ErgoScript Explained: The Language of Secure Smart Contracts on Ergo"
              />
            </section>

            {/* What Is ErgoScript */}
            <section id="what-is-ergoscript" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">What Is ErgoScript?</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  As the Ergo scripting language, ErgoScript takes a different approach compared to most
                  mainstream smart contract platforms. Instead of orchestrating long-lived contracts with
                  internal state, ErgoScript defines rules for spending individual boxes in the eUTXO model.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  ErgoScript is <span className="font-semibold">functional</span>, not imperative. Imperative
                  languages like Solidity, Python, or JavaScript tell the computer what to do, step by step,
                  updating variables and global state along the way. A Solidity contract can say, “Subtract 10
                  from this token balance,” changing an account balance in place.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Functional languages evaluate expressions and produce True/False results instead of mutating
                  state. ErgoScript scripts don’t “run”; they validate. A simple condition might be “Check
                  whether the amount being spent is less than 10.” The script just describes rules and lets the
                  system decide whether a spend is allowed.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  That means ErgoScript does not directly modify on-chain state. It simply answers:{" "}
                  <span className="italic">
                    “Is this UTXO (box) allowed to be spent under these rules, in this context?”
                  </span>
                </p>

                <p className="text-gray-300 leading-relaxed">
                  There are no loops, no global memory, and no mutable variables. When a user tries to spend a
                  box, the attached ErgoScript is evaluated. If the expression returns True, the spend is
                  valid; if not, the transaction is rejected.
                </p>

                {/* Lockbox metaphor */}
                <div className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-orange-400 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Visualising ErgoScript: A Lockbox With Rules
                      </h3>
                      <p className="text-gray-300 text-sm mb-2">
                        Imagine a physical lockbox full of coins. On the outside of the box you write the
                        rules:
                      </p>
                      <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
                        <li>Only Alice can open this box.</li>
                        <li>The box can only be opened after 31 December 2025.</li>
                        <li>Only 100 ERG can be removed per day.</li>
                      </ul>
                      <p className="text-gray-300 text-sm mt-2">
                        ErgoScript is the language you use to encode these rules on-chain. Anyone can see and
                        verify them before interacting with the box.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  This box-centric, rule-driven design increases predictability for Ergo smart contracts,
                  shrinks the possible attack surface, and simplifies security audits.
                </p>
              </div>
            </section>

            {/* How ErgoScript Works */}
            <section id="how-ergoscript-works" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">How ErgoScript Works</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  ErgoScript validates attempts to spend specific boxes. It doesn’t execute arbitrary
                  instructions; it just checks whether a box may be spent in the context of a proposed
                  transaction.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Every transaction on the Ergo blockchain includes:
                </p>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-1">
                  <li>
                    <span className="font-semibold">Inputs:</span> existing UTXOs (boxes) to be spent
                  </li>
                  <li>
                    <span className="font-semibold">Outputs:</span> new UTXOs that will be created
                  </li>
                  <li>
                    <span className="font-semibold">Context:</span> environment data such as block height,
                    transaction metadata, referenced data inputs, and more
                  </li>
                </ul>

                <p className="text-gray-300 leading-relaxed">
                  When a transaction tries to spend a given box, the attached ErgoScript sees the box, the
                  full transaction, and relevant context. If the conditions evaluate to True, the transaction
                  is valid and can be included in a block.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This model is stateless and deterministic. Anyone can run the script locally against a
                  candidate transaction and know exactly what the result will be before broadcasting. Even fee
                  cost is predictable, since execution paths are well-bounded and there are no hidden loops.
                </p>
              </div>
            </section>

            {/* Registers & Context */}
            <section id="registers-and-context" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Registers & Context</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Each UTXO on the Ergo blockchain can hold up to 10 registers – tiny slots for data that make
                  the eUTXO model far more expressive than Bitcoin’s simple UTXOs.
                </p>

                <ul className="text-gray-300 leading-relaxed list-disc pl-6 space-y-1">
                  <li>
                    <span className="font-semibold">R0, R1, R2:</span> reserved for protocol use.
                  </li>
                  <li>
                    <span className="font-semibold">R3–R9:</span> available for arbitrary data such as oracle
                    values, ZK proofs, previous state references, timelocks, or spending policy flags.
                  </li>
                </ul>

                <p className="text-gray-300 leading-relaxed">
                  Because boxes are immutable, “updating state” simply means spending an old box and creating
                  a new one with updated register
                </p>
              </div>
            </section>

            {/* ... Remaining sections omitted for brevity (examples, differences, Sigma protocols, dApps, limitations, conclusion) ... */}
          </motion.article>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
            id="faq"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-black border border-white/10 rounded-2xl">
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text.white pr-4">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </CardContent>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA
            title="ErgoScript in 30 Minutes: A Practical Introduction to Ergo’s Smart Contract Language"
            url="https://www.ergoblockchain.org/blog/ergoscript-introduction"
            description="Learn how ErgoScript, the Ergo blockchain’s functional smart contract language, powers secure, stateless dApps in the eUTXO model."
            subtitle="If this helped, share it with other devs exploring Ergo smart contracts and functional validation logic."
          />

          {/* Continue learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Continue Learning
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/eutxo-vs-accounts" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex.items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Layers className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          eUTXO vs Account-Based Models
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          Understand why Ergo chose the eUTXO model and how it shapes secure smart contract
                          design.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs"
                        >
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/babel-fees" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all.duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Babel Fees: Pay Fees in Any Token
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          See how ErgoScript and eUTXO enable gas abstraction and flexible fee payment on Ergo.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs"
                        >
                          UX & DeFi
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Email capture */}
          <FinalCTASimple
            title="Join the resistance"
            description="Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
          />
        </div>
      </div>
    </BackgroundWrapper>
  )
}


