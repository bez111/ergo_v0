"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function DappConnectorPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        dApp Connector
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/payments"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>

      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        <Link href="/docs/developers/tooling/fleet" className="text-cyan-400 hover:underline">Fleet</Link> lets you easily create Ergo transactions with a pure JS library. There is also <a href="https://github.com/nightowlcasino/dApp-connector-react-package" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NightOwl dApp Connector</a> React package and accompanying <a href="https://twitter.com/NightOwlCasino/status/1529452399475179520" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">video tutorial</a>.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
        <li>
          <a href="https://www.dappstep.com/docs/tutorial-dapp-connector/message-signing-authentication" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Message signing and user authentication with Nautilus wallet and sigma-rust
          </a>
        </li>
        <li>
          <a href="https://github.com/Emurgo/yoroi-frontend/tree/develop/packages/yoroi-connector/example-ergo" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            Yoroi's dapp connector example code
          </a>
        </li>
        <li>
          Nautilus and SAFEW implements the same API as Yoroi (<a href="https://github.com/ergoplatform/eips/pull/23/files#diff-cb3f835ea389f22c2f074a6acd820d178e44c82df8898e8ff36aea7f762b6710" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">EIP-12</a>)
        </li>
      </ul>
    </>
  );
} 