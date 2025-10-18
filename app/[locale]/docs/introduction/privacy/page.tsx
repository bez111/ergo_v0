import React from 'react';
import {
  Lock,
  KeyRound,
  Code2,
  Shield,
  Globe,
  Zap,
  Layers,
  BookOpen,
  CheckCircle,
  Quote,
  Database,
  FileText,
  Video,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Understanding Zero-Knowledge Proofs and Sigma Protocols
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo provides superior access to discrete log-based zero-knowledge proofs, enabling powerful privacy features and composable cryptographic protocols. But what exactly is a zero-knowledge proof?
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Sigma protocols and ErgoScript unlock efficient, flexible, and composable privacy logic for smart contracts, atomic swaps, and more — all with optional privacy by design.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/introduction/privacy-features"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <Shield className="w-5 h-5 mr-2" /> Explore Privacy Features
          </Link>
          <Link
            href="https://ergoplatform.org/en/blog/2021-11-10-learning-ergo-101-eutxo-explained-for-human-beings/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <FileText className="w-5 h-5 mr-2" /> Read the Whitepaper
          </Link>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Imagine you find a phone in a bar and someone claims it's theirs. They can prove it by hiding the screen, entering the unlock code, and then showing the unlocked screen. They've proven ownership without revealing any sensitive information, such as the unlock code. This is the essence of a zero-knowledge proof."
        </blockquote>
        <blockquote className="text-lg italic text-center text-orange-200 mt-4">
          'This message proves I know the private key associated with this public key – but I'm not revealing the private key itself.'
        </blockquote>
      </div>

      {/* Core Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-neutral-900/50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-orange-400" /> Zero-Knowledge Proofs
          </h3>
          <p className="text-gray-300 mb-4">
            Prove knowledge of a secret without revealing it. ZKPs are the foundation of digital signatures and privacy-preserving protocols in Ergo.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No sensitive data exposure
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Used in digital signatures
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Foundation for privacy
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-cyan-400" /> Sigma Protocols
          </h3>
          <p className="text-gray-300 mb-4">
            Efficient, composable zero-knowledge proofs (Σ-protocols) enable advanced cryptographic applications and flexible smart contracts in Ergo.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Efficient proof construction
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Composable with blockchain logic
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Used in ring/multisignatures
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-green-400" /> Flexible Privacy Logic
          </h3>
          <p className="text-gray-300 mb-4">
            ErgoScript enables expressive privacy logic: ring signatures, multi-signatures, atomic swaps, and more — all natively supported.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Ring/multisignature support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Atomic swaps & DEX logic
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No trusted third parties
            </li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" /> Optional Privacy
          </h3>
          <p className="text-gray-300 mb-4">
            Privacy is not forced — users and dApps can choose the level of privacy they need. Transparent ledgers and private transactions coexist in Ergo.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              User choice: public or private
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Regulatory compliance possible
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Non-interactive mixing (ErgoMixer)
            </li>
          </ul>
        </div>
      </div>

      {/* Advanced Features Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Sigma Protocols & ErgoScript in Action
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Among the myriad of zero-knowledge protocols, a sub-class known as Sigma Protocols (Σ-Protocols or Generalized Schnorr Proofs) stands out for its efficiency and composability.
          </p>
          <p>
            <span className="font-semibold">ErgoScript</span> is the language used to specify the conditions under which currency can be spent. It is flexible enough to allow for ring signatures, multi-signatures, multiple currencies, atomic swaps, self-replicating scripts, and long-term computation.
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>Currently, the two Sigma Protocols in use are proof of discrete log and proof of Diffie-Hellman tuple.</li>
            <li>Composable proofs, when combined with a blockchain, enable powerful use cases. The logic for proofs can include conditions based on the blockchain state.</li>
          </ul>
          <div className="bg-neutral-900/70 border border-cyan-400/20 rounded-lg p-4 mb-2 text-cyan-200">
            For example: <br />
            <span className="italic">If the deadline block height has been reached, Alice can provide knowledge of a secret key for a refund. <span className="text-cyan-400 font-semibold">OR</span> a ring signature from Alice and Bob is required to spend coins.</span><br />
            <span className="italic">If this account holds a minimum of 100 ERG, Alice <span className="text-cyan-400 font-semibold">OR</span> Bob can remove funds above that amount.</span>
          </div>
          <p>
            Ergo not only allows for trustless coin or custom token swaps across any Bitcoin-like blockchain, but it also enables partial swaps. This feature facilitates the creation of a fully-fledged decentralised exchange (DEX) that enables cross-chain trading: a trustless version of existing crypto exchanges. There's no need for gateways, token wrapping or other potential bottlenecks or points of failure.
          </p>
        </div>
      </div>

      {/* Optional Privacy Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">The Importance of 'Optional' Privacy</h2>
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

      {/* Quick Links Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">Ready to explore more?</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/docs/introduction/eutxo"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Layers className="w-5 h-5 mr-2 text-orange-400" />
            <span className="text-gray-300">eUTXO Model</span>
          </Link>
          <Link
            href="/docs/introduction/nipopows"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Zap className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-gray-300">NIPoPoWs</span>
          </Link>
          <Link
            href="/docs/introduction/atomic-swaps"
            className="flex items-center justify-center px-4 py-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            <Globe className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-gray-300">Atomic Swaps</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 