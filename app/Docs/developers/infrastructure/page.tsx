"use client";

import React from "react";
import Link from "next/link";
import { Server, Globe, Code, Wallet, Layers, BookOpen, ChevronRight } from "lucide-react";

export default function InfrastructurePage() {
  const infraSections = [
    {
      title: "Node",
      description:
        "Run your own Ergo node or use public endpoints for direct blockchain access. Reliable public nodes and setup guides included.",
      icon: Server,
      color: "text-cyan-400",
      link: "/docs/developers/infrastructure/node"
    },
    {
      title: "Explorer",
      description:
        "Explore the Ergo blockchain with public explorers. Track transactions, blocks, and network activity in real time.",
      icon: Globe,
      color: "text-orange-400",
      link: "/docs/developers/infrastructure/explorer"
    },
    {
      title: "APIs",
      description:
        "Integrate Ergo into your apps with robust APIs. Access network data, submit transactions, and build custom tools.",
      icon: Code,
      color: "text-green-400",
      link: "/docs/developers/infrastructure/api"
    },
    {
      title: "Off-Chain",
      description:
        "Leverage off-chain services and infrastructure for scalability, data indexing, and advanced dApp logic.",
      icon: Layers,
      color: "text-cyan-300",
      link: "/docs/developers/infrastructure/offchain"
    },
    {
      title: "Wallets",
      description:
        "Discover Ergo wallets for users and developers. Secure, manage, and integrate Ergo assets with ease.",
      icon: Wallet,
      color: "text-orange-300",
      link: "/docs/developers/infrastructure/wallets"
    },
    {
      title: "Integration Guide",
      description:
        "Step-by-step guides and best practices for integrating Ergo into your applications and services.",
      icon: BookOpen,
      color: "text-cyan-400",
      link: "/docs/developers/infrastructure/integration"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Interacting with Ergo
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore the core infrastructure and tools for building on Ergo: nodes, explorers, APIs, off-chain services, wallets, and integration resources.
      </p>

      {/* Infrastructure Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {infraSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${section.color}`} />
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.description}
                </p>
              </div>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
} 