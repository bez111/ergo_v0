import type { Metadata } from "next"
import { PDFList, PDFViewer } from "@/components/pdf/pdf-viewer"
import { BackgroundWrapper } from "@/components/home/background-wrapper"
import { FileText, BookOpen, Microscope, Code } from "lucide-react"

export const metadata: Metadata = {
  title: "Documents & Resources — Ergo Platform",
  description: "Access whitepapers, technical documentation, research papers, and guides for the Ergo blockchain platform.",
  keywords: ["Ergo whitepaper", "blockchain research", "technical documentation", "ErgoScript guides"],
}

// Пример структуры документов
const documents = [
  {
    title: "Ergo Platform Whitepaper",
    description: "The foundational document describing Ergo's architecture, consensus mechanism, and key innovations.",
    path: "whitepapers/ergo-whitepaper.pdf",
    category: "Whitepaper",
    size: "2.1 MB",
    pages: 45
  },
  {
    title: "ErgoScript Language Reference",
    description: "Complete reference guide for ErgoScript smart contract language with examples and best practices.",
    path: "technical/ergoscript-reference.pdf", 
    category: "Technical",
    size: "1.8 MB",
    pages: 32
  },
  {
    title: "Sigma Protocols Research Paper",
    description: "Academic paper on Sigma protocols implementation and cryptographic foundations in Ergo.",
    path: "research/sigma-protocols-research.pdf",
    category: "Research", 
    size: "3.2 MB",
    pages: 67
  },
  {
    title: "eUTXO Model Deep Dive",
    description: "Technical analysis of the extended UTXO model and its advantages for smart contract development.",
    path: "technical/eutxo-model-analysis.pdf",
    category: "Technical",
    size: "1.5 MB", 
    pages: 28
  },
  {
    title: "Mining Guide & Pool Setup",
    description: "Comprehensive guide for setting up Ergo mining operations and pool configurations.",
    path: "guides/mining-setup-guide.pdf",
    category: "Guide",
    size: "2.7 MB",
    pages: 41
  }
]

export default function DocumentsPage() {
  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-8 h-8 text-orange-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documents & Resources
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Access official whitepapers, technical documentation, research papers, and comprehensive guides for the Ergo blockchain platform.
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 text-center hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Whitepapers</h3>
              <p className="text-neutral-400 text-sm">Foundational documents</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 text-center hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
              <Code className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Technical Docs</h3>
              <p className="text-neutral-400 text-sm">Implementation details</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 text-center hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
              <Microscope className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Research Papers</h3>
              <p className="text-neutral-400 text-sm">Academic studies</p>
            </div>
            
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 text-center hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
              <FileText className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">User Guides</h3>
              <p className="text-neutral-400 text-sm">How-to documentation</p>
            </div>
          </div>

          {/* Documents List */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Available Documents</h2>
            <PDFList documents={documents} />
          </div>

          {/* Example PDF Viewer */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Document</h2>
            <PDFViewer 
              src="/api/pdf/whitepapers/ergo-whitepaper.pdf"
              title="Ergo Platform Whitepaper"
              description="The foundational document describing Ergo's architecture and innovations"
              height="800px"
            />
          </div>

        </div>
      </div>
    </BackgroundWrapper>
  )
}
