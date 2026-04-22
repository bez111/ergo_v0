import { Metadata } from 'next'

/**
 * NoIndex layout: Deep ecosystem standards — individual pages excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function EcosystemStandardsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
