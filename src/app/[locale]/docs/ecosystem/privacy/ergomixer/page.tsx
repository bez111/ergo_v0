"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Shuffle,
  EyeOff,
  KeyRound,
  UserCheck,
  Info,
  BookOpen,
  FileText,
  HelpCircle,
  Smartphone,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Clock,
  Shield,
  AlertTriangle,
  X,
  AlertCircle,
  Rocket,
  Download,
  Terminal,
  Globe,
  Lightbulb
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ErgoMixerPage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2 justify-center">
          <Info className="w-4 h-4" /> Overview
        </TabsTrigger>
        <TabsTrigger value="identifiability" className="flex items-center gap-2 justify-center">
          <EyeOff className="w-4 h-4" /> Identifiability
        </TabsTrigger>
        <TabsTrigger value="best-practices" className="flex items-center gap-2 justify-center">
          <BookOpen className="w-4 h-4" /> Best Practices
        </TabsTrigger>
        <TabsTrigger value="install-android" className="flex items-center gap-2 justify-center">
          <Smartphone className="w-4 h-4" /> Install on Android
        </TabsTrigger>
        <TabsTrigger value="faq" className="flex items-center gap-2 justify-center">
          <HelpCircle className="w-4 h-4" /> FAQ
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-3 leading-tight pb-1 flex items-center gap-3">
            <UserCheck className="w-8 h-8 text-blue-400" /> ErgoMixer
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl">
            The first non-custodial, programmable, non-interactive mixer in the space. ErgoMixer leverages Sigma protocols for efficient, trustless mixing of funds, enabling a high degree of privacy and security on Ergo.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <Link
              href="/docs/ecosystem/privacy"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 mr-2" /> Back to Privacy
            </Link>
            <a
              href="https://ergomixer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> ErgoMixer Website
            </a>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-400" /> What is ErgoMixer?
          </h2>
          <p className="text-gray-300">
            ErgoMixer is a non-custodial, programmable, non-interactive mixer for ERG and tokens, utilizing Sigma protocols for privacy. It supports token mixing, covert and stealth addresses, SigmaUSD minting, and Tor support.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Shuffle className="w-5 h-5 text-blue-400" /> Token Mixing
            </h3>
            <p className="text-gray-300 mb-4">
              Mix both ERG and tokens, providing privacy for a wide range of assets on the Ergo blockchain.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-blue-400" /> Non-custodial
              </li>
              <li className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-blue-400" /> Programmable
              </li>
              <li className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-blue-400" /> No trusted setup
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-pink-400" /> Enhanced Privacy
            </h3>
            <p className="text-gray-300 mb-4">
              Covert and Stealth Addresses obscure the linkage between transactions and public addresses, providing advanced privacy.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400" /> Covert Addresses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400" /> Stealth Addresses
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400" /> Per-transaction uniqueness
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-400" /> Tutorials & Docs
            </h3>
            <p className="text-gray-300 mb-4">
              Access guides, technical papers, and presentations to learn about mixing and privacy on Ergo.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" /> <a href="https://ergoplatform.org/en/blog/2021-11-10-what-are-mixers/" target="_blank" rel="noopener noreferrer" className="hover:underline">What are 'Mixers'?</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" /> <a href="https://ergoplatform.org/en/blog/2021-11-10-ergomixer-eli5/" target="_blank" rel="noopener noreferrer" className="hover:underline">ErgoMixer ELI5</a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-orange-400" /> <a href="https://ergoplatform.org/docs/technical-paper.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Technical Paper</a>
              </li>
            </ul>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-400" /> Tor & Platform Support
            </h3>
            <p className="text-gray-300 mb-4">
              Use ErgoMixer on multiple platforms with Tor support for enhanced privacy and censorship resistance.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" /> Tor support (v3.0.0+)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" /> Windows, Linux, Android
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" /> Open source on GitHub
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Features Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <EyeOff className="w-6 h-6 text-pink-400" /> Covert & Stealth Addresses
          </h2>
          <p className="text-gray-300 mb-2">
            ErgoMixer introduces two privacy-centric features: Covert Addresses and Stealth Addresses. These methods obscure the linkage between transactions and a user's public address, adding a layer of anonymity.
          </p>
          <h3 className="font-bold text-orange-400 mt-4 mb-2">Covert Addresses</h3>
          <p className="text-gray-300 mb-2">
            Covert Addresses allow a user to showcase a public-facing address that doesn't directly tie back to their actual wallet address. This is highly beneficial for individuals, like shop owners, who wish to receive payments without revealing their true wallet address to every customer.
          </p>
          <h3 className="font-bold text-orange-400 mt-4 mb-2">Stealth Addresses</h3>
          <p className="text-gray-300 mb-2">
            Stealth Addresses create a unique, one-time address for every transaction, even between the same parties. This feature is invaluable for situations where users wish to publicly display an address for receiving multiple transactions. In Ergo, this is facilitated through a variant of the Diffie-Hellman key exchange.
          </p>
          <p className="text-gray-400">
            See the <Link href="/docs/ecosystem/privacy/stealth-addresses" className="text-cyan-400 hover:underline">Stealth Addresses</Link> page for more information.
          </p>
        </div>

        {/* Resources Section */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-400" /> Resources
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li><a href="https://ergoplatform.org/en/blog/2021-11-10-importing-magnum-wallet/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">A tutorial for importing magnum (or any other wallet)</a></li>
            <li><a href="https://ergoplatform.org/en/blog/2020-12-10-ergomix-vulnerability/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Second ErgoMix vulnerability blog post (fixed in 2020)</a></li>
            <li><a href="https://ergoplatform.org/en/blog/2020-07-10-zerojoin-mixer/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">2020: ErgoMixer, ZeroJoin Mixer for ERG and Tokens</a></li>
            <li><a href="https://ergoplatform.org/en/blog/2019-11-10-fair-mining-fees/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">2019: ErgoMix: approximately fair mining fees</a></li>
            <li><a href="https://ergoplatform.org/en/blog/2019-11-10-fee-in-primary-tokens/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">2019: Paying fee in ErgoMix in primary tokens</a></li>
            <li><a href="https://ergoforum.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">More on ergoforum.org</a></li>
            <li><a href="https://discord.com/invite/ergomixer" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Join #ergomixer on Discord</a></li>
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="identifiability">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <EyeOff className="w-8 h-8 text-pink-400" /> Identifiability & Obfuscation
            </h2>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl">
              ErgoUtils provides advanced obfuscation tools to hide mixer usage patterns and enhance privacy when withdrawing from ErgoMixer.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <EyeOff className="w-6 h-6 text-pink-400" /> The Problem
            </h3>
            <p className="text-gray-300 mb-4">
              When you withdraw from the mixer to a wallet, it becomes obvious that the person has received funds from the mixer. When they spend those boxes, it's also obvious that those boxes are from the mixer.
            </p>
            <p className="text-gray-300">
              Those who care about privacy and use ErgoMixer also care about not being easily identifiable as mixer users when interacting with their wallets.
            </p>
          </div>

          {/* Solution Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-blue-400" /> Obfuscating Entry Points
              </h3>
              <p className="text-gray-300 mb-4">
                ErgoUtils now supports obfuscating entry points for ErgoMixer, creating an additional layer of privacy protection.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Create obfuscating addresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Configure desired hop number
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Permanent address usage
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-green-400" /> How It Works
              </h3>
              <p className="text-gray-300 mb-4">
                Withdraw from the mixer to the created obfuscating address. Your received funds will automatically go through random addresses before reaching your wallet.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Random output creation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Variable output amounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Automatic routing
                </li>
              </ul>
            </div>
          </div>

          {/* Example Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-orange-400" /> Example Transaction
            </h3>
            <p className="text-gray-300 mb-4">
              Try to figure out if this transaction is from the mixer or not - it's much harder to determine with obfuscation enabled.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <a 
                href="https://explorer.ergoplatform.com/en/transactions/9cf412c71fc49a53f7f6ae498f22730be474127436334e5a38da92ce0d40530b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Obfuscated Transaction
              </a>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" /> Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://github.com/anon-real/ergoutils"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
              >
                <h4 className="font-bold text-cyan-400 mb-2">ErgoUtils GitHub</h4>
                <p className="text-gray-300 text-sm">Access the complete ErgoUtils repository with all privacy tools and utilities.</p>
              </a>
              <a 
                href="https://github.com/anon-real/ErgoUtils/blob/master/src/utils/mixerHop.js"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
              >
                <h4 className="font-bold text-cyan-400 mb-2">mixerHop.js</h4>
                <p className="text-gray-300 text-sm">Direct link to the mixer hop implementation source code.</p>
              </a>
            </div>
          </div>

          {/* Free Usage Note */}
          <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" /> Completely Free
            </h3>
            <p className="text-gray-300">
              As always, utilities in ErgoUtils are completely free to use! No fees, no restrictions - just privacy tools for the Ergo community.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="best-practices">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-orange-400" /> Best Practices
            </h2>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl">
              Maximize your privacy and security when using ErgoMixer by following these essential best practices and understanding the mixing process.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shuffle className="w-6 h-6 text-orange-400" /> ErgoMixer Overview
            </h3>
            <p className="text-gray-300">
              ErgoMixer is a non-interactive, decentralized mixing protocol that enhances privacy by obfuscating the trail of transactions. To maximize the security benefits, it's essential to follow best practices and understand the underlying mechanisms.
            </p>
          </div>

          {/* Withdrawal Strategy Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-blue-400" /> Withdrawal Strategy
              </h3>
              <p className="text-gray-300 mb-4">
                Avoid withdrawing all mixed funds to a single address. Instead, withdraw to multiple addresses over time intervals to maintain privacy.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Use multiple addresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Spread withdrawals over time
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Avoid single large withdrawals
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-green-400" /> Mixing Process
              </h3>
              <p className="text-gray-300 mb-4">
                The mixer operates as a series of "mini-mixes" or rounds, where your funds are mixed with another user's available box (UTXO) from the pool.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> No direct user interaction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Fetch available boxes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Create 50-50 split boxes
                </li>
              </ul>
            </div>
          </div>

          {/* Anonymity Set Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <EyeOff className="w-6 h-6 text-pink-400" /> Anonymity Set and Security
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-orange-400 mb-2">Theoretical Security</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Each round's distinguishability: 2^-1 for external observers</li>
                  <li>• 100% distinguishability for participants</li>
                  <li>• Final distinguishability: 2^(-rounds) in theory</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-orange-400 mb-2">Practical Considerations</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Can be 100% if only two parties mixing</li>
                  <li>• Larger pool size increases indistinguishability</li>
                  <li>• More honest participants = better privacy</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              The mixer cannot differentiate between boxes in the pool and only knows your boxes and the mapping of the last mixed boxes.
            </p>
          </div>

          {/* Mixing Frequency Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-cyan-400" /> Mixing Frequency and Timing
            </h3>
            <p className="text-gray-300 mb-4">
              You can configure the mixer to mix at intervals ranging from every 10 minutes to every 10 days. Longer intervals increase the likelihood of mixing with honest parties, reducing the attacker's ability to track your funds.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Short Intervals</h4>
                <p className="text-gray-300 text-sm">10 minutes - 1 hour</p>
                <p className="text-gray-400 text-xs">Faster mixing, higher risk</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Medium Intervals</h4>
                <p className="text-gray-300 text-sm">1 hour - 1 day</p>
                <p className="text-gray-400 text-xs">Balanced approach</p>
              </div>
              <div className="bg-neutral-800/50 rounded-lg p-4">
                <h4 className="font-bold text-cyan-400 mb-2">Long Intervals</h4>
                <p className="text-gray-300 text-sm">1 day - 10 days</p>
                <p className="text-gray-400 text-xs">Maximum privacy, slower</p>
              </div>
            </div>
          </div>

          {/* Security Considerations Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-400" /> Security Considerations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                <h4 className="font-bold text-red-400 mb-2">Collusion Risk</h4>
                <p className="text-gray-300 text-sm">
                  If all other parties are colluding with an attacker, the security gain is zero.
                </p>
              </div>
              <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-2">Honest Parties</h4>
                <p className="text-gray-300 text-sm">
                  As long as at least one honest party is mixing in the pool, the resulting mapping will be indistinguishable to some degree from the attacker's perspective.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-orange-400" /> Additional Resources
            </h3>
            <p className="text-gray-300 mb-4">
              For more insights into how ErgoMixer clients receive Rings, Fees, Levels, and other technical details, please refer to this forum post.
            </p>
            <a 
              href="https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318/10?u=anon2020s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" /> Read Forum Post
            </a>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="install-android">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-8 h-8 text-green-400" /> How to Set Up ErgoMixer on Android
            </h2>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl">
              Complete guide to running ErgoMixer on Android devices, enabling mobile users to access Ergo's privacy features and Sigma protocols.
            </p>
          </div>

          {/* Getting Started Section */}
          <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-green-400" /> Getting Started
            </h3>
            <p className="text-gray-300">
              Running ErgoMixer on an Android device is important because it enables an individual who may not own a desktop or laptop computer to take advantage of the privacy features available in ErgoMixer. It will make it possible for someone with a mobile device to utilize Ergo's Sigma protocols to enable efficient, trustless mixing of funds, enabling a high degree of privacy and security.
            </p>
          </div>

          {/* Device Requirements Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-400" /> Device Requirements
              </h3>
              <p className="text-gray-300 mb-4">
                There are some minimum system requirements to run ErgoMixer on Android.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Android OS 7.0 or higher
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Minimum 10GB available storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Minimum 1GB RAM for apps
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Tested on Samsung Galaxy S8+
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Download className="w-5 h-5 text-orange-400" /> Prerequisites
              </h3>
              <p className="text-gray-300 mb-4">
                A terminal emulator app is required to run an Ergo node on an Android device.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" /> Install F-Droid first
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" /> Download Termux from F-Droid
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" /> Termux tested and works well
                </li>
              </ul>
            </div>
          </div>

          {/* Installation Steps Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" /> Installing Packages in Termux
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-orange-400 mb-2">Step 1: Update Packages</h4>
                <div className="bg-neutral-800/50 rounded-lg p-4 mb-2">
                  <code className="text-green-400 font-mono text-sm">
                    pkg upgrade
                  </code>
                </div>
                <p className="text-gray-400 text-sm">Using the default responses to all prompts during the upgrade is okay.</p>
              </div>

              <div>
                <h4 className="font-bold text-orange-400 mb-2">Step 2: Install proot-distro</h4>
                <div className="bg-neutral-800/50 rounded-lg p-4 mb-2">
                  <code className="text-green-400 font-mono text-sm">
                    pkg install proot-distro
                  </code>
                </div>
                <p className="text-gray-400 text-sm">This is necessary to run OpenJDK-8 in Ubuntu, as it is currently unavailable for the base Linux environment in Android.</p>
              </div>

              <div>
                <h4 className="font-bold text-orange-400 mb-2">Step 3: Install Ubuntu</h4>
                <div className="bg-neutral-800/50 rounded-lg p-4 mb-2">
                  <code className="text-green-400 font-mono text-sm">
                    proot-distro install ubuntu
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-orange-400 mb-2">Step 4: Login to Ubuntu</h4>
                <div className="bg-neutral-800/50 rounded-lg p-4 mb-2">
                  <code className="text-green-400 font-mono text-sm">
                    proot-distro login ubuntu
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-orange-400 mb-2">Step 5: Update Ubuntu and Install Dependencies</h4>
                <div className="bg-neutral-800/50 rounded-lg p-4 mb-2">
                  <code className="text-green-400 font-mono text-sm">
                    apt-get update<br/>
                    apt-get install wget openjdk-8-jdk
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* ErgoMixer Download Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Download className="w-6 h-6 text-purple-400" /> ErgoMixer Release Download & Running
            </h3>
            <p className="text-gray-300 mb-4">
              Download the latest release of ErgoMixer using wget. You can find the latest release on GitHub.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-green-400 font-mono text-sm">
                wget https://github.com/ergoMixer/ergoMixBack/releases/download/4.2.0/ergoMixer-4.2.0.jar
              </code>
            </div>
            <p className="text-gray-300 mb-4">And now, you can run the mixer with the following command:</p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-green-400 font-mono text-sm">
                java -jar ergoMixer-4.2.0.jar
              </code>
            </div>
            <p className="text-gray-400 text-sm">
              In the event of a restart of the phone or after terminating Termux, the mixer can be started again by logging back into Ubuntu with proot and re-issuing the java command to start the mixer.
            </p>
          </div>

          {/* Dashboard Access Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-400" /> Accessing ErgoMixer Dashboard
            </h3>
            <p className="text-gray-300 mb-4">
              At this point, the mixer will begin running on the device. To view the ErgoMixer dashboard, open a browser on the device and navigate to:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4">
              <code className="text-green-400 font-mono text-sm">
                http://0.0.0.0:9000/dashboard
              </code>
            </div>
          </div>

          {/* Tips & Tricks Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-yellow-400" /> Tips & Tricks
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Keyboard Recommendation</h4>
                <p className="text-gray-300 text-sm mb-2">
                  I recommend downloading a different keyboard to be used in Termux. The stock Samsung keyboard was not working well in my case.
                </p>
                <a 
                  href="https://f-droid.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  Find Hacker's Keyboard in F-Droid
                </a>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Running Multiple Programs</h4>
                <p className="text-gray-300 text-sm">
                  Installing a package called tmux will help if you want to run other programs alongside the Ergo Mixer within Termux. It is possible to run the Ergo node in one tmux pane and the mixer in another.
                </p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-orange-400" /> Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://github.com/ergoMixer/ergoMixBack/releases/tag/4.2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
              >
                <h4 className="font-bold text-orange-400 mb-2">Latest Release</h4>
                <p className="text-gray-300 text-sm">Download the latest ErgoMixer release from GitHub.</p>
              </a>
              <a 
                href="https://f-droid.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
              >
                <h4 className="font-bold text-orange-400 mb-2">F-Droid</h4>
                <p className="text-gray-300 text-sm">Installable catalog of FOSS applications for Android.</p>
              </a>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="faq">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <HelpCircle className="w-8 h-8 text-blue-400" /> Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 mb-6 max-w-3xl">
              Common questions about ErgoMixer, privacy features, and technical comparisons with other mixing solutions.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" /> Why is ErgoMixer better than Tornado Cash?
            </h3>
            <p className="text-gray-300 mb-6">
              ErgoMixer offers several advantages over Tornado Cash, particularly in terms of security, decentralization, and privacy features.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left py-3 px-4 font-bold text-orange-400">Aspect</th>
                  <th className="text-left py-3 px-4 font-bold text-red-400">Tornado Cash</th>
                  <th className="text-left py-3 px-4 font-bold text-green-400">ErgoMixer</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Blockchain</td>
                  <td className="py-3 px-4">Ethereum</td>
                  <td className="py-3 px-4">Ergo</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Supported Cryptocurrencies</td>
                  <td className="py-3 px-4">ETH, DAI, USDC, USDT, WBTC</td>
                  <td className="py-3 px-4">ERG and all Ergo native tokens</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Privacy Mechanisms</td>
                  <td className="py-3 px-4">zk-SNARKs</td>
                  <td className="py-3 px-4">Ring Signatures and ZeroJoin</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Additional Features</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Covert Addresses, Stealth Addresses, SigmaUSD minting, Tor support</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Ceremony Setup / MPC</td>
                  <td className="py-3 px-4">Requires multi-party computation setup</td>
                  <td className="py-3 px-4">No "ceremony" setup required</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Decentralization</td>
                  <td className="py-3 px-4">Potential centralization due to congestion</td>
                  <td className="py-3 px-4">Focuses on decentralization, programmable mixer</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="py-3 px-4 font-semibold">Blacklisting/Tracking</td>
                  <td className="py-3 px-4">Vulnerable to blacklisting/tracking</td>
                  <td className="py-3 px-4">Implements measures to prevent tracking</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Hosting and Developer</td>
                  <td className="py-3 px-4">Developed by a known team</td>
                  <td className="py-3 px-4">Self-hosted, anonymous developer</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* MPC Security Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" /> Tornado Cash MPC Risks
              </h3>
              <p className="text-gray-300 mb-4">
                Tornado Cash uses zk-SNARKs which requires a "ceremony" to generate parameters. This Multi-party-computation has significant security risks.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> If all participants cheat, fake proofs can be generated
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> 1114 ceremony participants could drain funds
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> MPC computer must be destroyed after ceremony
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" /> ErgoMixer Security
              </h3>
              <p className="text-gray-300 mb-4">
                ErgoMixer doesn't require any "ceremony" setup, eliminating the risks associated with MPC parameter generation.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> No MPC ceremony required
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> No trusted setup needed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Eliminates backdoor risks
                </li>
              </ul>
            </div>
          </div>

          {/* Mac Security Issue Section */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-orange-400" /> Showing as 'corrupted' on Mac
            </h3>
            <p className="text-gray-300 mb-4">
              This can happen due to security preferences on Mac. Please run the following command in Terminal:
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-4 mb-4">
              <code className="text-green-400 font-mono text-sm">
                sudo xattr -r -d com.apple.quarantine /Applications/ergoMixer.app
              </code>
            </div>
            <p className="text-gray-400 text-sm">
              This command removes the quarantine attribute that macOS applies to downloaded applications, allowing ErgoMixer to run properly.
            </p>
          </div>

          {/* Additional Security Notes */}
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-400" /> Important Security Note
            </h3>
            <p className="text-gray-300 mb-2">
              In Tornado Cash's case, if all 1114 ceremony setup participants cheated and cooperated, they could generate fake proofs and drain money from the smart contract.
            </p>
            <p className="text-gray-300">
              However, if only one participant was honest, it would be secure for people to use. ErgoMixer eliminates this risk entirely by not requiring any ceremony setup.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
} 