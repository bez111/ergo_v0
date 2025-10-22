"use client";

import { 
  Server, 
  Database, 
  Shield,
  CheckCircle,
  History,
  Link as LinkIcon,
  HardDrive,
  Zap,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Settings,
  ChevronRight,
  Globe,
  Activity,
  Cpu,
  Clock,
  Code,
  Download,
  FileText,
  AlertTriangle,
  Info
} from "lucide-react";
import Link from "next/link";

/*
---
tags:
  - History Pruning
  - Node
  - Storage
  - Configuration
---

# History Pruning

"History Pruning" is a feature in Ergo's blockchain that allows nodes to reduce the amount of stored historical block data, which can lead to a significant decrease in storage requirements. It's particularly useful for nodes running on devices with limited storage capacity.

## What is History Pruning?

The concept of pruning in blockchain technology involves the removal of some of the less relevant data on a node while keeping the information necessary for maintaining the network's security and functionality. In Ergo's case, this means removing certain block data but keeping all block headers.

## How does it work?

This is achieved using the [`ergo.node.blocksToKeep`](conf-node.md#blocks-to-keep) parameter. This parameter dictates the number of full blocks (i.e., blocks containing all transactions) that the node should store. Once this limit is reached, the node will start pruning older blocks, removing the full transactions but retaining the block headers.

## Importance of Block Headers

A block header in a blockchain is a portion of a block that contains metadata about the block, including the reference to the previous block (which establishes the chain's sequence), the difficulty target for the block, and a nonce value that is part of the Proof-of-Work system. The block header is crucial for the operation of the blockchain, as it helps maintain the integrity and continuity of the blockchain.

## Full-Node Security

By keeping the block headers, a node can still participate in verifying and validating new blocks and transactions, thus maintaining full-node security. Full-node security refers to the ability of a node to independently validate the rules of the network without relying on other nodes.
*/

