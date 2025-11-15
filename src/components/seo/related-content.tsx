"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, MessageCircle, FileText } from "lucide-react"

interface RelatedLink {
  title: string
  href: string
  description: string
  type: 'blog' | 'docs' | 'technology' | 'forum'
  category?: string
}

interface RelatedContentProps {
  title?: string
  links: RelatedLink[]
  className?: string
  showForumLink?: boolean
  forumThreadUrl?: string
}

export function RelatedContent({ 
  title = "Related Content", 
  links, 
  className = "",
  showForumLink = true,
  forumThreadUrl 
}: RelatedContentProps) {
  const getIcon = (type: RelatedLink['type']) => {
    switch (type) {
      case 'blog': return <BookOpen className="w-4 h-4" />
      case 'docs': return <FileText className="w-4 h-4" />
      case 'technology': return <FileText className="w-4 h-4" />
      case 'forum': return <MessageCircle className="w-4 h-4" />
      default: return <ArrowRight className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: RelatedLink['type']) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/10 border-blue-500/30 text-blue-400'
      case 'docs': return 'bg-green-500/10 border-green-500/30 text-green-400'
      case 'technology': return 'bg-purple-500/10 border-purple-500/30 text-purple-400'
      case 'forum': return 'bg-orange-500/10 border-orange-500/30 text-orange-400'
      default: return 'bg-gray-500/10 border-gray-500/30 text-gray-400'
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <Card className="bg-black/80 border border-white/10 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-400" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="block group hover:bg-white/5 rounded-lg p-3 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="text-orange-400 mt-1">
                  {getIcon(link.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-orange-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {link.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getTypeColor(link.type)}`}
                    >
                      {link.type}
                    </Badge>
                    {link.category && (
                      <Badge variant="outline" className="text-xs bg-gray-500/10 border-gray-500/30 text-gray-400">
                        {link.category}
                      </Badge>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
            </Link>
          ))}
          
          {/* Forum discussion link */}
          {showForumLink && (
            <div className="border-t border-white/10 pt-4">
              <Link 
                href={forumThreadUrl || "https://forum.ergoblockchain.org"}
                className="flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Discuss on Forum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}