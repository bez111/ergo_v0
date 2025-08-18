"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Wrench, Terminal, Shield, Key, Database, Send, FileText } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function ErgoToolPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">
        ErgoTool
      </h1>

      {/* Introduction */}
      <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-blue-400">Introduction</h2>
        </div>
        <p className="text-gray-300 mb-4">
          <a href="https://github.com/aslesarenko/ergo-tool" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoTool</a> is a command-line interface (CLI) for the <a href="https://ergoplatform.org/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo blockchain</a>. You can use ErgoTool without running your own Ergo node. However, running a node is the most secure way to communicate with the blockchain.
        </p>
        <p className="text-gray-300">
          In this post, we will walk through simple steps to generate a mnemonic phrase, create a local secret storage and use it to send ERGs between addresses, all with the help of ErgoTool commands.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/docs/developers/data-model-apis/resources" className="inline-block">
        <button className="px-6 py-3 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-all duration-200 flex items-center gap-2 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-semibold">Back to Resources</span>
        </button>
      </Link>

      {/* Getting Started */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Getting Started</h2>
        </div>
        <p className="text-gray-300 mb-4">
          First, we need to install ErgoTool on our system from sources by following the <a href="https://github.com/aslesarenko/ergo-tool#installation" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">installation instructions</a>. In the directory where we cloned ErgoTool, there is the <code className="bg-neutral-700 px-2 py-1 rounded">ergo-tool.sh</code> script we will use to run commands. Run the following command to check that ErgoTool is installed correctly.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh help     
the command name is not specified (run ergo-tool without arguments to list commands)

Command Name: help
Usage Syntax: ergo-tool help <commandName>
Description:  prints usage help for a command
Doc page: https://aslesarenko.github.io/ergo-tool/api/org/ergoplatform/appkit/ergotool/HelpCmd.html`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          Let's see what we get here. ErgoTool outputs the error message with the information about the <code className="bg-neutral-700 px-2 py-1 rounded">help</code> command. This is a typical output of ErgoTool when one of the known commands is specified but used incorrectly. As we can learn from the message, the <code className="bg-neutral-700 px-2 py-1 rounded">help</code> command requires us to specify an additional <code className="bg-neutral-700 px-2 py-1 rounded">&lt;commandName&gt;</code> argument. Also, each command has an API doc page with all the details about command execution, so its URL is shown here.
        </p>
      </div>

      {/* Create a New Mnemonic Phrase */}
      <div className="bg-purple-400/10 border border-purple-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Key className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-purple-400">Create a New Mnemonic Phrase</h2>
        </div>
        <p className="text-gray-300 mb-4">
          A Mnemonic is a random sequence of characters that is used to generate a master key according to <a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Hierarchical Deterministic Wallets</a> specification. For random convenience sequence of English words is used, but this is not required. Run the following command to generate a new mnemonic phrase:
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh mnemonic          
bird harbor wheat innocent business disease busy quick yellow trust time oil enter situate moon`}
          />
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4 mt-4">
          <p className="text-yellow-200 font-semibold mb-2">⚠️ Important Security Note</p>
          <p className="text-gray-300 text-sm">
            Please write it down on paper and keep it in a safe and secret place. As an additional security measure, you can create a random mnemonic password. In some sense, it can serve as another non-vocabulary word in the mnemonic. A mnemonic password is optional and is used for additional security. If you decide to use a mnemonic password, you should also write it down and keep it a secret, probably different from a mnemonic one.
          </p>
          <p className="text-red-300 text-sm mt-2 font-semibold">
            <strong>Important:</strong> Both mnemonic phrases and mnemonic passwords are required to restore secret keys, if you lose any of them, then you will not be able to regenerate your master key again.
          </p>
        </div>
        <p className="text-gray-300 mt-4">
          Next, use the generated Mnemonic to create storage with a master secret key.
        </p>
      </div>

      {/* Create a New Encrypted Storage */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold text-orange-400">Create a New Encrypted Storage</h2>
        </div>
        <p className="text-gray-300 mb-4">
          For better security, neither a mnemonic phrase nor password is required by ErgoTool to perform the transaction signing. Instead, the secret key from the encrypted storage is required to sign a spending transaction. We can generate a secret key and store it in encrypted storage using the <code className="bg-neutral-700 px-2 py-1 rounded">createStorage</code> command.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh help createStorage

Command Name: createStorage
Usage Syntax: ergo-tool createStorage [<storageDir>="storage"] [<storageFileName>="secret.json"]
Description:  Creates an encrypted storage file for the Mnemonic entered by the user
Doc page:       https://aslesarenko.github.io/ergo-tool/api/org/ergoplatform/appkit/ergotool/CreateStorageCmd.html

$ ./ergo-tool.sh createStorage 
Enter mnemonic phrase> bird harbor wheat innocent business disease busy quick yellow trust time oil enter situate moon
Mnemonic password> 
Repeat mnemonic password> 
Storage password> 
Repeat storage password> 
Storage File: storage/secret.json`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          A master secret key is generated from the (mnemonic phrase, mnemonic password) pair and saved encrypted in the <code className="bg-neutral-700 px-2 py-1 rounded">storage/secret.json</code> file. The Mnemonic itself is not stored in the file, and there is no way to restore it from the file, even if you know the passwords.
        </p>
        <div className="bg-blue-400/10 border border-blue-400/20 rounded-lg p-4 mt-4">
          <p className="text-blue-200 font-semibold mb-2">ℹ️ Important Notes</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300 text-sm">
            <li>Please enter the correct mnemonic password, the one you chose and saved before.</li>
            <li>Since a mnemonic password is optional, you can leave it empty by pressing enter.</li>
            <li>If you forget the storage password (aka encryption password), you will not be able to use that storage file anymore; however, you can always restore your secret keys from (Mnemonic the phrase, mnemonic password) pair and thus create a new storage file with a new password.</li>
            <li>Keep your storage file and storage password in secret; anyone who obtains both your storage file and storage password will be able to decipher it and access secret keys.</li>
          </ul>
        </div>
      </div>

      {/* Extracting Data From Storage */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Extracting Data From Storage</h2>
        </div>
        <p className="text-gray-300 mb-4">
          Secret storage contains a master secret key and can be used to compute both the public key and the pay-to-public-key address corresponding to that secret key. The <code className="bg-neutral-700 px-2 py-1 rounded">extractStorage</code> command is doing just that.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh help extractStorage

Command Name: extractStorage
Usage Syntax: ergo-tool extractStorage <storage file> address|masterKey|publicKey|secretKey mainnet|testnet
Description:  Reads the file, unlocks it using a password and extracts the requested property from the given storage file.
Doc page: https://aslesarenko.github.io/ergo-tool/api/org/ergoplatform/appkit/ergotool/ExtractStorageCmd.html 

$ ./ergo-tool.sh extractStorage storage/secret.json address mainnet     
Storage password> 
9iHiSAg3ko2ZGxR2vhc1Aem3tShqfzEPDAF7XK5cdtbZ3Ut2CCf`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          Here the command transforms the secret key to the corresponding public key and then creates the pay-to-public-key address on the mainnet.
        </p>
        <p className="text-gray-300 mb-4">
          In the same way, we can obtain the public key, private key and other data from the storage.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh extractStorage storage/secret.json secretKey mainnet
Storage password> 
55dfde63c9b6b4f47683592e85ee997ba2e93507f38ba3f9c82933bcfbc677ca

$ ./ergo-tool.sh extractStorage storage/secret.json publicKey mainnet
Storage password> 
03f07aecb145a85920bf6e9be80efe5f1cd1a165b45ad3aa8e5c4ca3ba50856bb8`}
          />
        </div>
      </div>

      {/* Listing Unspent Boxes */}
      <div className="bg-pink-400/10 border border-pink-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
            <Database className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-pink-400">Listing Unspent Boxes</h2>
        </div>
        <p className="text-gray-300 mb-4">
          ErgoTool has the special command to list all available (aka unspent) boxes for a given address.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh listAddressBoxes 9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v                                                                
BoxId                                                             NanoERGs          
4840cb6facc20b765085db0ad24768ed0c5e7afd413e8e58e597c33a993f8119  4987000000`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          If we specify the <code className="bg-neutral-700 px-2 py-1 rounded">--print-json</code> option, then ErgoTool will output all the boxes in JSON format
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh listAddressBoxes --print-json 9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v
[{"boxId":"4840cb6facc20b765085db0ad24768ed0c5e7afd413e8e58e597c33a993f8119","value":4987000000,"ergoTree":"0008cd02472963123ce32c057907c7a7268bc09f45d9ca57819d3327b9e7497d7b1cc347","creationHeight":125646,"assets":[],"additionalRegisters":{},"transactionId":"820c688f4b9d709924ba0186ee930a7df374d8852920bc769fc1f1d0b313e5ab","index":2}]`}
          />
        </div>
      </div>

      {/* Transfer Coins */}
      <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Send className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-green-400">Transfer Coins</h2>
        </div>
        <p className="text-gray-300 mb-4">
          With a secret key stored securely in the encrypted storage file, we can use ErgoTool to transfer coins from our address to some other recipient address. The command to do that is <code className="bg-neutral-700 px-2 py-1 rounded">send</code>.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`./ergo-tool.sh help send                                     

Command Name: send
Usage Syntax: ergo-tool send <storageFile> <recipientAddr> <amountToSend>
Description:  send the given <amountToSend> to the given <recipientAddr> using 
 the given <storageFile> to sign transaction (requests storage password)
Doc page: https://aslesarenko.github.io/ergo-tool/api/org/ergoplatform/appkit/ergotool/SendCmd.html`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          The storage file is necessary to access the secret key and generate a signature. The ErgoTool will request a storage password to unlock and decipher the file content. The command <code className="bg-neutral-700 px-2 py-1 rounded">send</code> supports the <code className="bg-neutral-700 px-2 py-1 rounded">--dry-run</code> option, which forces ErgoTool to create the signed transaction, but instead of sending it to the blockchain, ErgoTool prints the transaction on the console.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh send --dry-run storage/E1.json 9hHDQb26AjnJUXxcqriqY1mnhpLuUeC81C4pggtK7tupr92Ea1K 5000000
Storage password>
Creating prover... Ok
Loading unspent boxes from at address 9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v... Ok
Signing the transaction... Ok
Tx: {
  "id": "2633733a1d81b8fc747d984bdc36fac42cb52118b5057375b081b4c543c62b0e",
  "inputs": [
    {
      "boxId": "4840cb6facc20b765085db0ad24768ed0c5e7afd413e8e58e597c33a993f8119",
      "spendingProof": {
        "proofBytes": "060e7c99c9c9cecf89ec5c3e7b692075e0b3415318f8064c64f7f01401ac29c6637b44535151e51d43d4cd25e05ad459dbe33718a99a22dd",
        "extension": {}
      }
    }
  ],
  "dataInputs": [],
  "outputs": [
    {
      "boxId": "4eaed414ae763158126859bbf912fa9ffb9ea67ac13d81d473b1c81ec65b06fd",
      "value": 5000000,
      "ergoTree": "ErgoTree(0,WrappedArray(),Right(ConstantNode(SigmaProp(ProveDlog(ECPoint(6ba5cf,8ae5ac,...))),SSigmaProp)),80,[B@1117fff48)",
      "creationHeight": 130508,
      "assets": [],
      "additionalRegisters": {},
      "transactionId": "2633733a1d81b8fc747d984bdc36fac42cb52118b5057375b081b4c543c62b0e",
      "index": 0
    },
    {
      "boxId": "059b426fe2aaef10b6a9a618f0c5b4e97d4dd9931328bf4f52bcf92b0943a42c",
      "value": 1000000,
      "ergoTree": "ErgoTree(16,WrappedArray(IntConstant(0), IntConstant(0), ConstantNode(Coll(16,2,4,-96,11,8,-51,2,121,-66,102,126,-7,-36,-69,-84,85,-96,98,-107,-50,-121,11,7,2,-101,-4,-37,45,-50,40,-39,89,-14,-127,91,22,-8,23,-104,-22,2,-47,-110,-93,-102,-116,-57,-89,1,115,0,115,1),Coll[SByte$]), ConstantNode(Coll(1),Coll[SInt$]), IntConstant(1)),Right(BoolToSigmaProp(AND(ConcreteCollection(WrappedArray(EQ(Height$(163),SelectField(ExtractCreationInfo(ByIndex(Outputs$(165),ConstantPlaceholder(0,SInt$),None)),1)), EQ(ExtractScriptBytes(ByIndex(Outputs$(165),ConstantPlaceholder(1,SInt$),None)),SubstConstants(ConstantPlaceholder(2,Coll[SByte$]),ConstantPlaceholder(3,Coll[SInt$]),ConcreteCollection(WrappedArray(CreateProveDlog(DecodePoint(MinerPubkey$(172)))),SSigmaProp))), EQ(SizeOf(Outputs$(165)),ConstantPlaceholder(4,SInt$))),SBoolean)))),4836,[B@111805c40)",
      "creationHeight": 130508,
      "assets": [],
      "additionalRegisters": {},
      "transactionId": "2633733a1d81b8fc747d984bdc36fac42cb52118b5057375b081b4c543c62b0e",
      "index": 1
    },
    {
      "boxId": "0638ddb0fe6a8cc6ca4f981f71777f4a6e8aad72d57fdf945b24e0ef4ca714e1",
      "value": 4981000000,
      "ergoTree": "ErgoTree(0,WrappedArray(),Right(ConstantNode(SigmaProp(ProveDlog(ECPoint(472963,7c85fd,...))),SSigmaProp)),80,[B@111816258)",
      "creationHeight": 130508,
      "assets": [],
      "additionalRegisters": {},
      "transactionId": "2633733a1d81b8fc747d984bdc36fac42cb52118b5057375b081b4c543c62b0e",
      "index": 2
    }
  ]
}`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          Note the "ergoTree" scripts are deserialized and printed as abstract syntax trees. This printing format can be regulated by additional options so that the scripts can be printed as human-readable ErgoScript. (Not yet implemented, but somewhere on the roadmap.)
        </p>
        <p className="text-gray-300 mb-4">
          If we exclude the <code className="bg-neutral-700 px-2 py-1 rounded">--dry-run</code> option, the transaction will be sent and included in the blockchain.
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh send storage/E1.json 9hHDQb26AjnJUXxcqriqY1mnhpLuUeC81C4pggtK7tupr92Ea1K 5000000          
Storage password>
Creating prover... Ok
Loading unspent boxes from at address 9f4QF8AD1nQ3nJahQVkMj8hFSVVzVom77b52JU7EW71Zexg6N8v... Ok
Signing the transaction... Ok
Sending the transaction... Ok
Server returned tx id: "c5710af17f5124a232a5ef731fdf94a493025334c2a7d5a79e9923210972b962"`}
          />
        </div>
        <p className="text-gray-300 mt-4">
          The newly created transaction will be broadcast all over the blockchain, and miners will start to include it in a new block. Once the new block with our transaction is mined and accepted by the network, our transfer is confirmed, and we can <a href="https://explorer.ergoplatform.com/en/transactions/c5710af17f5124a232a5ef731fdf94a493025334c2a7d5a79e9923210972b962" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">see it in Explorer</a>.
        </p>
        <p className="text-gray-300 mb-4">
          We can also list boxes of the recipient address and see the coin we created, among others. (until it is spent by the recipient)
        </p>
        <div className="bg-neutral-900 border border-neutral-600 rounded-lg p-4 overflow-x-auto">
          <CodeBlock language="typescript"
            children={`$ ./ergo-tool.sh listAddressBoxes 9hHDQb26AjnJUXxcqriqY1mnhpLuUeC81C4pggtK7tupr92Ea1K                      
BoxId                                                             NanoERGs          
252c5ce38fc367001ea48fa6813e6252ebc169288d9b5392c572edb55380b3cd  5000000
6df9dbf08b4859b7e280afbd0822dcf20dba5bf8e3e33b78fe278df6597276f1  2000000
d47f958b201dc7162f641f7eb055e9fa7a9cb65cc24d4447a10f86675fc58328  1000000
e050a3af38241ce444c34eb25c0ab880674fc23a0e63632633ae14f547141c37  1000000
b50ed8c2953fd33b52af816c4caa63ec5b6d236a262a5a192534695c3478da78  1000000
26d6e08027e005270b38e5c5f4a73ffdb6d65a3289efb51ac37f98ad395d887c  10000000000`}
          />
        </div>
      </div>

      {/* Security Notes */}
      <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-red-400">Security Notes</h2>
        </div>
        <p className="text-gray-300">
          ErgoTool is created with security in mind and tries its best to safeguard the usage of sensitive information like mnemonic phrases (which are never stored persistently), passwords (which are never shown on the screen) etc. In addition, secret keys are never stored on a local disk unencrypted and surely never sent anywhere.
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-indigo-400/10 border border-indigo-400/20 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-indigo-400">Conclusion</h2>
        </div>
        <p className="text-gray-300 mb-4">
          ErgoTool is designed to look and feel like a typical CLI utility:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li>which is easy to use and fast to run from the command line</li>
          <li>can be scriptable via shell scripts</li>
          <li>has built-in usage help</li>
        </ul>
        <p className="text-gray-300 mt-4 mb-4">
          At the same time, ErgoTool is designed to be easily extensible:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
          <li>implemented in high-level language Scala</li>
          <li>reuses the core libraries which are used in the Ergo network client</li>
          <li>open-sourced and fully documented</li>
        </ul>
        <p className="text-gray-300 mt-4">
          This last point is especially important as many new commands can be easily added to ErgoTool, thanks to its architecture. If you need a specific feature or a command, please file an issue or maybe even a PR.
        </p>
      </div>

      {/* References */}
      <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-300">
          <li><a href="https://ergoplatform.org/en/" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Site</a></li>
          <li><a href="https://github.com/ergoplatform/ergo" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Sources</a></li>
          <li><a href="https://github.com/aslesarenko/ergo-appkit" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Appkit</a></li>
          <li><a href="https://github.com/aslesarenko/ergo-tool" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Tool</a></li>
        </ol>
      </div>
    </div>
  );
} 