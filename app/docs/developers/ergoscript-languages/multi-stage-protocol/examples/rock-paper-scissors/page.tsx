"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Copy, Check } from "lucide-react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function RockPaperScissorsPage() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }));
      }, 2000);
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
        <Gamepad2 className="w-10 h-10 text-green-400" />
        Rock-Paper-Scissors
      </h1>

      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages/multi-stage-protocol/examples"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Examples
        </Link>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="text-gray-300 space-y-4">
            <p>
              Our next example of a multi-stage contract is the Rock-Paper-Scissors game, often used as an introductory example for smart contracts. The game is played between two players, Alice and Bob. Each player chooses a secret move independently, and the game outcome is decided after both secrets are revealed.
            </p>
            <p>
              Let <InlineMath math="a, b \in \mathbb{Z}_3" /> be the secret choices of Alice and Bob, respectively, where (0, 1, 2) represent (rock, paper, scissors). If <InlineMath math="a = b" />, the game is a draw. Otherwise, if <InlineMath math="a - b \bmod 3 = 1" />, Alice wins; if <InlineMath math="a - b \bmod 3 = 2" />, Bob wins. A key challenge is that the first party to reveal their secret is disadvantaged, as the other party could then adaptively choose their move to guarantee a win. In the physical world, simultaneous revelation prevents this. In the virtual world of blockchains, however, simultaneity cannot be strictly enforced. This potential attack must be handled using cryptographic commitments. The first party (Alice) initially reveals only a commitment to her secret, not the secret itself.
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Modified Game Using Commitments</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The modified game using commitments proceeds as follows:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>
                <strong>Commitment Phase</strong>: Alice chooses her secret move <InlineMath math="a" /> and a secret random value <InlineMath math="s" />. She computes a commitment <InlineMath math="c = H(a \parallel s)" /> (where <InlineMath math="H" /> is a hash function like Blake2b256) and publishes <InlineMath math="c" /> (e.g., by locking funds in a contract containing <InlineMath math="c" />).
              </li>
              <li>
                <strong>Reveal Phase (Bob)</strong>: Bob chooses and reveals his move <InlineMath math="b" />. At this point, Alice knows the outcome based on <InlineMath math="a" /> and <InlineMath math="b" />, but Bob doesn't know <InlineMath math="a" />.
              </li>
              <li>
                <strong>Reveal Phase (Alice)</strong>: Alice reveals her original move <InlineMath math="a" /> and the secret <InlineMath math="s" />. Anyone can now verify that <InlineMath math="c = H(a \parallel s)" />, confirming Alice didn't change her move after seeing Bob's. The winner is then determined based on <InlineMath math="a" /> and <InlineMath math="b" />.
              </li>
            </ol>
            <p>
              This protocol works assuming Alice behaves honestly and reveals <InlineMath math="a" /> and <InlineMath math="s" /> regardless of the outcome. However, a malicious Alice might refuse to reveal her commitment if she knows she lost. Smart contracts must handle such edge cases, as they cannot be easily fixed after deployment. In this example, we must penalize Alice (e.g., by forfeiting her stake) if she fails to reveal her commitment within a specified timeframe (deadline).
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Two-Stage Protocol Implementation</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              The complete game is implemented in ErgoScript using a two-stage protocol:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>
                <strong>Stage 1 (Start Game)</strong>: Alice creates a "start-game" box. This box locks her stake and contains her commitment <InlineMath math="c" />. The script guarding this box defines the rules for the next stage.
              </li>
              <li>
                <strong>Stage 2 (End Game)</strong>: Bob spends the start-game box by revealing his move <InlineMath math="b" /> and contributing his stake. This transaction creates one or two "end-game" boxes. These boxes contain the combined stake and are spendable only according to the game's outcome rules (including Alice revealing <InlineMath math="a" /> and <InlineMath math="s" />, handling draws, wins, losses, and timeouts).
              </li>
            </ol>
            <p>
              To initiate the game, Alice decides on the stake amount <InlineMath math="x" /> (in nanoErgs), chooses her move <InlineMath math="a" /> and secret <InlineMath math="s" />, computes the commitment <InlineMath math="c = H(a \parallel s)" />, and locks <InlineMath math="x" /> nanoErgs along with <InlineMath math="c" /> in the start-game box, protected by the following script (<code className="bg-neutral-700 px-2 py-0.5 rounded">startGameScript</code>):
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stage 1: Start Game Script</h2>
          <div className="text-gray-300 space-y-4">
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`OUTPUTS.forall(
    {(out:Box) =>
        val b = out.R4[Byte].get
        val bobDeadline = out.R6[Int].get
        bobDeadline >= HEIGHT+30 && out.value >= SELF.value &&
        (b == 0 || b == 1 || b == 2) &&
        out.propositionBytes == outScript
    }
) && OUTPUTS.size == 2 && OUTPUTS(0).R7[SigmaProp].get == alice &&
OUTPUTS(0).R4[Byte].get == OUTPUTS(1).R4[Byte].get // same b`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`OUTPUTS.forall(
    {(out:Box) =>
        val b = out.R4[Byte].get
        val bobDeadline = out.R6[Int].get
        bobDeadline >= HEIGHT+30 && out.value >= SELF.value &&
        (b == 0 || b == 1 || b == 2) &&
        out.propositionBytes == outScript
    }
) && OUTPUTS.size == 2 && OUTPUTS(0).R7[SigmaProp].get == alice &&
OUTPUTS(0).R4[Byte].get == OUTPUTS(1).R4[Byte].get // same b`, 'startGameScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['startGameScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            <p>
              The above code requires that the spending transaction create exactly two outputs, one paying to each player in the event of a draw or both paying to the winner otherwise. In particular, the code requires that (1) register R7 of the first output must contain Alice's public key (for use in the draw scenario), (2) register R4 of each output must contain Bob's choice, and (3) each output must contain at least x tokens protected by outScript, which is given below:
            </p>
          </div>
        </section>

        <section className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Stage 2: End Game Script</h2>
          <div className="text-gray-300 space-y-4">
            <div className="relative">
              <pre className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto">
                <code className="text-gray-200">
{`val s = getVar[Coll[Byte]](0).get // Alice's secret byte string s
val a = getVar[Byte](1).get // Alice's secret choice a
val b = SELF.R4[Byte].get // Bob's public choice b
val bob = SELF.R5[SigmaProp].get // Bob's public key
val bobDeadline = SELF.R6[Int].get // after this, Bob wins by default
val drawPubKey = SELF.R7[SigmaProp].get
val valid_a = (a == 0 || a == 1 || a == 2)
val validCommitment = blake2b256(s ++ Coll(a)) == c
val validAliceChoice = valid_a && validAliceChoice
val aliceWins = (a - b) == 1 || (a - b) == -2
val receiver = if (a == b) drawPubKey else (if (aliceWins) alice else bob)
(bob && HEIGHT > bobDeadline) || (receiver && validAliceChoice)`}
                </code>
              </pre>
              <button
                onClick={() => copyToClipboard(`val s = getVar[Coll[Byte]](0).get // Alice's secret byte string s
val a = getVar[Byte](1).get // Alice's secret choice a
val b = SELF.R4[Byte].get // Bob's public choice b
val bob = SELF.R5[SigmaProp].get // Bob's public key
val bobDeadline = SELF.R6[Int].get // after this, Bob wins by default
val drawPubKey = SELF.R7[SigmaProp].get
val valid_a = (a == 0 || a == 1 || a == 2)
val validCommitment = blake2b256(s ++ Coll(a)) == c
val validAliceChoice = valid_a && validAliceChoice
val aliceWins = (a - b) == 1 || (a - b) == -2
val receiver = if (a == b) drawPubKey else (if (aliceWins) alice else bob)
(bob && HEIGHT > bobDeadline) || (receiver && validAliceChoice)`, 'endGameScript')}
                className="absolute top-2 right-2 p-2 bg-neutral-700 hover:bg-neutral-600 rounded-md transition-colors"
                title="Copy code"
              >
                {copiedStates['endGameScript'] ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
            <p>
                             The above code protects the two end-game boxes that Bob generates. The condition <code className="bg-neutral-700 px-2 py-0.5 rounded">(bob &amp;&amp; HEIGHT &gt; bobDeadline)</code> guarantees that Bob automatically wins if Alice does not open her commitment before a certain deadline. Note that Bob has to ensure that R7 of the second output contains his public key. Additionally, he must ensure that R5 of both outputs contains his public key (see below). We do not encode these conditions because if Bob does not follow the protocol, he will automatically lose.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 