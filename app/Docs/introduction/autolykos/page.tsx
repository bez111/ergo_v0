import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Database,
  Zap,
  BookOpen,
  FileText,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Layers,
  Shield,
  Info,
  Cpu,
  KeyRound,
  Globe,
  Wallet,
  ArrowRight,
  Star,
  Package,
  Repeat,
  Code,
  Network,
  Coins,
  Lock,
  ShieldQuestionIcon,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function AutolykosPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="emission" className="flex items-center gap-2 justify-center">
          <Coins className="w-4 h-4" /> Emission
        </TabsTrigger>
        <TabsTrigger value="difficulty" className="flex items-center gap-2 justify-center">
          <Repeat className="w-4 h-4" /> Difficulty
        </TabsTrigger>
        <TabsTrigger value="verification" className="flex items-center gap-2 justify-center">
          <CheckCircle className="w-4 h-4" /> Verification
        </TabsTrigger>
        <TabsTrigger value="technical" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Technical
        </TabsTrigger>
        <TabsTrigger value="ASIC-Proof" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> ASIC-Proof
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Autolykos
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo mining is based on Autolykos, a fairly launched efficient ASIC-resistant Proof of Work algorithm.
          </p>
        </div>
        {/* Overview Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Overview
          </h2>
          <p className="text-gray-300 mb-4">
            Autolykos, in its first version, was designed with inherent pool-resistance through the use of non-outsourceable puzzles. The transition to Autolykos v2 was marked by <span className="font-semibold text-orange-300">EIP-0009: Hard-fork Activation protocol 'The Hardening Hard-Fork'</span> on block 417,792, which facilitated the formation of mining pools by removing the non-outsourceable puzzles.
          </p>
          <p className="text-gray-300 mb-4">
            In addition to EIP-0009, several other proposals have been implemented which impact the autolykos algorithm in regards to the emission and difficulty adjustment:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <span className="font-semibold text-cyan-300">EIP27: Emission Retargeting Soft-Fork</span> was a significant milestone, passed with overwhelming community support, that extended emission by 4,566,336 blocks (~17.38 years). This change was activated on block 777217. For more information see the emission section.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">EIP37: Tweaking Difficulty Adjustment Algorithm</span> made the difficulty adjustment mechanism more responsive by considering a shorter and more recent history of blocks. EIP37 didn't replace Autolykos but refined it, making it more resilient against sudden hash rate changes and adversarial disruptions. For more information see the difficulty adjustment section.
            </li>
          </ul>
        </div>
        {/* Pool Resistance Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-400" /> Pool Resistance (Autolykos v1)
          </h2>
          <p className="text-gray-300 mb-4">
            Autolykos V1 was initially designed to resist pooling. However, it was observed that large players could bypass this resistance using smart contracts. This issue was discussed in the paper <span className="font-semibold text-cyan-300">"Bypassing Non-Outsourceable Proof-of-Work Schemes Using Collateralized Smart Contracts"</span> presented by Alex Chepurnoy at the WTSC workshop associated with Financial Cryptography and Data Security 2020 in Malaysia.
          </p>
        </div>
        {/* Autolykos v2 Section */}
        <div className="bg-cyan-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Autolykos V2
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>The non-outsourceable puzzles were removed.</li>
            <li>The algorithm was optimized to bind an efficient solving procedure with a single table of ~2 GB (initially), significantly reducing the scope for memory optimization.</li>
            <li>The table size, which determines the memory requirements of the solving algorithm, increases over time.</li>
            <li>The table is solely dependent on the block height, eliminating any penalties for recalculating block candidates for the same height.</li>
          </ul>
        </div>
        {/* Key Concepts Section */}
        <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-400" /> Key Concepts (Autolykos v2)
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Autolykos, both v1 and v2, is based on the k-sum problem. A miner is required to find k (k=32) out of N (2<sup>n</sup> = 2<sup>26</sup> initially) elements, such that the hash of their sum is less than the target value (inverse of the difficulty).</li>
            <li>The indexes (k) are pseudorandom values derived from the block candidate and nonce.</li>
            <li>The elements (N) are derived from the block height and constants. Unlike Autolykos v1, miners can now recalculate block candidates quickly as only the indexes depend on them.</li>
            <li>The calculation of indexes also involves the same table (where elements are the last 31 bytes of H(i || h || M ), with i in the range [0, N), h representing the block height, and M serving as padding to slow down hash calculation (8kb of constant data).</li>
          </ul>
          <p className="text-gray-300 mb-4">
            The algorithm is designed to be efficient for miners who store the table, which initially requires 2<sup>26</sup> * 31 = 2,080,374,784 bytes (about 2GB).
          </p>
        </div>
        {/* Table Size Evolution Section */}
        <div className="bg-green-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-green-400" /> Table Size Evolution
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Until block 614,400, N = 2<sup>26</sup> = 67,108,864 elements (31 bytes each).</li>
            <li>From block 614,401 until block 4,198,400, N increases by approximately 5% every 51,200 blocks (specifically, n increases by 1 every 102,400 blocks, so N doubles every 102,400 blocks).</li>
            <li>At block 4,198,400, the value of N is fixed at 2,143,944,600.</li>
          </ul>
          <p className="text-gray-400 text-sm">(Note: Test vectors for N values are provided in the Autolykos paper).</p>
        </div>
        {/* Navigation Cards Section */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Wallet className="w-5 h-5 text-orange-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Start Mining</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Algorithm</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Governance</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Database className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Storage Rent</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Repeat className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Difficulty Adjustment</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 bg-neutral-800 rounded-lg p-4 hover:bg-orange-500/10 transition-all hover:scale-105"
          >
            <Coins className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-orange-300 hover:underline text-base">Emission</span>
            <ArrowRight className="w-4 h-4 ml-auto text-gray-400" />
          </Link>
        </div>
      </TabsContent>

      {/* Emission Tab */}
      <TabsContent value="emission">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Emission Schedule
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo's journey, which began in 2017, saw the successful launch of its mainnet in July 2019.
          </p>
        </div>
        {/* EFYT Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-orange-400" /> Ergo-First-Year-Token (EFYT)
          </h2>
          <p className="text-gray-300 mb-4">
            Prior to the mainnet, <span className="font-semibold text-orange-300">Ergo-First-Year-Token</span> (EFYT) was in circulation and swapped with the treasury on launch. For comprehensive insights into EFYT, including its tokenomics and distribution strategy, please visit <a href="#" className="text-cyan-400 underline">this page</a>.
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>EFYT was airdropped and listed on Waves DEX in May 2017 (100,000 initial supply).</li>
            <li>EFYT is separate from ERG, which could only be mined after mainnet launch.</li>
            <li>Max supply: <span className="font-semibold text-orange-300">1,970,945.0</span> (10% of first-year ERG emission).</li>
            <li>EFYT token distribution on <a href="#" className="text-cyan-400 underline">Pywaves</a>, price tracking on <a href="#" className="text-cyan-400 underline">livecoinwatch</a>.</li>
            <li>Redeemable 1:1 for ERG via Waves gateway until July 2021 (1,782,615 ERG redeemed).</li>
            <li>Used for team compensation, expenses, and minimal private investment (500,000 EFYT sold to 3 investors).</li>
          </ul>
          <div className="text-gray-400 text-sm mt-2">
            Resources: <a href="#" className="text-cyan-400 underline">Kushti on EFYT (2018)</a>, hot wallet: <span className="font-mono text-orange-300">3P3yFxqAeFGnTDvCjeCEyMnMZevJxurKZne</span>, <a href="#" className="text-cyan-400 underline">Background (2019)</a>.
          </div>
        </div>
        {/* Total Supply Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-cyan-400" /> Total Supply and Allocation
          </h2>
          <p className="text-gray-300 mb-4">Ergo's total supply is capped at <span className="font-semibold text-orange-300">97,739,925 ERGs</span>:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-cyan-300">Genesis State:</span> 1 ERG (no premine proof) + 4,330,791.5 ERG (Foundation Treasury)</li>
            <li><span className="font-semibold text-cyan-300">Miner Rewards:</span> 93,409,132 ERG for 2,080,800 blocks (see emission schedule)</li>
          </ul>
          <p className="text-gray-400 text-sm mt-4">Treasury released gradually over 2.5 years, not exceeding 10% of circulating supply.</p>
        </div>
        {/* Foundation Section */}
        <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" /> Ergo Foundation
          </h2>
          <p className="text-gray-300 mb-4">The Foundation received <span className="font-semibold text-orange-300">4.43%</span> of total emission for protocol development, ecosystem growth, and social good. <a href="#" className="text-cyan-400 underline">Transparency report</a>.</p>
        </div>
        {/* Mining & Emission Duration Section */}
        <div className="bg-green-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-green-400" /> Mining & Emission Duration
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li>Block reward decreases by 3 ERG per block every quarter until 2026, then stabilizes at 3 ERG/block.</li>
            <li>Mining continues until ~2045 (extended from 2027 by EIP27 soft-fork).</li>
            <li>See <a href="https://ergo.watch/emission" target="_blank" className="text-cyan-400 underline">emission schedule on ergo.watch</a>.</li>
          </ul>
        </div>
        {/* Revenue Streams Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-orange-400" /> Sustaining Ergo Mining
          </h2>
          <p className="text-gray-300 mb-4">After 2045, miners are incentivized by additional revenue streams (fees, storage rent, etc.) to secure the network. <a href="#" className="text-cyan-400 underline">Learn more</a>.</p>
        </div>
        {/* Unique Aspects Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Unique Aspects
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
            <li><span className="font-semibold text-cyan-300">Proof of No Premine:</span> Genesis state includes Bitcoin/Ethereum hashes and news headlines for verification (see mainnet.conf).</li>
            <li><span className="font-semibold text-cyan-300">Verification Process:</span> Emission logic verified with Stainless formal verification tool. <a href="#" className="text-cyan-400 underline">Code section</a>.</li>
            <li><span className="font-semibold text-cyan-300">No Out-of-Thin-Air Emission:</span> "Coinbase" transaction does not create new tokens out of thin air, ensuring traceability and scarcity.</li>
          </ul>
        </div>
      </TabsContent>

      {/* Difficulty Tab */}
      <TabsContent value="difficulty">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Understanding Difficulty Adjustment in Ergo
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ergo's difficulty adjustment mechanism ensures stable block times and network security, adapting to hash rate changes with the innovative Autolykos protocol and EIP37 refinement.
          </p>
        </div>
        {/* Quote Section */}
        <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
          <blockquote className="text-xl italic text-center text-gray-300">
            "Difficulty adjustment is the heartbeat of a secure, fair, and adaptive Proof-of-Work blockchain."
          </blockquote>
        </div>
        {/* Main Concepts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Repeat className="w-5 h-5 text-blue-400" /> Autolykos Protocol
            </h3>
            <p className="text-gray-300 mb-4">Linear least squares method, 8,192 blocks history, error rate 1.9% vs Bitcoin's 9.1%.</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Predictable block times</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Lower error than Bitcoin</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Based on historical data</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-green-400" /> EIP37 Refinement
            </h3>
            <p className="text-gray-300 mb-4">EIP37 made difficulty adjustment more responsive by using a shorter, more recent block history.</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Faster adaptation to hash rate</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Resilient to sudden changes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Maintains 120s block interval</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-400" /> Challenges
            </h3>
            <p className="text-gray-300 mb-4">Original algorithm was vulnerable to rapid hash rate changes and difficulty spikes/drops.</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> ETH merge caused spikes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Low activity = difficulty drops</li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> Buffers & Epochs
            </h3>
            <p className="text-gray-300 mb-4">2-minute block time gives miners time for decisions, reduces orphans, and allows quick parameter updates (epoch ~4.2h).</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Fewer orphaned blocks</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Efficient network health</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Security against timewarp</li>
            </ul>
          </div>
        </div>
        {/* Future & Weak Blocks Section */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-400" /> Future & Weak Blocks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5" /> The Future of Difficulty Adjustment
              </h4>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                <li>Need for performance statistics and backtesting of the current DAA</li>
                <li>Potential for adaptive algorithms in the future</li>
                <li>Exploring shorter epoch lengths for even better responsiveness</li>
              </ul>
            </div>
            <div className="border border-neutral-700 rounded-lg p-4">
              <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Introduction to 'Weak Blocks'
              </h4>
              <p className="text-gray-300 mb-4">"Weak blocks" are block candidates with lower difficulty, propagated with new transactions to optimize bandwidth and speed up confirmations. They also help enable efficient sidechains. <a href="../uses/sidechains/weak-blocks.md" className="text-cyan-400 underline">Read more</a>.</p>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Diff. Adjustment Tab */}
      <TabsContent value="diff-adjustment">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-400" /> Diff. Adjustment
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Verification Tab */}
      <TabsContent value="verification">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Solution Verification
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            The process of validating that a miner has solved the mathematical puzzle required to add a block to the blockchain network.
          </p>
        </div>
        {/* Overview Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-orange-400" /> Overview
          </h2>
          <p className="text-gray-300 mb-4">
            In cryptocurrency mining, miners compete to solve a cryptographic puzzle. The first miner to solve the puzzle is rewarded with new coins and fees from the transactions included in the block. Other nodes on the network must then verify the solution to ensure its validity.
          </p>
          <p className="text-gray-300 mb-4">
            Solution verification is an important aspect of cryptocurrency mining, as it ensures the integrity of the blockchain network and prevents fraudulent transactions.
          </p>
        </div>
        {/* Test Vectors Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" /> Test Vectors
          </h2>
          <p className="text-gray-300 mb-4">
            Test vectors are necessary for solution verification in cryptocurrency mining because they provide a standardized set of inputs and outputs to test the verification process's accuracy and correctness.
          </p>
          <p className="text-gray-300 mb-4">
            When miners solve a mining puzzle, they produce a solution that is essentially a hash value that meets a specific set of criteria. The network must verify this solution before it can be accepted as valid and included in the blockchain.
          </p>
          <p className="text-gray-300 mb-4">
            Test vectors provide a consistent and reliable way to test the verification process and ensure it works correctly. Any errors or inconsistencies can be identified and corrected by comparing the expected output from the test vector with the actual output produced by the verification process. This helps to ensure the mining process's integrity and the blockchain's security.
          </p>
        </div>
        {/* Ergo Test Vectors Section */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-blue-200">
            <Database className="w-6 h-6 text-blue-400" /> Ergo Test Vectors
          </h2>
          <div className="text-gray-400 text-sm mb-4">Credit: Wolf9466#9466 on Discord</div>
          <div className="space-y-4">
            <div className="bg-neutral-800/80 rounded-lg p-4">
              <div className="font-bold text-cyan-400 mb-1">Height = <span className="font-mono">569806 (0x8B1CE)</span></div>
              <div className="font-bold text-cyan-400 mb-1">Item count = <span className="font-mono">67108864 (0x4000000)</span></div>
              <div className="font-bold text-cyan-400 mb-2">Prehash Item KAT:</div>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-gray-300">Item index 0: <span className="font-mono text-orange-300">0x00596fe417902d8fe61763deb06286d3bf787f3c8ea2cc3063724dd307993caa</span></li>
                <li className="text-gray-300">Item index 4: <span className="font-mono text-orange-300">0x00832cba40f67d525e9c449f17f46e3bfcdb663427d4289e35bc8e04b0c97765</span></li>
                <li className="text-gray-300">Item index 255: <span className="font-mono text-orange-300">0x003f44309d54120e5d41b36a245fea4098948f7e8c5c052247922b74a6c8e7b9</span></li>
                <li className="text-gray-300">Item index 67108863: <span className="font-mono text-orange-300">0x000701c3dd5db987aab0bb57f6e89ea9dbdc1dd88ffcac698bfde407d95063ce</span></li>
              </ul>
            </div>
            <div className="bg-neutral-800/80 rounded-lg p-4">
              <div className="font-bold text-green-400 mb-1">Message</div>
              <div className="font-mono text-orange-300 break-all">0x9b8cb36a9b738fa3678521d00c938631e1a192bc1919f004d2cbabdaa33835b4</div>
              <div className="font-bold text-green-400 mt-3 mb-1">Nonce</div>
              <div className="font-mono text-orange-300 break-all">0x5d340003e9c460dc</div>
            </div>
            <div className="bg-neutral-800/80 rounded-lg p-4">
              <div className="font-bold text-blue-400 mb-1">Blake #1</div>
              <div className="font-mono text-orange-300 break-all">0xbd54dc777dc062c63b2f8cdd4d56f4f57b64d648420f62ef0e6f3935b0046fc99e7ea07b167ccadeaf2cd396504477697f5123e72887f61333358b5edbd5aa66</div>
              <div className="font-bold text-blue-400 mt-3 mb-1">Blake #2</div>
              <div className="font-mono text-orange-300 break-all">0x6dbc710c2fb6e975d93af456686617b97595a0cec9dd22d57b8a7176d3f470b175eccfc1f97cecc13207fb68358c608930e5d7cfcdd0b3a4da8b9acb508e3248</div>
            </div>
            <div className="bg-neutral-800/80 rounded-lg p-4">
              <div className="font-bold text-yellow-400 mb-1">Result</div>
              <div className="font-mono text-orange-300 break-all">0x0c3b54f29c8ac1a407f83cd09f3d61bc32996a3d58a7d9fe9fe0e0a08572e367f96b164c</div>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Technical Tab */}
      <TabsContent value="technical">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Autolykos Line-by-line
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            In-depth breakdown of the Autolykos proof-of-work algorithm, its pseudocode, and technical mechanics.
          </p>
        </div>
        {/* Core Mechanism */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <div className="font-bold text-cyan-400 mb-2 text-lg">The Core Mechanism: An Overview</div>
          <p className="text-gray-300 mb-4">Miners must find <span className="font-bold">k (=32)</span> elements from a set of <span className="font-bold">N</span> such that their sum, when hashed, is below a target value. The first to solve adds the next block.</p>
        </div>
        {/* Pseudocode Illustration */}
        <div className="bg-neutral-800/80 rounded-lg p-4 mb-8">
          <div className="font-bold text-blue-400 mb-2">Autolykos Block Mining Pseudocode</div>
          <img src="https://storage.googleapis.com/ergo-cms-media/Screenshot_2022_06_01_at_23_41_49_b2cdf73a2a/Screenshot_2022_06_01_at_23_41_49_b2cdf73a2a.png" alt="Autolykos pseudocode" className="rounded-lg border border-neutral-700 mb-2" />
        </div>
        {/* Cyclic Group Prerequisites */}
        <div className="bg-neutral-100/10 rounded-xl p-6 mb-8">
          <div className="font-bold text-green-400 mb-2 text-lg">Pre-Requisites: The Cyclic Group</div>
          <p className="text-gray-300 mb-4">Autolykos uses a large cyclic group <span className="font-mono">G</span> of prime order <span className="font-mono">q</span> with generator <span className="font-mono">g</span> and identity <span className="font-mono">e</span>. Hashing is performed in <span className="font-mono">Z/qZ</span> using <span className="font-mono">Blake2b256</span>.</p>
        </div>
        {/* Cyclic Group Illustration */}
        <div className="bg-neutral-900/80 rounded-xl p-4 mb-8 flex justify-center">
          <div className="bg-white rounded-lg p-2">
            <img src="https://storage.googleapis.com/ergo-cms-media/unnamed_1_44d138eaaf/unnamed_1_44d138eaaf.png" alt="Cyclic group example" className="rounded-md border border-neutral-300" />
          </div>
        </div>
        {/* Input Section */}
        <div className="bg-neutral-800/80 rounded-lg p-4 mb-8">
          <div className="font-bold text-orange-400 mb-2">Line 1: Input h and m</div>
          <p className="text-gray-300 mb-2">Input: upcoming block header hash <span className="font-mono">m</span>, block height <span className="font-mono">h</span></p>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li><span className="font-bold">Block Height (h):</span> Height of the blockchain.</li>
            <li><span className="font-bold">Block Header Hash (m):</span> Hash of the block header components (previous hash, Merkle root, nonce, etc).</li>
          </ul>
        </div>
        {/* Hash Function Section */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <div className="font-bold text-blue-400 mb-2">Algorithm 3: Hash Function</div>
          <p className="text-gray-300 mb-2">Uses <span className="font-mono">Blake2b256</span>. If hash &lt; 2<sup>256</sup>, returns hash mod <span className="font-mono">q</span>. Otherwise, repeats. Output is in <span className="font-mono">Z/qZ</span>.</p>
        </div>
        {/* Computation of List R */}
        <div className="bg-neutral-800/80 rounded-lg p-4 mb-8">
          <div className="font-bold text-cyan-400 mb-2">Line 2: Computation of List R</div>
          <p className="text-gray-300 mb-2">For <span className="font-mono">j</span> in <span className="font-mono">[0, N)</span>:</p>
          <div className="font-mono text-orange-300 mb-2">r_j = takeRight(31, H(j || h || M))</div>
          <p className="text-gray-300 mb-2">Where <span className="font-mono">M</span> is a constant 8kb data segment. <span className="font-mono">takeRight(31, ...)</span> keeps the 31 least significant bytes.</p>
        </div>
        {/* Nonce Guessing Loop */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <div className="font-bold text-green-400 mb-2">Lines 3/4: Nonce Guessing Loop</div>
          <div className="font-mono text-orange-300 mb-2">while true do</div>
          <p className="text-gray-300 mb-2">Guess a nonce and repeat until a valid solution is found.</p>
        </div>
        {/* Index Generation */}
        <div className="bg-neutral-800/80 rounded-lg p-4 mb-8">
          <div className="font-bold text-blue-400 mb-2">Lines 5/6: Index Generation</div>
          <div className="font-mono text-orange-300 mb-2">i = takeRight(8, H(m||nonce)) mod N</div>
          <div className="font-mono text-orange-300 mb-2">e = takeRight(31, H(i||h||M))</div>
          <p className="text-gray-300 mb-2">Use <span className="font-mono">genIndexes(e, m, nonce)</span> to get <span className="font-mono">k</span> indexes in <span className="font-mono">[0, N)</span>.</p>
          <img src="https://storage.googleapis.com/ergo-cms-media/unnamed_6_987fcaba80/unnamed_6_987fcaba80.png" alt="genIndexes function" className="rounded-lg border border-neutral-700 mb-2" />
          <div className="bg-neutral-900/80 rounded-lg p-4 mt-2">
            <div className="font-bold text-cyan-400 mb-1">Python Example (slicing and mod N)</div>
            <pre className="text-xs text-orange-300 overflow-x-auto"><code>{`for i in range(8):
    idxs[i << 2] = r[i] % np.uint32(ItemCount)
    idxs[(i << 2) + 1] = ((r[i] << np.uint32(8)) | (r[i + 1] >> np.uint32(24))) % np.uint32(ItemCount)
    idxs[(i << 2) + 2] = ((r[i] << np.uint32(16)) | (r[i + 1] >> np.uint32(16))) % np.uint32(ItemCount)
    idxs[(i << 2) + 3] = ((r[i] << np.uint32(24)) | (r[i + 1] >> np.uint32(8))) % np.uint32(ItemCount)`}</code></pre>
          </div>
        </div>
        {/* Sum and ASIC Resistance */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <div className="font-bold text-yellow-400 mb-2">Line 8: Sum of r Elements & ASIC Resistance</div>
          <p className="text-gray-300 mb-2">Retrieve <span className="font-mono">k (=32)</span> <span className="font-mono">r</span> values from <span className="font-mono">R</span> using the indexes, sum them. Storing <span className="font-mono">R</span> in memory is key for ASIC resistance: memory lookup is much faster than recomputing hashes.</p>
        </div>
        {/* Final Check */}
        <div className="bg-neutral-800/80 rounded-lg p-4 mb-8">
          <div className="font-bold text-green-400 mb-2">Line 9-12: Final Check</div>
          <p className="text-gray-300 mb-2">Hash the sum using Algorithm 3. If the result is below the target, the solution is valid and the miner is rewarded. Otherwise, repeat with a new nonce.</p>
        </div>
        {/* Further Resources */}
        <div className="bg-neutral-900/90 rounded-xl p-6 mb-8">
          <div className="font-bold text-cyan-400 mb-2">Further Resources</div>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li><a href="https://www.researchgate.net/publication/316904748_Equihash_Asymmetric_Proof-of-Work_Based_on_the_Generalized_Birthday_Problem" className="text-cyan-400 underline" target="_blank">Equihash: Asymmetric Proof-of-Work Based on the Generalized Birthday Problem</a></li>
            <li><a href="https://youtu.be/pPYcfLQGIHg" className="text-cyan-400 underline" target="_blank">Video explanation of Autolykos</a></li>
          </ul>
        </div>
      </TabsContent>

      {/* ASIC-Proof Tab */}
      <TabsContent value="ASIC-Proof">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            The Mechanics of ASIC Resistance in Autolykos v2
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            How Ergo's mining algorithm stays ahead of specialized hardware and keeps mining accessible.
          </p>
        </div>
        {/* Dynamic Memory-Hardness Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-400" /> Dynamic Memory-Hardness
          </h2>
          <p className="text-gray-300 mb-4">Autolykos v2 employs scheduled memory table adjustments, gradually increasing the minimum GPU vRAM required for mining. Any ASIC built for today's parameters will become inefficient after future updates.</p>
        </div>
        {/* Lessons from Ethereum Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Unpacking Memory-Hardness: Lessons from Ethereum
          </h2>
          <p className="text-gray-300 mb-4">Ethereum showed that 'memory-hard' algorithms can still be exploited by ASICs with on-board memory. Autolykos v2 takes a different approach:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Line 8:</span> Filters out machines lacking sufficient memory.</li>
            <li><span className="font-semibold text-orange-300">Hash Generation:</span> Without list R, ASICs need multiple cores to generate 31-byte hashes on the fly.</li>
            <li><span className="font-semibold text-orange-300">Single-Core Limitation:</span> Generating 32 r values per cycle is inefficient and sparse.</li>
            <li><span className="font-semibold text-orange-300">Computation:</span> At least 32 Blake2b256 instances are needed per nonce guess.</li>
            <li><span className="font-semibold text-orange-300">Cost & Efficiency:</span> Storing list R is much more efficient than recomputing hashes.</li>
          </ul>
        </div>
        {/* Ethash vs Autolykos Section */}
        <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" /> Comparative Analysis: Ethash vs. Autolykos
          </h2>
          <p className="text-gray-300 mb-4">Ethash uses N elements for hashing, while Autolykos uses N elements for fetching 32 r values by index. Autolykos is more memory-hard due to its higher reliance on memory bandwidth.</p>
        </div>
        {/* Optimizations Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-400" /> Potential Optimizations & Constraints
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Hashing Speed:</span> Faster Blake2b256 can fill list R quicker, but requires major hardware investment.</li>
            <li><span className="font-semibold text-orange-300">Memory Bandwidth:</span> Ethash ASICs may have minor read speed advantages, but this will diminish as GPUs improve.</li>
          </ul>
        </div>
        {/* Blake2b256 Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-orange-400" /> Blake2b256: Why It Matters
          </h2>
          <p className="text-gray-300 mb-4">Blake2b256 emphasizes addition operations over XOR, making it secure and computationally demanding. This limits ASIC advantage and increases algorithmic fairness.</p>
        </div>
        {/* FPGA Section */}
        <div className="bg-blue-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" /> FPGAs: Current Assessment & Outlook
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Efficiency:</span> FPGAs can reach up to 3Mh/W, double the best Nvidia GPUs.</li>
            <li><span className="font-semibold text-orange-300">Availability:</span> Chip shortages and lack of public miners make FPGAs non-competitive for now.</li>
            <li><span className="font-semibold text-orange-300">ROI:</span> Retail E300 ROI is ~52 years at current prices.</li>
          </ul>
        </div>
        {/* Community & SRAM Section */}
        <div className="bg-neutral-900/50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-green-400" /> Community Perspective & The SRAM Dilemma
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><span className="font-semibold text-orange-300">Decentralization:</span> FPGAs are efficient, but GPUs are more accessible, supporting decentralization.</li>
            <li><span className="font-semibold text-orange-300">SRAM:</span> Fast but low-density, not viable for Ergo mining as memory requirements grow.</li>
          </ul>
        </div>
        {/* Conclusion Section */}
        <div className="bg-orange-400/10 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" /> Conclusion
          </h2>
          <p className="text-gray-300 mb-4">Autolykos v2 is designed to be ASIC-resistant, secure, and decentralized by leveraging memory-hardness, dynamic parameters, and community-driven decisions.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 