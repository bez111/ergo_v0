import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Globe, 
  Database, 
  Lock, 
  Cpu, 
  Coins, 
  GitBranch,
  CheckCircle, 
  ExternalLink,
  ChevronRight,
  Brain,
  Rocket,
  Settings,
  FileQuestion,
  BookOpen,
  Eye,
  Key,
  Network,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';

export default function KeyFeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Key Features
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo is a next-generation smart contract platform that enables anyone to participate in the digital DeFi revolution now.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Ensuring economic freedom for ordinary people through decentralized, private and secure financial tools.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/why-ergo"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Rocket className="w-5 h-5 mr-2" /> Why Ergo?
          </Link>
          <Link
            href="/Docs/introduction/faq"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <FileQuestion className="w-5 h-5 mr-2" /> FAQ
          </Link>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Creating financial contracts on the blockchain isn't just about the functionality; it's about making that functionality safe, accessible, and powerful."
        </blockquote>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link href="/Docs/introduction/eutxo" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-orange-400">eUTXO Model</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Ergo's Extended UTXO model provides superior security, scalability, and composability compared to account-based models. Each UTXO can carry arbitrary data and complex spending conditions.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Immutable transaction outputs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Parallel transaction processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced privacy features
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/developers/ergoscript-languages" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400">ErgoScript</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A powerful, declarative smart contract language that enables complex financial instruments while maintaining security and predictability.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Declarative programming model
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Predictable execution costs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sigma Protocols integration
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/developers/cryptographic-primitives" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-400">Sigma Protocols</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Advanced cryptographic protocols that enable zero-knowledge proofs and complex authentication schemes without compromising security.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Zero-knowledge proofs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Schnorr signatures
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Application-level privacy
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/introduction/nipopows" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400">NIPoPoWs</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Non-Interactive Proofs of Proof-of-Work enable lightweight clients to verify transactions without downloading the entire blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Lightweight verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Mobile-friendly
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced bandwidth usage
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/introduction/privacy" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Privacy Features</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Built-in privacy mechanisms including stealth addresses, ring signatures, and mixing protocols for enhanced user confidentiality.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Stealth addresses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ring signatures
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ErgoMixer integration
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/introduction/autolykos" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-400">Autolykos v2</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              ASIC-resistant Proof-of-Work algorithm that ensures fair mining distribution and prevents centralization of mining power.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ASIC-resistant design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                GPU-friendly mining
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized mining
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-yellow-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/introduction/storage-rent" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-400">Storage Rent</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Economic mechanism that prevents blockchain bloat by charging fees for long-term data storage, ensuring sustainable growth.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Prevents blockchain bloat
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Economic incentives
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sustainable growth
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-green-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>

        <Link href="/Docs/introduction/nipopow-sidechains" className="group">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:scale-105 transition-transform duration-200 cursor-pointer relative h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-red-400">Sidechains</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Support for interoperable sidechains that enable specialized functionality while maintaining security through the main chain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Interoperable design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Specialized functionality
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced scalability
              </li>
            </ul>
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-400 text-sm font-medium">
              Learn more
            </div>
          </div>
        </Link>
      </div>

      {/* Advanced Features Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> Advanced Features
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Multi-Stage Protocols</h4>
            <p className="text-gray-300 text-sm mb-3">Complex smart contracts that span multiple transactions with state management.</p>
            <Link
              href="/Docs/developers/ergoscript-languages"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors text-sm font-semibold"
            >
              Learn More <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2">Data Inputs</h4>
            <p className="text-gray-300 text-sm mb-3">Read-only access to UTXO data without consuming them, enabling oracle integration.</p>
            <Link
              href="/Docs/developers/data-model-apis/composing/wallet-interaction/data-inputs"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
            >
              Learn More <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Atomic Swaps</h4>
            <p className="text-gray-300 text-sm mb-3">Trustless cross-chain token exchanges without intermediaries or centralized exchanges.</p>
            <Link
              href="/Docs/ecosystem/financial"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
            >
              Learn More <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Ergo Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-orange-400" /> Why Ergo?
        </h2>
        <p className="text-gray-300 mb-4">
          A high-level summary of what puts Ergo head and shoulders above the competition.
        </p>
        <Link
          href="/Docs/why-ergo"
          className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition-colors"
        >
          Read More <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Contributing Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> Contributing
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo operates an open model where contributions from all are welcomed. Participate in decentralised finance!
        </p>
        <Link
          href="/Docs/contribute"
          className="inline-flex items-center px-4 py-2 bg-cyan-500 rounded-lg font-semibold text-black hover:bg-cyan-600 transition-colors"
        >
          Get Involved <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileQuestion className="w-6 h-6 text-blue-400" /> FAQ
        </h2>
        <p className="text-gray-300 mb-4">
          Check out the Frequently Asked Questions
        </p>
        <Link
          href="/Docs/introduction/faq"
          className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-lg font-semibold text-black hover:bg-blue-600 transition-colors"
        >
          View FAQ <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">Ready to explore more?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/Docs/developers"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Code className="w-5 h-5 mr-2 text-orange-400" />
            <span className="text-gray-300">Developer Docs</span>
          </Link>
          <Link
            href="/Docs/ecosystem"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Globe className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-gray-300">Ecosystem</span>
          </Link>
          <Link
            href="/Docs/miners"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Cpu className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-gray-300">Mining</span>
          </Link>
        </div>
      </div>
    </>
  );
}
