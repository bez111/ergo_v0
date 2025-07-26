"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

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
          href="/Docs/developers/tooling/payments"
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
      <UniversalCopyCodeBlock code={`ergoauth://<URL>`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        An URL is provided without the https prefix. http communication is not allowed except for IP addresses (in order to test within a local network).
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Examples:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><code>ergoauth://sigmavalley.io/auth/2021-16b8-66c4-b800-6e52-8ce4</code> will make the wallet app request <code>https://sigmausd.io/auth/2021-16b8-66c4-b800-6e52-8ce4</code></li>
        <li><code>ergoauth://192.168.0.1/auth</code> will make the wallet app request <code>http://192.168.0.1/auth</code></li>
      </ul>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Response body: ErgoAuthRequest</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        The wallet application should request URL and obtain the following data (json format):
      </div>
      <UniversalCopyCodeBlock code={`ErgoAuthRequest:
  - signingMessage: String
  - sigmaBoolean: String (base64 from serialized SigmaBoolean)
  - userMessage: String (optional*)
  - messageSeverity: String (optional) "INFORMATION", "WARNING"
  - replyToUrl: String`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        The <strong>signingMessage</strong> is a String that is not user-friendly to read in general, as it might contain information the dApp adds to make it unique. If the signingMessage contains 0-byte character (unicode 0000), the part of the signingMessage before this sign is interpreted as the user prompt what he is going to sign for and must be shown to the user.
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        After signing is performed, the wallet must POST the following data to the dApp using <strong>replyToUrl</strong> from the request (json format):
      </div>
      <UniversalCopyCodeBlock code={`ErgoAuthResponse:
  - signedMessage: String
  - proof: String (Base64)`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        <strong>signedMessage:</strong> Message containing the <code>signingMessage</code> sent by the dApp with additional bytes added by the wallet. The addition of random bytes is done to prevent letting the user signing a message that might be used for unwanted malicious tasks. Besides random based, the signed message must also contain the replyToUrl's hostname right after the original signing message.
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        <strong>proof:</strong> Output of signing <code>signedMessage</code>
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        In case there was an error building the ErgoAuthRequest on the dApp side, the dApp might reply with an <code>ErgoAuthRequestError</code> to inform the user about the error:
      </div>
      <UniversalCopyCodeBlock code={`ErgoAuthRequestError:
  - userMessage: String`} className="mb-4" />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Cold wallet support</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Similar to EIP-0019 for signing transactions from devices not connected to the internet ("cold wallets"), ErgoAuth can be used to sign messages from cold wallets. This is transparent for dApps and handled by the wallet connected to the internet ("hot wallet").
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        For this, the <code>ErgoAuthRequest</code> must be transferred to the cold wallet via files or QR codes and the <code>ErgoAuthResponse</code> must be transferred back the same way.
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        The interchange format to transfer chunks between hot wallet and cold wallet is similar to the one defined in EIP-0019, with name "EARQ" for ErgoAuthRequest and "EARS" for ErgoAuthResponse. Examples:
      </div>
      <UniversalCopyCodeBlock code={`{"EARQ":"{\"signingMessage\":\"....\",\"sigmaBoolean\":\"...\",\"userMessage\":\"...\",...}"}

{"EARS":"{\"signedMessage\":\"....\",\"proof\":\"...\"}`} className="mb-4" />
      <div className="text-gray-300 mb-6 max-w-2xl">
        The ErgoAuthRequest's <code>replyToUrl</code> field must be omitted to save data bandwidth. Chunking as described in EIP-0019 is supported as well.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Implementation</h2>
      <h3 className="text-xl font-bold text-orange-400 mb-2">Implementation in wallet app</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        <a href="https://github.com/ergoplatform/ergo-wallet-app/issues/112" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Wallet App #112</a>
      </div>
      <h3 className="text-xl font-bold text-orange-400 mb-2">Implementation in dApp</h3>
      <div className="text-gray-300 mb-4 max-w-2xl">
        <a href="https://github.com/ergoplatform/ergo-appkit/pull/157" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo Appkit #157</a>
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        dApp examples:
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
        <li><a href="https://github.com/MrStahlfelge/ergopay-server-example/commit/9271f0ef890d6c8e63789f6c82b65595efe8549a" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoPay backend example</a></li>
        <li>Login to <a href="https://www.paideia.im/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.paideia.im/</a></li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Benefits for dApps</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>A dApp or website don't need to handle user's secrets (mnemonic/private keys), but can safely validate if a user has access to certain Ergo addresses.</li>
        <li>dApp's users don't need to worry about security of their private keys as the wallet guarantees they never leave the device. This is especially true if authentication is done with a cold device.</li>
      </ul>
    </>
  );
} 