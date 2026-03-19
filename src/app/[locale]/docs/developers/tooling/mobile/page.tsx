"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

interface MobileCardItem {
  title: string;
  content: string;
  url: string;
}

const mobileCards = [
  {
    title: "iOS",
    content: "Develop and deploy Ergo dApps for iOS devices.",
    url: "/docs/developers/tooling/mobile/ios"
  },
  {
    title: "Android",
    content: "Develop and deploy Ergo dApps for Android devices.",
    url: "/docs/developers/tooling/mobile/android"
  },
  {
    title: "Build Constraints",
    content: "Important platform-specific limitations and requirements.",
    url: "/docs/developers/tooling/mobile/constraints"
  }
];

function CardGrid({ items }: { items: MobileCardItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <a
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
        </a>
      ))}
    </div>
  );
}

export default function MobilePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Mobile
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
      <CardGrid items={mobileCards} />
    </>
  );
} 