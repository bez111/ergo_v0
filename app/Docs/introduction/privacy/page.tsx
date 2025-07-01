import React from 'react';
import { EyeOff, KeyRound, Lock, Code2, Quote, ExternalLink, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <EyeOff className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Privacy: Understanding Zero-Knowledge Proofs and Sigma Protocols
          </h1>
          <p className="text-xl text-gray-400">
            Ergo provides superior access to discrete log-based zero-knowledge proofs, enabling powerful privacy features and composable cryptographic protocols. But what exactly is a zero-knowledge proof?
          </p>
        </div>
      </div>

      {/* Zero-Knowledge Proofs Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <Lock className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">What is a Zero-Knowledge Proof?</h2>
          <p className="text-gray-300 mb-2">
            Imagine you find a phone in a bar and someone claims it's theirs. They can prove it by hiding the screen, entering the unlock code, and then showing the unlocked screen. They've proven ownership without revealing any sensitive information, such as the unlock code. This is the essence of a zero-knowledge proof.
          </p>
          <p className="text-gray-300 mb-2">
            In cryptography, zero-knowledge proofs are crucial for maintaining secrets. They're widely used in digital signatures, a tool used by millions daily. In essence, a digital signature says:
          </p>
          <div className="bg-neutral-900/70 border border-orange-400/20 rounded-lg p-4 mb-2 text-orange-200 italic">
            'This message proves I know the private key associated with this public key – but I'm not revealing the private key itself.'
          </div>
        </div>
      </div>

      {/* Sigma Protocols Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <KeyRound className="w-8 h-8 text-cyan-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Sigma Protocols: Efficient and Composable Proofs</h2>
          <p className="text-gray-300 mb-2">
            Among the myriad of zero-knowledge protocols, a sub-class known as Sigma Protocols (Σ-Protocols or Generalized Schnorr Proofs) stands out for its efficiency and composability.
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold">ErgoScript</span> is the language used to specify the conditions under which currency can be spent. It is flexible enough to allow for ring signatures, multi-signatures, multiple currencies, atomic swaps, self-replicating scripts, and long-term computation.
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li>Currently, the two Sigma Protocols in use are proof of discrete log and proof of Diffie-Hellman tuple.</li>
            <li>Composable proofs, when combined with a blockchain, enable powerful use cases. The logic for proofs can include conditions based on the blockchain state.</li>
          </ul>
        </div>
      </div>

      {/* ErgoScript Example Section */}
      <div className="bg-neutral-900/50 border border-orange-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <Code2 className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">ErgoScript: Flexible Privacy Logic</h2>
          <p className="text-gray-300 mb-2">
            Example use cases enabled by Sigma Protocols and ErgoScript:
          </p>
          <ul className="list-disc pl-6 text-gray-300 mb-2">
            <li>If the deadline block height has been reached, Alice can provide knowledge of a secret key for a refund. <span className="text-cyan-400">OR</span> a ring signature from Alice and Bob is required to spend coins.</li>
            <li>If this account holds a minimum of 100 ERG, Alice <span className="text-cyan-400">OR</span> Bob can remove funds above that amount.</li>
            <li>Trustless coin or custom token swaps across any Bitcoin-like blockchain, including partial swaps for a fully-fledged decentralized exchange (DEX).</li>
          </ul>
          <p className="text-gray-300 mb-2">
            No need for gateways, token wrapping, or other potential bottlenecks or points of failure.
          </p>
        </div>
      </div>

      {/* Importance of Optional Privacy Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
        <Shield className="w-8 h-8 text-cyan-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-4">The Importance of 'Optional' Privacy</h2>
          <div className="bg-neutral-900/70 border border-cyan-400/20 rounded-lg p-4 mb-2 text-cyan-200 flex gap-2 items-start">
            <Quote className="w-5 h-5 mt-1 text-cyan-400" />
            <span>
              Privacy must remain an option to protect the individual. It does not have to be forced; let people make their own choices. Privacy is the ability to create barriers and erect boundaries to create a space for the individual. It is up to each what borders and boundaries they choose to make.<br />
              <span className="block mt-2 text-cyan-400 font-semibold">– The Ergo Manifesto</span>
            </span>
          </div>
          <p className="text-gray-300 mb-2">
            Ergo prioritizes a rich smart-contract language, and with non-optional privacy, efficient and powerful contracts are not possible. Formalising leakage is challenging for simple payments, and arbitrary contracts are not feasible.
          </p>
          <p className="text-gray-300 mb-2">
            There are numerous reasons why someone might want optional privacy. Transparent ledgers are a feature for many use cases, such as charities that want everyone to have full access to the flow of funds.
          </p>
          <p className="text-gray-300 mb-2">
            Optional privacy also has strong arguments for adoption and regulation. ErgoMixer is non-interactive, so it works with the blockchain alone; no off-chain coordination with others (and a trusted coordinator) is needed.
          </p>
          <p className="text-gray-300 mb-2">
            In the future, the community could enable privacy by default for every transaction in Ergo. Or we'll see integration mix-nets and other novel ideas on the application layer.
          </p>
        </div>
      </div>
    </>
  );
} 