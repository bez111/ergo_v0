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
  Cpu,
  Zap,
  Leaf,
  Shield,
  ChevronDown,
  Database,
  Network,
  Activity,
} from "lucide-react"
import { Link } from "@/i18n/navigation"

export default function AutolykosArticleClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: Cpu,
      title: "Memory-Hard Proof-of-Work",
      description:
        "Autolykos is a memory-hard proof-of-work algorithm for the Ergo blockchain, designed so that memory bandwidth, not raw hash rate, is the main bottleneck.",
    },
    {
      icon: Activity,
      title: "ASIC-Resistant Mining",
      description:
        "By making fast, random memory lookups essential, Autolykos makes ASICs expensive and inefficient, keeping Ergo mining accessible on consumer GPUs.",
    },
    {
      icon: Network,
      title: "Decentralised Hashrate",
      description:
        "GPU mining Ergo is the norm, enabling hobbyists, gamers, and developers to participate, rather than concentrating hashrate in a few industrial ASIC farms.",
    },
    {
      icon: Leaf,
      title: "Sustainable PoW Design",
      description:
        "No waves of obsolete ASICs, predictable resource usage, and efficient GPU utilisation help Autolykos support a more eco-friendly blockchain over time.",
    },
    {
      icon: Shield,
      title: "Robust Chain Security",
      description:
        "Memory-hard constraints raise the cost of 51% and reorg attacks, aligning with Ergo's eUTXO sustainability goals and stateless, lightweight verification.",
    },
  ]

  const faqItems = [
    {
      question: "Is Autolykos completely ASIC-proof?",
      answer:
        "No PoW algorithm can guarantee that ASICs will never appear, but Autolykos is designed so that any ASIC would need large, expensive memory. This destroys the massive efficiency advantage typical SHA-256 ASICs have over GPUs, keeping mining competitive for off-the-shelf hardware.",
    },
    {
      question: "What hardware is best for mining Ergo?",
      answer:
        "Consumer GPUs are the primary choice for GPU mining Ergo. Modern gaming or workstation GPUs can participate effectively, while CPUs are technically possible but inefficient due to the algorithm’s memory and bandwidth requirements.",
    },
    {
      question: "Is Autolykos more energy efficient than Bitcoin’s SHA-256?",
      answer:
        "Autolykos aims for sustainable PoW by favouring widely-available GPUs and avoiding constant ASIC arms races and hardware turnover. While absolute energy usage depends on hashrate and miner behaviour, the design avoids rapid, wasteful obsolescence of specialised hardware.",
    },
    {
      question: "Why not just switch to Proof-of-Stake instead of memory-hard PoW?",
      answer:
        "Ergo intentionally uses PoW for its simplicity, battle-tested security assumptions, and open participation model. Autolykos adapts PoW for the eUTXO era, focusing on ASIC-resistant mining, decentralisation, and long-term sustainability rather than migrating to PoS.",
    },
    {
      question: "Does Autolykos change how nodes verify blocks?",
      answer:
        "No. Verifying a block is still far cheaper than mining it. Nodes only need to check the Autolykos proof using the block header, nonce, and difficulty, which fits naturally with Ergo’s eUTXO model and lightweight, stateless verification.",
    },
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "What Is Autolykos?", href: "#what-is-autolykos" },
    { label: "How Autolykos Works", href: "#how-autolykos-works" },
    { label: "ASIC Resistance & GPU Mining", href: "#asic-gpu-mining" },
    { label: "Sustainability Advantages", href: "#sustainability" },
    { label: "Autolykos & Security", href: "#security" },
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
                name: "Autolykos Proof-of-Work: Why Ergo’s Mining Algorithm Is Sustainable",
                href: "/blog/autolykos-proof-of-work",
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
              Autolykos Proof-of-Work: Why Ergo’s Mining Algorithm Is Sustainable
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              Autolykos is the Ergo mining algorithm: a memory-hard proof-of-work designed for ASIC-resistant
              mining, sustainable PoW, and a more decentralised, GPU-friendly Ergo blockchain.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Autolykos Proof-of-Work: Why Ergo's Mining Algorithm Is Sustainable"
                url="https://ergoblockchain.org/blog/autolykos-proof-of-work"
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
                <Cpu className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Introduction</h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                <Link href="/technology/secure-pow" className="text-orange-400 hover:underline">Proof-of-work (PoW)</Link> cryptocurrencies rely on miners, who carry out large numbers of
                computationally-intensive calculations to secure the network and maintain the integrity of
                the decentralized ledger.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                With Bitcoin, these calculations are based on SHA256. By contrast, Ergo uses Autolykos as
                its PoW algorithm.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Autolykos is a "memory hard" algorithm, which makes Ergo more ASIC-resistant than Bitcoin.
                Instead of being dependent on a network of specialized computers, which use large amounts of
                electricity and periodically need to be upgraded to remain competitive, Ergo can still be
                mined with regular GPUs.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Ergo's mining algorithm has the effect of making the network more sustainable, and more
                decentralized. A broader range of users can participate in securing the network, rather than
                centralizing mining in the hands of those who are best-resourced.
              </p>
            </section>

            {/* Autolykos Infographic */}
            <section className="mb-12">
              <ExpandableInfographic
                src="/og/infographics/autolykos-proof-of-work.png"
                alt="Autolykos: Ergo's Memory-Hard Proof-of-Work Algorithm"
              />
            </section>

            {/* What Is Autolykos */}
            <section id="what-is-autolykos" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">What Is Autolykos?</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Autolykos is a proof-of-work algorithm designed for the Ergo platform. It is based on a
                  combination of hash functions and graph-based memory access, resulting in a form of
                  memory-hard PoW.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Bitcoin's SHA256-based PoW is ideally suited to ASICs, because the hash function is tiny
                  and easily fits on a chip, inputs are small, and memory requirements are low. Raw compute
                  power is the only resource that is really needed. ASIC designers can build thousands of
                  SHA-256 cores on a single chip and run them extremely fast, at very low power.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Autolykos intentionally breaks most of the factors that make SHA256 so ASIC-friendly. The
                  block header, miner's nonce, and referenced UTXO set (Ergo requires miners to prove they
                  own some coins) are hashed together, with each step depending on a previous,
                  pseudo-randomly selected position in memory. The next memory address is only known after
                  the current step has been completed.
                </p>

                <div className="bg-black border border-orange-500/30 rounded-2xl p-6">
                  <p className="text-orange-100 leading-relaxed">
                    <strong className="text-orange-400">Key Insight:</strong> By requiring huge memory
                    bandwidth and random memory lookups, memory itself becomes the bottleneck in the
                    algorithm's progress. Memory is expensive to integrate on an ASIC, and off-chip memory
                    access is slow.
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Consumer GPUs can handle Autolykos's requirements better than a custom ASIC, meaning there
                  is no incentive to develop specialized hardware for Ergo. GPU mining Ergo has become the
                  default way of securing the network.
                </p>
              </div>
            </section>

            {/* How Autolykos Works */}
            <section id="how-autolykos-works" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">How Autolykos Works</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <ol className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">1</span>
                    <span>Miners collect block candidate data: transactions, a Merkle root of those transactions, previous block hash, timestamp, and other header fields.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">2</span>
                    <span>On-chain data including references to UTXOs can be included to increase unpredictability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">3</span>
                    <span>The miner builds a memory table containing values derived from the block header, plus the miner's secret seed/nonce. The table is large, and structured so subsequent steps will read from many different locations in it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">4</span>
                    <span>The miner produces candidate hashes in rounds. They choose or increment a nonce, use the nonce and current intermediate state to compute an index/indices into the memory table, read values from those memory addresses, and combine them with cryptographic hashing into a new intermediate value. Each step's memory addresses are data-dependent, so can't be known until the previous step has been completed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">5</span>
                    <span>This read-mix sequence is repeated many times. Each step relies on a previous read, so the process is sequential and bound by memory bandwidth due to the demands of fetching and mixing unpredictable memory entries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">6</span>
                    <span>After the required number of rounds, the final candidate value is derived from the mixing output and block header. The final hash is compared against the network Difficulty target. If it is below the target, the miner has found a valid block.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">7</span>
                    <span>The miner assembles the block with the necessary proofs, and broadcasts it to the network.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">8</span>
                    <span>Other nodes verify that the block is valid, which is far cheaper than mining it. It is not necessary to reproduce the entire memory-hard process.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 text-sm font-bold shrink-0">9</span>
                    <span>All miners run the same code. Difficulty adjusts over time to keep the average block time stable (in Ergo's case, around two minutes). This preserves predictable resource use over long periods.</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* ASIC Resistance and GPU Mining */}
            <section id="asic-gpu-mining" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">ASIC Resistance and GPU Mining</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ergo is built with the aim of maintaining ASIC-resistant mining: ensuring that no
                  specialized hardware is needed to secure the network, and ASICs do not provide an
                  advantage. This democratizes mining, and means that GPU mining Ergo is the norm. (It is
                  inefficient to mine Ergo with a CPU, though it is still possible.)
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Autolykos is a critical strand of this strategy, due to the large memory bandwidth the
                  algorithm requires. This makes it hard to parallelize cheaply on small chips, so creating
                  ASICs is not economically viable.
                </p>

                <div className="bg-black border border-green-500/30 rounded-2xl p-6">
                  <p className="text-green-100 leading-relaxed">
                    <strong className="text-green-400">GPU Advantage:</strong> GPUs remain an effective way
                    of mining Ergo. This supports a more distributed mining ecosystem, since many users
                    already own GPUs – especially if they are involved in gaming or other graphics-intensive
                    activities. GPUs can be used to mine part-time, when the computer is not otherwise in
                    use.
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Ergo's approach makes mining more accessible to a wider range of users, including those
                  who are not deeply involved in the crypto space. It is ideal for casual and hobbyist
                  miners, and developers who want to experiment with ErgoScript and support the network as
                  they do so.
                </p>
              </div>
            </section>

            {/* Sustainability Advantages */}
            <section id="sustainability" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Sustainability Advantages</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  As well as democratizing the Ergo mining ecosystem, promoting a more decentralized
                  network, Autolykos has sustainability benefits. Energy efficiency is higher, due to the
                  level of GPU-friendly, memory-bound work, and there are no obsolete ASICs that need
                  disposal or recycling. As network adoption scales, security can also scale without a huge
                  spike in energy use and hardware.
                </p>

                <div className="bg-black border border-yellow-500/30 rounded-2xl p-6">
                  <p className="text-yellow-100 leading-relaxed">
                    <strong className="text-yellow-400">Comparison:</strong> This is in contrast to Bitcoin,
                    which has enormous (and growing) energy use – though a significant percentage of this
                    comes from renewable sources.
                  </p>
                </div>
              </div>
            </section>

            {/* Autolykos And Security */}
            <section id="security" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Autolykos And Security</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  From a security perspective, there are advantages to Ergo's use of Autolykos. Like
                  Bitcoin, it is hard to attack the chain without 51% of GPU power.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Memory-hard functions also prevent cheap reorg attacks. Reorg attacks happen when an
                  attacker tries to rewrite recent blocks to double-spend or manipulate transactions. This
                  requires outpacing the honest network to create a longer PoW chain. In Ergo's case, the
                  memory cost of maintaining multiple parallel chains for an attack becomes prohibitively
                  high, increasing the economic cost of rewriting the chain – even if the attacker owns a
                  lot of GPUs.
                </p>

                <div className="bg-black border border-blue-500/30 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-semibold mb-3">Stateless Verification</h3>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Stateless verification also aligns with Ergo's eUTXO model. Nodes can verify blocks
                    without needing the full transaction history – only the headers and relevant
                    boxes/UTXOs.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    Each Autolykos block can be checked independently using the block header, the nonce, and
                    the network Difficulty. The node doesn't have to reproduce the entire memory-hard mining
                    process to know that a block is valid. This fits naturally with Ergo's <Link href="/technology/eutxo-model" className="text-orange-400 hover:underline">eUTXO model</Link>,
                    where each box carries its own state and validation rules. Because boxes are
                    self-contained, verification remains lightweight and deterministic.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Conclusion</h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Autolykos is Ergo's memory-hard PoW algorithm, which is designed to be resistant to ASIC
                  mining.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Autolykos combines hashing with random memory lookups to create a process that is
                  difficult and expensive to put on a dedicated chip, incentivizing mining with regular
                  consumer GPUs over concentrating hashrate in the hands of a relatively small number of
                  miners who can afford specialist hardware.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This has the effect of democratizing access for miners, and ensuring a more decentralized
                  network – increasing security and lowering barriers to participation.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                  <p className="text-orange-100 leading-relaxed font-medium">
                    Autolykos also has lower power requirements than Bitcoin's SHA256 algorithm, and
                    predictable resource use, laying the groundwork for sustainable chain growth over the
                    long term.
                  </p>
                </div>
              </div>
            </section>
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

          {/* Share CTA */}
          <ShareCTA
            title="Autolykos Proof-of-Work: Why Ergo’s Mining Algorithm Is Sustainable"
            url="https://ergoblockchain.org/blog/autolykos-proof-of-work"
            description="Dive into Autolykos, Ergo’s memory-hard PoW algorithm that keeps mining GPU-friendly, ASIC-resistant, and aligned with sustainable decentralisation."
            subtitle="If this was useful, share it with miners, GPU owners, and researchers interested in sustainable PoW design."
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
              <a href="/blog/storage-rent" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Database className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          Storage Rent & State Sustainability
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          How Ergo’s storage rent model keeps blockchain state lean and decentralised for the
                          long term.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs"
                        >
                          Sustainability
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/ergoscript-introduction" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Activity className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">
                          ErgoScript in 30 Minutes
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          A practical introduction to Ergo’s smart contract language and stateless dApp design
                          in the eUTXO model.
                        </p>
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs"
                        >
                          Smart Contracts
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


