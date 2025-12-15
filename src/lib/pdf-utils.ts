// Utility functions for PDF handling

export interface PDFDocument {
  title: string
  description: string
  path: string
  category: 'whitepaper' | 'research' | 'technical' | 'guide'
  size?: string
  pages?: number
  author?: string
  publishDate?: string
  lastUpdated?: string
  tags?: string[]
}

// PDF categories configuration
export const PDF_CATEGORIES = {
  whitepapers: {
    name: 'Whitepapers',
    description: 'Foundational documents and platform specifications',
    path: 'whitepapers',
    icon: 'BookOpen'
  },
  research: {
    name: 'Research Papers', 
    description: 'Academic research and cryptographic studies',
    path: 'research',
    icon: 'Microscope'
  },
  technical: {
    name: 'Technical Documentation',
    description: 'Implementation details and API references', 
    path: 'technical',
    icon: 'Code'
  },
  guides: {
    name: 'User Guides',
    description: 'How-to guides and tutorials',
    path: 'guides', 
    icon: 'FileText'
  }
} as const

// Generate PDF URL
export function getPDFUrl(path: string): string {
  return `/api/pdf/${path}`
}

// Generate download URL with proper filename
export function getDownloadUrl(path: string, filename?: string): string {
  const url = getPDFUrl(path)
  return filename ? `${url}?download=${encodeURIComponent(filename)}` : url
}

// Validate PDF path for security
export function isValidPDFPath(path: string): boolean {
  // Only allow paths within docs directory
  const allowedPaths = Object.values(PDF_CATEGORIES).map(cat => cat.path) as string[]
  const pathSegments = path.split('/')
  
  if (pathSegments.length < 2) return false
  
  const category = pathSegments[0]
  return allowedPaths.includes(category ?? '')
}

// Generate SEO metadata for PDF pages
export function generatePDFMetadata(doc: PDFDocument) {
  return {
    title: `${doc.title} — Ergo Platform`,
    description: doc.description,
    keywords: [
      'Ergo blockchain',
      doc.category,
      ...(doc.tags || [])
    ],
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article' as const,
      publishedTime: doc.publishDate,
      modifiedTime: doc.lastUpdated,
      authors: doc.author ? [doc.author] : ['Ergo Platform'],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: doc.title,
      description: doc.description,
    }
  }
}

// Schema.org structured data for PDF documents
export function generatePDFSchema(doc: PDFDocument, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "@id": url,
    "name": doc.title,
    "description": doc.description,
    "url": url,
    "encodingFormat": "application/pdf",
    "genre": doc.category,
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "url": "https://ergoblockchain.org"
    },
    ...(doc.author && {
      "author": {
        "@type": "Person",
        "name": doc.author
      }
    }),
    ...(doc.publishDate && {
      "datePublished": doc.publishDate
    }),
    ...(doc.lastUpdated && {
      "dateModified": doc.lastUpdated
    }),
    ...(doc.pages && {
      "numberOfPages": doc.pages
    })
  }
}
