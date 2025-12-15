import { Metadata } from 'next'

/**
 * NoIndex layout for deep ErgoScript documentation
 * These pages are too technical for general search - keep accessible but not indexed
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function ErgoscriptLanguagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

