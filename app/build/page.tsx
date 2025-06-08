"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  BookOpen,
  Layers,
  Package,
  PiIcon as Api,
  Wrench,
  Server,
  GitBranch,
  DollarSign,
  ArrowRight,
  Zap,
  Shield,
  Play,
  Lightbulb,
  Rocket,
  Brain,
  MessageSquare,
  GithubIcon,
  Sparkles,
} from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { ParticleBackground } from "@/components/particle-background"

const developerPaths = [
  {
    title: "New to Blockchain?",
    description: "Start your journey with Ergo. Learn core concepts and build your first simple dApp.",
    icon: Lightbulb,
    cta: "Beginner's Guide",
    href: "/build/getting-started",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
  },
  {
    title: "Experienced DeFi Developer?",
    description: "Leverage Ergo's eUTXO model and ErgoScript for advanced financial applications.",
    icon: Rocket,
    cta: "Explore Advanced DeFi",
    href: "/build/ergoscript",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
  },
  {
    title: "Researcher or Cryptographer?",
    description: "Dive deep into Sigma protocols, NIPoPoWs, and contribute to Ergo's core research.",
    icon: Brain,
    cta: "Protocol Deep Dive",
    href: "/build/protocol",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
  },
]

const coreTech = [
  {
    name: "eUTXO Model",
    description: "Enhanced security & parallelism.",
    icon: Layers,
    href: "/technology/eutxo-model",
  },
  { name: "ErgoScript", description: "Powerful & secure smart contracts.", icon: Code, href: "/technology/ergoscript" },
  {
    name: "Sigma Protocols",
    description: "Advanced privacy & ZKPs.",
    icon: Shield,
    href: "/technology/privacy-features",
  },
  { name: "Proof-of-Work", description: "ASIC-resistant & decentralized.", icon: Zap, href: "/technology/secure-pow" },
]

const essentialTools = [
  { name: "Ergo Playground", icon: Play, href: "https://playground.ergoplatform.com", external: true },
  { name: "Appkit (JVM SDK)", icon: Package, href: "/build/sdks#appkit" },
  { name: "SigmaRust (SDK)", icon: Package, href: "/build/sdks#sigmarust" },
  { name: "Node Setup Guide", icon: Server, href: "/build/node" },
  { name: "Explorer API", icon: Api, href: "/build/api#explorer" },
  { name: "Dev Tools", icon: Wrench, href: "/build/tools" },
]

const featuredResources = [
  {
    title: "Building Your First Ergo dApp: A Step-by-Step Tutorial",
    category: "Tutorial",
    icon: BookOpen,
    href: "/build/quick-start",
    description: "A comprehensive guide for beginners to get hands-on experience with Ergo development.",
  },
  {
    title: "Understanding Ergo's Transaction Model (eUTXO)",
    category: "Concept",
    icon: Layers,
    href: "/technology/eutxo-model",
    description: "Explore the nuances of the extended UTXO model and its benefits for dApp development.",
  },
  {
    title: "Mastering ErgoScript: Best Practices and Patterns",
    category: "Advanced",
    icon: Code,
    href: "/build/ergoscript/advanced",
    description: "Learn advanced techniques for writing efficient and secure ErgoScript contracts.",
  },
]

const communityHighlights = [
  { name: "Developer Discord", icon: MessageSquare, href: "https://discord.gg/ergo", cta: "Join Chat" },
  { name: "Ergo GitHub", icon: GithubIcon, href: "https://github.com/ergoplatform", cta: "Explore Code" },
  { name: "Grant Program", icon: DollarSign, href: "/build/grants", cta: "Apply for Funding" },
  { name: "Contribution Guide", icon: GitBranch, href: "/build/contributing", cta: "Start Contributing" },
]

