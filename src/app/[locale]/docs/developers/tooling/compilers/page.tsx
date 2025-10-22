"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Code, Settings, Terminal, GitBranch, Zap } from "lucide-react";

export default function CompilersPage() {
  const compilerSections = [
    {
      title: "Compiler Phases",
      description: "Understanding the compilation process from ErgoScript to ErgoTree, including parsing, type checking, and code generation phases.",
      icon: Settings,
      color: "text-blue-400",
      link: "/docs/developers/tooling/compilers/phases"
    },
    {
      title: "sigmastate-interpreter",
      description: "The reference JVM implementation of ErgoScript compiler and ErgoTree interpreter used by nodes and AppKit.",
      icon: Cpu,
      color: "text-purple-400", 
      link: "/docs/developers/tooling/compilers/sigmastate-interpreter"
    },
    {
      title: "SigmaRust",
      description: "Alternative Rust implementation of ErgoTree interpreter and transaction-building tools for cross-platform development.",
      icon: Code,
      color: "text-orange-400",
      link: "/docs/developers/tooling/compilers/sigma-rust"
    },
    {
      title: "ErgoScala",
      description: "Scala-based tools and utilities for ErgoScript development, providing native Scala integration and advanced features.",
      icon: GitBranch,
      color: "text-green-400",
      link: "/docs/developers/tooling/compilers/ergo-scala"
    },
    {
      title: "CLI Compiler",
      description: "Command-line interface tools for compiling ErgoScript contracts and managing ErgoTree bytecode from terminal.",
      icon: Terminal,
      color: "text-cyan-400",
      link: "/docs/developers/tooling/compilers/cli"
    },
    {
      title: "Rust vs Sigma",
      description: "Comparison between Rust and Sigma implementations, performance benchmarks, and choosing the right compiler for your project.",
      icon: Zap,
      color: "text-yellow-400",
      link: "/docs/developers/tooling/compilers/comparison"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Interpreters
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-gray-300 mb-8 max-w-3xl">
          There are two implementations of the ErgoScript compiler and ErgoTree interpreter for the{' '}
          <Link href="/docs/developers/ergoscript-languages/sigma-language" className="text-cyan-400 hover:underline">
            <em>'Sigma Language'</em>
          </Link>.
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2 max-w-3xl">
          <li>
            The{' '}
            <Link href="/docs/developers/tooling/compilers/sigmastate-interpreter" className="text-cyan-400 hover:underline">
              sigmastate-interpreter
            </Link>{' '}
            for JVM languages which is used by{' '}
            <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">
              AppKit
            </Link>
          </li>
          <li>
            <Link href="/docs/developers/tooling/sigma-rust" className="text-cyan-400 hover:underline">
              sigma-rust
            </Link>{' '}
            is an alternative and simple implementation of ErgoTree interpreter and transaction-building tools.
          </li>
        </ul>

        {/* Compiler Sections Grid */}
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Compiler & Interpreter Tools</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {compilerSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link
                key={index}
                href={section.link}
                className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[180px] cursor-pointer group relative"
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <IconComponent className={`w-6 h-6 ${section.color}`} />
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.description}
                  </p>
                </div>
                <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3">
                  Learn more
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
} 