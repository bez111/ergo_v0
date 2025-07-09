"use client";

import React from "react";
import Head from "next/head";
import {
  Layers,
  GitBranch,
  Cpu,
  Eye,
  Link2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function InfrastructurePage() {
  const infraSections = [
    {
      title: "Rosen Bridge",
      description:
        "Cross-chain asset transfers between Ergo, Cardano, and more. Secure, decentralized, and extensible bridge protocol.",
      icon: Link2,
      color: "text-pink-400",
      link: "/Docs/ecosystem/infrastructure/rosen-bridge"
    },
    {
      title: "Sidechains",
      description:
        "Trustless, efficient cross-chain communication and scaling for Ergo. Explore sub-blocks, Sigma Chains, and PoUW sidechains.",
      icon: Layers,
      color: "text-orange-400",
      link: "/Docs/ecosystem/infrastructure/sidechains"
    },
    {
      title: "Oracles",
      description:
        "Decentralized data feeds for DeFi and dApps. Learn about Oracle Pools, Mixicles, and secure data on Ergo.",
      icon: Eye,
      color: "text-blue-400",
      link: "/Docs/ecosystem/infrastructure/oracles"
    },
    {
      title: "Sigma Chains",
      description:
        "Programmable, cross-chain, and sustainable PoW blockchains built on Ergo. Unlocks DeFi, privacy, and interoperability.",
      icon: GitBranch,
      color: "text-cyan-400",
      link: "/Docs/ecosystem/infrastructure/sidechains#sigma-chains"
    },
    {
      title: "Proof of Useful Work (PoUW)",
      description:
        "Research and experiments on integrating useful computation into consensus. PoUW sidechains and economic challenges.",
      icon: Cpu,
      color: "text-green-400",
      link: "/Docs/ecosystem/infrastructure/sidechains#pouw"
    },
  ];

  return (
    <>
      <Head>
        <title>Ergo Infrastructure</title>
        <meta name="description" content="Explore the core infrastructure of the Ergo blockchain: sidechains, Sigma Chains, PoUW, oracles, and bridges." />
      </Head>

      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Infrastructure
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        The backbone of the Ergo ecosystem: trustless cross-chain protocols, programmable PoW, decentralized oracles, and secure bridges. Dive into the technologies powering Ergo's scalability, interoperability, and security.
      </p>

      {/* Infrastructure Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {infraSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div
              key={index}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
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
              <Link
                href={section.link}
                className="inline-flex items-center text-cyan-400 font-semibold hover:underline mt-auto"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
