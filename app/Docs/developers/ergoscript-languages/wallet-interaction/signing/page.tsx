"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check, Shield } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "text" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function SigningPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-purple-400" />
        Transaction Signing Process
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/wallet-interaction"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Wallet Interaction
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-6 max-w-2xl">
          To initiate a transaction, a spending transaction <em>tx</em> is required as an input. This can be achieved by using <code className="bg-neutral-800 px-1 rounded">bytesToSign(tx)</code>. It's important to note that multiple inputs can be signed simultaneously, but the coins to be spent must be specified prior to signing. The current state of the blockchain, or <em>context</em>, is also required. The signer has the ability to extend the context by adding values.
        </div>

        <div className="text-gray-300 mb-6 max-w-2xl">
          With this data, the signer (or prover) of an input begins by reducing the guarding proposition for the input box. This is done by evaluating it using the context. The possible outcomes of this reduction are as follows:
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>The process is aborted if the estimated upper-bound evaluation cost (and verification) is too high.</li>
          <li>If the result is true, it means that the box can be spent by anyone.</li>
          <li>If the result is false, it means that the box cannot be spent at all (according to the current context).</li>
          <li>If the expression still contains predicates over the context, it means more than context is needed to evaluate some predicates over it. The prover can look into its own not yet revealed secrets to extend context. If the secrets are found, the prover evaluates the expression further and proceeds to the next step if there is nothing more to evaluate. Otherwise, the prover aborts.</li>
          <li>If the expression contains only expressions over secret information provable via Σ-protocols, this is the most common case, and we will explain it further.</li>
        </ul>

        <div className="text-gray-300 mb-6 max-w-2xl">
          Complex expressions, such as <code className="bg-neutral-800 px-1 rounded">dlog(x₁) ∨ (dlog(x₂) ∧ dlog(x₃))</code>, where <code className="bg-neutral-800 px-1 rounded">dlog(x)</code> means "prove me knowledge of a secret <em>w</em>, such as for a known group with generator <em>g</em>, <em>g^w = x</em>, via a non-interactive form of the Schnorr protocol", may be encountered. Internally, this expression is represented as a tree (TODO). This proof is to be proven and then serialized into a binary spending proof (which could be included in a transaction) as follows:
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Steps for Proving a Tree:</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">1. Bottom-up:</h3>
            <div className="text-gray-300 mb-4 max-w-2xl">
              Each node, whether real or simulated, is marked according to the following rule. DLogNode -- if the secret is known, then it's real, else it's simulated. ∨: if at least one child is real, then it's real; else it's simulated. ∧: if at least one child is simulated, then it's simulated; else it's real.
            </div>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>Note: All descendants of a simulated node will be simulated later, even if they were initially marked as real.</li>
              <li>The root should end up being real according to this rule -- otherwise, the proof cannot be carried out.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Top-down:</h3>
            <div className="text-gray-300 mb-4 max-w-2xl">
              Every child of a simulated node is marked as <em>simulated</em>. If two or more children of a real ∨ are real, all but one are marked as simulated.
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">3. Top-down:</h3>
            <div className="text-gray-300 mb-4 max-w-2xl">
              A challenge is computed for every simulated child of every ∨ and ∧, according to the following rules. If ∨, then every simulated child gets a fresh random challenge. If ∧ (which means ∧ itself is simulated, and all its children are), then every child gets the same challenge as the ∧.
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">4. Bottom-up:</h3>
            <div className="text-gray-300 mb-4 max-w-2xl">
              For every simulated leaf, a response and a commitment (i.e., second and first prover message) are simulated according to the Schnorr simulator. For every real leaf, the commitment (i.e., first prover message) is computed according to the Schnorr protocol. For every ∨/∧ node, the commitment is the union (as a set) of commitments below it.
            </div>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li>The Schnorr challenge is computed as the hash of the commitment of the root (plus other inputs -- probably the tree being proven and the message).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">6. Top-down:</h3>
            <div className="text-gray-300 mb-4 max-w-2xl">
              The challenge for every real child of every real ∨ and ∧ is computed as follows. If ∨, then the challenge for the one real child of ∨ is equal to the XOR of the challenge of ∨ and the challenges for all the simulated children of ∨. If ∧, then the challenge for every real child of ∧ is equal to the challenge of the ∧.
            </div>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
              <li><strong>Note:</strong> Simulated ∧ and ∨ only have simulated descendants, so there is no need to recurse down from them.</li>
            </ul>
          </div>
        </div>

        <div className="text-gray-300 mb-8 max-w-2xl">
          Finally, to obtain a flat binary string containing <code className="bg-neutral-800 px-1 rounded">(e, z)</code> pairs (challenge and prover's response for a leaf sub-protocol) from the tree, follow these steps: (TODO)
        </div>
      </div>
    </>
  );
} 