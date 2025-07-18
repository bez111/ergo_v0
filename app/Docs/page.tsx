"use client"
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
  CheckCircle,
  Brain,
  Lock,
  Coins,
  GitBranch,
  Eye,
  Key,
  Smartphone,
  ArrowRight,
  Star,
  Layers,
  FileQuestion
} from "lucide-react"
import Link from "next/link"

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
        <p className="text-lg text-gray-300 mb-6">
          Whether you're a newcomer exploring blockchain technology or an experienced developer building the next generation of decentralized applications, this documentation provides the resources you need to succeed with Ergo.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/why-ergo"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Why Ergo?
          </Link>
          <Link
            href="/Docs/introduction/glossary"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Search className="w-5 h-5 mr-2" /> Glossary
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
            href="/Docs/why-ergo"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Why Ergo
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Discover what makes Ergo unique and why it matters in the blockchain ecosystem
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/key-features"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Key Features
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Explore Ergo's core technological innovations and capabilities
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/glossary"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Glossary
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Comprehensive blockchain and Ergo terminology guide
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/faq"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HelpCircle className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  FAQ
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Answers to frequently asked questions about Ergo
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
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
            href="/Docs/introduction/eutxo"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  eUTxO Model
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Extended Unspent Transaction Output model
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/nipopows"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  NIPoPoWs
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Non-Interactive Proofs of Proof-of-Work
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/privacy"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Privacy Features
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Advanced privacy and confidentiality tools
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/autolykos"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Autolykos
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Ergo's memory-hard proof-of-work algorithm
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/storage-rent"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Storage Rent
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Economic model for long-term data storage
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* Development Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-yellow-400" /> Development
        </h2>
        <p className="text-gray-300 mb-6">
          Resources for developers building on Ergo. From smart contracts to full-stack applications.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/technology/ergoscript"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  ErgoScript
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Ergo's powerful smart contract language
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/learn/guides"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Developer Guides
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Step-by-step tutorials and best practices
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/developers"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  API Reference
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Complete API documentation and examples
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/developers"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Tools & SDKs
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Development tools and software development kits
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe className="w-6 h-6 text-green-400" /> Ecosystem
        </h2>
        <p className="text-gray-300 mb-6">
          Explore the vibrant Ergo ecosystem and discover applications built on the platform.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/Docs/ecosystem"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Applications
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  dApps and services built on Ergo
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/ecosystem"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Infrastructure
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Bridges, oracles, and core infrastructure
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/ecosystem"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Financial Tools
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  DeFi protocols and financial applications
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/ecosystem"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Privacy Solutions
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Privacy-focused applications and tools
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>

      {/* Community Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" /> Community & Governance
        </h2>
        <p className="text-gray-300 mb-6">
          Get involved in the Ergo community and learn about governance structures.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/Docs/introduction/ergo-foundation"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Ergo Foundation
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  The organization behind Ergo's development
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/devdao"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  DevDao
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Developer DAO for community governance
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/sigmanauts"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Sigmanauts
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Community ambassador program
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/events"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Events
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Conferences, meetups, and community events
                </p>
          </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          </Link>

          <Link 
            href="/Docs/contribute"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-orange-400" />
          </div>
          </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Contribute
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Ways to contribute to the Ergo ecosystem
                </p>
          </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          </Link>
        </div>
      </div>

      {/* Practical Resources Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-400" /> Practical Resources
        </h2>
        <p className="text-gray-300 mb-6">
          Tools and guides for everyday use of Ergo.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            href="/Docs/introduction/wallets"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Wallets
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Secure storage solutions for ERG
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/miners"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Pickaxe className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Mining
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Mining guides and pool information
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/research-whitepapers"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-orange-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Research Papers
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Academic papers and technical research
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>

          <Link 
            href="/Docs/introduction/roadmap"
            className="group bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-orange-400" />
          </div>
          </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                  Roadmap
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Development roadmap and future plans
                </p>
          </div>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          </Link>
          </div>
          </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-8 text-center">
        <Lightbulb className="w-12 h-12 text-orange-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">
          Ready to Dive Deeper?
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Whether you're a developer, miner, or enthusiast, there's a place for you in the Ergo ecosystem. 
          Start your journey today and become part of the future of decentralized finance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/Docs/why-ergo"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Learn More
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/Docs/contribute"
            className="inline-flex items-center gap-2 bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Get Involved
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  )
} 