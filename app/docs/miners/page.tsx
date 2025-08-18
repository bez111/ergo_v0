import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import {
  BookOpen,
  Cpu,
  Coins,
  Repeat,
  Code,
  FileText,
  Pickaxe,
  Calculator,
  Server,
  TrendingUp,
  Shield,
  Zap,
  Settings,
  HardDrive,
  Activity,
  BarChart3,
  Users,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Clock,
  Wallet,
  Network,
  Database,
  GitBranch,
  Terminal
} from "lucide-react";

export default function MinersResourcesPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-6 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="autolykos" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Autolykos
        </TabsTrigger>
        <TabsTrigger value="setup" className="flex items-center gap-2 justify-center">
          <Settings className="w-4 h-4" /> Setup
        </TabsTrigger>
        <TabsTrigger value="pools" className="flex items-center gap-2 justify-center">
          <Network className="w-4 h-4" /> Pools
        </TabsTrigger>
        <TabsTrigger value="emission" className="flex items-center gap-2 justify-center">
          <Coins className="w-4 h-4" /> Emission
        </TabsTrigger>
        <TabsTrigger value="resources" className="flex items-center gap-2 justify-center">
          <Database className="w-4 h-4" /> Resources
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Mining Ergo
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Ergo mining uses the Autolykos v2 algorithm, an ASIC-resistant, GPU-friendly proof-of-work system that ensures network decentralization and security.
          </p>
        </div>

        {/* Quick Start Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" /> Quick Start Mining
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-orange-400">1.</span> Choose Hardware
              </h3>
              <p className="text-gray-400 text-sm">GPU with 4GB+ VRAM (NVIDIA/AMD)</p>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-orange-400">2.</span> Select Software
              </h3>
              <p className="text-gray-400 text-sm">Download miner (lolMiner, T-Rex, etc.)</p>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="text-orange-400">3.</span> Join Pool
              </h3>
              <p className="text-gray-400 text-sm">Connect to mining pool or mine solo</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Network Hashrate</span>
            </div>
            <p className="text-2xl font-bold text-white">~150 TH/s</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Block Time</span>
            </div>
            <p className="text-2xl font-bold text-white">~2 minutes</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">Block Reward</span>
            </div>
            <p className="text-2xl font-bold text-white">27 ERG</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Difficulty Adjustment</span>
            </div>
            <p className="text-2xl font-bold text-white">Every block</p>
          </div>
        </div>

        {/* Why Mine Ergo */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Pickaxe className="w-5 h-5 text-orange-400" /> Why Mine Ergo?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Technical Advantages</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">ASIC-resistant algorithm maintains decentralization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">GPU-friendly with low power consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Fair launch with no premine or ICO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Adaptive difficulty adjustment every block</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Economic Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Storage rent provides additional miner revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Predictable emission schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">No pool dependency - solo mining viable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Growing ecosystem increases demand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Getting Started Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/Docs/miners/Miner-Tooling" className="group">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-orange-400">
                <Settings className="w-5 h-5" /> Mining Software
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 text-sm">Explore mining software, pools, and profitability calculators</p>
            </div>
          </Link>
          <Link href="/Docs/introduction/autolykos" className="group">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-orange-400/50 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-orange-400">
                <Shield className="w-5 h-5" /> Autolykos Algorithm
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 text-sm">Learn about Ergo's ASIC-resistant proof-of-work algorithm</p>
            </div>
          </Link>
        </div>
      </TabsContent>

      {/* Autolykos Tab */}
      <TabsContent value="autolykos">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Autolykos v2 Algorithm
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Autolykos is Ergo's memory-hard, ASIC-resistant proof-of-work algorithm designed to maintain network decentralization.
          </p>
        </div>

        {/* Algorithm Overview */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" /> Algorithm Characteristics
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Technical Specifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Memory-hard with 2GB+ requirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">k-sum problem based</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Blake2b256 hash function</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Non-outsourceable puzzle</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Security Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">ASIC resistance through memory bandwidth limitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Pool-resistant design (v1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Predictable power consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Fair mining distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Version History */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-cyan-400" /> Version History
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-orange-400 pl-4">
              <h3 className="font-semibold text-white">Autolykos v1 (2019-2021)</h3>
              <p className="text-gray-400 text-sm mt-1">Non-outsourceable, pool-resistant design requiring private key for mining</p>
            </div>
            <div className="border-l-2 border-green-400 pl-4">
              <h3 className="font-semibold text-white">Autolykos v2 (2021-present)</h3>
              <p className="text-gray-400 text-sm mt-1">Pool-friendly version enabling broader participation while maintaining ASIC resistance</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-400" /> Technical Resources
          </h2>
          <div className="space-y-3">
            <a href="https://ergoplatform.org/docs/ErgoPow.pdf" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Autolykos Technical Paper</span>
            </a>
            <a href="https://github.com/ergoplatform/ergo/tree/master/src/main/scala/org/ergoplatform/mining" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>Mining Implementation (Scala)</span>
            </a>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0037.md" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>EIP-37: Tweaking Difficulty Adjustment Algorithm</span>
            </a>
          </div>
        </div>
      </TabsContent>

      {/* Setup Tab */}
      <TabsContent value="setup">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Mining Setup Guide
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Step-by-step instructions to start mining Ergo with your GPU.
          </p>
        </div>

        {/* Hardware Requirements */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-blue-400" /> Hardware Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Minimum Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">GPU with 4GB+ VRAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <HardDrive className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">8GB RAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Server className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Stable internet connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Adequate power supply</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Recommended GPUs</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">NVIDIA: RTX 3060 Ti, RTX 3070, RTX 4070</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">AMD: RX 6700 XT, RX 6800, RX 7900 XT</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <span className="text-gray-300 text-sm">Older: GTX 1660 Super, RX 580 8GB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mining Software */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-400" /> Mining Software
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">lolMiner</h3>
              <p className="text-gray-400 text-sm mb-3">Popular, efficient, AMD/NVIDIA</p>
              <a href="https://github.com/Lolliedieb/lolMiner-releases" target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                Download <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">T-Rex Miner</h3>
              <p className="text-gray-400 text-sm mb-3">NVIDIA optimized, stable</p>
              <a href="https://github.com/trexminer/T-Rex" target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                Download <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">NBMiner</h3>
              <p className="text-gray-400 text-sm mb-3">Dual mining support</p>
              <a href="https://github.com/NebuTech/NBMiner" target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                Download <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Configuration Example */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-cyan-400" /> Configuration Example
          </h2>
          <div className="bg-black rounded-lg p-4 font-mono text-sm">
            <p className="text-green-400"># lolMiner example for Herominers pool</p>
            <p className="text-gray-300">lolMiner.exe --algo AUTOLYKOS2 \</p>
            <p className="text-gray-300">  --pool ergo.herominers.com:1180 \</p>
            <p className="text-gray-300">  --user YOUR_WALLET_ADDRESS.WORKER_NAME</p>
          </div>
        </div>
      </TabsContent>

      {/* Pools Tab */}
      <TabsContent value="pools">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Mining Pools
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Join a mining pool to combine hashpower with other miners and receive more consistent rewards.
          </p>
        </div>

        {/* Pool Selection Guide */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" /> Choosing a Pool
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt; 2%</div>
              <p className="text-gray-400 text-sm">Recommended pool fee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">PPLNS</div>
              <p className="text-gray-400 text-sm">Fair reward system</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt; 30%</div>
              <p className="text-gray-400 text-sm">Max network hashrate</p>
            </div>
          </div>
        </div>

        {/* Popular Pools */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-orange-400" /> Popular Mining Pools
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">Herominers</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">1% fee</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Reliable, global servers, detailed stats</p>
              <a href="https://ergo.herominers.com" target="_blank" rel="noopener noreferrer" 
                 className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
                Visit Pool <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">2Miners</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">1% fee</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Large pool, PPLNS & SOLO options</p>
              <a href="https://2miners.com/erg-mining-pool" target="_blank" rel="noopener noreferrer" 
                 className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
                Visit Pool <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">WoolyPooly</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">0.9% fee</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Low fees, good support, PPLNS</p>
              <a href="https://woolypooly.com/en/coin/erg" target="_blank" rel="noopener noreferrer" 
                 className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
                Visit Pool <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="border border-neutral-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-white">F2Pool</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">3% fee</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">Large global pool, PPS+ payment</p>
              <a href="https://www.f2pool.com/coin/ergo" target="_blank" rel="noopener noreferrer" 
                 className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-1">
                Visit Pool <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Solo Mining */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Solo Mining
          </h2>
          <p className="text-gray-400 mb-4">
            Solo mining is viable for miners with significant hashpower. You'll need to run a full Ergo node.
          </p>
          <div className="bg-black rounded-lg p-4 font-mono text-sm">
            <p className="text-green-400"># Configure your node for mining</p>
            <p className="text-gray-300">ergo.node.mining = true</p>
            <p className="text-gray-300">ergo.node.miningPubKeyHex = "YOUR_PUBLIC_KEY"</p>
          </div>
        </div>
      </TabsContent>

      {/* Emission Tab */}
      <TabsContent value="emission">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Ergo Emission Schedule</h1>
          <p className="text-lg text-gray-400 mb-6">
            Ergo's journey, which began in 2017, saw the successful launch of its mainnet in July 2019.
          </p>

          {/* Admonition: Ergo-First-Year-Token */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Ergo-First-Year-Token</h3>
            <p className="text-gray-400 text-sm">
              Prior to the mainnet, '<span className="italic">Ergo-First-Year-Token</span>' (EFYT) was in circulation and swapped with the treasury on launch. For comprehensive insights into EFYT, including its tokenomics and distribution strategy, please visit
              {" "}
              <a href="efyt.md" className="text-orange-400 hover:text-orange-300 underline-offset-4 hover:underline">this page</a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Total Supply and Allocation</h2>
          <p className="text-gray-300 mb-4">
            Ergo's total supply is capped at <span className="font-semibold">97,739,925 ERGs</span> and distributed as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>
              <span className="font-semibold">Genesis State Inclusions</span>: Includes 1 ERG for proof-of-no-premine and 4,330,791.5 ERGs for the
              {" "}
              <a href="https://explorer.ergoplatform.com/en/addresses/4L1ktFSzm3SH1UioDuUf5hyaraHird4D2dEACwQ1qHGjSKtA6KaNvSzRCZXZGf9jkfNAEC1SrYaZmCuvb2BKiXk5zW9xuvrXFT7FdNe2KqbymiZvo5UQLAm5jQY8ZBRhTZ4AFtZa1UF5nd4aofwPiL7YkJuyiL5hDHMZL1ZnyL746tHmRYMjAhCgE7d698dRhkdSeVy" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Foundation Treasury</a>.
            </li>
            <li>
              <span className="font-semibold">Miner Rewards</span>: 93,409,132 ERGs, designated for 2,080,800 blocks, as per the emission schedule (
              <a href="https://explorer.ergoplatform.com/en/addresses/2Z4YBkDsDvQj8BX7xiySFewjitqp2ge9c99jfes2whbtKitZTxdBYqbrVZUvZvKv6aqn9by4kp3LE1c26LCyosFnVnm6b6U1JYvWpYmL2ZnixJbXLjWAWuBThV1D6dLpqZJYQHYDznJCk49g5TUiS4q8khpag2aNmHwREV7JSsypHdHLgJT7MGaw51aJfNubyzSKxZ4AJXFS27EfXwyCLzW1K6GVqwkJtCoPvrcLqmqwacAWJPkmh78nke9H4oT88XmSbRt2n9aWZjosiZCafZ4osUDxmZcc5QVEeTWn8drSraY3eFKe8Mu9MSCcVU" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Miner Reward Box</a>).
            </li>
          </ul>
          <p className="text-gray-300 mb-8">
            The Treasury's funds were governed by a smart contract that released ERGs gradually over the first 2.5 years, without exceeding 10% of the circulating supply.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Ergo Foundation</h2>
          <p className="text-gray-300 mb-8">
            The Ergo Foundation is dedicated to protocol development, ecosystem growth, promoting the use of Ergo for social good, supporting decentralized infrastructure, and upholding privacy rights. The Foundation's Treasury, which received 4.43% of the total ERG emission, is utilized to support a wide range of initiatives. For more detailed information, refer to the
            {" "}
            <a href="ergo-foundation-2022.md" className="text-orange-400 hover:text-orange-300">transparency report</a>.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Mining and Emission Duration</h2>
          <p className="text-gray-300 mb-6">
            Ergo's block reward decreases by 3 ERG per block every quarter until 2026 and stabilizes at 3 ERG per block thereafter. The mining process is projected to continue until around 2045, extended from the original 2027 timeline with the passage of the
            {" "}
            <a href="eip27.md" className="text-orange-400 hover:text-orange-300">EIP27</a>
            {" "}
            soft-fork. For a visual overview, see the emission schedule on
            {" "}
            <a href="https://ergo.watch/emission" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">ergo.watch</a>.
          </p>

          {/* Details-like note */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Sustaining Ergo Mining: Revenue Streams Beyond Emissions</h3>
            <p className="text-gray-400 text-sm">
              As Ergo's emission schedule is set to conclude around the year 2045, questions naturally arise about the mechanisms that will incentivize miners to continue securing the network. Fortunately, Ergo's architecture includes support for a variety of revenue streams designed to promote both network growth and long-term sustainability. See
              {" "}
              <a href="revenue.md" className="text-orange-400 hover:text-orange-300">this page</a>
              {" "}
              for more information.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Unique Aspects of Ergo's Emission</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Proof of No Premine</h3>
          <p className="text-gray-300 mb-6">
            Ergo includes Bitcoin and Ethereum block hashes and headlines from The Guardian, Vedomosti, and Xinhua in its pre-genesis state for verification purposes. This is detailed in the
            {" "}
            <a href="https://github.com/ergoplatform/ergo/blob/1935c95560a30b19cdb52c1a291e8a389ba63c97/src/main/resources/mainnet.conf#L11" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">mainnet.conf</a>
            {" "}
            file.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Verification Process</h3>
          <p className="text-gray-300 mb-6">
            Ergo's emission logic underwent rigorous verification using the Stainless formal verification tool, ensuring accuracy and validity. Details can be found in
            {" "}
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/580/files#diff-18d3c92c2086c9ddd9b462191b55cf5e8438a29b0e786c6ab541f7def8330808" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">this code section</a>.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">No Out-of-Thin-Air Emission</h3>
          <p className="text-gray-300 mb-10">
            Ergo's "coinbase" transaction, the first transaction in each block, does not create new tokens out of thin air. This policy ensures traceability of every coin or token from a legitimate source, enhancing the integrity and scarcity of Ergo's native currency, and contributing to economic stability.
          </p>

          <h1 className="text-2xl font-bold text-white mb-4">Ergo-First-Year-Token (EFYT)</h1>
          <p className="text-gray-300 mb-6">
            EFYT was systematically airdropped and then listed on the Waves DEX in May 2017, with an initial supply of 100,000 tokens. This launch aimed to build an early community around the platform and raise capital for development and marketing before launching the mainnet.
          </p>

          {/* Warning Admonition */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">
            <h4 className="text-base font-semibold text-yellow-400 mb-1">EFYT vs ERG</h4>
            <p className="text-gray-300 text-sm">
              EFYT, which was issued on the Waves Platform, is a separate entity from ERG, the native token of the Ergo blockchain. ERG became available after the launch of the Ergo mainnet and could only be obtained through mining. For more information on Ergo's emission see
              {" "}
              <a href="emission.md" className="text-orange-400 hover:text-orange-300">this page</a>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">Distribution and Allocation</h2>

          <h3 className="text-lg font-semibold text-white mb-2">Total Supply</h3>
          <p className="text-gray-300 mb-3">
            The maximum supply of EFYT is capped at 1,970,945.0, mirroring 10% of Ergo's first-year token emission which corresponds to the amount of ERGs the
            {" "}
            <a href="ergo-foundation-2022.md" className="text-orange-400 hover:text-orange-300">Ergo Foundation</a>
            {" "}
            recieved in this same period.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li>
              <a href="http://pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">EFYT token distribution on Pywaves</a>
            </li>
            <li>
              <a href="https://www.livecoinwatch.com/price/ErgoFirstYearToken-EFYT" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">EFYT market and price tracking on livecoinwatch</a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white mb-2">Redemption Process</h3>
          <p className="text-gray-300 mb-6">
            EFYT holders could exchange their tokens for ERG at a 1:1 rate via the Waves gateway. This option was available until July 1st, 2021, with unclaimed EFYT tokens totaling 188,330 by the end of the offer. Overall, the Treasury exchanged 1,782,615 ERG for EFYT.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Compensation and Expenses</h3>
          <p className="text-gray-300 mb-6">
            Initially, EFYT was used for team and external contributor compensation, and operational costs like server and integration expenses. In 2018, approximately 150,000 EFYT was allocated for compensation for developers.
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Investors</h3>
          <p className="text-gray-300 mb-8">
            The project avoided a traditional ICO, opting for minimal private investment and focusing on accredited angel investors to align with regulatory standards. In total, 500,000 EFYT was sold to {" "}
            <a href="https://t.me/ergoplatform/3354" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">three private investors</a>.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <a href="https://t.me/ergoplatform/3354" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Kushti discussing EFYT in 2018</a>
            </li>
            <li>
              The team's hot wallet: {" "}
              <a href="https://wavesexplorer.com/assets/3P3yFxqAeFGnTDvCjeCEyMnMZevJxurKZne" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">3P3yFxqAeFGnTDvCjeCEyMnMZevJxurKZne</a>
            </li>
            <li>
              Background on EFYT: {" "}
              <a href="https://ergoplatform.org/en/blog/2019_05_20-curve/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">The Ergo Emission Schedule (2019)</a>
            </li>
          </ul>
        </div>
      </TabsContent>

      {/* Adaptive Difficulty Tab */}
      <TabsContent value="difficulty">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Repeat className="w-6 h-6 text-blue-400" /> Adaptive Difficulty
          </h2>
          <p className="text-gray-400">Content coming soon...</p>
        </div>
      </TabsContent>

      {/* Resources Tab */}
      <TabsContent value="resources">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Mining Resources
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            Essential tools, documentation, and community resources for Ergo miners.
          </p>
        </div>

        {/* Tools & Calculators */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-purple-400" /> Tools & Calculators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://whattomine.com/coins/340-erg-autolykos2" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors">
              <div>
                <h3 className="font-semibold text-white">WhatToMine</h3>
                <p className="text-gray-400 text-sm">Profitability calculator</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a href="https://miningpoolstats.stream/ergo" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors">
              <div>
                <h3 className="font-semibold text-white">MiningPoolStats</h3>
                <p className="text-gray-400 text-sm">Pool statistics & comparison</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a href="https://ergo.watch" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors">
              <div>
                <h3 className="font-semibold text-white">Ergo.Watch</h3>
                <p className="text-gray-400 text-sm">Network statistics</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
            <a href="https://explorer.ergoplatform.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-800/50 transition-colors">
              <div>
                <h3 className="font-semibold text-white">Ergo Explorer</h3>
                <p className="text-gray-400 text-sm">Blockchain explorer</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-400" /> Documentation
          </h2>
          <div className="space-y-3">
            <a href="https://ergoplatform.org/docs/ErgoPow.pdf" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Autolykos Technical Paper</span>
            </a>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0027.md" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <FileText className="w-4 h-4" />
              <span>EIP-27: Emission Retargeting</span>
            </a>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0037.md" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <FileText className="w-4 h-4" />
              <span>EIP-37: Difficulty Adjustment</span>
            </a>
            <a href="https://github.com/ergoplatform/ergo/tree/master/src/main/scala/org/ergoplatform/mining" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-orange-300 hover:text-orange-400 transition-colors">
              <Code className="w-4 h-4" />
              <span>Mining Implementation Source Code</span>
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> Mining Community
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://t.me/ergo_mining" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors">
              <span className="text-white font-semibold">Telegram Mining</span>
            </a>
            <a href="https://discord.gg/ergo-platform" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors">
              <span className="text-white font-semibold">Discord #mining</span>
            </a>
            <a href="https://www.ergoforum.org/c/mining/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors">
              <span className="text-white font-semibold">ErgoForum</span>
            </a>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 