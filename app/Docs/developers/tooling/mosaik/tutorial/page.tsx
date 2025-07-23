import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  LayoutDashboard,
  Cpu,
  Zap,
  Globe,
  UploadCloud,
  BookOpen
} from "lucide-react";

export default function MosaikTutorialPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Mosaik Tutorial</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/mosaik"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Mosaik
        </Link>
      </div>
      {/* Mosaik Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/simple-ui"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-cyan-400" />
              A simple UI
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Build basic user interfaces for your dApp using Mosaik's JSON-based markup.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/processing-data"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-orange-400" />
              Processing data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Handle user input and off-chain logic for interactive dApps.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/ergopay"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              ErgoPay
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Integrate secure wallet connections and transaction signing with ErgoPay.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/web-ui"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-400" />
              Web UI
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Use Mosaik in web environments and browser-based dApps.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/deployment"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <UploadCloud className="w-6 h-6 text-green-400" />
              Deployment
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Deploy your Mosaik dApp to desktop, mobile, or web executors.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
        <Link
          href="/Docs/developers/tooling/pathways/mosaik/examples"
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Example apps
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Explore real-world Mosaik dApp examples and open-source projects.
            </p>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
            Learn more
          </div>
        </Link>
      </div>
    </>
  );
} 