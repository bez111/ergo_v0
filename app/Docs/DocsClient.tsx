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
  FileQuestion,
  Briefcase,
  TreePine,
  GraduationCap,
  ChevronRight
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
        <DocButton href="/Docs/developers" variant="secondary" icon={<Code className="w-5 h-5 mr-2" />}>
          Developer Hub
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

      {/* Core Technology Section */}
      <DocSection title="Core Technology" icon={<Cpu className="w-6 h-6 text-cyan-400" />}>
        <p className="text-gray-300 mb-6">
          Deep dive into Ergo's technical foundations and innovative features that set it apart from other blockchain platforms.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/introduction/eutxo"
            title="eUTxO Model"
            description="Extended UTXO model for advanced smart contracts"
            icon={<Database className="w-6 h-6 text-cyan-400" />}
          />
          <DocCard
            href="/Docs/introduction/nipopows"
            title="NIPoPoWs"
            description="Non-Interactive Proofs of Proof-of-Work"
            icon={<Shield className="w-6 h-6 text-cyan-400" />}
          />
          <DocCard
            href="/Docs/introduction/storage-rent"
            title="Storage Rent"
            description="Economic model for sustainable blockchain"
            icon={<Coins className="w-6 h-6 text-cyan-400" />}
          />
          <DocCard
            href="/Docs/introduction/autolykos"
            title="Autolykos"
            description="Memory-hard proof-of-work algorithm"
            icon={<Cpu className="w-6 h-6 text-cyan-400" />}
          />
          <DocCard
            href="/Docs/introduction/privacy"
            title="Privacy Features"
            description="Advanced privacy and confidentiality tools"
            icon={<Lock className="w-6 h-6 text-cyan-400" />}
          />
          <DocCard
            href="/Docs/introduction/light-clients"
            title="Light Clients"
            description="Lightweight blockchain verification"
            icon={<Smartphone className="w-6 h-6 text-cyan-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Development Section */}
      <DocSection title="Development" icon={<Code className="w-6 h-6 text-yellow-400" />}>
        <p className="text-gray-300 mb-6">
          Complete resources for developers building on Ergo. From smart contracts to full-stack applications.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/developers"
            title="Developer Hub"
            description="Unified developer portal with all resources"
            icon={<Rocket className="w-6 h-6 text-yellow-400" />}
          />
          <DocCard
            href="/Docs/developers/ergoscript-languages"
            title="ErgoScript"
            description="Smart contract language and compiler"
            icon={<Code className="w-6 h-6 text-yellow-400" />}
          />
          <DocCard
            href="/Docs/developers/tooling"
            title="Developer Tools"
            description="SDKs, libraries, and development tools"
            icon={<Settings className="w-6 h-6 text-yellow-400" />}
          />
          <DocCard
            href="/Docs/developers/data-model-apis"
            title="APIs & Data"
            description="REST APIs and data model documentation"
            icon={<Network className="w-6 h-6 text-yellow-400" />}
          />
          <DocCard
            href="/Docs/developers/tutorials"
            title="Tutorials"
            description="Step-by-step guides and examples"
            icon={<GraduationCap className="w-6 h-6 text-yellow-400" />}
          />
          <DocCard
            href="/Docs/developers/box"
            title="Box Model"
            description="Understanding Ergo's box-based architecture"
            icon={<Database className="w-6 h-6 text-yellow-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Ecosystem Section */}
      <DocSection title="Ecosystem" icon={<Globe className="w-6 h-6 text-green-400" />}>
        <p className="text-gray-300 mb-6">
          Explore the vibrant Ergo ecosystem and discover applications, tools, and services built on the platform.
        </p>
        <DocGrid columns={4}>
          <DocCard
            href="/Docs/ecosystem"
            title="Overview"
            description="Complete ecosystem map"
            icon={<Globe className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/applications"
            title="Applications"
            description="dApps built on Ergo"
            icon={<Building className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/financial"
            title="DeFi"
            description="Financial protocols"
            icon={<BarChart3 className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/privacy"
            title="Privacy"
            description="Privacy solutions"
            icon={<Eye className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/nfts"
            title="NFTs"
            description="NFT platforms"
            icon={<Star className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/infrastructure"
            title="Infrastructure"
            description="Core infrastructure"
            icon={<Network className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/tooling"
            title="Tooling"
            description="Development tools"
            icon={<Settings className="w-6 h-6 text-green-400" />}
          />
          <DocCard
            href="/Docs/ecosystem/daos"
            title="DAOs"
            description="Governance systems"
            icon={<Users className="w-6 h-6 text-green-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Mining Section */}
      <DocSection title="Mining" icon={<Pickaxe className="w-6 h-6 text-purple-400" />}>
        <p className="text-gray-300 mb-6">
          Everything you need to know about mining Ergo, from hardware setup to pool selection.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/miners"
            title="Mining Guide"
            description="Complete mining documentation with setup instructions"
            icon={<Pickaxe className="w-6 h-6 text-purple-400" />}
          />
          <DocCard
            href="/Docs/miners/Miner-Tooling"
            title="Mining Software"
            description="Mining software and configuration guides"
            icon={<Settings className="w-6 h-6 text-purple-400" />}
          />
          <DocCard
            href="/Docs/miners/resources"
            title="Mining Resources"
            description="Pools, calculators, and community resources"
            icon={<Database className="w-6 h-6 text-purple-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Governance & Community Section */}
      <DocSection title="Governance & Community" icon={<Users className="w-6 h-6 text-blue-400" />}>
        <p className="text-gray-300 mb-6">
          Learn about Ergo's governance structure and how to get involved in the community.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/introduction/ergo-foundation"
            title="Ergo Foundation"
            description="The organization behind Ergo"
            icon={<Building className="w-6 h-6 text-blue-400" />}
          />
          <DocCard
            href="/Docs/introduction/devdao"
            title="DevDao"
            description="Developer DAO for ecosystem growth"
            icon={<Users2 className="w-6 h-6 text-blue-400" />}
          />
          <DocCard
            href="/Docs/introduction/sigmanauts"
            title="Sigmanauts"
            description="Community ambassador program"
            icon={<Award className="w-6 h-6 text-blue-400" />}
          />
          <DocCard
            href="/Docs/introduction/social-contract"
            title="Social Contract"
            description="Ergo's principles and values"
            icon={<FileText className="w-6 h-6 text-blue-400" />}
          />
          <DocCard
            href="/Docs/introduction/events"
            title="Events"
            description="Conferences and meetups"
            icon={<Calendar className="w-6 h-6 text-blue-400" />}
          />
          <DocCard
            href="/Docs/contribute"
            title="Contribute"
            description="How to contribute to Ergo"
            icon={<GitBranch className="w-6 h-6 text-blue-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Additional Resources */}
      <DocSection title="Additional Resources" icon={<FileText className="w-6 h-6 text-orange-400" />}>
        <p className="text-gray-300 mb-6">
          Research papers, whitepapers, and additional learning materials.
        </p>
        <DocGrid columns={3}>
          <DocCard
            href="/Docs/introduction/research-whitepapers"
            title="Research Papers"
            description="Academic papers and technical research"
            icon={<FileText className="w-6 h-6 text-orange-400" />}
          />
          <DocCard
            href="/Docs/introduction/resources"
            title="Learning Resources"
            description="Videos, articles, and tutorials"
            icon={<BookOpen className="w-6 h-6 text-orange-400" />}
          />
          <DocCard
            href="/Docs/introduction/roadmap"
            title="Roadmap"
            description="Future development plans"
            icon={<Target className="w-6 h-6 text-orange-400" />}
          />
          <DocCard
            href="/Docs/introduction/wallets"
            title="Wallets"
            description="Wallet options and setup guides"
            icon={<Wallet className="w-6 h-6 text-orange-400" />}
          />
          <DocCard
            href="/Docs/introduction/audit"
            title="Security Audits"
            description="Security audit reports"
            icon={<Shield className="w-6 h-6 text-orange-400" />}
          />
          <DocCard
            href="/Docs/introduction/misconceptions"
            title="Misconceptions"
            description="Common myths debunked"
            icon={<FileQuestion className="w-6 h-6 text-orange-400" />}
          />
        </DocGrid>
      </DocSection>

      {/* Call to Action */}
      <DocAlert
        variant="success"
        title="Ready to Build?"
      >
        <p className="mb-4">
          Join thousands of developers building the future of decentralized finance on Ergo.
        </p>
        <div className="flex gap-4">
          <DocButton href="/Docs/developers" icon={<Code className="w-5 h-5 mr-2" />}>
            Start Building
          </DocButton>
          <DocButton href="https://discord.gg/ergo-platform" variant="secondary" icon={<ExternalLink className="w-5 h-5 mr-2" />}>
            Join Discord
          </DocButton>
        </div>
      </DocAlert>
    </DocLayout>
  )
} 