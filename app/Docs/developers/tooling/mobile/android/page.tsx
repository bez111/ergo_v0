"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const platformCards = [
  {
    title: "AppKit",
    content: "A library for polyglot development of Ergo Applications",
    url: "appkit.md"
  },
  {
    title: "Mosaik",
    content: "UI system for dApps",
    url: "mosaik/intro.md"
  },
  {
    title: "sigma-rust",
    content: "Android bindings are implemented in sigma-rust",
    url: "sigma-rust.md"
  }
];

const gettingStartedCards = [
  {
    title: "Gradle",
    content: "Getting started with Gradle to build on Android.",
    url: "appkit/gradle.md"
  },
  {
    title: "📕 DeCo Intro Lessons: Build a mobile app on Android or iOS",
    url: "https://www.youtube.com/watch?v=qR0_k7VH6KI&list=PLopsKGshj0B4BpMoSMh5hQk8gVfWk-si6"
  }
];

const toolCards = [
  {
    title: "🔗 Ergo Android",
    content: "Simple application that demonstrates how Ergo Appkit can be used to develop Ergo applications running on Android.",
    url: "https://github.com/aslesarenko/ergo-android"
  }
];

function CardGrid({ items }: { items: any[] }) {
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

export default function AndroidPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Android</h1>
      <div className="mb-6">
        <Link href="/Docs/developers/tooling/mobile" className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105">
          <ArrowLeft className="w-5 h-5 mr-2" />Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8">To develop an android application you can develop with the JVM suite (Java/Kotlin/Scala).</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Platforms</h2>
      <CardGrid items={platformCards} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Getting Started</h2>
      <CardGrid items={gettingStartedCards} />
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tools</h2>
      <CardGrid items={toolCards} />
    </>
  );
} 