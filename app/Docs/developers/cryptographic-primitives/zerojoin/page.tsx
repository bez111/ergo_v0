import React from "react";
import { ArrowLeft, Shield, Eye, Lock, Users, Zap, BookOpen } from "lucide-react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function ZeroJoinPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Exploring ZeroJoin
      </h1>
      
      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <p className="text-gray-300 mb-6">
            ZeroJoin is a privacy-centric mechanism designed for the Ergo blockchain, providing users with the ability to restore fungibility to digital tokens through anonymous transactions. Leveraging <strong>Sigma protocols</strong> and cryptographic techniques such as <strong>ring signatures</strong> and <strong>Diffie-Hellman Tuples</strong>, ZeroJoin is built to obfuscate the transaction trail, ensuring privacy and security.
          </p>
        </section>

        <div className="mb-6 flex gap-4">
          <Link
            href="/Docs/developers/cryptographic-primitives"
            className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cryptographic Primitives
          </Link>
          
          <a
            href="https://storage.googleapis.com/ergo-cms-media/docs/CBT_2020_ZeroJoin_Combining_Zerocoin_and_CoinJoin_v3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            ZeroJoin Presentation
          </a>
        </div>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-400" />
            How ZeroJoin Works
          </h2>
          <p className="text-gray-300 mb-4">
            ZeroJoin's core functionality is based on <strong>cryptographic proofs</strong> that allow participants to mix their tokens with those of others, effectively breaking the link between the sender and receiver. This makes it much harder to trace individual transactions, increasing privacy. ZeroJoin accomplishes this through the use of two key <strong>Σ-protocols</strong> (Sigma protocols):
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">1. ProveDlog(u)</h3>
              <p className="text-sm text-gray-300">
                A proof of knowledge of the <strong>Discrete Logarithm</strong> of a group element <InlineMath math="u" /> in relation to a fixed generator <InlineMath math="g" />. The prover demonstrates knowledge of a secret <InlineMath math="x" />, where <InlineMath math="u = g^x" />, without revealing <InlineMath math="x" />. This is closely related to the cryptographic principles behind <strong>Schnorr signatures</strong>.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">2. ProveDHTuple(g, h, u, v)</h3>
              <p className="text-sm text-gray-300">
                A proof of knowledge of a <strong>Diffie-Hellman tuple</strong>. The prover demonstrates knowledge of <InlineMath math="x" />, where <InlineMath math="u = g^x" /> and <InlineMath math="v = h^x" /> for arbitrary generators <InlineMath math="g" /> and <InlineMath math="h" />, again without revealing <InlineMath math="x" />. This is a more complex protocol that combines two instances of <strong>ProveDlog</strong>.
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">
            These two protocols allow for the anonymous mixing of tokens by ensuring that participants can prove ownership and control over their tokens without revealing their identities.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-bold mb-3 text-green-400">Step-by-Step Process</h3>
          <p className="text-gray-300 mb-4">
            The ZeroJoin process operates as follows:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">1. Commitment</h4>
              <p className="text-sm text-gray-300">
                The prover generates a random value <InlineMath math="r" /> and computes <InlineMath math="t_0 = g^r" /> and <InlineMath math="t_1 = h^r" />. These values are sent as the prover's commitment to the verifier.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">2. Challenge</h4>
              <p className="text-sm text-gray-300">
                The verifier generates a random challenge <InlineMath math="c" /> and sends it to the prover.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">3. Response</h4>
              <p className="text-sm text-gray-300">
                The prover calculates <InlineMath math="z = r + cx" /> and sends <InlineMath math="z" /> to the verifier.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">4. Verification</h4>
              <p className="text-sm text-gray-300">
                The verifier checks that <InlineMath math="g^z = t_0 \cdot u^c" /> and <InlineMath math="h^z = t_1 \cdot v^c" />. If both checks hold true, the verifier accepts the proof.
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">
            For non-interactive applications, the challenge <InlineMath math="c" /> is computed using the <strong>Fiat-Shamir transformation</strong>, which makes the protocol non-interactive by deriving the challenge as a hash of the commitment and other public data.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-purple-400" />
            Privacy in ZeroJoin
          </h2>
          <p className="text-gray-300 mb-4">
            The privacy in ZeroJoin is achieved by combining multiple users' transactions in a single <strong>mixing pool</strong>. This mixing breaks the link between a particular input and output, making it difficult for an observer to trace a transaction back to its origin. The core idea of mixing is that the more participants there are in the pool, the harder it becomes to identify the sender and receiver of any specific transaction.
          </p>
          
          <p className="text-gray-300 mb-6">
            However, mixing privacy is only as strong as the anonymity set. A small set of participants may not provide significant privacy guarantees, which is why increasing the number of participants in a mix improves the overall anonymity and obfuscation.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Cryptographic Foundations
          </h2>
          
          <h3 className="text-xl font-bold mb-3 text-green-400">Diffie-Hellman Tuples in ZeroJoin</h3>
          <p className="text-gray-300 mb-4">
            One of the core cryptographic tools in ZeroJoin is the use of <strong>Diffie-Hellman tuples</strong>. This allows for the generation of shared secrets between participants without ever revealing the secret itself. The security of the protocol rests on the <strong>Decision Diffie-Hellman (DDH)</strong> assumption, which states that given a tuple of group elements <InlineMath math="(g, g^x, h, h^x)" />, it is computationally hard to distinguish it from a random tuple unless one knows <InlineMath math="x" />.
          </p>
          
          <p className="text-gray-300 mb-6">
            In the context of ZeroJoin, this property is used to ensure that participants can prove they have the right to spend tokens without revealing their private keys or transaction details. The <strong>ProveDHTuple</strong> protocol ensures that two parties can generate a shared key and prove its validity without ever exchanging the private key.
          </p>
          
          <h3 className="text-xl font-bold mb-3 text-green-400">Ring Signatures</h3>
          <p className="text-gray-300 mb-4">
            ZeroJoin also incorporates <strong>ring signatures</strong>, a cryptographic method that allows a user to sign a message on behalf of a group without revealing which specific member of the group signed the message. This is used to further enhance privacy, as it enables participants to mix their transactions with those of others, making it impossible to determine which specific individual authorized the transaction.
          </p>
          
          <p className="text-gray-300 mb-6">
            In ZeroJoin, ring signatures are essential for ensuring that even if a participant mixes their funds, they cannot be singled out as the originator of the transaction. By pooling transactions together in a ring, every participant shares the same level of anonymity.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Non-Interactive Mixing
          </h2>
          <p className="text-gray-300 mb-4">
            ZeroJoin employs <strong>non-interactive mixing</strong>, which means that users do not need to coordinate with each other directly to participate in a mixing session. Instead, the mixing process can be conducted asynchronously, allowing users to submit their funds to the mixing pool at different times and still benefit from the privacy protections offered by ZeroJoin.
          </p>
          
          <p className="text-gray-300 mb-6">
            This non-interactive model is enabled through the <strong>Fiat-Shamir transformation</strong>, which transforms the interactive Sigma protocol into a non-interactive version by using hash functions to simulate the verifier's challenge. This ensures that users can prove they are part of the mix without requiring real-time interaction, which reduces the complexity of coordinating a mixing session and increases usability.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" />
            Enhanced Privacy: ZeroJoin and Covert Stealth Transactions
          </h2>
          <p className="text-gray-300 mb-4">
            Though <strong>ZeroJoin</strong> focuses on providing private and anonymous transactions through mixing, its effectiveness can be greatly enhanced when combined with <strong>Stealth Addresses</strong> and <strong>Covert Addresses</strong>. These features, introduced by <strong>ErgoMixer</strong>, ensure that both sender and receiver identities remain concealed, making it nearly impossible to trace transactions on the Ergo blockchain.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Stealth Addresses</h3>
              <p className="text-sm text-gray-300">
                Generate unique one-time addresses for each transaction. Even if a user repeatedly mixes tokens using ZeroJoin, linking these transactions back to the same individual becomes nearly impossible when Stealth Addresses are used. This is achieved through non-interactive cryptographic procedures, such as <strong>Diffie-Hellman key exchanges</strong>, allowing the recipient to derive the unique address for each transaction while maintaining privacy.
              </p>
            </div>
            
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <h3 className="font-semibold text-cyan-400 mb-2">Covert Addresses</h3>
              <p className="text-sm text-gray-300">
                Serve as pseudonymous addresses, obscuring the user's real wallet. These are especially useful when users publicly share their address but want to avoid revealing their true identity to onlookers. In ZeroJoin, covert addresses further obfuscate the transaction trail.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Conclusion
          </h2>
          <p className="text-gray-300 mb-4">
            ZeroJoin is a powerful privacy tool on the Ergo blockchain, leveraging advanced cryptographic techniques such as <strong>Sigma protocols</strong>, <strong>Diffie-Hellman tuples</strong>, and <strong>ring signatures</strong> to provide robust, non-custodial mixing of tokens. The non-interactive nature of ZeroJoin makes it user-friendly, allowing participants to mix their funds without requiring direct coordination with others.
          </p>
          
          <p className="text-gray-300 mb-4">
            When paired with <strong>Stealth Addresses</strong> and <strong>Covert Addresses</strong>, ZeroJoin becomes a comprehensive solution for achieving transactional privacy on the Ergo blockchain. It ensures that both senders and receivers remain anonymous, offering enhanced privacy guarantees compared to traditional cryptocurrency mixing mechanisms.
          </p>
          
          <p className="text-gray-300">
            For more technical details and implementations, please refer to the <a href="https://ergoplatform.org/docs/CBT_2020_ZeroJoin_Combining_Zerocoin_and_CoinJoin_v3.pdf" className="text-blue-400 hover:text-blue-300 underline">ZeroJoin technical presentation</a> and the <a href="https://github.com/ergoMixer/ergoMixBack" className="text-blue-400 hover:text-blue-300 underline">ErgoMixer GitHub repository</a>.
          </p>
        </section>
      </div>
    </div>
  );
} 