"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const platformCards = [
  {
    title: "JS/TS",
    content: "Frontend development with JavaScript, TypeScript",
    url: "../lang/js.md"
  },
  {
    title: "Rust",
    content: "Sigma Rust can be used in front-end development",
    url: "../lang/rust.md"
  }
];

const paymentCards = [
  {
    title: "ErgoPay",
    content: "Ergo's dApp connector for non-web wallet applications",
    url: "../wallet/payments/ergopay/ergo-pay.md"
  },
  {
    title: "dApp Connector",
    content: "For web-based wallets (Nautilus/SAFEW)",
    url: "../wallet/payments/dApp.md"
  }
];

function CardGrid({ items }: { items: any[] }) {
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

export default function BrowserPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Browser
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/development-stack"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8">
        There are a couple of options developers can pick from to interact with the user in browser. You will first need to decide if you want to develop using JavaScript or Rust. You'll also have to decide whether you want to integrate the dApp connector or ErgoPay.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Platform</h2>
      <CardGrid items={platformCards} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Payments</h2>
      <CardGrid items={paymentCards} />
    </>
  );
} 