import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Database, AlertTriangle, Info, FileText, ExternalLink, Image, History, Code } from 'lucide-react';

export default function OnChainNFTPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
            <Database className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              On-chain NFTs
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Storing images directly on the blockchain
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

      {/* Warning Admonition */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Warning</h3>
            <p className="text-gray-300">
              This method is not yet incorporated in <Link href="/Docs/developers/data-model-apis/assets/nfts/eip4" className="text-cyan-400 hover:underline">EIP-0004: Asset Standard</Link>. For more information, refer to this discussion <a href="https://discord.com/channels/668903786361651200/940209605299036170/942656843619106827" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">on Discord</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Technical Aspects Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Code className="w-6 h-6" />
            On-chain NFTs: Technical Aspects
          </h2>
          <p className="text-gray-300 mb-6">
            On-chain NFTs on Ergo differ from <Link href="#the-technical-aspects-of-regular-ergo-nfts" className="text-cyan-400 hover:underline">regular NFTs</Link> as they store images directly on the blockchain, specifically in the <code className="bg-neutral-700 px-2 py-1 rounded">R9</code> register of the NFT box. This eliminates the need for third-party storage. However, this comes with a size constraint. The maximum size for on-chain NFTs on Ergo is approximately <strong>3.5 Kb</strong>, considering space for the NFT name, description, and other data within the total <strong>4 Kb</strong> limit. This constraint challenges artists to create captivating pieces within a limited space.
          </p>
          
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Steps to create an on-chain SVG:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Draw a relatively simple image in SVG vector format and manually optimize your art: smooth lines, remove minor details, reduce the number of colors, etc. Further optimize using svg-optimizers.</li>
            <li>Convert your *.svg file to <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Data URI format</a> (<em>there are many online/offline converters available</em>).</li>
            <li>Check if your data fits within the <strong>4 kb</strong> box limit (&lt;3.5 Kb). If not, return to the first step.</li>
            <li>Place this data in the <code className="bg-neutral-700 px-2 py-1 rounded">R9</code> register.</li>
            <li><strong>Most challenging part</strong>: <a href="https://docs.ergoplatform.com/dev/tokens/nfts/nft-examples/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mint</a> the NFT using a tool that allows you to manipulate the <code className="bg-neutral-700 px-2 py-1 rounded">R9</code> register.</li>
          </ol>
        </div>

        {/* Textual Data Tip */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Textual Data</h3>
              <p className="text-gray-300">
                If the data is textual, you can embed the text (using the appropriate entities or <strong>escapes</strong> based on the enclosing document's type). Otherwise, you can specify <strong>base64</strong> to embed base64-encoded binary data.
              </p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <Image className="w-6 h-6" />
            Examples of On-chain Collections
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Vector Minimalism collection:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li><a href="https://ergotokens.org/#/?token=62e9e8fc25e148a35e4bb99d70b810a897e78a7fd26adda0e8335a2ad17ef58c" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Landscape #06. View from the train window</a></li>
                <li><a href="https://ergotokens.org/#/?token=cf3f157c32c22749742fb0acc85aa07e6640b61290b26a89efd9e40f5070a938" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Landscape #08. Flight over the desert</a></li>
                <li><a href="https://ergotokens.org/#/?token=1d7430bacd2a0b1d83366cfad766a8dfb221c2de80ee95ab271a29bfdf7fc0a0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Monument #11. Moai</a></li>
                <li><a href="https://ergotokens.org/#/?token=d935e4fa226bbd89dfc37e45f5a6bbcdee259f1368210aca61f1b6183e01c408" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Monument #02. Spring Temple Buddha</a></li>
              </ul>
              <div className="bg-neutral-700 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">VectorMinimalism</p>
                <img src="https://github.com/ergoplatform/ergodocs/assets/99899807/10efaf86-a7ba-46ec-a620-db9a4f59a29a" alt="VectorMinimalism" className="max-w-full h-auto" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Tokenart collection uses SVG as a container for ASCII art:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                <li><a href="https://ergotokens.org/#/?token=14435234f5fdf1bfc0f98c2186512db292266bf4ac8d0c74f6ad056dcfaf36d1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Tokenart Cat #2</a></li>
                <li><a href="https://ergotokens.org/#/?token=723f7eb846895bd0294619300488eb1974e6827e27d1624289019b42ec7252a3" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Tokenart Shark #2</a></li>
              </ul>
              <p className="text-gray-300 mb-4">The SVG contains pure text:</p>
              <div className="bg-neutral-700 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">svgASCII</p>
                <img src="https://github.com/ergoplatform/ergodocs/assets/99899807/02b1142b-a25d-4cc4-8092-c6026baa046c" alt="svgASCII" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <History className="w-6 h-6" />
            A Brief History
          </h2>
          <p className="text-gray-300 mb-4">
            During the spring and summer of 2021, there were several on-chain projects on Cardano. For instance, the <a href="https://pool.pm/6c4fd3073bca09e62e85463e3380546e49d0344e7996c4d1b4cd0bd3.SHDEMO6" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">on-chain interactive NFT</a> stored an entire <a href="https://cardanoscan.io/transaction/f685d279cfce4eedea32488c60331ea8d0e0b2f3015c6825959dc6c7f6f023fb?tab=metadata" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">HTML page with JS in its metadata</a>. However, if we delve deeper into history, we find that the pioneers were the team from Larva Labs with their <a href="https://www.larvalabs.com/autoglyphs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">autoglyphs</a> project, which was an ETH smart contract dated April 2019.
          </p>
          <p className="text-gray-300 mb-4">
            The NFT hype in the fall of 2021 led to the emergence of guides <a href="https://youtube.com/watch?v=9oERTH9Bkw0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">like this</a> on on-chain NFT mining.
          </p>
          <p className="text-gray-300 mb-6">
            The first Ergo <a href="https://ergotokens.org/#/?token=2994d36afcfaf29bb2cfbdcc5280bdd117852ef14044bf9c01b87a83dba8b2c6" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">on-chain NFT</a> was minted on 18/8/2021. You can find the related discussion <a href="https://discord.com/channels/668903786361651200/669989266478202917/1010794626338263100" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>. This was achieved by transforming the data into a <strong>Data URI</strong> and encoding it into the <code className="bg-neutral-700 px-2 py-1 rounded">R9</code> register.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Size Restrictions</h4>
                <p className="text-gray-300">
                  There are no size restrictions for a register, only for the entire box itself, which is limited to <strong>4 Kb</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular NFTs Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 id="the-technical-aspects-of-regular-ergo-nfts" className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            The Technical Aspects of Regular Ergo NFTs
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>What should we know about Ergo NFTs?</strong>
          </p>
          <p className="text-gray-300 mb-6">
            Let's consider an NFT with the ID <a href="https://ergotokens.org/#/?token=47394b9319353dee45621c5a8d1ffb00cc21c946913f148df5fa4f721fefa8d0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline"><strong>47394b9319353dee45621c5a8d1ffb00cc21c946913f148df5fa4f721fefa8d0</strong></a>, also known as <a href="https://v1.ergoauctions.org/#/auction/specific/f5c660c3b9b4c2c17b98c094126134d3aacca977efe036dd41ab34b43fcfad71" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">AH v.1 link</a>.
          </p>
          <p className="text-gray-300 mb-6">
            Here's how the NFT's name, description, and URL are stored on each Ergo node, among the <a href="https://explorer.ergoplatform.com/en/charts/blockchain-size" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">40 GB+</a> of all blockchain data.
          </p>
          
          <ul className="space-y-4 text-gray-300">
            <li><strong>NFT minting transaction</strong> on Ergo explorer: <a href="https://explorer.ergoplatform.com/en/transactions/153051163bdaeae8ff31dab0ea15e48bfe97b2f60e57fe30de08d9e102389df9" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Tx</a></li>
            <li><strong>NFT name</strong> stored in register <code className="bg-neutral-700 px-2 py-1 rounded">R4</code>:
              <div className="bg-neutral-700 rounded-lg p-4 mt-2">
                <img src="https://github.com/ergoplatform/ergodocs/assets/99899807/ad99a442-6569-4f66-b3e2-3c0279bc28ec" alt="NFT_R4" className="max-w-full h-auto" />
              </div>
            </li>
            <li><strong>NFT description</strong> stored in register <code className="bg-neutral-700 px-2 py-1 rounded">R5</code>:
              <div className="bg-neutral-700 rounded-lg p-4 mt-2">
                <img src="https://github.com/ergoplatform/ergodocs/assets/99899807/59e3428b-2ed5-45dc-aca3-29c77dbd3a05" alt="NFT_R5" className="max-w-full h-auto" />
              </div>
            </li>
            <li><strong>NFT image URL</strong> stored in register <code className="bg-neutral-700 px-2 py-1 rounded">R9</code>:
              <div className="bg-neutral-700 rounded-lg p-4 mt-2">
                <img src="https://github.com/ergoplatform/ergodocs/assets/99899807/5f5838ca-ae99-43eb-aab4-d2d774c3ff83" alt="NFT_R9" className="max-w-full h-auto" />
              </div>
            </li>
          </ul>
          
          <div className="bg-neutral-700 rounded-lg p-4 mt-6">
            <p className="text-gray-300">
              You can convert hex to string <a href="https://string-functions.com/hex-string.aspx" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">online</a>
            </p>
          </div>
          
          <p className="text-gray-300 mt-6">
            This is the underlying structure of the majority of NFTs on all blockchains (Ergo, Cardano, Ethereum, etc). In essence, only the name, description, and image link are stored on the blockchain (other technical parameters depending on the blockchain/NFT standard have been omitted for simplicity).
            The image itself is stored on a third-party storage service (like ipfs, imgbb.com, etc).
          </p>
        </div>
      </div>
    </>
  );
} 