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
        <Button variant="ghost" size="icon" className="md:hidden h-11 w-11">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0" aria-label="Mobile navigation menu">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Go to homepage">
            <span className="font-bold text-xl text-[hsl(30,98%,50%)]">ERGO</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 mt-8" role="navigation" aria-label="Main navigation">
          <div className="flex flex-col space-y-3">
            {items.map((item) =>
              item.children ? (
                <Accordion key={item.title} type="single" collapsible className="w-full">
                  <AccordionItem value={item.title} className="border-b-0">
                    <AccordionTrigger className="py-3 text-base min-h-[44px]">{getNavTitle(item.title)}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "py-3 px-2 text-base transition-colors hover:text-foreground/80 rounded-md min-h-[44px] flex items-center",
                              pathname === child.href ? "text-foreground bg-orange-500/10" : "text-foreground/60",
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
                    "py-3 px-2 text-base transition-colors hover:text-foreground/80 rounded-md min-h-[44px] flex items-center",
                    pathname === item.href ? "text-foreground font-medium bg-orange-500/10" : "text-foreground/60",
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
