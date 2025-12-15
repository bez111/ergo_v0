"use client"

/* eslint-disable react/no-unescaped-entities */

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
  ChevronDown,
  Shield,
  Smartphone,
  Link as LinkIcon,
  Eye,
  CheckCircle
} from "lucide-react"
import { Link } from "@/i18n/navigation"

export default function NiPoPoWsExplainedClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: CheckCircle,
      title: "Lightweight Verification",
      description: "Verify blockchain integrity with just kilobytes instead of gigabytes - 1000x smaller than full blockchain"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Enable smartphones and low-power devices to verify PoW chains without downloading headers"
    },
    {
      icon: LinkIcon,
      title: "Cross-Chain Bridges",
      description: "Trustless bridges between blockchains without relying on multi-sig or centralized services"
    },
    {
      icon: Shield,
      title: "Same Security",
      description: "Cryptographically equivalent security to full nodes with mathematical proof guarantees"
    }
  ]

  const benefits = [
    {
      icon: Smartphone,
      title: "Stateless Light Clients",
      description: "Make transactions with full node security without storing blockchain state or UTXO sets"
    },
    {
      icon: Shield,
      title: "Mobile Verification",
      description: "Smartphones and older devices can interact with blockchain using minimal resources"
    },
    {
      icon: Eye,
      title: "Cold Storage Verification",
      description: "Offline devices verify blockchain integrity with tiny proofs stored on USB drives"
    },
    {
      icon: LinkIcon,
      title: "Trustless Bridges",
      description: "Cross-chain verification without trusted third parties or multi-sig compromises"
    }
  ]

  const comparisonData = [
    {
      feature: "Blockchain Size",
      fullBlockchain: "1 GB",
      spvHeaders: "5 MB", 
      nipopow: "10 KB"
    },
    {
      feature: "Blockchain Size",
      fullBlockchain: "10 GB",
      spvHeaders: "20 MB",
      nipopow: "20 KB"
    },
    {
      feature: "Blockchain Size", 
      fullBlockchain: "100 GB",
      spvHeaders: "80 MB",
      nipopow: "30 KB"
    },
    {
      feature: "Blockchain Size",
      fullBlockchain: "1,000 GB (1 TB)",
      spvHeaders: "300 MB", 
      nipopow: "50 KB"
    }
  ]

  const articleContents = [
    { label: "What Are NiPoPoWs?", href: "#what-are-nipopows" },
    { label: "How NiPoPoWs Work", href: "#superblocks" },
    { label: "Size Comparison", href: "#comparison" },
    { label: "Why NiPoPoWs Matter", href: "#benefits" },
    { label: "FAQ", href: "#faq" }
  ]

  const faqItems = [
    {
      question: "What makes NiPoPoWs different from Bitcoin's SPV?",
      answer: "While SPV clients still need to download all block headers (megabytes of data), NiPoPoWs compress the entire proof into just kilobytes. They use superblocks - blocks with unusually high difficulty - to create a mathematical proof of the chain's work without needing every header."
    },
    {
      question: "Are NiPoPoWs as secure as running a full node?",
      answer: "Yes! NiPoPoWs provide the same cryptographic security guarantees as a full node. They use the same proof-of-work that secures the blockchain, just compressed into a succinct proof. The only difference is storage and bandwidth requirements."
    },
    {
      question: "Can other blockchains implement NiPoPoWs?",
      answer: "Technically yes, but it requires protocol-level changes. Ergo was designed from the ground up with NiPoPoWs in mind. Other PoW chains would need significant modifications to support them properly."
    },
    {
      question: "How do superblocks work exactly?",
      answer: "Superblocks are blocks mined with much higher difficulty than required. They occur randomly but at predictable rates. NiPoPoWs group these into levels based on difficulty, creating a hierarchy that proves the chain's work with just a few key blocks."
    },
    {
      question: "What are the practical benefits for users?",
      answer: "Users can verify transactions on mobile devices, create truly cold storage solutions, and use cross-chain bridges without trusting third parties. It makes blockchain verification accessible to anyone, anywhere."
    },
    {
      question: "Why is Ergo the only major chain with NiPoPoWs?",
      answer: "Ergo was designed from the ground up with NiPoPoWs in mind, incorporating them at the protocol level. Other blockchains would need significant consensus changes to add NiPoPoW support, making Ergo unique in this capability."
    },
    {
      question: "How small are NiPoPoW proofs compared to full blockchain?",
      answer: "NiPoPoW proofs are typically just 10-50 KB even for blockchains that are hundreds of gigabytes. This represents a compression ratio of over 1000:1 while maintaining the same security guarantees."
    }
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
              { name: "How NiPoPoWs Enable Trustless Light Clients And Cross-Chain Bridges On Ergo", href: "/blog/nipopows-explained" }
            ]}
            className="mb-8"
          />
          
          {/* Hero Section - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              How NiPoPoWs Enable Trustless Light Clients And Cross-Chain Bridges On Ergo
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Non-Interactive Proofs of Proof-of-Work compress blockchain verification from gigabytes to kilobytes while maintaining full security.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline 
                title="How NiPoPoWs Enable Trustless Light Clients And Cross-Chain Bridges On Ergo" 
                url="https://ergoblockchain.org/blog/nipopows-explained" 
              />
            </div>
          </motion.div>

          {/* TL;DR Section - Compact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              TL;DR
            </h2>
            
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
                          <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-sm leading-relaxed">
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

          {/* Main Content */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">The Blockchain Size Problem</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 mb-12">
              <p className="text-gray-300 leading-relaxed mb-6">
                A blockchain is essentially an append-only database that records every transaction ever made on the platform. 
                They can stretch to tens or hundreds of gigabytes, meaning that miners and full nodes need significant resources 
                to help maintain the network.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Resource-constrained devices like smartphones and older computers are generally not suitable, dramatically 
                reducing the number of machines that can participate in securing the ledger, and limiting decentralization in the process.
              </p>

              <div className="bg-black border border-orange-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Ergo's Solution</h3>
                <p className="text-orange-100 leading-relaxed">
                  <strong className="text-orange-400"><Link href="/technology/nipopows" className="hover:underline">Non-Interactive Proofs of Proof-of-Work (NiPoPoWs)</Link></strong> are lightweight blockchain proofs that 
                  provide almost all of the security of the full blockchain. These succinct proofs enable any device to verify 
                  PoW chains, without needing to download gigabytes of data.
                </p>
              </div>
            </div>
          </motion.section>

          {/* NiPoPoWs Infographic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12"
          >
            <ExpandableInfographic
              src="/og/infographics/nipopows-explained.png"
              alt="NiPoPoWs Explained: Compact Proofs for Light Clients & Interoperability"
            />
          </motion.section>

          {/* What Are NiPoPoWs */}
          <motion.section
            id="what-are-nipopows"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Are NiPoPoWs?</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) are a way to cryptographically verify that a Proof-of-Work 
                blockchain is legitimate without downloading the entire chain. Instead of syncing thousands of blocks, a NiPoPoW 
                compresses the most important parts of the chain into a small proof that is easy to check. This is typically just 
                a few kilobytes, rather than many gigabytes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The idea of NiPoPoWs was originally published in an academic paper written by three researchers from IOHK and 
                the University of Illinois. The researchers' aim was to improve the performance of existing PoW-based cryptocurrencies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                While the full blockchain grows in size linearly, since it records every transaction, NiPoPoWs grow in size far 
                more slowly (logarithmically). They also require only a single message between the prover and verifier of the 
                transaction: a self-contained, portable proof of proof-of-work (PoPoW) that any verifier can check instantly. 
                These succinct proofs are therefore both useful and sustainable as blockchain adoption grows.
              </p>
              <p className="text-gray-300 leading-relaxed">
                NiPoPoWs allow devices with limited storage and bandwidth to act as true light clients, enabling them to verify 
                network security without running or trusting full nodes. This approach of proof compression is more efficient and 
                more secure than conventional SPV (Simplified Payment Verification) clients, which still need to download block headers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By allowing any device to verify a PoW blockchain without syncing, NiPoPoWs reduce the barriers for nodes and 
                offer ordinary users robust security guarantees.
              </p>
            </div>
          </motion.section>

          {/* Superblocks Diagram */}
          <motion.section
            id="superblocks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">How NiPoPoWs Work</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 mb-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                NiPoPoWs rely on the concept of superblocks. These are blocks that are mined with a far greater Difficulty than is required.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Proof-of-Work blockchains are secured by miners: dedicated devices that carry out computationally intensive work 
                to prove they are adding transactions to the blockchain honestly. Mining requires a large amount of energy, so 
                dishonest miners not only waste the cost of this power, but forgo any block rewards and transaction fees they would receive.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In simple terms, a miner takes the most recent block header, adds a summary for a batch of new transactions, and 
                adds a changing number to it, known as the nonce. They then hash that collective data. (A hash is a kind of 
                cryptographic digest, which provides a unique "fingerprint" of a piece of data. The hash cannot be predicted in 
                advance, only calculated.) If the hash has a certain number of leading zeroes, it is valid and the miner has the 
                right to add the next block to the chain. If not, they change the nonce and try again.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The more leading zeroes are required, the less likely it is that a miner will find a hash that meets the criteria, 
                and the greater the network Difficulty is. This is how blockchain networks adjust when more miners come online, 
                bringing more processing power with them, so that block time is always roughly the same – in Ergo's case, around two minutes.
              </p>
            </div>

            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Occasionally, through chance, a miner finds a hash with a much greater number of leading zeroes. 
                Difficulty is far higher than is required. These are known as superblocks, and have different levels 
                of Difficulty, depending on how many additional leading zeroes they have.
              </p>
              <div className="bg-black border border-blue-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Card Game Analogy</h3>
                <p className="text-blue-100 leading-relaxed">
                  Imagine that instead of using computational hashrate, miners compete to add the next block to the blockchain 
                  by drawing five cards from a shuffled deck. The miner that draws a straight (five cards in a row) wins. 
                  A superblock is like drawing a straight flush (five cards of the same suit in a row).
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed">
                NiPoPoWs use these rare and unusually Difficult blocks to construct proofs, using the block headers. Superblocks 
                occur at random, but at predictable statistical rates. NiPoPoWs group these superblocks into levels, depending 
                on their Difficulty, creating a kind of hierarchy of proofs for the blockchain.
              </p>
              <p className="text-gray-300 leading-relaxed">
                To create a NiPoPoW proof, a prover selects a small number of superblocks from each level and links them together 
                cryptographically, to demonstrate the full chain of work. Only a few block headers are needed, and so the proof 
                remains small. Because the proof is self-contained, no back-and-forth communication is needed, but the proof still 
                guarantees the underlying work and security of the original blockchain.
              </p>
            </div>
          </motion.section>

          {/* Comparison Table */}
          <motion.section
            id="comparison"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Size Comparison: Full Blockchain vs SPV vs NiPoPoWs</h2>
            
            <div className="overflow-x-auto mb-8">
              <Card className="bg-black border border-white/10 rounded-xl">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-white font-semibold">Full Blockchain</th>
                      <th className="text-left p-4 text-white font-semibold">SPV Headers</th>
                      <th className="text-left p-4 text-white font-semibold">NiPoPoW Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-white/5 last:border-b-0">
                        <td className="p-4 text-gray-300">{row.fullBlockchain}</td>
                        <td className="p-4 text-gray-300">{row.spvHeaders}</td>
                        <td className="p-4 text-orange-400 font-semibold">{row.nipopow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 mt-8 space-y-6">
              <h3 className="text-xl font-bold text-white">NiPoPoWs Vs SPV And ZK Clients</h3>
              <p className="text-gray-300 leading-relaxed">
                Bitcoin and other PoW networks already have "light" clients, in the form of SPV (Simplified Payment Verification) 
                clients. However, these are still significantly heavier than Ergo's light clients.
              </p>
              <p className="text-gray-300 leading-relaxed">
                SPV clients still rely on long chains of headers. While accessing these is far less resource-intensive than 
                downloading the entire blockchain, it still comes with a considerable overhead that prevents lower-powered devices 
                from verifying the blockchain and making transactions safely.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Because NiPoPoWs are succinct proofs, which grow only very slowly compared to the size of the overall blockchain, 
                they are ideal for stateless clients (no full blockchain download) and environments where bandwidth is limited.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Similarly, NiPoPoWs are far more lightweight than ZK "light" clients. Zero-knowledge cryptography tends to be 
                heavy, complex, and expensive, and the ZK proofs for PoW require large cryptographic circuits. Because NiPoPoWs 
                are native to PoW's structure, relying only on what is already there, they can remain highly streamlined – and 
                without the trusted setup on which ZK proofs often rely.
              </p>
            </div>
          </motion.section>

          {/* Benefits */}
          <motion.section
            id="benefits"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why NiPoPoWs Matter For Ergo</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 mb-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ergo is the only major proof-of-work chain with NiPoPoWs enabled. This offers a series of benefits to users and the ecosystem as a whole:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-3 list-disc list-inside">
                <li><strong className="text-white">Stateless light clients.</strong> Transactions can be made with the same security guarantees as full nodes, without storing full blockchain state (UTXO set, etc).</li>
                <li><strong className="text-white">Mobile-first verification.</strong> Low-powered devices and even older smartphones are able to interact with the blockchain.</li>
                <li><strong className="text-white">Cold storage verification.</strong> Offline devices don't need to check state or even headers, only a tiny proof (which can easily be stored on a USB drive), enabling them to verify blockchain integrity easily and securely.</li>
                <li><strong className="text-white">Cross-chain bridges.</strong> NiPoPoWs allow a blockchain to verify the proof-of-work of another chain without running a full node for that chain. This replaces common but less secure methods such as multi-sig transactions, and centralized, trusted services.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-6 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Conclusion</h2>
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                NiPoPoWs are a significant and powerful development in blockchain technology, and bring several noteworthy 
                advantages to Ergo – the only major network so far to have implemented them.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Light clients, which provide similar security guarantees as a full blockchain download, mean that network 
                participation and decentralization can remain high, with no downsides. NiPoPoWs also underpin efficient 
                and secure cross-chain bridges.
              </p>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Collapsible 
                    open={openFAQ === index} 
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-left text-white font-semibold">{item.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-orange-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black border border-white/5 rounded-xl">
                        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA 
            title="How NiPoPoWs Enable Trustless Light Clients And Cross-Chain Bridges On Ergo"
            description="Learn how Non-Interactive Proofs of Proof-of-Work enable lightweight blockchain verification and trustless cross-chain bridges."
            url="https://ergoblockchain.org/blog/nipopows-explained"
          />

          {/* Continue Learning */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/eutxo-vs-accounts" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Shield className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">eUTXO vs Account Model</h3>
                        <p className="text-gray-400 text-sm mb-2">Why Ergo's eUTXO model enables better security and predictability</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/sigma-protocols-explained" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Eye className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Sigma Protocols Explained</h3>
                        <p className="text-gray-400 text-sm mb-2">Zero-knowledge proofs and programmable privacy on Ergo</p>
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs">
                          Privacy
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </motion.section>

          {/* Final CTA */}
          <FinalCTASimple />
        </div>
      </div>
    </BackgroundWrapper>
  )
}