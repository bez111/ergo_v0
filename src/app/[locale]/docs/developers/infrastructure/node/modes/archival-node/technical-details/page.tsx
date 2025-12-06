"use client";

/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */

import { 
  ArrowLeft,
  Code,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Zap,
  Database,
  Shield,
  Activity,
  Cpu,
  Clock,
  Server
} from "lucide-react";
import Link from "next/link";

export default function TechnicalDetailsPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Technical Workflow Details
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Detailed technical documentation outlining the complete workflow for the full archival node mode in Ergo.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/developers/infrastructure/node/modes/archival-node"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Archival Node
          </Link>
          <Link 
            href="/docs/developers/infrastructure/node/modes"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Node Modes Overview
          </Link>
          <a 
            href="https://github.com/ergoplatform/ergo/wiki/Node-Configuration"
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
            <Code className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Technical Overview</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            This document outlines the technical workflow for the full archival node mode in Ergo. 
            The process involves multiple stages of synchronization, validation, and state management 
            to ensure complete blockchain integrity and security.
          </p>
        </div>

        {/* Initial Synchronization Process */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-blue-400">Initial Synchronization Process</h2>
          </div>
          <p className="text-gray-300 mb-4">
            The archival node begins its synchronization process through the following steps:
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Send an <strong>ErgoSyncInfo</strong> message to connected peers.</li>
              <li>Receive a response with an INV message containing the IDs of blocks that are better than our best block.</li>
              <li>Request headers for all the block IDs received in step 2.</li>
            </ol>
          </div>
        </div>

        {/* Header Processing */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-green-400 mr-3" />
            <h2 className="text-2xl font-semibold text-green-400">Header Processing</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Upon receiving a header, the following operations are performed:
          </p>
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`if(history.apply(header).isSuccess) {
    if(!isInitialBootstrapping) Broadcast INV for this Header
    Request transaction ids from this block
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
              <code>{`if(history.apply(header).isSuccess) {
    if(!isInitialBootstrapping) Broadcast INV for this Header
    Request transaction ids from this block
} else {
    blacklist peer
}`}</code>
            </pre>
          </div>
          <div className="mt-4 text-gray-300 text-sm">
            <p>This step validates the header and requests transaction IDs if the header is valid.</p>
          </div>
        </div>

        {/* Transaction ID Processing */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 text-yellow-400 mr-3" />
            <h2 className="text-2xl font-semibold text-yellow-400">Transaction ID Processing</h2>
          </div>
          <p className="text-gray-300 mb-4">
            When transaction IDs from the Header are received, the following operations are performed:
          </p>
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`transactionIdsForHeader.filter(txId => !MemPool.contains(txId)).foreach { txId =>
    request transaction with txId
}`)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-yellow-400 font-mono text-sm overflow-x-auto">
              <code>{`transactionIdsForHeader.filter(txId => !MemPool.contains(txId)).foreach { txId =>
    request transaction with txId
}`}</code>
            </pre>
          </div>
          <div className="mt-4 text-gray-300 text-sm">
            <p>This filters out transactions already in the mempool and requests missing transactions.</p>
          </div>
        </div>

        {/* Transaction Processing */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-semibold text-purple-400">Transaction Processing</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Upon receiving a transaction, the following operations are performed:
          </p>
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`if(Mempool.apply(transaction).isSuccess) {
    if(!isInitialBootstrapping) Broadcast INV for this transaction
    Mempool.getHeadersWithAllTransactions { BlockTransactions =>
        GOTO 7
    }
}`)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-purple-400 font-mono text-sm overflow-x-auto">
              <code>{`if(Mempool.apply(transaction).isSuccess) {
    if(!isInitialBootstrapping) Broadcast INV for this transaction
    Mempool.getHeadersWithAllTransactions { BlockTransactions =>
        GOTO 7
    }
}`}</code>
            </pre>
          </div>
          <div className="mt-4 text-gray-300 text-sm">
            <p>This validates and applies transactions to the mempool, then processes complete blocks.</p>
          </div>
        </div>

        {/* Block Transactions Processing */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-2xl font-semibold text-cyan-400">Block Transactions Processing</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Now we have <strong>BlockTransactions</strong>: all transactions corresponding to some Header
          </p>
          <div className="relative">
            <button
              onClick={() => navigator.clipboard.writeText(`if(History.apply(BlockTransactions) == Success(ProgressInfo)) {

    if(!isInitialBootstrapping) Broadcast INV for BlockTransactions

    /*We should notify our neighbours that now we have all the transactions
    State apply modifiers (may be empty for a block in a forked chain)
    and generate ADProofs for them.
    Note: requires a different interface from scorex-core,
    because it should return ADProofs.
    When minimal state apply Progress info,
    it may also create UTXOSnapshot
    (e.g. every 30000 blocks like in Ethereum).
    This UTXOSnapshot should be required for mining by Rollerchain*/
    
    if(State().apply(ProgressInfo) == Success((newState, ADProofs))) {
        if("mode"="full" || "mode"=="pruned-full") ADProofs.foreach ( ADProof => History.apply(ADProof))
        if("mode"=="pruned-full" || "mode"=="light-full") drop BlockTransactions and ADProofs older than BlocksToKeep
    } else {
        //Drop Header from history because its transaction sequence is not valid
        History.drop(BlockTransactions.headerId)
    }
} else {
    blacklist peer who sent Header
}`)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
              title="Copy code"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <pre className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 text-cyan-400 font-mono text-sm overflow-x-auto">
              <code>{`if(History.apply(BlockTransactions) == Success(ProgressInfo)) {

    if(!isInitialBootstrapping) Broadcast INV for BlockTransactions

    /*We should notify our neighbours that now we have all the transactions
    State apply modifiers (may be empty for a block in a forked chain)
    and generate ADProofs for them.
    Note: requires a different interface from scorex-core,
    because it should return ADProofs.
    When minimal state apply Progress info,
    it may also create UTXOSnapshot
    (e.g. every 30000 blocks like in Ethereum).
    This UTXOSnapshot should be required for mining by Rollerchain*/
    
    if(State().apply(ProgressInfo) == Success((newState, ADProofs))) {
        if("mode"="full" || "mode"=="pruned-full") ADProofs.foreach ( ADProof => History.apply(ADProof))
        if("mode"=="pruned-full" || "mode"=="light-full") drop BlockTransactions and ADProofs older than BlocksToKeep
    } else {
        //Drop Header from history because its transaction sequence is not valid
        History.drop(BlockTransactions.headerId)
    }
} else {
    blacklist peer who sent Header
}`}</code>
            </pre>
          </div>
          <div className="mt-4 text-gray-300 text-sm">
            <p>This is the final step where complete blocks are validated and applied to the blockchain state.</p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-orange-400 mr-3" />
            <h2 className="text-2xl font-semibold text-orange-400">Additional Resources</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">
              For more detailed information about the bootstrapping process and modifiers processing, 
              please refer to the following resources:
            </p>
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/docs/developers/infrastructure/node/protocol/modifiers-processing" 
                     className="text-blue-400 hover:text-blue-300 underline">
                    Bootstrapping section of modifiers processing
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/ergo/wiki/Node-Configuration" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Ergo Node Configuration Wiki
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ergoplatform/ergo" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-300 underline">
                    Ergo GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Cpu className="w-6 h-6 text-red-400 mr-3" />
            <h2 className="text-2xl font-semibold text-red-400">Technical Notes</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Important Considerations</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                <li>The archival node requires significant computational resources and storage space.</li>
                <li>Initial synchronization can take several days depending on network conditions.</li>
                <li>All transactions and blocks are validated for maximum security.</li>
                <li>The complete UTXO set is maintained for full validation capabilities.</li>
                <li>ADProofs are generated and stored for all blocks in archival mode.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 