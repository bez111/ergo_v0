import React from "react";

export default function KYAPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Know Your Assumptions (KYA) in Ergo</h1>
      <p className="mb-4 text-gray-300">
        The Ergo ecosystem embraces the <b>KYA (Know Your Assumptions)</b> model, promoting transparency and user awareness regarding the assumptions made when interacting with decentralized finance (DeFi) protocols. This approach encourages users to understand risks and security concerns when using wallets like Nautilus and dApps such as Spectrum and Duckpools.
      </p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Research Paper: <i>KYA - A Treatise on Assumptions in Cryptocurrencies and DeFi</i></h2>
      <p className="text-gray-300 mb-4">
        Developer Kushti is working on a research paper titled <a href="https://github.com/kushti/kya" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">KYA - A Treatise on Assumptions in Cryptocurrencies and DeFi</a>. It explores key assumptions underlying blockchain and DeFi protocols, highlighting their impact on security, decentralization, and risk management.
      </p>
      <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-cyan-200 mb-4">
        "In decentralized finance, users can verify protocol assumptions, reversing the invasive privacy checks of traditional finance." - Kushti
      </blockquote>
      <p className="text-gray-300 mb-4">
        The KYA framework encourages users to verify the protocols they interact with, fostering informed and secure participation in DeFi.
      </p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">KYA Prompts in the Ergo Ecosystem</h2>
      <p className="text-gray-300 mb-4">
        Ergo introduces <b>KYA prompts</b> to inform users of key assumptions before interacting with different protocols. These prompts are designed to provide clear, concise information about the risks, requirements, and assumptions associated with each protocol, enabling users to make informed decisions.
      </p>
      <ul className="list-decimal pl-6 text-gray-300 space-y-1 mb-4">
        <li><b>Security Assumptions:</b> Highlighting the underlying security mechanisms, such as cryptographic algorithms, consensus models, and trusted parties.</li>
        <li><b>Economic Assumptions:</b> Providing details on tokenomics, incentives, and economic factors that affect the protocol's stability and sustainability.</li>
        <li><b>User Responsibilities:</b> Outlining what actions users need to take to ensure their safety, such as managing private keys or understanding potential risks in smart contracts.</li>
        <li><b>External Dependencies:</b> Identifying any reliance on third-party services or external data, such as oracles, that could impact the protocol's functionality.</li>
        <li><b>Transparency:</b> Ensuring that users are aware of any opaque components or centralized elements within a supposedly decentralized protocol.</li>
      </ul>
      <p className="text-gray-300 mb-4">
        Projects like <b>SigmaFi</b> have adopted KYA prompts, helping users assess critical assumptions and understand the underlying technology. These prompts serve as a valuable tool in empowering users, promoting transparency, and mitigating risks in the DeFi landscape.
      </p>
      <p className="text-gray-300 mb-4">
        For more, see <a href="https://www.reddit.com/r/ergonauts/comments/159h9rs/building_a_standard_kya_prompt/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Building a standard KYA Prompt</a>.
      </p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Ergo’s Assumptions</h2>
      <p className="text-gray-300 mb-4">Ergo builds on Bitcoin's security with its own unique set of assumptions to ensure a scalable and secure system.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">1. Bootstrapping Techniques</h3>
      <p className="text-gray-300 mb-2">Ergo uses techniques like hash-based authenticated data structures, NiPoPoW proofs, and UTXO set snapshots for security, optimized storage, and scalability.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">2. Signature Scheme</h3>
      <p className="text-gray-300 mb-2">Ergo employs <b>Schnorr signatures</b> based on the secp256k1 curve and sigma protocols, enhancing cryptographic security through the <b>decisional Diffie-Hellman assumption</b>.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">3. Miner Behavior</h3>
      <p className="text-gray-300 mb-2">Ergo assumes honest miner behavior akin to Bitcoin, using a <b>storage rent</b> mechanism to sustain block rewards and incentivize efficient data retention.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">4. Scalability and Security</h3>
      <p className="text-gray-300 mb-2">Ergo's architecture supports Layer 1 scalability while maintaining security, offering smart contracts and cryptographic protocols that ensure safe DeFi interactions.</p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Bitcoin as Digital Gold</h2>
      <p className="text-gray-300 mb-4">Bitcoin’s security model rests on several key assumptions:</p>
      <ul className="list-decimal pl-6 text-gray-300 space-y-1 mb-4">
        <li><b>Hash Function Security:</b> Bitcoin relies on SHA-256's resistance to collision and preimage attacks.</li>
        <li><b>Digital Signature Scheme:</b> Assumes no quantum computer will break 128-bit elliptic curve security.</li>
        <li><b>Honest Mining Hashrate:</b> Assumes the majority of miners will follow protocol rules, underpinning Bitcoin's consensus.</li>
      </ul>
      <p className="text-gray-300 mb-4">Despite these assumptions, Bitcoin has functioned effectively for over 13 years.</p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">DeFi Applications on Ergo</h2>
      <p className="text-gray-300 mb-4">Ergo's platform underpins various DeFi applications, ensuring security, scalability, and flexibility.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">1. Oracles</h3>
      <p className="text-gray-300 mb-2">Ergo supports secure oracle integration, providing reliable data for dApps in the ecosystem.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">2. ErgoDEX</h3>
      <p className="text-gray-300 mb-2">Formerly Spectrum, <b>ErgoDEX</b> facilitates trustless peer-to-peer trading on Ergo, leveraging the platform’s security features.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">3. Stablecoins: Djed and SigUSD</h3>
      <p className="text-gray-300 mb-2"><b>Djed</b> and <b>SigUSD</b> are decentralized stablecoins built on Ergo, enhancing the DeFi ecosystem with transparent value stability.</p>
      <h3 className="font-bold text-cyan-200 mt-4 mb-2">4. Dexy</h3>
      <p className="text-gray-300 mb-2"><b>Dexy</b> is a user-friendly decentralized exchange, utilizing Ergo's security and scalability to provide an accessible trading experience.</p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">References</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-8">
        <li><a href="https://www.ergoforum.org/t/know-your-assumptions/4198" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Original KYA Post</a></li>
        <li><a href="https://ergoplatform.org/en/blog/The-Importance-of-Know-Your-Assumptions/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">The Importance of KYA</a></li>
        <li><a href="https://docs.ergoplatform.com/contribute/standards/kya/#research-paper" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">KYA Research Paper</a></li>
        <li><a href="https://github.com/kushti/kya/blob/master/kya.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Kushti’s KYA Paper</a></li>
        <li><a href="https://sigmafi.app/#/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">SigmaFi dApp</a></li>
      </ul>
    </>
  );
} 