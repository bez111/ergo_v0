import Script from 'next/script'

interface VideoSchemaProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string // ISO 8601 duration format (e.g., "PT5M30S")
  contentUrl: string
  embedUrl?: string
  clips?: {
    name: string
    startOffset: number
    endOffset: number
    url: string
  }[]
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  clips = []
}: VideoSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl: embedUrl || contentUrl,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: 0
    },
    ...(clips.length > 0 && {
      hasPart: clips.map(clip => ({
        "@type": "Clip",
        name: clip.name,
        startOffset: clip.startOffset,
        endOffset: clip.endOffset,
        url: clip.url
      }))
    }),
    potentialAction: clips.map(clip => ({
      "@type": "SeekToAction",
      target: `${contentUrl}?t=${clip.startOffset}`,
      startOffset: clip.startOffset,
      name: clip.name
    }))
  }

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      strategy="afterInteractive"
    />
  )
}

// Pre-defined video content
export const videoContent: Record<string, VideoSchemaProps> = {
  'ergo-intro': {
    name: 'Introduction to Ergo Blockchain',
    description: 'Learn the fundamentals of Ergo blockchain platform',
    thumbnailUrl: 'https://ergoblockchain.org/videos/ergo-intro-thumb.jpg',
    uploadDate: '2024-01-15T08:00:00Z',
    duration: 'PT5M30S',
    contentUrl: 'https://ergoblockchain.org/videos/ergo-intro.mp4',
    embedUrl: 'https://www.youtube.com/embed/abc123',
    clips: [
      {
        name: 'What is Ergo?',
        startOffset: 0,
        endOffset: 90,
        url: 'https://ergoblockchain.org/videos/ergo-intro.mp4#t=0'
      },
      {
        name: 'Key Features',
        startOffset: 90,
        endOffset: 210,
        url: 'https://ergoblockchain.org/videos/ergo-intro.mp4#t=90'
      },
      {
        name: 'Getting Started',
        startOffset: 210,
        endOffset: 330,
        url: 'https://ergoblockchain.org/videos/ergo-intro.mp4#t=210'
      }
    ]
  },
  'ergoscript-tutorial': {
    name: 'ErgoScript Tutorial for Beginners',
    description: 'Step-by-step guide to writing smart contracts in ErgoScript',
    thumbnailUrl: 'https://ergoblockchain.org/videos/ergoscript-thumb.jpg',
    uploadDate: '2024-01-20T10:00:00Z',
    duration: 'PT15M00S',
    contentUrl: 'https://ergoblockchain.org/videos/ergoscript-tutorial.mp4',
    clips: [
      {
        name: 'Setup Development Environment',
        startOffset: 0,
        endOffset: 180,
        url: 'https://ergoblockchain.org/videos/ergoscript-tutorial.mp4#t=0'
      },
      {
        name: 'First Smart Contract',
        startOffset: 180,
        endOffset: 540,
        url: 'https://ergoblockchain.org/videos/ergoscript-tutorial.mp4#t=180'
      },
      {
        name: 'Testing and Deployment',
        startOffset: 540,
        endOffset: 900,
        url: 'https://ergoblockchain.org/videos/ergoscript-tutorial.mp4#t=540'
      }
    ]
  }
}

export default VideoSchema 