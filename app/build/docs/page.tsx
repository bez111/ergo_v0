"use client"

import {
  BookOpen,
  Code,
  Rocket,
  Shield,
  Cpu,
  GitBranch,
  Link as LinkIcon,
  Layers,
  Database,
  Share2,
  Wrench,
  LifeBuoy,
  FileQuestion,
  Github,
  ChevronRight,
  Search,
  ExternalLink,
  Play,
  Brain,
  Users,
  Settings,
  Zap,
  Terminal,
  Download,
  CheckCircle,
  AlertTriangle,
  Monitor,
  Smartphone,
  Globe,
  Package,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const sdks = [
  {
    name: "AppKit (JVM)",
    description: "Java/Kotlin/Scala SDK for backend and service-layer Ergo dApps",
    href: "https://docs.ergoplatform.com/dev/quick-start/",
    github: "https://github.com/ergoplatform/ergo-appkit",
    icon: Cpu,
    language: "Java/Kotlin/Scala",
  },
  {
    name: "Fleet (TS/JS)",
    description: "TypeScript SDK for building modern web and browser-based Ergo dApps",
    href: "https://docs.ergoplatform.com/dev/fleet/",
    github: "https://github.com/ergoplatform/fleet",
    icon: Code,
    language: "TypeScript/JavaScript",
  },
  {
    name: "Sigma-Rust",
    description: "Core protocol library and cryptographic primitives written in Rust",
    href: "https://docs.ergoplatform.com/dev/sigma-rust/",
    github: "https://github.com/ergoplatform/sigma-rust",
    icon: Shield,
    language: "Rust",
  },
]

const quickLinks = [
  {
    title: "Quickstart",
    description: "Build your first Ergo program directly in the browser",
    href: "/build/docs/quickstart",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "eUTXO Model",
    description: "How Ergo stores data",
    href: "/build/docs/eutxo",
    icon: Layers,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "SDKs & Libraries",
    description: "Available development tools and frameworks",
    href: "/build/docs/sdks",
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Smart Contracts",
    description: "Smart contracts on Ergo",
    href: "/build/docs/contracts",
    icon: FileQuestion,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cookbook",
    description: "Ready-to-use code recipes for Ergo developers",
    href: "/build/docs/cookbook",
    icon: BookOpen,
    color: "from-orange-500 to-cyan-500",
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cyan-400 prose-a:underline">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Documentation
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Your central hub for building on Ergo. From your first dApp to advanced protocol integrations.
          </p>
        </div>

        {/* Getting Started Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Getting Started</h2>
          
          {/* Quickstart Card */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-orange-500 rounded-lg">
                <Rocket className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Quickstart</h3>
                <p className="text-gray-300 mb-4">
                  Build your first Ergo program directly in the browser. No setup required - write and test ErgoScript contracts instantly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/build/playground"
                    className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg font-medium text-black hover:bg-orange-600 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" /> Try Ergo Playground
                  </Link>
                  <Link
                    href="/build/docs/quickstart"
                    className="inline-flex items-center px-4 py-2 bg-neutral-800 rounded-lg font-medium text-white hover:bg-neutral-700 transition-colors"
                  >
                    <Code className="w-4 h-4 mr-2" /> Quickstart Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-orange-400" />
                <h3 className="font-semibold text-white">Setup Local Environment</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Install dependencies for Ergo development
              </p>
              <Link
                href="/build/docs/setup"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold text-white">Deploy Your First dApp</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Deploy your first Ergo application
              </p>
              <Link
                href="/build/docs/first-dapp"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-white">Cookbook</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Ready-to-use code recipes for Ergo developers
              </p>
              <Link
                href="/build/docs/cookbook"
                className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium"
              >
                Open Cookbook <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Start Learning Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Start Learning</h2>
          <p className="text-gray-400 mb-6">
            Learn the key concepts specific to Ergo development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-orange-400" />
                <h3 className="font-semibold text-white">eUTXO Model</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                How Ergo stores data
              </p>
              <Link
                href="/build/docs/eutxo"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold text-white">Fees on Ergo</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Costs to send transactions on Ergo
              </p>
              <Link
                href="/build/docs/fees"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-white">Transactions</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                How to interact with the Ergo network
              </p>
              <Link
                href="/build/docs/transactions"
                className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileQuestion className="w-6 h-6 text-purple-400" />
                <h3 className="font-semibold text-white">Smart Contracts</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Smart contracts on Ergo
              </p>
              <Link
                href="/build/docs/contracts"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Client Side Development Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Client Side Development</h2>
          <p className="text-gray-400 mb-6">
            If you develop on the client side, the following community-contributed SDKs help you interact with the network in popular languages:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Language</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">SDK</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Rust</td>
                  <td className="py-3 px-4">
                    <Link href="https://docs.rs/sigma-rust" className="text-orange-400 hover:text-orange-300">
                      sigma-rust
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">TypeScript</td>
                  <td className="py-3 px-4">
                    <Link href="https://github.com/ergoplatform/fleet" className="text-orange-400 hover:text-orange-300">
                      @ergoplatform/fleet
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Java/Kotlin/Scala</td>
                  <td className="py-3 px-4">
                    <Link href="https://github.com/ergoplatform/ergo-appkit" className="text-orange-400 hover:text-orange-300">
                      ergo-appkit
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Python</td>
                  <td className="py-3 px-4">
                    <Link href="https://github.com/ergoplatform/ergo-python" className="text-orange-400 hover:text-orange-300">
                      ergo-python
                    </Link>
                  </td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-medium">Go</td>
                  <td className="py-3 px-4">
                    <Link href="https://github.com/ergoplatform/ergo-go" className="text-orange-400 hover:text-orange-300">
                      ergo-go
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">C#</td>
                  <td className="py-3 px-4">
                    <Link href="https://github.com/ergoplatform/ergo-dotnet" className="text-orange-400 hover:text-orange-300">
                      ergo-dotnet
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Running a node Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Running a node</h2>
          <p className="text-gray-400 mb-6">
            Explore what it takes to operate an Ergo node and help secure the network.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-orange-400" />
                <h3 className="font-semibold text-white">Nodes</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Individual nodes securing the Ergo network
              </p>
              <Link
                href="/build/docs/node"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold text-white">System Requirements</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Recommended hardware requirements and ERG required to operate a node
              </p>
              <Link
                href="/build/docs/requirements"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-white">Node Setup</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Setup a node and get connected to a cluster for the first time
              </p>
              <Link
                href="/build/docs/mining"
                className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Getting Support Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Getting Support</h2>
          <p className="text-gray-400 mb-6">
            Get help from the Ergo community on Discord and Telegram.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-400" />
                <h3 className="font-semibold text-white">Community</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Connect with other Ergo developers, ask questions, and share your projects.
              </p>
              <div className="flex gap-2">
                <Link
                  href="https://discord.gg/ergoplatform"
                  className="inline-flex items-center px-3 py-2 bg-blue-600 rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  Discord
                </Link>
                <Link
                  href="https://t.me/ergoplatform"
                  className="inline-flex items-center px-3 py-2 bg-blue-500 rounded-lg text-sm font-medium text-white hover:bg-blue-600 transition-colors"
                >
                  Telegram
                </Link>
              </div>
            </div>
            
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <LifeBuoy className="w-6 h-6 text-cyan-400" />
                <h3 className="font-semibold text-white">Support</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Find answers to common questions and get help with troubleshooting.
              </p>
              <Link
                href="/build/docs/faq"
                className="inline-flex items-center px-3 py-2 bg-orange-500 rounded-lg text-sm font-medium text-black hover:bg-orange-600 transition-colors"
              >
                FAQ & Troubleshooting
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 