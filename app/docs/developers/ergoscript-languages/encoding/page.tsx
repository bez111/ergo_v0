"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Binary, Code2, Hash } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function ErgoTreeEncodingPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <Binary className="w-8 h-8 text-indigo-400" /> Understanding ErgoTree Encoding
      </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          A comprehensive guide to ErgoTree's binary formatting system for storage, transfer, and cross-platform operation of contracts.
        </p>
        <Link
          href="/docs/developers/ergoscript-languages"
          className="inline-flex items-center px-6 py-3 bg-indigo-500 rounded-xl font-semibold text-black hover:bg-indigo-600 transition-transform hover:scale-105 gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to ErgoScript Languages
        </Link>
      </div>

      {/* Introduction */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Binary className="w-6 h-6 text-indigo-400" /> ErgoTree Encoding Overview
        </h2>
        <p className="text-gray-300 mb-4">
          ErgoTree encoding is a binary formatting system designed for the storage, transfer, and cross-platform operation of ErgoTree contracts. This format is advantageous due to its proficiency in the serialization and deserialization of ErgoTree contracts.
        </p>
      </div>

      {/* VLQ Encoding */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-400" /> Variable Length Quantity (VLQ) Encoding
        </h2>
        <p className="text-gray-300 mb-4">
          The ErgoTree encoding applies Variable Length Quantity (VLQ) encoding for integer representation. VLQ encoding is an effective scheme that accommodates integer representation using a variable number of bytes.
        </p>
        <p className="text-gray-300 mb-4">
          In the following Scala code, we define a method <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">putULong</code>, which accepts a single long value and encodes it using VLQ encoding. The encoding process entails iteratively analyzing the input value and writing the encoded bytes to a buffer array.
        </p>
        <p className="text-gray-300 mb-6">
          During the encoding procedure, the method first verifies if the value can be represented using a single byte by applying a bitwise AND operation with <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">~0x7FL</code> (bitwise NOT 0x7F) and checking if the result equals zero. If so, the value is cast to a byte and stored in the buffer array. If not, the value undergoes a bitwise AND operation with <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">0x7F</code>, is then cast to a byte, and finally bitwise ORed with <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">0x80</code>. The resulting byte is stored in the buffer array, and the value is right-shifted by 7 bits (unsigned shift). This procedure repeats until the entire value is encoded.
        </p>
        <CodeBlock language="typescript">`// Defining a public method putULong that accepts a single long value as input
public final void putULong(long value) {
    // An infinite loop will continue until a return statement is executed
    while (true) {
        // If the bitwise AND operation between the value and 0x7FL (bitwise NOT operation) equals zero
        if ((value & ~0x7FL) == 0) {
            // When the above condition is satisfied, cast the value to a byte and store it in 
            // the buffer array at the current position
            buffer[position++] = (byte) value;
            // Terminate the method
            return;
        } else {
            // If the above condition is not satisfied, perform a bitwise AND operation on the value with 0x7F,
            // cast the resultant integer to a byte, and perform a bitwise OR operation with 0x80.
            // Store the resulting byte value in the buffer array at the current position
            buffer[position++] = (byte) (((int) value & 0x7F) | 0x80);
            // Shift the value 7 bits to the right
            value >>>= 7;
        }
    }
}`</CodeBlock>
      </div>

      {/* ZigZag Encoding */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Hash className="w-6 h-6 text-purple-400" /> ZigZag Encoding
        </h2>
        <p className="text-gray-300 mb-4">
          To efficiently encode signed 64-bit integers using variable-length encoding, ErgoTree employs ZigZag encoding. This method converts signed integers into unsigned integers suitable for efficient VLQ/varint encoding. Without ZigZag encoding, negative values would require sign-extension to 64 bits for standard varint encoding, invariably consuming 10 bytes in the buffer.
        </p>
        <p className="text-gray-300 mb-6">
          Parameter <span className="font-bold text-white">n</span> is a signed 64-bit integer. The following Java method demonstrates ZigZag encoding. Note that while the result represents an unsigned value conceptually, Java returns it as a standard signed <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">long</code>.
        </p>
        <CodeBlock language="typescript">`public static long encodeZigZag64(final long n) {
    // This code shifts the long integer 'n' one bit to the left and performs a bitwise XOR operation 
    // with 'n' shifted arithmetically 63 bits to the right. This arithmetic shift ensures the sign bit 
    // is extended to the leftmost position.
    return (n << 1) ^ (n >> 63);
}`</CodeBlock>
      </div>
    </div>
  );
} 