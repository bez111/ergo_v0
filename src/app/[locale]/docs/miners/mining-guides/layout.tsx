import { Metadata } from 'next'

/**
 * NoIndex layout for individual mining guide pages
 * The main /miners page serves as the indexed hub
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function MiningGuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

