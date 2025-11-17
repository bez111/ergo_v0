import { 
  Globe,
  FileText,
  MessageSquare,
  Users,
  Share2,
  Target,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  Code,
  Clock,
  Eye,
  Play,
  Rocket
} from "lucide-react"

export const coreChannels = [
  { 
    name: "ergoblockchain.org", 
    description: "Article in blog + internal links", 
    icon: Globe,
    url: "https://ergoblockchain.org/blog",
    actionText: "Visit Blog"
  },
  { 
    name: "Beehiiv Newsletter", 
    description: "Digest or dedicated issue", 
    icon: FileText,
    url: "https://ergoblockchain.beehiiv.com/subscribe",
    actionText: "Subscribe"
  },
  { 
    name: "Telegram", 
    description: "Marketing Community", 
    icon: MessageSquare,
    url: "https://t.me/ErgoSocials",
    actionText: "Join Channel"
  },
  { 
    name: "Ergo Discord", 
    description: "#announcements, #general, #dev, #research", 
    icon: Users,
    url: "https://discord.gg/ergo-platform-668903786361651200",
    actionText: "Join Discord"
  },
  { 
    name: "Reddit r/ergonauts", 
    description: "Community discussions", 
    icon: MessageSquare,
    url: "https://reddit.com/r/ergonauts",
    actionText: "Visit Subreddit"
  },
  { 
    name: "X (Twitter)", 
    description: "Thread/tweet series + link", 
    icon: Share2,
    url: "https://twitter.com/BuildOnErgo",
    actionText: "Follow @BuildOnErgo"
  }
]

export const redditCategories = [
  {
    title: "General Crypto",
    icon: TrendingUp,
    description: "For crypto comparisons, DeFi, PoW, network economics",
    subs: [
      { name: "r/CryptoCurrency", url: "https://reddit.com/r/CryptoCurrency", members: "7.1M" },
      { name: "r/cryptocurrency", url: "https://reddit.com/r/cryptocurrency", members: "2.1M" },
      { name: "r/altcoin", url: "https://reddit.com/r/altcoin", members: "180K" },
      { name: "r/cryptomarkets", url: "https://reddit.com/r/cryptomarkets", members: "1.8M" },
      { name: "r/CryptoTechnology", url: "https://reddit.com/r/CryptoTechnology", members: "340K" },
      { name: "r/defi", url: "https://reddit.com/r/defi", members: "380K" },
      { name: "r/DeFi", url: "https://reddit.com/r/DeFi", members: "120K" },
      { name: "r/Bitcoin", url: "https://reddit.com/r/Bitcoin", members: "5.2M" },
      { name: "r/BitcoinBeginners", url: "https://reddit.com/r/BitcoinBeginners", members: "290K" }
    ]
  },
  {
    title: "Privacy / Cypherpunk",
    icon: Shield,
    description: "Privacy, programmable privacy, crypto-anarchy",
    subs: [
      { name: "r/privacy", url: "https://reddit.com/r/privacy", members: "1.1M" },
      { name: "r/PrivacyGuides", url: "https://reddit.com/r/PrivacyGuides", members: "280K" },
      { name: "r/privacytoolsIO", url: "https://reddit.com/r/privacytoolsIO", members: "150K" },
      { name: "r/cypherpunk", url: "https://reddit.com/r/cypherpunk", members: "25K" },
      { name: "r/CryptoAnarchy", url: "https://reddit.com/r/CryptoAnarchy", members: "15K" },
      { name: "r/Monero", url: "https://reddit.com/r/Monero", members: "340K" },
      { name: "r/ZCash", url: "https://reddit.com/r/ZCash", members: "45K" }
    ]
  },
  {
    title: "Mining & PoW",
    icon: Zap,
    description: "ERG mining, PoW vs PoS, mining economics",
    subs: [
      { name: "r/gpumining", url: "https://reddit.com/r/gpumining", members: "180K" },
      { name: "r/cryptomining", url: "https://reddit.com/r/cryptomining", members: "95K" },
      { name: "r/EtherMining", url: "https://reddit.com/r/EtherMining", members: "420K" },
      { name: "r/Mining", url: "https://reddit.com/r/Mining", members: "85K" }
    ]
  },
  {
    title: "Economics & History",
    icon: DollarSign,
    description: "Perfect for History of Money series",
    subs: [
      { name: "r/Economics", url: "https://reddit.com/r/Economics", members: "1.5M" },
      { name: "r/AskEconomics", url: "https://reddit.com/r/AskEconomics", members: "180K" },
      { name: "r/Gold", url: "https://reddit.com/r/Gold", members: "220K" },
      { name: "r/Silverbugs", url: "https://reddit.com/r/Silverbugs", members: "190K" },
      { name: "r/Libertarian", url: "https://reddit.com/r/Libertarian", members: "480K" },
      { name: "r/Anarcho_Capitalism", url: "https://reddit.com/r/Anarcho_Capitalism", members: "220K" },
      { name: "r/geopolitics", url: "https://reddit.com/r/geopolitics", members: "1.2M" },
      { name: "r/AskHistorians", url: "https://reddit.com/r/AskHistorians", members: "1.8M" }
    ]
  },
  {
    title: "Dev & Tech",
    icon: Code,
    description: "eUTXO, ErgoScript, Sigma protocols, dev guides",
    subs: [
      { name: "r/programming", url: "https://reddit.com/r/programming", members: "4.2M" },
      { name: "r/cryptodevs", url: "https://reddit.com/r/cryptodevs", members: "45K" },
      { name: "r/ProgrammingLanguages", url: "https://reddit.com/r/ProgrammingLanguages", members: "85K" },
      { name: "r/rust", url: "https://reddit.com/r/rust", members: "180K" },
      { name: "r/scala", url: "https://reddit.com/r/scala", members: "25K" },
      { name: "r/webdev", url: "https://reddit.com/r/webdev", members: "3.2M" },
      { name: "r/reactjs", url: "https://reddit.com/r/reactjs", members: "280K" },
      { name: "r/Frontend", url: "https://reddit.com/r/Frontend", members: "95K" },
      { name: "r/crypto", url: "https://reddit.com/r/crypto", members: "140K" },
      { name: "r/cryptography", url: "https://reddit.com/r/cryptography", members: "180K" },
      { name: "r/ethereum", url: "https://reddit.com/r/ethereum", members: "1.8M" },
      { name: "r/cardano", url: "https://reddit.com/r/cardano", members: "680K" },
      { name: "r/Bitcoin", url: "https://reddit.com/r/Bitcoin", members: "5.2M" },
      { name: "r/btc", url: "https://reddit.com/r/btc", members: "380K" },
      { name: "r/blockchain", url: "https://reddit.com/r/blockchain", members: "1.1M" }
    ]
  }
]

