import { Metadata } from 'next'

/**
 * NoIndex layout: Deep ecosystem NFT projects — individual pages excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function EcosystemNftsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
