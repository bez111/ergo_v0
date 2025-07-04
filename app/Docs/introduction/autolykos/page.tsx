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
        <TabsTrigger value="ASIC" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> ASIC
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
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-orange-400" /> Emission
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Difficulty Tab */}
      <TabsContent value="difficulty">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-400" /> Difficulty
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
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
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Verification
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Technical Tab */}
      <TabsContent value="technical">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Technical
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* ASIC Resistance Tab */}
      <TabsContent value="ASIC">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-400" /> ASIC Resistance
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 