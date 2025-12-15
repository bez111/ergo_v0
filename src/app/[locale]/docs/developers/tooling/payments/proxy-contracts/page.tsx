"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProxyContractsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Proxy Contracts
      </h1>
      <div className="mb-6 flex gap-4">
        <Link
          href="/docs/developers/tooling/payments"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <Link
          href="/docs/developers/tooling/payments/assembler"
          className="inline-flex items-center px-5 py-2 bg-orange-400 rounded-xl font-semibold text-black hover:bg-orange-500 transition-transform hover:scale-105"
        >
          Assembler
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Learn about proxy contracts, a smart contract pattern used on Ergo for secure dApp interactions.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Proxy Contracts</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Proxy contracts are a specific <Link href="/docs/developers/tooling/smart-contracts-overview" className="text-cyan-400 hover:underline">smart contract pattern</Link> used on Ergo. They act as intermediaries, allowing users to interact with decentralized applications (dApps) in a controlled and secure manner, especially in scenarios where direct wallet-dApp communication might be complex or limited.
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Origins and Purpose</h3>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The concept gained prominence with tools like the <a href="https://github.com/anon-real/ergo-assembler" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Assembler</a>. This enabled early dApps such as <a href="https://ergoauctions.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Auction House</a>, <a href="https://ergoutils.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoUtils</a>, and the <a href="https://sigmausd.io/#/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SigmaUSD web interface</a> to function effectively even before the widespread availability of wallet connectors similar to Ethereum's MetaMask.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Proxy contracts essentially provide a secure "spending script" that users can send funds to. This script then interacts with the target dApp based on predefined rules, ensuring the user's funds are only used as intended for that specific dApp interaction.
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Evolution and Security</h3>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Over time, the design of proxy contracts has evolved to address potential vulnerabilities discovered through real-world use, particularly highlighted by incidents involving dApps like <a href="https://sigmausd.io/#/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SigmaUSD</a>.
      </div>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Key Design Principles</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        When designing or interacting with proxy contracts, developers and users should prioritize security:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><b>Fund Safety:</b> The contract logic must rigorously prevent the dApp developer, the proxy contract creator, or any third party from misappropriating the user's funds. The contract should only allow spending according to the dApp's intended logic and the user's explicit action.</li>
        <li><b>dApp Integrity:</b> The proxy contract should not introduce new attack vectors. It must protect against manipulation that could compromise the underlying dApp's state or logic (e.g., preventing replay attacks or unexpected state changes).</li>
      </ul>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Further Information</h3>
      <div className="text-gray-300 mb-8 max-w-2xl">
        For a detailed technical specification and discussion on proxy contracts, refer to the official Ergo Improvement Proposal:
        <br />
        <a href="https://github.com/ergoplatform/eips/blob/master/eip-0017.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
          EIP-0017: Proxy Contracts <ExternalLink className="inline w-4 h-4 ml-1 align-text-bottom" />
        </a>
      </div>
    </>
  );
} 