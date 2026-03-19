"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

interface DesktopCardItem {
  title: string;
  content: string;
  url: string;
}

const platformCards = [
  {
    title: "JVM",
    content: "",
    url: "../lang/jvm.md"
  },
  {
    title: "JavaFX",
    content: "",
    url: "../lang/jvm.md"
  },
  {
    title: "Rust",
    content: "",
    url: "../lang/rust.md"
  },
  {
    title: "JS/TS + Electron",
    content: "",
    url: "../lang/js.md"
  },
  {
    title: "Python",
    content: "",
    url: "../lang/python.md"
  }
];

const exampleCards = [
  {
    title: "🔗 Ergo Wallet",
    content: "",
    url: "https://github.com/ergoplatform/ergo-wallet-app"
  },
  {
    title: "🔗 ErgoMixer",
    content: "",
    url: "https://github.com/ergoMixer"
  },
  {
    title: "🔗 Satergo",
    content: "",
    url: "https://satergo.com/"
  }
];

function CardGrid({ items }: { items: DesktopCardItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
            </h3>
            {item.content && <p className="text-gray-300 leading-relaxed mb-2">{item.content}</p>}
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function DesktopPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Desktop
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/development-stack"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Platforms</h2>
      <CardGrid items={platformCards} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Examples</h2>
      <CardGrid items={exampleCards} />
    </>
  );
} 