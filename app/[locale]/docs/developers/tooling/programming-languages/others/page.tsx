"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const languages = [
  {
    title: "Python",
    content: "Popular language for scripting, automation, and data science. Explore how to interact with Ergo from Python.",
    url: "/docs/developers/tooling/programming-languages/others/python"
  },
  {
    title: "C#",
    content: "Modern, object-oriented language for .NET developers. Learn about C# tools and bindings for Ergo.",
    url: "/docs/developers/tooling/programming-languages/others/csharp"
  },
  {
    title: "Go",
    content: "Efficient, statically typed language for backend and blockchain development. See Go bindings for Ergo.",
    url: "/docs/developers/tooling/programming-languages/others/go"
  }
];

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer group relative"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">{item.title}</h3>
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

export default function OtherLanguagesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Other Languages</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/programming-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <CardGrid items={languages} />
    </>
  );
} 