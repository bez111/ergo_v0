"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function EIP12TypesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        EIP12-Types: Enhancing Ergo Blockchain's dApp Connector Protocol with Static Typing
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
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        <a href="https://github.com/capt-nemo429/eip12-types" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">EIP12-Types</a> is a specialized library designed to introduce static typing to the dApp Connector Protocol on the Ergo Blockchain.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        This library is instrumental in improving the developer experience on the Ergo platform. It ensures type safety, enabling developers to take advantage of static typing benefits such as early error detection, performance optimization, and improved code readability and maintainability.
      </div>
      <div className="text-gray-300 mb-8 max-w-2xl">
        For detailed instructions on how to integrate EIP12-Types into your Ergo dApp development process, please visit the <a href="https://github.com/capt-nemo429/eip12-types" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">official GitHub repository</a>.
      </div>
    </>
  );
} 