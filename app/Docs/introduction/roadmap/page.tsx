"use client";

import React, { useState } from "react";
import { Flag, TrendingUp, Layers, Users, BookOpen, Link2, ExternalLink, ListChecks, Calendar, Star, Wrench, Shield, Coins, Swords, Network, Book, Zap, Trophy, MessageSquare, Target, BarChart3, Cpu, GitBranch, Lock, ArrowRight, CheckCircle, Database, AlertTriangle } from "lucide-react";
import Link from "next/link";

const TABS = [
  { key: "roadmap", label: "Roadmap" },
  { key: "scaling", label: "Scaling" },
  { key: "layer0", label: "Layer 0" },
  { key: "layer1", label: "Layer 1" },
  { key: "layer2", label: "Layer 2" },
  { key: "discussions", label: "Discussions" },
  { key: "atomic", label: "Atomic Composability" },
  { key: "txspeed", label: "Transaction Speed" },
  // Остальные табы добавятся позже
];

function ScalingContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Scaling Ergo
          </h1>
        <p className="text-xl text-gray-400 mb-6">
            Creating a scalable blockchain infrastructure is a complex task. Ergo, fortified by a decade of research, rigorous testing, and ongoing development, has risen to the challenge. This guide will walk you through Ergo's sophisticated scalability features.
          </p>
        </div>

      {/* Factors & Approach Grid (compact, clear) */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Key Factors */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-400" /> Key Factors
          </h3>
          <div className="flex items-start gap-3">
            <Coins className="w-6 h-6 text-orange-400 mt-1" />
            <div>
              <div className="font-bold text-orange-300">Cryptoeconomic incentive model</div>
              <div className="text-gray-300 text-sm">Ensures miners receive suitable rewards for the various costs associated with scaling a blockchain.</div>
      </div>
      </div>
          <div className="flex items-start gap-3">
            <Cpu className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <div className="font-bold text-cyan-300">Consensus model</div>
              <div className="text-gray-300 text-sm">Determines the feasibility of certain scalability solutions. E.g., PoS does not support NiPoPoWs.</div>
      </div>
          </div>
          <div className="flex items-start gap-3">
            <Book className="w-6 h-6 text-orange-400 mt-1" />
            <div>
              <div className="font-bold text-orange-300">Accounting model</div>
              <div className="text-gray-300 text-sm">Manages transactions and operations. Bitcoin uses UTXO, Ethereum uses Account Model.</div>
          </div>
          </div>
        </div>
        {/* Ergo's Approach */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" /> Ergo's Approach
          </h3>
          <div className="text-gray-300 text-base">
            Ergo's eUTXO model sets it apart by creating transactions off-chain and validating them on-chain, reducing node load and boosting scalability.
      </div>
          <ul className="space-y-2 text-gray-400 text-sm mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Off-chain transaction creation</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> On-chain validation</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduced operational load</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Light-verifying nodes for scalability</li>
          </ul>
        </div>
      </div>

      {/* Three Layers Block */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-orange-400" /> The Three Layers of Ergo Scalability
        </h2>
        <ul className="space-y-4 text-gray-300 text-base">
          <li className="flex items-start gap-3"><Network className="w-5 h-5 text-cyan-400 mt-1" /><span><b>Layer 0: The Network or Peer-to-Peer Layer</b> — The foundation of the blockchain, responsible for peer-to-peer communication and data propagation across the network.</span></li>
          <li className="flex items-start gap-3"><Layers className="w-5 h-5 text-orange-400 mt-1" /><span><b>Layer 1: The Core Blockchain Layer</b> — Handles the core consensus, transaction validation, and state management. Ergo's eUTXO model enables efficient and secure on-chain operations.</span></li>
          <li className="flex items-start gap-3"><Zap className="w-5 h-5 text-cyan-400 mt-1" /><span><b>Layer 2: The Off-chain Layer</b> — Supports off-chain protocols and solutions, such as sidechains and payment channels, to further enhance scalability and flexibility for developers and users.</span></li>
        </ul>
      </div>

      {/* Conclusion Block */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-400" /> Conclusion
        </h2>
        <p className="text-gray-300 mb-2">These layers work in harmony to enhance Ergo's scalability, making it a flexible and potent choice for both developers and users. This collaborative model enables Ergo to provide robust, scalable solutions that are prepared to meet the challenges of global expansion.</p>
      </div>
    </div>
  );
}

function Layer0Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 0: The Network Layer
          </h1>
        <p className="text-xl text-gray-400 mb-6">
            Layer 0, also known as the Network or Peer-to-Peer (P2P) layer, forms the bedrock of decentralized communication within a blockchain network. It plays a pivotal role in facilitating the exchange of data and information across the network, allowing nodes to distribute and validate transactions, blocks, and other data types without the need for a centralized authority.
          </p>
      </div>

      {/* Client Types — первая большая карточка */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12 flex flex-col gap-6">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" /> Client Types
        </h3>
        <div className="flex items-start gap-3">
          <Database className="w-6 h-6 text-orange-400 mt-1" />
          <div>
            <div className="font-bold text-orange-300">Full 'Archive' Node</div>
            <div className="text-gray-300 text-sm">Stores all blocks from genesis, checks PoW, maintains full UTXO set. Highest security, high storage needs.</div>
      </div>
      </div>
        <div className="flex items-start gap-3">
          <Cpu className="w-6 h-6 text-cyan-400 mt-1" />
          <div>
            <div className="font-bold text-cyan-300">Pruned-Fullnode</div>
            <div className="text-gray-300 text-sm">Downloads all headers, validates PoW, prunes unnecessary data after UTXO snapshot. Improves storage efficiency.</div>
      </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-orange-400 mt-1" />
          <div>
            <div className="font-bold text-orange-300">Light-Fullnode</div>
            <div className="text-gray-300 text-sm">Holds only root digest, checks full blocks or suffix. Balance between security and efficiency.</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="w-6 h-6 text-cyan-400 mt-1" />
          <div>
            <div className="font-bold text-cyan-300">Light-SPV</div>
            <div className="text-gray-300 text-sm">Verifies transactions with a small sample of block headers. Highly scalable for limited devices.</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <TrendingUp className="w-6 h-6 text-orange-400 mt-1" />
          <div>
            <div className="font-bold text-orange-300">Logarithmic space mining</div>
            <div className="text-gray-300 text-sm">Light miners bootstrap using block headers without downloading the entire blockchain. Can be integrated via velvet (soft) fork.</div>
          </div>
        </div>
      </div>

      {/* Subblocks + State Bloat Management — одна большая карточка, две секции горизонтально */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Subblocks */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" /> Subblocks
            </h3>
            <div className="font-bold text-orange-300">Fast confirmations & PoW optimization</div>
            <div className="text-gray-300 text-sm">Block candidates with lower PoW difficulty, enable faster confirmations and optimized bandwidth. Quicker, weakly confirmed transactions.</div>
          </div>
          {/* State Bloat Management */}
          <div className="flex flex-col gap-2 md:border-l md:border-neutral-700 md:pl-6">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Book className="w-5 h-5 text-cyan-400" /> State Bloat Management
            </h3>
            <div className="font-bold text-cyan-300">Persistent updatable storage</div>
            <div className="text-gray-300 text-sm">Only digest in UTXO set, storage rent fee deters spam and recycles unused data bytes.</div>
          </div>
        </div>
      </div>

      {/* Miner-Adjustable Parameters & User Experience Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Miner-Adjustable Parameters */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-orange-400" /> Miner-Adjustable Parameters
          </h3>
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-orange-400 mt-1" />
            <div>
              <div className="font-bold text-orange-300">Block size</div>
              <div className="text-gray-300 text-sm">Miners can adjust based on validation time and hardware/software advances. Current: 8MB.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Cpu className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <div className="font-bold text-cyan-300">Transaction size</div>
              <div className="text-gray-300 text-sm">Mempool transaction size limit is 96kb (as of node 4.0.23). Larger transactions can be included manually by miners.</div>
            </div>
          </div>
        </div>
        {/* Enhanced User Experience */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" /> Enhanced User Experience
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Rapid onchain confirmations (~2s via sub-blocks)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Faster failure detection (~2s vs. up to 6 min before)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cooperative mempool for better responsiveness</li>
        </ul>
        </div>
      </div>

      {/* Technical Details & Security Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Technical Details */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-400" /> Technical Details
          </h3>
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-orange-400 mt-1" />
            <div>
              <div className="font-bold text-orange-300">Ordering Blocks</div>
              <div className="text-gray-300 text-sm">Full PoW blocks, produced every ~2 min, anchor consensus and distribute rewards.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <div className="font-bold text-cyan-300">Input Blocks (Sub-blocks)</div>
              <div className="text-gray-300 text-sm">Low-difficulty blocks, ~1/sec, for fast transaction propagation.</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-yellow-400 mt-1" />
            <div>
              <div className="font-bold text-yellow-400">Superblocks</div>
              <div className="text-gray-300 text-sm">Enable efficient long-range proofs and light client support via NiPoPoWs.</div>
            </div>
          </div>
        </div>
        {/* Security Considerations */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-6">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" /> Security Considerations
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Ordering blocks must validate preceding input blocks</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Dual confirmation: input blocks (fast), ordering blocks (finality)</li>
        </ul>
        </div>
      </div>

      {/* TL;DR Block */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> TL;DR
        </h2>
        <ul className="space-y-2 text-gray-400 text-base mt-2">
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Input blocks provide rapid, low-cost transaction propagation (~1s)</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Ordering blocks retain finality and economic incentives</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Superblocks support long-range verification</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Architecture balances performance, security, and decentralization</li>
        </ul>
      </div>
      </div>
  );
}

function Layer1Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 1: On-chain Scalability in Ergo
          </h1>
        <p className="text-xl text-gray-400 mb-6">
            Layer 1, the foundational protocol layer of a blockchain system, is responsible for core functions such as transaction processing, consensus mechanisms, and security protocols. Ergo's Layer 1 is designed with a focus on scalability, incorporating features that boost transaction processing capacity and overall throughput.
          </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Extended UTXO Model (EUTXO)
          </h3>
          <p className="text-gray-300 mb-4">
            Ergo's eUTXO model enables Turing-complete smart contracts, parallel transaction processing, and higher throughput compared to account-based models.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Turing Complete smart contracts</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Parallel transaction processing</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Higher throughput</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Efficient state management</li>
        </ul>
      </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-orange-400" /> Protocol Optimizations
          </h3>
          <p className="text-gray-300 mb-4">
            Regular protocol updates and optimizations improve performance, transaction ordering, and mempool tracking.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Removal of unused complexity</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced code readability</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Refined transaction ordering</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Regular node updates</li>
        </ul>
      </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" /> Mainnet 5.0 and Beyond
          </h3>
          <p className="text-gray-300 mb-4">
            Just-in-Time Costing and miner parameter adjustments enable 5-10x block capacity, improved efficiency, and optimized mining.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 5-10x block capacity</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved transaction processing</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Efficient resource utilization</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced mining efficiency</li>
        </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-400" /> Future Scalability Enhancements
          </h3>
          <p className="text-gray-300 mb-4">
            Microblocks, sharding, and sub-block confirmation protocols will further increase throughput and enable new features.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Microblocks & block extension</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Sub-block confirmation</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Sharding</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Service chains</li>
        </ul>
        </div>
      </div>

      {/* Community-Driven Development Block */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-400" /> Community-Driven Development
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-400" /> Ergo Improvement Proposals (EIPs)
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Community-driven proposals</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Focused scalability improvements</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Systematic implementation</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Regular protocol updates</li>
        </ul>
      </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Research & Development
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Advanced sharding techniques</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Novel consensus mechanisms</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved transaction ordering</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced mempool management</li>
        </ul>
      </div>
        </div>
        <div className="mt-6">
          <a href="https://eprint.iacr.org/2020/1176.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 hover:text-orange-300 underline">
            Flux: Revisiting Near Blocks for Proof-of-Work Blockchains <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Layer2Content() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Layer 2: Off-Chain
          </h1>
        <p className="text-xl text-gray-400 mb-6">
            Layer 2 solutions are secondary frameworks or protocols constructed on top of a Layer 1 blockchain protocol. Their purpose is to enhance the efficiency, scalability, and capabilities of the underlying blockchain by facilitating off-chain transactions or computations.
          </p>
        <p className="text-gray-300 mb-4">
          Ergo is compatible with a broad range of Layer 2 solutions derived from other UTXO blockchains. The platform can implement various off-chain solutions like Hydra and sidechains, which help alleviate blockchain congestion and offer benefits akin to ZK-rollups.
        </p>
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-4">
          <p className="text-orange-300 font-semibold">💬 Join the Layer 2 discussion on <a href="#" className="underline">Telegram</a> or <a href="#" className="underline">Discord</a>.</p>
        </div>
      </div>

      {/* ErgoScript Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> ErgoScript: Powering Layer 2 Transactions
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4">
            ErgoScript's flexible design allows large parts of transactions to be executed on Layer 2, which are then settled on the Ergo blockchain in a single transaction. For instance, a developer successfully used the eUTXO model to airdrop native tokens to 10,000 addresses simultaneously.
          </p>
          <p className="text-gray-300 mb-4">
            ErgoScript features several advancements like time-weighted data, Turing completeness, read-only data inputs, multi-stage contracts, sigma protocols, NIPoPoWs, and more. These enhancements enable a variety of Layer 2 protocols, each addressing scalability issues in their unique way.
          </p>
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4">
            <p className="text-cyan-300 font-semibold">⚡ Ergo serves as a settlement layer for multiple Layer 2 protocols and applications.</p>
          </div>
        </div>
      </div>

      {/* Current Layer 2 Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Current Layer 2 Projects and Developments</h2>
        
        {/* Layer 2 Solutions Leveraging Sub-Blocks */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-orange-400" /> Layer 2 Solutions Leveraging Sub-Blocks
          </h3>
          <p className="text-gray-300 mb-4">
            While sub-blocks are a Layer 1 protocol enhancement, they enable several Layer 2 scaling solutions:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-300 mb-2">Benefits</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Faster confirmation times for Layer 2 protocols</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced support for payment channels</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> More efficient state channel operations</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved settlement layer for off-chain transactions</li>
        </ul>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-300 mb-2">Capabilities</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Group off-chain transactions more efficiently</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reduce settlement times</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Increase throughput for Layer 2 applications</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enable more responsive user experiences</li>
              </ul>
            </div>
          </div>
      </div>

        {/* Grid of major solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* SigmaChains and Sidechains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">SigmaChains and Sidechains</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              SigmaChains leverage Ergo's Sigma contracts to create versatile sidechains that can operate as either merge-mined sidechains or standalone blockchains.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced scalability and privacy features</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Experimental platform for new features</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Various chain commitment options</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Comprehensive technical documentation</li>
        </ul>
      </div>

      {/* ChainCash */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">ChainCash</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              A decentralized, peer-to-peer monetary system using Layer 2 derivative signature chains.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Elastic money creation capabilities</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Digital notes representing various values</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Support for digital tokens and real-world assets</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Top-up transactions and blockchain scanning</li>
        </ul>
      </div>

          {/* Plasma */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Plasma</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Ergo inherently supports AVL trees, an efficient authenticated data structure that allows for proving different properties of the data without accessing the entire dataset.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Data compression</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Contract simplification</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Plasma staking contracts</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Off-chain operation management</li>
        </ul>
      </div>

          {/* NIPoPoWs */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">NIPoPoWs</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              NiPoPoWs enhance blockchain interoperability and scalability through enhanced security and cross-chain communications.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cross-chain verification</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Security for small chains</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Sidechains & state channels</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Asset transfers</li>
        </ul>
          </div>
        </div>
      </div>

      {/* Emerging Layer 2 Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Emerging Layer 2 Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Lightning Network */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Lightning Network</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Creates payment channels through multi-signature wallets, enabling off-chain transactions between participants.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multi-signature wallets</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Off-chain transactions</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Payment channels</li>
        </ul>
          </div>

          {/* Rainbow Network */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Rainbow Network</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              A non-custodial exchange and payment network supporting multiple assets through price oracles.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Off-chain trading</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Borrowing and lending</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multiple assets support</li>
        </ul>
      </div>

          {/* Rollups */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Rollups</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Two primary types of rollups are being explored for Ergo.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Optimistic Rollups with fraud-proof principles</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> ZK-Rollups using zkSNARKs</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Bundle hundreds of transfers off-chain</li>
        </ul>
          </div>

          {/* Additional Solutions */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Additional Solutions</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Various other Layer 2 solutions being developed for Ergo.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Hydra: isomorphic state channels</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Zero-Knowledge Contingent Payments</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> FairSwap/FastSwap protocols</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Coinpools for transaction grouping</li>
        </ul>
          </div>
        </div>
      </div>

      {/* Development Considerations */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Development Considerations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Security and Consensus */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Security and Consensus</span>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Careful evaluation of security implications</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Selection of appropriate consensus mechanisms</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Implementation of robust fraud prevention</li>
        </ul>
          </div>

          {/* User Experience */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">User Experience</span>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Development of mempool chaining</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Seamless Layer 1 and Layer 2 integration</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Optimization of transaction processing</li>
        </ul>
          </div>
        </div>
      </div>

      {/* Research and Development */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Research and Development</h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">Ongoing research continues to explore:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Advanced sharding techniques</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Novel consensus mechanisms</li>
            </ul>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved transaction ordering</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced mempool management</li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
}

function DiscussionsContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Scaling Roadmap Discussions
          </h1>
        <p className="text-xl text-gray-400 mb-6">
            Join our discussions on scaling on Telegram or #layer2 on Discord. We welcome all insights and contributions.
          </p>
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-4">
          <p className="text-orange-300 font-semibold">💬 Join the Layer 2 discussion on <a href="#" className="underline">Telegram</a> or <a href="#" className="underline">Discord</a>.</p>
        </div>
      </div>

      {/* Current Focus Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-cyan-400" /> Current Focus
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            With the successful integration of UTXO set snapshots and Non-Interactive Proofs of Proof-of-Work (NiPoPoWs) for ultra-fast bootstrapping in the pruned full node, our focus has now shifted towards optimizing this implementation. We are also exploring ways to further increase block limits for miners, given the live status of the pruned full node.
          </p>
        </div>
      </div>

      {/* Recent Developments */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-orange-400" /> Recent Developments
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">In Progress</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-yellow-400" /> Planning for Node V6 & scalability improvements</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-yellow-400" /> Development of SPV Client</li>
        </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-orange-300">Completed</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Pruned Full Node is now live</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Release of Node V5</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> GetBlok released the Plasma Library</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Plasma Tutorials have been published</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ergo Design and Implementation Roadmap */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Flag className="w-6 h-6 text-cyan-400" /> Ergo Design and Implementation Roadmap
        </h2>
        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold text-orange-300">Phase 1: Foundations</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5" /> Start with the basic design of Ergo as digital gold (commodity money)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5" /> Introduce programmability features including:
                <ul className="ml-6 mt-1 space-y-1">
                  <li>• Crypto contracts</li>
                  <li>• Stealth addresses</li>
                  <li>• Arbitrarily complex signatures</li>
                  <li>• Mixing schemes</li>
                </ul>
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5" /> Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized central bank digital currency (CBDC) for the people</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold text-cyan-300">Phase 2: Initial Experiments</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Conduct initial experiments to test functionality and user engagement</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Evaluate the outcomes considering the initial motivations</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold text-orange-300">Phase 3: Defining Adoption</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Clarify the term "adoption" as it is often ambiguous in industry discussions</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Develop metrics or KPIs to measure adoption success</li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold text-cyan-300">Phase 4: Scaling and Optimization</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Peer-to-peer (P2P) level optimizations and rework</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Consider pre-block commitments to transaction ordering (sub-blocks)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Aim to increase transactions per second (TPS) while maintaining security</li>
            </ul>
          </div>

          {/* Constraints Block */}
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-cyan-400 rounded-l-xl" />
            <div className="bg-neutral-900/50 rounded-xl p-6 pl-8 shadow-md">
              <h4 className="font-semibold mb-2 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Constraints for Scaling</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-400 mt-0.5" /> Limitations include requirements for a flat P2P network running on commodity hardware</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-400 mt-0.5" /> No use of centralized or "bankster" data centers for scalability</li>
              </ul>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <h3 className="text-xl font-semibold text-orange-300">Phase 5: Offloading Solutions</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Propose options for offloading transactions to Layer 2 or sidechains, if not already implemented</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Introduce "Know Your Algorithm" KYA as a way to explain security in offloading options in a concise and understandable manner</li>
            </ul>
          </div>

          {/* Phase 6 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">6</div>
              <h3 className="text-xl font-semibold text-cyan-300">Phase 6: Convergence</h3>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Multiple developments in scaling, optimization, and offloading are expected to converge, culminating in a comprehensive solution for widespread adoption</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4">Summarised from Kushti, 7 Aug, 2023</p>
      </div>

      {/* Further Reading */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Further Reading
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Nov 22) A Scalability Plan for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Dec 21) Ergo protocol research and client development roadmap</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Sep 21) Long-term vision for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Jul 21) Network congestion on Jul 10th, 2021</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(May 20) Protecting mempool from computationally heavy transactions</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(May 20) A Scalability Plan for Ergo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AtomicComposabilityContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Atomic Composability in Blockchain Systems
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Why atomic composability is crucial for DeFi and scalable blockchains.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Introduction
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            In the context of blockchain technology and decentralized applications (dApps), <b>atomic composability</b> refers to the ability to combine and execute multiple operations or transactions as a single, indivisible unit. This means that either all components of a multi-step process are executed successfully, or none of them are executed at all. Atomic composability is crucial for ensuring the integrity and reliability of complex operations, particularly in the realm of Decentralized Finance (DeFi).
          </p>
        </div>
      </div>

      {/* The Significance of Atomic Composability in DeFi */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-orange-400" /> The Significance of Atomic Composability in DeFi
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The open-source nature of DeFi allows for the integration, modification, and reuse of dApps, enabling a high degree of composability within the ecosystem. However, certain DeFi applications, such as flash loans and instant arbitrage, require a specific form of composability known as atomic composability. These applications involve multiple interconnected transactions that must execute atomically, ensuring that all related transactions either complete successfully or are entirely rolled back.
          </p>
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4">
            <p className="text-orange-300 font-semibold">💡 Example: In a flash loan scenario, a user borrows funds from a lending pool, trades those funds on a DEX, and then repays the loan with a profit, all within a single transaction. If any part of this process fails, the entire transaction must be reversed to prevent the user from retaining the borrowed funds without repayment.</p>
          </div>
        </div>
      </div>

      {/* Balancing Scalability and Atomic Composability */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" /> Balancing Scalability and Atomic Composability
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            While blockchain technology aims to achieve scalability, it is equally important to maintain atomic composability at scale. Ergo addresses this challenge by optimizing the use of resources within existing blockchain platforms, rather than relying on unproven technologies. This approach ensures that atomic composability is preserved while enabling scalability.
          </p>
        </div>
      </div>

      {/* The Impact of Scaling Solutions on Atomic Composability */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-orange-400" /> The Impact of Scaling Solutions on Atomic Composability
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Scaling solutions often involve partitioning the blockchain platform into smaller sections, such as shards, or adding a new layer atop the base layer. However, if these solutions are not implemented correctly, they can disrupt the smooth interaction between assets and applications across different sections of the platform, potentially compromising atomic composability.
          </p>
        </div>
      </div>

      {/* The eUTXO Model and ErgoScript */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> The eUTXO Model and ErgoScript
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Ergo's <b>eUTXO model</b>, in conjunction with the ErgoScript smart contract language, allows for the atomic execution of complex, multi-stage transactions within a single transaction. This ensures that all components of a transaction are executed in full or not at all, a fundamental aspect of atomic composability. ErgoScript enables the creation and execution of complex smart contracts with predictable outcomes, while leveraging the benefits of the UTXO (Unspent Transaction Output) model, such as statelessness, improved parallelism, and reliable data handling.
          </p>
        </div>
      </div>

      {/* Layer 2 Solutions: Hydra State Channels */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Network className="w-6 h-6 text-orange-400" /> Layer 2 Solutions: Hydra State Channels
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Layer 2 solutions, such as <b>Hydra state channels</b>, contribute to atomic composability by facilitating communication across different heads (participants). This allows for the atomic execution of complex operations involving multiple state channel participants. This mechanism enables complex transactions to be executed off-chain, with the final state being settled on the main chain.
          </p>
        </div>
          </div>

      {/* ACE: Enhancing the Execution of Complex Smart Contracts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> ACE: Enhancing the Execution of Complex Smart Contracts
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Ergo's ability to execute complex and composable smart contracts could be further enhanced by implementing concepts like <b>ACE (Asynchronous Contract Execution)</b>. ACE suggests decomposing smart contracts into smaller, concurrent tasks that can be executed independently, thereby improving overall performance and throughput. It allows one contract to safely invoke another contract executed by a different set of service providers, facilitating off-chain execution of interactive smart contracts with flexible trust assumptions and enhancing atomic composability.
          </p>
        </div>
          </div>

      {/* Sharding and Its Impact on Atomic Composability */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-orange-400" /> Sharding and Its Impact on Atomic Composability
        </h2>
        
        {/* An Overview of Sharding */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Book className="w-5 h-5 text-cyan-400" /> An Overview of Sharding
          </h3>
          <p className="text-gray-300 mb-4">
            Sharding is a technique that divides a blockchain network into smaller sections, or shards, to enhance scalability. Each shard processes a subset of transactions independently. However, maintaining atomic composability, where all components of a multi-step transaction are executed in full or not at all, can be challenging in a sharded environment. This means that if any part of a transaction fails to execute atomically across all shards, it could lead to inconsistencies, such as assets being locked or lost, or operations being partially executed.
          </p>
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4">
            <p className="text-cyan-300 font-semibold">💡 Example: Consider a scenario where a user wants to execute a transaction that involves assets and operations spanning multiple shards. If the transaction fails to execute atomically across all shards, it could lead to inconsistencies, such as assets being locked or lost, or operations being partially executed.</p>
          </div>
          </div>

        {/* Strategies for Preserving Atomic Composability in Sharding */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-400" /> Strategies for Preserving Atomic Composability in Sharding
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cross-shard Transactions */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-cyan-300 text-lg">Cross-shard Transactions</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Establish a mechanism for secure and efficient communication between shards to enable cross-shard transactions. This mechanism ensures that all components of a multi-step transaction are either fully committed or rolled back, even when the transaction spans multiple shards.
              </div>
          </div>

            {/* Locking Mechanisms */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-orange-300 text-lg">Locking Mechanisms</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Introduce locking mechanisms to prevent double-spending and fraud during cross-shard transactions. Temporarily locking the assets involved until the transaction is complete can help preserve atomic composability.
              </div>
          </div>

            {/* Two-phase Commit Protocols */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-cyan-300 text-lg">Two-phase Commit Protocols</span>
          </div>
              <div className="text-gray-300 text-sm mb-2">
                Employ two-phase commit protocols to coordinate cross-shard transactions. In the first phase, shards tentatively execute the transaction and lock the relevant assets. In the second phase, once all shards have confirmed the transaction, it is committed, and the locked assets are released.
        </div>
      </div>

            {/* Optimistic Execution */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-orange-300 text-lg">Optimistic Execution</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Allow shards to optimistically execute transactions, assuming dependencies between shards are resolved. If conflicts arise later, the transaction can be rolled back, and the network can learn from the conflict to prevent similar issues in the future.
              </div>
            </div>

            {/* State Channels or Sidechains */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-cyan-300 text-lg">State Channels or Sidechains</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Use state channels or sidechains to process transactions off-chain, settling the final state back on the main chain. These off-chain solutions enable complex, multi-step transactions without directly involving multiple shards, thus preserving atomic composability.
              </div>
            </div>
          </div>
          </div>

        {/* Challenges and Limitations */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" /> Challenges and Limitations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Increased Complexity */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-cyan-300 text-lg">Increased Complexity</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Implementing mechanisms for cross-shard communication, locking, and two-phase commit protocols can add significant complexity to the system, potentially introducing new attack vectors or vulnerabilities.
              </div>
          </div>

            {/* Performance Overhead */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-orange-300 text-lg">Performance Overhead</span>
          </div>
              <div className="text-gray-300 text-sm mb-2">
                Maintaining atomic composability across shards may introduce performance overhead, such as increased latency or decreased throughput, which could potentially negate some of the scalability benefits of sharding.
        </div>
      </div>

            {/* Trust Assumptions */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-cyan-400" />
                <span className="font-bold text-cyan-300 text-lg">Trust Assumptions</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Some solutions, like optimistic execution or off-chain processing, may require additional trust assumptions or introduce new trust models, which could be challenging to implement and maintain in a decentralized environment.
              </div>
            </div>

            {/* Adoption and Standardization */}
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="font-bold text-orange-300 text-lg">Adoption and Standardization</span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                Achieving widespread adoption and standardization of atomic composability solutions across different blockchain networks and dApps may be difficult, potentially leading to fragmentation or compatibility issues.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Developments and Research Directions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-cyan-400" /> Future Developments and Research Directions
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved Cross-Shard Communication Protocols</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Hybrid Approaches</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Formal Verification and Testing</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Decentralized Governance Models</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Integration with Advanced Smart Contract Languages</li>
        </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-orange-400" /> Conclusion
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Atomic composability is a crucial aspect of blockchain technology and decentralized applications, ensuring the integrity and reliability of complex multi-step operations. While scaling solutions like sharding introduce challenges in maintaining atomic composability, various strategies and approaches can be employed to address these challenges. As the blockchain ecosystem continues to evolve, ongoing research and development efforts will be essential to strike the right balance between scalability and atomic composability, enabling the creation of robust and reliable decentralized applications.
          </p>
        </div>
      </div>

      {/* Further Reading */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Further Reading
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Nov 22) A Scalability Plan for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Dec 21) Ergo protocol research and client development roadmap</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Sep 21) Long-term vision for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Jul 21) Network congestion on Jul 10th, 2021</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(May 20) Protecting mempool from computationally heavy transactions</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(May 20) A Scalability Plan for Ergo</a>
            </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

function TransactionSpeedContent() {
  return (
    <div className="prose prose-invert max-w-none">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Transaction Speed & TPS in Blockchains
          </h1>
        <p className="text-xl text-gray-400 mb-6">
          How fast can blockchains process transactions? What really matters for scalability?
        </p>
      </div>

      {/* What is TPS? */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" /> What is TPS?
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The speed of transactions, commonly known as <b>Transactions Per Second (TPS)</b>, is a vital performance metric for blockchains. It quantifies the capacity of a blockchain to process transactions, expressed in transactions per second.
          </p>
        </div>
      </div>

      {/* Network Bottlenecks and Consensus */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Network className="w-6 h-6 text-orange-400" /> Network Bottlenecks and Consensus
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The primary bottleneck for increasing TPS is the <b>peer-to-peer (p2p) network layer</b>. Proof-of-Work (PoW) is already an efficient timestamping protocol for the base layer (Layer 0) because it operates asynchronously, without the need for additional network messages. Many alternative consensus mechanisms require extra bandwidth, making them less efficient. For instance, the original Ouroboros consensus protocol generated large log files, although this was later improved in the Praos version using Verifiable Random Functions (VRF). However, relying on novel cryptographic primitives can be risky, especially when significant assets are involved.
          </p>
        </div>
      </div>

      {/* Decentralization vs. TPS */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-cyan-400" /> Decentralization vs. TPS
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            While TPS could be boosted by introducing measures like <b>supernodes</b> or eliminating <b>mempools</b>, as seen in projects like Solana and Avalanche, these approaches compromise the decentralization and integrity of the network. Therefore, if the goal is to maintain a truly decentralized cryptocurrency, these methods should be avoided.
          </p>
      </div>
      </div>

      {/* Viable Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" /> Viable Solutions
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            The remaining viable solution for improving TPS lies in <b>optimizing bandwidth usage</b> and implementing <b>Layer 2 solutions</b> and <b>sidechains</b>, also known as application-specific chains.
          </p>
      </div>
      </div>

      {/* Comparative TPS Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-orange-400" /> Comparative TPS Values for Renowned Blockchains
        </h2>
        <div className="mb-8">
          <p className="text-gray-300 mb-6">
            To provide a perspective, here are the estimated TPS values for some of the leading blockchains:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-base font-semibold text-gray-200">Platform</th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-200">TPS</th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-200">Source</th>
                </tr>
              </thead>
              <tbody className="text-base">
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-4 font-semibold text-gray-100">Bitcoin (BTC)</td>
                  <td className="px-4 py-4 font-semibold text-orange-400">7</td>
                  <td className="px-4 py-4 text-gray-500 text-sm">Gobbel, 2017</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-4 font-semibold text-gray-100">Ethereum (ETH)</td>
                  <td className="px-4 py-4 font-semibold text-orange-400">15</td>
                  <td className="px-4 py-4 text-gray-500 text-sm">Clincy et al., 2019</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-4 font-semibold text-gray-100">Ripple (XRP)</td>
                  <td className="px-4 py-4 font-semibold text-green-400">1500</td>
                  <td className="px-4 py-4 text-gray-500 text-sm">Clincy et al., 2019</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-4 font-semibold text-gray-100">Cardano (ADA)</td>
                  <td className="px-4 py-4 font-semibold text-orange-400">7 <span className="text-xs text-gray-500">(up to 250)</span></td>
                  <td className="px-4 py-4 text-gray-500 text-sm">Stamoulis, 2021</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-semibold text-gray-100">Polkadot (DOT)</td>
                  <td className="px-4 py-4 font-semibold text-green-400">1500</td>
                  <td className="px-4 py-4 text-gray-500 text-sm">Hiemstra et al., 2021</td>
                </tr>
              </tbody>
            </table>
            <div className="text-xs text-gray-600 mt-2 ml-1">*TPS — Transactions Per Second</div>
      </div>
          <div className="mt-6">
            <span className="text-orange-400 text-base font-medium flex items-center gap-2 mb-1"><span className="text-xl">💡</span> <span>However, the conventional TPS metric only offers a glimpse into Ergo's true potential.</span></span>
            <span className="text-gray-300 text-sm block mt-1">It's not merely about the number of transactions; <span className="font-semibold text-orange-300">the weight of the transaction</span> and <span className="font-semibold text-orange-300">the computational cost limit per block</span> are equally important. These aspects are shaped by several dynamic factors, including the size of the network and the hardware resources available to miners.</span>
        </div>
          </div>
          </div>

      {/* Ergo's TPS and Technical Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-orange-400" /> Ergo's TPS and Technical Details
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            With the Node v5 already operational, Ergo's raw TPS is approximately <b>47.5 transactions/second</b>, with room for further enhancements. For an in-depth technical understanding of how this figure is derived, please refer to this report.
          </p>
          </div>
          </div>

      {/* The Extended Unspent Transaction Output (eUTXO) Model Advantage */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-400" /> The Extended Unspent Transaction Output (eUTXO) Model Advantage
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Ergo's transaction management system leverages the <b>Extended Unspent Transaction Output (eUTXO) model</b>, which outperforms the traditional UTXO model in terms of efficiency and flexibility. This model allows for multiple outputs in a single transaction, each potentially carrying different tokens. Moreover, Ergo is capable of handling complex DeFi transactions, thereby enabling a broad spectrum of DeFi applications within the network. By processing multiple token types per transaction output and facilitating the simultaneous execution of complex transactions within a block, Ergo significantly boosts its blockchain's performance and scalability.
          </p>
          <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4">
            <p className="text-cyan-300 font-semibold">⚡ The primary objective in scaling Ergo is to enhance TPS without compromising the fundamental principles and assurances typically linked with blockchain technology.</p>
          </div>
        </div>
          </div>

      {/* Future Scalability Enhancements */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Star className="w-6 h-6 text-orange-400" /> Future Scalability Enhancements
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Microblocks & Block Extension */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Microblocks & Block Extension</span>
          </div>
            <div className="text-gray-300 text-sm mb-2">
              Enable faster transaction confirmations and improved throughput through microblocks that can be processed more quickly than full blocks.
          </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Faster confirmations</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved throughput</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Enhanced user experience</li>
            </ul>
          </div>

          {/* Sub-block Confirmation */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Sub-block Confirmation</span>
        </div>
            <div className="text-gray-300 text-sm mb-2">
              Implement sub-block confirmation protocols to provide faster transaction finality and improved network responsiveness.
      </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Faster finality</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Improved responsiveness</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Better user experience</li>
        </ul>
      </div>

          {/* Sharding */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Sharding</span>
      </div>
            <div className="text-gray-300 text-sm mb-2">
              Divide the blockchain into smaller sections to process transactions in parallel, significantly increasing overall throughput.
    </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Parallel processing</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Increased throughput</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Scalability improvements</li>
            </ul>
          </div>

          {/* Service Chains */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Service Chains</span>
        </div>
            <div className="text-gray-300 text-sm mb-2">
              Implement specialized chains for specific services and applications, enabling optimized performance for different use cases.
      </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Specialized processing</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Optimized performance</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Use case optimization</li>
            </ul>
      </div>
        </div>
      </div>

      {/* Key Factors Affecting TPS */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-cyan-400" /> Key Factors Affecting TPS
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Network Layer */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Network className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Network Layer</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              The peer-to-peer network layer is the primary bottleneck for increasing TPS, as it determines how quickly transactions can be propagated across the network.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> P2P propagation speed</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Network bandwidth</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Node connectivity</li>
            </ul>
      </div>

          {/* Consensus Mechanism */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Consensus Mechanism</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              The choice of consensus mechanism significantly impacts TPS, with some requiring additional network messages that reduce efficiency.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> PoW efficiency</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Message overhead</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cryptographic primitives</li>
            </ul>
      </div>

          {/* Block Size and Limits */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-6 h-6 text-orange-400" />
              <span className="font-bold text-orange-300 text-lg">Block Size and Limits</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Block size limits and computational cost limits per block determine how many transactions can be processed in each block.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Block size constraints</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Computational limits</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Transaction weight</li>
            </ul>
          </div>

          {/* Hardware Resources */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-cyan-300 text-lg">Hardware Resources</span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              The hardware resources available to miners and nodes affect the network's ability to process transactions efficiently.
            </div>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Mining hardware</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Node processing power</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Network infrastructure</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Further Reading */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Further Reading
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Nov 22) A Scalability Plan for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Dec 21) Ergo protocol research and client development roadmap</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(Sep 21) Long-term vision for Ergo</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(Jul 21) Network congestion on Jul 10th, 2021</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-orange-400" />
              <a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200">(May 20) Protecting mempool from computationally heavy transactions</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">(May 20) A Scalability Plan for Ergo</a>
            </li>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState("roadmap");

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors border
              ${activeTab === tab.key
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-neutral-900 text-gray-300 border-neutral-700 hover:bg-orange-300 hover:text-white"}`}
          >
            {tab.key === "roadmap" && <Flag className="w-4 h-4" />}
            {tab.key === "scaling" && <TrendingUp className="w-4 h-4" />}
            {tab.key === "layer0" && <Network className="w-4 h-4" />}
            {tab.key === "layer1" && <Layers className="w-4 h-4" />}
            {tab.key === "layer2" && <Zap className="w-4 h-4" />}
            {tab.key === "discussions" && <MessageSquare className="w-4 h-4" />}
            {tab.key === "atomic" && <Lock className="w-4 h-4" />}
            {tab.key === "txspeed" && <Cpu className="w-4 h-4" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "roadmap" && (
        <div className="prose prose-invert max-w-none why-ergo-style">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
                Ergo Development Roadmap & History
              </h1>
            <p className="text-xl text-gray-400 mb-6">
                Ergo is a blockchain platform designed to provide a secure, efficient, and user-friendly environment for the development of decentralized applications and financial tools. This roadmap outlines the key milestones and objectives for the development and growth of the Ergo ecosystem.
              </p>
            </div>
          {/* Vision & Key Features */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400 to-cyan-400 rounded-l-xl" />
            <div className="bg-orange-400/10 rounded-xl p-6 pl-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Vision & Key Features</h2>
              <p className="text-gray-300 mb-2">Ergo is a cutting-edge smart contract platform that provides secure, accessible, and decentralized financial tools to empower ordinary people. Utilizing a sophisticated scripting language and advanced cryptographic features, Ergo builds on fundamental blockchain principles to transform the concept of Contractual Money.</p>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>eUTXO Model: Allows UTXOs to carry arbitrary data and complex scripts, enabling advanced smart contracts</li>
                <li>Autolykos PoW Algorithm: ASIC-resistant and designed for fair mining, promoting decentralization</li>
                <li>Emission Schedule: Ensures a stable and predictable supply of ERG tokens</li>
                <li>NiPoPoWs: Enables efficient light clients, log-space mining, trustless sidechains, and enhances accessibility and decentralization</li>
                <li>ErgoScript: Supports clear and concise smart contract development with Σ-protocols</li>
                <li>Storage Rent: Mitigates blockchain bloat, incentivizes efficient storage usage, and contributes to long-term economic sustainability</li>
                <li>Turing-Complete Smart Contracts: Allows for complex on-chain computations and advanced dApp development</li>
                <li>Long-Term Economic Sustainability: Ensured through storage rent, transaction fees from DeFi, and subpool mining</li>
              </ul>
              <p className="text-gray-300">For more information please see the <Link href="/Docs/why-ergo" className="text-orange-300 underline hover:text-orange-200">Why Ergo?</Link> section.</p>
            </div>
          </div>
          {/* Timeline Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Ergo Timeline</h2>
            <div className="relative border-l-2 border-orange-400/30 pl-8 space-y-10">
                {/* 2019 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2019: Genesis Year</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>July 1: Ergo mainnet launched during the "crypto winter"</li>
                    <li>Autumn: Ergo Foundation established</li>
                    <li>First tools and libraries emerged</li>
                    <li>Inaugural crowdfunding using UTXOs and smart contracts</li>
                    <li>Zero-join paper published</li>
                    <li>Multi-stage contracts paper by Amitabh released</li>
                    <li>First smart contract formally verified</li>
                  </ul>
                </div>
                {/* 2020 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2020: Foundation Building</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>January 7: Introduction of the Ergo Foundation as a community-driven entity</li>
                    <li>Ergo Mixer (initially a raw application, later improved by Anon2020)</li>
                    <li>Late August: Oracle pools</li>
                    <li>Zero-knowledge treasury by anon_real</li>
                    <li>Auction House</li>
                    <li>Collaboration with Emurgo for joint research (Oracle Pools, SigmaUSD, headless dApp framework)</li>
                    <li>Listings: CoinEx, Gate.io</li>
                    <li>Roadmap released and Discord community initiated</li>
                  </ul>
                </div>
                {/* 2021 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2021: Expansion and Recognition</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Q1: SigmaUSD launched</li>
                    <li>Spectrum DEX and DeFi ecosystem development began</li>
                    <li>Autolykos v2 hard fork: opened Ergo to mining pools, improved liquidity and brought many new users</li>
                    <li>Collaboration with Jinse, Chinese community expanded to 10,000+ members</li>
                    <li>Listed on KuCoin and Changelly</li>
                    <li>UTXO Alliance formed</li>
                    <li>Inaugural Ergo Summit and two hackathons</li>
                    <li>EIP-27 discussions initiated</li>
                    <li>US Legal Opinion obtained on Ergo's security classification</li>
                    <li>December 19: Ergo Foundation incorporated in Singapore</li>
                    <li>Joseph Armeanio and Mark Glasgow join Ergo Foundation</li>
                    <li>Daniel Friedman (IOHK) appointed Advisor to Ergo Foundation Board</li>
                    <li>EF hired wallet developers to alleviate users' lack of usable wallet options</li>
                  </ul>
                </div>
                {/* 2022 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2022: Technical Advancements</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>EIP-27 (emission soft-fork) implemented</li>
                    <li>EIP-37 (difficulty retargeting hard fork) implemented</li>
                    <li>Listed on Indodax, Huobi, Bittrue</li>
                    <li>Parallel asset launched on Flux</li>
                    <li>Sigmanauts Program launched</li>
                    <li>Two summits and three hackathons held</li>
                    <li>ergoplatform.org and sigmaverse.io redesigned and relaunched</li>
                    <li>Node V5 with JITC released</li>
                    <li>Warwick (CW), Stacie, and Alison Robson joined as EF Officers</li>
                    <li>Open source economy pitch deck created</li>
                  </ul>
                </div>
                {/* 2023 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2023: Ecosystem Flourishing</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Significant donations to EF Treasury from ecosystem projects</li>
                    <li>Storage rent activation</li>
                    <li>Sigmanauts: sigmanauts.com launches, voting rework, mission statement published, events, treasury, Twitter management</li>
                    <li>Bitpanda, nonkyc.io, Koinly, StealthEx integrations</li>
                    <li>Sigma.js, UTXO Set Snapshots, bootstrapping with NiPoPoWs, SigmaState advancements</li>
                    <li>Kushti's scalability plan and sub-block confirmation protocol work</li>
                    <li>Pruned Full Node, Plasma Library, ergo-lib-go, uExplorer, FleetSDK, Ledger support, Oracles v2</li>
                    <li>Ergo Summit 2023, ErgoVersary 2023, ErgoHack VI and VII</li>
                    <li>Erg0ne, Sigmanauts @ NFTxLV, Sigmanauts mining pool</li>
                    <li>ergexplorer, Off-The-Grid, DeFi: Rosen Lite, SigmaFi, Duckpools, AuctionHouse v3, AuctionCoin, Hodlcoin & PhoenixFinance, Spectrum Finance yield farming, Hodlbox, Lilium, single-tx-swap, EXLE MVP, TabbyPOS, Crux Finance MVP, SigmaO options trading platform</li>
                  </ul>
                </div>
                {/* 2024 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
                  <h3 className="text-xl font-semibold mb-1">2024: Future Horizons (In Progress and Planned)</h3>
                  <ul className="list-disc pl-6 text-gray-300 mb-2">
                    <li>Ongoing work to define rules for new releases and research-driven development frameworks</li>
                    <li>Encouragement of new stakeholder organizations within the Ergo ecosystem</li>
                    <li>ErgoHack VIII - Ergo as a Smart Layer</li>
                    <li>DAO for Ergo core</li>
                    <li>Ergo achieved #1 in TVL% of market cap for a PoW chain</li>
                    <li>Ergo listed on MEXC exchange</li>
                    <li>Node improvements: migration to RocksDB, 6.0.0-alpha1, AVL+ Tree optimizations</li>
                    <li>Sigma protocol updates: Sigma 5.0.14, Sigma 6.0.0, scrypto 3.0.0</li>
                    <li>Infrastructure: Sigmaspace indexer, explorer API, storage rent dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* Roadmap Phases Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">General Overarching Ergo Design and Implementation Roadmap</h2>
            <div className="relative border-l-2 border-cyan-400/30 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 1: Foundations</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Start with the basic design of Ergo as digital gold (commodity money).</li>
                  <li>Introduce programmability features including crypto contracts, stealth addresses, arbitrarily complex signatures, mixing schemes.</li>
                  <li>Position Ergo as a basis for unstoppable, grassroots economies, serving as a decentralized CBDC for the people.</li>
                </ul>
          </div>
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 2: Initial Experiments</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Conduct initial experiments to test functionality and user engagement.</li>
                  <li>Evaluate the outcomes considering the initial motivations.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 3: Defining Adoption</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Clarify the term "adoption" as it is often ambiguous in industry discussions.</li>
                  <li>Develop metrics or KPIs to measure adoption success.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 4: Scaling and Optimization</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Peer-to-peer (P2P) level optimizations and rework.</li>
                  <li>Consider pre-block commitments to transaction ordering (sub-blocks).</li>
                  <li>Aim to increase transactions per second (TPS) while maintaining security.</li>
                  <li>Constraints: flat P2P network, commodity hardware, no centralized data centers.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 5: Offloading Solutions</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Propose options for offloading transactions to Layer 2 or sidechains, if not already implemented.</li>
                  <li>Introduce "Know Your Assumptions" (KYA) for security explanation.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white"></div>
                <h3 className="text-xl font-semibold mb-1">Phase 6: Convergence</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-2">
                  <li>Multiple developments in scaling, optimization, and offloading converge for widespread adoption.</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">Summarised from Kushti, 7 Aug, 2023</p>
          </div>
          {/* Milestones & Achievements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Milestones & Achievements</h2>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoHack VIII - Ergo as a Smart Layer</li>
                <li>DAO for Ergo core</li>
                <li>Ergo achieved #1 in TVL% of market cap for a PoW chain</li>
                <li>Ergo listed on MEXC exchange</li>
                <li>Node improvements: migration to RocksDB, 6.0.0-alpha1, AVL+ Tree optimizations</li>
                <li>Sigma protocol updates: Sigma 5.0.14, Sigma 6.0.0, scrypto 3.0.0</li>
                <li>Infrastructure: Sigmaspace indexer, explorer API, storage rent dashboard</li>
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Sigmanauts Achievements</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigmanauts Mining Pool launch</li>
                <li>Storage rent integration completed for Sigmanauts Mining Pool</li>
                <li>First proposal on Paideia passes (January 2024)</li>
                <li>Official takeover of Market-Making services management (March 2024)</li>
                <li>Substantial EF grant received matching Sigmanauts-raised funds (March 2024)</li>
              </ul>
            </div>
          {/* Application Achievements */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Application Achievements</h2>
              <h3 className="text-xl font-semibold mb-2">Wallet Developments</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Nautilus Wallet improvements: v0.15.0, new frontend, Firefox compatibility, asset ranking, dApp docs</li>
                <li>Minotaur Wallet: v2.0.1 production release</li>
                <li>Satergo Wallet: 3x faster history, new Ergonnection, easier Windows install</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Infrastructure & Tools</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigmaspace: full blockchain indexer, storage rent dashboard, explorer API</li>
                <li>Lithos: client dev, fraud proofs for NISPs</li>
                <li>Rosen Bridge: improved decimals, API & UI</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">DeFi Applications</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD: stability improvements, oracle upgrades</li>
                <li>Fleet SDK: AgeUSD integration, toolkit upgrades</li>
                <li>Celaut, Bene fundraising, and more</li>
              </ul>
            </div>
          {/* Development Focus */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Development Focus</h2>
              <h3 className="text-xl font-semibold mb-2">Reference Client</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sub-blocks implementation, candidate generation, block template regeneration</li>
                <li>P2P layer optimization, bootstrapping, sidechain modularization</li>
                <li>RocksDB integration, enhanced testing</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Sigma</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Sigma 6.0 implementation, validation context extension</li>
                <li>Signature re-checking optimization, ErgoScript 2.0, EIP-0046/47/44</li>
                <li>Bulletproofs, Rust/JS support, high-level language support, improved debugging</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">SDKs, Libraries & Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>AppKit, FleetSDK, sigma-rust, JIT costing, Sigma.js</li>
                <li>ergo-lib-go, escript.online, Lithos light-client integration</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Mining Ecosystem</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Lithos decentralized mining pool launch (2024)</li>
                <li>Fair Initial Mining Offerings (FIMOs)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Wallets</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Nautilus: Manifest v3 rework</li>
                <li>Ledger: developer mode, Keystone integration, EIP-12/20, Metamask, Trustwallet, Light SPV</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Ecosystem Growth</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>DeFi expansion, NFT platform improvements, new protocols</li>
                <li>UX/UI improvements, onboarding, documentation</li>
              </ul>
            </div>
          {/* Ongoing Challenges */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ongoing Challenges</h2>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Scalability improvements (Layer 1 & 2), sub-blocks, Layer 2 solutions</li>
                <li>P2P optimization, bootstrapping, transaction processing</li>
                <li>Usability: wallet/dApp UX, developer tools, onboarding</li>
                <li>Security: vulnerability assessment, protocol & contract security, audits</li>
                <li>Ecosystem: accessibility, listings, team coordination, contribution process</li>
                <li>Technical debt: code quality, performance, architecture, docs</li>
              </ul>
            </div>
          {/* DeFi Ecosystem */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">DeFi Ecosystem</h2>
              <h3 className="text-xl font-semibold mb-2">Decentralized Exchanges</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoDex (AMM + Yield Farming)</li>
                <li>ErgoAuctionHouse (peer-to-peer auctions)</li>
                <li>Trade House (orderbook-based P2P DEX)</li>
                <li>SkyHarbor (NFT Market), SkyHarbor Raffle, single-tx-swap, TokenJay, Crooks Finance, PalmyraComDex, Crystal Pool, Machina Finance, Mew Finance</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Stablecoins</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD (Djed protocol), SigmaUSD v2</li>
                <li>Gluon (gold stablecoin)</li>
                <li>DexyGold (seigniorage stablecoin)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Lending and Borrowing</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaFi (peer-to-peer loans via bonds)</li>
                <li>Duckpools (lending pools), optionPools, EXLE (uncollateralized lending)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Gaming and Metaverse</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>BlitzTCG (trading card game)</li>
                <li>CyberVerse (metaverse gaming platform), Cyberverse Multiplayer</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Derivatives and Synthetics</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaO (trustless options), HodlCoin, AuctionCoin, Hodlbox, OptionCoin, ChainCash</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Crowdfunding</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoRaffle (decentralized crowdfunding), V2 features</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Interoperability and Bridges</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Oracle Pools, Rosen Bridge (ADA, BTC, EVM, DOGE, BCH, Runes, RosenFast, Bridge SDK, Hummingbot)</li>
                <li>Sigma Chains, trustless relays, sidechains, sharding, ERG/tokens on sidechains, launching apps on sidechains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Privacy and Mixing</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ErgoMixer, Stealth addresses, SigmaJoin, privacy-preserving voting</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">DAOs and Governance</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Paideia, Lithos, The Field</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Lilium, Moria Finance, Trustless Relys, RNG, TabbyPOS, Crux Finance, ErgoNames, Reputation System</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Miner Tooling</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>GuapSwap, CYTI, Lithos, Smartpools</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">Other Infrastructure</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>ergexplorer, sigmaspace</li>
              </ul>
            </div>
          {/* References */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">References</h2>
              <p className="text-gray-300 mb-2">Developing Digital Gold 2.0 and its Infrastructure</p>
              <p className="text-gray-300 mb-2">The following is adapted from this post on the R&D DAO for Ergo Core thread.</p>
              <p className="text-gray-300 mb-2">Vision: The Ergo Core Dev DAO envisions Ergo as Digital Gold 2.0, a mineable digital commodity with trustless derivatives and expressive contracts. By building upon Ergo's robust DeFi ecosystem and introducing sidechains, we aim to expand the decentralized monetary base and derivative money supply, creating a more inclusive and accessible financial system for the Ergo community and beyond.</p>
              <h3 className="text-xl font-semibold mb-2">Completed Milestones</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>SigmaUSD stablecoin (Djed protocol)</li>
                <li>Spectrum DEX (AMM-based)</li>
                <li>ErgoMixer (non-interactive, non-custodial mixer)</li>
                <li>ErgoAuctionHouse (peer-to-peer auctions)</li>
                <li>SigmaFi (peer-to-peer loans via bonds)</li>
                <li>Duckpools (lending pools)</li>
                <li>ErgoRaffle (decentralized crowdfunding)</li>
                <li>EXLE (uncollateralized lending)</li>
                <li>SigmaO (trustless options)</li>
                <li>HodlCoin (trustless ERG derivative with non-declining price)</li>
                <li>AuctionCoin (emission via auctions)</li>
                <li>Oracle Pools (federated transparent data providing)</li>
                <li>Rosen Bridge (two-layered federated bridge)</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Upcoming Milestones</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Paideia, Dexy/Gluon, ChainCash, Analog Ergo, OptionCoin</li>
                <li>Implementing sidechains, trustless transfers, consensus mechanisms</li>
                <li>Expanding contractual layer to sidechains, Bulletproofs, first-class contracts</li>
                <li>Sharding on sidechains, ERG/tokens on sidechains, launching apps on sidechains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Monetization Strategies for ErgoDevs DAO</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li>Receiving a percentage of sidechain token emissions</li>
                <li>Consultancy services and support for launching applications on sigma chains</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Further Reading</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
              <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Nov 22) A Scalability Plan for Ergo</a></li>
              <li><a href="https://www.ergoforum.org/t/ergo-protocol-research-and-client-development-roadmap/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Dec 21) Ergo protocol research and client development roadmap</a></li>
              <li><a href="https://www.ergoforum.org/t/long-term-vision-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Sep 21) Long-term vision for Ergo</a></li>
              <li><a href="https://www.ergoforum.org/t/network-congestion-on-jul-10th-2021/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(Jul 21) Network congestion on Jul 10th, 2021</a></li>
              <li><a href="https://www.ergoforum.org/t/protecting-mempool-from-computationally-heavy-transactions/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) Protecting mempool from computationally heavy transactions</a></li>
              <li><a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/" target="_blank" rel="noopener noreferrer" className="text-orange-300 underline hover:text-orange-200 flex items-center">(May 20) A Scalability Plan for Ergo</a></li>
              </ul>
          </div>
        </div>
      )}
      {activeTab === "scaling" && <ScalingContent />}
      {activeTab === "layer0" && <Layer0Content />}
      {activeTab === "layer1" && <Layer1Content />}
      {activeTab === "layer2" && <Layer2Content />}
      {activeTab === "discussions" && <DiscussionsContent />}
      {activeTab === "atomic" && <AtomicComposabilityContent />}
      {activeTab === "txspeed" && <TransactionSpeedContent />}
    </>
  );
} 