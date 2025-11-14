"use client"

import React from "react"
import { motion } from "framer-motion"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { EmailCapture } from "@/components/blog/email-capture"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShareCTA } from "@/components/blog/share-cta"
import { ShareInline } from "@/components/blog/share-inline"
import { 
  Shield,
  Users,
  Heart,
  Globe,
  Lock,
  Coins,
  Target,
  User,
  Building,
  Zap,
  Code
} from "lucide-react"

export function ErgoManifestoClient() {
  const principles = [
    {
      icon: Users,
      title: "Decentralization First",
      description: "Avoid central points of failure. Spread power, grow community, educate users."
    },
    {
      icon: Shield,
      title: "Open Permissionless and Secure", 
      description: "No restrictions on usage. Fully open source, auditable, and transparent."
    },
    {
      icon: User,
      title: "Created for Regular People",
      description: "Tools for ordinary people, not big corporations. Prevent mining centralization."
    },
    {
      icon: Coins,
      title: "A Platform for Contractual Money",
      description: "Efficient, secure financial contracts. Cost-competitive and accessible."
    },
    {
      icon: Target,
      title: "Long-term Focus",
      description: "Built to survive. Resilient, adaptable, and secure through time."
    }
  ]

  const threats = [
    {
      title: "Programmable Expiration",
      description: "CBDC with expiration dates or forced burning capabilities"
    },
    {
      title: "Social Credit Integration", 
      description: "Connecting payment ability to social status or conformity"
    },
    {
      title: "Market Censorship",
      description: "Restricting spending in particular markets or services"
    }
  ]

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
                The Ergo Manifesto
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
                Building Ergonomic Money for Regular People
              </p>
            </div>

            <div className="bg-black border border-orange-500/30 rounded-2xl p-6 mb-8">
              <p className="text-orange-100 leading-relaxed">
                <strong className="text-orange-400">Our Vision:</strong> The Ergo Manifesto hopes to educate and offer a vision of what blockchain technology can achieve. We hope to build society through horizontal cooperation through production under the division of labor, trade and exchange, and solidarity and mutual aid.
              </p>
            </div>

            {/* Inline Share */}
            <ShareInline 
              title="The Ergo Manifesto: Building Ergonomic Money for Regular People" 
              url="https://ergoblockchain.org/blog/ergo-manifesto" 
              utm="?utm_source=share_hero"
            />
          </motion.div>

          {/* Core Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-7 h-7 text-orange-400" />
                Our Core Mission
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  We believe this is achievable while maintaining basic principles that benefit the well-being of all humans. Core principles that have been central to human rights and values must be maintained as our technological capacities evolve.
                </p>
                
                <div className="bg-black border border-blue-500/30 rounded-2xl p-6">
                  <p className="text-blue-100 italic text-center text-lg">
                    "Cryptocurrency should provide tools to enrich ordinary people. Small businesses struggling to make ends meet, not big depersonalized financial capital."
                  </p>
                  <p className="text-blue-300 text-center mt-4 text-sm">
                    — This is what inspired me. This is my dream.
                  </p>
                </div>

                <p>
                  The tools should allow people to make contracts (digital, self-enforcing, reasonable smart contracts) regardless of the differences in jurisdictions, traditions, followed business practices, etc.
                </p>

                <p className="font-medium text-orange-300">
                  Let's try to create grassroots finance.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Bitcoin Origins */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-7 h-7 text-orange-400" />
                Bitcoin Origins
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="bg-black border border-yellow-500/30 rounded-2xl p-6">
                  <p className="text-yellow-100 font-mono text-center">
                    "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."
                  </p>
                  <p className="text-yellow-300 text-center mt-2 text-sm">
                    — Bitcoin Genesis Block
                  </p>
                </div>

                <p>
                  This block timestamped both the inception of Bitcoin and the start of an era of technological and financial innovation. Simply put, this was the catalyst for a full-blown revolution.
                </p>

                <p>
                  <strong className="text-orange-400">Decentralization is political</strong>, giving birth to the idea that technology could replace monopolized powers. Systems could be put in place to transfer value globally without the need for intermediaries or oversight.
                </p>

                <p>
                  An entire industry formed around the idea of P2P commerce. Open, borderless and secure channels could potentially prove mechanisms to level the economic playing field and provide tools for prosperity for the average citizen of earth.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Current Market Problems */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="w-7 h-7 text-orange-400" />
                Current Market Mindset
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  The mentality of crypto markets shifted considerably after the ICO mania of 2017. It seems that the space as a whole has come to celebrate bailouts, printing, and stimulus.
                </p>

                <div className="bg-black border border-red-500/30 rounded-2xl p-6">
                  <p className="text-red-100">
                    <strong className="text-red-400">The Problem:</strong> The original intent of the goals of cypherpunks is becoming increasingly diluted. The current market mentality seems to focus on: how do we honeypot new users with hype marketing, drive pumps and cannibalize these new members of communities.
                  </p>
                </div>

                <p>
                  We need to get back to the roots of the crypto-revolution, decentralized tools that are private and secure and drive real-world adoption of these systems. <strong className="text-orange-400">The ideal is to create tools that help people create value.</strong>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Weaponization of Money */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7 text-orange-400" />
                The Weaponization of Money
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  As central banks begin to enact a shift to Central Bank Digital Currencies, they may end up redefining the historical principles of the currency itself. I fear that money will be weaponized and turned into a tool of social control.
                </p>

                <h3 className="text-xl font-bold text-white">Three Critical Threats to Watch:</h3>
                
                <div className="grid gap-4">
                  {threats.map((threat, index) => (
                    <motion.div
                      key={threat.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-black border border-red-500/30 rounded-2xl p-4"
                    >
                      <h4 className="text-red-400 font-semibold mb-2">
                        {index + 1}. {threat.title}
                      </h4>
                      <p className="text-red-100 text-sm">
                        {threat.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Privacy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-7 h-7 text-orange-400" />
                Privacy
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="bg-black border border-purple-500/30 rounded-2xl p-6 text-center">
                  <p className="text-purple-100 text-lg font-medium">
                    "Privacy protects the individual from society."
                  </p>
                </div>

                <p>
                  Privacy must remain an option to protect the individual, and it does not have to be forced; let people make their own choices.
                </p>

                <p>
                  Privacy is the ability to create barriers and erect boundaries to create a space for the individual. It is up to each what borders and boundaries they choose to make.
                </p>

                <p>
                  <strong className="text-orange-400">Financial privacy is especially vital</strong> because it can be the difference between survival and systematic suppression of an opposition group in a country with an authoritarian government.
                </p>

                <p>
                  Financial privacy can allow people to protect their life savings when a government tries to confiscate its citizens' wealth, whether for political, ethnic, religious or "merely" economic reasons.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Ergonomic Money */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-7 h-7 text-orange-400" />
                Ergonomic Money
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="bg-black border border-green-500/30 rounded-2xl p-6">
                  <p className="text-green-100">
                    <strong className="text-green-400">Definition:</strong> Ergonomics is the scientific discipline concerned with understanding the interactions among humans and other elements of a system, and the profession that applies theory, principles, data, and methods to design and optimize human well-being and overall system performance.
                  </p>
                </div>

                <p>
                  Time and time again, economies implode, and those with financial tools cannibalize ordinary people's wealth and value. This is not ergonomic; it is predatory and monopolistic, and we need better tools.
                </p>

                <p className="text-orange-300 font-medium text-lg">
                  The goal of Ergonomic money is to create money and smart contracts for all people. Those at the bottom have the greatest need for the tooling we are building.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Ergo Basic Principles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ergo Basic Principles
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ergo's Social Contract — The foundation of ergonomic money
              </p>
            </div>

            <div className="grid gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-black border border-white/10 rounded-3xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-black border border-orange-500/30 flex items-center justify-center">
                            <principle.icon className="w-6 h-6 text-orange-400" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {principle.title}
                          </h3>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* About Kushti */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <User className="w-7 h-7 text-orange-400" />
                Who is Kushti?
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-orange-400">Alexander Chepurnoy (aka Kushti)</strong> is the core developer of Ergo Platform, and he has been active in blockchain development and smart contracts since 2011.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-black border border-orange-500/30 rounded-xl p-4">
                    <h4 className="text-orange-400 font-semibold mb-2">Experience</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Core developer for NXT</li>
                      <li>• Started smartcontract.com (now Chainlink) in 2014</li>
                      <li>• IOHK researcher with 20+ academic papers</li>
                      <li>• Creator of Scorex blockchain framework</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black border border-blue-500/30 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Token Economics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Fair launch - no ICO</li>
                      <li>• No pre-mined coins</li>
                      <li>• Foundation treasury: 4.37%</li>
                      <li>• Immutable economics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 1. Share this post */}
          <ShareCTA
            title="The Ergo Manifesto: A Vision for Ergonomic Money"
            url="https://ergoblockchain.org/blog/ergo-manifesto"
            description="Ergo's manifesto on creating tools for regular people, financial privacy, and sustainable blockchain economics"
            subtitle="Help spread the vision of ergonomic money and decentralized finance"
          />

          {/* 2. Continue Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Continue Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/blog/ergo-in-5-minutes" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Zap className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Ergo in 5 Minutes</h3>
                        <p className="text-gray-400 text-sm mb-2">Quick introduction to Ergo's key features and ecosystem</p>
                        <Badge variant="outline" className="bg-blue-500/10 border-blue-500/30 text-blue-400 text-xs">
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="/blog/eutxo-vs-accounts" className="group">
                <Card className="bg-black border border-white/10 rounded-2xl hover:bg-neutral-900 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                        <Code className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Two Blockchain Models</h3>
                        <p className="text-gray-400 text-sm mb-2">Why Ergo chose differently - eUTXO vs Account model comparison</p>
                        <Badge variant="outline" className="bg-green-500/10 border-green-500/30 text-green-400 text-xs">
                          Technology
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* 3. Subscribe */}
      <EmailCapture />
    </BackgroundWrapper>
  )
}
