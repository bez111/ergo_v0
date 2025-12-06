
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function RingSignaturesPage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Ring Signatures
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Advanced privacy-preserving cryptographic technique that allows a user to sign a transaction on behalf of a group without revealing which specific group member signed it.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Other Signatures
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
        <p className="text-gray-300 mb-8">
          Ring signatures are an advanced privacy-preserving cryptographic technique that allows a user to sign a transaction on behalf of a group without revealing which specific group member signed it.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>Anonymity:</strong> Provides plausible deniability by obscuring the actual signer</li>
          <li><strong>Privacy:</strong> Prevents tracing the origin of a signature to a specific participant</li>
          <li><strong>Flexible Composition:</strong> Implemented through Ergo's Sigma protocols</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Use Cases</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>Anonymous Transactions:</strong> Enabling privacy in blockchain transactions</li>
          <li><strong>Decentralized Mixers:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/mixer" className="text-orange-400 hover:text-orange-300">ErgoMixer Privacy Protocol</Link></li>
              <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/zerojoin" className="text-orange-400 hover:text-orange-300">ZeroJoin Privacy Mechanism</Link></li>
            </ul>
          </li>
          <li><strong>Confidential Voting:</strong> Where the voter's identity must remain secret</li>
        </ol>

        <h2 className="text-3xl font-bold mb-6 text-white">Technical Implementation</h2>
        <p className="text-gray-300 mb-6">
          In Ergo, ring signatures are implemented using Sigma protocols, allowing for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li>Proving knowledge of one secret from a set of secrets</li>
          <li>Creating cryptographic proofs that obfuscate the true signer</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4 text-white">Example Scenario</h3>
        <div className="mb-8">
          <CodeBlock language="typescript">
    {`// Simplified conceptual representation
val ringSignature = prove {
  atLeastOneOf(
    List(
      proveDlog(pubKey1),
      proveDlog(pubKey2),
      proveDlog(pubKey3)
    )
  )
}`}
  </CodeBlock>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Related Cryptographic Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/dlog" className="text-orange-400 hover:text-orange-300">Discrete Logarithm Proofs</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-orange-400 hover:text-orange-300">Threshold Signatures</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/sigma" className="text-orange-400 hover:text-orange-300">Sigma Protocols Overview</Link></li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Privacy Mechanisms</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>ZeroJoin:</strong> A privacy protocol leveraging ring signatures to restore fungibility</li>
          <li><strong>ErgoMixer:</strong> A non-custodial mixing service using ring signature techniques</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Advanced Applications</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/crypto" className="text-orange-400 hover:text-orange-300">Cryptographic Foundations in Ergo</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/schnorr" className="text-orange-400 hover:text-orange-300">Schnorr Signatures and Privacy</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/sigma-chains" className="text-orange-400 hover:text-orange-300">Sidechains and Interoperability</Link></li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Security Considerations</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li>Computational complexity makes tracing the original signer computationally infeasible</li>
          <li>Relies on the hardness of the discrete logarithm problem</li>
          <li>Provides strong privacy guarantees without compromising blockchain security</li>
        </ul>
      </div>
    </>
  );
} 