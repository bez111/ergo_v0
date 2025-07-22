"use client";

import React from "react";
import { Cpu, Code2, Layers, Wrench, FileText } from "lucide-react";
import Link from "next/link";

const frameworks = [
  {
    title: "AppKit",
    description: "JVM-based SDK for building Ergo dApps in Scala, Java, or Kotlin. Provides full blockchain and transaction access.",
    icon: <Cpu className="w-7 h-7 text-blue-400" />,
    link: "/Docs/developers/tooling/frameworks/appkit"
  },
  {
    title: "Fleet",
    description: "Modern TypeScript/JavaScript library for creating and signing Ergo transactions in web and Node.js apps.",
    icon: <Code2 className="w-7 h-7 text-green-400" />,
    link: "/Docs/developers/tooling/frameworks/fleet"
  },
  {
    title: "Mosaik",
    description: "JSON-based UI framework for building cross-platform dApps, rendered natively in supported wallets.",
    icon: <Layers className="w-7 h-7 text-orange-400" />,
    link: "/Docs/developers/tooling/frameworks/mosaik"
  },
  {
    title: "Headless dApp Framework",
    description: "Rust toolkit for building backend-only (headless) dApps and off-chain logic.",
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    link: "/Docs/developers/tooling/frameworks/headless-dapp-framework"
  },
  {
    title: "RustKit",
    description: "(WIP) High-level Rust library for composing and signing Ergo transactions, built on sigma-rust.",
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    link: "/Docs/developers/tooling/frameworks/rustkit"
  },
  {
    title: "JDE",
    description: "JSON dApp Environment: a lightweight environment for running JSON-based dApps.",
    icon: <FileText className="w-7 h-7 text-cyan-400" />,
    link: "/Docs/developers/tooling/frameworks/jde"
  },
];

export default function FrameworksPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Frameworks
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Explore SDKs, UI frameworks, and developer toolkits for building on Ergo.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {frameworks.map((fw) => (
          <Link
            key={fw.title}
            href={fw.link}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
          >
            <div className="flex items-center gap-3 mb-3">
              {fw.icon}
              <h3 className="text-xl font-bold">{fw.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">{fw.description}</p>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
              Learn more
            </div>
          </Link>
        ))}
      </div>
    </>
  );
} 