export default function BuildPageRedesign() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20 sm:mb-32"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary text-sm px-4 py-1">
            ERGO DEVELOPER PORTAL V2
          </Badge>
          <GlitchText
            text="BUILD ON ERGO"
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white"
            as="h1"
          />
          <p className="text-xl sm:text-2xl text-primary mb-8 font-mono max-w-3xl mx-auto">
            The Future of Secure & Programmable Money.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Access powerful tools, comprehensive documentation, and a vibrant community to create innovative
            decentralized applications on the Ergo Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold px-8 py-3 text-lg" asChild>
              <Link href="/build/quick-start">
                <Play className="w-5 h-5 mr-2" /> Get Started Quickly
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold px-8 py-3 text-lg"
              asChild
            >
              <Link href="#developer-paths">
                <Rocket className="w-5 h-5 mr-2" /> Find Your Path
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Developer Paths Section */}
        <motion.section
          id="developer-paths"
          className="mb-20 sm:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-mono">
            <span className="text-primary">[</span> Your Developer Journey <span className="text-primary">]</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Choose your path based on your experience and interests.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {developerPaths.map((path, i) => {
              const Icon = path.icon
              return (
                <motion.div
                  key={path.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Card
                    className={`h-full ${path.bgColor} border-2 ${path.borderColor} hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group flex flex-col`}
                  >
                    <CardHeader className="items-center text-center">
                      <div
                        className={`p-4 rounded-full ${path.bgColor === "bg-green-500/10" ? "bg-green-500/20" : path.bgColor === "bg-blue-500/10" ? "bg-blue-500/20" : "bg-purple-500/20"} mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`w-10 h-10 ${path.textColor}`} />
                      </div>
                      <CardTitle
                        className={`text-2xl font-bold ${path.textColor} group-hover:text-primary transition-colors`}
                      >
                        {path.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-gray-300 mb-6">{path.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button
                        variant="outline"
                        className={`w-full ${path.borderColor} ${path.textColor} hover:bg-primary/10 hover:text-primary font-semibold`}
                        asChild
                      >
                        <Link href={path.href}>{path.cta}</Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Core Tech Stack Section */}
        <motion.section
          className="mb-20 sm:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-mono">
            <span className="text-primary">[</span> Ergo's Core Technology <span className="text-primary">]</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Understand the foundational pillars that make Ergo unique and powerful.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTech.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link href={tech.href}>
                    <Card className="bg-black/40 backdrop-blur-sm border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group text-center p-6 h-full">
                      <Icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-gray-400">{tech.description}</p>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Essential Toolkit Section */}
        <motion.section
          className="mb-20 sm:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-mono">
            <span className="text-primary">[</span> Essential Toolkit <span className="text-primary">]</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Quick access to the tools you'll need most.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {essentialTools.map((tool, i) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link
                    href={tool.href}
                    target={tool.external ? "_blank" : undefined}
                    rel={tool.external ? "noopener noreferrer" : undefined}
                  >
                    <div className="bg-black/40 backdrop-blur-sm border border-primary/20 hover:border-primary/50 p-4 rounded-lg text-center transition-all group h-full flex flex-col justify-center items-center">
                      <Icon className="w-8 h-8 text-primary mb-2 group-hover:text-orange-300 transition-colors" />
                      <span className="text-sm text-gray-200 group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Featured Resources Section */}
        <motion.section
          className="mb-20 sm:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-mono">
            <span className="text-primary">[</span> Featured Resources <span className="text-primary">]</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Curated guides and articles to accelerate your learning.
          </p>
          <div className="space-y-8">
            {featuredResources.map((resource, i) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link href={resource.href}>
                    <Card className="bg-black/40 backdrop-blur-sm border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group">
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg mt-1 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 border-primary/40 text-primary/80 text-xs">
                            {resource.category}
                          </Badge>
                          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{resource.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary ml-auto self-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold" asChild>
              <Link href="/build/all-resources">
                Explore All Resources <Sparkles className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Community & Contribution Section */}
        <motion.section
          className="mb-16 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-mono">
            <span className="text-primary">[</span> Connect & Contribute <span className="text-primary">]</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Join our thriving community, get support, and help shape the future of Ergo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityHighlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Card className="bg-black/40 backdrop-blur-sm border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group text-center p-6 h-full flex flex-col justify-center items-center">
                      <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm text-primary group-hover:underline">{item.cta}</span>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Final Terminal Prompt */}
        <motion.section
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="bg-black/70 backdrop-blur-md border border-green-500/40 rounded-lg p-6 font-mono text-green-400">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="mb-1">
              <span className="text-green-300">ergo-dev@ergo-platform</span>:<span className="text-blue-400">~</span>$
              git clone https://github.com/ergoplatform/ergo.git
            </p>
            <p className="mb-1 text-gray-400">Cloning into 'ergo'...</p>
            <p className="mb-1 text-gray-400">remote: Enumerating objects: 153271, done.</p>
            <p className="mb-1 text-gray-400">remote: Counting objects: 100% (587/587), done.</p>
            <p className="mb-1 text-gray-400">remote: Compressing objects: 100% (271/271), done.</p>
            <p className="text-gray-400">Receiving objects: 100% (153271/153271), 68.78 MiB | 12.45 MiB/s, done.</p>
            <p className="text-gray-400">Resolving deltas: 100% (116585/116585), done.</p>
            <p className="mt-2">
              <span className="text-green-300">ergo-dev@ergo-platform</span>:
              <span className="text-blue-400">~/ergo</span>$ <span className="animate-pulse">█</span>
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
