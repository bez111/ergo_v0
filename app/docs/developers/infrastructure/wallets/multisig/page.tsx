import React from "react";
import Link from "next/link";
import {
  Shield, Users, Key, Lock, ExternalLink, AlertTriangle, CheckCircle, Info,
  Layers, Network, Settings, FileText, ArrowRight, BookOpen
} from "lucide-react";

export default function MultisigPage() {
  return (
    <>
      <div className="mb-8">
        <Link href="/docs/developers/infrastructure/wallets" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-lg transition-colors">
          <span className="text-orange-400">← Back to Wallets</span>
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Users className="w-10 h-10 text-cyan-400" /> MultiSig Wallets
        </h1>
        <p className="text-lg text-gray-300">
          Multi-signature wallets provide enhanced security through distributed key management and consensus-based transaction authorization.
        </p>
      </div>

      {/* What is MultiSig */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
          <Shield className="w-6 h-6" /> What is a MultiSig Wallet?
        </h2>
        <p className="text-gray-300 mb-4">
          A multisig wallet is a "digital wallet that operates with multisignature addresses. This means that it requires more than one private key to sign and authorize a crypto transaction or, in some cases, that several different keys can be used to generate a signature."
        </p>
        <p className="text-gray-300">
          This type of wallet is valuable to an ecosystem because it adds a second layer of protection to the end user. A multisig wallet requires everyone with a private key to confirm the transaction for it to be authorized and executed.
        </p>
      </div>

      {/* Security Benefits */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-green-400">
          <Lock className="w-6 h-6" /> Security Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300">Enhanced Protection</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Provides an added layer of security for protection against hacks because an attacker would need all of the private keys to gain access to the wallet's funds.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-blue-300">Consensus-Based</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Requires multiple parties to agree and sign transactions, preventing unauthorized access by single actors.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-purple-300">Distributed Keys</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Private keys are distributed among multiple participants, eliminating single points of failure.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-orange-400" />
              <h3 className="font-semibold text-orange-300">Risk Mitigation</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Reduces risks associated with lost keys, compromised devices, or malicious actors.
            </p>
          </div>
        </div>
      </div>

      {/* How MultiSig Works */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          <Settings className="w-6 h-6" /> How MultiSig Works
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-purple-400 font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-1">Setup Phase</h3>
              <p className="text-gray-300 text-sm">
                Multiple participants generate their private keys and create a multisig address requiring a specified number of signatures (e.g., 2-of-3, 3-of-5).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-purple-400 font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-1">Transaction Creation</h3>
              <p className="text-gray-300 text-sm">
                One party initiates a transaction and creates a partially signed transaction that needs additional signatures.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-purple-400 font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-1">Signature Collection</h3>
              <p className="text-gray-300 text-sm">
                The required number of participants review and sign the transaction with their private keys.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-purple-400 font-bold text-sm">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-1">Execution</h3>
              <p className="text-gray-300 text-sm">
                Once the threshold is met, the fully signed transaction is broadcast to the network and executed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Minotaur MultiSig */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
          <Layers className="w-6 h-6" /> Minotaur MultiSig Wallet
        </h2>
        <p className="text-gray-300 mb-4">
          Although the general cryptocurrency market continues to demonstrate bearish patterns, the ethos of Ergo stands strong with numerous developers and projects working to help build the new standard of blockchain security and utility. Intricate technological solutions and applications are consistently being brought forth in the Ergo ecosystem.
        </p>
        <div className="bg-neutral-900/50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-orange-300">Comprehensive Guide Available</h3>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            For complete details about the Minotaur multisig wallet, including installation instructions and usage guides, please refer to the dedicated documentation.
          </p>
          <Link href="/docs/developers/infrastructure/wallets/multisig/minotaur-multisig" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-lg transition-colors text-orange-300 hover:text-orange-200">
            <BookOpen className="w-4 h-4" />
            <span>Read Minotaur MultiSig Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
          <Network className="w-6 h-6" /> Common Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-300 mb-2">Corporate Treasury</h3>
            <p className="text-gray-300 text-sm">
              Organizations can secure company funds by requiring multiple executives to approve large transactions.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="font-semibold text-green-300 mb-2">Family Savings</h3>
            <p className="text-gray-300 text-sm">
              Families can protect shared savings by requiring spousal consent for fund movements.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-300 mb-2">Project Funding</h3>
            <p className="text-gray-300 text-sm">
              Development teams can manage project funds with community oversight and approval mechanisms.
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h3 className="font-semibold text-orange-300 mb-2">Exchange Security</h3>
            <p className="text-gray-300 text-sm">
              Cryptocurrency exchanges use multisig for cold storage security and operational fund management.
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
          <AlertTriangle className="w-6 h-6" /> Best Practices
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span><strong>Choose appropriate thresholds:</strong> Use 2-of-3 for small groups, 3-of-5 or higher for larger organizations.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span><strong>Secure key storage:</strong> Store private keys on different devices and in different physical locations.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span><strong>Regular testing:</strong> Periodically test the multisig setup with small transactions to ensure functionality.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span><strong>Backup procedures:</strong> Have clear procedures for key recovery and participant replacement.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span><strong>Communication protocols:</strong> Establish secure channels for transaction coordination and approval.</span>
          </li>
        </ul>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-300">
          <FileText className="w-6 h-6" /> Additional Resources
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li><Link href="/docs/developers/infrastructure/wallets/multisig/minotaur-multisig" className="text-orange-400 hover:underline">Minotaur MultiSig Wallet Guide</Link></li>
          <li><Link href="/docs/developers/infrastructure/wallets" className="text-orange-400 hover:underline">Wallet Infrastructure Overview</Link></li>
          <li><Link href="/docs/developers/cryptographic-primitives/other-signatures/threshold" className="text-orange-400 hover:underline">Threshold Signatures</Link></li>
          <li><Link href="/docs/developers/ergoscript-languages" className="text-orange-400 hover:underline">ErgoScript Smart Contracts</Link></li>
        </ul>
      </div>
    </>
  );
} 