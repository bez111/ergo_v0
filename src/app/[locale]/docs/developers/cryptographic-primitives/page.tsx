
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages */
import React from "react";
import { ArrowLeft, Shield, KeyRound, Eye, Database } from "lucide-react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { CodeBlock } from "@/components/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CryptographicPrimitivesPage() {
  return (
    <>
      <Tabs defaultValue="cryptographic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="cryptographic" className="flex items-center gap-2 justify-center">
            <Shield className="w-4 h-4" /> Cryptographic
          </TabsTrigger>
          <TabsTrigger value="signature-schemes" className="flex items-center gap-2 justify-center">
            <KeyRound className="w-4 h-4" /> Signature Schemes
          </TabsTrigger>
          <TabsTrigger value="zero-knowledge-proofs" className="flex items-center gap-2 justify-center">
            <Eye className="w-4 h-4" /> Zero-Knowledge Proofs
          </TabsTrigger>
          <TabsTrigger value="data-structures" className="flex items-center gap-2 justify-center">
            <Database className="w-4 h-4" /> Data Structures
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cryptographic">
          {/* HERO section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Cryptographic Primitives
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              This document provides an in-depth look at the cryptographic schemes, protocols, and data structures used in the Ergo blockchain. Ergo's security model relies heavily on advanced cryptographic protocols that ensure the integrity of transactions, protect user privacy, and enforce complex spending conditions within smart contracts. This document outlines the internal workings of these cryptographic schemes, focusing on their implementation within Ergo, particularly through the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" className="text-orange-400 hover:text-orange-300">sigmastate-interpreter</a>, <a href="https://github.com/ergoplatform/sigma-rust" className="text-orange-400 hover:text-orange-300">sigma-rust</a>, and <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300">Scrypto</a> repositories.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

          <h2 className="text-3xl font-bold mb-4 text-white">Overview</h2>

          <p className="text-gray-300 mb-6">
            Ergo's cryptographic toolkit is built around <strong>composable Sigma protocols</strong>, which allow for flexible, secure, and efficient proofs of knowledge and cryptographic operations within its smart contract framework. These Sigma protocols are the foundation of Ergo's cryptographic security, and they enable privacy-preserving applications like multi-signature wallets, ring signatures, and threshold signatures.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Cryptographic Toolkit</h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Hash Functions</strong>: <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/hash/Sha256.scala" className="text-orange-400 hover:text-orange-300">SHA-256</a> & <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/hash/Blake2b.scala" className="text-orange-400 hover:text-orange-300">Blake2b</a> are used for generating secure cryptographic digests and ensuring data integrity.</li>
            <li><strong>Encoding</strong>: Base58 encoding is used to represent binary data, such as public keys or hashes, in a more human-readable format.</li>
            <li><strong>Signing Algorithms</strong>: Ergo supports both <strong>ECDSA</strong> (<code className="bg-neutral-700 px-2 py-0.5 rounded">secp256k1</code>) and <strong>Schnorr</strong> signatures for secure transaction signing.</li>
            <li><strong>Primitive Secrets</strong>: <strong>Schnorr signatures</strong> and <strong>Diffie-Hellman tuples</strong> are primitive secrets used in creating proofs of knowledge.</li>
            <li><strong>Non-Interactive Proofs</strong>: Ergo makes cryptographic proofs <strong>non-interactive</strong> using the <strong>Fiat-Shamir transformation</strong>, making them suitable for blockchain environments.</li>
          </ul>

          <p className="text-gray-300 mb-6">
            For more details on cryptographic functions in ErgoScript, see <a href="/docs/developers/ergoscript-languages/global-functions#cryptographic-functions" className="text-orange-400 hover:text-orange-300">ErgoScript Cryptographic Functions</a>.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Sigma Protocols</h2>

          <p className="text-gray-300 mb-6">
            <strong>Sigma protocols</strong> (Σ-protocols) are a subclass of cryptographic proof systems that allow a prover to convince a verifier of knowledge of a secret without revealing the secret itself. They are integral to the privacy and security features in Ergo, enabling advanced cryptographic applications such as zero-knowledge proofs, ring signatures, and threshold signatures.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">How Sigma Protocols Work</h3>

          <p className="text-gray-300 mb-4">
            At their core, <a href="/docs/developers/cryptographic-primitives/sigma" className="text-orange-400 hover:text-orange-300">Sigma protocols</a> provide a secure way to prove the following properties:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
            <li><strong>Proof of Knowledge of Discrete Logarithm</strong>: Prove knowledge of the discrete logarithm of a given public key without revealing the secret key.</li>
            <li><strong>Proof of Equality of Discrete Logarithms (Diffie-Hellman Tuple)</strong>: Prove that two discrete logarithms (e.g., over different bases) are equal without revealing the logarithms.</li>
          </ol>

          <p className="text-gray-300 mb-6">
            These basic Sigma protocols can be combined using logical operators, such as <strong>AND</strong>, <strong>OR</strong>, and <strong>THRESHOLD (k-out-of-n)</strong>, to form complex proofs.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Composability of Sigma Protocols</h3>

          <p className="text-gray-300 mb-4">
            One of the key advantages of Sigma protocols is their <strong>composability</strong>. They can be combined in flexible ways to create sophisticated cryptographic contracts:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>OR Proofs</strong>: Prove knowledge of one secret from a set of secrets (e.g., <strong>ring signatures</strong>).</li>
            <li><strong>AND Proofs</strong>: Prove knowledge of all secrets in a statement (e.g., multi-signature).</li>
            <li><strong>Threshold Proofs</strong>: Prove knowledge of at least <strong>k</strong> out of <strong>n</strong> secrets. This is essential for threshold signatures, where a subset of participants must cooperate to authorize a transaction.</li>
          </ul>

          <p className="text-gray-300 mb-6">
            These constructs enable the creation of powerful, privacy-preserving applications on Ergo.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Example: 3-out-of-5 Threshold Signature</h3>

          <p className="text-gray-300 mb-4">
            Consider a <strong>3-out-of-5 threshold signature</strong> that allows any three participants to sign a transaction. This ErgoScript implements such a scheme:
          </p>

          <CodeBlock language="scala">{`val ringScript = s"""
{
  atLeast(
    3, 
    Coll(
      PK("9f8ZQt1Sue6W5ACdMSPRzsHj3jjiZkbYy3CEtB4BisxEyk4RsNk"), 
      PK("9hFWPyhCJcw4KQyCGu4yAGfC1ieRAKyFg24FKjLJK2uDgA873uq"), 
      PK("9fdVP2jca1e5nCTT6q9ijZLssGj6v4juY8gEAxUhp7YTuSsLspS"), 
      PK("9gAKeRu1W4Dh6adWXnnYmfqjCTnxnSMtym2LPPMPErCkusCd6F3"),
      PK("9gmNsqrqdSppLUBqg2UzREmmivgqh1r3jmNcLAc53hk3YCvAGWE")
    )
  )
}
`}</CodeBlock>

          <p className="text-gray-300 mb-6">
            This script enables three participants from a group of five to cooperatively sign and authorize a transaction. It leverages the <strong>THRESHOLD (k-out-of-n)</strong> logic, which is native to Sigma protocols, ensuring that only a subset of participants is required to perform cryptographic operations.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Schnorr Signatures</h2>

          <p className="text-gray-300 mb-6">
            <strong>Schnorr signatures</strong> are a key part of Ergo's cryptographic foundation, providing an efficient, simple, and secure way to verify the authenticity of transactions. The Schnorr signature scheme is based on the <strong>hardness of the discrete logarithm problem</strong> and is favored for its performance and security properties over ECDSA.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">How Schnorr Signatures Work</h3>

          <p className="text-gray-300 mb-4">
            The signing process in Schnorr signatures follows these steps:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
            <li><strong>Key Generation</strong>: Generate a private key <InlineMath>x</InlineMath> and compute the corresponding public key <InlineMath>P = xG</InlineMath>, where <InlineMath>G</InlineMath> is the generator of the elliptic curve (SecP256K1).</li>
            <li><strong>Signing</strong>: To sign a message <InlineMath>m</InlineMath>, the user:
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 ml-8 mt-2">
                <li>Picks a random nonce <InlineMath>k</InlineMath> and computes <InlineMath>R = kG</InlineMath>,</li>
                <li>Computes <InlineMath>e = H(R || P || m)</InlineMath>,</li>
                <li>Computes the signature as <InlineMath>s = k + ex</InlineMath>.</li>
              </ul>
            </li>
            <li><strong>Verification</strong>: The verifier checks the signature by computing <InlineMath>R' = sG - eP</InlineMath> and verifying:
              <div className="my-4">
                <BlockMath>e = H(R' || P || m)</BlockMath>
              </div>
            </li>
          </ol>

          <p className="text-gray-300 mb-6">
            Schnorr signatures are widely used in Ergo for multi-signature schemes, privacy-enhancing protocols, and adaptor signatures.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Use Cases of Schnorr Signatures</h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Multi-Signature Wallets</strong>: Schnorr signatures enable efficient and secure multi-signature wallets, where multiple participants must sign a transaction collaboratively.</li>
            <li><strong>Adaptor Signatures</strong>: Adaptor signatures allow for <strong>conditional private swaps</strong>, such as atomic swaps between different cryptocurrencies, without revealing sensitive information.</li>
          </ul>

          <p className="text-gray-300 mb-6">
            For detailed examples and implementation, see <a href="https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407" className="text-orange-400 hover:text-orange-300">Verifying Schnorr Signatures in ErgoScript</a>.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Diffie-Hellman Protocol</h2>

          <p className="text-gray-300 mb-6">
            The <strong>Diffie-Hellman (DH)</strong> protocol is widely used in cryptography for secure key exchange. In Ergo, the <strong>Diffie-Hellman Tuple (DHT)</strong> protocol allows provers to demonstrate shared knowledge of a secret without revealing it, enabling privacy-preserving cryptographic proofs.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Diffie-Hellman Tuple (DHT)</h3>

          <p className="text-gray-300 mb-4">
            In a Diffie-Hellman Tuple, a prover proves knowledge of a shared secret <InlineMath>x</InlineMath> such that:
          </p>

          <div className="my-4">
            <BlockMath>u = g^x</BlockMath>
            <BlockMath>v = h^x</BlockMath>
          </div>

          <p className="text-gray-300 mb-6">
            This protocol can be combined with Sigma protocols to create privacy-preserving smart contracts, such as <strong>stealth addresses</strong> and <strong>mixers</strong>. For instance, <strong>ErgoMix</strong> relies on the security of the Diffie-Hellman protocol to ensure transaction fungibility and user privacy.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Use Cases of Diffie-Hellman</h3>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Stealth Addresses</strong>: Ensure that each transaction generates a unique address, making it difficult to link transactions to the original public address, protecting user privacy.</li>
            <li><strong>ZeroJoin Mixers</strong>: Enable on-chain privacy-preserving mixing of tokens, ensuring that transactions remain fungible and private without reliance on trusted third parties.</li>
          </ul>

          <p className="text-gray-300 mb-6">
            For a deep dive into Diffie-Hellman Tuples, refer to <a href="/docs/developers/cryptographic-primitives/diffie" className="text-orange-400 hover:text-orange-300">Diffie</a>.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Data Structures in Ergo</h2>

          <p className="text-gray-300 mb-6">
            Ergo employs specialized cryptographic data structures to ensure secure and efficient state management within its blockchain:
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">AVL+ Trees</h3>

          <p className="text-gray-300 mb-6">
            Ergo uses <strong>AVL+ trees</strong> as part of its <strong>Authenticated Dynamic Dictionary (ADD)</strong> to track UTXO state changes. These trees provide cryptographic proofs of state changes while maintaining logarithmic complexity for inserts, lookups, and deletions. AVL+ trees are essential for the UTXO model's scalability and efficiency, enabling fast and secure updates across the network.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><strong>Implementation</strong>: Learn more about AVL+ trees in <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/avltree/batch/BatchAVLProver.scala" className="text-orange-400 hover:text-orange-300">BatchAVLProver.scala</a> and <a href="https://github.com/input-output-hk/scrypto/blob/master/shared/src/main/scala/scorex/crypto/authds/avltree/batch/BatchAVLVerifier.scala" className="text-orange-400 hover:text-orange-300">BatchAVLVerifier.scala</a>.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-white">Merkle Trees</h3>

          <p className="text-gray-300 mb-6">
            <strong>Merkle trees</strong> are used in Ergo to ensure the integrity of large datasets, such as blocks of transactions, without requiring the entire dataset to be transmitted or verified. By storing only the root hash of a Merkle tree, nodes can quickly verify that individual transactions are part of the block, reducing the overhead of verification.
          </p>

          <p className="text-gray-300 mb-6">
            Learn more about Merkle trees <a href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-orange-400 hover:text-orange-300">here</a>.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Security Considerations</h2>

          <p className="text-gray-300 mb-6">
            The cryptographic schemes in Ergo rely on the <strong>hardness of the discrete logarithm problem</strong> and other well-established cryptographic assumptions. It is critical that developers design smart contracts carefully to avoid vulnerabilities, such as weak randomness or improper use of cryptographic primitives. Ergo provides extensive test coverage for its cryptographic implementations, such as the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/test/scala/sigmastate/crypto/SigningSpecification.scala" className="text-orange-400 hover:text-orange-300">SigningSpecification</a>.
          </p>

          <hr className="border-neutral-700 my-8" />

          <h2 className="text-3xl font-bold mb-4 text-white">Conclusion</h2>

          <p className="text-gray-300 mb-6">
            Ergo's cryptographic framework, built on Sigma protocols, Schnorr signatures, and Diffie-Hellman key exchanges, provides robust tools for secure and privacy-preserving decentralized applications. Its composable cryptographic proofs enable developers to create complex spending conditions, privacy-enhancing features, and flexible multi-signature schemes, all while maintaining a high standard of security.
          </p>

          <p className="text-gray-300 mb-6">
            For more information, visit the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" className="text-orange-400 hover:text-orange-300">sigmastate-interpreter repository</a>, <a href="https://github.com/ergoplatform/sigma-rust" className="text-orange-400 hover:text-orange-300">sigma-rust repository</a>, and <a href="https://github.com/input-output-hk/scrypto" className="text-orange-400 hover:text-orange-300">Scrypto repository</a>.
          </p>
        </div>
        </TabsContent>

        <TabsContent value="signature-schemes">
          {/* HERO section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Signature Schemes
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Ergo's signature schemes are built on advanced cryptographic protocols that enable secure, privacy-preserving, and flexible authentication mechanisms. These schemes form the foundation for multi-signature wallets, ring signatures, and threshold signatures.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/docs/developers/cryptographic-primitives/schnorr"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <KeyRound className="w-5 h-5 mr-2" /> Schnorr
              </Link>
              <Link
                href="/docs/developers/cryptographic-primitives/diffie"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Shield className="w-5 h-5 mr-2" /> Diffie
              </Link>
              <Link
                href="/docs/developers/cryptographic-primitives/other-signatures"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Database className="w-5 h-5 mr-2" /> Other Signatures
              </Link>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            

            <h2 className="text-3xl font-bold mb-4 text-white">Sigma Protocols</h2>

            <h3 className="text-2xl font-bold mb-4 text-white">Introduction</h3>

            <p className="text-gray-300 mb-6">
              <strong>Sigma protocols</strong> (Σ-protocols) are a class of cryptographic proof systems that play a central role in the Ergo blockchain. These protocols allow a <strong>prover</strong> to convince a <strong>verifier</strong> that they know a value, such as a secret key, without revealing the value itself (a property related to <Link href="/docs/developers/cryptographic-primitives/zero-knowledge-proofs" className="text-orange-400 hover:text-orange-300">zero-knowledge proofs</Link>). Σ-protocols are the foundation for many <Link href="/docs/developers/cryptographic-primitives/zero-knowledge-proofs" className="text-orange-400 hover:text-orange-300">privacy</Link>-preserving and <Link href="/docs/developers/cryptographic-primitives/threshold" className="text-orange-400 hover:text-orange-300">multi-signature</Link> functionalities in Ergo.
            </p>

            <p className="text-gray-300 mb-6">
              In <strong><Link href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:text-orange-300">ErgoScript</Link></strong>, proving and verifying cryptographic statements are first-class primitives, giving developers access to powerful Σ-protocols. Scripts protecting <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:text-orange-300">transaction outputs</Link> can contain <strong>Σ-statements</strong>, which must be proven (by generating <strong>Σ-proofs</strong>) before the outputs can be spent.
            </p>

            <p className="text-gray-300 mb-6">
              Conceptually, Σ-proofs are generalizations of <Link href="/docs/developers/cryptographic-primitives/signing" className="text-orange-400 hover:text-orange-300">digital signatures</Link>. The <strong><Link href="/docs/developers/cryptographic-primitives/schnorr" className="text-orange-400 hover:text-orange-300">Schnorr signature scheme</Link></strong> is the canonical example of a Σ-proof: it allows the recipient to prove knowledge of a secret (<Link href="/docs/developers/cryptographic-primitives/discrete-logarithm" className="text-orange-400 hover:text-orange-300">discrete logarithm</Link>) without revealing it. Σ-proofs in Ergo extend this concept, allowing the creation of more complex cryptographic protocols like <strong><Link href="/docs/developers/cryptographic-primitives/threshold" className="text-orange-400 hover:text-orange-300">multi-signature</Link></strong>, <strong><Link href="/docs/developers/cryptographic-primitives/ring" className="text-orange-400 hover:text-orange-300">ring signatures</Link></strong>, and <strong><Link href="/docs/developers/cryptographic-primitives/threshold" className="text-orange-400 hover:text-orange-300">threshold signatures</Link></strong>.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Elementary Σ-Protocols in ErgoScript</h3>

            <p className="text-gray-300 mb-4">
              ErgoScript offers two elementary Σ-protocols over a group of prime order, such as an elliptic curve group:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li><strong>Proof of Knowledge of Discrete Logarithm (<Link href="/docs/developers/cryptographic-primitives/schnorr" className="text-orange-400 hover:text-orange-300">Schnorr Signature</Link>)</strong>: This protocol proves knowledge of the discrete logarithm of a given public key with respect to a fixed generator. Essentially, this is the Schnorr signature scheme.</li>
              <li><strong>Proof of Equality of Discrete Logarithms (<Link href="/docs/developers/cryptographic-primitives/diffie" className="text-orange-400 hover:text-orange-300">Diffie-Hellman Tuple</Link>)</strong>: This protocol proves that two values share the same discrete logarithm across two different generators.</li>
            </ol>

            <p className="text-gray-300 mb-6">
              These basic protocols can be composed to create more advanced proofs using logical connectives like <strong>AND</strong>, <strong>OR</strong>, and <strong>THRESHOLD</strong>. This <strong>composability</strong> is what enables the creation of sophisticated <Link href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:text-orange-300">smart contracts</Link> and multi-signature schemes.
            </p>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Composability of Σ-Protocols</h3>

            <p className="text-gray-300 mb-4">
              A powerful feature of Σ-protocols in Ergo is their <strong>composability</strong>. You can create logical combinations of cryptographic statements using basic AND/OR logic.
            </p>

            <p className="text-gray-300 mb-4">Examples include:</p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><strong><Link href="/docs/developers/cryptographic-primitives/ring" className="text-orange-400 hover:text-orange-300">Ring Signatures</Link></strong>: A ring signature is a proof of knowledge of <strong>one</strong> of multiple secrets. For example: Prove knowledge of either secret A or secret B.</li>
              <li><strong><Link href="/docs/developers/cryptographic-primitives/threshold" className="text-orange-400 hover:text-orange-300">Threshold Signatures</Link></strong>: A threshold signature is a proof that a certain number of secrets are known. For example: Prove knowledge of at least two of three secrets.</li>
            </ul>

            <p className="text-gray-300 mb-6">
              These constructions allow for flexible and privacy-preserving proofs. The <strong>THRESHOLD</strong> construct (also known as <strong>k-out-of-n</strong>) is particularly useful for multi-party agreements, ensuring that a subset of participants can authorize a <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:text-orange-300">transaction</Link> without requiring everyone's involvement.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">Example: 3-out-of-5 Threshold Signature</h4>

            <CodeBlock language="typescript">{`// Example ErgoScript for a 3-out-of-5 multi-signature contract
val thresholdScript = s"""
{
  atLeast( // Requires at least 3 proofs from the collection below
    3,
    Coll(
      PK("9f8ZQt1Sue6W5ACdMSPRzsHj3jjiZkbYy3CEtB4BisxEyk4RsNk"), // Public Key 1
      PK("9hFWPyhCJcw4KQyCGu4yAGfC1ieRAKyFg24FKjLJK2uDgA873uq"), // Public Key 2
      PK("9fdVP2jca1e5nCTT6q9ijZLssGj6v4juY8gEAxUhp7YTuSsLspS"), // Public Key 3
      PK("9gAKeRu1W4Dh6adWXnnYmfqjCTnxnSMtym2LPPMPErCkusCd6F3"), // Public Key 4
      PK("9gmNsqrqdSppLUBqg2UzREmmivgqh1r3jmNcLAc53hk3YCvAGWE")  // Public Key 5
    )
  )
}
"""`}</CodeBlock>

            <p className="text-gray-300 mb-6">
              This contract is an example of a <strong>3-out-of-5</strong> threshold signature scheme. It can be compiled to a Pay-to-Script (P2S) <Link href="/docs/developers/data-model-apis" className="text-orange-400 hover:text-orange-300">address</Link>, where any three of the five public keys can authorize a transaction.
            </p>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Use Cases of Σ-Protocols</h3>

            <h4 className="text-xl font-bold mb-4 text-white">1. Multi-Signature Wallets</h4>
            <p className="text-gray-300 mb-4">
              <Link href="/docs/developers/cryptographic-primitives/multisig" className="text-orange-400 hover:text-orange-300">Multi-signature wallets</Link> are a natural use case for Σ-protocols, where multiple parties are required to authorize a transaction. Σ-protocols allow you to set up flexible conditions such as requiring two out of three signatures, or even more complex schemes involving multiple participants.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">2. Ring Signatures for Privacy</h4>
            <p className="text-gray-300 mb-4">
              <Link href="/docs/developers/cryptographic-primitives/ring" className="text-orange-400 hover:text-orange-300">Ring signatures</Link> provide <Link href="/docs/developers/cryptographic-primitives/zero-knowledge-proofs" className="text-orange-400 hover:text-orange-300">privacy</Link> by allowing a user to sign a transaction on behalf of a group without revealing which group member signed it. This is particularly useful for creating anonymous transactions and decentralized mixers, such as <strong><Link href="/docs/developers/cryptographic-primitives/ergomixer" className="text-orange-400 hover:text-orange-300">ErgoMixer</Link></strong>. The privacy of ring signatures makes them ideal for applications where anonymity is crucial, such as anonymous donations or private payments.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">3. Threshold Signatures</h4>
            <p className="text-gray-300 mb-4">
              <Link href="/docs/developers/cryptographic-primitives/threshold" className="text-orange-400 hover:text-orange-300">Threshold signatures</Link> are critical for decentralized control. For example, a corporate <Link href="/docs/developers/cryptographic-primitives/wallets" className="text-orange-400 hover:text-orange-300">wallet</Link> could be protected by a 3-out-of-5 signature scheme, ensuring that no single party can unilaterally control the funds.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">4. Time-Locked Conditions</h4>
            <p className="text-gray-300 mb-4">
              Σ-protocols can be combined with time-locked conditions. For instance, you can construct a contract that allows a transaction to be spent if either a ring signature is provided by a set of participants <strong>before</strong> a certain <Link href="/docs/developers/cryptographic-primitives/block-header" className="text-orange-400 hover:text-orange-300">block height</Link>, or the funds can be refunded by a single party <strong>after</strong> the block height has passed.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">5. Decentralized Mixers</h4>
            <p className="text-gray-300 mb-6">
              <strong><Link href="/docs/developers/cryptographic-primitives/ergomixer" className="text-orange-400 hover:text-orange-300">ErgoMixer</Link></strong> is an advanced, non-custodial token <Link href="/docs/developers/cryptographic-primitives/mixer" className="text-orange-400 hover:text-orange-300">mixer</Link> based on Σ-protocols. It leverages ring signatures and <Link href="/docs/developers/cryptographic-primitives/zero-knowledge-proofs" className="text-orange-400 hover:text-orange-300">zero-knowledge proofs</Link> to provide enhanced privacy while ensuring that no third party is needed to manage or approve the mixing process. <Link href="/docs/developers/cryptographic-primitives/sigmajoin" className="text-orange-400 hover:text-orange-300">SigmaJoin</Link>, an <Link href="/docs/developers/cryptographic-primitives/off-chain" className="text-orange-400 hover:text-orange-300">off-chain</Link> implementation concept related to ErgoMixer, further extends the idea of trustless and decentralized privacy mechanisms.
            </p>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Prover and Verifier Workflow</h3>

            <p className="text-gray-300 mb-4">
              In Ergo, transaction processing using Σ-protocols involves two main actors: the <strong>Prover</strong> and the <strong>Verifier</strong>.
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
              <li><strong>Prover</strong>: The Prover uses the <Link href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:text-orange-300">ErgoTree</Link> <Link href="/docs/developers/cryptographic-primitives/sigmastate-interpreter" className="text-orange-400 hover:text-orange-300">interpreter</Link> to reduce a high-level spending condition into a SigmaBoolean (the cryptographic proposition that needs to be proven). The SigmaBoolean is then converted into a cryptographic proof using the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/sigma-dsl.md" className="text-orange-400 hover:text-orange-300">Fiat-Shamir transformation</a>, ensuring that the transaction can only be authorized by parties who possess the necessary secrets (such as private keys).</li>
              <li><strong>Verifier</strong>: The Verifier also uses the ErgoTree interpreter to reduce the spending condition into a SigmaBoolean. It then checks the cryptographic proof against this proposition, ensuring that the transaction is valid and all required conditions are met.</li>
            </ol>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Fiat-Shamir Transformation</h3>

            <p className="text-gray-300 mb-6">
              The <strong>Fiat-Shamir transformation</strong> is a cryptographic technique that makes interactive proof systems non-interactive, suitable for use in blockchain environments. This is crucial for Sigma protocols, as it allows Σ-proofs to be created and verified without requiring real-time interaction between the prover and the verifier.
            </p>

            <p className="text-gray-300 mb-6">
              In Ergo, Σ-protocols rely on the Fiat-Shamir transformation to generate challenges (hash values) from the commitments and messages involved in the proof. This ensures that the proofs are non-interactive and can be verified deterministically on-chain.
            </p>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Applications and Resources</h3>

            <h4 className="text-xl font-bold mb-4 text-white">Applications</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><strong><Link href="/docs/developers/cryptographic-primitives/ergomixer" className="text-orange-400 hover:text-orange-300">ErgoMixer</Link></strong>: A state-of-the-art, non-custodial token mixer using Σ-protocols for privacy and anonymity.</li>
              <li><strong><Link href="/docs/developers/cryptographic-primitives/sigmajoin" className="text-orange-400 hover:text-orange-300">SigmaJoin</Link></strong>: An off-chain implementation concept related to ErgoMixer for decentralized privacy-preserving transactions.</li>
              <li><strong>Ergo Threshold Signature Contracts</strong>: Use Σ-protocols to create custom multi-signature wallets and contracts.</li>
            </ul>

            <h4 className="text-xl font-bold mb-4 text-white">DarkFund0</h4>
            <p className="text-gray-300 mb-6">
              <strong>DarkFund0</strong>: A ZK fund for privacy applications, sponsoring developments in privacy-focused decentralized finance (DeFi) on Ergo.
            </p>

            <h4 className="text-xl font-bold mb-4 text-white">Tutorials</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><a href="https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407" className="text-orange-400 hover:text-orange-300">Verifying Schnorr Signatures in ErgoScript</a></li>
              <li><a href="https://www.ergoforum.org/t/updateable-multisig-pattern/3356" className="text-orange-400 hover:text-orange-300">Updateable Multisig Pattern</a></li>
            </ul>

            <h4 className="text-xl font-bold mb-4 text-white">Presentations</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
              <li><a href="https://crypto.sjtu.edu.cn/~yandi/2018%20BIU%20winter%20school/Part%203-Techniques%20for%20Efficient%20ZK%20(cont.)/WS-19-11-sigma-protocols-winter-school-2019-1.pdf" className="text-orange-400 hover:text-orange-300">Sigma Protocols</a></li>
              <li><a href="https://cs.au.dk/~ivan/Sigma.pdf" className="text-orange-400 hover:text-orange-300">On Σ-protocols</a></li>
            </ul>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Conclusion</h3>

            <p className="text-gray-300 mb-6">
              Sigma protocols form the backbone of Ergo's smart contracts and cryptographic proofs, enabling flexible and privacy-preserving transactions. Whether it's for simple multi-signature wallets, complex threshold signatures, or advanced privacy-preserving ring signatures, Σ-protocols provide the necessary cryptographic tools for building secure and decentralized applications on the Ergo blockchain.
            </p>

            <p className="text-gray-300 mb-6">
              With their composability and integration into ErgoScript, Σ-protocols make Ergo a versatile platform for privacy-focused cryptographic applications.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="zero-knowledge-proofs">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4 text-white">Non-Interactive Zero-Knowledge Proofs in Ergo</h2>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>
            <p className="text-gray-300 mb-6">
              Non-Interactive Zero-Knowledge Proofs (NIZKs) are advanced cryptographic techniques that allow one party to prove knowledge of a secret without revealing the secret itself, and without requiring real-time interaction between the prover and verifier.
            </p>

            <div className="flex gap-4 mb-6">
              <Link
                href="/docs/developers/cryptographic-primitives/zerojoin"
                className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
              >
                ZeroJoin
              </Link>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Theoretical Foundation</h3>
            <p className="text-gray-300 mb-4">
              NIZKs in Ergo are primarily implemented through <strong>Sigma Protocols</strong> (Σ-protocols), which provide a powerful and flexible approach to zero-knowledge proofs. These protocols are a cornerstone of Ergo's privacy and cryptographic infrastructure.
            </p>
            
            <h4 className="text-xl font-bold mb-3 text-white">Key Characteristics</h4>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-green-400 mb-2">Non-Interactive</h5>
                <p className="text-sm text-gray-300">
                  Proofs can be verified without direct communication
                </p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  <li>• Unlike traditional interactive zero-knowledge proofs, NIZKs can be verified asynchronously</li>
                  <li>• Reduces computational overhead and network complexity</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-green-400 mb-2">Zero-Knowledge</h5>
                <p className="text-sm text-gray-300">
                  No information about the secret is revealed
                </p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  <li>• Cryptographically guarantees that only the validity of a statement is proven</li>
                  <li>• Protects sensitive information while maintaining verifiability</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-green-400 mb-2">Composable</h5>
                <p className="text-sm text-gray-300">
                  Can be combined using logical operators like AND, OR, and THRESHOLD
                </p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  <li>• Enables creation of complex cryptographic conditions</li>
                  <li>• Supports advanced smart contract logic and privacy-preserving protocols</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Cryptographic Primitives</h3>
            <p className="text-gray-300 mb-4">
              Ergo supports several fundamental zero-knowledge proof types:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-purple-400 mb-2">1. Discrete Logarithm Proofs</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Prove knowledge of a secret key without revealing it</li>
                  <li>• Fundamental to <a href="/docs/developers/cryptographic-primitives/schnorr" className="text-blue-400 hover:text-blue-300 underline">Schnorr signature verification</a></li>
                  <li>• Implemented using <code className="bg-neutral-800 px-2 py-1 rounded">proveDlog()</code> predicate in <a href="/docs/developers/ergoscript-languages" className="text-blue-400 hover:text-blue-300 underline">ErgoScript</a></li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-purple-400 mb-2">2. Diffie-Hellman Tuple Proofs</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Prove equality of discrete logarithms across different generators</li>
                  <li>• Enables privacy-preserving key exchange and contract designs</li>
                  <li>• Critical for advanced cryptographic protocols</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Implementation Techniques</h3>
            
            <h4 className="text-xl font-bold mb-3 text-white">Fiat-Shamir Transformation</h4>
            <p className="text-gray-300 mb-4">
              Ergo makes proofs non-interactive using the Fiat-Shamir transformation, which converts interactive proofs into non-interactive ones by using a cryptographic hash function.
            </p>
            
            <div className="bg-neutral-900/50 rounded-lg p-4 mb-4">
              <h5 className="font-semibold text-yellow-400 mb-2">Key steps:</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Transform an interactive proof into a non-interactive version</li>
                <li>• Use a cryptographic hash function to generate a challenge</li>
                <li>• Eliminates the need for real-time communication between prover and verifier</li>
              </ul>
            </div>
            
            <h4 className="text-xl font-bold mb-3 text-white">Proof Composition</h4>
            <p className="text-gray-300 mb-4">
              Sigma protocols can be combined to create complex proofs:
            </p>
            
            <div className="mb-6">
              <CodeBlock language="scala">{`// Example of a threshold signature proof
val thresholdProof = prove {
  atLeast(
    3,  // Minimum number of signatures required
    Coll(
      PK("pubkey1"),
      PK("pubkey2"),
      PK("pubkey3"),
      PK("pubkey4"),
      PK("pubkey5")
    )
  )
}`}</CodeBlock>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Advanced Applications</h3>
            
            <h4 className="text-xl font-bold mb-3 text-white">Privacy-Preserving Techniques</h4>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">1. Ring Signatures</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Prove one of multiple possible signers without revealing the exact signer</li>
                  <li>• Enables anonymous transactions</li>
                  <li>• Detailed in <a href="/docs/developers/cryptographic-primitives/other-signatures/ring" className="text-blue-400 hover:text-blue-300 underline">Ring Signatures</a> documentation</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">2. Threshold Signatures</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Require k-out-of-n participants to sign</li>
                  <li>• Supports multi-party computational scenarios</li>
                  <li>• Explored in <a href="/docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-blue-400 hover:text-blue-300 underline">Threshold Signatures</a> documentation</li>
                </ul>
              </div>
              
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h5 className="font-semibold text-cyan-400 mb-2">3. Stealth Addresses</h5>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Generate one-time addresses for enhanced transaction privacy</li>
                  <li>• Prevent linking of transactions to a specific public address</li>
                  <li>• Crucial for maintaining financial privacy</li>
                </ul>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-3 text-white">Mixer Protocols</h4>
            <p className="text-gray-300 mb-4">
              <strong>ZeroJoin</strong> demonstrates a practical application:
            </p>
            <ul className="text-sm text-gray-300 space-y-1 ml-4 mb-6">
              <li>• Uses ring signatures and Diffie-Hellman tuples</li>
              <li>• Restores fungibility of digital tokens</li>
              <li>• Provides non-interactive, trustless mixing</li>
              <li>• Detailed in <a href="/docs/developers/cryptographic-primitives/mixer" className="text-blue-400 hover:text-blue-300 underline">Mixer Protocol</a> documentation</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Security Considerations</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li>• Based on the hardness of the discrete logarithm problem</li>
              <li>• Requires careful implementation to prevent potential vulnerabilities</li>
              <li>• Extensive test coverage in Ergo's cryptographic implementations</li>
              <li>• Relies on well-established cryptographic assumptions</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Related Cryptographic Concepts</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li>• <a href="/docs/developers/cryptographic-primitives/discrete-logarithm" className="text-blue-400 hover:text-blue-300 underline">Discrete Logarithm Proofs</a></li>
              <li>• <a href="/docs/developers/cryptographic-primitives/other-signatures/ring" className="text-blue-400 hover:text-blue-300 underline">Ring Signatures</a></li>
              <li>• <a href="/docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-blue-400 hover:text-blue-300 underline">Threshold Signatures</a></li>
              <li>• <a href="/docs/developers/cryptographic-primitives/sigma-protocols" className="text-blue-400 hover:text-blue-300 underline">Sigma Protocols</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Future Research Directions</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li>• Enhanced privacy protocol implementations</li>
              <li>• More efficient zero-knowledge proof constructions</li>
              <li>• Cross-chain interoperability using NIZKs</li>
              <li>• Integration with advanced cryptographic techniques</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Performance and Scalability</h3>
            <p className="text-gray-300 mb-4">
              NIZKs in Ergo are designed with performance in mind:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li>• Constant-time proof verification</li>
              <li>• Minimal computational overhead</li>
              <li>• Efficient serialization and deserialization</li>
              <li>• Support for batch verification techniques</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">References</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li>• <a href="/docs/developers/cryptographic-primitives/sigma-protocols" className="text-blue-400 hover:text-blue-300 underline">Sigma Protocols Overview</a></li>
              <li>• <a href="/docs/developers/cryptographic-primitives" className="text-blue-400 hover:text-blue-300 underline">Cryptographic Foundations</a></li>
              <li>• Zero-Knowledge Proofs in Ergo (this tab)</li>
              <li>• Academic Papers:</li>
              <ul className="ml-8 space-y-1">
                <li>• <a href="https://eprint.iacr.org/2021/1022" className="text-blue-400 hover:text-blue-300 underline">Sigma Protocols: A Survey</a></li>
                <li>• <a href="https://eprint.iacr.org/2016/263" className="text-blue-400 hover:text-blue-300 underline">Non-Interactive Zero-Knowledge Proofs</a></li>
              </ul>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Conclusion</h3>
            <p className="text-gray-300 mb-6">
              Ergo's Non-Interactive Zero-Knowledge Proofs represent a sophisticated approach to cryptographic privacy, enabling complex, secure, and flexible smart contract designs while maintaining user confidentiality. By leveraging advanced cryptographic techniques like Sigma Protocols and the Fiat-Shamir transformation, Ergo provides a robust framework for privacy-preserving computational techniques.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="data-structures">
          {/* HERO section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Data Structures
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Ergo employs specialized cryptographic data structures to ensure secure and efficient state management within its blockchain. These structures form the foundation for UTXO management, transaction verification, and smart contract execution.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/docs/developers/cryptographic-primitives/avl"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Database className="w-5 h-5 mr-2" /> AVL Trees
              </Link>
              <Link
                href="/docs/developers/cryptographic-primitives/merkle-tree"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Database className="w-5 h-5 mr-2" /> Merkle Trees
              </Link>
              <Link
                href="/docs/developers/cryptographic-primitives/popow"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Database className="w-5 h-5 mr-2" /> PoPow
              </Link>
              <Link
                href="/docs/developers/cryptographic-primitives/interlink-vectors"
                className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
              >
                <Database className="w-5 h-5 mr-2" /> Interlink Vectors
              </Link>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-white">Data Structures in Ergo</h2>
            
            <p className="text-gray-300 mb-6">
              In Ergo, several key data structures are employed to support its blockchain and smart contract functionality. These data structures are designed to ensure efficient and secure access to data, guaranteeing optimal performance and data integrity.
            </p>

            <p className="text-gray-300 mb-6">
              Here's a list of the main data structures used within the Ergo ecosystem:
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">1. AVL Trees (Authenticated Dynamic Dictionaries)</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: AVL Trees in Ergo are a specialized type of self-balancing binary search tree, used to store and authenticate dynamic sets of data in a compact and efficient manner. They ensure efficient and secure access to your data, guaranteeing optimal performance and data integrity.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In the storage of UTXO states, where efficient verification of state changes is required.</li>
                  <li>In applications like off-chain code and distributed systems managing the Plasma infrastructure, where privacy-preserving transactions need to verify inclusion or exclusion of certain elements without revealing all details.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/avl" className="text-blue-400 hover:text-blue-300 underline">AVL Trees in Ergo</a>, <a href="/docs/developers/cryptographic-primitives/plasma" className="text-blue-400 hover:text-blue-300 underline">Plasma</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">2. Merkle Trees</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: Merkle Trees are a fundamental data structure in the Ergo blockchain, ensuring the integrity and authenticity of data. They play a crucial role in various blockchain operations, from verifying transactions within blocks to securing additional metadata in the Extension Block.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In the construction of the <a href="/docs/developers/cryptographic-primitives/tx-merkle" className="text-blue-400 hover:text-blue-300 underline">Transaction Merkle Tree</a>, combining all transactions and their corresponding spending proofs into a single Merkle Tree.</li>
                  <li>In the <a href="/docs/developers/cryptographic-primitives/merkle-extension" className="text-blue-400 hover:text-blue-300 underline">Extension Block Merkle Tree</a>, securing key-value data like miner votes and protocol parameters.</li>
                  <li>In creating <a href="/docs/developers/cryptographic-primitives/merkle-batch-proof" className="text-blue-400 hover:text-blue-300 underline">Merkle Batch Proofs</a>, allowing efficient validation of the integrity and authenticity of data transactions.</li>
                  <li>In generating compact proofs of state transitions, enabling lightweight clients to securely participate in the network.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/merkle-tree" className="text-blue-400 hover:text-blue-300 underline">Merkle Trees in Ergo</a></li>
            </ul>



            <h3 className="text-2xl font-bold mb-4 text-white">3. Sigma Trees (ErgoTree)</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: Sigma Trees, also known as ErgoTrees, are specialized data structures that represent logical propositions and cryptographic conditions in the Ergo blockchain. These trees are used in the execution of smart contracts and scripts, encapsulating complex logic and cryptographic proofs.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In representing the logic and conditions of ErgoScript smart contracts.</li>
                  <li>In evaluating conditions for spending boxes (UTXOs) by verifying the cryptographic proofs and logic encoded in the ErgoTree.</li>
                  <li>Potential future integration with Merkle Trees (MT) or Sparse Merkle Trees (SMT) to enable working with Ergo transactions and the extension block database directly from ErgoScript.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/ergotree" className="text-blue-400 hover:text-blue-300 underline">ErgoTree</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">4. Context Data Structures</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: These structures represent the contextual information that is available during the execution of ErgoScripts. Contexts include details such as the current block height, the transaction being processed, and any additional data inputs.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In providing necessary environmental details for smart contract execution.</li>
                  <li>In enabling the contextual flexibility of ErgoScripts.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/blockchain-context" className="text-blue-400 hover:text-blue-300 underline">Context Data Structures</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">5. Proof of Proof-of-Work (PoPow) Data Structures</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: These are specialized data structures used to implement PoPow, which allows lightweight nodes to verify the longest chain without downloading the entire blockchain.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In creating and verifying interlink vectors, which are crucial for PoPow security.</li>
                  <li>In enabling lightweight clients to participate in the network with minimal data requirements.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/popow" className="text-blue-400 hover:text-blue-300 underline">PoPow Data Structures</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">6. Box Data Structures</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: Boxes are the fundamental data structures representing UTXOs in Ergo. Each box contains value, associated tokens, and an ErgoScript that defines spending conditions.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In the creation and management of UTXOs.</li>
                  <li>In defining conditions for transaction execution within the blockchain.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/box" className="text-blue-400 hover:text-blue-300 underline">Box Format</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">7. Transaction Data Structures</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: These structures represent the transactions within the Ergo blockchain. They include inputs, outputs, data inputs, and other necessary information for executing transactions.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In organizing and executing financial transfers, contract calls, and state changes.</li>
                  <li>In ensuring the integrity and validity of transactions through the blockchain.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/transactions" className="text-blue-400 hover:text-blue-300 underline">Transaction Format</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">8. Interlink Vectors</h3>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Purpose</strong>: Used in conjunction with Merkle Trees for PoPow proofs, interlink vectors allow efficient verification of the chain of blocks in the blockchain.</li>
              <li><strong>Usage</strong>:
                <ul className="ml-4 space-y-1">
                  <li>In the implementation of PoPow protocols for verifying blockchain headers.</li>
                </ul>
              </li>
              <li><strong>Documentation Reference</strong>: <a href="/docs/developers/cryptographic-primitives/interlink-vectors" className="text-blue-400 hover:text-blue-300 underline">Interlink Vectors</a></li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-white">Potential Additional Data Structures</h3>
            <p className="text-gray-300 mb-6">
              As the Ergo ecosystem continues to evolve, additional data structures may be introduced, particularly in areas such as privacy-preserving protocols, advanced smart contract functionalities, or optimization of blockchain operations.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Hash-Based Accumulators</h3>
            <p className="text-gray-300 mb-6">
              For UTXO-based systems, simpler and well-studied hash-based accumulators are effective. Sparse Merkle Trees are sufficient for UTXO settings, though not the most efficient solution. More efficient alternatives include UTREEXO or the approaches described in <a href="https://eprint.iacr.org/2021/340.pdf" className="text-blue-400 hover:text-blue-300 underline">this paper</a>.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">UTREEXO</h3>
            <p className="text-gray-300 mb-6">
              UTREEXO is a more efficient alternative for representing the UTXO set compared to traditional Merkle Trees. It allows for partially stateless clients, which can be practical in many scenarios. However, fully stateless clients still require archival nodes to store and update client proofs.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-white">Partially Stateless Clients</h3>
            <p className="text-gray-300 mb-6">
              Ergo currently employs an approach outlined in <a href="https://eprint.iacr.org/2016/994.pdf" className="text-blue-400 hover:text-blue-300 underline">this paper</a> to support partially stateless clients. This approach balances security and efficiency, as fully stateless clients still depend on archival nodes for storing and updating client proofs.
            </p>

            <hr className="border-neutral-700 my-8" />

            <h3 className="text-2xl font-bold mb-4 text-white">Comparison of AVL Trees and Merkle Trees in Ergo</h3>
            <p className="text-gray-300 mb-6">
              In Ergo, both AVL trees and Merkle trees play critical roles in ensuring the integrity, security, and efficiency of the blockchain. While they are both binary trees, their specific structures, purposes, and use cases differ significantly, making each suitable for different aspects of the Ergo ecosystem.
            </p>

            <h4 className="text-xl font-bold mb-3 text-white">AVL Trees (Authenticated Dynamic Dictionaries)</h4>
            <p className="text-gray-300 mb-4">
              <strong>Overview</strong>: AVL trees in Ergo, particularly the AVL+ variant, are self-balancing binary search trees used to store and authenticate dynamic data sets. The main characteristic of AVL trees is their ability to maintain balance, which ensures that the height of the tree remains logarithmic in relation to the number of nodes. This property guarantees that operations such as search, insertion, and deletion can be performed efficiently, even as the data set grows.
            </p>

            <p className="text-gray-300 mb-4">
              <strong>Use Case in Ergo</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>UTXO Set Management</strong>: AVL+ trees are employed to manage the UTXO (Unspent Transaction Output) set in the Ergo blockchain. Since UTXOs are frequently created and spent, the dynamic nature of AVL trees makes them ideal for this application. They support efficient updates while providing compact proofs for verification, which is crucial for maintaining the blockchain's performance.</li>
            </ul>

            <p className="text-gray-300 mb-4">
              <strong>Key Advantages</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Efficient Handling of Dynamic Data</strong>: AVL trees are optimized for scenarios where data changes frequently, such as the UTXO set, where coins are constantly being spent and created.</li>
              <li><strong>Compact Proofs</strong>: AVL+ trees generate compact proofs for the inclusion or exclusion of elements, aiding in efficient state verification.</li>
            </ul>

            <h4 className="text-xl font-bold mb-3 text-white">Merkle Trees</h4>
            <p className="text-gray-300 mb-4">
              <strong>Overview</strong>: Merkle trees are hash-based binary trees where each node contains a cryptographic hash. They are primarily used to ensure the integrity and authenticity of data. In a Merkle tree, leaf nodes represent individual data elements, and each non-leaf node is a hash of its child nodes. The Merkle root, derived from the tree, serves as a cryptographic commitment to the entire data set, allowing for efficient verification of data integrity through Merkle proofs.
            </p>

            <p className="text-gray-300 mb-4">
              <strong>Use Case in Ergo</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Transaction Verification</strong>: Merkle trees are used in Ergo to commit all transactions in a block into a single tree structure. The resulting Merkle root is included in the block header, enabling the network to verify the inclusion of any transaction within the block quickly.</li>
              <li><strong>Extension Block Security</strong>: Merkle trees are also utilized in the Extension Block to secure additional metadata, such as miner votes and protocol parameters. This ensures that the data has not been tampered with after the block is created.</li>
            </ul>

            <p className="text-gray-300 mb-4">
              <strong>Key Advantages</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Efficient Verification of Static Data</strong>: Merkle trees are particularly well-suited for static or infrequently changing datasets. They allow for quick verification of data integrity without the need to access the entire data set.</li>
              <li><strong>Compact Proofs</strong>: Merkle proofs are compact and efficient, making them ideal for verifying individual elements within a large dataset, such as transactions within a block.</li>
            </ul>

            <h4 className="text-xl font-bold mb-3 text-white">Why Use AVL Trees or Merkle Trees?</h4>
            <p className="text-gray-300 mb-4">
              <strong>When to Use AVL Trees</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Dynamic Data Management</strong>: AVL trees are the preferred choice for dynamic data sets that require frequent updates, such as the UTXO set in Ergo.</li>
              <li><strong>Real-Time Applications</strong>: Their ability to maintain balance and support efficient insertions and deletions makes AVL trees ideal for real-time blockchain applications.</li>
            </ul>

            <p className="text-gray-300 mb-4">
              <strong>When to Use Merkle Trees</strong>:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Data Integrity and Authentication</strong>: Merkle trees excel in scenarios where data integrity needs to be proven without frequent modifications. They are perfect for static datasets where the structure remains relatively unchanged, such as in block headers or extension blocks.</li>
              <li><strong>Efficient Data Verification</strong>: For use cases requiring efficient verification of specific data elements within a large dataset, Merkle trees provide the necessary cryptographic proofs with minimal overhead.</li>
            </ul>

            <h4 className="text-xl font-bold mb-3 text-white">Conclusion</h4>
            <p className="text-gray-300 mb-6">
              Both AVL and Merkle trees are indispensable in the Ergo blockchain, each serving distinct but complementary purposes. AVL trees are optimized for dynamic data management and are essential for handling the UTXO set, where data changes frequently. In contrast, Merkle trees are used to ensure the integrity and authenticity of static datasets, such as transactions within a block or data in the Extension Block, through efficient cryptographic proofs. Understanding these differences is crucial for developers working within the Ergo ecosystem to leverage the right data structure for their specific use case.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
} 