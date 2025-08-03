import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';

export default function AssetStandardPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              EIP-0004: Asset Standard
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Uniform way to issue Ergo tokens
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets/standards"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Standards
          </Link>
          <a 
            href="https://github.com/ergoplatform/eips/blob/master/eip-0004.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View EIP-0004
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            This standard provides a uniform way to issue Ergo tokens.
          </p>
          <p className="text-gray-300">
            A standard interface allows any tokens on Ergo to be re-used by other applications: from wallets to decentralized exchanges.
          </p>
        </div>

        {/* Ergo tokens background */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Ergo tokens background</h2>
          
          <p className="text-gray-300">
            Ergo supports <strong>custom tokens as first-class citizens.</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>Namely, a special register (R2) of a box contains (tokenId → amount) pairs.</li>
            <li>A box can contain at most 255 secondary tokens.</li>
          </ul>

          <p className="text-gray-300">There are also indirect limits:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>A box can be no larger than 4 kilobytes</li>
            <li>Tokens add to the computational cost of the transaction.</li>
          </ul>

          <p className="text-gray-300">
            A transaction can create <em>out-of-thin-air</em> tokens in its outputs if the token identifier is equal to the identifier of the first input box of the transaction.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Info</h4>
                <p className="text-gray-300 mb-3">
                  <a 
                    href="https://github.com/ergoplatform/ergo/issues/2013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Why does the limitation of 1 new token per transaction exist?
                  </a>
                </p>
              </div>
            </div>
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
            <li>As the box identifier is cryptographically unique, there is no chance of having the second token with the same identifier while the hash function is collision-resistant.</li>
            <li>This rule also means that only one new token per transaction can be created.</li>
            <li>Unlike ergs, other tokens can be burnt: the total amount for a token in transaction inputs should be no less than the amount of the outputs.</li>
          </ul>

          <p className="text-gray-300">
            <Link href="/Docs/introduction/storage-rent" className="text-blue-400 hover:text-blue-300 underline">
              Storage rent
            </Link> component allows a miner to collect (or burn) all the tokens inside a box if it is expired, and there are not enough Ergs in the box to pay the storage rent fee.
          </p>
        </div>

        {/* Ergo tokens standard */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Ergo tokens standard</h2>
          
          <p className="text-gray-300">
            Though this is not required by the protocol, we propose the following structure for the box that issues a token:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-700">
              <thead>
                <tr className="bg-neutral-800">
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Register</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Description</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Example</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Encoded</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-neutral-700">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">R2</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Token id and amount pair</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">[("7d...09", 100000)]</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300"></td>
                </tr>
                <tr className="border border-neutral-700 bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">R4</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Token verbose name (UTF-8 representation)</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"USD"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"0e03555344"</td>
                </tr>
                <tr className="border border-neutral-700">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">R5</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Token description (UTF-8 representation)</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"Nothing backed USD token"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"0e184e6f7468696e67206261636b65642055534420746f6b656e"</td>
                </tr>
                <tr className="border border-neutral-700 bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">R6</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Number of decimals</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"2"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">"0e0132"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300">
            Note, that additional <Link href="/Docs/developers/data-model-apis/registers" className="text-blue-400 hover:text-blue-300 underline">registers</Link> (R4-R6) are encoded as <strong>Coll[Byte]</strong> type of ErgoScript and their encoded representation is received as <code className="bg-neutral-700 px-2 py-1 rounded text-sm">'\x0e' + intToVlq(byteArray.length) + byteArray</code> where <code className="bg-neutral-700 px-2 py-1 rounded text-sm">byteArray</code> is UTF-8 representation of the original string.
          </p>

          <p className="text-gray-300">
            The example above issues one thousand tokens called "USD" with two decimals each.
            The transaction that issues such a token was included in block 98288 and may be found in <a href="https://explorer.ergoplatform.com/en/transactions/5c131f8ae9fa68dab1bac654aa66d364bc7da12107f337a0c9d3d80d8951ee41" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">block explorer</a>.
          </p>
        </div>

        {/* Ergo asset types */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-400">Ergo asset types</h2>
          
          <p className="text-gray-300">
            This standard is an extension of <a href="#ergo-tokens-standard" className="text-blue-400 hover:text-blue-300 underline">token standard</a>:
          </p>

          <p className="text-gray-300">
            In the asset type standard, R7 is a required two-byte value encoded as Coll[Byte]. The first byte represents the asset category, for example, <em>NFT</em> or <em>Share Tokens</em>. The second byte specifies the exact subcategory, for example, <em>Picture Artwork NFT</em> or <em>ErgoMixer's Share Tokens</em>. The second byte can be omited so that the issuance only specifies the catagory and not the subcatagory, for example, <em>Share Tokens</em>.
            Also, the remaining R8 and R9 registers can be used by each individual asset types based on their needs.
          </p>

          <p className="text-gray-300">
            The standardization of various asset types can be found below:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-700">
              <thead>
                <tr className="bg-neutral-800">
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">Asset type</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">R7</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">R8</th>
                  <th className="border border-neutral-700 px-4 py-2 text-left text-gray-300">R9</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-neutral-700">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">NFT - picture artwork</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">[0x01, 0x01] - i.e., "0e020101"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">SHA256 hash of the picture</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Optional - link to the artwork (UTF-8 representation)</td>
                </tr>
                <tr className="border border-neutral-700 bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">NFT - audio artwork</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">[0x01, 0x02] - i.e., "0e020102"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">SHA256 hash of the audio</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Optional - link to the audio encoded as Coll[Byte] or (link to the audio, link to the image cover) encoded as (Coll[Byte], Coll[Byte]) (UTF-8 representation)</td>
                </tr>
                <tr className="border border-neutral-700">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">NFT - video artwork</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">[0x01, 0x03] - i.e., "0e020103"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">SHA256 hash of the video</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Optional - link to the video (UTF-8 representation)</td>
                </tr>
                <tr className="border border-neutral-700 bg-neutral-800/30">
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">
                    <a href="https://www.ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                      Membership token - threshold signature
                    </a>
                  </td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">[0x02, 0x01] - i.e., "0e020201"</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Number of required signatures (Integer) - i.e., 4 in case of 4-of-10 threshold signature</td>
                  <td className="border border-neutral-700 px-4 py-2 text-gray-300">Deposit address of the funds controlled by the threshold signature (Ergo tree byte array)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300">
            The above registers (R7-R9) are also encoded as Coll[Byte] type unless stated otherwise.
          </p>
        </div>
      </div>
    </>
  );
} 