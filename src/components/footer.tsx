"use client"

import Link from "next/link"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")
  const localizedPath = useLocalizedPath()
  
  return (
    <footer className="border-t border-primary/30 bg-black relative overflow-hidden z-50">
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container py-12 md:py-16 relative z-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="font-medium font-mono text-primary">{t("platform") || "PLATFORM"}</div>
            <nav className="flex flex-col gap-2">
              <Link href={localizedPath("technology")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("technology") || "Technology"}
              </Link>
              <Link href={localizedPath("use")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("useCases") || "Use Cases"}
              </Link>
              <Link href={localizedPath("ecosystem")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("ecosystem") || "Ecosystem"}
              </Link>
              <Link href={localizedPath("wallet")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("wallets") || "Wallets"}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium font-mono text-primary">{t("developers") || "DEVELOPERS"}</div>
            <nav className="flex flex-col gap-2">
              <Link href={localizedPath("docs")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("documentation") || "Documentation"}
              </Link>
              <Link href={localizedPath("learn")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("learn") || "Learn"}
              </Link>
              <Link href="https://github.com/ergoplatform" className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("github") || "GitHub"}
              </Link>
              <Link href={localizedPath("ecosystem/grants")} className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("grants") || "Grants"}
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-medium font-mono text-primary">{t("community") || "COMMUNITY"}</div>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("blog") || "Blog"}
              </Link>
              <Link href="https://discord.com/invite/ergo-platform-668903786361651200" className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("discord") || "Discord"}
              </Link>
              <Link href="https://t.me/BuildOnErgo" className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("telegram") || "Telegram"}
              </Link>
              <Link href="https://x.com/BuildOnErgo" className="text-sm text-gray-400 hover:text-primary transition-colors font-mono">
                {t("twitter") || "Twitter"}
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/20 py-6 relative z-20">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-300 font-mono">
            © {new Date().getFullYear()} ERGO {t("platform") || "PLATFORM"}. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm text-gray-300 font-mono">
            {t("openSource") || "ERGO IS AN OPEN-SOURCE PROJECT."}{" "}
            <Link href="https://github.com/ergoplatform" className="text-primary hover:underline">
              {t("contributeOnGithub") || "CONTRIBUTE ON GITHUB"}
            </Link>
          </p>
        </div>

        {/* Scanline effect */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] bg-size-[100%_4px] animate-scanline pointer-events-none"></div> */}
      </div>
    </footer>
  )
}
