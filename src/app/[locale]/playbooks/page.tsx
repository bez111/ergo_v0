import { Metadata } from "next";
import { playbooks, playbookClusters } from "@/data/playbooks";
import { PlaybooksHubClient } from "./PlaybooksHubClient";

export const metadata: Metadata = {
  title: "Ergo Playbooks | Step-by-Step Guides for DeFi, Privacy, Mining & More",
  description:
    "Curated playbooks for building on Ergo. DeFi development, financial privacy, GPU mining, portfolio management, and more. Complete guides with infographics, articles, and HowTo steps.",
  keywords: [
    "ergo playbooks",
    "ergo guides",
    "ergo tutorials",
    "defi guide",
    "crypto privacy",
    "gpu mining guide",
    "ergo development",
  ],
  openGraph: {
    title: "Ergo Playbooks | Step-by-Step Guides",
    description:
      "Curated playbooks for building on Ergo. DeFi, privacy, mining, and more.",
    type: "website",
    url: "https://ergoblockchain.org/playbooks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ergo Playbooks | Step-by-Step Guides",
    description:
      "Curated playbooks for building on Ergo. DeFi, privacy, mining, and more.",
  },
  alternates: {
    canonical: "https://ergoblockchain.org/playbooks",
  },
};

export default function PlaybooksPage() {
  return <PlaybooksHubClient playbooks={playbooks} clusters={playbookClusters} />;
}