export const additionalPlatforms = [
  {
    category: "Crypto-Native Platforms",
    platforms: [
      {
        name: "Bitcointalk.org",
        description: "ANN threads, research posts, mining/wallet guides",
        icon: MessageSquare,
        url: "https://bitcointalk.org",
        actionText: "Visit Forum"
      },
      {
        name: "Medium",
        description: "Mirror best articles with canonical link",
        icon: FileText,
        url: "https://medium.com",
        actionText: "Publish Article"
      },
      {
        name: "Mirror.xyz",
        description: "Web3-native blog for research/essays",
        icon: Globe,
        url: "https://mirror.xyz",
        actionText: "Create Post"
      },
      {
        name: "HackerNoon",
        description: "Long-form research in crypto/blockchain section",
        icon: Code,
        url: "https://hackernoon.com",
        actionText: "Submit Article"
      },
      {
        name: "Dev.to",
        description: "Technical articles for builders (eUTXO, off-chain, oracles)",
        icon: Code,
        url: "https://dev.to",
        actionText: "Publish Tutorial"
      }
    ]
  },
  {
    category: "Tech & Product Platforms",
    platforms: [
      {
        name: "Hacker News",
        description: "Strong, non-clickbait articles (history of money, eUTXO, privacy)",
        icon: TrendingUp,
        url: "https://news.ycombinator.com",
        actionText: "Submit Story"
      },
      {
        name: "Lobsters",
        description: "Technical posts on cryptography, PoW, protocols",
        icon: Code,
        url: "https://lobste.rs",
        actionText: "Submit Link"
      },
      {
        name: "Indie Hackers",
        description: "Articles on building tools and ecosystems",
        icon: Rocket,
        url: "https://www.indiehackers.com",
        actionText: "Share Story"
      },
      {
        name: "Stack Overflow / Bitcoin.SE",
        description: "Q&A with links as sources (not for posting articles)",
        icon: Code,
        url: "https://bitcoin.stackexchange.com",
        actionText: "Answer Questions"
      }
    ]
  },
  {
    category: "Social & Content Platforms",
    platforms: [
      {
        name: "Farcaster",
        description: "Channels: /crypto, /bitcoin, /defi, /privacy",
        icon: Share2,
        url: "https://farcaster.xyz",
        actionText: "Join Network"
      },
      {
        name: "Nostr",
        description: "Notes with key points and link",
        icon: Zap,
        url: "https://nostr.com",
        actionText: "Publish Note"
      },
      {
        name: "Lens Protocol",
        description: "Web3-native audience for research content",
        icon: Eye,
        url: "https://lens.xyz",
        actionText: "Create Post"
      },
      {
        name: "YouTube",
        description: "Short summary videos (2-5 min) per key article",
        icon: Play,
        url: "https://youtube.com",
        actionText: "Create Video"
      }
    ]
  }
]

