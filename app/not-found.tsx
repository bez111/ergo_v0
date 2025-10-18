import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Home, ArrowLeft, ExternalLink } from "lucide-react"
import { CyberButton } from "@/components/animations/cyber-button"

export default function NotFound() {
  const popularPages = [
    { title: "Technology", href: "/technology", description: "Core technical concepts" },
    { title: "Ecosystem", href: "/ecosystem", description: "Projects and applications" },
    { title: "Get Started", href: "/start", description: "Begin your Ergo journey" },
    { title: "Build", href: "/build", description: "Developer resources" },
    { title: "Use Cases", href: "/use", description: "What you can build" },
    { title: "Blog", href: "/blog", description: "Latest updates and insights" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 to-black" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Header */}
          <div className="mb-12">
            <h1 className="text-8xl md:text-9xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-white bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Page Not Found
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist. Let's help you find what you need.
            </p>
          </div>

          {/* Search Section */}
          <Card className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm mb-12 hover:border-orange-500/30 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Search className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-semibold text-white">Search Ergo Platform</h3>
              </div>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for topics, guides, or features..."
                  className="flex-1 px-4 py-3 bg-black/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                />
                <CyberButton className="bg-orange-500 text-white hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-6 py-3">
                  Search
                </CyberButton>
              </div>
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-white">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPages.map((page) => (
                <Card
                  key={page.href}
                  className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                      {page.title}
                    </h4>
                    <p className="text-neutral-400 text-sm mb-4">{page.description}</p>
                    <CyberButton
                      className="w-full gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3"
                      asChild
                    >
                      <Link href={page.href} className="inline-flex items-center gap-2">
                        Visit Page
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </CyberButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberButton
              className="gap-2 bg-orange-500 text-white hover:bg-orange-600 font-mono uppercase tracking-wider border-2 border-orange-500 px-6 py-3"
              asChild
            >
              <Link href="/" className="inline-flex items-center gap-2">
                <span>&gt;</span>
                <Home className="w-4 h-4" />
                <span>Go Home</span>
                <span className="animate-pulse">_</span>
              </Link>
            </CyberButton>
            
            <CyberButton
              className="gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3"
              asChild
            >
              <Link href="/technology" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Explore Technology
              </Link>
            </CyberButton>
          </div>
        </div>
      </div>
    </div>
  )
} 