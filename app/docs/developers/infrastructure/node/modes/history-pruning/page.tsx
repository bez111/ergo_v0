"use client";

import { 
  History,
  Info,
  Settings,
  Shield,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function HistoryPruningPage() {
  return (
    <div className="text-white max-w-6xl mx-auto px-8 py-8">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          History Pruning
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          "History Pruning" is a feature in Ergo's blockchain that allows nodes to reduce the amount of stored historical block data, 
          which can lead to a significant decrease in storage requirements. It's particularly useful for nodes running on devices with limited storage capacity.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/docs/developers/infrastructure/node/modes"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Node Modes
        </Link>
        <Link 
          href="/docs/developers/infrastructure/node/modes/digest-state"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Digest State
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* What is History Pruning */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Info className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">What is History Pruning?</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              The concept of pruning in blockchain technology involves the removal of some of the less relevant data on a node while keeping 
              the information necessary for maintaining the network's security and functionality. In Ergo's case, this means removing certain 
              block data but keeping all block headers.
            </p>
          </div>
        </div>

        {/* How does it work */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">How does it work?</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              This is achieved using the <code className="text-blue-400">ergo.node.blocksToKeep</code> parameter. This parameter dictates 
              the number of full blocks (i.e., blocks containing all transactions) that the node should store. Once this limit is reached, 
              the node will start pruning older blocks, removing the full transactions but retaining the block headers.
            </p>
          </div>
        </div>

        {/* Importance of Block Headers */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Importance of Block Headers</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              A block header in a blockchain is a portion of a block that contains metadata about the block, including the reference to the 
              previous block (which establishes the chain's sequence), the difficulty target for the block, and a nonce value that is part 
              of the Proof-of-Work system. The block header is crucial for the operation of the blockchain, as it helps maintain the 
              integrity and continuity of the blockchain.
            </p>
          </div>
        </div>

        {/* Full-Node Security */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Full-Node Security</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              By keeping the block headers, a node can still participate in verifying and validating new blocks and transactions, thus 
              maintaining full-node security. Full-node security refers to the ability of a node to independently validate the rules of 
              the network without relying on other nodes.
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-cyan-400">Additional Resources</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/digest-state" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Digest State Documentation
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/modes/pruned-full-node" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Pruned Full-Node Mode
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/configuration" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Node Configuration
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