import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Coins } from 'lucide-react';

export default function BoxAssetsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* HERO Section */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Coins className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Box Assets
              </h1>
              <p className="text-xl text-gray-400 mt-2">
                Understanding assets, tokens, and data structures in Ergo boxes
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/Docs/developers/data-model-apis"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Data Model APIs
            </Link>
          </div>
        </section>

        {/* Content Placeholder */}
        <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Box Assets Overview</h2>
          <p className="text-gray-300 mb-4">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
} 