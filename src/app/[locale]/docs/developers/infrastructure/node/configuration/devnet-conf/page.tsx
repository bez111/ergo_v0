"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

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
import { Link } from "@/i18n/navigation";

export default function DevnetConfPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Node Devnet Configuration Documentation
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          This document describes the main sections and fields of the <a href="https://raw.githubusercontent.com/ergoplatform/ergo/master/src/main/resources/devnet.conf" className="text-blue-400 hover:text-blue-300">Ergo node configuration file for the Development Network</a>. This configuration serves the need for protocol-breaking changes testing.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <Link
            href="/docs/developers/infrastructure/node/configuration/testnet-conf"
            className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition-transform hover:scale-105"
          >
            <Settings className="w-5 h-5 mr-2" /> Testnet Configuration
          </Link>
          <a
            href="https://raw.githubusercontent.com/ergoplatform/ergo/master/src/main/resources/devnet.conf"
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
              <code className="text-green-400 font-mono">ergo.networkType = "devnet"</code>
            </div>
            <p className="text-gray-300 text-sm">
              This setting defines the network type. For development purposes, it's set to "devnet".
            </p>
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
                <p className="text-gray-300 text-sm">The prefix for network addresses. Reserved values include 0 (for mainnet), 16 (for testnet), and 32 (for devnet).</p>
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
                <h4 className="font-semibold text-purple-400 mb-2">genesisStateDigestHex</h4>
                <p className="text-gray-300 text-sm">The Base16 representation of the genesis state roothash.</p>
              </div>
            </div>
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
              <code className="bg-neutral-800 px-1 py-0.5 rounded text-cyan-400">scorex.restApi.apiKeyHash</code> This parameter represents the hash of your API key. In the devnet configuration, it is set to <code className="text-red-400">null</code>.
            </p>
            
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">apiKeyHash</h4>
              <p className="text-gray-300 text-sm mb-4">
                The API key protects the invocation of critical API methods.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    <strong className="text-yellow-400">Security Note:</strong> Even though it is set to <code className="text-red-400">null</code> for development, you must ensure to secure the transmission of the API key in a real-world scenario, as it is transmitted as plain text in the HTTP header and can be intercepted during network transit!
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
                <code className="text-green-400">devnet</code>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Purpose:</span>
                <span className="text-green-400">Protocol-breaking changes testing</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Main Sections:</span>
                <span className="text-green-400">Ergo & Scorex</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Address Prefix:</span>
                <span className="text-green-400">32 (devnet)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chain Features:</span>
                <span className="text-green-400">✓ Voting mechanism</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">API Security:</span>
                <span className="text-red-400">⚠ null (development)</span>
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
            Configuration file: <a href="https://raw.githubusercontent.com/ergoplatform/ergo/master/src/main/resources/devnet.conf" className="text-blue-400 hover:text-blue-300">devnet.conf</a>
          </p>
        </div>
      </div>
    </div>
  );
} 