"use client"

import Link from "next/link"
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
  Code2
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
// Dynamic hexagonal grid for background
const HexagonalGrid = dynamic(() => import("@/components/ui-kit/signature-effects").then(m => m.HexagonalGrid), { ssr: false })
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Schema.org JSON-LD */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://ergoblockchain.org/" },
            { "@type": "ListItem", position: 2, name: "Introduction", item: "https://ergoblockchain.org/start/introduction" },
          ],
        }}
      />
      <SchemaOrg
        type="TechArticle"
        data={{
          "@type": "TechArticle",
          headline: "Ergo — PoW smart‑contract platform (eUTXO & Sigma Protocols)",
          description:
            "Introduction to Ergo: ASIC-resistant PoW, eUTXO smart contracts, Sigma (ZK) protocols, storage rent, NIPoPoWs.",
          image: "https://ergoblockchain.org/og/intro.png",
          datePublished: isoDate,
          dateModified: isoDate,
          author: { "@type": "Organization", name: "ergoblockchain.org", url: "https://ergoblockchain.org" },
          publisher: {
            "@type": "Organization",
            name: "ergoblockchain.org",
            url: "https://ergoblockchain.org",
            logo: { "@type": "ImageObject", url: "https://ergoblockchain.org/favicon.ico" },
          },
          mainEntityOfPage: "https://ergoblockchain.org/start/introduction",
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
      {/* Background Effects */}
      <HexagonalGrid className="opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        
        {/* Removed jump links per request */}

        {/* What is Ergo Section */}
        <section 
          className="py-16 pt-32"
          id="what-is-ergo"
        >
          {/* Mission Statement - Hero Slogan */}
          <div
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Ergo — PoW smart‑contract platform with eUTXO & Sigma Protocols
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              A next‑generation, ASIC‑resistant Proof‑of‑Work platform with predictable, auditable smart contracts and native privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
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
              <Alert className="border-orange-500/30 bg-orange-500/10 rounded-xl">
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
                      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on fundamental values that ensure long-term sustainability and real-world utility
            </p>
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
              <div
                key={tech.title}
                className="h-full"
              >
                <Link href={`/technology/${tech.title.toLowerCase().replace(/\s+/g, '-')}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-xl">
                  <Card className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 h-full hover:border-orange-500/50 hover:bg-neutral-900/80 transition-all duration-300 cursor-pointer">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                      <tech.icon className="w-6 h-6 text-orange-400" aria-hidden="true" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{tech.subtitle}</p>
                    <p className="text-gray-300 text-sm mb-4 min-h-[3rem]">
                      {tech.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/30">
                        {tech.badge}
                      </Badge>
                      <div className="flex items-center text-orange-400 text-sm font-semibold">
                        {t("introduction.keyTechnologies.learnMore")}
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
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
                  className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 hover:border-orange-400/50 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer"
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
                <div key={item.q} className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.q}</h3>
                  <p className="text-neutral-300 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Glitch Effects */}
        <section
          className="py-16 text-center relative"
        >
          <Card className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden hover:border-orange-500/30">
            {/* Removed Glitch Hex decoration */}
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("introduction.cta.readyToDiveIn.title")}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t("introduction.cta.readyToDiveIn.description")}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div>
                <Button 
                  asChild 
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl shadow-lg"
                >
                  <Link href="/wallet">
                    <Wallet className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t("introduction.cta.getErgoWallet.button")}
                  </Link>
                </Button>
              </div>
              
              <div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  <Link href="/ecosystem" prefetch={false}>
                    <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t("introduction.cta.exploreEcosystem.button")}
                  </Link>
                </Button>
              </div>
              
              <div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-neutral-700 text-gray-300 hover:bg-neutral-800 hover:text-white px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                  <Link href="/docs" prefetch={false}>
                    <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t("introduction.cta.documentation.button")}
                  </Link>
                </Button>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-6">{t("introduction.cta.lastUpdated")}</p>
          </Card>
        </section>

      </div>
    </div>
  )
}
