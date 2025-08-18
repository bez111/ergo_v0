"use client";
import React from "react";
import Link from "next/link";
import { Handshake, MessageSquare, Users, Network, RefreshCw, Server, ChevronLeft } from "lucide-react";

const sections = [
  {
    key: "handshaking",
    title: "Handshaking",
    icon: Handshake,
    description: "Peer connection and identity exchange.",
    link: "/Docs/developers/infrastructure/node/protocol/p2p-handshake"
  },
  {
    key: "network-messages",
    title: "Network Messages",
    icon: MessageSquare,
    description: "Message formats and their roles in node communication.",
    link: "/Docs/developers/infrastructure/node/protocol/network-messages"
  },
  {
    key: "peer-management",
    title: "Peer Management",
    icon: Users,
    description: "Discovery, banning, and scoring of peers.",
    link: "/Docs/developers/infrastructure/node/protocol/peer-management"
  },
  {
    key: "block-p2p",
    title: "BlockP2P",
    icon: Network,
    description: "Block/transaction propagation and sync protocols.",
    link: "/Docs/developers/infrastructure/node/protocol/block-p2p"
  },
  {
    key: "modifiers",
    title: "Modifiers",
    icon: RefreshCw,
    description: "Ergo's core data exchange format (blocks, txs, proofs).",
    link: "/Docs/developers/infrastructure/node/protocol/modifiers"
  }
];

export default function P2POverviewCards() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Overview of Ergo's P2P Protocol
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/infrastructure/node/protocol"
          className="inline-flex items-center px-5 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition hover:scale-[1.02]"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Protocol
        </Link>
      </div>

      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
        Ergo's network protocol relies on full nodes (peers) to establish a cooperative peer-to-peer network for block and transaction exchange. This collaborative approach ensures a decentralized, robust system with high security and integrity.
      </p>

      {/* Full Nodes Section */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-cyan-400/10 rounded-lg">
            <Server className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-xl font-bold text-cyan-300">Full Nodes in the Ergo Network</h2>
        </div>
        <p className="text-gray-300 leading-relaxed">
          The <Link href="install.md" className="text-cyan-400 hover:underline font-semibold">Full Node</Link> is a critical component of the Ergo network. It downloads and verifies every block (and transaction) to maintain a complete copy of the blockchain. By doing so, full nodes contribute to the network's resilience, ensuring transaction and block information is readily available to other nodes. These nodes also relay the verified blocks and transactions to other nodes, helping keep the network up-to-date.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-cyan-300 mb-6">P2P Protocol Components</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(({ key, title, icon: Icon, description, link }) => (
          <Link
            key={key}
            href={link}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer group relative"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Icon className="w-6 h-6 text-cyan-400" />
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {description}
              </p>
            </div>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
              Learn more
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
