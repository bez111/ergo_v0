import { ArrowLeft, Shield, Code, Zap, Users, Lock } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/ui";

export default function ImprovedDistributedSignaturesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Shield className="w-10 h-10 text-orange-400" />
        Improved Distributed Signatures
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/cryptographic-primitives/other-signatures"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Other Signatures
        </Link>
      </div>

      <div className="space-y-8">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <p className="text-gray-300 mb-6">
            The initial implementation of distributed signatures support in the Ergo node worked well in simple cases, and ZK Treasury was built on top of it. However, in complex scenarios, it exhibited some problems:
          </p>
          
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Hints generated (such as commitments) were not tied to the position of a sub-expression within the overall sigma-expression. For example, for a statement like <code className="bg-neutral-800 px-2 py-1 rounded">atLeast(2, Coll(pkAlice, pkBob, pkCharlie)) && (pkBob || pkDiana)</code>, the same commitment would be generated for Bob's public key (<code className="bg-neutral-800 px-2 py-1 rounded">pkBob</code>) in both parts of the expression. This is improper and insecure, as a signature could potentially reveal Bob's secret key because the same randomness would be used twice for different challenges in the Schnorr protocol.</li>
            <li>Similarly, generated hints were not tied to specific transaction inputs.</li>
          </ul>
          
          <p className="text-gray-300 mt-4">
            These issues have been fixed with a new API introduced in the <code className="bg-neutral-800 px-2 py-1 rounded">distributed-sigs</code> branch. Now, all hints are tied to both input indexes and positions within the sigma tree after the script reduction phase (which considers the current context). Additionally, the API is now simpler to use.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            Tutorial: Collective Signing with Improved API
          </h2>
          <p className="text-gray-300 mb-6">
            Let's walk through a new tutorial on collective signing using this improved API. Similar to the previous tutorial, we first pay to a 2-out-of-3 spending script where the public keys are stored in registers:
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  // Retrieve GroupElement pkA, pkB, and pkC from the register R4, R5, and R6 respectively.
  val pkA  = SELF.R4[GroupElement].get
  val pkB  = SELF.R5[GroupElement].get
  val pkC  = SELF.R6[GroupElement].get

  // Require at least two of the three provided public keys to be included in the spending transaction.
  atLeast(2, Coll(proveDlog(pkA), proveDlog(pkB), proveDlog(pkC)))
}`}
  </CodeBlock>
          </div>
          
          <p className="text-gray-300 mb-4">
            This code defines a script requiring signatures corresponding to at least two out of the three specified public keys (<code className="bg-neutral-800 px-2 py-1 rounded">pkA</code>, <code className="bg-neutral-800 px-2 py-1 rounded">pkB</code>, <code className="bg-neutral-800 px-2 py-1 rounded">pkC</code>) to spend the box. The public keys (as <code className="bg-neutral-800 px-2 py-1 rounded">GroupElement</code> values) are retrieved from registers R4, R5, and R6 of the box being spent (<code className="bg-neutral-800 px-2 py-1 rounded">SELF</code>). These are then converted into <code className="bg-neutral-800 px-2 py-1 rounded">SigmaProp</code> objects using <code className="bg-neutral-800 px-2 py-1 rounded">proveDlog</code>. Finally, the <code className="bg-neutral-800 px-2 py-1 rounded">atLeast</code> function enforces the 2-out-of-3 condition.
          </p>
          
          <p className="text-gray-300 mb-4">
            After funding a box with this script (e.g., transaction <a href="https://explorer.ergoplatform.com/en/transactions/71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c314" className="text-orange-400 hover:text-orange-300 underline">71aa67...</a>), we can retrieve its details using the explorer or node API (e.g., <code className="bg-neutral-800 px-2 py-1 rounded">/utxo/byIdBinary/{"{boxId}"}</code>). To spend this box, we first generate an unsigned transaction. In this example, we provide the input box directly using the <code className="bg-neutral-800 px-2 py-1 rounded">inputsRaw</code> field in a request to the <code className="bg-neutral-800 px-2 py-1 rounded">/wallet/transaction/generateUnsigned</code> endpoint:
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  "requests": [
    {
      "address": "4MQyML64GnzMxZgm",
      "value": 999000000
    }
  ],
  "fee": 1000000,
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [ 
  ]
}`}
  </CodeBlock>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-400" />
            Step 1: Alice Generates Commitments
          </h2>
          <p className="text-gray-300 mb-4">
            Then, Alice (possessing the secret key for <code className="bg-neutral-800 px-2 py-1 rounded">pkA</code>) generates commitments for this unsigned transaction by sending it to the <code className="bg-neutral-800 px-2 py-1 rounded">/wallet/generateCommitments</code> endpoint (note: additional secrets besides those in the wallet can be provided if needed). The response contains both secret hints (for Alice to keep) and public hints (to share with other participants):
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  "secretHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtWithSecret",
        "secret": "..."
      }
    ]
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtReal"
      }
    ]
  }
}`}
  </CodeBlock>
          </div>
          
          <p className="text-gray-300">
            (secret randomness is omitted to avoid private key extraction).
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-purple-400" />
            Step 2: Bob Signs with Alice's Hints
          </h2>
          <p className="text-gray-300 mb-4">
            Alice must store her secret hints locally and share the public hints with Bob (who possesses the secret key for <code className="bg-neutral-800 px-2 py-1 rounded">pkB</code>). Bob then uses his secret key and Alice's public hints to generate his part of the signature. He sends a request to <code className="bg-neutral-800 px-2 py-1 rounded">/wallet/transaction/sign</code> like the following (note the <code className="bg-neutral-800 px-2 py-1 rounded">hints</code> section containing Alice's public hints):
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  "tx": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ]
},
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [
    
  ],
  "secrets": {
    
  },
  "hints": {
  "secretHints": {
    
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtReal"
      }
    ]
  }
}
}`}
  </CodeBlock>
          </div>
          
          <p className="text-gray-300">
            Bob sends the resulting partially signed transaction (which is still invalid as it only contains Bob's signature contribution) back to Alice. Alternatively, Bob could just send the hints generated by his signing step.
          </p>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            Step 3: Alice Extracts Bob's Hints
          </h2>
          <p className="text-gray-300 mb-4">
            Now, Alice needs to combine her secret hints with the public hints generated by Bob (and potentially Carol, if she were involved). Alice can extract Bob's public hints from the partially signed transaction using the <code className="bg-neutral-800 px-2 py-1 rounded">/script/extractHints</code> endpoint:
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  "transaction": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "spendingProof": {
        "proofBytes": "7d64cd47d3dc8bc5c336297e494f48d601c586175b37da228a54a77f52eb1ce307c22c7541368b73307bf37be4051406b49e989b4aee9f27789de0c426a8231fead96178544cbb54b37286f2630dcd9d5794ae9905697e8eeb0d03540d4cb8352a0734187d5e84b6d0825f12e3fcf287ee24e48d3a2a6dfb56471c41767ef88a3279e8fdc70274d85baf16686b641eaa",
        "extension": {}
      }
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ],
  "size": 313
},
  "real": [
    {
      "op": -51,
      "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
    }
  ],
  "simulated": [
    {
      "op": -51,
      "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"     
    }
  ]
}`}
  </CodeBlock>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Step 4: Final Transaction Signing
          </h2>
          <p className="text-gray-300 mb-4">
            Finally, Alice combines her locally stored secret hints with the public hints extracted from Bob's contribution. She sends a final request to <code className="bg-neutral-800 px-2 py-1 rounded">/wallet/transaction/sign</code> containing the unsigned transaction and all the collected hints (her secret ones and Bob's public ones):
          </p>
          
          <div className="mb-6">
            <CodeBlock language="typescript">
    {`{
  "tx": {
  "id": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
  "inputs": [
    {
      "boxId": "9bcbbce28b19132c28b2e088ddea03f792673e9c4509a239145c241c891ca4b9",
      "extension": {}
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "5bb78563af3843e5bf816c9dd50bd7c0a0b09c7fd2da2da075a8e5d8f545cb7f",
      "value": 999000000,
      "ergoTree": "10010101d17300",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 0
    },
    {
      "boxId": "b5a1a069015f94bf7daaec46fc121044607603c844d1c6d6a8e9b2322379b375",
      "value": 1000000,
      "ergoTree": "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
      "assets": [],
      "creationHeight": 313682,
      "additionalRegisters": {},
      "transactionId": "6c7bf7a9720d26bec5c3b5bf1bc6199e9a5b876ba5994ab5e4214b0d8eed1492",
      "index": 1
    }
  ]
},
  "inputsRaw": [
"8094ebdc0310010404987300830308cde4c6a70407cde4c6a70507cde4c6a706079a8f1300030702b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f070354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380070235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d71aa67f95e96827193bdf711f6ccf41b30ef8bbbdaef63ed672dfb7420a4c31400"
  ],
  "dataInputsRaw": [
  ],
  "secrets": { 
  },
  "hints": {
  "secretHints": {
    "0": [
      {
        "type": "dlog",
        "a": "03c855c50d173f1b0e2797390b71d82023dcb8e12950e4fa0b9ae3be17bacca2a1",
        "pubkey": {
          "op": -51,
          "h": "02b353df14cd94849c36194bba03000dafaeb91b3a425a863f5660565189ddfe8f"
        },
        "position": "0-0",
        "hint": "cmtWithSecret",
        "secret": "...."
      }
    ]
  },
  "publicHints": {
    "0": [
      {
        "type": "dlog",
        "a": "02b6c2b73e59ad061211cebb37a7d9b238b9388cdb0c3b96ae2152ba174f67de90",
        "pubkey": {
          "op": -51,
          "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
        },
        "position": "0-2",
        "hint": "cmtSimulated"
      },
      {
        "hint": "proofSimulated",
        "challenge": "e39924c725e1aee0cb705ce18a15d5425148939b7739e628",
        "pubkey": {
          "op": -51,
          "h": "0235647199b150d8fab315d74e44b78866787d0330241fd471f98bf6c2bffe1e8d"
        },
        "proof": "e39924c725e1aee0cb705ce18a15d5425148939b7739e628ee24e48d3a2a6dfb56471c41767ef88a3279e8fdc70274d85baf16686b641eaa",
        "position": "0-2"
      },
      {
        "type": "dlog",
        "a": "0323bd7f1b87280aa2b7cb2a374da1897ef7d5fae7ab3948440907d303427740ba",
        "pubkey": {
          "op": -51,
          "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
        },
        "position": "0-1",
        "hint": "cmtReal"
      },
      {
        "hint": "proofReal",
        "challenge": "69cd83b8770ab203ccb27094cb235e31613360e0933cf22e",
        "pubkey": {
          "op": -51,
          "h": "0354efc32652cad6cf1231be987afa29a686af30b5735995e3ce51339c4d0ca380"
        },
        "proof": "69cd83b8770ab203ccb27094cb235e31613360e0933cf22e5794ae9905697e8eeb0d03540d4cb8352a0734187d5e84b6d0825f12e3fcf287",
        "position": "0-1"
      }
    ]
  }
}
}`}
  </CodeBlock>
          </div>
          
          <p className="text-gray-300">
            (Secret randomness omitted again for security).
          </p>
          
          <p className="text-gray-300 mt-4">
            This final request produces a fully signed, valid transaction that satisfies the 2-out-of-3 condition, which can now be broadcast to the network.
          </p>
        </section>
      </div>
    </div>
  );
} 