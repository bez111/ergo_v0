"use client"

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ResponsiveTable } from "@/components/ui/responsive-table"
import { BlockchainComparisonDiagram, SigmaProtocolsDiagram } from "@/components/diagrams/blockchain-comparison"
import { StorageRentTimeline } from "@/components/diagrams/storage-rent-timeline"
import { ErgoScriptExamples } from "@/components/code/ergoscript-examples"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { ExpandableInfographic } from "@/components/blog/expandable-infographic"
import { 
  ChevronDown,
  Shield,
  Zap,
  Coins,
  Network,
  Code,
  Eye,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  FileText,
  BookOpen
} from "lucide-react"
import Link from "next/link"

export function ErgoIn5MinutesClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: CheckCircle,
      title: "Fair launch",
      description: "no ICO, no pre-mine, PoW only. Decentralized from day one.",
      link: "/start/introduction"
    },
    {
      icon: Code,
      title: "eUTXO + ErgoScript",
      description: "Deterministic contracts with explicit state encoded in boxes (UTXOs) — no shared global state, fewer side effects, natural parallelism.",
      link: "/docs/introduction/eutxo"
    },
    {
      icon: Eye,
      title: "Sigma protocols",
      description: "Native zero-knowledge proofs with composable logic (AND/OR, ring, threshold) enabling confidential yet auditable flows and selective disclosure.",
      link: "/docs/introduction/privacy"
    },
    {
      icon: Zap,
      title: "Autolykos (PoW)",
      description: "Memory-hard, GPU-friendly, and resistant to ASIC dominance.",
      link: "/docs/introduction/autolykos"
    },
    {
      icon: Coins,
      title: "Storage Rent",
      description: "Dormant boxes pay small rent after ~4 years; moving funds resets the clock. Lost ERG are gradually recycled to miners, curbing state bloat and securing the network.",
      link: "/docs/introduction/storage-rent"
    }
  ]

  const projects = [
    { name: "Spectrum Finance", description: "Decentralized exchange", type: "DEX" },
    { name: "SigmaUSD", description: "Algorithmic stablecoin", type: "Stablecoin" },
    { name: "DuckPools", description: "Algorithmic lending platform", type: "Lending" },
    { name: "Rosen Bridge", description: "Cross-chain bridge connecting Ergo with Cardano and beyond", type: "Bridge" },
    { name: "ErgoMixer", description: "Privacy application", type: "Privacy" },
    { name: "Paideia", description: "DAO management platform", type: "DAO" }
  ]

  const articleContents = [
    { label: "Quick Overview", href: "#introduction" },
    { label: "Origins & Fair Launch", href: "#origins" },
    { label: "Ergo Today & Ecosystem", href: "#ergo-today" },
    { label: "Smart Contracts & Privacy", href: "#smart-contracts" },
    { label: "Sustainable Future", href: "#future" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "FAQ", href: "#faq" },
    { label: "Essential Documents", href: "#documents" }
  ]


  const privacyComparison = [
    {
      feature: "Privacy Approach",
      ergo: "Optional, auditable privacy via Sigma protocols",
      zcash: "Optional privacy (shielded/transparent pools)",
      monero: "Privacy by default (mandatory)"
    },
    {
      feature: "Zero-Knowledge Proofs",
      ergo: "Native Sigma protocols (no trusted setup)",
      zcash: "zk-SNARKs (trusted setup required)",
      monero: "Ring signatures + stealth addresses"
    },
    {
      feature: "Auditability",
      ergo: "Selective disclosure - auditable when needed",
      zcash: "Viewing keys for compliance",
      monero: "View keys for specific transactions"
    },
    {
      feature: "Transaction Privacy",
      ergo: "Amounts, recipients can be hidden (optional)",
      zcash: "Fully shielded or transparent",
      monero: "All transactions private by default"
    },
    {
      feature: "Compliance Features",
      ergo: "Built-in selective disclosure for regulations",
      zcash: "Viewing keys, memo fields",
      monero: "Limited compliance tools"
    },
    {
      feature: "Smart Contracts",
      ergo: "Full smart contract support with privacy",
      zcash: "Limited programmability",
      monero: "No smart contracts"
    },
    {
      feature: "Performance Impact",
      ergo: "Minimal when privacy not used",
      zcash: "Higher for shielded transactions",
      monero: "Always higher due to mandatory privacy"
    }
  ]

  const faqItems = [
    {
      question: "What is the Ergo blockchain?",
      answer: "Ergo is a Proof-of-Work blockchain that blends Bitcoin-level security with the eUTXO smart-contract model and Sigma-protocol privacy to power secure, auditable DeFi."
    },
    {
      question: "How is Ergo different from Ethereum and Bitcoin (eUTXO vs account)?",
      answer: "Ergo uses eUTXO, attaching conditions to outputs for deterministic, easily parallelized execution—avoiding many global-state side effects seen in account-based chains, while extending Bitcoin's UTXO with rich programmability."
    },
    {
      question: "What are Sigma protocols on Ergo?",
      answer: "Sigma protocols are native zero-knowledge proofs (AND/OR, threshold, ring) that enable auditable privacy—you keep details confidential yet can prove compliance or selectively disclose when required."
    },
    {
      question: "What is storage rent on Ergo?",
      answer: "Storage rent is a small fee on long-inactive boxes (UTXOs) that recycles lost ERG to fund network security; active users avoid it simply by moving coins periodically."
    },
    {
      question: "Was there an ICO or pre-mine (fair launch)?",
      answer: "No—ERG had a fair launch with Proof-of-Work only, no ICO and no pre-mine, aligning incentives and decentralization from day one."
    },
    {
      question: "What is Autolykos and can I mine Ergo with GPUs?",
      answer: "Autolykos is Ergo's memory-hard PoW algorithm, designed to be GPU-friendly and more resistant to ASIC centralization; yes, you can mine ERG with consumer-grade GPUs."
    },
    {
      question: "What can I build or use on Ergo (DeFi & apps)?",
      answer: "Ergo supports DEX trading (e.g., Spectrum), algorithmic stablecoins (SigmaUSD), DAO tooling (Paideia), NFTs, and privacy-preserving apps—using ErgoScript and the eUTXO model."
    },
    {
      question: "Is Ergo a 'privacy coin'? (compliance & audits)",
      answer: "Privacy on Ergo is optional and policy-driven: Sigma proofs enable selective disclosure and auditability, making privacy features compatible with compliance workflows."
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Ergo in 5 Minutes: Why It Matters & How It Works", href: "/blog/ergo-in-5-minutes" }
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Ergo in 5 Minutes: Why It Matters & How It Works
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              A fair-launch PoW chain that fuses Bitcoin-grade security with eUTXO smart contracts and Sigma-protocol privacy.
            </p>

            {/* Inline Share & Views */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline 
                title="Ergo in 5 Minutes: Why It Matters & How It Works" 
                url="https://ergoblockchain.org/blog/ergo-in-5-minutes" 
                utm="?utm_source=share_hero"
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
                  <Link href={item.link}>
                    <Card className="bg-black border border-white/10 rounded-xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 cursor-pointer">
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              
              {/* Introduction */}
              <div id="introduction" className="bg-black border border-white/20 rounded-3xl p-8 mb-12 scroll-mt-24">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In a sea of altcoins, clones, and supposed "Bitcoin killers", few crypto platforms truly offer anything special. The Ergo blockchain might just be one of them.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  The Ergo blockchain is a proof-of-work platform that was launched six years ago by former IOHK and Cardano experts with a strong background in academic blockchain research.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  The crypto space is crowded with different networks, each claiming to bring something unique to the Web3 space. Scalability, privacy, security, community support – everyone says they have an edge. There are now many tens or even hundreds of thousands of coins and tokens. Just a handful are worth anything: CoinMarketCap lists barely over 1,000 networks with a total value over $10 million – practically nothing by crypto standards.
                </p>
              </div>

              {/* Ergo in 5 Minutes Infographic */}
              <div className="mb-12">
                <ExpandableInfographic
                  src="/og/infographics/ergo-in-five-minutes.png"
                  alt="Ergo in 5 Minutes: A Brief Introduction to the Ergo Platform"
                />
              </div>

              {/* The Past */}
              <div id="origins" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-orange-400" />
                  The Past: Ergo Platform Origins And Fair Launch
                </h2>
                
                <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo was founded in 2019 by ex-IOHK and Cardano developers Alexander "Kushti" Chepurnoy and Dmitry "Catena" Meshkov.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    The founders, both academics with extensive publication records in physics and cryptography, wanted to create a platform that built on Bitcoin's success and learned from it, without attempting to replace it.
                  </p>
                  
                  <div className="bg-black border border-orange-500/30 rounded-2xl p-6">
                    <p className="text-orange-100 leading-relaxed">
                      <strong className="text-orange-400">Fair Launch:</strong> Unlike most other platforms, there was no ICO and no pre-mine. The Ergo cryptocurrency (ERG) was distributed only by proof of work (PoW). The blockchain was decentralized from day one.
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    The team augmented Bitcoin's tried-and-tested security model with a form of flexible, efficient smart contracts, based on Bitcoin's UTXO accounting model. This was more complex to implement than smart contracts based on the more usual Account model used by Ethereum and most other platforms but offers unique advantages.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Additionally, the team wanted to provide the option for robust privacy. While Bitcoin had initially gained popularity as a means of moving funds trustlessly and privately, users soon found that the transparency of the blockchain left their transaction history permanently visible to everyone. With a background in mathematics and cryptography, Chepurnoy and Meshkov landed on Sigma Protocols, a class of flexible and composable cryptographic proofs, to ensure the confidentiality that individual and now institutional adopters were increasingly demanding.
                  </p>
                </div>
              </div>

              {/* Ergo Today */}
              <div id="ergo-today" className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Network className="w-8 h-8 text-orange-400" />
                  Ergo Today: Secure, Private DeFi
                </h2>
                
                <div className="bg-black border border-white/20 rounded-3xl p-8 mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Today, the Ergo blockchain remains a decentralized and community-led PoW endeavor. The building blocks put in place over five years ago have been used to create a broad range of DeFi services – and while they might look the same as those on other smart contract platforms, under the surface they're very different.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Just some of the many projects launched on Ergo include:
                  </p>
                </div>

                {/* Projects Grid - Mobile Optimized */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                        <CardContent className="p-4 sm:p-5">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-white text-sm sm:text-base">{project.name}</h4>
                            <Badge variant="outline" className="text-xs bg-black border-orange-500/30 text-orange-400 shrink-0 ml-2">
                              {project.type}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Details */}
                <div id="smart-contracts" className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 scroll-mt-24">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo's smart contracts are written in <strong className="text-orange-400">ErgoScript</strong>, a language based on Scala, which was formulated specifically to work with the Ergo blockchain's eUTXO model.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    eUTXOs are an extension of Bitcoin's UTXO model, which tracks unspent outputs or packets of coins, and registers them to particular addresses. Any address balance is made up of one or more of these UTXOs – unlike Ethereum's Account model, where balances are simply updated like a bank account.
                  </p>
                </div>

                {/* Blockchain Comparison Diagram */}
                <div className="my-12">
                  <BlockchainComparisonDiagram />
                </div>

                <div className="bg-black/90 border border-white/20 rounded-3xl p-8 space-y-6">
                  <div className="bg-black border border-blue-500/30 rounded-2xl p-6">
                    <p className="text-blue-100 leading-relaxed">
                      <strong className="text-blue-400">Privacy Advantage:</strong> The other key technology driving Ergo's dApp ecosystem is Sigma Protocols, the composable zero-knowledge proofs that underpin ErgoMixer and other applications. Privacy is the big trend for 2025, and is recognized as the most significant barrier to institutional adoption, but few platforms offer the kind of auditable confidential transactions that Ergo does.
                    </p>
                  </div>
                </div>

                {/* Privacy Comparison Table - Mobile Optimized */}
                <div className="mt-12 mb-8">
                  <ResponsiveTable
                    title="Privacy Features: Ergo vs Leading Privacy Coins"
                    headers={["Feature", "Ergo (Sigma)", "Zcash (ZEC)", "Monero (XMR)"]}
                    data={privacyComparison.map(row => ({
                      "Feature": row.feature,
                      "Ergo (Sigma)": row.ergo,
                      "Zcash (ZEC)": row.zcash,
                      "Monero (XMR)": row.monero
                    }))}
                    highlightColumn="Ergo (Sigma)"
                  />
                  
                  <div className="mt-6 bg-black border border-orange-500/30 rounded-2xl p-4">
                    <p className="text-orange-100 text-sm leading-relaxed">
                      <strong className="text-orange-400">Key Advantage:</strong> Ergo's Sigma protocols provide the best of both worlds - strong privacy when needed, full auditability for compliance, and seamless integration with smart contracts. Unlike mandatory privacy coins, Ergo lets users choose their privacy level while maintaining regulatory compatibility.
                    </p>
                  </div>
                </div>

                {/* Sigma Protocols Diagram */}
                <div className="my-12">
                  <SigmaProtocolsDiagram />
                </div>

                {/* ErgoScript Code Examples */}
                <div className="my-12">
                  <ErgoScriptExamples />
                </div>
              </div>

              {/* Future Section */}
              <div id="future" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <ArrowRight className="w-8 h-8 text-orange-400" />
                  Towards A Sustainable Future
                </h2>
                
                <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Ergo paved the way for the future right from the start, prioritizing infrastructure and features that would ensure long-term stability and sustainability.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Chief among these has been the nature of Ergo's mining ecosystem. While Ergo is based on proof of work, like Bitcoin, it uses the memory-hard Autolykos algorithm, making it far more ASIC-resistant and energy efficient than Bitcoin. This also ensures greater accessibility, meaning more users can join the network without expensive specialist hardware, ensuring a high and ongoing level of decentralization.
                  </p>
                  
                  <div className="bg-black border border-green-500/30 rounded-2xl p-6">
                    <p className="text-green-100 leading-relaxed">
                      <strong className="text-green-400">Storage Rent Innovation:</strong> One of Ergo's most noteworthy features is storage rent. This slowly recycles coins that have not been moved in over four years, bringing lost ERG back into circulation and increasing revenues for miners. This "demurrage" acts as a small tax on dormant accounts, but can easily be avoided by moving coins every few years.
                    </p>
                  </div>

                  {/* Storage Rent Timeline */}
                  <div className="my-8">
                    <StorageRentTimeline />
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div id="conclusion" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  Conclusion
                </h2>
                
                <div className="bg-black border border-white/20 rounded-3xl p-8">
                  <p className="text-gray-300 leading-relaxed">
                    Finally, Ergo's development team keeps the same academic rigor with which it started out, meaning that future upgrades are thoroughly researched before implementation, ensuring the best possible technical foundation for the network.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="mb-16 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Frequently Asked Questions
                </h2>
                
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <Card key={index} className="bg-black border-white/10 backdrop-blur-sm rounded-3xl">
                      <Collapsible open={openFAQ === index} onOpenChange={(open) => setOpenFAQ(open ? index : null)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full min-h-[44px]">
                            <CardContent className="p-4 sm:p-6 flex items-center justify-between hover:bg-black/70 transition-colors">
                              <h3 className="text-base sm:text-lg font-semibold text-left text-white pr-4">{faq.question}</h3>
                              <ChevronDown 
                                aria-hidden="true" 
                                className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${
                                  openFAQ === index ? "rotate-180" : ""
                                }`} 
                              />
                            </CardContent>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Essential Documents */}
              <motion.div
                id="documents"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Essential Documents
                </h2>
                <p className="text-gray-300 mb-8">
                  Ready to dive deeper? Explore these foundational documents to understand Ergo's technology and vision.
                </p>
                
                <div className="grid gap-4">
                  <Link
                    href="/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6 text-orange-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg mb-2">
                                Ergo Platform Whitepaper
                              </h3>
                              <p className="text-gray-400 text-sm">
                                The foundational document describing Ergo's architecture, eUTXO model, and key innovations.
                              </p>
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link
                    href="/api/pdf/documents/ErgoScript, a Cryptocurrency Scripting Language Supporting Noninteractive Zero-Knowledge Proofs.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                              <Code className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg mb-2">
                                ErgoScript & Sigma Protocols
                  </h3>
                              <p className="text-gray-400 text-sm">
                                Technical paper on ErgoScript language design and zero-knowledge proof integration.
                              </p>
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>

                    <Link 
                    href="/api/pdf/documents/Advanced ErgoScript Tutorial.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                              <BookOpen className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg mb-2">
                                Advanced ErgoScript Tutorial
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Comprehensive guide to advanced ErgoScript programming patterns and best practices.
                              </p>
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                    </Link>

                </div>
              </motion.div>

              {/* 1. Share this post */}
              <ShareCTA
                title="Ergo in 5 Minutes: Why It Matters & How It Works"
                url="https://ergoblockchain.org/blog/ergo-in-5-minutes"
                description="Quick introduction to Ergo: fair launch, eUTXO, Sigma protocols, and DeFi ecosystem"
                subtitle="Help spread the word about Ergo's innovative blockchain technology"
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

            </div>
          </motion.section>

          {/* 3. Subscribe */}
          <FinalCTASimple 
            title="Join the resistance"
            description="Fight for financial freedom. Build censorship-resistant money. No banks, no middlemen."
          />
          
        </div>
      </div>
    </BackgroundWrapper>
  )
}
