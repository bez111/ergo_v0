"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";

export default function JVMPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">JVM</h1>
      <div className="mb-4">
        <Link
          href="/Docs/developers/tooling/pathways/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-6">Develop Ergo dApps and tools using Java, Scala, or Kotlin. The JVM ecosystem is mature and well-supported in the Ergo community. Most developers use <b>AppKit</b> for off-chain logic and integration.</p>
      <h2 className="text-xl font-bold text-cyan-400 mb-2">AppKit</h2>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/appkit"
          className="group bg-neutral-900/50 border border-cyan-700 rounded-xl p-5 flex flex-col items-start hover:bg-cyan-950 transition-colors hover:scale-[1.03] focus:outline-none"
        >
          <h3 className="text-lg font-bold text-cyan-300 mb-1">AppKit</h3>
          <p className="text-gray-300 mb-1">A library for polyglot development of <span className='underline'>Ergo Applications</span>.</p>
          <span className="text-cyan-400 text-xs mt-auto opacity-0 group-hover:opacity-100 transition-opacity self-end">Learn more →</span>
        </Link>
      </div>
      <h2 className="text-xl font-bold text-cyan-400 mb-2">Tools</h2>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://github.com/ergoplatform/ergo-playgrounds"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-neutral-900/50 border border-cyan-700 rounded-xl p-5 flex flex-col items-start hover:bg-cyan-950 transition-colors hover:scale-[1.03] focus:outline-none"
        >
          <h3 className="text-lg font-bold text-cyan-300 mb-1">🔗 ergo-playgrounds</h3>
          <p className="text-gray-300 mb-1">Run <span className='underline'>contracts</span> + <span className='underline'>off-chain code</span> in the browser.</p>
          <span className="text-cyan-400 text-xs mt-auto opacity-0 group-hover:opacity-100 transition-opacity self-end">Learn more →</span>
        </a>
        <a
          href="https://github.com/ergoplatform/ergo-contracts"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-neutral-900/50 border border-cyan-700 rounded-xl p-5 flex flex-col items-start hover:bg-cyan-950 transition-colors hover:scale-[1.03] focus:outline-none"
        >
          <h3 className="text-lg font-bold text-cyan-300 mb-1">🔗 Ergo Contracts</h3>
          <p className="text-gray-300 mb-1">Source code of the Ergo <span className='underline'>smart contracts</span> with <span className='underline'>compilation</span>, <span className='underline'>testing</span>, and formal verification tooling.</p>
          <span className="text-cyan-400 text-xs mt-auto opacity-0 group-hover:opacity-100 transition-opacity self-end">Learn more →</span>
        </a>
      </div>
      <h2 className="text-xl font-bold text-cyan-400 mb-2">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-2 space-y-1">
        <li><a href="https://github.com/ergoplatform/ergo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Reference Node (Scala)</a></li>
        <li><a href="https://github.com/ergoplatform/ergo-appkit" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo AppKit SDK</a></li>
        <li><a href="https://github.com/ergoplatform/ergo-tool" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Tool</a></li>
      </ul>
    </>
  );
} 