export const metadata = {
  title: "Ergo Privacy — Sigma Protocols, Mixer, Confidential Assets",
  description: "Ergo bakes privacy into the protocol: Sigma protocols, ring/threshold signatures, ErgoMixer, confidential assets and selective disclosure.",
  alternates: { canonical: "https://ergoblockchain.org/technology/privacy-features" },
  openGraph: {
    type: "article",
    url: "https://ergoblockchain.org/technology/privacy-features",
    images: [{ url: "https://ergoblockchain.org/og/privacy.png" }],
  },
  twitter: { card: "summary_large_image" },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
} 