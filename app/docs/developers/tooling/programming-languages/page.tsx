"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Code, Cpu, Terminal, Globe, Layers } from "lucide-react";

const cards = [
  {
    title: "JVM",
    icon: <Layers className="w-8 h-8 text-cyan-400 mb-2" />,
    description: "Scala, Java, Kotlin — build on the JVM for full power and compatibility.",
    url: "/Docs/developers/tooling/programming-languages/jvm"
  },
  {
    title: "JavaScript",
    icon: <Globe className="w-8 h-8 text-cyan-400 mb-2" />,
    description: "Use JavaScript and TypeScript for web, Node.js, and cross-platform dApps.",
    url: "/Docs/developers/tooling/programming-languages/javascript"
  },
  {
    title: "Rust",
    icon: <Terminal className="w-8 h-8 text-cyan-400 mb-2" />,
    description: "Rust for high-performance, safety, and cross-platform development.",
    url: "/Docs/developers/tooling/programming-languages/rust"
  },
  {
    title: "Others",
    icon: <Cpu className="w-8 h-8 text-cyan-400 mb-2" />,
    description: "Python, C#, Go — leverage a variety of languages for integration and tooling.",
    url: "/Docs/developers/tooling/programming-languages/others"
  }
];

export default function ProgrammingLanguagesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Programming Languages</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map(card => (
          <Link
            key={card.title}
            href={card.url}
            className="group bg-neutral-900/50 border border-cyan-700 rounded-xl p-6 flex flex-col items-start hover:bg-cyan-950 transition-colors hover:scale-[1.03] focus:outline-none"
          >
            {card.icon}
            <h2 className="text-xl font-bold text-cyan-300 mb-2">{card.title}</h2>
            <p className="text-gray-300 mb-2">{card.description}</p>
            <span className="text-cyan-400 text-sm mt-auto opacity-0 group-hover:opacity-100 transition-opacity self-end">Learn more →</span>
          </Link>
        ))}
      </div>
    </>
  );
} 