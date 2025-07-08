"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  MessageCircle,
  Info,
  ListChecks,
  Database,
  Users,
  Link as LucideLink,
  ArrowRight,
  Shield,
  GitBranch,
  Zap,
  Coins,
  Globe,
  KeyRound,
  ExternalLink,
  Lock,
  Cpu,
  Network,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Rocket,
  ChevronRight,
  Settings,
  Wallet,
  Target,
  DollarSign
} from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function RosenBridgePage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <GitBranch className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="watchers" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Watchers
        </TabsTrigger>
        <TabsTrigger value="guards" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Guards
        </TabsTrigger>
        <TabsTrigger value="tokenomics" className="flex items-center gap-2 justify-center">
          <Coins className="w-4 h-4" /> Tokenomics
        </TabsTrigger>
        <TabsTrigger value="team" className="flex items-center gap-2 justify-center">
          <Users className="w-4 h-4" /> Team
        </TabsTrigger>
        <TabsTrigger value="uses" className="flex items-center gap-2 justify-center">
          <Target className="w-4 h-4" /> Uses
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
      {/* Hero Section */}
        <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Rosen Bridge: The Future of Cross-Chain Asset Transfers
        </h1>
          <p className="text-xl text-gray-400 mb-6">
            Rosen Bridge is an open-source protocol pioneering the future of cross-chain asset transfers. It's currently in beta, testing its first bridge to Cardano.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Rosen Bridge leverages Ergo's capabilities to facilitate secure and efficient coin and token transfers between Ergo and other blockchains, eliminating the need for smart contracts on other chains.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-6 h-6 text-orange-400" />
            <span className="font-semibold text-orange-400">Launch Imminent</span>
          </div>
          <p className="text-gray-300">
            Rosen Bridge is expected to launch imminently. Join the Rosen Telegram chat to stay updated with the latest developments and announcements.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://t.me/rosen_bridge"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-600 rounded-lg font-semibold text-white hover:bg-cyan-700 transition-colors"
          >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Rosen Telegram
          </a>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" /> Architecture
            </h3>
            <p className="text-gray-300 mb-4">
              Rosen Bridge uses a unique architecture with <strong>Watchers</strong> and <strong>Guards</strong>. Watchers monitor blockchain activities and report to Guards, who process events and execute actions.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Watchers monitor blockchain activities
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Guards process events and execute actions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                High security and functionality
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-400" /> No Smart Contracts
            </h3>
            <p className="text-gray-300 mb-4">
              One of the unique aspects is that it eliminates the need for deploying smart contracts on other chains. Consensus is achieved on Ergo by Guards.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No smart contracts on other chains
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ergo-centric consensus
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Simplified cross-chain operations
              </li>
            </ul>
          </div>
        </div>

        {/* Applications Overview */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-400" /> Bridge Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Coins className="w-4 h-4" /> Token Transfers
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Seamlessly transfer coins and tokens between Ergo and any other compatible blockchain.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Cross-chain compatibility</li>
                <li>• Multi-signature support</li>
                <li>• Threshold signatures</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Network className="w-4 h-4" /> Scalable Design
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Allows addition of new chains through independent modules while prioritizing user transaction success.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Independent modules</li>
                <li>• Sufficient confirmations</li>
                <li>• User safety priority</li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4" /> RSN Token
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                The Rosen Token (RSN) serves as sybil resistance mechanism, fee distribution system, and access control.
              </p>
              <ul className="space-y-1 text-gray-400 text-xs">
                <li>• Sybil resistance</li>
                <li>• Fee distribution</li>
                <li>• Access control</li>
              </ul>
            </div>
        </div>
      </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-cyan-400" /> Key Features
        </h2>
          <p className="text-lg text-gray-300 mb-6">
            Rosen Bridge combines cutting-edge technology with practical solutions for cross-chain interoperability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-400" /> Open-Source Protocol
            </h3>
            <p className="text-gray-300 mb-4">
              Rosen Bridge is an open-source protocol, primarily focused on Ergo, that allows seamless transfer of coins and tokens between Ergo and any other compatible blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Open-source development
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Ergo-focused design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Multi-chain compatibility
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" /> Smart Contract Reduction
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo-centric logic significantly reduces the need for smart contracts on bridged chains, simplifying cross-chain operations.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Simplified operations
          </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Reduced complexity
          </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Enhanced security
          </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" /> Scalable Design
            </h3>
            <p className="text-gray-300 mb-4">
              Allows addition of new chains through independent modules while prioritizing user transaction success with sufficient confirmations.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Independent modules
          </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                User safety priority
          </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sufficient confirmations
          </li>
        </ul>
      </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-purple-400" /> RSN Token Integration
            </h3>
            <p className="text-gray-300 mb-4">
              The Rosen Token (RSN) serves as sybil resistance mechanism, fee distribution system, and access control for bridge services.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Sybil resistance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Fee distribution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Access control
              </li>
            </ul>
          </div>
        </div>

        {/* Operations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-yellow-400" /> Bridge Operations
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Understanding how Rosen Bridge operates and its key operational features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-orange-400" /> Fee Structure
            </h3>
            <p className="text-gray-300 mb-4">
              The bridge fee structure is designed to incentivize watchers and prevent spam transactions.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-orange-400">Initial Fee:</span> Greater of $10 or 0.5% of transaction value, plus network fees.
                </p>
              </div>
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-cyan-400">Collection:</span> Fees collected in transferred token on Ergo.
                </p>
              </div>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-green-400">Network Fees:</span> Static for Ergo/Cardano, dynamic for EVM networks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" /> Transaction Limits
            </h3>
            <p className="text-gray-300 mb-4">
              Transaction limits and processing times are designed to ensure security and reliability.
            </p>
            <div className="space-y-3">
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-cyan-400">No Fixed Maximum:</span> Large transfers may take hours to 1-2 days due to manual guard intervention.
                </p>
              </div>
              <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-purple-400">Cold to Hot Wallets:</span> Manual guard intervention for fund transfers between wallet types.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-orange-400" /> Development Team
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Team Composition</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  8 developers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  2-3 part-time developers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Several advisors
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Development Approach</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Frontend and UI tasks outsourced
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Open-source development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Community-driven approach
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-green-400" /> Development Roadmap
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            The planned expansion of Rosen Bridge to support additional blockchains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-orange-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Current</h3>
                <p className="text-sm font-semibold text-cyan-400">Beta Testing</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              First bridge to Cardano in beta testing phase. The team is actively working on stability and security improvements.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Mid-term</h3>
                <p className="text-sm font-semibold text-cyan-400">BTC & BSC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bitcoin and BSC (EVM-chains) integration. Code refactoring aims to facilitate adding new chains efficiently.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Future</h3>
                <p className="text-sm font-semibold text-cyan-400">Dogecoin & More</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Dogecoin and additional chain support. The modular design allows for easy expansion to new blockchains.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Join the Future</h3>
          <p className="text-gray-300 mb-4">
            Rosen Bridge represents the cutting edge of cross-chain interoperability. Join the community and be part of the future of decentralized finance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/rosen_bridge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-lg font-semibold text-white hover:bg-orange-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Rosen Community
            </a>
            <Link
              href="/Docs/ecosystem/infrastructure"
              className="inline-flex items-center px-4 py-2 bg-neutral-700 rounded-lg font-semibold text-white hover:bg-neutral-600 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Explore Infrastructure
            </Link>
          </div>
        </div>
      </TabsContent>

      {/* Остальные табы — заглушки */}
      <TabsContent value="watchers">
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">Ergo Rosen Bridge Watcher Setup</h1>
          <p className="text-lg text-gray-300 mb-8">
            Watchers are integral to Rosen Bridge, serving as cross-chain oracles. They observe and report deposit events on their network to Ergo, contributing to the network's security and expansion.
          </p>

        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-cyan-400" /> Watcher Setup Guides
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Tutorials</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>General Watchers app Tutorials Playlist, and more tailored guides for each platform:</li>
              <li><b>Windows:</b> <a href="#" className="text-cyan-400 underline">Rosen Bridge Watcher — Windows Setup Guide</a></li>
              <li><b>Mac:</b> <a href="#" className="text-cyan-400 underline">Rosen Watcher with Mac (ErgoTutorials)</a></li>
              <li><b>Linux:</b> <a href="#" className="text-cyan-400 underline">mgpai walks through a Watcher instance in Linux and Cloud</a></li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-2">Pre-requisites</h3>
          <p className="text-gray-300 mb-4">See the pre-requisites page for information on setting up a local node, as well as minimal hardware and software requirements. (Docker)</p>

          <h2 className="text-2xl font-bold flex items-center gap-2 mb-8 mt-8">
            <Info className="w-5 h-5 text-orange-400" /> Watcher FAQs
        </h2>
          <Accordion type="multiple" className="mb-8">
            <AccordionItem value="operational">
              <AccordionTrigger className="text-xl font-semibold">Operational</AccordionTrigger>
              <AccordionContent>
                <h4 className="font-semibold text-cyan-400 mb-2 mt-4">Role and Rewards</h4>
                <p className="text-gray-300 mb-2">Watchers are essential for accurate reporting and receive <span className="text-orange-400 font-semibold">70% of transaction fees</span> as rewards for successful and accurate reporting. (while 30% goes to the guard set). 25% of the emission is also reserved for 'Event-Based Emission (Rewards)'.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Who can become a Watcher?</h4>
                <p className="text-gray-300 mb-2">Anyone. You can actively contribute to the expansion and security audit of the Rosen Bridge by becoming a Watcher. Watchers receive rewards for accurate reporting.</p>
                <ol className="list-decimal pl-6 text-gray-300 mb-2">
                  <li>Configure and run the Watcher app for your desired network (In progress, so stay tuned!).</li>
                  <li>Top it off with enough RSN and ERG.</li>
                  <li>Put in collateral and receive reporting permits.</li>
                  <li>Enjoy reporting and getting rewards.</li>
                </ol>
                <h4 className="font-semibold text-cyan-400 mb-2">Is there a limit on the number of watchers?</h4>
                <p className="text-gray-300 mb-2">77 is the one repo's capacity and cannot be changed, but we'll open other repos. So technically, we can have any number of repos that each has 77 watchers. However, in long run one or two repos is sufficient for each network.</p>
                <p className="text-gray-300 mb-2">A minimum of <span className="text-orange-400 font-semibold">60%+1</span> of the total number of watchers is required to trigger an event, adjustable by the guard set.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Can I run multiple watchers?</h4>
                <p className="text-gray-300 mb-2">Yes, but it incurs financial considerations to prevent abuse. Each instance needs a unique folder and WATCHER_PORT.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Do I need to do anything after setup?</h4>
                <p className="text-gray-300 mb-2">You don't need to manually watch and approve transactions, the software will handle everything automatically, you just need to ensure the watcher keeps running.</p>
                <ol className="list-decimal pl-6 text-gray-300 mb-2">
                  <li>Observe an event and wait a bit.</li>
                  <li>Create a commitment using report permits.</li>
                  <li>Aggregate all participating watchers commitment (into something called event trigger).</li>
                  <li>Wait for guards stuff, especially target chain tx and reward tx submission.</li>
                  <li>Get rewards.</li>
                </ol>
                <h4 className="font-semibold text-cyan-400 mb-2 mt-6">Interacting with a headless server</h4>
                <p className="text-gray-300 mb-2">To interact with a headless server, you can use SSH (Secure Shell) to establish a secure connection. You can also forward ports to access specific services on the server. In the example below, we are using SSH to forward the local port 3030 to port 3030 on the server. This allows us to access a service running on port 3030 of the server as if it was running on our local machine.</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-4 overflow-x-auto">ssh -L 3030:127.0.0.1:3030 user@watcher-server</pre>
                <ul className="list-disc pl-6 text-gray-400 text-sm mb-4">
                  <li><b>ssh</b> is the command to start the SSH client program.</li>
                  <li><b>-L 3030:127.0.0.1:3030</b> specifies that the local port 3030 should be forwarded to port 3030 on the server. 127.0.0.1 is the loopback IP address, which refers to the server itself in this context.</li>
                  <li><b>user@watcher-server</b> specifies the username and the server to connect to. Replace user with your actual username and watcher-server with the actual hostname or IP address of your server.</li>
                </ul>
                <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                  <h4 className="font-bold text-yellow-300 mb-2 flex items-center gap-2"><Shield className="w-4 h-4" /> Security Considerations</h4>
                  <ul className="list-disc pl-6 text-yellow-100 text-sm">
                    <li>Keep your watcher machine and Docker installation updated with the latest security patches.</li>
                    <li>Do not reuse your watcher's RPC password anywhere else.</li>
                    <li>Secure your machine's SSH login with a strong password and/or public key authentication.</li>
                    <li>Consider running the watcher in a dedicated VM or container for isolation.</li>
                    <li>Regularly monitor your watcher's logs and web UI for any signs of issues.</li>
                    <li>Keep your collateral wallet secure, as the wallet owner has control over unstaking collateral.</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 border-l-4 border-cyan-400 p-4 mb-6 rounded">
                  <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> Monitoring and Alerting</h4>
                  <p className="text-cyan-100 text-sm mb-2">Maintaining high watcher uptime is critical to avoid collateral penalties. Consider setting up external monitoring and alerting:</p>
                  <ul className="list-disc pl-6 text-cyan-100 text-sm">
                    <li>Use services like Uptime Robot or Pingdom to monitor your watcher's web UI and alert you if it goes down.</li>
                    <li>Use a service like Healthchecks.io to monitor your watcher's log for error keywords and send alerts.</li>
                    <li>The Rosen team's monitoring will alert in Telegram/Discord if your watcher is down, but additional self-monitoring is strongly recommended.</li>
                  </ul>
                </div>
                <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-orange-300 mb-2 flex items-center gap-2"><Settings className="w-4 h-4" /> Using a Config File for Environment Variables</h4>
                  <p className="text-gray-300 mb-2">Instead of specifying environment variables in the docker-compose.yml file, you can use a separate <b>.env</b> file. This keeps your compose file cleaner and allows for easier management of environment variables.</p>
                  <pre className="bg-neutral-800 rounded p-4 text-sm text-orange-200 mb-2 overflow-x-auto">CURRENT_NETWORK=BITCOIN
DATABASE_URL=file:/app/services/watcher/data/database/data.sqlite
HTTP_PORT=3030
LOGGER_LEVEL=info</pre>
                  <p className="text-gray-300 mb-2">Update your <b>docker-compose.yml</b> to reference these variables:</p>
                  <pre className="bg-neutral-800 rounded p-4 text-sm text-orange-200 mb-2 overflow-x-auto">services:
  service:
    image: rapidfort/postgresql:16.0.0
    container_name: watcher_btc
    env_file:
      - .env
    # ... rest of the service definition</pre>
                  <p className="text-gray-300">Docker Compose will automatically load the variables from the .env file.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="collateral">
              <AccordionTrigger className="text-xl font-semibold">Collateral, Permits and Reporting</AccordionTrigger>
              <AccordionContent>
                <h4 className="font-semibold text-cyan-400 mb-2 mt-4">Collateral Requirements</h4>
                <p className="text-gray-300 mb-2">Each instance requires <span className="text-orange-400 font-semibold">800 ERG</span> and <span className="text-orange-400 font-semibold">30,000 RSN</span> as collateral. This collateral is fully redeemable and the amount is adjustable.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">How do I redeem my collateral?</h4>
                <p className="text-gray-300 mb-2">You can redeem it after redeeming your last permit token, but if you have unsettled reports, you must wait until those permits are returned.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Permit Acquisition</h4>
                <p className="text-gray-300 mb-2">To report, watchers must acquire permits, costing an additional <span className="text-orange-400 font-semibold">3,000 RSN</span>. Multiple permits are necessary for reporting concurrent events, and permits can be seized if reports are found fraudulent.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Reporting Process</h4>
                <ol className="list-decimal pl-6 text-gray-300 mb-2">
                  <li>Watchers report deposit events as part of a collective effort.</li>
                  <li>A consensus among watchers on an event triggers a final report and guard intervention.</li>
                  <li>Guards take necessary actions based on these reports.</li>
                  <li>Watchers involved in successful cross-chain settlements are rewarded.</li>
                </ol>
                <h4 className="font-semibold text-cyan-400 mb-2">What if my report is successful?</h4>
                <p className="text-gray-300 mb-2">You'll receive rewards and your staked amount will be returned.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">What if my report is incorrect and uncorroborated?</h4>
                <p className="text-gray-300 mb-2">You'll get a refund of your stake without any additional penalties.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">What are the consequences of collusion and fraud in reporting?</h4>
                <p className="text-gray-300 mb-2">Colluding watchers will lose the amount they staked.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Are permits spent or staked for reporting?</h4>
                <p className="text-gray-300 mb-2">Permits are staked, not spent, and can be managed through your dashboard.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Can I adjust my permits?</h4>
                <p className="text-gray-300 mb-2">Yes, you can increase or decrease your permits at any time and redeem them when leaving.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">How many permits are needed for concurrent reporting?</h4>
                <p className="text-gray-300 mb-2">The number depends on bridge activity, with about 160 needed to report one transaction per minute.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Do I still need RSN on Ergo to be a watcher on another chain?</h4>
                <p className="text-gray-300 mb-2">Yes, all permit operations are conducted on the Ergo platform, and Rosen's logic is Ergo-based.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="troubleshooting">
              <AccordionTrigger className="text-xl font-semibold">Troubleshooting</AccordionTrigger>
            <AccordionContent>
                <h4 className="font-semibold text-cyan-400 mb-2">UI Errors</h4>
                <p className="text-gray-300 mb-2"><b>scanner is out of sync</b><br/>Your scanner is out of sync. You need to wait until it scan all blocks. The service runs every 3 minutes or so. Depending on when it calls and blocks produced it may drop a block sync here and there but catches up in most cases.<br/>Alternatively you can delete docker volumes and restart your watcher with newer initial height. Then it doesn't need to scan that much blocks to be synced.</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose down --volumes</pre>
                <p className="text-gray-300 mb-2">Then update the local.yaml initial height. Then rerun the watcher.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Permit Health Broken</h4>
                <p className="text-gray-300 mb-2">By default, the permit health warning parameter is set to 100. This is adjustable locally by adding the following into your local.yaml and adjusting as neccessary:</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">healthCheck:
  permit:
     warnCommitmentCount: 1 # amount of permits left before giving a warning
     criticalCommitmentCount: 0 # amount of permits left it is critical</pre>
                <p className="text-gray-300 mb-2">warnCommitmentCount will change the warning to yellow when the available Permits reduce to the number.<br/>criticalCommitmentCount will change to red when the available Permits reduce to this number.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">watcher-db-1 is unhealthy</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>dependency failed to start: container watcher-db-1 is unhealthy</li>
                  <li>Your .env file might be missing? turn on view file extensions like in the video, are you sure it's .env and not .env.txt?</li>
                  <li>update your local.yaml with the current ergo blockheight</li>
                </ul>
                <p className="text-gray-300 mb-2">As a last resort, some users are reporting that this issue can be fixed by pruning existing images and rebuilding</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker system prune -a</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Lock, Unlock 500 Error</h4>
                <p className="text-gray-300 mb-2">If you're receiving a 500 Error while trying to lock or unlock your ERG and/or RSN, it could possibly be from having an insufficient box value on chain. This is fixed in the latest release, please update if you have not done so already.</p>
                <p className="text-gray-300 mb-2">Update with</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker-compose pull
docker-compose down
docker-compose up -d</pre>
                <p className="text-gray-300 mb-2">please check your service logs first. If you see a warning indicating "Box value BoxValue(1100000) is too low, minimum value for box size of ..."<br/>To rectify, add the following to your local.yaml in the "ergo:" section with one tab indent. (should be the same indent as initialHeight).</p>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">  minBoxValue: '2000000'</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">UnhandeledPromiseRejection</h4>
                <p className="text-gray-300 mb-2">UnhandeledPromiseRejection, promise rejected with reason Object.....LifeCycle script start failed<br/>There is a issue in ogmios roll backward after a fork. Fix is a work in progress.</p>
                <h4 className="font-semibold text-cyan-400 mb-2">The requested image's platform (linux/amd64) does not match the detected host platform</h4>
                <p className="text-gray-300 mb-2">Incompatiblility with certain ARM chips in Rasberry Pi's and (ARM mac mini m1 Asahi linux: see this PR)</p>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="docker">
              <AccordionTrigger className="text-xl font-semibold">Working with Docker</AccordionTrigger>
            <AccordionContent>
                <h4 className="font-semibold text-cyan-400 mb-2">Checking logs</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose logs</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Updating your watcher</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker-compose pull
docker-compose down
docker-compose up -d</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Restarting your watcher</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose up -d</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">no configuration files provided: not found</h4>
                <p className="text-gray-300 mb-2">Check you're in the correct directory. You should be executing docker compose commands from within the operation/watcher folder</p>
                <h4 className="font-semibold text-cyan-400 mb-2">Dumping databases</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose down
docker volume remove watcher_postgres-data
#---edit block height in YAML after this step
docker compose up -d</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Clearing Volumes</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose down --volumes</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Re-initiate the Watcher with</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker compose up -d</pre>
                <h4 className="font-semibold text-cyan-400 mb-2">Clean Slate</h4>
                <pre className="bg-neutral-900/80 rounded p-4 text-sm text-orange-300 mb-2 overflow-x-auto">docker ps -a
docker compose down
docker rm CONTAINERID1 CONTAINERID2 CONTAINERID3</pre>
                <p className="text-gray-300">then delete the folder and start fresh</p>
            </AccordionContent>
          </AccordionItem>
          </Accordion>
        </div>
      </TabsContent>
      <TabsContent value="guards">
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">Rosen Guards</h1>
          <p className="text-lg text-gray-300 mb-8">
            Rosen is an Ergo-centric bridge fortified with multi-layered security protection. In the initial layer, <b>Watchers</b> monitor network activities and report valid bridge-related events to the subsequent layer, <b>Guards</b>. These Guards then carefully process the reported events and execute required actions. In brief, Guards are dedicated to security maintenance and executing responses, while Watchers are focused on the ongoing monitoring of activities and transparent reporting.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange-400" /> Guard Set: Security & Collateral
            </h2>
            <p className="text-gray-300 mb-2">Guards are a federated group of entities managing the Rosen core. Their authority over Rosen is restricted through multisignature contracts and wallets. Failure or collusion of Guards will be tolerated while the majority of Guards are healthy. Each Guard has a reasonable amount of funds locked as collateral and will lose all their funds at once in case of malicious behaviour.</p>
            <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
              <li>Guards need to lock RSN as collateral.</li>
              <li>Funds will be emitted to the Guard Set and involved Watchers in case of any successful bridge transfers.</li>
              <li>Funds will be slashed/collected in case of malicious behavior.</li>
              <li>When RSN emission has ended, all bridge fees will be collected in the RSN token.</li>
              <li>Holding RSN will have special fee benefits for projects.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" /> Becoming a Guard
          </h2>
          <h4 className="font-semibold text-cyan-400 mb-2">Who can become a Guard?</h4>
          <p className="text-gray-300 mb-2">Becoming a guard is effort-intensive and permission-based, starting with selected known entities and later admissions by the guard set. Guards buy and lock RSN tokens in a multisig wallet, with stakes lost for misconduct or inactivity.</p>
          <h4 className="font-semibold text-cyan-400 mb-2">Who are the current Guards?</h4>
          <p className="text-gray-300 mb-6">The Guard Set can be seen on <a href="https://rosen.tech" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">rosen.tech</a></p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-yellow-400" /> How are transactions submitted to the target blockchain?
          </h2>
          <div className="mb-8">
            <h4 className="font-semibold text-cyan-400 mb-2">The Rosen Bridge Guard Service facilitates transaction submissions across different blockchains. Here's how transactions are submitted to the target blockchain within this service:</h4>
            <ol className="list-decimal pl-6 text-gray-300 mb-4">
              <li>
                <b>Event Processing:</b>
                <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
                  <li><b>Scanner & Extractor:</b> The system includes a blockchain scanner and data extractor that monitor the Ergo blockchain and Rosen Bridge for relevant events. These components fetch new blocks, looking for specific transaction patterns or events that need to be acted upon.</li>
                  <li><b>Event Processor:</b> Each event detected by the extractor is processed to verify its authenticity and relevance. This process includes checks against predefined rules and conditions specific to the blockchain operations being monitored.</li>
                </ul>
              </li>
              <li>
                <b>Transaction Agreement and Execution:</b>
                <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
                  <li><b>TxAgreement:</b> For actions that require consensus or agreement (like cross-chain movements involving significant value), the Guard Service utilizes a multi-guard consensus mechanism. Each guard node independently verifies the transaction details and signals agreement.</li>
                  <li><b>Transaction Processor:</b> Once consensus is reached, the Transaction Processor crafts the necessary blockchain transaction. This component is responsible for creating a valid and secure transaction that represents the agreed-upon action (like transferring assets between chains).</li>
                  <li><b>MultiSig & TSS (Threshold Signature Scheme):</b> The final transaction is signed using multi-signature and threshold signature schemes to ensure security and trustworthiness. These cryptographic schemes help in securing transactions by requiring multiple signatures or a subset of signatures from a larger set to authorize a transaction.</li>
                </ul>
              </li>
              <li>
                <b>Blockchain Interaction:</b>
                <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
                  <li><b>BaseChain and Reward Services:</b> These services handle the actual interaction with the blockchain. They generate and verify payment transactions, interacting directly with the blockchain to submit the signed transactions.</li>
                  <li>The services are designed to be flexible enough to support various blockchains (like Ergo and Cardano), which means that transaction formats, signing mechanisms, and interaction protocols are tailored to the specific requirements of each blockchain.</li>
                </ul>
              </li>
              <li>
                <b>Confirmation and Finalization:</b>
                <ul className="list-disc pl-6 text-gray-400 text-sm mb-2">
                  <li>After a transaction is submitted to the blockchain, it is monitored for confirmation. The system ensures that the transaction achieves a sufficient number of confirmations to be considered final and irreversible.</li>
                  <li>The Transaction Processor also checks for successful transaction execution and handles any necessary follow-up actions or notifications.</li>
                </ul>
              </li>
            </ol>
            <div className="bg-cyan-900/30 border-l-4 border-cyan-400 p-4 mb-6 rounded">
              <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2"><Shield className="w-4 h-4" /> Summary</h4>
              <p className="text-cyan-100 text-sm">The Guard Service from the Rosen Bridge project orchestrates the entire process from event detection on one blockchain through agreement and transaction crafting, to final submission and confirmation on another blockchain. This robust mechanism ensures that cross-chain transactions are executed securely and reliably, adhering to the consensus and operational rules of the involved blockchains.</p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tokenomics">
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">Tokenomics</h1>
          <p className="text-lg text-gray-300 mb-8">
            Rosen Bridge is designed to bootstrap liquidity across multiple ecosystems. The Rosen Token serves as a sybil resistance mechanism for the Rosen framework, a fee distribution mechanism, and means to access services of the Rosen Bridge.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Coins className="w-6 h-6 text-orange-400" /> Collateral & Participation
            </h2>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Watchers are required to put collateral in RSN and ERG by staking, which allows them to acquire reporting permits.</li>
              <li>Guards need to lock RSN as collateral.</li>
              <li>Funds will be emitted to the Guard Set and involved Watchers in case of any successful bridge transfers.</li>
              <li>Funds will be slashed/collected in case of malicious behavior.</li>
              <li>When RSN emission has ended, all bridge fees will be collected in the RSN token.</li>
              <li>Holding RSN will have special fee benefits for projects.</li>
            </ul>
            <p className="text-gray-300 mt-2">Any user can join as a Watcher given they meet the collateral requirements needed to participate, and earn rewards for their services.</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-cyan-400" /> Overview
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-8">
            <li><b>Token Name:</b> Rosen Bridge Token</li>
            <li><b>Token Ticker:</b> RSN</li>
            <li><b>Max Supply:</b> 1,000,000,000</li>
            <li><b>Initial Liquidity Bootstrapping:</b> 100,000,000</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-yellow-400" /> Breakdown
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="px-4 py-2 text-left">Token Allocation</th>
                  <th className="px-4 py-2 text-left">Number of Tokens</th>
                  <th className="px-4 py-2 text-left">% of Total Supply</th>
                  <th className="px-4 py-2 text-left">Distribution Method</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Initial Liquidity Bootstrapping (Ergo and Cardano)</td>
                  <td className="px-4 py-2">100,000,000</td>
                  <td className="px-4 py-2">10%</td>
                  <td className="px-4 py-2">Liquidity pool and ISPO</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Future Liquidity Bootstrapping (New Chains)</td>
                  <td className="px-4 py-2">385,000,000</td>
                  <td className="px-4 py-2">38.5%</td>
                  <td className="px-4 py-2">Liquidity on new chains</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Event-Based Emission (Rewards)</td>
                  <td className="px-4 py-2">250,000,000</td>
                  <td className="px-4 py-2">25%</td>
                  <td className="px-4 py-2">Event-based</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Passive Staking</td>
                  <td className="px-4 py-2">25,000,000</td>
                  <td className="px-4 py-2">2.5%</td>
                  <td className="px-4 py-2">Staking rewards</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Team Budget</td>
                  <td className="px-4 py-2">105,000,000</td>
                  <td className="px-4 py-2">10.5%</td>
                  <td className="px-4 py-2">48-Months vested</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Treasury</td>
                  <td className="px-4 py-2">105,000,000</td>
                  <td className="px-4 py-2">10.5%</td>
                  <td className="px-4 py-2">48-Months vested</td>
                </tr>
                <tr className="border-t border-neutral-700">
                  <td className="px-4 py-2">Ergo Foundation</td>
                  <td className="px-4 py-2">30,000,000</td>
                  <td className="px-4 py-2">3%</td>
                  <td className="px-4 py-2">48-Months vested</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-400" /> Funding
          </h2>
          <p className="text-gray-300 mb-4">Rosen Bridge is entirely self-funded, with no private sales, venture capital, or SAFT agreements involved, with all contracts being financed out of pocket as there is no emission yet. The core team consists of 6 main developers.</p>
          <p className="text-gray-300 mb-4">Initial liquidity for Ergo, accounting for 5%, was deposited on the Spectrum LP. There were no bots or front-running involved.</p>
          <p className="text-gray-300 mb-4">We collaborated with Zengate for Catalyst, as it involves Cardano politics, an area that falls within their realm of expertise.</p>
          <p className="text-gray-300 mb-8">We have successfully completed and received funds from milestone 3 and have submitted milestone 4 for F10 funding.</p>

          <div className="bg-cyan-900/30 border-l-4 border-cyan-400 p-4 mb-6 rounded">
            <h4 className="font-bold text-cyan-300 mb-2 flex items-center gap-2"><Info className="w-4 h-4" /> Why is the RSN token needed?</h4>
            <ul className="list-disc pl-6 text-cyan-100 text-sm mb-2">
              <li>Capital Formation. Development has costs. Also need to form liquidity on the market.</li>
              <li>Creates incentives (event-based emission).</li>
            </ul>
            <p className="text-cyan-100 text-sm">See this answer from Armeanio in the Weekly Update & AMA - December 14th 2023.</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="team">
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">Rosen Team</h1>
          <p className="text-lg text-gray-300 mb-8">
            The Rosen team is comprised of 8 full-time developers and 2-3 part-time developers. Some frontend and UI tasks are outsourced. The team's strength is further enhanced by the support of several advisors.
          </p>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-orange-400" /> Team & Funding
            </h2>
            <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li>Rosen Bridge operates entirely on self-funding, with no involvement of private sales, venture capital, or SAFT agreements.</li>
              <li>All contracts are financed out of pocket as there is no emission yet. The core team is made up of 6 main developers.</li>
              <li>Initial liquidity for Ergo, accounting for 5%, was deposited on the Spectrum LP. This process was carried out without the involvement of bots or front-running. (Refer to the Tokenomics section for more details)</li>
              <li>A collaboration was established with Zengate for Catalyst, as it involves Cardano politics, an area that falls within their realm of expertise.</li>
              <li>The team has successfully completed and received funds from milestone 3 and has submitted milestone 4 for F10 funding.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-cyan-400" /> History
          </h2>
          <p className="text-gray-300 mb-4">The Rosen Bridge team was initially assembled during ERGOHACK I. Under the mentorship of <b>@mhs_sam</b>, team members <b>@RaaCT0R</b>, <b>@vorujack</b>, and <b>@zargarzadeh</b> developed ErgoRaffle. This marked the beginning of their significant contributions to the ecosystem, which include projects like minotaur-wallet and ergo-faucet. The concept of a bridge has been a consistent focus for the team since 2021, initially with ErgoGravity, an Ergo connector to the Wormhole bridge. However, after the Wormhole bridge was compromised, resulting in a loss of $325m, the team shifted their focus towards developing a bridge centered around Ergo.</p>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-yellow-400" /> Founders
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li><b>Mohammad Hasan Samadani (mhs_sam)</b> — an honourary Ergo Foundation board member and a founder of Rosen Bridge, has a PhD in computer science and over 12 years of experience in security and software development. He has made significant contributions to the Ergo mining infrastructure, Stratum server, and ergopool. His expertise in product ownership, research, and team leadership has been instrumental in the development of Rosen Bridge.</li>
            <li><b>Joseph Armeanio</b> — a board member and director of the Ergo Foundation and a founder of Rosen Bridge, has been involved in the crypto industry since 2013. He was a partner CIO at Big Bear Investments and has been on the board of the Universal Education Foundation, a 501(c)3 organisation, since 2008. Joseph's passion for counter-economic frameworks and tools for social good drives his work in creating partnerships in the crypto industry, educational partnerships, and research opportunities, all while promoting the adoption of Ergo tooling in the public and non-profit sectors.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-400" /> Developers
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li><b>Mohammad Kermani</b> — software engineer with over 7 years of experience, including five years in the industry. He enjoys the challenge of building user-centric applications and is always eager to learn new technologies.</li>
            <li><b>Fateme Rahmani</b> — dedicated developer on the Rosen Bridge team who's previously worked on the Ergo Raffle backend.</li>
            <li><b>Moein Zargarzadeh</b> — previous contributions include ergo-faucet and Ergo Raffle.</li>
            <li><b>SepehrGanji</b> — previously contributed to FleetSDK, GraphQL.</li>
            <li><b>RaaCT0R</b></li>
            <li><b>Esmaeil Mohammed (vorujack)</b> — previously contributed to minotaur-wallet.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Is Rosen Bridge Affiliated with Ergo or The Ergo Foundation?
          </h2>
          <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-6 rounded">
            <p className="text-yellow-100 text-sm mb-2">Rosen Bridge, although initiated by members of the Ergo Foundation, operates independently. The Ergo Foundation does not exercise any managerial or controlling influence over Rosen Bridge. However, the Foundation has provided support to Rosen Bridge in the form of grants, a common practice for projects within the ecosystem. The Foundation is also set to receive 3% of the total supply of RSN. For more details, refer to the Tokenomics section.</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="uses">
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">Rosen Bridge: Connecting Cardano, Ergo, Bitcoin, Ethereum, and Binance Smart Chain</h1>
          <p className="text-lg text-gray-300 mb-8">
            The Rosen Bridge enables seamless interaction between the Cardano, Ergo, Bitcoin, Ethereum, and Binance Smart Chain blockchains. This bridge doesn't facilitate direct swaps between native tokens. Instead, it allows users to convert:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>ADA into <b>rsADA</b> on the Ergo blockchain</li>
            <li>ERG into <b>rsERG</b> on the Cardano blockchain</li>
            <li>BTC into <b>rsBTC</b> on both Ergo and Cardano blockchains</li>
            <li>ETH into <b>rsETH</b> on both Ergo and Cardano blockchains</li>
            <li>BNB into <b>rsBNB</b> on both Ergo and Cardano blockchains (Soon!)</li>
          </ul>
          <p className="text-gray-300 mb-8">This functionality opens up new possibilities for token holders across these ecosystems.</p>

        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-orange-400" /> Supported Tokens
        </h2>
          <p className="text-gray-300 mb-4">You can see a full list of locked assets <a href="#" className="text-cyan-400 underline">here</a>.</p>

          <Accordion type="multiple" className="mb-8">
            <AccordionItem value="ergo">
              <AccordionTrigger className="text-lg font-semibold text-orange-300">Ergo Network</AccordionTrigger>
            <AccordionContent>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 text-left">Token</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">ERG</td><td className="px-4 py-2">Native Ergo token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">SigUSD / SigRSV</td><td className="px-4 py-2">Ergo stablecoin and reserve</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">RSN</td><td className="px-4 py-2">Rosen Bridge token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">COMET</td><td className="px-4 py-2">Ergo ecosystem token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">SPF</td><td className="px-4 py-2">Spectrum Finance token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">AHT</td><td className="px-4 py-2">ergouactions.org</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">Bober</td><td className="px-4 py-2">Meme Coin</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">COS</td><td className="px-4 py-2">Cup of Sugar</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">EPOS</td><td className="px-4 py-2">tabbypos Point of sale</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">ErgOne</td><td className="px-4 py-2">ErgOne</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">GIF</td><td className="px-4 py-2">GreasyCex</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">GluonW GAU</td><td className="px-4 py-2">Gluon</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">GluonW GAUC</td><td className="px-4 py-2">Gluon</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">MEW</td><td className="px-4 py-2">MewFinance</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">Paideia</td><td className="px-4 py-2">DAO Toolkit</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">QUACKS</td><td className="px-4 py-2">Duckpools (Lending)</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">Troll</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">WALRUS</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">CYPX</td><td className="px-4 py-2">Cyberverse</td></tr>
                    </tbody>
                  </table>
                </div>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="cardano">
              <AccordionTrigger className="text-lg font-semibold text-cyan-300">Cardano Network</AccordionTrigger>
            <AccordionContent>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 text-left">Token</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">ADA</td><td className="px-4 py-2">Native Cardano token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">Hosky</td><td className="px-4 py-2">Cardano meme token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">NIKEPIG</td><td className="px-4 py-2">Cardano meme token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">SUGAR</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">BANA</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">O</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">DIS</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">sOADA</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">OADA</td><td className="px-4 py-2">New supported token</td></tr>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">MNT</td><td className="px-4 py-2">New supported token</td></tr>
                    </tbody>
                  </table>
                </div>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="bitcoin">
              <AccordionTrigger className="text-lg font-semibold text-yellow-300">Bitcoin Network</AccordionTrigger>
            <AccordionContent>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 text-left">Token</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">BTC</td><td className="px-4 py-2">Native Bitcoin token</td></tr>
                    </tbody>
                  </table>
                </div>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="ethereum">
              <AccordionTrigger className="text-lg font-semibold text-purple-300">Ethereum Network</AccordionTrigger>
            <AccordionContent>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 text-left">Token</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">ETH</td><td className="px-4 py-2">Native Ethereum token</td></tr>
                    </tbody>
                  </table>
                </div>
            </AccordionContent>
          </AccordionItem>
            <AccordionItem value="bsc">
              <AccordionTrigger className="text-lg font-semibold text-yellow-400">Binance Smart Chain Network</AccordionTrigger>
            <AccordionContent>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full text-sm text-gray-300 border border-neutral-700 rounded-xl overflow-hidden">
                    <thead className="bg-neutral-800">
                      <tr>
                        <th className="px-4 py-2 text-left">Token</th>
                        <th className="px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-neutral-700"><td className="px-4 py-2">BNB</td><td className="px-4 py-2">Native Binance Smart Chain token</td></tr>
                    </tbody>
                  </table>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
            <Zap className="w-6 h-6 text-cyan-400" /> Ergo Ecosystem Opportunities
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li><b>Token Swaps:</b> Use Ergodex to acquire native tokens like rsADA, rsBTC, rsETH, rsBNB, or rsHOSKY.</li>
            <li><b>Auction House:</b> A decentralized marketplace for NFTs and tokens that now accepts rsADA, rsBTC, rsETH, and rsBNB. List tokens in bulk or make offers.</li>
            <li><b>SigmaFi:</b> A decentralized peer-to-peer bonds market where you can use wrapped tokens as collateral.</li>
            <li><b>DuckPools:</b> Lend rsADA, rsBTC, rsETH, rsBNB, and other supported tokens.</li>
            <li><b>ErgoMixer:</b> Enhance privacy by mixing your wrapped tokens.</li>
            <li><b>SigmaO:</b> Create American-style call and put options on any wrapped token.</li>
            <li><b>Tip:</b> Low on ERG for transaction fees? Use babel-fees on Ergo to pay transaction fees with native tokens when you don't have enough ERG.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
            <Zap className="w-6 h-6 text-cyan-400" /> Cardano Ecosystem Opportunities
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li><b>Cardano DEXs:</b> Gain exposure to Ergo, Bitcoin, Ethereum, and Binance Smart Chain bridged tokens on popular Cardano decentralized exchanges: Spectrum, Minswap, Sundaeswap</li>
            <li><b>Liqwid Finance:</b> Participate in DeFi activities using bridged tokens, including rsERG, rsBTC, rsETH, and rsBNB.</li>
            <li><b>Lenfi:</b> Explore lending and borrowing options with bridged assets.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
            <Zap className="w-6 h-6 text-cyan-400" /> Ethereum Ecosystem Opportunities
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>TBC</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
            <Rocket className="w-6 h-6 text-green-400" /> Future Developments
          </h2>
          <p className="text-gray-300 mb-4">As the bridge continues to evolve, we anticipate more integrations and offerings involving rsADA, rsERG, rsBTC, rsETH, rsBNB, and other bridged tokens. Stay tuned for exciting developments across all five ecosystems.</p>
      </div>
      </TabsContent>
    </Tabs>
  );
} 