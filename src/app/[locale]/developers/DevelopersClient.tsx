"use client"

/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import {
  Code,
  Shield,
  Zap,
  Users,
  Bot,
  CreditCard,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Github,
  Eye,
  Rocket,
  Lock,
  Terminal,
  Network,
  Activity,
  Hourglass,
  Layers,
  Cpu,
  Database,
  Infinity as InfinityIcon,
  Box,
  Settings,
  CircleDollarSign,
  ArrowRightLeft,
  FileCode,
  BookMarked,
  Search,
  Lightbulb,
  GraduationCap,
  Coins,
} from "lucide-react"

import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
import { networkMetrics, formatHashrate, formatTVL, formatSupplyShort, formatActiveNodes, formatTransactionsPerDay } from "@/lib/network-metrics"

// Technology Index icons (ordered to match JSON indices 0–11)
const technologyIcons = [Layers, Code, Cpu, Database, Lock, InfinityIcon, Eye, Box, ArrowRightLeft, Rocket, Settings, CircleDollarSign]
const technologySlugs = [
  "eutxo-model", "ergoscript", "secure-pow", "storage-rent", "privacy-features",
  "nipopows", "oracle-pools", "native-tokens", "babel-fees", "subblocks",
  "velvet-forks", "adaptive-emission",
]

// Why Build icons (ordered to match JSON indices 0–3)
const whyBuildIcons = [Shield, Lock, Zap, Users]

// Quick Start icons (ordered to match JSON indices 0–2)
const quickStartIcons = [Terminal, Network, Code]
const quickStartCodes = [
  "npm install @fleet-sdk/core",
  `import { ErgoAddress, Network } from "@fleet-sdk/core";\nconst network = Network.Testnet;`,
  `const tx = new TransactionBuilder(height)\n  .from(inputs)\n  .to(new OutputBuilder(amount, address))\n  .sendChangeTo(changeAddress)\n  .build();`,
]

// SDK urls (ordered to match JSON indices 0–3)
const sdkUrls = [
  { url: "https://fleet-sdk.github.io/docs/", github: "https://github.com/fleet-sdk/fleet", recommended: true },
  { url: "https://github.com/ergoplatform/ergo-appkit", github: "https://github.com/ergoplatform/ergo-appkit" },
  { url: "https://github.com/ergoplatform/sigma-rust", github: "https://github.com/ergoplatform/sigma-rust" },
  { url: "https://github.com/ergo-pad/ergpy", github: "https://github.com/ergo-pad/ergpy" },
]

// Agent Economy links (href/icon only — text comes from t())
const agentEconomyLinks = [
  { href: "/agent-economy", icon: Bot },
  { href: "/build/agent-payments", icon: CreditCard },
  { href: "/demos", icon: Activity },
]

// Learning Resources (href/icon only — text comes from t())
const learningResourceHrefs = [
  { href: "/learn/ergoscript", icon: GraduationCap },
  { href: "/patterns", icon: FileCode },
  { href: "/playbooks", icon: BookMarked },
  { href: "/learn/glossary", icon: BookOpen },
]

// Comparison status values (not translated — used for badge colour only)
const comparisonStatuses = [
  { bitcoin: "good", ethereum: "bad", ergo: "good" },
  { bitcoin: "bad", ethereum: "warning", ergo: "good" },
  { bitcoin: "bad", ethereum: "bad", ergo: "good" },
  { bitcoin: "warning", ethereum: "bad", ergo: "good" },
]

