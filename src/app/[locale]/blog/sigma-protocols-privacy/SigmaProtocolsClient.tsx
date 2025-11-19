"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { 
  Shield,
  Eye,
  Lock,
  Users,
  CheckCircle,
  ChevronDown,
  Code,
  Zap,
  Globe,
  AlertTriangle,
  TrendingUp
} from "lucide-react"

export function SigmaProtocolsClient() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // TL;DR cards based on article content
  const tldrItems = [
    {
      icon: TrendingUp,
      title: "Privacy Coin Renaissance",
      description:
        "First-gen privacy coins like ZCash surge 1000%+ as users seek financial privacy amid growing surveillance and CBDC threats.",
    },
    {
      icon: Shield,
      title: "Sigma Protocols Advantage",
      description:
        "Composable zero-knowledge proofs offering flexible privacy without trusted setup - more efficient than zkSNARKs, more versatile than ring signatures.",
    },
    {
      icon: Eye,
      title: "Programmable Privacy",
      description:
        "Optional, not always-on privacy. Users can selectively reveal information for compliance while maintaining confidentiality when needed.",
    },
    {
      icon: Code,
      title: "DeFi-Ready Privacy",
      description:
        "Unlike first-gen coins limited to transfers, Sigma Protocols work with any transaction type - perfect for confidential DeFi and complex dApps.",
    },
    {
      icon: Globe,
      title: "Compliant Confidentiality",
      description:
        "Auditable privacy model allows institutions to meet compliance obligations while protecting sensitive financial information.",
    },
  ]

  const faqItems = [
    {
      question: "What are Sigma Protocols?",
      answer:
        "Sigma Protocols are a class of composable zero-knowledge proofs that allow users to prove mathematical statements without revealing underlying information. They enable flexible, programmable privacy on Ergo."
    },
    {
      question: "How do Sigma Protocols differ from ZCash's zkSNARKs?",
      answer:
        "Unlike zkSNARKs, Sigma Protocols don't require trusted setup, are more computationally efficient, and offer greater composability for complex privacy applications and DeFi use cases."
    },
    {
      question: "Is privacy always-on like Monero?",
      answer:
        "No, Ergo's privacy is optional and programmable. Users can choose when to use privacy features, enabling compliance and auditability when needed while maintaining confidentiality when desired."
    },
    {
      question: "Can Sigma Protocols be used for DeFi applications?",
      answer:
        "Yes, Sigma Protocols can be applied to any transaction type, making them ideal for confidential DeFi, private voting, and other complex dApps beyond simple transfers."
    },
    {
      question: "What makes Ergo's privacy model compliant?",
      answer:
        "Ergo's optional privacy allows users to selectively reveal information for compliance purposes. Users can prove ownership and transaction history when required while maintaining privacy in other contexts."
    },
    {
      question: "How do Sigma Protocols compare to ring signatures?",
      answer:
        "Sigma Protocols can implement ring signatures and much more. They're more flexible and composable, allowing for complex privacy conditions like threshold signatures and programmable disclosure rules."
    }
  ]

  const articleContents = [
    { label: "Introduction", href: "#introduction" },
    { label: "Return of Privacy Coins", href: "#privacy-renaissance" },
    { label: "How Traditional Privacy Coins Work", href: "#traditional-privacy" },
    { label: "Ergo's Sigma Protocols Approach", href: "#sigma-protocols" },
    { label: "Privacy Coin Comparison", href: "#comparison" },
    { label: "Philosophy Behind Ergo's Privacy", href: "#philosophy" },
    { label: "Conclusion", href: "#conclusion" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Essential Documents", href: "#documents" }
  ]

  // Privacy coins comparison data
  const privacyComparison = [
    {
      feature: "Privacy Type",
      monero: "Always-on",
      zcash: "Optional",
      dash: "Optional",
      ergo: "Programmable"
    },
    {
      feature: "Privacy Tech",
      monero: "Ring signatures",
      zcash: "zkSNARKS",
      dash: "CoinJoin",
      ergo: "Sigma Protocols"
    },
    {
      feature: "Trusted Setup",
      monero: "No",
      zcash: "Yes",
      dash: "No",
      ergo: "No"
    },
    {
      feature: "DeFi Support",
      monero: "No",
      zcash: "No",
      dash: "No",
      ergo: "Yes"
    },
    {
      feature: "Scalability",
      monero: "Moderate",
      zcash: "Low",
      dash: "High",
      ergo: "High"
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: "Ergo And Sigma Protocols: The Next Step In Blockchain Privacy", href: "/blog/sigma-protocols-privacy" }
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
              Ergo And Sigma Protocols: The Next Step In Blockchain Privacy
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              As first-gen privacy coins see a resurgence of activity, Ergo's composable zero-knowledge signatures offer new options for compliant confidentiality.
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <ShareInline
                title="Ergo And Sigma Protocols: The Next Step In Blockchain Privacy"
                url="https://ergoblockchain.org/blog/sigma-protocols-privacy"
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

          {/* Article Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
                <Shield className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Introduction
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Privacy is the new meta. There are lots of possible reasons why the digital asset space has suddenly embraced confidential cryptos once again, including the rise of CBDCs, growing financial surveillance, intrusive KYC, and late-stage bull market rotation into undervalued coins.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Whatever the causes, privacy coins launched a decade ago are surging in value. ZCash ($ZEC) has been the biggest winner to date, climbing over 1,000% in two months, but the recovery of this OG crypto has prompted interest in other privacy coins and technologies.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                While there are many approaches to on-chain privacy, Ergo's Sigma Protocols – flexible, composable zero-knowledge proofs – offer privacy without sacrificing auditability.
              </p>

              <p className="text-gray-300 leading-relaxed">
                That's exactly the kind of functionality that both institutions and individuals need in this brave new world of blockchain surveillance.
              </p>
            </section>

            {/* The Return Of Privacy Coins */}
            <section
              id="privacy-renaissance"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  The Return Of Privacy Coins
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Bitcoin arose from cypherpunk roots, and early crypto users were intrigued by its potential to protect their financial privacy. Satoshi recognized that Bitcoin lacked advanced privacy features, and that the transparency of the blockchain had its drawbacks. New projects sought to address this gap, and privacy coins like Monero and ZCash spearheaded private digital cash.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  In the years since Bitcoin launched, and particularly over the last decade, we have seen a macro shift in the privacy landscape. The early cypherpunks were concerned that the rise of the internet and digital services would create new opportunities for mass surveillance, censorship, and control. We are now seeing that play out in real time.
                </p>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                  <ul className="space-y-3 text-orange-100">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>Large-scale data harvesting is the business model used by global tech corporations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>Data breaches and leaks are commonplace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>Phishing is a serious and growing problem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>Governments are tightening KYC rules – and creating honeypots of user data in the process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span>CBDCs are being rolled out, threatening freedoms and financial autonomy</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Against this backdrop, crypto users have realized that the solutions we need to address these issues already exist, thanks to those early pioneers.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Privacy coins do not all use the same technology, however, and have received different treatments by regulators. Coins like Monero have been delisted from exchanges, because their privacy model is robust but inflexible. In this age of both financial surveillance and regulation, users need choices. As the Cypherpunk's Manifesto states, <strong className="text-orange-400">"Privacy is the power to selectively reveal oneself to the world."</strong> Users who cannot do that risk being cut off from the mainstream financial system entirely.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This is where Ergo shines. Its Sigma Protocols represent the next evolution of privacy: mathematically grounded and powerful, but with the ability for users to prove ownership and disclose information where they want and need to.
                </p>
              </div>
            </section>

            {/* How Traditional Privacy Coins Work */}
            <section
              id="traditional-privacy"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  How Traditional Privacy Coins Work
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  First-generation coins have so far been the main beneficiaries of this renewed interest in privacy, with ZCash ($ZEC) being the most noteworthy example.
                </p>

                <div className="grid gap-6 md:grid-cols-1">
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <h3 className="text-blue-400 font-semibold text-lg mb-3">ZCash (zkSNARKs)</h3>
                    <p className="text-blue-100 leading-relaxed">
                      ZCash uses zero-knowledge proofs (ZKPs) to maintain privacy. ZKPs allow a user to cryptographically prove a mathematical statement is true, without revealing anything about the underlying information itself. In the case of ZCash, it allows users to prove that a transaction is valid, without revealing the actual sender or recipient address, or the amount being transferred.
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-purple-400 font-semibold text-lg mb-3">Monero (Ring Signatures)</h3>
                    <p className="text-purple-100 leading-relaxed">
                      Monero ($XMR) uses ring signatures, which mean that the same transaction could have been made by one of a number of different users. This approach is used to hide sender and receiver addresses, and shield the size of the transaction.
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                    <h3 className="text-green-400 font-semibold text-lg mb-3">Dash (CoinJoin)</h3>
                    <p className="text-green-100 leading-relaxed">
                      Dash ($DASH) uses a form of the CoinJoin protocol to increase privacy by mixing coins, though the privacy is less robust than some other cryptos provide.
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  All of these approaches have different strengths and weaknesses. zkSNARKs, the class of zero-knowledge used by ZCash, are computationally heavy and involve trusted setup, while ring signatures scale relatively poorly. (Monero's always-on privacy model has also made it a target for regulators.) As first-generation coins, they are only able to support simple transfers.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  More complex transaction types are enabled by decentralized confidential computing (DeCC) solutions, based on methods including fully homomorphic encryption (FHE) and Trusted Execution Environments (TEEs). These offer EVM-compatible platforms that support the full range of DeFi transactions, but few are ready for production use. FHE is notoriously slow and computationally expensive, and TEEs rely on trusted hardware with single points of failure and supply chain risk.
                </p>
              </div>
            </section>

            {/* Ergo's Approach – Privacy Built On Sigma Protocols */}
            <section
              id="sigma-protocols"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ergo's Approach – Privacy Built On Sigma Protocols
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ergo takes a different approach, using Sigma Protocols to offer a wide range of privacy functionality.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Sigma Protocols are a class of composable zero-knowledge proofs. Like ZCash, these allow users to prove a statement is true without revealing further data. However, unlike ZCash, Ergo's privacy model is far more flexible. Sigma Protocols can be used to implement more complex features, including:
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-center">
                    <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <h4 className="text-orange-400 font-semibold mb-2">Ring Signatures</h4>
                    <p className="text-orange-100 text-sm">(like Monero)</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-center">
                    <Shield className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <h4 className="text-orange-400 font-semibold mb-2">Threshold Multi-sig</h4>
                    <p className="text-orange-100 text-sm">(group spending conditions)</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-center">
                    <Eye className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <h4 className="text-orange-400 font-semibold mb-2">Zero-knowledge Spending</h4>
                    <p className="text-orange-100 text-sm">(conditions)</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Privacy is not just optional, but programmable via smart contracts created with ErgoScript.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Ergo's Sigma Protocols are efficient and lightweight, reducing computational overhead, and they do not require a trusted setup. This allows Ergo to remain transparent by default, but to support privacy-on-demand and more complex DeFi applications. It's possible to build auditable systems, so that users can prove ownership and provenance of coins when they need to, but not reveal this information more widely.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This mixture of mathematical rigor and practical usability makes Ergo's privacy model both highly adaptable and future-proof in a world where compliance and confidentiality are both important.
                </p>
              </div>
            </section>

            {/* Privacy Coin Comparison */}
            <section
              id="comparison"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ergo Vs Monero, ZCash, And Dash
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-4 text-white font-semibold"></th>
                        <th className="text-left p-4 text-purple-400 font-semibold">Monero</th>
                        <th className="text-left p-4 text-blue-400 font-semibold">ZCash</th>
                        <th className="text-left p-4 text-green-400 font-semibold">Dash</th>
                        <th className="text-left p-4 text-orange-400 font-semibold">Ergo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {privacyComparison.map((row, index) => (
                        <tr key={index} className="border-b border-white/5">
                          <td className="p-4 text-white font-medium">{row.feature}</td>
                          <td className="p-4 text-gray-300">{row.monero}</td>
                          <td className="p-4 text-gray-300">{row.zcash}</td>
                          <td className="p-4 text-gray-300">{row.dash}</td>
                          <td className="p-4 text-orange-300 font-medium">{row.ergo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-300 leading-relaxed mt-6">
                  Ergo therefore combines the strength of existing privacy models while avoiding their limitations and drawbacks – offering auditable, flexible privacy without centralization or trusted setup requirements.
                </p>
              </div>
            </section>

            {/* Philosophy Behind Ergo's Privacy Model */}
            <section
              id="philosophy"
              className="mb-12 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-7 h-7 text-orange-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  The Philosophy Behind Ergo's Privacy Model
                </h2>
              </div>

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Like every feature on the Ergo network, privacy has been implemented only after rigorous research, drawing from academic cryptography to ensure a high degree of security as well as flexibility.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  In keeping with Ergo's ethos, privacy is considered a right, but it is an optional feature – not a default setting that breaks auditability and compliance. Use of Sigma Protocols supports this aim, offering programmable privacy.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  In the Ergo ecosystem, privacy isn't just for simple token transfers. It can be applied to any transaction type, making it the ideal solution for confidential DeFi, voting, and other dApps. Ergo integrates privacy into a broader ecosystem, ready for real-world applications.
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

              <div className="bg-black border border-white/20 rounded-3xl p-8 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Privacy coins are experiencing a new wave of interest, as the crypto community once again recognizes that financial privacy is vital for freedom. Government overreach, excessive KYC, cybercrime, and the rise of CBDCs all underscore the need for greater privacy to safeguard personal sovereignty.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  At the same time, institutions are taking unprecedented interest in blockchain, but they require robust privacy before they will invest and move funds on-chain. They also have compliance obligations, just as regular users do if they want to avoid being shut off from the mainstream financial system.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Ergo represents the next stage in privacy coins. It pioneers a blockchain where confidentiality is composable and compliant. In a world where digital surveillance is the norm, Ergo's Sigma Protocols offer a viable foundation for building true freedom money.
                </p>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
                  <p className="text-orange-100 font-medium">
                    Find out more about Ergo's Sigma Protocols, and start building!
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              ❓ Frequently Asked Questions
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

          {/* Essential Documents - Sigma Protocols specific */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
            id="documents"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              📚 Essential Sigma Protocols Documents
            </h2>
            <p className="text-gray-300 mb-8">Dive deeper into Ergo's privacy technology and cryptographic foundations.</p>

            <div className="grid gap-4">
              <a href="/api/pdf/documents/Ergo- A Resilient Platform For Contractual Money.pdf" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">Ergo Platform Whitepaper</h3>
                          <p className="text-gray-400 text-sm">Core Sigma Protocols implementation, privacy design, and cryptographic foundations.</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/doc/privacy/sigma-protocols" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-blue-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">Sigma Protocols Guide</h3>
                          <p className="text-gray-400 text-sm">Complete guide to understanding and implementing privacy features with Sigma Protocols.</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/doc/ergoscript/privacy" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-green-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                          <Code className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-2">ErgoScript Privacy Patterns</h3>
                          <p className="text-gray-400 text-sm">Practical examples and patterns for building privacy-preserving dApps.</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors shrink-0">→</div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.section>

          {/* Share CTA */}
          <ShareCTA
            title="Ergo And Sigma Protocols: The Next Step In Blockchain Privacy"
            url="https://ergoblockchain.org/blog/sigma-protocols-privacy"
            description="Discover how Ergo's composable zero-knowledge proofs offer compliant confidentiality for the next generation of privacy-preserving applications."
            subtitle="If this was useful, share it with privacy advocates and developers building confidential applications."
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

              <a href="/blog/storage-rent" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Eye className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Storage Rent Solution</h3>
                        <p className="text-gray-400 text-sm mb-2">How Ergo solves blockchain state bloat with sustainable economics</p>
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-purple-400 text-xs">
                          Sustainability
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
