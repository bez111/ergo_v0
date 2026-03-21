"use client"

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { useTranslations } from "next-intl"
import dynamic from "next/dynamic"
// Removed framer-motion animations
import {
  ArrowRight,
  Shield,
  Cpu,
  Code,
  Layers,
  Lock,
  Users,
  GitBranch,
  TrendingUp,
  Puzzle,
  Wallet,
  Compass,
  Network,
  Zap,
  Target,
  CheckCircle,
  BookOpen,
  Rocket,
  Terminal,
  Database,
  Fingerprint,
  Globe,
  Building,
  Coins,
  ChevronRight,
  Award,
  Info,
  Brain,
  Sparkles,
  Code2,
  Pickaxe,
  LineChart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  HeroPattern, FeatureGrid, StatsGrid, FeatureCard, CodeSnippet,
  type FeatureGridItem, type StatsGridItem 
} from "@/components/ui-kit/patterns"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FinalCTASimple } from "@/components/home/final-cta-simple"
// Removed animation-related imports

export default function IntroductionClient() {
  const localizedPath = useLocalizedPath()
  const t = useTranslations('startIntroduction')
  const isoDate = new Date().toISOString().slice(0, 10)

  // SSR full content; heavy effects render client-only via dynamic()

  // Core principles data for FeatureGrid
  const principlesGridItems: FeatureGridItem[] = [
    {
      icon: Users,
      title: t("introduction.principles.decentralizedFirst.title"),
      description: t("introduction.principles.decentralizedFirst.description"),
      color: "text-orange-400"
    },
    {
      icon: Shield,
      title: t("introduction.principles.secureReliable.title"),
      description: t("introduction.principles.secureReliable.description"),
      color: "text-brand-secondary-400"
    },
    {
      icon: Code,
      title: t("introduction.principles.powerfulContracts.title"),
      description: t("introduction.principles.powerfulContracts.description"),
      color: "text-status-success-500"
    },
    {
      icon: GitBranch,
      title: t("introduction.principles.longTermFocus.title"),
      description: t("introduction.principles.longTermFocus.description"),
      color: "text-status-info-500"
    }
  ]

  // Technologies for feature cards
  const technologies = [
    {
      icon: Cpu,
      title: t("introduction.technologies.pow.title"),
      subtitle: t("introduction.technologies.pow.subtitle"),
      description: t("introduction.technologies.pow.description"),
      badge: t("introduction.technologies.pow.badge")
    },
    {
      icon: Layers,
      title: t("introduction.technologies.extendedUtxo.title"),
      subtitle: t("introduction.technologies.extendedUtxo.subtitle"),
      description: t("introduction.technologies.extendedUtxo.description"),
      badge: t("introduction.technologies.extendedUtxo.badge")
    },
    {
      icon: Lock,
      title: t("introduction.technologies.sigmaProtocols.title"),
      subtitle: t("introduction.technologies.sigmaProtocols.subtitle"),
      description: t("introduction.technologies.sigmaProtocols.description"),
      badge: t("introduction.technologies.sigmaProtocols.badge")
    }
  ]

  // Removed animation variants

  return (
    <BackgroundWrapper>
      {/* Schema.org JSON-LD */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ergoblockchain.org/" },
            { "@type": "ListItem", position: 2, name: "Introduction", item: "https://www.ergoblockchain.org/start/introduction" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Ergo Blockchain — PoW eUTXO Smart Contracts & Sigma Protocols",
          description:
            "Introduction to Ergo: ASIC-resistant PoW, eUTXO smart contracts, Sigma (ZK) protocols, storage rent, NIPoPoWs.",
          image: "https://www.ergoblockchain.org/og/intro.png",
          datePublished: isoDate,
          dateModified: isoDate,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://www.ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://www.ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://www.ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://www.ergoblockchain.org/start/introduction",
        }}
      />
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: t("introduction.faq.eutxoModel.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("introduction.faq.eutxoModel.answer"),
              },
            },
            {
              "@type": "Question",
              name: t("introduction.faq.sigmaProtocols.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("introduction.faq.sigmaProtocols.answer"),
              },
            },
            {
              "@type": "Question",
              name: t("introduction.faq.pow.question"),
              acceptedAnswer: {
                "@type": "Answer",
                text: t("introduction.faq.pow.answer"),
              },
            },
          ],
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Start', href: '/start' },
            { name: 'Introduction', href: '/start/introduction' },
          ]}
          className="mb-8 pt-24"
        />

        {/* What is Ergo Section */}
        <section 
          className="py-16 pt-8"
          id="what-is-ergo"
        >
          {/* Mission Statement - Hero Slogan */}
          <div
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Ergo Blockchain — PoW eUTXO Smart Contracts & Sigma Protocols
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              ASIC-resistant Layer-1 PoW with eUTXO, auditable smart contracts, and Sigma-based privacy. Built for open, verifiable money.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-black/80 border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-orange-400" aria-hidden="true" />
                <span className="text-white">What is <span className="text-orange-400">Ergo</span>?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ergo is designed for developing secure and powerful decentralized applications (dApps) and financial contracts. 
                It builds on a decade of blockchain theory and development, combining established principles with new research.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Its mission is to provide tools for decentralized and accessible financial systems — empowering people with economic freedom without intermediaries. Learn about the
                <Link href={localizedPath("technology/eutxo-model")} className="underline hover:opacity-80 ml-1">{t("introduction.whatIsErgo.eutxoLink")}</Link>,
                <Link href={localizedPath("technology/secure-pow")} className="underline hover:opacity-80 ml-1">{t("introduction.whatIsErgo.powLink")}</Link>,
                <Link href={localizedPath("technology/storage-rent")} className="underline hover:opacity-80 ml-1">{t("introduction.whatIsErgo.storageRentLink")}</Link>, and
                <Link href={localizedPath("technology/privacy-features")} className="underline hover:opacity-80 ml-1">{t("introduction.whatIsErgo.privacyLink")}</Link>.
              </p>
              {/* Why Ergo (keywords) */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">{t("introduction.whyErgo.title")}</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>{t("introduction.whyErgo.eutxo")}</li>
                  <li>{t("introduction.whyErgo.sigma")}</li>
                  <li>{t("introduction.whyErgo.pow")}</li>
                  <li>{t("introduction.whyErgo.storageRent")}</li>
                </ul>
              </div>
              
              {/* Alert with key info */}
              <Alert className="border-orange-500/50 bg-orange-500/20 rounded-xl backdrop-blur-sm shadow-lg">
                <Info className="w-4 h-4 text-orange-400" />
                <div className="ml-3">
                  <h4 className="font-semibold text-orange-400">{t("introduction.keyInnovation.title")}</h4>
                  <AlertDescription className="text-gray-300 text-sm">
                    Ergo combines the security of Bitcoin's UTXO model with the expressiveness of Ethereum's smart contracts, 
                    creating a unique platform for complex financial applications.
                  </AlertDescription>
                </div>
              </Alert>
              <div className="mt-4 text-xs text-neutral-500">
                References: <a href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">{t("introduction.references.autolykos")}</a> ·
                <a href="https://github.com/ergoplatform/ergo" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 ml-2">{t("introduction.references.ergoGithub")}</a>
              </div>
            </div>

            <div
              className="space-y-4"
            >
              {/* Removed Cryptographic Visualization */}
              <div className="relative">
                
                {/* Feature highlights */}
                <ul className="space-y-4">
                  {[
                    { icon: Fingerprint, title: t("introduction.featureHighlights.privacyFirst.title"), desc: t("introduction.featureHighlights.privacyFirst.description") },
                    { icon: Database, title: t("introduction.featureHighlights.storageRent.title"), desc: t("introduction.featureHighlights.storageRent.description") },
                    { icon: Network, title: t("introduction.featureHighlights.lightClients.title"), desc: t("introduction.featureHighlights.lightClients.description") },
                    { icon: Award, title: t("introduction.featureHighlights.fairLaunch.title"), desc: t("introduction.featureHighlights.fairLaunch.description") }
                  ].map((feature, index) => (
                    <li
                      key={feature.title}
                      className="bg-black/80 border-white/10 rounded-3xl p-4 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles using FeatureGrid */}
        <section
          className="py-24"
          id="core-principles"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core <span className="text-orange-400">{t("introduction.corePrinciples.title")}</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-6">
              Built on fundamental values that ensure long-term sustainability and real-world utility
            </p>
            <div className="bg-black/60 border border-white/20 rounded-2xl p-6">
              <p className="text-base text-gray-300 leading-relaxed text-center whitespace-nowrap">
                Ergo combines <strong className="text-orange-400">Sound Money</strong> (hard, predictable supply) with <strong className="text-orange-400">Open Money</strong> (permissionless, verifiable access) — creating the foundation for truly free finance.
              </p>
            </div>
          </div>
          
          <FeatureGrid items={principlesGridItems} columns={4} />
        </section>

        {/* Key Technologies Section */}
        <section
          className="py-16"
          id="key-technologies"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key <span className="text-orange-400">{t("introduction.keyTechnologies.title")}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced cryptography and innovative consensus mechanisms power the Ergo platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <Link 
                key={tech.title}
                href={`/technology/${tech.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-3xl h-full"
              >
                <Card className="bg-black/80 border-white/10 rounded-3xl p-6 h-full hover:bg-black/90 hover:border-orange-400/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer flex flex-col min-h-[140px]">
                  {/* Header with Icon and Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
                      <tech.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-500 transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{tech.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm flex-1 group-hover:text-white transition-colors">
                    {tech.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          {/* ErgoScript Code Example */}
          <CodeSnippet
            title={t("introduction.ergoScriptExample.title")}
            language="scala"
            filename={t("introduction.ergoScriptExample.filename")}
            code={`{
  val deadline = SELF.R4[Long].get
  sigmaProp(
    if (HEIGHT >= deadline) {
      // After deadline, only recipient can spend
      recipientPK
    } else {
      // Before deadline, only sender can spend
      senderPK
    }
  )
}`}
          />
        </section>

        {/* What Makes Ergo Different Section */}
        <section
          className="py-16 border-t border-b border-neutral-700"
          id="what-makes-different"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="text-orange-400">{t("introduction.whatMakesErgoDifferent.title")}</span> ERGO DIFFERENT
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Ergo combines proven cryptographic techniques with innovative blockchain design to
              create a platform that's secure, scalable, and sustainable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t("introduction.whatMakesErgoDifferent.fairLaunch.title"),
                description: t("introduction.whatMakesErgoDifferent.fairLaunch.description"),
                icon: Shield,
              },
              {
                title: t("introduction.whatMakesErgoDifferent.eutxoErgoScript.title"),
                description: t("introduction.whatMakesErgoDifferent.eutxoErgoScript.description"),
                icon: Zap,
              },
              {
                title: t("introduction.whatMakesErgoDifferent.storageRent.title"),
                description: t("introduction.whatMakesErgoDifferent.storageRent.description"),
                icon: Database,
              },
              {
                title: t("introduction.whatMakesErgoDifferent.researchDriven.title"),
                description: t("introduction.whatMakesErgoDifferent.researchDriven.description"),
                icon: BookOpen,
              },
              {
                title: t("introduction.whatMakesErgoDifferent.robustPrivacy.title"),
                description: t("introduction.whatMakesErgoDifferent.robustPrivacy.description"),
                icon: Lock,
              },
              {
                title: t("introduction.whatMakesErgoDifferent.communityLed.title"),
                description: t("introduction.whatMakesErgoDifferent.communityLed.description"),
                icon: Users,
              },
            ].map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="bg-black/80 border-white/10 rounded-3xl p-6 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Choose Your Path Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your <span className="text-orange-400">Path</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tailored guides for different types of Ergo users
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/miners"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Pickaxe className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">For Miners</h3>
                    <p className="text-orange-400 text-sm">GPU-friendly PoW</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  ASIC-resistant Autolykos algorithm, fair mining rewards, and accessible hardware requirements
                </p>
              </Link>

              <Link 
                href="/hodlers"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <LineChart className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">For Holders</h3>
                    <p className="text-orange-400 text-sm">Long-term value</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Sound tokenomics, DeFi opportunities, and a sustainable ecosystem built for the future
                </p>
              </Link>

              <Link 
                href="/developers"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Code className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">For Builders</h3>
                    <p className="text-orange-400 text-sm">Powerful smart contracts</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  ErgoScript, eUTXO model, SDKs, and developer grants to build the next generation of dApps
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Visible mini-FAQ matching JSON-LD */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-4">
              {[{
                q: t("introduction.faq.eutxoModel.question"),
                a: t("introduction.faq.eutxoModel.answer"),
              }, {
                q: t("introduction.faq.sigmaProtocols.question"),
                a: t("introduction.faq.sigmaProtocols.answer"),
              }, {
                q: t("introduction.faq.pow.question"),
                a: t("introduction.faq.pow.answer"),
              }].map(item => (
                <div key={item.q} className="bg-black/80 border-white/10 rounded-3xl p-4 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.q}</h3>
                  <p className="text-neutral-300 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-16 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What's <span className="text-orange-400">Next?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Start exploring the Ergo ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/wallet"
                className="bg-black/80 border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Get Ergo Wallet</h3>
                    <p className="text-orange-400 text-sm">Start Securely</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Download a secure wallet to store ERG and interact with dApps
                </p>
              </Link>

              <Link 
                href="/ecosystem"
                className="bg-black/80 border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Compass className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Explore Ecosystem</h3>
                    <p className="text-orange-400 text-sm">Discover Applications</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Find DeFi protocols, wallets, NFT platforms, and other dApps built on Ergo
                </p>
              </Link>

              <Link 
                href="/compare"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Compare Blockchains</h3>
                    <p className="text-orange-400 text-sm">Why Ergo vs others</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  See how Ergo's PoW, eUTXO, privacy, and sustainability stack up against Bitcoin, Ethereum, Cardano, and others
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <FinalCTASimple
          title="Start Your Ergo Journey"
          description="Get beginner-friendly guides, tutorials, and updates delivered to your inbox."
        />

      </div>
    </BackgroundWrapper>
  )
}
