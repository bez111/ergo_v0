import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects, getProjectBySlug, categoryLabels } from "../_data"
import ProjectClient from "./ProjectClient"

export const revalidate = 600

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each project
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Project Not Found | Ergo Ecosystem",
    }
  }

  const categoryLabel = categoryLabels[project.category] || project.category
  const title = `${project.name} | ${categoryLabel} on Ergo Blockchain`
  // Use first paragraph of longDescription if available, otherwise use description
  const description = project.longDescription 
    ? project.longDescription.split('\n\n')[0].slice(0, 160) 
    : project.description
  const canonical = `https://ergo.blockchain.org/ecosystem/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: "/og/ecosystem.png", width: 1200, height: 630 }],
      siteName: "Ergo Platform",
      locale: "en_US",
    },
    twitter: { 
      card: "summary_large_image", 
      site: "@ergoplatform", 
      creator: "@ergoplatform",
      title,
      description,
    },
    robots: { index: true, follow: true },
    keywords: [
      project.name,
      categoryLabel,
      "Ergo",
      "Blockchain",
      "dApp",
      ...(project.technologies || []),
      ...(project.features || []).slice(0, 5),
    ],
  }
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const categoryLabel = categoryLabels[project.category] || project.category

  // Schema.org SoftwareApplication
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://ergo.blockchain.org/ecosystem/${project.slug}#app`,
    name: project.name,
    description: project.description,
    url: project.url !== "#" ? project.url : `https://ergo.blockchain.org/ecosystem/${project.slug}`,
    applicationCategory: 
      project.category === "DEFI" ? "FinanceApplication" :
      project.category === "WALLETS" ? "FinanceApplication" :
      project.category === "GAMING" ? "GameApplication" :
      project.category === "TOOLS" ? "DeveloperApplication" :
      "WebApplication",
    operatingSystem: "Web, Windows, macOS, Linux, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: project.name,
      url: project.url !== "#" ? project.url : undefined,
    },
    isPartOf: {
      "@type": "SoftwareSourceCode",
      name: "Ergo Blockchain Ecosystem",
      url: "https://ergo.blockchain.org/ecosystem",
    },
  }

  // Breadcrumbs Schema
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ergo.blockchain.org/ecosystem/${project.slug}#breadcrumbs`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ergo.blockchain.org/" },
      { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://ergo.blockchain.org/ecosystem" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://ergo.blockchain.org/ecosystem/${project.slug}` },
    ],
  }

  // FAQ Schema - use project's custom FAQ if available, otherwise generate from features
  const faqItems = project.faq && project.faq.length > 0 
    ? project.faq.map(item => ({
        "@type": "Question" as const,
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: item.answer,
        },
      }))
    : project.features && project.features.length > 0 
      ? [
          {
            "@type": "Question" as const,
            name: `What is ${project.name}?`,
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: project.description,
            },
          },
          {
            "@type": "Question" as const,
            name: `What features does ${project.name} offer?`,
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: `${project.name} offers the following features: ${project.features.join(", ")}.`,
            },
          },
          {
            "@type": "Question" as const,
            name: `What Ergo technologies does ${project.name} use?`,
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: project.technologies 
                ? `${project.name} is built using ${project.technologies.join(", ")}.`
                : `${project.name} is built on the Ergo blockchain using eUTXO model and ErgoScript.`,
            },
          },
        ]
      : null

  const faqSchema = faqItems ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://ergo.blockchain.org/ecosystem/${project.slug}#faq`,
    mainEntity: faqItems,
  } : null

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} 
      />
      {faqSchema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
      )}
      <ProjectClient project={project} categoryLabel={categoryLabel} />
    </>
  )
}

