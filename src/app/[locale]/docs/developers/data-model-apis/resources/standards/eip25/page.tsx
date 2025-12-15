"use client";

/* eslint-disable react/no-unescaped-entities, @next/next/no-html-link-for-pages */

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Link as LinkIcon, FileText, AlertTriangle, CheckCircle, Code, DollarSign, MessageSquare } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function EIP25Page() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        Payment Request URI (EIP-25)
      </h1>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources/standards" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Standards</span>
        </button>
      </Link>

      {/* EIP Metadata */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">EIP-0025: URI scheme for payment requests</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p><strong>Author:</strong> MrStahlfelge</p>
            <p><strong>Created:</strong> 14-Dec-2021</p>
            <p><strong>License:</strong> CC0</p>
          </div>
          <div>
            <p><strong>Source:</strong> <a href="https://raw.githubusercontent.com/ergoplatform/eips/master/eip-0025.md" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">EIP-0025</a></p>
            <p><strong>Category:</strong> Payment Protocol</p>
            <p><strong>Forking:</strong> not needed</p>
          </div>
        </div>
      </div>

      {/* Motivation */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <LinkIcon className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Motivation</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Like <a href="https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">BIP-0021</a> for Bitcoin, this EIP proposes a URI scheme for initiating payments.
        </p>
        <p className="text-gray-300 mb-4">
          The purpose of this URI scheme is to enable users to easily make payments by simply clicking links on webpages or in e-mails.
        </p>
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">Key Difference from ErgoPay</h3>
          <p className="text-gray-300">
            In difference to <a href="/docs/developers/data-model-apis/resources/standards/eip20" className="text-orange-400 hover:underline">Ergo Pay (EIP-0020)</a>, this URI scheme does not contain a prepared transaction that the wallet should sign or discard. Instead, it contains the data that the wallet application should use to fill its payment form. The user can change the details when needed. The wallet will build the transaction, so this scheme is easier to handle on static websites or in e-mails.
          </p>
        </div>
      </div>

      {/* Format */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Format</h2>
        </div>
        
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto mb-6">
          <CodeBlock language="typescript">
    {`ergourn        = "ergo:" ergoaddress [ "?" ergoparams ]
ergoaddress    = *base58
ergoparams     = ergoparam [ "&" ergoparams ]
ergoparam      = [ amountparam / labelparam / messageparam / tokenparam ]
amountparam    = "amount=" *digit [ "." *digit ]
labelparam     = "label=" *qchar
messageparam   = "description=" *qchar
tokenparam     = "token-" qchar *qchar "=" *digit [ "." *digit ]`}
  </CodeBlock>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">Parameters</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><strong>label:</strong> Label for that address (e.g. name of receiver)</li>
              <li><strong>address:</strong> ergo P2PK or P2S address</li>
              <li><strong>description:</strong> message that describes the transaction to the user</li>
            </ul>
          </div>
          
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-indigo-300">Amount Format</h3>
            <p className="text-gray-300 text-sm mb-3">
              If an amount is provided, it MUST be specified in decimal ERG. All amounts MUST contain no commas and use a period (.) as the separating character to separate whole numbers and decimal fractions.
            </p>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3">
              <p className="text-orange-300 text-sm">Examples: amount=50.00 or amount=50 is treated as 50 ERG</p>
              <p className="text-red-300 text-sm">Invalid: amount=50,000.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tokens */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Tokens</h2>
        </div>
        <p className="text-gray-300 mb-4">
          If a token parameter is provided, it specifies the token id and the desired amount separated by an equals sign. The amount must be specified in decimal token value, for example "3.45" for 3.45 SigUSD. The amount MUST contain no commas and use a period (.) as the separating character to separate whole numbers and decimal fractions.
        </p>
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-green-300">Important Note</h3>
          <p className="text-gray-300">
            In the case of sending token only, a minimum amount of ERGs MUST also be sent to a new box (it is not possible to create boxes containing tokens only with zero ERGs).
          </p>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-teal-400/10 border border-teal-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="text-2xl font-bold text-teal-400">Examples</h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">Basic Payment</h3>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">ergoplatform:9ewA9T53dy5qvAkcR5jVCtbaDW2XgWzbLPs5H4uCJJavmA4fzDx</code>
            </div>
            <p className="text-gray-300 text-sm">Simple payment to an address</p>
          </div>
          
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">Payment with Amount and Description</h3>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">ergoplatform:9ewA9T53dy5qvAkcR5jVCtbaDW2XgWzbLPs5H4uCJJavmA4fzDx?amount=1.0&description=Hard%20work</code>
            </div>
            <p className="text-gray-300 text-sm">Requests 1 ERG for hard work</p>
          </div>
          
          <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-teal-300">Token Payment</h3>
            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 mb-3">
              <code className="text-orange-300">ergoplatform:9ewA9T53dy5qvAkcR5jVCtbaDW2XgWzbLPs5H4uCJJavmA4fzDx?token-03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04=5</code>
            </div>
            <p className="text-gray-300 text-sm">Requests 5 SigUSD</p>
          </div>
        </div>
      </div>

      {/* Wallet Processing Guidelines */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-orange-400">Wallet Processing Guidelines</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-orange-300">Parsing Requirements</h3>
            <p className="text-gray-300 text-sm">
              The wallet should process the URI as long as it can parse and interpret the content unambiguously. Any ambiguity should be detected and if it cannot be resolved, the wallet should give a descriptive message to the user (not just "Invalid URI", but what exactly has been detected as invalid).
            </p>
          </div>
          
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-orange-300">User Transparency</h3>
            <p className="text-gray-300 text-sm">
              At the same time the wallet should not do anything implicitly, even if it is smart enough to so some implicit actions, it should display what is going on to the user on the transaction sending screen. The user should be aware that some implicit action where taken by wallet and that those actions will take effect when the Send button is pressed.
            </p>
          </div>
          
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-orange-300">Missing ERG Amount</h3>
            <p className="text-gray-300 text-sm">
              Applying the above principles to the missing ERGs amount parameter problem we can see that it can be automatically resolved by the wallet, so the wallet shouldn't reject the URI as invalid when the amount of ERGs is missing. At the same time, the screen should have an explanation that non-zero amount of ERGs in the field is required and that it was suggested by the wallet.
            </p>
          </div>
          
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-orange-300">Duplicate Tokens</h3>
            <p className="text-gray-300 text-sm">
              For the case of duplicate tokens, the wallet CAN consider such URI as invalid, and clearly communicate the problem to the user so that the user can take a screenshot and send it back to the dApp developer. The duplication problem should be clear from the screenshot.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison with ErgoPay */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Comparison with ErgoPay</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">Payment Request URI (EIP-25)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Contains payment parameters only</li>
              <li>Wallet builds the transaction</li>
              <li>User can modify details</li>
              <li>Easier for static websites</li>
              <li>Similar to Bitcoin BIP-21</li>
            </ul>
          </div>
          
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-cyan-300">ErgoPay (EIP-20)</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li>Contains prepared transaction</li>
              <li>dApp builds the transaction</li>
              <li>User can only accept/reject</li>
              <li>Better for complex dApps</li>
              <li>Supports all smart contracts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">Related EIPs</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="/docs/developers/data-model-apis/resources/standards/eip20" className="text-orange-400 hover:underline">EIP-0020: ErgoPay Protocol</a></li>
              <li><a href="/docs/developers/data-model-apis/resources/standards/eip17" className="text-orange-400 hover:underline">EIP-0017: Proxy Contracts</a></li>
              <li><a href="/docs/developers/data-model-apis/address_types" className="text-orange-400 hover:underline">Address Types</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-300">External References</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
              <li><a href="https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Bitcoin BIP-0021</a></li>
              <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Platform</a></li>
              <li><a href="https://github.com/ergoplatform/eips" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo EIPs Repository</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 