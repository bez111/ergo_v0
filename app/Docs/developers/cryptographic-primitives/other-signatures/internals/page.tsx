import { ArrowLeft, Shield, BookOpen, Code, Lock, Users, Zap } from "lucide-react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function SignatureInternalsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Signature Scheme Internals
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/cryptographic-primitives/other-signatures"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Other Signatures
        </Link>
      </div>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <p className="text-gray-300 mb-6">
            This document provides an in-depth look at the signature schemes used in the Ergo blockchain. The security and functionality of transactions on the Ergo platform heavily rely on cryptographic signatures, which ensure that only authorized parties can approve transactions and that the data integrity is maintained. This document outlines the internal workings of these signature schemes, focusing on the algorithms, protocols, and their implementation within the Ergo ecosystem, particularly within the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" className="text-blue-400 hover:text-blue-300 underline">sigmastate-interpreter</a> and <a href="https://github.com/ergoplatform/sigma-rust" className="text-blue-400 hover:text-blue-300 underline">sigma-rust</a> repositories.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            Overview
          </h2>
          <p className="text-gray-300 mb-4">
            In the Ergo blockchain, signature schemes are used to validate that a transaction was indeed created by the owner of the associated private key. This is crucial for preventing unauthorized spending of funds and ensuring the security of smart contracts. Ergo uses several cryptographic protocols to achieve this, including Schnorr signatures and Sigma protocols.
          </p>
          <p className="text-gray-300 mb-4">
            The implementation of these cryptographic protocols is spread across two main repositories:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><a href="https://github.com/ScorexFoundation/sigmastate-interpreter" className="text-blue-400 hover:text-blue-300 underline">sigmastate-interpreter</a>: Focuses on Scala-based ErgoTree interpretation and verification.</li>
            <li><a href="https://github.com/ergoplatform/sigma-rust" className="text-blue-400 hover:text-blue-300 underline">sigma-rust</a>: Provides a Rust-based implementation of the cryptographic primitives, enabling WASM and other Rust-native applications.</li>
          </ul>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            1. Schnorr Signatures
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Schnorr Signatures</strong> are a fundamental part of Ergo's cryptographic toolkit. They are known for their simplicity, efficiency, and security, offering several advantages over other signature schemes such as ECDSA (Elliptic Curve Digital Signature Algorithm).
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-green-400">How Schnorr Signatures Work:</h3>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Key Generation</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>A user generates a private key <InlineMath math="x" /> (a random number) and computes the corresponding public key <InlineMath math="P = xG" />, where <InlineMath math="G" /> is a generator point on the elliptic curve used by Ergo.</li>
                <li>In the Rust implementation, key generation is handled within the <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/wallet/secret_key.rs" className="text-blue-400 hover:text-blue-300 underline">secret_key.rs</a> file, where cryptographic key management and generation take place.</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Signing</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>To sign a message <InlineMath math="m" />, the user generates a random nonce <InlineMath math="k" /> and computes <InlineMath math="R = kG" />. The signature <InlineMath math="(s, e)" /> is then computed as:</li>
              </ul>
              <div className="mt-3">
                <BlockMath math="e = H(R || P || m)" />
                <BlockMath math="s = k + ex" />
              </div>
              <p className="text-sm text-gray-300 mt-3">
                The Schnorr signing process is implemented in <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/wallet/signing.rs" className="text-blue-400 hover:text-blue-300 underline">signing.rs</a> within the `sigma-rust` repository, and in the Scala-based <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/crypto/DLogProtocol.scala" className="text-blue-400 hover:text-blue-300 underline">DLogProtocol</a> file within the `sigmastate-interpreter`.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">Verification</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>To verify the signature <InlineMath math="(s, e)" />, the verifier computes:</li>
              </ul>
              <div className="mt-3">
                <BlockMath math="R' = sG - eP" />
              </div>
              <p className="text-sm text-gray-300 mt-3">and checks if:</p>
              <div className="mt-2">
                <BlockMath math="e = H(R' || P || m)" />
              </div>
              <p className="text-sm text-gray-300 mt-3">
                The verification logic is implemented in the same files: <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/wallet/signing.rs" className="text-blue-400 hover:text-blue-300 underline">signing.rs</a> for Rust and <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/crypto/DLogProtocol.scala" className="text-blue-400 hover:text-blue-300 underline">DLogProtocol.scala</a> for Scala.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-green-400 mt-6">Advantages of Schnorr Signatures:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Security</strong>: Schnorr signatures are provably secure under the assumption of the hardness of the discrete logarithm problem.</li>
            <li><strong>Efficiency</strong>: They produce smaller signatures and require less computational overhead than many other signature schemes.</li>
            <li><strong>Simplicity</strong>: The signing and verification processes are straightforward, making them easy to implement and verify.</li>
            <li><strong>Batch Verification</strong>: Multiple signatures can be verified simultaneously, which is particularly useful in blockchain applications where numerous transactions need to be validated quickly.</li>
          </ul>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-purple-400" />
            2. Sigma Protocols
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Sigma Protocols</strong> are a class of cryptographic protocols that allow a prover to convince a verifier that they know a value <InlineMath math="x" /> such that a statement about <InlineMath math="x" /> is true, without revealing <InlineMath math="x" /> itself. Ergo heavily relies on Sigma protocols for its privacy-preserving features and complex smart contracts.
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-purple-400">Key Components of Sigma Protocols:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Commitment</strong>: The prover sends a commitment to the verifier without revealing the secret value.</li>
            <li><strong>Challenge</strong>: The verifier sends a random challenge to the prover.</li>
            <li><strong>Response</strong>: The prover responds in a way that proves the knowledge of the secret while maintaining its privacy.</li>
          </ul>
          
          <p className="text-gray-300 mt-4">
            The Sigma protocol is implemented in both the `sigmastate-interpreter` and `sigma-rust` repositories:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
            <li>In Scala, the Sigma protocol's cryptographic functions are handled by the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/SigmaPropProver.scala" className="text-blue-400 hover:text-blue-300 underline">SigmaPropProver</a> class, which provides proof creation and validation mechanisms.</li>
            <li>In Rust, the proof generation and verification can be found in <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/chain/transaction/input/prover_result.rs" className="text-blue-400 hover:text-blue-300 underline">prover_result.rs</a>, which handles proof construction during transactions.</li>
          </ul>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            3. ErgoTree and Signature Schemes
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>ErgoTree</strong> is the core of Ergo's smart contract framework. It is a versatile and expressive language that uses Sigma protocols and Schnorr signatures to create conditions for spending boxes (Ergo's version of UTXOs).
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-yellow-400">Signature Scheme Integration in ErgoTree:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Complex Spending Conditions</strong>: ErgoTree allows users to define sophisticated spending conditions that can include multiple signatures, time-based locks, and other cryptographic conditions.</li>
            <li><strong>Multi-Signature Support</strong>: ErgoTree natively supports multi-signature schemes, allowing multiple parties to authorize a transaction.</li>
            <li><strong>Script Validation</strong>: During transaction validation, the ErgoTree interpreter evaluates the conditions defined in the script, ensuring that the signatures match the requirements before the transaction is considered valid.</li>
          </ul>
          
          <p className="text-gray-300 mt-4">
            The Scala-based `sigmastate-interpreter` plays a crucial role in interpreting ErgoTree scripts:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-2">
            <li>The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoLikeInterpreter.scala" className="text-blue-400 hover:text-blue-300 underline">ErgoLikeInterpreter</a> file in `sigmastate-interpreter` provides the main ErgoTree validation logic, where both Schnorr and Sigma signatures are verified.</li>
            <li>In Rust, the validation and interpretation of ErgoTrees are found in the <a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/chain/contract.rs" className="text-blue-400 hover:text-blue-300 underline">contract.rs</a> file, which handles contract conditions and their associated proofs.</li>
          </ul>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" />
            4. Implementation in Ergo
          </h2>
          <p className="text-gray-300 mb-4">
            The signature schemes are implemented across different layers of the Ergo protocol, ensuring both security and flexibility in how transactions are constructed and validated.
          </p>
          
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">sigmastate-interpreter</h4>
              <p className="text-sm text-gray-300 mb-3">
                Implements the core cryptographic primitives, including Schnorr signatures and Sigma protocols, within the Scala-based ErgoTree interpreter. This includes the construction, validation, and execution of ErgoTree scripts.
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoLikeInterpreter.scala" className="text-blue-400 hover:text-blue-300 underline">ErgoLikeInterpreter</a> provides the core verification logic for ErgoTrees.</li>
                <li>The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/SigSerializer.scala" className="text-blue-400 hover:text-blue-300 underline">SigSerializer</a> manages serialization and deserialization of proofs.</li>
                <li>The <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/sigmastate/crypto/DLogProtocol.scala" className="text-blue-400 hover:text-blue-300 underline">DLogProtocol</a> handles Sigma protocol proof construction based on discrete logarithms.</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-400 mb-2">sigma-rust</h4>
              <p className="text-sm text-gray-300 mb-3">
                Provides a Rust-based implementation of the same cryptographic features, allowing for integration into Rust-based environments and cross-platform applications via WASM.
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li><a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/wallet/signing.rs" className="text-blue-400 hover:text-blue-300 underline">signing.rs</a> handles Schnorr signature operations.</li>
                <li><a href="https://github.com/ergoplatform/sigma-rust/blob/develop/ergo-lib/src/chain/transaction/input/prover_result.rs" className="text-blue-400 hover:text-blue-300 underline">prover_result.rs</a> deals with Sigma proofs and transactions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-400" />
            5. Security Considerations
          </h2>
          <p className="text-gray-300 mb-4">
            The security of Ergo's signature schemes is rooted in well-established cryptographic assumptions, such as the hardness of the discrete logarithm problem for Schnorr signatures. However, the security of these schemes also depends on correct implementation and proper use in scripts. Developers and users must ensure that their ErgoTree scripts are designed to avoid common pitfalls, such as using weak randomness or failing to verify critical conditions.
          </p>
          <p className="text-gray-300">
            In particular, the `sigmastate-interpreter` ensures that security considerations are rigorously handled through comprehensive tests, such as those found in the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/test/scala/sigmastate/crypto/SigningSpecification.scala" className="text-blue-400 hover:text-blue-300 underline">SigningSpecification</a>.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-400" />
            6. Use Cases and Applications
          </h2>
          <p className="text-gray-300 mb-4">
            Ergo's signature schemes enable a wide range of applications within the blockchain ecosystem, including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Confidential Transactions</strong>: Leveraging Sigma protocols for privacy-preserving transactions that do not reveal sensitive information.</li>
            <li><strong>Multi-Signature Wallets</strong>: Creating wallets that require multiple signatures to authorize a transaction, increasing security.</li>
            <li><strong>Decentralized Voting</strong>: Implementing voting systems where the anonymity of voters is preserved while ensuring the integrity of the results.</li>
            <li><strong>Smart Contracts</strong>: Developing complex smart contracts that require advanced cryptographic conditions for execution.</li>
          </ul>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-gray-300 mb-4">
            Ergo's signature schemes, built on robust cryptographic foundations like Schnorr signatures and Sigma protocols, are central to the platform's security and functionality. These schemes are implemented across both the `sigmastate-interpreter` and `sigma-rust` repositories, which handle the cryptographic primitives, serialization, verification, and execution of ErgoTree scripts. This allows for flexible, secure, and privacy-preserving transactions, making Ergo a powerful platform for decentralized applications and digital contracts.
          </p>
          <p className="text-gray-300">
            For more information and technical details, refer to the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" className="text-blue-400 hover:text-blue-300 underline">ErgoScript documentation</a> and the <a href="https://github.com/ergoplatform/sigma-rust" className="text-blue-400 hover:text-blue-300 underline">sigma-rust repository</a>.
          </p>
        </section>
      </div>
    </div>
  );
} 