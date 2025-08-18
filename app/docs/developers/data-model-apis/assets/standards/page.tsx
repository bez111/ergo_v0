import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Gavel, Palette } from 'lucide-react';

export default function StandardsPage() {
  return (
    <>
      {/* HERO Section */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Standards
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              Asset standards and verification protocols
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link 
            href="/Docs/developers/data-model-apis/assets"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assets
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Asset Standard Card */}
          <Link href="/Docs/developers/data-model-apis/assets/standards/asset-standard" className="group">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 h-full hover:bg-neutral-700/50 transition-all duration-200 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Asset Standard</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Core standards for token issuance and management on the Ergo blockchain.
              </p>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </div>
          </Link>

          {/* Genuine Token Verification Card */}
          <Link href="/Docs/developers/data-model-apis/assets/standards/genuine-token-verification" className="group">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 h-full hover:bg-neutral-700/50 transition-all duration-200 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Genuine Token Verification</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Protocols for verifying the authenticity and legitimacy of tokens.
              </p>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </div>
          </Link>

          {/* Auction Contract Card */}
          <Link href="/Docs/developers/data-model-apis/assets/standards/auction-contract" className="group">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 h-full hover:bg-neutral-700/50 transition-all duration-200 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Auction Contract</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Standardized auction mechanisms for token trading and sales.
              </p>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </div>
          </Link>

          {/* Artwork Contract Card */}
          <Link href="/Docs/developers/data-model-apis/assets/standards/artwork-contract" className="group">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 h-full hover:bg-neutral-700/50 transition-all duration-200 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Artwork Contract</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Standards for NFT artwork creation, metadata, and royalty management.
              </p>
              <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                Learn more
              </div>
            </div>
          </Link>
        </div>

        {/* Overview Section */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            Standards Overview
          </h2>
          <p className="text-gray-300 mb-6">
            Ergo provides a comprehensive set of standards for token creation, verification, and trading. These standards ensure interoperability, security, and consistency across the ecosystem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Key Benefits</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Interoperability across platforms</li>
                <li>Standardized verification processes</li>
                <li>Consistent metadata formats</li>
                <li>Secure trading mechanisms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Use Cases</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>NFT marketplace integration</li>
                <li>Cross-platform token trading</li>
                <li>Automated verification systems</li>
                <li>Royalty distribution protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 