import React from "react";
import { Wallet } from "lucide-react";

export default function WalletsPage() {
  return (
    <div className="prose prose-invert max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Wallet className="w-6 h-6 text-orange-300" /> Ergo Wallets
      </h1>
      <p className="text-gray-300 mb-2">
        Discover a range of Ergo wallets for both users and developers. Secure, manage, and integrate Ergo assets with modern wallet solutions.
      </p>
    </div>
  );
} 