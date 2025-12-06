"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

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

  // Function to get translated navigation description
  const getNavDescription = (description: string) => {
    // Map descriptions to specific localization keys
    const descriptionMap: Record<string, string> = {
      "A brief overview of Ergo and its core purpose.": "quick_introduction_description",
      "How Ergo compares to Bitcoin, Ethereum, Solana and other blockchains.": "platform_comparison_description",
      "Find your personalized path—investor, developer, miner, NFT enthusiast, and more.": "onboarding_quiz_description",
      "Connect via Discord, Telegram, Reddit, and the official forum.": "join_the_community_description",
      "Answers to the most common questions for newcomers.": "faq_for_beginners_description",
      "Explore different ways to leverage Ergo's capabilities across various domains.": "use_cases_description",
      "Learn how to buy, exchange, or earn ERG (markets, P2P, exchanges, guides).": "get_erg_description",
      "Step-by-step tutorials for wallets, using dApps, transfers, 2FA setup, and more.": "how_to_guides_description",
      "Learn how to start mining, find mining pools, requirements, and beginner tips.": "mine_erg_description",
      "Discover where and how to earn through staking, farming, lending, lotteries.": "earn_with_defi_description",
      "All about network fees and paying them with different tokens.": "transaction_fees_babel_fees_description",
      "One-stop catalog of dApps, services, and community projects with advanced search and filters.": "explore_dapps_services_description",
      "Visual map of projects, tools, and teams with interactive clusters and filters.": "ecosystem_map_description",
      "List of mining pools and useful tools for miners.": "mining_pools_resources_description",
      "Opportunities for project grants and ecosystem funding.": "ecosystem_grants_funding_description",
      "Overview of Ergo's core technology and innovations.": "technology_overview_description",
      "An extended UTXO model delivering security and expressiveness for advanced smart contracts.": "eutxo_model_description",
      "A powerful and secure scripting language designed for developing complex and reliable financial contracts.": "ergoscript_description",
      "An ASIC-resistant Proof-of-Work algorithm promoting decentralization and long-term network security.": "secure_pow_autolykos_v2_description",
      "A mechanism to prevent blockchain bloat and ensure its long-term economic sustainability.": "storage_rent_description",
      "Innovative technology enabling ultra-secure and efficient light client operation.": "nipopows_description",
      "Advanced cryptographic capabilities for optionally enhancing the privacy of transactions and data.": "privacy_features_sigma_protocols_description",
      "Comprehensive ErgoScript tutorial series from beginner to expert level": "learn_ergoscript_description",
      "Academic research, whitepapers, and foundational studies.": "research_papers_description",
      "All guides and how-tos for users and developers in one place.": "user_developer_guides_description",
      "Answers to frequently asked questions and common issues.": "faq_description"
    }
    
    const descriptionKey = descriptionMap[description]
    
    // Always return original description if no mapping found
    if (!descriptionKey) {
      return description
    }

    // Try to get translation, but always fallback to original on any error
    try {
      return t(descriptionKey)
    } catch (error) {
      return description
    }
  }

  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {mainNavItems
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
                              href={localizedPath(child.href.startsWith("/") ? child.href.slice(1) : child.href)}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary font-mono"
                            >
                              <div className="text-sm font-medium leading-none">{getNavTitle(child.title)}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {getNavDescription(child.description)}
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
                      href={localizedPath(item.href.startsWith("/") ? item.href.slice(1) : item.href)}
                      style={{ caretColor: "transparent", userSelect: "none" }}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                        pathname === localizedPath(item.href.startsWith("/") ? item.href.slice(1) : item.href) &&
                          "text-primary font-medium",
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