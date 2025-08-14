"use client";

import React from "react";
import Head from "next/head";
import {
  Download,
  Monitor,
  Zap,
  Users,
  Server,
  Network
} from "lucide-react";
import Link from "next/link";

export default function MiningGuidesPage() {
  const miningCards = [
    {
      title: "Software",
      description: "Choose your preferred mining software and get started with Ergo mining",
      icon: Download,
      color: "text-blue-400",
      href: "/Docs/miners/mining-guides/software"
    },
    {
      title: "Operating Systems",
      description: "Setup guides for Windows, Linux, and dedicated mining rigs",
      icon: Monitor,
      color: "text-green-400",
      href: "/Docs/miners/mining-guides/operating-systems"
    },
    {
      title: "Overclocking",
      description: "Maximize your GPU performance safely and efficiently",
      icon: Zap,
      color: "text-yellow-400",
      href: "/Docs/miners/mining-guides/overclocking"
    },
    {
      title: "Pools",
      description: "Find and join the best mining pools for optimal rewards",
      icon: Users,
      color: "text-purple-400",
      href: "/Docs/miners/mining-guides/pools"
    },
    {
      title: "Solo Mining",
      description: "Mine independently with your own node setup",
      icon: Server,
      color: "text-red-400",
      href: "/Docs/miners/mining-guides/solo-mining"
    },
    {
      title: "Host a Pool",
      description: "Set up and run your own mining pool infrastructure",
      icon: Network,
      color: "text-cyan-400",
      href: "/Docs/miners/mining-guides/host-a-pool"
    }
  ];

  return (
    <>
      <Head>
        <title>Ergo Mining Guides</title>
        <meta name="description" content="Complete guides for mining Ergo: software setup, pool mining, solo mining, overclocking, and running your own pool." />
      </Head>

      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Mining Guides
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Complete step-by-step guides for mining Ergo using Autolykos2. From choosing software to setting up pools, everything you need to start mining efficiently.
      </p>

      {/* Mining Guides Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {miningCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Link
              key={index}
              href={card.href}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <IconComponent className={`w-6 h-6 ${card.color}`} />
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {card.description}
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