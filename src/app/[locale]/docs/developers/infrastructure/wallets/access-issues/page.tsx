"use client";

import React from "react";
import { Info } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function AccessIssuesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Access Issues
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        This page provides solutions to common access issues that users may encounter with their Ergo wallets. It covers scenarios where you have your seed phrase but the restored wallet doesn't contain any ERG or shows a different address, and situations where you do not have your seed phrase. It also provides instructions on deriving additional addresses and best practices for storing your seed securely.
      </p>
      <Link
        href="/docs/developers/infrastructure/wallets"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
        Back to Wallets
      </Link>

      {/* Info Accordion */}
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="seed-info">
          <AccordionTrigger>
            <span className="flex items-center gap-2 text-cyan-400"><Info className="w-5 h-5" /> Your seed phrase / mnemonic</span>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-300">
              A wallet is simply an <em>interface</em> for the blockchain. If you have your seed phrase, simply restore in one of our <Link href="/docs/developers/infrastructure/wallets" className="text-blue-400 hover:underline">wallets</Link>.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* I have my seed phrase but... */}
      <h2 className="text-2xl font-bold mb-4 mt-8">I have my seed phrase but the wallet restored doesn't contain any ERG and is a different address</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li><b>Were you using the Ergo mobile wallet or the Ergo Reference Client?</b>
          <ul className="list-disc pl-6 text-gray-400 text-sm">
            <li><b>Yes</b>: Try <a href="#deriving-additional-addresses" className="text-blue-400 hover:underline">deriving additional addresses</a>.</li>
            <li><b>Was the wallet created before October 18th, 2022?</b>
              <ul className="list-disc pl-6">
                <li><b>Yes</b>: There was a <a href="https://github.com/ergoplatform/ergo-appkit/pull/139" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BIP32 key derivation bug</a> impacting certain wallets. Verify if your wallet was affected using <a href="https://satergo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">satergo.com</a> which <a href="https://t.me/Satergo/9509" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">checks this for you</a> when you restore.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><b>How did you record your seed phrase?</b>
          <ul className="list-disc pl-6 text-gray-400 text-sm">
            <li><b>Written down</b>: Are any characters hard to read or ambiguous? Refer to the <a href="https://www.blockplate.com/pages/bip-39-wordlist" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">BIP-39 wordlist</a> for clarification.</li>
            <li><b>Screenshot</b>: Are you sure this mnemonic represents the wallet you are trying to recover?</li>
          </ul>
        </li>
      </ul>

      {/* I do not have my seed phrase */}
      <h2 className="text-2xl font-bold mb-4 mt-8">I do not have my seed phrase</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li><b>using Yoroi?</b>
          <ul className="list-disc pl-6 text-gray-400 text-sm">
            <li><b>Yes</b>: Decrypt the wallet using <a href="https://github.com/satsen/yoroi-ergo-wallet-recover" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">yoroi-ergo-wallet-recover</a></li>
          </ul>
        </li>
        <li><b>iOS Terminus / Ergo Mobile Wallet</b>:
          <ul className="list-disc pl-6 text-gray-400 text-sm">
            <li><b>Do you still have access to the mobile wallet/Terminus but are facing a 'User not authenticated' error?</b>
              <ul className="list-disc pl-6">
                <li><b>Yes</b>: This error often indicates a change in device credentials, possibly due to biometric changes or system updates.</li>
                <li><b>No</b>: Explore other recovery options</li>
              </ul>
            </li>
            <li><b>Were you using the iOS Beta version?</b>
              <ul className="list-disc pl-6">
                <li><b>Yes</b>: The developer may be able to reactivate the beta if asked nicely. Ensure to attempt resolving it yourself first.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      {/* Deriving Additional Addresses */}
      <h2 id="deriving-additional-addresses" className="text-2xl font-bold mb-4 mt-8">Deriving Additional Addresses</h2>
      <p className="text-gray-300 mb-2">Ergo node uses a secret root key (derived from seed) for the change address.</p>
      <h3 className="text-lg font-semibold mb-2 mt-4">In the Ergo Mobile Wallet / Terminus</h3>
      <p className="text-gray-300 mb-2">Does the address that's been generated belong to the wallet you've restored? Check the derivation index and derive up to that number in <b>wallet config → addresses → derive more</b>.</p>
      <p className="text-gray-300 mb-4">Simply select the wallet.</p>
      <h3 className="text-lg font-semibold mb-2 mt-4">In the Reference Client/Node</h3>
      <p className="text-gray-300 mb-2">Navigate to <code className="bg-neutral-800 px-2 py-1 rounded">localhost:9053/swagger#/wallet/walletDeriveKey</code></p>
      <p className="text-gray-300 mb-2">Click <b>"Try it out"</b></p>
      <pre className="bg-neutral-800 rounded p-2 text-sm text-gray-200 mb-2">"derivationPath": "m/44'/429'/0'/0/0"</pre>
      <ul className="list-disc pl-6 text-gray-400 text-sm mb-4">
        <li>The wallet needs to be unlocked, and you need to authorize on top right on swagger</li>
        <li>Click execute and check the address you get in the response</li>
      </ul>

      {/* Best practices for storing your seed securely */}
      <h2 className="text-2xl font-bold mb-4 mt-8">Best practices for storing your seed securely</h2>
      <p className="text-gray-300 mb-4">If you've followed the steps above and managed to recover your funds, please store your seed inline with these best practices below to avoid further issues.</p>
      <ol className="list-decimal pl-6 text-gray-300 space-y-1 mb-8">
        <li><b>Avoid Digital Storage</b>: Never store the seed phrase on digital devices prone to hacking.</li>
        <li><b>Physical Writing</b>: Write the seed phrase on paper or durable materials like metal.</li>
        <li><b>Secure Storage</b>: Keep it in a safe or lockbox, protected from theft and environmental damage.</li>
        <li><b>Redundancy</b>: Have multiple copies in different secure locations.</li>
        <li><b>Splitting</b>: Divide the seed phrase and store parts separately for added security.</li>
        <li><b>No Cloud Storage</b>: Avoid using cloud services for storing the seed phrase.</li>
        <li><b>Limit Access</b>: Restrict knowledge of the seed phrase's location to only essential individuals.</li>
        <li><b>Regular Checks</b>: Periodically verify the condition and security of the stored seed phrase.</li>
        <li><b>Use Reputable Services</b>: If using third-party storage, ensure they are trustworthy.</li>
        <li><b>Stay Informed</b>: Keep up-to-date with security practices and threats.</li>
        <li><b>Plan for Emergencies</b>: Arrange for the safe transfer of your seed phrase in case of death or incapacitation.</li>
      </ol>
    </>
  );
} 