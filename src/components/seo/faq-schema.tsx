"use client"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  pageUrl?: string
}

export function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": pageUrl ? `${pageUrl}#faq` : undefined,
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": pageUrl ? `${pageUrl}#faq-${index + 1}` : undefined,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}