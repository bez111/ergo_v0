import { Metadata } from 'next'

/**
 * NoIndex layout for deep miner tooling documentation
 * Keep hub pages indexed, but deep tooling pages are too specific
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function MinerToolingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

