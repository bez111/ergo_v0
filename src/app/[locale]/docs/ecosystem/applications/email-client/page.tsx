
/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Globe, Mail, Zap, Info, BookOpen, ExternalLink, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function EmailClientPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Mail className="w-8 h-8 text-pink-400" /> (E)mail Client for Blocked Internet Access
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          A protocol for transacting with Ergo (and other blockchains) via email or other low-bandwidth channels when the Internet is restricted or unavailable. Enables secure asset transfers and blockchain access even under censorship or outages.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/applications"
            className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to Applications
          </Link>
          <a
            href="https://ergoplatform.org/en/blog/2022-03-01-email-client/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 rounded-xl font-semibold text-white hover:bg-neutral-700"
          >
            <Mail className="w-5 h-5 mr-2" /> Ergo Blog Post
          </a>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-pink-400" /> Why It Matters
        </h2>
        <p className="text-gray-300 mb-2">
          In countries like China and Belarus, Tor is already restricted. During civil unrest, governments often shut down the Internet, as seen in Egypt, Ethiopia, Sudan, Iran, and Turkey. Regardless, individuals should have the ability to secure their assets, especially when threatened by monetary policies, political instability, or warfare.
        </p>
        <p className="text-gray-300">
          The combination of digital communication and digital currency can provide a solution to this issue, allowing users to transact and protect their funds even under severe network restrictions.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-neutral-900/50 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" /> How It Works
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>
            <b>Deal Creation:</b> Bob initiates a transaction from his box, creating a new box (the "deal box") with X ERG, secured by a smart contract: <span className="text-pink-400">Before deadline: Bob's signature + output to Alice; After deadline: Bob's signature</span>.
          </li>
          <li>
            <b>Offline Transmission:</b> Bob transmits the transaction via (e)mail to a gateway. The gateway returns a compact <a href="https://nipopows.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NiPoPoW</a> proof for a header with sufficient confirmations + proof of box membership. For enhanced security, Bob may request a proof from another gateway.
          </li>
          <li>
            <b>Verification:</b> Bob presents the proof to Alice. Alice verifies the proofs and ensures the deadline will not likely be met before her transaction is included.
          </li>
          <li>
            <b>Finalization:</b> Bob signs the new transaction (spending the deal box, creating Alice's output). Alice sends the signed transaction to the gateway and receives a proof of inclusion.
          </li>
        </ol>
        <p className="text-gray-400 mt-4 text-sm">
          Given the small size of these proofs (tens of kilobytes), communication methods like email, fax, ADSL modem, or even paperwork are viable for communication between users and gateways.
        </p>
      </div>

      {/* Scenario Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-400" /> Scenario: Cash-for-ERG in a Blackout
        </h2>
        <p className="text-gray-300 mb-2">
          Alice wants to purchase X ERGs from Bob (paying with cash), but their area has limited or no Internet access. Using this protocol, they can securely complete the transaction using only email or other low-bandwidth channels, with all steps verifiable via cryptographic proofs.
        </p>
      </div>

      {/* Technical Details & Alternatives */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-pink-400" /> Technical Details & Alternatives
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <b>Blockstream Satellite:</b> For Bitcoin, the <a href="https://blockstream.com/satellite/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Blockstream Satellite</a> network can broadcast the blockchain globally, but is susceptible to jamming.
          </li>
          <li>
            <b>Email as a fallback:</b> Email is often the last service to be blocked and can be used to transmit compact blockchain proofs and transactions.
          </li>
          <li>
            <b>Other methods:</b> Fax, modem calls, or even physical mail can be used to exchange proofs and transactions, thanks to the small size of <a href="https://nipopows.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NiPoPoW</a> proofs.
          </li>
        </ul>
      </div>

      {/* References Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ArrowRight className="w-6 h-6 text-cyan-400" /> References & Further Reading
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>
            <a href="https://blockstream.com/satellite/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Blockstream Satellite: Bitcoin from Space</a>
          </li>
          <li>
            <a href="https://nipopows.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NIPoPoWs: Non-Interactive Proofs of Proof-of-Work</a>
          </li>
          <li>
            <a href="https://ergoplatform.org/en/blog/2022-03-01-email-client/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">(E)mail Client for Limited or Blocked Internet</a>
          </li>
        </ul>
      </div>
    </div>
  );
} 