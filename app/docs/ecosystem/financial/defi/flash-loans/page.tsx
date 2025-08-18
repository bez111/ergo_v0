"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRightLeft,
  Lock,
  Eye,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Target,
  Users,
  Coins,
  GitBranch,
  ExternalLink,
  Globe,
  MessageCircle,
  Cpu,
  Network,
  KeyRound,
  Settings,
  Clock,
  Rocket,
  ChevronRight,
  Wallet,
  DollarSign,
  Info,
  ListChecks,
  Database
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";

export default function FlashLoansPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="technical" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Technical
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Security
        </TabsTrigger>
        <TabsTrigger value="community" className="flex items-center gap-2 justify-center">
          <Users className="w-4 h-4" /> Community
        </TabsTrigger>
        <TabsTrigger value="uses" className="flex items-center gap-2 justify-center">
          <Target className="w-4 h-4" /> Uses
        </TabsTrigger>
        <TabsTrigger value="research" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Research
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Flash Loans in Ergo's eUTXO Model
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Exploring the compatibility, challenges, and implications of flash loans within Ergo's deterministic UTXO architecture.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/docs/ecosystem/financial/defi"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
            </Link>
            <a
              href="https://arxiv.org/pdf/2003.03810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Research Paper
            </a>
          </div>
          <p className="text-lg text-gray-300">
            Flash loans have emerged as a disruptive yet controversial innovation in the decentralized finance (DeFi) landscape, particularly within Ethereum's account-based blockchain. The question at hand is: How compatible are flash loans with Ergo's eUTXO (Extended Unspent Transaction Output) blockchain model?
          </p>
        </div>

        {/* Alert Section */}
        <div className="bg-gradient-to-r from-amber-400/10 to-red-500/10 border border-amber-400/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <span className="font-semibold text-amber-400">Complex Compatibility</span>
          </div>
          <p className="text-gray-300">
            The deterministic nature of UTXO blockchains presents intriguing challenges for inherently dynamic flash loans, where interdependent contracts often operate within a single transaction.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Flash Loan Utility
            </h3>
            <p className="text-gray-300 mb-4">
              Flash loans are not just arbitrage tools; they serve a broader financial function, including leverage, liquidity provision, self-refinancing, and portfolio rebalancing.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Arbitrage opportunities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Leverage trading
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Liquidity provision
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Self-refinancing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Portfolio rebalancing
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-orange-400" /> eUTXO Challenges
            </h3>
            <p className="text-gray-300 mb-4">
              The UTXO model operates on a deterministic framework. Unlike account-based models like Ethereum, transactions in UTXO blockchains use and generate unspent transaction outputs (UTXOs).
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deterministic approach
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                High security and predictability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex multi-step transactions
              </li>
            </ul>
          </div>
        </div>

        {/* Community Insight */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-400" /> Community Insight
          </h2>
          <p className="text-gray-300 mb-4">
            The Ergo community has discussed the absence of Atomic Chained Transactions (ACTs). While ACTs would support only static outcomes—limiting the dynamic nature of flash loans—they also offer the advantage of mitigating some of the associated risks.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Critics' Concerns
              </h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Utility vs. risk balance</li>
                <li>• Democratization of malfeasance</li>
                <li>• Ethical implications</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Proponents' View
              </h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Neutral technology</li>
                <li>• Financial innovation</li>
                <li>• Proper safeguards needed</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="technical">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Technical Challenges
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Addressing the technical complexities of flash loans in UTXO systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" /> Multi-Step Transactions
            </h3>
            <p className="text-gray-300 mb-4">
              Flash loans typically involve borrowing, action, and repayment within a single transaction. In eUTXO blockchains, each of these steps would be its own transaction, requiring pre-calculation due to the deterministic nature of the model.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Pre-calculation requirement
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-stage contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Interim state holding
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-green-400" /> Data Inputs Feature
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's data inputs feature allows transactions to reference existing UTXOs without consuming them. This could serve as a potential solution for multi-protocol interactions.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                UTXO referencing without consumption
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex interdependent transactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Dynamic flexibility
              </li>
            </ul>
          </div>
        </div>

        {/* Atomicity Solutions */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-orange-400" /> Atomicity Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Soft Fork Option
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Using a special ID context variable to enforce a chain of transactions.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Less disruptive implementation</li>
                <li>• Adds complexity layer</li>
                <li>• Community consensus needed</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Hard Fork Option
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                More significant change requiring community consensus.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Definitive solution</li>
                <li>• Requires community consensus</li>
                <li>• More significant change</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="security">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-400" /> Security Implications
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Analyzing the risks and concerns surrounding flash loan technology.
          </p>
        </div>

        {/* Risk Factors */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Risk Factors
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Isolation Factor</p>
                  <p className="text-xs text-gray-500">Attackers operate without committing capital</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Market Counterbalance</p>
                  <p className="text-xs text-gray-500">Upsets natural equilibrium</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Lowered Barriers</p>
                  <p className="text-xs text-gray-500">Expands attack surface</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Time-Sensitivity</p>
                  <p className="text-xs text-gray-500">Single transaction block limitation</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Potential Mitigations
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Moving Averages</p>
                  <p className="text-xs text-gray-500">Buffer against price manipulations</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Enhanced Security</p>
                  <p className="text-xs text-gray-500">Higher standards of testing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Integration Testing</p>
                  <p className="text-xs text-gray-500">Comprehensive ecosystem testing</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" /> Case Study: Oracle Manipulation
          </h2>
          <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-amber-400 mb-2">Attack Sequence:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
              <li>Attacker borrows 7,500 ETH via flash loan</li>
              <li>Converts portions to sUSD through strategic trades</li>
              <li>Lowers sUSD/ETH price on Uniswap and Kyber Reserve</li>
              <li>Exploits manipulated price to collateralize excessive sUSD</li>
              <li>Repays flash loan and walks away with profit</li>
            </ol>
          </div>
          <Alert className="bg-red-500/10 border-red-500/20">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <div className="text-gray-300">
              Under normal circumstances, rapid price changes would trigger arbitrage bots to correct market imbalance. Flash loans circumvent this safeguard through their time-sensitive nature.
            </div>
          </Alert>
        </div>
      </TabsContent>

      <TabsContent value="community">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" /> Community Debate
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            The ongoing discussion within the Ergo community about flash loans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" /> Critics' Perspective
            </h3>
            <p className="text-gray-300 mb-4">
              Critics question whether the utility these financial instruments provide justifies the heightened risks they introduce.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400" />
                Utility vs. risk balance
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400" />
                Democratization of malfeasance
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400" />
                Serious ethical concerns
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" /> Proponents' Perspective
            </h3>
            <p className="text-gray-300 mb-4">
              Proponents argue that the technology itself is a neutral tool and its ethical implications depend on its application.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Neutral technology
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Financial innovation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Proper safeguards needed
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-cyan-400" /> Community Insight
          </h2>
          <p className="text-gray-300 mb-4">
            The Ergo community remains divided on whether the benefits of flash loans outweigh the serious ethical and security concerns they present. This ongoing debate reflects the broader challenges facing the DeFi ecosystem as it matures.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Eye className="w-4 h-4" />
            <span>Ongoing discussion in community forums</span>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="uses">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-400" /> Flash Loan Applications
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Understanding the various use cases and applications of flash loans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Arbitrage
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Exploiting price differences between different exchanges or protocols.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Cross-exchange arbitrage</li>
              <li>• Protocol price differences</li>
              <li>• Automated trading</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Leverage
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Amplifying trading positions without committing additional capital.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Position amplification</li>
              <li>• Risk management</li>
              <li>• Capital efficiency</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
              <Wallet className="w-4 h-4" /> Self-Refinancing
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Refinancing existing positions with better terms or rates.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Debt restructuring</li>
              <li>• Rate optimization</li>
              <li>• Position management</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-orange-400" /> Financial Innovation
          </h2>
          <p className="text-gray-300 mb-4">
            Flash loans represent a novel approach to credit that eliminates traditional risks through blockchain's atomic transaction properties.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Advantages</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• No debt default risk</li>
                <li>• No collateral required</li>
                <li>• Large loan sizes available</li>
                <li>• Programmatic execution</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-red-400 mb-2">Challenges</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Complex implementation</li>
                <li>• Security vulnerabilities</li>
                <li>• Regulatory uncertainty</li>
                <li>• Ethical concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="research">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Research & Analysis
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Academic research and analysis of flash loan attacks and implications.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Key Research Paper
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-amber-400 mb-2">"Attacking the DeFi Ecosystem with Flash Loans for Fun and Profit"</h4>
              <p className="text-gray-300 text-sm mb-3">
                Published in 2021, this paper provides comprehensive analysis of flash loan attacks and their implications for the DeFi ecosystem.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>Authors: Kaihua Qin, Liyi Zhou, Benjamin Livshits, Arthur Gervais</span>
                <span>Institution: Imperial College London</span>
              </div>
            </div>
            <a
              href="https://arxiv.org/pdf/2003.03810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read Full Paper
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Attack Analysis
            </h3>
            <p className="text-gray-300 mb-4">
              The research paper analyzes two major flash loan attacks with ROIs beyond 500,000%.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Pump and arbitrage attacks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Oracle manipulation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Profit optimization framework
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Future Implications
            </h3>
            <p className="text-gray-300 mb-4">
              The research suggests potential for DeFi protocols to comply with higher security standards.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced security testing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Integration testing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                DeFi security standards
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 