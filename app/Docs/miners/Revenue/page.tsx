import React from "react"

export default function RevenuePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6">Sustaining Ergo Mining: Revenue Streams Beyond Emissions</h1>
      <p className="text-lg text-gray-300 mb-8">
        As Ergo's emission schedule is set to conclude around the year 2045, ensuring the continued incentivization of miners to secure the network is of paramount importance. Ergo's architecture is designed to support a diverse range of revenue streams, promoting both network growth and long-term sustainability.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Transaction Fees</h2>
      <p className="text-gray-300 mb-8">
        Transaction fees represent a crucial revenue source for miners. While currently modest in size, the potential for front-running transactions offers additional financial incentives. This cost can be adjusted by miners through on-chain voting, allowing for dynamic adjustments to align with network demands and market conditions.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Storage Rent / 'Demurrage'</h2>
      <p className="text-gray-300 mb-8">
        The Storage Rent mechanism, also known as 'demurrage,' is already active and providing a small but steady income stream for miners. This innovative approach incentivizes the efficient use of blockchain storage by imposing a fee on unspent transaction outputs (UTXOs) that remain idle for an extended period. By validating transactions and managing the storage of UTXOs, miners play a vital role in maintaining the network's efficiency and earn rewards in the process. For more details, refer to the <a href="rent.md" className="text-orange-400 hover:text-orange-300">Storage Rent</a> page.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Layer 2 Infrastructure</h2>
      <p className="text-gray-300 mb-6">
        Layer 2 (L2) solutions, such as state channels and sidechains, enhance scalability and improve transaction throughput on the Ergo blockchain. These solutions enable faster and more cost-effective transactions through off-chain processing. Miners can maintain and operate L2 infrastructure, ensuring the smooth functioning of these off-chain solutions and earning fees for their services. By supporting L2 infrastructure, miners contribute to the scalability and efficiency of the Ergo network, attracting more users and generating additional revenue opportunities.
      </p>
      <p className="text-gray-300 mb-6">
        Sigma Chains, with their support for various sidechain constructions, can serve as a robust foundation for Layer 2 solutions. Miners can leverage their expertise in securing Sigma Chains to provide and maintain L2 infrastructure, further diversifying their revenue streams.
      </p>

      <h3 className="text-xl font-semibold text-white mb-3">Sidechain Rewards</h3>
      <p className="text-gray-300 mb-6">
        Ergo's sidechain architecture provides a robust platform for developers to deploy their decentralized applications (dApps) and blockchain solutions. Miners can secure these sidechains and earn rewards for their contributions. By validating transactions and maintaining the security of sidechain operations, miners play a crucial role in the Ergo ecosystem and generate additional income.
      </p>
      <p className="text-gray-300 mb-6">
        A recent post on the forum, <a href="https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/5" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">'A Scalability Plan for Ergo'</a>, highlights the potential of sidechain rewards:
      </p>
      <blockquote className="border-l-2 border-neutral-700 pl-4 text-gray-300 italic mb-6">
        For incentivizing weak blocks reporting, they can commit to sidechains, thus making fast sidechains possible and miners will get rewards from that.
      </blockquote>
      <p className="text-gray-300 mb-8">
        With the introduction of Sigma Chains, miners will have even more opportunities to secure and earn rewards from various sidechains. Sigma Chains offer different sidechain constructions, including <a href="sigma-chains.md#sidechain-constructions" className="text-orange-400 hover:text-orange-300">merged-mined sidechains</a>, <a href="sigma-chains.md#sidechain-constructions" className="text-orange-400 hover:text-orange-300">double merged-mined sidechains</a>, and <a href="sigma-chains.md#sidechain-constructions" className="text-orange-400 hover:text-orange-300">sidechains with dedicated mining algorithms</a>. By participating in the mining and security of these sidechains, miners can diversify their revenue streams and benefit from the growth of the Sigma Chain ecosystem.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">Adjusting the Re-emission Schedule</h2>
      <p className="text-gray-300 mb-6">
        As outlined in the paper <a href="https://eprint.iacr.org/2021/577.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">"Soft Power: Upgrading Chain Macroeconomic Policy Through Soft Forks"</a>, Ergo's emission schedule can be adjusted through on-chain voting and soft forks. This flexibility allows the Ergo community to re-evaluate and potentially extend the emission schedule if deemed necessary to ensure a smooth transition from mining rewards to the alternative revenue streams mentioned above. By opting to re-adjust the re-emission schedule, the community can maintain an optimal balance between mining incentives and the adoption of these new revenue mechanisms, ensuring the long-term sustainability of the Ergo network.
      </p>
      <p className="text-gray-300 mb-8">
        As Ergo continues to evolve and attract a broader user base, the potential for diverse and innovative revenue streams for miners will continue to expand. By actively engaging in these revenue-generating activities, miners not only secure the network but also contribute to the overall growth and success of Ergo and the Sigma Chain ecosystem. For more information on the Ergo Foundation's vision and plans for the future, please refer to the <a href="ef-future.md" className="text-orange-400 hover:text-orange-300">ef-future.md</a> page.
      </p>

      <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4">
        <p className="text-gray-300">
          <strong>Note:</strong> Stay tuned for updates and announcements from the Ergo community regarding new and emerging revenue streams. These opportunities will be shared to enable miners to make informed decisions and maximize their earning potential.
        </p>
      </div>
    </>
  )
} 