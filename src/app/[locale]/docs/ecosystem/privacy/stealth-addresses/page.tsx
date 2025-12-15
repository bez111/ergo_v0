
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  EyeOff,
  KeyRound,
  ExternalLink,
  BookOpen,
  Info,
  ChevronRight,
  Link as LinkIcon,
  UserCheck,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function StealthAddressesPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <EyeOff className="w-8 h-8 text-pink-400" /> Stealth Addresses
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          Stealth Addresses ensure recipient privacy by generating unique, one-time addresses for every transaction. Leveraging a non-interactive Diffie-Hellman key exchange, they keep the linkage between transactions and the original public address concealed, significantly enhancing privacy.
        </p>
        <div className="flex flex-wrap gap-4 mb-2">
          <Link
            href="/docs/ecosystem/privacy"
            className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Privacy
          </Link>
          <a
            href="https://ergomixer.github.io/stealth/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <ExternalLink className="w-5 h-5 mr-2" /> Stealth Address Tool
          </a>
          <a
            href="https://raw.githubusercontent.com/ergoplatform/eips/d21280977f2c21dc733632c48c98d0f614bc6123/eip-0041.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 rounded-xl font-semibold text-black hover:bg-blue-600 transition-transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" /> EIP-41 Standard
          </a>
        </div>
      </div>

      {/* What Are Stealth Addresses */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-pink-400" /> What Are Stealth Addresses?
        </h2>
        <p className="text-gray-300">
          With the advent of <Link href="/docs/ecosystem/privacy/ergomixer" className="text-cyan-400 hover:underline">ErgoMixer</Link> v4.4.0, support for Stealth Addresses has been rolled out. ErgoMixer assists in the creation and management of your Stealth Addresses for receiving payments. Note: Stealth Addresses aren’t directly payable. The sender must use the <a href="https://ergomixer.github.io/stealth/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Stealth Address Tool</a> to generate a Stealth Payment Address, which can then be used like any standard address.
        </p>
      </div>

      {/* Example: Stealth Addresses for Donations */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <UserCheck className="w-6 h-6 text-green-400" /> Example: Stealth Addresses for Donations
        </h2>
        <p className="text-gray-300 mb-2">
          Suppose you want to place a donation address on your website. Traditionally, all transactions to this address are visible on the blockchain, revealing donation amounts. A common workaround is generating a new address for every user, which is tedious.
        </p>
        <p className="text-gray-300 mb-2">
          Stealth Addresses simplify this. By sharing your stealth address, anyone can generate a unique Stealth Payment Address to send funds. You can then locate the UTXO boxes associated with these addresses and collect the funds, keeping your transactions hidden and private.
        </p>
        <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-4 mt-4">
          <span className="font-mono text-green-400">Stealth Address → [shared publicly]<br/>Stealth Payment Address → [unique per transaction]</span>
        </div>
      </div>

      {/* Covert vs Stealth Addresses */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-400" /> Covert vs Stealth Addresses
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-pink-400 mb-2">Covert Addresses</h3>
            <p className="text-gray-300 text-sm">
              Enable users to receive funds at a public address not directly tied to their actual wallet, helping obscure the transaction trail.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-400 mb-2">Stealth Addresses</h3>
            <p className="text-gray-300 text-sm">
              Amplify privacy by generating unique, one-time addresses for every transaction. The recipient shares a public address, and the sender creates a unique address for each payment, making transactions unlinkable.
            </p>
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          Both address types aim to bolster privacy, but Stealth Addresses excel by ensuring every transaction uses a new, one-time address, impeding traceability.
        </p>
      </div>

      {/* How Stealth Addresses Work */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" /> How Stealth Addresses Work
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            <span className="font-bold text-yellow-400">Stealth Address Generation:</span> Alice (the recipient) creates a Stealth Address and shares it (e.g., on her website). This address contains her public key, without exposing any identifiable information.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Stealth Payment Address Creation:</span> Bob (the sender) uses the shared Stealth Address to generate a unique Stealth Payment Address for the transaction.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Payment Transaction:</span> Bob sends funds to the Stealth Payment Address, creating a special box on the blockchain. Only Alice can access it, and it’s not linked to the shared Stealth Address.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Unique Identifiers:</span> Unique identifiers are stored in the payment box, ensuring only Alice can access it.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Verification:</span> Alice’s wallet checks the identifiers and allows her to open the box and receive payment.
          </li>
          <li>
            <span className="font-bold text-yellow-400">Discovering Payments:</span> Alice’s wallet automatically scans for new payments, enabling her to securely and privately access her funds.
          </li>
        </ol>
        <p className="text-gray-400 mt-4 text-sm">
          This mechanism is based on the <a href="https://raw.githubusercontent.com/ergoplatform/eips/d21280977f2c21dc733632c48c98d0f614bc6123/eip-0041.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIP-41 Stealth Address Standard</a>.
        </p>
      </div>

      {/* Resources Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-400" /> Resources
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://ergomixer.github.io/stealth/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-cyan-400 mb-2">Stealth Address Tool</h4>
            <p className="text-gray-300 text-sm">Generate Stealth Payment Addresses for Ergo using the official tool.</p>
          </a>
          <a
            href="https://raw.githubusercontent.com/ergoplatform/eips/d21280977f2c21dc733632c48c98d0f614bc6123/eip-0041.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800/50 rounded-lg p-4 hover:bg-neutral-700/50 transition"
          >
            <h4 className="font-bold text-blue-400 mb-2">EIP-41: Stealth Address Standard</h4>
            <p className="text-gray-300 text-sm">Read the full technical standard for Stealth Addresses on Ergo.</p>
          </a>
        </div>
      </div>
    </div>
  );
} 