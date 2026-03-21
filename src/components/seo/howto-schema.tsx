interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToData {
  name: string
  description: string
  image?: string
  totalTime?: string
  steps: HowToStep[]
  supply?: string[]
  tool?: string[]
}

export function HowToSchema({ 
  name, 
  description, 
  image = "https://www.ergoblockchain.org/og-image.png",
  totalTime = "PT15M",
  steps,
  supply = [],
  tool = []
}: HowToData) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "image": image,
    "totalTime": totalTime,
    "supply": supply.map(item => ({
      "@type": "HowToSupply",
      "name": item
    })),
    "tool": tool.map(item => ({
      "@type": "HowToTool", 
      "name": item
    })),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image ? { "image": step.image } : {}),
      ...(step.url ? { "url": step.url } : {})
    })),
    "author": {
      "@type": "Organization",
      "name": "Ergo Platform",
      "url": "https://www.ergoblockchain.org"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Ergo Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ergoblockchain.org/logo.png"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  )
} 