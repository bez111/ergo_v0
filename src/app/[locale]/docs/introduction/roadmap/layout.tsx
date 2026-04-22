import { Metadata } from 'next'

/**
 * NoIndex layout: Deep roadmap subpages — individual items excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function IntroRoadmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
