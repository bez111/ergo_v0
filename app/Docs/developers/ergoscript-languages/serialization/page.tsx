"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Database } from "lucide-react";

export default function ErgoTreeSerializationPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Database className="w-10 h-10 text-purple-400" />
        Serialization
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="text-lg text-gray-300 mb-8 max-w-2xl">
        <p>Binary format and serialization of ErgoTree structures.</p>
        <p className="mt-4 text-yellow-400">Content coming soon...</p>
      </div>
    </>
  );
} 