"use client"

import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Share2, Link2, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type ShareInlineProps = {
  title: string
  url: string
  utm?: string
  className?: string
}

export function ShareInline({ title, url, utm = "", className }: ShareInlineProps) {
  const shareUrl = `${url}${utm}`
  const shareTagline = '@BuildOnErgo $ERG'
  const twitterText = `${title}\n${shareUrl} ${shareTagline}`
  const telegramText = `${title} ${shareTagline}`
  const encoded = encodeURIComponent
  const links = {
    x: `https://twitter.com/intent/tweet?text=${encoded(twitterText)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encoded(shareUrl)}&text=${encoded(telegramText)}`,
    reddit: `https://www.reddit.com/submit?url=${encoded(shareUrl)}&title=${encoded(title)}`,
  }


  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({ title: "Link copied", description: "Thanks for sharing Ergo!", duration: 1500 })
    } catch {
      toast({ title: "Copy failed", description: shareUrl, duration: 2000 })
    }
  }

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: links.x,
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: links.linkedin,
      color: "text-blue-300 hover:text-blue-200"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: links.telegram,
      color: "text-cyan-400 hover:text-cyan-300"
    },
    {
      name: "Reddit",
      icon: Share2,
      url: links.reddit,
      color: "text-red-400 hover:text-red-300"
    }
  ]

  return (
    <div className={cn("mt-6 flex items-center gap-3", className)}>
      {/* Оранжевая неактивная кнопка Share */}
      <div className="h-8 rounded-full px-3 text-xs font-semibold text-black bg-orange-500 shadow-sm cursor-default flex items-center">
        <Share2 className="mr-1.5 h-3.5 w-3.5" />
        Share
      </div>

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
        onClick={copyLink}
        title="Copy link"
      >
        <Link2 className="w-4 h-4" />
      </Button>
    </div>
  )
}