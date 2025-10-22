"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ScryptoPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Scrypto: A Comprehensive Cryptographic Toolkit
      </h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/libraries"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        <a href="https://github.com/input-output-hk/scrypto" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Scrypto</a> is a comprehensive open-source cryptographic toolkit, designed to streamline and bolster the integration of cryptography into your applications. It offers a plethora of features to aid in secure data management and verification.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Highlighted Features of Scrypto</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        <li>
          <b>AVL+ Trees:</b> AVL+ Trees are a specialized type of self-balancing binary search tree. They ensure efficient and secure access to your data, guaranteeing optimal performance and data integrity.
        </li>
        <li>
          <b>Batch Merkle Proof Serialization and Deserialization:</b> This functionality enables efficient validation of the integrity and authenticity of your data transactions. It supports the serialization and deserialization of Merkle proofs in batches, significantly improving the speed and efficiency of data verification processes.
        </li>
      </ul>
      <div className="text-gray-300 mb-8 max-w-2xl">
        Scrypto is built on the robust foundation of <a href="https://github.com/scorexfoundation/scorex" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Scorex</a>, a modular open-source platform renowned for its sturdy blockchain and cryptocurrency frameworks. By utilizing Scrypto, developers can leverage powerful and reliable cryptographic functionalities, thereby reducing the risks associated with such implementations and significantly enhancing the security of their applications.
      </div>
    </>
  );
} 