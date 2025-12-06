"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, Play, Blocks, Cpu } from "lucide-react";

const playgrounds = [
  {
    title: "Scastie",
    icon: Code,
    content: "Online Scala playground with ErgoScript compilation support.",
    link: "/docs/developers/tooling/playgrounds/scastie"
  },
  {
    title: "P2S Playground",
    icon: Play,
    content: "Interactive environment for testing pay-to-script ErgoScript contracts.",
    link: "/docs/developers/tooling/playgrounds/p2s-playground"
  },
  {
    title: "Kiosk",
    icon: Blocks,
    content: "Development and testing environment for Ergo smart contracts.",
    link: "/docs/developers/tooling/playgrounds/kiosk"
  },
  {
    title: "ErgoPuppet",
    icon: Cpu,
    content: "Puppet-based testing framework for Ergo blockchain development.",
    link: "/docs/developers/tooling/playgrounds/ergopuppet"
  }
];

function CardGrid({ items }: { items: typeof playgrounds }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.title}
            href={item.link}
            className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <IconComponent className="w-6 h-6 text-cyan-400" />
                {item.title}
              </h3>
              <div className="text-gray-300 leading-relaxed mb-2">{item.content}</div>
            </div>
            <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
              Learn more
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default function PlaygroundsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Playgrounds
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300">
          <p className="mb-6">
            Interactive development environments and playgrounds for experimenting with ErgoScript and Ergo blockchain development.
          </p>
        </div>

        <CardGrid items={playgrounds} />
      </div>
    </>
  );
} 