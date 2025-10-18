export type HomeBlogPost = {
  title: string
  date: string
  summary: string
  link: string
}

export const homeBlogPosts: HomeBlogPost[] = [
  {
    title: "Ergo's Extended UTXO Model: A Deep Dive",
    date: "March 15, 2024",
    summary:
      "Exploring how Ergo's eUTXO model enables more secure and scalable smart contracts compared to traditional account-based models.",
    link: "/blog/eutxo-deep-dive",
  },
  {
    title: "Autolykos v2: The Future of ASIC-Resistant Mining",
    date: "March 10, 2024",
    summary:
      "Understanding Ergo's innovative mining algorithm and its role in maintaining network decentralization.",
    link: "/blog/autolykos-v2",
  },
  {
    title: "Building on Ergo: A Developer's Guide",
    date: "March 5, 2024",
    summary:
      "A comprehensive guide for developers looking to build decentralized applications on the Ergo platform.",
    link: "/blog/developer-guide",
  },
] 