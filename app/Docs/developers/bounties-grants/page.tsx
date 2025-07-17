import { Gift, Mail, BookOpen, Code2 } from "lucide-react";
import Link from "next/link";

export default function BountiesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-neutral-900 border border-cyan-400/20 rounded-xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-4">
          <Gift className="w-8 h-8 text-cyan-400" />
          Bounties
        </h1>
        <p className="text-gray-300 text-lg">
          Welcome to the Ergo Bounties page! This is your gateway to contributing to the Ergo community and being rewarded for your valuable efforts. We offer a variety of bounties across different programs, including educational and development initiatives, all aimed at fostering growth and innovation within the Ergo ecosystem.
        </p>
      </div>

      {/* How to Claim a Bounty */}
      <div className="bg-neutral-900 border border-orange-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3 text-orange-400">
          <Mail className="w-6 h-6" />
          How to Claim a Bounty
        </h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-2">
          <li>Draft an email to <a href="mailto:team@ergoplatform.org" className="text-cyan-400 hover:underline">team@ergoplatform.org</a> detailing your claim.</li>
          <li>Include all relevant details, such as the platform where the bounty was announced or a reference to this page.</li>
          <li>Attach evidence of your completed work (documents, files, or links that showcase your contributions).</li>
          <li>Include your Ergo address (for bounty reward payout).</li>
        </ol>
        <p className="text-gray-400 text-sm mt-4">
          <span className="font-semibold">Tip:</span> To streamline processing, include the estimated time it took you to complete the task. This helps us understand your effort and expedites review and reward allocation.
        </p>
      </div>

      {/* Active Bounties */}
      <div className="bg-neutral-900 border border-cyan-400/20 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-3 text-cyan-400">
          <BookOpen className="w-6 h-6" />
          Active Bounties
        </h2>
        {/* Educational Reward Program */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-cyan-300">
            <BookOpen className="w-5 h-5" />
            Educational Reward Program
          </h3>
          <p className="text-gray-300 mb-2">
            The Educational Reward Program is designed to stimulate the creation of educational content that benefits the Ergo community. We believe in the power of knowledge-sharing and empowerment as key drivers of growth. If you have educational content, even if it's not explicitly mentioned here, it could still be eligible for a reward. We invite you to contribute any educational materials that can enrich learning experiences.
          </p>
          <p className="text-gray-300 mb-2">
            At present, we are actively rewarding contributions to <span className="font-semibold">Developer Tutorials and Guides</span>. These rewards are open to contributors of all skill levels. If you have valuable insights or knowledge to share, you can submit your educational contributions directly to our documentation repository. Visit {" "}
            <a href="https://github.com/glasgowm148/ergodocs" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">this link ↗</a> to make your valuable contributions.
          </p>
        </div>
        {/* Development Reward Program */}
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-cyan-300">
            <Code2 className="w-5 h-5" />
            Development Reward Program
          </h3>
          <p className="text-gray-300 mb-2">
            The Development Reward Program is our way of acknowledging and appreciating significant contributions to the Ergo repositories. If your contributions have significantly enhanced the development and improvement of the Ergo ecosystem, you could be eligible for a reward. You can find the details and guidelines for this program {" "}
            <a href="https://github.com/ErgoDevs/Ergo-Bounties" target="_blank" rel="noopener" className="text-cyan-400 hover:underline">here ↗</a>.
          </p>
          <p className="text-gray-300">
            We deeply appreciate the time, dedication, and expertise you invest in enhancing our ecosystem. By participating in our mission to improve educational materials and drive development within the Ergo community, you are playing a crucial role in the collective growth and success of the platform.
          </p>
        </div>
      </div>
    </>
  );
} 