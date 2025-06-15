"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Code, Shield, Zap, ExternalLink, ArrowRight, Play, Rocket, Brain } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Play,
    title: "Quick Start",
    description: "Get up and running with Ergo development in minutes. Perfect for beginners.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Rocket,
    title: "Advanced DeFi",
    description: "Build sophisticated financial applications with Ergo's powerful tools.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Brain,
    title: "Protocol Research",
    description: "Contribute to Ergo's core technology and research initiatives.",
    color: "from-purple-500/20 to-purple-500/5",
  },
]

const developerPaths = [
  {
    title: "New to Blockchain?",
    description: "Start your journey with Ergo. Learn core concepts and build your first simple dApp.",
    icon: Play,
    cta: "Beginner's Guide",
    href: "/build/getting-started",
  },
  {
    title: "Experienced DeFi Developer?",
    description: "Leverage Ergo's eUTXO model and ErgoScript for advanced financial applications.",
    icon: Rocket,
    cta: "Explore Advanced DeFi",
    href: "/build/ergoscript",
  },
  {
    title: "Researcher or Cryptographer?",
    description: "Dive deep into Sigma protocols, NIPoPoWs, and contribute to Ergo's core research.",
    icon: Brain,
    cta: "Protocol Deep Dive",
    href: "/build/protocol",
  },
]

const codeExample = `// Example: Simple ErgoScript contract
{
  // Check if transaction is signed by the owner
  sigmaProp(
    proveDlog(ownerPubKey)
  )
}`

export default function BuildPage() {
  return (
    <div className="min-h-screen text-white relative">
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <FadeIn delay={0.2}>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block">
                  Build on Ergo
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">The Future of Secure & Programmable Money</p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                  Access powerful tools, comprehensive documentation, and a vibrant community to create innovative decentralized applications on the Ergo Platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl" asChild>
                    <Link href="/build/quick-start">
                      <Play className="w-5 h-5 mr-2" /> Get Started
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    asChild
                  >
                    <Link href="#developer-paths">
                      <Rocket className="w-5 h-5 mr-2" /> Find Your Path
                    </Link>
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
                      <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        Sample Contract
                      </h3>
                      <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                        <pre className="text-green-400">{codeExample}</pre>
                      </div>
                      <p className="text-gray-400 mt-4 italic text-center">Simple. Powerful. Secure.</p>
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
              Developer Paths
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

        {/* Tabs Section */}
        <FadeIn delay={0.6}>
          <Tabs defaultValue="paths" className="mb-16">
            <TabsList className="flex w-full gap-2 bg-transparent p-0">
              <TabsTrigger
                value="paths"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Developer Paths
              </TabsTrigger>
              <TabsTrigger
                value="tools"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Development Tools
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="flex-1 rounded-md bg-gray-800 px-4 py-2 text-gray-300 hover:bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                Community
              </TabsTrigger>
            </TabsList>

            <TabsContent value="paths" className="mt-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {developerPaths.map((path, index) => (
                  <motion.div
                    key={path.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <path.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-bold text-white">{path.title}</CardTitle>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{path.description}</p>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10"
                          asChild
                        >
                          <Link href={path.href}>
                            {path.cta} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border-orange-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Code className="w-6 h-6 text-orange-400" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-orange-400">Development Tools</CardTitle>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Everything you need to build, test, and deploy your Ergo applications.
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {[
                          {
                            title: "Ergo Playground",
                            description: "Test and debug your smart contracts",
                            icon: "🎮",
                          },
                          {
                            title: "Appkit (JVM SDK)",
                            description: "Build applications in Java/Kotlin",
                            icon: "⚡",
                          },
                          {
                            title: "SigmaRust (SDK)",
                            description: "Native Rust implementation",
                            icon: "🦀",
                          },
                        ].map((tool, index) => (
                          <motion.div
                            key={tool.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-xl">{tool.icon}</span>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{tool.title}</h4>
                              <p className="text-gray-400 text-sm">{tool.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent border-cyan-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6 text-cyan-400" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-cyan-400">Security & Testing</CardTitle>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Tools and best practices for building secure applications.
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {[
                          {
                            title: "Formal Verification",
                            description: "Mathematical proofs for contract correctness",
                            icon: "🔬",
                          },
                          {
                            title: "Testing Framework",
                            description: "Comprehensive testing tools",
                            icon: "🧪",
                          },
                          {
                            title: "Security Guidelines",
                            description: "Best practices for secure development",
                            icon: "🛡️",
                          },
                        ].map((tool, index) => (
                          <motion.div
                            key={tool.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-xl">{tool.icon}</span>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{tool.title}</h4>
                              <p className="text-gray-400 text-sm">{tool.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent border-purple-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-purple-400" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-purple-400">Join the Community</CardTitle>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Connect with other developers and contribute to the ecosystem.
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {[
                          {
                            title: "Developer Discord",
                            description: "Join our active developer community",
                            icon: "💬",
                          },
                          {
                            title: "GitHub Organization",
                            description: "Contribute to open-source projects",
                            icon: "📦",
                          },
                          {
                            title: "Grant Program",
                            description: "Get funding for your projects",
                            icon: "💰",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent border-orange-500/30 backdrop-blur-xl h-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                          <Rocket className="w-6 h-6 text-orange-400" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-orange-400">Resources</CardTitle>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Learn from the community and access valuable resources.
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        {[
                          {
                            title: "Documentation",
                            description: "Comprehensive guides and tutorials",
                            icon: "📚",
                          },
                          {
                            title: "Blog",
                            description: "Latest updates and insights",
                            icon: "📝",
                          },
                          {
                            title: "Showcase",
                            description: "Featured projects and applications",
                            icon: "✨",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-black/20 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-xl">{item.icon}</span>
                            <div>
                              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </div>
  )
}
