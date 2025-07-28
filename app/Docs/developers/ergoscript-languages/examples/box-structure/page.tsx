"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Database } from "lucide-react";

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

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function BoxStructurePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Database className="w-10 h-10 text-green-400" />
        Deep Dive into ErgoScript's Box Structure
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-3xl">
          In Ergo's ecosystem, the term 'box' is more than just an unspent transaction output balance. It's a versatile container that holds various types of information (value, tokens, custom data, etc.), making Ergo's boxes highly flexible and functional. This functionality allows for complex operations, such as executing scripts or smart contracts, directly on the blockchain.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          The <code className="bg-neutral-800 px-1 rounded">INPUTS</code> and <code className="bg-neutral-800 px-1 rounded">OUTPUTS</code> in ErgoScript are arrays, each consisting of <code className="bg-neutral-800 px-1 rounded">Box</code> type objects. A <code className="bg-neutral-800 px-1 rounded">Box</code> encapsulates the following key fields:
        </div>

        <div className="text-gray-300 mb-6">
          1. <code className="bg-neutral-800 px-1 rounded">value</code>: The amount held in the box, denoted in nanoErgs.
        </div>
        <div className="text-gray-300 mb-6">
          2. <code className="bg-neutral-800 px-1 rounded">propositionBytes</code>: The script, serialized into a byte array.
        </div>
        <div className="text-gray-300 mb-6">
          3. <code className="bg-neutral-800 px-1 rounded">tokens</code>: An optional field that holds an array of tokens or assets.
        </div>
        <div className="text-gray-300 mb-6">
          4. <code className="bg-neutral-800 px-1 rounded">R4..R9</code>: These are the registers of a box, capable of storing any type of data.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Each element in the <code className="bg-neutral-800 px-1 rounded">tokens</code> array is a pair, structured as <code className="bg-neutral-800 px-1 rounded">(tokenId, amount)</code>. Here, <code className="bg-neutral-800 px-1 rounded">tokenId</code> is a 32-byte array, and <code className="bg-neutral-800 px-1 rounded">amount</code> is a <code className="bg-neutral-800 px-1 rounded">Long</code> value.
        </div>

        <CodeBlock>{`{
   val out = OUTPUTS(0)
   val token = out.tokens(0)
   token._1 == fromBase64("nZdrGUBMAfIO6lmSRJq2zEUKGCOeYOYzAeIqbfYs8sg=")  &&
   token._2 == 1 
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          In this script, <code className="bg-neutral-800 px-1 rounded">out</code> is the first output box, and <code className="bg-neutral-800 px-1 rounded">token</code> is the first token in this box. The script checks if the <code className="bg-neutral-800 px-1 rounded">tokenId</code> of this token matches the given base64-encoded string and if the amount of the token is 1.
        </div>
      </div>
    </>
  );
} 