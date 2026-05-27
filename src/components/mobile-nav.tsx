"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from "react"
import { Link } from "@/i18n/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface MobileNavProps {
  items: {
    title: string
    href?: string
    description?: string
    disabled?: boolean
    children?: {
      title: string
      href: string
      description?: string
    }[]
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const t = useTranslations("navigation")

  // Function to get translated navigation title
  const getNavTitle = (title: string) => {
    // Hardcode "Start Here" to avoid localization issues
    if (title === "Start Here") {
      return "Start Here"
    }
    if (title === "Agents") {
      return "Agents"
    }
    if (title === "First Receipt" || title === "First Receipt Flow") {
      return title
    }
    if (title === "ErgoConnect") {
      return "ErgoConnect"
    }
    if (title === "Publish Service") {
      return "Publish Service"
    }
    
    const titleKey = title.toLowerCase()
    
    try {
      return t(titleKey) || title
    } catch (error) {
      // Fallback to original title if translation fails
      return title
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-[100dvh] max-h-[100dvh] w-[min(92vw,26rem)] flex-col overflow-hidden border-l border-orange-500/20 bg-black/95 px-0 pb-0 pt-0 text-white backdrop-blur-xl sm:max-w-sm"
        aria-label="Mobile navigation menu"
      >
        <div className="shrink-0 border-b border-white/10 bg-black/80 px-6 pb-4 pt-[calc(1.25rem+env(safe-area-inset-top))]">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Go to homepage">
            <span className="font-bold text-xl text-[hsl(30,98%,50%)]">ERGO</span>
          </Link>
        </div>
        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-4 [scrollbar-color:rgba(249,115,22,0.55)_transparent] [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex flex-col space-y-3">
            {items.map((item) =>
              item.children ? (
                <Accordion key={item.title} type="single" collapsible className="w-full">
                  <AccordionItem value={item.title} className="border-b-0">
                    <AccordionTrigger className="min-h-[46px] max-w-full rounded-md border border-white/8 bg-white/[0.025] px-3 py-3 text-left text-base leading-snug no-underline hover:no-underline data-[state=open]:border-orange-500/30 data-[state=open]:bg-orange-500/10 data-[state=open]:text-orange-200">
                      {getNavTitle(item.title)}
                    </AccordionTrigger>
                    <AccordionContent className="pb-1 pt-2">
                      <div className="flex flex-col space-y-1 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex min-h-[42px] max-w-full items-center rounded-md border border-transparent px-3 py-2.5 text-sm leading-snug transition-colors hover:border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-100",
                              pathname === child.href ? "border-orange-500/25 bg-orange-500/10 text-orange-100" : "text-foreground/65",
                            )}
                          >
                            {getNavTitle(child.title)}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  key={item.title}
                  href={item.href || "#"}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-[46px] max-w-full items-center rounded-md border border-white/8 bg-white/[0.025] px-3 py-3 text-base leading-snug transition-colors hover:border-orange-500/20 hover:bg-orange-500/10 hover:text-orange-100",
                    pathname === item.href ? "border-orange-500/25 bg-orange-500/10 text-orange-100" : "text-foreground/70",
                    item.disabled && "opacity-50 pointer-events-none",
                  )}
                >
                  {getNavTitle(item.title)}
                </Link>
              ),
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
