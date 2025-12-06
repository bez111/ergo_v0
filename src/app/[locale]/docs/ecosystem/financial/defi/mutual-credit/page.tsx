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
  Building2
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Alert } from "@/components/ui/alert";

export default function MutualCreditPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="implementation" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Implementation
        </TabsTrigger>
        <TabsTrigger value="lets" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> LETS
        </TabsTrigger>
        <TabsTrigger value="ergofund" className="flex items-center gap-2 justify-center">
          <Users className="w-4 h-4" /> ErgoFund
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Mutual Credit System on Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            A trustless, collateralized alternative currency system built on Ergo's eUTXO model, enabling decentralized trade through community-managed IOUs.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Link
              href="/docs/ecosystem/financial/defi"
              className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-black hover:bg-green-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
            </Link>
            <a
              href="https://ergoplatform.org/en/blog/2019_05_29-exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> LETS Research
            </a>
          </div>
          <p className="text-lg text-gray-300">
            A mutual credit system is a type of alternative currency system in which the currency used is not a commodity but an accounting unit. In this system, credit is given by all participants, through a system of IOUs that are issued and managed collectively by the community.
          </p>
        </div>

        {/* Alert Section */}
        <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-green-400/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Handshake className="w-6 h-6 text-green-400" />
            <span className="font-semibold text-green-400">Community-Driven</span>
          </div>
          <p className="text-gray-300">
            This system allows for a flexible, decentralized form of trade, where value is not tied to a physical commodity but to the trust and cooperation of the community.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-400" /> Alternative Currency
            </h3>
            <p className="text-gray-300 mb-4">
              The currency used is not a commodity but an accounting unit, managed collectively by the community through a system of IOUs.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community-managed IOUs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Flexible accounting units
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized trade
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trust-based cooperation
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Trustless & Collateralized
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's technology enables a trustless and collateralized system that doesn't rely on individual trustworthiness and is backed by collateral to prevent default.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No individual trust required
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Collateral-backed system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Default prevention
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Blockchain security
              </li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-purple-400" /> Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Community-Driven
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                All participants contribute to the credit system through collective management of IOUs.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Collective IOU management</li>
                <li>• Community trust</li>
                <li>• Decentralized governance</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Trustless Design
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                No reliance on individual trustworthiness, secured by blockchain technology.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Blockchain security</li>
                <li>• Collateral backing</li>
                <li>• Automated enforcement</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" /> Flexible Trade
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Enables decentralized trade without physical commodity backing.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Service-based economy</li>
                <li>• Flexible accounting</li>
                <li>• Community cooperation</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="implementation">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Implementation on Ergo
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            How Ergo's eUTXO model enables the creation of a global mutual credit system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-400" /> eUTXO Architecture
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's extended UTXO model provides the perfect foundation for implementing mutual credit systems with deterministic execution and high security.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Deterministic execution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                High security guarantees
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Complex smart contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-stage transactions
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-green-400" /> Global System
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo's technology can be utilized to implement a global mutual credit system that operates across borders and communities.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Cross-border operation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community scalability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Interoperable design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized governance
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
              <h4 className="font-bold text-green-400 mb-2">Security Features</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Collateral-backed credit</li>
                <li>• Automated enforcement</li>
                <li>• Default prevention</li>
                <li>• Transparent accounting</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">Scalability</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Global reach</li>
                <li>• Community expansion</li>
                <li>• Interoperable design</li>
                <li>• Flexible governance</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="lets">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> LETS Implementation
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Local Exchange Trading Systems (LETS) as a foundation for mutual credit on Ergo.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Trustless LETS
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-amber-400 mb-2">Overview</h4>
              <p className="text-gray-300 text-sm mb-3">
                A Local Exchange Trading System (LETS) is aimed at developing local economy and is usually used by people of a locality in the vicinity of each other. We describe a <strong>trustless</strong> LETS, i.e., one where there is no management committee needed for enrolment.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>Source: Ergo Platform Blog</span>
                <span>May 29, 2019</span>
              </div>
            </div>
            <a
              href="https://ergoplatform.org/en/blog/2019_05_29-exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read Full LETS Research
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" /> Committee-Free Design
            </h3>
            <p className="text-gray-300 mb-4">
              Unlike managed LETS systems, the trustless version doesn't require a trusted committee for enrollment and management.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No management committee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Automated enrollment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized governance
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-blue-400" /> Local Currency System
            </h3>
            <p className="text-gray-300 mb-4">
              LETS involves several parties that agree to use some form of "local currency", usually pegged to the country's main currency at a 1:1 rate.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Local currency pegging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Zero-sum balance system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community-driven economy
              </li>
            </ul>
          </div>
        </div>

        {/* LETS Variants */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ListChecks className="w-6 h-6 text-purple-400" /> LETS Variants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">LETS-1: Zero Sum, Collateral</h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Time-locked joining fee</li>
                  <li>• Zero sum balance</li>
                  <li>• Collateral backing</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-2">LETS-2: Zero Sum, No Collateral</h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Non-refundable joining fee</li>
                  <li>• Zero sum balance</li>
                  <li>• No collateral required</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">LETS-3: Positive-Sum, Collateral</h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Time-locked joining fee</li>
                  <li>• Positive sum balance</li>
                  <li>• Collateral backing</li>
                </ul>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-purple-400 mb-2">LETS-4: Positive-Sum, No Collateral</h4>
                <ul className="space-y-1 text-gray-400 text-xs">
                  <li>• Non-refundable joining fee</li>
                  <li>• Positive sum balance</li>
                  <li>• No collateral required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="ergofund">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" /> ErgoFund Integration
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Combining mutual credit systems with ErgoFund for sustainable economic development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-400" /> ErgoFund Platform
            </h3>
            <p className="text-gray-300 mb-4">
              ErgoFund is a decentralized crowdfunding platform on the Ergo blockchain that can be integrated with mutual credit systems.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Decentralized crowdfunding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community-driven funding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent allocation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Blockchain security
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-400" /> Credit Line Integration
            </h3>
            <p className="text-gray-300 mb-4">
              Funds collected through ErgoFund can be used to open a credit line in the mutual credit system, creating a self-sustaining economy.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Fund-to-credit conversion
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Service-based spending
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Self-sustaining economy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Community development
              </li>
            </ul>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Handshake className="w-6 h-6 text-green-400" /> Integration Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Funding Access
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Communities can access funding through ErgoFund to establish mutual credit systems.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Crowdfunding support</li>
                <li>• Community backing</li>
                <li>• Transparent funding</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" /> Economic Flow
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Funds flow from crowdfunding to credit lines to service spending, creating economic cycles.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Circular economy</li>
                <li>• Service exchange</li>
                <li>• Value creation</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Community Growth
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Integration supports community development and sustainable economic practices.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Local development</li>
                <li>• Sustainable practices</li>
                <li>• Community cooperation</li>
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
            Practical applications and benefits of mutual credit systems on Ergo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Local Economies
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Supporting local business networks and community economic development.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Local business networks</li>
              <li>• Community development</li>
              <li>• Regional cooperation</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" /> Service Exchange
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Enabling service-based economies where skills and time are valued as currency.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Skill exchange</li>
              <li>• Time banking</li>
              <li>• Service networks</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Global Networks
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Creating interconnected credit networks across different communities and regions.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Cross-community trade</li>
              <li>• International networks</li>
              <li>• Interoperable systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-400" /> Economic Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">For Communities</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Reduced dependency on external currency</li>
                <li>• Increased local economic activity</li>
                <li>• Community resilience</li>
                <li>• Sustainable development</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">For Individuals</h4>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Access to credit without traditional banks</li>
                <li>• Ability to contribute skills and time</li>
                <li>• Participation in local economy</li>
                <li>• Community building opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="resources">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" /> Research & Resources
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Academic research and implementation resources for mutual credit systems.
          </p>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-blue-400" /> Key Research
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-amber-400 mb-2">"A Trustless Local Exchange Trading System"</h4>
              <p className="text-gray-300 text-sm mb-3">
                Published on May 29, 2019, this research paper by Amitabh Saxena describes the implementation of trustless LETS on Ergo, providing the foundation for mutual credit systems.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>Author: Amitabh Saxena</span>
                <span>Platform: Ergo Platform</span>
              </div>
            </div>
            <a
              href="https://ergoplatform.org/en/blog/2019_05_29-exchange/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read Full Research Paper
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-green-400" /> Technical Implementation
            </h3>
            <p className="text-gray-300 mb-4">
              The research provides detailed ErgoScript implementations for various LETS variants and mutual credit systems.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ErgoScript contracts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                LETS variants
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Trustless design
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" /> Security Analysis
            </h3>
            <p className="text-gray-300 mb-4">
              Comprehensive analysis of security considerations and attack prevention in mutual credit systems.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Collateral mechanisms
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Default prevention
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Attack vectors
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 