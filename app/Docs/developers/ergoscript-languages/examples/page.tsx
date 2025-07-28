"use client";
import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  FileText, 
  Unlock, 
  Lock, 
  Settings, 
  Code, 
  Key, 
  Cpu, 
  Database, 
  Archive, 
  Rocket 
} from "lucide-react";

export default function ExamplesPage() {
  const exampleSections = [
    {
      title: "Public Contracts",
      description: "Learn how to create publicly accessible smart contracts that anyone can interact with on the Ergo blockchain.",
      icon: FileText,
      color: "text-cyan-400",
      link: "/Docs/developers/ergoscript-languages/examples/public-contracts"
    },
    {
      title: "Anyone Can Spend",
      description: "Understand contracts where any user can spend the locked funds, useful for specific dApp scenarios.",
      icon: Unlock,
      color: "text-green-400",
      link: "/Docs/developers/ergoscript-languages/examples/anyone-can-spend"
    },
    {
      title: "No-one Can Spend",
      description: "Explore permanently locked contracts that demonstrate burn mechanisms and provably unspendable boxes.",
      icon: Lock,
      color: "text-red-400",
      link: "/Docs/developers/ergoscript-languages/examples/no-one-can-spend"
    },
    {
      title: "Context Variables",
      description: "Master the use of blockchain context variables like HEIGHT, SELF, INPUTS, and OUTPUTS in your contracts.",
      icon: Settings,
      color: "text-orange-400",
      link: "/Docs/developers/ergoscript-languages/examples/context-variables"
    },
    {
      title: "Code-blocks",
      description: "Learn how to structure and organize ErgoScript code using blocks, functions, and control flow.",
      icon: Code,
      color: "text-purple-400",
      link: "/Docs/developers/ergoscript-languages/examples/code-blocks"
    },
    {
      title: "Public-keys",
      description: "Implement cryptographic proofs and signature verification using public keys in smart contracts.",
      icon: Key,
      color: "text-yellow-400",
      link: "/Docs/developers/ergoscript-languages/examples/public-keys"
    },
    {
      title: "Functional Programming",
      description: "Discover functional programming patterns and higher-order functions in ErgoScript development.",
      icon: Cpu,
      color: "text-blue-400",
      link: "/Docs/developers/ergoscript-languages/examples/functional-programming"
    },
    {
      title: "Box Structure",
      description: "Deep dive into Ergo's box model, registers, tokens, and how to manipulate box data structures.",
      icon: Database,
      color: "text-pink-400",
      link: "/Docs/developers/ergoscript-languages/examples/box-structure"
    },
    {
      title: "Storing Data",
      description: "Learn various methods for storing and retrieving data in Ergo boxes using registers and tokens.",
      icon: Archive,
      color: "text-teal-400",
      link: "/Docs/developers/ergoscript-languages/examples/storing-data"
    },
    {
      title: "Creating a simple P2S app",
      description: "Step-by-step guide to building your first Pay-to-Script application on the Ergo platform.",
      icon: Rocket,
      color: "text-indigo-400",
      link: "/Docs/developers/ergoscript-languages/examples/simple-p2s-app"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Examples
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
        Practical examples and use cases demonstrating ErgoScript capabilities for smart contract development. From basic contracts to advanced patterns, these examples will help you master Ergo's unique blockchain programming model.
      </div>

      {/* Examples Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {exampleSections.map((section, index) => {
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
    </>
  );
} 