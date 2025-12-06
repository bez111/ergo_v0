"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { 
  Wallet, 
  Lock, 
  Database, 
  Settings, 
  ChevronRight, 
  ExternalLink,
  Shield,
  Key,
  FileText,
  Globe,
  Coins,
  Filter,
  CheckCircle,
  AlertTriangle,
  Info,
  User,
  Server,
  Building
} from "lucide-react";
import Link from "next/link";

export default function WalletConfigPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Wallet Configuration
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Comprehensive wallet settings for secure key management, transaction handling, and wallet behavior configuration.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/node/configuration/application-conf?tab=ergo-node"
            className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
          </Link>
          <a
            href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2 bg-neutral-800 border border-neutral-700 rounded-lg font-semibold text-white hover:bg-neutral-700 transition hover:scale-[1.02]"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> View on GitHub
          </a>
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-orange-400" /> Overview
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The wallet configuration section contains essential settings for secure key management, transaction handling, and wallet behavior. These settings control how your Ergo node wallet operates, stores secrets, and processes transactions.
          </p>
        </section>

        {/* Secret Storage Section */}
        <section className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-400" /> Secret Storage
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-green-400" /> Secret Directory
              </h3>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono">secretDir = $&#123;ergo.directory&#125;"/wallet/keystore"</code>
              </div>
              <p className="text-gray-300 text-sm">
                This configures the directory where the wallet's secret information, such as private keys, will be stored. The directory is set to a "keystore" folder inside the "wallet" folder at the location specified by <code className="bg-neutral-800 px-2 py-1 rounded text-green-400">$&#123;ergo.directory&#125;</code>.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" /> Encryption
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                The encryption section contains configurations related to how the wallet's secret information is encrypted.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">Pseudo-random function</h4>
                  <code className="text-purple-400 font-mono block mb-2">prf = "HmacSHA256"</code>
                  <p className="text-gray-300 text-sm">
                    The <code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">prf</code> configures the pseudo-random function used in the encryption. In this case, it is set to "HmacSHA256".
                  </p>
                </div>
                
                <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">Number of PBKDF2 Iterations</h4>
                  <code className="text-purple-400 font-mono block mb-2">c = 128000</code>
                  <p className="text-gray-300 text-sm">
                    The <code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">c</code> configures the number of iterations used in the PBKDF2 (Password-Based Key Derivation Function 2) encryption algorithm.
                  </p>
                </div>
                
                <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">Desired Bit-length of the Derived Key</h4>
                  <code className="text-purple-400 font-mono block mb-2">dkLen = 256</code>
                  <p className="text-gray-300 text-sm">
                    The <code className="bg-neutral-800 px-2 py-1 rounded text-purple-400">dkLen</code> sets the desired length of the derived encryption key, in bits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seed and Mnemonic Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Key className="w-6 h-6 text-green-400" /> Seed & Mnemonic Settings
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-400" /> Seed Strength Bits
              </h3>
              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mb-4">
                <code className="text-blue-400 font-mono">seedStrengthBits = 160</code>
              </div>
              <p className="text-gray-300 text-sm">
                This configures the length of the seed used in generating the wallet's private keys, in bits. Options include 128, 160, 192, 224, and 256.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> Mnemonic Phrase Language
              </h3>
              <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 mb-4">
                <code className="text-cyan-400 font-mono">mnemonicPhraseLanguage = "english"</code>
              </div>
              <p className="text-gray-300 text-sm">
                This sets the language to be used for the wallet's mnemonic seed phrase. Options include "chinese_simplified", "chinese_traditional", "english", "french", "italian", "japanese", "korean", and "spanish".
              </p>
            </div>
          </div>
        </section>

        {/* Transaction Settings Section */}
        <section className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Coins className="w-6 h-6 text-purple-400" /> Transaction Settings
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Keep Spent Boxes
              </h3>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono">keepSpentBoxes = false</code>
              </div>
              <p className="text-gray-300 text-sm">
                This option determines whether to keep spent transaction outputs or to delete them immediately.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Coins className="w-5 h-5 text-orange-400" /> Default Transaction Fee
              </h3>
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-4">
                <code className="text-orange-400 font-mono">defaultTransactionFee = 1000000</code>
              </div>
              <p className="text-gray-300 text-sm">
                This sets the default transaction fee the wallet uses when a fee is not specified.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" /> Dust Limit
              </h3>
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                <code className="text-yellow-400 font-mono">dustLimit = null</code>
              </div>
              <p className="text-gray-300 text-sm">
                The <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">dustLimit</code> sets the minimum amount of tokens that can be included in a transaction output. If it's set to null (default), there is no minimum limit.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                For example, with <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">dustLimit = 1000000</code>, the node wallet will ignore boxes to self that contain less than .001 ERG.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-red-400" /> Use Pre-EIP3 Derivation
              </h3>
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-4">
                <code className="text-red-400 font-mono">usePreEip3Derivation = false</code>
              </div>
              <p className="text-gray-300 text-sm">
                This setting determines whether to use the pre-EIP3 key derivation scheme or not.
              </p>
            </div>
          </div>
        </section>

        {/* Input Management Section */}
        <section className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-indigo-400" /> Input Management
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-lg p-4">
                <h4 className="font-bold text-indigo-400 mb-2">Maximum Inputs</h4>
                <code className="text-indigo-400 font-mono block mb-2">maxInputs = 100</code>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-indigo-400">maxInputs</code> setting determines the maximum number of inputs a transaction can have.
                </p>
              </div>
              
              <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-lg p-4">
                <h4 className="font-bold text-indigo-400 mb-2">Optimal Inputs</h4>
                <code className="text-indigo-400 font-mono block mb-2">optimalInputs = 3</code>
                <p className="text-gray-300 text-sm">
                  The <code className="bg-neutral-800 px-2 py-1 rounded text-indigo-400">optimalInputs</code> setting specifies the preferred number of inputs for a transaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Section */}
        <section className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" /> Testing Configuration
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
              <code className="text-yellow-400 font-mono block mb-2"># testMnemonic = "ozone drill grab fiber curtain grace pudding thank cruise elder eight picnic"</code>
              <code className="text-yellow-400 font-mono block"># testKeysQty = 5</code>
            </div>
            <p className="text-gray-300 text-sm">
              These settings are used for testing purposes. If a <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">testMnemonic</code> is set, the wallet will operate in test mode, using this mnemonic seed. The <code className="bg-neutral-800 px-2 py-1 rounded text-yellow-400">testKeysQty</code> determines the number of keys to generate for the test.
            </p>
          </div>
        </section>

        {/* Advanced Settings Section */}
        <section className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-red-400" /> Advanced Settings
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Filter className="w-5 h-5 text-blue-400" /> Tokens Whitelist
              </h3>
              <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mb-4">
                <code className="text-blue-400 font-mono">tokensWhitelist = null</code>
              </div>
              <p className="text-gray-300 text-sm">
                If set, the wallet will automatically burn non-whitelisted tokens from inputs when making transactions. If it's null, no tokens will be automatically burnt.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> Check EIP27
              </h3>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mb-4">
                <code className="text-green-400 font-mono">checkEIP27 = false</code>
              </div>
              <p className="text-gray-300 text-sm">
                This setting determines whether to handle re-emission tokens in the wallet correctly. For example, it affects how transfers are done in the presence of re-emission tokens.
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-cyan-400" /> Wallet Profile
          </h2>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4 mb-4">
              <code className="text-cyan-400 font-mono">profile = "user"</code>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              The wallet profile helps the wallet understand the expected load and allocate memory for caches and Bloom filters accordingly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" /> User
                </h4>
                <p className="text-gray-300 text-sm">For ordinary usage</p>
              </div>
              
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" /> Exchange
                </h4>
                <p className="text-gray-300 text-sm">For high load situations, consuming ~20MB of RAM for Bloom filters</p>
              </div>
              
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4" /> App Server
                </h4>
                <p className="text-gray-300 text-sm">In between user and exchange profiles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Configuration Summary
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The wallet configuration provides comprehensive control over key management, transaction handling, and wallet behavior. These settings ensure secure operation while optimizing performance based on your specific use case and requirements.
          </p>
        </section>
      </div>
    </>
  );
} 