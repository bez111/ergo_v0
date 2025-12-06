
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function CommunityAdminPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Moderation Guide</h1>
      <p className="mb-4 text-gray-300">
        Maintaining a healthy and welcoming community is crucial for fostering productive discussions and collaboration. This guide outlines the moderation practices and tools employed across various platforms to ensure a positive environment for all participants.
      </p>
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Telegram</h2>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">OrgRobot</h3>
      <p className="mb-4 text-gray-300">
        OrgRobot is a powerful moderation bot utilized in the Ergo Telegram groups. It helps enforce community rules and prevent spam by restricting new users from posting until they have verified their identity. This verification process typically involves answering a set of custom entry questions, which serves as a deterrent against most bots and spammers.
      </p>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">GrepRobot</h3>
      <p className="mb-4 text-gray-300">
        GrepRobot is another moderation tool used in Telegram groups. It allows moderators to set up automated rules and filters to moderate content, user behavior, and group activity. With GrepRobot, moderators can:
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>Filter and block specific words, phrases, or links</li>
        <li>Automatically delete messages containing prohibited content</li>
        <li>Warn or kick/ban users for violating group rules</li>
        <li>Set up whitelists and blacklists for channels, roles, or users</li>
        <li>Customize responses and actions for different rule violations</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Discord</h2>
      <h3 className="text-xl font-semibold text-orange-300 mb-2 mt-6">Automod</h3>
      <p className="mb-4 text-gray-300">
        Automod is a powerful moderation tool for Discord servers. It enables server administrators to set up automated rules and filters to moderate content, user behavior, and server activity. With Automod, you can:
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>Filter and block specific words, phrases, or links</li>
        <li>Automatically delete messages containing prohibited content</li>
        <li>Warn or kick/ban users for violating server rules</li>
        <li>Set up whitelists and blacklists for channels, roles, or users</li>
        <li>Customize responses and actions for different rule violations</li>
      </ul>
      <p className="mb-4 text-gray-300">
        To configure Automod, navigate to the server settings and select the "Safety Setup" tab, then select 'Edit' on "AutoMod". From there, you can create new rules, define triggers (words, phrases, links, etc.), and specify the desired actions (delete message, warn user, kick/ban, etc.). Automod rules can be as simple or complex as needed, allowing for granular control over server moderation.
      </p>
      <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded mb-6">
        <b>Exclude members based on activity</b>
        <p className="text-yellow-200 text-sm mt-2">
          The spam rules are designed to be strict to catch potential abuse. However, this can sometimes lead to false positives for legitimate messages. To mitigate this issue, certain roles are excluded from the spam filters on the Ergo Discord server.<br/>
          One approach is to use a service like <a href="https://engau.ge/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">engau.ge</a> to assign new users a specific role once they reach a threshold number of messages. This role can then be excluded from the spam rules, allowing more active and engaged members to participate freely without triggering false positives.
        </p>
      </div>
      <h4 className="text-lg font-bold text-cyan-200 mt-8 mb-2">Block Words in Member Profile Names</h4>
      <p className="mb-2 text-gray-300">Automod can be configured to block certain words or phrases from appearing in member profile names. This helps prevent users from using inappropriate or misleading names. The following words and regular expressions are currently blocked:</p>
      <div className="mb-2">
        <b>Words:</b>
        <pre className="bg-neutral-900 border border-neutral-700 rounded p-2 text-sm text-gray-200 whitespace-pre-wrap mt-1 mb-2">airdrop, claim, check bio, alert message, instantinfo, instantmessage, autobot, alertmessage, claiminfo, instantbot, safteymessage, instant, info, support, announcement, announcements, help</pre>
      </div>
      <div className="mb-2">
        <b>Regular Expressions:</b>
        <pre className="bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-gray-200 whitespace-pre-wrap mt-1 mb-2">(?i)\bf(a|@|ä)q\b|\bh(e|3|ë)lp\b|\bsupport\b|\baird(rop)?\b|\bcl(a|@)im\b|\bmsg\b|\binsta(nt|info)\b|\bs(a|@)fet(y|y)?\b|\binfo\b|\bann(ounce)?\b|\bautobot\b

(?i)\$?\b(meme|dai|gsw|delivery|aird(ropp)?|bio|support|read|info)\b</pre>
      </div>
      <h4 className="text-lg font-bold text-cyan-200 mt-8 mb-2">Block Mention Spam</h4>
      <p className="mb-2 text-gray-300">Automod can also be configured to limit the number of unique mentions (roles and users) per message. This helps prevent users from spamming mentions, which can be disruptive and annoying. The current limit is set to <b>2 unique mentions per message</b>.</p>
      <h4 className="text-lg font-bold text-cyan-200 mt-8 mb-2">Block Spam Content</h4>
      <p className="mb-2 text-gray-300">In addition to blocking specific words and phrases, Automod can be configured to detect and block common spam content. This includes:</p>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>Commonly flagged words and phrases associated with spam or scams</li>
        <li>Suspicious links or URLs</li>
        <li>Excessive use of emojis or special characters</li>
      </ul>
      <h4 className="text-lg font-bold text-cyan-200 mt-8 mb-2">Custom Rules</h4>
      <p className="mb-2 text-gray-300">Moderators can also create custom rules to target specific types of content or behavior. These rules can be based on keywords, regular expressions, or other criteria. Some examples of custom rules currently in place include:</p>
      <div className="mb-2">
        <b>Regular Expressions:</b>
        <pre className="bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-gray-200 whitespace-pre-wrap mt-1 mb-2">Support Scams
(?i)(send\s+(a\s+)?dm|direct\s+message|dm\s+regarding\s+your\s+query|ask\s+for\s+help|open\s+a\s+ticket|service\s+request|chat\s+live)

(?i)(contact\s+support|admin\s+support|online\s+support\s+team|reach\s+out|for\s+assistance|resolve\s+your\s+concern)

(?i)(open[-\s]?ticket|create\s+a\s+ticket|raise\s+a\s+ticket|support[-\s]?ticket|support-ticket)

(?i)(fixer|issue[-\s]?fixer|guide\s+you|help[-\s]request)

Suspicious URLS
(?i)(tinyurl|shrtm\.nu|dsc\.gg|bch\.gg|t\.me|discord\.gg|t\.co)

Misc Spam
(?i)(earn\s+\$\d+k|WhatsApp)

\b(working\s+as|full\s*stack\s*web3\s*developer|smart\s*contract|token\s*creation|presale|nft\s*staking|web3\s*game|bot\s*development|inform\s+myself\s+to\s+you)\b

Emojis:
🟠,🟡,🟢,🔵,🟣,🟤,⚫,⚪,⬛️,🪩,💔,💖,💗,💓,💞,💝,💘,💟,🥜,🐵,️⃣,🔺,💵,💶,💷,💴,🐕‍🦺,⚠️,🈶,🫰,📡,🎯,👈,➡️,🪟,🎦,🏛,🌰,🐂,🔰,👋👋,🥇,🥈,🥉,⭐,🌟,💎,⏰,⏱,⏲,⏳,💣,💉,💊,🎁,🔑,🗝,✅,☑️,🤟,🔗,🔄,📈,🔍,🍉,⛽️,⬛️</pre>
      </div>
      <h4 className="text-lg font-bold text-cyan-200 mt-8 mb-2">Other Moderation Bots</h4>
      <p className="mb-2 text-gray-300">In addition to Automod, the Ergo Discord server also utilizes other moderation bots like Dyno, Carl-bot, and Wick. These bots provide additional moderation capabilities, such as logging, role management, and custom commands.</p>
      <div className="mt-8" />
    </>
  );
} 