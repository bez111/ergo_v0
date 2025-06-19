import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, DiscIcon as Discord, Send, Shield, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-primary/30 bg-black relative overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-bold text-xl text-primary">
              ERGO
            </Link>
            <p className="text-sm text-gray-400 font-mono">
              A resilient platform for contractual money. Ergo Blockchain provides the tools for people to secure
              financial interactions.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-primary hover:bg-primary/10"
              >
                <Link href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-primary hover:bg-primary/10"
              >
                <Link href="https://twitter.com/ergoplatform" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-primary hover:bg-primary/10"
              >
                <Link href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer">
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium font-mono text-primary">QUICK LINKS</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/start" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Get Started
              </Link>
              <Link href="/use/get-erg" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Buy ERG
              </Link>
              <Link href="/use/mining" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Mine ERG
              </Link>
              <Link href="/wallet" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Wallets
              </Link>
              <Link href="/learn/faq" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                FAQ
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium font-mono text-primary">RESOURCES</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/build/docs" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Documentation
              </Link>
              <Link
                href="/technology/whitepaper"
                className="text-gray-400 hover:text-primary font-mono flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                Whitepaper
              </Link>
              <Link href="/learn" className="text-gray-400 hover:text-primary font-mono flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Learning Hub
              </Link>
              <Link
                href="/community/events"
                className="text-gray-400 hover:text-primary font-mono flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                Events
              </Link>
              <Link
                href="/ecosystem"
                className="text-gray-400 hover:text-primary font-mono flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                Projects
              </Link>
            </nav>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium font-mono text-primary">NEWSLETTER</div>
            <p className="text-sm text-gray-400 font-mono">
              Stay updated with the latest news and developments from the Ergo ecosystem.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="ENTER YOUR EMAIL"
                type="email"
                className="max-w-[220px] bg-black border border-primary/30 text-white font-mono placeholder:text-gray-600 focus:border-primary"
              />
              <Button size="icon" className="bg-transparent border border-primary text-primary hover:bg-primary/10">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <div className="text-xs text-gray-600 font-mono flex items-center gap-1">
              <Shield className="h-3 w-3 text-primary" />
              <span>YOUR DATA IS PRIVATE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/20 py-6 relative">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} ERGO PLATFORM. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm text-gray-500 font-mono">
            ERGO IS AN OPEN-SOURCE PROJECT.{" "}
            <Link href="https://github.com/ergoplatform" className="text-primary hover:underline">
              CONTRIBUTE ON GITHUB
            </Link>
          </p>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] bg-size-[100%_4px] animate-scanline pointer-events-none"></div>
      </div>
    </footer>
  )
}
