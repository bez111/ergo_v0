"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { DollarSign, Shield, TrendingUp, ExternalLink, ArrowRight, Users, CheckCircle, Settings, Vote, Coins, ChevronDown, Terminal, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"
import { useTranslations } from "next-intl"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

// Features moved inside component to access translations

const governanceData = [
  {
    title: "Emission Schedule",
    description: "Declining emission with periodic reductions and post-emission sustainability through storage rent and transaction fees.",
    icon: DollarSign,
    link: "/docs/miners/governance",
    linkText: "Learn about governance →",
  },
  {
    title: "Storage Rent Economics",
    description: "UTXOs unspent for 4+ years pay storage fees, providing sustainable miner revenue and preventing state bloat.",
    icon: Coins,
    link: "/docs/introduction/storage-rent",
    linkText: "Storage rent details →",
  },
  {
    title: "Miner Voting Process",
    description: "Community proposals, 1024-epoch voting period, 90% threshold requirement, and gradual activation.",
    icon: Vote,
    link: "/docs/miners/governance/voting",
    linkText: "Voting mechanism →",
  },
  {
    title: "Economic Parameters",
    description: "Adjustable parameters include block size, storage fee factor, min fee, and computational cost limits.",
    icon: Settings,
    link: "/docs/miners/governance",
    linkText: "Parameter details →",
  },
]

const historicalVotes = [
  {
    eip: "EIP-27",
    title: "Re-emission Soft Fork",
    status: "Passed",
    description: "Extends emission schedule to ensure long-term network security",
    date: "2024",
    support: "95%",
  },
  {
    eip: "EIP-37",
    title: "Difficulty Adjustment",
    status: "Passed", 
    description: "Improved difficulty adjustment algorithm for more stable block times",
    date: "2023",
    support: "92%",
  },
]

