"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Link2, 
  Check,
  MessageCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialShareProps {
  title: string
  url: string
  description?: string
  className?: string
}

export function SocialShare({ title, url, description, className }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)
  const encodedDescription = encodeURIComponent(description || title)

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=BuildOnErgo`,
      color: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: "hover:bg-blue-600/10 hover:text-blue-300 hover:border-blue-600/30",
      bgColor: "bg-blue-600/10",
      textColor: "text-blue-300"
    },
    {
      name: "Facebook",
      icon: Facebook, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
      color: "hover:bg-blue-700/10 hover:text-blue-200 hover:border-blue-700/30",
      bgColor: "bg-blue-700/10",
      textColor: "text-blue-200"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30", 
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-400"
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  return (
    <Card className={cn("bg-black border border-white/10 rounded-2xl", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-orange-400" />
            <h3 className="text-white font-semibold">Share this article</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white"
          >
            {isOpen ? 'Hide' : 'Show'}
          </Button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            {/* Social Media Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {shareLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 border-white/20 text-gray-300 transition-all duration-200",
                      social.color
                    )}
                    onClick={() => handleShare(social.url)}
                  >
                    <social.icon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{social.name}</span>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Copy URL */}
            <div className="flex gap-3">
              <div className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2">
                <p className="text-gray-300 text-sm font-mono truncate">{url}</p>
              </div>
              <Button
                variant="outline"
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

// Compact version for floating or inline use
export function CompactSocialShare({ title, url, className }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=BuildOnErgo`,
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "text-blue-300 hover:text-blue-200"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "text-cyan-400 hover:text-cyan-300"
    },
    {
      name: "Reddit",
      icon: Share2,
      url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: "text-red-400 hover:text-red-300"
    }
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      
      {shareLinks.map((social) => (
        <Button
          key={social.name}
          variant="ghost"
          size="sm"
          className={cn("h-8 w-8 p-0", social.color)}
          onClick={() => handleShare(social.url)}
          title={`Share on ${social.name}`}
        >
          <social.icon className="w-4 h-4" />
        </Button>
      ))}
      
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-orange-400 hover:text-orange-300"
        onClick={copyToClipboard}
        title="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Link2 className="w-4 h-4" />
        )}
      </Button>
    </div>
  )
}
