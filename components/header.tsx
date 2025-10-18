"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Search, Wallet } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { mainNavItems } from "@/lib/navigation-data"
import DocsSearchModal from "./DocsSearchModal";
import LanguageSwitcher from "./language-switcher";
import { CyberButton } from "@/components/animations/cyber-button"

export function Header() {
  const t = useTranslations("navigation")
  const [scrolled, setScrolled] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 200)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [isMounted])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-primary/20 backdrop-blur transition-all duration-300",
          scrolled ? "bg-black/80" : "bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <span
                className={cn(
                  "font-bold text-xl text-primary transition-all duration-300",
                  glitchActive && "ergo-glitch",
                )}
              >
                ERGO
              </span>
            </Link>

            <MainNav />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("searchAriaLabel") || "Search"}
              className="text-white hover:text-primary hover:bg-primary/10"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <CyberButton
              className="hidden md:flex gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-mono uppercase tracking-wider px-6 py-3"
              asChild
            >
              <Link href="/wallet" className="inline-flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <span>{t("getWallet") || "Get Wallet"}</span>
              </Link>
            </CyberButton>

            <LanguageSwitcher />
            
            <ModeToggle />

            <MobileNav items={mainNavItems} />
          </div>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)] bg-size-[100%_4px] animate-scanline pointer-events-none"></div>
      </header>
      <DocsSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
