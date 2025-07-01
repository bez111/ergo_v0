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
  FileQuestion
} from 'lucide-react';
import Link from 'next/link';

export default function KeyFeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Powering the future of finance
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

      {/* Core Components Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Brain className="w-8 h-8 text-orange-400" /> Core Components
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Autolykos
            </h3>
            <p className="text-gray-300 mb-4">
              The underlying Memory-hard ASIC-resistant Proof of Work (PoW) algorithm oriented towards GPUs.
            </p>
            <Link
              href="/Docs/introduction/autolykos"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> eUTXO
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo uses the Extended UTXO (eUTXO) Model, which implies UTXOs with the ability to contain arbitrary data and sophisticated scripts.
            </p>
            <Link
              href="/Docs/introduction/utxo-vs-account"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" /> NIPoPoWs
            </h3>
            <p className="text-gray-300 mb-4">
              Enable extended support of light nodes which makes Ergo friendly for end-users, allowing them to run contracts on common devices such as mobile phones without centralised intermediaries.
            </p>
            <Link
              href="/Docs/introduction/light-clients"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-yellow-400" /> Privacy
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo provides superior access to discrete log-based zero-knowledge proofs.
            </p>
            <Link
              href="/Docs/introduction/privacy"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" /> Scaling
            </h3>
            <p className="text-gray-300 mb-4">
              Explore the various scaling solutions being explored on Ergo.
            </p>
            <Link
              href="/Docs/introduction/scaling"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-orange-400" /> Storage Rent
            </h3>
            <p className="text-gray-300 mb-4">
              Storage Rent is a nominal fee incurred by unmoved boxes after four years.
            </p>
            <Link
              href="/Docs/introduction/storage-rent"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> ErgoScript
            </h3>
            <p className="text-gray-300 mb-4">
              A simple high-level language enabling clear descriptions of contractual logic.
            </p>
            <Link
              href="/Docs/developers/ergoscript"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" /> Use Cases
            </h3>
            <p className="text-gray-300 mb-4">
              From oracles to alternative economic systems.
            </p>
            <Link
              href="/Docs/ecosystem"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm"
            >
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
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
          href="/Docs/introduction/contribute"
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