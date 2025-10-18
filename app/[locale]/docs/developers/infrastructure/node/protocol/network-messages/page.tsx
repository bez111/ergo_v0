"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, MessageSquare, Code, Database, FileText, Github } from "lucide-react";

export default function NetworkMessagesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Network Messages in Ergo's P2P Protocol
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
        This document provides a detailed overview of the network messages in Ergo's P2P protocol. Understanding these messages is crucial for interacting with the Ergo network at a low level. Each message in the protocol has a specific format and serves a unique purpose in the communication between nodes.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-cyan-400" />
          Message Format
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Every message in the P2P protocol has the following format:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[4]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Magic bytes</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">For the mainnet, the magic bytes are <code className="bg-neutral-800 px-2 py-1 rounded">[1, 0, 2, 4]</code>. For testnet, <code className="bg-neutral-800 px-2 py-1 rounded">[2, 0, 0, 1]</code>.</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Message code</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">One byte describing message type</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">int</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Message body length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">No <code className="bg-neutral-800 px-2 py-1 rounded">VLQ</code> or <code className="bg-neutral-800 px-2 py-1 rounded">ZigZag</code> encoding is used for the message length (for historical reasons); bytes are coming in big-endian order.</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[4]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Handshake body checksum</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">First four bytes of blake2b256(message body)</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[bodyLength]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Message body</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Message body</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <Code className="w-6 h-6 text-cyan-400 mt-1" />
            <div>
              <p className="text-gray-300">
                For more detailed implementation, you can check out the <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/scala/org/ergoplatform/network/ErgoNodeViewSynchronizer.scala" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Node View Synchronizer</a> in the Ergo repository.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-green-400" />
          Records
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Records are structured data types used in the P2P protocol. They include Peer, Feature, Modifier, and Header records.
        </p>

        <h3 className="text-xl font-bold mb-4 text-orange-300">Peer</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of next field</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">UTF-8 String</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Agent name</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[3]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Version</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">For example, <code className="bg-neutral-800 px-2 py-1 rounded">[4, 0, 25]</code></td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of next field</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">UTF-8 String</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Peer name</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">boolean</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Whether public address exists</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">(unsigned byte)</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of the IP plus 4</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">When decoding, subtract the value with 4 to get the actual length</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">(byte[ipLength - 4])</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">The public IP address</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">(VLQ unsigned int)</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Port</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of peer features</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature[featureCount]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Features</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4 text-orange-300">Feature</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature code</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned short</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Body length</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[bodyLength]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Body</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4 text-orange-300">Modifier (Record)</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[32]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Modifier ID</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned int</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of object</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[objectLength]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Object</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4 text-orange-300">Header</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned short</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of bytes</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[length]</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Bytes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300">
            For a deeper understanding of how records are serialized, check out the <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/serialization/ErgoSerializer.scala" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Serialization Documentation</a>.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-orange-400" />
          Messages
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Messages are the primary means of communication between nodes in the P2P network. They include Get Peers, Peers, Sync Info, Inv, Request Modifier, and Modifier messages.
        </p>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Get Peers</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-2"><strong>Code = 1</strong></p>
          <p className="text-gray-300">The body is empty.</p>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Peers</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 2</strong></p>
          <p className="text-gray-300 mb-4">Sent in response to Get Peers. Contains all the peers that are currently connected to. Used for node discovery.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ ZZ int</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of peers</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Peer[]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Peers</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-300 mt-4">
            For the Java implementation of the <code className="bg-neutral-800 px-2 py-1 rounded">GetPeers</code> message, refer to <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/messages/GetPeers.java" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergonnection</a>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Sync Info</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 65</strong></p>
          <p className="text-gray-300 mb-4"><strong>New (Added in 4.0.16)</strong></p>
          <p className="text-gray-300 mb-4">It is sent only to nodes that report a version of 4.0.16 or higher. For older nodes, the <a href="#sync-info-old" className="text-cyan-400 hover:underline">Sync Info (old)</a> is sent.</p>
          <p className="text-gray-300 mb-4">Requests an <a href="#inv" className="text-cyan-400 hover:underline">Inv</a> message that provides modifier IDs required by the sender to synchronize their blockchain with the recipient. It allows a peer which has been disconnected or started for the first time to get the data it needs to request the blocks it hasn't seen.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned short</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">The constant value 0</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">The constant value -1</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of headers</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Header[headerCount]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Headers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300" id="sync-info-old">Sync Info (old)</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 65</strong></p>
          <p className="text-gray-300 mb-4">The old (before 4.0.16) version of the Sync Info message.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned short</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of last header IDs</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[32][lastHeaderIdCount]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Last header IDs (ID byte arrays)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300" id="inv">Inv</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 55</strong></p>
          <p className="text-gray-300 mb-4">Transmits one or more inventories of objects known to the transmitting peer.</p>
          <p className="text-gray-300 mb-4">It can be sent unsolicited to announce new transactions or blocks, or it can be sent in reply to a <a href="#sync-info" className="text-cyan-400 hover:underline">Sync Info</a> message.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Type ID</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned int</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of elements</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[32][elementCount]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Elements (ID byte arrays)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-300 mt-4">
            For an example of how INV messages are handled, see <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-core/src/main/scala/org/ergoplatform/network/message/InvSpec.scala" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">InvSpec.scala</a>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Request Modifier</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 22</strong></p>
          <p className="text-gray-300 mb-4">Requests one or more modifiers from another node. The objects are requested by an inventory, which the requesting node typically received previously with an <a href="#inv" className="text-cyan-400 hover:underline">Inv</a> message.</p>
          <p className="text-gray-300 mb-4">This message cannot be used to request arbitrary data, such as historic transactions no longer in the memory pool. Full nodes may not even be able to provide older blocks if they've pruned old transactions from their block database.</p>
          <p className="text-gray-300 mb-4">For this reason, this message should usually only be used to request data from a node that previously advertised it had that data by sending an <a href="#inv" className="text-cyan-400 hover:underline">Inv</a> message.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Modifier type ID</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned int</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of elements</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">byte[32][elementCount]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Elements (ID byte arrays)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 text-cyan-300">Modifier</h3>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <p className="text-gray-300 mb-4"><strong>Code = 33</strong></p>
          <p className="text-gray-300 mb-4">Sent in response to Request Modifier.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Data type</th>
                  <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">unsigned byte</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Type ID</td>
                </tr>
                <tr className="bg-neutral-900">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">VLQ unsigned int</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Count of modifiers</td>
                </tr>
                <tr className="bg-neutral-900/50">
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Modifier[modifierCount]</td>
                  <td className="border border-neutral-700 px-4 py-3 text-gray-300">Modifiers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Github className="w-6 h-6 text-green-400" />
          Pull Requests (PRs) & Tests
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The <a href="https://github.com/ergoplatform/ergo/issues/1365" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">NiPoPoW powered bootstrapping PR #1365</a> is a relevant enhancement that introduces a method to bootstrap nodes using Non-Interactive Proofs of Proof-of-Work (NiPoPoWs).
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Tests for parsing networking messages against test vectors are discussed in PR <a href="https://github.com/ergoplatform/ergo/pull/1264" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">#1264</a>, which includes:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Enhanced validation with <code className="bg-neutral-800 px-2 py-1 rounded">require()</code> for non-elidable checks.</li>
          <li>Simplified test vectors for invalid PoW solution validation and handshake parsing.</li>
          <li>Introduced SyncInfo networking message parsing test (can be used as a simple spec).</li>
        </ul>
        <p className="text-gray-300 mb-6 leading-relaxed">
          These tests ensure robust handling of network messages in Ergo's P2P protocol.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-orange-400" />
          Demo Applications
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Demo applications are available for practical implementation, such as:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><strong>Address Generation</strong>: <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/test/java/org/ergoplatform/wallet/AddressGenerationDemo.java" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">AddressGenerationDemo</a></li>
          <li><strong>Transaction JSON Printing</strong>: <a href="https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/test/java/org/ergoplatform/wallet/CreateTransactionDemo.java" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">CreateTransactionDemo</a></li>
        </ul>
        <p className="text-gray-300 mb-6 leading-relaxed">
          These demos provide examples of how to generate addresses and print transactions using the Ergo wallet functionalities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-6 h-6 text-cyan-400" />
          Resources
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>A simple implementation of VLQ and ZigZag encoding can be found <a href="https://gist.github.com/satsen/5e7bcc38565ad193cf7d906a856f804e" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">here</a>.</li>
          <li>A complete implementation of the P2P protocol written in Java can be found in <a href="https://github.com/Satergo/Ergonnection" 
                 className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergonnection</a>.</li>
        </ul>
      </section>
    </>
  );
} 