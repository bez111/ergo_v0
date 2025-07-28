"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Key } from "lucide-react";

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

export default function PublicKeysPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Key className="w-10 h-10 text-yellow-400" />
        Public Key Scripts in ErgoScript
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
          ErgoScript, the smart contract language in Ergo, allows for the creation of scripts that can be spent by specific individuals, thereby increasing its practical utility. This is achieved by enabling someone to spend a box if they possess the private key corresponding to a certain public key, a concept similar to P2PK (Pay to Public Key) addresses in Bitcoin.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          ErgoScript offers several methods for creating these "public-key" scripts. The most commonly used method involves the predicate <code className="bg-neutral-800 px-1 rounded">proveDlog(ecPoint)</code>. This predicate returns true if the spender can provide a valid proof of knowledge of the discrete logarithm corresponding to <code className="bg-neutral-800 px-1 rounded">ecPoint</code>—a point on an elliptic curve over a finite field. This is akin to providing a "signature" in Bitcoin.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Ergo uses the same{' '}
          <a href="https://en.bitcoin.it/wiki/Secp256k1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Secp256k1 curve as Bitcoin
          </a>, so the representation of <code className="bg-neutral-800 px-1 rounded">ecPoint</code> is identical: a 33-byte array where the first byte indicates the sign. (Note: Ergo does not support uncompressed points). However, Ergo differs from Bitcoin in that it uses Schnorr signatures, not ECDSA, to construct these proofs.
        </div>

        <div className="text-gray-300 mb-6">
          Here's a step-by-step guide to creating an address that encodes the <code className="bg-neutral-800 px-1 rounded">proveDlog</code> script:
        </div>

        <div className="text-gray-300 mb-6">
          1. First, obtain the Elliptic Curve (EC) point that corresponds to the public key. For this example, we'll use{' '}
          <a href="https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            the same one as Bitcoin
          </a>.
        </div>
        
        <div className="text-gray-300 mb-4 ml-8">
          1. The BigInteger secret, hex-encoded, is <code className="bg-neutral-800 px-1 rounded">18e14a7b6a307f426a94f8114701e7c8e774e7f9a47e2c2035db29a206321725</code>.
        </div>
        <div className="text-gray-300 mb-4 ml-8">
          2. The corresponding EC point, hex-encoded, is <code className="bg-neutral-800 px-1 rounded">0250863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352</code>.
        </div>
        <div className="text-gray-300 mb-6 ml-8">
          3. Convert the EC point from hex to Base64, which gives <code className="bg-neutral-800 px-1 rounded">AlCGOtZKh66KL+g8GvGoQDy1P1PkhthRHa2KBIh+WyNS</code>.
        </div>

        <div className="text-gray-300 mb-6">
          2. Then, create the corresponding script <code className="bg-neutral-800 px-1 rounded">proveDlog(decodePoint(fromBase64("AlCGOtZKh66KL+g8GvGoQDy1P1PkhthRHa2KBIh+WyNS")))</code>.
        </div>

        <div className="text-gray-300 mb-6">
          3. Compile the script. This{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=cHJvdmVEbG9nKGRlY29kZVBvaW50KGZyb21CYXNlNjQoIkFsQ0dPdFpLaDY2S0wrZzhHdkdvUUR5MVAxUGtodGhSSGEyS0JJaCtXeU5TIikpKQ==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            results in the address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">LQ7iQ4egnCPsZZy5QKsXmaypCRuMxPNtdyGE95fYWCLze8C2hMMwDcAgPNeV8s</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Funds sent to the above address can be spent using the secret mentioned earlier. You can verify this in the transaction with ID{' '}
          <a href="https://explorer.ergoplatform.com/en/transactions/dfca9eaa745c79dafbed43b73379fb0008608119080954c337a4022a2a5070a3" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-mono text-sm">
            dfca9eaa745c79dafbed43b73379fb0008608119080954c337a4022a2a5070a3
          </a>.
        </div>
      </div>
    </>
  );
} 