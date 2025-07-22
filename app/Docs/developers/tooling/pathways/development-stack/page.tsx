"use client";

import React from "react";
import Link from "next/link";
import { Server, Globe, Monitor, Smartphone, Key, User, Wrench, BookOpen, Rocket, Package } from "lucide-react";

const justGettingStartedCards = [
  {
    title: "Introduction",
    content: "Overview of Ergo development and ecosystem.",
    icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    url: "/Docs/developers/tooling/pathways/introduction"
  },
  {
    title: "Beginner",
    content: "Just testing the waters? Not sure where to start?",
    icon: <User className="w-10 h-10 text-cyan-400" />,
    url: "/Docs/developers/tooling/pathways/beginner"
  },
  {
    title: "Starter Tutorial",
    content: "Step-by-step guide for your first Ergo dApp.",
    icon: <Rocket className="w-10 h-10 text-orange-400" />,
    url: "/Docs/developers/tooling/pathways/starter-tutorial"
  },
  {
    title: "Basics Tutorial",
    content: "Generate keys and address, send and receive payments.",
    icon: <Key className="w-10 h-10 text-yellow-400" />,
    url: "/Docs/developers/tooling/pathways/basics-tutorial"
  },
];

const frameworksToolsCards = [
  {
    title: "Frameworks",
    content: "Jump straight to an overview of all frameworks",
    icon: <Wrench className="w-10 h-10 text-orange-400" />,
    url: "/Docs/developers/tooling/pathways/frameworks"
  },
  {
    title: "Bundled dApps",
    content: "Distribute your dApp as a bundled package for users.",
    icon: <Package className="w-10 h-10 text-yellow-400" />,
    url: "/Docs/developers/tooling/pathways/bundled-dapps"
  },
];

const deployCards = [
  {
    title: "Browser",
    content: "Interact with users in browser",
    icon: <Globe className="w-10 h-10 text-orange-400" />,
    url: "/Docs/developers/tooling/pathways/browser"
  },
  {
    title: "Desktop",
    content: "Create a local application.",
    icon: <Monitor className="w-10 h-10 text-blue-400" />,
    url: "/Docs/developers/tooling/pathways/desktop"
  },
  {
    title: "Mobile",
    content: "Creating a mobile app for Android or iOS.",
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    url: "/Docs/developers/tooling/pathways/mobile"
  },
  {
    title: "Server",
    content: "Interact with the blockchain locally or via a remote server.",
    icon: <Server className="w-10 h-10 text-cyan-400" />,
    url: "/Docs/developers/tooling/pathways/server"
  },
];

function Card({ title, content, icon, url }: { title: string; content: string; icon: React.ReactNode; url: string }) {
  return (
    <Link
      href={url}
      className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer group relative"
    >
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">{content}</p>
      <div className="font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 text-cyan-400 hover:underline">Learn more</div>
    </Link>
  );
}

export default function DevelopmentStackPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Developers
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        There are many tools, libraries, SDKs, frameworks and utilities developers can use to interact with the blockchain, build their applications, and display them to users.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Just Getting Started</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {justGettingStartedCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Frameworks & Tools</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {frameworksToolsCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">Where You’ll Deploy</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {deployCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </>
  );
} 