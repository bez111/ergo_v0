import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function ExplorerPage() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Globe className="w-6 h-6 text-orange-400" /> Ergo Explorer
      </h1>
      <p className="text-gray-300 mb-2">
        The Ergo Explorer is a tool that serves as an interface with the Ergo blockchain. It helps users explore and monitor the activities happening on the Ergo blockchain.
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-3">
        <li><a href="https://explorer.ergoplatform.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">explorer.ergoplatform.com</a></li>
        <li><a href="https://ergexplorer.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergexplorer.com</a></li>
        <li><a href="https://sigmaspace.io/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">sigmaspace.io</a></li>
      </ul>
      <p className="text-gray-400">
        For mirrors, dev tooling and more information please see {" "}
        <Link href="/Docs/developers/infrastructure/explorer" className="text-cyan-400 hover:underline">this page</Link>.
      </p>
    </div>
  );
} 