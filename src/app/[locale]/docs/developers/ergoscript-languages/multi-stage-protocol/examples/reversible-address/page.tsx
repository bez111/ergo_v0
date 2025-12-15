"use client";

/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Code2, Copy, Check } from "lucide-react";

export default function ReversibleAddressPage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Code2 className="w-10 h-10 text-cyan-400" />
        Reversible Addresses
      </h1>

      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/multi-stage-protocol/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              A reversible address is an example of a multi-stage contract designed with anti-theft features. It functions as follows: funds sent to this address can initially only be spent in a way that allows the payment to be reversed by a trusted party for a specific period. After this period, only the intended recipient can spend the funds. This mechanism is particularly useful for managing hot wallets (e.g., for exchanges or mining pools handling customer withdrawals). A hot wallet's private key is typically stored on a server, making it vulnerable to compromise and theft. To recover funds in case of such a compromise, a trusted party (with a private key stored securely offline) can intervene.
            </p>
            <p>
              The reversible address uses a two-stage protocol. The first stage ensures that withdrawals from the hot wallet adhere to specific rules, creating outputs protected by a second-stage script. The second stage allows either the intended recipient (after a delay) or the trusted party (before the delay) to spend the funds. If an unauthorized transaction is detected originating from the hot wallet (first stage), the trusted party can use their private key to trigger an abort procedure on the second-stage boxes, diverting the funds to a secure address. Besides securing hot wallets, these addresses can be used for automated-release escrow payments in online shopping.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Assumptions</h2>
          <div className="text-gray-300 space-y-4">
            <p>Let's assume:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">alice</code> represents the <code className="bg-neutral-700 px-2 py-0.5 rounded">SigmaProp</code> (public key) of the hot wallet.</li>
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">carol</code> represents the <code className="bg-neutral-700 px-2 py-0.5 rounded">SigmaProp</code> of the trusted party (whose private key is stored offline and used for reversals).</li>
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">blocksIn24h</code> is a constant representing the estimated number of blocks in 24 hours (the reversal period).</li>
              <li><code className="bg-neutral-700 px-2 py-0.5 rounded">bob</code> represents the <code className="bg-neutral-700 px-2 py-0.5 rounded">SigmaProp</code> of a customer wishing to withdraw funds.</li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ethereum Comparison</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              In Ethereum, a similar outcome might be achieved by sending funds to an account with a contract (let's call it C<sub>b</sub>) that allows <code className="bg-neutral-700 px-2 py-0.5 rounded">carol</code> to withdraw funds for <code className="bg-neutral-700 px-2 py-0.5 rounded">blocksIn24h</code> blocks, after which only <code className="bg-neutral-700 px-2 py-0.5 rounded">bob</code> can withdraw. While the same contract instance could handle multiple withdrawals, creating a new instance for each withdrawal (emulating the UTXO model) might be preferable. The funds for these withdrawals would need to originate from another contract (C<sub>a</sub>) ensuring outputs are only created according to the structure of C<sub>b</sub>.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ergo Implementation</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              In Ergo, this is implemented as a two-stage protocol:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Stage 1 (Hot Wallet Script - C<sub>a</sub>):</strong> This script guards the main hot wallet funds. It ensures that any spending transaction creates outputs protected by the Stage 2 script (<code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code>).</li>
              <li><strong>Stage 2 (Withdrawal Script - C<sub>b</sub>):</strong> This script guards the individual withdrawal boxes paid out to customers like Bob. It allows either Bob (after the delay) or Carol (before the delay) to spend the box.</li>
            </ol>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stage 2: Withdrawal Script</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The following script, named <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code>, implements the second stage (C<sub>b</sub>). This script protects the output box created when the hot wallet pays Bob.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Get Bob's public key (the recipient) from register R4
val bob = SELF.R4[SigmaProp].get 

// Get the deadline height (when Bob can spend) from register R5
val bobDeadline = SELF.R5[Int].get 

// Check if either:
// 1. Bob is spending AND the deadline has passed (HEIGHT > bobDeadline)
// OR
// 2. Carol (trusted party) is spending AND the deadline has NOT passed (HEIGHT <= bobDeadline)
sigmaProp((bob && HEIGHT > bobDeadline) || (carol && HEIGHT <= bobDeadline))`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Get Bob's public key (the recipient) from register R4
val bob = SELF.R4[SigmaProp].get 

// Get the deadline height (when Bob can spend) from register R5
val bobDeadline = SELF.R5[Int].get 

// Check if either:
// 1. Bob is spending AND the deadline has passed (HEIGHT > bobDeadline)
// OR
// 2. Carol (trusted party) is spending AND the deadline has NOT passed (HEIGHT <= bobDeadline)
sigmaProp((bob && HEIGHT > bobDeadline) || (carol && HEIGHT <= bobDeadline))`, 'withdrawScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['withdrawScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stage 1: Hot Wallet Script</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              This <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code> is referenced (e.g., by its hash) in the first stage script (<code className="bg-neutral-700 px-2 py-0.5 rounded">hotWalletScript</code>) shown below. This script guards the main hot wallet funds.
            </p>
            
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`// Define a function \`isChange\` that checks if an output box \`b\` is a change box 
// (i.e., returns funds to the hot wallet itself).
val isChange = {(b: Box) => b.propositionBytes == SELF.propositionBytes} 

// Define a function \`isWithdraw\` that checks if an output box \`b\` is a valid withdrawal box:
// - Its R5 register (deadline) must be at least the current height + delay.
// - Its script must match the withdrawScript hash.
val isWithdraw = {(b: Box) => 
  b.R5[Int].get >= HEIGHT + blocksIn24h && 
  blake2b256(b.propositionBytes) == withdrawScriptHash // Assuming withdrawScriptHash is a known constant
}

// The final condition requires:
// 1. Alice's signature (the hot wallet owner).
// 2. ALL outputs must satisfy EITHER the isChange condition OR the isWithdraw condition.
sigmaProp(alice && OUTPUTS.forall({(b: Box) => isChange(b) || isWithdraw(b)}))`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`// Define a function \`isChange\` that checks if an output box \`b\` is a change box 
// (i.e., returns funds to the hot wallet itself).
val isChange = {(b: Box) => b.propositionBytes == SELF.propositionBytes} 

// Define a function \`isWithdraw\` that checks if an output box \`b\` is a valid withdrawal box:
// - Its R5 register (deadline) must be at least the current height + delay.
// - Its script must match the withdrawScript hash.
val isWithdraw = {(b: Box) => 
  b.R5[Int].get >= HEIGHT + blocksIn24h && 
  blake2b256(b.propositionBytes) == withdrawScriptHash // Assuming withdrawScriptHash is a known constant
}

// The final condition requires:
// 1. Alice's signature (the hot wallet owner).
// 2. ALL outputs must satisfy EITHER the isChange condition OR the isWithdraw condition.
sigmaProp(alice && OUTPUTS.forall({(b: Box) => isChange(b) || isWithdraw(b)}))`, 'hotWalletScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['hotWalletScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">How It Works</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The P2S address derived from the <code className="bg-neutral-700 px-2 py-0.5 rounded">hotWalletScript</code> acts as the reversible address. Funds sent to this address are subject to the defined withdrawal rules. Normally, Bob would spend his withdrawal box (protected by <code className="bg-neutral-700 px-2 py-0.5 rounded">withdrawScript</code>) after the <code className="bg-neutral-700 px-2 py-0.5 rounded">bobDeadline</code> (approximately <code className="bg-neutral-700 px-2 py-0.5 rounded">blocksIn24h</code> blocks later). However, if an unauthorized transaction attempts to spend from the hot wallet (violating the <code className="bg-neutral-700 px-2 py-0.5 rounded">isWithdraw</code> or <code className="bg-neutral-700 px-2 py-0.5 rounded">isChange</code> conditions), or if a legitimate withdrawal box needs to be reversed before <code className="bg-neutral-700 px-2 py-0.5 rounded">bobDeadline</code>, Carol can intervene using her private key to spend the second-stage box(es) and redirect the funds to a secure address.
            </p>
            <p>
              Note that the trusted party (<code className="bg-neutral-700 px-2 py-0.5 rounded">carol</code>) is effectively bound to this specific hot wallet setup. A different hot wallet or security policy would require a new contract and potentially a different trusted party.
            </p>
            <p>
              While designed for securing hot wallets, reversible addresses have other potential applications, such as automated-release escrow payments in online shopping, where <code className="bg-neutral-700 px-2 py-0.5 rounded">carol</code> could represent a mutually agreed-upon adjudicator.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 