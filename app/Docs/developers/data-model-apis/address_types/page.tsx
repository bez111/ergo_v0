"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";
import { Key, Shield, Code, FileText } from "lucide-react";

export default function AddressTypesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Address Types
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/Docs/developers/data-model-apis"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Data Model & APIs
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Network Types</h2>
          <p className="text-gray-300 mb-4">Possible network types are:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Mainnet - <code className="bg-neutral-700 px-2 py-1 rounded">0x00</code></li>
            <li>Testnet - <code className="bg-neutral-700 px-2 py-1 rounded">0x10</code></li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Address Types</h2>
          <p className="text-gray-300 mb-4">Address types are (semantics described below):</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><code className="bg-neutral-700 px-2 py-1 rounded">0x01</code> - Pay-to-PublicKey(P2PK) address</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">0x02</code> - Pay-to-Script-Hash(P2SH)</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">0x03</code> - Pay-to-Script(P2S)</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Content Bytes Formation</h2>
          <p className="text-gray-300 mb-4">For an address type, we form content bytes as follows:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>P2PK</b> - serialized (compressed) public key</li>
            <li><b>P2SH</b> - first 192 bits of the Blake2b256 hash of serialized script bytes</li>
            <li><b>P2S</b> - serialized script (this is where mining rewards go!)</li>
          </ul>
          
          <p className="text-gray-300 mt-4">For example:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Sending 10 ERG to a <b>P2PK</b> address usually means that a corresponding transaction will contain a box in which 10 Ergs are locked by a public key encoded in the <b>P2PK</b> Address.</li>
            <li>Similarly, in the case of a <b>P2S</b> address, the box will be locked by a script encoded in the Address.</li>
            <li>In the most complicated case of a <b>P2SH</b> script, the box will be protected by a special predefined script that takes the first 192 bits of <em>Blake2b256</em> hash value for a script shown by an input spending the box.</li>
          </ul>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Address Examples</h2>
          
          <h3 className="text-xl font-semibold mb-3 text-orange-400">Testnet Examples:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 mb-6">
            <li><b>P2PK</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">3WvsT2Gm4EpsM9Pg18PdY6XyhNNMqXDsvJTbbf6ihLvAmSb7u5RN</code>)</li>
            <li><b>P2SH</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">rbcrmKEYduUvADj9Ts3dSVSG27h54pgrq5fPuwB</code>)</li>
            <li><b>P2S</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">Ms7smJwLGbUAjuWQ</code>)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-orange-400">Mainnet Examples:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>P2PK</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA</code>)</li>
            <li><b>P2SH</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">8UApt8czfFVuTgQmMwtsRBZ4nfWquNiSwCWUjMg</code>)</li>
            <li><b>P2S</b> (<code className="bg-neutral-700 px-2 py-1 rounded text-sm">4MQyML64GnzMxZgm, BxKBaHkvrTvLZrDcZjcsxsF7aSsrN73ijeFZXtbj4CXZHHcvBtqSxQ</code>)</li>
          </ul>

          <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mt-4">
            <p className="text-orange-300 text-sm">
              <b>Note:</b> <b>P2S</b> can start with any number, D, M, or any other of base58. <code className="bg-neutral-700 px-2 py-1 rounded">9</code> is always a <b>P2PK</b> address on the mainnet.
            </p>
          </div>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Summary</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>Prefix byte</b> = <code className="bg-neutral-700 px-2 py-1 rounded">network type + address type</code>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li className="text-sm">(for example, P2S script on the testnet starts with <code className="bg-neutral-700 px-2 py-1 rounded">0x13</code> before Base58)</li>
              </ul>
            </li>
            <li><b>checksum</b> = <code className="bg-neutral-700 px-2 py-1 rounded">leftmost_4_bytes (blake2b256 (prefix byte || content bytes))</code></li>
            <li><b>address</b> = <code className="bg-neutral-700 px-2 py-1 rounded">prefix byte || content bytes || checksum</code></li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-400">P2S vs P2SH</h2>
          <div className="bg-neutral-900/50 border border-neutral-600 rounded-lg p-4 mb-4">
            <p className="text-gray-300 font-semibold">
              Typically most people use P2S because it is a lot easier to use. P2SH means you have to keep the contract ready off-chain to be submitted when you create the transaction, and if you lose it, then your funds are stuck forever.
            </p>
          </div>
          
          <p className="text-gray-300 mb-4">
            This also makes it harder for other people to use your dApp as they need the contract themselves, rather than just the address. P2SH is technically cheaper since you store less data on-chain, but likely we won't see anyone using P2SH until we start to get heavy load on-chain.
          </p>

          <p className="text-gray-300">
            P2SH is a good candidate for a pre-defined contract template (in terms of <Link href="/Docs/developers/eip5" className="text-orange-400 hover:underline">EIP-5</Link>) From this perspective context var id can be a template parameter. So fixing concrete id is not necessary. The template hex can be created once and then used across dApps. Sigma already support ContractTemplate, and the corresponding code can be made available in Fleet via Sigma-js.
          </p>
        </div>
      </div>
    </div>
  );
} 