"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Cpu } from "lucide-react";

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

export default function FunctionalProgrammingPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Cpu className="w-10 h-10 text-purple-400" />
        Functional Programming in ErgoScript
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
          Functional programming is a significant part of ErgoScript's capabilities. The next examples demonstrate the application of functional features in ErgoScript. Consider a situation where we want to allow a box to be spent only if all the following conditions are met:
        </div>

        <div className="text-gray-300 mb-6">
          1. The spender knows the discrete log of the given elliptic curve (EC) point <code className="bg-neutral-800 px-1 rounded text-xs">0250863ad64a87ae8a2fe83c1af1a8403cb53f53e486d8511dad8a04887e5b2352</code>.
        </div>
        <div className="text-gray-300 mb-6">
          2. All input boxes must be protected by the same ErgoScript program.
        </div>

        <div className="text-gray-300 mb-6">
          The conditions above can be coded into the following program:
        </div>

        <CodeBlock>{`{
   val z = decodePoint(fromBase64("AlCGOtZKh66KL+g8GvGoQDy1P1PkhthRHa2KBIh+WyNS"))
   def sameAsMe(box:Box) = box.propositionBytes == SELF.propositionBytes
   
   proveDlog(z) && INPUTS.forall(sameAsMe)       
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          The{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=ICAgIHsKICAgICAgIHZhbCB6ID0gZGVjb2RlUG9pbnQoZnJvbUJhc2U2NCgiQWxDR090WktoNjZLTCtnOEd2R29RRHkxUDFQa2h0aFJIYTJLQkloK1d5TlMiKSkKICAgICAgIGRlZiBzYW1lQXNNZShib3g6Qm94KSA9IGJveC5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwogICAgICAgcHJvdmVEbG9nKHopICYmIElOUFVUUy5mb3JhbGwoc2FtZUFzTWUpCiAgICB9Cg==" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            address that corresponds to the program above
          </a>{' '}
          is <code className="bg-neutral-800 px-1 rounded">3PwBHASpxaJa5i3vmLtUTvEqjbJWcpqnyuX9hSmUbaK2HAmoDLHmYSMm4up5pCRytSStEhsHnzTfpHzvCRZ</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          The absence of the <code className="bg-neutral-800 px-1 rounded">var</code> keyword might initially seem limiting as it enforces immutability. For example, to calculate the sum of all inputs, you might think about storing the cumulative value in a <code className="bg-neutral-800 px-1 rounded">var</code> and iterating over all inputs, updating the <code className="bg-neutral-800 px-1 rounded">var</code> with each iteration.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          Here's an example of how you can compute the sum of all inputs in ErgoScript. Suppose an additional condition is that the box can only be spent if the sum of all inputs is greater than 1 Erg (or 1000000000 nanoErgs).
        </div>

        <CodeBlock>{`{
   val z = decodePoint(fromBase64("AlCGOtZKh66KL+g8GvGoQDy1P1PkhthRHa2KBIh+WyNS"))
   def sameAsMe(box:Box) = box.propositionBytes == SELF.propositionBytes
   val sum = INPUTS.fold(0L, { (accum:Long, box: Box) => accum + box.value }) 
   
   proveDlog(z) && INPUTS.forall(sameAsMe) && sum > 1000000000       
}`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-3xl">
          This{' '}
          <a href="https://wallet.plutomonkey.com/p2s/?source=ICAgIHsKICAgICAgIHZhbCB6ID0gZGVjb2RlUG9pbnQoZnJvbUJhc2U2NCgiQWxDR090WktoNjZLTCtnOEd2R29RRHkxUDFQa2h0aFJIYTJLQkloK1d5TlMiKSkKICAgICAgIGRlZiBzYW1lQXNNZShib3g6Qm94KSA9IGJveC5wcm9wb3NpdGlvbkJ5dGVzID09IFNFTEYucHJvcG9zaXRpb25CeXRlcwogICAgICAgdmFsIHN1bSA9IElOUFVUUy5mb2xkKDBMLCB7IChhY2N1bTpMb25nLCBib3g6IEJveCkgPT4gYWNjdW0gKyBib3gudmFsdWUgfSkgCiAgICAgICAKICAgICAgIHByb3ZlRGxvZyh6KSAmJiBJTlBVVFMuZm9yYWxsKHNhbWVBc01lKSAmJiBzdW0gPiAxMDAwMDAwMDAwICAgICAgIAogICAgfQo=" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            corresponds to the address
          </a>{' '}
          <code className="bg-neutral-800 px-1 rounded">49AkSSPuVSQHk17C4JLxhqxH7yL5NMWxdEsELp6MNzYeJZvF7iKk3Jgi4fh96o7RJeaU8JSVPvZ5EhCgboQy9d68QreWaYcVxSUcsd8UCamHPsv9kHzqhe4tAM5D7ZmF</code>.
        </div>

        <div className="text-gray-300 mb-6 max-w-3xl">
          These examples demonstrate the power of functional programming in ErgoScript. Despite the apparent restriction of immutability, a wide range of functions can be expressed elegantly and concisely in a functional programming style.
        </div>
      </div>
    </>
  );
} 