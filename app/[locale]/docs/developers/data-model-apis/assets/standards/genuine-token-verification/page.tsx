import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, ExternalLink } from 'lucide-react';

export default function GenuineTokenVerificationPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              EIP-0021: Genuine Token Verification
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Protocols for verifying token authenticity and legitimacy
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/docs/developers/data-model-apis/assets/standards"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Standards
          </Link>
          <a 
            href="https://github.com/ergoplatform/eips/blob/master/eip-0021.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View EIP-0021
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Description */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Description</h2>
          <p className="text-gray-300">
            This EIP lists the common tokens of value with their unique identifier, so users as well as wallet and explorer applications can verify if a token is genuine. The EIP is meant to be updated regularly when new tokens of value are added.
          </p>
        </div>

        {/* Motivation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Motivation</h2>
          
          <p className="text-gray-300">
            Ergo tokens can hold a certain value, best-known examples are the SigUSD and SigRSV tokens in use by the SigmaUSD stablecoin protocol.
          </p>

          <p className="text-gray-300">
            Tokens can be minted by every user, with a name and description free to choose. This means everyone can mint new tokens named "SigUSD", which bears a problem for end-users to decide if a token they received is genuine or not.
          </p>
        </div>

        {/* Ergo tokens background */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Ergo tokens background</h2>
          
          <p className="text-gray-300">
            <Link href="/docs/developers/data-model-apis/assets/standards/asset-standard" className="text-green-400 hover:text-green-300 underline">
              See EIP-4
            </Link>: Ergo supports custom tokens as first-class citizens. A transaction can create out-of-thin-air tokens in its outputs if the token identifier is equal to the identifier of the first input box of the transaction.
          </p>

          <p className="text-gray-300">
            As the box identifier is cryptographically unique, there's no chance to have the second token with the same identifier while the hash function being used is collision-resistant.
          </p>

          <p className="text-gray-300">
            In order to verify the authenticity of a token, the unique identifier of a token is needed to check.
          </p>
        </div>

        {/* Process to add tokens */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Process to add tokens to this list</h2>
          
          <p className="text-gray-300">
            As outlined before, this list should only hold tokens of value. This means that mainly tokens of financial value can be added. Before opening a PR to add your token to this list, ask yourself if your token is interesting for scammers. When the answer is no, the token should probably not added to this list.
          </p>

          <p className="text-gray-300">
            On rare occasions, tokens of a certain intrinsic value to the community could be added as well when there was a community vote with significant community participation.
          </p>
        </div>

        {/* Recommended approach */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Recommended approach for applications showing tokens to end-users</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">Verified tokens</h3>
              <p className="text-gray-300 mb-2">
                Applications should add a verification sign next to a token which is listed in the following genuine tokens list.
              </p>
              <p className="text-gray-300">
                Proposed verification sign: <a href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Averified%3A" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">Material icons verified</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Suspicious tokens</h3>
              <p className="text-gray-300 mb-2">
                In order to protect end-users for confusion, it is decided for some tokens in the genuine tokens list that the verbose name should be unique and should not be used by other tokens.
              </p>
              <p className="text-gray-300 mb-2">
                This is not enforced by Ergo protocol, so applications should check if a token uses a unique name from the list and add a warning sign when needed.
              </p>
              <p className="text-gray-300">
                Proposed warning sign: <a href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Areport%3A" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">Material icons report</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Blocked tokens</h3>
              <p className="text-gray-300 mb-2">
                Applications should show a warning sign next to tokens identified to be harmful or impersonating other tokens.
              </p>
              <p className="text-gray-300">
                Proposed warning sign: <a href="https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Adangerous%3A" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">Material icons dangerous</a>
              </p>
            </div>
          </div>
        </div>

        {/* Token lists */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400">Token lists</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Genuine tokens</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-700">
                  <thead>
                    <tr className="bg-neutral-800">
                      <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Verbose name</th>
                      <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Token id</th>
                      <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Unique name</th>
                      <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Issuer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-neutral-800/30">
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">SigUSD</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300 font-mono text-sm">03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">yes</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">sigmausd.io</td>
                    </tr>
                    <tr className="bg-neutral-800/30">
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">SigRSV</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300 font-mono text-sm">003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">yes</td>
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300">sigmausd.io</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Blocked tokens</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-700">
                  <thead>
                    <tr className="bg-neutral-800">
                      <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Token id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-neutral-800/30">
                      <td className="border border-neutral-700 px-4 py-2 text-gray-300 text-center">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 