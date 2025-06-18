import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

// Mock data for blog posts - in a real app, this would come from an API or CMS
const posts = [
  {
    title: "Ergo's Extended UTXO Model: A Deep Dive",
    date: "March 15, 2024",
    summary: "Exploring how Ergo's eUTXO model enables more secure and scalable smart contracts compared to traditional account-based models.",
    link: "/blog/eutxo-deep-dive"
  },
  {
    title: "Autolykos v2: The Future of ASIC-Resistant Mining",
    date: "March 10, 2024",
    summary: "Understanding Ergo's innovative mining algorithm and its role in maintaining network decentralization.",
    link: "/blog/autolykos-v2"
  },
  {
    title: "Building on Ergo: A Developer's Guide",
    date: "March 5, 2024",
    summary: "A comprehensive guide for developers looking to build decentralized applications on the Ergo platform.",
    link: "/blog/developer-guide"
  }
]

export function BlogSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-black border-t border-primary/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading text="LATEST FROM THE ERGO BLOG" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={post.link}
                className="group block bg-neutral-900/50 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-3">{post.date}</p>
                <p className="text-neutral-300 mb-4">{post.summary}</p>
                <span className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 