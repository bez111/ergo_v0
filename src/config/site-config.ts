export const siteConfig = {
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@BuildOnErgo",
  twitterLink: "https://x.com/BuildOnErgo",
  telegramLink: "https://t.me/ergoplatform",
  discordLink: "https://discord.com/invite/ergo-platform-668903786361651200",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ergoblockchain.org',
  
  beehiivApiKey: process.env.BEEHIIV_API_KEY || '',
  beehiivPublicationId: process.env.BEEHIIV_PUBLICATION_ID || '',

  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-S4TR1WWM7Q'
};