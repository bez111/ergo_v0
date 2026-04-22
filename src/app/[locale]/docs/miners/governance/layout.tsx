import { Metadata } from 'next'

/**
 * NoIndex layout: Deep miner governance — individual pages excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function MinersGovernanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
