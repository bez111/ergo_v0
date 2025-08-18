"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Database, 
  ExternalLink, 
  ChevronRight, 
  Shield, 
  Code, 
  CheckCircle, 
  Zap, 
  Info, 
  GitBranch, 
  BookOpen, 
  Settings,
  Globe,
  Lock,
  Cpu,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function OraclesPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="oracle-pools-v2" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Oracle Pools V2
        </TabsTrigger>
        <TabsTrigger value="mixicles" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Mixicles
        </TabsTrigger>
        <TabsTrigger value="comparison" className="flex items-center gap-2 justify-center">
          <Settings className="w-4 h-4" /> Comparison
        </TabsTrigger>
      </TabsList>
      
      {/* Overview Tab */}
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Oracles on Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Decentralized oracle infrastructure connecting off-chain data with on-chain transactions. Ergo's Oracle Pools provide secure, efficient, and decentralized data feeds for DeFi applications without the vulnerabilities of centralized oracles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/ecosystem/infrastructure"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
            </Link>
            <a
              href="https://github.com/anon-real/ergo-oracles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-orange-400" /> What are Oracle Pools?
          </h2>
          <p className="text-gray-300">
            Oracle Pools are Ergo's innovative solution for decentralized oracle infrastructure. They serve as an abstraction layer over oracle data, providing scalable benefits while managing trade-offs between cost and speed. Oracle Pools eliminate the need for centralized price feeds and protect against Flash Loan attacks.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Decentralized Security
            </h3>
            <p className="text-gray-300 mb-4">
              Oracle Pools utilize Ergo's eUTXO model and ErgoScript to create highly decentralized oracle networks that are resistant to manipulation and single points of failure.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple oracle providers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Consensus-based data aggregation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Flash loan attack protection
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" /> Developer Friendly
            </h3>
            <p className="text-gray-300 mb-4">
              Built on ErgoScript, Oracle Pools provide comprehensive tools and libraries for developers to integrate oracle data into their DeFi applications.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Oracle Core library
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Connector libraries
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Easy bootstrap tools
              </li>
            </ul>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-cyan-400" /> How Oracle Pools Work
          </h2>
          <p className="text-gray-300 mb-4">
            Oracle Pools consist of interconnected components that handle complex transactions including data posting and on-chain oracle pool protocol execution. Oracle Core manages these transactions and is packaged with Oracle Pool Bootstrap and Connector Library.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Data Providers</h4>
              <p className="text-gray-300 text-sm">Post external data on-chain with precise encoding within transactions.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Consensus Mechanism</h4>
              <p className="text-gray-300 text-sm">Multiple oracles reach consensus on data points through averaging and validation.</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Resources & Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> GitHub Repositories</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://github.com/anon-real/ergo-oracles" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Oracles CLI Tool</a></li>
                <li><a href="https://github.com/anon-real/eth-usd-connector" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ETH/USD Connector</a></li>
                <li><a href="https://github.com/anon-real/oracles-v2" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracles V2 Implementation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Articles & Documentation</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://medium.com/ergonauts/ergo-oracle-pools-overview-7e3b5b6c2e6b" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Pools Overview</a></li>
                <li><a href="https://blog.chain.link/chainlink-oracles-vs-ergo-oracle-pools/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Chainlink vs Ergo Oracle Pools</a></li>
                <li><a href="https://www.ergoforum.org/t/trustless-oracle-contracts/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Trustless Oracle Contracts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Oracle Pools V2 Tab */}
      <TabsContent value="oracle-pools-v2">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Oracle Pools V2
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The next generation of Ergo's oracle infrastructure. Oracle Pools V2 introduces significant improvements including single pool addresses, epoch counters, compact boxes, and token-based rewards to resolve the drawbacks of the first version.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ergoplatform/eips/blob/master/eip-0016.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> EIP-16 Specification
            </a>
            <a
              href="https://github.com/anon-real/easy-ergo-oracle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Easy Setup Guide
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> What's New in V2?
          </h2>
          <p className="text-gray-300">
            Oracle Pools V2 resolves various drawbacks of the first version including extensive dust generation, low rewards, complexity due to two types of pool boxes, and non-transferability of oracle and ballot tokens.
          </p>
        </div>

        {/* Key Improvements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> Single Pool Address
            </h3>
            <p className="text-gray-300 mb-4">
              All operations now use a single pool address for simplified management and reduced complexity.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Unified pool management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Simplified operations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced complexity
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" /> Epoch Counter
            </h3>
            <p className="text-gray-300 mb-4">
              Better state management with epoch-based tracking for improved oracle pool lifecycle management.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Epoch-based tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved state management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Better lifecycle control
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Token-Based Rewards
            </h3>
            <p className="text-gray-300 mb-4">
              Reward accumulation and transferability of oracle and ballot tokens for better incentive alignment.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reward accumulation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transferable tokens
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Better incentives
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-yellow-400" /> Compact Boxes
            </h3>
            <p className="text-gray-300 mb-4">
              Reduced dust generation with compact pool and refresh boxes for improved efficiency.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced dust generation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Compact pool boxes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Improved efficiency
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Access Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" /> Getting Started with V2
          </h2>
          <p className="text-gray-300 mb-4">
            Bootstrap your own Oracle Pool V2 using the easy-ergo-oracle guide and integrate oracle data into your DeFi applications.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-orange-400 mb-2">Example: ERG/XAU Pool Setup</h4>
            <pre className="bg-neutral-900 rounded p-3 text-xs overflow-x-auto text-gray-300">
{`# Bootstrap ERG/XAU pool on testnet
git clone https://github.com/anon-real/easy-ergo-oracle
cd easy-ergo-oracle
docker-compose up -d
# Follow the setup guide for configuration`}
            </pre>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://github.com/anon-real/easy-ergo-oracle" target="_blank" rel="noopener noreferrer"
              className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
              <h4 className="font-bold text-orange-400 mb-2">Easy Oracle Setup</h4>
              <p className="text-gray-300 text-sm">Docker-based oracle pool bootstrap with comprehensive documentation.</p>
            </a>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0023.md" target="_blank" rel="noopener noreferrer"
              className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
              <h4 className="font-bold text-orange-400 mb-2">EIP-23 Specification</h4>
              <p className="text-gray-300 text-sm">Complete Oracle Pool 2.0 specification with detailed comparisons.</p>
            </a>
          </div>
        </div>
      </TabsContent>

      {/* Mixicles Tab */}
      <TabsContent value="mixicles">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Mixicles on Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Privacy-preserving oracle primitives that enable conditional payments based on external data while hiding the actual data and outcomes from the public blockchain.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/ergoplatform/eips/blob/master/eip-0016.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Learn More
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-400" /> What are Mixicles?
          </h2>
          <p className="text-gray-300">
            Mixicles are privacy-preserving oracle primitives, originally proposed by Chainlink, that can be implemented on Ergo thanks to its flexible eUTXO model and expressive ErgoScript language. They enable conditional payments based on external data while hiding the actual data and outcomes.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" /> Privacy-Preserving
            </h3>
            <p className="text-gray-300 mb-4">
              Mixicles hide actual data and outcomes from the public blockchain while still providing conditional payments based on external data.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Hidden data outcomes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Private conditional payments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Confidential DeFi contracts
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" /> Advanced DeFi
            </h3>
            <p className="text-gray-300 mb-4">
              Mixicles enable advanced DeFi applications such as private prediction markets, confidential derivatives, and more.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Private prediction markets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Confidential derivatives
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Privacy-focused DeFi
              </li>
            </ul>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-cyan-400" /> How Mixicles Work
          </h2>
          <p className="text-gray-300 mb-4">
            Mixicles combine oracle data with privacy features to create conditional payments that execute based on external data without revealing the actual data or outcomes to the public blockchain.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Oracle Integration</h4>
              <p className="text-gray-300 text-sm">External data feeds integrated without revealing outcomes to the blockchain.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Privacy Layer</h4>
              <p className="text-gray-300 text-sm">Conditional payments execute based on hidden data and outcomes.</p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Resources & Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> Technical Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0016.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-16 Specification</a></li>
                <li><a href="https://github.com/anon-real/oracles-v2" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracles V2 Implementation</a></li>
                <li><a href="https://github.com/anon-real/easy-ergo-oracle" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Easy Oracle Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Articles & Research</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://medium.com/ergonauts/ergo-oracle-pools-overview-7e3b5b6c2e6b" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Pools Overview</a></li>
                <li><a href="https://blog.chain.link/chainlink-oracles-vs-ergo-oracle-pools/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Chainlink vs Ergo Oracle Pools</a></li>
                <li><a href="https://www.ergoforum.org/t/trustless-oracle-contracts/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Trustless Oracle Contracts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Comparison Tab */}
      <TabsContent value="comparison">
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Oracle Pools V2 vs Chainlink
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Structured comparison of Ergo Oracle Pools v2 and Chainlink (as of July 2025). This analysis covers architecture, transparency, decentralization, and practical implementation differences.
          </p>
        </div>

        {/* Detailed Comparison Sections */}
        <div className="space-y-8 mb-12">
          {/* 1. Architecture & Design */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
              <GitBranch className="w-6 h-6" /> 1. Architecture & Design
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>UTXO-Based:</strong> All data and incentives are implemented via UTXO boxes, ensuring on-chain transparency, automatic verification, and decentralization with no central "operator."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Oracle Pool:</strong> A smart contract + pool of data providers, where anyone can become an oracle, submit data, and earn rewards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>No central operator:</strong> The system is decentralized by default—anyone can join.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Consensus mechanism:</strong> Uses an aggregator (e.g., median or other function) to reach consensus on the submitted value among providers.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Account Model (Ethereum/EVM):</strong> Oracles interact with contracts as "accounts," often through a dedicated oracle network.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Oracle Network:</strong> Chainlink is a network of validated oracles, run by external operators who sign data and aggregate responses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Node Reputation:</strong> Requires LINK staking and reputation to become an operator; nodes are often white-listed or curated.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Aggregation:</strong> Values are aggregated by a centralized contract with set logic (usually median, weighted mean, or quorum-based).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Transparency & Verifiability */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <Shield className="w-6 h-6" /> 2. Transparency & Verifiability
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Full on-chain transparency:</strong> All stakes, payouts, and data submissions are visible on-chain. Anyone can verify every post and payout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>No trust in providers:</strong> Any fork or abuse is publicly recorded; there are no hidden payouts or off-chain agreements.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Partially on-chain:</strong> Requests and some payouts are on-chain, but key processes like node reputation, off-chain aggregators, and node keys are off-chain.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Elements of trust:</strong> Trust is required in off-chain coordination, Chainlink contracts, and node selection.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Incentives & Payments */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
              <Zap className="w-6 h-6" /> 3. Incentives & Payments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>UTXO incentives:</strong> Oracles only get paid if their data matches the pool (e.g., median) and doesn't deviate from the consensus.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Low fees:</strong> Payouts are handled by smart contracts, with minimal or no extra gas fees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Flexible rewards:</strong> Rewards can be paid in ERG or any token.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Requires LINK:</strong> Nodes are paid in LINK tokens, which must be managed or swapped by operators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Higher fees:</strong> Each data update requires a separate transaction, which can be costly on Ethereum/Polygon.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Centralized incentives:</strong> Chainlink coordinators can add/remove nodes, affecting rewards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Decentralization */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400">
              <Globe className="w-6 h-6" /> 4. Decentralization
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Open network:</strong> Anyone can join the pool; rules are transparent.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>No white-listing:</strong> No manual approval—just protocol mechanics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Flexible participation:</strong> Oracles can join/leave freely.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Curated white-lists:</strong> Only selected nodes participate in key feeds (especially for major price pairs).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Administrative management:</strong> Chainlink Labs and partners control node composition and rules.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Flexibility & Expandability */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400">
              <Settings className="w-6 h-6" /> 5. Flexibility & Expandability
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Any data:</strong> Any data type can be aggregated; no restrictions on format or feed type.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Flexible settings:</strong> Aggregators, publication periods, thresholds, and penalties are easily adjustable.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Primarily price feeds:</strong> Focuses on price data (USD, ETH, BTC, etc.), less often on weather, sports, or other off-chain data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Adding feeds is harder:</strong> Requires cooperation with Chainlink Labs and network operators.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Security & Attacks */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-400">
              <Lock className="w-6 h-6" /> 6. Security & Attacks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Economic protection:</strong> The pool's economic model makes attacks unprofitable—malicious publishers quickly lose revenue and the network can ignore their input.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>On-chain monitoring:</strong> All manipulations are visible and can be analyzed by anyone.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Requires node reputation:</strong> Nodes can be removed for violations, but much is tracked off-chain.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Economic attacks possible:</strong> During high volatility, Sybil or takeover attacks are theoretically possible if staking and monitoring are weak.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Speed & Cost */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <Zap className="w-6 h-6" /> 7. Speed & Cost
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Fast & cheap:</strong> Thanks to UTXO model, transactions are low-cost and confirmed every Ergo block.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>No "gas spikes":</strong> No EVM gas congestion or fee spikes.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>More expensive:</strong> Especially on Ethereum. A single data update can cost several dollars.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Slower updates:</strong> Feeds are often updated every 10–20 minutes on Layer 1 due to gas costs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8. Usability & Integration */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
              <Code className="w-6 h-6" /> 8. Usability & Integration
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-green-400 mb-3">Ergo Oracle Pools v2</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Direct integration:</strong> Any dApp can read data directly from the blockchain with no intermediaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Open-source tooling:</strong> All code is open and available to the community.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h3 className="font-bold text-blue-400 mb-3">Chainlink</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>SDKs & middleware:</strong> Well-integrated with many EVM chains; robust SDKs for Solidity/JavaScript.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong>More ready-made feeds:</strong> Easier to find pre-built feeds for popular assets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" /> Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-neutral-800/50 border border-neutral-700 rounded-lg text-sm text-gray-300">
              <thead>
                <tr className="bg-neutral-700/50 text-gray-200">
                  <th className="py-3 px-4 border-r border-neutral-700 text-left">Aspect</th>
                  <th className="py-3 px-4 border-r border-neutral-700 text-left">Ergo Oracle Pools v2</th>
                  <th className="py-3 px-4 text-left">Chainlink</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Architecture</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Decentralized pool on UTXO</td>
                  <td className="py-3 px-4">Oracle network with central management</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Transparency</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Full, all on-chain</td>
                  <td className="py-3 px-4">Partial on-chain, partial off-chain</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Decentralization</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Complete, no white-list</td>
                  <td className="py-3 px-4">Limited, white-list, Labs curated</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Incentives</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Protocol/smart contract, any currency</td>
                  <td className="py-3 px-4">LINK token, centralized contracts</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Cost</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Very low</td>
                  <td className="py-3 px-4">High (esp. on Ethereum)</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Flexibility</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Any data, any aggregator</td>
                  <td className="py-3 px-4">Limited to feeds managed by Labs</td>
                </tr>
                <tr className="hover:bg-neutral-700/30 border-b border-neutral-700">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Usability</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Simple integration, open-source</td>
                  <td className="py-3 px-4">Broad SDKs, ready-made price feeds</td>
                </tr>
                <tr className="hover:bg-neutral-700/30">
                  <td className="py-3 px-4 border-r border-neutral-700 font-semibold">Security</td>
                  <td className="py-3 px-4 border-r border-neutral-700">Transparent economics, on-chain audits</td>
                  <td className="py-3 px-4">Relies on node rep, off-chain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
            <Info className="w-6 h-6" /> Summary
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Ergo Oracle Pools v2</strong> are ideal for truly decentralized projects needing full on-chain transparency, minimal fees, independence from centralization, and open architecture for any data types.
            </p>
            <p>
              <strong>Chainlink</strong> is a great choice for quick launch on EVM chains if you need a standard feed (ETH, BTC price), have a LINK budget, and are okay with semi-centralized operator models.
            </p>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Resources & Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><GitBranch className="w-4 h-4" /> Technical Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://github.com/anon-real/ergo-oracles" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Oracles CLI Tool</a></li>
                <li><a href="https://github.com/anon-real/eth-usd-connector" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ETH/USD Connector</a></li>
                <li><a href="https://github.com/anon-real/oracles-v2" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracles V2 Implementation</a></li>
                <li><a href="https://github.com/anon-real/easy-ergo-oracle" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Easy Oracle Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Articles & Research</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://medium.com/ergonauts/ergo-oracle-pools-overview-7e3b5b6c2e6b" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Pools Overview</a></li>
                <li><a href="https://blog.chain.link/chainlink-oracles-vs-ergo-oracle-pools/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Chainlink vs Ergo Oracle Pools</a></li>
                <li><a href="https://www.ergoforum.org/t/trustless-oracle-contracts/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Trustless Oracle Contracts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 