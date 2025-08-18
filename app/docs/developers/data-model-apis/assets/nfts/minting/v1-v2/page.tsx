import React from 'react';
import Link from 'next/link';
import { ArrowLeft, GitBranch, FileText, Users, Shield, Info } from 'lucide-react';

export default function V1V2Page() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <GitBranch className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Design Choices: V1 vs V2
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Comparing NFT standards on Ergo
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets/nfts/minting"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Minting
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            <Link href="/Docs/developers/data-model-apis/assets/nfts/eip24" className="text-cyan-400 hover:underline">EIP-0024</Link> offers two design versions for artwork issuance: V1 and V2. Both designs involve two important boxes in the issuance process: the issuance box and the issuer box. The main difference between V1 and V2 lies in the issuer box.
          </p>
        </div>

        {/* V1 Design Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            V1 Design
          </h2>
          <p className="text-gray-300 mb-4">
            In V1, the issuer box has the following attributes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R4</code> is an <code className="bg-neutral-700 px-2 py-1 rounded">Int</code> representing 1000 times the royalty percentage of the artwork. For example, if the royalty percentage is 2%, the value in <code className="bg-neutral-700 px-2 py-1 rounded">R4</code> would be 20.</li>
            <li>The proposition bytes of the issuer box represent the contract to which the royalty percentage will be sent. This design choice was made with the assumption of AOT (Ahead-of-Time) costing, which was replaced with JIT (Just-in-Time) costing in 2022.</li>
          </ul>
          <p className="text-gray-300">
            V1 mainly focuses on handling royalties for the artist or proxy contract.
          </p>
        </div>

        {/* V2 Design Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Users className="w-6 h-6" />
            V2 Design
          </h2>
          <p className="text-gray-300 mb-4">
            V2 addresses some of the shortcomings in V1 and extends the proposal to include collections. The V2 issuer box has the following attributes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R4</code> contains the artwork standard version.</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R5</code> holds royalty recipients and their respective percentages.</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R6</code> contains three types of traits: Properties, Levels, and Stats.</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R7</code> contains the token ID of the collection.</li>
            <li><code className="bg-neutral-700 px-2 py-1 rounded">R8</code> specifies additional information about the artwork, such as explicit content.</li>
          </ul>
          <p className="text-gray-300">
            V2 offers more flexibility and features, such as handling multiple royalty recipients, detailed artwork traits, and additional information.
          </p>
        </div>

        {/* Artist Identity Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Artist Identity
          </h2>
          <p className="text-gray-300">
            Establishing the artist's identity is crucial for auction houses to prevent NFT scams and unauthorized copies. The artist's identity cannot be solely determined by the issuance box, as it may be impersonated. Instead, the artist's identity and address are established by the first P2PK input in the transaction chain leading to the artwork issuance. This means that if a proxy contract is used, the first input of the transaction that sends funds to the proxy contract will determine the artist's identity.
          </p>
        </div>
      </div>
    </>
  );
} 