export default function PrunedFullNodePage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Pruned Full-Node Mode
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The Ergo Protocol Reference Client 5.0.13 introduced a new feature: bootstrapping using a 
          verified UTXO set snapshot and NiPoPoWS. This feature allows you to achieve full node security 
          on a standard laptop within minutes.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/developers/infrastructure/node/modes"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Back to Node Modes
          </Link>
          <Link 
            href="/docs/developers/infrastructure/node/modes/pruned-full-node/technical-details"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Code className="w-5 h-5 mr-2" />
            Technical Details
          </Link>
          <a 
            href="https://github.com/ergoplatform/ergo/releases/tag/v5.0.13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Release
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-semibold text-orange-400">Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            This mode is akin to the <em>fast-sync</em> in Geth or Grothendieck and <em>warp-mode</em> in Parity, 
            used by Ethereum protocol clients, but with more aggressive optimizations. It eliminates the need to check 
            approximately 95% of the blockchain, addressing the increasing demands for downloading, storing, and processing 
            the entire blockchain.
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Important Note</h3>
            </div>
            <p className="text-gray-300 text-sm">
              You cannot restore an old wallet with a pruned node. The recommended approach is to create a new wallet 
              and transfer funds to it.
            </p>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Download className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Getting Started</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Add the following <code className="text-blue-400">utxo</code> and <code className="text-blue-400">nipopow</code> 
            sections to your node configuration to enable UTXO Set Snapshots.
          </p>
          
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`ergo {
    node {
        mining = false

        utxo {
           utxoBootstrap = true
           storingUtxoSnapshots = 0
        }
        nipopow {
           nipopowBootstrap = true
           p2pNipopows = 2
        }
    }
    
}

scorex {
    restApi {
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
    }
}`)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <code>{`ergo {
    node {
        mining = false

        utxo {
           utxoBootstrap = true
           storingUtxoSnapshots = 0
        }
        nipopow {
           nipopowBootstrap = true
           p2pNipopows = 2
        }
    }
    
}

scorex {
    restApi {
        apiKeyHash = "324dcf027dd4a30a932c441f365a25e86b173defa4b8e58948253471b81b72cf"
    }
}`}</code>
            </pre>
          </div>

          <div className="mt-6 bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Info className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-blue-400">Note on Progress Reporting</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Currently, the node may not provide detailed progress updates specifically during the <em>download phase</em> 
              of the UTXO snapshot itself when <code className="text-blue-400">utxoBootstrap = true</code>. Synchronization 
              progress for headers and subsequent blocks is typically visible via the node panel (<code className="text-blue-400">/panel</code>) 
              or logs, but the snapshot download phase might appear as a period of inactivity before regular block processing resumes.
            </p>
          </div>
        </div>

        {/* Technical Details Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Technical Details</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            The UTXO set authentication uses an AVL+ tree, outlined in the research paper and available in the 
            Scrypto framework. Research indicates that this method can be as secure as processing all blocks 
            under certain statistical assumptions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Research Paper</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                AVL+ tree implementation details and security analysis.
              </p>
              <a 
                href="https://eprint.iacr.org/2016/994.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                View Research Paper →
              </a>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Scrypto Framework</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Implementation available in the Scrypto framework.
              </p>
              <a 
                href="https://github.com/input-output-hk/scrypto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                View on GitHub →
              </a>
            </div>
          </div>

          <div className="mt-6 bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-yellow-400 mr-2" />
              <h3 className="text-lg font-semibold text-yellow-400">Security Analysis</h3>
            </div>
            <p className="text-gray-300 text-sm">
              This research paper indicates that this method can be as secure as processing all blocks under certain 
              statistical assumptions.
            </p>
            <a 
              href="https://eprint.iacr.org/2018/129"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline mt-2 inline-block"
            >
              View Security Analysis →
            </a>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Key Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Fast Synchronization</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Achieve full node security on a standard laptop within minutes, eliminating the need to check 
                approximately 95% of the blockchain.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <HardDrive className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">UTXO Set Snapshots</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Uses verified UTXO set snapshots for bootstrapping, providing a secure and efficient way to 
                start a full node.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">NiPoPoWS Integration</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Integrates NiPoPoWS (Non-Interactive Proofs of Proof-of-Work) for enhanced security and 
                verification capabilities.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Aggressive Optimizations</h3>
              </div>
              <p className="text-gray-300 text-sm">
                More aggressive optimizations compared to Ethereum's fast-sync and warp-mode implementations.
              </p>
            </div>
          </div>
        </div>

        {/* Digest State Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-indigo-400 mr-3" />
            <h2 className="text-2xl font-semibold text-indigo-400">Digest State</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            The "Digest State" feature in the Ergo protocol allows nodes to optimize the storage of blockchain data 
            without compromising security and performance. By enabling the Digest State feature, nodes can prune or 
            reduce the size of the UTXO (Unspent Transaction Output) set, blocks, and headers, resulting in more 
            efficient storage utilization.
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">How does it work?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                In a traditional blockchain, each node stores the complete history of transactions, blocks, and headers, 
                which can lead to significant storage requirements as the blockchain grows. However, with the Digest State 
                feature, Ergo nodes can selectively retain only the essential data.
              </p>
              <p className="text-gray-300 text-sm">
                To enable the Digest State feature, set the{" "}
                <code className="text-blue-400">ergo.node.stateType = "digest"</code>{" "}
                configuration parameter to "digest". Once enabled, the node supports UTXO set pruning, allowing it to 
                reduce the storage footprint while still maintaining full-node security guarantees.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Benefits of Digest State</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Efficient Storage:</strong> By pruning unnecessary data, Digest State reduces the storage 
                  requirements for nodes, making it feasible to run Ergo nodes on devices with limited storage capacity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Performance Optimization:</strong> With a smaller UTXO set, blocks, and headers, nodes can 
                  process transactions and blocks more efficiently, potentially improving overall network performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span><strong>Full-Node Security:</strong> Despite not storing the entire UTXO set, nodes with Digest 
                  State enabled can still validate transactions and blocks, ensuring compliance with the consensus rules 
                  of the network.</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Considerations</h3>
              </div>
              <p className="text-gray-300 text-sm">
                While Digest State provides storage and performance benefits, it's important to note that a healthy 
                network requires a sufficient number of full (non-pruning) nodes. Full nodes maintain the complete 
                history and state of the blockchain, serving as a reference for new nodes and ensuring the integrity 
                of the entire blockchain's history.
              </p>
            </div>
          </div>
        </div>

        {/* History Pruning Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <History className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">History Pruning</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            "History Pruning" is a feature in Ergo's blockchain that allows nodes to reduce the amount of stored historical block data, 
            which can lead to a significant decrease in storage requirements. It's particularly useful for nodes running on devices with limited storage capacity.
          </p>

          <div className="space-y-6">
            {/* What is History Pruning */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">What is History Pruning?</h3>
              </div>
              <p className="text-gray-300 text-sm">
                The concept of pruning in blockchain technology involves the removal of some of the less relevant data on a node while keeping 
                the information necessary for maintaining the network's security and functionality. In Ergo's case, this means removing certain 
                block data but keeping all block headers.
              </p>
            </div>

            {/* How does it work */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Settings className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">How does it work?</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                This is achieved using the <code className="text-blue-400">ergo.node.blocksToKeep</code> parameter. This parameter dictates 
                the number of full blocks (i.e., blocks containing all transactions) that the node should store. Once this limit is reached, 
                the node will start pruning older blocks, removing the full transactions but retaining the block headers.
              </p>
            </div>

            {/* Importance of Block Headers */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Importance of Block Headers</h3>
              </div>
              <p className="text-gray-300 text-sm">
                A block header in a blockchain is a portion of a block that contains metadata about the block, including the reference to the 
                previous block (which establishes the chain's sequence), the difficulty target for the block, and a nonce value that is part 
                of the Proof-of-Work system. The block header is crucial for the operation of the blockchain, as it helps maintain the 
                integrity and continuity of the blockchain.
              </p>
            </div>

            {/* Full-Node Security */}
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Full-Node Security</h3>
              </div>
              <p className="text-gray-300 text-sm">
                By keeping the block headers, a node can still participate in verifying and validating new blocks and transactions, thus 
                maintaining full-node security. Full-node security refers to the ability of a node to independently validate the rules of 
                the network without relying on other nodes.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-cyan-400">Additional Resources</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/pruned-full-node/technical-details" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Technical Implementation Details
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NiPoPoWS Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/ergo/releases/tag/v5.0.13" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Ergo Protocol Reference Client 5.0.13
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 