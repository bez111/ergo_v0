"use client";

import React from "react";
import { Zap, Code, Lock, ArrowRight, ExternalLink, Users } from "lucide-react";

export default function AnalogErgoPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Analog Ergo
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Analog Ergo is a cross-chain peer-to-peer marketplace project using cryptographic primitives as the basis for private, fungible, and decentralized trading—without intermediaries.
      </p>

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
          <Zap className="w-5 h-5 text-cyan-300" /> Overview
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            This project aims to use cryptographic primitives (well established, low level algorithms) as the basis for a cross-chain peer-to-peer marketplace. It will enable users to set and agree to listing prices and other parameters in a private and fungible manner, without the involvement of intermediaries.
          </p>
        </div>
      </div>

      {/* ScalarLock */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-300">
          <Lock className="w-5 h-5 text-blue-300" /> ScalarLock
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 mb-4">
          <p className="text-gray-300 text-base mb-4">
            Successfully tested a Scalar Lock contract. This allows you to lock funds to a scalar value (e.g., a random 256bit number) that you can test by comparing it with an Elliptic curve multiplication operation against the Secp256k1 Generator. This is a key component for atomic swaps and cryptographic signature verification.
          </p>
          <pre className="bg-neutral-800 text-gray-200 rounded p-4 text-xs overflow-x-auto mb-4">
{`val scalarLockScript: String = {
  s"""
    {
    val xBYTES = OUTPUTS(0).R4[Coll[Byte]].get
    val x = byteArrayToBigInt(xBYTES)
    val G = decodePoint(generator)
      sigmaProp(
        receiver &&
        G.exp(x) == xG
      )
    }
  """.stripMargin
}`}
          </pre>
          <p className="text-gray-400 text-xs mb-2">This script compares a given scalar value (x) to an elliptic curve multiplication operation of Secp256k1 generator (G) and checks if they are equal.</p>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
            <li>Decodes the generator point and extracts a scalar value from the transaction output.</li>
            <li>Checks if the point computed from the scalar multiplication of the generator point and the extracted scalar value is equal to a predefined point.</li>
            <li>If the two points are equal, the transaction is valid.</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/dzyphr/ScalaSigmaParticle/blob/main/ScalarLock/src/main/scala/ScalarLock.scala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 text-gray-300 rounded px-3 py-1 text-xs hover:bg-blue-900 hover:text-blue-200 transition-colors"
          >
            Scala
          </a>
        </div>
      </div>

      {/* 2-Party Atomic Swap */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-300">
          <Users className="w-5 h-5 text-green-300" /> 2-Party Atomic Swap
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 text-base mb-4">
            A working python example of a 2-party atomic swap that you can simulate from 2 shell/terminal windows is available at <a href="#" className="text-cyan-300 hover:underline">2pAtomicSwapExample</a>. This might help people reason about the way in which secrets are shared through this protocol and at what steps what data transfer or blockchain interaction is supposed to occur.
          </p>
          <ul className="list-disc pl-6 text-gray-300 text-sm space-y-1">
            <li>Simulate atomic swaps between two parties using cryptographic secrets.</li>
            <li>Understand the protocol steps and data flow for secure cross-chain swaps.</li>
          </ul>
        </div>
      </div>
    </>
  );
} 