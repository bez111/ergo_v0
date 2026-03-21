'use client'

import { useState } from 'react'
import { Twitter, Facebook, Linkedin, Link2, Check, Share2 } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  description: string
  url: string
}

export function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  const shareUrl = `https://www.ergoblockchain.org${url}?utm_source=share`
  const shareTagline = 'via @BuildOnErgo $ERG'
  
  // Twitter: Title + URL + tagline on one line
  const twitterText = `${title}\n${shareUrl} ${shareTagline}`
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`${title} ${shareTagline}`)}`
  }
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const handleNativeShare = async () => {
    const twitterTextForShare = `${title}\n${shareUrl} ${shareTagline}`
    
    // Only use native share on actual mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title,
          text: twitterTextForShare,
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          // Fallback to Twitter on error
          window.open(shareLinks.twitter, '_blank', 'noopener,noreferrer')
        }
      }
    } else {
      // Desktop fallback - open Twitter directly
      window.open(shareLinks.twitter, '_blank', 'noopener,noreferrer,width=600,height=400')
    }
  }
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400 mr-2">Share:</span>
      
      {/* Native share (mobile) */}
      {typeof window !== 'undefined' && 'share' in navigator && (
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-lg bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 lg:hidden"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4 text-gray-400 hover:text-orange-400" />
        </button>
      )}
      
      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
      </a>
      
      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-600/50 transition-all duration-300 group hidden sm:block"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
      </a>
      
      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-800/50 hover:bg-blue-700/20 border border-gray-700 hover:border-blue-700/50 transition-all duration-300 group hidden sm:block"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-700" />
      </a>
      
      {/* Copy link */}
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-lg bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Link2 className="w-4 h-4 text-gray-400 group-hover:text-orange-400" />
        )}
      </button>
      
      {copied && (
        <span className="text-xs text-green-400 font-mono animate-fade-in">
          Copied!
        </span>
      )}
    </div>
  )
} 