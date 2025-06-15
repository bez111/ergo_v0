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
        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary font-mono">{title}</CardTitle>
            {description && <p className="text-gray-400 mt-2">{description}</p>}
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {terms.map((term, index) => (
                <AccordionItem key={index} value={`term-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-lg font-medium hover:text-primary">
                    {term.name}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-gray-300">{term.description}</p>
                    {term.relatedTerms && (
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Related Terms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {term.relatedTerms.map((relatedTerm, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                            >
                              {relatedTerm}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {term.examples && (
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Examples:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
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