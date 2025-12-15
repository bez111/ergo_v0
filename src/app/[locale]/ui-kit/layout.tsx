import { Metadata } from 'next'

/**
 * NoIndex layout for UI Kit - internal development tool
 * Should never be indexed
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function UiKitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
