"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "@/i18n/navigation"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
      // Build section (new)
      "Build on the agent economy stack": "build_description",
      "Why Ergo is the base layer for autonomous economic agents: credit, notes, programmable trust.": "agent_economy_description",
      "Technical architecture: Reserve · Note · Tracker · Predicate. With Fleet SDK code examples.": "agent_payments_description",
      "Three working flows on Ergo testnet: API call payment, credit system, community reserve.": "demos_description",
      "ErgoScript, SDKs (Fleet, AppKit, sigma-rust), patterns, playbooks, and grants.": "build_developers_description",
      "Copy-paste smart contract blueprints for common Ergo development patterns.": "dev_patterns_description",
      // Start section
      "Begin your journey with Ergo": "start_description",
      "Get started with Ergo blockchain in 3 simple steps: download a wallet, get ERG tokens, and make your first transaction.": "start_here_description",
      "A brief overview of Ergo's purpose, design principles, and core advantages over other blockchains.": "quick_introduction_description",
      "Compare Ergo to Bitcoin, Ethereum, Solana and other blockchains across key technical features.": "platform_comparison_description",
      "Find your personalized path on Ergo: investor, developer, miner, NFT creator, or everyday user.": "onboarding_quiz_description",
      "Connect with the Ergo community on Discord, Telegram, Reddit, X, and the official forum.": "join_the_community_description",
      "Answers to common questions about Ergo for beginners and advanced users.": "faq_for_beginners_description",
      // Use section
      "Practical guides and user how-tos": "use_description",
      "Practical use cases and patterns for payments, DeFi, NFTs, escrow, and micropayments.": "use_cases_description",
      "Buy or swap ERG tokens via exchanges, DEX platforms, and peer-to-peer options in your region.": "get_erg_description",
      "Start mining ERG: hardware requirements, mining pools, presets, profitability, and setup guides.": "mine_erg_description",
      "Where to earn yield on Ergo: staking, farming, lending, and liquidity provider fees.": "earn_with_defi_description",
      // Ecosystem section
      "Projects, dashboards, and partners": "ecosystem_description",
      "One comprehensive directory of wallets, bridges, tools, and community projects.": "explore_dapps_services_description",
      "Interactive visual map of projects, teams, and infrastructure building on Ergo.": "ecosystem_map_description",
      "Grants, bounties, and funding opportunities for ecosystem builders.": "ecosystem_grants_funding_description",
      // Technology section
      "Core technical concepts and innovations of Ergo": "technology_description",
      "The Ergo technology stack at a glance: architecture, security, and longevity.": "technology_overview_description",
      "Extended UTXO model enabling deterministic, composable smart contracts without global state.": "eutxo_model_description",
      "Expressive smart contract language with auditable spending conditions (AND/OR, ring, threshold).": "ergoscript_description",
      "ASIC-resistant, GPU-friendly Proof-of-Work algorithm ensuring fair distribution.": "secure_pow_autolykos_v2_description",
      "Recycles forgotten blockchain state and funds miners with predictable long-term costs.": "storage_rent_description",
      "Efficient light-client proofs enabling ultra-secure mobile wallet verification.": "nipopows_description",
      "Sigma protocols enabling selective disclosure with auditable, optional privacy features.": "privacy_features_sigma_protocols_description",
      // Learn section
      "Educational resources and learning materials": "learn_description",
      "Your starting point for mastering Ergo: guides, glossary, Q&A, playbooks, and more.": "learning_hub_description",
      "Definitions of key Ergo and blockchain terminology in one searchable reference.": "glossary_description",
      "Curated topic hubs grouping guides, FAQs, and resources by theme.": "topics_description",
      "Community-driven questions and answers about Ergo blockchain.": "qa_hub_description",
      "Step-by-step paths for DeFi, privacy, mining, and more.": "playbooks_description",
      "Smart-contract patterns and reusable blueprints for developers.": "dev_patterns_description",
      // Legacy mappings (keep for backward compat)
      "A brief overview of Ergo and its core purpose.": "quick_introduction_description",
      "How Ergo compares to Bitcoin, Ethereum, Solana and other blockchains.": "platform_comparison_description",
      "Find your personalized path—investor, developer, miner, NFT enthusiast, and more.": "onboarding_quiz_description",
      "Connect via Discord, Telegram, Reddit, and the official forum.": "join_the_community_description",
      "Answers to the most common questions for newcomers.": "faq_for_beginners_description",
      "Explore different ways to leverage Ergo's capabilities across various domains.": "use_cases_description",
      "One-stop catalog of dApps, services, and community projects with advanced search and filters.": "explore_dapps_services_description",
      "Visual map of projects, tools, and teams with interactive clusters and filters.": "ecosystem_map_description",
      "Opportunities for project grants and ecosystem funding.": "ecosystem_grants_funding_description",
      "Overview of Ergo's core technology and innovations.": "technology_overview_description",
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
                              href={child.href}
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
                      href={item.href}
                      style={{ caretColor: "transparent", userSelect: "none" }}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-mono uppercase tracking-wider text-sm bg-transparent hover:bg-primary/10 hover:text-primary",
                        pathname.endsWith(item.href) &&
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