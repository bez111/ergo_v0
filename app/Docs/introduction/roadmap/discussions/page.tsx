"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RoadmapDiscussionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/Docs/introduction/roadmap"
          className="inline-flex items-center px-4 py-2 bg-neutral-800 rounded-lg font-medium text-white hover:bg-neutral-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Roadmap
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          Roadmap Discussions
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          Community discussions and feedback on Ergo's development roadmap.
        </p>
      </div>

      {/* Content placeholder */}
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400">Content coming soon...</p>
      </div>
    </div>
  );
} 