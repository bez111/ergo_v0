import React from "react";
import { Layers } from "lucide-react";

export default function OffchainPage() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Layers className="w-6 h-6 text-cyan-300" /> Off-Chain Infrastructure
      </h1>
      <p className="text-gray-300 mb-2">
        Off-chain infrastructure enables scalable dApps, advanced data indexing, and complex logic that complements on-chain contracts. Learn how to leverage off-chain services for your Ergo projects.
      </p>
    </div>
  );
} 