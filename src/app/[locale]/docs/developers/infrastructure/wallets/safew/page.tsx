"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React from "react";
import {
  Lock,
  ExternalLink,
  Info,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Users,
  Globe
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function SafeWPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          SafeW
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          <a href="https://github.com/ThierryM1212/SAFEW" target="_blank" rel="noopener noreferrer" className="hover:underline">SafeW</a> is a Simple And Fast Ergo Wallet with dApp connector (EIP-12 compatible), advanced privacy, and expert features. Recognized at ErgoHack 3.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/wallets"
            className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Wallets
          </Link>
          <a
            href="https://github.com/ThierryM1212/SAFEW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> SafeW GitHub
          </a>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-400" /> Disclaimer
        </h2>
        <p className="text-yellow-200">
          The wallet is not actively maintained, but still usable for those who desire the extra features offered.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-cyan-400" /> Features
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Multiple wallet types:
            <ul className="list-disc pl-6 text-gray-400 text-sm">
              <li>Mnemonic-based wallet for signing within the extension</li>
              <li>Ergopay/Read-only wallet for signing with Android/iOS wallet</li>
              <li>Ledger hardware wallet support</li>
            </ul>
          </li>
          <li>Account management in expert mode, including viewing addresses and balances</li>
          <li>Address discovery (BIP-44) to find used addresses and generate new ones</li>
          <li>Transaction history for confirmed and unconfirmed transactions</li>
          <li>Unconfirmed balance display for each wallet, account, and address</li>
          <li>Configurable Explorer, Node, and Explorer UI addresses</li>
          <li>Direct interaction with ErgoMixer</li>
          <li>Transaction builder for advanced users (JSON manipulation)</li>
          <li>Export transaction history as CSV</li>
          <li>Display and mint NFTs (pictures, audio, video)</li>
          <li>Burn tokens</li>
          <li>Chained transactions: send another transaction as soon as the previous is unconfirmed</li>
        </ul>
        <div className="text-sm text-gray-400 space-y-1">
          <div>Tutorials:</div>
          <ul className="list-disc pl-6">
            <li><a href="https://youtu.be/YR0jkbMLaAY" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">How to mint tokens</a></li>
            <li><a href="https://youtu.be/OcyziMIXTtk" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">How to burn tokens</a></li>
            <li><a href="https://youtu.be/3N7Qn2BgH0U" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">How to send assets to several addresses</a></li>
          </ul>
        </div>
      </div>

      {/* Releases Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-cyan-400" /> Releases
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-400" />
            <a href="https://chrome.google.com/webstore/detail/simple-and-fast-ergo-wall/fmpbldieijjehhalgjblbpgjmijencll/" target="_blank" rel="noopener noreferrer" className="hover:underline">Chrome, Edge, Brave, etc. (Chrome Web Store)</a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-orange-400" />
            <a href="https://addons.mozilla.org/en-US/firefox/addon/safew/" target="_blank" rel="noopener noreferrer" className="hover:underline">Firefox (Firefox Add-ons)</a>
          </li>
        </ul>
      </div>

      {/* Blog Post Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-cyan-400" /> Storing Ergo with SAFEW
        </h2>
        <p className="text-gray-300">
          Learn more about storing Ergo with SAFEW in this <a href="https://ergoplatform.org/en/blog/2022-03-25-storing-ergo-safew/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">blog post</a>.
        </p>
      </div>

      {/* Video Guide Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-orange-400" /> Comprehensive Video Guide
        </h2>
        <p className="text-gray-300 mb-4">
          For a visual and detailed guide on how to use SAFEW, watch the comprehensive video tutorial.
        </p>
        <a
          href="https://www.youtube.com/watch?v=DFf-dDlCpzM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg text-black font-semibold hover:bg-orange-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" /> Watch Tutorial
        </a>
      </div>

      {/* Security Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-cyan-400" /> Security
        </h2>
        <p className="text-gray-300">
          Wallets are stored in the local storage of the SAFEW browser extension. The mnemonic is encrypted with AES-256 using the spending password, which is not stored in the application. The password is required for spending funds or managing addresses. ErgoPay wallets allow for remote transaction signing using iOS or Android wallet v1.6+, avoiding the need to store the encrypted mnemonic in the browser extension's local storage.
        </p>
      </div>

      {/* Privacy Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Lock className="w-6 h-6 text-cyan-400" /> Privacy
        </h2>
        <p className="text-gray-300">
          Address discovery can be initiated at any time to generate unused addresses. Non-connected sites cannot access wallet information, while connected sites can read the wallet content. The explorer and node used for interacting with the Ergo blockchain are configurable. ErgoPay/ReadOnly wallets enhance privacy by keeping wallet contents hidden. ErgoMixer integration facilitates the use of privacy tools.
        </p>
      </div>

      {/* Reliability Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-cyan-400" /> Reliability
        </h2>
        <p className="text-gray-300">
          The transaction balance displayed when sending funds with SAFEW is computed from the unsigned transaction, not from the UI inputs.
        </p>
      </div>
    </>
  );
} 