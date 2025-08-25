"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Users, Code, BookOpen, Megaphone } from "lucide-react"

export default function ContributePage() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8 bg-neutral-900/50 border border-neutral-700/50">
        <TabsTrigger value="overview" className="flex items-center gap-2"><Code className="w-4 h-4" />Overview</TabsTrigger>
        <TabsTrigger value="developers" className="flex items-center gap-2"><Code className="w-4 h-4" />Developers</TabsTrigger>
        <TabsTrigger value="marketing" className="flex items-center gap-2"><Megaphone className="w-4 h-4" />Marketing</TabsTrigger>
        <TabsTrigger value="sigmanauts" className="flex items-center gap-2"><Users className="w-4 h-4" />Sigmanauts</TabsTrigger>
        <TabsTrigger value="docs" className="flex items-center gap-2"><BookOpen className="w-4 h-4" />Contribute</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-[1.2]">
          Contributing to Ergo
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Ergo is an open-source project driven by its community. Contributions of all kinds are welcome and essential for the ecosystem's growth and success. Whether you're a developer, writer, designer, marketer, researcher, or simply an enthusiastic user, there are many ways to get involved!
        </p>
        <Card className="bg-gray-900/70 rounded-xl mb-6 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ways to Contribute</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Code Contributions:</b> Help build and improve Ergo's core protocol, node software, SDKs, tooling, and ecosystem projects.
                </li>
                <li>
                  <b>Getting Started:</b> Check out the <Link href="/docs/developers/overview" className="text-cyan-400 hover:underline">Developer Contribution Overview</Link> and the <Link href="/docs/developers/guidelines" className="text-cyan-400 hover:underline">Technical Contribution Guidelines</Link>.
                </li>
                <li>
                  <b>Finding Tasks:</b> Look for issues tagged <span className="text-orange-400">good first issue</span> or <span className="text-orange-400">help wanted</span> in core repositories like <a href="https://github.com/ergoplatform/ergo" target="_blank" className="text-cyan-400 hover:underline">ergo</a>, <a href="https://github.com/ScorexFoundation/sigmastate-interpreter" target="_blank" className="text-cyan-400 hover:underline">sigmastate-interpreter</a>, <a href="https://github.com/ergoplatform/sigma-rust" target="_blank" className="text-cyan-400 hover:underline">sigma-rust</a>, <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" className="text-cyan-400 hover:underline">ergo-appkit</a>.
                </li>
                <li>
                  <b>Bounties:</b> Explore the <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">official Ergo Bounties Board</a> for funded tasks.
                </li>
                <li>
                  <b>Grants:</b> Consider applying for <a href="https://ergoplatform.org/en/grants/" target="_blank" className="text-cyan-400 hover:underline">Development Grants</a> for larger projects.
                </li>
                <li>
                  <b>Community:</b> Join the development discussions on the <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Ergo Discord Server</a> (check relevant <span className="text-orange-400">#dev</span> channels).
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Improve ErgoDocs:</b> Help enhance this documentation site by fixing errors, improving clarity, adding examples, translating content, or writing new guides.
                </li>
                <li>
                  <b>Guide:</b> <Link href="/docs/contribute" className="text-cyan-400 hover:underline">Contributing to the Docs</Link>
                </li>
                <li>
                  <b>Repository:</b> <a href="https://github.com/ergoplatform/ergodocs" target="_blank" className="text-cyan-400 hover:underline">ergodocs on GitHub</a> (Submit issues or Pull Requests here!)
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Marketing & Outreach</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Spread the Word:</b> Help raise awareness about Ergo through social media, content creation (articles, videos), community engagement, and organizing local meetups.
                </li>
                <li>
                  <b>Guide:</b> <Link href="/docs/introduction/marketing" className="text-cyan-400 hover:underline">Marketing Contributions</Link>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Community Support & Engagement</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Help Others:</b> Assist new users and developers in community channels like Discord and Telegram.
                </li>
                <li>
                  <b>Sigmanauts Program:</b> Join the <a href="https://sigmanauts.org/" target="_blank" className="text-cyan-400 hover:underline">Sigmanauts Program</a> for a more structured way to contribute to community building, education, and testing.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Other Ways</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Testing:</b> Help test new node releases, wallet updates, and dApps.</li>
                <li><b>Design:</b> Contribute UI/UX improvements for wallets and applications.</li>
                <li><b>Research:</b> Explore new cryptographic techniques, economic models, or protocol enhancements relevant to Ergo.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Explore:</b> Browse the different contribution areas linked above.</li>
                <li><b>Connect:</b> Join the <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Ergo Discord Server</a> and introduce yourself in relevant channels (e.g., #development, #documentation, #marketing).</li>
                <li><b>Find a Task:</b> Look for open issues, bounties, or areas needing improvement that match your skills and interests. Don't hesitate to ask for guidance!</li>
                <li><b>Contribute:</b> Follow the specific guidelines for the area you're contributing to (e.g., technical guidelines for code, documentation style guide for docs).</li>
              </ul>
            </div>
            <div className="text-center mt-8">
              <span className="italic text-lg text-orange-400">'Let's create grassroots finance!'</span>
            </div>
            <div className="mt-8 text-center text-gray-400">
              Every contribution, big or small, helps strengthen the Ergo ecosystem. Thank you for your interest!
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="developers">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-[1.2]">
          Developer Contributions
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Help build and improve Ergo's core protocol, node software, SDKs, tooling, and ecosystem projects. Find bounties, grants, and technical guidelines for contributing code.
        </p>
        <Card className="bg-gray-900/70 rounded-xl mb-6 border-none">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">How to Contribute as a Developer</h2>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li><b>Join the Ergo Community:</b> Connect with other developers and Ergo team members on our <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Discord Server</a>. Make sure to enable the development channels for relevant discussions.</li>
                <li><b>Explore Opportunities:</b> Visit our <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">Bounties</a> and <a href="https://ergoplatform.org/en/grants/" target="_blank" className="text-cyan-400 hover:underline">Grants</a> pages to find out about ongoing projects and tasks you can contribute to.</li>
                <li><b>Submit Your Work:</b> Once you've completed a task or project, you can submit your work for review.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Submitting Payment Requests</h3>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li><b>Draft an Email:</b> Write an email detailing your claim and send it to <a href="mailto:team@ergoplatform.org" className="text-cyan-400 hover:underline">team@ergoplatform.org</a>.</li>
                <li><b>Include Relevant Details:</b> Include all necessary details, such as the platform where the bounty was announced or a reference to the bounty page.</li>
                <li><b>Attach Evidence:</b> Attach any documents, files, or links that showcase your completed work.</li>
                <li><b>Provide Your Ergo Address:</b> This is where we will send your bounty reward.</li>
              </ol>
              <p className="text-gray-400">We appreciate your contributions and look forward to working with you!</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Contribution Guidelines</h2>
              <p className="mb-2 text-gray-300">Contributing code to Ergo's core repositories (like <span className="text-orange-400">ergo</span>, <span className="text-orange-400">sigmastate-interpreter</span>, <span className="text-orange-400">sigma-rust</span>, <span className="text-orange-400">ergo-appkit</span>) involves adhering to certain technical standards and being aware of common build and dependency considerations. This guide provides pointers for developers looking to contribute technically.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">General Workflow</h3>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li><b>Find an Issue/Task:</b> Look for issues tagged <span className="text-orange-400">good first issue</span> or <span className="text-orange-400">help wanted</span> in the relevant GitHub repository. Check the <a href="https://bounties.ergo.community/" target="_blank" className="text-cyan-400 hover:underline">Bounties Board</a> for funded tasks. Discuss potential contributions in the development channels on Discord.</li>
                <li><b>Fork & Branch:</b> Fork the repository and create a new branch for your changes.</li>
                <li><b>Develop & Test:</b> Write your code, adhering to the project's style guide (e.g., Ergo Scala Style Guide). Add relevant unit and integration tests. Ensure all existing tests pass.</li>
                <li><b>Submit Pull Request:</b> Push your changes to your fork and open a Pull Request (PR) against the main repository's appropriate branch (usually master or a specific release branch). Clearly describe the changes made and reference the issue number if applicable.</li>
                <li><b>Code Review:</b> Project maintainers will review your PR, provide feedback, and potentially request changes. Respond to feedback and update your PR accordingly.</li>
                <li><b>Merge:</b> Once approved, maintainers will merge your PR.</li>
              </ol>
              <h3 className="text-lg font-semibold mt-4 mb-2">Build & CI Troubleshooting</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-4">
                <li><b>GitHub Actions Updates:</b> Workflows can sometimes break due to updates in the underlying GitHub Actions runners or referenced actions (e.g., actions/checkout@v4). Check the workflow logs (<span className="text-orange-400">.github/workflows/</span>) for errors related to action versions or syntax changes. Consult recent successful builds on the main branch for comparison.</li>
                <li><b>Flaky/Random Test Failures:</b> Distributed systems testing can sometimes exhibit intermittent failures due to timing, resource contention, or network issues within the CI environment.
                  <ul className="list-disc ml-6">
                    <li>Action: Re-running the failed job often resolves transient issues. If failures persist, try running the specific tests locally with increased verbosity or logging to isolate the problem. Check for recent changes in related code that might have introduced race conditions or resource leaks. Report persistent flaky tests as issues.</li>
                  </ul>
                </li>
                <li><b>Dependency Conflicts/Plugin Issues:</b> Updates to dependencies or build tool plugins (e.g., SBT plugins) can sometimes introduce conflicts or breakages. Check the build logs for errors related to dependency resolution or plugin execution. Ensure your local build environment (SBT version, JDK version) matches the one used in CI.</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">Dependency Management Guidelines</h3>
              <h4 className="font-semibold mb-1">BouncyCastle Variants</h4>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-2">
                <li><b>Inconsistency Issue:</b> Historically, different projects within the ecosystem may have used inconsistent versions or variants. This can lead to classpath conflicts or subtle runtime issues if libraries depending on different variants are used together.</li>
                <li><b>Recommendation:</b> When adding or updating BouncyCastle dependencies, strive to use a consistent, modern variant across projects where feasible (e.g., the latest compatible jdk18on variant is often preferred over older jdk15on or ranged jdk15to18 variants). Check the specific project's existing dependencies and contribution guidelines. If introducing a change, document the rationale. Using older variants might be necessary for compatibility with specific platforms (like older Android versions) but should be carefully considered.</li>
              </ul>
              <h4 className="font-semibold mb-1">General Dependencies</h4>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-2">
                <li>Keep dependencies updated where possible, but test thoroughly after updates.</li>
                <li>Minimize adding new dependencies unless necessary, especially in core libraries, to avoid bloating and potential conflicts.</li>
                <li>Follow the specific dependency management practices of the repository you are contributing to (e.g., versions specified in build.sbt, Cargo.toml, pom.xml).</li>
              </ul>
              <p className="text-gray-400">By following these guidelines and collaborating with the community, you can contribute effectively to the technical development of the Ergo ecosystem.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Bounties</h2>
              <p className="mb-2 text-gray-300">Welcome to the Ergo Bounties page! This is your gateway to contributing to the Ergo community and being rewarded for your valuable efforts. We offer a variety of bounties across different programs, including educational and development initiatives, all aimed at fostering growth and innovation within the Ergo ecosystem.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">How to Claim a Bounty</h3>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li>Draft an email to <a href="mailto:team@ergoplatform.org" className="text-cyan-400 hover:underline">team@ergoplatform.org</a> detailing your claim.</li>
                <li>Include all relevant details in your email, such as the platform where the bounty was announced or a reference to this page for the mentioned bounties.</li>
                <li>Attach evidence of your completed work. This could be documents, files, or links that showcase your contributions.</li>
                <li>Remember to include your Ergo address. This is where we will send your bounty reward.</li>
              </ol>
              <p className="text-gray-400 mb-2">To streamline the processing of your bounty claim, we encourage you to include the estimated time it took you to complete the task. This helps us understand the effort you've put in and allows us to expedite the review and reward allocation process.</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Active Bounties</h3>
              <h4 className="font-semibold mb-1">Educational Reward Program</h4>
              <p className="mb-2 text-gray-300">The Educational Reward Program is designed to stimulate the creation of educational content that benefits the Ergo community. We believe in the power of knowledge-sharing and empowerment as key drivers of growth. If you have educational content, even if it's not explicitly mentioned here, it could still be eligible for a reward. We invite you to contribute any educational materials that can enrich learning experiences.</p>
              <p className="mb-2 text-gray-300">At present, we are actively rewarding contributions to Developer Tutorials and Guides. These rewards are open to contributors of all skill levels. If you have valuable insights or knowledge to share, you can submit your educational contributions directly to our documentation repository. <a href="https://github.com/ergoplatform/ergodocs" target="_blank" className="text-cyan-400 hover:underline">Visit this link to make your valuable contributions.</a></p>
              <h4 className="font-semibold mb-1">Development Reward Program</h4>
              <p className="mb-2 text-gray-300">The Development Reward Program is our way of acknowledging and appreciating significant contributions to the Ergo repositories. If your contributions have significantly enhanced the development and improvement of the Ergo ecosystem, you could be eligible for a reward. <a href="https://ergoplatform.org/en/grants/" target="_blank" className="text-cyan-400 hover:underline">You can find the details and guidelines for this program here.</a></p>
              <p className="text-gray-400">We deeply appreciate the time, dedication, and expertise you invest in enhancing our ecosystem. By participating in our mission to improve educational materials and drive development within the Ergo community, you are playing a crucial role in the collective growth and success of the platform.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Funding Opportunities</h2>
              <p className="mb-2 text-gray-300">We suggest that your initial step should be to launch a <b>Raffle</b>. A Raffle not only provides a clear funding goal, but it also validates the community's support and can be supplemented by additional grant or foundation funding.</p>
              <p className="mb-2 text-gray-300">For projects of a larger scale, multiple grant programs are at your disposal. You can seek funding through the <a href="https://goodwhale.io/" target="_blank" className="text-cyan-400 hover:underline">Good Whale Fund</a> or the <a href="https://darkfund0.org/" target="_blank" className="text-cyan-400 hover:underline">DarkFund0</a>. These platforms offer you the opportunity to introduce your project to the community, highlighting its potential impact and significance.</p>
              <p className="mb-2 text-gray-300">If you favor a more direct approach or if your project has unique needs that are not catered to by these platforms, you can send your grant request directly to us. Reach out to our team at <a href="mailto:team@ergoplatform.org" className="text-cyan-400 hover:underline">team@ergoplatform.org</a> with your proposal.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Career Opportunities at Ergo</h2>
              <p className="mb-2 text-gray-300">While the Ergo Foundation does occasionally advertise full-time positions, these roles are often specialized and senior in nature. A more direct pathway to becoming a key member of our team is by engaging with our compensated bounties. These tasks not only allow you to make substantial contributions to our mission but also provide an opportunity to gain a deeper understanding of our platform.</p>
              <p className="mb-2 text-gray-300">Moreover, active participation in our ecosystem discussions can help you identify areas where your unique skills can have an impact. We value diversity in knowledge and perspectives, not just technical expertise. Whether you're a developer, a researcher, or simply an Ergo enthusiast, your insights can significantly contribute to Ergo's growth and success. This active involvement serves as an excellent stepping stone towards a potential long-term collaboration with us.</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="marketing">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-[1.2]">
          Community Marketing
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Ergo has a lively and diverse community made up of various sub-ecosystems. Here's how you can get involved and make a difference:
        </p>
        <Card className="bg-gray-900/70 rounded-xl border-none">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Join the Conversation</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Telegram and Discord:</b> Dive into discussions on our <a href="https://t.me/ergoplatform" target="_blank" className="text-cyan-400 hover:underline">Telegram group</a> or the <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">#marketing channel on Discord</a>. Collaborate, share ideas, and help steer our grassroots initiatives.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contribute to Our Wiki</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>
                  <b>Ergonaut.space:</b> Help expand our comprehensive Wiki at <a href="https://ergonaut.space" target="_blank" className="text-cyan-400 hover:underline">ergonaut.space</a>, available in over forty languages. Your contributions make Ergo more accessible to a global audience.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Create and Share Content</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Shared Figma Space:</b> Enhance your visual content or team up on design projects using our <a href="https://www.figma.com/file/ErgoShared" target="_blank" className="text-cyan-400 hover:underline">Shared Figma Graphic Space</a>.</li>
                <li><b>Graphics and Logos:</b> Access a wide range of graphics via our <a href="https://www.dropbox.com/sh/ergographics" target="_blank" className="text-cyan-400 hover:underline">Dropbox</a>, or get official Ergo logos from <a href="https://github.com/ergoplatform/awesome-ergo#media" target="_blank" className="text-cyan-400 hover:underline">awesome-ergo</a>.</li>
                <li><b>Infographics and Memes:</b> Create infographics that explain complex concepts or memes to generate buzz and engagement on social media.</li>
                <li><b>Videos:</b> Produce videos explaining what Ergo is, its unique features, and updates. Share these on YouTube, TikTok, or other video platforms to reach a broader audience.</li>
                <li><b>Blog Posts and Articles:</b> Share your knowledge and insights by writing blog posts or articles about Ergo. Publish them on your own blog, Medium, or other platforms.</li>
                <li><b>Paid Contributors Program:</b> We offer a paid contributors program for writers. Technical writers are in high demand, and your contributions can be rewarded. Check out the <a href="/docs/contribute" className="text-cyan-400 hover:underline">Ergo Documentation</a> for more information.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Engage in Community Outreach</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Participate in the ErgOne initiative:</b> ErgOne is a Proof-of-Commitment Protocol (PoCoP), a unique approach to blockchain engagement. By creating and sharing content, engaging with the Community, and contributing creatively, you earn $Erg0ne tokens. Tag your tweets with <span className="text-orange-400">#PoCoP</span> and submit them to the <a href="https://ergone.io" target="_blank" className="text-cyan-400 hover:underline">ErgOne dashboard</a>.</li>
                <li><b>Local Meet-Ups and Events:</b> Organize or participate in local meet-ups and events to promote Ergo.</li>
                <li><b>Webinars and Live Streams:</b> Host webinars or live streams to discuss Ergo's latest developments, answer questions, and engage with the community in real-time.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Collaborate and Spread the Word</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Influencer Partnerships:</b> Partner with influencers in the blockchain and cryptocurrency space to spread the word about Ergo.</li>
                <li><b>Guest Appearances:</b> Participate in podcasts, YouTube shows, or other media where you can talk about Ergo and its potential.</li>
                <li><b>Social Media:</b> Promote Ergo on platforms like Nostr, Bsky, Instagram, TikTok, Facebook, and subreddits.</li>
                <li><b>Ergo Forum:</b> Check out strategies and tips on the <a href="https://www.ergoforum.org/" target="_blank" className="text-cyan-400 hover:underline">Ergo Forum</a> to enhance your marketing efforts.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Community Engagement and Support</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Help New Users:</b> Be active on community forums, Discord, Telegram, and social media to help new users with their questions.</li>
                <li><b>Feedback and Suggestions:</b> Actively provide feedback and suggestions to the Ergo development team.</li>
                <li><b>Proof of Work:</b> Show your dedication by creating and executing marketing initiatives. If your work gains traction, consider running a raffle to fund further promotion.</li>
                <li><b>Regional Managers:</b> If you're passionate about setting up a regional Ergo branch, managing local chats, organizing meet-ups, and fostering a thriving community, engage with the community and demonstrate your capabilities.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Fundraising and Crowdfunding</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Crowdfunding Campaigns:</b> Organize crowdfunding campaigns to fund specific projects or initiatives within the Ergo ecosystem.</li>
                <li><b>Create Raffles:</b> Organize community raffles to raise funds for marketing initiatives.</li>
                <li><b>Sigmanauts Treasury:</b> The Sigmanauts have a treasury available for community suggestions. Propose your marketing campaign or initiative to the Sigmanauts for potential funding.</li>
              </ul>
            </div>
            <div className="mt-8 text-center text-gray-400">
              By actively participating and demonstrating your commitment, you can help drive Ergo's growth and increase its visibility in the blockchain space. Your contributions, big or small, make a significant impact in building a stronger and more vibrant community.
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="sigmanauts">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-[1.2]">
          Sigmanauts: Empowering the Ergo Community
        </h1>
        <Card className="bg-gray-900/70 rounded-xl border-none">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-300">Ergo, as outlined in its Manifesto, is a platform designed for the common person, standing against the centralization of banking and the misuse of money. The future of Ergo lies in the hands of its users, and we encourage everyone to take as much control of the Ergo ecosystem as possible. The Sigmanauts Program is a grassroots initiative aimed at empowering individuals to take ownership of Ergo and help shape its future.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">The Power of Community</h2>
              <p className="text-gray-300">Ergo's blockchain has the potential to bring out the best in humanity, and its rapidly growing community is one of its most significant assets. The Sigmanauts Program provides a platform for individuals to make a substantial impact on the future of finance by leveraging their unique skills and strengths.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Categories of Participation</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>Growth:</b> Ideal for those with marketing expertise, connections to other projects, or skills that can help expand the community and attract diverse individuals.</li>
                <li><b>Community:</b> Perfect for individuals interested in roles such as ambassador, moderator, or translator, fostering a welcoming and engaging environment for all members.</li>
                <li><b>Creative:</b> Suited for graphic designers, videographers, writers, or social media experts who want to showcase their talents and contribute to the visual and narrative aspects of the Ergo ecosystem.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Becoming a Sigmanaut</h2>
              <p className="text-gray-300">To become a Sigmanaut, interested individuals must go through a formal application process. Once accepted into the Sigmanauts Program as a SigCAN (Sigmanaut Candidate), participants will have the opportunity to work with a team of like-minded individuals, showcase their skills, and make a significant impact on the Ergo ecosystem.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Progression and Responsibility</h2>
              <p className="text-gray-300">As SigCANs contribute to the Ergo ecosystem and demonstrate their commitment and abilities, they will have the opportunity to become full-fledged Sigmanauts. This progression brings greater responsibility within the community, allowing individuals to take on leadership roles and guide the future direction of the Ergo platform.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Training and Support</h2>
              <p className="text-gray-300">The Sigmanauts Program offers comprehensive training designed to equip participants with the necessary skills and knowledge to contribute effectively to the development of the Ergo ecosystem. This training covers various aspects of decentralized finance, blockchain technology, and community building, ensuring that Sigmanauts are well-prepared to tackle challenges and seize opportunities within the Ergo community.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Collaboration and Networking</h2>
              <p className="text-gray-300">As a Sigmanaut, individuals will have the chance to interact with others who share their passion for financial privacy and decentralization. The program fosters a collaborative environment where Sigmanauts can learn from one another, share ideas, and work together towards common goals. This networking opportunity is invaluable for personal growth and professional development within the blockchain and cryptocurrency space.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Sigmanauts Mining Pool</h2>
              <p className="text-gray-300">The Sigmanauts Mining Pool is a DAO-driven, community-run mining pool dedicated to supporting the Ergo ecosystem. Joining the pool contributes to the Ergo community (fees go to the Sigmanauts treasury) and offers hourly bonus token payments. The pool boasts a minimal 0.9% fee, a payout threshold of 0.5 ERG, and operates on the PPLNS payment method (Pay Per Last N Shares, with N set to 0.5).</p>
              <p className="text-gray-300">To get started with mining Ergo, you need an Ergo wallet and mining software compatible with your GPU. Detailed instructions on wallet setup, mining software, and example miner configurations for both Windows and Linux can be found on the <a href="https://sigmamine.com/" target="_blank" className="text-cyan-400 hover:underline">Sigmanauts Mining Pool page</a>.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Sigmanauts Achievements</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li><b>01/22:</b> The Sigmanauts Program is launched.</li>
                <li><b>01/23:</b> sigmanauts.com launches.</li>
                <li><b>03/23:</b> Sigmanauts voting rework.</li>
                <li><b>03/23:</b> Mission Statement published.</li>
                <li><b>00/23:</b> The Sigmanauts attend their first event @ RareEVO.</li>
                <li><b>00/23:</b> The Ergo Foundation donates 160,000 SPF to the Sigmanauts treasury.</li>
              </ul>
              <p className="text-lg text-gray-300 mb-10">
                The Sigmanauts Program is a community-driven initiative for those who want to contribute to Ergo's growth, education, and testing in a more structured way.
              </p>
              <Card className="bg-gray-900/70 rounded-xl border-none">
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-300">The Sigmanauts Program is a community-driven initiative for those who want to contribute to Ergo's growth, education, and testing in a more structured way.</p>
                  <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-4">
                    <li>Community building and moderation</li>
                    <li>Education and onboarding new users</li>
                    <li>Testing new releases and features</li>
                    <li>Organizing events and campaigns</li>
                  </ul>
                  <div className="mb-2">
                    <b>Learn more:</b> <a href="https://sigmanauts.org/" target="_blank" className="text-cyan-400 hover:underline">Sigmanauts.org</a>
                  </div>
                  <div className="mb-2">
                    <b>Discord:</b> <a href="https://discord.gg/ergo" target="_blank" className="text-cyan-400 hover:underline">Join the Ergo Discord</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="docs">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-[1.2]">
          Contributing to the Documentation
        </h1>
        <Card className="bg-gray-900/70 rounded-xl border-none">
          <CardContent className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">We appreciate your interest in contributing!</h2>
              <p className="text-gray-300">Your assistance is invaluable, and we aim to make the contribution process as straightforward as possible.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Prerequisites for Contribution</h2>
              <ul className="list-disc ml-6 text-gray-300 space-y-2">
                <li>A <b>GitHub account</b> for version control and collaboration.</li>
                <li><b>Python (3.7 or higher)</b> if you plan to build the documentation locally.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">How to Contribute</h2>
              <h3 className="text-lg font-semibold mb-2">Minor Changes</h3>
              <p className="text-gray-300 mb-4">For minor changes, simply log into GitHub, click the edit arrow at the top-right of this page. After saving, you'll have the option to open a pull request.</p>
              <h3 className="text-lg font-semibold mb-2">Major Changes</h3>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li>Clone the repository:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">git clone https://github.com/ergoplatform/ergodocs.git</pre>
                </li>
                <li>Install dependencies:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">cd mkdocs-project
pip install -r requirements.txt</pre>
                </li>
                <li>Build the project:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">mkdocs build</pre>
                </li>
                <li>Start the development server:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">mkdocs serve</pre>
                </li>
                <li>Open the documentation in your browser:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">http://127.0.0.1:8000/</pre>
                </li>
              </ol>
              <p className="text-gray-300">Make your changes locally and submit a pull request when you're done.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Guidelines</h2>
              <h3 className="text-lg font-semibold mb-2">Writing Style</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-4">
                <li>Write in clear, concise, and grammatically correct English.</li>
                <li>Use appropriate formatting, such as <b>bold</b> or <i>italics</i>, to emphasize key points.</li>
                <li>Keep paragraphs and sections short and focused on a single topic.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Code Style</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-4">
                <li>Follow the code style conventions used throughout the project.</li>
                <li>Include comments and explanations to make the code easy to understand.</li>
                <li>Use code-blocks with syntax highlighting.</li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">Commit Messages</h3>
              <ul className="list-disc ml-6 text-gray-300 space-y-2 mb-4">
                <li>Write clear, concise, and meaningful commit messages.</li>
                <li>Use the imperative form, e.g., "Add feature" rather than "Added feature" or "Adding feature".</li>
                <li>Use sentence capitalization, i.e., capitalize the first letter of the message, but not the rest.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Notes</h2>
              <h3 className="text-lg font-semibold mb-2">Navigation</h3>
              <p className="text-gray-300 mb-2">The mkdocs navigation is built using <b>mkdocs.yml</b>. To add, remove or modify pages in the navigation, edit the <b>nav</b> section in the mkdocs.yml file.</p>
              <h3 className="text-lg font-semibold mb-2">Directory Structure</h3>
              <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">- Parent Directory:
    - index.md
    - Sub-Directory:
        - SubDirectoryPage: subdirectorypage.md
    - ParentDirectoryPage: parentdirectorypage.md</pre>
              <h3 className="text-lg font-semibold mb-2">TODOs</h3>
              <p className="text-gray-300 mb-2">To leave comments in the file itself and have them not visible on the live site, you can use the HTML comment codes:</p>
              <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">&lt;!-- TODO: Add information about XYZ here --&gt;</pre>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Submitting a Pull Request</h2>
              <ol className="list-decimal ml-6 text-gray-300 space-y-2 mb-4">
                <li>Commit your changes to a new branch:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">git checkout -b my-feature-branch
git add .
git commit -m "Add my awesome feature"</pre>
                </li>
                <li>Push your changes to your fork:
                  <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">git push origin my-feature-branch</pre>
                </li>
                <li>Open a pull request on the original repository:
                  <span className="text-gray-300">Go to the original repository on GitHub and click on the "Pull Requests" tab. Then, click on the "New Pull Request" button and select your fork and branch to create the pull request.</span>
                </li>
              </ol>
              <p className="text-gray-300">Please include a descriptive title and a detailed description of your changes.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Review Process</h2>
              <p className="text-gray-300">Once your pull request is submitted, our team will review your changes. We may request additional changes or clarification before merging your pull request. Please be patient, as we want to ensure that the documentation remains high-quality and consistent.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">MkDocs formatting</h2>
              <p className="text-gray-300 mb-2">rST suggests the following "types": <b>attention</b>, <b>caution</b>, <b>danger</b>, <b>error</b>, <b>hint</b>, <b>important</b>, <b>note</b>, <b>tip</b>, and <b>warning</b>; however, you're free to use whatever you want.</p>
              <pre className="bg-gray-800 rounded p-2 text-sm text-gray-100 overflow-x-auto">{`/// admonition | Some title
type: warning

Some content
///

Some title

Some content

/// note | Some title
Some content
///

Some title

Some content

note, attention, caution, danger, error, tip, hint, warning.

note

Some note

caution

Some caution

danger

Some danger

error

Some error

tip

Some tip

hint

Some hint

warning

Some warning`}</pre>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
} 