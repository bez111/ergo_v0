"use client"

import * as React from "react"
import Link from "next/link"
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
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl text-[hsl(30,98%,50%)]">ERGO</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex flex-col space-y-3">
            {items.map((item) =>
              item.children ? (
                <Accordion key={item.title} type="single" collapsible className="w-full">
                  <AccordionItem value={item.title} className="border-b-0">
                    <AccordionTrigger className="py-2 text-base">{getNavTitle(item.title)}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "py-1 text-base transition-colors hover:text-foreground/80",
                              pathname === child.href ? "text-foreground" : "text-foreground/60",
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
                    "py-2 text-base transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground font-medium" : "text-foreground/60",
                    item.disabled && "opacity-50 pointer-events-none",
                  )}
                >
                  {getNavTitle(item.title)}
                </Link>
              ),
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
