"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import { 
  Database,
  Settings,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  ChevronRight,
  Info,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function DigestStatePage() {
  return (
    <div className="text-white max-w-6xl mx-auto px-8 py-8">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Digest State
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          The "Digest State" feature in the Ergo protocol allows nodes to optimize the storage of blockchain data without compromising 
          security and performance. By enabling the Digest State feature, nodes can prune or reduce the size of the UTXO (Unspent Transaction Output) 
          set, blocks, and headers, resulting in more efficient storage utilization.
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
          href="/docs/developers/infrastructure/node/modes/history-pruning"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          History Pruning
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* How does it work */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">How does it work?</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              In a traditional blockchain, each node stores the complete history of transactions, blocks, and headers, which can lead to 
              significant storage requirements as the blockchain grows. However, with the Digest State feature, Ergo nodes can selectively 
              retain only the essential data.
            </p>
            <p className="text-lg leading-relaxed">
              To enable the Digest State feature, set the <code className="text-blue-400">ergo.node.stateType = "digest"</code> configuration 
              parameter to "digest". Once enabled, the node supports UTXO set pruning, allowing it to reduce the storage footprint while 
              still maintaining full-node security guarantees.
            </p>
          </div>
        </div>

        {/* Benefits of Digest State */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Benefits of Digest State</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Efficient Storage</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                By pruning unnecessary data, Digest State reduces the storage requirements for nodes, making it feasible to run Ergo nodes 
                on devices with limited storage capacity.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Performance Optimization</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                With a smaller UTXO set, blocks, and headers, nodes can process transactions and blocks more efficiently, potentially 
                improving overall network performance.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Full-Node Security</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Despite not storing the entire UTXO set, nodes with Digest State enabled can still validate transactions and blocks, 
                ensuring compliance with the consensus rules of the network.
              </p>
            </div>
          </div>
        </div>

        {/* Considerations */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Considerations</h2>
          </div>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              While Digest State provides storage and performance benefits, it's important to note that a healthy network requires a 
              sufficient number of full (non-pruning) nodes. Full nodes maintain the complete history and state of the blockchain, 
              serving as a reference for new nodes and ensuring the integrity of the entire blockchain's history.
            </p>
          </div>
        </div>

        {/* Configuration Example */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Configuration Example</h2>
          </div>
          
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`ergo {
    node {
        stateType = "digest"
        blocksToKeep = 1000
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
        stateType = "digest"
        blocksToKeep = 1000
    }
}`}</code>
            </pre>
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
                  <a href="/docs/developers/infrastructure/node/modes/history-pruning" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    History Pruning Documentation
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