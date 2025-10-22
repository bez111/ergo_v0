"use client";

import React from "react";
import { List } from "lucide-react";

export default function TradingPage() {
  return (
    <div className="px-4 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <List className="w-6 h-6 text-cyan-400" /> Trading
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          This page is under construction. More information about Trading tools and strategies will be available soon.
        </p>
      </div>
    </div>
  );
} 