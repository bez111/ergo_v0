"use client";

import { 
  Code,
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Settings,
  ChevronRight,
  FileText,
  Network,
  Download,
  Database,
  Cpu,
  Workflow,
  Info,
  AlertTriangle,
  CheckCircle,
  Clock,
  HardDrive,
  Zap,
  Shield,
  GitBranch,
  Layers,
  Server
} from "lucide-react";
import Link from "next/link";

export default function PrunedFullNodeTechnicalDetailsPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Implementation Details for UTXO Set Snapshots
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Detailed technical implementation of UTXO set authentication using AVL+ tree and 
          comprehensive workflow for pruned full node operation.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/developers/infrastructure/node/modes/pruned-full-node"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Back to Pruned Full-Node
          </Link>
          <Link 
            href="/docs/developers/infrastructure/node/modes"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Server className="w-5 h-5 mr-2" />
            Node Modes Overview
          </Link>
          <a 
            href="https://github.com/ergoplatform/ergo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-semibold text-orange-400">Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            The UTXO set authentication uses an AVL+ tree, outlined in the research paper and available in the 
            Scrypto framework on GitHub. Snapshots are taken every 51,200 blocks (~72 days), specifically after 
            a block where <code className="text-blue-400">h % 51200 == 51199</code>.
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

        {/* Implementation Details Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Implementation Details</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Chunk Format</h3>
              </div>
              <p className="text-gray-300 text-sm italic">To be provided</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Layers className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Manifest Format</h3>
              </div>
              <p className="text-gray-300 text-sm italic">To be provided</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Networking Layer</h3>
              </div>
              <p className="text-gray-300 text-sm italic">To be provided</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Bootstrapping</h3>
              </div>
              <p className="text-gray-300 text-sm italic">To be provided</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Settings className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Node Configuration</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Bootstrapping with a UTXO set snapshot is enabled by setting 
                <code className="text-blue-400"> ergo.node.utxoBootstrap = true</code> in the configuration.
              </p>
              <a 
                href="/docs/developers/infrastructure/node/configuration"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                View Configuration Details →
              </a>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Sync Info V3</h3>
              </div>
              <p className="text-gray-300 text-sm italic">To be provided</p>
            </div>
          </div>
        </div>

        {/* Technical Workflow Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Workflow className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Technical Workflow (WIP)</h2>
          </div>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A pruned client downloads all headers, validates proofs-of-work, and links structures, followed by 
            downloading a UTXO snapshot from peers and the full blocks succeeding it. The process is as follows:
          </p>

          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">1. ErgoSyncInfo</h3>
              </div>
              <p className="text-gray-300 text-sm">Message to connected peers.</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">2. Receive INV Message</h3>
              </div>
              <p className="text-gray-300 text-sm">Receive <code className="text-blue-400">INV</code> message with better block ids.</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">3. Request Headers</h3>
              </div>
              <p className="text-gray-300 text-sm">Request headers for received ids.</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Cpu className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">4. On Header Reception</h3>
              </div>
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`if(History.apply(header).isSuccess) {
    if(!(localScore == networkScore)) GOTO 1
    else GOTO 5
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
    if(!(localScore == networkScore)) GOTO 1
    else GOTO 5
} else {
    blacklist peer
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Database className="w-5 h-5 text-cyan-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">5. Request UTXOManifest</h3>
              </div>
              <p className="text-gray-300 text-sm">Request <code className="text-blue-400">UTXOManifest</code> for at least <code className="text-blue-400">BlocksToKeep</code> back.</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <HardDrive className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">6. On UTXOSnapshotManifest Reception</h3>
              </div>
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`UTXOSnapshotManifest.chunks.foreach { chunk =>
    request chunk from sender() //Or from random full node
}`)}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`UTXOSnapshotManifest.chunks.foreach { chunk =>
    request chunk from sender() //Or from random full node
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">7. On UTXOSnapshotChunk Reception</h3>
              </div>
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`State.applyChunk(UTXOSnapshotChunk) match {
     case Success(Some(newMinimalState)) => GOTO 8
     case Success(None) => stay at 7
     //Request missed chunks periodically
     case Failure(e) => ???
     //Invalid hash or state
}`)}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`State.applyChunk(UTXOSnapshotChunk) match {
     case Success(Some(newMinimalState)) => GOTO 8
     case Success(None) => stay at 7
     //Request missed chunks periodically
     case Failure(e) => ???
     //Invalid hash or state
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <GitBranch className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">8. Request BlockTransactions</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">Request <code className="text-blue-400">BlockTransactions</code> starting from available State.</p>
              <div className="relative">
                <button
                  onClick={() => navigator.clipboard.writeText(`History.headersStartingFromId(State.headerId).foreach { header =>
    send message(GetBlockTransactionsForHeader(header)) to Random full node
}`)}
                  className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{`History.headersStartingFromId(State.headerId).foreach { header =>
    send message(GetBlockTransactionsForHeader(header)) to Random full node
}`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">9. On BlockTransactions Reception</h3>
              </div>
              <p className="text-gray-300 text-sm">Same as Fullnode.7.</p>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Server className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">10. Operate as Fullnode</h3>
              </div>
              <p className="text-gray-300 text-sm">Node is now fully operational.</p>
            </div>
          </div>

          <div className="mt-6 bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Info className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-blue-400">Workflow Summary</h3>
            </div>
            <p className="text-gray-300 text-sm">
              This revised workflow streamlines the operation of a pruned full node, emphasizing efficiency and security, 
              positioning Ergo and similar blockchains for broader adoption within the constraints of typical hardware. 
              For a deeper dive into nipopows, you can explore the research paper.
            </p>
            <a 
              href="http://fc16.ifca.ai/bitcoin/papers/KLS16.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline mt-2 inline-block"
            >
              View NiPoPoWS Research Paper →
            </a>
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
                  <a href="/docs/developers/infrastructure/node/configuration" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Node Configuration Guide
                  </a>
                </li>
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/nipopows" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    NiPoPoWS Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/ergo" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Ergo Protocol Repository
                  </a>
                </li>
                <li>
                  <a href="https://eprint.iacr.org/2016/994.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    AVL+ Tree Research Paper
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