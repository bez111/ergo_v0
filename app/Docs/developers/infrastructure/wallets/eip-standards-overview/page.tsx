"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function EipStandardsOverviewPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Wallet Interaction Standards (EIPs) for dApp Developers
      </h1>
      <Link
        href="/Docs/developers/infrastructure/wallets/standards"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Standards
      </Link>
      <blockquote className="border-l-4 border-cyan-600 pl-4 text-gray-300 italic mb-6">
        Ergo Improvement Proposals (EIPs) define standards for interaction between dApps and wallets. See the full list at <a href="https://github.com/ergoplatform/eips" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo EIPs repository</a>.
      </blockquote>
      <p className="text-gray-300 mb-6">
        This page highlights key EIPs and expected behaviors relevant to dApp development, focusing primarily on <b>EIP-0012 (dApp Connector)</b>. For full details, refer to the official EIP specifications.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Supported Wallets (EIP-0012)</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b><a href="nautilus.md" className="text-cyan-400 hover:underline">Nautilus Wallet</a></b> (Browser Extension)</li>
        <li><b>Ergo Mobile Wallet (Android/iOS)</b></li>
      </ul>
      <p className="text-gray-300 mb-4">
        <b>Note:</b> Yoroi Wallet's Ergo support is deprecated. Use Nautilus or the official Ergo Mobile Wallet for dApp interactions. See the main <Link href="../wallets" className="text-cyan-400 hover:underline">Wallets page</Link> for more options.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">EIP-0012: dApp Connector Overview</h2>
      <p className="text-gray-300 mb-4">
        EIP-0012 defines a standard JavaScript interface injected into the dApp's web context by the wallet (usually as <code>window.ergoConnector.ergo</code> or just <code>window.ergo</code> after connection). It separates functions into two main categories:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>Connection API:</b> Functions for establishing and managing the connection between the dApp and the wallet (e.g., <code>connect</code>, <code>disconnect</code>, <code>check</code>, <code>isConnected</code>).</li>
        <li><b>Context API:</b> Functions available <i>after</i> a connection is established, allowing the dApp to interact with the wallet's context (e.g., get addresses, balances, request signing).</li>
      </ul>

      <h3 className="text-xl font-bold mb-2 mt-6">Typical Connection Flow (Conceptual JS)</h3>
      <UniversalCopyCodeBlock code={`async function connectWallet() {
  // Check if the connector object exists (wallet extension installed)
  if (typeof ergoConnector === 'undefined' || !ergoConnector.ergo) {
    console.error("Ergo Wallet Connector not found. Please install Nautilus or use a compatible wallet.");
    // Optionally prompt user to install
    return null;
  }

  try {
    // Check if already connected
    const isConnected = await ergoConnector.ergo.isConnected();
    if (isConnected) {
      console.log("Wallet already connected.");
      return ergo; // Return the existing context API object
    }

    // Request read access (prompts user in wallet)
    const granted = await ergoConnector.ergo.connect(); 
    
    if (!granted) {
      console.log("Wallet connection request denied by user.");
      return null;
    } else {
      console.log("Wallet connected successfully!");
      // 'ergo' object (Context API) is now available globally or via ergoConnector.ergo
      // You might want to store this 'ergo' object reference in your dApp's state
      return ergo; 
    }
  } catch (error) {
    console.error("Error connecting to wallet:", error);
    // Handle specific errors (e.g., user cancellation, timeouts)
    return null;
  }
}

// Usage:
// const ergoContext = await connectWallet();
// if (ergoContext) {
//   // Now use ergoContext.get_used_addresses(), ergoContext.sign_tx(), etc.
// }`} />

      <h3 className="text-xl font-bold mb-2 mt-6">Connection API Functions (Examples)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>ergoConnector.ergo.connect()</b>: Initiates the connection request. Returns <code>true</code> if access granted, <code>false</code> otherwise.</li>
        <li><b>ergoConnector.ergo.disconnect()</b>: Disconnects the dApp (if supported by the wallet).</li>
        <li><b>ergoConnector.ergo.isConnected()</b>: Checks if the dApp currently has read access without prompting the user.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2 mt-6">Context API Functions (<code>ergo.*</code>) & Expected Behavior</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>ergo.get_used_addresses(paging?)</b>: Returns addresses involved in past transactions. <b>MUST return <code>[]</code> (empty array)</b> if no addresses have been used. Supports pagination. Catch potential errors.</li>
        <li><b>ergo.get_unused_addresses()</b>: Returns addresses generated but not yet seen on-chain. Catch potential errors.</li>
        <li><b>ergo.get_balance(token_id?)</b>: Returns confirmed and unconfirmed balance for ERG or a specific token. Catch potential errors.</li>
        <li><b>ergo.sign_tx(unsignedTx)</b>: Sends an <i>unsigned</i> transaction to the wallet for the user to review and sign. Returns the signed transaction if approved. Handle user rejection, insufficient funds, malformed transaction errors.</li>
        <li><b>ergo.submit_tx(signedTx)</b>: Sends a <i>signed</i> transaction to the wallet for submission to the network. Returns the transaction ID. Handle network/node errors.</li>
      </ul>
      <p className="text-gray-300 mb-4">
        <i>Refer to the full EIP-0012 specification for exact function signatures, parameter/return types, and detailed error codes.</i>
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Security Best Practices</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Request Minimal Permissions: Only request read access initially (<code>connect</code>).</li>
        <li>User Intent: Ensure all signing requests (<code>sign_tx</code>) clearly correspond to an explicit user action within your dApp.</li>
        <li>Transaction Clarity: Display key transaction details to the user <i>before</i> sending to the wallet for signing.</li>
        <li>Input Validation: Sanitize and validate any user input used in transaction construction.</li>
        <li>State Management: Securely manage the connection state within your dApp. Verify <code>isConnected()</code> before Context API calls.</li>
        <li>Avoid Storing Sensitive Data: Never ask for or store user private keys or seed phrases in your dApp.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Mobile Considerations</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Connection Initiation: The method for initiating a connection might differ on mobile (deeplinking, in-app browser, etc.).</li>
        <li>User Experience: Ensure your dApp's UI is responsive and works well on mobile screens when interacting with the wallet interface.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Testing Recommendations</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>Multiple Wallets: Test your dApp integration with all supported wallets on different platforms.</li>
        <li>Testnet: Thoroughly test all connection flows, data fetching, and transaction signing/submission scenarios on the Ergo Testnet before deploying to Mainnet.</li>
        <li>Edge Cases: Test user cancellation flows, network errors, insufficient funds, and handling of empty/new wallets.</li>
        <li>Wallet State Changes: Test how your dApp handles the user switching accounts or disconnecting the wallet while the dApp is active.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Troubleshooting Common Issues</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>ergoConnector Undefined:</b> Wallet extension is not installed or not injecting the connector object. Prompt user to install/enable.</li>
        <li><b>Connection Rejected:</b> User denied the connection request. Handle gracefully.</li>
        <li><b>sign_tx Errors:</b> User rejected the signature, insufficient funds, malformed transaction. Handle and display errors.</li>
        <li><b>submit_tx Errors:</b> Network issues, node errors, or wallet unable to connect to its node. Provide feedback to the user.</li>
        <li><b>Incorrect Data (get_used_addresses, get_balance):</b> Ensure the wallet is fully synced. Check for pagination issues.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Other Relevant EIPs</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0001.md" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0001: Ergo Address Allocation and Encoding</a></li>
        <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0003.md" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0003: Deterministic Wallet Standard (BIP32/BIP44)</a></li>
        <li>Others: EIP-0004 (Assets), EIP-0020 (ErgoPay), EIP-0027 (Asset Linking) may also be relevant depending on dApp functionality.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Example Implementations</h2>
      <p className="text-gray-300 mb-4">(Placeholder: Link to well-known open-source dApps or libraries demonstrating good EIP-0012 integration, e.g., Spectrum UI, Nautilus examples, Fleet examples, if available).</p>

      <hr className="my-8 border-neutral-700" />
      <p className="text-gray-400 mb-4">
        By understanding and correctly implementing these standards, particularly EIP-0012, dApps can provide a smoother, more secure, and reliable interaction experience across different Ergo wallets.
      </p>
    </>
  );
} 