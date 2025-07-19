"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import { ChevronLeft, Layers, FileText, Cpu, Shield, RefreshCw, ArrowRight, Package, Download, CheckCircle } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function ModifiersPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Layers className="w-4 h-4" /> P2P Protocol
        </TabsTrigger>
        <TabsTrigger value="exchange" className="flex items-center gap-2 justify-center">
          <RefreshCw className="w-4 h-4" /> Modifier Sync
        </TabsTrigger>
        <TabsTrigger value="processing" className="flex items-center gap-2 justify-center">
          <Cpu className="w-4 h-4" /> Modifier Flow
        </TabsTrigger>
        <TabsTrigger value="validation" className="flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4" /> Validation Rules
        </TabsTrigger>
        <TabsTrigger value="synchronisation" className="flex items-center gap-2 justify-center">
          <FileText className="w-4 h-4" /> Node Sync
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Modifiers
        </h1>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          In Ergo's P2P protocol, the fundamental units of data exchanged between nodes, such as blocks and transactions, are referred to as "modifiers." Modifiers are transmitted as part of the network synchronization process. The Modifier Exchange process encompasses the protocols and systems designed to exchange this information efficiently and securely across the network.
        </p>

        <div className="mb-6">
          <Link
            href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to P2P Overview
          </Link>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              Ergo Block Structure
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The <a href="/Docs/developers/infrastructure/node/protocol/block-p2p" className="text-cyan-400 hover:underline">Ergo block</a>, a critical structure in the Ergo blockchain, differs from many other blockchain systems by comprising four distinct sections (modifiers):
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-300 mb-3">Header</h3>
                <p className="text-gray-300 text-sm">
                  Contains the minimal information necessary to synchronize the chain and validate Proof-of-Work (PoW) correctness. It includes cryptographic hashes (roots) of the other sections.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">Block Transactions</h3>
                <p className="text-gray-300 text-sm">
                  Consists of the ordered sequence of transactions included within the block.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">ADProofs</h3>
                <p className="text-gray-300 text-sm">
                  Contains Authenticated Dictionary proofs associated with the transactions in the BlockTransactions section. These proofs allow light clients to validate transactions against the UTXO set state root hash found in the header.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Extension</h3>
                <p className="text-gray-300 text-sm">
                  Holds supplementary information. This includes <a href="/Docs/introduction/nipopows" className="text-purple-400 hover:underline">interlinks</a> (for NiPoPoWs) and, for blocks at the end of a voting epoch, the blockchain parameters resulting from miner voting.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-400" />
              Header Section
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The table below details the fields contained within the Header modifier:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold">Field</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Size (Bytes)</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-gray-300 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">version</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">1</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Block version number, incremented with each soft or hard fork</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">parentId</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">32</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Identifier of the parent block</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ADProofsRoot</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">32</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Hash of ADProofs for transactions in the block</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">stateRoot</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">32</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Root hash of the authenticated UTXO set state (an AVL+ tree) after applying the block's transactions</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">transactionsRoot</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">32</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Root hash of the Merkle tree of transactions included in the block</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">timestamp</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">8</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Block timestamp (in milliseconds since the beginning of the Unix Epoch)</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">nBits</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">8</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Current difficulty target (encoded in a compressed format)</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">height</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">4</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Block height (distance from the genesis block)</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">extensionRoot</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">32</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Root hash of the block's extension section</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">powSolution</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">75-107</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Solution to the Autolykos v2 Proof-of-Work puzzle</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">votes</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">3</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Bytes representing miner votes for changes in system parameters</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-orange-900/20 border border-orange-400/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-orange-300 mb-3">Calculable Fields</h3>
              <p className="text-gray-300 mb-3">In specific modes, nodes can calculate certain fields independently:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li><strong>parentId:</strong> Calculated when <code className="bg-neutral-800 px-2 py-1 rounded">status==bootstrap</code> AND <code className="bg-neutral-800 px-2 py-1 rounded">PoPoWBootstrap == false</code></li>
                <li><strong>ADProofsRoot:</strong> Calculated when <code className="bg-neutral-800 px-2 py-1 rounded">status==regular</code> AND <code className="bg-neutral-800 px-2 py-1 rounded">ADState==false AND BlocksToKeep&gt;0</code></li>
                <li><strong>stateRoot:</strong> Calculated when <code className="bg-neutral-800 px-2 py-1 rounded">status==regular</code> AND <code className="bg-neutral-800 px-2 py-1 rounded">ADState==false AND BlocksToKeep&gt;0</code></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-purple-400" />
              Extension Section
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Extension section functions as a key-value store capable of holding various data relevant to the block or protocol state.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Structure</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Keys are consistently 2 bytes long</li>
                  <li>• Maximum size for a value is 64 bytes</li>
                  <li>• Total size must not exceed 32,768 bytes</li>
                  <li>• Updated post-EIP-38 (previously 16,384)</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Key Prefixes</h3>
                <div className="space-y-3">
                  <div>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-sm">0x00</code>
                    <p className="text-gray-300 text-sm mt-1">Parameters (blockchain parameters)</p>
                  </div>
                  <div>
                    <code className="bg-neutral-800 px-2 py-1 rounded text-sm">0x01</code>
                    <p className="text-gray-300 text-sm mt-1">Interlinks (NiPoPoW interlinks vector)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-300 mb-3">Predefined Meanings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Parameters (0x00 prefix)</h4>
                  <p className="text-gray-300 text-sm">
                    If the first byte of the key is <code className="bg-neutral-800 px-2 py-1 rounded">0x00</code>, the second byte identifies a specific blockchain parameter (e.g., block size limit, cost per byte). The value associated with this key represents the parameter's value. These are typically included only in blocks at the end of a voting epoch.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Interlinks (0x01 prefix)</h4>
                  <p className="text-gray-300 text-sm">
                    Keys starting with <code className="bg-neutral-800 px-2 py-1 rounded">0x01</code> are used for storing the <a href="/Docs/introduction/nipopows" className="text-purple-400 hover:underline">NiPoPoW interlinks vector</a>. The second byte indicates the level <code className="bg-neutral-800 px-2 py-1 rounded">k</code> of the link. The value contains the actual block ID (32 bytes) representing the link at that level.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="exchange">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Modifier Exchange
        </h1>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          In Ergo's P2P protocol, blocks and transactions are referred to as "modifiers". Modifiers are transmitted between nodes as part of the network synchronization process. The Modifier Exchange process encompasses the protocols and systems in place to exchange this information efficiently and securely across the network.
        </p>

        <div className="mb-6">
          <Link
            href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to P2P Overview
          </Link>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-cyan-400" />
              Understanding Modifiers
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modifiers are fundamental elements in the Ergo network that represent either blocks or transactions. They are crucial for maintaining the state of the blockchain and are exchanged between nodes during the network synchronization process.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              In the Ergo source code, modifiers are represented in a hierarchical structure that differentiates between various types of data exchanged in the network. These include block sections, transactions, and other consensus-critical data.
            </p>
            
            <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-cyan-300 mb-3">Key Components</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong>AbstractModifier:</strong> The base trait for all modifiers.</li>
                <li><strong>Block Sections:</strong> Which include key parts of blocks like <code className="bg-neutral-800 px-2 py-1 rounded">Header</code>, <code className="bg-neutral-800 px-2 py-1 rounded">BlockTransactions</code>, <code className="bg-neutral-800 px-2 py-1 rounded">ADProofs</code>.</li>
                <li><strong>Transactions:</strong> Represented by the <code className="bg-neutral-800 px-2 py-1 rounded">ErgoTransaction</code> class.</li>
              </ul>
              <p className="text-gray-300 mt-4 text-sm">
                For more details, see the <a href="https://github.com/ergoplatform/ergo/tree/master/ergo-core/src/main/scala/org/ergoplatform/modifiers" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Modifiers</a> directory on GitHub.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-orange-400" />
              Modifier Exchange Process
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Modifier Exchange process involves several steps:
            </p>
            
            <div className="space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-300 mb-3">1. Inventory Transmission (Inv)</h3>
                <p className="text-gray-300 mb-4">
                  A node sends an Inv message to its peers to inform them about the new modifiers it has. This message contains identifiers for the modifiers, allowing peers to determine whether they need any of the new data.
                </p>
                <div className="bg-orange-900/20 border border-orange-400/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Code Reference:</strong> The <code className="bg-neutral-800 px-2 py-1 rounded">InvSpec</code> class in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/InvSpec.scala" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">network/message</a> directory handles the construction and parsing of Inv messages.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">2. Modifier Request (RequestModifier)</h3>
                <p className="text-gray-300 mb-4">
                  Upon receiving an Inv message, a node sends a RequestModifier message to request the new modifiers it does not yet possess. This helps nodes synchronize with the most recent state of the blockchain.
                </p>
                <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Code Reference:</strong> The <code className="bg-neutral-800 px-2 py-1 rounded">RequestModifierSpec</code> class in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/RequestModifierSpec.scala" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">network/message</a> directory defines how these requests are structured and transmitted.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">3. Modifier Delivery (Modifier)</h3>
                <p className="text-gray-300 mb-4">
                  The node that initially sent the Inv message responds with a Modifier message that delivers the requested modifiers. This message contains the actual data (e.g., block sections, transactions) needed by the requesting node.
                </p>
                <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4">
                  <p className="text-gray-300 text-sm">
                    <strong>Code Reference:</strong> The <code className="bg-neutral-800 px-2 py-1 rounded">ModifiersSpec</code> class in the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/ModifiersSpec.scala" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">network/message</a> directory is responsible for managing the delivery of modifiers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-6 mt-6">
              <p className="text-gray-300">
                This process ensures that all nodes in the network maintain an up-to-date state of the blockchain, crucial for the integrity and performance of the Ergo network.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-400" />
              Source Code
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For a deeper understanding of how modifiers are implemented and managed in the Ergo network, you can explore the following key components in the Ergo repository:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Core Modifiers</h3>
                <p className="text-gray-300 text-sm mb-4">
                  <a href="https://github.com/ergoplatform/ergo/tree/master/ergo-core/src/main/scala/org/ergoplatform/modifiers" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">src/main/scala/org/ergoplatform/modifiers</a>
                </p>
                <p className="text-gray-300 text-sm">
                  This directory contains the core classes and traits defining the different types of modifiers in the Ergo blockchain.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Message Specifications</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/InvSpec.scala" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">InvSpec.scala</a> - Handles inventory messages</li>
                  <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/RequestModifierSpec.scala" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">RequestModifierSpec.scala</a> - Manages modifier requests</li>
                  <li><a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/ModifiersSpec.scala" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">ModifiersSpec.scala</a> - Oversees modifier delivery</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-6 mt-6">
              <p className="text-gray-300 text-sm">
                By exploring these files, you can gain a comprehensive understanding of how modifiers are exchanged and synchronized across nodes in the Ergo network.
              </p>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="processing">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Modifiers Flow
        </h1>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Ergo's modifiers processing algorithm is a universal mechanism that operates consistently across all security modes. Unlike many blockchain systems, Ergo introduces several types of modifiers, which can be broadly classified into two categories: In-memory and Persistent.
        </p>

        <div className="mb-6">
          <Link
            href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to P2P Overview
          </Link>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-orange-400" />
              In-memory Modifiers
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              In-memory modifiers are temporary and do not persist across sessions. They include:
            </p>
            
            <div className="grid gap-3 mb-8">
              <div className="bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-5 hover:bg-neutral-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-orange-300 mb-1">Transaction</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      A single transaction represents an in-memory modifier.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-5 hover:bg-neutral-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-300 mb-1">TransactionIdsForHeader</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      These are identifiers associated with transactions for a specific block.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-5 hover:bg-neutral-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-300 mb-1">UTXOSnapshotManifest</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      These are identifiers for chunks of the Unspent Transaction Output (UTXO) set.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-cyan-400" />
              Persistent Modifiers
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Persistent modifiers are data elements that are stored and persist across sessions. They play a crucial role in maintaining the continuity and integrity of the Ergo network.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-300 mb-3">1. BlockTransactions</h3>
                <p className="text-gray-300 text-sm">
                  These are sequences of transactions, each corresponding to a single block. They provide a detailed record of all transactions within a block.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">2. ADProofs</h3>
                <p className="text-gray-300 text-sm">
                  These are proofs that validate the correctness of transactions relative to the corresponding Unspent Transaction Output (UTXO). They ensure that all transactions are valid and consistent with the UTXO.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">3. Header</h3>
                <p className="text-gray-300 text-sm">
                  This contains essential data needed to verify Proof of Work (PoW), provides a link to the previous block, and carries the state root hash and root hash to its payload (BlockTransactions, ADProofs, Interlinks, etc). It serves as the backbone of the blockchain, linking all blocks together.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-300 mb-3">4. UTXOSnapshotChunk</h3>
                <p className="text-gray-300 text-sm">
                  This represents a portion of the UTXO set. It allows the UTXO set to be managed in manageable chunks, improving efficiency.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 md:col-span-2">
                <h3 className="text-lg font-bold text-blue-300 mb-3">5. PoPoWProof</h3>
                <p className="text-gray-300 text-sm">
                  This is a proof of Proof of Work (PoPoW) that provides evidence of the computational work done to add a new block to the blockchain.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-400" />
              Security Parameters
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              In addition to these modifiers, Ergo employs certain parameters that define a specific security regime.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">Core Parameters</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li><strong>ADState:</strong> Boolean. If true, only the state root hash is kept.</li>
                  <li><strong>VerifyTransactions:</strong> Boolean. If true, block transactions are downloaded and verified.</li>
                  <li><strong>PoPoWBootstrap:</strong> Boolean. If true, only the PoPoW proof is downloaded.</li>
                  <li><strong>BlocksToKeep:</strong> Integer specifying the number of most recent blocks to retain.</li>
                  <li><strong>MinimalSuffix:</strong> Integer representing the minimal suffix size for the PoPoW proof.</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3">System Constraint</h3>
                <UniversalCopyCodeBlock code={`if(VerifyTransactions == false) require(BlocksToKeep == 0)`} />
              </div>
            </div>
            
            <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-300 mb-3">Mode Identification</h3>
              <UniversalCopyCodeBlock code={`mode = if(ADState == false && VerifyTransactions == true
    && PoPoWBootstrap == false && BlocksToKeep < 0) "full"
else if(ADState == false && VerifyTransactions == true
    && PoPoWBootstrap == false && BlocksToKeep >= 0) "pruned-full"
else if(ADState == true && VerifyTransactions == true
    && PoPoWBootstrap == false) "light-full"
else if(ADState == true && VerifyTransactions == false
    && PoPoWBootstrap == true && BlocksToKeep == 0) "light-spv"
else if(ADState == true && VerifyTransactions == true
    && PoPoWBootstrap == true && BlocksToKeep == 0) "light-full-PoPoW"
else //Other combinations are possible`} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-green-400" />
              Bootstrapping
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Bootstrapping is the initial setup process that prepares the node for transaction processing. It involves two main steps:
            </p>
            
            <div className="space-y-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">1. Downloading Headers</h3>
                <p className="text-gray-300 mb-4">
                  The process depends on the <code className="bg-neutral-800 px-2 py-1 rounded">PoPoWBootstrap</code> parameter. If <em>true</em>, the node sends a <code className="bg-neutral-800 px-2 py-1 rounded">GetPoPoWProof</code> request to peers. Upon receiving the <code className="bg-neutral-800 px-2 py-1 rounded">PoPoWProof</code>, it applies it to the History component. If <em>false</em>, the node updates the headers chain to the best known chain in the network using the standard synchronization process.
                </p>
              </div>

              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">2. Downloading Initial State</h3>
                <p className="text-gray-300 mb-4">
                  The system checks the <code className="bg-neutral-800 px-2 py-1 rounded">ADState</code> and <code className="bg-neutral-800 px-2 py-1 rounded">BlocksToKeep</code> settings to determine how to initialize the state.
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• If <code className="bg-neutral-800 px-2 py-1 rounded">ADState</code> is <em>true</em>, the state is initialized with the state root hash from the header of the block <code className="bg-neutral-800 px-2 py-1 rounded">BlocksToKeep</code> blocks ago.</li>
                  <li>• If <code className="bg-neutral-800 px-2 py-1 rounded">BlocksToKeep</code> is less than 0 (meaning keep all blocks) or greater than the current known header height, the state is initialized with the genesis state.</li>
                  <li>• Otherwise (for pruned modes with <code className="bg-neutral-800 px-2 py-1 rounded">ADState = false</code>), the system requests a historical <code className="bg-neutral-800 px-2 py-1 rounded">UTXOSnapshotManifest</code> corresponding to the state <code className="bg-neutral-800 px-2 py-1 rounded">BlocksToKeep</code> blocks back.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg font-bold text-green-300 mb-3">Download headers</h3>
                <p className="text-gray-300 mb-4">
                  Depending on the <strong>PoPoW</strong> value, the process varies.
                </p>
                <p className="text-gray-300 mb-4">
                  If <strong>PoPoW</strong> is <em>true</em>:
                </p>
                <UniversalCopyCodeBlock code={`1.1.1. Send GetPoPoWProof(suffix = Max(MinimalSuffix ,BlocksToKeep)) for all connections
1.1.2. On receive PoPoWProof, apply it to History`} />
                <p className="text-gray-300 mt-4">
                  If PoPoW is false, update the headers chain to the best in the network.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-300 mb-3">Download initial State to start processing transactions</h3>
                <p className="text-gray-300 mb-4">
                  The system checks for the ADState and BlocksToKeep values to decide how to initialize the state.
                </p>
                <UniversalCopyCodeBlock code={`if(ADState == true) {
  Initialize state with state roothash from block header BlocksToKeep ago
} else if(BlocksToKeep < 0 || BlocksToKeep > History.headersHeight) {
  Initialize state with genesis State
} else {
/*
We need to download full state BlocksToKeep back in history
TODO what if we can download state only "BlocksToKeep - N"
or "BlocksToKeep + N" blocks back?
*/
  2.1. Request historical UTXOSnapshotManifest for at least BlocksToKeep back
  2.2. On receiving UTXOSnapshotManifest:
    UTXOSnapshotManifest.chunks.foreach ( chunk => request chunk from sender()
/*Or from random fullnode*/
  2.3. On receiving UTXOSnapshotChunk
  State.applyChunk(UTXOSnapshotChunk) match {
     case Success(Some(newMinimalState)) => GOTO 3
     case Success(None) => stay at 2.3
     /*we need more chunks to construct state. TODO periodicaly request missed chunks*/
     case Failure(e) => ???
     /*UTXOSnapshotChunk or constcucted state roothash is invalid*/
  }
}`} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-300 mb-3">Update State to best headers height</h3>
                <p className="text-gray-300 mb-4">
                  Depending on the values of State.bestHeader, History.bestHeader, and VerifyTransactions, the state is updated accordingly.
                </p>
                <UniversalCopyCodeBlock code={` if(State.bestHeader == History.bestHeader) {
    //Do nothing, State is already updated
  } else if(VerifyTransactions == false) {
/*Just update State rootshash to best header in history*/
    State.setBestHeader(History.bestHeader)
  } else {
/*we have headers chain better than full block */
    3.1.
      assert(history contains header chain from State.bestHeader to History.bestHeaders)
      History.continuation(from = State.bestHeader, size = ???).get.foreach { header =>
        sendToRandomFullNode(GetBlockTransactionsForHeader(header))
        if(ADState == true) sendToRandomFullNode(GetADProofsForHeader(header))
      }
    3.2. On receiving modifiers ADProofs or BlockTransactions
      /*TODO History should return non-empty ProgressInfo
      only if it contains both ADProofs and BlockTransactions,
      or it contains BlockTransactions and ADState==false*/
      if(History.apply(modifier) == Success(ProgressInfo)) {
        if(State().apply(ProgressInfo) == Success((newState, ADProofs))) {
          if(ADState==false) ADProofs.foreach ( ADProof => History.apply(ADProof))
          if(BlocksToKeep>=0)
          /*remove BlockTransactions and ADProofs older than BlocksToKeep from history*/
        } else {
      /*Drop Header from history,
      because it's transaction sequence is not valid*/
          History.drop(modifier.headerId)
        }
      } else {
        blacklistPeer
      }
      GOTO 3
    }`} />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-400" />
              Regular Mode
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              In regular mode, the system operates two infinite loops in separate threads, each performing a distinct function:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">1. Updating Headers Chain</h3>
                <p className="text-gray-300 text-sm">
                  This loop continuously updates the headers chain to match the best in the network.
                </p>
              </div>
              
              <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">2. Downloading Full Blocks</h3>
                <p className="text-gray-300 text-sm">
                  This loop is responsible for downloading and updating full blocks as needed.
                </p>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-blue-300 mb-3">updateHeadersChainToBestInNetwork Function</h3>
              <UniversalCopyCodeBlock code={`def updateHeadersChainToBestInNetwork() = {
  1.2.1. Send ErgoSyncInfo message to connected peers
  1.2.2. Get response with INV message,
  containing ids of blocks, better than our best block
  1.2.3. Request headers for all ids from 1.2.2.
  1.2.4. On receiving header
   if(History.apply(header).isSuccess) {
      if(!(localScore == networkScore)) GOTO 1.2.1
   } else {
      blacklist peer
      GOTO 1.2.1
   }
}`} />
            </div>
            
            <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-300 mb-3">Processing Logic</h3>
              <p className="text-gray-300 mb-4">
                The specific actions taken within these loops depend on the values of <code className="bg-neutral-800 px-2 py-1 rounded">State.bestHeader</code>, <code className="bg-neutral-800 px-2 py-1 rounded">History.bestHeader</code>, and <code className="bg-neutral-800 px-2 py-1 rounded">VerifyTransactions</code>.
              </p>
              <UniversalCopyCodeBlock code={`if(State.bestHeader == History.bestHeader) {
    // No action is taken as the state is already updated
} else if(VerifyTransactions == false) {
    // The state root hash is updated to the best header in history
    State.setBestHeader(History.bestHeader)
} else {
    // If the headers chain is better than the full block
    // Request transaction ids from all headers without transactions
    assert(history contains header chain from State.bestHeader to History.bestHeaders)
    History.continuation(from = State.bestHeader, size = ???).get.foreach { header =>
        sendToRandomFullNode(GetTransactionIdsForHeader(header))
        if(ADState == true) sendToRandomFullNode(GetADProofsForHeader(header))
    }
    // On receiving TransactionIdsForHeader
    Mempool.apply(TransactionIdsForHeader)
    TransactionIdsForHeader.filter(txId => !MemPool.contains(txId)).foreach { txId =>
        request transaction with txId
    }
    // On receiving a transaction
    if(Mempool.apply(transaction).isSuccess) {
        // Broadcast INV for this transaction
        Mempool.getHeadersWithAllTransactions { BlockTransactions =>
            // Now we have BlockTransactions
            // Continue with the next step
        }
    }
    // Continue with the process as described in the bootstrap section
}`} />
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="validation">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ergo Modifiers Validation
        </h1>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          This section contains a list of all consensus-critical validation rules that every node in the network should perform; rules that are not listed in this table should not be considered consensus-critical and enforced by the network.
        </p>

        <div className="mb-6">
          <Link
            href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to P2P Overview
          </Link>
        </div>

        <div className="bg-orange-900/20 border border-orange-400/30 rounded-xl p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Every rule is enumerated and is initially activated. Rules that could not lead to money printing and are not enforced by serialisers may be disabled later by a miner voting via soft forks, while new rules may also be added at the same time.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange-400" />
              Transaction Validation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold w-16">Id</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Validation Rule</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-green-300 font-semibold w-24">Soft-forkable</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-blue-300 font-semibold w-16">Active</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-purple-300 font-semibold w-32">Modifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">100</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A transaction should have at least one input.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">101</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A transaction should have at least one output.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">102</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A number of transaction inputs should not exceed 32767.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">103</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A number of data inputs should not exceed 32767.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">104</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A number of transaction outputs should not exceed 32767.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">105</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Erg amount for a transaction output must not be negative.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">106</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Total output value must not exceed 9223372036854775807.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">107</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">There should be no duplicate inputs.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">108</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">All token amounts of transaction outputs should be positive.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">109</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A number of tokens within a box should not exceed 255 and sum of assets of one type should not exceed 9223372036854775807.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">111</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Every output of the transaction should contain at least &lt;minValuePerByte * outputSize&gt; nanoErgs.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">112</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Transaction outputs should have creationHeight not exceeding block height.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">113</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Every input of the transaction should be in UTXO.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">114</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Every data input of the transaction should be in UTXO.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">115</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Sum of transaction inputs should not exceed 9223372036854775807.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">116</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Amount of Ergs in inputs should be equal to amount of Erg in outputs.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">117</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">For every token, its amount in outputs should not exceed its amount in inputs.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">119</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Scripts of all transaction inputs should pass verification.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">120</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Box size should not exceed 4096.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">121</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Box proposition size should not exceed 4096.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">122</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Transaction outputs should have non-negative creationHeight.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              Header Validation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold w-16">Id</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Validation Rule</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-green-300 font-semibold w-24">Soft-forkable</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-blue-300 font-semibold w-16">Active</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-purple-300 font-semibold w-32">Modifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">200</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Genesis header should have genesis parent id.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">201</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Genesis header id should be equal to id from the config.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">203</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Genesis height should be 1.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">205</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header timestamp should be greater than the parent's.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">206</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header height should be greater by one than the parent's.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">207</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header should contain correct PoW solution.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">208</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header should contain correct required difficulty.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">209</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header height should not be older than current height minus &lt;config.keepVersions&gt;.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">210</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Parent header should not be marked as invalid.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">212</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Number of non-zero votes should be &lt;= 2.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">213</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header votes should contain no duplicates.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">214</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header votes should contain no contradictory votes.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">215</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">First header of an epoch should not contain a vote for unknown parameter.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">216</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">First v2 header on mainnet at height 417,729 should have ID = 0ba60a7db44877aade553beb05200f7d67b586945418d733e455840d283e0508.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-green-400" />
              Block Sections Validation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold w-16">Id</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Validation Rule</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-green-300 font-semibold w-24">Soft-forkable</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-blue-300 font-semibold w-16">Active</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-purple-300 font-semibold w-32">Modifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">300</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Double application of a modifier is prohibited.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Header, ADProofs, Extension, BlockTransactions</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">302</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Block sections should correspond to the declared header.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ADProofs, Extension, BlockTransactions</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">303</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">A header for the block section should not be marked as invalid.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ADProofs, Extension, BlockTransactions</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">305</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Block section should correspond to a block header that is not pruned yet.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ADProofs, Extension, BlockTransactions</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">306</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Size of block transactions section should not exceed &lt;maxBlockSize&gt;.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">BlockTransactions</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">307</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Accumulated cost of block transactions should not exceed &lt;maxBlockCost&gt;.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoTransaction, BlockTransactions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-400" />
              Extension Validation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold w-16">Id</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Validation Rule</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-green-300 font-semibold w-24">Soft-forkable</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-blue-300 font-semibold w-16">Active</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-purple-300 font-semibold w-32">Modifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">400</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Size of extension section should not exceed 32768.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">401</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Interlinks should be packed properly.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">402</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Interlinks should have the correct structure.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">403</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension fields key length should be 2.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">404</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension field value length should be &lt;= 64.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">405</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">An extension should not contain duplicate keys.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">406</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension of non-genesis block should not be empty.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">407</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Voting for fork could be started only after activation period of a previous soft-fork.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">408</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">At the beginning of the epoch, the extension should contain correctly packed parameters.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">409</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">At the beginning of the epoch, the extension should contain all the system parameters.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">410</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Versions in header and parameters section should be equal.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">411</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">At the beginning of the epoch, the extension should contain correctly packed validation settings.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">412</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">At the beginning of the epoch, the extension should contain all the validation settings.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Extension</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-400" />
              Block Application to State Validation
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl border border-neutral-700 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800">
                  <tr>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-orange-300 font-semibold w-16">Id</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-cyan-300 font-semibold">Validation Rule</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-green-300 font-semibold w-24">Soft-forkable</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-blue-300 font-semibold w-16">Active</th>
                    <th className="border border-neutral-700 px-2 py-2 text-left text-purple-300 font-semibold w-32">Modifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-900/50">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">500</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Operations against the state AVL+ tree should be successful.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoFullBlock</td>
                  </tr>
                  <tr className="bg-neutral-900">
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300 font-mono">501</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">Calculated AVL+ digest should be equal to one written in the block header.</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">x</td>
                    <td className="border border-neutral-700 px-2 py-2 text-green-400">√</td>
                    <td className="border border-neutral-700 px-2 py-2 text-gray-300">ErgoFullBlock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </TabsContent>

      <TabsContent value="synchronisation">
        <div className="mb-6">
          <Link
            href="/Docs/developers/infrastructure/node/protocol/p2p-protocol-overview"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to P2P Overview
          </Link>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-green-400" />
              Blockchain Synchronization
            </h2>
            
            <p className="text-gray-300 mb-6">
              In Ergo, modifiers (blocks, transactions, etc.) progress through several states during the synchronization process:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-orange-300 mb-2">Unknown</h3>
                <p className="text-gray-300 text-sm">The node is unaware of this modifier, or the synchronization process for it hasn't started.</p>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-300 mb-2">Requested</h3>
                <p className="text-gray-300 text-sm">The modifier has been requested from one or more peers.</p>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Received</h3>
                <p className="text-gray-300 text-sm">The modifier's data has been received from a peer but has not yet been fully validated and applied.</p>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">Held</h3>
                <p className="text-gray-300 text-sm">The modifier has been successfully validated and applied. Persistent Modifiers are held by the History component, while Ephemeral Modifiers are held by the Mempool.</p>
              </div>
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h3 className="font-semibold text-red-300 mb-2">Invalid</h3>
                <p className="text-gray-300 text-sm">The modifier has been determined to be permanently invalid according to consensus rules.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              The primary goal of the synchronization process is to transition necessary modifiers from the <strong>Unknown</strong> state to the <strong>Held</strong> state, thereby bringing the node's view of the blockchain up-to-date with the network.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-cyan-400" />
              Transition from Unknown to Requested
            </h2>
            
            <p className="text-gray-300 mb-4">
              The transition of a modifier from the Unknown state to the Requested state can occur in different ways, depending on the current node status (bootstrapping/stable) and the type of modifier.
            </p>
            
            <h3 className="font-semibold text-orange-300 mb-3">Inv Protocol</h3>
            <p className="text-gray-300 mb-4">
              The Inv (inventory) protocol is a communication protocol used during the synchronization process. It involves the following steps:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">1. Creating Inv Message</h4>
                <p className="text-gray-300 text-sm">An Inv message contains pairs of <code className="bg-neutral-700 px-1 rounded">(ModifierTypeId, Seq[ModifierId])</code>. When Node A sends an Inv message to Node B, it signals that Node A possesses the listed modifiers and is prepared to send them upon request from Node B.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">2. Broadcasting Inv Message</h4>
                <p className="text-gray-300 text-sm mb-2">A node broadcasts Inv messages primarily in two scenarios:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>When it successfully applies a new modifier (like a block header or transaction) to its History or Mempool. This helps propagate new information quickly across the network, especially when nodes are already synchronized.</li>
                  <li>In response to receiving an <code className="bg-neutral-700 px-1 rounded">ErgoSyncInfo</code> message from a peer (see Headers Synchronization below).</li>
                </ul>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">3. Receiving Inv Message</h4>
                <p className="text-gray-300 text-sm">Upon receiving an Inv message from a peer, a node:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>Filters the list to identify modifiers it doesn't already know about (i.e., those currently in the <strong>Unknown</strong> state).</li>
                  <li>Requests these unknown modifiers from the peer that sent the Inv message.</li>
                  <li>Transitions the state of these requested modifiers to <strong>Requested</strong>.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-green-400" />
              Headers Synchronization
            </h2>
            
            <p className="text-gray-300 mb-4">
              Headers synchronization is the initial step in the synchronization process. It ensures that a node's headers chain is in sync with the network. The process involves the following steps:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">1. Sending ErgoSyncInfo</h4>
                <p className="text-gray-300 text-sm">Periodically (every <code className="bg-neutral-700 px-1 rounded">syncInterval</code>), a node calculates and sends an <code className="bg-neutral-700 px-1 rounded">ErgoSyncInfo</code> message to a selection of its peers (<code className="bg-neutral-700 px-1 rounded">peersToSyncWith()</code>). This message contains the IDs of the last <code className="bg-neutral-700 px-1 rounded">ErgoSyncInfo.MaxBlockIds</code> headers in its current best chain, allowing peers to compare chains.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">2. Triggering ErgoSyncInfo</h4>
                <p className="text-gray-300 text-sm">To speed up synchronization, a node might also send an <code className="bg-neutral-700 px-1 rounded">ErgoSyncInfo</code> message more frequently if its headers chain is lagging behind the network's perceived best chain, but the number of headers it still needs to request is relatively small (e.g., less than <code className="bg-neutral-700 px-1 rounded">desiredInvObjects / 2</code>).</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">3. Receiving ErgoSyncInfo</h4>
                <p className="text-gray-300 text-sm">Upon receiving an <code className="bg-neutral-700 px-1 rounded">ErgoSyncInfo</code> message from a peer, a node compares the received header IDs with its own chain to determine the relative status (<code className="bg-neutral-700 px-1 rounded">OtherNodeSyncingStatus</code>: Younger, Older, Equal, Nonsense, or Unknown). Based on this comparison, it identifies any headers the sender might be missing from its own chain.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">4. Responding with Inv</h4>
                <p className="text-gray-300 text-sm">The node then constructs and sends an Inv message back to the original sender, containing the IDs of up to <code className="bg-neutral-700 px-1 rounded">maxInvObjects</code> headers that the sender appears to be missing. This helps the sender catch up.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-400" />
              Block Section Synchronization
            </h2>
            
            <p className="text-gray-300 mb-4">
              Block section synchronization is a crucial step that occurs after applying headers. A node synchronizes block sections (BlockTransactions, Extension, and ADProofs), the amount and composition of which may vary based on node settings. The process involves the following steps:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">1. Identifying Needed Modifiers</h4>
                <p className="text-gray-300 text-sm">Periodically (every <code className="bg-neutral-700 px-1 rounded">syncInterval</code>), a node determines the next set of block sections (<code className="bg-neutral-700 px-1 rounded">BlockTransactions</code>, <code className="bg-neutral-700 px-1 rounded">Extension</code>, <code className="bg-neutral-700 px-1 rounded">ADProofs</code>) it needs to download (<code className="bg-neutral-700 px-1 rounded">nextModifiersToDownload()</code>). This typically corresponds to the headers it has received but for which it lacks the full block data, starting from its current best <em>fully validated</em> block height.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">2. Requesting Modifiers</h4>
                <p className="text-gray-300 text-sm">The node requests these needed modifiers from random peers (as it doesn't know which specific peer has them). The state of these modifiers transitions to <strong>Requested</strong>.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">3. Triggering Downloads</h4>
                <p className="text-gray-300 text-sm">To speed up synchronization, the node might also request <code className="bg-neutral-700 px-1 rounded">nextModifiersToDownload()</code> more frequently if its header chain is synchronized but it's lagging behind in downloading block sections, provided the number of pending sections is small (e.g., less than <code className="bg-neutral-700 px-1 rounded">desiredInvObjects / 2</code>).</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">4. Applying Block Header (Triggering Download)</h4>
                <p className="text-gray-300 text-sm">When a node successfully applies a new block header while its header chain is considered synchronized, the History component might return <code className="bg-neutral-700 px-1 rounded">ProgressInfo</code> indicating which block sections (<code className="bg-neutral-700 px-1 rounded">ToDownload</code>) are now needed to fully validate and apply this new block and potentially older blocks.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">5. Processing ToDownload Request</h4>
                <p className="text-gray-300 text-sm">When the NodeViewSynchronizer (NVS) receives this <code className="bg-neutral-700 px-1 rounded">ToDownload</code> information (either from periodic checks or header application), it requests the necessary modifiers from random peers, transitioning their state to <strong>Requested</strong>.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-purple-400" />
              Transition from Requested to Received
            </h2>
            
            <p className="text-gray-300 mb-4">
              The transition from the Requested state to the Received state involves the following steps:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">1. Tracking Requests</h4>
                <p className="text-gray-300 text-sm">When a node requests a modifier from a specific peer, it records this request (modifier ID and peer) in its <code className="bg-neutral-700 px-1 rounded">DeliveryTracker</code>. It also schedules a <code className="bg-neutral-700 px-1 rounded">CheckDelivery</code> message to itself after a <code className="bg-neutral-700 px-1 rounded">deliveryTimeout</code>.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">2. Receiving Modifiers</h4>
                <p className="text-gray-300 text-sm">When a node receives a modifier:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>It checks if the modifier was requested from the sending peer using the <code className="bg-neutral-700 px-1 rounded">DeliveryTracker</code>.</li>
                  <li>If it was requested, the NodeViewSynchronizer (NVS) attempts to parse and perform initial validation on the received data.</li>
                </ul>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">3. Handling Invalid Modifiers</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>If the received data fails parsing or initial validation (e.g., incorrect format, size limits exceeded), the NVS penalizes the sending peer and transitions the modifier's state to <strong>Invalid</strong>.</li>
                  <li>If the peer provided syntactically correct but semantically incorrect modifier bytes (which might fail later validation stages), the NVS penalizes the peer, and the modifier might revert to <strong>Unknown</strong> or be marked <strong>Invalid</strong> depending on the failure type.</li>
                </ul>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">4. Processing Valid Modifiers</h4>
                <p className="text-gray-300 text-sm">If the modifier passes initial parsing and validation, the NVS sends it to the NodeViewHolder (NVH) for further processing and transitions the modifier's state to <strong>Received</strong>.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">5. Checking Delivery Timeout</h4>
                <p className="text-gray-300 text-sm">When the scheduled <code className="bg-neutral-700 px-1 rounded">CheckDelivery</code> message is processed:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                  <li>If the modifier is already in the <strong>Received</strong> or <strong>Held</strong> state, no action is needed.</li>
                  <li>If the modifier is still in the <strong>Requested</strong> state (i.e., not delivered within the timeout), the node might retry the request a few times (<code className="bg-neutral-700 px-1 rounded">maxDeliveryChecks</code>).</li>
                  <li>If delivery ultimately fails after retries, the node penalizes the peer from which it was requested (unless it was requested from a random peer initially) and transitions the modifier's state back to <strong>Unknown</strong> so it can be requested again later, potentially from a different peer.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Transition from Received to Held
            </h2>
            
            <p className="text-gray-300 mb-4">
              The transition from the Received state to the Held state involves the following steps:
            </p>
            
            <div className="space-y-4">
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">1. Receiving Modifiers</h4>
                <p className="text-gray-300 text-sm">When the NodeViewHolder (NVH) receives new modifiers (in the <strong>Received</strong> state) from the NVS, it stores them temporarily in its <code className="bg-neutral-700 px-1 rounded">modifiersCache</code>.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">2. Applying Modifiers</h4>
                <p className="text-gray-300 text-sm">The NVH attempts to apply modifiers from the cache to the History and State components in the correct order (respecting dependencies).</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">3. Handling Successful Application</h4>
                <p className="text-gray-300 text-sm">For every modifier successfully applied (passing all validation rules and updating History/State), the NVH publishes a <code className="bg-neutral-700 px-1 rounded">SyntacticallySuccessfulModifier</code> event. Upon receiving this event, the NVS transitions the modifier's state to <strong>Held</strong>.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">4. Handling Cache Size Limit</h4>
                <p className="text-gray-300 text-sm">If the <code className="bg-neutral-700 px-1 rounded">modifiersCache</code> exceeds its size limit after attempting applications, the NVH removes older or less relevant modifiers from the cache.</p>
              </div>
              
              <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                <h4 className="font-semibold text-green-300 mb-2">5. Handling Processing Results</h4>
                <p className="text-gray-300 text-sm">After attempting to apply modifiers, the NVH publishes a <code className="bg-neutral-700 px-1 rounded">ModifiersProcessingResult</code> message listing which modifiers were successfully applied and which were removed from the cache (potentially because they were invalid or their dependencies weren't met yet). When the NVS receives this message, it transitions any modifiers that were removed from the cache <em>without</em> being successfully applied back to the <strong>Unknown</strong> state, allowing them to be potentially requested and processed again later. Modifiers that failed validation might be transitioned to <strong>Invalid</strong>.</p>
              </div>
            </div>
          </section>
        </div>
      </TabsContent>
    </Tabs>
  );
} 