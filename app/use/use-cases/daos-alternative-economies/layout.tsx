import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DAOs & Alternative Economies on Ergo | Decentralized Governance",
  description: "Build DAOs and alternative economic systems on Ergo. Treasury management, on-chain voting, profit sharing, and composable governance infrastructure.",
  keywords: "DAOs, decentralized governance, alternative economies, Paideia, treasury management, on-chain voting, Ergo DAO",
  openGraph: {
    title: "DAOs & Alternative Economies on Ergo",
    description: "Community governance and alternative economic systems on Ergo blockchain.",
    images: ["/og-daos.png"],
    type: "website",
    url: "https://ergoblockchain.org/use/use-cases/daos-alternative-economies",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAOs on Ergo",
    description: "Build decentralized organizations with Paideia",
    images: ["/og-daos.png"],
  },
  alternates: {
    canonical: "https://ergoblockchain.org/use/use-cases/daos-alternative-economies",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
} 