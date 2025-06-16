import { SchemaOrg } from '@/components/seo/schema-org'
import Image from "next/image"

interface HowToStep {
  name: string
  text: string
  image?: string
}

interface HowToSectionProps {
  title: string
  description: string
  steps: HowToStep[]
}

export function HowToSection({ title, description, steps }: HowToSectionProps) {
  return (
    <>
      <SchemaOrg
        type="HowTo"
        data={{
          title,
          description,
          steps: steps.map((step) => ({
            name: step.name,
            text: step.text,
            image: step.image,
          })),
        }}
      />
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                  <div className="prose max-w-none">{step.text}</div>
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.name}
                      width={400}
                      height={300}
                      className="mt-4 rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 