import React from "react";
import { Link } from "@/i18n/navigation";

const standards = [
  { title: "Identity & Security", href: "/docs/ecosystem/Standards/Identity-Security" },
  { title: "Development Standards", href: "/docs/ecosystem/Standards/Development" },
  { title: "Community Administration", href: "/docs/ecosystem/Standards/Community-Admin" },
  { title: "Chat Bridge Setup", href: "/docs/ecosystem/Standards/Chat-Bridge" },
  { title: "ErgoTipper & Rewards Bots", href: "/docs/ecosystem/Standards/ErgoTipper" },
  { title: "KYA (Know Your Assumptions)", href: "/docs/ecosystem/Standards/KYA" },
  { title: "Community Guidelines", href: "/docs/ecosystem/Standards/Community-Guidelines" },
  { title: "Analytics & Developer Contributions", href: "/docs/ecosystem/Standards/Analytics" },
];

export default function EcosystemStandardsPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Ecosystem Standards & Best Practices
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Contributing to Ergo? This page gathers the essential standards, guides, and best practices for every project in the Ergo ecosystem. Browse the sections below:
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {standards.map((std) => (
          <Link
            key={std.href}
            href={std.href}
            className="block bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 hover:border-cyan-400 transition-colors duration-150"
          >
            <h2 className="text-xl font-bold text-cyan-300 mb-2">{std.title}</h2>
            <span className="text-cyan-400 hover:underline">Read →</span>
          </Link>
        ))}
      </div>
    </>
  );
} 