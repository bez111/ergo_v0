"use client";

import React from "react";
import {
  Store,
  PawPrint,
  Globe,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const applications = [
  {
    title: "TabbyPOS",
    description: "Point-of-sale solution for merchants in the Ergo ecosystem. (Description coming soon)",
    icon: Store,
    color: "text-orange-400",
    link: "/Docs/ecosystem/applications/tabbypos"
  },
  {
    title: "ZenGate Global",
    description: "Global trade and supply chain dApp leveraging Ergo. (Description coming soon)",
    icon: Globe,
    color: "text-green-400",
    link: "/Docs/ecosystem/applications/zenGateGlobal"
  },
  {
    title: "Blockchain Access via Email",
    description: "A protocol for using Ergo (and other blockchains) via email or other low-bandwidth channels when the Internet is blocked. Enables secure transactions even under censorship or outages.",
    icon: Globe,
    color: "text-pink-400",
    link: "/Docs/ecosystem/applications/email-client"
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Applications
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore real-world applications and platforms built on Ergo: point-of-sale, NFTs, global trade, and more.
      </p>

      {/* Applications Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {applications.map((app) => (
          <div
            key={app.title}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <app.icon className={`w-6 h-6 ${app.color}`} />
                {app.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {app.description}
              </p>
            </div>
            {app.link && (
              <Link
                href={app.link}
                className="inline-flex items-center text-orange-400 font-semibold hover:underline mt-auto"
              >
                More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
} 