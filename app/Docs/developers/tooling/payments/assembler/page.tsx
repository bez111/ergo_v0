"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function AssemblerPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Assembler
      </h1>
      <div className="mb-6 flex gap-4">
        <Link
          href="/Docs/developers/tooling/payments/proxy-contracts"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <div className="text-lg text-gray-300 mb-6 max-w-2xl">
        More likely you'll want to use <Link href="/Docs/developers/tooling/payments/dApp" className="text-cyan-400 hover:underline">dApp-dev</Link>.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The transaction assembler service allows you to bypass the node requirements for dApps.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Problem</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Currently, with libraries like ergo-appkit, ergo-lib (aka sigma-rust), and ergo-ts, development on Ergo has become a lot more convenient and is becoming easier with further developments of ergo-lib. However, there are some big barriers for dApps to be extensively used by ordinary users. One of the main ones is that users can't use their assets to participate in dApps because current wallets don't support some key features needed by dApps like:
        <ul className="list-disc pl-6 mt-2">
          <li>specifying input boxes</li>
          <li>p2s protected boxes in inputs</li>
          <li>specifying output registers</li>
          <li>and simply not supporting dApp requests</li>
        </ul>
        These issues will be resolved in the future for sure with wallets like Yoroi, but not so soon, maybe! In this situation, dApps have no workarounds other than requiring users to have their node running or implement a kind of a wallet themselves and ask users to trust and deposit there! The former is the case with Ergo Auction House which prevents it from being extensively used by everyone!
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Specifically, the problem that this topic is going to address is to bypass the node requirements by having an off-chain service to assemble arbitrary transactions for dApps.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">A Solution</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The off-chain service will allow dApps to register some requests by providing an address (which the user will deposit her assets) and some other specifications. This topic is just for getting feedback, and I still haven't designed the APIs to provide concrete examples, however:
      </div>
      <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto mb-6"><code>{`{
  "address":"address which user deposits to", // p2s address explained in Trusting Issues section
  "returnTo":"address to return assets to in case of failure",
  "startWhen":{ // start assembling when all needed assets are deposited maybe with multiple transactions
    "erg":1002000000,
    "d01bdce3959ff6b675f7ab40ec2479ca5ce1edf3ae6314631f09c0f9807752aa":71
  },
  "txSpec":{
    "requests":[
      {
        "address":"MFrQp7bsMkG9u1AQT33hn5ydUAcrqNMxhocS1RvvJqmUcHaiyXcCE3Sg7DbphepEXHXPkhEBzC6Kqw7jzQDzd4a9SX9M96b4NV8vTVp1zJGepnX41yuLzdWPzbB3k1XRTCUe7An26NDozTD3L5brAu5Nu5Pxkk28kNiFMtfG76n4yfF5YB1wbzXrfoaM9qVTFKhjLTRpJ1pwFZgzPnDC3LXEDyk4EPRjqnRe4WSnMhqa6ngfdGG79J4ZphMuDtamsJY7RD1PoWwxvidk9by7iQrQ3v9EGn1QkrtpxFN9Di7nsyKzUzQS6vxhpdcGXTRBhghaZPMnqRyzdhtspJxiYewSB14Q2cF1uR7vz3m6cqLuS7Fw8jKMpfsY9wXLRaHqUnzfJtEf7LTJfGHtCxifo2iuiHowkLWtwgZDNjH5UAiwAXubSuCzFVSZaDDyxdA5mqBSSRbSC8LoZvQwPcfFLvjjnx2nNznokdG6vA7LU8BbmXrnVXR",
        "value":1000000000,
        "assets":[
          {
            "tokenId":"d01bdce3959ff6b675f7ab40ec2479ca5ce1edf3ae6314631f09c0f9807752aa",
            "amount":71
          }
        ],
        "registers":{
          "R4":"0e240008cd02d84d2e1ca735ce23f224bd43cd43ed67053356713a8a6920965b3bde933648dc",
          "R5":"04bacf2a",
          "R6":"0580a8d6b907",
          "R7":"0e0131",
          "R8":"0e240008cd02d84d2e1ca735ce23f224bd43cd43ed67053356713a8a6920965b3bde933648dc",
          "R9":"0e1c313030303030303030302c313030303030303030302c333439313433"
        }
      }
    ],
    "inputs":[
      "$userIns",
      "boxId1",
      "boxId2",
      "..."
    ],
    "dataInputs":[
      "boxId1",
      "..."
    ],
    "fee":2000000
  }
}`}</code></pre>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The above is a potential request that Ergo Auction House can register to the service, which will start a new auction! So the Ergo Auction House app will ask the user to deposit the required assets to the <i>address</i> (will discuss what this <i>address</i> is in the next sections) using their favourite wallet and registers the request to the service.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        After such a request, the service will follow the <i>address</i> and, when the conditions are met, assembles the transaction and makes sure it will be mined. In case of failures, assets will be returned to the user; for example, if the transaction is for placing a bid and someone else places a bid before us!
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Note that all input and data input boxes are in ids, and no input raw will be required, which makes it safe for dApps to avoid running nodes for themselves or using random nodes in the network to get raw inputs.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Also, note that the above approach doesn't solve the problem of finding necessary boxes (e.g. in case of placing a bid, the auction box) for dApps, and it isn't the aim of this topic as well!
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Furthermore, the <i>txSpec</i> is pretty raw, can be improved so that the service encodes the register to make it easier for dApps, but with the mentioned libraries around, I don't see it as a problem for dApps to encode registers themselves.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        With some improvements on the node's side, the service can be very fast and effective by using chained transactions to avoid wasting time for the deposits to be mined! So basically, it will be like the user is running a node and is generating the transaction directly without intermediate operations.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Last but not least, the service will, of course, provide some other APIs for dApps to see the result of their registered requests.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Trusting Issues</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        How dApps and users should trust such a service is still a big problem. Several solutions:
        <ul className="list-disc pl-6 mt-2">
          <li>With the service being open-sourced and maybe being provided by a trusted party</li>
          <li>dApps can run the service for themselves, resolving the trust issue for at least themselves</li>
          <li>Using well-designed p2s addresses to prevent the service from stealing</li>
        </ul>
        Although one can argue that the first two options can work under some circumstances, the last option is the one which I think is applicable for most use-cases and doesn't require trust! For example, the Ergo Auction House can use p2s addresses, which will allow the assets to be spent only for placing a specific bid, and the user's address is specified as auction's bidder in the auction box and register; it to the service!
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Service Provider Incentives</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Although there are no plans to make profits out of the service, one can have multiple options and plans to make some profits with the service. For example, the service can follow the registered request for some minutes for free, and after that remove the request if the conditions are not met to assemble the transaction, then dApps can pay the service to follow the request longer!
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Until the dApp bridge in wallets is built, I think such a service will help a lot for the growth of dApps. Even after some wallets provide APIs for dApps, users still can benefit from such a service by using any wallet they wish! Please let me know if something is overlooked.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Motivation</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        Currently, to craft a transaction, we need to use Kiosk, sigma-rust, Appkit or some other tool, which makes the entry barrier quite high. Motivated from @anon_real's Tx Assembler and other proposals, I had been working on a tool to automate tx building for the off-chain components of an Ergo dApp.
      </div>
      <div className="text-gray-300 mb-6 max-w-2xl">
        The tool called simply "Tx Builder" can be used to create transactions for participating in several Ergo application protocols. The goal of Tx Builder is to allow people with just knowledge of Json to craft a transaction following certain rules.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Documentation</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        There is a very short introduction <a href="https://github.com/scalahub/Kiosk/blob/master/src/main/scala/kiosk/offchain/readme.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>.<br />
        For further details, please refer to the source code <a href="https://github.com/scalahub/Kiosk/tree/master/src/main/scala/kiosk/offchain" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a> and the examples <a href="https://github.com/scalahub/Kiosk/tree/master/src/test/scala/kiosk/offchain" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>.
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example Script</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        As an example, the <a href="https://github.com/scalahub/Kiosk/blob/master/src/test/scala/kiosk/offchain/timestamp.json" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">following Json</a> can be used for creating a timestamp using the service described <a href="https://www.ergoforum.org/t/a-trustless-timestamping-service-for-boxes/432/9" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">here</a>:
      </div>
      <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto mb-6"><code>{`{
  "constants": [
    {
      "name": "myBoxId",
      "type": "CollByte",
      "value": "ae57e4add0f181f5d1e8fd462969e4cc04f13b0da183676660d280ad0b64563f"
    },
    {
      "name": "emissionAddress",
      "type": "Address",
      "value": "2z93aPPTpVrZJHkQN54V7PatEfg3Ac1zKesFxUz8TGGZwPT4Rr5q6tBwsjEjounQU4KNZVqbFAUsCNipEKZmMdx2WTqFEyUURcZCW2CrSqKJ8YNtSVDGm7eHcrbPki9VRsyGpnpEQvirpz6GKZgghcTRDwyp1XtuXoG7XWPC4bT1U53LhiM3exE2iUDgDkme2e5hx9dMyBUi9TSNLNY1oPy2MjJ5seYmGuXCTRPLqrsi"
    },
    {
      "name": "timestampAddress",
      "type": "Address",
      "value": "4MQyMKvMbnCJG3aJ"
    },
    {
      "name": "myTokenId",
      "type": "CollByte",
      "value": "dbea46d988e86b1e60181b69936a3b927c3a4871aa6ed5258d3e4df155750bea"
    },
    {
      "name": "minTokenAmount",
      "type": "Long",
      "value": "2"
    },
    {
      "name": "one",
      "type": "Long",
      "value": "1"
    },
    {
      "name": "minStorageRent",
      "type": "Long",
      "value": "2000000"
    }
  ],
  "dataInputs": [
    {
      "id": {
        "value": "myBoxId"
      }
    }
  ],
  "inputs": [
    {
      "address": {
        "value": "emissionAddress"
      },
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "name": "inputTokenAmount",
            "value": "minTokenAmount",
            "filter": "Ge"
          }
        }
      ],
      "nanoErgs": {
        "name": "inputNanoErgs"
      }
    }
  ],
  "outputs": [
    {
      "address": {
        "value": "emissionAddress"
      },
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "value": "balanceTokenAmount"
          }
        }
      ],
      "nanoErgs": {
        "value": "inputNanoErgs"
      }
    },
    {
      "address": {
        "value": "timestampAddress"
      },
      "registers": [
        {
          "value": "myBoxId",
          "num": "R4",
          "type": "CollByte"
        },
        {
          "value": "HEIGHT",
          "num": "R5",
          "type": "Int"
        }
      ],
      "tokens": [
        {
          "index": 0,
          "id": {
            "value": "myTokenId"
          },
          "amount": {
            "value": "one"
          }
        }
      ],
      "nanoErgs": {
        "value": "minStorageRent"
      }
    }
  ],
  "binaryOps": [
    {
      "name": "balanceTokenAmount",
      "first": "inputTokenAmount",
      "op": "Sub",
      "second": "one"
    }
  ]
}`}</code></pre>
      <div className="text-gray-300 mb-6 max-w-2xl">
        <b>Using with KioskWallet:</b> The above script was used to automatically generate <a href="https://explorer.ergoplatform.com/en/transactions/da441606b7933de8e87bbd439b4fbe1888c1403f58682c5bcddcbc488ee99773" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">this transaction</a> using <a href="https://kioskweb.org/session/#kiosk.Wallet" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">KioskWallet</a>.
      </div>
    </>
  );
} 