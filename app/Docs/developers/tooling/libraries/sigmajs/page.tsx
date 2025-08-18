"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function SigmaJSPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Sigma JS
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/libraries"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-6">
        <div className="text-orange-400 font-semibold mb-2">⚠️ Development Status</div>
        <div className="text-gray-300">
          <b>Sigma JS is currently under development and not yet ready for production use.</b>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Introduction</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Sigma JS, in conjunction with <Link href="/docs/developers/tooling/fleet" className="text-cyan-400 hover:underline">Fleet</Link>, aims to offer a user experience for Javascript developers that is comparable to what <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit</Link> provides for JVM developers.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Here are some resources to help you understand and follow the development of Sigma JS:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
        <li>
          <a href="https://www.npmjs.com/package/sigmastate-js" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">JS module on npmjs</a>
          <ul className="list-disc pl-6 mt-1 text-sm text-gray-400">
            <li>This module is the result of the Scala.js compiler working on <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/pull/833" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this branch</a></li>
            <li><a href="https://github.com/anon-br/sigmajs-crypto-facade" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">sigmajs-crypto-facade</a> is a project that aims to replace BouncyCastle's elliptic curve dependencies in the Sigma.JS compilation process.</li>
          </ul>
        </li>
      </ul>
    </>
  );
} 