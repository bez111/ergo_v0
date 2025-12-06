
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
  Target
} from 'lucide-react';
import Link from 'next/link';

export default function GluonPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Gluon W±
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A new stablecoin protocol that functions as the dual of a liquidity pool, addressing limitations in existing protocols like Djed and SigmaUSD. Gluon W± operates on the Ergo blockchain with strong performance since early 2021.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/monetary-systems"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Monetary Systems
          </Link>
          <a
            href="https://gluon.gold"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit Gluon
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is Gluon W±?
        </h2>
        <p className="text-gray-300">
          Gluon W± is a stablecoin protocol presented by Bruno Woltzenlogel Paleo during the Ergoversary Summit 2023. It aims to address limitations in existing protocols like Djed and SigmaUSD by functioning as the dual of a liquidity pool, focusing on the pair of Stablecoin ReserveCoin (SigRSV and SigUSD) rather than ERG and SigmaUSD.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Strong Performance
          </h3>
          <p className="text-gray-300 mb-4">
            Gluon W± has demonstrated strong performance on Ergo, surviving market crashes since early 2021 while many other stablecoins have failed.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Survived market crashes since 2021
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Robust against volatility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Proven track record
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Atom className="w-5 h-5 text-blue-400" /> Duality Concept
          </h3>
          <p className="text-gray-300 mb-4">
            Gluon W± functions as the dual of a liquidity pool, with one asset remaining in the reserve while newly generated assets exist outside the reserve.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dual of liquidity pools
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Focuses on SigRSV and SigUSD pair
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Innovative protocol design
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" /> Nuclear Reactions
          </h3>
          <p className="text-gray-300 mb-4">
            The protocol introduces nuclear reaction concepts: fission, fusion, beta decay plus, and beta decay minus for managing stablecoins and reservecoins.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Fission: Split ERGs into stablecoins/reservecoins
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Fusion: Combine stablecoins/reservecoins to regenerate ERGs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Beta decay: Convert between stablecoins and reservecoins
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-yellow-400" /> Advanced Pricing
          </h3>
          <p className="text-gray-300 mb-4">
            Uses reaction equations and price equations to determine amounts from fission and fusion, with Q function considering oracle price.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reaction equations for amounts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Price equations for neutron/proton prices
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Q ratio and beta decay fee formulas
            </li>
          </ul>
        </div>
      </div>

      {/* Performance and Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Performance and Issues
        </h2>
        <p className="text-gray-300 mb-4">
          Gluon W± has demonstrated strong performance on Ergo, surviving market crashes since early 2021 while many other stablecoins have failed. However, Bruno acknowledges that there is always room for improvement.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Strengths
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Survived market crashes since 2021
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strong performance on Ergo
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Innovative duality concept
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" /> Current Issues
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Sensitivity to oracle
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Reserve drainage by whales
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                Zero equity problem
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Concept and Functionality Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> Concept and Functionality
        </h2>
        <p className="text-gray-300 mb-4">
          Bruno had a breakthrough moment while contemplating liquidity pools and their relationship with Djed. This led to the idea of creating a new stablecoin protocol that functions as the dual of a liquidity pool.
        </p>
        <p className="text-gray-300 mb-4">
          Gluon W± does not operate as a liquidity pool for the ERG and SigmaUSD pair but rather focuses on the pair of Stablecoin ReserveCoin (SigRSV and SigUSD).
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Liquidity Pools</h4>
            <p className="text-gray-300 text-sm">Two assets remain in the pool, traditional AMM approach</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Gluon W±</h4>
            <p className="text-gray-300 text-sm">One asset in reserve, generated assets outside, dual approach</p>
          </div>
        </div>
      </div>

      {/* Actions and Reactions Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Atom className="w-6 h-6 text-purple-400" /> Actions and Reactions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Fission
            </h3>
            <p className="text-gray-300 mb-4">
              Allows for the splitting of Ergs into stablecoins and reservecoins, similar to nuclear fission where atoms split into smaller components.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" /> Fusion
            </h3>
            <p className="text-gray-300 mb-4">
              Combines the neutrons and protons (stablecoins and reservecoins) to regenerate Ergs, similar to nuclear fusion where smaller components combine.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" /> Beta Decay Plus
            </h3>
            <p className="text-gray-300 mb-4">
              Resembles swaps in liquidity pools, enabling the conversion of protons to neutrons (stablecoins to reservecoins).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-400" /> Beta Decay Minus
            </h3>
            <p className="text-gray-300 mb-4">
              Enables the conversion of neutrons to protons (reservecoins to stablecoins), the reverse of beta decay plus.
            </p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The protocol allows for buying and selling stablecoins and reservecoins through compositions of primitive reactions. Bruno explains how these derived operations can be achieved by combining fission and beta decay.
        </p>
        <p className="text-gray-300 mb-4">
          The user interfaces can simplify these processes for users, enabling them to focus on their desired transactions without needing to understand the underlying nuclear reaction concepts.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Buying Stablecoins</h4>
            <p className="text-gray-300 text-sm">Combination of fission and beta decay operations</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Selling Stablecoins</h4>
            <p className="text-gray-300 text-sm">Reverse operations through fusion and beta decay</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitCommit className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          Implementation on Ergo is underway. The contract is being developed by Kii for the backend, while Sangeet works on the frontend. The protocol will utilize the new Gold Oracle, similar to DexyGold.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Development
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Backend contract by Kii
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Frontend by Sangeet
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                New Gold Oracle integration
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Future Plans
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Replace minimal Djed in SigmaUSD
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deploy new USD stablecoin
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Extended Djed protocol improvements
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
              <Atom className="w-5 h-5 text-purple-400" /> What makes Gluon W± different?
            </h3>
            <p className="text-gray-300">
              Gluon W± functions as the dual of a liquidity pool, focusing on the pair of Stablecoin ReserveCoin rather than ERG and SigmaUSD. It introduces nuclear reaction concepts (fission, fusion, beta decay) for managing stablecoins and reservecoins.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" /> How has it performed?
            </h3>
            <p className="text-gray-300">
              Gluon W± has demonstrated strong performance on Ergo, surviving market crashes since early 2021 while many other stablecoins have failed. It has proven to be robust against market volatility.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" /> What are the current issues?
            </h3>
            <p className="text-gray-300">
              Current issues include sensitivity to the oracle, reserve drainage by whales, inconvenience for reserve coin holders unable to sell back reserve coins below the threshold, and the zero equity problem. These are being addressed in proposals for an extended Djed protocol.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" /> When will it be available?
            </h3>
            <p className="text-gray-300">
              Implementation on Ergo is currently underway. The contract is being developed by Kii for the backend, while Sangeet works on the frontend. The protocol will utilize the new Gold Oracle, similar to DexyGold.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" /> Resources & Community
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Key Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="https://gluon.gold" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Gluon.gold</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Djed Alliance Discord</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">GitHub Repositories</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Twitter Updates</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Development Team</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-400" />
                Bruno Woltzenlogel Paleo (Lead)
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-400" />
                Alexander Chapournoy
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-400" />
                Kii (Backend Development)
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-400" />
                Sangeet (Frontend Development)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Bruno had a breakthrough moment while contemplating liquidity pools and their relationship with Djed. This led to the idea of creating a new stablecoin protocol that functions as the dual of a liquidity pool."
        </blockquote>
      </div>
    </>
  );
} 