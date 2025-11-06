"use client"

import { useState } from 'react'
import { Download, ExternalLink, FileText, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PDFViewerProps {
  src: string
  title: string
  description?: string
  downloadName?: string
  height?: string
  showDownload?: boolean
  showExternalLink?: boolean
}

export function PDFViewer({ 
  src, 
  title, 
  description, 
  downloadName, 
  height = "600px",
  showDownload = true,
  showExternalLink = true 
}: PDFViewerProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => setLoading(false)
  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  const downloadUrl = src.startsWith('/') ? src : `/api/pdf/${src}`
  const viewUrl = downloadUrl

  return (
    <Card className="bg-black/80 border border-white/10 rounded-3xl backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" />
              {title}
            </CardTitle>
            {description && (
              <p className="text-neutral-400 text-sm mt-2">{description}</p>
            )}
          </div>
          
          <div className="flex gap-2">
            {showDownload && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
              >
                <a 
                  href={downloadUrl} 
                  download={downloadName || title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </a>
              </Button>
            )}
            
            {showExternalLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a 
                  href={viewUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Open
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="relative" style={{ height }}>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Loader2 className="w-8 h-8 text-orange-400 animate-spin" />
            </div>
          )}
          
          {error ? (
            <div className="flex items-center justify-center h-full bg-black/60 text-center p-8">
              <div>
                <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                <p className="text-neutral-400 mb-4">Unable to load PDF preview</p>
                <Button asChild variant="outline" className="border-orange-500/30 text-orange-400">
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <iframe
              src={viewUrl}
              className="w-full h-full rounded-b-3xl"
              onLoad={handleLoad}
              onError={handleError}
              title={`PDF: ${title}`}
              loading="lazy"
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Компонент для списка PDF документов
interface PDFListProps {
  documents: Array<{
    title: string
    description: string
    path: string
    category: string
    size?: string
    pages?: number
  }>
}

export function PDFList({ documents }: PDFListProps) {
  return (
    <div className="grid gap-4">
      {documents.map((doc, index) => (
        <Card key={index} className="bg-black/80 border border-white/10 rounded-2xl hover:bg-black/90 hover:border-orange-400/40 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <h3 className="text-white font-semibold">{doc.title}</h3>
                  <span className="px-2 py-1 rounded-full text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {doc.category}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-3">{doc.description}</p>
                <div className="flex gap-4 text-xs text-neutral-500">
                  {doc.size && <span>Size: {doc.size}</span>}
                  {doc.pages && <span>Pages: {doc.pages}</span>}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                >
                  <a 
                    href={`/api/pdf/${doc.path}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <a 
                    href={`/api/pdf/${doc.path}`} 
                    download={doc.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
