"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, Cpu, Layers, Database } from "lucide-react";

export default function PublicContractsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <FileText className="w-10 h-10 text-cyan-400" />
        ErgoScript Contracts
      </h1>
      
      <div className="mb-6">
        <Link
          href="/docs/developers/ergoscript-languages/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ergo Contracts</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The{' '}
          <a href="https://github.com/ergoplatform/ergo-contracts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
            ergo-contracts <ExternalLink className="w-4 h-4" />
          </a>{' '}
          repository contains source code for Ergo smart contracts, along with compilation, testing, and formal verification tooling.
        </div>

        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
          <li>
            <a href="https://github.com/ergoplatform/ergo-contracts/blob/42719326656e4764f214f57fa8f45205ee20d58d/verified-contracts/src/main/scala/org/ergoplatform/contracts/AssetsAtomicExchange.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              AssetsAtomicExchange.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/ergo-contracts/blob/42719326656e4764f214f57fa8f45205ee20d58d/verified-contracts/src/main/scala/org/ergoplatform/contracts/CrowdFundingContractVerification.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              CrowdFundingContractVerification.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/ergo-contracts/blob/42719326656e4764f214f57fa8f45205ee20d58d/verified-contracts/src/main/scala/org/ergoplatform/contracts/DummyContractVerification.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              DummyContractVerification.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/ergo-contracts/blob/42719326656e4764f214f57fa8f45205ee20d58d/verified-contracts/src/main/scala/org/ergoplatform/contracts/Edex.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Edex.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/ergo-contracts/blob/42719326656e4764f214f57fa8f45205ee20d58d/verified-contracts/src/main/scala/org/ergoplatform/contracts/ICOContractVerification.scala" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              ICOContractVerification.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">ErgoScript Examples</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-neutral-700 mb-8">
            <thead>
              <tr className="bg-neutral-800">
                <th className="border border-neutral-700 p-3 text-left text-cyan-400">Number</th>
                <th className="border border-neutral-700 p-3 text-left text-cyan-400">Difficulty</th>
                <th className="border border-neutral-700 p-3 text-left text-cyan-400">Title</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="border border-neutral-700 p-3">1</td>
                <td className="border border-neutral-700 p-3">Beginner</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/pinLockContract.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Pin Lock Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">2</td>
                <td className="border border-neutral-700 p-3">Intermediate</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/singleChainSwap.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Single-Chain Swap Contracts <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-700 p-3">3</td>
                <td className="border border-neutral-700 p-3">Starter</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/simpleSend.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Simple Send <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">4</td>
                <td className="border border-neutral-700 p-3">Intermediate</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/doubleChainSwap.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Double-Chain Swap Contracts <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-700 p-3">5</td>
                <td className="border border-neutral-700 p-3">Beginner</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/timedFund.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Timed Fund Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">6</td>
                <td className="border border-neutral-700 p-3">Beginner</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/grantorBeneficiaryPinLock.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Grantor/Beneficiary Pin Lock Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-700 p-3">7</td>
                <td className="border border-neutral-700 p-3">Beginner</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/escrowDepositContract.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Escrow Deposit Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">8</td>
                <td className="border border-neutral-700 p-3">Expert</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/tokenSalesService.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Token sales service contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-700 p-3">9</td>
                <td className="border border-neutral-700 p-3">Beginner</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/selfReplicatingTokenSale.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Self-Replicating Sale Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">10</td>
                <td className="border border-neutral-700 p-3">Intermediate</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/headsOrTails.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Heads or Tails game Contract <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-700 p-3">11</td>
                <td className="border border-neutral-700 p-3">Expert</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/stealthAddress.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Stealth Address <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
              <tr className="bg-neutral-900/30">
                <td className="border border-neutral-700 p-3">12</td>
                <td className="border border-neutral-700 p-3">Expert</td>
                <td className="border border-neutral-700 p-3">
                  <a href="https://github.com/ergoplatform/ergoscript-by-example/blob/main/headsOrTailsParallel.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Heads or Tails game Contract with Parallelization <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">sigmastate-interpreter examples</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-2">
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/c863a9b1a82589e47b15f76f3affdb30a475e740/sigmastate/src/test/scala/sigmastate/utxo/examples/IcoExample.scala#L254-L303" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              IcoExample.scala <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/tree/c863a9b1a82589e47b15f76f3affdb30a475e740/sigmastate/src/test/scala/sigmastate/utxo/examples" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Many more <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Cpu className="w-6 h-6" />
          dApps and Tooling Contracts
        </h2>

        <h3 className="text-xl font-bold text-orange-400 mb-3">Deployed Contracts</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {[
            { name: "GuapSwap", url: "https://github.com/GuapSwap/guapswap-ronin/tree/main/src/main/scala/contracts" },
            { name: "Lilium", url: "https://github.com/LiliumErgo/scala-api/blob/main/app/contracts/LiliumContracts.scala" },
            { name: "Paideia", url: "https://github.com/paideiadao/paideia-contracts" },
            { name: "ErgoMixer", url: "https://github.com/ergoMixer/ergoMixBack/tree/master/mixer/app/mixer" },
            { name: "Rosen Bridge", url: "https://github.com/rosen-bridge/contract" },
            { name: "Thz.FM", url: "https://github.com/TremendouslyHighFrequency/SmartContracts" },
            { name: "EXLE", url: "https://github.com/Ergo-Lend/edge/blob/main/src/main/scala/edge/contracts/Contract.scala" },
            { name: "Spectrum Finance", url: "https://github.com/spectrum-finance/ergo-dex/tree/master/contracts" },
            { name: "Pheonix Finance (Hodlcoin V2)", url: "https://github.com/PhoenixErgo/phoenix-hodlcoin-contracts" },
            { name: "SkyHarbor", url: "https://github.com/skyharbor-market/contracts" },
            { name: "Hodlbox", url: "https://github.com/SavonarolaLabs/hodlbox-xyz/tree/main/src/lib/contract" },
            { name: "SigmaO", url: "https://github.com/ThierryM1212/SigmaO/tree/main/contract" },
            { name: "SigmaUSD", url: "https://github.com/anon-real/sigma-usd/tree/master/ageusd" },
            { name: "Ergo Raffle", url: "https://github.com/ErgoRaffle/raffle-backend/blob/master/app/raffle/RaffleContract.scala" },
            { name: "Auction Coin", url: "https://github.com/Auction-Coin/contracts" },
            { name: "Sigma Finance", url: "https://github.com/K-Singh/Sigma-Finance/tree/master/contracts" },
            { name: "Comet Lottery", url: "https://github.com/mgpai22/comet-lottery/blob/main/comet-lottery-bot/src/main/scala/contracts/LotteryContracts.scala" },
            { name: "Duckpools", url: "https://github.com/duckpools/lend-protocol-contracts/tree/main/contracts" },
            { name: "ergopad", url: "https://github.com/ergopad/ergopad-api/tree/dev/app/contracts" }
          ].map((contract, index) => (
            <a
              key={index}
              href={contract.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 p-2 rounded bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors"
            >
              {contract.name} <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-3">EIPs</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0031.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Babel Fees <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/eips/tree/cae50b722d6929c794847d21668500acb01f3c8c/eip-0023/contracts" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Oracle Pools v2 <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/eips/pull/87/files" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Stealth Addresses <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0022.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Auction contract V2 <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/eips/blob/master/eip-0015.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              SigmaUSD Bank <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ergoplatform/eips/pull/33" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              ErgoFund <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-bold text-orange-400 mb-3">In Development</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {[
            { name: "Dexy", url: "https://github.com/ergoplatform/ergo-jde/blob/main/kiosk/src/test/scala/kiosk/dexy/DexySpec.scala" },
            { name: "Bitdomains", url: "https://github.com/bitdomains/contracts" },
            { name: "ErgoNames", url: "https://github.com/ergonames/ergonames/blob/master/src/main/scala/" },
            { name: "Analog Ergo", url: "https://github.com/dzyphr/ScalaSigmaParticle" },
            { name: "Chaincash", url: "https://github.com/ChainCashLabs/chaincash/tree/master/contracts" },
            { name: "AnetaBTC", url: "https://github.com/anetabtc/aneta_contracts" },
            { name: "Lithos", url: "https://github.com/Lithos-Protocol/Lithos/tree/master/src/main/scala" },
            { name: "SigmaJoin", url: "https://github.com/ergoplatform/ergo-jde/tree/main/kiosk/src/test/scala/kiosk/mixer" },
            { name: "Trade-In Contracts (BlitzTCG)", url: "https://github.com/lucagdangelo/trade-in/tree/main/src/main/scala/contracts" }
          ].map((contract, index) => (
            <a
              key={index}
              href={contract.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 p-2 rounded bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors"
            >
              {contract.name} <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-3">Misc</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {[
            { name: "smartpooling-contracts", url: "https://github.com/GetBlok-io/ergo-smartpooling-contracts/tree/master/src/main/scala/contracts" },
            { name: "ergo-index", url: "https://github.com/ergo-index/ergo-index-contracts" },
            { name: "Subpooling", url: "https://github.com/GetBlok-io/Subpooling/tree/mainnet_plasma/conf/scripts" },
            { name: "chain-name-service", url: "https://github.com/ross-weir/chain-name-service/tree/main/contracts" },
            { name: "AgeUSD", url: "https://github.com/ergoplatform/eips/pull/33" },
            { name: "ErgoGravity", url: "https://github.com/mhssamadani/gravity-core/blob/dev/contracts/ergo/gravity.scala" },
            { name: "ErgoNebula", url: "https://github.com/mhssamadani/gravity-core/blob/dev/contracts/ergo/nebula.scala" },
            { name: "Oracle Pools v0.4a", url: "https://github.com/scalahub/Kiosk/tree/master/src/test/scala/kiosk/oraclepool/v4a" },
            { name: "NightOwl", url: "https://github.com/nightowlcasino/ergoscript-contracts" },
            { name: "Hodlcoin (V1?)", url: "https://github.com/lucagdangelo/hodlcoin-contracts" }
          ].map((contract, index) => (
            <a
              key={index}
              href={contract.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 p-2 rounded bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors"
            >
              {contract.name} <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        <h3 className="text-xl font-bold text-orange-400 mb-3">ToDo</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/danieloravec/ergo-token-swap" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              single-tx-swap <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>Gluon</li>
          <li>Palmyra</li>
          <li>
            <a href="https://github.com/ergoplatform/sigma-rust/pull/209" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              on-chain swaps contracts <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <Database className="w-6 h-6" />
          Resources
        </h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-1">
          <li>
            <a href="https://github.com/anon-real/contract-testing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              contract-testing <ExternalLink className="w-3 h-3" />
            </a>{' '}
            provides a quick tutorial that may be useful for testing your contracts off-chain.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-orange-400 mb-3">Ergoforum</h3>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <a href="https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Offchain Bank operating at Layer 2 <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/decentralized-grid-trading-on-ergo/3750/5" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Decentralised Grid Contract <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/market-driven-emission-contracts/3749" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Market-driven emission contracts <ExternalLink className="w-3 h-3" />
            </a>
          </li>
          <li>
            <a href="https://www.ergoforum.org/t/interest-free-loan-contract/67" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
              Interest-Free Loan Contract <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 