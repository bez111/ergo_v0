"use client";

import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function FormatPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Box Format
      </h1>
      
      {/* Back Button */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Link
          href="/Docs/developers/data-model-apis/composing/wallet-interaction"
          className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300">
            In Ergo's protocol, a 'box' is a fundamental entity that encapsulates various types of information. It is not just an unspent transaction output (UTXO) balance, but a versatile container that can hold value, tokens, custom data, and more. This flexibility allows for complex operations, such as running scripts or smart contracts, directly on the blockchain.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Registers in a Box</h2>
          <p className="text-gray-300 mb-4">
            A box is composed of <b>registers</b>. Each box can have up to 10 registers, denoted as $R_0, R_1, \dots, R_9$. Out of these, four registers are mandatory and contain specific values:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>$R_0$</b>: Contains the monetary value of the box, stored as a VLQ-encoded unsigned long.</li>
            <li><b>$R_1$</b>: Contains a serialized guard script (ErgoScript), which dictates the conditions under which the box can be spent.</li>
            <li><b>$R_2$</b>: Contains tokens, represented as pairs of token identifiers (32 bytes) and their respective amounts (VLQ-encoded integers).</li>
            <li><b>$R_3$</b>: Contains metadata including the declared creation height, the unique identifier of the transaction that created the box, and the index of the box in the transaction outputs.</li>
          </ul>
          
          <p className="text-gray-300 mt-4">
            Each register is an expression in the Sigma language, meaning every register contains a value of a specific type. These types are defined in <Link href="/Docs/developers/data-model-apis/types" className="text-orange-400 hover:underline">this document</Link>. The value in a register should be a concrete constant value, not a function of a known output type.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">Additional Registers</h3>
          <p className="text-gray-300">
            The registers $R_4$ to $R_9$ are optional and can be used to store additional data relevant to the transaction or smart contract. These registers follow the same serialization rules as the mandatory ones, but they are serialized without any delimiters, each as a Sigma expression.
          </p>
        </div>

        <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Box Serialization Format</h2>
          <p className="text-gray-300 mb-4">
            Box bytes are critical for various functions like obtaining the box identifier, building authenticated trees for the blockchain state, and constructing transactions. The serialization of a box follows a specific structure:
          </p>
          
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>Monetary Value</b>: Serialized as a VLQ-encoded unsigned long value.</li>
            <li><b>Script Bytes</b>: The serialized script (from $R_1$) is wrapped in a constant array of constant bytes.</li>
            <li><b>Creation Height</b>: Serialized as a VLQ-encoded unsigned integer.</li>
            <li><b>Number of Tokens</b>: Represented as a one-byte unsigned integer. Each token in the box is a tuple $(token\_identifier, amount)$, where the identifier is 32 bytes and the amount is a VLQ-encoded integer.</li>
            <li><b>Additional Registers</b>: Serialized without any delimiters. The number of non-empty registers is represented as a 1-byte unsigned integer.</li>
            <li><b>Transaction Identifier</b>: A 32-byte identifier of the transaction that created the box.</li>
            <li><b>Index of Transaction Output</b>: Serialized as a VLQ-encoded index of the box in the transaction outputs.</li>
          </ul>
        </div>

        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Box Candidate</h2>
          <p className="text-gray-300 mb-4">
            A <b>Box Candidate</b> is a preliminary version of a box used during transaction creation. It holds the same values in all registers as a fully formed box, except for $R_3$. In a Box Candidate, $R_3$ is initialized with a placeholder value $(creation\_height, 0^{34*8})$ where a 34-byte string of zeros replaces the actual transaction ID and output index. This indicates that the box candidate is not yet associated with a specific transaction or output index.
          </p>
          
          <p className="text-gray-300">
            Once the transaction is confirmed on the blockchain, the placeholder in $R_3$ is replaced with the actual transaction ID and output index, finalizing the box.
          </p>
        </div>

        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Transaction Format</h2>
          <p className="text-gray-300 mb-4">
            An Ergo transaction consists of three parts:
          </p>
          
          <ol className="list-decimal list-inside ml-4 space-y-4 text-gray-300">
            <li>
              <b>Inputs</b>: Links to boxes that will be removed from the state during transaction application. Each input consists of:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>A box ID.</li>
                <li>A proof for the final Sigma proposition of this box-protecting script.</li>
                <li>A context extension used during script evaluation.</li>
              </ul>
            </li>
            
            <li>
              <b>Data Inputs</b>: Links to boxes that will not be removed from the state but will be available in the context of regular input scripts. This allows transactions to reference additional data without consuming the box.
            </li>
            
            <li>
              <b>Outputs</b>: New boxes that will be included in the state during transaction application.
            </li>
          </ol>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">Transaction Serialization</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li><b>Inputs Number</b>: VLQ-encoded number of inputs.</li>
            <li><b>Inputs</b>: Each input is serialized as a 32-byte ID of the box to be spent, the VLQ-encoded length of the signature, the signature itself, and the context extension (as key-value pairs).</li>
            <li><b>Number of Data Inputs</b>: VLQ-encoded number of data inputs.</li>
            <li><b>Data Inputs</b>: 32-byte length IDs of data boxes.</li>
            <li><b>Distinct Tokens Number</b>: Number of distinct tokens in the transaction, represented as a 1-byte unsigned integer.</li>
            <li><b>Token IDs</b>: 32-byte length IDs of tokens in the transaction.</li>
            <li><b>Outputs Number</b>: VLQ-encoded number of transaction outputs.</li>
            <li><b>Box Candidates</b>: Each Box Candidate is serialized similarly to box bytes, but without the transaction identifier and output index. Tokens are represented as index → amount pairs, where the index is a 1-byte index of the token in the token IDs section.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3 text-purple-300">Signing a Transaction</h3>
          <p className="text-gray-300">
            Input signatures are created by signing the <code className="bg-neutral-700 px-2 py-1 rounded">bytesToSign(tx)</code> message, which is calculated as the transaction bytes with all signatures set to zero (VLQ-encoded length of zero). The transaction ID is calculated as a Blake2b256 hash of this message.
          </p>
        </div>
      </div>
    </div>
  );
} 