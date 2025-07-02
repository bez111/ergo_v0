"use client";

import React from "react";
import { Users, Calendar, Video } from "lucide-react";
import Link from "next/link";

export default function ErgoSummitPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="flex items-center gap-4 mb-8">
        <Users className="w-10 h-10 text-orange-400" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
          ErgoSummit
        </h1>
      </div>

      {/* ErgoVersary 2023 */}
      <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold">ErgoVersary 2023 <span className="text-base font-normal">(July 1-3rd)</span></h2>
        </div>
        <p className="text-gray-300 mb-2">
          For our fourth anniversary we hosted a jam-packed summit with two dozen videos. Check out the full playlist on <Link href="https://www.youtube.com/playlist?list=PL6v7z2b5tU4JvQwQnQw6Qw6Qw6Qw6Qw6Q" target="_blank" rel="noopener noreferrer" className="underline text-orange-300 hover:text-orange-200">YouTube</Link>.
        </p>
      </section>

      {/* Ergo Summit 2022 */}
      <section className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold">Ergo Summit 2022: Privacy & Security</h2>
        </div>
        <p className="text-gray-300 mb-4">
          This event featured presentations and discussions by developers and blockchain experts on the state of DeFi, where it needs to go, and the DeFi solutions that are being built on Ergo.
        </p>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Upgrading Macroeconomic Policy via Softfork | Dionysis Zindros</li>
          <li>Decentralizing the Internet | Johnny Wu</li>
          <li>Weekly Update & AMA - Feb 18, 2022 PART 1 & PART 2</li>
          <li>Blockchain Privacy and Security Explained | NiceHash</li>
          <li>SmartPools - the Future of PoW Mining | GetBlok</li>
          <li>Trustless AI Training | PGWAD</li>
          <li>Bringing Bitcoin to Ergo | Frosty</li>
          <li>Dev Update Feb 20th | ErgoHack, Games, Wallets, NFTs, Mixer upgrades + more</li>
          <li>The Deep Ocean Dark Pool Protocol | Oliver Cracknell</li>
          <li>Ergo: A Platform for Cryptographic Applications | Kushti</li>
        </ul>
      </section>

      {/* ErgoSummit I */}
      <section className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Video className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold">ErgoSummit I</h2>
        </div>
        <ul className="list-decimal pl-6 text-gray-200 space-y-1">
          <li>00:00:00 - The Summit</li>
          <li>00:01:00 - Ergo 101: The Basics</li>
          <li>00:40:00 - Cardano & Ergo's UTXO Model</li>
          <li>01:11:30 - DeFi Services: How Yoroi Wallet will be the gateway to Ergo dApps and what's to come</li>
          <li>01:32:30 - Auction House</li>
          <li>01:49:30 - Announcing The Release Of The AgeUSD Stablecoin Protocol</li>
          <li>02:18:00 - An IOHK Perspective: Designing The AgeUSD Stablecoin Protocol - An Economic Analysis (with Special Guest IOHK's Bruno)</li>
          <li>03:02:00 - AgeUSD Smart Contracts: A Technical Perspective</li>
          <li>03:41:00 - Enter Into The Sigmaverse - Uncovering What Lays Within Ergo's dApp Ecosystem</li>
          <li>03:47:30 - Ergo-Bootstrap - Streamlining Ergo dApp Infrastructure With One Simple Tool</li>
          <li>03:59:30 - Headless dApps: A Novel Technical & Business Model for the dApp Industry</li>
          <li>04:28:00 - Ergo - Cardano Collaboration</li>
          <li>04:38:00 - Understanding dApp Developer Tooling: An Introduction To Kiosk</li>
          <li>05:13:00 - The Upcoming Ergo Hardening Upgrade - How It Will Change The Ecosystem From Top To Bottom</li>
          <li>05:26:30 - Oracle Pools Update - How Deviation Checking Consensus Improves Assurance</li>
          <li>05:57:00 - Updatable dApps In The EUTXO Model</li>
          <li>06:10:00 - Blockchain 2020: A DeFi Odyssey</li>
          <li>06:51:00 - The Ergo Vision</li>
          <li>07:03:00 - ZK Treasury</li>
          <li>07:07:00 - Understanding dApp Developer Tooling: An Introduction To Json dApp Environment</li>
          <li>07:45:30 - The Ergo Foundation's Grant-Based Approach To Developing The UTXO-Based dApp Ecosystem</li>
          <li>08:05:30 - 2021 Ergo Roadmap reveal</li>
        </ul>
      </section>
    </div>
  );
} 