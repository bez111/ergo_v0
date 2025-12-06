"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function KioskPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        ErgoScript Playground with KioskWeb
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/playgrounds"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Playgrounds
        </Link>
      </div>

      <div className="space-y-8">
        <div className="bg-amber-900/20 border border-amber-500/50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-amber-400">Archive</h3>
          </div>
          <p className="text-gray-300">
            The Kiosk repository has been archived by the owner on May 26, 2022. It is now read-only.
          </p>
        </div>

        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            <a href="https://github.com/scalahub/KioskWeb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              KioskWeb
            </a>, built on top of the{' '}
            <a href="https://github.com/scalahub/Kiosk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Kiosk
            </a>{' '}
            project, offers a user-friendly web interface to interact with ErgoScript. It allows you to perform the following actions:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Define boxes with custom ErgoScript code and register values.</li>
            <li>Create transactions that output specific predefined boxes.</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Getting Started</h2>

        <div className="text-gray-300 mb-6">
          <p className="mb-4">
            KioskWeb requires a fully configured Ergo node to be running. By default, it assumes the node's REST API is accessible at http://localhost:9052. You can modify this by invoking the method <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">org.sh. Kiosk.ergo.ErgoAPI.setUrl</code> from the web-UI.
          </p>
          <p className="mb-4">
            A precompiled jar is available{' '}
            <a href="https://github.com/scalahub/Kiosk/releases/tag/0.1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              here
            </a>. You can run it using the command <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">java -jar &lt;jarfile&gt;</code>. If you wish to generate the jar from sources, issue the command <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sbt assembly</code>.
          </p>
          <p className="mb-4">
            To operate a local copy (the recommended approach), clone the project and follow one of these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Run sbt using the command <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sbt</code>. Inside the sbt prompt, type <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">jetty:start</code>. This command initiates the built-in Jetty web server on port 8080, which can be accessed at http://localhost:8080.
            </li>
            <li>
              Compile the war file using <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">sbt package</code>. Then, run the war file as you would with any other J2EE application.
            </li>
          </ol>
          <p className="mt-4 mb-4">
            Currently, KioskWeb relies solely on ergo-appkit and utilizes the public explorer for posting transactions, thus eliminating the need for a local running Ergo node.
          </p>
          <p className="mb-4">
            Appkit handles the signing process, replicating a large part of the Ergo node wallet's functionality locally, as both are JVM-based.
          </p>
          <p className="mb-4">
            KioskWeb provides a "multi-tenant" environment as each URL corresponds to a private instance of the script environment and box storage. This setup allows you to bookmark a URL and revisit it later to find your declared variables and boxes intact. Unless someone has the same URL, they won't be able to view or modify your environment.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Usage</h2>

        <div className="text-gray-300 mb-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              Establish the environment for use in ErgoScript. This environment consists of a map of (key, value) pairs, with keys referenced within the ErgoScript code and set in the boxes' registers.
            </li>
            <li>
              Define one or more boxes using ErgoScript code, including some registers if necessary.
            </li>
            <li>
              Generate and send a transaction containing certain boxes predefined in the previous step.
            </li>
          </ol>
          <p className="mt-4">
            The final output will be the transaction ID and the request made to the Ergo node's API.
          </p>
        </div>
      </div>
    </>
  );
} 