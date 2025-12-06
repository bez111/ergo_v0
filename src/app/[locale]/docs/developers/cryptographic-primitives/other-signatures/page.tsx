
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { ArrowLeft, Shield, Users, Network, Settings, Zap } from "lucide-react";
import Link from "next/link";

export default function OtherSignaturesPage() {
  return (
    <>
      {/* HERO section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Other Signature Schemes
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Beyond Schnorr and Diffie-Hellman, Ergo supports a variety of advanced signature schemes that enable complex cryptographic protocols, privacy-preserving transactions, and distributed trust mechanisms.
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
        <h2 className="text-3xl font-bold mb-6 text-white">Advanced Signature Schemes</h2>
        
        <p className="text-gray-300 mb-8">
          Ergo's cryptographic infrastructure extends beyond basic digital signatures to support sophisticated protocols that enable privacy, distributed trust, and advanced security features. These signature schemes form the foundation for complex applications like mixers, multi-signature wallets, and privacy-preserving transactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Ring Signatures */}
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/ring"
            className="group block p-6 bg-neutral-800/50 border border-neutral-700/50 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Ring Signatures
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Enable privacy-preserving transactions by allowing a signer to prove they belong to a group without revealing their specific identity. Essential for mixers and privacy applications.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>

          {/* Threshold Signatures */}
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/threshold"
            className="group block p-6 bg-neutral-800/50 border border-neutral-700/50 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Threshold Signatures
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Distribute signing authority across multiple parties, requiring a threshold number of participants to create a valid signature. Ideal for multi-signature wallets and distributed trust.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>

          {/* Distributed Signatures */}
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/distributed"
            className="group block p-6 bg-neutral-800/50 border border-neutral-700/50 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Network className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Distributed Signatures
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced protocols that enable signature generation across distributed networks, providing fault tolerance and enhanced security for critical applications.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>

          {/* Signature Scheme Internals */}
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/internals"
            className="group block p-6 bg-neutral-800/50 border border-neutral-700/50 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Signature Scheme Internals
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Deep dive into the internal workings of Ergo's signature schemes, including implementation details, security considerations, and optimization techniques.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>

          {/* Improved Signatures */}
          <Link
            href="/docs/developers/cryptographic-primitives/other-signatures/improved"
            className="group block p-6 bg-neutral-800/50 border border-neutral-700/50 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Improved Signatures
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Next-generation signature schemes with enhanced security properties, improved efficiency, and novel cryptographic features for advanced applications.
            </p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
        </div>

        <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-white">Key Benefits</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Privacy:</strong> Ring signatures and related schemes enable anonymous transactions and privacy-preserving protocols</li>
            <li><strong>Distributed Trust:</strong> Threshold and distributed signatures eliminate single points of failure</li>
            <li><strong>Advanced Security:</strong> Multi-layered cryptographic protections for complex use cases</li>
            <li><strong>Flexibility:</strong> Modular design allows for custom signature schemes and protocol composition</li>
            <li><strong>Performance:</strong> Optimized implementations for high-throughput applications</li>
          </ul>
        </div>

        <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Privacy Applications</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Mixers and coin mixing protocols</li>
                <li>Anonymous voting systems</li>
                <li>Privacy-preserving smart contracts</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Security Applications</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Multi-signature wallets</li>
                <li>Distributed key management</li>
                <li>Advanced authentication systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 