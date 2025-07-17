"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Smartphone, 
  Terminal, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  ExternalLink,
  ChevronRight,
  Cpu,
  Database,
  Zap,
  Shield,
  Users,
  Globe,
  GitBranch,
  Brain
} from "lucide-react";

export default function AndroidSetupPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Running an Ergo Node on Android
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Running an Ergo node directly on an Android device is possible and allows users without desktop access to participate more fully in the network, potentially using their own node for mobile wallets or dApps.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/Docs/developers/infrastructure/node/setup"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Setup
          </Link>
          <a
            href="https://github.com/ccgarant/ergo-full-node-raspi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Comprehensive Guide
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-orange-400" /> What is Android Node Setup?
        </h2>
        <p className="text-gray-300">
          This guide provides an overview of the methods available using the Termux terminal emulator. There are two primary approaches, depending on your needs and technical comfort level.
        </p>
      </div>

      {/* Methods Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Direct Termux Setup
          </h3>
          <p className="text-gray-300 mb-4">
            Recommended for most users. Runs the node directly within Termux, best suited for the resource-efficient <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">stateType="digest"</code> mode.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Simpler setup process
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Lower resource usage
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Recommended for beginners
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" /> Arch Linux via proot
          </h3>
          <p className="text-gray-300 mb-4">
            Advanced method required if you need to run <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">stateType="utxo"</code> or encounter specific database compatibility issues.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Full UTXO mode support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              RocksDB compatibility
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              More complex setup
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Device Requirements
          </h3>
          <p className="text-gray-300 mb-4">
            Meeting these requirements is crucial for a stable experience on Android devices.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Android 7.0+ required
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Minimum 1-2GB RAM
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              5-10GB storage (digest mode)
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" /> Quick Setup
          </h3>
          <p className="text-gray-300 mb-4">
            One-click script for easy setup that downloads the latest version and prompts for API key configuration.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Automated installation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Progress monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              API key setup
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How Android Node Setup Works
        </h2>
        <p className="text-gray-300 mb-4">
          Termux provides a Linux environment on Android, allowing you to run the Ergo node directly on your mobile device. The setup process involves installing Java, configuring the node, and managing resources appropriately.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <a 
            href="https://github.com/ccgarant/ergo-full-node-raspi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-orange-400 mb-2">For Beginners</h4>
            <p className="text-gray-300 text-sm">Use the one-click script or direct Termux setup for digest mode with minimal resource usage.</p>
          </a>
          <a 
            href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-orange-400 mb-2">For Advanced Users</h4>
            <p className="text-gray-300 text-sm">Set up Arch Linux via proot for full UTXO mode with RocksDB support and complete node functionality.</p>
          </a>
        </div>
      </div>

      {/* Storage Requirements Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-green-400" /> Storage Requirements
        </h2>
        <p className="text-gray-300 mb-4">
          Understanding storage requirements is crucial for choosing the right setup method for your device.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Digest Mode</h4>
            <p className="text-gray-300 text-sm mb-2">Typically settles around ~3GB after sync with bootstrapping and moderate <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">blocksToKeep</code>.</p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Initial: 5-10GB recommended</li>
              <li>• After sync: ~3GB</li>
              <li>• Suitable for most devices</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">UTXO Mode</h4>
            <p className="text-gray-300 text-sm mb-2">Requires significantly more storage (tens of GBs) due to storing the UTXO set state.</p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• 30GB+ depending on pruning</li>
              <li>• Full archival mode impractical</li>
              <li>• Requires high-end devices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tips and Tricks Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-purple-400" /> Tips and Tricks
        </h2>
        <p className="text-gray-300 mb-4">Apply to both methods for optimal performance:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Keyboard</h4>
              <p className="text-gray-300 text-sm">Consider installing Hacker's Keyboard from F-Droid if your default keyboard doesn't work well in Termux.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Background Operation</h4>
              <p className="text-gray-300 text-sm">Install tmux to run the node in a background session that persists even if you close Termux.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Port Forwarding</h4>
              <p className="text-gray-300 text-sm">Configure port forwarding for TCP port 9030 on your router to make your node reachable by external peers.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Wallet Connection</h4>
              <p className="text-gray-300 text-sm">Change Ergo Wallet App node setting to <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">http://127.0.0.1:9053</code> to connect to your local node.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400" /> Troubleshooting
        </h2>
        <p className="text-gray-300 mb-4">If the node fails to start, check these common issues:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-red-400 mb-2">Java Issues</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Correct Java version installed</li>
              <li>• Check with <code className="bg-neutral-800 px-1 rounded text-cyan-300">java --version</code></li>
              <li>• Sufficient memory via <code className="bg-neutral-800 px-1 rounded text-cyan-300">-Xmx</code></li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-red-400 mb-2">Configuration Issues</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Correct Ergo node JAR file</li>
              <li>• Syntax errors in <code className="bg-neutral-800 px-1 rounded text-cyan-300">ergo.conf</code></li>
              <li>• Sufficient storage space</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <a href="https://github.com/ccgarant/ergo-full-node-raspi" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Comprehensive Guide</h4>
          <p className="text-gray-300 text-sm">Step-by-step tutorial for running an Ergo full node on a headless Raspberry Pi.</p>
        </a>
        <a href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Manual Setup</h4>
          <p className="text-gray-300 text-sm">Official step-by-step guide for setting up a full node manually.</p>
        </a>
        <a href="https://youtu.be/yDqhlgz0244" target="_blank" rel="noopener noreferrer"
          className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition">
          <h4 className="font-bold text-orange-400 mb-2">Video Tutorial</h4>
          <p className="text-gray-300 text-sm">Visual guide for setting up an Ergo Node on a Raspberry Pi.</p>
        </a>
      </div>
    </>
  );
} 