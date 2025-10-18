"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export default function FleetPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Fleet</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4">
        <a href="https://fleet-sdk.github.io/docs/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet</a> lets you easily create Ergo transactions with a pure JS library.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>🪄 Easy to use</li>
        <li>🪶 Lightweight: <a href="https://bundlephobia.com/package/@fleet-sdk/core" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">~12kB minified + gziped</a></li>
        <li>🦾 Powerful: easily create complex transactions with a fluent API</li>
        <li>🧪 100% code coverage</li>
        <li>🌲 Tree-shakeable</li>
      </ul>
      <p className="text-gray-300 mb-4">
        For common usage patterns and examples, see the <a href="fleet-sdk-recipes.md" className="text-cyan-400 hover:underline">Fleet SDK Recipes</a>.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Examples</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>🥇 <a href="https://github.com/fleet-sdk/fleet-by-example" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet Examples</a>: Repository showcasing various Fleet SDK usage patterns. <span className="text-xs text-gray-400 ml-1">[TS]</span></li>
      </ul>
      <div className="bg-neutral-900/50 border border-cyan-400/30 rounded-xl p-4 flex items-start gap-3 mb-8">
        <Info className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
        <div>
          <span className="font-semibold text-cyan-300">DeepWiki Documentation</span><br />
          For an alternative and potentially more detailed documentation source generated from the repository, explore the {" "}
          <a href="https://deepwiki.com/fleet-sdk/fleet/1-overview" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Fleet SDK on DeepWiki</a>
        </div>
      </div>
    </>
  );
} 