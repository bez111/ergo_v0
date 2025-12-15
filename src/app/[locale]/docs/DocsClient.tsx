"use client"

/* eslint-disable react/no-unescaped-entities */
import { 
  BookOpen, 
  Code, 
  Pickaxe, 
  Users, 
  HelpCircle, 
  Wallet, 
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Lightbulb,
  Target,
  Rocket,
  Cpu,
  Database,
  Network,
  Building,
  Search,
  FileText,
  Settings,
  BarChart3,
  Users2,
  Calendar,
  Award,
  ExternalLink,
  Lock,
  Coins,
  GitBranch,
  Eye,
  Smartphone,
  Star,
  FileQuestion,
  GraduationCap
} from "lucide-react"
import { Link } from "@/i18n/navigation"

export default function DocsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Documentation
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Your comprehensive guide to understanding, using, and building on Ergo. From basic concepts to advanced development, find everything you need to navigate the Ergo ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/why-ergo"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Why Ergo?
          </Link>
          <Link
            href="/learn/glossary"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Search className="w-5 h-5 mr-2" /> Glossary
          </Link>
          <Link
            href="/docs/developers"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Code className="w-5 h-5 mr-2" /> Developer Hub
          </Link>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-orange-400" /> Getting Started
        </h2>
        <p className="text-gray-300 mb-6">
          Essential resources for newcomers to Ergo. Start here to understand the fundamentals and find your path forward.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/why-ergo"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Why Ergo
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Discover what makes Ergo unique and why it matters in the blockchain ecosystem
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/key-features"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Key Features
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Explore Ergo's core technological innovations and capabilities
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/learn/glossary"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Glossary
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Comprehensive blockchain and Ergo terminology guide
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/faq"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                FAQ
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Find answers to commonly asked questions about Ergo
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Core Technology Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> Core Technology
        </h2>
        <p className="text-gray-300 mb-6">
          Deep dive into Ergo's technical foundations and innovative features that set it apart from other blockchain platforms.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/introduction/eutxo"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                eUTxO Model
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Extended UTXO model for advanced smart contracts
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/nipopows"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                NIPoPoWs
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Non-Interactive Proofs of Proof-of-Work
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/storage-rent"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Coins className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Storage Rent
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Economic model for sustainable blockchain
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/autolykos"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Autolykos
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Memory-hard proof-of-work algorithm
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/privacy"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Privacy Features
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Advanced privacy and confidentiality tools
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/light-clients"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Light Clients
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Lightweight blockchain verification
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Development Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-yellow-400" /> Development
        </h2>
        <p className="text-gray-300 mb-6">
          Complete resources for developers building on Ergo. From smart contracts to full-stack applications.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/developers"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Developer Hub
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Unified developer portal with all resources
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/developers/ergoscript-languages"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                ErgoScript
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Smart contract language and compiler
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/developers/tooling"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Developer Tools
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                SDKs, libraries, and development tools
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/developers/data-model-apis"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Network className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                APIs & Data
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                REST APIs and data model documentation
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/developers/tutorials"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Tutorials
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Step-by-step guides and examples
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/developers/box"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Box Model
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Understanding Ergo's box-based architecture
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-green-400" /> Ecosystem
        </h2>
        <p className="text-gray-300 mb-6">
          Explore the growing ecosystem of applications, tools, and services built on Ergo.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/ecosystem"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Overview
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Complete ecosystem map
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/applications"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Applications
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                dApps built on Ergo
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/financial"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                DeFi
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Financial protocols
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/privacy"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Privacy
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Privacy solutions
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/nfts"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                NFTs
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                NFT platforms
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/infrastructure"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Network className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Infrastructure
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Core infrastructure
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/tooling"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Tooling
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Development tools
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/ecosystem/daos"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users2 className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                DAOs
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Governance systems
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Mining Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Pickaxe className="w-6 h-6 text-purple-400" /> Mining
        </h2>
        <p className="text-gray-300 mb-6">
          Everything you need to know about mining Ergo, from hardware setup to pool selection.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/miners"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Pickaxe className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Mining Guide
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Complete mining documentation with setup instructions
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/miners/Miner-Tooling"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Mining Software
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Mining software and configuration guides
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/miners/resources"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Mining Resources
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Pools, calculators, and community resources
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Governance & Community Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" /> Governance & Community
        </h2>
        <p className="text-gray-300 mb-6">
          Learn about Ergo's governance structure and how to get involved in the community.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/introduction/ergo-foundation"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Ergo Foundation
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                The organization behind Ergo
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/devdao"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                DevDao
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Developer DAO for ecosystem growth
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/sigmanauts"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Sigmanauts
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Community ambassador program
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/social-contract"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Social Contract
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Ergo's principles and values
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/events"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Events
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Conferences and meetups
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/contribute"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Contribute
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                How to contribute to Ergo
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6 text-orange-400" /> Additional Resources
        </h2>
        <p className="text-gray-300 mb-6">
          Research papers, whitepapers, and additional learning materials.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/docs/introduction/research-whitepapers"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Research Papers
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Academic papers and technical research
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/resources"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Learning Resources
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Videos, articles, and tutorials
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/roadmap"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Roadmap
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Future development plans
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/wallets"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Wallet className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Wallets
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Wallet options and setup guides
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/audit"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Security Audits
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Security audit reports
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>

          <Link 
            href="/docs/introduction/misconceptions"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileQuestion className="w-6 h-6 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                Misconceptions
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Common myths debunked
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-8 text-center">
        <Lightbulb className="w-12 h-12 text-orange-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Build?
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Join thousands of developers building the future of decentralized finance on Ergo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/docs/developers"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <Code className="w-4 h-4" />
            Start Building
          </Link>
          <a 
            href="https://discord.gg/ergo-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Join Discord
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  )
} 