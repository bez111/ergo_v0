"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Cpu, 
  Terminal, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  ExternalLink,
  ChevronRight,
  Database,
  Zap,
  Shield,
  Users,
  Globe,
  GitBranch,
  Brain,
  Download
} from "lucide-react";

export default function PiSetupPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Running an Ergo Node on Raspberry Pi
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Run an Ergo full node on Raspberry Pi - small, inexpensive, and meets the requirements. The Raspberry Pi is small, inexpensive, and meets the requirements to run an Ergo full node.
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
          <Brain className="w-6 h-6 text-orange-400" /> What is Raspberry Pi Node Setup?
        </h2>
        <p className="text-gray-300">
          The Raspberry Pi is small, inexpensive, and meets the requirements to run an Ergo full node. This guide provides step-by-step instructions for setting up and running an Ergo node on Raspberry Pi hardware.
        </p>
      </div>

      {/* Prerequisites Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Hardware Requirements
          </h3>
          <p className="text-gray-300 mb-4">
            Meeting these requirements is crucial for a stable experience on Raspberry Pi.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Pi4 with 4GB RAM or above is optimal
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              SSD with 64GB+ preferred for disk I/O
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Well-ventilated area for cooling
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" /> SWAP Configuration
          </h3>
          <p className="text-gray-300 mb-4">
            Increase swap space to ensure smooth setup process and prevent memory issues during sync.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Increase to 4096MB swap size
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Reboot after configuration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Disable screen-saver during sync
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Quick Setup
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
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" /> Performance Tips
          </h3>
          <p className="text-gray-300 mb-4">
            Optimize your Raspberry Pi setup for better performance and stability.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              WiFi has less issues than Ethernet
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Use ZRAM for memory optimization
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Set memory limit with -Xmx2g flag
            </li>
          </ul>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-cyan-400" /> How Raspberry Pi Node Setup Works
        </h2>
        <p className="text-gray-300 mb-4">
          The Raspberry Pi provides a cost-effective way to run an Ergo node. The setup process involves installing Java, configuring swap space, and managing resources appropriately for the ARM architecture.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <a
            href="https://github.com/ccgarant/ergo-full-node-raspi/tree/main/02-python-script-automated"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/80 rounded-lg p-4 block hover:bg-neutral-700/80 transition border border-neutral-700"
          >
            <h4 className="font-bold text-orange-400 mb-2">For Beginners</h4>
            <p className="text-gray-300 text-sm">
              Use the <span className="underline">one-click script</span> for automated setup with progress monitoring and API key configuration.<br/>
              <span className="text-cyan-400 underline">Open guide ↗</span>
            </p>
          </a>
          <a
            href="https://github.com/ccgarant/ergo-full-node-raspi/tree/main/01-manual-step-by-step"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/80 rounded-lg p-4 block hover:bg-neutral-700/80 transition border border-neutral-700"
          >
            <h4 className="font-bold text-orange-400 mb-2">For Advanced Users</h4>
            <p className="text-gray-300 text-sm">
              Manual setup with custom configuration options, swap optimization, and performance tuning.<br/>
              <span className="text-cyan-400 underline">Open guide ↗</span>
            </p>
          </a>
        </div>
      </div>

      {/* Preparation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-green-400" /> Preparation
        </h2>
        <p className="text-gray-300 mb-4">
          Install the Java JDK and configure your system for optimal performance.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">Install Java</h4>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`sudo apt update && sudo apt upgrade -y
sudo apt install default-jdk -y`}
          </pre>
        </div>
        
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-orange-400 mb-2">SWAP Configuration</h4>
          <p className="text-gray-300 mb-2">Increase the swap space your Pi has access to:</p>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto mb-2">
{`sudo dphys-swapfile swapoff
sudo nano /etc/dphys-swapfile`}
          </pre>
          <p className="text-gray-300 mb-2">Increase to <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">4096</code> (MB)</p>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto mb-2">
{`CONF_SWAPSIZE=4096`}
          </pre>
          <p className="text-gray-300 mb-2">Then re-enable the swap and reboot:</p>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`sudo dphys-swapfile setup
sudo dphys-swapfile swapon
sudo reboot now`}
          </pre>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-400" /> Quick Start
        </h2>
        <p className="text-gray-300 mb-4">
          This script will download the latest version of the node, prompt you to set an API key, and start the sync while displaying the progress in terminal.
        </p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`bash -c "$(curl -s https://node.phenotype.dev)"`}
          </pre>
        </div>
        <p className="text-gray-300 mb-4">
          If you'd prefer to get set up manually, here's a {" "}
          <a href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            step-by-step guide
          </a>. When ready to launch the node make sure to set a maximum limit of 2GB by using the <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">-Xmx2g</code> flag.
        </p>
      </div>

      {/* Configuration Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-400" /> Light Mode Configuration
        </h2>
        <p className="text-gray-300 mb-4">A basic config on mainnet should look like this:</p>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`ergo {
    node {
        mining = false
    }
}      
        
scorex {
    restApi {
        apiKeyHash = "$BLAKE_HASH"
    }
}`}
          </pre>
        </div>
        <p className="text-gray-300 mb-4">
          There are several configuration options that can be tweaked in your <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-300">ergo.conf</code> file. The {" "}
          <a href="https://github.com/ergoplatform/ergo/tree/master/src/main/resources" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            resource directory on the main GitHub repository
          </a>{" "}
          has examples of all available options.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Key Configuration Options</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><code className="bg-neutral-800 px-1 rounded text-cyan-300">skipV1TransactionsValidation</code>: Skip validation of transactions before block 417,792</li>
              <li><code className="bg-neutral-800 px-1 rounded text-cyan-300">blocksToKeep</code>: Number of blocks to keep with transactions and ADproofs</li>
              <li><code className="bg-neutral-800 px-1 rounded text-cyan-300">stateType</code>: Options <code className="bg-neutral-800 px-1 rounded text-cyan-300">utxo</code> and <code className="bg-neutral-800 px-1 rounded text-cyan-300">digest</code></li>
              <li><code className="bg-neutral-800 px-1 rounded text-cyan-300">maxConnections</code>: Maximum amount of peers to connect to</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">State Types</h4>
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3">
              <p className="text-yellow-200 text-sm">
                <code className="bg-neutral-800 px-1 rounded text-cyan-300">utxo</code>: Keep full utxo set, allows validation of arbitrary block and generate ADProofs (default)<br/>
                <code className="bg-neutral-800 px-1 rounded text-cyan-300">digest</code>: Keep state root hash only and validate transactions via ADProofs
              </p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800/50 rounded-lg p-4">
          <h4 className="font-bold text-green-400 mb-2">Launch Command</h4>
          <pre className="bg-neutral-800 rounded p-3 text-sm text-gray-300 overflow-x-auto">
{`java -jar -Xmx2g ergo.jar --mainnet -c ergo.conf`}
          </pre>
        </div>
      </div>

      {/* Tips and Tricks Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-purple-400" /> Tips and Tricks
        </h2>
        <p className="text-gray-300 mb-4">Apply these tips for optimal performance:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Network Connection</h4>
              <p className="text-gray-300 text-sm">WiFi has less issues than Ethernet for Raspberry Pi setups.</p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Cooling</h4>
              <p className="text-gray-300 text-sm">Make sure your Pi is in a well-vented area to prevent thermal throttling.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Memory Optimization</h4>
              <p className="text-gray-300 text-sm">
                <a href="https://ikarus.sg/using-zram-to-get-more-out-of-your-raspberry-pi/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Using ZRAM <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>{" "}for better memory management.
              </p>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-bold text-orange-400 mb-2">Display Settings</h4>
              <p className="text-gray-300 text-sm">Disable your screen-saver for the sync process to prevent interruptions.</p>
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
            <h4 className="font-bold text-red-400 mb-2">Memory Issues</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Ensure swap is properly configured</li>
              <li>• Check available memory with <code className="bg-neutral-800 px-1 rounded text-cyan-300">free -h</code></li>
              <li>• Use <code className="bg-neutral-800 px-1 rounded text-cyan-300">-Xmx2g</code> flag for Java</li>
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