export default function AdaptiveEmissionPage() {
  const t = useTranslations("technology.adaptiveEmission")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("emission")

  const features = [
    {
      title: t("features.parameterTuning.title"),
      description: t("features.parameterTuning.description"),
      icon: Settings,
    },
    {
      title: t("features.economicFlexibility.title"),
      description: t("features.economicFlexibility.description"),
      icon: TrendingUp,
    },
    {
      title: t("features.communityInput.title"),
      description: t("features.communityInput.description"),
      icon: Users,
    },
    {
      title: t("features.minerVoting.title"),
      description: t("features.minerVoting.description"),
      icon: Vote,
    },
    {
      title: t("features.consensusDriven.title"),
      description: t("features.consensusDriven.description"),
      icon: CheckCircle,
    },
  ]

  // Use translations for FAQs - access as array
  const faqQuestions = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer")
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer")
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer")
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer")
    }
  ]

  return (
    <>
      {/* BreadcrumbList Schema */}
      <SchemaOrg
        type="BreadcrumbList"
        data={{
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Technology",
              item: "https://ergoblockchain.org/technology"
            },
            {
              "@type": "ListItem", 
              position: 2,
              name: "Adaptive Emission",
              item: "https://ergoblockchain.org/technology/adaptive-emission"
            }
          ]
        }}
      />

      {/* FAQPage Schema */}
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: faqQuestions.map(faq => ({
              "@type": "Question",
            name: faq.question,
              acceptedAnswer: {
                "@type": "Answer", 
              text: faq.answer
              }
          }))
        }}
      />
      
      <BackgroundWrapper>
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { name: "Technology", href: "/technology" },
              { name: t("hero.title"), href: "/technology/adaptive-emission" }
            ]}
            className="mb-8"
          />
        </div>

        <FadeIn>
          {/* Hero Section */}
          <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  {t("hero.title")}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                  {t("hero.subtitle")}
                </p>
                <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  {t("hero.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/docs/miners/governance">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-xl">
                      {t("buttons.readDocs")}
                    </Button>
                  </Link>
                  <a href="https://www.ergoforum.org/t/emission-soft-fork-proposal/2996" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-neutral-700 text-neutral-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400 px-8 py-3 rounded-xl"
                    >
                      {t("buttons.readProposal")}
                    </Button>
                  </a>
                </div>
              </div>
              <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                      <Terminal className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Quick Start</h3>
                      <p className="text-neutral-400">Get started with Adaptive Emission</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        number: "01",
                        title: "Governance Docs",
                        description: "Learn about Ergo's governance system",
                        link: "/docs/miners/governance"
                      },
                      {
                        number: "02", 
                        title: "EIP-27 Proposal",
                        description: "Read the emission soft fork proposal",
                        link: "https://www.ergoforum.org/t/emission-soft-fork-proposal/2996"
                      },
                      {
                        number: "03",
                        title: "Join Community",
                        description: "Participate in governance discussions",
                        link: "https://discord.gg/ergo"
                      },
                    ].map((item) => (
                      <div key={item.number} className="flex items-center gap-4 p-4 rounded-2xl bg-black/60 border border-white/20 hover:bg-black/70 hover:border-orange-400/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                          {item.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-neutral-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Features Section */}
          <section id="features" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {t("features.title")}
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  {t("features.subtitle")}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={feature.title} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-neutral-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* Emission Schedule Section */}
          <section id="emission" className="py-16 px-4 bg-neutral-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Emission Schedule
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Understanding Ergo's emission model and governance mechanisms
                </p>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-900/50 border border-neutral-700">
                  <TabsTrigger value="emission" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Emission
                  </TabsTrigger>
                  <TabsTrigger value="voting" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Voting
                  </TabsTrigger>
                  <TabsTrigger value="parameters" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                    Parameters
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="emission" className="mt-8">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-white text-xl font-semibold mb-2">Emission Timeline</h3>
                    <p className="text-neutral-400 mb-6">Ergo's declining emission schedule and post-emission sustainability</p>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-orange-300">Current Phase (2021-2057)</h4>
                          <ul className="space-y-2 text-neutral-400">
                            <li>• Initial emission: 75 ERG per block</li>
                            <li>• Reduction every 3 months by 3 ERG</li>
                            <li>• Total supply: ~97.7 million ERG</li>
                            <li>• Foundation allocation: 4.37%</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-orange-300">Post-Emission (2057+)</h4>
                          <ul className="space-y-2 text-neutral-400">
                            <li>• Miner rewards from transaction fees</li>
                            <li>• Storage rent from inactive UTXOs</li>
                            <li>• Potential re-emission if voted</li>
                          <li>• Long-term network sustainability</li>
                        </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="voting" className="mt-8">
                  <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="text-white text-xl font-semibold mb-2">Miner Voting Process</h3>
                    <p className="text-neutral-400 mb-6">How parameter changes are proposed and implemented</p>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-orange-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">1. Community Discussion</h4>
                          <p className="text-sm text-neutral-400">Proposals are discussed in forums and community channels</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Vote className="w-8 h-8 text-orange-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">2. Miner Voting</h4>
                          <p className="text-sm text-neutral-400">Miners vote through block headers over 1024 epochs</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-orange-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">3. Implementation</h4>
                          <p className="text-sm text-neutral-400">Changes activate gradually with 90% consensus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="parameters" className="mt-8">
                  <div className="space-y-6">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                      <h3 className="text-white text-xl font-semibold mb-4">Adjustable Parameters</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Block Parameters</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Maximum block size</li>
                              <li>• Block cost limit</li>
                              <li>• Computational cost per byte</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-orange-300 mb-3">Economic Parameters</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Storage fee factor</li>
                              <li>• Minimum transaction fee</li>
                              <li>• Token access cost</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          {/* Governance Section */}
          <section className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Governance
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  How Ergo's governance system enables sustainable economic policy
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {governanceData.map((item, index) => (
                  <Link key={item.title} href={item.link} className="group block">
                    <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 h-full cursor-pointer">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-neutral-300 leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.8}>
          {/* Storage Rent Section */}
          <section className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Storage Rent
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Sustainable miner revenue through storage fees on inactive UTXOs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-400" />
                      4 Year Period
                    </h3>
                  </div>
                    <p className="text-neutral-400">
                      UTXOs unspent for 4+ years begin paying storage rent, preventing blockchain bloat and providing miner revenue.
                    </p>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-orange-400" />
                      Fee Structure
                    </h3>
                  </div>
                    <p className="text-neutral-400">
                      Storage fees are calculated based on UTXO size and age, with a current rate of approximately 4.43% per 4-year period.
                    </p>
                </div>

                <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                      <Shield className="w-5 h-5 text-orange-400" />
                      Network Benefits
                    </h3>
                  </div>
                    <p className="text-neutral-400">
                      Prevents state bloat, ensures long-term sustainability, and provides perpetual miner rewards after emission ends.
                    </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.0}>
          {/* Historical Votes Section */}
          <section className="py-16 px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Historical Votes
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Past governance decisions that shaped Ergo's economic policy
                </p>
              </div>

              <div className="space-y-6">
                {historicalVotes.map((vote, index) => (
                  <div key={vote.eip} className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
                    <div className="p-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                                {vote.eip}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                vote.status === 'Passed' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {vote.status}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{vote.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{vote.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-400">{vote.support}</div>
                            <div className="text-sm text-neutral-400">Support</div>
                            <div className="text-sm text-neutral-500 mt-1">{vote.date}</div>
                          </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={1.2}>
          {/* FAQ Section */}
          <section id="faq" className="py-16 px-4 bg-neutral-900/20"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {t("faq.title")}
                </h2>
                <p className="text-xl text-neutral-400">
                  Common questions about adaptive emission and governance
                </p>
              </div>
              
              <div className="space-y-4">
                {faqQuestions.map((faq, index) => (
                  <div key={index}>
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <div className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
                        <CollapsibleTrigger asChild>
                          <div className="cursor-pointer hover:bg-neutral-800/30 transition-colors p-8">
                            <div className="flex items-center justify-between">
                              <h3 className="text-white text-left font-semibold">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-5 h-5 text-neutral-400 transition-transform ${
                                  openFAQ === index ? 'rotate-180' : ''
                                }`} 
                              />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="px-8 pb-8">
                            <p className="text-neutral-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* What's Next Section */}
        <FadeIn delay={1.4}>
          <div className="max-w-6xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              What's <span className="text-orange-400">Next</span>?
            </h2>
            <p className="text-xl text-center text-neutral-300 mb-12">
              Ready to participate in Ergo's governance? Explore the tools and resources available.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/docs/miners/governance"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Governance Documentation</h3>
                    <p className="text-orange-400 text-sm">Learn More</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Learn how Ergo's governance system works and how you can participate in decision-making.
                </p>
              </Link>
              
              <a 
                href="https://discord.com/invite/ergo-platform-668903786361651200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/80 border border-white/10 rounded-3xl p-8 hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300 cursor-pointer block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Join Governance</h3>
                    <p className="text-orange-400 text-sm">Community</p>
                  </div>
                </div>
                <p className="text-neutral-300">
                  Connect with the community and participate in governance discussions and voting.
                </p>
              </a>
            </div>
          </div>
        </FadeIn>
      </BackgroundWrapper>
    </>
  )
} 