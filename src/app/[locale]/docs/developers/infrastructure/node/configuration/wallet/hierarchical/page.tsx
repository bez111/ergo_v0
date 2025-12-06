"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import Link from "next/link";
import { 
  ChevronRight, Wallet, Key, Lock, Database, 
  Shield, Settings, ExternalLink, FileText, AlertCircle,
  CheckCircle, ArrowRight, GitBranch
} from "lucide-react";

export default function HierarchicalKeysPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Hierarchical Keys
      </h1>

      <div className="mb-8">
        <Link
          href="/docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-orange-400" /> HD Wallet Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">BIP-0044</a> defines a logical hierarchy for deterministic wallets. This is a common standard that is used directly (or used as inspiration) by countless projects in the cryptocurrency sphere.
          </p>
          <p className="text-gray-300 mt-4">
            Such a standard allows end users to move between different wallet software trivially and established the framework for a more cohesive ecosystem to grow.
          </p>
        </section>

        {/* BIP-44 Path Structure */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-400" /> BIP-44 Path Structure
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              The standard has five levels as part of its path:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-cyan-400 font-mono text-lg">m / 44' / coin_type' / account' / change / address_index</code>
            </div>
            <div className="grid md:grid-cols-5 gap-4 text-sm">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <h4 className="font-bold text-blue-400 mb-1">m</h4>
                <p className="text-gray-300 text-xs">Master key</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <h4 className="font-bold text-green-400 mb-1">44'</h4>
                <p className="text-gray-300 text-xs">BIP-44 standard</p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                <h4 className="font-bold text-purple-400 mb-1">coin_type'</h4>
                <p className="text-gray-300 text-xs">Coin identifier</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                <h4 className="font-bold text-orange-400 mb-1">change</h4>
                <p className="text-gray-300 text-xs">External/internal</p>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                <h4 className="font-bold text-cyan-400 mb-1">address_index</h4>
                <p className="text-gray-300 text-xs">Address number</p>
              </div>
            </div>
          </div>
        </section>

        {/* EIP-0003 Standard */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-green-400" /> EIP-0003: Deterministic Wallet Standard
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              <a href="https://github.com/ergoplatform/eips/blob/ad0730daaebd9783f8db3c3095187a62851ee132/eip-0003.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIP-0003: Deterministic Wallet Standard</a> attempts to define a specific <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">coin_type</code> for the Ergo ecosystem, as well as a policy for how wallets use the <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">change</code> level.
            </p>
          </div>
        </section>

        {/* Coin Type */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Key className="w-6 h-6 text-purple-400" /> Coin Type
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Registered <strong>coin_type</strong>s can be found in <a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SLIP-0044</a>.
            </p>
            <p className="text-gray-300 mb-4">
              We will be using the word <strong>ergo</strong> summed based on the numerical values of the ASCII characters for the <strong>coin_type</strong>. As shown below, this means that our <strong>coin_type</strong> is <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">429</code>.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-cyan-400 font-mono text-lg">101 + 114 + 103 + 111 = 429</code>
            </div>
            <p className="text-gray-300 mb-4">
              Thus our path will look as such:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-cyan-400 font-mono text-lg">m / 44' / 429' / account' / change / address_index</code>
            </div>
            <p className="text-gray-300 mb-4">
              And the first default key pair for an Ergo wallet will be:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <code className="text-cyan-400 font-mono text-lg">m / 44' / 429' / 0' / 0 / 0</code>
            </div>
          </div>
        </section>

        {/* Change */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-400" /> Change
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              In BIP-44 the constant 0 is used for the external addresses and constant 1 for internal addresses (aka change addresses).
            </p>
            <p className="text-gray-300 mb-4">
              For EIP-3, we instead do not use constant 1 at all. Thus we do not support internal/change addresses, but only external addresses.
            </p>
            <p className="text-gray-300 mb-4">
              As such all wallets supporting EIP-3 should have any change within a transaction go back to the address using constant 0.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                This decision was made to simplify the experience for end-users and solidify a cohesive standard for wallets to target in the Ergo ecosystem. A full-blown privacy-preserving mixer is already available within the ecosystem, ErgoMix, and thus the pseudo-anonymity provided by internal addresses is not particularly vital.
              </p>
            </div>
            <p className="text-gray-300 mt-4">
              That said, in the future new wallets are more than welcome to create a new EIP for wallets that may wish to support internal addresses as well as an alternate standard (if valuable use cases arise).
            </p>
          </div>
        </section>

        {/* Derived Addresses */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Wallet className="w-6 h-6 text-green-400" /> Derived Addresses
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Ergo node uses a secret root key (derived from seed) for the <em>change</em> address. After switching to EIP-3, supported by CoinBarn and Yoroi around that time, the node switched to the same change address as in the wallets, thus deriving an address corresponding to <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">m/44'/429'/0'/0/0</code>. (originally <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">m/1/2</code>)
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <a href="https://www.ergoforum.org/t/an-issue-with-change-address-of-node-wallet/2940" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Read More</a>
            </div>
          </div>
        </section>

        {/* Deriving Addresses */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-orange-400" /> Deriving Addresses
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              Navigate to <code className="bg-neutral-800 px-2 py-1 rounded text-cyan-400">localhost:9053/swagger#/wallet/walletDeriveKey</code>
            </p>
            <div className="space-y-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <p className="text-gray-300 mb-2">Click <strong>"Try it out"</strong></p>
                <div className="bg-neutral-700/50 rounded p-3">
                  <code className="text-cyan-400 font-mono">"derivationPath": "m/44'/429'/0'/0/0"</code>
                </div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-yellow-400">Requirements:</span>
                </div>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• The wallet needs to be unlocked</li>
                  <li>• You need to authorize on top right on swagger</li>
                  <li>• Click execute and check the address you get in the response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" /> Security Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-400" /> Deterministic Generation
              </h3>
              <p className="text-gray-300 mb-4">
                All keys are deterministically generated from a single master seed, ensuring consistent key generation across devices.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Single seed generates all keys
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Consistent across all devices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  No key storage required
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" /> Backup & Recovery
              </h3>
              <p className="text-gray-300 mb-4">
                Complete wallet backup using only the mnemonic phrase and optional passphrase.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Single mnemonic phrase backup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Optional BIP-39 passphrase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Cross-platform compatibility
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Management */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Key className="w-6 h-6 text-orange-400" /> Key Management
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-400" /> Master Key
              </h3>
              <p className="text-gray-300 mb-4">
                The root key from which all other keys are derived using cryptographic functions.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-400" /> Extended Keys
              </h3>
              <p className="text-gray-300 mb-4">
                Extended public and private keys that can derive child keys without exposing the master key.
              </p>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-purple-400" /> Address Keys
              </h3>
              <p className="text-gray-300 mb-4">
                Individual keys for each address, derived from the extended keys for specific paths.
              </p>
            </div>
          </div>
        </section>

        {/* Security Warning */}
        <section className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-400" /> Security Considerations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-red-400">⚠️ Important Notes:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Never share your mnemonic phrase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Store backup securely offline
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Use strong passphrases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Test recovery process
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-green-400">✅ Best Practices:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Multiple secure backups
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Hardware wallet integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Regular security audits
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Keep software updated
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ExternalLink className="w-6 h-6 text-orange-400" /> Quick Links
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-white hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> BIP-32 Specification
            </a>
            <a
              href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 rounded-xl font-semibold text-white hover:bg-green-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> BIP-39 Specification
            </a>
          </div>
        </section>
      </div>
    </>
  );
} 