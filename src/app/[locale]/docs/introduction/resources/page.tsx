
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { Shield, FileText, AlertTriangle, EyeOff, Globe, ChevronRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight pb-1">
        Essential Resources
      </h1>
      <p className="text-lg text-gray-400 mb-10">
        Core documents and guides that define Ergo's principles, security standards, and community practices.
      </p>
      
      <div className="grid gap-6">
        {/* Social Contract */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-orange-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">
                Social Contract
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                The foundational principles and commitments that guide Ergo's development and community governance.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/social-contract"
            className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition-colors mt-2 sm:mt-0"
          >
            Read More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Security Audit */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">
                Security Audit
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Comprehensive security analysis and audit reports ensuring the robustness of Ergo's protocol.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/audit"
            className="inline-flex items-center px-4 py-2 bg-cyan-500 rounded-lg font-semibold text-black hover:bg-cyan-600 transition-colors mt-2 sm:mt-0"
          >
            View Audit <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Privacy Guide */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <EyeOff className="w-10 h-10 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-pink-100 bg-clip-text text-transparent">
                Privacy Guide
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Best practices and tools for maintaining privacy while using the Ergo blockchain.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/privacy-guide"
            className="inline-flex items-center px-4 py-2 bg-purple-500 rounded-lg font-semibold text-black hover:bg-purple-600 transition-colors mt-2 sm:mt-0"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Howey Test */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-green-300 to-emerald-100 bg-clip-text text-transparent">
                Howey Test Analysis
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Legal analysis demonstrating why ERG is not a security under U.S. regulations.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/howey-test"
            className="inline-flex items-center px-4 py-2 bg-green-500 rounded-lg font-semibold text-black hover:bg-green-600 transition-colors mt-2 sm:mt-0"
          >
            Read Analysis <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Misconceptions */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-10 h-10 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-yellow-300 to-orange-100 bg-clip-text text-transparent">
                Common Misconceptions
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Clarifying common misunderstandings and myths about Ergo and its technology.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/misconceptions"
            className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-lg font-semibold text-black hover:bg-yellow-500 transition-colors mt-2 sm:mt-0"
          >
            Get Facts <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Research Papers */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-indigo-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-indigo-300 to-blue-100 bg-clip-text text-transparent">
                Research & Whitepapers
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Academic papers and technical documentation underlying Ergo's innovations.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/research-whitepapers"
            className="inline-flex items-center px-4 py-2 bg-indigo-500 rounded-lg font-semibold text-black hover:bg-indigo-600 transition-colors mt-2 sm:mt-0"
          >
            View Papers <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Roadmap */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Globe className="w-10 h-10 text-teal-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-teal-300 to-cyan-100 bg-clip-text text-transparent">
                Development Roadmap
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                Future plans and milestones for Ergo's protocol development and ecosystem growth.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/roadmap"
            className="inline-flex items-center px-4 py-2 bg-teal-500 rounded-lg font-semibold text-black hover:bg-teal-600 transition-colors mt-2 sm:mt-0"
          >
            Explore Future <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
