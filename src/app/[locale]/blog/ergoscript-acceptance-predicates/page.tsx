import type { Metadata } from "next"
import { siteConfig } from "@/config/site-config"
import { createBreadcrumbSchema, createFAQSchema, createTechArticleSchema, getAlternates, getCanonicalUrl } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"
import { AcceptancePredicatesClient } from "./AcceptancePredicatesClient"

const origin = siteConfig.siteUrl
const PATH = "/blog/ergoscript-acceptance-predicates"

const SEO = {
  title: "ErgoScript Acceptance Predicates: The Missing Primitive for Agent Payments",
  description: "Acceptance predicates embed task completion conditions directly in the payment UTxO — enforced on-chain by miners, no escrow, no oracle, no dispute resolution. Here is how to implement them.",
  image: "/og/agent-economy.png",
  keywords: ["ergoscript acceptance predicate", "on-chain task verification", "agent payment condition", "blake2b256 ergoscript", "conditional payment blockchain", "ergo agent payment", "trustless task payment", "eUTXO spending condition", "programmable payment ergo", "autonomous agent smart contract"],
}

const FAQ_ITEMS = [
  { question: "What is an acceptance predicate in ErgoScript?", answer: "An ErgoScript condition embedded in a UTxO's spending script that encodes the conditions under which a payment is valid — such as 'only redeem if the spender provides a value whose blake2b256 hash matches R6.' Enforced by miners, no trusted third party." },
  { question: "How does task hash verification work in Ergo?", answer: "The paying agent stores the expected task output hash in register R6 of the Note UTxO. The receiver provides the actual task output as context variable 0 when spending. ErgoScript runs blake2b256(output) and compares against R6. If equal, the spending succeeds." },
  { question: "Can acceptance predicates expire?", answer: "Yes — include HEIGHT < R5[Int].get in the predicate. If the deadline block passes without redemption, the Note can be recovered by the issuer." },
  { question: "Why use ErgoScript over Solidity for agent payments?", answer: "ErgoScript conditions are embedded directly in the UTxO — no separate contract deployment, no reentrancy risk, deterministic gas costs, formally verifiable. Solidity escrows are separate contracts with state that can be exploited and gas that's unpredictable." },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO.title,
    description: SEO.description,
    alternates: getAlternates(PATH, locale),
    keywords: SEO.keywords,
    openGraph: { type: "article", url: getCanonicalUrl(PATH, locale), siteName: "Ergo Platform", title: SEO.title, description: SEO.description, images: [{ url: `${origin}${SEO.image}`, width: 1200, height: 630, alt: SEO.title }], locale: "en_US", publishedTime: "2026-03-20T00:00:00Z", authors: ["Developer Relations"], tags: ["ErgoScript", "Agent Economy", "Smart Contracts", "Developer"] },
    twitter: { card: "summary_large_image", title: SEO.title, description: SEO.description, images: [`${origin}${SEO.image}`], site: siteConfig.twitterHandle },
    robots: { index: true, follow: true },
  }
}

export default function AcceptancePredicatesPage() {
  const schemas = [
    createTechArticleSchema("/blog/ergoscript-acceptance-predicates", { headline: SEO.title, description: SEO.description, image: SEO.image, datePublished: "2026-03-20", keywords: SEO.keywords, proficiencyLevel: "Advanced" }),
    createBreadcrumbSchema([{ name: "Blog", href: "/blog" }, { name: "ErgoScript Acceptance Predicates", href: "/blog/ergoscript-acceptance-predicates" }], false),
    createFAQSchema(FAQ_ITEMS),
  ]
  return <>{renderSchemaScripts(schemas)}<AcceptancePredicatesClient /></>
}
