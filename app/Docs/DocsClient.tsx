"use client"
import { 
  BookOpen, 
  Code, 
  Pickaxe, 
  Users, 
  HelpCircle, 
  Wallet, 
  Shield,
  Zap,
  Globe,
  Lightbulb,
  Target,
  Rocket,
  Cpu,
  Database,
  Network,
  Building,
  Search,
  FileText,
  Settings,
  BarChart3,
  Users2,
  Calendar,
  Award,
  ExternalLink,
  CheckCircle,
  Brain,
  Lock,
  Coins,
  GitBranch,
  Eye,
  Key,
  Smartphone,
  ArrowRight,
  Star,
  Layers,
  FileQuestion
} from "lucide-react"
import { DocLayout, DocSection, DocCard, DocGrid, DocButton, DocAlert } from './DocLayout'

export default function DocsPage() {
  return (
    <DocLayout
      title="Ergo Documentation"
      description="Your comprehensive guide to understanding, using, and building on Ergo. From basic concepts to advanced development, find everything you need to navigate the Ergo ecosystem."
    >
      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        <DocButton href="/Docs/why-ergo" icon={<BookOpen className="w-5 h-5 mr-2" />}>
          Why Ergo?
        </DocButton>
        <DocButton href="/Docs/introduction/glossary" variant="secondary" icon={<Search className="w-5 h-5 mr-2" />}>
          Glossary
        </DocButton>
      </div>

      {/* Getting Started Section */}
      <DocSection title="Getting Started" icon={<Target className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Essential resources for newcomers to Ergo. Start here to understand the fundamentals and find your path forward.
        </p>
        <DocGrid>
          <DocCard
            href="/Docs/why-ergo"
            title="Why Ergo"
            description="Discover what makes Ergo unique and why it matters in the blockchain ecosystem"
            icon={<Target className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/key-features"
            title="Key Features"
            description="Explore Ergo's core technological innovations and capabilities"
            icon={<Zap className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/glossary"
            title="Glossary"
            description="Comprehensive blockchain and Ergo terminology guide"
            icon={<BookOpen className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/faq"
            title="FAQ"
            description="Find answers to commonly asked questions about Ergo"
            icon={<HelpCircle className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Introduction Section */}
      <DocSection title="Introduction" icon={<BookOpen className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Deep dive into what makes Ergo special. Understand the philosophy, features, and vision that drive the platform.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/introduction/roadmap"
            title="Roadmap"
            description="Future development plans and milestones"
            icon={<Calendar className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/social-contract"
            title="Social Contract"
            description="Community agreements and shared values"
            icon={<Shield className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/ergo-foundation"
            title="Foundation"
            description="About the Ergo Foundation and its role"
            icon={<Building className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/eutxo"
            title="eUTXO Model"
            description="Extended UTXO model for smart contracts"
            icon={<Database className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/nipopows"
            title="NIPoPoWs"
            description="Non-interactive proofs of proof-of-work"
            icon={<Lock className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/storage-rent"
            title="Storage Rent"
            description="Sustainable blockchain economics"
            icon={<Coins className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Ecosystem Section */}
      <DocSection title="Ecosystem" icon={<Globe className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Explore the vibrant Ergo ecosystem. Discover DeFi protocols, NFT platforms, infrastructure, and community projects.
        </p>
        <DocGrid columns={4}>
          <DocCard
            href="/Docs/ecosystem/applications"
            title="Applications"
            description="dApps built on Ergo"
            icon={<Layers className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/financial"
            title="DeFi"
            description="Financial protocols"
            icon={<Coins className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/privacy"
            title="Privacy"
            description="Privacy-focused tools"
            icon={<Eye className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/nfts"
            title="NFTs"
            description="NFT marketplaces"
            icon={<Award className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/infrastructure"
            title="Infrastructure"
            description="Core infrastructure"
            icon={<Network className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/tooling"
            title="Tooling"
            description="Developer tools"
            icon={<Settings className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/daos"
            title="DAOs"
            description="Organizations on Ergo"
            icon={<Users2 className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/ai"
            title="AI"
            description="AI integration"
            icon={<Brain className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Developer Section */}
      <DocSection title="Developers" icon={<Code className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Everything developers need to build on Ergo. From basic tutorials to advanced smart contract development.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/developers/getting-started"
            title="Getting Started"
            description="Begin your developer journey"
            icon={<Rocket className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/developers/ergoscript-languages"
            title="ErgoScript"
            description="Smart contract language"
            icon={<Code className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/developers/tooling"
            title="Developer Tools"
            description="SDKs, APIs, and utilities"
            icon={<Settings className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/developers/data-model-apis"
            title="Data & APIs"
            description="Blockchain data access"
            icon={<Database className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/developers/tutorials"
            title="Tutorials"
            description="Step-by-step guides"
            icon={<BookOpen className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/developers/box"
            title="Box Model"
            description="Understanding UTXOs"
            icon={<Database className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Mining Section */}
      <DocSection title="Mining" icon={<Pickaxe className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Join the Ergo network as a miner. Learn about Autolykos, set up your mining operation, and maximize profitability.
        </p>
        <DocGrid>
          <DocCard
            href="/Docs/miners"
            title="Mining Guide"
            description="Complete mining setup and configuration"
            icon={<Pickaxe className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/miners/Miner-Tooling"
            title="Mining Software"
            description="Miners, pools, and profitability tools"
            icon={<Settings className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/miners/resources"
            title="Mining Resources"
            description="Hardware guides and optimization tips"
            icon={<Cpu className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/autolykos"
            title="Autolykos Algorithm"
            description="Technical details of Ergo's PoW"
            icon={<Lock className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Resources Section */}
      <DocSection title="Resources" icon={<FileText className="w-6 h-6 text-brand-primary-400" />}>
        <p className="text-gray-300 mb-6">
          Additional resources to support your Ergo journey. Research papers, community links, and educational materials.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/introduction/research-whitepapers"
            title="Research Papers"
            description="Academic papers and whitepapers"
            icon={<FileText className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/introduction/resources"
            title="Community Resources"
            description="Forums, chats, and social media"
            icon={<Users className="w-6 h-6 text-brand-primary-400" />}
          />
          <DocCard
            href="/Docs/contribute"
            title="Contribute"
            description="Help improve documentation"
            icon={<GitBranch className="w-6 h-6 text-brand-primary-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* CTA Section */}
      <DocAlert variant="info" title="Need Help?">
        <p className="mb-4">
          Can't find what you're looking for? Join our community for support and discussions.
        </p>
        <div className="flex gap-4">
          <DocButton href="https://discord.gg/ergo" variant="outline" icon={<ExternalLink className="w-4 h-4 mr-2" />}>
            Discord
          </DocButton>
          <DocButton href="https://t.me/ergoplatform" variant="outline" icon={<ExternalLink className="w-4 h-4 mr-2" />}>
            Telegram
          </DocButton>
        </div>
      </DocAlert>
    </DocLayout>
  )
} 