import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ergo Storage Rent — how it works, costs & estimator",
  description:
    "Predictable on-chain state budgeting in Ergo: why storage rent exists, how it works, how to avoid it, and an illustrative estimator.",
  alternates: { canonical: "https://ergoblockchain.org/technology/storage-rent" },
  openGraph: {
    type: "article",
    title: "Ergo Storage Rent",
    description: "Predictable state rent for long-term sustainability.",
    url: "https://ergoblockchain.org/technology/storage-rent",
    images: [{ url: "https://ergoblockchain.org/og/storage-rent.png" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function StorageRentLayout({ children }: { children: React.ReactNode }) {
  return children
} 