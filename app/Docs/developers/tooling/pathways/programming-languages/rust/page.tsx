"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function RustLanguagesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Rust</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <Terminal className="w-10 h-10 text-cyan-400 mb-4" />
      <p className="text-gray-300 mb-4">Rust is a modern, high-performance language for building secure and efficient Ergo dApps, libraries, and integrations.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Key Libraries</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="/Docs/developers/tooling/pathways/sigma-rust" className="text-cyan-400 hover:underline">sigma-rust</a> — Core Rust implementation of ErgoScript and blockchain primitives.</li>
        <li><a href="/Docs/developers/tooling/pathways/rustkit" className="text-cyan-400 hover:underline">rustkit</a> — SDK for building Ergo applications in Rust.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Examples & Tooling</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><a href="https://github.com/ergoplatform/oracle-core" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Oracle Core</a></li>
        <li><a href="https://github.com/Emurgo/ergo-headless-dapp-framework" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Headless dApp Framework</a></li>
        <li><a href="https://github.com/ergoplatform/ergo-lib-go" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-lib-go</a> (Go bindings for sigma-rust)</li>
      </ul>
    </>
  );
} 