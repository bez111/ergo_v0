
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { ArrowLeft, Wallet, CreditCard, ArrowDown, Coins } from "lucide-react";
import Link from "next/link";

export default function WithdrawPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Wallet className="w-8 h-8 text-brand-primary-400" />
          Withdraw
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          How to withdraw your mining rewards from solo mining. Wallet setup and transaction guides.
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link 
          href="/docs/miners/mining-guides" 
          className="inline-flex items-center gap-2 text-brand-primary-400 hover:text-brand-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mining Guides
        </Link>
      </div>

      {/* Content Placeholder */}
      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
        <ArrowDown className="w-16 h-16 text-brand-primary-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Content Coming Soon</h2>
        <p className="text-gray-400">
          Withdrawal guides and wallet integration instructions will be added here.
        </p>
      </div>
    </div>
  );
} 