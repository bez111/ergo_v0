"use client";

import React from "react";
import { EyeOff, Shuffle, KeyRound, UserCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  const privacySections = [
    {
      title: "ErgoMixer",
      description:
        "A user-friendly mixing service built on Ergo’s privacy protocols. Learn how to use ErgoMixer for anonymous transactions.",
      icon: UserCheck,
      color: "text-blue-400",
      link: "/docs/ecosystem/privacy/ergomixer"
    },
    {
      title: "Stealth Addresses",
      description:
        "Stealth addresses allow users to receive funds privately, hiding the recipient’s identity on the blockchain. Explore how Ergo implements stealth payments.",
      icon: EyeOff,
      color: "text-pink-400",
      link: "/docs/ecosystem/privacy/stealth-addresses"
    },
    {
      title: "SigmaJoin",
      description:
        "SigmaJoin is an advanced privacy protocol for unlinkable transactions. Discover how it works and its role in the Ergo privacy stack.",
      icon: KeyRound,
      color: "text-cyan-400",
      link: "/docs/ecosystem/privacy/sigmajoin"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Privacy Ecosystem
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore privacy on Ergo: mixing, stealth addresses, and advanced cryptographic protocols. Learn how Ergo empowers users with on-chain privacy and anonymity.
      </p>

      {/* Privacy Sections Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {privacySections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Link
              key={index}
              href={section.link}
              className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative"
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