export function DevelopersClient() {
  const t = useTranslations("developersPage")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const breadcrumbItems = [
    { name: t("breadcrumbs.home"), href: "/" },
    { name: t("breadcrumbs.developers"), href: "/developers" },
  ]

  const heroCodeSnippet = `// Simple ErgoScript contract
{
  sigmaProp(
    HEIGHT < deadline &&
    PK(ownerPubKey)
  )
}`

  return (
    <BackgroundWrapper>
      <div className="min-h-screen relative pb-24">
        <Breadcrumbs items={breadcrumbItems} variant="hidden" />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-28 pb-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
                  <Terminal className="w-4 h-4" />
                  {t("hero.badge")}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  {t("hero.title")}
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl border border-orange-500/50">
                    <Link href="/learn/ergoscript">
                      <Rocket className="w-5 h-5 mr-2" />
                      {t("hero.buttons.startLearning")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <Link href="/patterns">
                      <FileCode className="w-5 h-5 mr-2" />
                      {t("hero.buttons.browsePatterns")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                    <a href="https://docs.ergoplatform.com" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-5 h-5 mr-2" />
                      {t("hero.buttons.docs")}
                    </a>
                  </Button>
                </div>
              </div>
              <motion.div
                className="relative z-10 bg-black/80 border border-white/10 rounded-3xl p-6 font-mono text-sm overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <pre className="text-green-400 whitespace-pre-wrap break-all">
                  {heroCodeSnippet}
                </pre>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Why Build on Ergo */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              {t("whyBuild.title")} <span className="text-orange-400">{t("whyBuild.titleHighlight")}</span>?
            </h2>
            <div className="space-y-6">
              {whyBuildIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{t(`whyBuild.items.${index}.title`)}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t(`whyBuild.items.${index}.description`)}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start with Fleet SDK */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("quickStart.title")} <span className="text-orange-400">{t("quickStart.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {t("quickStart.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickStartIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 hover:border-orange-400/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white">{t(`quickStart.steps.${index}.title`)}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">{t(`quickStart.steps.${index}.description`)}</p>
                    <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs text-orange-200 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{quickStartCodes[index]}</pre>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="https://fleet-sdk.github.io/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium"
              >
                {t("quickStart.readFullDocs")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Index */}
        <section className="py-16 px-4" id="technology">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("technologyIndex.title")} <span className="text-orange-400">{t("technologyIndex.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {t("technologyIndex.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologySlugs.map((slug, index) => {
                const Icon = technologyIcons[index]
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <Link href={`/technology/${slug}`}>
                      <Card className="h-full bg-black/60 border border-white/10 rounded-2xl p-4 hover:bg-black/80 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors truncate">
                              {t(`technologyIndex.items.${index}.title`)}
                            </h3>
                            <p className="text-xs text-neutral-500 truncate">{t(`technologyIndex.items.${index}.description`)}</p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/technology">
                  <Layers className="w-5 h-5 mr-2" />
                  {t("technologyIndex.viewAll")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SDKs & Libraries */}
        <section className="py-16 px-4" id="sdks">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("sdks.title")} <span className="text-orange-400">{t("sdks.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {t("sdks.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sdkUrls.map((sdk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full bg-black/80 border rounded-3xl p-6 hover:bg-black/90 transition-all duration-300 ${sdk.recommended ? 'border-orange-400/50' : 'border-white/10 hover:border-orange-400/40'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{t(`sdks.items.${index}.name`)}</h3>
                          {sdk.recommended && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                              {t("sdks.recommended")}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-orange-400">{t(`sdks.items.${index}.language`)}</p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={sdk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-orange-400 hover:border-orange-400/40 transition-all"
                        >
                          <BookOpen className="w-5 h-5" />
                        </a>
                        <a
                          href={sdk.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-orange-400 hover:border-orange-400/40 transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-neutral-400">{t(`sdks.items.${index}.description`)}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("learningResources.title")} <span className="text-orange-400">{t("learningResources.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {t("learningResources.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningResourceHrefs.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={resource.href}>
                    <Card className="h-full bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 group-hover:bg-orange-500/30 transition-colors">
                          <resource.icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                          {t(`learningResources.items.${index}.tag`)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {t(`learningResources.items.${index}.title`)}
                      </h3>
                      <p className="text-neutral-400 text-sm">{t(`learningResources.items.${index}.description`)}</p>
                      <div className="mt-4 flex items-center gap-1 text-orange-400 text-sm font-medium group-hover:text-orange-300">
                        {t("learningResources.explore")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Economy Stack */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">{t("agentEconomy.badge")}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("agentEconomy.title")}</h2>
              <p className="text-neutral-400 mb-8 max-w-2xl">
                {t("agentEconomy.description")}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {agentEconomyLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block bg-black/60 border border-white/10 hover:border-orange-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <item.icon className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/10">{t(`agentEconomy.items.${index}.tag`)}</span>
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-orange-100 transition-colors">{t(`agentEconomy.items.${index}.title`)}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{t(`agentEconomy.items.${index}.description`)}</p>
                    <div className="mt-3 flex items-center gap-1 text-orange-400 text-xs font-medium">
                      {t("learningResources.explore")} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("devTools.title")} <span className="text-orange-400">{t("devTools.titleHighlight")}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://explorer.ergoplatform.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Search className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t("devTools.explorer.title")}</h3>
                    <p className="text-sm text-neutral-400">{t("devTools.explorer.description")}</p>
                  </div>
                </div>
              </a>

              <a
                href="https://testnet.ergofaucet.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Coins className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t("devTools.faucet.title")}</h3>
                    <p className="text-sm text-neutral-400">{t("devTools.faucet.description")}</p>
                  </div>
                </div>
              </a>

              <a
                href="https://marketplace.visualstudio.com/items?itemName=ErgoPlatform.ergoscript"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Lightbulb className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{t("devTools.vscode.title")}</h3>
                    <p className="text-sm text-neutral-400">{t("devTools.vscode.description")}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="py-16 px-4" id="comparison">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t("comparison.title")} <span className="text-orange-400">{t("comparison.titleHighlight")}</span>
            </h2>
            <Card className="bg-black/80 border border-white/10 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[500px]">
                    <thead>
                      <tr className="border-b border-neutral-700">
                        <th className="text-left p-4 font-semibold text-orange-400">{t("comparison.headers.criterion")}</th>
                        <th className="text-left p-4 font-semibold text-[#F7931A]">{t("comparison.headers.bitcoin")}</th>
                        <th className="text-left p-4 font-semibold text-[#627EEA]">{t("comparison.headers.ethereum")}</th>
                        <th className="text-left p-4 font-semibold text-orange-400">{t("comparison.headers.ergo")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                      {comparisonStatuses.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                          <th scope="row" className="p-4 font-medium text-white">{t(`comparison.rows.${rowIndex}.criterion`)}</th>
                          <td className="p-4">
                            <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${
                              row.bitcoin === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                              row.bitcoin === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                              "bg-red-500/20 text-red-300 border-red-500/30"
                            }`}>
                              {t(`comparison.rows.${rowIndex}.bitcoin`)}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${
                              row.ethereum === "good" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" :
                              row.ethereum === "warning" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                              "bg-red-500/20 text-red-300 border-red-500/30"
                            }`}>
                              {t(`comparison.rows.${rowIndex}.ethereum`)}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <Badge className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                              {t(`comparison.rows.${rowIndex}.ergo`)}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                <Link href="/blog/eutxo-vs-accounts">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t("comparison.readMore")}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Live Network Health */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              {t("networkHealth.title")} <span className="text-orange-400">{t("networkHealth.titleHighlight")}</span>
            </h2>
            <p className="text-center text-neutral-400 mb-12">
              {t("networkHealth.subtitle")}
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {([
                { title: t("networkHealth.metrics.hashrate"), value: formatHashrate(networkMetrics), icon: Zap },
                { title: t("networkHealth.metrics.txDay"), value: formatTransactionsPerDay(networkMetrics), icon: Activity },
                { title: t("networkHealth.metrics.nodes"), value: formatActiveNodes(networkMetrics), icon: Network },
                { title: t("networkHealth.metrics.tvl"), value: formatTVL(networkMetrics), icon: Coins },
                { title: t("networkHealth.metrics.supply"), value: formatSupplyShort(networkMetrics), icon: CircleDollarSign },
                { title: t("networkHealth.metrics.emission"), value: t("networkHealth.emissionLeft", { amount: networkMetrics.supply.left }), icon: Hourglass },
              ] as const).map((metric, index) => (
                <Card key={index} className="bg-black/60 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4 text-orange-400" />
                    <span className="text-xs text-neutral-400">{metric.title}</span>
                  </div>
                  <p className="text-lg font-bold text-orange-400">{metric.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("community.title")} <span className="text-orange-400">{t("community.titleHighlight")}</span>
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                {t("community.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://discord.gg/ergo-platform-668903786361651200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <MessageSquare className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{t("community.discord.title")}</h3>
                        <p className="text-orange-400 text-sm">{t("community.discord.subtitle")}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  {t("community.discord.description")}
                </p>
              </a>

              <a
                href="https://github.com/ergoplatform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Github className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{t("community.github.title")}</h3>
                        <p className="text-orange-400 text-sm">{t("community.github.subtitle")}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-300">
                  {t("community.github.description")}
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Developer FAQ */}
        <section className="max-w-4xl mx-auto py-16 px-4" id="faq">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            {t("faq.title")} <span className="text-orange-400">{t("faq.titleHighlight")}</span>
          </h2>
          <div className="space-y-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <Card key={index} className="bg-black/80 border-white/10 backdrop-blur-sm rounded-3xl">
                <Collapsible
                  open={openFAQ === index}
                  onOpenChange={(open) => setOpenFAQ(open ? index : null)}
                >
                  <CollapsibleTrigger asChild>
                    <button className="w-full">
                      <CardContent className="p-6 flex items-center justify-between hover:bg-black/70 transition-colors rounded-3xl">
                        <h3 className="text-lg font-semibold text-left text-white pr-4">{t(`faq.items.${index}.question`)}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        />
                      </CardContent>
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-neutral-300 leading-relaxed">{t(`faq.items.${index}.answer`)}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-neutral-300 mb-6 max-w-xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl">
                  <Link href="/learn/ergoscript">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {t("cta.startCourse")}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-orange-400/50 px-6 py-3 rounded-xl">
                  <Link href="/ecosystem">
                    <Eye className="w-5 h-5 mr-2" />
                    {t("cta.exploreEcosystem")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <FinalCTASimple
          title={t("emailCapture.title")}
          description={t("emailCapture.description")}
        />
      </div>
    </BackgroundWrapper>
  )
}
