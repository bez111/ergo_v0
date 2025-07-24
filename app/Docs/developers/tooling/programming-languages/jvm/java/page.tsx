"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JavaPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Java Development with Ergo</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/programming-languages/jvm"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        The <Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">Ergo AppKit</Link> is an essential tool for Java developers who are keen on creating applications using Ergo. It utilizes the capabilities of GraalVM, offering a broad spectrum of <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">features</Link> to <Link href="/Docs/developers/getting-started" className="text-cyan-400 hover:underline">streamline the development process</Link>.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        The <Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">Ergo AppKit</Link> acts as a compact interface to the core elements of the <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">ErgoScript interpreter</Link> and <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Ergo protocol implementations</Link>, both of which are developed in <Link href="/Docs/developers/tooling/programming-languages/jvm/scala" className="text-cyan-400 hover:underline">Scala</Link>. This setup enables Java developers to engage with the Ergo's <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">foundational infrastructure</Link> without the necessity to explore the Scala codebase. Alternatively, direct interaction with the core <Link href="/Docs/developers/tooling/programming-languages/rust" className="text-cyan-400 hover:underline">Rust implementation</Link> is possible via <Link href="/Docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">Java (JNI) bindings for sigma-rust</Link>.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        With the help of <Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">Ergo AppKit</Link>, Java developers can concentrate on crafting innovative <Link href="/Docs/ecosystem/applications" className="text-cyan-400 hover:underline">applications</Link> using Ergo, leveraging the unique <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">features</Link> and robust <Link href="/Docs/developers/infrastructure" className="text-cyan-400 hover:underline">blockchain infrastructure</Link> that Ergo provides.
      </p>
    </>
  );
} 