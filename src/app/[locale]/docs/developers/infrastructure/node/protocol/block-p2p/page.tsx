"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ChevronLeft, Network, Shield, Zap, Cpu, Database, MessageSquare } from "lucide-react";

export default function BlockP2PPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        BlockP2P: The Backbone of Ergo's Decentralized Communication
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to P2P Overview
        </Link>
      </div>

      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
        In the world of blockchain, efficient and secure communication between nodes is crucial for maintaining the integrity and performance of the network. Ergo, a blockchain platform designed for the creation of secure and scalable decentralized applications, relies heavily on its peer-to-peer (P2P) network protocol known as BlockP2P. This protocol ensures that every node in the network can communicate effectively, sharing blocks, transactions, and other essential data to keep the blockchain synchronized and secure.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Network className="w-6 h-6 text-cyan-400" />
          What is BlockP2P?
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          BlockP2P is a peer-to-peer communication protocol specifically designed for the Ergo blockchain. It facilitates the exchange of data between nodes in a decentralized manner, without the need for a central server. This decentralized communication model is fundamental to the security, scalability, and resilience of the Ergo network.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-400" />
          Core Functions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Block Propagation</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Efficient propagation of blocks across the network. When a new block is mined, it is broadcast to all nodes using the BlockP2P protocol.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-cyan-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/nodeView/ErgoNodeViewHolder.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">ErgoNodeViewHolder</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Handles reception and processing of new blocks</p>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">Transaction Propagation</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Transactions are propagated across the network using BlockP2P. When a node receives a new transaction, it broadcasts this transaction to its peers.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-green-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/modifiers/mempool/ErgoTransaction.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">ErgoTransaction</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Represents transactions within the network</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Network Synchronization</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Critical role in network synchronization. Nodes must remain in sync with the latest state of the blockchain to participate in consensus.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-blue-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/ErgoSync.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">ErgoSync</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Ensures nodes remain synchronized</p>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-400 mb-3">Decentralization & Resilience</h3>
            <p className="text-gray-300 mb-3 text-sm">
              Enables direct communication between nodes, maintaining the decentralized nature of the Ergo network with no single point of failure.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-purple-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/ErgoNetwork.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">ErgoNetwork</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Ensures robust P2P connections</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-green-400" />
          How BlockP2P Works
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The BlockP2P protocol operates through a series of messages exchanged between nodes. These messages include block announcements, transaction broadcasts, and synchronization requests.
        </p>
        
        <div className="space-y-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-300 mb-3">Block Announcements</h3>
            <p className="text-gray-300 mb-4">
              When a node mines a new block, it sends a block announcement message to its peers. This message includes the block header, which contains important metadata about the block.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-orange-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/InvSpec.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">InvSpec</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Handles inventory messages for block announcements</p>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-3">Transaction Broadcasts</h3>
            <p className="text-gray-300 mb-4">
              When a node receives a transaction, it broadcasts a transaction message to its peers. This message contains the raw transaction data, including inputs, outputs, and signatures.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-cyan-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/TxSpec.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">TxSpec</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Defines message format for broadcasting transactions</p>
            </div>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">Synchronization Requests</h3>
            <p className="text-gray-300 mb-4">
              Nodes that are out of sync with the network can send synchronization requests to their peers. These requests ask for the latest blocks or transactions that the node is missing.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-3">
              <code className="text-green-400 text-sm">
                <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/SyncInfoSpec.scala" 
                   className="hover:underline" target="_blank" rel="noopener noreferrer">SyncInfoSpec</a>
              </code>
              <p className="text-gray-400 text-xs mt-1">Handles synchronization messages between peers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-400" />
          Security Considerations
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          BlockP2P incorporates several security measures to ensure the integrity of the data being exchanged:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-300 mb-3">Message Authentication</h3>
            <p className="text-gray-300 text-sm">
              Every message in the BlockP2P protocol is authenticated to ensure it comes from a legitimate source. This prevents malicious nodes from injecting false data.
            </p>
          </div>
          
          <div className="bg-orange-900/20 border border-orange-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-300 mb-3">Data Validation</h3>
            <p className="text-gray-300 text-sm">
              Nodes validate the data they receive before acting on it. Blocks are checked for proper proof-of-work, and transactions are verified for correct signatures.
            </p>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-yellow-300 mb-3">Spam Protection</h3>
            <p className="text-gray-300 text-sm">
              BlockP2P includes mechanisms to protect the network from spam attacks. Nodes can limit the rate at which they accept new transactions or blocks.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-blue-400" />
          Implementation in Practice
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          In the Ergo blockchain, BlockP2P is implemented in the core node software, enabling seamless communication between all participating nodes.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">Key Components</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Ergo Node:</strong> Primary software implementing BlockP2P</li>
              <li>• <strong>Ergo Full Node:</strong> Stores entire blockchain and participates in P2P</li>
              <li>• <strong>Network Messages:</strong> Inv, GetData, Tx for data exchange</li>
            </ul>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">Enhancements</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Faster block propagation optimizations</li>
              <li>• Improved peer discovery mechanisms</li>
              <li>• Continuous performance improvements</li>
              <li>• Scalability enhancements</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">Open Source Implementation</h3>
              <p className="text-gray-300 mb-3">
                The Ergo node software is open-source and can be found on <a href="https://github.com/ergoplatform/ergo" 
                   className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo's GitHub repository</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 