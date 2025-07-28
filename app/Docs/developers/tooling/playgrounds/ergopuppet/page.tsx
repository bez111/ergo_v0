"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ErgoPuppetPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Ergo Puppet
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/playgrounds"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Playgrounds
        </Link>
      </div>

      <div className="space-y-8">
        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <a href="https://github.com/dav009/ergo-puppet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Ergo Puppet
            </a>{' '}
            is an advanced tool, building upon the foundational capabilities of the{' '}
            <a href="https://github.com/ergoplatform/ergo-playgrounds" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Ergo Playground
            </a>. It is designed to facilitate experimentation with and unit testing of Ergo contracts in an offchain setting.
          </p>
          <p className="mb-4">
            One of the key features of Ergo Puppet is that it heavily utilizes AppKit. This implies that the majority of your code should be compatible with Puppet without necessitating any modifications. Ergo Puppet thus serves as an efficient and seamless way to test your Ergo contracts, further simplifying the development process.
          </p>
        </div>
      </div>
    </>
  );
} 