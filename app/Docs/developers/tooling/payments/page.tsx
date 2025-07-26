"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const paymentTools = [
  {
    title: "ErgoPay",
    content: "A protocol for secure wallet interaction via QR codes and deep links. Enables mobile wallet signing for dApps and web apps.",
    url: "/Docs/developers/tooling/payments/ergopay"
  },
  {
    title: "ErgoAuth",
    content: "Authentication protocol for dApps using Ergo wallets. Allows users to sign in with their wallet securely.",
    url: "/Docs/developers/tooling/payments/ergoauth"
  },
  {
    title: "dApp Connector",
    content: "Browser extension and protocol for connecting dApps to Ergo wallets. Used by Nautilus and other wallets.",
    url: "/Docs/developers/tooling/payments/dapp-connector"
  },
  {
    title: "Proxy Contracts",
    content: "Smart contract patterns enabling delegated payments, multi-step transactions, and advanced dApp logic.",
    url: "/Docs/developers/tooling/payments/proxy-contracts"
  }
];

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.title}
            </h3>
            <div className="text-gray-300 leading-relaxed mb-2">{item.content}</div>
          </div>
          <div className="text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-3 right-3 hover:underline">
            Learn more
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Payment Protocols & Tools
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        Explore the main protocols and tools for payments and wallet interaction in the Ergo ecosystem. These solutions enable secure, user-friendly dApp experiences and advanced payment flows.
      </div>
      <CardGrid items={paymentTools} />
    </>
  );
} 