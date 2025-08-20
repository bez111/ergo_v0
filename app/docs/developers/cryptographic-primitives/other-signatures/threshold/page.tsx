import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function ThresholdSignaturesPage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Threshold Signatures
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Threshold signatures are a cryptographic mechanism that allows a subset of a group to collectively sign a transaction, providing enhanced security and distributed trust.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Other Signatures
          </Link>
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/threshold/3-out-of-5"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            3-out-of-5 Threshold Signature
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
        <p className="text-gray-300 mb-8">
          Threshold signatures are a cryptographic mechanism that allows a subset of a group to collectively sign a transaction, providing enhanced security and distributed trust.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-white">Key Characteristics</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>Distributed Signing:</strong> Requires a minimum number of participants to authorize a transaction</li>
          <li><strong>Flexible Thresholds:</strong> Can be configured as k-out-of-n signatures (e.g., 3-out-of-5)</li>
          <li><strong>Multi-Party Computation:</strong> Enables complex collaborative signing scenarios</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Detailed Examples</h2>
        <h3 className="text-2xl font-bold mb-4 text-white">3-out-of-5 Threshold Signature</h3>
        <p className="text-gray-300 mb-6">
          For a comprehensive example, refer to the dedicated tutorial:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/3-out-of-5" className="text-orange-400 hover:text-orange-300">3-out-of-5 Threshold Signature</Link></li>
        </ul>

        <h3 className="text-2xl font-bold mb-4 text-white">Practical Use Cases</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>Corporate Governance:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Multi-signature wallets requiring collective approval</li>
              <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/microcredit" className="text-orange-400 hover:text-orange-300">Microcredit Scenario</Link></li>
            </ul>
          </li>
          <li><strong>Cross-Chain Interoperability:</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/rosen" className="text-orange-400 hover:text-orange-300">Rosen Bridge Mechanisms</Link></li>
            </ul>
          </li>
        </ol>

        <h2 className="text-3xl font-bold mb-6 text-white">Implementation Techniques</h2>
        <p className="text-gray-300 mb-6">
          Ergo supports threshold signatures through its Sigma protocol framework, allowing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li>Proving knowledge of at least k secrets out of n total secrets</li>
          <li>Creating multi-party computational scenarios with robust security guarantees</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Conceptual Implementation</h2>
        <div className="mb-8">
          <CodeBlock language="typescript">`val thresholdSignature = prove {
  atLeastKOutOfN(
    k = 3,  // Minimum signatures required
    n = 5,  // Total possible signers
    publicKeys = List(
      pubKey1, pubKey2, pubKey3, 
      pubKey4, pubKey5
    )
  )
}`</CodeBlock>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-white">Related Cryptographic Concepts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/sigma" className="text-orange-400 hover:text-orange-300">Sigma Protocols</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/dlog" className="text-orange-400 hover:text-orange-300">Discrete Logarithm Proofs</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/ring" className="text-orange-400 hover:text-orange-300">Ring Signatures</Link></li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">Technical Advantages</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><strong>Reduced Single Point of Failure:</strong> No single participant can unilaterally control funds</li>
          <li><strong>Flexible Configuration:</strong> Adaptable to various security requirements</li>
          <li><strong>Privacy Preservation:</strong> Sigma protocols ensure minimal information leakage</li>
        </ul>

        <h2 className="text-3xl font-bold mb-6 text-white">References</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/crypto" className="text-orange-400 hover:text-orange-300">Cryptographic Foundations</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/ergoscript" className="text-orange-400 hover:text-orange-300">ErgoScript Capabilities</Link></li>
        </ul>
      </div>
    </>
  );
} 