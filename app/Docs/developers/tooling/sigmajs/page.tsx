"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Code } from "lucide-react";

export default function SigmaJSPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Sigma JS</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
        <span className="text-yellow-400 font-semibold">Sigma JS is currently under development and not yet ready for production use.</span>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Introduction</h2>
      <p className="text-gray-300 mb-4">Sigma JS, in conjunction with <Link href="/Docs/developers/tooling/pathways/fleet" className="text-cyan-400 hover:underline">Fleet</Link>, aims to offer a user experience for Javascript developers that is comparable to what <Link href="/Docs/developers/tooling/pathways/appkit" className="text-cyan-400 hover:underline">AppKit</Link> provides for JVM developers.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li><a href="https://www.npmjs.com/package/sigmastate-js" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">JS module on npmjs</a> — This module is the result of the Scala.js compiler working on <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/833" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">this branch</a>.</li>
        <li><a href="https://github.com/anon-br/sigmajs-crypto-facade" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">sigmajs-crypto-facade</a> — A project that aims to replace BouncyCastle's elliptic curve dependencies in the Sigma.JS compilation process.</li>
      </ul>
    </>
  );
} 