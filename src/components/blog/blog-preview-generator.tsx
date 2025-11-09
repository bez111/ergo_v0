"use client"

import { BlogPost } from "@/app/[locale]/blog/_lib/blog-data"

interface BlogPreviewProps {
  post: BlogPost
  width?: number
  height?: number
}

export function BlogPreviewGenerator({ post, width = 1200, height = 630 }: BlogPreviewProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Vision': 'from-purple-500 to-pink-500',
      'Tutorial': 'from-blue-500 to-cyan-500', 
      'Technology': 'from-orange-500 to-red-500',
      'Development': 'from-green-500 to-emerald-500',
      'Mining': 'from-yellow-500 to-orange-500',
      'Privacy': 'from-indigo-500 to-purple-500',
      'Ecosystem': 'from-pink-500 to-rose-500'
    }
    return colors[category as keyof typeof colors] || 'from-orange-500 to-red-500'
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Vision': '🎯',
      'Tutorial': '📚',
      'Technology': '⚡',
      'Development': '💻',
      'Mining': '⛏️',
      'Privacy': '🔒',
      'Ecosystem': '🌐'
    }
    return icons[category as keyof typeof icons] || '📝'
  }

  return (
    <div 
      className="relative overflow-hidden bg-black"
      style={{ width, height }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(post.category)} opacity-20`} />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-16">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-2xl font-bold text-black">
              E
            </div>
            <div>
              <div className="text-white font-bold text-2xl">Ergo Platform</div>
              <div className="text-gray-400 text-lg">Blog</div>
            </div>
          </div>
          
          <div className={`px-6 py-3 rounded-xl bg-gradient-to-r ${getCategoryColor(post.category)} text-white font-semibold text-lg flex items-center gap-2`}>
            <span className="text-2xl">{getCategoryIcon(post.category)}</span>
            {post.category}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          <h1 className="text-white font-bold text-6xl leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-gray-300 text-2xl leading-relaxed mb-8 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-8 text-gray-400 text-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                {post.author.name.charAt(0)}
              </div>
              {post.author.name}
            </div>
            
            <div className="flex items-center gap-2">
              📅 {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }).format(new Date(post.date))}
            </div>
            
            <div className="flex items-center gap-2">
              ⏱️ {post.readTime} min read
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-gray-500 text-lg">
            ergoblockchain.org/blog/{post.slug}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="text-gray-400 text-lg">
              Decentralized • Secure • Scalable
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
