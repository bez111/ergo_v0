"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Shield, Cpu, Zap, Users, ExternalLink, CheckCircle, TrendingUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SchemaOrg } from "@/components/seo/schema-org"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

const features = [
  {
    icon: Shield,
    title: "ASIC-Resistant",
    description: "Anyone with a GPU can mine; no hardware monopoly or centralization.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Lower power consumption compared to traditional PoW algorithms.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Users,
    title: "Fair Launch",
    description: "No premine, no ICO, no early insiders. Pure decentralization.",
    color: "from-purple-500/20 to-purple-500/5",
  },
]

const networkStats = [
  { label: "Network Hashrate", value: "15.2 TH/s", change: "+5.2%" },
  { label: "Active Miners", value: "12,847", change: "+2.1%" },
  { label: "Block Time", value: "2 min", change: "Stable" },
  { label: "Difficulty", value: "1.2P", change: "+1.8%" },
]

const benefits = [
  "Decentralization is preserved",
  "Attacks are costly and impractical",
  "Security is simple and battle-tested",
  "Open to all participants",
  "No specialized hardware required",
  "Sustainable long-term economics",
]

export default function SecurePowPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Isn't all Proof-of-Work the same? What's so \"secure\" about Ergo's PoW?",
      answer: "Not all PoW is created equal. Ergo's algorithm, Autolykos v2, is specifically designed to resist centralization. While other networks can be dominated by specialized hardware manufacturers (ASICs), Ergo remains accessible for mining on standard graphics cards (GPUs). This means more people can participate in securing the network, keeping it decentralized.",
    },
    {
      question: "Does this mean it's completely \"ASIC-resistant\"?",
      answer: "It means that creating an ASIC for Ergo is economically unviable. The algorithm is \"memory-hard,\" making performance dependent on memory speed, not just raw processing power. This gives standard GPUs a long-term advantage and prevents the monopolization of mining.",
    },
    {
      question: "Is this approach \"greener\"?",
      answer: "The biggest environmental impact of PoW comes from the constant \"arms race,\" where new, more powerful hardware quickly becomes obsolete and is discarded. By keeping GPUs competitive, Ergo reduces this race and the constant hardware turnover. This promotes long-term energy efficiency and reduces electronic waste.",
    },
    {
      question: "How protected is the network from attacks?",
      answer: "By maintaining mining decentralization, Secure PoW significantly increases the cost and difficulty of a \"51% attack.\" An attacker can't simply turn on a warehouse of ASICs; they would have to acquire a massive number of GPUs, which is much harder and more expensive. More miners around the world means more security for everyone.",
    },
  ]

  return (
    <>
      <SchemaOrg
        type="FAQPage"
        data={{
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Autolykos v2?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Autolykos v2 is Ergo's ASIC-resistant Proof-of-Work consensus algorithm. It uses memory-hard functions to ensure that mining remains accessible to standard GPUs, promoting decentralization and preventing the concentration of mining power."
              }
            },
            {
              "@type": "Question",
              name: "How does Autolykos v2 prevent ASIC mining?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Autolykos v2 uses memory-hard functions that require significant amounts of RAM to compute. This makes ASIC development economically unfeasible while keeping mining accessible to standard GPUs, ensuring a more decentralized mining ecosystem."
              }
            },
            {
              "@type": "Question",
              name: "What are the benefits of Autolykos v2?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Autolykos v2 promotes decentralization by keeping mining accessible to individual miners, reduces energy consumption compared to traditional PoW algorithms, and provides long-term network security through its memory-hard design."
              }
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Breadcrumbs */}
        <div className="sr-only">
          <Breadcrumbs
            items={[
              { label: "Technology", href: "/technology" },
              { label: "Secure PoW", href: "/technology/secure-pow" }
            ]}
            className="mb-8"
          />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Secure PoW
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Autolykos v2 - ASIC-resistant Proof-of-Work algorithm designed for decentralized mining 
                with memory-hard functions and energy efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-4 rounded-xl text-lg">
                  Start Mining
                </Button>
                <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl text-lg backdrop-blur-sm">
                  Mining Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Hero Section */}
          <FadeIn delay={0.2}>
            <div className="max-w-7xl mx-auto mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                    Autolykos v2
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">Secure Proof-of-Work</p>
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                    Ergo is committed to fair, transparent, and sustainable decentralization. That's why we use
                    Proof-of-Work (PoW), but with a modern twist: Autolykos v2.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Start Mining
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    >
                      Read Whitepaper
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl p-8">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                          Live Network Statistics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {networkStats.map((stat, index) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="text-center p-4 bg-black/30 rounded-lg"
                            >
                              <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                              <div className="text-xs text-gray-400 mb-2">{stat.label}</div>
                              <Badge variant={stat.change.includes("+") ? "default" : "secondary"} className="text-xs">
                                {stat.change}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Key Features */}
          <FadeIn delay={0.4}>
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Why Proof-of-Work?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group"
                  >
                    <Card
                      className={`bg-gradient-to-br ${feature.color} border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 h-full`}
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* What is Autolykos v2 */}
          <FadeIn delay={0.6}>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    What is Autolykos v2?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Autolykos is Ergo's unique, ASIC-resistant mining algorithm designed to maintain network
                    decentralization and security.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-primary" />
                      <span className="text-sm">Memory-hard algorithm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">ASIC-resistant design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm">GPU-friendly mining</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                    Security Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-3"
                        whileHover={{ x: 10 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Mining Progress */}
          <FadeIn delay={0.8}>
            <Card className="mb-16 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Mining Decentralization
                </CardTitle>
                <CardDescription>Distribution of mining power across the network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Top 5 Pools</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Solo Miners</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Small Pools</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Healthy distribution ensures no single entity can control the network
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          {/* FAQ Section */}
          <FadeIn delay={0.9}>
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl"
                  >
                    <Collapsible
                      open={openFAQ === index}
                      onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <CollapsibleTrigger className="w-full">
                        <CardContent className="p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors">
                          <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </CardContent>
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
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={1.0}>
            <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="text-center py-12">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Start Mining Ergo
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of miners securing the Ergo network with your GPU.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/use/mining">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl">
                      Mining Guide
                    </Button>
                  </Link>
                  <Link href="https://ergoplatform.org/en/blog/2021-07-20-autolykosv2/" target="_blank">
                    <Button
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm gap-2"
                    >
                      Whitepaper
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </>
  )
}
