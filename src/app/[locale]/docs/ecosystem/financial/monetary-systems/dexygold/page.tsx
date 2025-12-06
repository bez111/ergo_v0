
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
  Coins, 
  Shield, 
  Code, 
  ExternalLink,
  ChevronRight,
  Lock,
  Cpu,
  Database,
  CheckCircle,
  Zap,
  Users,
  Globe,
  GitBranch,
  Brain,
  GitCommit,
  Network,
  FileText,
  Play,
  BookOpen,
  Atom,
  TrendingUp,
  AlertTriangle,
  Target,
  Banknote,
  BarChart3,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export default function DexyGoldPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          DexyGold
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          An innovative seigniorage-based stablecoin that leverages oracle price feeds to maintain a peg to USD/XAU (gold) price. DexyGold is the first implementation of the Dexy protocol, currently in beta on the Ergo blockchain.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Monetary Systems
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View Beta
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is DexyGold?
        </h2>
        <p className="text-gray-300">
          DexyGold is the first implementation of the Dexy protocol, a seigniorage-based stablecoin that maintains a peg to the USD/XAU (gold) price using a XAU/ERG v2 oracle pool. Unlike traditional stablecoins, Dexy uses an algorithmic central bank approach with explicit intervention mechanisms.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Banknote className="w-5 h-5 text-green-400" /> Seigniorage-Based
          </h3>
          <p className="text-gray-300 mb-4">
            Dexy uses seigniorage and oracle price feeds to maintain its peg, with an algorithmic central bank performing interventions when needed to stabilize the price.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Oracle-driven price feeds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Algorithmic central bank
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Explicit intervention mechanisms
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" /> Gold-Pegged
          </h3>
          <p className="text-gray-300 mb-4">
            DexyGold maintains a peg to the USD/XAU (gold) price using a XAU/ERG v2 oracle pool, providing stability through precious metal backing.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              USD/XAU price peg
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              XAU/ERG v2 oracle pool
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Precious metal backing
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" /> Overcollateralization
          </h3>
          <p className="text-gray-300 mb-4">
            Unlike Terra's original MM algorithm, Dexy incorporates overcollateralization to prevent death spiral scenarios and ensure system stability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Prevents death spiral
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Visible collateral in protocol
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Transparent collateral levels
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-yellow-400" /> Advanced Mechanisms
          </h3>
          <p className="text-gray-300 mb-4">
            Features arbitrage mechanisms, top-up swaps, and anti-draining measures to maintain price stability and prevent system exploitation.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Arbitrage mechanisms
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Top-up swaps
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Anti-draining measures
            </li>
          </ul>
        </div>
      </div>

      {/* Design Overview Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-cyan-400" /> Design Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-green-400" /> Emission Contract
            </h3>
            <p className="text-gray-300 mb-4">
              Allows one-way minting of new Dexy tokens by selling ERG at the oracle pool rate. Reverse swaps (selling Dexy for ERG) are not possible through this contract.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" /> Liquidity Pool
            </h3>
            <p className="text-gray-300 mb-4">
              Facilitates buying and selling of Dexy tokens using ERG. Utilizes Uniswap V2 logic with modifications based on the oracle pool rate.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" /> Arbitrage Mechanism
            </h3>
            <p className="text-gray-300 mb-4">
              When the oracle rate is higher than the LP rate, arbitrageurs can mint Dexy from the emission contract and sell to the LP for a profit, helping push the price towards the peg.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-yellow-400" /> Top-up Swaps
            </h3>
            <p className="text-gray-300 mb-4">
              When the oracle rate is lower than the LP rate, ERG from the emission contract can be used to buy Dexy from the LP, pushing the price back up.
            </p>
          </div>
        </div>
      </div>

      {/* Beta Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-green-400" /> Beta Testing
        </h2>
        <p className="text-gray-300 mb-4">
          DexyGold is currently in beta testing phase with the following components available:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">LP UI</h4>
            <p className="text-gray-300 text-sm">Liquidity pool interface for trading</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Bank UI</h4>
            <p className="text-gray-300 text-sm">Central bank interface for minting</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Testnet</h4>
            <p className="text-gray-300 text-sm">Testnet Nautilus wallet required</p>
          </div>
        </div>
      </div>

      {/* Vulnerabilities Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" /> Potential Vulnerabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Draining Attack
            </h3>
            <p className="text-gray-300 mb-4">
              Alternating between profitable minting/selling and topping up the LP could potentially drain the emission contract's ERG. Anti-draining measures help mitigate this risk.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Oracle Manipulation
            </h3>
            <p className="text-gray-300 mb-4">
              The design relies on accurate oracle price feeds. Safeguards against oracle attacks and manipulations should be considered.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Demand Shifts
            </h3>
            <p className="text-gray-300 mb-4">
              Significant drops in demand for Dexy could lead to persistent selling pressure. The stabilizing mechanisms may need to be robust enough to handle such scenarios.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Modeling Requirements
            </h3>
            <p className="text-gray-300 mb-4">
              Thorough modeling of economic incentives, game theory, and attack scenarios would provide valuable insights into the system's stability and resilience.
            </p>
          </div>
        </div>
      </div>

      {/* Terra Comparison Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-400" /> Terra Comparison
        </h2>
        <p className="text-gray-300 mb-4">
          There have been discussions comparing Dexy to the original Terra MM (Market Module) algorithm. However, Dexy incorporates overcollateralization, which helps prevent the "death spiral" scenario that affected Terra.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Terra's Issues
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Infinite inflation of base currency
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Death spiral scenarios
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                No overcollateralization
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Dexy's Solutions
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Explicit overcollateralization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent collateral visibility
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Prevents death spiral
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-green-400" /> How does DexyGold maintain its peg?
            </h3>
            <p className="text-gray-300">
              DexyGold uses an algorithmic central bank approach with explicit intervention mechanisms. When the price deviates from the oracle rate, the central bank intervenes by injecting ERG reserves or performing other stabilization actions.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" /> What makes it different from Terra?
            </h3>
            <p className="text-gray-300">
              Unlike Terra's original MM algorithm, Dexy incorporates overcollateralization to prevent death spiral scenarios. The collateral is explicitly visible in the protocol-owned liquidity, and the system uses transparent collateral levels rather than dynamic supply illusions.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" /> What are the collateral levels?
            </h3>
            <p className="text-gray-300">
              Collateral levels in Dexy may vary over time. If the system performs well and mint/LP fees accumulate, the collateral ratio could exceed 400% in the long run. At launch, it's expected to be slightly above 100%. In worst-case scenarios, if the gold price significantly outperforms ERG, the protocol could become undercollateralized.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Play className="w-5 h-5 text-yellow-400" /> When will it be available?
            </h3>
            <p className="text-gray-300">
              DexyGold is currently in beta testing phase with LP UI, Bank UI, and testnet functionality available. Testnet ERG is available via the faucet, and testnet Nautilus wallet is required for participation.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Documentation
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Technical Documentation</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">DexySpec</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Dexy Stablecoin Design</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Dexy: USD Simplest Stablecoin</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Dexy Enhancements and Attack Mitigation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Join the DexyGold community on Telegram</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Join the DexyGold community on Discord</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">GitHub Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Draft Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Unlike Terra's original MM algorithm, Dexy incorporates overcollateralization to prevent death spiral scenarios. The collateral is explicitly visible in the protocol-owned liquidity, ensuring transparency and stability."
        </blockquote>
      </div>
    </>
  );
} 