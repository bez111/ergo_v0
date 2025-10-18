"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, FileText } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "json" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function FormatPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <FileText className="w-10 h-10 text-blue-400" />
        Box Format
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/wallet-interaction"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-lg text-gray-300 mb-6 max-w-2xl">
          In Ergo's protocol, a 'box' is a fundamental entity that encapsulates various types of information. It is not just an unspent transaction output (UTXO) balance, but a versatile container that can hold value, tokens, custom data, and more. This flexibility allows for complex operations, such as running scripts or smart contracts, directly on the blockchain.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Registers in a Box</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          A box is composed of <strong>registers</strong>. Each box can have up to 10 registers, denoted as R₀, R₁, ..., R₉. Out of these, four registers are mandatory and contain specific values:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li><strong>R₀:</strong> Contains the monetary value of the box, stored as a VLQ-encoded unsigned long.</li>
          <li><strong>R₁:</strong> Contains a serialized guard script (ErgoScript), which dictates the conditions under which the box can be spent.</li>
          <li><strong>R₂:</strong> Contains tokens, represented as pairs of token identifiers (32 bytes) and their respective amounts (VLQ-encoded integers).</li>
          <li><strong>R₃:</strong> Contains metadata including the declared creation height, the unique identifier of the transaction that created the box, and the index of the box in the transaction outputs.</li>
        </ul>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Each register is an expression in the Sigma language, meaning every register contains a value of a specific type. The value in a register should be a concrete constant value, not a function of a known output type.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Additional Registers</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The registers R₄ to R₉ are optional and can be used to store additional data relevant to the transaction or smart contract. These registers follow the same serialization rules as the mandatory ones, but they are serialized without any delimiters, each as a Sigma expression.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Serialization Format</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Box bytes are critical for various functions like obtaining the box identifier, building authenticated trees for the blockchain state, and constructing transactions. The serialization of a box follows a specific structure:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong>Monetary Value:</strong> Serialized as a VLQ-encoded unsigned long value.</li>
          <li><strong>Script Bytes:</strong> The serialized script (from R₁) is wrapped in a constant array of constant bytes.</li>
          <li><strong>Creation Height:</strong> Serialized as a VLQ-encoded unsigned integer.</li>
          <li><strong>Number of Tokens:</strong> Represented as a one-byte unsigned integer. Each token in the box is a tuple (token_identifier, amount), where the identifier is 32 bytes and the amount is a VLQ-encoded integer.</li>
          <li><strong>Additional Registers:</strong> Serialized without any delimiters. The number of non-empty registers is represented as a 1-byte unsigned integer.</li>
          <li><strong>Transaction Identifier:</strong> A 32-byte identifier of the transaction that created the box.</li>
          <li><strong>Index of Transaction Output:</strong> Serialized as a VLQ-encoded index of the box in the transaction outputs.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Box Candidate</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          A <strong>Box Candidate</strong> is a preliminary version of a box used during transaction creation. It holds the same values in all registers as a fully formed box, except for R₃. In a Box Candidate, R₃ is initialized with a placeholder value <code className="bg-neutral-800 px-1 rounded">(creation_height, 0³⁴*⁸)</code> where a 34-byte string of zeros replaces the actual transaction ID and output index. This indicates that the box candidate is not yet associated with a specific transaction or output index.
        </div>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Once the transaction is confirmed on the blockchain, the placeholder in R₃ is replaced with the actual transaction ID and output index, finalizing the box.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Transaction Format</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          An Ergo transaction consists of three parts:
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">1. Inputs</h3>
            <div className="text-gray-300 mb-2">
              Links to boxes that will be removed from the state during transaction application. Each input consists of:
            </div>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>A box ID.</li>
              <li>A proof for the final Sigma proposition of this box-protecting script.</li>
              <li>A context extension used during script evaluation.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">2. Data Inputs</h3>
            <div className="text-gray-300">
              Links to boxes that will not be removed from the state but will be available in the context of regular input scripts. This allows transactions to reference additional data without consuming the box.
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">3. Outputs</h3>
            <div className="text-gray-300">
              New boxes that will be included in the state during transaction application.
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Transaction Serialization</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li><strong>Inputs Number:</strong> VLQ-encoded number of inputs.</li>
          <li><strong>Inputs:</strong> Each input is serialized as a 32-byte ID of the box to be spent, the VLQ-encoded length of the signature, the signature itself, and the context extension (as key-value pairs).</li>
          <li><strong>Number of Data Inputs:</strong> VLQ-encoded number of data inputs.</li>
          <li><strong>Data Inputs:</strong> 32-byte length IDs of data boxes.</li>
          <li><strong>Distinct Tokens Number:</strong> Number of distinct tokens in the transaction, represented as a 1-byte unsigned integer.</li>
          <li><strong>Token IDs:</strong> 32-byte length IDs of tokens in the transaction.</li>
          <li><strong>Outputs Number:</strong> VLQ-encoded number of transaction outputs.</li>
          <li><strong>Box Candidates:</strong> Each Box Candidate is serialized similarly to box bytes, but without the transaction identifier and output index. Tokens are represented as index -{'>'} amount pairs, where the index is a 1-byte index of the token in the token IDs section.</li>
        </ul>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Signing a Transaction</h3>
        <div className="text-gray-300 mb-8 max-w-2xl">
          Input signatures are created by signing the <code className="bg-neutral-800 px-1 rounded">bytesToSign(tx)</code> message, which is calculated as the transaction bytes with all signatures set to zero (VLQ-encoded length of zero). The transaction ID is calculated as a Blake2b256 hash of this message.
        </div>
      </div>
    </>
  );
} 