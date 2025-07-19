"use client";

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
          href="/Docs/developers/infrastructure/node/configuration"
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
            Ergo nodes use Hierarchical Deterministic (HD) wallets based on BIP-32 and BIP-39 standards. This allows for secure key derivation, backup, and recovery using mnemonic phrases.
          </p>
        </section>

        {/* BIP Standards */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-400" /> BIP Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Key className="w-5 h-5 text-blue-400" /> BIP-32
              </h3>
              <p className="text-gray-300 mb-4">
                Hierarchical Deterministic Wallets - defines how to derive child keys from parent keys in a tree structure.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Master key derivation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Child key generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Extended public/private keys
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" /> BIP-39
              </h3>
              <p className="text-gray-300 mb-4">
                Mnemonic Code for Generating Deterministic Keys - defines how to generate and use mnemonic phrases.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Mnemonic phrase generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Seed derivation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Optional passphrase support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Derivation */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-purple-400" /> Key Derivation Path
          </h2>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-400" /> Ergo HD Path
            </h3>
            <p className="text-gray-300 mb-4">
              Ergo uses the derivation path <code className="bg-neutral-800 px-2 py-1 rounded text-orange-400">m/44'/429'/0'/0/0</code> where:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">44'</span>
                  <span className="text-gray-300">BIP-44 standard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono">429'</span>
                  <span className="text-gray-300">Ergo coin type</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono">0'</span>
                  <span className="text-gray-300">Account number</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">0</span>
                  <span className="text-gray-300">Change (0=external, 1=internal)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono">0</span>
                  <span className="text-gray-300">Address index</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-2">Example Paths:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">First address:</span>
                    <code className="bg-neutral-700 px-2 py-1 rounded text-cyan-400">m/44'/429'/0'/0/0</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Second address:</span>
                    <code className="bg-neutral-700 px-2 py-1 rounded text-cyan-400">m/44'/429'/0'/0/1</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Change address:</span>
                    <code className="bg-neutral-700 px-2 py-1 rounded text-cyan-400">m/44'/429'/0'/1/0</code>
                  </div>
                </div>
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