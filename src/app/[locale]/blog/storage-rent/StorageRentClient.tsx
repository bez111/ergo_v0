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
import { StorageRentTimeline } from "@/components/diagrams/storage-rent-timeline"
import { 
  Database,
  Coins,
  Trash2,
  Network,
  CheckCircle,
  ChevronDown,
  Code,
  Eye
} from "lucide-react"

export function StorageRentArticleClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  // TL;DR cards based on article content
  const tldrItems = [
    {
      icon: Database,
      title: "State Bloat Problem",
      description:
        "Blockchain state grows faster than nodes can handle, threatening decentralization. Only data centers could run full nodes.",
    },
    {
      icon: Coins,
      title: "Storage Rent Solution",
      description:
        "Small recurring fee (~0.13 ERG every 4 years) on dormant UTXOs. Move coins once per 4 years to avoid fee.",
    },
    {
      icon: Trash2,
      title: "Dust Cleanup",
      description:
        "Automatically removes forgotten coins and spam UTXOs. Bitcoin has 85M+ worthless UTXOs that can never be spent.",
    },
    {
      icon: Network,
      title: "Decentralization First",
      description:
        "Keeps node requirements manageable. Rewards miners for maintaining state, ensuring sustainable network growth.",
    },
    {
      icon: CheckCircle,
      title: "Economic Fairness",
      description:
        "Ties blockchain storage to real costs, like cloud storage. Prevents 'data death' where old data becomes too expensive.",
    },
  ]

  const faqItems = [
    {
      question: "How much does storage rent cost?",
      answer:
        "For a basic UTXO without tokens or complex scripts, storage rent is approximately 0.13 ERG every four years. The fee is calculated per-byte, so larger UTXOs cost more.",
    },
    {
      question: "How do I avoid paying storage rent?",
      answer:
        "Simply move your coins once every four years. Any transaction that spends a UTXO resets the storage rent timer. You can also accept the small fee if you prefer not to touch cold storage.",
    },
    {
      question: "What happens if my UTXO can't pay the storage rent?",
      answer:
        "If a UTXO contains less value than the required storage rent fee, it will be completely consumed and removed from the blockchain state. This helps clean up dust and forgotten coins.",
    },
    {
      question: "Is storage rent a tax or penalty?",
      answer:
        "No, it's not a tax or penalty. Storage rent redistributes coins from inactive accounts back into circulation and rewards miners for maintaining blockchain state. It's similar to how cloud storage services charge for ongoing storage costs.",
    },
    {
      question: "How does storage rent help decentralization?",
      answer:
        "By preventing unlimited state growth, storage rent ensures that regular users can continue running full nodes without needing data center resources. This maintains network decentralization and security.",
    },
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "Ergo's Answer: Storage Rent", href: "#ergo-answer" },
    { label: "How Storage Rent Reduces State Bloat", href: "#reduces-bloat" },
    { label: "Why It Matters For Decentralization", href: "#why-it-matters" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "Frequently Asked Questions", href: "#faq" }
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
              { name: "How Ergo's Storage Rent Solves Blockchain State Bloat", href: "/blog/storage-rent" }
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
              How Ergo's Storage Rent Solves Blockchain State Bloat
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              Ergo's miners can charge small fees on dormant accounts, clearing dust transactions and ensuring
              blockchain state stays manageable.
            </p>

                 <div className="flex items-center justify-between flex-wrap gap-4">
                   <ShareInline
                     title="How Ergo's Storage Rent Solves Blockchain State Bloat"
                     url="https://www.ergoblockchain.org/blog/storage-rent"
                     utm="?utm_source=share_hero"
                   />
                 </div>
               </motion.header>

               {/* TL;DR Section - Compact */}
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

               {/* Article Contents - Hidden on 2xl where sticky TOC shows */}
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

          {/* Article Body */}
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
                <Database className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Introduction
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Scalability is a term that is often discussed in blockchain circles. It's typically used to
                describe the transaction throughput a network can support. However, there's much more to
                blockchain scalability than just speed. State is also an important factor for ensuring
                long-term, sustainable scalability.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                A blockchain's "state" means all of the data that nodes must maintain access to. For Bitcoin,
                it's the UTXO set (the full set of unspent transaction outputs), or for the Ergo blockchain,
                the eUTXO set. For Ethereum, it includes account and smart contract data.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                State is different from the full historical record, which is stored on the blockchain, and
                includes every transaction ever made. The state is "active" data in working memory, ready for
                access at any time. It's a little like the difference between a library's full catalog in
                long-term storage, and the number of books currently out on the shelves or on loan.
              </p>

              <p className="text-gray-300 leading-relaxed">
                State bloat occurs when this eUTXO set (or expanding global state, in Ethereum's case) grows
                faster than network nodes can keep up. Without pruning or other incentives to reduce state
                bloat, blockchains face a future where only large data centers can run full nodes, leading to
                centralization risk.
              </p>
            </section>

            {/* Storage Rent Infographic */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <ExpandableInfographic
                src="/og/infographics/storage-rent.png"
                alt="Ergo Storage Rent: Solving Blockchain State Bloat"
              />
            </motion.section>

            {/* Ergo's Answer */}
            <section
              id="ergo-answer"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Coins className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ergo's Answer: The Concept Of Storage Rent
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ergo's storage rent feature (also known as demurrage) is designed to help keep node storage
                  requirements manageable, allowing more users to run a node and ensuring a more sustainable,
                  decentralized network.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  It achieves this by introducing a small, recurring fee. This fee can be charged on every
                  UTXO that has remained unchanged on the blockchain for an extended period of time – roughly
                  four years.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  The fees are determined on a per-byte basis. For a UTXO without any tokens or complex
                  scripts, the demurrage fee amounts to around 0.13 ERG every four years. In the event that
                  the UTXO is below the required fee, it will be completely consumed and will no longer exist.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  There are a few reasons that storage rent exists. Firstly, it ensures that forgotten coins
                  and data outputs are not left indefinitely, and are eventually refreshed or recycled back
                  into circulation. Bitcoin has an estimated 4 million coins that have been permanently lost
                  through the users' death or destroyed keys. The only way these bitcoins can ever come back
                  into circulation is if they are recovered by a quantum computer in the future.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Secondly, slowly recycling coins gives miners another revenue stream, helping to keep the
                  network secure in the process by incentivizing higher hashrate.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Thirdly, Ergo's storage rent mechanism also plays an important role in preventing the state
                  from growing uncontrollably. With Bitcoin, there is no mechanism for controlling the size of
                  the UTXO set, except for users intentionally consolidating coins. "Spam attacks", a kind of
                  denial-of-service attack where an attacker floods the network with a large number of very
                  small transactions, have a permanent impact on blockchain state. Ergo's model addresses
                  historical spam, and encourages users to manage their UTXOs effectively, helping the ledger
                  remain lean. To avoid paying storage rent, all users have to do is move their coins once
                  every four years.
                </p>
              </div>

              {/* Timeline visualisation */}
              <div className="my-12">
                <StorageRentTimeline />
              </div>
            </section>

            {/* How Storage Rent Reduces State Bloat */}
            <section
              id="reduces-bloat"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  How Storage Rent Reduces State Bloat
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Demurrage is not a tax or penalty, but simply redistributes coins from inactive accounts. It
                  can easily be avoided through UTXO management. Alternatively, users may decide to accept the
                  small fee once every four years, if they have coins in cold storage they do not want to
                  access.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Where storage rent really shines is in cleaning up the blockchain of dust and tiny UTXOs
                  that would never be spent anyway, either because they have been forgotten, because they were
                  never meant to be moved (spam attack), or because it is not worth the transaction fee to
                  move them. The Bitcoin blockchain stores a huge number of low-value UTXOs. In fact, almost
                  50% of all UTXOs (over 85 million UTXOs at the time of analysis) fall in the 1-1,000 Satoshi
                  range. While Bitcoin Inscriptions (NFT-like items) account for 30% of these, there are still
                  tens of millions of essentially worthless UTXOs that can never be spent. 1,000 Satoshis is
                  worth roughly a tenth of a cent; even in the event of bitcoin hitting $1 million, it would
                  still be worth only a penny – and many are far smaller.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Storage rent contributes to a more slimline, sustainable, resource-light, and therefore
                  decentralized and secure blockchain. It prevents indefinite data accumulation, and
                  effectively ties blockchain storage to a real economic cost. This is similar to conventional
                  models of cloud storage and other real-world businesses, where a small fee is periodically
                  levied to reflect ongoing costs to providers.
                </p>
              </div>
            </section>

            {/* Why it matters */}
            <section
              id="why-it-matters"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Why It Matters For The Future Of Decentralization
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Like every other feature implemented on Ergo, storage rent has been carefully designed to
                  ensure the long-term blockchain sustainability and decentralization of the network.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Demurrage helps blockchain state to stay manageable. It is one of several mechanisms that
                  ensure that smaller, lightweight nodes can always run (others being the memory-hard
                  Autolykos consensus algorithm, which reduces the trend towards ASIC mining, and NiPoPoWs –
                  topics that will be explored in subsequent blogs).
                </p>

                <p className="text-gray-300 leading-relaxed">
                  It also marks a different approach to delivering blockchain services than those seen in
                  other networks. Running a mining or validating node on most networks entails significant
                  costs, regardless of profitability. Nodes need to store the whole blockchain, which can run
                  to many gigabytes (at the time of writing, Bitcoin's blockchain is around 700 GB, while
                  Ergo's is 75 GB), and meet certain other hardware requirements. These costs are generally
                  paid for on a monthly basis.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Ergo's model is fairer economically, since it rewards miners for maintaining active state,
                  as well as for storing the blockchain. This looks to the future of the network, when the
                  blockchain and storage requirements will be larger still. At some point in the future, with
                  greater adoption, the number of network transactions (and therefore income) will stabilize,
                  but the blockchain will always grow in size, since new transactions will always be added to
                  it. Ergo's demurrage seeks to prevent the "data death" scenario where maintaining old data
                  becomes more and more expensive as a percentage of overall income from mining.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  As more data-intensive dApps emerge, Ergo's proactive approach helps to ensure scalability,
                  without compromising on decentralisation – something few blockchains can claim.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section
              id="conclusion"
              className="mb-16 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Conclusion
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8">
                <p className="text-gray-300 leading-relaxed">
                  Storage rent is just one of the features that demonstrate how Ergo's design philosophy
                  prioritizes sustainability over short-term convenience. The team actively looks ahead to the
                  challenges the blockchain sector is likely to have in the medium-term, and attempts to
                  address problems the industry will face in the next decade.
                </p>
              </div>
                   </section>
                 </motion.article>

                 {/* FAQ */}
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

                 {/* Share CTA */}
          <ShareCTA
            title="How Ergo's Storage Rent Solves Blockchain State Bloat"
            url="https://www.ergoblockchain.org/blog/storage-rent"
            description="Explore how Ergo's demurrage model keeps blockchain state lean, sustainable, and decentralized."
            subtitle="If this was useful, share it with other builders and node operators exploring scalable PoW design."
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
                           <div className="flex items-start gap-4">
                             <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                               <Code className="w-6 h-6 text-blue-400" />
                             </div>
                             <div>
                               <h3 className="text-white font-semibold text-lg mb-2">Two Blockchain Models</h3>
                               <p className="text-gray-400 text-sm mb-2">Why Ergo chose differently - eUTXO vs Account model comparison</p>
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