export const guideSteps = [
  {
    id: "why-matters",
    title: "Why Your Help Matters",
    description: "How community members like you drive Ergo's growth",
    icon: Target,
    content: {
      intro: "Your voice matters. Community-driven marketing is the backbone of Ergo's growth. Unlike traditional marketing, your authentic contributions build genuine relationships and trust.",
      points: [
        "Your authentic voice carries more weight than corporate messaging",
        "You understand Ergo's technology deeply and can explain it better",
        "Your decentralized efforts match Ergo's decentralized philosophy",
        "You can reach audiences that traditional marketing can't",
        "You create lasting engagement through genuine conversations"
      ],
      actionItems: [
        {
          text: "Join Ergo Discord for real-time community discussions",
          url: "https://discord.gg/ergo-platform-668903786361651200",
          priority: "high"
        },
        {
          text: "Follow @BuildOnErgo on Twitter for developer updates",
          url: "https://twitter.com/BuildOnErgo",
          priority: "high"
        },
        {
          text: "Join ErgoSocials Telegram for marketing coordination",
          url: "https://t.me/ErgoSocials",
          priority: "high"
        },
        {
          text: "Subscribe to ergoblockchain.org blog for source content",
          url: "https://ergoblockchain.org/blog",
          priority: "medium"
        },
        {
          text: "Join r/ergonauts subreddit for Reddit marketing practice",
          url: "https://reddit.com/r/ergonauts",
          priority: "medium"
        },
        {
          text: "Subscribe to Beehiiv newsletter for weekly content digest",
          url: "https://ergoblockchain.beehiiv.com/subscribe",
          priority: "low"
        }
      ]
    }
  },
  {
    id: "core-channels",
    title: "Where to Share Ergo Content",
    description: "Start with these essential channels",
    icon: Globe,
    content: {
      intro: "These are the core channels where you can share Ergo content. Start here, then explore extended distribution channels below:",
      channels: coreChannels,
      strategy: "When new content is published on ergoblockchain.org, share it across these channels within 24-48 hours for maximum impact.",
      tips: [
        "Customize your content for each platform's audience",
        "Use platform-specific features (Twitter threads, Reddit formatting)",
        "Cross-reference between channels to build a cohesive narrative",
        "Track engagement to see what works best for you"
      ]
    }
  },
  {
    id: "content-strategy",
    title: "How to Amplify New Content",
    description: "Turn every blog post into a community-wide conversation",
    icon: TrendingUp,
    content: {
      intro: "When new Ergo content is published, here's how you can help amplify it across the community:",
      workflow: [
        {
          step: 1,
          title: "Source Content",
          description: "Start with ergoblockchain.org blog post or announcement",
          time: "Day 0"
        },
        {
          step: 2,
          title: "Newsletter Integration", 
          description: "Include in next Beehiiv digest or create dedicated issue",
          time: "Day 1-2"
        },
        {
          step: 3,
          title: "Social Media Cascade",
          description: "Share across Telegram, Discord, Twitter with platform-specific angles",
          time: "Day 1-3"
        },
        {
          step: 4,
          title: "Reddit Strategy",
          description: "Cross-post to relevant subreddits with community-specific context",
          time: "Day 2-7"
        },
        {
          step: 5,
          title: "Long-form Content",
          description: "Create Twitter Articles or LinkedIn posts for deeper engagement",
          time: "Week 1-2"
        }
      ],
      examples: [
        "New ErgoScript tutorial → Developer-focused Reddit posts + Discord #dev discussion",
        "Mining update → r/gpumining + r/cryptomining with profitability analysis",
        "DeFi protocol launch → r/defi + Twitter thread with comparison charts"
      ]
    }
  },
  {
    id: "reddit-mastery",
    title: "How to Share on Reddit",
    description: "Navigate Reddit's unique culture to help Ergo grow",
    icon: MessageSquare,
    content: {
      intro: "Reddit requires a different approach. Your success comes from providing value to the community, not just promoting Ergo.",
      categories: redditCategories,
      bestPractices: [
        "Always read community rules before posting",
        "Engage with other posts before sharing your own",
        "Use descriptive, non-promotional titles",
        "Explain why your content is relevant to that community",
        "Respond to comments within 2-4 hours",
        "Follow the 80/20 rule: 80% engagement, 20% promotion"
      ],
      timing: {
        "General Crypto": "Weekdays 9-11 AM EST, 2-4 PM EST",
        "Technical/Dev": "Tuesday-Thursday, avoid Mondays and Fridays",
        "Mining": "Sunday evenings, Wednesday mornings",
        "Economics": "Monday-Wednesday for serious discussions"
      }
    }
  },
  {
    id: "engagement-tactics",
    title: "How to Create Engaging Content",
    description: "Build meaningful conversations that help people discover Ergo",
    icon: Users,
    content: {
      intro: "Great marketing sparks conversations. Here's how you can create engaging content that helps people discover Ergo:",
      tactics: [
        {
          name: "Question-Driven Posts",
          description: "Start with thought-provoking questions",
          examples: [
            "What's your biggest challenge with current DeFi protocols?",
            "How do you think privacy coins will evolve in the next 5 years?",
            "What would convince you to switch from Ethereum to Ergo?"
          ]
        },
        {
          name: "Comparison Content",
          description: "Position Ergo against alternatives",
          examples: [
            "Ergo vs Ethereum: Transaction costs breakdown",
            "eUTXO vs Account model: Security implications",
            "Autolykos vs other mining algorithms: Efficiency analysis"
          ]
        },
        {
          name: "Educational Series",
          description: "Create multi-part content that builds audience",
          examples: [
            "ErgoScript Basics: 5-part tutorial series",
            "History of Money: Weekly deep-dives",
            "DeFi Security: Case studies and lessons"
          ]
        }
      ],
      responseStrategy: [
        "Acknowledge every comment within 4 hours",
        "Ask follow-up questions to extend conversations",
        "Tag relevant experts when technical questions arise",
        "Share additional resources in comments",
        "Create follow-up posts based on popular questions"
      ]
    }
  },
  {
    id: "timing-optimization",
    title: "When to Post for Maximum Impact",
    description: "Timing strategies to maximize your reach",
    icon: Clock,
    content: {
      intro: "When you post matters. Here's when to share content for maximum visibility:",
      schedule: {
        "Blog Posts": "Tuesdays 10 AM EST - highest engagement for technical content",
        "Newsletter": "Bi-weekly Thursdays - allows time for blog content integration",
        "Twitter": "Daily 9 AM, 1 PM, 6 PM EST - matches global audience peaks",
        "Reddit": "Platform-specific timing based on subreddit analytics",
        "Discord": "Real-time engagement, peak hours 7-10 PM EST",
        "Telegram": "Follow news cycle, immediate for breaking updates"
      },
      frequency: [
        "Quality over quantity - better to post less frequently with high value",
        "Maintain consistent presence without overwhelming audiences",
        "Batch content creation for efficiency",
        "Leave gaps for community-generated discussions",
        "Adjust frequency based on engagement metrics"
      ],
      tools: [
        "Buffer/Hootsuite for scheduling",
        "Reddit analytics for optimal posting times",
        "Twitter Analytics for audience insights",
        "Discord bots for engagement tracking"
      ]
    }
  },
  {
    id: "measurement-success",
    title: "How to Know If You're Helping",
    description: "Track your impact and see what works",
    icon: Eye,
    content: {
      intro: "Want to know if your efforts are making a difference? Focus on these metrics that indicate real community growth:",
      keyMetrics: [
        {
          category: "Engagement Quality",
          metrics: ["Comment depth and thoughtfulness", "Question quality in responses", "Cross-platform conversation continuation"]
        },
        {
          category: "Community Growth", 
          metrics: ["New Discord/Telegram members", "Developer GitHub activity", "Ecosystem project mentions"]
        },
        {
          category: "Content Performance",
          metrics: ["Time spent reading", "Share-to-view ratio", "Follow-up question generation"]
        },
        {
          category: "Business Impact",
          metrics: ["Website traffic from social", "Developer tool downloads", "Ecosystem adoption metrics"]
        }
      ],
      tools: [
        "Google Analytics for website traffic attribution",
        "Social media native analytics",
        "Discord/Telegram member growth tracking",
        "GitHub activity monitoring for developer interest"
      ],
      optimization: [
        "Weekly review of top-performing content",
        "Monthly analysis of channel effectiveness",
        "Quarterly strategy adjustments based on data",
        "A/B testing for content formats and timing"
      ]
    }
  }
]

