"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const frameworks = [
  {
    title: "🔗 ergpy",
    content: "A python-jvm wrapper for interacting with the Ergo blockchain.",
    url: "https://github.com/mgpai22/ergpy",
    external: true
  },
  {
    title: "🔗 AppKit",
    content: (
      <>
        Using <Link href="/Docs/developers/tooling/appkit" className="text-cyan-400 hover:underline">Appkit</Link> from Python
      </>
    ),
    url: "https://github.com/ergoplatform/ergo-appkit/wiki/Using-Appkit-from-Python",
    external: true
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

export default function PythonPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Python</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/programming-languages/others"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Python developers can interact with the Ergo blockchain using various <Link href="/Docs/developers/tooling/libraries" className="text-cyan-400 hover:underline">libraries</Link> and <Link href="/Docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">bindings</Link>. Notably, <Link href="/Docs/developers/tooling/sigma-rust#bindings" className="text-cyan-400 hover:underline">Python bindings for sigma-rust</Link> are available, providing core <Link href="/Docs/developers/tooling/interact" className="text-cyan-400 hover:underline">blockchain interaction</Link> capabilities.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Frameworks</h2>
      <CardGrid items={frameworks} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoPad</h2>
      <p className="text-gray-300 mb-4 max-w-2xl">
        <Link href="/Docs/developers/tooling/ergopad" className="text-cyan-400 hover:underline">ErgoPad</Link> has <a href="https://github.com/ergopad" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">released a set of docker containers</a> combined to create a React/MaterialUI <Link href="/Docs/developers/getting-started" className="text-cyan-400 hover:underline">frontend</Link>, <Link href="/Docs/developers/tooling/api" className="text-cyan-400 hover:underline">REST API</Link> <span className="text-cyan-400">backend</span>, <Link href="/Docs/developers/tooling/assembler" className="text-cyan-400 hover:underline">assembler</Link> to interact with <Link href="/Docs/developers/tooling/ergoscript" className="text-cyan-400 hover:underline">smart contracts</Link> and supporting services like <Link href="/Docs/developers/infrastructure/node/setup" className="text-cyan-400 hover:underline">ergonode</Link>, redis and postgres.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li><a href="https://github.com/ergopad/ergopad-api/blob/dev/app/contracts/NFTLockedVesting.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">NFT-Locked Vesting</a></li>
        <li><a href="https://github.com/ergo-pad/ergo-python-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-python-appkit</a></li>
      </ul>
    </>
  );
} 