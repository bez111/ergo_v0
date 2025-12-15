"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Wallet,
  Shield,
  Users,
  Key,
  Lock,
  Smartphone,
  Monitor,
  Globe,
  CheckCircle,
  AlertTriangle,
  Info,
  ExternalLink,
  Download,
  Code,
  Server,
  Database,
  FileText,
  BookOpen,
  Zap,
  Cpu,
  Network,
  Smartphone as Mobile,
  Monitor as Desktop,
  Globe as Browser,
  Shield as Security,
  Users as MultiUser,
  Key as MultiKey,
  Server as SigningServer
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function MinotaurPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Minotaur Wallet
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          The inaugural multi-platform wallet tailored for the Ergo ecosystem, offering advanced multi-signature capabilities and enhanced security features.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Link
            href="/docs/developers/infrastructure/wallets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            Back to Wallets
          </Link>
          <a
            href="https://github.com/minotaur-ergo/minotaur-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 rounded-xl font-semibold text-white hover:bg-gray-600 transition-transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Video Guide */}
      <div className="mb-12">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Comprehensive Video Guide</h3>
              <p className="text-gray-300 mb-4">
                For a visual and detailed guide on how to use Minotaur, watch the comprehensive video tutorial.
              </p>
              <a
                href="https://www.youtube.com/watch?v=cUs2EXxNn7s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Watch Tutorial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
          <Zap className="w-6 h-6 mr-3" />
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">🔐 Multi-Signature Security</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Multi-signature wallet support (M-of-N)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Up to 20 signers with configurable threshold</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Secure commitment sharing between signers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Automatic transaction signing workflow</span>
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">📱 Multi-Platform Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Android, iOS, Windows, MacOS, Linux</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Cross-platform wallet synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Unified user experience across devices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Native performance on each platform</span>
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">🪙 Token & NFT Management</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>EIP-04 compliant token display</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Token issuance and burning within dApps</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>NFT viewing and management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Embedded dApp support</span>
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-4">🔗 Integration Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>ErgoPay integration for seamless transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Cold wallet device integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Yoroi, Ergo node, and Android app compatibility</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                <span>Mnemonic phrases: 12, 15, 18, 21, 24 words</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Multi-Signature Wallet Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
          <MultiUser className="w-6 h-6 mr-3" />
          Multi-Signature Wallet
        </h2>
        
        {/* Introduction */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Introduction</h3>
          <p className="text-gray-300 mb-4">
            Minotaur wallet is a multi-platform wallet developed by <em>minotaur-ergo</em> using TypeScript. 
            In this project, the wallet is extended to support multiple signatures.
          </p>
          <p className="text-gray-300 mb-4">
            A multi-signature (<em>multi-sig</em>) wallet uses more than one private key to authorize transactions. 
            Such a wallet can be managed by a single user holding multiple private keys, multiple users holding a single key each, 
            or any combination of the two scenarios.
          </p>
          <p className="text-gray-300">
            In a multi-sig wallet with <em>M</em> private keys, depending on its configurations, any transaction may require 
            <em>N</em> signatures, where <em>1 ≤ N ≤ M</em>.
          </p>
        </div>

        {/* Project Accomplishments */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Project Accomplishments</h3>
          <p className="text-gray-300 mb-4">The end user(s):</p>
          <ul className="space-y-2 text-gray-300 ml-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>can easily create a multi-signature wallet</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>can see their wallet balance</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <span>can sign their transactions in the wallet</span>
            </li>
          </ul>
          <p className="text-gray-300 mt-4">
            The software provides an automatic transfer method that safely processes all signatures and communications between private-key holders.
          </p>
        </div>

        {/* Technical Explanation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Technical Explanation</h3>
          <p className="text-gray-300 mb-4">
            In Ergo blockchain, a transaction is prepared in two steps before being submitted to the transaction pool:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
            <li>required commitments are generated</li>
            <li>The transaction is signed using the commitments</li>
          </ol>
          <p className="text-gray-300 mb-4">
            These steps are performed automatically and transparently (hidden from the user) in any wallet. However, 
            signing a multi-sig transaction involves more sophisticated steps, as explained in 
            <a href="https://github.com/ergoplatform/eips/pull/8" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">EIP 11</a>.
          </p>
          <p className="text-gray-300">
            In other words, the steps mentioned above cannot be performed transparently since the commitments and signatures must be shared between all signers.
          </p>
        </div>

        {/* Example Workflow */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-purple-300 mb-4">Example: 3-out-of-4 Wallet</h3>
          <p className="text-gray-300 mb-4">
            Consider a 3-out-of-4 wallet, and let us name the 4 private-key holders Alice, Bob, Carol, and Dani. 
            The wallet has been configured so that at least 3 signers must sign a transaction.
          </p>
          <p className="text-gray-300 mb-4">Suppose that Alice, Bob, and Carol agree to sign a transaction.</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Alice creates an unsigned transaction and generates her commitment.</li>
            <li>Then, she sends the transaction and the public part of her commitment to Bob.</li>
            <li>Bob generates his commitment and appends its public parts to Alice's commitment.</li>
            <li>Then, He forwards the transaction and the two-part commitment to Carol.</li>
            <li>Carol generates her commitment. At this step, all 3 required commitments are available.</li>
            <li>Therefore, Carol adds her signature to the transaction and sends it back to Bob.</li>
            <li>Similarly, Bob adds his signature to the transaction and forwards it to Alice.</li>
            <li>Finally, Alice completes the transaction signing by adding her signature to it.</li>
            <li>Now she can submit the signed transaction to the transaction pool.</li>
          </ol>
          <p className="text-gray-300 mt-4">
            The minotaur multi-sig wallet facilitates the whole process in a user-friendly manner.
          </p>
        </div>
      </div>

      {/* Design Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Design Details
        </h2>
        
        {/* Wallet Creation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Wallet Creation</h3>
          <p className="text-gray-300 mb-4">
            Implementation of this project introduces a new type of wallet, the so-called multi-sig wallet, to the Minotaur wallet. 
            In order to create a new functional multi-sig wallet, each signer must configure a copy of it on his/her device by applying the following four steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              A proper name is entered for the personal copy of the multi-sig wallet.
              <br /><span className="text-gray-400 text-sm">Names entered by different signers can be different.</span>
            </li>
            <li>
              The total number of signers, <em>M</em>, and also the number of required signs, <em>N</em>, are entered.
              <br /><span className="text-gray-400 text-sm"><em>M</em> can be maximally 20. All signers must enter the same values for these two numbers.</span>
            </li>
            <li>
              Each signer must enter his/her private key and the public key of all other signers in the multi-sig wallet.
              <br /><span className="text-gray-400 text-sm">For convenience, it is supposed that each signer already has a normal wallet in Minotaur so that his/her public/private key can be retrieved.</span>
            </li>
            <li>
              The address of the multi-sig wallet is displayed to each signer. The signer's copy of the multi-sig wallet is created as soon as he/she approves the address.
            </li>
          </ol>
        </div>

        {/* Address Derivation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">Address Derivation</h3>
          <p className="text-gray-300 mb-4">
            When deriving new addresses, two important facts must be taken into account:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-4">
            <li>
              To guarantee a unique address for the multi-sig wallet to be derived on all signer copies, a unique address-derivation algorithm must be applied everywhere.
            </li>
            <li>
              The Sigma-rust library cannot compile any contract. Our solution is to manually create the required ergiTree array.
            </li>
          </ol>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-blue-300 mb-2">Multi-Sig Contract Example:</h4>
            <pre className="text-xs text-gray-300 overflow-x-auto">
{`atLeast(
  N,
  Coll(
    PK(Address1),
    PK(Address2),
    .
    .
    .
    PK(AddressM)
  )
)`}
            </pre>
          </div>
        </div>
      </div>

      {/* Signing Server */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <SigningServer className="w-6 h-6 mr-3" />
          Minotaur Signing Server (MSS)
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">Introduction</h3>
          <p className="text-gray-300 mb-4">
            The Minotaur Signing Server (MSS) manages the steps of transaction signing. The MSS provides a safe, reliable, secure, and error-free channel for data transition among signers. Therefore, it can guarantee that every signer receives and uses correct transaction data.
          </p>
          <p className="text-gray-300 mb-4">
            Signing any multi-sig transaction on the Ergo chain consists of two major steps that must be completed by any <em>N</em> signer(s) among the <em>M</em> key-holders:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Generating required commitment(s) and sharing them with all other signers (<em>N</em> times).</li>
            <li>Signing the transaction using gathered commitments (<em>N</em> times).</li>
          </ol>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">MSS Workflow</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              First, each of the wallet key-holders must generate an asymmetric key-pair for communication with the server. 
              We refer to these keys as the communication private and public keys.
            </li>
            <li>
              The MSS needs the multi-sig wallet details, including the extended public key of each signer and also the number of required signatures.
            </li>
            <li>
              At this stage, the multi-sig wallet setup is completed, and any number of transactions can be started.
            </li>
            <li>
              As soon as the server receives all <em>N</em> commitments, the transaction is automatically sent for signing.
            </li>
            <li>
              At this stage, anyone who committed the transaction can sign it and send his/her signature to the MSS.
            </li>
            <li>
              As soon as all <em>N</em> signatures arrive at the MSS, it automatically completes the transaction and sends it on the blockchain.
            </li>
          </ol>
        </div>
      </div>

      {/* Building from Source */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
          <Cpu className="w-6 h-6 mr-3" />
          Building from Source
        </h2>
        
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">Prerequisites</h3>
          <p className="text-gray-300 mb-4">
            Ensure Node.js version 20.11 is installed before attempting to build Minotaur.
          </p>
          
          <h4 className="text-md font-semibold text-yellow-300 mb-2">1. Clone the repository:</h4>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300">git clone git@github.com:minotaur-ergo/minotaur-wallet.git</pre>
          </div>
          
          <h4 className="text-md font-semibold text-yellow-300 mb-2">2. Install dependencies:</h4>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300">{`cd minotaur-wallet
npm install`}</pre>
          </div>
          
          <h4 className="text-md font-semibold text-yellow-300 mb-2">3. Build the project:</h4>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300">{`npm run build
npx cap sync
npx cap update`}</pre>
          </div>
        </div>

        {/* Platform-Specific Builds */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <Mobile className="w-5 h-5 mr-2" />
              Android
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Open the <code className="bg-gray-700 px-1 rounded">android</code> directory within the project using Android Studio and proceed with the build process using the IDE or alternative build tools.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
              <Desktop className="w-5 h-5 mr-2" />
              iOS
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              iOS developers can open the project in Xcode and build the desired version directly from the IDE.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Desktop
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              For desktop builds, enter the Electron directory and execute:
            </p>
            <div className="bg-gray-800 rounded-lg p-2">
              <pre className="text-xs text-gray-300">{`npm run build
npm run electron:pack
npm run electron:make`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Users className="w-6 h-6 mr-3" />
          Support the Developer
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Contributions are appreciated and help fuel ongoing development. To tip the developer, send your support to:
          </p>
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <code className="text-sm text-orange-300 break-all">
              9hN2UY1ZvvWMeWRBso28vSyjrAAfGJHh2DkZpE47J7Wqr51YLAR
            </code>
          </div>
          <a
            href="https://explorer.ergoplatform.com/payment-request?address=9hN2UY1ZvvWMeWRBso28vSyjrAAfGJHh2DkZpE47J7Wqr51YLAR&amount=0&description="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Send Support
          </a>
        </div>
      </div>

      {/* Testnet */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
          <Network className="w-6 h-6 mr-3" />
          Testnet Trials
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Minotaur is compatible with both Mainnet and Testnet. To test the wallet, generate a new wallet and acquire test Ergos from the Ergo Testnet Faucet.
          </p>
          <a
            href="https://testnet.ergofaucet.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ergo Testnet Faucet
          </a>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3" />
          Additional Resources
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <Code className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Minotaur Wallet Code:</strong> <a href="https://github.com/minotaur-ergo/minotaur-wallet/tree/ergo-hack-multi-sig-signing-server" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Server className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong>Minotaur Signing Server (MSS):</strong> <a href="https://github.com/minotaur-ergo/Minotaur-Signing-Server/tree/fix-some-incompatibilities" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div>
                <strong>EIP-11 Multi-Signature:</strong> <a href="https://github.com/ergoplatform/eips/pull/8" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Pull Request</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 