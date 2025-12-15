"use client"

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import { Printer, Download, Share2, BookmarkPlus, Volume2, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface BlogActionsProps {
  title: string
  slug: string
}

export function BlogActions({ title, slug }: BlogActionsProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handlePrint = () => {
    // Add print-specific styles
    const printStyles = `
      @media print {
        body * {
          visibility: hidden;
        }
        .blog-content, .blog-content * {
          visibility: visible;
        }
        .blog-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
        a {
          color: inherit !important;
          text-decoration: none !important;
        }
        .bg-gray-900, .bg-gray-800 {
          background: white !important;
        }
        * {
          color: black !important;
          background: white !important;
        }
      }
    `
    
    const styleSheet = document.createElement("style")
    styleSheet.innerText = printStyles
    document.head.appendChild(styleSheet)
    
    window.print()
    
    // Clean up
    setTimeout(() => {
      document.head.removeChild(styleSheet)
    }, 1000)
  }

  const handleExportPDF = async () => {
    // Note: In production, you'd want to use a library like jsPDF or html2pdf
    // or generate PDFs server-side
    alert('PDF export functionality would be implemented here using a library like jsPDF')
  }

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel()
        setIsSpeaking(false)
      } else {
        const content = document.querySelector('.blog-content')?.textContent || ''
        const utterance = new SpeechSynthesisUtterance(content)
        utterance.rate = 1.0
        utterance.pitch = 1.0
        utterance.onend = () => setIsSpeaking(false)
        window.speechSynthesis.speak(utterance)
        setIsSpeaking(true)
      }
    } else {
      alert('Text-to-speech is not supported in your browser')
    }
  }

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('blog-bookmarks') || '[]')
    
    if (isBookmarked) {
      const filtered = bookmarks.filter((b: any) => b.slug !== slug)
      localStorage.setItem('blog-bookmarks', JSON.stringify(filtered))
      setIsBookmarked(false)
    } else {
      bookmarks.push({ slug, title, date: new Date().toISOString() })
      localStorage.setItem('blog-bookmarks', JSON.stringify(bookmarks))
      setIsBookmarked(true)
    }
  }

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/blog/${slug}?utm_source=share`
    const shareTagline = 'via @BuildOnErgo $ERG'
    const twitterText = `${title}\n${shareUrl} ${shareTagline}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`
    
    // Check if mobile (use navigator.share) or desktop (use Twitter URL directly)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: twitterText,
        })
      } catch {
        // Share cancelled - fallback to Twitter
        window.open(twitterUrl, '_blank', 'noopener,noreferrer')
      }
    } else {
      // Desktop: always use Twitter URL directly for consistent formatting
      window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
    }
  }

  return (
    <motion.div 
      className="flex flex-wrap gap-2 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrint}
        className="text-gray-400 hover:text-orange-400 hover:border-orange-400"
      >
        <Printer className="w-4 h-4 mr-2" />
        Print
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleExportPDF}
        className="text-gray-400 hover:text-orange-400 hover:border-orange-400"
      >
        <Download className="w-4 h-4 mr-2" />
        Export PDF
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleTextToSpeech}
        className="text-gray-400 hover:text-orange-400 hover:border-orange-400"
      >
        {isSpeaking ? (
          <>
            <VolumeX className="w-4 h-4 mr-2" />
            Stop Reading
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 mr-2" />
            Read Aloud
          </>
        )}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleBookmark}
        className={`${
          isBookmarked 
            ? 'text-orange-400 border-orange-400' 
            : 'text-gray-400 hover:text-orange-400 hover:border-orange-400'
        }`}
      >
        <BookmarkPlus className="w-4 h-4 mr-2" />
        {isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleShare}
        className="text-gray-400 hover:text-orange-400 hover:border-orange-400"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </Button>
    </motion.div>
  )
} 