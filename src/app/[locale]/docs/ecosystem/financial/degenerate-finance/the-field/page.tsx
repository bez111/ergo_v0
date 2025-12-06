"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  ExternalLink,
  Info,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Gavel,
  AlertTriangle,
  Target,
  Layers,
  Calculator,
  ArrowUpDown,
  ChevronRight,
  Brain,
  GitBranch,
  Globe,
  Banknote,
  Cpu,
  Settings,
  Gift,
  FileText,
  Code,
  Play,
  BookOpen,
  Coins,
  Lock,
  Award,
  Clock,
  Flame,
  History,
  DollarSign,
  BarChart3,
  PieChart,
  TrendingDown,
  Activity,
  Hammer,
  Timer,
  ShoppingCart,
  Users2,
  RefreshCw,
  Shuffle,
  RotateCcw,
  FlipHorizontal,
  Ticket,
  Star,
  Crown,
  Trophy,
  TreePine,
  Sprout,
  Leaf,
  Wheat
} from "lucide-react";
import Link from "next/link";

export default function TheFieldPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          The Field
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A degenerate finance protocol that creates a farming simulation game for ERG tokens, where users can plant, grow, and harvest virtual crops with real economic consequences through smart contracts.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/degenerate-finance"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Degenerate Finance
          </Link>
          <a
            href="https://thefield.ergo.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Visit The Field
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is The Field?
        </h2>
        <p className="text-gray-300">
          The Field is a degenerate finance protocol that creates a farming simulation game for ERG tokens. The protocol allows users to plant virtual crops, manage resources, and harvest rewards with real economic consequences through blockchain-based smart contracts.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-green-400" /> Virtual Farming
          </h3>
          <p className="text-gray-300 mb-4">
            Users can plant, grow, and harvest virtual crops in a simulated farming environment, with each action having real economic consequences through smart contracts.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Plant virtual crops
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Manage resources
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Harvest rewards
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TreePine className="w-5 h-5 text-blue-400" /> Resource Management
          </h3>
          <p className="text-gray-300 mb-4">
            Players must strategically manage limited resources including land, seeds, water, and time to maximize their farming efficiency and economic returns.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Limited land plots
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Seed varieties
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Time-based growth
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Wheat className="w-5 h-5 text-purple-400" /> Economic Consequences
          </h3>
          <p className="text-gray-300 mb-4">
            Every farming decision has real economic impact, with crop prices, market conditions, and resource costs affecting potential profits and losses.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dynamic crop prices
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Market fluctuations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Resource costs
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" /> Smart Contract Automation
          </h3>
          <p className="text-gray-300 mb-4">
            Advanced ErgoScript smart contracts handle all farming logic automatically, including crop growth, market pricing, and reward distribution without human intervention.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated growth cycles
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dynamic pricing
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Instant settlements
            </li>
          </ul>
        </div>
      </div>

      {/* Performance and Issues Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-400" /> Performance and Risks
        </h2>
        <p className="text-gray-300 mb-4">
          The Field represents an innovative approach to degenerate finance, combining gaming mechanics with real economic consequences. While the protocol provides entertainment value and strategic depth, users should understand the risks of market volatility and resource management.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Potential Rewards
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Strategic gameplay rewards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Market timing profits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Resource optimization gains
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Farming Risks
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Market volatility losses
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Poor resource management
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Timing-based losses
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
          The Field addresses the demand for engaging gaming experiences with real economic consequences in the Ergo ecosystem. The protocol creates a farming simulation where users can plant crops, manage resources, and harvest rewards with market-driven pricing.
        </p>
        <p className="text-gray-300 mb-4">
          The smart contracts handle all farming logic automatically, including crop growth cycles, market pricing, resource management, and reward distribution, ensuring a completely trustless gaming experience.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Traditional Gaming</h4>
            <p className="text-gray-300 text-sm">Virtual experiences with no real economic consequences</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">The Field Approach</h4>
            <p className="text-gray-300 text-sm">Gaming with real economic consequences and market dynamics</p>
          </div>
        </div>
      </div>

      {/* User Interface Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-green-400" /> User Interface and Operations
        </h2>
        <p className="text-gray-300 mb-4">
          The platform provides an intuitive interface for managing virtual farms and participating in the farming simulation. Users can easily plant crops, monitor growth, manage resources, and harvest rewards with real-time market updates.
        </p>
        <p className="text-gray-300 mb-4">
          The interface displays current crop prices, resource levels, growth timers, and market conditions to help users make informed farming decisions while maintaining transparency about the economic consequences.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Farm Management</h4>
            <p className="text-gray-300 text-sm">Plant crops, manage resources, and monitor growth cycles</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Market Trading</h4>
            <p className="text-gray-300 text-sm">Buy/sell crops, track prices, and optimize harvest timing</p>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-400" /> Implementation and Future Plans
        </h2>
        <p className="text-gray-300 mb-4">
          The Field is implemented using advanced ErgoScript smart contracts that handle all farming logic automatically. The protocol features dynamic pricing, resource management, and automated settlement to ensure a trustworthy gaming experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-green-400" /> Current Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Virtual farming simulation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Resource management
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Market-driven pricing
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-400" /> Advanced Features
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multiple crop types
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Seasonal effects
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community features
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
              <Sprout className="w-5 h-5 text-purple-400" /> How does the farming work?
            </h3>
            <p className="text-gray-300">
              Users can plant virtual crops on limited land plots, manage resources like water and seeds, and harvest crops when they're ready. Each action has real economic consequences through market-driven pricing and smart contracts.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> What are the risks?
            </h3>
            <p className="text-gray-300">
              The Field involves risks from market volatility, poor resource management, and timing-based losses. Crop prices can fluctuate dramatically, and poor farming decisions can result in significant economic losses.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-yellow-400" /> How is pricing determined?
            </h3>
            <p className="text-gray-300">
              Crop prices are determined by market dynamics including supply and demand, seasonal effects, and community trading activity. Smart contracts automatically adjust prices based on these factors to create realistic market conditions.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Is this a legitimate protocol?
            </h3>
            <p className="text-gray-300">
              The Field is a legitimate degenerate finance protocol built on Ergo's blockchain using advanced smart contracts. It provides an innovative gaming experience with real economic consequences, but should be approached with caution due to the inherent risks.
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
                <a href="https://thefield.ergo.io/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">The Field Platform</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Discord Community</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">GitHub Repository</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Protocol Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-orange-400" />
                Virtual Farming
              </li>
              <li className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-orange-400" />
                Resource Management
              </li>
              <li className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-orange-400" />
                Economic Consequences
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-orange-400" />
                Smart Contract Automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <blockquote className="text-xl italic text-center text-gray-300">
          "The Field represents a unique fusion of gaming and degenerate finance, creating a farming simulation where every decision has real economic consequences through blockchain technology."
        </blockquote>
      </div>
    </>
  );
} 