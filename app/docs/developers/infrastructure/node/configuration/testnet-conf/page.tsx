"use client";

import { 
  AlertTriangle, 
  Info, 
  Network, 
  Server, 
  Database, 
  Settings, 
  Code, 
  FileText, 
  Globe, 
  Wallet,
  Vote,
  Shield,
  Cpu,
  Clock,
  Activity,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function TestnetConfPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Testnet Configuration
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          This document describes the main sections and fields of the <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/testnet.conf" className="text-blue-400 hover:text-blue-300">Ergo node configuration file for the Test Network</a>. This configuration serves the need for non-breaking changes testing.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <Link
            href="/docs/developers/infrastructure/node/configuration/devnet-conf"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <Settings className="w-5 h-5 mr-2" /> Devnet Configuration
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/testnet.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Ergo Configuration Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Ergo Configuration Section</h2>
          </div>

          {/* Network Type */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-400" /> Network Type
            </h3>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-green-400 font-mono">ergo.networkType = "testnet"</code>
            </div>
            <p className="text-gray-300 text-sm">
              This setting defines the network type. For testing purposes, it's set to "testnet".
            </p>
          </div>

          {/* Node Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-orange-400" /> Node Configuration
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ergo.node</code> This section contains parameters related to the node settings.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">headerChainDiff</h4>
                <p className="text-gray-300 text-sm">Defines the maximum allowed number of blocks difference between the current local chain and the network. If the difference exceeds this value, the node is considered unsynchronized.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">internalMinersCount</h4>
                <p className="text-gray-300 text-sm">Sets the number of internal miner threads. This helps reproduce real-world scenarios like having multiple GPU miners.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">internalMinerPollingInterval</h4>
                <p className="text-gray-300 text-sm">The polling interval for GPU miners.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">maxTransactionCost</h4>
                <p className="text-gray-300 text-sm">Sets the maximum cost for a transaction to be propagated across the network.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">adProofsSuffixLength</h4>
                <p className="text-gray-300 text-sm">Determines the size of the suffix for dumping ADProofs during bootstrapping.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-400 mb-2">checkpoint</h4>
                <p className="text-gray-300 text-sm">A mandatory checkpoint introduced due to some violations in the PaiNet.</p>
              </div>
            </div>
          </div>

          {/* Chain Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-400" /> Chain Configuration
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ergo.chain</code> This section includes parameters related to the blockchain.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">protocolVersion</h4>
                <p className="text-gray-300 text-sm">Sets the protocol version.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">addressPrefix</h4>
                <p className="text-gray-300 text-sm">The prefix for network addresses. Reserved values include 0 (for mainnet) and 16 (for testnet).</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">initialDifficultyHex</h4>
                <p className="text-gray-300 text-sm">Sets the initial difficulty for the network.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">epochLength</h4>
                <p className="text-gray-300 text-sm">Defines the length of an epoch in difficulty recalculation. A value of 1 means difficulty is recalculated every block.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">blockInterval</h4>
                <p className="text-gray-300 text-sm">The desired time interval between blocks.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">monetary.minerRewardDelay</h4>
                <p className="text-gray-300 text-sm">Sets the delay between when a block is mined and when the reward can be spent.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">voting</h4>
                <p className="text-gray-300 text-sm">Contains parameters related to the voting mechanism, such as the length of a voting epoch, the number of epochs for soft-fork voting, and activation epochs for a soft-fork after acceptance.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">reemission</h4>
                <p className="text-gray-300 text-sm">Includes parameters related to the emission process.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-400 mb-2">genesisStateDigestHex</h4>
                <p className="text-gray-300 text-sm">The Base16 representation of the genesis state roothash.</p>
              </div>
            </div>
          </div>

          {/* Voting Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Vote className="w-5 h-5 text-red-400" /> Voting Configuration
            </h3>
            <p className="text-gray-300 text-sm">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ergo.voting</code> This section allows configuration of voting parameters.
            </p>
          </div>

          {/* Wallet Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-yellow-400" /> Wallet Configuration
            </h3>
            <p className="text-gray-300 text-sm">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">ergo.wallet.secretStorage.secretDir</code> Sets the directory for the wallet's secret storage.
            </p>
          </div>
        </div>

        {/* Scorex Configuration Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Scorex Configuration Section</h2>
          </div>

          {/* Network Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Network className="w-5 h-5 text-green-400" /> Network Configuration
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">scorex.network</code> This section includes parameters related to the network settings.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">magicBytes</h4>
                <p className="text-gray-300 text-sm">A unique identifier for the network protocol.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">bindAddress</h4>
                <p className="text-gray-300 text-sm">Sets the IP address and port number where the node will accept incoming connections. By default, it listens on all available network adapters.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">nodeName</h4>
                <p className="text-gray-300 text-sm">Assigns a visible name to your node for other participants in the P2P network.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">knownPeers</h4>
                <p className="text-gray-300 text-sm">A list of bootstrap nodes that your node will connect to upon initialization.</p>
              </div>
            </div>
          </div>

          {/* REST API Configuration */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" /> REST API Configuration
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">scorex.restApi</code> This section allows the setting of the node's REST API parameters.
            </p>
            
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">apiKeyHash</h4>
              <p className="text-gray-300 text-sm mb-4">
                The hash of your API key. The API key protects the invocation of critical API methods.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    <strong className="text-yellow-400">Security Note:</strong> Ensure to secure the transmission of the API key as it is transmitted as plain text in the HTTP header and can be intercepted during network transit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Info className="w-6 h-6 text-emerald-400 mr-3" />
            <h2 className="text-2xl font-semibold text-emerald-400">Configuration Summary</h2>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Network Type:</span>
                <code className="text-green-400">testnet</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Purpose:</span>
                <span className="text-green-400">Non-breaking changes testing</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Main Sections:</span>
                <span className="text-green-400">Ergo & Scorex</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Node Features:</span>
                <span className="text-green-400">✓ Internal mining</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chain Features:</span>
                <span className="text-green-400">✓ Voting mechanism</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">API Security:</span>
                <span className="text-yellow-400">⚠ API key protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reference Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Reference</h2>
          </div>
          <p className="text-gray-300 text-sm">
            Configuration file: <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/testnet.conf" className="text-blue-400 hover:text-blue-300">testnet.conf</a>
          </p>
        </div>
      </div>
    </div>
  );
} 