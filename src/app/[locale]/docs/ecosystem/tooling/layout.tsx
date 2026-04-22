import { Metadata } from 'next'

/**
 * NoIndex layout: Deep ecosystem tooling projects — individual pages excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function EcosystemToolingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
