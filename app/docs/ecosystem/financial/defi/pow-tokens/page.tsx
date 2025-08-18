import React from "react";
import { Coins, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PowTokensPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Proof-of-Work Backed Tokens
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Unique tokens on Ergo that require computational work to mint, enabling new forms of scarcity, spam resistance, and on-chain innovation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/ecosystem/financial/defi"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to DeFi
          </Link>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Coins className="w-6 h-6 text-cyan-400" /> What are Proof-of-Work Backed Tokens?
        </h2>
        <p className="text-gray-300 mb-4">
          Ergo allows the issuance of one token per transaction, where the token id must match the id of the box of the first input.<br/><br/>
          When a box is generated, the id of the future token is known. This id is computed through hashing.<br/><br/>
          By iterating over a register (for example, R4) used as a nonce, a token with specific id properties can be created. This could include ids starting with a certain number of zeroes. Therefore, some computational work may be required to generate such a token, similar to the VanityGen-address concept in Bitcoin, but applied to tokens.<br/><br/>
          Certain contracts may only accept these Proof-of-Work backed Non-Fungible Tokens (NFTs).<br/><br/>
          While specific use-cases have not been fully explored, potential applications could include spam filtering.
        </p>
        <a
          href="https://www.ergoforum.org/t/proof-of-work-backed-tokens/224"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-400 font-semibold text-base hover:text-cyan-300 transition-colors duration-150 focus:outline-none focus:underline"
        >
          More details on ErgoForum <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </>
  );
} 