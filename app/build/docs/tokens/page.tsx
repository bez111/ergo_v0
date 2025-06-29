"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Package, Coins, Code, CheckCircle, AlertTriangle, ChevronRight, Image as LucideImage } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TokensPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Tokens & Assets on Ergo
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Understand how native tokens and Non-Fungible Tokens (NFTs) work on the Ergo blockchain, and learn how to create and manage them.
        </p>
      </div>

      {/* Native Tokens Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Coins className="w-6 h-6 text-orange-400" /> Native Tokens: Fungible Assets
        </h2>
        <p className="text-gray-300 mb-6">
          Unlike many other blockchains where tokens are implemented as smart contracts, Ergo supports native tokens directly at the protocol level. This provides enhanced security, efficiency, and simplifies token management.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-orange-400">Key Characteristics:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>First-Class Citizens:</strong> Tokens are treated with the same importance as ERG, meaning they are handled directly by the protocol without the need for complex smart contracts.
            </li>
            <li>
              <strong>Enhanced Security:</strong> Reduced attack surface compared to smart-contract-based tokens, as their logic is handled by the secure underlying protocol.
            </li>
            <li>
              <strong>Efficiency:</strong> Lower transaction fees and faster processing for token transfers.
            </li>
            <li>
              <strong>UTXO-Based:</strong> Tokens reside within Ergo boxes alongside ERG, inheriting all the security and composability benefits of the eUTXO model.
            </li>
          </ul>
        </div>
      </section>

      {/* NFTs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <LucideImage className="w-6 h-6 text-cyan-400" /> Non-Fungible Tokens (NFTs)
        </h2>
        <p className="text-gray-300 mb-6">
          NFTs on Ergo are also native assets, but with a unique identifier that makes each token distinct. This allows for the representation of unique digital items, art, collectibles, and more.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-cyan-400">Key Characteristics:</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>Uniqueness:</strong> Each NFT has a unique Token ID, ensuring its individuality.
            </li>
            <li>
              <strong>Metadata:</strong> NFTs can carry rich metadata (e.g., image URLs, descriptions, properties) stored in the registers of the Ergo box they reside in.
            </li>
            <li>
              <strong>Programmable:</strong> Like other Ergo boxes, NFTs can be protected by ErgoScript, allowing for complex ownership rules, royalties, and other custom logic.
            </li>
          </ul>
        </div>
      </section>

      {/* Creating Tokens Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <Code className="w-6 h-6 text-purple-400" /> Creating & Managing Tokens
        </h2>
        <p className="text-gray-300 mb-6">
          Creating a new token on Ergo is straightforward and can be done using various SDKs. The process involves creating a transaction that mints the new token.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-purple-400">Minting a New Token (Fleet SDK Example):</h3>
          <p className="text-gray-300 text-sm mb-3">
            To mint a new token, you create a transaction where the first output box contains the token definition. The `tokenId` of the newly minted token will be the `boxId` of the first input box of the minting transaction.
          </p>
          <pre className="bg-black text-purple-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`import { ErgoAddress, SByte, SColl, SConstant, SLong, TransactionBuilder } from '@fleet-sdk/core';
import { hexToBytes } from '@fleet-sdk/common';

// ... (Node URL, API Key, Sender Address, Recipient Address setup)

const TOKEN_NAME = 'MyNewToken';
const TOKEN_DESCRIPTION = 'A token created on Ergo';
const TOKEN_DECIMALS = 2; // For 2 decimal places
const TOKEN_AMOUNT = 1000_00n; // 1000 tokens with 2 decimals (1000 * 10^2)

async function mintToken() {
  // ... (Get UTXOs from sender address)

  const outputBox = {
    value: 1000000n, // Minimum ERG value for a box
    ergoTree: ErgoAddress.fromBase58(RECIPIENT_ADDRESS).ergoTree,
    assets: [
      {
        tokenId: '', // This will be filled automatically by the SDK for the first output
        amount: TOKEN_AMOUNT,
      },
    ],
    additionalRegisters: {
      R4: SConstant(SColl(SByte, hexToBytes(Buffer.from(TOKEN_NAME).toString('hex')))),
      R5: SConstant(SColl(SByte, hexToBytes(Buffer.from(TOKEN_DESCRIPTION).toString('hex')))),
      R6: SConstant(SLong(TOKEN_DECIMALS)),
    },
  };

  const unsignedTx = new TransactionBuilder()
    .from(inputBoxes) // Input boxes from your wallet
    .to(outputBox) // Output box with the new token
    .sendChangeTo(SENDER_ADDRESS)
    .payFee(1000000n)
    .build();

  // ... (Sign and send transaction)
}

mintToken();
`}</pre>
          <h3 className="font-semibold mt-6 mb-3 text-purple-400">Transferring Tokens:</h3>
          <p className="text-gray-300 text-sm mb-3">
            Transferring tokens is similar to transferring ERG. You consume a box containing the tokens and create a new box with the tokens sent to the recipient.
          </p>
          <pre className="bg-black text-purple-300 p-3 rounded-lg overflow-x-auto font-mono text-sm">{`import { ErgoAddress, TransactionBuilder } from '@fleet-sdk/core';

// ... (Node URL, API Key, Sender Address, Recipient Address setup)

const TOKEN_ID_TO_SEND = 'your_token_id'; // Replace with the actual token ID
const AMOUNT_TO_SEND = 500n; // Amount of tokens to send

async function sendToken() {
  // ... (Get UTXOs from sender address, ensuring they contain TOKEN_ID_TO_SEND)

  const recipientBox = {
    value: 1000000n, // Minimum ERG value
    ergoTree: ErgoAddress.fromBase58(RECIPIENT_ADDRESS).ergoTree,
    assets: [
      {
        tokenId: TOKEN_ID_TO_SEND,
        amount: AMOUNT_TO_SEND,
      },
    ],
    additionalRegisters: {},
  };

  const unsignedTx = new TransactionBuilder()
    .from(inputBoxes) // Input boxes containing the token
    .to(recipientBox) // Output box for the recipient
    .sendChangeTo(SENDER_ADDRESS)
    .payFee(1000000n)
    .build();

  // ... (Sign and send transaction)
}

sendToken();
`}</pre>
        </div>
      </section>

      {/* Token Standards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
          <CheckCircle className="w-6 h-6 text-green-400" /> Token Standards & Best Practices
        </h2>
        <p className="text-gray-300 mb-6">
          While Ergo supports native tokens, adhering to community-accepted standards and best practices ensures interoperability and wider adoption.
        </p>
        <div className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6">
          <h3 className="font-semibold mb-3 text-green-400">EIPs (Ergo Improvement Proposals):</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <strong>EIP-4 (Token Standard):</strong> Defines the basic structure and properties of fungible tokens on Ergo.
            </li>
            <li>
              <strong>EIP-14 (NFT Standard):</strong> Specifies how Non-Fungible Tokens should be structured, including metadata and unique identifiers.
            </li>
            <li>
              <strong>EIP-21 (Token Burning):</strong> Describes the process for permanently removing tokens from circulation.
            </li>
          </ul>
          <div className="mt-4 text-sm text-orange-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Always refer to the latest EIPs for the most up-to-date standards and best practices.
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/20 rounded-xl">
        <h3 className="text-xl font-bold mb-4 text-white">Next Steps: Explore Ergo's Ecosystem</h3>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div>
            <h4 className="font-semibold mb-2 text-cyan-400">Discover Ergo's DeFi Landscape</h4>
            <p className="text-gray-400 text-sm mb-3">
              Learn about decentralized exchanges, lending platforms, and other financial applications built on Ergo.
            </p>
            <Link
              href="/use/defi"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              Ergo DeFi Guide <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}