"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Users, MessageCircle, Rocket, Video } from "lucide-react";

const TABS = [
  { key: "events", label: "Events", icon: <Calendar className="w-5 h-5 mr-2" /> },
  { key: "ergohack", label: "ERGOHACK", icon: <Rocket className="w-5 h-5 mr-2" /> },
  { key: "ergosummit", label: "ERGOSUMMIT", icon: <Users className="w-5 h-5 mr-2" /> },
];

function EventsContent() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Calendar className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Ergo Events
          </h1>
        </div>
      </div>
      {/* Ergo Events Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Ergo Events</h2>
        <p className="text-gray-300 mb-2">
          Ergo hosts a variety of events to engage with the community, share updates, and foster innovation. These events provide an excellent opportunity to learn more about Ergo, interact with the team, and contribute to the ecosystem.
        </p>
      </div>
      {/* ERGOHACK and ERGOSUMMIT Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">ERGOHACK and ERGOSUMMIT</h2>
        <p className="text-gray-300 mb-2">
          Our flagship events, <b>ERGOHACK</b> and <b>ERGOSUMMIT</b>, are held regularly. These events bring together developers, enthusiasts, and thought leaders from the Ergo community. Use the tabs above to learn more about past events and stay updated on upcoming ones.
        </p>
      </div>
      {/* AMAs and Dev Updates Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 flex items-start gap-4 mb-6">
        <MessageCircle className="w-8 h-8 text-cyan-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-2">AMAs and Dev Updates</h2>
          <p className="text-gray-300 mb-2">
            We host weekly Ask Me Anything (AMAs) sessions and regular Developer Updates on Reddit. These sessions provide insights into Ergo's development progress and offer a platform for the community to ask questions directly to the team.
          </p>
        </div>
      </div>
      {/* Join the Community Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 flex items-start gap-4">
        <Users className="w-8 h-8 text-orange-400 mt-1" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Join the Community</h2>
          <p className="text-gray-300 mb-2">
            To stay updated on all Ergo events, join our <a href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer" className="underline text-cyan-300 hover:text-cyan-200">Discord community</a>. You can also explore other community spaces to engage with Ergo enthusiasts from around the world.
          </p>
        </div>
      </div>
    </>
  );
}

function ErgoHackContent() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Rocket className="w-10 h-10 text-cyan-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            ERGOHACK: Building the Ergo Ecosystem
          </h1>
        </div>
      </div>
      {/* Intro */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <p className="text-gray-300 mb-2">
          ERGOHACK events are pillars of innovation within the Ergo community. These regular online hackathons bring together developers, designers, students, and enthusiasts from around globe onto the Ergo Discord. Participants collaborate intensively, often over several days or weeks, to build solutions, tools, and dApps that address specific themes or contribute broadly to the Ergo ecosystem.
        </p>
        <p className="text-gray-300 mb-2">
          Originally conceived as competitions, ERGOHACKs have evolved into powerful incubators for talent and technology. They offer invaluable opportunities to work with experienced mentors, showcase skills, and contribute directly to the core infrastructure and user experience of the Ergo blockchain.
        </p>
      </div>
      {/* By the Numbers */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">ERGOHACKs by the Numbers (I - IX)</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li><b>Total Events:</b> 10 Hackathons</li>
          <li><b>Projects Submitted:</b> Over 100 unique projects explored</li>
          <li><b>Themes Covered:</b> Ranging from Social Transformation, Privacy & Security, Mining & Minting, AI, Cypherpunk Finance, DeFi Adoption, Bitcoin Interoperability, to UI/UX & Mining Innovation.</li>
          <li><b>Notable Outcomes:</b> Many essential ecosystem tools and dApps originated or were significantly developed during ERGOHACKs, including wallets (Minotaur, SAFEW, Satergo enhancements), DeFi platforms (ErgoLend, SigmaO, Oracle Pools v2, Duckpools), infrastructure components (Subpooling/GetBlok.io, ErgoNames, Rosen Port), privacy features (Stealth Addresses), and innovative concepts (CYTI, SNISPs, ChainCash, Lithos).</li>
        </ul>
      </div>
      {/* Directory & History */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Hackathon Directory & History</h2>
        <p className="text-gray-300 mb-2">Explore the history of innovation. Click any event name to jump to its details or browse chronologically. You can also visit the original Hall of Fame.</p>
        <ul className="list-disc pl-6 text-gray-300 mb-2">
          <li>(May 25) ERGOHACK X: AI on the Ergo Blockchain</li>
          <li>(Oct 24) ERGOHACK IX: Mining & UI/UX Innovation</li>
          <li>(May 24) ERGOHACK VIII: Ergo as a Smart Layer</li>
          <li>(Oct 23) ERGOHACK VII: Future of Finance: Ways of Adoption</li>
          <li>(Feb 23) ERGOHACK VI: Cypherpunk Finance</li>
          <li>(Oct 22) ERGOHACK V: Mining & Minting</li>
          <li>(Jun 22) ERGOHACKFEST (IV)</li>
          <li>(Feb 22) ERGOHACK III: Privacy & Security</li>
          <li>(Oct 21) ERGOHACK II: Social Transformation</li>
          <li>(Jun 21) ERGOHACK I: Hack For Change</li>
        </ul>
      </div>
    </div>
  );
}

function ErgoSummitContent() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <Users className="w-10 h-10 text-orange-400" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
            ErgoSummit
          </h1>
        </div>
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

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("events");

  let content;
  if (activeTab === "events") content = <EventsContent />;
  else if (activeTab === "ergohack") content = <ErgoHackContent />;
  else if (activeTab === "ergosummit") content = <ErgoSummitContent />;

  return (
    <div className="space-y-8">
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
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div>{content}</div>
    </div>
  );
} 