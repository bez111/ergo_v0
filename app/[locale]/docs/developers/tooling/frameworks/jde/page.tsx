"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JDEPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">JSON dApp Environment (JDE)</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4">Ergo enables sophisticated dApps via smart contracts written in <a href="/docs/developers/tooling/pathways/ergoscript" className="text-cyan-400 hover:underline">ErgoScript</a>.</p>
      <p className="text-gray-300 mb-4">Interacting with such smart contracts requires a developer to write code in a language such as Scala (using the <a href="/docs/developers/tooling/pathways/appkit" className="text-cyan-400 hover:underline">AppKit</a> framework) or Rust (using <a href="/docs/developers/tooling/pathways/headless" className="text-cyan-400 hover:underline">HDF</a> or <a href="https://github.com/ergoplatform/sigma-rust" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">sigma-rust</a>).</p>
      <p className="text-gray-300 mb-4">The <a href="https://github.com/ergoplatform/ergo-jde" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">JSON dApp Environment (JDE)</a> described on this page is another programming tool you can use to interact with Ergo dApps. The differentiating feature of JDE is that its programming language is <b>JSON</b>.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Goals</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>Enable tech-savvy users and developers to interact with existing (and future) Ergo dApps such as Sigma USD by programming the off-chain logic user-friendly.</li>
        <li>Provide a "sandbox" mode, where users can send arbitrary scripts for execution such that the server does not have to worry about malicious programs. This enables the JDE service to be hosted remotely. An example is <a href="https://kioskweb.org/session/#kiosk.Wallet.txBuilder" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Kiosk-Web</a>, where you can post arbitrary scripts (such as <a href="https://raw.githubusercontent.com/ergoplatform/ergo-jde/main/sample-scripts/getReserveCoinInfo.json" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">this</a>, which gets the reserve coin rate) in "Tx Builder" and obtain results.</li>
      </ol>
      <p className="text-gray-300 mb-4">Goal #2 rules out many programming languages such as Java/Scala and Rust. This rules out all the so-called "Turing-complete" languages.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Capabilities</h2>
      <p className="text-gray-300 mb-4">Let us take the use-case of purchasing, say, 10 Sigma-USD reserve coins as an example, which involves the following steps:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>Find the current oracle pool box and obtain the rate from register R4.</li>
        <li>Find the current bank box and obtain the relevant parameters (tokens in circulation and base reserves).</li>
        <li>Use the formulae to obtain the delta in base reserves.</li>
        <li>Compute the details of the new bank box to be created (nano-Ergs, tokens, registers)</li>
        <li>Compute the details of the new receipt box to be created (nano-Ergs, tokens, registers)</li>
        <li>Make a transaction creation request to the Ergo node with the above details.</li>
      </ol>
      <p className="text-gray-300 mb-4">All the above tasks can be programmed in JDE, as done <a href="https://raw.githubusercontent.com/ergoplatform/ergo-jde/main/sample-scripts/mintReserveCoinAdvanced.json" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">in this script</a>.</p>
      <p className="text-gray-300 mb-4">In general, JDE allows us to do the following:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>Find some boxes by address and/or box Id</li>
        <li>Extract values from those boxes (nanoErgs, registers and tokens), and define variables using those.</li>
        <li>Define constant values</li>
        <li>Perform computation using the constants and variables. JDE supports the if-then-else construct for control flow. However, it does not support loops.</li>
        <li>Define outputs using the values computed</li>
        <li>Make a transaction creation request to the Ergo node</li>
      </ol>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">How to use JDE</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>A compiled JAR is available on the <a href="https://github.com/ergoplatform/ergo-jde/releases" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">release</a> page. You can also generate the JAR yourself using the <code>sbt assembly</code> command.</li>
        <li>Understand the scripting language by looking at the sample scripts and the documentation.</li>
        <li>Ensure you have a fully synced Ergo node running.</li>
        <li>Write your script or edit the existing script for the task at hand.</li>
        <li>Invoke JDE via CLI to generate a transaction creation request (aka unsigned transaction) and some returned values.</li>
      </ol>
      <p className="text-gray-300 mb-4">Depending on your use case, you will be using the output of Step 4 differently.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>End users will use it to send a transaction on the Ergo blockchain</li>
        <li>Wallet authors will append some of their inputs/outputs before sending the transaction.</li>
        <li>dApp authors will use the returned values for further computation.</li>
      </ul>
      <p className="text-gray-300 mb-4">JDE also includes a web-service mode for the last two use-cases.</p>
      <p className="text-gray-300 mb-4">Please see the <a href="https://github.com/ergoplatform/ergo-jde/blob/main/readme.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">documentation</a> for details.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Important Notes</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>JDE is experimental. Please use with caution at your own risk. Always inspect the created transaction before sending it.</li>
        <li>If you discover a bug, please make an issue and a PR.</li>
        <li>If you find some feature missing, please make an issue.</li>
      </ul>
    </>
  );
} 