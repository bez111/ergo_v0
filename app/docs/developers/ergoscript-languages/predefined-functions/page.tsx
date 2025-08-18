"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";

export default function ErgoTreePredefinedFunctionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Cpu className="w-10 h-10 text-red-400" />
        ErgoTree Functions
      </h1>
      
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="text-lg text-gray-300 mb-8 max-w-2xl">
        <p className="mb-2">This page is a WIP. Please see <a href="https://storage.googleapis.com/ergo-cms-media/docs/ErgoTree.pdf" target="_blank" rel="noopener noreferrer" className="underline text-cyan-400 hover:text-orange-400">ErgoTree.pdf</a> for full details.</p>
        <p className="text-base text-gray-400">Below is a list of built-in functions and operations in ErgoTree.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/80 shadow-xl mb-12">
        <table className="min-w-full text-sm text-left text-gray-200">
          <thead className="bg-neutral-800/60 text-gray-300">
            <tr>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Code</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Mnemonic</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Signature</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            <tr><td className="px-4 py-2">115</td><td className="px-4 py-2">ConstantPlaceholder</td><td className="px-4 py-2">Int =&gt; T</td><td className="px-4 py-2">Create special ErgoTree node which can be replaced by constant with given id.</td></tr>
            <tr><td className="px-4 py-2">116</td><td className="px-4 py-2">SubstConstants</td><td className="px-4 py-2">Coll[Byte], Coll[Int], Coll[T] =&gt; Coll[Byte]</td><td className="px-4 py-2">...</td></tr>
            <tr><td className="px-4 py-2">122</td><td className="px-4 py-2">LongToByteArray</td><td className="px-4 py-2">Long =&gt; Coll[Byte]</td><td className="px-4 py-2">Converts Long value to big-endian bytes representation.</td></tr>
            <tr><td className="px-4 py-2">123</td><td className="px-4 py-2">ByteArrayToBigInt</td><td className="px-4 py-2">Coll[Byte] =&gt; BigInt</td><td className="px-4 py-2">Convert big-endian bytes representation (Coll[Byte]) to BigInt value.</td></tr>
            <tr><td className="px-4 py-2">124</td><td className="px-4 py-2">ByteArrayToLong</td><td className="px-4 py-2">Coll[Byte] =&gt; Long</td><td className="px-4 py-2">Convert big-endian bytes representation (Coll[Byte]) to Long value.</td></tr>
            <tr><td className="px-4 py-2">125</td><td className="px-4 py-2">Downcast</td><td className="px-4 py-2">(T =&gt; R)</td><td className="px-4 py-2">Cast this numeric value to a smaller type (e.g. Long to Int). Throws exception if overflow.</td></tr>
            <tr><td className="px-4 py-2">126</td><td className="px-4 py-2">Upcast</td><td className="px-4 py-2">(T =&gt; R)</td><td className="px-4 py-2">Cast this numeric value to a bigger type (e.g. Int to Long)</td></tr>
            <tr><td className="px-4 py-2">140</td><td className="px-4 py-2">SelectField</td><td className="px-4 py-2">(T, Byte =&gt; R)</td><td className="px-4 py-2">Select tuple field by its 1-based index. E.g. input._1 is transformed to SelectField(input, 1</td></tr>
            <tr><td className="px-4 py-2">143</td><td className="px-4 py-2">LT</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Returns true is the left operand is less then the right operand, false otherwise.</td></tr>
            <tr><td className="px-4 py-2">144</td><td className="px-4 py-2">LE</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Returns true is the left operand is less then or equal to the right operand, false otherwise.</td></tr>
            <tr><td className="px-4 py-2">145</td><td className="px-4 py-2">GT</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Returns true is the left operand is greater then the right operand, false otherwise.</td></tr>
            <tr><td className="px-4 py-2">146</td><td className="px-4 py-2">GE</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Returns true is the left operand is greater then or equal to the right operand, false otherwise.</td></tr>
            <tr><td className="px-4 py-2">147</td><td className="px-4 py-2">EQ</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Compare equality of left and right arguments</td></tr>
            <tr><td className="px-4 py-2">148</td><td className="px-4 py-2">NEQ</td><td className="px-4 py-2">T, T =&gt; Boolean</td><td className="px-4 py-2">Compare inequality of left and right arguments</td></tr>
            <tr><td className="px-4 py-2">149</td><td className="px-4 py-2">If</td><td className="px-4 py-2">Boolean, T, T =&gt; T</td><td className="px-4 py-2">Compute condition, if true then compute trueBranch else compute falseBranch</td></tr>
            <tr><td className="px-4 py-2">150</td><td className="px-4 py-2">AND</td><td className="px-4 py-2">Coll[Boolean] =&gt; Boolean</td><td className="px-4 py-2">Returns true if all the elements in collection are true.</td></tr>
            <tr><td className="px-4 py-2">151</td><td className="px-4 py-2">OR</td><td className="px-4 py-2">Coll[Boolean] =&gt; Boolean</td><td className="px-4 py-2">Returns true if any the elements in collection are true.</td></tr>
            <tr><td className="px-4 py-2">152</td><td className="px-4 py-2">AtLeast</td><td className="px-4 py-2">Int, Coll[SigmaProp] =&gt; SigmaProp</td><td className="px-4 py-2">...</td></tr>
            <tr><td className="px-4 py-2">153</td><td className="px-4 py-2">Minus</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Returns a result of subtracting second numeric operand from the first.</td></tr>
            <tr><td className="px-4 py-2">154</td><td className="px-4 py-2">Plus</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Returns a sum of two numeric operands</td></tr>
            <tr><td className="px-4 py-2">155</td><td className="px-4 py-2">Xor</td><td className="px-4 py-2">Coll[Byte], Coll[Byte] =&gt; Coll[Byte]</td><td className="px-4 py-2">Byte-wise XOR of two collections of bytes</td></tr>
            <tr><td className="px-4 py-2">156</td><td className="px-4 py-2">Multiply</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Returns a multiplication of two numeric operands</td></tr>
            <tr><td className="px-4 py-2">157</td><td className="px-4 py-2">Division</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Integer division of the first operand by the second operand.</td></tr>
            <tr><td className="px-4 py-2">158</td><td className="px-4 py-2">Modulo</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Reminder from division of the first operand by the second operand.</td></tr>
            <tr><td className="px-4 py-2">161</td><td className="px-4 py-2">Min</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Minimum value of two operands.</td></tr>
            <tr><td className="px-4 py-2">162</td><td className="px-4 py-2">Max</td><td className="px-4 py-2">T, T =&gt; T</td><td className="px-4 py-2">Maximum value of two operands.</td></tr>
            <tr><td className="px-4 py-2">182</td><td className="px-4 py-2">CreateAvlTree</td><td className="px-4 py-2">(Byte, Coll[Byte], Int, Option[Int] =&gt; AvlTree</td><td className="px-4 py-2">Construct a new authenticated dictionary with given parameters and tree root digest.</td></tr>
            <tr><td className="px-4 py-2">183</td><td className="px-4 py-2">TreeLookup</td><td className="px-4 py-2">(AvlTree, Coll[Byte], Coll[Byte] =&gt; Option[Coll[Byte]]</td><td className="px-4 py-2"></td></tr>
            <tr><td className="px-4 py-2">203</td><td className="px-4 py-2">CalcBlake2b256</td><td className="px-4 py-2">(Coll[Byte] =&gt; Coll[Byte]</td><td className="px-4 py-2">Calculate Blake2b hash from input bytes.</td></tr>
            <tr><td className="px-4 py-2">204</td><td className="px-4 py-2">CalcSha256</td><td className="px-4 py-2">(Coll[Byte] =&gt; Coll[Byte]</td><td className="px-4 py-2">Calculate Sha256 hash from input bytes.</td></tr>
            <tr><td className="px-4 py-2">205</td><td className="px-4 py-2">CreateProveDlog</td><td className="px-4 py-2">GroupElement =&gt; SigmaProp</td><td className="px-4 py-2">ErgoTree operation to create a new SigmaProp value representing public key of discrete logarithm signature protocol.</td></tr>
            <tr><td className="px-4 py-2">206</td><td className="px-4 py-2">CreateProveDHTuple</td><td className="px-4 py-2">GroupElement, GroupElement, GroupElement, GroupElement =&gt; SigmaProp</td><td className="px-4 py-2">ErgoTree operation to create a new SigmaProp value representing public key of Diffie Hellman signature protocol. Common input: (g,h,u,v)</td></tr>
            <tr><td className="px-4 py-2">209</td><td className="px-4 py-2">BoolToSigmaProp</td><td className="px-4 py-2">(Boolean =&gt; SigmaProp)</td><td className="px-4 py-2">...</td></tr>
            <tr><td className="px-4 py-2">212</td><td className="px-4 py-2">DeserializeContext</td><td className="px-4 py-2">(Byte =&gt; T)</td><td className="px-4 py-2">...</td></tr>
            <tr><td className="px-4 py-2">213</td><td className="px-4 py-2">DeserializeRegister</td><td className="px-4 py-2">(Byte, Option[T] =&gt; T</td><td className="px-4 py-2">...</td></tr>
            <tr><td className="px-4 py-2">218</td><td className="px-4 py-2">Apply</td><td className="px-4 py-2">(T) =&gt; R, T =&gt; R</td><td className="px-4 py-2">Apply the function to the arguments.</td></tr>
            <tr><td className="px-4 py-2">227</td><td className="px-4 py-2">GetVar</td><td className="px-4 py-2">(Byte =&gt; Option[T])</td><td className="px-4 py-2">Get context variable with given varId and type.</td></tr>
            <tr><td className="px-4 py-2">234</td><td className="px-4 py-2">SigmaAnd</td><td className="px-4 py-2">(Coll[SigmaProp] =&gt; SigmaProp)</td><td className="px-4 py-2">Returns sigma proposition which is proven when all the elements in collection are proven.</td></tr>
            <tr><td className="px-4 py-2">235</td><td className="px-4 py-2">SigmaOr</td><td className="px-4 py-2">(Coll[SigmaProp] =&gt; SigmaProp)</td><td className="px-4 py-2">Returns sigma proposition which is proven when any of the elements in collection is proven.</td></tr>
            <tr><td className="px-4 py-2">236</td><td className="px-4 py-2">BinOr</td><td className="px-4 py-2">(Boolean, Boolean) =&gt; Boolean</td><td className="px-4 py-2">Logical OR of two operands</td></tr>
            <tr><td className="px-4 py-2">237</td><td className="px-4 py-2">BinAnd</td><td className="px-4 py-2">(Boolean, Boolean) =&gt; Boolean</td><td className="px-4 py-2">Logical AND of two operands</td></tr>
            <tr><td className="px-4 py-2">238</td><td className="px-4 py-2">DecodePoint</td><td className="px-4 py-2">Coll[Byte] =&gt; GroupElement</td><td className="px-4 py-2">Convert Coll[Byte] to GroupElement using GroupElementSerializer</td></tr>
            <tr><td className="px-4 py-2">239</td><td className="px-4 py-2">LogicalNot</td><td className="px-4 py-2">Boolean =&gt; Boolean</td><td className="px-4 py-2">Logical NOT operation. Returns true if input is false and false if input is true.</td></tr>
            <tr><td className="px-4 py-2">240</td><td className="px-4 py-2">Negation</td><td className="px-4 py-2">(T =&gt; T)</td><td className="px-4 py-2">Negates numeric value x by returning -x.</td></tr>
            <tr><td className="px-4 py-2">241</td><td className="px-4 py-2">BitInversion</td><td className="px-4 py-2">(T =&gt; T)</td><td className="px-4 py-2">Invert every bit of the numeric value.</td></tr>
            <tr><td className="px-4 py-2">242</td><td className="px-4 py-2">BitOr</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Bitwise OR of two numeric operands.</td></tr>
            <tr><td className="px-4 py-2">243</td><td className="px-4 py-2">BitAnd</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Bitwise AND of two numeric operands.</td></tr>
            <tr><td className="px-4 py-2">244</td><td className="px-4 py-2">BinXor</td><td className="px-4 py-2">(Boolean, Boolean =&gt; Boolean)</td><td className="px-4 py-2">Logical XOR of two operands</td></tr>
            <tr><td className="px-4 py-2">245</td><td className="px-4 py-2">BitXor</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Bitwise XOR of two numeric operands.</td></tr>
            <tr><td className="px-4 py-2">246</td><td className="px-4 py-2">BitShiftRight</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Right shift of bits.</td></tr>
            <tr><td className="px-4 py-2">247</td><td className="px-4 py-2">BitShiftLeft</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Left shift of bits.</td></tr>
            <tr><td className="px-4 py-2">248</td><td className="px-4 py-2">BitShiftRightZeroed</td><td className="px-4 py-2">(T, T) =&gt; T</td><td className="px-4 py-2">Right shift of bits.</td></tr>
            <tr><td className="px-4 py-2">255</td><td className="px-4 py-2">XorOf</td><td className="px-4 py-2">(Coll[Boolean] =&gt; Boolean)</td><td className="px-4 py-2">Similar to allOf, but performing logical XOR operation between all conditions instead of ||</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
} 