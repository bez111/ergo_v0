"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";
import { Shield, Code, Eye, FileText } from "lucide-react";

export default function AddressValidationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Address Validation
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
          <h2 className="text-2xl font-bold mb-4 text-teal-400">Validation Resources</h2>
          <p className="text-gray-300 mb-4">
            <a href="https://github.com/kushti/ergo-simple-addresses" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-simple-addresses</a> contains few zero-dependencies Java-friendly utils for working with addresses. The <Link href="/Docs/developers/guide" className="text-orange-400 hover:underline">Integration Guide for Exchanges</Link> may also be relevant. There is also a simple method in <a href="https://github.com/fleet-sdk/fleet/blob/master/packages/core/src/models/ergoAddress.ts#L164" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet</a>.
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Address Length Limits</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>P2S</b> has no limit since it is the serialized script.</li>
            <li><b>P2SH</b> is 192 bits since it is the "first 192 bits of the Blake2b256 hash of serialized script bytes."</li>
            <li><b>P2PK</b> length is fixed. You can use the <a href="https://github.com/ergoplatform/ergo-appkit/blob/9e19c13d82966eaee59433d16c4fb987bea363a7/lib-impl/src/main/java/org/ergoplatform/appkit/impl/OutBoxBuilderImpl.scala#L66" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">linked class</a> to validate an address (it gives a runtime exception when created from an invalid string).</li>
          </ul>
        </div>

        <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-400 flex items-center gap-2">
            <Eye className="w-6 h-6" /> Script Visibility
          </h2>
          <p className="text-gray-300">
            In P2S, everyone can see the script; in P2SH, the script will be known when it will be spent.
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Prefix Bytes</h2>
          <p className="text-gray-300 mb-4">
            P2SH has <code className="bg-neutral-700 px-2 py-1 rounded">0x12</code> at the beginning, and P2S has <code className="bg-neutral-700 px-2 py-1 rounded">0x13</code> on testnet and <code className="bg-neutral-700 px-2 py-1 rounded">0x02</code> and <code className="bg-neutral-700 px-2 py-1 rounded">0x03</code> on mainnet accordingly (note that in hex, you can see that, but in base58, it can change to anything).
          </p>
        </div>

        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Example: Base58 to Hex</h2>
          <p className="text-gray-300 mb-4">As you can see</p>
          
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Base58 Address:</p>
            <UniversalCopyCodeBlock
              code="88dhgzEuTXaRxf1rbqBRZ6Zbw9iigdB4PCdjyFKLrk22gnmjKcxZBe53vqJVetRa4tTNF9oowQWPp2c6"
            />
          </div>

          <p className="text-gray-300 mb-4">equals</p>

          <div>
            <p className="text-gray-400 text-sm mb-2">Hex representation:</p>
            <UniversalCopyCodeBlock
              code="03 10 02 04 a0 0b 08 cd 02 a1 f5 67 16 cb 8d f4 fe b9 37 14 37 90 4b 91 25 b8 2d b9 39 23 8c d7 d9 48 78 6d b3 3d e3 13 9f ea 02 d1 92 a3 9a 8c c7 a7 01 73 00 73 01 8c 23 55 af"
            />
          </div>
          
          <p className="text-gray-300 mt-4">
            Note the <b className="text-orange-400">03</b> prefix at the beginning, which indicates this is a P2S address on mainnet.
          </p>
        </div>
      </div>
    </div>
  );
} 