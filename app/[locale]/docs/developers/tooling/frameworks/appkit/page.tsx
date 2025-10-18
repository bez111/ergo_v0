"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowLeft } from "lucide-react";

const tutorials = [
  {
    title: "General Example",
    url: "/docs/developers/tooling/appkit/frameworks/appkit/tutorial",
    content: "Step-by-step walkthrough for building and sending a transaction using Appkit."
  },
  {
    title: "Interacting with a local Node",
    url: "/docs/developers/tooling/appkit/frameworks/appkit/local-node",
    content: "How to connect Appkit to a local Ergo Node and perform basic operations."
  },
  {
    title: "Using Appkit from Python",
    url: "https://github.com/ergoplatform/ergo-appkit/wiki/Using-Appkit-from-Python",
    content: "Guide to using Appkit in Python via GraalVM polyglot features.",
    external: true
  },
  {
    title: "AppKit By Example",
    content: "Follow this example to create and programmatically send a transaction.",
    url: "https://www.youtube.com/watch?v=Md5s-XV6-Hs",
    external: true
  },
  {
    title: "ErgoPay Example",
    url: "/docs/developers/tooling/wallet/payments/ergopay/ergo-pay",
    content: "How to use ErgoPay for secure dApp-to-wallet connections and transactions."
  },
  {
    title: "Gradle",
    url: "/docs/developers/tooling/frameworks/appkit/gradle",
    content: "How to set up Appkit in your Java, Kotlin, or Android project using Gradle."
  },
];

const videos = [
  {
    title: "AppKit by Example",
    url: "https://www.youtube.com/watch?v=Md5s-XV6-Hs",
    external: true
  }
];

const codeExamples = [
  {
    title: "Appkit Examples",
    url: "https://github.com/aslesarenko/ergo-appkit-examples",
    external: true
  },
  {
    title: "Testing Ergo Contracts Off-chain",
    url: "https://github.com/anon-real/contract-testing",
    external: true
  }
];

const howToGuides = [
  {
    title: "Ergo Android",
    url: "https://github.com/aslesarenko/ergo-android",
    external: true,
    content: "Application that demonstrates how Ergo Appkit can be used to develop Ergo applications running on Android."
  }
];

const references = [
  {
    title: "ErgoTool",
    url: "https://github.com/aslesarenko/ergo-tool",
    external: true,
    content: "A Command Line Interface for Ergo based on Appkit and GraalVM native-image. Read the introduction and overview: https://ergoplatform.org/en/blog/2019_12_31_ergo_tool/"
  }
];

function CardGrid({ items }: { items: any[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 hover:border-neutral-600 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-pointer group relative"
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
        </Link>
      ))}
    </div>
  );
}

function SimpleList({ items }: { items: any[] }) {
  return (
    <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          <a href={item.url} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="text-cyan-400 hover:underline font-medium">
            {item.title}
            {item.external && <ExternalLink className="inline w-4 h-4 ml-1 align-baseline" />}
          </a>
          {item.content && <div className="text-gray-400 text-sm ml-2">{item.content}</div>}
        </li>
      ))}
    </ul>
  );
}

export default function AppKitPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">AppKit</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks/"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        <b>Ergo Appkit</b> is a library for polyglot development of Ergo Applications based on GraalVM. It is a thin wrapper around core components provided by the ErgoScript interpreter and Ergo protocol implementations which are written in Scala. It is published on <a href="https://mvnrepository.com/artifact/org.ergoplatform/ergo-appkit" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">maven repository</a> and cross-compiled to both Java 7 and Java 8+ jars.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>Fetch data from Ergo Explorer API</li>
        <li>Interact with Ergo Node, both public and private methods</li>
        <li>Build transactions and sign them</li>
        <li>Helper methods to handle cryptographic like calculating PK addresses from secrets</li>
      </ul>
      <p className="text-gray-300 mb-8 max-w-2xl">
        Using Appkit, Ergo applications can be written in one of the languages supported by GraalVM (i.e. Java, JavaScript, C/C++, Python, Ruby, R) and using this library, applications can communicate with Ergo nodes via unified API and programming model provided by Appkit. In addition, Appkit based Ergo applications can be compiled into native code using native-image ahead of time compiler and then executed without Java VM with very fast startup time and lower runtime memory overhead compared to a Java VM. This is an attractive option for high-performance, low-latency microservices.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorials</h2>
      <CardGrid items={tutorials} />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Videos</h2>
      <SimpleList items={videos} />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Code examples</h2>
      <SimpleList items={codeExamples} />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">How-to Guides</h2>
      <SimpleList items={howToGuides} />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">References</h2>
      <SimpleList items={references} />
    </>
  );
} 