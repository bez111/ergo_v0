import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getMessages } from 'next-intl/server'
import { projects, getProjectBySlug, categoryLabels, type EcosystemProject } from "../_data"
import { getLocalizedProjectBySlug, type EcosystemTranslations } from "../ecosystem-i18n"
import ProjectClient from "./ProjectClient"
import { createBreadcrumbSchema, createFAQSchema, createSoftwareAppSchema } from "@/lib/seo"
import { renderSchemaScripts } from "@/components/seo/SEOSchemas"

export const revalidate = 600

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  
  // Get translations for non-English locales
  let project: EcosystemProject | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { ecosystemData?: EcosystemTranslations }
      project = getLocalizedProjectBySlug(slug, messages?.ecosystemData)
    } catch {
      project = getProjectBySlug(slug)
    }
  } else {
    project = getProjectBySlug(slug)
  }
  
  if (!project) {
    return { title: "Project Not Found | Ergo Ecosystem" }
  }

  const categoryLabel = categoryLabels[project.category] || project.category
  const title = `${project.name} | ${categoryLabel} on Ergo Blockchain`
  const description = project.longDescription 
    ? project.longDescription.split('\n\n')[0].slice(0, 160) 
    : project.description
  const canonical = `https://www.ergoblockchain.org/ecosystem/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: [{ url: "/og/hubs/ecosystem.png", width: 1200, height: 630 }],
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  
  // Get translations for non-English locales
  let project: EcosystemProject | undefined
  if (locale !== 'en') {
    try {
      const messages = await getMessages({ locale }) as { ecosystemData?: EcosystemTranslations }
      project = getLocalizedProjectBySlug(slug, messages?.ecosystemData)
    } catch {
      project = getProjectBySlug(slug)
    }
  } else {
    project = getProjectBySlug(slug)
  }

  if (!project) {
    notFound()
  }

  const categoryLabel = categoryLabels[project.category] || project.category
  const projectUrl = `/ecosystem/${project.slug}`

  // FAQ items
  const faqItems = project.faq && project.faq.length > 0 
    ? project.faq.map(item => ({ question: item.question, answer: item.answer }))
    : project.features && project.features.length > 0 
      ? [
          { question: `What is ${project.name}?`, answer: project.description },
          { question: `What features does ${project.name} offer?`, answer: `${project.name} offers: ${project.features.join(", ")}.` },
          { question: `What Ergo technologies does ${project.name} use?`, answer: project.technologies ? `${project.name} is built using ${project.technologies.join(", ")}.` : `${project.name} is built on Ergo blockchain using eUTXO model and ErgoScript.` },
        ]
      : []

  // SoftwareApplication schema
  const softwareAppSchema = createSoftwareAppSchema({
    name: project.name,
    description: project.description,
    applicationCategory: project.category === "DEFI" || project.category === "WALLETS" ? "FinanceApplication" :
                         project.category === "GAMING" ? "GameApplication" :
                         project.category === "TOOLS" ? "DeveloperApplication" : "WebApplication",
    operatingSystem: "Web, Windows, macOS, Linux, iOS, Android",
    url: project.url !== "#" ? project.url : undefined,
  })

  const schemas = [
    softwareAppSchema,
    createBreadcrumbSchema([
      { name: "Ecosystem", href: "/ecosystem" },
      { name: project.name, href: projectUrl },
    ]),
    ...(faqItems.length > 0 ? [createFAQSchema(faqItems)] : []),
  ]

  return (
    <>
      {renderSchemaScripts(schemas)}
      <ProjectClient project={project} categoryLabel={categoryLabel} />
    </>
  )
}
