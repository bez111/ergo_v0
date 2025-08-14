"use client";

import React from 'react';
import { 
  Download,
  Monitor,
  Zap,
  Users,
  Server,
  Network,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Shield,
  BookOpen,
  Target,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

export default function MiningGuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Mining Guides
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Complete step-by-step guides for mining Ergo using Autolykos2. From choosing software to setting up pools, everything you need to start mining efficiently and maximize your returns.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" /> Get Started
          </Link>
          <Link
            href="/Docs/introduction/autolykos"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <BookOpen className="w-5 h-5 mr-2" /> Learn Autolykos
          </Link>
        </div>
      </div>

      {/* Mining Overview */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-orange-400" /> Mining Ergo Overview
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo uses the Autolykos2 algorithm, which is ASIC-resistant and designed for GPU mining. This ensures a more decentralized mining ecosystem while maintaining network security and efficiency.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-orange-400 mb-2">Key Benefits:</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>• <strong>ASIC-Resistant:</strong> Fair mining opportunities for GPU miners</li>
            <li>• <strong>Energy Efficient:</strong> Optimized algorithm for reduced power consumption</li>
            <li>• <strong>Memory-Hard:</strong> Requires significant GPU memory for security</li>
            <li>• <strong>Decentralized:</strong> Prevents mining centralization</li>
          </ul>
        </div>
      </div>

      {/* Essential Guides Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        
        {/* Software Guide */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-400" /> Mining Software
          </h3>
          <p className="text-gray-300 mb-4">
            Choose the right mining software for your setup. Comprehensive comparison of miners including performance benchmarks and setup instructions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              T-Rex, TeamRedMiner, NBMiner support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Performance optimization tips
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Configuration examples
            </li>
          </ul>
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Explore Software Options <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Operating Systems */}
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-green-400" /> Operating Systems
          </h3>
          <p className="text-gray-300 mb-4">
            Setup guides for Windows, Linux, and dedicated mining operating systems. Choose the platform that best suits your mining operation.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              HiveOS, Minerstat, RaveOS guides
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Windows & Linux installations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Dedicated mining rig setups
            </li>
          </ul>
          <Link
            href="/Docs/miners/mining-guides/operating-systems"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            Setup Your System <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>

      {/* Advanced Mining Topics */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-cyan-400" /> Advanced Mining
        </h2>
        <p className="text-gray-300 mb-6">
          Take your mining operation to the next level with optimization techniques, hardware tuning, and infrastructure management.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> GPU Optimization
            </h4>
            <p className="text-gray-300 text-sm mb-2">Maximize performance through overclocking and power management</p>
            <Link
              href="/Docs/miners/mining-guides/overclocking"
              className="text-yellow-400 hover:text-yellow-300 text-sm inline-flex items-center gap-1"
            >
              Learn Overclocking <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" /> Pool Mining
            </h4>
            <p className="text-gray-300 text-sm mb-2">Join mining pools for steady rewards and reduced variance</p>
            <Link
              href="/Docs/miners/mining-guides/pools"
              className="text-purple-400 hover:text-purple-300 text-sm inline-flex items-center gap-1"
            >
              Find Pools <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Solo & Pool Operations */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        
        {/* Solo Mining */}
        <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Server className="w-5 h-5 text-red-400" /> Solo Mining
          </h3>
          <p className="text-gray-300 mb-4">
            Mine independently with your own node setup. Complete control over your mining operation with potential for full block rewards.
          </p>
          <div className="space-y-2 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h5 className="font-semibold text-red-400 text-sm">Requirements:</h5>
              <p className="text-gray-300 text-xs">High hashrate, technical knowledge, node maintenance</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h5 className="font-semibold text-green-400 text-sm">Benefits:</h5>
              <p className="text-gray-300 text-xs">Full block rewards, complete control, no pool fees</p>
            </div>
          </div>
          <Link
            href="/Docs/miners/mining-guides/solo-mining"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
          >
            Setup Solo Mining <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Host a Pool */}
        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" /> Host a Pool
          </h3>
          <p className="text-gray-300 mb-4">
            Set up and run your own mining pool infrastructure. Provide mining services to the community while earning pool fees.
          </p>
          <div className="space-y-2 mb-4">
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h5 className="font-semibold text-cyan-400 text-sm">Infrastructure:</h5>
              <p className="text-gray-300 text-xs">Dedicated servers, database management, monitoring</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <h5 className="font-semibold text-green-400 text-sm">Revenue:</h5>
              <p className="text-gray-300 text-xs">Pool fees, community building, network support</p>
            </div>
          </div>
          <Link
            href="/Docs/miners/mining-guides/host-a-pool"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Build Your Pool <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Quick Start</h3>
        </div>
        <p className="text-gray-300 mb-4">
          New to Ergo mining? Follow our recommended path to get started quickly and safely with minimal technical complexity.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-neutral-800/30 rounded-lg p-3">
            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <span className="text-orange-400 font-semibold">Choose Software:</span>
              <span className="text-gray-300 ml-2">Start with T-Rex or TeamRedMiner</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-neutral-800/30 rounded-lg p-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <span className="text-blue-400 font-semibold">Join a Pool:</span>
              <span className="text-gray-300 ml-2">Begin with established pools for steady rewards</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-neutral-800/30 rounded-lg p-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <span className="text-green-400 font-semibold">Optimize Setup:</span>
              <span className="text-gray-300 ml-2">Fine-tune for maximum efficiency</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/Docs/miners/mining-guides/software"
            className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-300 hover:bg-orange-500/30 transition-colors text-sm"
          >
            Start Mining <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/Docs/miners"
            className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-colors text-sm"
          >
            Back to Miners <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
} 