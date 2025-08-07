"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function RustKitPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Ergo RustKit</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4"><b>Rustkit</b></p>
      <blockquote className="border-l-4 border-cyan-400 pl-4 text-gray-400 mb-6">A SDK for building applications on the Ergo blockchain. Our goal is to create a library that creates a simple and easy to use interface for developers to build applications. Currently, the library is in the early stages of development and is not recommended for production use.</blockquote>
      <a href="https://crates.io/crates/ergo-rustkit" className="text-cyan-400 hover:underline mb-6 inline-block" target="_blank" rel="noopener noreferrer">crates.io/crates/ergo-rustkit</a>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Introduction</h2>
      <p className="text-gray-300 mb-4">A SDK for building applications on the Ergo blockchain. Our goal is to create a library that creates a simple and easy to use interface for developers to build applications. Currently, the library is in the early stages of development and is not recommended for production use.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Setup</h2>
      <p className="text-gray-300 mb-4">The Ergo RustKit is published on crates.io. The crate can be found here.</p>
      <CodeBlock language="typescript">{`ergo-rustkit = "0.5.0"`}</CodeBlock>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Examples</h2>
      <p className="text-gray-300 mb-4">A directory with multiple examples can be found <a href="https://github.com/ergo-rust/rust-ergo/tree/main/examples" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">here</a>.<br/>Examples will be updated as the library is updated.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Contributing</h2>
      <p className="text-gray-300 mb-4">Rust-Ergo is always open for contributions! If you would like to contribute, please open a PR and we will review it as soon as possible.</p>
    </>
  );
} 