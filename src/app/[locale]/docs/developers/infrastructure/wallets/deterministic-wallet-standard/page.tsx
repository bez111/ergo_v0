"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { CodeBlock } from "@/components/ui";

export default function DeterministicWalletStandardPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        EIP-0003: Deterministic Wallet Standard
      </h1>
      <Link
        href="/docs/developers/infrastructure/wallets/standards"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Standards
      </Link>
      <blockquote className="border-l-4 border-cyan-600 pl-4 text-gray-300 italic mb-6">
        🔗 From <a href="https://github.com/ergoplatform/eips/blob/master/eip-0003.md" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0003</a>
      </blockquote>

      <h2 className="text-2xl font-bold mb-4 mt-8">Motivation</h2>
      <p className="text-gray-300 mb-4">
        <a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BIP-0044</a> defines a logical hierarchy for deterministic wallets. BIP-0044 is a common standard that is used directly (or used as inspiration) by countless projects in the cryptocurrency sphere.
      </p>
      <p className="text-gray-300 mb-4">
        Such a standard allows end users to move between different wallet software trivially, thus setting a framework for a more cohesive ecosystem to grow.
      </p>
      <p className="text-gray-300 mb-4">
        The standard has five levels part of its path:
      </p>
      <CodeBlock language="typescript">{`m / 44' / coin_type' / account' / change / address_index`}</CodeBlock>

      <p className="text-gray-300 mb-4">
        This EIP attempts to define a specific <code>coin_type</code> for the Ergo ecosystem and a policy for how wallets use the <code>change</code> level.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Coin Type</h2>
      <p className="text-gray-300 mb-4">
        Registered <b>coin_type</b>s can be found in <a href="https://github.com/satoshilabs/slips/blob/master/slip-0044.md" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">SLIP-0044</a>.
      </p>
      <p className="text-gray-300 mb-4">
        We will be using the word <b>ergo</b> summed based on the numerical values of the ASCII characters for the <b>coin_type</b>. As shown below, this means that our <b>coin_type</b> is <code>429</code>.
      </p>
      <CodeBlock language="typescript">{`101 + 114 + 103 + 111 = 429`}</CodeBlock>
      <p className="text-gray-300 mb-4">
        Thus our path will look as such:
      </p>
      <CodeBlock language="typescript">{`m / 44' / 429' / account' / change / address_index`}</CodeBlock>
      <p className="text-gray-300 mb-4">
        And the first default key pair for an Ergo wallet will be:
      </p>
      <CodeBlock language="typescript">{`m / 44' / 429' / 0' / 0 / 0`}</CodeBlock>

      <h2 className="text-2xl font-bold mb-4 mt-8">Change</h2>
      <p className="text-gray-300 mb-4">
        In BIP-44 the constant 0 is used for the external addresses and constant 1 for internal addresses (aka change addresses).
      </p>
      <p className="text-gray-300 mb-4">
        For EIP-3, we instead do not use constant 1 at all. Thus we do not support internal/change addresses, but only external addresses.
      </p>
      <p className="text-gray-300 mb-4">
        As such all wallets supporting EIP-3 should have any change within a transaction go back to the address using constant 0.
      </p>
      <p className="text-gray-300 mb-4">
        This decision was made to simplify the experience for end users and solidify a cohesive standard for wallets to target in the Ergo ecosystem. A full blown privacy-preserving mixer is already available within the ecosystem, ErgoMix, and thus the pseudo-anonymity provided by internal addresses is not particularly vital.
      </p>
      <p className="text-gray-300 mb-4">
        That said, in the future new wallets are more than welcome to create a new EIP for wallets which may wish to support internal addresses as well as an alternate standard (if valuable use cases arise).
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Export and import of public keys</h2>
      <p className="text-gray-300 mb-4">
        For showing wallets in another wallet application as read-only wallets, it is possible to export the extended public key. This way, all addresses can be derived while signing is not possible. For this to work, the derived key on path <code>m / 44' / 429' / 0' / 0</code> needs to be used for export and import.
      </p>
      <p className="text-gray-300 mb-4">
        The <a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#Serialization_format" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">BIP-0032</a> defines a serialization format for keys that we can use here to export and import the xpubkey.
      </p>
      <p className="text-gray-300 mb-4">
        Extended public keys are serialized as follows:
      </p>
      <CodeBlock language="typescript">{`4 byte: version bytes (mainnet: 0x0488B21E; testnet: 0x043587CF)
1 byte: 4 (depth for our path m/44'/429'/0'/0)
4 bytes: the fingerprint of the parent's key (or 0x00000000 can be used as we don't validate on import)
4 bytes: 0x00000000 (child number)
32 bytes: the chain code
33 bytes: the public key key data`}</CodeBlock>
      <p className="text-gray-300 mb-4">
        BIP-0032 leaves it open how this byte array should be encoded and suggests to use Base58 with a checksum. To not confuse Ergo xpubkeys with Bitcoin xpubkeys, we can use hex encoding instead.
      </p>
    </>
  );
} 