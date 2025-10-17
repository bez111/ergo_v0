import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, ExternalLink } from 'lucide-react';
import { CodeBlock } from "@/components/ui";

export default function ArtworkContractPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
            <Palette className="w-8 h-8 text-pink-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent leading-tight">
              EIP-0024: Artwork Contract
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Standards for NFT artwork creation and royalty management
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
            href="https://github.com/ergoplatform/eips/blob/master/eip-0024.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View EIP-0024
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Motivation</h2>
          <p className="text-gray-300 mb-4">
            With the discovery that we can easily use spent boxes in contracts (<a href="https://www.ergoforum.org/t/ergoscript-design-patterns/222/23?u=anon_real" className="text-pink-400 hover:text-pink-300 underline">see here</a>), some new features are introduced for artworks and can be extended further in the future. This EIP is an extension of <a href="#asset-standard" className="text-pink-400 hover:text-pink-300 underline">Asset standard</a> and tends to standardize artwork issuance in particular.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Design V1</h2>
          <p className="text-gray-300 mb-4">
            There are two important boxes in the issuance process of an artwork.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li>The issuance box, which follows <a href="#asset-standard" className="text-pink-400 hover:text-pink-300 underline">Asset standard</a> depending on the type of artwork.</li>
            <li>The issuer box, which is the first input of the transaction that is issuing the artwork. In particular, the box with the same ID as the artwork's token ID.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Now we will discuss why the issuer box is important and define a standard for it.
          </p>
          <p className="text-gray-300 mb-4">
            The issuer box is important because it has the same ID as the artwork's token ID and we can include it (although it is spent) in our transactions either in <a href="#registers" className="text-pink-400 hover:text-pink-300 underline">registers</a> or as context data. This means that we can prove/verify certain features that an artwork may have using this box. The following is the v1 standard for this box - which may be extended in the future (refer to Design V2 part).
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R4</code> of this box is an <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Int</code>, showing 1000 * royalty percentage of the artwork. e.g, 20 for 2% royalty. If <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R4</code> of the issuer box of an artowrk is empty or non-positive, then royalty is considered to be 0%.</li>
            <li>In the current design of the <a href="#auction-contract" className="text-pink-400 hover:text-pink-300 underline">Auction contranct</a>, proposition bytes of this box is the contract that the royalty percentage will be sent to. This is a suboptimal design because of AOT costing mechanism which is supposed to be replaced with JIT costing with a soft-fork that will happen with v5.0 of <a href="https://github.com/ergoplatform/ergo" className="text-pink-400 hover:text-pink-300 underline">ergo node</a>.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            As mentioned, royalty amount will go to the propositiona bytes of the issuer box. In the case of a simple proxy contract (proposition bytes of the issuer box), this means that the artist will receive the royalty share. However, the proxy contract may enforce the royalty to go to any other complex contract - e.g., 20% to the artist, and 80% to some charity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Design V2</h2>
          <p className="text-gray-300 mb-4">
            Version 2 of this proposal is created to both extend this proposal to include collections and fix some poor design choices that were caused by the AOT costing issues. The following is the v2 standard for the issuer box.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R4</code> is an integer showing the artwork standard version. If This register is empty, the type is something other than <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Int</code>, or the number is greater or equal to 100 then it should be considered as part of V1 design. Otherwise, this register shows the version number for the standard, i.e., 2 for Design V2.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R5</code> is of type <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Coll[(Coll[Byte], Int)]</code> that encodes information about royalty recipients and percentages. In particular, a list of royalty recipients and their respective percentage. The <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Coll[Byte]</code> part is the ergo tree of one of the royalty recipients and the <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Int</code> part shows 1000 * royalty percentage of this recipient (e.g. 50 if the receipient receives 5% of the sale). The total royalty percentage of the artwork is the sum of percentages of this list. If the list is empty, the artwork's royalty is 0%.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R6</code> contains three types of traits:
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-8 mt-2">
                <li><strong>Properties:</strong> These are textual traits such as specifying <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">sex</code> as <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">male</code>.</li>
                <li><strong>Levels:</strong> These are numerical traits that encode some sort of level-like information such as specifying <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">speed</code> as <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">60 out of 100</code>.</li>
                <li><strong>Stats:</strong> These are numerical traits that encode any numerical information about the NFT such as specifying <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">age</code> as <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">25 out of 50</code>.</li>
              </ul>
            </li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R7</code> of this box contains token ID of the collection as <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Coll[Byte]</code> otherwise it is an empty <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Coll[Byte]</code>.</li>
            <li><code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">R8</code> of this box is <code className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Coll[(Coll[Byte], Coll[Byte])]</code> specifying other additional information about the artwork.</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Although the structure of levels and stats are similar, they can be considered different in marketplaces both for UI/UX purposes and also for filtering purposes.
          </p>
          <p className="text-gray-300 mb-4">
            The following specifies the structure for traits.
          </p>
          <CodeBlock language="typescript">
    {String.raw`( // properties
  Coll[(  
    Coll[Byte],  // key
    Coll[Byte]   // value
  )],
  ( // levels
    Coll[(
      Coll[Byte],  // key
      (Int, Int)   // value, max
    )],
    // stats
    Coll[(
      Coll[Byte],  // key
      (Int, Int)   // value, max
    )]
  )
)`}
  </CodeBlock>
          <p className="text-gray-300 mb-4 mt-4">
            If a list is empty(e.g., there is no <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">levels</code>) then the corresponding <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">Coll</code> should be empty. Keys are case-insensitive which means for example, marketplaces should treat "KeY" the same as "key". Moreover, keys should be consistent across different artworks of a specific collection. For example, if "key1" is a property trait, it should always be used as a property trait in all artworks of a specific collection.
          </p>
          <p className="text-gray-300 mb-4">
            All <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">Coll[Byte]</code> types in the above structure are UTF-8 text encoded as <code className="bg-neutral-800 px-1 py-0.5 rounded text-pink-300">Coll[Byte]</code>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Artist Identity</h2>
          <p className="text-gray-300 mb-4">
            Artist identity is very important for any auction house to eliminate NFT copies and scams for the end-users.
          </p>
          <p className="text-gray-300 mb-4">
            The identity of the artist can not necessarily be determined with the issuance box (unless it is a P2PK box) since its correctness can not be verified, e.g., one can impersonate an artist.
          </p>
          <p className="text-gray-300 mb-4">
            Hence, the artist's identity and address are determined with the first P2PK input in the chain of transactions leading to the artwork issuance. This means that in the case of using proxy contracts, the first input of the transaction that is sending the funds to the proxy contract is going to determine the artist's identity.
          </p>
        </section>
      </div>
    </>
  );
} 