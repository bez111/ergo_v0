"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ArrowRight, Box, Database, Shield, Zap, Eye, Code, ExternalLink, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { HexagonalGrid } from "@/components/ui-kit/signature-effects"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function EutxoClient() {
  const t = useTranslations("technology.eutxoModel")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const modelComparison = [
    { aspect: "State Management", utxo: "No global balances — only unspent outputs", account: "Global state with account balances and storage", advantage: "eUTXO" },
    { aspect: "Security", utxo: "The reentrancy vulnerability class common to account-based systems is absent in eUTXO; script execution cost is bounded (fees depend on mempool conditions)", account: "Re-entrancy class typical for account-based systems; gas costs can be unpredictable depending on network conditions", advantage: "eUTXO" },
    { aspect: "Parallelism", utxo: "Independent boxes enable parallel processing", account: "State contention forces sequential processing", advantage: "eUTXO" },
    { aspect: "Privacy", utxo: "UTXO mixing, Σ-protocols for advanced privacy", account: "Global state makes privacy harder by default", advantage: "eUTXO" },
    { aspect: "Token Handling", utxo: "Tokens are first-class citizens in boxes", account: "Requires separate contract logic (ERC-20/721)", advantage: "eUTXO" },
    { aspect: "Learning Curve", utxo: "Must 'think in boxes', different paradigm", account: "More intuitive for traditional developers", advantage: "Account" },
  ]

  const boxComponents = [
    { name: "Value", description: "ERG + custom tokens", icon: <Database className="w-6 h-6" />, color: "from-orange-500/20 to-orange-500/5" },
    { name: "Guarding Script", description: "ErgoScript code controlling spending conditions", icon: <Shield className="w-6 h-6" />, color: "from-cyan-500/20 to-cyan-500/5" },
    { name: "Registers (R0–R9)", description: "User-defined: R4–R9 (R0–R3 are protocol-reserved)", icon: <Box className="w-6 h-6" />, color: "from-purple-500/20 to-purple-500/5" },
    { name: "Metadata", description: "Creation height, boxId (derived from creating tx)", icon: <Code className="w-6 h-6" />, color: "from-green-500/20 to-green-500/5" },
  ]

  const transactionSteps = [
    { step: 1, title: "Inputs", description: "Consume existing boxes ('spend' them)", icon: <Database className="w-6 h-6" /> },
    { step: 2, title: "Outputs", description: "Create new boxes with value and conditions", icon: <Box className="w-6 h-6" /> },
    { step: 3, title: "Validation", description: "Check scripts, balances, and protocol rules", icon: <CheckCircle className="w-6 h-6" /> },
  ]

  const useCases = [
    { title: "DeFi Protocols", description: "DEXs, lending, yield farming with composable boxes", icon: <Zap className="w-8 h-8" />, href: "/use/stablecoins" },
    { title: "NFT Marketplaces", description: "Native tokens as NFTs with rich metadata", icon: <Eye className="w-8 h-8" />, href: "/use/nfts" },
    { title: "Privacy Applications", description: "Mixing protocols using UTXO anonymity sets", icon: <Shield className="w-8 h-8" />, href: "/use/privacy" },
    { title: "Cross-Chain Bridges", description: "Trustless bridges using NIPoPoWs and eUTXO", icon: <ArrowRight className="w-8 h-8" />, href: "/use/bridges" },
  ]

  const faqData = [
    { question: "What is the eUTXO model?", answer: "The eUTXO (Extended UTXO) model combines Bitcoin's UTXO security with smart contract capabilities, enabling parallel execution and eliminating reentrancy attacks." },
    { question: "How does eUTXO handle shared state?", answer: "Shared state is managed through 'shared boxes' that multiple transactions can reference. Advanced dApps use techniques like batching, state splitting, or stateless contracts." },
    { question: "What are the main advantages over Bitcoin's UTXO?", answer: "eUTXO extends Bitcoin's UTXO with programmable logic, custom data storage in registers, and support for complex smart contracts while maintaining the security and parallelism benefits of the UTXO model." },
    { question: "Why is eUTXO better for DeFi?", answer: "eUTXO enables composable, predictable smart contracts with deterministic fees, no front-running, and parallel transaction processing for better throughput." },
  ]

  const lastUpdated = "2024-01-15"

  return (
    <div className="min-h-screen relative">
      <div className="sr-only">
        <Breadcrumbs items={[{ name: "Technology", href: "/technology" }, { name: "eUTXO Model", href: "/technology/eutxo-model" }]} className="mb-8" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <HexagonalGrid className="opacity-[0.02]" />
      </div>

      <main>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
          <motion.section variants={itemVariants} className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">{t("title")}</h1>
                  <p className="text-sm text-neutral-500 mb-4">{t("lastUpdated")}: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-2xl">{t("subtitle")}</p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    {t("description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs/eutxo">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                        {t("buttons.readDocumentation")}
                      </Button>
                    </Link>
                    <a href="https://ergoplatform.org/en/blog/2021-04-26-the-eutxo-model/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl">
                        {t("buttons.readBlogPost")}
                      </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#transaction-flow" className="hover:text-orange-400">{t("navigation.transactionFlow")}</a></li>
                      <li><a href="#key-differences" className="hover:text-orange-400">{t("navigation.keyDifferences")}</a></li>
                      <li><a href="#use-cases" className="hover:text-orange-400">{t("navigation.useCases")}</a></li>
                      <li><a href="#faq" className="hover:text-orange-400">{t("navigation.faq")}</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm p-8 rounded-xl hover:border-orange-500/30 transition-colors">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">{t("boxStructure.title")}</h3>
                        <div className="space-y-4">
                          {boxComponents.map((component) => (
                            <div key={component.name} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
                              <div className="flex items-center space-x-3">
                                <span aria-hidden="true" className="text-orange-400">{component.icon}</span>
                                <div>
                                  <h4 className="font-semibold text-white">{component.name}</h4>
                                  <p className="text-sm text-neutral-400">{component.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Introduction */}
          <motion.section variants={itemVariants} className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("introduction.title")}</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                {t("introduction.description")}
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {t("introduction.details")}
              </p>
            </div>
          </motion.section>

          {/* Model Comparison */}
          <motion.section variants={itemVariants} id="key-differences" className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("comparison.title")}</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="text-left p-6 text-white font-semibold">{t("comparison.headers.aspect")}</th>
                      <th className="text-left p-6 text-white font-semibold">{t("comparison.headers.utxo")}</th>
                      <th className="text-left p-6 text-white font-semibold">{t("comparison.headers.account")}</th>
                      <th className="text-left p-6 text-white font-semibold">{t("comparison.headers.advantage")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelComparison.map((row, index) => (
                      <tr key={index} className="border-b border-neutral-700/50 hover:bg-neutral-800/30">
                        <td className="p-6 font-medium text-orange-400">{row.aspect}</td>
                        <td className="p-6 text-neutral-300 text-sm">{row.utxo}</td>
                        <td className="p-6 text-neutral-300 text-sm">{row.account}</td>
                        <td className="p-6">
                          <Badge variant={row.advantage === "eUTXO" ? "default" : "secondary"} className={row.advantage === "eUTXO" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" : ""}>
                            {row.advantage}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* Transaction Flow */}
          <motion.section variants={itemVariants} id="transaction-flow" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("transactionFlow.title")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {transactionSteps.map((step) => (
                  <Card key={step.step} className="bg-neutral-900/50 border-neutral-700 relative">
                    <CardContent className="p-6">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="text-orange-400 mb-4">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-neutral-300">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section variants={itemVariants} id="use-cases" className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("useCases.title")}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase) => (
                  <Card key={useCase.title} className="bg-neutral-900/50 border-neutral-700 hover:border-orange-500/30 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="text-orange-400 mb-4 flex justify-center">{useCase.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-neutral-300 text-sm mb-4">{useCase.description}</p>
                      <Link href={useCase.href} className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                        {t("useCases.learnMore")} →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section variants={itemVariants} id="faq" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">{t("faq.title")}</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Collapsible key={index} open={openFAQ === index} onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    <Card className="bg-neutral-900/50 border-neutral-700">
                      <CollapsibleTrigger asChild>
                        <CardContent className="p-6 cursor-pointer hover:bg-neutral-800/30 transition-colors">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                            <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} />
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants} className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/eutxo">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                    {t("cta.buttons.readDocumentation")}
                  </Button>
                </Link>
                <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl">
                    {t("cta.buttons.viewOnGitHub")}
                  </Button>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <SchemaOrg type="FAQPage" data={{ '@type': 'FAQPage', mainEntity: faqData.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
      <SchemaOrg type="BreadcrumbList" data={{ '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Technology', item: 'https://ergoblockchain.org/technology' }, { '@type': 'ListItem', position: 2, name: 'eUTXO Model', item: 'https://ergoblockchain.org/technology/eutxo-model' } ] }} />
      <SchemaOrg type="TechArticle" data={{ '@type': 'TechArticle', headline: 'eUTXO Model — UTXO vs Account', description: 'Ergo eUTXO explained: security, parallelism, programmability, and use cases.', image: 'https://ergoblockchain.org/og/eutxo.png', datePublished: '2024-01-01', dateModified: lastUpdated, keywords: 'eUTXO, UTXO vs account, Ergo, smart contracts', author: { '@type': 'Organization', name: 'Ergo Foundation', url: 'https://ergoblockchain.org' }, publisher: { '@type': 'Organization', name: 'Ergo Platform', url: 'https://ergoblockchain.org', logo: { '@type': 'ImageObject', url: 'https://ergoblockchain.org/og/logo-512.png' } }, mainEntityOfPage: 'https://ergoblockchain.org/technology/eutxo-model' }} />
    </div>
  )
} 