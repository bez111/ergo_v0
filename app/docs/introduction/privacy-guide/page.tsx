"use client";

import React from "react";
import { Shield, EyeOff, Lock, Users, AlertTriangle, CheckCircle, Globe, Key, Network, ArrowRight, FileText } from "lucide-react";

export default function PrivacyGuidePage() {
  return (
    <div className="px-4 max-w-3xl mx-auto pb-24">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Privacy and Security in Bitcoin: Dispelling Myths and Enhancing User Protection
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Bitcoin is often thought of as an anonymous currency used by criminals and hackers. While this myth has been dispelled many times, it still lingers on. The truth is that Bitcoin is a pseudonymous cryptocurrency. While no names or real identities are tied to addresses and transactions, these can all be seen through the public ledger that is the blockchain.
        </p>
      </div>

      {/* Addressing Misconceptions */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <EyeOff className="w-5 h-5 text-orange-400" /> Addressing Misconceptions: Pseudonymity and Transparency
        </h2>
        <p className="text-gray-300 mb-4">
          While the alphanumeric wallet addresses do not give away any private information, there are ways in which these can be connected to real-world identities, including wallet transaction broadcasters who can link your address to an IP, and especially fiat on and off-ramps.
        </p>
      </div>

      {/* Blockchain: Problem or Solution? */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Globe className="w-5 h-5 text-cyan-400" /> Blockchain: A Problem Or The Solution?
        </h2>
        <p className="text-gray-300 mb-4">
          When one uses a centralized exchange to buy or sell crypto for fiat, they'll have to go through a KYC (Know Your Customer) process, which will reveal their identity. In some aspects, Bitcoin and other public blockchains are not suitable for money laundering and other malicious activities. Criminals will still need to go through regulated corporations to cash out any ill-gotten funds or spend them on any real-world items.
        </p>
        <p className="text-gray-300 mb-4">
          In short, Bitcoin is actually a much better alternative when it comes to anti-money laundry enforcement when compared to private banking or cash. Former CIA Acting Director Mitchell Morell revealed that cryptocurrencies made up less than 1% of all illicit financial activities between 2017 and 2020, while fiat money accounts for 2-4% of the USA's GDP.
        </p>
      </div>

      {/* Privacy and User Security */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" /> Privacy and User Security
        </h2>
        <p className="text-gray-300 mb-4">
          Pseudo-anonymity makes users vulnerable to malicious actors. Sharing a public wallet address exposes the wallet, transactions, and funds to the world, making high-net-worth individuals a target for hackers and criminals. Data leaks on exchanges or third-party wallets may allow nefarious actors to link a wallet to an ID, social security number, and more.
        </p>
        <p className="text-gray-300 mb-4">
          The public and pseudonymous nature of blockchain is a double-edged sword: it enables transparency but also exposes users to attacks, leaks, and other issues. Traditionally, banks and governments keep their ledgers private, requiring trust in those entities to ensure safety and liquidity of funds.
        </p>
      </div>

      {/* Money For The People */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-400" /> Money For The People
        </h2>
        <p className="text-gray-300 mb-4">
          Bitcoin FUD (Fear, Uncertainty, Doubt) arguments made by regulators often claim Bitcoin is private, anonymous, uncontrollable, and unstoppable. In reality, cash is the primary money laundering tool, and blockchain wallets are traceable. Governments can track activity when funds are withdrawn to a bank account, but cannot ban your account or control your funds in a non-custodial wallet.
        </p>
        <p className="text-gray-300 mb-4">
          What remains is that governments can question the source of funds withdrawn to a central bank account, but this has not stopped illicit financial activities or prevented big players from taking on risky debts. Illicit activities continue elsewhere, and institutions rely on bailouts when needed.
        </p>
      </div>

      {/* Enhancing Privacy and Anonymity */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Lock className="w-5 h-5 text-cyan-400" /> Enhancing Privacy and Anonymity
        </h2>
        <p className="text-gray-300 mb-4">
          For protection, there are private chains and CoinJoin (coin mixer) apps that make wallets untraceable. However, all on-chain activity must eventually be integrated into the real world. If you can prove your funds are clean, you should be able to use privacy tools. Not your keys, not your coins — this applies to custodial exchange wallets as well.
        </p>
        <p className="text-gray-300 mb-4">
          Decentralized finance protocols are entering a golden era, enabling non-custodial wallets, efficient decentralized exchanges, and privacy tools like zero-knowledge mixers. Ergo Blockchain provides a non-custodial coinjoin service, the ErgoMixer, and supports Layer 2 privacy solutions.
        </p>
      </div>

      {/* The Ergonaut's Guide to Privacy */}
      <div className="bg-orange-400/10 border border-orange-400 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-400" /> The Ergonaut's Guide to Privacy
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          As the world of Web3 and DeFi grows, privacy and security are more important than ever. Privacy is a fundamental right, ensuring control over personal information and safety from threats. Security is the means to protect this privacy. Together, they are critical for individual sovereignty and freedom in decentralized finance.
        </p>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          This guide covers essential topics: secure passwords, 2FA, VPNs, malware protection, private communications, Tor, privacy on the blockchain, cold wallets, mixers, and more. All information is public and for educational purposes only.
        </p>
      </div>

      {/* General Privacy Preserving Practices */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Key className="w-5 h-5 text-green-400" /> General Privacy Preserving Practices
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Creating Secure Passwords:</b> Use strong, unique passwords (14+ chars, mixed case, numbers, symbols). Consider passphrases and a password manager.</li>
          <li><b>Enabling Two-Factor Authentication:</b> Add 2FA to all accounts. Use apps, SMS, email, or hardware keys. Keep backup codes safe.</li>
          <li><b>Protecting Your Machine:</b> Keep your OS and software updated. Avoid downloading from untrusted sources.</li>
          <li><b>Maintaining Private Online Communications:</b> Use encrypted messaging, avoid sharing sensitive info on public channels, and separate private/pseudonymous accounts from public ones.</li>
          <li><b>Setting Up a VPN:</b> Use a reputable VPN provider, preferably paid. Enable a kill switch for extra safety.</li>
          <li><b>Tor Browser:</b> Use Tor for anonymous browsing. Download only from the official site. Combine with VPN for extra privacy.</li>
        </ul>
      </div>

      {/* Privacy on the Blockchain */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Network className="w-5 h-5 text-cyan-400" /> Privacy on the Blockchain
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li><b>Protecting Your Seed Phrases:</b> Store seed phrases offline, ideally on steel plates. Never store them online or in the cloud.</li>
          <li><b>Setting Up the Mixer:</b> Use the ErgoMixer for privacy. Download from the official repo, follow instructions, and mix funds before sending to a private wallet.</li>
          <li><b>Creating Private Wallets:</b> Create a new wallet, send mixed funds to it, and avoid linking it to your identity or public addresses.</li>
        </ul>
      </div>

      {/* Checklists */}
      <div className="bg-green-400/10 border border-green-500 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" /> Privacy & Security Checklist
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-green-600 mb-2">To-Do List</h3>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Use a strong password</li>
              <li>Use 2FA</li>
              <li>Update your machine</li>
              <li>Maintain anonymous / pseudonymous accounts</li>
              <li>Use encrypted messaging</li>
              <li>Use a VPN</li>
              <li>Use the Tor Browser</li>
              <li>Secure your seed phrase</li>
              <li>Use the mixer to send funds</li>
              <li>Use a cold wallet</li>
              <li>Use a hardware wallet</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-2">Not-To-Do List</h3>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-1">
              <li>Reuse passwords across sites</li>
              <li>Send information between private & public accounts</li>
              <li>Send funds between private & public wallets</li>
              <li>Share personally identifiable information</li>
              <li>Use or download untrusted applications</li>
              <li>Public Wi-Fi use without a VPN</li>
              <li>Ad Personalization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 