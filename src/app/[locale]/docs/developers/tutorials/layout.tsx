import { Metadata } from 'next'

/**
 * NoIndex layout: Deep developer tutorials — too specific for general search
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
}

export default function DevTutorialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
