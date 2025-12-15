"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CSharpPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Ergo Platform and C#</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/programming-languages/others"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        While C# resources for integrating with Ergo may be limited, there are several valuable resources that developers can utilize.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Tutorial Series</h2>
      <p className="text-gray-300 mb-4 max-w-2xl">
        A comprehensive tutorial series, {" "}
        <a href="https://www.youtube.com/watch?v=aUuki-fAxwc&list=PLUWruihtE-HtL-JZk8Vb4Yn_H18aE3rb6" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ergo with C# 101</a>, is available on YouTube. This series offers a detailed guide on how to interact with the Ergo Blockchain using C#.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">FleetSharp</h2>
      <p className="text-gray-300 mb-4 max-w-2xl">
        <Link href="/docs/developers/tooling/fleetsharp" className="text-cyan-400 hover:underline">FleetSharp</Link> is an ongoing open-source project. It is a sigma-type (<Link href="/docs/developers/tooling/ergotree" className="text-cyan-400 hover:underline">ErgoTree</Link>) <Link href="/docs/developers/tooling/ergotree#serialization" className="text-cyan-400 hover:underline">serializer/deserializer</Link> based on <Link href="/docs/developers/tooling/fleet" className="text-cyan-400 hover:underline">Fleet</Link>. This tool simplifies the process of converting <Link href="/docs/developers/data-model" className="text-cyan-400 hover:underline">data</Link> between compatible formats for <Link href="/docs/developers/infrastructure/node/p2p" className="text-cyan-400 hover:underline">communication</Link> and <Link href="/docs/introduction/storage-rent" className="text-cyan-400 hover:underline">storage</Link>.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        As an open-source project, FleetSharp thrives on community contributions. Developers with C# experience or those interested in learning more about Ergo integration are encouraged to contribute.
      </p>
      <p className="text-gray-300 mb-4 max-w-2xl">
        If you encounter any issues or require more detailed instructions, don't hesitate to reach out to the Ergo community. Join our {" "}
        <a href="https://discord.gg/kj7s7nb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">#development Discord channel</a> to receive support from seasoned Ergo developers and community members.
      </p>
    </>
  );
} 