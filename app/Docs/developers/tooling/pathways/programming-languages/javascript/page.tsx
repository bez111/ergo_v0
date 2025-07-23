"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";

export default function JavaScriptLanguagesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">JavaScript / TypeScript</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <Globe className="w-10 h-10 text-cyan-400 mb-4" />
      <p className="text-gray-300 mb-4">Build Ergo dApps and tools for the web, Node.js, and cross-platform environments using JavaScript and TypeScript.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Key Libraries</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-wasm</a> — WASM bindings for sigma-rust, usable in browser and Node.js.</li>
        <li><a href="https://github.com/ergolabs/ergo-sdk-js" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-sdk-js</a> — TypeScript SDK for building dApps and integrations.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Examples & Tooling</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/create-transaction-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Create transaction demo</a></li>
        <li><a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm/examples/address-generation-demo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Address generation demo</a></li>
        <li><a href="https://github.com/ergoplatform/ergo-wallet-extensions" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Wallet Extensions</a></li>
      </ul>
    </>
  );
} 