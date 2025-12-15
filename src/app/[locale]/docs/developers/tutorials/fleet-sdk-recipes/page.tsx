"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { CodeBlock } from "@/components/ui";

export default function FleetSdkRecipesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
        Fleet SDK Recipes
      </h1>
      <p className="text-gray-300 mb-8">
        This page contains useful code snippets, patterns, and troubleshooting tips for common tasks when using the{" "}
        <a href="https://fleet-sdk.github.io/" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">
          Fleet SDK
        </a>{" "}
        in TypeScript/JavaScript.
      </p>

      {/* Table of Contents */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-2">Table of Contents</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-1 text-base">
          <li><a href="#box-ownership" className="text-cyan-400 hover:underline">Validating Box Ownership (SigmaProp from Register)</a></li>
          <li><a href="#numeric-registers" className="text-cyan-400 hover:underline">Working with Numeric Registers</a></li>
          <li><a href="#token-id-registers" className="text-cyan-400 hover:underline">Extracting Token IDs from Registers</a></li>
          <li><a href="#complex-types" className="text-cyan-400 hover:underline">Decoding Complex Types (Tuples, Options, Collections)</a></li>
          <li><a href="#compile-ergotree" className="text-cyan-400 hover:underline">Compiling ErgoScript to ErgoTree</a></li>
          <li><a href="#troubleshooting" className="text-cyan-400 hover:underline">Troubleshooting Common Issues</a></li>
          <li><a href="#relationship-diagram" className="text-cyan-400 hover:underline">Relationship Diagram</a></li>
          <li><a href="#related-docs" className="text-cyan-400 hover:underline">Related Documentation</a></li>
        </ul>
      </div>

      {/* 1. Validating Box Ownership */}
      <h2 id="box-ownership" className="text-2xl font-bold mt-10 mb-4">
        Validating Box Ownership (SigmaProp from Register)
      </h2>
      <p className="text-gray-300 mb-4">
        Validate if an input box belongs to a specific owner whose public key (<Link href="../scs/sigma" className="text-cyan-400 hover:underline">SigmaProp</Link>)
        is stored in another box's <Link href="../scs/boxes-and-registers" className="text-cyan-400 hover:underline">register</Link>. This is often needed for refund scenarios or proving ownership before allowing an action.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 mb-4">
        <li>Extract owner's SigmaProp bytes from a register (e.g., R4).</li>
        <li>Deserialize these bytes.</li>
        <li>Convert bytes into the owner's P2PK <Link href="../scs/ergotree" className="text-cyan-400 hover:underline">ErgoTree</Link>.</li>
        <li>Compare with the ErgoTree of the box being validated.</li>
      </ol>
      <p className="text-orange-300 mb-2">
        <b>Important:</b> Directly constructing ErgoAddress from SSigmaProp is not the correct approach in Fleet SDK. Extract public key bytes first.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Complete Example:</h3>
      <CodeBlock language="typescript">{`import { Box, ErgoAddress } from "@fleet-sdk/core";
import { deserialize } from "@fleet-sdk/serializer";

function validateBoxOwnership(boxToValidate: Box, boxWithOwnerInfo: Box): boolean {
  try {
    const registerValueHex = boxWithOwnerInfo.additionalRegisters.R4;
    if (!registerValueHex) {
      return false;
    }
    const deserializedValue = deserialize(registerValueHex);
    let publicKeyBytes: Uint8Array;
    if (deserializedValue.type === "SColl" && deserializedValue.elemType === "SByte") {
      publicKeyBytes = new Uint8Array(deserializedValue.value);
    } else if (deserializedValue.type === "SSigmaProp") {
      if (deserializedValue.value?.type === "SGroupElement") {
        publicKeyBytes = new Uint8Array(deserializedValue.value.value);
      } else {
        return false;
      }
    } else {
      return false;
    }
    if (!publicKeyBytes || publicKeyBytes.length !== 33) {
      return false;
    }
    const ownerAddress = ErgoAddress.fromPublicKey(publicKeyBytes);
    const ownerErgoTree = ownerAddress.ergoTree;
    return boxToValidate.ergoTree === ownerErgoTree;
  } catch {
    return false;
  }
}`}</CodeBlock>

      {/* 2. Working with Numeric Registers */}
      <h2 id="numeric-registers" className="text-2xl font-bold mt-10 mb-4">
        Working with Numeric Registers
      </h2>
      <CodeBlock language="typescript">{`import { Box } from "@fleet-sdk/core";
import { deserialize } from "@fleet-sdk/serializer";

function getNumericFromRegister(box: Box, register: "R4" | "R5" | "R6" | "R7" | "R8" | "R9"): bigint | null {
  try {
    const registerValueHex = box.additionalRegisters[register];
    if (!registerValueHex) return null;
    const deserialized = deserialize(registerValueHex);
    if (deserialized.type === "SLong") {
      return BigInt(deserialized.value);
    } else if (deserialized.type === "SInt") {
      return BigInt(deserialized.value);
    }
    return null;
  } catch {
    return null;
  }
}`}</CodeBlock>

      {/* 3. Extracting Token IDs from Registers */}
      <h2 id="token-id-registers" className="text-2xl font-bold mt-10 mb-4">
        Extracting Token IDs from Registers
      </h2>
      <CodeBlock language="typescript">{`import { Box } from "@fleet-sdk/core";
import { deserialize } from "@fleet-sdk/serializer";
import { Buffer } from "buffer";

function getTokenIdFromRegister(box: Box, register: "R4" | "R5" | "R6" | "R7" | "R8" | "R9"): string | null {
  try {
    const registerValueHex = box.additionalRegisters[register];
    if (!registerValueHex) return null;
    const deserialized = deserialize(registerValueHex);
    if (deserialized.type === "SColl" && deserialized.elemType === "SByte") {
      return Buffer.from(deserialized.value).toString("hex");
    }
    return null;
  } catch {
    return null;
  }
}`}</CodeBlock>

      {/* 4. Decoding Complex Types */}
      <h2 id="complex-types" className="text-2xl font-bold mt-10 mb-4">
        Decoding Complex Types (Tuples, Options, Collections)
      </h2>
      <CodeBlock language="typescript">{`import { Box } from "@fleet-sdk/core";
import { deserialize } from "@fleet-sdk/serializer";
import { Buffer } from "buffer";

function decodeSigmaPropLongTuple(box: Box, register: "R4"|"R5"|"R6"|"R7"|"R8"|"R9") {
  try {
    const registerValueHex = box.additionalRegisters[register];
    if (!registerValueHex) return null;
    const deserialized = deserialize(registerValueHex);
    if (deserialized.type !== "STuple" || !Array.isArray(deserialized.value) || deserialized.value.length !== 2) {
      return null;
    }
    const [item1, item2] = deserialized.value;
    let ownerPubKeyBytes: Uint8Array | null = null;
    if (item1?.type === "SSigmaProp" && item1.value?.type === "SGroupElement" && item1.value.value) {
      ownerPubKeyBytes = new Uint8Array(item1.value.value);
    } else {
      return null;
    }
    if (!ownerPubKeyBytes || ownerPubKeyBytes.length !== 33) return null;
    const ownerPubKeyHex = Buffer.from(ownerPubKeyBytes).toString("hex");
    let deadline: bigint | null = null;
    if (item2?.type === "SLong" && typeof item2.value === "string") {
      deadline = BigInt(item2.value);
    } else {
      return null;
    }
    return { ownerPubKeyHex, deadline };
  } catch {
    return null;
  }
}`}</CodeBlock>

      {/* 5. Compiling ErgoScript */}
      <h2 id="compile-ergotree" className="text-2xl font-bold mt-10 mb-4">
        Compiling ErgoScript to ErgoTree
      </h2>
      <CodeBlock language="typescript">{`import { compile } from "@fleet-sdk/compiler";

async function compileToErgoTree(script: string): Promise<string> {
  try {
    const result = await compile(script);
    if (!result || !result.ergoTree) throw new Error("No ErgoTree.");
    return result.ergoTree;
  } catch (error) {
    throw error;
  }
}`}</CodeBlock>

      {/* 6. Troubleshooting */}
      <h2 id="troubleshooting" className="text-2xl font-bold mt-10 mb-4">
        Troubleshooting Common Issues
      </h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">ErgoTree Comparison Failures</h3>
      <CodeBlock language="typescript">{`function troubleshootErgoTreeComparison(ergoTree1: string, ergoTree2: string): string {
  if (ergoTree1 === ergoTree2) return "Exact Match: Trees are identical.";
  const p2pkPrefix = "0008cd";
  const tree1IsP2PK = ergoTree1.startsWith(p2pkPrefix);
  const tree2IsP2PK = ergoTree2.startsWith(p2pkPrefix);
  if (tree1IsP2PK && tree2IsP2PK) {
    if (ergoTree1.length !== ergoTree2.length) {
      return "Mismatch: Both seem P2PK but have different lengths.";
    }
    return "Mismatch: Both seem P2PK with same length, but represent different public keys.";
  } else if (tree1IsP2PK !== tree2IsP2PK) {
    return \`Mismatch: One tree appears P2PK (\${p2pkPrefix} prefix), the other does not.\`;
  } else {
    if (ergoTree1.length !== ergoTree2.length) {
      return "Mismatch: Neither seems standard P2PK, and lengths differ.";
    }
    return "Mismatch: Neither seems standard P2PK, but lengths match.";
  }
}`}</CodeBlock>

      <h3 className="text-xl font-semibold mt-6 mb-2">Unexpected Register Format</h3>
      <CodeBlock language="typescript">{`function detectRegisterFormat(registerHex: string): string {
  if (!registerHex || registerHex.length < 2) return "Invalid or empty register value";
  const prefix = registerHex.substring(0, 2);
  const lengthByte = parseInt(registerHex.substring(2, 4), 16);
  if (prefix === "0e") {
    if (registerHex.length === 68) return "Likely a Blake2b256 hash (0e + 20 + 32 bytes)";
    return \`Likely some hash or ID prefixed with 0e, length byte \${lengthByte}\`;
  } else if (prefix === "00") {
    if (registerHex.startsWith("0008cd")) return "Likely a P2PK ErgoTree";
    return "Starts with 00, possibly complex ErgoTree or other structure.";
  } else if (prefix === "04") {
    return "Likely an SInt (Integer)";
  } else if (prefix === "05") {
    return "Likely an SLong (Long Integer / BigInt)";
  } else if (prefix === "07") {
    return \`Likely a CollByte (serialized byte array), length byte indicates \${lengthByte} bytes follow\`;
  } else if (prefix === "cd") {
    return "Likely a raw SSigmaProp (without 00 ErgoTree wrapper)";
  } else {
    return \`Unknown format starting with prefix \${prefix}\`;
  }
}`}</CodeBlock>

      {/* 7. Relationship Diagram */}
      <h2 id="relationship-diagram" className="text-2xl font-bold mt-10 mb-4">
        Relationship Diagram
      </h2>
      <CodeBlock language="typescript">{`graph TD
  A[Ergo Address String] -->|"ErgoAddress decode"| B[Public Key Bytes]
  B -->|"ErgoAddress fromPublicKey"| C[ErgoAddress Object]
  B -->|"SGroupElement"| D[SGroupElement Object]
  D -->|"SSigmaProp"| E[SSigmaProp Object]
  C -->|"address ergoTree"| F[ErgoTree Hex - P2PK Script]
  E -->|"ErgoAddress sigmaProp ergoTree"| F`}</CodeBlock>

      {/* 8. Related Docs */}
      <h2 id="related-docs" className="text-2xl font-bold mt-10 mb-4">
        Related Documentation
      </h2>
      <ul className="list-disc pl-6 text-cyan-400 space-y-2">
        <li>
          <Link href="../scs/sigma" className="hover:underline">ErgoScript Sigma Propositions</Link>
        </li>
        <li>
          <Link href="../scs/boxes-and-registers" className="hover:underline">Box Registers Specification</Link>
        </li>
        <li>
          <Link href="../scs/ergotree" className="hover:underline">ErgoTree Specification</Link>
        </li>
        <li>
          <a href="https://github.com/fleet-sdk/fleet-by-example" target="_blank" rel="noopener" className="hover:underline">
            Fleet SDK GitHub Examples
          </a>
        </li>
        <li>
          <a href="https://fleet-sdk.github.io/docs/compiler" target="_blank" rel="noopener" className="hover:underline">
            Fleet SDK Compiler
          </a>
        </li>
        <li>
          <a href="https://fleet-sdk.github.io/docs/serializer-overview" target="_blank" rel="noopener" className="hover:underline">
            Fleet SDK Serializer
          </a>
        </li>
      </ul>
    </>
  );
}
