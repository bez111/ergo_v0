"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import { 
  Code,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Settings,
  Zap,
  Lightbulb,
  Database,
  Info,
  AlertTriangle,
  CheckCircle,
  Activity,
  Cpu,
  Clock,
  Server,
  Download
} from "lucide-react";
import Link from "next/link";

export default function LightSpvTechnicalDetailsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
          Light SPV Mode Technical Workflow
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
          The technical workflow for the light-SPV mode in Ergo is designed to efficiently synchronize with the network 
          using PoPoW proofs and maintain a lightweight state while ensuring security.
        </p>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-6 mb-12">
        <Link 
          href="/docs/developers/infrastructure/node/modes/light-spv-node"
          className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 mr-2" />
          Back to Light-SPV Mode
        </Link>
        <Link 
          href="/docs/developers/infrastructure/node/modes"
          className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
        >
          <Server className="w-5 h-5 mr-2" />
          Node Modes
        </Link>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Bootstrap Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Zap className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Bootstrap</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 1: Send GetPoPoWProof</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Send <code className="text-blue-400">GetPoPoWProof</code> for all connections to request proof-of-proof-of-work 
                from connected peers.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 2: Process PoPoWProof</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                On receiving <code className="text-blue-400">PoPoWProof</code>, apply it to History. History should determine 
                whether this PoPoWProof is better than its current best header chain.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <ArrowLeft className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 3: Transition to Regular Mode</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                <code className="text-blue-400">GOTO</code> regular regime once bootstrap is complete.
              </p>
            </div>
          </div>
        </div>

        {/* Regular Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Settings className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Regular</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 1: Send ErgoSyncInfo</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Send <code className="text-blue-400">ErgoSyncInfo</code> message to connected peers to inform them about 
                the current state of your node.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 2: Receive INV Message</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Get a response with an <code className="text-blue-400">INV</code> message containing the ids of blocks 
                that are better than our best block.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Download className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 3: Request Headers</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Request headers for all ids from step 2 to download the necessary block headers.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Step 4: Process Headers</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                On receiving Header, follow this logic:
              </p>
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`if(History.apply(header).isSuccess) {
    State.apply(header) // just change state roothash
    if(!isInitialBootstrapping) Broadcast INV for this header
} else {
    blacklist peer
}`)}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`if(History.apply(header).isSuccess) {
    State.apply(header) // just change state roothash
    if(!isInitialBootstrapping) Broadcast INV for this header
} else {
    blacklist peer
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Explanation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Info className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Technical Explanation</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">History.apply(header)</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                This function attempts to apply the received header to the node's history. If successful, 
                it means the header is valid and can be integrated into the blockchain.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Settings className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">State.apply(header)</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Updates the node's state by changing the state roothash. This is a lightweight operation 
                that doesn't require storing the full block data.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Activity className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Broadcast INV</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                If not in initial bootstrapping mode, broadcast an INV message for this header to inform 
                other peers about the new block.
              </p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Blacklist Peer</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                If the header application fails, the peer is blacklisted to prevent receiving invalid data 
                from that source.
              </p>
            </div>
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
                  <a href="/docs/developers/infrastructure/node/modes/light-spv-node" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Light-SPV Mode Overview
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NIPoPoWs Documentation
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/spv" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    SPV Protocol Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/sigma-rust" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Sigma Rust Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 