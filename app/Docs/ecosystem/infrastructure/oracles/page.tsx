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
      <TabsList className="grid w-full grid-cols-3 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="oracle-pools-v2" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Oracle Pools V2
        </TabsTrigger>
        <TabsTrigger value="mixicles" className="flex items-center gap-2 justify-center">
          <Zap className="w-4 h-4" /> Mixicles
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
              href="/Docs/ecosystem/infrastructure"
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
            <Link
              href="/Docs/ecosystem/infrastructure"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to Infrastructure
            </Link>
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
    </Tabs>
  );
} 