export const faqsData = [
  {
    id: "getting-started",
    q: "I'm new to marketing. Where should I start?",
    a: "Start with Step 1: Join Discord (discord.gg/ergo-platform) and see how other community members share content. Then pick ONE channel you're comfortable with - usually Twitter or Reddit - and practice the strategies from this guide for 2 weeks before expanding.",
    links: [
      { text: "discord.gg/ergo-platform", url: "https://discord.gg/ergo-platform-668903786361651200" }
    ]
  },
  {
    id: "content-source",
    q: "Where do I find content to share?",
    a: "Start with ergoblockchain.org/blog for official content. Subscribe to the Beehiiv newsletter for weekly digests. Follow @BuildOnErgo for developer updates. Join ErgoSocials Telegram to coordinate with other marketers. Never share content you don't understand - ask questions in Discord first.",
    links: [
      { text: "ergoblockchain.org/blog", url: "https://ergoblockchain.org/blog" },
      { text: "Beehiiv newsletter", url: "https://ergoblockchain.beehiiv.com/subscribe" },
      { text: "@BuildOnErgo", url: "https://twitter.com/BuildOnErgo" },
      { text: "ErgoSocials Telegram", url: "https://t.me/ErgoSocials" }
    ]
  },
  {
    id: "reddit-success",
    q: "How do I succeed on Reddit without getting banned?",
    a: "Follow the 80/20 rule: spend 80% of your time commenting on others' posts, 20% sharing your own content. Read subreddit rules carefully - each has different requirements. Start with r/ergonauts to practice, then expand to crypto subreddits like r/CryptoCurrency. Always explain why your content matters to that specific community.",
    links: [
      { text: "r/ergonauts", url: "https://reddit.com/r/ergonauts" },
      { text: "r/CryptoCurrency", url: "https://reddit.com/r/CryptoCurrency" }
    ]
  },
  {
    id: "time-commitment",
    q: "How much time do I need to commit?",
    a: "Start with just 30 minutes daily: 10 minutes reading new content, 10 minutes engaging on Discord/Twitter, 10 minutes posting/commenting. As you get comfortable, you can batch content creation (1 hour weekly) and focus on real-time engagement. Quality beats quantity - it's better to do less consistently than burn out."
  },
  {
    id: "measuring-success",
    q: "How do I know if I'm making a difference?",
    a: "Focus on engagement quality: Are people asking follow-up questions? Are your posts generating discussions? Are community members mentioning Ergo more often? Track Discord member growth, Twitter engagement rates, and Reddit upvote ratios. Success means more people learning about Ergo, not just more views."
  },
  {
    id: "common-mistakes",
    q: "What mistakes should I avoid?",
    a: "Don't spam the same content across platforms without customization. Don't argue with critics - engage constructively or ignore. Don't share content you can't explain. Don't neglect community rules. Don't expect immediate results - community building takes months, not days."
  }
]
