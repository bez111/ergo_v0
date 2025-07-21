"use client";

import React from "react";
import Link from "next/link";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function UtxoSetScanningWalletApiPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        EIP-0001: UTXO-Set Scanning Wallet API
      </h1>
      <Link
        href="/Docs/developers/infrastructure/wallets/standards"
        className="inline-flex items-center px-6 py-3 bg-orange-500 rounded-xl font-semibold text-black hover:bg-orange-600 transition-transform hover:scale-105 mb-8"
      >
        Back to Standards
      </Link>
      <h2 className="text-2xl font-bold mb-4 mt-8">Motivation</h2>
      <p className="text-gray-300 mb-4">
        Currently, the Ergo node wallet is able to search for boxes protected only by simplest scripts associated with P2PK addresses which is a large barrier for dApps. This makes development of external applications which use smart contracts quite challenging. Development would involve scanning the blockchain state independently by the off-chain portion of the dApp itself with handling forks, confirmation numbers, and so on.
      </p>
      <p className="text-gray-300 mb-4">
        This Ergo Improvement Proposal focused on extending the wallet to be able to serve the needs of external applications by providing a flexible scanning interface and the possibility for applications to register scans with the wallet to ensure that they are tracked. Scans that have successfully passed are considered to belong to the application.
      </p>
      <p className="text-gray-300 mb-4">
        Each scan has a given scan ID, and each box found that matches said scan is tracked by the wallet and thus is associated with the scan ID. Among possible scans, there are some pre-defined scans implemented by the node wallet, to track wallet's public keys and also mining rewards. Other scans are not directly implemented inside of the wallet but can be added by a user or an external application.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Scanning</h2>
      <p className="text-gray-300 mb-4">
        A new request to scan is initiated which <b>registers</b> said scan to be checked for all future UTXO-set changes (thus it is forward-looking).
      </p>
      <p className="text-gray-300 mb-4">
        A predicate (function which returns a boolean value for a box) is required to register a scan. Predicates available are:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><code>CONTAINS(register, value)</code> returns true if certain register contains given value. If <i>register</i> argument is missed, R1 (script register) will be scanned</li>
        <li><code>EQUALS(register, value)</code> returns true if certain register contains only given value. If <i>register</i> argument is missed, R1 will be scanned</li>
        <li><code>CONTAINS_ASSET(assetId)</code> - if a box contains asset with a given id</li>
        <li><code>AND(predicate1, predicate2, ..., predicateN)</code> - if all the children predicates are true</li>
        <li><code>OR(predicate1, predicate2, ..., predicateN)</code> - if one of the children predicates is true</li>
      </ul>
      <p className="text-gray-300 mb-4">
        <b>value</b> field in the predicates above is about encoded sigma value, <b>assetId</b> is about just 32-bytes long byte array.
      </p>
      <p className="text-gray-300 mb-4">
        Example predicate (Haskell-like):
      </p>
      <UniversalCopyCodeBlock code={`AND(
    CONTAINS_ASSET("bc01de24311298068c07857d3860625abf3277997e2a2b8ff8ea91dda28d47a5"), 
    CONTAINS("0e240008cd029f2230dbe53f6b84d8a884a3407c3dffe43daf8037445441be7cdcd261feeaa4")
   )`} />
      <p className="text-gray-300 mb-4">
        This must be formatted in JSON and sent as a request to register the scan. This is done via the endpoint: <code>/scan/register</code>.
      </p>
      <UniversalCopyCodeBlock code={`{
    "scanName": "Asset and script tracker",
    "trackingRule" : {
        "predicate": "and",
        "args":[
            {"predicate": "contains", "value": "0e240008cd029f2230dbe53f6b84d8a884a3407c3dffe43daf8037445441be7cdcd261feeaa4"},
            {"predicate": "containsAsset", "assetId": "02dada811a888cd0dc7a0a41739a3ad9b0f427741fe6ca19700cf1a51200c96bf7"}
        ]
    }
}`} />
      <p className="text-gray-300 mb-4">
        The node API returns an error if something wrong with request. If it is well formed then the wallet will return a new scan ID which the user/dApp can use to reference said scan. The scan identifier(ID) is encoded as 16-bit long signed but always positive integer.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><code>/scan/listAll</code> returns all the registered scans</li>
        <li><code>/scan/deregister</code> stops tracking a given scan based on the ID provided</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Interaction With the Wallet</h2>
      <p className="text-gray-300 mb-4">
        If a scan has found a box which also could be spent by the node wallet, there is a question whether the box should be shared with the wallet or not. There are three options for corresponding <b>walletInteraction</b>:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>off</b> - add found boxes to the scan only</li>
        <li><b>shared</b> - add found boxes to the scan if they belong to the wallet (so associated with P2PK scripts)</li>
        <li><b>forced</b> - add found boxes to the wallet</li>
      </ul>
      <p className="text-gray-300 mb-4">Example:</p>
      <UniversalCopyCodeBlock code={`{
    "scanName": "Script tracker",
    "trackingRule" : {
        "predicate": "contains", 
        "value": "0e240008cd029f2230dbe53f6b84d8a884a3407c3dffe43daf8037445441be7cdcd261feeaa4"       
    },
    "walletInteraction": "forced"
}`} />

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Adding Boxes Externally</h2>
      <p className="text-gray-300 mb-4">
        Sometimes it is simpler for an external application to find relevant boxes itself without using the wallet scanner. For that we have the following endpoint:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><code>/scan/addBox</code></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Removing False Positive Boxes</h2>
      <p className="text-gray-300 mb-4">
        The wallet collects boxes according to the scanning rules used. However, a box which passes the predicate filter may still not necessarily be wanted as part of a scan. As such, an application can inform the wallet if a box is not needed to be tracked and can be ignored.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><code>/scan/stopTracking/{`{scanId}`}/{`{boxId}`}</code> - to inform the wallet that a box does not belong to a given scan and thus should not be tracked anymore</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Reading Boxes</h2>
      <p className="text-gray-300 mb-4">
        Once boxes are recognized, an external application can use them. To get all of the boxes that have ever been tracked by a scan, or current tracked unspent boxes, the following API methods are proposed:
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><code>/scan/boxes/{`{scanId}`}</code></li>
        <li><code>/scan/boxesUnspent/{`{scanId}`}</code></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: List Of All Proposed Endpoints</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>POST: <code>/scan/register</code> - Registers/begins tracking a scan based on a provided predicate</li>
        <li>POST: <code>/scan/deregister</code> - Stops tracking a given scan based on the ID provided</li>
        <li>POST: <code>/scan/addBox</code> - Manually add box</li>
        <li>POST: <code>/scan/stopTracking</code> - To inform the wallet that a box does not belong to a given scan</li>
        <li>GET: <code>/scan/listAll</code> - Returns all the registered scans</li>
        <li>GET: <code>/scan/boxes/{`{scanId}`}</code> - List all boxes that have ever been tracked by the scan</li>
        <li>GET: <code>/scan/boxesUnspent/{`{scanId}`}</code> - List all boxes that have been tracked by the scan and are still unspent/part of the UTXO set</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: List Of Implemented Endpoints</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li>POST: <code>/scan/register</code> - 3.3.0</li>
        <li>POST: <code>/scan/deregister</code> - 3.3.0</li>
        <li>POST: <code>/scan/addBox</code></li>
        <li>POST: <code>/scan/stopTracking</code> - 3.3.0</li>
        <li>GET: <code>/scan/listAll</code> - 3.3.0</li>
        <li>GET: <code>/scan/boxesUnspent/{`{scanId}`}</code> - 3.3.0</li>
      </ul>
      <p className="text-gray-300 mb-4">
        Objects and endpoints description can be found in <a href="https://github.com/ergoplatform/ergo/blob/master/src/main/resources/api/openapi.yaml" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">openapi.yaml file in Ergo protocol reference client repository</a>.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">Specification: Predefined Scans</h2>
      <p className="text-gray-300 mb-4">
        There are some predefined scans in the node, such as SimplePayments and MiningRewards. External scans has exclusive priority over predefined ones, this does mean that if a box could be, for example, associated with both the SimplePayments and an external scan, then the box will be associated with the external scan <b>only</b>.
      </p>
      <p className="text-gray-300 mb-4">
        The SimplePayments scan always has id == 10, MiningRewards has id == 9. The SimplePayments default wallet scan is using the <code>OR(CONTAINS(pk_1), ..., CONTAINS(pk_n))</code> predicate, where <code>pk_1, ..., pk_n</code> are script bytes of the P2PK addresses of the wallet. MiningRewards predicate is similarly about mining script bytes corresponding to the P2PK addresses of the wallet.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-8">UTXO-Set Scanning dApp Examples</h2>
      <p className="text-gray-300 mb-4">
        Below example scenarios for dApp use cases are presented.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4">
        <li><b>Crowdfunding</b><br />
          The simplest crowdfunding script is provided in Section 2.3 of <a href="https://ergoplatform.org/docs/ErgoScript.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoScript Whitepaper</a>.
          <br />There are two roles in the script, a user and a project. For a user, scanning pledge boxes of self would be just <code>EQUALS(script)</code>, where <code>script</code> are the bytes of a script from the Whitepaper that embeds both the backer and project public keys. The user can withdraw the pledge box if it is still unspent after the crowdfunding deadline. However, a user may be interested to know the state of the campaign at a given moment. The project also needs to collect all of the pledge boxes. For this, the simplest option is to use <code>CONTAINS(projectPubKey)</code> predicate, however if the project is using its key for other purposes than the crowdfunding, then the filter will give false-positives. To reduce false positives count, instead of the public key, a larger part of the script which contains <i>projectPubKey</i> but does not contain <i>backerPubKey</i> could be used within <code>CONTAINS()</code>.
        </li>
        <li><b>Mixing</b><br />
          For mixing scripts, see Section 3.3.1 of <a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Advanced ErgoScript Tutorial</a>. To find her half-mix coin in the mixing application, Alice can simply watch for her public key. Then she is watching for this box, and once the box is spent, she figures out the outputs of the spending transaction and adds her output manually to the wallet. Bob can on his side can track a large enough part of the half-mix script not including Alice's pubkey u.
        </li>
        <li><b>LETS</b><br />
          We consider a trusted LETS as described <a href="trustless-lets.md" className="text-blue-400 hover:underline">here</a>.<br />
          Management contract uses a singleton token, as does the exchange contract as well. Thus for both the managers and the user, boxes can be tracked via <code>CONTAINS_ASSET()</code> filter.
        </li>
      </ul>
    </>
  );
} 