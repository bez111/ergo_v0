import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VelvetForksPage() {
  return (
    <>
      <Link href="/Docs/miners/governance/forking/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary-400 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      <h1 className="text-3xl font-bold text-white mb-6">Velvet Forks</h1>
      <p className="text-gray-300 mb-4">
        Velvet forking is a novel approach introduced in the paper
        {" "}
        <a
          href="http://diyhpl.us/~bryan/papers2/bitcoin/A%20wild%20velvet%20fork%20appears:%20Inclusive%20blockchain%20protocol%20changes%20in%20practice%20-%202018.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-primary-400 hover:text-brand-primary-300"
        >
          "A Wild Velvet Fork Appears! Inclusive Blockchain Protocol Changes in Practice"
        </a>
        {" "}
        by Zamyatin et al. It allows for introducing protocol changes in a backward-compatible and inclusive manner. The key idea is to
        render modifications to the protocol backward-compatible, enabling a gradual deployment without harming miners who have not
        upgraded to the new rules.
      </p>
      <p className="text-gray-300 mb-4">
        Velvet forks are a special form of protocol update where the new set of reducing protocol rules P' is conditionally applied only
        when the considered elements, such as blocks or transactions, are valid under the new rules. If not, the new rules are ignored,
        and the previous protocol rules P are relied upon to determine validity. Since the new rules in P' are reducing, velvet protocol
        changes never incur a permanent protocol fork, as any element considered valid under P' is also considered valid under P.
      </p>
      <p className="text-white font-semibold mb-2">The key advantages of velvet forks are:</p>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-6">
        <li>
          <span className="font-semibold text-white">Inclusive Deployment</span>: They do not require support from a majority of participants and can potentially avoid rule
          disagreement forks altogether. Legacy nodes remain unaware of the changes introduced by the velvet fork.
        </li>
        <li>
          <span className="font-semibold text-white">Backward Compatibility</span>: Valid blocks adhering to the new rules are also valid blocks under the old rules, ensuring
          compatibility with non-upgraded nodes.
        </li>
        <li>
          <span className="font-semibold text-white">Gradual Adoption</span>: Velvet forks leverage the consensus mechanism of the existing protocol P to bootstrap their own
          consensus rules P', allowing for a gradual adoption of the new rules.
        </li>
      </ol>
      <p className="text-gray-300 mb-4">
        While velvet forks present a promising approach for introducing protocol changes, they may also introduce new potential attacks
        and threats, as well as impact the game-theoretic incentives of the underlying blockchain. Further research is needed to
        understand the security implications of velvet forks and their potential applications in various blockchain protocols.
      </p>
      <p className="text-gray-300">
        Ergo's design allows for the implementation of velvet forks, enabling the introduction of new features and protocol changes in a
        backward-compatible and inclusive manner. This capability is particularly useful for incorporating auxiliary protocols and data
        from miners, as well as enabling the gradual deployment of scaling solutions and other improvements without disrupting the network
        or requiring a hard fork.
      </p>
    </>
  )
} 