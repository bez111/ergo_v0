
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */
import React from "react";
import { ArrowLeft, KeyRound } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { CodeBlock } from "@/components/ui";

export default function SchnorrPage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Schnorr Signature
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          In the simplest case, a signature in an Ergo transaction is a <strong>Schnorr signature</strong>. In more complex cases, it corresponds to a <strong>subset of Generalized Schnorr Proofs</strong>, which are used in privacy-preserving applications and advanced cryptographic protocols.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          The <strong>Schnorr signature</strong> is a core cryptographic primitive in Ergo, used both in basic transaction validation and as part of more complex proof systems. It is simple, efficient, and secure, making it an ideal choice for the wide range of cryptographic functionalities in Ergo.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/cryptographic-primitives"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Cryptographic Primitives
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-4 text-white">Overview</h2>

        <p className="text-gray-300 mb-6">
          Ergo's Schnorr signatures are implemented using the <strong>SecP256K1 elliptic curve</strong>, the same curve used in Bitcoin. The flexibility of Schnorr signatures enables Ergo to support a range of applications, from simple transactions to more advanced multi-signature schemes and privacy-enhancing protocols.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Key Properties:</h3>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Elliptic Curve</strong>: Ergo uses <strong>SecP256K1</strong>, ensuring compatibility with Bitcoin-based systems.</li>
          <li><strong>Generalized Proofs</strong>: In Ergo, Schnorr signatures can be generalized into complex Sigma protocol proofs that allow for privacy-preserving multi-party computations and other advanced cryptographic applications.</li>
          <li><strong>Standards Compliance</strong>: Ergo's implementation closely follows established cryptographic standards (RFCs), allowing for interoperability with protocols like <strong>MuSig</strong>.</li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">How Schnorr Signatures Work</h2>

        <p className="text-gray-300 mb-6">
          The Schnorr signature process consists of <strong>key generation</strong>, <strong>signing</strong>, and <strong>verification</strong>.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Key Generation</h3>

        <p className="text-gray-300 mb-6">
          A user generates a private key <InlineMath>x</InlineMath> and computes the corresponding public key <InlineMath>P = xG</InlineMath>, where <InlineMath>G</InlineMath> is the generator point on the elliptic curve.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Signing</h3>

        <p className="text-gray-300 mb-4">
          To sign a message <InlineMath>m</InlineMath>, the following steps are performed:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
          <li>Generate a random nonce <InlineMath>k</InlineMath> and compute <InlineMath>R = kG</InlineMath>.</li>
          <li>Hash the values <InlineMath>R</InlineMath>, <InlineMath>P</InlineMath>, and the message <InlineMath>m</InlineMath> to generate a challenge <InlineMath>e</InlineMath>:
            <BlockMath>e = H(R \parallel P \parallel m)</BlockMath>
          </li>
          <li>Compute the signature <InlineMath>s</InlineMath> as:
            <BlockMath>s = k + ex</BlockMath>
          </li>
        </ol>

        <h3 className="text-2xl font-bold mb-4 text-white">Verification</h3>

        <p className="text-gray-300 mb-4">
          To verify a signature <InlineMath>(s, e)</InlineMath>, the verifier computes:
        </p>

        <BlockMath>R' = sG - eP</BlockMath>

        <p className="text-gray-300 mb-4">and checks if:</p>

        <BlockMath>e = H(R' \parallel P \parallel m)</BlockMath>

        <p className="text-gray-300 mb-6">
          If the condition holds, the signature is valid, demonstrating that the signer knows the private key corresponding to the public key <InlineMath>P</InlineMath>.
        </p>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Generalized Schnorr Proofs</h2>

        <p className="text-gray-300 mb-6">
          In more complex cases, Ergo extends Schnorr signatures into <strong>Generalized Schnorr Proofs</strong> as part of the Sigma protocol framework. These generalized proofs enable advanced cryptographic functionalities such as:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Multi-Signature Protocols</strong>: Implementations like <strong>MuSig</strong>, which allows multiple participants to collectively sign a transaction. This reduces the overall transaction size and preserves privacy by aggregating public keys and signatures.</li>
          <li><strong>Ring Signatures</strong>: Where one can prove they belong to a group of signers without revealing which specific individual signed the message.</li>
          <li><strong>Threshold Signatures</strong>: Schemes like <strong>k-out-of-n</strong> signatures, where a subset of signers must collaborate to authorize a transaction.</li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Use Cases of Schnorr Signatures</h2>

        <h3 className="text-2xl font-bold mb-4 text-white">1. MuSig (Multi-Signature Protocols)</h3>

        <p className="text-gray-300 mb-6">
          The <strong>MuSig</strong> protocol allows multiple participants to collaboratively generate a Schnorr signature. This enhances privacy and efficiency, as the final signature is indistinguishable from a regular Schnorr signature, and the transaction size is reduced.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Use Case</strong>: Multi-signature wallets, where multiple parties must sign off on a transaction.</li>
          <li><strong>Privacy</strong>: The individual signers are indistinguishable from each other.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4 text-white">2. Adaptor Signatures for Atomic Swaps</h3>

        <p className="text-gray-300 mb-6">
          Adaptor signatures are an extension of Schnorr signatures that facilitate <strong>atomic swaps</strong> and cross-chain exchanges. These signatures enable conditional transactions, allowing a swap to be completed only when a specific secret is revealed.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">3. Privacy-Preserving Transactions</h3>

        <p className="text-gray-300 mb-6">
          Ergo uses Schnorr signatures in combination with Sigma protocols to enable <strong>privacy-preserving applications</strong>, such as:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Mixers</strong>: Anonymous transaction systems like <strong>ZeroJoin</strong> rely on Schnorr-based ring signatures.</li>
          <li><strong>Stealth Addresses</strong>: Ensure recipient privacy by generating one-time addresses for each transaction.</li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Sigma Protocols and Schnorr Signatures</h2>

        <p className="text-gray-300 mb-6">
          Schnorr signatures are a foundational part of Ergo's <strong>Sigma protocol</strong> framework. Sigma protocols generalize Schnorr signatures, allowing them to be composed into complex cryptographic proofs. For example:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Ring signatures</strong>: Prove that a signer belongs to a group without revealing which individual actually signed.</li>
          <li><strong>Threshold signatures</strong>: Require collaboration between multiple parties to authorize a transaction.</li>
          <li><strong>Non-Interactive Proofs</strong>: Sigma proofs can be transformed into non-interactive proofs via the <strong>Fiat-Shamir transformation</strong>, which allows them to be used in blockchain environments without interactive verification.</li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Resources for Developers</h2>

        <p className="text-gray-300 mb-6">
          To dive deeper into Schnorr signatures and how they are implemented in Ergo, refer to the following resources:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Schnorr-based signing function</strong>: <a href="https://github.com/ErgoGravity/gateway-proxy/blob/9cbf72b934b08e258457367e366050a1734f1050/app/gateway/Adaptor.scala#L391" className="text-orange-400 hover:text-orange-300">Sign function based on Schnorr protocol</a>.</li>
          <li><strong>Generalized Schnorr proofs</strong>: Learn how <strong>SigmaBoolean</strong> is used to create advanced cryptographic conditions on the Ergo blockchain in the <a href="/docs/developers/cryptographic-primitives/sigmaboolean" className="text-orange-400 hover:text-orange-300">SigmaBoolean Documentation</a>.</li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Conclusion</h2>

        <p className="text-gray-300 mb-6">
          Schnorr signatures are central to Ergo's cryptographic framework, both as simple transaction signatures and as the basis for <strong>Generalized Schnorr Proofs</strong>. By leveraging Sigma protocols, Ergo extends Schnorr signatures into powerful cryptographic tools for privacy-preserving applications, multi-signature schemes, and complex cryptographic contracts.
        </p>

        <p className="text-gray-300 mb-6">
          For developers, these tools enable the creation of advanced decentralized applications (dApps) that prioritize both privacy and security. As part of the broader cryptographic infrastructure, Schnorr signatures ensure that Ergo remains at the forefront of privacy-focused blockchain technology.
        </p>

        <p className="text-gray-300 mb-6">
          For further reading, explore:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><a href="https://eprint.iacr.org/2018/068" className="text-orange-400 hover:text-orange-300">MuSig paper</a></li>
          <li><a href="https://eprint.iacr.org/2018/123.pdf" className="text-orange-400 hover:text-orange-300">Adaptor Signatures</a></li>
          <li><a href="/docs/developers/cryptographic-primitives/sigmaboolean" className="text-orange-400 hover:text-orange-300">SigmaBoolean Documentation</a></li>
        </ul>
      </div>
    </>
  );
} 