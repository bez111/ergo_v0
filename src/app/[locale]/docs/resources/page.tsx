"use client";

/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";

const tabs = [
  { id: "social", label: "Social Contract" },
  { id: "audit", label: "Audit" },
  { id: "howey", label: "The Howey Test" },
  { id: "privacy", label: "Privacy Guide" },
  { id: "misconceptions", label: "Common Misconceptions" },
  { id: "cbdc", label: "A CBDC For All" },
];

const tabContent: Record<string, React.ReactNode> = {
  social: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Ergo's Social Contract</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">The Ergo protocol is very flexible and may be changed in the future by the community. In this section, we define the main principles that should be followed in Ergo which might be referred to as Ergo's Social Contract.</p>
        <p className="text-gray-400 text-sm">In case of intentional violation of any of these principles, the resulting protocol should not be called Ergo.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Decentralization First</h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Ergo should be as decentralized as possible: any parties (social leaders, software developers, hardware manufacturers, miners, funds and so on) whose absence or malicious behavior may affect the security of the network should be avoided.</li>
          <li>If any of these parties do appear during Ergo's lifetime, the community should consider ways to decrease their impact level.</li>
        </ul>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Created for Regular People</h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Ergo is a platform for ordinary people, and their interests should not be infringed upon in favor of big parties.</li>
          <li>In particular, this means that centralization of mining should be prevented and regular people should be able to participate in the protocol by running a full node and mining blocks (albeit with a small probability).</li>
        </ul>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Platform for Contractual Money</h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Ergo is the base layer to applications that will be built on top of it.</li>
          <li>It is suitable for several applications but its main focus is to provide an efficient, secure and easy way to implement financial contracts.</li>
        </ul>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Long-term Focus</h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>All aspects of Ergo development should be focused on a long term perspective.</li>
          <li>At any point of time, Ergo should be able to survive for centuries without expected hard forks, software or hardware improvements or some other unpredictable changes.</li>
          <li>Since Ergo is designed as a platform, applications built on top of Ergo should also be able to survive in the long term.</li>
          <li>This resiliency and long term survivability may also enable Ergo to be a good store of value.</li>
        </ul>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Permissionless and Open</h3>
        <ul className="list-disc pl-6 text-gray-200 space-y-1">
          <li>Ergo protocol does not restrict or limit any categories of usage.</li>
          <li>It should allow anyone to join the network and participate in the protocol without any preliminary actions.</li>
          <li>Unlike the traditional financial system, no bailouts, blacklists or other forms of discrimination should be possible on the core level of Ergo protocol.</li>
          <li>On the other hand application developers are free to implement any logic they want, taking responsibility for the ethics and legality of their application.</li>
        </ul>
      </div>
    </div>
  ),
  audit: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Security Audit</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">Ergo has successfully passed a security audit of certain (most critical) parts of the code. The audit was performed by Jean-Philipee Aumasson (<a href="https://aumasson.jp/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">veorq</a>).</p>
        <p className="text-gray-400 text-sm">The detailed report is below. Nothing critical is found. Comments on issues found:</p>
        <ul className="list-disc pl-6 text-gray-200 mt-2 space-y-1">
          <li>On wallet password, we'll provide a recommendation in subsequent versions of the protocol client. Not sure hard enforcement on passwords will take place, but we'll do more consultations on this.</li>
          <li>Changing "n" and "k" parameters makes sense only when launching a new network. Changing these parameters in the mining node will make blocks produced invalid for other nodes. Changing these parameters in the protocol client means going on another fork (blocks coming from the honest protocol participants will be rejected). So no need for extra checks, as people launching new networks will set "n" and "k" properly.</li>
          <li>Currently, the Ergo node (as well as other blockchain protocol clients and wallets we're aware of and the cryptographic libraries we're using) does not protect from side-channel attacks running locally (e.g. timing attacks or memory inspection by malware or viruses). So please protect the machines you're running wallets on!</li>
        </ul>
        <p className="text-gray-400 text-sm mt-2">Ergo security assessment by Jean-Philippe Aumasson on 07/Dec/19</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <p className="text-gray-200 mb-2">Ergo solicited us to perform a security assessment of several components of their Ergo Platform:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Sigma protocol proofs creation and verification</li>
          <li>Wallet's secure storage of secrets</li>
          <li>Proof-of-Work validation</li>
        </ul>
        <p className="text-gray-400 text-sm">This brief report summarises our assessment and describes our findings and mitigation recommendations.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Sigma protocol proofs</h3>
        <p className="text-gray-200 mb-2">The Ergo protocol relies on ErgoScript, a scripting language supporting sigma-statements, which can be proven and verified through non-interactive proofs of knowledge.</p>
        <p className="text-gray-200 mb-2">These proofs are statements described as a tree of AND, OR, and threshold conditions, whose leaves are proofs of knowledge of a discrete logarithm problem. The proof of the sigma-statement is then made non-interactive thanks to the Fiat-Shamir transform. This logic is specified in the ErgoScript paper, and the specific proving and verification routines described in Appendix A.</p>
        <p className="text-gray-200 mb-2">Implementation challenges are then to:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Define encoding of the proofs that are safe and efficient, and implement serialisation and deserialisation that always successfully processes valid input and gracefully fails to process invalid input.</li>
          <li>Implement the proving and verification functionalities correctly, in compliance with the specification, and most importantly, no invalid statement can successfully pass verification.</li>
        </ul>
        <p className="text-gray-200 mb-2">We reviewed these two aspects, based on the code in the repository <span className="font-mono">sigmastate-interpreter</span>, and the ErgoScript paper, carefully comparing the intended behaviour (in Appendix A) with the actual behaviour as implemented.</p>
        <p className="text-gray-200 mb-2">We notably reviewed code from the <span className="font-mono">SigSerializer</span>, <span className="font-mono">Interpreter</span>, and <span className="font-mono">ProverInterpreter</span> traits and objects.</p>
        <p className="text-gray-200 mb-2">We mainly sought bugs from the following classes:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Unsafe processing of malformed input</li>
          <li>Unsafe processing of unusually long or short input</li>
          <li>Behavior when large tree depth or recursion level</li>
          <li>Unsafe use Scala types and structures</li>
          <li>Inappropriate variable types</li>
          <li>Integer overflows</li>
          <li>Race conditions</li>
          <li>Logic bugs</li>
        </ul>
        <p className="text-gray-200 mb-2">Despite the extensive review, we did not identify any security issue.</p>
        <p className="text-gray-200 mb-2">The protocol's logic and internals are relatively complex, and we believe the highest risk is in parsing and verifying proofs. To exploit such issues, however, an attacker would have to create a semantically correct script that somehow benefits them yet that passes verification when it does not ought to.</p>
        <p className="text-gray-200 mb-2">Regarding software security, Scala eliminates certain classes of bugs, but Scala code may still suffer from bugs due to Scala's specific behaviour or to unhandled errors.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Wallet</h3>
        <p className="text-gray-200 mb-2">Ergo's wallet functionality enables its users to store a secret on disk and recover it, initialising the wallet with a new seed when it's first used.</p>
        <p className="text-gray-200 mb-2">This logic is mainly defined in <span className="font-mono">ErgoWalletActor</span>, and a key component regarding secrets' storage is <span className="font-mono">JsonSecretStorage</span>.</p>
        <p className="text-gray-200 mb-2">The first time a wallet is created, the <span className="font-mono">InitWallet</span> command does the following:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Generate <span className="font-mono">settings.walletSettings.seedStrengthBits</span> random bits, as initial entropy. By default, 160 bits are generated.</li>
          <li>Generate a BIP39 from the random bits generated, which can be seen as encoding the entropy bits. The standard BIP39 logic is used with an optional password.</li>
          <li>Derive a seed from the mnemonic using BIP39's PBKDF2-based derivation logic.</li>
          <li>Encrypt this seed to disk with AES-GCM, using a random nonce, and a key derives from the password using PBKDF2-HMAC-SHA256 with 128000 iterations, using a random salt.</li>
        </ul>
        <p className="text-gray-200 mb-2">To unlock a wallet already created, a user provides the password and the wallet attempts to decrypt the stored data.</p>
        <p className="text-gray-200 mb-2">A similar process as initialisation is performed to restore an existing account from a BIP39 passphrase, except that the wallet will derive the seed from the mnemonic instead of picking a random mnemonic.</p>
        <p className="text-gray-200 mb-2">The two risks we identified here are:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>The absence of checks on the password's length: since the password is sufficient to access the seed given the wallet's on-disk stored secret, the password should, in theory, have at least as much entropy as the mnemonic, and in practice, should be practically hard to crack. We thus recommend enforcing a minimal password length, for example of 16 characters.</li>
          <li>Copies of secret values (password, seed, and derive private keys) are likely to remain in memory after wallet software execution, an intrinsic limitation of garbage-collected languages such as Scala.</li>
        </ul>
        <p className="text-gray-200 mb-2">Another process or user sharing the same memory address space could potentially recover the secrets, and they could also appear in crash dumps. To the best of our knowledge, there is no effective mitigation in pure Scala.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">PoW validation</h3>
        <p className="text-gray-200 mb-2">After previously reviewing the security of the Autolykos PoW, we performed another round of review focusing on its latest verification logic, and notably, the changes in the commit <span className="font-mono">eb0f85a</span>.</p>
        <p className="text-gray-200 mb-2">The main relevant file is <span className="font-mono">AutolykosPowScheme</span>, and other important operations are for example implemented in <span className="font-mono">HeadersProcessor</span> and <span className="font-mono">ModifierValidator</span>.</p>
        <p className="text-gray-200 mb-2">We checked that the implemented verification logic is consistent with that specified in the Autolykos specifications and that it is appropriately integrated into the block header validation logic.</p>
        <p className="text-gray-200 mb-2">We believe the following points should be addressed:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Stricter validation of k and n: although the class enforces k&lt;=32 (number of elements in the solution) and n&lt;31 (log2 of the total number of elements), weak could still be created from the authorised parameters. The validate() function may therefore have additional validation that n and k are equal to the intended values.</li>
          <li>Assert that k and n are positive values, since currently negative ones (as Int's) would pass the <span className="font-mono">assert</span> statements.</li>
        </ul>
      </div>
    </div>
  ),
  howey: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">The Howey Test and Ergo</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
        <p className="text-gray-200 mb-2">Please note, this page is solely an opinion to answer some questions within the community based on the established framework of the Howey Test and does not constitute investment or legal advice.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">What is the Howey Test?</h3>
        <p className="text-gray-200 mb-2">The Howey Test is a legal framework used to determine whether a financial instrument, such as the ERG token, qualifies as an "investment contract" under US securities law. The test, named after the Supreme Court case SEC v. Howey, establishes the criteria for determining whether a transaction constitutes an investment contract.</p>
        <p className="text-gray-200 mb-2">The Howey Test has four criteria that must all be met for an instrument to be considered an investment contract:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Investment of money</li>
          <li>Common enterprise</li>
          <li>Reasonable expectation of profits</li>
          <li>Entrepreneurial or managerial efforts of others</li>
        </ul>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Application to ERG Tokens</h3>
        <p className="text-gray-200 mb-2">ERG tokens are regularly traded on cryptocurrency exchanges and can be mined by purchasing hardware and paying for electricity. This suggests that the first and second criteria of the Howey Test may be met.</p>
        <p className="text-gray-200 mb-2">However, the promotion of ERG tokens within Ergo is focused on improving security and functionality through proof-of-work mining and the advancement of the eUTXO system, rather than as an investment with a reasonable expectation of profits. Furthermore, the original Platform and Foundation developers have not taken steps to increase the market value of ERG tokens or sell them to investors as an investment. Therefore, it is likely that the third criterion of the Howey Test is not met.</p>
        <p className="text-gray-200 mb-2">The fourth criterion, entrepreneurial or managerial efforts of others, requires that the efforts of those outside the investor are essential to the success or failure of the enterprise. While the Ergo Foundation plays a significant role in the development and functionality of the Platform, the ERG tokens ecosystem is becoming more decentralized and independent of the Foundation or any other centralized entity. Ergo is an open-source and permissionless economy, allowing anyone to build applications or launch tokens without the permission or assistance of the Foundation.</p>
        <p className="text-gray-200 mb-2">This decentralization will increase over time as more third-party developers bring value to the Platform. The Foundation is community-led and has made great efforts to inform and encourage discussion with the community. If the foundation were to vanish, the development would not need to stop, and miners could extract and spend all of the Foundation's funds through storage rent. Therefore, it is difficult to argue that the success of the Platform and the value of ERG tokens necessarily rely on the Foundation or its members. Overall, the value of ERG tokens is becoming more market-driven and independent of the Foundation, which suggests that the fourth criterion of the Howey Test is not met.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
        <p className="text-gray-200 mb-2">As a result, ERG tokens should not be considered securities for federal securities law purposes.</p>
      </div>
    </div>
  ),
  privacy: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Privacy and Security in Bitcoin: Dispelling Myths and Enhancing User Protection</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">Bitcoin is often thought of as an anonymous currency used by criminals and hackers. While this myth has been dispelled many times, it still lingers on. The truth is that Bitcoin is a pseudonymous cryptocurrency. While no names or real identities are tied to addresses and transactions, these can all be seen through the public ledger that is the blockchain.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Addressing Misconceptions: Pseudonymity and Transparency</h3>
        <p className="text-gray-200 mb-2">While the alphanumeric wallet addresses do not give away any private information, there are ways in which these can be connected to real-world identities, including wallet transaction broadcasters who can link your address to an IP, and especially fiat on and off-ramps.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Blockchain: A Problem Or The Solution?</h3>
        <p className="text-gray-200 mb-2">When one uses a centralized exchange to buy or sell crypto for fiat, they'll have to go through a KYC (Know Your Customer) process, which will reveal their identity. In some aspects, Bitcoin and other public blockchains are not suitable for money laundering and other malicious activities. Criminals will still need to go through regulated corporations to cash out any ill-gotten funds or spend them on any real-world items.</p>
        <p className="text-gray-200 mb-2">In short, Bitcoin is actually a much better alternative when it comes to anti-money laundry enforcement when compared to private banking or cold hard cash. So much so, former CIA Acting Director Mitchell Morell revealed that cryptocurrencies between made up to less than 1% of all illicit financial activities between 2017 and 2020. In this report, he mentions that illicit activities with fiat money count for an astonishing 2 to 4% of the USA's GDP.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Privacy and User Security</h3>
        <p className="text-gray-200 mb-2">On the other hand, pseudo-anonymity makes users vulnerable to malicious actors. When receiving a payment, users need to share their public wallet address which exposes the wallet, the transaction and the funds to the entire world, which make high-network individuals a target for wary hackers and criminals.</p>
        <p className="text-gray-200 mb-2">A random spy actor can monitor wallets and transactions, and they can devise an attack plan if any security flaws are discovered. This becomes even more dangerous when one considers the potential for data leaks on exchanges or third-party wallets, which may allow nefarious actors to link a wallet to an ID, social security number, and more.</p>
        <p className="text-gray-200 mb-2">The public and pseudonymous nature of blockchain come as a double-edged sword. It makes the users vulnerable to attacks, leaks, and other issues. Traditionally, banks and governments keep their centralized ledgers private, which means one must trust the aforementioned entities to remain honest and ensure the safety and liquidity of funds.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Money For The People</h3>
        <p className="text-gray-200 mb-2">Call for action! As I said earlier, money laundering schemes were around before Bitcoin, and even now, they take up as much as 1% of total usage in crypto. When regulators are keeping a close eye on the public ledger, with the help of KYC exchanges, they can still know what you're up to. In a way, you may think that's okay because governments must prevent black money circulation from stopping illegal activities. We think that's okay too! However, up until now, they were closely following personal bank accounts, and the only thing they prevented was individual users from freely using their funds. Big corporations can continue walking around legislation to evade taxes, and bad actors use global money laundering schemes to continue using black money. What governments do is keep a close eye on citizens by seeing them as potential money launderers. How does this sound?</p>
        <p className="text-gray-200 mb-2">Bitcoin FUD (Fear, Uncertainty, Doubt) arguments made by regulators were mainly counting on the idea of Bitcoin as a private, anonymous, uncontrollable, and unstoppable money. We know that these cases aren't true, we saw that cash was the primary money laundering tool and blockchain wallets are traceable. When you withdraw your money to your bank account, governments know what were you doing with your non-custodial wallet. The only case is then, you're in control of your own funds, and you aren't using "legal" fiat money controlled by central banks. That makes governments powerless on a global state because they can't tell you what you should do with your funds, or they can't ban your account when they spot an unexpected activity.</p>
        <p className="text-gray-200 mb-2">What remains is that they can question you about where did you get the money that you withdrew to your central bank account to pay your bills and do shopping etc. Also, they can't ban your account, for example, when you didn't pay your debts but let me ask again: Did these powers stop illicit financial activities or prevent big players from taking delirious debts and going bankrupt? The answer is no, illicit financial activities continue happening elsewhere, and institutions can rely on the "too big to fail" argument with the hope of bail-outs when they need them.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Enhancing Privacy and Anonymity</h3>
        <p className="text-gray-200 mb-2">For the protection of individuals, we have private chains or 'CoinJoin' (coin mixer) apps that make users' wallets untraceable. As I said, this doesn't mean that a user can launder money because every on-chain financial activity must end with an "integration" phase, which means withdrawing funds to the real, off-chain world. If you can prove that the custody of your funds wasn't involved in any illicit financial activity, you shouldn't be prevented from using privacy-enhancing tools to protect yourself in the on-chain world. You hold your keys, you hold your coins or in a reverse phrase- Not your keys, not your coins. That also includes custodial exchange wallets because, in centralized exchanges, this is not any different from using a bank. You aren't in crypto if you use only centralized exchanges; they can track you, prevent you or on the worst scale, they can steal your coins(exit scams).</p>
        <p className="text-gray-200 mb-2">That's why decentralized finance protocols are entering their golden era now. You don't have to give up the custody of your funds to use financial applications. Decentralized exchanges are becoming more efficient, and cross-chain operations are becoming stronger by supporting all cryptosphere with a single non-custodial wallet. Coin mixing services don't rely on custodial firms; they are working on zero-knowledge proofs. Decentralized applications are shining in a traditionally controlled government-backed finance world. A new history is upon us, and we just see the tip of the iceberg. Future is very exciting in this sense: Banking the bankless with decentralized applications, giving power to the people, draining seigniorage rights of governments and preventing bail-outs of "too-big-to-fail" institutions by infinite money printing -or how is it called in the fancy financial literature- by quantitative easing.</p>
        <p className="text-gray-200 mb-2">Ergo Blockchain provides a non-custodial coinjoin service, the ErgoMixer, as a dApp. It basically protects you from spy agents in the blockchain sphere. It is perfectly secure with its open-source code so that you know what you are interacting with. For more, Ergo Blockchain is a powerful network, and it supports Layer 2 services on top of it so anyone can create private side-chains to use blockchain securely. We will provide more updates on the exact details of ErgoMixer later on, and new developments on Layer 2 services and privacy focused dApps will soon flourish with new developers coming on board.</p>
        <p className="text-gray-200 mb-2">Ergo Blockchain isn't built for governments or institutions; it's built for people by the people.</p>
      </div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">The Ergonaut's Guide to Privacy</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Introduction: Why Privacy Matters</h3>
        <p className="text-gray-200 mb-2">As the world of Web3 and Decentralized Finance continues to grow, this technology is changing the way individuals access financial tools around the globe. We have had our first glimpse into what kind of world this powerful new paradigm of decentralization can produce, and there is no telling where the next decade will take us. Projects like Ergo are working non-stop to deliver on the promises of the cypherpunk dream: fair, accessible, and individually sovereign financial tools. While progress has continued to inspire hope, this age of decentralization also comes with significant changes to the way we must take responsibility for our own well-being, forcing us to stop relying on others to manage our funds, files, and passwords. At the forefront of these responsibilities are Privacy and Security.</p>
        <p className="text-gray-200 mb-2">While privacy in the crypto space can be conflated with criminal activity, this is simply not the case. Average individuals need privacy; it is a fundamental right. Privacy ensures that individuals have control over their personal information. It is necessary for maintaining safety; it helps protect individuals from identity theft, cyberstalking, harassment, and physical threats. In an era where online transactions are becoming the norm, privacy is necessary to prevent individuals' financial data and personal information from being misused. To disregard one's own privacy is to disregard one's own safety. Furthermore, privacy is also critical for maintaining social and political freedom. Without the ability to limit the personally sensitive information available online, we are at the mercy of all who have access to it. For the same reasons that you may not want to publish your Google search history, it is also wise to keep personal transactions, communications, and activity to yourself. In a society where personal beliefs and opinions are increasingly scrutinized, privacy ensures that individuals can live without fear of retribution or manipulation.</p>
        <p className="text-gray-200 mb-2">However, privacy cannot be achieved without security. Security is the means to protect individuals' personal data from malicious attacks and breaches. While it may be beyond the average user's ability to run a phishing scam or hack into someone's device, it is well within our ability to take the simple steps necessary to ensure that we are securing our most vital and valuable information. Together, in the world of decentralized finance, privacy and security are two of the most critical guiding principles to maintain the individual sovereignty and freedom intended by the creators of cryptocurrency.</p>
        <p className="text-gray-200 mb-2">The following course is designed to provide you with the necessary tools and knowledge to protect your digital identity and financial assets. We will cover essential topics such as creating secure passwords, enabling two-factor authentication, setting up a VPN, and protecting your machine from malware and viruses. We will also explore how to maintain private online communications and use Tor to enhance your web browsing privacy. Finally, we will dive into privacy on the blockchain and provide practical guidance on setting up a cold wallet, installing the mixer, creating a private wallet, and sending and receiving funds privately.</p>
        <p className="text-gray-400 text-sm">All information in this course is publicly available. Its creator is in no way responsible for the privacy, security, or actions of any user(s) who make use of this information. Please be kind and behave responsibly.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">General Privacy Preserving Practices</h3>
        <p className="text-gray-200 mb-2">The following strategies will be helpful for maintaining privacy and security for all internet users, not only those accessing DeFi or making crypto transactions.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating Secure Passwords</h3>
        <p className="text-gray-200 mb-2">The most basic way to ensure privacy and security is to use strong passwords. Weak passwords are those that are easy for computers to solve by 'brute force' or easy for an adversary to guess because they contain obvious, publicly available information. Weak passwords are also those which have been reused across sites or simply 'updated' by adding an extra digit onto the old versions. Do not do this, especially for sites that contain personally identifiable information. Strong passwords contain a combination of uppercase and lowercase letters, numbers, and symbols, and are at least 14 characters long. A password that contains this level of complexity would require &gt;200 Million years to be cracked, while an 8 character password with the same requirements would be solved in a single day.</p>
        <p className="text-gray-200 mb-2">If you are hesitant to create such complex passwords, passphrases can be helpful. A passphrase is an easier-to-remember string of words with selected characters replaced with numbers and symbols. For example, I could use the phrase "super private wallet" to create the passphrase, S00p3rPr1v@teW@11et. It is also quite helpful to use a password manager to keep track of your many, unrepeated, highly complex passwords across many different sites. Just be sure your master password is formidable. See you in a quadrillion years, hackers!</p>
        <p className="text-gray-200 mb-2">If your passwords do not make it into the green on this chart, change them now.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Enabling Two-Factor Authentication</h3>
        <p className="text-gray-200 mb-2">Two-factor authentication (2FA) is an additional layer of security that protects your online accounts from unauthorized access. 2FA requires users to provide two forms of identification, typically a password and a one-time code generated through an authentication app, to log in to their accounts. This adds an extra layer of protection as even if someone has your password, they won't be able to access your account without the second factor. This helps protect against hacking, identity theft, and other types of online fraud.</p>
        <p className="text-gray-200 mb-2">2FA is available for most traditional financial applications, such as a bank website, and on major crypto exchanges, such as Coinbase. To enable 2FA, you'll need to log in to the account that you want to secure and navigate to the security settings. From there, select the 2FA option, and choose the method you prefer, such as a phone application, text message, email, or physical 2FA key (e.g. Yubico). Follow the steps to set it up and make sure to keep a backup of your backup codes in case you lose access to your primary 2FA method. Overall, enabling 2FA is a simple but effective way to enhance the security of your online accounts and protect your personal information from unauthorized access.</p>
        <p className="text-gray-200 mb-2">While 2FA is not available for use in Ergo wallets, per se, it will protect your other accounts and your machine. If you are looking for something similar to 2FA to protect your crypto, see the section below on cold wallets, and be on the lookout for multi-signature features that could simulate a 2FA between wallets on your browser and your phone.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Protecting Your Machine</h3>
        <p className="text-gray-200 mb-2">​​As simple as it sounds, installing security updates is crucial for maintaining the security of your computer. Software vulnerabilities can be exploited by hackers and malware to gain access to your machine, steal your personal information (like your super complex passwords), or cause damage to your system. Security updates often contain patches for these vulnerabilities and other security issues, which help protect your computer from potential attacks. By keeping your computer up to date with the latest security updates, you can reduce the risk of security breaches and ensure that your personal information remains safe. It's important to set your computer to automatically download and install updates, or check for updates regularly to ensure that you're always running the most secure version of the software.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Maintaining Private Online Communications</h3>
        <p className="text-gray-200 mb-2">Most people today use the internet to send messages or participate in social media. However, many fail to recognize that these services can compromise privacy and security. Messages and conversations exchanged through social media platforms and messaging apps can be easily intercepted by third parties. This puts users at risk of being identified personally and targeted for digital or even physical attacks. Furthermore, social media platforms collect and use personal data for advertising and other purposes, often without the user's explicit consent. Beyond targeting you with ads based on your browsing history, this leaves you at the mercy of whomever is collecting this data to handle it responsibly. Finally, using social media and messaging apps may expose users to malicious links, spam, or phishing attacks. This can lead to a number of attacks that end with your identity being stolen, your accounts being hacked, or your machine being compromised entirely.</p>
        <p className="text-gray-200 mb-2">It is critical for users to be aware of all the ways they can inadvertently expose themselves to such risks when communicating online, and it is important to follow a few key rules. First, only share sensitive information through encrypted messages or secure channels, especially when discussing financial information or personal data. Second, avoid clicking on suspicious links or downloading attachments from unknown senders, as they may contain malware or viruses. Thirdly, limit the personal information you share online, including on social media profiles or in public chat groups. If adversaries can identify you and link your communications to other accounts or sources of information, they can track and attack you. Finally, avoid associating private or pseudonymous accounts with your public accounts. This includes sending yourself messages, liking posts, or, in highly sensitive cases, accessing these accounts from the same IP address. By following these rules, you can remain online without compromising your identity.</p>
        <p className="text-gray-200 mb-2">The previous steps are relatively simple. They only require basic knowledge to implement and 100% of users should be able use this knowledge without issue. However, some users may find the next two steps to be 'overkill'. That is for each user to decide. The larger you have at stake, the more seriously you should consider taking one of the following steps: VPN & Tor.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Setting Up a VPN</h3>
        <p className="text-gray-200 mb-2">A VPN, or virtual private network, is a tool that creates a secure and encrypted connection between your device and the broader internet. It works by encrypting and routing your internet traffic through a remote server, which then accesses the internet on your behalf. This makes it appear as if your device is connected to the internet from a different location. This means that anyone watching your local network will be unaware of this connection or your activity, and anyone observing you online will be unable to locate you in the physical world. While it is most obvious to use a VPN while accessing public wi-fi that could be compromised or altogether fraudulent, users should consider using them from home as well, especially if you are conducting financial activity online.</p>
        <p className="text-gray-200 mb-2">To set up and use a VPN, begin with the following:</p>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Select a reputable provider. ExpressVPN.com is a popular option. Whether choosing this option or others, users should seriously consider a paid service, rather than something that is free. While the free option is (probably) better than nothing, free means that you are the product and someone is likely making money off of your data somehow.</li>
          <li>Download the client or browser extension.</li>
          <li>Log in.</li>
          <li>Select the remote server you wish to connect to. You may or may not have a preference based on your location, the activity you wish to engage in, and the location of the server.</li>
          <li>Connect to the server, and you are good to go. You may want to enable a 'kill switch' that shuts off your internet if the VPN server goes down, to limit the risk of exposing your IP address.</li>
        </ul>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Tor Browser</h3>
        <p className="text-gray-200 mb-2">Tor (The Onion Router) is a free and open-source software that provides anonymous communication and web browsing on the internet. It works by routing internet traffic through a network of servers and relays, making it difficult to track the user's online activity and location. The traffic is encrypted and sent through a series of nodes in the Tor network, which are operated by volunteers worldwide. Each node only knows the previous and next node in the circuit, ensuring that no single node can see the entire path of the data. Thus, Tor can be used to access the internet anonymously and to bypass internet censorship and surveillance. It is important to note, however, that Tor is not foolproof and there are still ways that users can compromise their anonymity while using the network.</p>
        <p className="text-gray-200 mb-2">To use Tor, you'll need to download and install the Tor Browser. Here are the steps to do so:</p>
        <ul className="list-decimal pl-6 text-gray-200 mb-2 space-y-1">
          <li>Go to the Tor Project website at <a href="https://www.torproject.org/download/" className="text-cyan-300 underline hover:text-cyan-200" target="_blank" rel="noopener noreferrer">https://www.torproject.org/download/</a> and download the appropriate version of the Tor Browser for your operating system.</li>
          <li>Once the download is complete, open the installation file and follow the instructions to install the Tor Browser.</li>
          <li>After the installation is complete, open the Tor Browser.</li>
          <li>The Tor Browser should automatically connect to the Tor network and open a new window with the Tor Browser home page.</li>
        </ul>
        <p className="text-gray-200 mb-2">From there, you can use the Tor Browser like any other web browser to access websites anonymously. There are many features that you will be familiar with in the Tor browser, such as search functionality or browser extensions, and some that you may not have used before, such as the various security settings that limit what can be displayed in your browser. Explore <a href="https://www.torproject.org" className="text-cyan-300 underline hover:text-cyan-200" target="_blank" rel="noopener noreferrer">https://www.torproject.org</a> to learn more about these advanced features, or learn more about them on youtube.</p>
        <p className="text-gray-200 mb-2">The advantage of Tor over a VPN is that Tor is more decentralised and does not require you to trust a third party. Using a VPN allows you to choose which centralised entity to handle your traffic, but in theory, they could also abuse your data. The advantage of a VPN over Tor is that it will route your entire internet connection through the remote server, while Tor simply secures the information sent and received through its browser. Depending on what VPN you use and how much you pay, you may also have more bandwidth than what Tor can provide. Advanced users may choose to connect to a VPN first, and then use the Tor Browser to try and get the best of both worlds.</p>
        <p className="text-gray-200 mb-2">Finally, it is important for users to realize that even when using a VPN and/or the Tor Browser, you can still download and run malicious programs that will compromise your machine and any sensitive information contained on it. You should be cautious about what you access online and only download things from trusted parties. Downloading things from random places across the internet is a surefire way to get hacked.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Privacy on the Blockchain</h3>
        <p className="text-gray-200 mb-2">The following topics are related to privacy and security in crypto, specifically.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Protecting Your Seed Phrases</h3>
        <p className="text-gray-200 mb-2">In crypto, your seed phrase is everything. This is the 15 to 24 words that can be used to restore your wallet on any device, without any more information. Most wallets will only show you this information at the time of creation, so you must take care to record it correctly and store it safely. This is the most sensitive information you possess; if your seed phrase is compromised, your funds are as good as stolen. If you lose your seed phrase, or copy it incorrectly, the funds in that wallet will not be accessible to you or anyone else. It is absolutely imperative that you double check and securely store your seed phrases. Failure to do so will result in a loss of funds, with no way to get them back.</p>
        <p className="text-gray-200 mb-2">So, what is the best way to store your seed phrase? The gold standard is to stamp or engrave your seed phrase into steel plates and store them securely in a private location. It is not advised to trust anyone else (including a safety deposit box) with seed phrase storage. However, you may wish to store only portions of your phrase with trusted parties, which you could access in an emergency. For example, you may store a third of your phrase with your parents and siblings, who would be trusted to give it back when you needed it. Kits for this purpose can be found on Amazon or through a number of private sellers. See examples here.</p>
        <p className="text-gray-200 mb-2">If you are unable to obtain or store steel plates, or if you do not wish to immortalize every single wallet you use, there are less permanent options. Simply writing seed phrases on paper can be effective, so long as this paper is safely stored (in a book or picture frame, for example). In choosing this method, however, you are acknowledging that it will not survive a fire or flood. This method should not be used for wallets containing significant funds.</p>
        <p className="text-gray-200 mb-2">It is important to note that storing seed phrases online is not advised. Exposing your phrase online to any extent is dangerous, no matter how secure your password is. Do not record your seed phrases in a google doc or anything similar. If you must record your seed phrase online, only do so in a non-obvious and encrypted way. An example of this is using steganography, which embeds a coded message into a digital image. That being said, please do not store your seed phrase directly online, including taking pictures of it or trying to scramble it yourself. Remember the calculations for brute forcing a password??? Don't do it.</p>
        <p className="text-gray-200 mb-2">For the highest level of security with your seed phrases, please also see the section below about private cold wallets and hardware wallets.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Setting Up the Mixer</h3>
        <p className="text-gray-200 mb-2">Given that most users are required to complete KYC in order to purchase crypto, the only way to achieve anonymity is through privacy coins or a mixer. Since we are all Ergonauts here, I will describe how to set up and use the mixer to create an anonymous wallet (See CW's fantastic overview here).</p>
        <p className="text-gray-200 mb-2">About the ErgoMixer: This is a local application that runs on the user's machine alone. This means that no third parties have to be trusted to operate the mixer. It is capable of mixing all native Ergo assets, however, it is limited to those with liquidity in the mixer. It works by combining funds from every mixer user and then redistributing the funds in appropriate amounts. This essentially means that, with enough users in the pool, funds sent through the mixer cannot be traced.</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">Installing the mixer:</h4>
        <ul className="list-decimal pl-6 text-gray-200 mb-2 space-y-1">
          <li>Ensure you have JDK8+ installed on your machine.</li>
          <li>Go to <a href="https://github.com/ergoMixer/ergoMixBack" className="text-cyan-300 underline hover:text-cyan-200" target="_blank" rel="noopener noreferrer">https://github.com/ergoMixer/ergoMixBack</a></li>
          <li>On the right hand side of the screen, click on the latest release of the mixer. As of January 2023, that would be version 4.3.0.</li>
          <li>Download the file (.jar for unix, .dmg for mac, .exe for windows)</li>
          <li>Install the mixer on your machine</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Sending funds:</h4>
        <ul className="list-decimal pl-6 text-gray-200 mb-2 space-y-1">
          <li>Click Active Mixes</li>
          <li>Start New Mix</li>
          <li>Select the token you wish to mix and click next</li>
          <li>Decide how to distribute the tokens (smaller or larger boxes) and click next.</li>
          <li>Note the ring activity. More activity means faster and more private mixing.</li>
          <li>Set withdrawal address (where you want the funds to go) and click next</li>
          <li>Set the mixing level and note the mixing fee</li>
          <li>Click 'start mixing', then deposit the total amount (mixing amount + fee) to the address indicated.</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Covert address:</h4>
        <p className="text-gray-200 mb-2">A covert address allows you to share an address publicly without exposing your personal wallet. Imagine owning a shop- this will allow customers to send you funds without letting them see your actual address.</p>
        <ul className="list-decimal pl-6 text-gray-200 mb-2 space-y-1">
          <li>Click covert address</li>
          <li>Click new covert address</li>
          <li>Name the address</li>
          <li>Select the mixing level</li>
          <li>Add withdrawal addresses (the more the better)</li>
          <li>Click create covert address</li>
        </ul>
        <p className="text-gray-200 mb-2">Recently, the SAFEW wallet integrated mixer functionality directly into the wallet. This allows users to send funds through the mixer right from their wallet. Granted, this will not be as private as using the mixer directly, but it is quite simple and accessible.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Creating Private Wallets</h3>
        <p className="text-gray-200 mb-2">Now that you know how to use the mixer, you can use it to create an anonymous wallet. This anonymous wallet may be useful for maintaining privacy while interacting with DeFi applications or with others online. It may be helpful in maintaining a pseudonym on social media with a known address, without that address being linked to your true identity. To create a private wallet follow these steps: First, create a brand new wallet. Second, send funds from a non-private wallet through the mixer to this new wallet. It is best to send a few mixed transactions, rather than just a single one, and spread them out over time.</p>
        <p className="text-gray-200 mb-2">This new wallet will have funds and no association to your identity or public addresses. Activity in this wallet will be separated from those addresses until you break that anonymity by either revealing personal information (sending money to someone who knows you personally from that wallet) or by sending funds from that wallet to one of your own public addresses. If you wish to maintain the anonymity of this wallet, do not use it in association with your identity or any of your publicly known addresses, and use a VPN when accessing it.</p>
        <p className="text-gray-200 mb-2">The wallet described above is what is known as a 'Hot Wallet', meaning that it is connected to a computer and is available for use online. A 'Cold Wallet', on the other hand, is a wallet that is not, and has never been, connected to the internet. Hardware Wallets</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Sending and Receiving Funds Privately</h3>
        <p className="text-gray-200 mb-2">Caution: Nothing is 100% Private</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">Avoiding Privacy Leaks</h4>
        <p className="text-gray-200 mb-2">The following infographic is meant to serve as a brief guide for maintaining privacy.</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">To-Do List</h4>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Use a strong password</li>
          <li>Use 2FA</li>
          <li>Update your machine</li>
          <li>Maintain anonymous / pseudonymous accounts</li>
          <li>Use encrypted messaging</li>
          <li>Use a VPN</li>
          <li>Use the Tor Browser</li>
          <li>Secure your seed phrase</li>
          <li>Use the mixer to send funds</li>
          <li>Use a cold wallet</li>
          <li>Use a hardware wallet</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Not-To-Do List</h4>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li>Reuse passwords across sites</li>
          <li>Send information between private & public accounts</li>
          <li>Send funds between private & public wallets</li>
          <li>Share personally identifiable information</li>
          <li>Use or download untrusted applications</li>
          <li>Public Wi-Fi use without a VPN</li>
          <li>Ad Personalization</li>
        </ul>
      </div>
    </div>
  ),
  misconceptions: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Common Misconceptions (FUD FAQ)</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">This page aims to provide some clarity around some common misconceptions that have cropped up about Ergo.</p>
      </div>
      {/* Emission Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Emission</h3>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li><b>Ergo developers can manipulate the emission:</b> The emission process of Ergo is controlled by a transparent smart contract, which is accessible for public viewing in Ergo's source code. This contract restricts developers from arbitrarily extracting coins. Any modifications to the emission process, such as the EIP-27 soft-fork, necessitate a consensus from the miners and are publicly visible on the blockchain. This capability, outlined in one of Ergo's foundational papers 'Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks', empowers miners to adjust the exact rate of emission reduction, facilitating a smooth transition to a self-sustaining network.</li>
          <li><b>All Erg was pre-mined:</b> A common misconception is that Ergo coins were pre-mined and stored in a smart contract, potentially giving developers undue influence over the coin supply. However, Ergo's emission process is unique and transparent. Coins were produced at the blockchain's genesis and are systematically awarded to miners for their role in securing the network and processing transactions. This approach offers advantages, such as mitigating potential inflation bugs that have troubled other blockchains when coins are generated with each block. The emission process is governed by a smart contract, which is publicly viewable in Ergo's source code. This contract does not permit developers to arbitrarily extract coins. Any changes to the emission process, such as the EIP-27 hardfork, require consensus from the miners and are visible on the blockchain.</li>
          <li><b>There are no Out-of-Thin-Air Emission in the "Coinbase" Transaction in Ergo:</b> Ergo prohibits out-of-thin-air emission in the "coinbase" transaction, the first transaction in each block that rewards the miner. This ensures that every Ergo coin or token originates from a legitimate source and is traceable in the transaction history, maintaining the integrity and scarcity of Ergo's native cryptocurrency.</li>
          <li><b>EFYT was an ICO:</b> The Ergo-First-Year-Token (EFYT) was not a traditional ICO. Instead, it was an airdrop distributed on the Waves DEX to foster an early community for Ergo and gather resources for the platform's pre-launch development. EFYT tokens, swapped from the treasury, constitute less than 1% of the total supply, marking a departure from the fundraising practices associated with many ICOs.</li>
          <li><b>Ergo won't be able to support miners after emissions ends:</b> After the scheduled emissions conclude in 2045, miners on Ergo will continue to be incentivized through alternative methods. One such approach involves transaction fees and Miner Extracted Value (MEV). Transactions on Ergo generate fees (paid in Ergs), with a portion of these fees awarded to miners. MEV represents the total value miners can extract from a block using tactics like reordering, front-running, and other advanced techniques. Miners can increase their MEV earnings by efficiently executing transactions in high MEV blocks, which encourages them to contribute their hash power to the network. Another form of MEV we have on Ergo is through Storage Rent. This mechanism requires users to pay for the storage their data occupies on the network. Consequently, miners receive a consistent income stream, as they earn Ergs from fees users pay for content storage. In future, Miners could also benefit from custom emission contracts as part of a Fair Initial Mining Offering (FIMO) process. These contracts reward miners with non-native tokens, ensuring new projects have equal opportunities to distribute tokens to the community while incentivizing miners to participate in mining. Miners can also operate off-chain execution bots on the same machine to earn additional ERG rewards. Machina Finance is also developing an extensible off-chain bot framework to make this process simpler, so you'll be able to run one program to provide liquidity to the entire Ergo defi ecosystem.</li>
        </ul>
      </div>
      {/* Mining Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Mining</h3>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li><b>ASICs will take over Ergo:</b> While ASICs and FPGAs can pose centralization risks, there are currently no known serious efforts towards creating ASICs for Ergo. The Ergo algorithm is designed to neutralize any advantage ASICs might typically bring. If ASIC development becomes a threat to Ergo's decentralization, the community has the power to introduce protocol improvements via a hardfork.</li>
          <li><b>FPGAs are already taking over Ergo:</b> While it's true that FPGAs can achieve up to 3Mh/W, double the efficiency of the best Nvidia cards, their current impact on Ergo is minimal. This is due to a chip shortage and lack of public miners making FPGAs currently non-competitive. Even if you could buy an E300 at retail prices today, the Return on Investment (ROI) would take approximately 52 years. Furthermore, SRAM, despite its faster read/write capabilities, is not a feasible long-term option for Ergo mining due to its lower density and the algorithm's increasing memory requirements. Therefore, the claim that FPGAs are already taking over Ergo is a misconception.</li>
          <li><b>Ergo is at risk of a 51% attack:</b> The current network status can be monitored using miningpoolstats. Even if a single entity were to control over 51% of the network's mining power, the real-world risk of an attack is very low. It is highly unlikely that a major player like 2miners would jeopardize their business by executing an attack on the network. Lithos is a project that aims to create a decentralized mining pool infrastructure. This protocol provides a low-risk opportunity for lenders to earn yield on their ERG by providing collateral to mining pools while promoting increasingly decentralized block production. This means that the project plans to enable miners to directly insert necessary transactions into blocks in a fully decentralized and trustless manner, bringing significant benefits to miners outside of just decentralization.</li>
          <li><b>Ergo's current difficulty adjustment algorithm is being manipulated:</b> Post EIP-27 implementation, the more frequent difficulty adjustments have inadvertently made Ergo more appealing for profit hoppers. It's important to note that some degree of this activity is inevitable in any blockchain network. Presently, the algorithm effectively maintains an average block time of 120 seconds, as intended. While there's been a noted fluctuation in the hashrate of a particular solo pool, this variance accounts for only about 10% of the total hashrate. The actual influence this has on the profitability for the wider mining community is being closely examined. We urge the Ergo community—both miners and developers—to actively participate in this conversation. Assess the real-world implications and the validity of these concerns. If necessary, formulate and suggest an EIP for potential modifications. Ultimately, the future trajectory of Ergo's algorithm rests in the hands of its community.</li>
        </ul>
      </div>
      {/* Organisational Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Organisational</h3>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li><b>Ergo's marketing sucks:</b> Ergo's marketing strategy is rooted in community engagement and organic growth, diverging from conventional marketing tactics often employed by other projects. This strategy prioritizes the cultivation of a well-informed and actively involved community. Ergo's unique features and capabilities serve as its primary selling points, and the team is committed to letting these attributes stand out on their own. Regular updates and developments are communicated through various channels, including social media, blog posts, and community meetings. The marketing efforts are primarily aimed at increasing awareness, educating the community, and highlighting the unique features and capabilities of Ergo. The objective is to stimulate organic growth and attract users who value the platform's technological advantages and commitment to privacy, security, and genuine decentralization. The Sigmanauts programme has been successful, with mature pathways that allow for a smooth transition for individuals to make meaningful contributions and help shape and grow Ergo. This resilient marketing approach was designed to kickstart truly organic and decentralized compounding growth. Now, with their own treasury, the Sigmanauts are making proposals and expenditures, running campaigns, creating content, attending events, and planning for the future.</li>
          <li><b>Ergo won't succeed without VC investment:</b> Ergo's success is not dependent on venture capital (VC) investment. While VC funding can provide resources for growth, it can also lead to centralization and conflicts of interest. Ergo is designed to be a decentralized, community-driven project, and its development and growth are fueled by the community and the team's efforts. The project has made significant progress without VC funding, demonstrating that it can thrive and innovate without such investment. Ergo's robust technology, active community, and commitment to decentralization are its main drivers of success.</li>
          <li><b>The Foundation is centralized:</b> The Ergo Foundation provides guidance in the early stages of the network, but its influence is transitional. As the network matures, the Foundation's role diminishes, paving the way for a fully community-driven ecosystem.</li>
          <li><b>Ergo could not operate without its foundation:</b> The Ergo Foundation undoubtedly plays a pivotal role in shaping the trajectory and fostering the development of Ergo. However, as the ERG token ecosystem evolves, it's steadily becoming more decentralized and less dependent on the Foundation or any singular centralized authority. Emblematic of its decentralized ethos, Ergo operates as an open-source, permissionless platform. This ensures that developers, innovators, and enthusiasts can introduce applications or tokens without seeking explicit endorsement or intervention from the Foundation. The development momentum would persist, and mechanisms like storage rent would enable miners to access and utilize the Foundation's funds. Many entities, encompassing mining pools, exchanges, dApps, and even teams like Spectrum Labs and ErgoPad, actively maintain the network nodes and contribute to its vitality. The potential hesitancy of traditional exchanges to list Ergo without an overseeing body might arise. However, the decentralized spirit of the crypto realm ensures that even in the absence of the Ergo Foundation, decentralized exchanges (DEXs) and peer-to-peer platforms would seamlessly facilitate the trading of Ergo. Although the Foundation serves as a vital community conduit, fostering discussions and spearheading initiatives, the continuity of Ergo isn't solely tied to its existence. Should the Foundation ever disband, the community and other contributors are well-equipped to carry the torch forward. The Sigmanauts programme is the beginnings of this, who tries to create a community of users of the Ergo blockchain to explore how it can be of benefit, and they try to represent the interests of users in the larger Ergo ecosystem and indicates that the community can lead and maintain momentum even without the Foundation's direct involvement.</li>
          <li><b>Ergo is a 'Russian coin':</b> Ergo is a global project and is not tied to any specific country or region. While some of the developers and contributors may be based in Russia, Ergo's community and user base are spread across the world. The project's decentralized nature ensures that it is not influenced by the policies or politics of any single country. Ergo's primary goal is to provide a robust, secure, and decentralized platform for all users, regardless of their geographical location.</li>
          <li><b>Ergo is an unregistered security:</b> Ergo's status under the SEC's regulations is a gray area, as is the case with many cryptocurrencies. However, based on the Howey Test, Ergo is not considered a security. Ergo has one of the most extensive public distributions among smart contract platforms, and the initial allocation by the Ergo Foundation was primarily to kickstart the ecosystem.</li>
          <li><b>The Foundation's actions are causing price depreciation:</b> The Ergo Foundation's monthly expenses are a minuscule portion of the total trading volume, equivalent to the mining rewards of 1-2 days. Most of these expenses are paid in ERG, meaning there are minimal direct liquidations. The recipients of these payments have the freedom to manage them as they see fit. It's worth noting that our developers often work for compensation below the market rate.</li>
        </ul>
      </div>
      {/* Ecosystem Section */}
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Ecosystem</h3>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li><b>Ergo's Total Value Locked (TVL) ratio is too low:</b> Ergo, a relatively new network, has dedicated substantial time and resources to establish a robust base infrastructure. This foundational work is now bearing fruit as the Total Value Locked (TVL) is witnessing a swift uptick due to the ease of deploying decentralized applications (dApps) on the network. For the most recent TVL statistics, platforms such as DeFi Llama provide up-to-date information. The recent introduction of the Rosen Bridge is anticipated to significantly enhance liquidity by enabling seamless transfers from Cardano and other blockchain networks. These networks can leverage Ergo's advanced DeFi ecosystem using wrapped tokens, thereby augmenting the utility and value of Ergo.</li>
          <li><b>The ecosystem isn't growing:</b> Ergo's ecosystem is steadily growing. The development team is continuously working on new features and improvements, and the community is actively contributing to the project's growth. The number of decentralized applications (dApps) built on Ergo is increasing, and more developers are choosing Ergo for their projects due to its unique features and capabilities. The growth of the ecosystem can be tracked on various platforms such as DefiLlama and Artemus.</li>
          <li><b>This new stablecoin will kill SigmaUSD:</b> The introduction of a new stablecoin does not necessarily mean the end of SigmaUSD. The cryptocurrency market is vast and diverse, and there is room for multiple stablecoins to coexist. SigmaUSD has unique features that set it apart from other stablecoins, such as its algorithmic design and the security of the Ergo blockchain. Furthermore, competition in the stablecoin market can lead to innovation and improvement, benefiting the users in the end.</li>
        </ul>
      </div>
      {/* Technical Section */}
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Technical</h3>
        <ul className="list-disc pl-6 text-gray-200 mb-2 space-y-1">
          <li><b>eUTXO is too difficult for developers:</b> The extended UTXO (eUTXO) model, adopted by Ergo, might initially seem complex, especially for developers accustomed to the account-based model. However, it offers increased flexibility and security. Over time, as more resources and tutorials become available, the learning curve will flatten, making it more accessible for all developers.</li>
          <li><b>Ergo should've used an easier language than Scala:</b> Ergo utilizes Scala as its primary language due to its cross-platform capabilities, conciseness, efficiency, and multi-paradigm nature. ErgoScript, based on Scala, is used for scripting, but off-chain code can be written in any language. Developers have access to a variety of tools and Software Development Kits (SDKs) for JVM, Rust, and JS/TS. Scala's unique features, such as the ability to run the same code on JVM and JavaScript natively, its concise syntax, and its ability to use primitive unboxed types for efficiency, make it a suitable choice for Ergo.</li>
          <li><b>Ergo's lack of in-built Sharding means it won't scale with atomic composability:</b> This misconception arises from a misunderstanding of how Ergo handles scalability and atomic composability. While it's true that Ergo doesn't use in-built sharding, it employs other strategies to ensure scalability without compromising atomic composability. Ergo optimizes the use of resources within the constraints of existing blockchain platforms, rather than resorting to unproven technologies. It also uses the eUTXO model and ErgoScript to allow for the atomic execution of complex, multi-stage transactions within a single transaction. Layer 2 solutions like Hydra state channels also contribute to atomic composability. Furthermore, concepts like ACE could enhance the execution of complex and composable smart contracts. Therefore, Ergo's approach to scalability and atomic composability is not reliant on in-built sharding.</li>
          <li><b>Proof of Work is not sustainable:</b> The sustainability of Proof of Work (PoW) is frequently debated. Critics argue that it's energy-intensive and thus environmentally unfriendly. While there's truth to the energy consumption, it's essential to put it into perspective. If the energy used in PoW is directly proportional to its value and security, then its consumption can be justified. Moreover, as technology advances, more efficient and environmentally-friendly mining solutions will emerge, further diminishing the environmental concerns.</li>
          <li><b>Proof of Work may face increased regulatory scrutiny:</b> While Proof of Work (PoW) has been subject to criticism in media outlets, it remains a complex issue to address legally. Furthermore, even if legal challenges arise, implementing a ban on PoW is a daunting task, as evidenced by attempts in countries such as China. It is our belief that PoW-based cryptocurrencies that have had a fair launch stand the best chance of weathering potential regulatory challenges.</li>
          <li><b>Ergo is a privacy coin:</b> While Ergo does offer privacy features, it is not solely a privacy coin. Ergo's protocol allows for the creation of private transactions, but it also supports transparent transactions. This flexibility allows users to choose the level of privacy they want for their transactions. It's important to note that privacy features are not unique to Ergo. Other major cryptocurrencies like Bitcoin and Ethereum also have mixing and privacy features at the application layer, yet they are not classified as privacy coins. Ergo's privacy features are optional and are part of a broader set of capabilities aimed at creating a robust, flexible, and secure blockchain platform.</li>
          <li><b>Ergo transactions are too slow:</b> Ergo's 2-minute block interval, while seemingly slow, is a strategic choice to ensure network security and stability, especially for a system that supports complex smart contracts. This interval provides a buffer for various network activities, aids in decision-making processes, and adds a layer of security against potential threats. Additionally, Ergo can employ scaling methods like "weak blocks" to enhance transaction throughput and confirmation speed. In addition to the 2-minute block interval, Ergo can utilise scaling methods such as the recently proposed "weak blocks" to improve both the transaction throughput (TPS) and the speed of transaction confirmations. Weak blocks are block candidates with lower difficulty levels than standard blocks. They are propagated through the network along with new transactions, effectively optimizing network bandwidth usage.</li>
          <li><b>Ergo's development is too slow:</b> While Ergo's development pace might seem slower compared to other blockchain projects, it's important to understand the reasons behind it. Ergo introduces a new paradigm in the blockchain space, specifically the eUTXO model, which offers enhanced security, simplicity, support for off-chain protocols, and improved scalability. Implementing this model requires a deep understanding of its intricacies and potential challenges, which naturally takes time. Additionally, Ergo is committed to a fair start, avoiding practices like pre-mining or ICOs to ensure a more equitable token distribution. This approach might slow down the initial development and growth of the project, but it's a strategic decision to ensure long-term sustainability and fairness.</li>
          <li><b>Ergo is at risk of quantum attacks:</b> While the development of practical quantum computers is still speculative, Ergo is aware of the potential threat they pose. Current post-quantum (PQ) digital signature schemes, such as Lamport signatures, have limitations and are not yet ready for widespread use. Ergo uses efficient sigma-protocols, but post-quantum alternatives are still considered impractical. Therefore, it's premature to implement changes to address quantum computing risks. In case of a crypto-disaster, like the advent of efficient quantum computers or vulnerabilities in elliptic curves, the best response would be to transition to a blockchain with robust post-quantum security measures. Until the threat of quantum computing becomes more imminent, the focus should be on monitoring developments in the field, exploring potential post-quantum solutions, and planning for a smooth transition to a more secure blockchain if necessary.</li>
          <li><b>There is nothing unique in Ergo:</b> Ergo stands out from other blockchain projects due to its unique features and capabilities. One of these is ErgoScript, a powerful and secure scripting language that supports a wide range of features. These include ring signatures, atomic swaps, multiple currencies, and self-replicating scripts, providing developers with the tools they need to create complex and secure applications. Another distinctive feature of Ergo is its use of Sigma Protocols. These non-interactive zero-knowledge proofs can be composed using basic AND/OR logic, offering a robust and flexible framework for creating secure and private transactions. Ergo also supports multi-stage contracts, extending the standard threshold m‐of‐n signature protection. This allows for the specification of complex recipients of these coins, facilitating the creation of intricate, secure, and efficient smart contracts. The use of Non-Interactive Proofs of Proof of Work (NIPoPoWs) is another unique aspect of Ergo. NIPoPoWs enable truly decentralized Ergo DApps and off-chain protocols via light clients, enhancing the overall efficiency and scalability of the network. Ergo also implements a feature known as Storage Rent, which helps manage blockchain bloat and turns it into a profitable venture. This ensures the long-term sustainability of the network by incentivizing efficient use of storage space. Finally, Ergo employs the eUTXO model, which enhances privacy, scalability, and interoperability. By extending Bitcoin's contract-writing method, Ergo attaches a guard script and additional custom data to each coin, positioning Ergo as a uniquely beneficial platform for Contractual Money.</li>
        </ul>
      </div>
    </div>
  ),
  cbdc: (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">Ergo: The Decentralised Bank Digital Currency For Everyone</h2>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">As the blockchain revolution gains steam, one of its most promising opportunities is Central Bank Digital Currencies (CBDCs). While CBDCs offer transformative potential, they grapple with a fundamental paradox: reconciling control with innovation. This equilibrium could greatly impact privacy, functionality, and widespread adoption. But what if there were a solution that harmonizes these seemingly conflicting elements? Enter Ergo—a blockchain platform that aims to be the CBDC everyone can use, privately and programmably.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">The Democratization of Programmable Money</h3>
        <p className="text-gray-200 mb-2">The emergence of Decentralized Finance (DeFi) has opened the gates to programmable money, allowing for sophisticated transactions without the traditional financial sector's limitations. In a similar vein, CBDCs have the potential to offer programmable assets that could easily integrate with a plethora of applications. However, most CBDCs are confined to permissioned ledgers and centralized control, hindering the democratization of programmable money.</p>
        <p className="text-gray-200 mb-2">Ergo offers a different approach, providing open systems that unleash the transformative potential of digital cash. Imagine sending or receiving money privately and securely between any two entities worldwide, all while enjoying the benefits of programmable features. Unlike systems like Ethereum, which struggle with scalability and high fees, Ergo is designed for efficiency and low-cost transactions. This makes it ideal for micro-transactions, complex financial products, and truly democratizes access to financial systems.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Guarding Your Financial Privacy</h3>
        <p className="text-gray-200 mb-2">Privacy is a cornerstone of financial security, and Ergo takes this seriously. Unlike some state-sponsored digital currencies, which are likely to serve as surveillance tools, Ergo offers a secure, private avenue for financial interactions. This ensures that your money remains a medium of exchange and not a subject of scrutiny, granting you the freedom and security that is often missing from traditional financial systems. What's unique is Ergo's optional privacy features—you can choose to make transactions public or private depending on your needs.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Seamless Financial Interactions with Ergo</h3>
        <p className="text-gray-200 mb-2">As a platform designed with the future in mind, Ergo aims to be at the forefront of technological and financial trends. Whether it's tokenization, stablecoins, or digital identity, Ergo is developing the financial infrastructure to accommodate the evolving demands of users. In a landscape where traditional and blockchain economies will likely converge, Ergo serves as the bridge between these two worlds, offering the ease and flexibility that a truly global CBDC should have.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Tokenization: The Future of Asset Management</h3>
        <p className="text-gray-200 mb-2">Ergo understands that in the future, almost everything will be tokenized—from shares and bonds to real estate and precious metals. With Ergo, these tokenized assets become the lifeblood of the decentralized financial world, enabling frictionless trade, borrowing, and leverage, all underpinned by decentralized protocols.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Stablecoins: Bridging the Old and the New</h3>
        <p className="text-gray-200 mb-2">Stablecoins offer an underappreciated utility in the DeFi ecosystem. Ergo envisions a two-tier system where a native stablecoin will serve as the primary currency for mainstream users, simplifying transactions and fee payments, while the native token (ERG) will be leveraged by advanced users for mining and other technical applications.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Digital Identity: Enabling Compliant Transactions</h3>
        <p className="text-gray-200 mb-2">As assets migrate to the blockchain, digital identity will gain prominence, linking online transactions with offline identities. This will facilitate compliant operations and even automate processes like taxation and accounting. Ergo offers decentralized identity solutions that can be used in tandem with smart contracts, removing the reliance on centralized platforms for KYC while still maintaining compliance.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Beyond Simple Transactions: A World of Programmable Contracts</h3>
        <p className="text-gray-200 mb-2">With Ergo, financial interactions go beyond just sending and receiving money. The platform allows for complex contractual agreements, enabled by its state-of-the-art blockchain technology. For instance, one could buy gold-backed tokens or even purchase blockchain-based insurance—all without needing a centralized entity or giving up control or privacy.</p>
      </div>
      <div className="bg-orange-400/10 border border-orange-400/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Smart Insurance and Beyond</h3>
        <p className="text-gray-200 mb-2">In Ergo's ecosystem, insurance contracts can be customized and automatically enforced. For example, if you buy gold-backed tokens, you could simultaneously purchase an insurance contract, mitigating risks and ensuring you get the best value for your assets. These kinds of innovations illustrate Ergo's vision for a new era of decentralized finance, where complexity meets user-friendliness.</p>
      </div>
      <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6 mb-6">
        <p className="text-gray-200 mb-2">In sum, Ergo is not just another blockchain platform—it's the future of money. It brings the promise of CBDCs to everyone, packaged in a form that prioritizes both control and innovation. With Ergo, the landscape of digital currencies is expanded, democratized, and truly global.</p>
        <p className="text-gray-200 mb-2">Ergo aims to be your go-to platform for financial interaction—transparent yet private, decentralized yet flexible, and most importantly, accessible to everyone. It's the CBDC for the people, by the people. Welcome to the future of finance. Welcome to Ergo.</p>
      </div>
    </div>
  ),
};

export default function ResourcesPage() {
  const [active, setActive] = useState("social");
  return (
    <div className="max-w-4xl mx-auto py-10 px-2 sm:px-4">
      {/* Hero Section */}
      <div className="mb-12 flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2 leading-tight pb-1">
            Resources
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">Explore key documents and guides for the Ergo ecosystem. Use the tabs below to navigate between important resources and reference materials.</p>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors border
              ${active === tab.id
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-neutral-900 text-gray-300 border-neutral-700 hover:bg-orange-300 hover:text-white"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div>
        {tabContent[active]}
      </div>
    </div>
  );
} 