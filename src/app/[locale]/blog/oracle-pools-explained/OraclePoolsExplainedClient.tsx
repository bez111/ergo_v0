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
import OracleComparisonTable from "@/components/oracle-comparison-table"
import { 
  ChevronDown,
  Shield,
  Network,
  Eye,
  CheckCircle,
  Zap,
  Code,
  AlertTriangle,
  Target,
  Users,
  Lock
} from "lucide-react"
import { Link } from "@/i18n/navigation"

export function OraclePoolsExplainedClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const tldrItems = [
    {
      icon: Network,
      title: "Decentralized Data Feeds",
      description: "Open participation oracle pools where anyone can join and provide data without permissions or whitelists"
    },
    {
      icon: Shield,
      title: "On-Chain Aggregation",
      description: "Smart contracts deterministically compute median values from all submissions - no trusted aggregators"
    },
    {
      icon: Eye,
      title: "Transparent & Immutable",
      description: "All data points stored in eUTXOs on-chain - anyone can audit historical submissions and verify integrity"
    },
    {
      icon: Target,
      title: "Aligned Incentives",
      description: "Providers only get paid for accurate, timely submissions - malicious or erroneous data gets no reward"
    }
  ]

  const articleContents = [
    { label: "Why Oracles Fail", href: "#oracle-problems" },
    { label: "What Are Oracle Pools?", href: "#oracle-pools" },
    { label: "Trust Reduction", href: "#trust-reduction" },
    { label: "Comparison vs Other Models", href: "#comparison" },
    { label: "eUTXO Integration", href: "#eutxo-model" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "FAQ", href: "#faq" }
  ]

  const oracleProblems = [
    {
      icon: AlertTriangle,
      title: "Single Point of Failure",
      description: "Single-source oracles create centralization risks - one reporter can lie, make mistakes, or go offline"
    },
    {
      icon: Users,
      title: "Collusion Risk", 
      description: "Committee-based oracles still vulnerable to collusion, especially with small numbers or shared infrastructure"
    },
    {
      icon: Network,
      title: "API Dependencies",
      description: "Reliance on centralized servers that can be censored, manipulated, or experience downtime"
    },
    {
      icon: Lock,
      title: "Trusted Aggregators",
      description: "Even off-chain aggregators introduce trust assumptions at the aggregation layer"
    }
  ]

  const trustReductions = [
    {
      title: "From People to Protocol",
      description: "No dependence on trusted operators, aggregators, or governance committees - fully decentralized"
    },
    {
      title: "Transparent Data",
      description: "All datapoints captured on-chain as eUTXOs - complete audit trail of submissions"
    },
    {
      title: "Deterministic Aggregation", 
      description: "On-chain logic computes final values using median or weighted averages - no off-chain overrides"
    },
    {
      title: "Permissionless Participation",
      description: "Anyone can join as oracle provider - no whitelists or centralized gatekeepers"
    },
    {
      title: "Aligned Incentives",
      description: "Pool tokens and epoch payouts reward honest participation - bad actors get no rewards"
    },
    {
      title: "Minimized Attack Surface",
      description: "No API endpoints to DDoS, no signing keys to steal - similar security to the network itself"
    }
  ]


  const useCases = [
    {
      icon: Zap,
      title: "Decentralized Stablecoins",
      description: "Price feeds for algorithmic stablecoins like SigmaUSD that require reliable market data"
    },
    {
      icon: Code,
      title: "Lending Platforms", 
      description: "Collateralization ratios and liquidation triggers for DeFi lending protocols"
    },
    {
      icon: Target,
      title: "Derivatives & Prediction Markets",
      description: "Settlement data for futures, options, and prediction market outcomes"
    },
    {
      icon: Shield,
      title: "Insurance Markets",
      description: "Event outcomes and claims verification for decentralized insurance protocols"
    }
  ]

  const faqItems = [
    {
      question: "What are Ergo Oracle Pools?",
      answer: "Ergo Oracle Pools are open, permissionless protocols where independent data providers report on-chain data feeds. A smart contract deterministically aggregates submissions using median or weighted values, with providers only paid for correct and timely submissions."
    },
    {
      question: "How do Ergo Oracle Pools reduce trust assumptions?",
      answer: "Ergo's oracle pools eliminate single points of failure by using on-chain aggregation, transparent immutable data storage in eUTXOs, permissionless participation, aligned incentives through pool tokens, and no dependency on trusted aggregators or off-chain signing groups."
    },
    {
      question: "How do Ergo Oracle Pools differ from Chainlink?",
      answer: "Unlike Chainlink's off-chain aggregation and trusted node operators, Ergo Oracle Pools use on-chain aggregation, permissionless participation, and store all data points directly in eUTXOs, eliminating the need for trusted aggregators."
    },
    {
      question: "What happens if oracle providers submit bad data?",
      answer: "Providers are only rewarded if they submit data within an accepted deviation of the final aggregated value. Erroneous or malicious submissions are discarded and receive no payout, creating strong incentives for honest reporting."
    },
    {
      question: "Can oracle pools be manipulated like centralized oracles?",
      answer: "Oracle pools are much harder to manipulate because an attacker would need to bribe a large percentage of providers, which becomes economically irrational. There are no single API endpoints to compromise or signing keys to steal."
    },
    {
      question: "What are the remaining trust assumptions?",
      answer: "Oracle pools still require diverse data sources (not all querying the same API), sufficient pool size to prevent collusion, proper economic incentives, robust aggregation design, and reliable provider participation within epochs."
    },
    {
      question: "Why do Oracle Pools fit Ergo's eUTXO model?",
      answer: "Ergo's eUTXO model allows each oracle data submission to exist as a discrete, self-contained output with its own guard script. This enables predictable, secure contract logic without global mutable state, making oracle pool logic entirely transparent and decentralized."
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
              { name: "Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained", href: "/blog/oracle-pools-explained" }
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
              Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed mb-8">
              Decentralized <Link href="/technology/oracle-pools" className="text-orange-400 hover:underline">oracle pools</Link> that minimize trust assumptions through on-chain aggregation and permissionless participation.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline 
                title="Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained" 
                url="https://ergoblockchain.org/blog/oracle-pools-explained" 
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

          {/* Main Content - Introduction */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                As blockchain gains adoption and is integrated into more and more mainstream applications, smart contracts will increasingly need to access real-world data of all kinds. Everything from the outcomes of sporting events to weather and traffic feeds will end up being processed by decentralized applications (dApps).
              </p>
              <p className="text-gray-300 leading-relaxed">
                But there's a problem. By design, blockchains are siloed from the outside world. Their security model is based on decentralization, with the ledger being maintained by nodes that keep strictly to an agreed set of rules.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Oracles are DeFi's answer to this problem. Oracles are applications that feed data from real-world sources to dApps in a way they can use.
              </p>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  However, introducing external data to the siloed system of the blockchain generally involves trust in one form or another, and oracles' security is vulnerable to attacks. Centralization and single points of failure are common, and many DeFi failures can be traced back to an oracle that has been compromised in some way.
                </p>
              </Card>
              <p className="text-gray-300 leading-relaxed">
                Ergo approaches the problem differently. Ergo's oracle pools offer predictable incentives and involve minimal trust assumptions. It's a decentralized answer to the challenge of bringing real-world data on-chain, closely matching the decentralization of the blockchain itself.
              </p>
            </div>
          </motion.section>

          {/* Oracle Pools Infographic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-12"
          >
            <ExpandableInfographic
              src="/og/infographics/oracle-pools-explained.png"
              alt="Ergo Oracle Pools Explained: Decentralized, Reliable Data for dApps"
            />
          </motion.section>

          {/* Why Oracles Fail */}
          <motion.section
            id="oracle-problems"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Oracles Fail: The Problem Space</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                The task of an oracle is to bridge the unpredictable and messy real world with the decentralized and rules-based world of the blockchain. Typically, oracles introduce centralization and vulnerabilities into this carefully-controlled system.
              </p>
            </div>

            <div className="grid gap-6 mb-8">
              {oracleProblems.map((problem, index) => (
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
                          <problem.icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{problem.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{problem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The result is the possibility of oracle manipulation attacks, which often rely on temporary price distortions.
              </p>
              <Card className="bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-red-400 font-semibold mb-3">Case Study: Mango Markets Exploit (2022)</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Solana's Mango Markets was exploited for $112 million when an attacker compromised its oracle feeds. The attacker placed large orders for the MNGO token on three centralized exchanges, pushing the price up 300% in 10 minutes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Using the inflated MNGO as collateral, they took out large loans in USDC and SOL. When MNGO's price collapsed, the protocol absorbed the bad debt while the attacker kept the borrowed funds. This was only possible because the oracle was centralized and easily manipulated.
                </p>
              </Card>
              <p className="text-gray-300 leading-relaxed">
                When designing oracle systems, the key question becomes: <strong className="text-white">How do you minimize trust when you need off-chain data?</strong>
              </p>
            </div>
          </motion.section>

          {/* What Are Oracle Pools */}
          <motion.section
            id="oracle-pools"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">What Are Ergo Oracle Pools?</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Ergo's answer to the challenges of serving real-world data safely and reliably is Oracle Pools. These are open protocols, rather than the permissioned systems used by other major oracles. Like the blockchain itself, anyone can participate.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ergo's oracle pool model works as follows:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  A group of independent data providers report on the same data feed. This could be the price of a crypto or stock, the outcome of a sporting or political event, or anything else.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Members of this decentralized data provider network record their submissions directly on-chain.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  A smart contract deterministically extracts the median or weighted value of the submissions
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Data providers are only paid if they submit data correctly and on time
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Anyone can join the pool, and anyone can verify every submitted data point
                </li>
              </ul>
              <Card className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  Oracle data is stored directly within eUTXOs, rather than in an external system. This model of on-chain oracle aggregation ensures a high degree of transparency and trustlessness.
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Trust Reduction */}
          <motion.section
            id="trust-reduction"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">How Oracle Pools Reduce Trust Assumptions</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Ergo's oracle pools reduce the attack surface for oracle feeds in a number of key ways, removing several single points of failure that are inherent to existing models.
              </p>
            </div>

            <div className="space-y-6">
              {trustReductions.map((reduction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-black border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{reduction.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{reduction.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
      
      {/* Oracle Comparison Table - Full Width */}
      <motion.section
        id="comparison"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <OracleComparisonTable />
        </div>
      </motion.section>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* eUTXO Integration */}
          <motion.section
            id="eutxo-model"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Why Oracle Pools Fit Ergo's eUTXO Model</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ergo's transaction model is different to other smart contract platforms. While Ethereum and most other blockchains use the Account model, Ergo uses the <Link href="/technology/eutxo-model" className="text-orange-400 hover:underline">eUTXO model</Link>. This has fundamentally different properties, and supports Ergo's oracle model at the protocol level.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ergo's smart contracts are built around eUTXOs: discrete, self-contained outputs on the blockchain. While Bitcoin's unspent transaction outputs (UTXOs) contain only tranches of coins, Ergo extends this approach to allow data and arbitrary logic to be attached to these outputs. Every data submission by an oracle exists in its own eUTXO, with its own guard script. Contract logic enforces participation rules, aggregation rules, and payout conditions.
              </p>
              <Card className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-blue-400 font-semibold mb-3">Key Advantages</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike with the account model, there is no global, mutable state, and oracle pool logic becomes entirely predictable and secure. Data points can be queried directly by smart contracts, without any additional trust layers. It's simple, direct, transparent, and decentralized.
                </p>
              </Card>
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section
            id="use-cases"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Real-World Use Cases</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6 mb-8">
              <p className="text-gray-300 leading-relaxed">
                Ergo's approach ensures a high degree of data integrity, underpinning secure, reliable applications that require external data. Oracle use cases include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-2xl hover:border-orange-400/40 transition-colors h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <useCase.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">{useCase.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            id="conclusion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Conclusion</h2>
            
            <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Oracles are vital for real-world DeFi and Web3 applications, but most oracles have significant vulnerabilities, which mean exploits are still all too common in the crypto space.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ergo takes a pragmatic approach that is well suited to its eUTXO model and smart contract system. Oracle pools reduce trust compared with most other designs, recording all data points on-chain, deterministically creating the final aggregated value, and maintaining a high degree of decentralization and transparency throughout.
              </p>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                >
                  <Collapsible
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <Card className="bg-black border border-white/10 rounded-xl hover:border-orange-400/40 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white font-semibold text-left">{item.question}</h3>
                            <ChevronDown 
                              className={`w-5 h-5 text-orange-400 transition-transform ${
                                openFAQ === index ? 'rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 p-4 bg-black/50 border border-white/5 rounded-xl">
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
            title="Ergo Oracle Pools: A Trust-Minimised Oracle Model Explained"
            description="Learn how Ergo's decentralized oracle pools minimize trust assumptions, provide on-chain data aggregation, and enable secure DeFi applications without single points of failure."
            url="https://ergoblockchain.org/blog/oracle-pools-explained"
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
              <Link href="/blog/ergo-in-5-minutes" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Ergo in 5 Minutes</h3>
                        <p className="text-gray-400 text-sm mb-2">Quick introduction to Ergo's core features and unique advantages</p>
                        <Badge variant="outline" className="bg-orange-500/10 border-orange-500/30 text-orange-400 text-xs">
                          Introduction
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/eutxo-vs-accounts" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Code className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">eUTXO vs Account Model</h3>
                        <p className="text-gray-400 text-sm mb-2">Understanding Ergo's extended UTXO model and its advantages</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Technology
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
