"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Users,
  Shield,
  CheckCircle,
  XCircle,
  ArrowRightLeft,
  Lock,
  Eye,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Target,
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
  Database,
  Handshake,
  CreditCard,
  Building2,
  BarChart3,
  Zap,
  CheckSquare,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";

export default function TrustlessPredictionMarketsPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="technology" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Technology
        </TabsTrigger>
        <TabsTrigger value="implementation" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Implementation
        </TabsTrigger>
        <TabsTrigger value="insurance" className="flex items-center gap-2 justify-center">
          <Users className="w-4 h-4" /> Insurance
        </TabsTrigger>
        <TabsTrigger value="uses" className="flex items-center gap-2 justify-center">
          <Target className="w-4 h-4" /> Uses
        </TabsTrigger>
        <TabsTrigger value="resources" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Resources
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Trustless Prediction Markets
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Permissionless and trustless prediction markets about any blockchain data, enabled by Ergo's UTXO model and data inputs.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/docs/ecosystem/financial/defi"
              className="inline-flex items-center px-6 py-3 bg-purple-500 rounded-xl font-semibold text-black hover:bg-purple-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
            </Link>
            <Link
              href="/docs/introduction/eutxo"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <Globe className="w-5 h-5 mr-2" /> eUTXO Model
            </Link>
          </div>
          <p className="text-lg text-gray-300">
            Due to Ergo's use of the UTXO-model + data inputs we can have 100% trustless prediction markets about the state of any dApp on the entire blockchain. You can make permissionless and trustless prediction markets about literally any data on the blockchain.
          </p>
        </div>

        {/* Alert Section */}
        <div className="bg-gradient-to-r from-purple-400/10 to-cyan-500/10 border border-purple-400/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-6 h-6 text-purple-400" />
            <span className="font-semibold text-purple-400">100% Trustless</span>
          </div>
          <p className="text-gray-300">
            To prove who wins in the prediction all one has to do is make a tx with a specific utxo as a data-input, and you have trustless verification and payout.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" /> Permissionless Markets
            </h3>
            <p className="text-gray-300 mb-4">
              Create prediction markets about literally any data on the blockchain without requiring permission or centralized oversight.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Any blockchain data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No permission required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized creation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community-driven markets
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Trustless Verification
            </h3>
            <p className="text-gray-300 mb-4">
              Automatic verification and payout through blockchain transactions with specific UTXOs as data inputs.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automatic verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Data input validation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trustless payouts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No human intervention
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-cyan-400" /> Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <Database className="w-4 h-4" /> Universal Scope
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Predictions can be made about any dApp state or blockchain data.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Any dApp state</li>
                <li>• Blockchain events</li>
                <li>• Smart contract outcomes</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Zero Trust Required
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                No reliance on centralized oracles or trusted third parties.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• No centralized oracles</li>
                <li>• No trusted parties</li>
                <li>• Automated execution</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" /> Instant Settlement
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Immediate verification and payout upon transaction confirmation.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Instant verification</li>
                <li>• Immediate payouts</li>
                <li>• No waiting periods</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="technology">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Technology Foundation
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            How Ergo's UTXO model and data inputs enable trustless prediction markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-400" /> UTXO Model
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's UTXO model provides the deterministic foundation for creating and resolving prediction markets without centralized oversight.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deterministic execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Immutable state tracking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized consensus
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" /> Data Inputs
            </h3>
            <p className="text-gray-300 mb-4">
              Data inputs allow transactions to reference existing UTXOs without consuming them, enabling verification of prediction outcomes.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                UTXO referencing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Non-consuming access
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                State verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated resolution
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Advantages */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-orange-400" /> Technical Advantages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Verification Process</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Transaction with specific UTXO as data input</li>
                <li>• Automatic outcome verification</li>
                <li>• Trustless payout execution</li>
                <li>• No manual intervention required</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Market Creation</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Permissionless market creation</li>
                <li>• Any blockchain data scope</li>
                <li>• Community-driven markets</li>
                <li>• Decentralized governance</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Implementation Details
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            How to create and resolve trustless prediction markets on Ergo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" /> Market Creation
            </h3>
            <p className="text-gray-300 mb-4">
              Creating a prediction market involves defining the outcome conditions and setting up the verification mechanism.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Define outcome conditions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Set verification UTXOs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Establish payout structure
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deploy smart contract
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-green-400" /> Outcome Resolution
            </h3>
            <p className="text-gray-300 mb-4">
              Resolution occurs automatically when a transaction includes the specific UTXO as a data input, proving the outcome.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Data input verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automatic payout execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No manual intervention
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trustless settlement
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ListChecks className="w-6 h-6 text-purple-400" /> Implementation Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> 1. Market Setup
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Define the prediction parameters and verification conditions.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Outcome definition</li>
                <li>• Verification UTXOs</li>
                <li>• Payout structure</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> 2. Market Participation
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Users place bets on different outcomes of the prediction.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Outcome betting</li>
                <li>• Liquidity provision</li>
                <li>• Market dynamics</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckSquare className="w-4 h-4" /> 3. Resolution
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Automatic resolution when verification conditions are met.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Data input verification</li>
                <li>• Automatic payouts</li>
                <li>• Trustless settlement</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="insurance">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" /> On-Chain Insurance
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Expanding prediction markets into trustless on-chain insurance systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" /> Insurance Applications
            </h3>
            <p className="text-gray-300 mb-4">
              Prediction markets can be expanded into trustless on-chain insurance, providing automated coverage for various risks.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Smart contract risks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                DeFi protocol coverage
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Oracle failure protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Market volatility coverage
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" /> Trustless Claims
            </h3>
            <p className="text-gray-300 mb-4">
              Insurance claims are automatically processed through the same verification mechanism as prediction markets.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automatic claim verification
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No manual processing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Instant payout execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent coverage
              </li>
            </ul>
          </div>
        </div>

        {/* Insurance Benefits */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Handshake className="w-6 h-6 text-green-400" /> Insurance Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Risk Mitigation
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Automated protection against various DeFi and blockchain risks.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Smart contract failures</li>
                <li>• Oracle manipulation</li>
                <li>• Market volatility</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Instant Claims
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Immediate claim processing and payout execution.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• No waiting periods</li>
                <li>• Automatic verification</li>
                <li>• Trustless processing</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Community Coverage
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Community-driven insurance pools and coverage networks.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Community pools</li>
                <li>• Decentralized coverage</li>
                <li>• Shared risk models</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="uses">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-green-400" /> Use Cases
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Practical applications and benefits of trustless prediction markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Market Predictions
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Predictions about token prices, trading volumes, and market movements.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Token price movements</li>
              <li>• Trading volume predictions</li>
              <li>• Market volatility bets</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Protocol Events
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Predictions about smart contract outcomes and protocol events.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Smart contract outcomes</li>
              <li>• Protocol upgrades</li>
              <li>• Governance decisions</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4" /> External Events
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Predictions about real-world events that can be verified on-chain.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Oracle-reported events</li>
              <li>• Real-world outcomes</li>
              <li>• Cross-chain events</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-400" /> Market Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">For Participants</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Permissionless market creation</li>
                <li>• Trustless participation</li>
                <li>• Instant settlement</li>
                <li>• No counterparty risk</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">For Ecosystem</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Information discovery</li>
                <li>• Risk pricing</li>
                <li>• Community engagement</li>
                <li>• Innovation incentives</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Resources & Research
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Technical documentation and implementation resources for trustless prediction markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Technical Implementation
            </h3>
            <p className="text-gray-300 mb-4">
              Detailed guides for implementing trustless prediction markets using Ergo's eUTXO model.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Smart contract development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Data input integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Verification mechanisms
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Security Considerations
            </h3>
            <p className="text-gray-300 mb-4">
              Best practices for ensuring security and reliability in prediction market implementations.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Attack vector analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Oracle security
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Economic incentives
              </li>
            </ul>
          </div>
        </div>

        {/* Related Documentation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Related Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">eUTXO Model</h4>
              <p className="text-gray-300 text-sm mb-3">
                Understanding the extended UTXO model that enables trustless prediction markets.
              </p>
              <Link
                href="/docs/introduction/eutxo"
                className="inline-flex items-center px-3 py-1 bg-green-600 rounded text-xs text-white hover:bg-green-700"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">DeFi Ecosystem</h4>
              <p className="text-gray-300 text-sm mb-3">
                Explore other DeFi applications and protocols in the Ergo ecosystem.
              </p>
              <Link
                href="/docs/ecosystem/financial/defi"
                className="inline-flex items-center px-3 py-1 bg-blue-600 rounded text-xs text-white hover:bg-blue-700"
              >
                Explore DeFi
              </Link>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 