"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import { DollarSign, Shield, TrendingUp, ExternalLink, ArrowRight, Users, CheckCircle, Settings, Activity, Vote, BarChart3, Coins, Target, ChevronDown, Terminal, BookOpen, Cpu, Network, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import React from "react"

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

const features = [
  {
    title: "Parameter Tuning",
    description: "Economic variables can be adjusted based on network conditions",
    icon: Settings,
  },
  {
    title: "Economic Flexibility",
    description: "Adapt to changing network needs without hard forks",
    icon: TrendingUp,
  },
  {
    title: "Community Input",
    description: "Discussions and decisions involve the entire community",
    icon: Users,
  },
  {
    title: "Miner Voting",
    description: "Miners vote on parameter changes through block headers",
    icon: Vote,
  },
  {
    title: "Gradual Changes",
    description: "Parameters adjust smoothly to prevent economic shocks",
    icon: Activity,
  },
  {
    title: "Long-term Sustainability",
    description: "Ensures network security even after emission ends",
    icon: Shield,
  },
]

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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("emission")

  const faqs = [
    {
      question: "How does adaptive emission work?",
      answer: "Adaptive emission allows the network to adjust economic parameters through miner voting. When proposals reach 90% miner support over 1024 epochs, changes are gradually implemented to maintain network stability."
    },
    {
      question: "What parameters can be changed?",
      answer: "Adjustable parameters include block size limits, storage fee factors, minimum transaction fees, computational cost limits, and emission schedules. These changes help the network adapt to changing conditions."
    },
    {
      question: "How long does the voting process take?",
      answer: "The voting process spans 1024 epochs (approximately 3.5 months), allowing sufficient time for community discussion and miner consideration before implementation."
    },
    {
      question: "What happens after emission ends?",
      answer: "After the main emission ends in 2057, miners will be sustained by transaction fees and storage rent from inactive UTXOs, ensuring long-term network security without inflation."
    },
    {
      question: "Can anyone propose parameter changes?",
      answer: "While anyone can discuss proposals in the community, formal parameter changes require miner voting through block headers. The community plays a crucial role in discussing and evaluating proposals."
    },
  ]

  const lastUpdated = new Date().toISOString().slice(0, 10)

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
          mainEntity: faqs.map(faq => ({
              "@type": "Question",
            name: faq.question,
              acceptedAnswer: {
                "@type": "Answer", 
              text: faq.answer
              }
          }))
        }}
      />
      
      <div className="min-h-screen bg-black relative overflow-hidden motion-reduce:animate-none">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black"></div>

        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Adaptive Emission", href: "/technology/adaptive-emission" }
            ]}
            className="mb-8"
          />
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 motion-reduce:animate-none pb-24">
        {/* Hero Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-28 md:pt-32 pb-12 md:pb-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
                  Adaptive Emission
                </h1>
                  <p className="text-sm text-neutral-500 mb-4">Last updated: {lastUpdated}</p>
                  <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl">
                    Consensus-driven tuning of economic parameters
                  </p>
                  <p className="text-lg text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                    Community input and miner voting enable flexible economic policy without hard forks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/docs/miners/governance">
                      <Button className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold px-8 py-3 rounded-xl">
                      Governance Docs
                  </Button>
                    </Link>
                    <a href="https://www.ergoforum.org/t/emission-soft-fork-proposal/2996" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                        className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400 px-8 py-3 rounded-xl"
                  >
                      EIP-27 Proposal
                                    </Button>
                    </a>
                  </div>
                  <nav aria-label="On this page" className="mt-6 text-sm text-neutral-400">
                    <ul className="flex flex-wrap gap-4">
                      <li><a href="#features" className="hover:text-brand-primary-400">Key features</a></li>
                      <li><a href="#emission" className="hover:text-brand-primary-400">Emission Schedule</a></li>
                      <li><a href="#faq" className="hover:text-brand-primary-400">FAQ</a></li>
                    </ul>
                  </nav>
              </div>
              <div className="relative">
                  <div className="relative z-10">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-xl p-8">
                    <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center text-white">
                          Quick Start
                      </h3>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Governance Docs",
                              description: "Learn about Ergo's governance system",
                              icon: <BookOpen className="w-6 h-6" />,
                              link: "/docs/miners/governance",
                              external: false
                            },
                            {
                              name: "EIP-27 Proposal",
                              description: "Read the emission soft fork proposal",
                              icon: <Terminal className="w-6 h-6" />,
                              link: "https://www.ergoforum.org/t/emission-soft-fork-proposal/2996",
                              external: true
                            },
                            {
                              name: "Join Community",
                              description: "Participate in governance discussions",
                              icon: <Users className="w-6 h-6" />,
                              link: "https://discord.gg/ergo",
                              external: true
                            },
                          ].map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                              </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.link}
                                  className="block p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-brand-primary-500/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-brand-primary-400">{item.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-white">{item.name}</h4>
                                      <p className="text-sm text-neutral-400">{item.description}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                                  </div>
                                </Link>
                              )}
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

          {/* Features Section */}
          <motion.section 
            id="features"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Key Features
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                  Flexible economic policy through community consensus and miner voting
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <feature.icon className="w-12 h-12 text-brand-primary-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Emission Schedule Section */}
          <motion.section 
            id="emission"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
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
                  <TabsTrigger value="emission" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Emission
                  </TabsTrigger>
                  <TabsTrigger value="voting" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Voting
                  </TabsTrigger>
                  <TabsTrigger value="parameters" className="data-[state=active]:bg-brand-primary-500 data-[state=active]:text-black">
                    Parameters
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="emission" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Emission Timeline</CardTitle>
                      <p className="text-neutral-400">Ergo's declining emission schedule and post-emission sustainability</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-semibold text-brand-primary-300">Current Phase (2021-2057)</h4>
                          <ul className="space-y-2 text-neutral-400">
                            <li>• Initial emission: 75 ERG per block</li>
                            <li>• Reduction every 3 months by 3 ERG</li>
                            <li>• Total supply: ~97.7 million ERG</li>
                            <li>• Foundation allocation: 4.37%</li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-brand-primary-300">Post-Emission (2057+)</h4>
                          <ul className="space-y-2 text-neutral-400">
                            <li>• Miner rewards from transaction fees</li>
                            <li>• Storage rent from inactive UTXOs</li>
                            <li>• Potential re-emission if voted</li>
                            <li>• Long-term network sustainability</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="voting" className="mt-8">
                  <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Miner Voting Process</CardTitle>
                      <p className="text-neutral-400">How parameter changes are proposed and implemented</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-brand-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-brand-primary-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">1. Community Discussion</h4>
                          <p className="text-sm text-neutral-400">Proposals are discussed in forums and community channels</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-brand-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Vote className="w-8 h-8 text-brand-primary-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">2. Miner Voting</h4>
                          <p className="text-sm text-neutral-400">Miners vote through block headers over 1024 epochs</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-brand-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-brand-primary-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">3. Implementation</h4>
                          <p className="text-sm text-neutral-400">Changes activate gradually with 90% consensus</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="parameters" className="mt-8">
                  <div className="space-y-6">
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white">Adjustable Parameters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">Block Parameters</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Maximum block size</li>
                              <li>• Block cost limit</li>
                              <li>• Computational cost per byte</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-brand-primary-300 mb-3">Economic Parameters</h4>
                            <ul className="space-y-2 text-neutral-400 text-sm">
                              <li>• Storage fee factor</li>
                              <li>• Minimum transaction fee</li>
                              <li>• Token access cost</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.section>

          {/* Governance Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
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
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm h-full hover:border-brand-primary-500/50 transition-colors">
                      <CardContent className="p-6">
                        <item.icon className="w-12 h-12 text-brand-primary-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                        <p className="text-neutral-400 leading-relaxed mb-4">{item.description}</p>
                        <Link 
                          href={item.link}
                          className="inline-flex items-center text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
                        >
                          {item.linkText}
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Storage Rent Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
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
                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-brand-primary-400" />
                      4 Year Period
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400">
                      UTXOs unspent for 4+ years begin paying storage rent, preventing blockchain bloat and providing miner revenue.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-brand-primary-400" />
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400">
                      Storage fees are calculated based on UTXO size and age, with a current rate of approximately 4.43% per 4-year period.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-primary-400" />
                      Network Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-400">
                      Prevents state bloat, ensures long-term sustainability, and provides perpetual miner rewards after emission ends.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* Historical Votes Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
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
                  <motion.div
                    key={vote.eip}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="motion-reduce:transform-none"
                  >
                    <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-brand-primary-500/20 text-brand-primary-300 rounded-full text-sm font-medium">
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
                            <div className="text-2xl font-bold text-brand-primary-400">{vote.support}</div>
                            <div className="text-sm text-neutral-400">Support</div>
                            <div className="text-sm text-neutral-500 mt-1">{vote.date}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            id="faq"
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 bg-neutral-900/20 motion-reduce:transform-none"
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-neutral-400">
                  Common questions about adaptive emission and governance
                </p>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible
                    key={index}
                    open={openFAQ === index}
                    onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-neutral-900/50 border border-neutral-700 p-6 text-left hover:bg-neutral-900/70 transition-colors">
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 pt-2">
                      <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            variants={itemVariants} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-16 px-4 motion-reduce:transform-none"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Participate in Governance?
              </h2>
              <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                Join the community and help shape Ergo's economic future through adaptive governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/miners/governance">
                  <Button size="lg" className="bg-brand-primary-500 hover:bg-brand-primary-600 text-black font-semibold">
                    Learn Governance
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-brand-primary-500/10 hover:border-brand-primary-500/50 hover:text-brand-primary-400">
                    Join Community
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
} 