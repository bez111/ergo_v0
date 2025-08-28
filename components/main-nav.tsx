"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { useTranslations } from "next-intl"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { mainNavItems } from "@/lib/navigation-data"

export function MainNav() {
  const t = useTranslations("navigation")
  const pathname = usePathname()
  const localizedPath = useLocalizedPath()

  // Function to get translated navigation title
  const getNavTitle = (title: string) => {
    const titleKey = title.toLowerCase()
    
    // Only translate main navigation items, not sub-items
    const mainNavKeys = ['start', 'use', 'ecosystem', 'technology', 'learn', 'docs', 'blog', 'home']
    
    if (mainNavKeys.includes(titleKey)) {
      try {
        return t(titleKey) || title
      } catch (error) {
        return title
      }
    }
    
    // Return original title for sub-items
    return title
  }

  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {mainNavItems
            .filter((item) => item.title.toLowerCase() !== "community")
            .map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    style={{ caretColor: "transparent", userSelect: "none" }}
                    className="font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
                  >
                    {getNavTitle(item.title)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/90 backdrop-blur-lg border border-primary/30">
                      {item.children.map((child) => (
                        <li key={child.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              href={localizedPath(child.href.startsWith('/') ? child.href.slice(1) : child.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary font-mono"
                            >
                              <div className="text-sm font-medium leading-none">{child.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {child.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={localizedPath(item.href.startsWith('/') ? item.href.slice(1) : item.href)}
                      style={{ caretColor: "transparent", userSelect: "none" }}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                        pathname === localizedPath(item.href.startsWith('/') ? item.href.slice(1) : item.href) && "text-primary font-medium",
                      )}
                    >
                      {getNavTitle(item.title)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/docs"
                style={{ caretColor: "transparent", userSelect: "none" }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                  pathname === "/docs" && "text-primary font-medium",
                )}
              >
                {t("docs") || "DOCS"}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/blog"
                style={{ caretColor: "transparent", userSelect: "none" }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                  pathname === "/blog" && "text-primary font-medium",
                )}
              >
                {t("blog") || "BLOG"}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
} 