import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Home, ArrowLeft, ExternalLink } from "lucide-react"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumbs
          items={[
            { label: "404 - Page Not Found", href: "/404" }
          ]}
          className="mb-8"
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Header */}
          <div className="mb-12">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent mb-6">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. Let's help you find what you need.
            </p>
          </div>

          {/* Search Section */}
          <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Search className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-semibold">Search Ergo Platform</h3>
              </div>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search for topics, guides, or features..."
                  className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPages.map((page) => (
                <Card
                  key={page.href}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                      {page.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">{page.description}</p>
                    <Link href={page.href}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gray-600 hover:border-orange-500 hover:bg-orange-500/10"
                      >
                        Visit Page
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 rounded-xl"
            >
              <Link href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
            >
              <Link href="/technology" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Explore Technology
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 