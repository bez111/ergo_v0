"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Cpu, Code, Layers, Lock, Zap, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { DigitalCounter } from "@/components/digital-counter"
import { GlitchText } from "@/components/glitch-text"
import { ParticleBackground } from "@/components/particle-background"

export default function IntroductionPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/tech-pattern.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/resistance-texture.png')] bg-no-repeat bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-red-900/10" />
      </div>

      <ParticleBackground />

      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 overflow-hidden border-b border-primary/20">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1 border border-primary/30 bg-primary/5 rounded-full">
                <span className="text-primary font-mono text-sm">ERGO PLATFORM // QUICK INTRODUCTION</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <GlitchText text="Discover Ergo" className="text-white" />
                <span className="block mt-2 text-primary">An Overview and Core Purpose</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-mono">
                A next-generation blockchain platform designed for secure financial contracts and true decentralization
              </p>

              {/* Digital counter effect */}
              <div className="mt-8 flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <DigitalCounter value={2019} duration={3000} className="text-2xl font-mono text-primary" />
                  <p className="text-sm text-gray-500 font-mono mt-1">LAUNCHED</p>
                </div>
                <div className="text-center">
                  <DigitalCounter value={97} suffix="M" duration={3000} className="text-2xl font-mono text-primary" />
                  <p className="text-sm text-gray-500 font-mono mt-1">MAX SUPPLY</p>
                </div>
                <div className="text-center">
                  <DigitalCounter value={100} suffix="+" duration={3000} className="text-2xl font-mono text-primary" />
                  <p className="text-sm text-gray-500 font-mono mt-1">PROJECTS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Ergo Section */}
        <section className="py-16 relative">
          <div className="container">
            <SectionHeading text="WHAT IS ERGO?" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Introduction</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Ergo is a next-generation blockchain platform designed for developing secure and powerful
                  decentralized applications (dApps) and financial contracts. Built on Proof-of-Work principles for
                  reliability and fairness, it offers unique capabilities for creating advanced financial instruments.
                </p>

                <div className="p-4 border border-primary/20 bg-primary/5 rounded-md">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Proof-of-Work Foundation</h4>
                      <p className="text-sm text-gray-400">
                        Ergo uses the Autolykos algorithm, providing security while remaining ASIC-resistant
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Mission</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Our goal is to provide the tools to build truly decentralized and accessible financial systems,
                  empowering ordinary people with control and economic freedom.
                </p>

                <div className="p-4 border border-primary/20 bg-primary/5 rounded-md">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Financial Freedom</h4>
                      <p className="text-sm text-gray-400">
                        Creating tools that enable people to participate in the new digital economy without
                        intermediaries
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Purpose Section */}
        <section className="py-16 relative border-t border-primary/20 bg-black/50">
          <div className="container">
            <SectionHeading text="CORE PURPOSE" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Solving Problems</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Ergo aims to address many challenges inherent in previous blockchain generations, such as scalability
                  limitations, smart contract vulnerabilities, and insufficient decentralization.
                </p>

                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <div className="h-px flex-grow bg-primary/30"></div>
                  <span>CHALLENGES ADDRESSED</span>
                  <div className="h-px flex-grow bg-primary/30"></div>
                </div>

                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">Scalability limitations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">Smart contract vulnerabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">Insufficient decentralization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-gray-300">Accessibility barriers</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Focus on Real Financial Contracts</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  Ergo's primary objective is to become the leading platform for implementing complex and secure
                  financial agreements that can operate without trusted intermediaries, directly on the blockchain. We
                  believe in creating tools that are useful in the real world.
                </p>

                <Card className="border-primary/20 bg-black/50">
                  <CardContent className="p-4">
                    <div className="text-center p-4 border border-dashed border-primary/40 rounded-md">
                      <span className="text-primary font-mono text-xs">CORE MISSION</span>
                      <p className="text-white font-medium mt-2">
                        "To create a platform where financial contracts work for people, not against them"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-16 relative border-t border-primary/20">
          <div className="container">
            <SectionHeading text="CORE PRINCIPLES" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Decentralization First</h3>
                <p className="text-gray-400 font-mono text-sm">
                  Ergo was launched fairly, with no premine or ICO, and is community-driven. We strive for maximum
                  decentralization at all levels.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security & Reliability</h3>
                <p className="text-gray-400 font-mono text-sm">
                  The use of the time-tested Proof-of-Work consensus (Autolykos) and the innovative eUTXO model ensures
                  a high level of security and predictability.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Powerful Smart Contracts</h3>
                <p className="text-gray-400 font-mono text-sm">
                  The ErgoScript language enables the creation of complex and secure financial applications that would
                  be impossible on many other platforms.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Accessibility & Fairness</h3>
                <p className="text-gray-400 font-mono text-sm">
                  We aim to make our tools accessible to everyone, with predictable fees and a focus on real-world
                  utility rather than speculation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Technology Features */}
        <section className="py-16 relative border-t border-primary/20 bg-black/50">
          <div className="container">
            <SectionHeading text="KEY TECHNOLOGICAL FEATURES" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Cpu className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Proof-of-Work (PoW)</h3>
                  </div>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    Ensures maximum network security and fair coin distribution. Our Autolykos algorithm is
                    ASIC-resistant, allowing more people to participate in securing the network.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Extended UTXO Model (eUTXO)</h3>
                  </div>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    Allows for more complex and secure smart contracts compared to the traditional account model,
                    providing better scalability and predictable fees. Simply put, it's like "smart money" with built-in
                    logic.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">ErgoScript</h3>
                  </div>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    A powerful yet safe scripting language for writing smart contracts, designed to prevent common
                    errors and vulnerabilities while enabling complex financial logic.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Sigma Protocols (Σ-protocols)</h3>
                  </div>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    Advanced cryptography that enables complex features like transaction mixing (ErgoMixer) for enhanced
                    privacy, ring signatures, and much more, directly at the protocol level.
                  </p>
                </div>
              </motion.div>

              {/* Code snippet example */}
              <motion.div variants={itemVariants} className="mt-8">
                <div className="bg-black/80 border border-primary/30 rounded-lg overflow-hidden">
                  <div className="bg-primary/10 px-4 py-2 border-b border-primary/30 flex items-center justify-between">
                    <span className="font-mono text-sm text-primary">ErgoScript Example</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
                    <code>{`{
// A simple time-locked contract
val deadline = SELF.R4[Long].get

sigmaProp(
  if (HEIGHT >= deadline) {
    // After deadline: only recipient can spend
    recipientPK
  } else {
    // Before deadline: only sender can spend
    senderPK
  }
)
}`}</code>
                  </pre>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 relative border-t border-primary/20">
          <div className="container">
            <SectionHeading text="WHAT CAN YOU DO WITH ERGO?" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={itemVariants} className="col-span-1 md:col-span-3">
                <p className="text-gray-400 font-mono text-center max-w-3xl mx-auto mb-8">
                  The Ergo ecosystem is constantly growing and offers many possibilities for users, developers, and
                  investors.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> Decentralized Finance (DeFi)
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  From stablecoins (SigmaUSD) and decentralized exchanges (Spectrum Finance) to lending platforms
                  (Duckpools).
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/ecosystem/defi">
                      EXPLORE DEFI <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> Privacy Tools
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  ErgoMixer for anonymizing your transactions, providing enhanced privacy features built on Sigma
                  protocols.
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/ecosystem/privacy">
                      LEARN MORE <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> NFTs & Digital Assets
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  Create, buy, and sell unique digital assets on marketplaces like Ergo Auction House and SkyHarbor.
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/ecosystem/nfts">
                      DISCOVER NFTs <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> Cross-Chain Interoperability
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  Rosen Bridge connects Ergo with other major blockchains like Bitcoin, Ethereum, Cardano, and BSC.
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/ecosystem/bridges">
                      EXPLORE BRIDGES <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> DAOs & Governance
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  Participate in decentralized governance and community-driven projects through various DAO structures.
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/ecosystem/daos">
                      VIEW DAOs <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 border border-primary/20 bg-black/60 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-primary">#</span> Developer Tools
                </h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  SDKs, libraries, and frameworks to help developers build the next generation of dApps on Ergo.
                </p>
                <div className="flex justify-end">
                  <Button variant="link" asChild className="text-primary p-0 font-mono text-xs">
                    <Link href="/build">
                      START BUILDING <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Ergo Section */}
        <section className="py-16 relative border-t border-primary/20 bg-black/50">
          <div className="container">
            <SectionHeading text="WHY ERGO?" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="p-6 border border-primary/30 bg-primary/5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Key Advantages</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <Lock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Reliability & Security</h4>
                        <p className="text-sm text-gray-400">
                          Proven PoW technology and the innovative eUTXO model provide a solid foundation for financial
                          applications
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Powerful Smart Contracts</h4>
                        <p className="text-sm text-gray-400">
                          ErgoScript enables the creation of truly useful and secure financial instruments
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Fair Launch & Community Focus</h4>
                        <p className="text-sm text-gray-400">
                          No premine, no ICO, and no hidden advantages for founders - truly community-driven
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-primary">
                        <Zap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Long-Term Sustainability</h4>
                        <p className="text-sm text-gray-400">
                          Continuous research and adaptation ensure the platform remains relevant and secure
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-16 relative border-t border-primary/20">
          <div className="container">
            <SectionHeading text="NEXT STEPS" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-8">
                <p className="text-gray-400 font-mono">
                  Ready to dive deeper into the Ergo ecosystem? Here are some next steps to get you started.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="/ecosystem">
                    <ExternalLink className="h-5 w-5" />
                    <span>EXPLORE THE ECOSYSTEM</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="/wallet">
                    <ExternalLink className="h-5 w-5" />
                    <span>GET AN ERGO WALLET</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="/community">
                    <ExternalLink className="h-5 w-5" />
                    <span>JOIN THE COMMUNITY</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="/technology">
                    <ExternalLink className="h-5 w-5" />
                    <span>DIVE DEEPER INTO TECH</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="https://spectrum.fi/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    <span>TRY SPECTRUM FINANCE</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono h-auto py-4 flex-col gap-2"
                >
                  <Link href="/start/quiz">
                    <ExternalLink className="h-5 w-5" />
                    <span>TAKE THE ONBOARDING QUIZ</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
