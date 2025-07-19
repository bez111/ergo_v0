"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ApiTryItOutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        API Try It Out
      </h1>

      <div className="mb-8">
        <Link
          href="/Docs/developers/infrastructure/node/configuration"
          className="inline-flex items-center px-5 py-2 bg-green-500 rounded-lg font-semibold text-black hover:bg-green-600 transition hover:scale-[1.02]"
        >
          <ChevronRight className="w-5 h-5 mr-2" /> Back to Node Configuration
        </Link>
      </div>

      <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-300">
          Interactive API Testing Interface
        </h2>
        <p className="text-gray-400 text-lg">
          This page will contain the interactive API testing interface for exploring and testing Ergo node endpoints.
        </p>
      </div>
    </>
  );
}