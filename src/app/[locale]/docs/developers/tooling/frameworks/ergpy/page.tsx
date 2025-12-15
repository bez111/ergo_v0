"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ErgpyPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Ergpy</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        <a href="https://github.com/mgpai22/ergpy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergpy</a> is a python-jvm wrapper for interacting with the Ergo blockchain.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <a href="https://github.com/dzyphr/SigmaParticle" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SigmaParticle</a>, A framework for interacting with ergo blockchain based on ergpy to be used in cross chain pipeline extensions
        </li>
      </ul>
    </>
  );
} 