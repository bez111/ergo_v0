import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, DiscIcon as Discord, MessageSquare } from "lucide-react"

export function CommunitySection() {
  const communityLinks = [
    {
      name: "Discord",
      description: "Join our community chat",
      icon: Discord,
      url: "https://discord.gg/ergo",
      color: "bg-[#5865F2]/10 text-[#5865F2]",
    },
    {
      name: "Twitter",
      description: "Follow for updates",
      icon: Twitter,
      url: "https://twitter.com/ergoplatform",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
    },
    {
      name: "Forum",
      description: "Discuss and propose ideas",
      icon: MessageSquare,
      url: "https://forum.ergoplatform.org",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      name: "GitHub",
      description: "Contribute to the code",
      icon: Github,
      url: "https://github.com/ergoplatform",
      color: "bg-gray-900/10 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100",
    },
  ]

  return (
    <section className="container px-4 md:px-6 pb-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Community</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join the Ergo community and be part of building the future of blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communityLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-lg border p-6 hover:border-primary hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-3 ${link.color}`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">{link.name}</h3>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 rounded-lg border p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ready to contribute?</h3>
              <p className="text-muted-foreground">
                Ergo is an open platform where anyone can contribute. Join us in building the future of blockchain.
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="/community/contribute">
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
