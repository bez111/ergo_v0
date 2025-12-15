import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { SchemaOrg } from "@/components/seo/schema-org"
import { DefinedTerm, DefinedTermSet } from "@/types/schema"

interface GlossarySectionProps {
  terms: DefinedTerm[]
  title?: string
  description?: string
}

export function GlossarySection({ terms, title = "Glossary", description }: GlossarySectionProps) {
  const glossarySchema: DefinedTermSet = {
    '@type': 'DefinedTermSet',
    name: title,
    description: description || 'Technical terms and definitions related to Ergo Platform',
    hasDefinedTerm: terms
  }

  return (
    <section className="py-12">
      <SchemaOrg type="DefinedTermSet" data={glossarySchema} />
      <FadeIn>
        <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-700 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
            {description && <p className="text-neutral-300 mt-2">{description}</p>}
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {terms.map((term, index) => (
                <AccordionItem key={index} value={`term-${index}`} className="border-neutral-800">
                  <AccordionTrigger className="text-lg font-medium text-neutral-200 hover:text-orange-400 data-[state=open]:text-orange-400 hover:bg-orange-500/10 rounded-md">
                    {term.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-neutral-300">
                    <p className="text-neutral-300">{term.description}</p>
                    {term.relatedTerms && (
                      <div>
                        <h4 className="text-sm font-medium text-orange-400 mb-2">Related Terms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {term.relatedTerms.map((relatedTerm, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-neutral-900/60 text-neutral-200 border border-neutral-700 rounded-md text-xs"
                            >
                              {relatedTerm}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {term.examples && (
                      <div>
                        <h4 className="text-sm font-medium text-orange-400 mb-2">Examples:</h4>
                        <ul className="list-disc list-inside space-y-1 text-neutral-300">
                          {term.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  )
} 