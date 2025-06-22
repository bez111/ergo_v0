"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
  const pathname = usePathname()

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
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black/90 backdrop-blur-lg border border-primary/30">
                      {item.children.map((child) => (
                        <li key={child.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
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
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      style={{ caretColor: "transparent", userSelect: "none" }}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                        pathname === item.href && "text-primary font-medium",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink
                style={{ caretColor: "transparent", userSelect: "none" }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                  pathname === "/blog" && "text-primary font-medium",
                )}
              >
                BLOG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
} 