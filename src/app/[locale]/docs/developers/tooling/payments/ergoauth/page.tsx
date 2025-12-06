"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function ErgoAuthPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">ErgoAuth: User Authentication Protocol</h1>

      <div className="text-gray-300 mb-6 max-w-2xl">
        <strong>Author:</strong> @MrStahlfelge<br />
        <strong>Status:</strong> Implemented<br />
        <strong>Created:</strong> 25-Jan-2022<br />
        <strong>Last change:</strong> 24-Oct-2022<br />
        <strong>License:</strong> CC0<br />
        <strong>Forking:</strong> not needed
      </div>

      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/payments"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Description</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        This EIP defines a standard for trustless authentication of users of a wallet app and an online dApp.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Background And Motivation</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        dApps might want to validate if dApp users are really who they pretend to be. This is especially useful for dApps that grant certain abilities to holders of special tokens. At the moment, proving that a user owns a token can only be done by sending the token to a depositary address. By sending the token, the user proofed to have access privileges to the token.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        However, sending token around is not always desirable. Especially for valuable tokens, users might not want to send it away, and doing two transactions (one to send it to the depositary address, one to refund it back) costs both time and transaction fees.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        To overcome this, ErgoAuth proposes a way to authenticate users trustless to have access to certain addresses storing a box. The protocol is trustless in both ways: The users don't need to trust the dApp, because the dApp does not get access to funds or secrets. The dApp don't need to trust the users or the wallet app, because it can validate the authentication keys.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoAuth authentication protocol</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        An authentication with ErgoAuth is driven by a dApp that needs to authenticate a user.
      </div>
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-1">
        <li>The user enters the necessary information in the dApp's UI for the dApp to know if authentication is necessary. For example, users might enter their P2PK address (or, instead of manually entering, use ErgoPay to send the address to the dApp automatically).</li>
        <li>The dApp determines that authenticating the user is needed. For this, the dApp prepares a unique message that the wallet app should sign with a user's private key, and a SigmaBoolean that the user needs to authenticate for. This might be a P2PK address wrapped in a SigmaBoolean.</li>
        <li>The dApp presents an ErgoAuth link for the user to click and open the wallet app and a QR code for mobile users to scan from within the wallet app.</li>
        <li>The wallet application parses the QR code/link data and obtains a <code>ErgoAuthRequestUrl</code> to fetch the actual <code>ErgoAuthRequest</code> data from.</li>
        <li>When <code>ErgoAuthRequest</code> is obtained, the wallet presents a screen showing that a dApp wants to authenticate the user, and the address the request is for. The wallet app should also inform the user that no funds or moved and no secrets will leave the device.</li>
        <li>When the user agrees, the wallet app adds some own bytes to the obtained message from ErgoAuthRequest, signs it and sends the signed message to the ErgoAuthRequest's replyToUrl. The added bytes include the host address the authentication request was fetched from, added right after the message defined by the dApp. This way, dApp can check if a user authenticated via the right domain and there is no middleman.</li>
        <li>The dApp validates the signed message. When successful, it can proceed with its flow.</li>
      </ol>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Data Formats</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Wallet apps should be able to initiate ErgoAuth both by using URI schemes (clickable links) or QR codes.
      </div>
    </>
  );
}
