"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Smartphone, QrCode, Globe, Shield, Users, Zap, FileText, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function EIP20Page() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        ErgoPay Protocol (EIP-20)
      </h1>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources/standards" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Standards</span>
        </button>
      </Link>

      {/* EIP Metadata */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">EIP-0020: ErgoPay Protocol</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p><strong>Authors:</strong> @aslesarenko, @MrStahlfelge</p>
            <p><strong>Status:</strong> <span className="text-yellow-400">Proposed</span></p>
            <p><strong>Created:</strong> 18-August-2021</p>
          </div>
          <div>
            <p><strong>Source:</strong> <a href="https://raw.githubusercontent.com/ergoplatform/eips/master/eip-0020.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0020</a></p>
            <p><strong>Category:</strong> Wallet Interaction</p>
            <p><strong>Type:</strong> Standards Track</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="text-2xl font-bold text-teal-400">Overview</h2>
        </div>
        <p className="text-gray-300 mb-4">
          ErgoPay is a standard for cross-platform interaction between an online dApp and a wallet app. It facilitates the creation, signing, and sending of Ergo transactions.
        </p>
        <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-teal-300">Key Features</h3>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Cross-platform wallet and dApp interaction</li>
            <li>QR code and URI scheme support</li>
            <li>Secure transaction signing</li>
            <li>Universal smart contract support</li>
            <li>Cold wallet compatibility</li>
          </ul>
        </div>
      </div>

      {/* Background and Motivation */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">Background and Motivation</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Cryptocurrency wallets, such as the <a href="https://github.com/ergoplatform/ergo-wallet-android" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Android Wallet</a>, typically support scanning QR codes of <a href="https://explorer.ergoplatform.com/payment-request?address=9er9hxmVcL8S4bNypCyJHpPEEkAfEd9CLq5gNrHN6s2pYomp55N&amount=0&description=" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Payment Requests</a> or intercepting a link with a special <a href="https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">URI scheme</a>.
        </p>
        <p className="text-gray-300 mb-4">
          However, this is only possible for simple transactions, such as transferring ERGs and assets between Pay-To-Public-Key addresses or transactions that only spend boxes from P2PK addresses.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-300">The Problem</h3>
          <p className="text-gray-300 mb-3">
            In Ergo's eUTXO model, a box can be protected by an arbitrarily complex contract, and any spending transaction should satisfy that condition. A universal wallet application cannot know all the specific details of all possible contracts.
          </p>
          <p className="text-gray-300">
            Therefore, an interaction between a dApp and a wallet is required such that:
          </p>
          <ol className="list-decimal list-inside ml-4 mt-3 space-y-2 text-gray-300">
            <li>The dApp builds a transaction and makes it available for the wallet application.</li>
            <li>The wallet app shows a confirmation screen to the user, displaying the inboxes and outboxes it is going to sign.</li>
            <li>When the user confirms, the wallet app signs the transaction and submits it to the blockchain or returns it back to the dApp.</li>
            <li>The dApp monitors the transaction on the blockchain and upon confirmations, proceeds with its business logic.</li>
          </ol>
        </div>
      </div>

      {/* ErgoPay Interaction Protocol */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">ErgoPay Interaction Protocol</h2>
        </div>
        <p className="text-gray-300 mb-4">
          An ErgoPay interaction between a Wallet and a dApp is driven by the dApp's user and proceeds as follows:
        </p>
        <div className="space-y-4">
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <h3 className="text-lg font-semibold text-purple-300">User Input</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The user enters the necessary information in the dApp's UI and proceeds to a payment screen. Optionally, the dApp can request the user's P2PK address with an extra step using a signing request with a placeholder URL.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <h3 className="text-lg font-semibold text-purple-300">Payment Screen</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The payment screen shows transaction details and a QR code as well as a clickable link.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <h3 className="text-lg font-semibold text-purple-300">Wallet Interaction</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The user clicks the link to hand the information over to a wallet application on the same device, or scans the QR code using a wallet application.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <h3 className="text-lg font-semibold text-purple-300">Data Parsing</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The Wallet application parses the QR code data and obtains either ErgoPaySigningRequest or ReducedTransaction data.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
              <h3 className="text-lg font-semibold text-purple-300">Payment Confirmation</h3>
            </div>
            <p className="text-gray-300 text-sm">
              When ErgoPaySigningRequest or ReducedTransaction is obtained, it is shown as a payment screen on the wallet app containing the same transaction details as the dApp screen.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">6</div>
              <h3 className="text-lg font-semibold text-purple-300">User Confirmation</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The user compares the dApp's screen, the Wallet's screen, and the transaction details and confirms the payment by using a "Sign" button.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">7</div>
              <h3 className="text-lg font-semibold text-purple-300">Transaction Signing</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The wallet application signs the transaction either using local private keys or using a Cold Wallet and EIP-0019 protocol. The result of signing is SignedTransaction data.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">8</div>
              <h3 className="text-lg font-semibold text-purple-300">Transaction Submission</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The Wallet obtains the transaction id and sends it to the dApp using ErgoPayTransactionSent API post message to replyToUrl if the URL is provided. If successful, the wallet then submits SignedTransaction to the blockchain.
            </p>
          </div>
          
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">9</div>
              <h3 className="text-lg font-semibold text-purple-300">Monitoring</h3>
            </div>
            <p className="text-gray-300 text-sm">
              The dApp monitors the transaction by id and proceeds with its business logic upon receiving enough confirmations. This concludes the ErgoPay protocol.
            </p>
          </div>
        </div>
      </div>

      {/* Data Formats */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Data Formats</h2>
        </div>
        <p className="text-gray-300 mb-4">
          The data formats of this EIP are based on a new binary data structure and serialization format called ReducedTransaction, which is described in <a href="/docs/developers/eip19" className="text-orange-400 hover:underline">EIP-0019</a>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">Option 1: URL Request</h3>
            <p className="text-gray-300 text-sm mb-3">
              dApp provides URL request for ErgoPaySigningRequest information.
            </p>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">ergopay://&lt;URL&gt;</code>
            </div>
            <p className="text-gray-300 text-sm">
              The URL is provided without the https prefix. HTTP communication is not allowed except for IP addresses (for testing within a local network).
            </p>
          </div>
          
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">Option 2: URI Scheme</h3>
            <p className="text-gray-300 text-sm mb-3">
              dApp provides URI scheme containing ReducedTransaction.
            </p>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">ergopay:&lt;ReducedTransaction, base 64 url safe encoded&gt;</code>
            </div>
            <p className="text-gray-300 text-sm">
              It is not possible to provide description, address, message, and replyToUrl in this simpler interchange format.
            </p>
          </div>
        </div>
      </div>

      {/* ErgoPaySigningRequest */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">ErgoPaySigningRequest</h2>
        <p className="text-gray-300 mb-4">
          The wallet application should request the URL and obtain the following data (in JSON format):
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript">`ErgoPaySigningRequest:
  - transaction: ReducedTransaction (optional*)
  - address: String (optional)
  - message: String (optional*)
  - messageSeverity: String (optional) "INFORMATION", "WARNING", "ERROR"
  - replyToUrl: String (optional)`</CodeBlock>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
          <p className="text-green-200 font-semibold mb-2">💡 Important Notes</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Either a <strong>transaction</strong> or a <strong>message</strong> must be provided, otherwise the request is invalid.</li>
            <li>The wallet application should show the <strong>message</strong> and display the <strong>messageSeverity</strong> in a suitable way, if provided.</li>
            <li>If <strong>address</strong> is provided by the dApp, the wallet can preselect the key the user needs to sign the transaction.</li>
          </ul>
        </div>
      </div>

      {/* Implementation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-blue-400">Wallet App Implementation</h2>
          </div>
          <p className="text-gray-300 mb-4">
            <a href="https://github.com/ergoplatform/ergo-wallet-app" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Wallet App 1.6 or higher</a>
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Requirements</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>QR code scanning capability</li>
              <li>URI scheme handling</li>
              <li>Transaction signing</li>
              <li>Blockchain submission</li>
              <li>Cold wallet support (optional)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-purple-400">dApp Implementation</h2>
          </div>
          <p className="text-gray-300 mb-4">
            <a href="https://github.com/MrStahlfelge/ergopay-server-example" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoPay showcase example</a>
          </p>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-purple-300">Requirements</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Transaction building</li>
              <li>QR code generation</li>
              <li>API endpoint for signing requests</li>
              <li>Transaction monitoring</li>
              <li>User interface integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-400">Benefits for dApps</h2>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>dApp or website don't need to handle user's secrets (mnemonic/private keys)</li>
            <li>dApp's users don't need to worry about the security of their private keys</li>
            <li>ErgoPay EIP is compatible with Cold Wallet EIP</li>
            <li>Adding ErgoPay to product detail pages, cart, checkout page</li>
            <li>The payment screen can be presented immediately after user taps the Ergo Pay button</li>
            <li>ErgoPay is simple and universal, supporting all smart contracts</li>
          </ul>
        </div>
        
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-blue-400">Benefits for Wallets</h2>
          </div>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
            <li>Users can participate in Ergo dApps</li>
            <li>Wallet team can receive service fees from transactions</li>
            <li>Enhanced user experience with seamless dApp integration</li>
            <li>Competitive advantage over wallets without ErgoPay support</li>
            <li>Universal smart contract support</li>
            <li>Cross-platform compatibility</li>
          </ul>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related EIPs</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/eip19" className="text-orange-400 hover:underline">EIP-0019: Cold Wallet Protocol</a></li>
              <li><a href="/docs/developers/eip25" className="text-orange-400 hover:underline">EIP-0025: Payment Request URI</a></li>
              <li><a href="/docs/developers/eip17" className="text-orange-400 hover:underline">EIP-0017: Proxy Contracts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">External Links</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/ergoplatform/ergo-wallet-app" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Wallet App</a></li>
              <li><a href="https://github.com/MrStahlfelge/ergopay-server-example" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoPay Server Example</a></li>
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 