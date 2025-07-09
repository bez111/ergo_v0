"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Users, MessageCircle, Rocket, Video, Star, Globe, Target, CheckCircle, ArrowRight, ExternalLink, Award, Zap, BookOpen, Shield } from "lucide-react";

const TABS = [
  { key: "events", label: "Events" },
  { key: "ergohack", label: "ERGOHACK" },
  { key: "ergosummit", label: "ERGOSUMMIT" },
];

function EventsContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Ergo Events
          </h1>
        <p className="text-xl text-gray-400 mb-6">
          Ergo hosts a variety of events to engage with the community, share updates, and foster innovation. These events provide an excellent opportunity to learn more about Ergo, interact with the team, and contribute to the ecosystem.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Ergo's events bring together developers, enthusiasts, and thought leaders from around the world to build the future of decentralized finance."
        </blockquote>
      </div>

      {/* Core Event Types */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-orange-400" /> ERGOHACK
          </h3>
          <p className="text-gray-300 mb-4">
            Regular online hackathons that bring together developers, designers, students, and enthusiasts to build solutions and dApps for the Ergo ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Innovation incubators
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Mentorship opportunities
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Direct ecosystem contribution
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> ERGOSUMMIT
          </h3>
          <p className="text-gray-300 mb-4">
            Annual conferences featuring presentations and discussions by developers and blockchain experts on the state of DeFi and Ergo solutions.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Expert presentations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Community networking
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Latest developments
            </li>
          </ul>
        </div>
      </div>

      {/* Community Engagement */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-400" /> Community Engagement
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> AMAs and Dev Updates
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Weekly Ask Me Anything sessions and regular Developer Updates on Reddit provide insights into Ergo's development progress.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Direct team interaction</li>
              <li>• Development insights</li>
              <li>• Community Q&A</li>
            </ul>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" /> Join the Community
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Stay updated on all Ergo events by joining our Discord community and exploring other community spaces.
            </p>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>• Discord community</li>
              <li>• Global engagement</li>
              <li>• Event notifications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Event Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,140,0,0.08)]">
          <Star className="w-7 h-7 text-orange-400 mb-1" />
          <div className="text-lg font-semibold bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Learning</div>
          <div className="text-gray-400 text-sm leading-relaxed">Gain insights from experts and learn about the latest developments in the Ergo ecosystem.</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,211,238,0.08)]">
          <Target className="w-7 h-7 text-cyan-400 mb-1" />
          <div className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">Networking</div>
          <div className="text-gray-400 text-sm leading-relaxed">Connect with developers, enthusiasts, and thought leaders from around the world.</div>
        </div>
        <div className="bg-gradient-to-br from-green-400/10 to-cyan-400/5 rounded-2xl p-5 flex flex-col items-start gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(34,197,94,0.08)]">
          <Award className="w-7 h-7 text-green-400 mb-1" />
          <div className="text-lg font-semibold bg-gradient-to-r from-green-300 to-cyan-100 bg-clip-text text-transparent">Contribution</div>
          <div className="text-gray-400 text-sm leading-relaxed">Contribute directly to the Ergo ecosystem through hackathons and community projects.</div>
        </div>
      </div>
    </>
  );
}

function ErgoHackContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            ERGOHACK: Building the Ergo Ecosystem
          </h1>
        <p className="text-xl text-gray-400 mb-6">
          ERGOHACK events are pillars of innovation within the Ergo community. These regular online hackathons bring together developers, designers, students, and enthusiasts from around the globe.
        </p>
      </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "Originally conceived as competitions, ERGOHACKs have evolved into powerful incubators for talent and technology."
        </blockquote>
      </div>

      {/* Core Concepts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-orange-400" /> Innovation Incubators
          </h3>
          <p className="text-gray-300 mb-4">
            ERGOHACKs offer invaluable opportunities to work with experienced mentors, showcase skills, and contribute directly to the core infrastructure and user experience of the Ergo blockchain.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Experienced mentorship
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Skill showcase opportunities
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Direct ecosystem contribution
            </li>
          </ul>
        </div>

        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" /> By the Numbers
          </h3>
          <p className="text-gray-300 mb-4">
            ERGOHACKs I-IX have achieved remarkable success in fostering innovation and building the Ergo ecosystem.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              10+ hackathons completed
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              100+ unique projects explored
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Multiple ecosystem tools created
            </li>
          </ul>
        </div>
      </div>

      {/* Notable Outcomes */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-green-400" /> Notable Outcomes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Wallets & Infrastructure
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Minotaur, SAFEW, Satergo enhancements, ErgoNames, Rosen Port, and other essential tools.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> DeFi Platforms
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              ErgoLend, SigmaO, Oracle Pools v2, Duckpools, and other innovative DeFi solutions.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4" /> Privacy & Innovation
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Stealth Addresses, CYTI, SNISPs, ChainCash, Lithos, and other cutting-edge concepts.
        </p>
      </div>
        </div>
      </div>

      {/* Hackathon Directory */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-400" /> Hackathon Directory & History
        </h2>
        <p className="text-gray-300 mb-4">Explore the history of innovation. Click any event name to jump to its details or browse chronologically.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(May 25) ERGOHACK X: AI on the Ergo Blockchain</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Oct 24) ERGOHACK IX: Mining & UI/UX Innovation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(May 24) ERGOHACK VIII: Ergo as a Smart Layer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Oct 23) ERGOHACK VII: Future of Finance: Ways of Adoption</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Feb 23) ERGOHACK VI: Cypherpunk Finance</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Oct 22) ERGOHACK V: Mining & Minting</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Jun 22) ERGOHACKFEST (IV)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Feb 22) ERGOHACK III: Privacy & Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Oct 21) ERGOHACK II: Social Transformation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">(Jun 21) ERGOHACK I: Hack For Change</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ErgoSummitContent() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            ErgoSummit
          </h1>
        <p className="text-xl text-gray-400 mb-6">
          Annual conferences featuring presentations and discussions by developers and blockchain experts on the state of DeFi and Ergo solutions.
        </p>
        </div>

      {/* Quote Section */}
      <div className="bg-gradient-to-r from-orange-400/10 to-cyan-400/10 border border-orange-400/20 rounded-xl p-6 mb-8">
        <blockquote className="text-xl italic text-center text-gray-300">
          "ErgoSummit brings together the brightest minds in blockchain to discuss the future of decentralized finance and Ergo's role in shaping it."
        </blockquote>
      </div>

      {/* ErgoVersary 2023 */}
      <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold">ErgoVersary 2023 <span className="text-base font-normal text-gray-400">(July 1-3rd)</span></h2>
        </div>
        <p className="text-gray-300 mb-4">
          For our fourth anniversary we hosted a jam-packed summit with two dozen videos. Check out the full playlist on <Link href="https://www.youtube.com/playlist?list=PL6v7z2b5tU4JvQwQnQw6Qw6Qw6Qw6Qw6Q" target="_blank" rel="noopener noreferrer" className="underline text-orange-300 hover:text-orange-200">YouTube</Link>.
        </p>
      </section>

      {/* Ergo Summit 2022 */}
      <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl font-bold">Ergo Summit 2022: Privacy & Security</h2>
        </div>
        <p className="text-gray-300 mb-4">
          This event featured presentations and discussions by developers and blockchain experts on the state of DeFi, where it needs to go, and the DeFi solutions that are being built on Ergo.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Upgrading Macroeconomic Policy via Softfork | Dionysis Zindros</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Decentralizing the Internet | Johnny Wu</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Blockchain Privacy and Security Explained | NiceHash</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">SmartPools - the Future of PoW Mining | GetBlok</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Trustless AI Training | PGWAD</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Bringing Bitcoin to Ergo | Frosty</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">The Deep Ocean Dark Pool Protocol | Oliver Cracknell</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Ergo: A Platform for Cryptographic Applications | Kushti</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Weekly Update & AMA - Feb 18, 2022 PART 1 & PART 2</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Dev Update Feb 20th | ErgoHack, Games, Wallets, NFTs, Mixer upgrades + more</span>
            </div>
          </div>
        </div>
      </section>

      {/* ErgoSummit I */}
      <section className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Video className="w-6 h-6 text-orange-400" />
          <h2 className="text-2xl font-bold">ErgoSummit I</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">00:00:00 - The Summit</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">00:01:00 - Ergo 101: The Basics</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">00:40:00 - Cardano & Ergo's UTXO Model</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">01:11:30 - DeFi Services: How Yoroi Wallet will be the gateway to Ergo dApps</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">01:32:30 - Auction House</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">01:49:30 - Announcing The Release Of The AgeUSD Stablecoin Protocol</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">02:18:00 - An IOHK Perspective: Designing The AgeUSD Stablecoin Protocol</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">03:02:00 - AgeUSD Smart Contracts: A Technical Perspective</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">03:41:00 - Enter Into The Sigmaverse - Uncovering What Lays Within Ergo's dApp Ecosystem</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">03:47:30 - Ergo-Bootstrap - Streamlining Ergo dApp Infrastructure</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">03:59:30 - Headless dApps: A Novel Technical & Business Model</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">04:28:00 - Ergo - Cardano Collaboration</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">04:38:00 - Understanding dApp Developer Tooling: An Introduction To Kiosk</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">05:13:00 - The Upcoming Ergo Hardening Upgrade</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">05:26:30 - Oracle Pools Update - How Deviation Checking Consensus Improves Assurance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">05:57:00 - Updatable dApps In The EUTXO Model</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">06:10:00 - Blockchain 2020: A DeFi Odyssey</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">06:51:00 - The Ergo Vision</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">07:03:00 - ZK Treasury</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">07:07:00 - Understanding dApp Developer Tooling: Json dApp Environment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">07:45:30 - The Ergo Foundation's Grant-Based Approach</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">08:05:30 - 2021 Ergo Roadmap reveal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("events");

  let content;
  if (activeTab === "events") content = <EventsContent />;
  else if (activeTab === "ergohack") content = <ErgoHackContent />;
  else if (activeTab === "ergosummit") content = <ErgoSummitContent />;

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors border
              ${activeTab === tab.key
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-neutral-900 text-gray-300 border-neutral-700 hover:bg-orange-300 hover:text-white"}`}
          >
            {tab.key === "events" && <Calendar className="w-4 h-4" />}
            {tab.key === "ergohack" && <Rocket className="w-4 h-4" />}
            {tab.key === "ergosummit" && <Users className="w-4 h-4" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {content}
    </>
  );
} 