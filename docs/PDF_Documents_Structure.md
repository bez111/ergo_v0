# PDF Documents Structure

This directory contains PDF documents for the Ergo Platform website.

## Directory Structure

```
public/docs/
├── whitepapers/     # Official whitepapers and specifications
├── research/        # Academic research papers
├── technical/       # Technical documentation and API references  
├── guides/          # User guides and tutorials
└── README.md        # This file
```

## How to Add PDF Documents

### 1. Place PDF files in appropriate directories:

- **Whitepapers**: `public/docs/whitepapers/`
  - Platform specifications
  - Foundational documents
  - Protocol descriptions

- **Research Papers**: `public/docs/research/`
  - Academic studies
  - Cryptographic research
  - Peer-reviewed papers

- **Technical Documentation**: `public/docs/technical/`
  - API references
  - Implementation details
  - Developer documentation

- **User Guides**: `public/docs/guides/`
  - How-to tutorials
  - Setup instructions
  - User manuals

### 2. File Naming Convention:

Use descriptive, URL-friendly names:
- `ergo-platform-whitepaper.pdf`
- `sigma-protocols-research.pdf`
- `ergoscript-language-reference.pdf`
- `mining-setup-guide.pdf`

### 3. Access URLs:

PDFs will be accessible via:
- Direct: `https://yoursite.com/api/pdf/whitepapers/filename.pdf`
- Page embed: Use `PDFViewer` component
- Download: Automatic with proper headers

### 4. Adding to Pages:

#### Option A: Embed PDF Viewer
```tsx
import { PDFViewer } from "@/components/pdf/pdf-viewer"

<PDFViewer 
  src="/api/pdf/whitepapers/ergo-whitepaper.pdf"
  title="Ergo Platform Whitepaper"
  description="Official platform specification"
  height="800px"
/>
```

#### Option B: Document List
```tsx
import { PDFList } from "@/components/pdf/pdf-viewer"

<PDFList documents={[
  {
    title: "Ergo Whitepaper",
    description: "Platform specification",
    path: "whitepapers/ergo-whitepaper.pdf",
    category: "Whitepaper",
    size: "2.1 MB",
    pages: 45
  }
]} />
```

## Security Features

- ✅ Path validation prevents directory traversal
- ✅ Proper Content-Type headers
- ✅ Security headers (CSP, X-Frame-Options)
- ✅ Caching optimization
- ✅ Error handling

## SEO Benefits

- ✅ Proper meta tags for PDF content
- ✅ Schema.org structured data
- ✅ Sitemap integration
- ✅ Social media previews
- ✅ Internal linking optimization

## Performance

- ✅ Lazy loading for embedded PDFs
- ✅ Caching headers (1 year cache)
- ✅ Compression support
- ✅ Progressive loading
