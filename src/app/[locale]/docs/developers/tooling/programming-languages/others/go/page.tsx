
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function GoPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Ergo Platform and Go</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/programming-languages/others"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Go developers can interact with the Ergo blockchain primarily through bindings to the core <Link href="/docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">sigma-rust library</Link>. See the main sigma-rust bindings list for details.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        The resources for integrating Ergo using the Go programming language are currently limited compared to some other languages. However, there are key projects available:
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ergo-Golang</h2>
      <p className="text-gray-300 mb-4 max-w-2xl">
        The {" "}
        <a href="https://github.com/azhiganov/ergo-golang" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-golang</a> project is a promising tool for integrating with Ergo. At present, the project is in its initial stages and may be considered as under development. This implies that while it offers basic functionalities to interact with the Ergo Blockchain, it may not have extensive features and may not be fully tested or optimized.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        As an open-source project, <span className="text-cyan-400">ergo-golang</span> offers a fantastic opportunity for Go developers to contribute to its development by providing enhancements, fixes, and new features.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        Please note that if you come across any issues or require more detailed instructions, you can always connect with the Ergo community. The {" "}
        <a href="https://discord.gg/kj7s7nb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#development Discord channel</a> is an excellent platform to receive support from seasoned Ergo developers and community members.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ergo-lib-go</h2>
      <p className="text-gray-300 mb-4 max-w-2xl">
        <a href="https://github.com/sigmaspace-io/ergo-lib-go/tree/main" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-lib-go</a> is a Go wrapper around C bindings for ErgoLib from sigma-rust. This library provides Go developers with the ability to interact with the Ergo blockchain using the robust functionalities of ErgoLib, which is originally written in Rust.
      </p>
    </>
  );
} 