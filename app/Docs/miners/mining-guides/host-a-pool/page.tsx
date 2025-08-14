import React from "react";
import { ArrowLeft, Network, Server, Code, Activity } from "lucide-react";
import Link from "next/link";

export default function StratumPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Network className="w-8 h-8 text-brand-primary-400" />
          Stratum Protocol
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Understanding and implementing the Stratum mining protocol for Ergo pools.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/Docs/miners/mining-guides" 
          className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

      {/* Content Placeholder */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
        <Code className="w-16 h-16 text-brand-primary-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Content Coming Soon</h2>
        <p className="text-gray-400">
          Stratum protocol implementation guides will be added here.
        </p>
      </div>
    </div>
  );
} 