import { Metadata } from 'next'

/**
 * NoIndex layout: Deep ecosystem financial projects — individual pages excluded from index
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function EcosystemFinancialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
