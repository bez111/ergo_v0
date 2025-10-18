"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const cards = [
  {
    title: "GetBlok Plasma",
    url: "/docs/developers/tooling/libraries/getblok-plasma",
  },
  {
    title: "Scrypto",
    url: "/docs/developers/tooling/libraries/scrypto",
  },
  {
    title: "EIP12-Types",
    url: "/docs/developers/tooling/libraries/eip12-types",
  },
  {
    title: "SigmaJS",
    url: "/docs/developers/tooling/libraries/sigmajs",
  },
  {
    title: "DeCo",
    url: "/docs/developers/tooling/libraries/deco",
  },
];

type Card = {
  title: string;
  url: string;
};

function CardGrid({ items }: { items: Card[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item: Card) => (
        <Link
          key={item.title}
          href={item.url}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
              <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-orange-400 transition-colors" />
            </h3>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function LibrariesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Libraries & SDKs
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Ergo offers a rich ecosystem of Software Development Kits (SDKs), libraries, and language bindings to help developers build applications on the blockchain. These tools provide abstractions and utilities for interacting with nodes, creating and signing transactions, working with ErgoScript, and more.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Primary SDKs</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>
          🥇 <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">AppKit</a>: Java/Scala SDK for building Ergo apps, suitable for JVM environments and Android development. <span className="text-xs text-gray-400">[Java, Scala]</span>
        </li>
        <li>
          🥇 <a href="https://fleet-sdk.github.io/docs/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Fleet SDK</a>: A pure JS/TS library designed for effortless Ergo transaction creation in web-based dApps and Node.js environments. <a href="https://github.com/fleet-sdk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub Org</a> <span className="text-xs text-gray-400">[JS/TS]</span>
        </li>
        <li>
          🥇 <a href="https://github.com/ergoplatform/sigma-rust/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Sigma-Rust</a>: Rust implementation of ErgoTree types, core primitives, and serialization, forming the basis for many other libraries and bindings. <span className="text-xs text-gray-400">[Rust]</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Core Libraries</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>
          🥇 <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Sigmastate Interpreter</a>: The reference implementation of the ErgoTree interpreter and ErgoScript language. <span className="text-xs text-gray-400">[Scala, ErgoScript]</span>
        </li>
        <li>
          <a href="https://github.com/input-output-hk/scrypto/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scrypto</a>: Cryptographic primitives library used by the Sigmastate Interpreter. <span className="text-xs text-gray-400">[Scala]</span>
        </li>
        <li>
          <a href="https://github.com/ScorexFoundation/scorex-util" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scorex Util</a>: Utility classes for Scorex projects. <span className="text-xs text-gray-400">[Scala]</span>
        </li>
        <li>
          <a href="https://github.com/ScorexFoundation/debox" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Debox</a>: Efficient primitive type Boxes for Scala. <span className="text-xs text-gray-400">[Scala]</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Language Bindings (via Sigma-Rust)</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li>
          🥇 <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/ergo-lib" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">ErgoLib</a>: High-level Rust abstractions built on top of sigma-rust. <a href="https://docs.rs/ergo-lib/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a> <span className="text-xs text-gray-400">[Rust]</span>
        </li>
        <li>
          🥇 <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-wasm" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">ergo-lib-wasm</a>: WASM bindings for JavaScript/TypeScript (Browser & Node.js). <a href="https://www.npmjs.com/package/ergo-lib-wasm-browser" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NPM (Browser)</a> | <a href="https://www.npmjs.com/package/ergo-lib-wasm-nodejs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NPM (NodeJS)</a> <span className="text-xs text-gray-400">[JS/TS, Rust]</span>
        </li>
        <li>
          <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-jni" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-jni</a>: JNI bindings for JVM languages (Java, Scala, Kotlin). <a href="https://docs.rs/ergo-lib-jni/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Docs</a> <span className="text-xs text-gray-400">[Java, Rust]</span>
        </li>
        <li>
          🥇 <a href="https://github.com/ergoplatform/sigma-rust/tree/develop/bindings/ergo-lib-python" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">ergo-lib-python</a>: Python bindings. <a href="https://pypi.org/project/ergo-lib/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">PyPI</a> <span className="text-xs text-gray-400">[Python, Rust]</span>
        </li>
        <li>
          <span className="text-gray-400">*Note: Bindings for C and Go also exist.*</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Specific Library Documentation</h2>
      <CardGrid items={cards} />
    </>
  );
} 