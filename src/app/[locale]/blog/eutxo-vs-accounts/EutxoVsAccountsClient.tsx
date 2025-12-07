"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { ExpandableInfographic } from "@/components/blog/expandable-infographic"
import { StickyTOC } from "@/components/blog/sticky-toc"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ResponsiveTable } from "@/components/ui/responsive-table"

import {
  ChevronDown,
  Code,
  Eye,
  Zap,
  Coins,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export function EutxoVsAccountsClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // TL;DR cards based on article content
  const tldrItems = [
    {
      icon: CheckCircle,
      title: "Transaction Models Matter",
      description:
        "How blockchains track ownership affects reliability, security, and risk factors. Two paradigms: eUTXO vs Account.",
    },
    {
      icon: Code,
      title: "eUTXO: Specific Outputs",
      description:
        "Like cash payments - transactions move specific 'boxes' with attached logic. Deterministic and predictable execution.",
      glossaryTerm: "eutxo",
    },
    {
      icon: Coins,
      title: "Account: Global State",
      description:
        "Like bank accounts - simple balance updates on shared ledger. Powerful composability but shared risks.",
    },
    {
      icon: Eye,
      title: "Security Trade-offs",
      description:
        "eUTXO reduces cross-contract interference and re-entrancy risks. Account model increases attack surface.",
    },
    {
      icon: Zap,
      title: "Philosophy: Safety First",
      description:
        "Ergo chose predictability over flexibility. 'Don't trust, verify' - eliminate vulnerability classes at platform level.",
    },
  ]


  const faqItems = [
    {
      question: "What is the core difference between eUTXO and accounts?",
      answer:
        "eUTXO targets specific boxes with immutable code per box and explicit state transitions; accounts update a global mutable state. eUTXO reduces cross‑contract interference and enables safe parallelism on disjoint boxes.",
    },
    {
      question: "Is eUTXO private by default?",
      answer:
        "No. Privacy is optional but powerful: Sigma protocols enable confidential yet auditable flows (mixing, ring/threshold proofs, selective disclosure).",
    },
    {
      question: "How does composability work without global state?",
      answer:
        "Through explicit patterns (singleton/state boxes), off‑chain transaction builders, and well‑defined invariants. Composition is more explicit, outcomes more predictable.",
    },
    {
      question: "Why does parallelism improve on eUTXO?",
      answer:
        "Independent transactions that spend different boxes do not contend on a shared ledger cell; conflicts localize to specific boxes instead of rippling across a global state.",
    },
    {
      question: "Where should developers start?",
      answer:
        "Begin with the eUTXO intro, ErgoScript examples, and try the eUTXO visualizer to understand explicit state transitions.",
    },
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
              { name: "Two Blockchain Models: Why Ergo Chose Differently", href: "/blog/eutxo-vs-accounts" }
            ]}
            className="mb-8"
          />
          
          {/* Hero Section - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Two Blockchain Models: Why Ergo Chose Differently
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-6">
              Ergo's transaction model is designed for more predictable, lower-risk, and more privacy-friendly (when used with appropriate patterns) blockchain operations than EVM platforms.
            </p>

            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                8 min read
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Technology
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Intermediate
              </span>
            </div>

            {/* Inline Share & Views */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline 
                title="Two Blockchain Models: Why Ergo Chose Differently" 
                url="https://ergoblockchain.org/blog/eutxo-vs-accounts" 
                utm="?utm_source=share_hero"
              />
            </div>
          </motion.div>

          {/* TL;DR Section - Compact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">TL;DR</h2>
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
                          <h3 className="text-base font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Table of Contents - Hidden on 2xl where sticky TOC shows */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
                  <a href="#transaction-models" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → What Is A Transaction Model?
                  </a>
                  <a href="#ethereum-model" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → Ethereum's Account Model
                  </a>
                  <a href="#ergo-model" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → Ergo's eUTXO Model
                  </a>
                  <a href="#comparison" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → Key Differences Comparison
                  </a>
                  <a href="#why-ergo-chose" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → Why Ergo Chose eUTXO
                  </a>
                  <a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors py-1">
                    → FAQ & Resources
                  </a>
                </nav>
              </CardContent>
            </Card>
          </motion.section>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14"
            id="transaction-models"
          >
            <div className="space-y-8">
              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Blockchains come in all different forms, and use different approaches to record transactions and update state trustlessly. The specific transaction model can have far-reaching implications for the way the blockchain operates, its reliability, and risk factors.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Two of the most influential blockchain architectures are Ergo's <Link href="/technology/eutxo-model" className="text-orange-400 hover:underline font-bold">eUTXO model</Link> and Ethereum's <strong className="text-white">account model</strong>. These represent fundamentally different ways of managing transactions and smart contracts. Understanding their differences helps explain why and how Ergo takes a distinctive approach to scalability, security, and decentralized finance.
                </p>
                <div className="bg-black border border-orange-500/30 rounded-2xl p-6">
                  <p className="text-orange-100 leading-relaxed">
                    <strong className="text-orange-400">At present, the largest other eUTXO-based blockchain besides Ergo is Cardano.</strong>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  📊 What Is A Transaction Model In Blockchain?
                </h2>
                <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    A blockchain's transaction model keeps track of who owns what. It's the way that the blockchain does its accounting, recording user balances and transfers.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Bitcoin, the first blockchain platform, used the UTXO or "Unspent Transaction Output" model. In this approach, users transact by moving specific "outputs", or bundles of coins. A bundle belongs to one user, and the transaction "consumes" it by cryptographically registering it to the recipient. Where necessary, the bundle is split into two, and the change is registered back to the sender.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You can think of it a bit like paying in cash. When you pay $11.43, you can do so in different ways, but it involves handing over specific coins and notes. For example, you might pay with a ten-dollar bill, a one dollar coin, four dimes, and three pennies. There are many other ways to make up the amount; you could even pay with 1,143 pennies. Often, you won't have the right change, so you might pay with a $10 and $5 bill, and receive $3.57 in coins back.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    On the Bitcoin blockchain, of course, you're moving chunks of Satoshis, but the principle is the same. You're spending bundles of coins that have been registered to your address in previous transactions.
                  </p>
                  <div className="bg-black border border-blue-500/30 rounded-2xl p-6">
                    <p className="text-blue-100 leading-relaxed">
                      <strong className="text-blue-400">Cash vs Card analogy:</strong> UTXO is like paying with specific bills and coins (moving exact outputs), while Account model is like a digital card payment (simple balance deduction).
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This is very different from the Account model, used by most other blockchains. In this case, it's more like a bank account or a tab in a digital ledger. Let's say you pay by card instead of cash. Your account starts with $154 in it, and the transaction simply deducts $11.43, leaving $142.57.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    These two different transaction models have big implications for blockchain state and security.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* eUTXO vs Accounts Infographic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
          >
            <ExpandableInfographic
              src="/og/infographics/eutxo-vs-accounts.png"
              alt="eUTXO vs Accounts: Two Blockchain Transaction Models Compared"
            />
          </motion.section>

          {/* Ethereum's Account Model */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-14"
            id="ethereum-model"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              🏦 Ethereum's Account Model Explained
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ethereum is the best-known example of the Account-based model described above. It records account balances and contract states like a bank account.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ethereum has two types of accounts: Externally-Owned Accounts (EOAs), and smart contract accounts. EOAs are regular user accounts controlled by a private key, while smart contracts are controlled by code. Account balance and state are simply updated as required when transactions are made. It's a very straightforward and intuitive approach, and allows Ethereum to support complex logic and decentralized applications of all kinds, on-chain.
              </p>
              <p className="text-gray-300 leading-relaxed">
                All of this makes Ethereum very powerful and composable. Smart contracts can easily interact with one another, so developers can plug their code into existing dApps and build on the existing ecosystem easily.
              </p>
              <div className="bg-black border border-red-500/30 rounded-2xl p-6">
                <p className="text-red-100 leading-relaxed">
                  <strong className="text-red-400">The catch:</strong> All accounts share a global, mutable state. The blockchain is a bit like a single, shared spreadsheet, where every cell represents a different account. It's simple to edit and link to other cells, but it becomes harder to manage when hundreds or thousands of people are trying to change it at the same time.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transactions can interfere with one another, and parallel execution can introduce serious problems. For example, a re-entrancy attack is a type of exploit where a malicious smart contract repeatedly calls a function in a vulnerable contract before the initial function call is finished and the contract's state is updated. This allows the attacker to drain the vulnerable contract of its funds, or manipulate its state in other unintended ways.
              </p>
              <p className="text-gray-300 leading-relaxed">
                (To its credit, the Ethereum ecosystem uses patterns and tools like checks-effects-interactions, reentrancy guards, and formal verification to mitigate such classes of bugs.) The global shared state can also increase computational costs, limiting scalability and increasing gas costs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In short, <strong className="text-white">Ethereum's Account model is powerful, but its flexibility also introduces vulnerabilities.</strong>
              </p>
            </div>
          </motion.section>

          {/* Ergo's eUTXO Model */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-14"
            id="ergo-model"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              📦 Ergo's eUTXO Model Explained
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ergo takes a completely different approach. Its <strong className="text-white">eUTXO (extended UTXO)</strong> transaction model is derived from Bitcoin's approach.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Bitcoin simply registers UTXOs to different users, updating the ledger to reflect changes to ownership when a transaction is made. While this may seem complicated, it's actually a very clean approach that allows for no ambiguity: each UTXO has precisely one owner at any given time. Ownership of UTXOs can be traced right back through the entire history of the blockchain to the point where they were mined into existence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Ergo's eUTXO model extends Bitcoin's UTXOs with additional functionality.</strong> UTXOs can have data and programming logic attached to them.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Instead of updating global state, as with Ethereum and other Account-based platforms, Ergo smart contracts instead reference specific outputs. This means execution is deterministic, clean, and predictable. Parallelism is safe when transactions spend disjoint boxes; if two transactions try to spend the same box, that specific conflict is serialized/invalidated without impacting unrelated activity.
              </p>
              <div className="bg-black border border-green-500/30 rounded-2xl p-6">
                <p className="text-green-100 leading-relaxed">
                  <strong className="text-green-400">Analogy:</strong> Imagine that you have laid out a hundred $100 bills on a table, and told 100 people they can each take one. You can either tell everyone they can take any $100 bill (though just one), or tell each person they can take a specific, numbered $100 bill. The second option is a little more complicated to organize, but results in a much more orderly and predictable set of transfers!
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                That's why Ergo's eUTXO model has such significant benefits for security, scalability, and auditability. It also works seamlessly with Ergo's <Link href="/technology/privacy-features" className="text-orange-400 hover:underline">Sigma protocols and privacy features</Link>.
              </p>
            </div>
          </motion.section>

          {/* eUTXO vs Account Model Comparison Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
            id="comparison"
          >
            <ResponsiveTable
              title="eUTXO Vs Account Model – Key Differences"
              headers={["Feature", "eUTXO (Ergo)", "Account (Ethereum)"]}
              data={[
                { Feature: "Structure", "eUTXO (Ergo)": "Based on individual outputs", "Account (Ethereum)": "Single, global account state" },
                { Feature: "Contract execution", "eUTXO (Ergo)": "Deterministic; parallel when boxes are disjoint", "Account (Ethereum)": "\"Stateful\", generally sequential on shared state" },
                { Feature: "Security", "eUTXO (Ergo)": "Isolated spends reduce cross-contract interference", "Account (Ethereum)": "Shared state increases risk surface" },
                { Feature: "Scalability", "eUTXO (Ergo)": "Easier horizontal scaling via locality of state", "Account (Ethereum)": "Limited by shared global state contention" },
                { Feature: "Privacy", "eUTXO (Ergo)": "More granular control; patterns with Σ-protocols", "Account (Ethereum)": "Transparent by default" },
                { Feature: "Composability", "eUTXO (Ergo)": "Modular and predictable (explicit wiring via boxes and off-chain builders)", "Account (Ethereum)": "Highly composable, but riskier due to tight coupling" }
              ]}
              highlightColumn="eUTXO (Ergo)"
            />

            <div className="mt-6 bg-black border border-white/10 rounded-2xl p-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Key takeaway:</strong> It's important to recognize that both the eUTXO and the Account model have strengths and weaknesses. Broadly speaking, Ethereum offers greater flexibility, while Ergo emphasizes predictability and security.
              </p>
            </div>
          </motion.section>

          {/* Why Ergo Chose eUTXO */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
            id="why-ergo-chose"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              🎯 Why Ergo Chose The eUTXO Model
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Blockchain developers face a tension between launching new features to compete with other platforms, on the one hand, and safeguarding users' funds, on the other. Countless blockchain networks and dApps have discovered the risks of "moving fast and breaking things" (Facebook's one-time motto).
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Ergo's design philosophy has always been to take the long-term view.</strong> Every decision and update made to the Ergo blockchain is based on academic research, ensuring the best possible foundations for a secure and sustainable ecosystem.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ergo takes Bitcoin's beaten-in security model and extends that approach to offer Ethereum-like functionality, without introducing the same degree of shared-state drawbacks and vulnerabilities of the Account-based system. Ergo's developers have prioritized predictable execution for dApps, even if that means taking slightly longer to bring updates to market.
              </p>
              <div className="bg-black border border-orange-500/30 rounded-2xl p-6">
                <p className="text-orange-100 leading-relaxed">
                  <strong className="text-orange-400">"Don't trust, verify":</strong> This decision is part of the core ethos of Ergo, and is simply an extension of the crypto principle "Don't trust, verify". It is best that dApps should run safely and securely because the underlying platform minimizes or eliminates entire classes of vulnerabilities, rather than seeking to mitigate each possible exploit for every dApp.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              ✨ Conclusion
            </h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ergo's eUTXO vs Ethereum's Account model gets to the heart of why Ergo is different to other blockchain platforms. It's not just a technical difference, but a philosophical one. <strong className="text-white">The trade-off is flexibility vs determinism.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ethereum may offer simpler dApp design and powerful composability through its shared global state, but that easy versatility can come with additional risk.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By extending Bitcoin's UTXO model to support advanced smart contracts, <strong className="text-white">Ergo offers a pathway towards scalable, secure, and privacy-preserving decentralized applications built on solid cryptographic foundations.</strong>
              </p>
            </div>
          </motion.section>


          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-16"
            id="faq"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index} className="bg-black border border-white/10 rounded-2xl">
                  <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                          <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
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


          {/* Share this post */}
          <ShareCTA
            title="Two Blockchain Models: Why Ergo Chose Differently"
            url="https://ergoblockchain.org/blog/eutxo-vs-accounts"
            description="Deterministic execution, explicit state transitions, and privacy patterns versus global account state."
            subtitle="Help spread the word about Ergo's eUTXO model"
          />

          {/* 2. Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/ergo-in-5-minutes" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Ergo in 5 Minutes</h3>
                        <p className="text-gray-400 text-sm mb-2">Quick introduction to Ergo's key features and ecosystem</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/ergo-manifesto" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Eye className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">The Ergo Manifesto</h3>
                        <p className="text-gray-400 text-sm mb-2">Foundational vision for ergonomic money and decentralized finance</p>
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs">
                          Vision
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

        </div>
      </div>
      
      {/* 3. Subscribe */}
      <FinalCTASimple 
        title="Join the resistance"
        description="Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
      />
    </BackgroundWrapper>
  )
}
