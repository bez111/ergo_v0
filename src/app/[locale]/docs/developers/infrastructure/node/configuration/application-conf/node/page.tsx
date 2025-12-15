"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { 
  Settings, 
  Database, 
  Link as LinkIcon, 
  Wallet, 
  Vote, 
  ChevronRight, 
  ExternalLink,
  CheckCircle,
  Code,
  BookOpen,
  GitBranch,
  Info,
  Cpu,
  Shield,
  Zap,
  Globe,
  Lock,
  FileText,
  AlertCircle,
  AlertTriangle,
  Clock,
  Network,
  Server,
  ArrowLeft
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function NodeConfigPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Node Configuration
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Core node configuration including state type, mining settings, transaction verification, and memory pool management.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration/application-conf?tab=ergo-node"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-orange-400" /> Node Configuration Overview
        </h2>
        <p className="text-gray-300 mb-6">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">node{}</code> configuration section specifies general settings for the node view holder regime. It includes parameters for state type, extra index, block and transaction verification, mining configuration, memory pool management, and more.
        </p>
      </div>

      {/* State Type Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-400" /> State Type
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">stateType = "utxo"</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">stateType</code> setting sets the type of state the node maintains. Possible options are <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">utxo</code>, where the node keeps a full utxo set allowing it to validate arbitrary blocks and generate ADProofs, and <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">digest</code>, where the node only keeps the state root hash and validates transactions via ADProofs.
        </p>
      </div>

      {/* Extra Index Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-green-400" /> Extra Index
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">extraIndex = false</code><br />
          <code className="text-orange-400">extraCacheSize = 500</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">extraIndex</code> setting, if set to true, allows the node to store all transactions, boxes, and addresses in an index. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">extraCacheSize</code> sets the number of recently used extra indexes kept in memory.
        </p>
      </div>

      {/* Verify Transactions Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Verify Transactions
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">verifyTransactions = true</code>
        </div>
        <p className="text-gray-300">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">verifyTransactions</code> is set to true, the node will download block transactions and verify them.
        </p>
      </div>

      {/* Blocks to Keep Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-400" /> Blocks to Keep
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">blocksToKeep = -1</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blocksToKeep</code> setting defines the number of last blocks to keep with transactions and ADproofs. Only the header will be stored for other blocks.
        </p>
      </div>

      {/* PoPoW Bootstrap Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <LinkIcon className="w-6 h-6 text-cyan-400" /> PoPoW Bootstrap
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">PoPoWBootstrap = false</code>
        </div>
        <p className="text-gray-300">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">PoPoWBootstrap</code> is set to true, the node will download the Proof of Proof of Work (PoPoW) on node bootstrap.
        </p>
      </div>

      {/* Mining Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> Mining
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">mining = false</code><br />
          <code className="text-orange-400">maxTransactionCost = 1000000</code><br />
          <code className="text-orange-400">maxTransactionSize = 98304 // 96 kb</code><br />
          <code className="text-orange-400">useExternalMiner = true</code><br />
          <code className="text-orange-400">internalMinersCount = 1</code><br />
          <code className="text-orange-400">internalMinerPollingInterval = 500ms</code><br />
          <code className="text-orange-400">miningPubKeyHex = null</code>
        </div>
        <p className="text-gray-300">
          These settings determine if you are mining through the node, the maximum transaction cost and size to propagate, whether to use an external miner, the number of internal miner threads to spawn, how frequently to ask for new block candidates, and a dedicated public key for mining rewards.
        </p>
      </div>

      {/* Offline Generation Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-orange-400" /> Offline Generation
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">offlineGeneration = false</code>
        </div>
        <p className="text-gray-300">
          If <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">offlineGeneration</code> is set to true, the node will generate blocks while disconnected from the mainnet.
        </p>
      </div>

      {/* Keep Versions Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-purple-400" /> Keep Versions
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">keepVersions = 200</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">keepVersions</code> setting specifies the number of state snapshots diffs to keep, which defines the maximum rollback depth.
        </p>
      </div>

      {/* Acceptable Chain Update Delay Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-cyan-400" /> Acceptable Chain Update Delay
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">acceptableChainUpdateDelay = 30m</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">acceptableChainUpdateDelay</code> setting is the acceptable difference between the current time and the timestamp of the latest chain update or best block. It helps to discover syncing issues.
        </p>
      </div>

      {/* Memory Pool Configuration Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" /> Memory Pool Configuration
        </h2>
        <p className="text-gray-300 mb-6">
          The mempool settings define the maximum number of unconfirmed transactions the node will accept, the interval for re-checking a transaction in the memory pool, the mempool transaction sorting scheme, the number of transactions to rebroadcast at each epoch, and the minimum fee amount for transactions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">maxUnconfirmed</h4>
            <p className="text-gray-300 text-sm">Maximum number of unconfirmed transactions in the memory pool.</p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">recheckInterval</h4>
            <p className="text-gray-300 text-sm">Interval for re-checking transactions in the memory pool.</p>
          </div>
        </div>
      </div>

      {/* Blacklisted Transactions Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-400" /> Blacklisted Transactions
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">blacklistedTransactions = []</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">blacklistedTransactions</code> setting is a list of hex-encoded identifiers of transactions banned from the memory pool.
        </p>
      </div>

      {/* Header Chain Diff Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <LinkIcon className="w-6 h-6 text-green-400" /> Header Chain Diff
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">headerChainDiff = 100</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">headerChainDiff</code> setting defines the number of blocks the node considers to be "close" in time when syncing the header chain.
        </p>
      </div>

      {/* Checkpoint Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-400" /> Checkpoint
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">checkpoint = null</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">checkpoint</code> setting allows you to specify an optional individual checkpoint to skip script validation for performance and memory usage improvements during initial bootstrapping.
        </p>
      </div>

      {/* ADProofs Suffix Length Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-400" /> ADProofs Suffix Length
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">adProofsSuffixLength = 114688 // 112k</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">adProofsSuffixLength</code> setting specifies the length of the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">ADProofs</code> suffix dumped during bootstrapping.
        </p>
      </div>

      {/* UTXO Bootstrap Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" /> UTXO Bootstrap
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">utxoBootstrap = false</code><br />
          <code className="text-orange-400">storingUtxoSnapshots = 2</code><br />
          <code className="text-orange-400">p2pUtxoSnapshots = 2</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">utxoBootstrap</code> setting, if set to true, allows the node to download and apply UTXO set snapshot and full-blocks after that. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">storingUtxoSnapshots</code> sets the number of UTXO set snapshots to store, 0 means that they are not stored at all. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">p2pUtxoSnapshots</code> sets the number of UTXO set snapshots for a height with the same id we need to find in the p2p network in order to start downloading it.
        </p>
      </div>

      {/* NiPoPoW Bootstrap Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <LinkIcon className="w-6 h-6 text-cyan-400" /> NiPoPoW Bootstrap
        </h2>
        <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
          <code className="text-orange-400">nipopowBootstrap = false</code><br />
          <code className="text-orange-400">p2pNipopows = 2</code><br />
          <code className="text-orange-400">nipopowSuffix = 10</code>
        </div>
        <p className="text-gray-300">
          The <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">nipopowBootstrap</code> setting, if set to true, allows the node to download the Proof of Proof of Work (NiPoPoW) on node bootstrap. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">p2pNipopows</code> sets the number of different proofs we are downloading from other peers and comparing with each other, before choosing the best one. <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">nipopowSuffix</code> sets the minimal suffix size for NiPoPoW proof.
        </p>
      </div>
    </>
  );
} 