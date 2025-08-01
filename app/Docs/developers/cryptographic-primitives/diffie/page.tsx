import React from "react";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function DiffiePage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Diffie-Hellman (DH) Protocol
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          The <strong>Diffie-Hellman (DH)</strong> protocol is a cornerstone of cryptography, allowing two parties to generate a shared secret over a public communication channel. This shared secret can then be used to encrypt future communications. Importantly, <strong>Diffie-Hellman does not involve exchanging the secret itself</strong>—instead, the two parties collaboratively generate it, ensuring that the secret remains secure, even if an observer intercepts their communication.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          This principle makes Diffie-Hellman invaluable in settings where <strong>multi-signature</strong> schemes, <strong>ring signatures</strong>, and other privacy-preserving cryptographic protocols are required, such as in Ergo's mixer or stealth address applications.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/Docs/developers/cryptographic-primitives"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Cryptographic Primitives
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold mb-4 text-white">Diffie-Hellman Tuple</h2>

        <p className="text-gray-300 mb-6">
          In the context of Ergo, <strong>Diffie-Hellman tuples</strong> (DHTs) are used to prove knowledge of a shared secret without revealing it. The tuple consists of public group elements <strong>g, h, u, v</strong>, and the goal is to prove knowledge of a secret <strong>x</strong> such that:
        </p>

        <BlockMath>u = g^x</BlockMath>
        <BlockMath>v = h^x</BlockMath>

        <p className="text-gray-300 mb-6">
          The protocol works as follows:
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Interactive Protocol</h3>

        <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
          <li>The prover selects a random value <strong>r &larr;<sup>R</sup> Z<sub>q</sub></strong> and computes two temporary values <strong>t<sub>0</sub></strong> and <strong>t<sub>1</sub></strong>:
            <BlockMath>t_0 = g^r, \quad t_1 = h^r</BlockMath>
            The prover sends <strong>(t<sub>0</sub>, t<sub>1</sub>)</strong> to the verifier.
          </li>
          <li>The verifier selects a random challenge <strong>c &larr;<sup>R</sup> Z<sub>q</sub></strong> and sends it to the prover.</li>
          <li>The prover computes the response <strong>z = r + cx</strong> and sends it to the verifier.</li>
          <li>The verifier accepts the proof if:
            <BlockMath>g^z = t_0 \cdot u^c</BlockMath>
            <BlockMath>h^z = t_1 \cdot v^c</BlockMath>
            This process allows the prover to demonstrate knowledge of <strong>x</strong> without actually revealing <strong>x</strong>.
          </li>
        </ol>

        <h3 className="text-2xl font-bold mb-4 text-white">Fiat-Shamir Transformation (Non-Interactive Variant)</h3>

        <p className="text-gray-300 mb-6">
          In blockchain environments like Ergo, interactive protocols are often impractical. Instead, a non-interactive version of the Diffie-Hellman protocol is used, employing the <strong>Fiat-Shamir transformation</strong>. This transformation replaces the verifier's challenge <strong>c</strong> with a cryptographic hash function <strong>H</strong>:
        </p>

        <BlockMath>c = H(t_0 \parallel t_1 \parallel m)</BlockMath>

        <p className="text-gray-300 mb-6">
          Here, <strong>m</strong> is the message to be signed or validated. This makes the protocol non-interactive, as the prover can generate the challenge independently, creating a self-contained proof.
        </p>

        <p className="text-gray-300 mb-6">
          In ErgoScript, this transformation is implemented as <strong><a href="/Docs/developers/ergoscript-languages/global-functions#provedhtuple" className="text-orange-400 hover:text-orange-300">proveDHTuple</a>(g, h, u, v)</strong>, allowing users to generate non-interactive proofs of Diffie-Hellman tuples.
        </p>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Use Cases of Diffie-Hellman Tuples in Ergo</h2>

        <h3 className="text-2xl font-bold mb-4 text-white">Mixers</h3>

        <p className="text-gray-300 mb-6">
          Diffie-Hellman tuples are essential for maintaining privacy in Ergo's <strong>ZeroJoin</strong> mixer, a non-custodial, non-interactive token mixer. The security of ZeroJoin is based on the <strong>Decision Diffie-Hellman (DDH) assumption</strong>, a well-established cryptographic assumption that ensures no information about the secret can be gleaned from the public values exchanged.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>ZeroJoin</strong> utilizes <strong>ring signatures</strong> and Diffie-Hellman tuples to restore fungibility to digital notes, ensuring that coins become indistinguishable from one another after mixing.</li>
          <li>Ergo's mixers avoid the need for trusted setups or intermediaries, ensuring minimal trust assumptions.</li>
        </ul>

        <h4 className="text-xl font-bold mb-4 text-white">Comparison with Other Platforms:</h4>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-neutral-700">
            <thead>
              <tr className="bg-neutral-800">
                <th className="border border-neutral-700 px-4 py-2 text-left">Bitcoin</th>
                <th className="border border-neutral-700 px-4 py-2 text-left">Ethereum</th>
                <th className="border border-neutral-700 px-4 py-2 text-left">Ergo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-700 px-4 py-2">No on-chain mixing</td>
                <td className="border border-neutral-700 px-4 py-2">Trusted setup-based or inefficient mixers</td>
                <td className="border border-neutral-700 px-4 py-2">Efficient, minimal trust assumptions, using ring signatures and DHTs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 mb-6">
          For more information, see <a href="/Docs/developers/cryptographic-primitives/ergomixer" className="text-orange-400 hover:text-orange-300">ErgoMixer</a>.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Stealth Addresses</h3>

        <p className="text-gray-300 mb-6">
          Stealth addresses leverage <strong>non-interactive Diffie-Hellman key exchanges</strong> to provide privacy in financial transactions. Each payment generates a new one-time-use address, ensuring that the recipient's identity remains private while still enabling them to securely receive funds.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li>Stealth addresses prevent anyone except the recipient from linking transactions to their public address, significantly enhancing privacy.</li>
          <li>Diffie-Hellman key exchanges are at the core of this functionality, ensuring that only the intended recipient can derive the private key needed to spend the funds.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          For more details, refer to the <a href="/Docs/developers/cryptographic-primitives/stealth-address" className="text-orange-400 hover:text-orange-300">Stealth Addresses</a> page.
        </p>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Technical Details</h2>

        <h3 className="text-2xl font-bold mb-4 text-white">Fiat-Shamir Transformation</h3>

        <p className="text-gray-300 mb-6">
          The <strong>Fiat-Shamir transformation</strong> is crucial for turning interactive protocols like Diffie-Hellman into non-interactive ones suitable for blockchain environments. In Ergo, the Fiat-Shamir transformation ensures that proof generation remains non-interactive and compact, making it efficient for on-chain use.
        </p>

        <p className="text-gray-300 mb-6">
          The transformation replaces the interactive challenge <strong>c</strong> with a hash of the prover's commitment and the message being signed:
        </p>

        <BlockMath>c = H(t_0 \parallel t_1 \parallel m)</BlockMath>

        <p className="text-gray-300 mb-6">
          This allows the prover to generate the challenge on their own, without needing an external verifier. This transformation is implemented in ErgoScript via functions like <strong>proveDHTuple</strong>, which allows developers to create non-interactive proofs for Diffie-Hellman tuples, among other cryptographic statements.
        </p>

        <h3 className="text-2xl font-bold mb-4 text-white">Integration in Ergo's Sigma Protocols</h3>

        <p className="text-gray-300 mb-6">
          In Ergo, Diffie-Hellman tuples are a critical part of the overall <strong>Sigma protocol</strong> framework. By allowing composable cryptographic proofs, Sigma protocols enable developers to create contracts that require privacy-preserving proofs, such as:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><strong>Ring signatures</strong>: Used in mixers and privacy-focused contracts, where participants can prove they are part of a group without revealing which member they are.</li>
          <li><strong>Threshold signatures</strong>: Multi-signature setups that require a subset of participants to agree to spend funds.</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These proofs can be combined using logical operators such as <strong>AND</strong>, <strong>OR</strong>, and <strong>k-out-of-n</strong>, enabling complex and flexible cryptographic conditions for smart contracts.
        </p>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Diffie-Hellman Tuple Applications in Ergo</h2>

        <h3 className="text-2xl font-bold mb-4 text-white">Example: Proving Knowledge of a Diffie-Hellman Tuple in ErgoScript</h3>

        <p className="text-gray-300 mb-4">
          Below is an example of how the <strong>proveDHTuple</strong> function can be used in an ErgoScript contract to prove knowledge of a shared secret <strong>x</strong>:
        </p>

        <UniversalCopyCodeBlock code={`{
  val g = decodePoint("028D84...")
  val h = decodePoint("02F937...")
  val u = decodePoint("03C89B...")
  val v = decodePoint("02B1DA...")

  proveDHTuple(g, h, u, v)
}`} />

        <p className="text-gray-300 mb-6">
          This script proves knowledge of <strong>x</strong> such that <strong>u = g^x</strong> and <strong>v = h^x</strong>, enabling privacy-preserving contracts that can securely verify knowledge of shared secrets without revealing them.
        </p>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Resources</h2>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><a href="https://github.com/ergoplatform/sigma-rust/pull/315" className="text-orange-400 hover:text-orange-300">Diffie-Hellman tuples support in sigma-rust</a></li>
          <li><a href="https://explorer.ergoplatform.com/en/transactions/24f6996bea6b914d3dab7d645cd5e5b9a57e3ac88b2774d34a2be26bdf708d28" className="text-orange-400 hover:text-orange-300">First transaction protected by Diffie-Hellman</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Decisional_Diffie%E2%80%93Hellman_assumption" className="text-orange-400 hover:text-orange-300">Decision Diffie-Hellman (DDH) Assumption</a></li>
        </ul>

        <hr className="border-neutral-700 my-8" />

        <h2 className="text-3xl font-bold mb-4 text-white">Conclusion</h2>

        <p className="text-gray-300 mb-6">
          The Diffie-Hellman protocol plays a vital role in enabling privacy-preserving applications on Ergo, from stealth addresses to mixers like ZeroJoin. By leveraging Diffie-Hellman tuples and their non-interactive proofs through the <strong>Fiat-Shamir transformation</strong>, Ergo enables secure and efficient cryptographic operations. These tools, integrated with Sigma protocols, empower developers to create powerful decentralized applications that prioritize both security and privacy.
        </p>

        <p className="text-gray-300 mb-6">
          For additional details, explore:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
          <li><a href="/Docs/developers/cryptographic-primitives/ergomixer" className="text-orange-400 hover:text-orange-300">ErgoMixer</a></li>
          <li><a href="/Docs/developers/cryptographic-primitives/stealth-address" className="text-orange-400 hover:text-orange-300">Stealth Addresses</a></li>
        </ul>
      </div>
    </>
  );
} 