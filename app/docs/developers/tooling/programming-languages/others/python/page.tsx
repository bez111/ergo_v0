"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const frameworks = [
  {
    title: "ergpy",
    content: "A Python-JVM wrapper for interacting with the Ergo blockchain. Simple for prototyping and scripting.",
    url: "https://github.com/mgpai22/ergpy",
    external: true,
  },
  {
    title: "AppKit Python",
    content: (
      <>
        Use <Link href="/docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">AppKit</Link> from Python for direct JVM-based blockchain access.
      </>
    ),
    url: "https://github.com/ergoplatform/ergo-appkit/wiki/Using-Appkit-from-Python",
    external: true,
  },
];

function CardGrid({ items }: { items: Array<{ title: string; content: React.ReactNode; url: string; external: boolean }> }) {
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
            {item.content && <div className="text-gray-300 leading-relaxed mb-2">{item.content}</div>}
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </a>
      ))}
    </div>
  );
}

export default function PythonPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Python
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/programming-languages/others"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Python developers can interact with the Ergo blockchain using various <Link href="/docs/developers/tooling/libraries" className="text-cyan-400 hover:underline">libraries</Link> and <Link href="/docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">bindings</Link>. <b>Python bindings for sigma-rust</b> are also available, providing core blockchain interaction capabilities such as transaction building, signing, and off-chain logic.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Python Frameworks & Libraries</h2>
      <CardGrid items={frameworks} />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoPad & Related Tools</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        <Link href="/docs/developers/tooling/ergopad" className="text-cyan-400 hover:underline">ErgoPad</Link> provides a set of Docker containers for rapid Ergo dApp development: a React/MaterialUI <Link href="/docs/developers" className="text-cyan-400 hover:underline">frontend</Link>, <Link href="/docs/developers/tooling/api" className="text-cyan-400 hover:underline">REST API</Link> backend, <Link href="/docs/developers/tooling/assembler" className="text-cyan-400 hover:underline">assembler</Link> for smart contract interaction, and support services such as <Link href="/docs/developers/infrastructure/node/setup" className="text-cyan-400 hover:underline">ergonode</Link>, Redis, and Postgres.
      </div>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>
          <a href="https://github.com/ergopad/ergopad-api/blob/dev/app/contracts/NFTLockedVesting.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            NFT-Locked Vesting
          </a>
        </li>
        <li>
          <a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            ergo-python-appkit
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Bindings</h2>
      <div className="text-gray-300 mb-8 max-w-2xl">
        See also: <Link href="/docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">Python bindings for sigma-rust</Link> for direct cryptography and transaction access.
      </div>
    </>
  );
}
