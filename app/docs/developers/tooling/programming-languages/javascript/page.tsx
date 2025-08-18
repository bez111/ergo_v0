"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const frameworks = [
  {
    title: "Fleet",
    content: "Lets you easily create Ergo transactions with a pure JS library.",
    url: "/Docs/developers/tooling/fleet"
  },
  {
    title: "Sigma.JS",
    content: "JavaScript port of the sigmastate-interpreter",
    url: "/Docs/developers/tooling/sigmajs"
  },
  {
    title: "AppKit",
    content: "Can be configured to run JavaScript under GraalVM.",
    url: "/Docs/developers/tooling/frameworks/appkit"
  },
  {
    title: "sigma-rust (via WASM)",
    content: "Core Rust library with JS/TS bindings available via WebAssembly.",
    url: "/Docs/developers/tooling/frameworks/sigmarust"
  }
];

const tutorials = [
  {
    title: "🔗 dAppStep Docs",
    content: "Include many practical examples with Javascript and Nodejs that will help you to understand to implement different aspects of dapp functionality on Ergo.",
    url: "https://www.dappstep.com/",
    external: true
  },
  {
    title: "🔗 dApp Development Course",
    content: "",
    url: "https://www.youtube.com/watch?v=uC6QO3I4m8o&list=PLzY-irO3z3G8FVDifned2NMFc-PgQqnny",
    external: true
  },
  {
    title: "📹 Video Tutorial",
    content: "NightOwl dApp Connector React Package",
    url: "/Docs/developers/tooling/dApp",
    external: false
  },
  {
    title: "Address Generation Demo",
    content: "using sigma-rust and TypeScript",
    url: "https://github.com/ergoplatform/sigma-rust/blob/develop/bindings/ergo-lib-wasm/examples/address-generation-demo/README.md",
    external: true
  },
  {
    title: "Create Transaction Demo",
    content: "using sigma-rust and TypeScript",
    url: "https://github.com/ergoplatform/sigma-rust/blob/develop/bindings/ergo-lib-wasm/examples/create-transaction-demo/README.md",
    external: true
  }
];

const resources = [
  {
    title: "Ergo-Raffle-Bot",
    url: "https://github.com/zkastn/ergo-raffle-bot"
  },
  {
    title: "ErgoScript.js",
    url: "https://www.youtube.com/watch?v=_jwMI8M_vrs"
  },
  {
    title: "Ergo Raffle documentation",
    url: "https://github.com/ErgoRaffle/raffle-documentation"
  },
  {
    title: "hypo10use/quid-games (Angular)",
    url: "https://github.com/hypo10use/quid-games"
  }
];

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <a
          key={item.title}
          href={item.url}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
              {item.external && <ExternalLink className="w-4 h-4 text-cyan-400" />}
            </h3>
            {item.content && <p className="text-gray-300 leading-relaxed mb-2">{item.content}</p>}
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </a>
      ))}
    </div>
  );
}

export default function JavascriptPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">JavaScript &amp; TypeScript</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        JavaScript and TypeScript developers can interact with the Ergo blockchain using various libraries and frameworks. Notably, <Link href="/Docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">JS/TS bindings for sigma-rust</Link> (via WebAssembly) provide core blockchain interaction capabilities.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        <Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">Appkit</Link> was designed as an abstraction layer on top of <Link href="/Docs/developers/cryptographic-primitives" className="text-cyan-400 hover:underline">Sigma</Link>. This gives a lot of freedom on the core level in Sigma, while keeping <Link href="/Docs/developers/tooling/api" className="text-cyan-400 hover:underline">dApp-facing APIs</Link> stable.
      </p>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        With the availability of <Link href="/Docs/developers/tooling/sigmajs" className="text-cyan-400 hover:underline">Sigma.js</Link>, <Link href="/Docs/developers/tooling/fleet" className="text-cyan-400 hover:underline">Fleet</Link> can play the same role for JS/TS.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Frameworks</h2>
      <CardGrid items={frameworks} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorials</h2>
      <CardGrid items={tutorials} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        {resources.map((item) => (
          <li key={item.title}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-medium">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
} 