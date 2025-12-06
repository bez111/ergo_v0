"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function ErgoPayTutorialPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">ErgoPay Tutorial: Backend Integration</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/payments/ergopay"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">What we’ll do in this tutorial</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        This tutorial focuses on implementing the backend server-side for ErgoPay, building and preparing transactions. We’ll use <a href="https://spring.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spring Boot</a> to implement a simple ErgoPay REST API. Spring is JVM-based, and <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-appkit</a> is also JVM-based. You can use any other language/framework, but this tutorial uses Java for simplicity. The UI side is not covered here, but the code for the ErgoPay showcase dApp is <a href="https://github.com/MrStahlfelge/ergopay-frontend-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">open-sourced</a>.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Starting your Spring Boot project</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        You can use any IDE. Install a Java Development Kit (JDK) if you don't have one. Use OpenJDK on Linux or <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Adoptium</a> on Windows. Generate a fresh Spring Boot project with the <a href="https://start.spring.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spring Initializr</a>. Add the “Spring web” dependency. Download, extract, and open the project in your IDE.
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Start your application with Gradle:
      </div>
    </>
  );
}
