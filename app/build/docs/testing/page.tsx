"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, FlaskConical, FileText, CheckCircle, Terminal, BookOpen, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const testingConcepts = [
  {
    title: "Unit Testing ErgoScript",
    description: "Test individual ErgoScript functions and logic in isolation.",
    icon: Code,
  },
  {
    title: "Integration Testing dApps",
    description: "Verify interactions between your dApp components and the Ergo blockchain.",
    icon: FlaskConical,
  },
  {
    title: "Testnet Deployment",
    description: "Deploy and test your applications on Ergo testnets before mainnet.",
    icon: FileText,
  },
  {
    title: "Best Practices for Security",
    description: "Guidelines for writing secure and robust Ergo smart contracts.",
    icon: CheckCircle,
  },
]

const testingTools = [
  {
    name: "Fleet SDK",
    description: "TypeScript/JavaScript SDK with built-in testing utilities for dApps and contracts.",
    icon: Terminal,
    link: "https://fleet-sdk.github.io/docs/",
  },
  {
    name: "ErgoScript Simulator",
    description: "Online playground for testing and simulating ErgoScript contracts.",
    icon: BookOpen,
    link: "/build/playground",
  },
  {
    name: "Jest",
    description: "Popular JavaScript testing framework for unit and integration tests.",
    icon: Code,
    link: "https://jestjs.io/",
  },
  {
    name: "Testnet",
    description: "Public Ergo testnet for safe deployment and testing.",
    icon: FlaskConical,
    link: "https://docs.ergoplatform.com/dev/testnet/",
  },
]

const codeExamples = [
  {
    title: "Unit Test ErgoScript (Fleet SDK)",
    code: `import { compile } from '@fleet-sdk/compiler';
test('should compile contract', () => {
  const ergoTree = compile('sigmaProp(HEIGHT > 1000)');
  expect(ergoTree).toBeDefined();
});`,
    language: "typescript",
    doc: "https://fleet-sdk.github.io/docs/"
  },
  {
    title: "Integration Test Transaction (Fleet SDK)",
    code: `import { TransactionBuilder } from '@fleet-sdk/core';
test('should build tx', () => {
  const tx = new TransactionBuilder()
    .from(inputBoxes)
    .to(outputBox)
    .sendChangeTo(sender)
    .payFee(1000000n)
    .build();
  expect(tx).toBeDefined();
});`,
    language: "typescript",
    doc: "https://fleet-sdk.github.io/docs/"
  },
  {
    title: "Deploy to Testnet (curl)",
    code: `curl -X POST https://api-testnet.ergoplatform.com/transactions/send \
  -H "Content-Type: application/json" \
  -d '{ ... }'`,
    language: "bash",
    doc: "https://docs.ergoplatform.com/dev/testnet/"
  },
]

export default function TestingPage() {
  return (
    <main>
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-cyan-400 prose-a:underline">
        {/* Hero Section */}
        <div className="mb-12">
          <Badge className="mb-6 bg-orange-500/20 text-orange-400 border-orange-500/30">TESTING</Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
            Testing Ergo Applications
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Ensure the reliability and security of your Ergo smart contracts and decentralized applications. Explore best practices, tools, and real code examples for robust testing.
          </p>
        </div>

        {/* Key Concepts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Key Testing Concepts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingConcepts.map((concept) => (
              <div key={concept.title} className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col items-center">
                <concept.icon className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{concept.title}</h3>
                <p className="text-gray-400 text-sm text-center">{concept.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testing Tools & Frameworks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Testing Tools & Frameworks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingTools.map((tool) => (
              <div key={tool.name} className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col items-center">
                <tool.icon className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm text-center mb-3">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 hover:underline text-sm">
                  Learn more <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Code Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeExamples.map((ex) => (
              <div key={ex.title} className="bg-neutral-900/60 border border-neutral-700 rounded-xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-orange-400" />
                  <h3 className="text-md font-bold text-white">{ex.title}</h3>
                </div>
                <pre className="bg-black text-orange-200 p-3 rounded-lg overflow-x-auto font-mono text-sm mb-2">
                  <code>{ex.code}</code>
                </pre>
                <a href={ex.doc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:underline text-sm">
                  Docs <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">Want to contribute your own testing recipe? <Link href="https://github.com/ergoplatform/ergo-docs" className="text-orange-400 hover:underline">Edit this page on GitHub</Link></p>
        </div>
      </div>
    </main>
  )
}
