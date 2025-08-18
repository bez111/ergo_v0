"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KotlinPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Kotlin</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/programming-languages/jvm"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Given that Kotlin is predominantly used as a <Link href="/docs/developers/tooling/programming-languages/jvm" className="text-cyan-400 hover:underline">JVM</Link> language, please refer to our <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit Guide</Link> for additional resources.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        We also offer <Link href="/docs/developers/tooling/mosaik" className="text-cyan-400 hover:underline">Mosaik</Link>, which provides a Kotlin DSL User Interface Tutorial to help you understand and create <Link href="/docs/developers" className="text-cyan-400 hover:underline">user interfaces</Link> effectively. (See the full <Link href="/docs/developers/tooling/mosaik" className="text-cyan-400 hover:underline">Mosaik Intro</Link>).
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        For a practical demonstration of how to utilize <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit</Link> in Kotlin, consider reviewing the {" "}
        <a href="https://github.com/ergoplatform/ergo-wallet-app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Wallet app</a>.
        This application, developed in Kotlin, provides a valuable <Link href="/docs/ecosystem/applications" className="text-cyan-400 hover:underline">case study</Link> on effective use of AppKit.
      </p>
    </>
  );
} 