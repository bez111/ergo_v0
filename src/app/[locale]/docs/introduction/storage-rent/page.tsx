
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Coins,
  Database,
  FileText,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Layers,
  Zap,
  Shield,
  Info,
  Clock,
  KeyRound,
  Globe,
  Wallet,
  ArrowRight,
  DollarSign,
  Package,
  Repeat,
  Code,
  Network,
  Star,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function StorageRentPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="fees" className="flex items-center gap-2 justify-center">
          <DollarSign className="w-4 h-4" /> Fees
        </TabsTrigger>
        <TabsTrigger value="tokens" className="flex items-center gap-2 justify-center">
          <Package className="w-4 h-4" /> Tokens
        </TabsTrigger>
        <TabsTrigger value="spending" className="flex items-center gap-2 justify-center">
          <Wallet className="w-4 h-4" /> Spending
        </TabsTrigger>
        <TabsTrigger value="state-growth" className="flex items-center gap-2 justify-center">
          <Repeat className="w-4 h-4" /> State Growth
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo's Demurrage (aka Storage Rent)
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo's design emphasizes long-term economic sustainability. One of the key strategies to ensure this is the implementation of <span className="font-semibold text-orange-300">demurrage</span> or <span className="font-semibold text-cyan-300">storage rent</span>. This mechanism, akin to 'on-chain garbage collection', not only mitigates the issue of blockchain bloat but also turns it into a profitable venture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#key-features"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <Shield className="w-5 h-5 mr-2" /> Key Features
            </Link>
            <Link
              href="https://ergoplatform.org/en/blog/2023-07-20-storage-rent/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
            >
              <FileText className="w-5 h-5 mr-2" /> Read the Blog
            </Link>
          </div>
        </div>

        {/* Key Features Grid */}
        <div id="key-features" className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" /> Demurrage Activation
            </h3>
            <p className="text-gray-300 mb-4">
              Starting from block <span className="font-semibold text-orange-300">1,051,200</span> (July 20th, 2023), miners can charge storage rent or fully spend the box if its value doesn't cover the rent.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Coins className="w-5 h-5 text-cyan-400" /> Miner Incentives
            </h3>
            <p className="text-gray-300 mb-4">
              Storage fees serve as an additional source of rewards for miners, supplementing block and transaction rewards.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-green-400" /> Reducing Blockchain Bloat
            </h3>
            <p className="text-gray-300 mb-4">
              By reducing the storage load, storage fees eliminate potential extra costs that could arise from excessive state growth.
            </p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" /> Stimulating Circulation
            </h3>
            <p className="text-gray-300 mb-4">
              Storage fees stimulate coin circulation and deter deflation, thereby preventing illiquidity and congestion in the currency system.
            </p>
          </div>
        </div>

        {/* Understanding Demurrage Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Understanding 'Demurrage'
          </h2>
          <p className="text-gray-300 mb-4">
            Demurrage is a nominal fee levied on unspent output after four years. The fee per byte is determined by the storage rent subprotocol. For a box without tokens and complex scripts, this amounts to approximately <span className="font-semibold text-orange-300">0.14 ERG every four years</span>.
          </p>
          <p className="text-gray-300 mb-2">
            For a comprehensive understanding of the storage rent fees within the Ergo blockchain, including how these fees are calculated, applied, and adjusted over time, visit this page.
          </p>
        </div>

        {/* Tokens, NFTs, and Asset Management Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" /> What About Tokens, NFTs, etc?
          </h2>
          <p className="text-gray-300 mb-4">
            Ergo's demurrage mechanism rewards miners uniquely by allowing them to claim valuable assets within a UTXO if the ERGs available are insufficient to cover the rent. This principle applies to various assets, including NFTs and stablecoins like SigUSD, and promotes increased participation and active asset management.
          </p>
          <p className="text-gray-300 mb-4">
            While it enhances network security and reduces blockchain bloat, it could lead to uninformed users inadvertently losing valuable assets if they fail to maintain enough ERGs. Users are strongly advised to thoroughly understand Ergo's demurrage mechanism and ensure they possess enough ERGs to protect their valuable assets. <a href="https://ergoplatform.org/en/blog/2023-07-20-storage-rent/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">For more information, click here.</a>
          </p>
        </div>

        {/* Box Age Tools Section */}
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <KeyRound className="w-6 h-6 text-cyan-400" /> How to Check the Age of Your Boxes?
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-2">
            <li>
              <span className="font-semibold">TokenJay</span> offers a convenient <a href="https://tokenjay.app/tools/consolidate" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">Box consolidation tool</a> that checks the number and age of boxes in your wallet and consolidates them when necessary.
            </li>
            <li>
              <span className="font-semibold">Nautilus</span> also features a built-in box consolidation tool that alerts you if your UTxO set requires consolidation.
            </li>
            <li>
              Alternatively, you can message <a href="https://t.me/ergoportbot" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline">@ergoportbot</a> on Telegram and use the command <span className="bg-neutral-800 px-2 py-1 rounded text-orange-300">/ep boxage ADDRESS</span> to check.
            </li>
          </ul>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Additional Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://ergoplatform.org/en/blog/2023-07-20-storage-rent/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <FileText className="w-5 h-5 text-orange-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">How to consolidate a wallet</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="https://github.com/ergoplatform/ergo/pull/1144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">HF-4.0 Reduce storage rent period #1144 - Rejected</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="https://github.com/ergoplatform/eips/pull/93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">EIP-0045 Redistribution contracts for Storage Rent Fees #93</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="https://github.com/ergoplatform/eips/pull/39"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <Layers className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">EIP-39 Monotonic box creation height rule</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="https://github.com/ergoplatform/eips/pull/68"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">EIP-33: Token burning during rent collection #68</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="https://www.ergoforum.org/t/demurrage-details/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <Globe className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">Demurrage details (ergoforum)</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
          </div>
        </div>
      </TabsContent>

      {/* Fees Tab */}
      <TabsContent value="fees">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Storage Rent Fees
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The FeeSimulator.scala tool offers a comprehensive means of simulating Ergo's storage rent fees. This tool aids in calculating the average byte size of a standard box based on the dimensions of two types of Pay-to-Public-Key (P2PK)-protected boxes: one containing only ergs and another containing an additional asset.
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-orange-400" /> Key Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Average Size of a Standard Box</h4>
              <p className="text-gray-300 text-lg font-semibold">105 bytes</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2">Storage Rent Fee</h4>
              <p className="text-gray-300 text-lg font-semibold">0.13125 ergs</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2">Projected Storage Rent</h4>
              <p className="text-gray-300 text-lg font-semibold">~0.13 ergs every four years</p>
            </div>
          </div>
        </div>

        {/* Connection to Transaction Fees Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-400" /> Connection to Transaction Fees
          </h2>
          <p className="text-gray-300 mb-4">
            While Ergo doesn't mandate a minimum transaction fee on the protocol level, a crucial detail is that each box must contain a minimum value per byte, which currently stands at <span className="font-semibold text-orange-300">360 nanoergs per byte</span>. Miners can collectively decide to alter this number within a [0, 10,000] nanoergs per byte range.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Adjustment Parameters</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Increment/Decrement Step: 2 or -2
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Per-Epoch Adjustment Rate: 10 nanoergs per byte
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2">Example</h4>
              <p className="text-gray-300 text-sm">
                Should a majority of miners opt to increase the default value during an epoch consisting of 1,024 blocks, the value for the ensuing epoch would be modified to <span className="font-semibold text-cyan-300">370 nanoergs per block</span>.
              </p>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            For further details on how these fee adjustments are made, check out the <a href="#" className="text-cyan-300 hover:underline">Governance section</a>.
          </p>
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Block Reward Calculation</h4>
            <p className="text-gray-300 mb-2">
              This enables miners to consistently earn rewards from a fixed-size UTXO set over a four-year span. After that, the reward for each block becomes:
            </p>
            <p className="text-orange-300 font-mono text-sm bg-neutral-800 px-3 py-2 rounded">
              perOutputFee * (numberOfBoxes / (4 * BlocksPerYear))
            </p>
            <p className="text-gray-300 mt-2">
              Given that Ergo's UTXO set size is in the same ballpark as Bitcoin's (~60 million), the potential block reward could look like this:
            </p>
            <div className="bg-neutral-800 rounded-lg p-4 mt-2">
              <p className="text-gray-300 text-sm">
                <span className="font-mono">0.001 * (60,000,000 / (4 * ))</span><br/>
                <span className="font-semibold text-green-400">Estimated Block Reward = 7.49 Ergs plus transaction fees</span>
              </p>
            </div>
          </div>
          <p className="text-gray-300 mt-4">
            For an academic perspective on this topic, consult the research paper <a href="#" className="text-cyan-300 hover:underline">"A Systematic Approach To Cryptocurrency Fees"</a>.
          </p>
        </div>

        {/* Storage Rent Fee Collection Section */}
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-cyan-400" /> Storage Rent Fee Collection
          </h2>
          <p className="text-gray-300 mb-4">
            Every four years, miners can capitalize on the opportunity to collect a storage rent fee by respending and recreating a box. In doing so, all register states remain intact, barring R0 (which holds the monetary value) and R3 (containing the creation height, transaction ID, and output index where the box originated).
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2">Network Voting Parameters</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Default rent fee per byte:</span><br/>
                  <span className="text-cyan-300 font-mono">1,250,000 nanoergs/byte</span>
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">Adjustable range:</span><br/>
                  <span className="text-orange-300 font-mono">[0…2,500,000]</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Further Reading Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Further Reading on Storage Rent Potential</h3>
          <p className="text-gray-300 mb-4 text-center">
            If you're keen on diving deeper into Ergo's potential storage rent gains, here are some community-contributed resources:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <FileText className="w-5 h-5 text-orange-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">Exploring Ergo's Storage Rent Potential: Part 1</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">Unlocking the Secrets of Ergo's Storage Rent: Part 2</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
            >
              <Globe className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-orange-300 hover:underline text-base">A Continual Look at Ergo's Storage Rent Potential: Part 3</span>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
            </a>
          </div>
        </div>
      </TabsContent>

      {/* Tokens Tab */}
      <TabsContent value="tokens">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            What about tokens, NFTs, etc?
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo's storage rent mechanism also allows miners to take over valuable assets inside a UTXO if there are insufficient ERGs to pay rent.
          </p>
        </div>

        {/* Positive Aspects Section */}
        <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Positive Aspects
          </h2>
          <p className="text-gray-300 mb-4">
            On the positive side, this mechanism incentivizes miners by offering them additional rewards, making the Ergo blockchain more attractive and encouraging participation. This increased participation can enhance the network's security and overall health.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Coins className="w-4 h-4" /> Miner Incentives
              </h4>
              <p className="text-gray-300 text-sm">
                Miners receive additional rewards through valuable assets, making the Ergo blockchain more attractive for mining operations.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Network Security
              </h4>
              <p className="text-gray-300 text-sm">
                Increased participation enhances the network's security and overall health through better decentralization.
              </p>
            </div>
          </div>
        </div>

        {/* Drawbacks Section */}
        <div className="bg-gradient-to-r from-red-400/10 to-orange-400/10 border border-red-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-400" /> Potential Drawbacks
          </h2>
          <p className="text-gray-300 mb-4">
            However, there are drawbacks to this mechanism. Users who are not aware of the storage rent system or fail to maintain enough ERG in their UTXO may lose valuable assets unintentionally.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> User Risks
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                Unaware users may lose valuable assets
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                Insufficient ERG balance in UTXO
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                Unintentional asset loss
              </li>
            </ul>
          </div>
        </div>

        {/* EIP-33 Discussion Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" /> EIP-33: Token Burning Discussion
          </h2>
          <p className="text-gray-300 mb-4">
            <a href="https://github.com/ergoplatform/eips/pull/68" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline font-semibold">EIP-33: Token burning during rent collection #68</a> is under discussion, which could potentially address some of these concerns in the future.
          </p>
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
            <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4" /> Current Status
            </h4>
            <p className="text-gray-300 text-sm">
              However, it appears there is currently <span className="font-semibold text-yellow-400">no consensus</span> on this proposal.
            </p>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">User Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Stay Informed
              </h4>
              <p className="text-gray-300 text-sm">
                Users should thoroughly understand Ergo's storage rent mechanism and ensure they possess enough ERGs to protect their valuable assets.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Maintain Balance
              </h4>
              <p className="text-gray-300 text-sm">
                Keep sufficient ERG balance in your UTXOs to cover potential storage rent fees and protect your valuable tokens and NFTs.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Spending Tab */}
      <TabsContent value="spending">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            How to Spend an Expired Ergo Box
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Spending an expired Ergo box involves satisfying specific conditions that differ from spending a regular box. The following criteria must be met:
          </p>
        </div>

        {/* Conditions Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-orange-400" /> Conditions for Spending an Expired Box
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Storage Fee Duration
              </h4>
              <p className="text-gray-300 text-sm">
                The box must have been retained for at least the designated storage fee period. This is validated by calculating the difference between the height of the upcoming block, as indicated in the preheader, and the creation height of the box.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <KeyRound className="w-4 h-4" /> Spending Proof
              </h4>
              <p className="text-gray-300 text-sm">
                For an expired box, the spending proof must be left empty, eliminating the need for cryptographic authorization for the box's spending.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Database className="w-4 h-4" /> Storage Rent Awareness
              </h4>
              <p className="text-gray-300 text-sm">
                If the expired box is affected by storage rent, it must be processed through the appropriate storage rent mechanism.
              </p>
            </div>
          </div>
        </div>

        {/* Code Snippet Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-400" /> Code Snippet for Verifying Storage Fee Duration
          </h2>
          <p className="text-gray-300 mb-4">
            The following line of code checks whether the box has been stored for the required minimum duration, comparing the height of the upcoming block (context.preHeader.height) with the box's creation height (context.self.creationHeight):
          </p>
          <div className="bg-neutral-800 rounded-lg p-4">
            <p className="text-orange-300 font-mono text-sm">
              context.preHeader.height - context.self.creationHeight &gt;= Constants.StoragePeriod
            </p>
          </div>
          <p className="text-gray-300 mt-2 text-sm">
            <span className="font-semibold">Reference:</span> ErgoInterpreter.scala, line 73
          </p>
        </div>

        {/* Spending Proof Section */}
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <KeyRound className="w-6 h-6 text-cyan-400" /> Spending Proof for Expired Boxes
          </h2>
          <p className="text-gray-300 mb-4">
            The term "spending proof" typically refers to a cryptographic authorization required for spending a box. However, in the context of an expired box, this requirement is waived. The spending proof for the expired box must be empty, meaning that no cryptographic validation is needed to authorize its spending.
          </p>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2">Key Difference</h4>
            <p className="text-gray-300 text-sm">
              This allows any participant to spend the expired box without needing to prove ownership, as long as the storage fee duration condition is fulfilled.
            </p>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-green-400" /> Additional Details for Spending an Expired Box
          </h2>
          <p className="text-gray-300 mb-4">
            If both the above conditions are met, the expired box can be spent by anyone. To do so, one needs to provide an index of a newly recreated box (or an index of any box, if the expired box lacks sufficient funds for the storage fee) in the context extension variable #127, which will be stored as part of the input.
          </p>
        </div>

        {/* Storage Rent-Specific Handling Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-orange-400" /> Storage Rent-Specific Handling
          </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Custom Block Candidate Endpoint
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Miningcore introduces support for querying custom block candidates that include expired boxes.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This is done via a configurable SrUrl, which must point to an external service exposing a /blocks/query endpoint.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This service is not part of the official Ergo node and must be implemented separately.
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Network className="w-4 h-4" /> Integration with Mining Pools
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Mining pools using this fork of Miningcore can use MiningRequestSRBlockCandidateAsync() to fetch candidate blocks.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This enables pools to mine transactions that reclaim storage rent from old, unspent boxes.
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Code className="w-4 h-4" /> Implementation in ErgoClient
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  The ErgoClient class was updated to accept a separate SrUrl base address.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This method builds a request to GET {"{SrUrl}"}/blocks/query, expecting a response in the same format as a regular Ergo mining candidate.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  The actual service must be custom-built to return valid WorkMessage objects with expired box logic included.
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Spending an Expired Box Affected by Storage Rent
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  If an expired box lacks sufficient ERG to cover the required storage rent fee, the transaction must reference an additional input box.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This box must provide enough value to pay the rent or satisfy pool policy for transaction acceptance.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  This mechanism ensures that outdated UTXOs do not remain in the state indefinitely and that rent is either paid or reclaimed.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center">Summary</h3>
          <p className="text-gray-300 text-center">
            With these changes, expired Ergo boxes can be properly mined and spent under storage rent conditions. While the Ergo node enforces storage rent rules during validation, external tooling (like custom candidate services) must be developed to support their inclusion in mining workflows.
          </p>
        </div>
      </TabsContent>

      {/* State Growth Tab */}
      <TabsContent value="state-growth">
        {/* Hero Section with Image */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Understanding Cryptocurrency Fees: A Multi-Dimensional Approach
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            This article builds upon the research presented in the paper <span className="font-semibold text-orange-300">A Systematic Approach To Cryptocurrency Fees</span>. Authored by Alex (Kushti) Chepurnoy, Vasily Kharin, and Dmitry Meshkov, the paper delves into the complexities surrounding blockchain storage and suggests a multi-dimensional fee structure as a solution.
          </p>
        </div>

        {/* 3D Fee Model Image Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8 flex flex-col items-center">
          <Image src="/docs/introduction/storage-rent/fee-3d.png" alt="3D Fee Model: Space, Time, Computation" width={800} height={600} sizes="(max-width: 768px) 100vw, 800px" className="max-w-lg w-full rounded-xl border border-neutral-700 shadow-lg mb-2 h-auto" />
          <span className="text-sm text-gray-400 italic">A 3-dimensional scale for cryptocurrency fees: space (storage), computation, and network load.</span>
        </div>

        {/* The Double-Edged Sword of Blockchain Storage */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-400" /> The Double-Edged Sword of Blockchain Storage
          </h2>
          <p className="text-gray-300 mb-4">
            Blockchain technology is remarkable for its capabilities of ensuring security, transparency, and an immutable transaction history. However, this very feature of permanence leads to ever-expanding blockchain states, raising a series of concerns:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Risk of Centralization:</span> As the state grows, fewer entities can effectively store it, escalating the centralization threat.</li>
            <li><span className="font-semibold text-orange-300">Spam Attack Vulnerability:</span> A bloated state is an inviting target for spam and denial-of-service attacks.</li>
            <li><span className="font-semibold text-orange-300">Resource Drain:</span> Larger states require more computational power, leading to increased operational costs.</li>
            <li><span className="font-semibold text-orange-300">Deflationary Pressures:</span> Lost or dormant coins risk deflating the currency's value, undermining its utility.</li>
          </ul>
        </div>

        {/* 3D Fee Model Explanation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" /> A 3-Dimensional Scale for Fees
          </h2>
          <p className="text-gray-300 mb-4">
            The image above introduces a 3-dimensional scale to assess cryptocurrency fees based on three crucial factors: <span className="font-semibold text-orange-300">space (storage load)</span>, <span className="font-semibold text-cyan-300">duration (time)</span>, and <span className="font-semibold text-green-300">computational load</span>. This visualization aids in understanding how a multi-faceted fee system could mitigate the inherent challenges tied to blockchain storage and resource utilization.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-400" /> Case Studies: Bitcoin and Ethereum
          </h2>
          <p className="text-gray-300 mb-4">
            To illustrate these concerns, consider the spam attack on Bitcoin in July 2015 that led to 15 million new outputs, bloating the total UTXO size significantly. Ethereum faced a similar fate with an attack that added 18 million new accounts to its state, causing resource-intensive denial-of-service attacks on nodes.
          </p>
        </div>

        {/* Multi-Faceted Solution Section */}
        <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> A Multi-Faceted Solution: Storage Rent
          </h2>
          <p className="text-gray-300 mb-4">
            The paper suggests the concept of <span className="font-semibold text-orange-300">"storage rent"</span> as a remedy. This involves a recurring fee on each Unspent Transaction Output (UTXO) aimed at deterring indefinite data storage. By implementing this mechanism, blockchain systems could become more efficient, secure, and sustainable, aligning with earlier ideas such as the 2014 Freicoin proposal for currency demurrage.
          </p>
        </div>

        {/* Highlights and Contributions Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" /> Highlights and Contributions of the Paper
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Dimensional Fee Complexity:</span> The paper breaks new ground by considering fees in three dimensions—space, time, and computation—rather than as a monolithic entity.</li>
            <li><span className="font-semibold text-orange-300">Unsustainability of Unchecked Growth:</span> State growth, if left unchecked, risks centralization and compromised security through reliance on Simplified Payment Verification (SPV) mining.</li>
            <li><span className="font-semibold text-orange-300">Innovative Fee Algorithms:</span> The paper introduces fresh algorithms for fee differentiation and pricing curves for storage, aiming for a more predictable and economical fee structure.</li>
            <li><span className="font-semibold text-orange-300">Strategic State Management:</span> The paper advocates for the introduction of a fee component specifically tailored to regulate state size effectively.</li>
            <li><span className="font-semibold text-orange-300">Unintended Ripple Effects:</span> The research also touches on the secondary impacts of storage fees, such as the reactivation of lost or dormant coins.</li>
          </ul>
        </div>

        {/* Miner Costs and Ecosystem Sustainability Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-orange-400" /> Miner Costs and Ecosystem Sustainability
          </h2>
          <p className="text-gray-300 mb-4">
            In a Proof-of-Work blockchain system, miners play a pivotal role, safeguarding the network's integrity at the cost of electricity and computational resources. To sustain this ecosystem, miners are compensated through block rewards and transaction fees.
          </p>
          <p className="text-gray-300 mb-4">
            In platforms like Ethereum that support smart contracts, transactions may involve substantial computational overhead, necessitating a multi-dimensional fee structure that accounts for:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
            <li><span className="font-semibold text-orange-300">Storage Load:</span> Represents the costs associated with preserving historical blockchain data.</li>
            <li><span className="font-semibold text-orange-300">Computational Load:</span> Entails the computational resources expended in executing smart contracts.</li>
            <li><span className="font-semibold text-orange-300">Network Load:</span> Includes the bandwidth and processing capacity needed to accommodate new, yet-to-be-blocked transactions.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            For instance, in the Ergo blockchain, the paper recommends introducing a <span className="font-semibold text-orange-300">"state deterioration fee"</span>. This would incentivize miners to streamline system performance by effectively managing the state size, including all UTXOs, smart contracts, and transactional data.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 