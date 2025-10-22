"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Handshake, Code, Clock, Server } from "lucide-react";

export default function P2PHandshakePage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Handshaking in P2P Protocol
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
        This document outlines the procedure and format of handshake messages, which are essential for establishing a connection with another peer.
      </p>

      <div className="bg-cyan-900/20 border border-cyan-400/30 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <Code className="w-6 h-6 text-cyan-400 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Implementation Examples</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/ErgoSocket.java" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Ergonnection
                </a> - a P2P Java library for Ergo, which provides practical implementation of the handshake process, socket management, and message handling.
              </li>
              <li>
                <a href="https://github.com/SabaunT/ergo-handshake" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Ergo Handshake
                </a> - a repository that provides a reference implementation of the handshake process in the Ergo protocol.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Handshake className="w-6 h-6 text-orange-400" />
          Peer Features
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Peer features are properties that describe a peer. A peer can have multiple features, which are embedded in a handshake message and remain constant throughout the connection. Features are optional, and a peer can add new ones. If a feature is unrecognized by another peer, it will be skipped. The format of the feature is arbitrary, and any number can be added to the handshake, subject to the handshake message size limit of 8 KB.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Before version 3.3.7, the reference client only supported the "mode feature" (which describes the operating regime of the peer). Since version 3.3.7, a new feature that describes network magic and a pseudorandom session ID has been added.
        </p>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
          <h4 className="text-lg font-bold text-cyan-300 mb-3">Example Implementation</h4>
          <p className="text-gray-300 mb-3">
            In the <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/records/Feature.java" 
                       className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergonnection library</a>, the <code className="bg-neutral-800 px-2 py-1 rounded">Feature</code> class represents individual peer features with an <code className="bg-neutral-800 px-2 py-1 rounded">id</code> and <code className="bg-neutral-800 px-2 py-1 rounded">data</code>. The features are serialized and deserialized to be included in handshake messages, ensuring that they can be transmitted and interpreted correctly during the handshake.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-green-400" />
          Handshake Format
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The table below outlines the format of a handshake message:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Length</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field Name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">6-8</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Time</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Reported handshake time (VLQ-encoded, 6 bytes now, 8 bytes max)</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Agent name length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of an agent name string (unsigned byte)</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">0-255</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Agent name</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Agent name (e.g., "Cypra wallet") in UTF-8 encoding, 255 bytes max</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">3</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Network protocol version</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Protocol version (e.g., [0, 1, 1])</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Peer name length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of peer name string</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-4 text-orange-300">For Client Capabilities (Mode Feature):</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Length</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field Name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature id</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">For mode feature = 16</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1-2</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature body length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of feature description (VLQ-encoded, up to 2 bytes)</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">State type</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">State representation, 0 = UTXO, 1 = digest</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Whether the peer is verifying transactions</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1 = transactions being verified, 0 = not verified</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Whether the node bootstrapped via NiPoPoW</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1 if yes, 0 if no (then following field is missed)</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">(4)</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">NiPoPoW suffix length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Suffix length for NiPoPoW bootstrapping</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1-4</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">How many blocks kept</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Signed integer (ZigZag then VLQ encoded), if -1 then all blocks are stored</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-cyan-300 mb-3">Example Implementation</h4>
          <p className="text-gray-300">
            The <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/records/Peer.java" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Peer class</a> in the Ergonnection library represents a peer in the network, including features such as agent name, peer name, version, and a list of features. This class handles serialization and deserialization of peer data during the handshake process.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-4 text-orange-300">For Session Peer Feature Introduced in 3.3.7:</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-neutral-800">
              <tr>
                <th className="border border-neutral-700 px-4 py-3 text-left text-orange-300 font-semibold">Length</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-cyan-300 font-semibold">Field Name</th>
                <th className="border border-neutral-700 px-4 py-3 text-left text-gray-300 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature id</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">For session feature = 3</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">1-2</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Feature body length</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Length of feature description (VLQ-encoded, up to 2 bytes)</td>
              </tr>
              <tr className="bg-neutral-900/50">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">4</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Network magic</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Network magic bytes, see notes</td>
              </tr>
              <tr className="bg-neutral-900">
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">8</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">Session id</td>
                <td className="border border-neutral-700 px-4 py-3 text-gray-300">64 bits long random session ID</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-900/20 border border-orange-400/30 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-orange-300 mb-3">Notes:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>For the testnet, magic bytes are <code className="bg-neutral-800 px-2 py-1 rounded">[2, 0, 0, 1]</code> (in decimal). For mainnet, <code className="bg-neutral-800 px-2 py-1 rounded">[1, 0, 2, 4]</code> (in decimal).</li>
            <li>For IPv4 or IPv6 address bytes, "The result is in network byte order: the highest order byte of the address is in <code className="bg-neutral-800 px-2 py-1 rounded">getAddress()[0]</code>." Please check <code className="bg-neutral-800 px-2 py-1 rounded">Inet4Address.getAddress()</code> or <code className="bg-neutral-800 px-2 py-1 rounded">Inet6Address.getAddress()</code> in Java's JDK for details.</li>
            <li>For the reference client, the session ID is currently used only to avoid connections to self.</li>
          </ol>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h4 className="text-lg font-bold text-cyan-300 mb-3">Example Implementation</h4>
          <p className="text-gray-300">
            The <code className="bg-neutral-800 px-2 py-1 rounded">Protocol</code> class in the <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/protocol/Protocol.java" 
                   className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergonnection library</a> manages the deserialization of various protocol messages, including those that handle session features. This ensures that features such as network magic and session IDs are correctly processed during the handshake.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-green-400" />
          Handshake Procedure
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          A peer sends a handshake message, and another peer replies. If no handshake is received within the <code className="bg-neutral-800 px-2 py-1 rounded">handshakeTimeout</code>, the connection is dropped. The default value for <code className="bg-neutral-800 px-2 py-1 rounded">handshakeTimeout</code> is 30 seconds.
        </p>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h4 className="text-lg font-bold text-cyan-300 mb-3">Example Implementation</h4>
          <p className="text-gray-300">
            In the <a href="https://github.com/Satergo/Ergonnection/blob/master/src/main/java/com/satergo/ergonnection/ErgoSocket.java" 
                       className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoSocket class</a>, the handshake process is handled through methods like <code className="bg-neutral-800 px-2 py-1 rounded">sendHandshake()</code> and <code className="bg-neutral-800 px-2 py-1 rounded">acceptHandshake()</code>, which manage the serialization and deserialization of handshake data, including the peer's features and session information.
          </p>
        </div>
      </section>
    </>
  );
} 