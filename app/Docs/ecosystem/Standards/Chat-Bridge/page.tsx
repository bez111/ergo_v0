import React from "react";

export default function ChatBridgePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Chat Bridge</h1>
      <p className="mb-4 text-gray-300">
        We welcome all ecosystem projects to establish a channel that is bridged between their server/telegram using <a href="https://github.com/42wim/matterbridge" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">matterbridge</a>. You can see examples of this in action on the Ergo Discord.
      </p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Setting Up the Bridge</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
        <li>
          Use <a href="https://discordapp.com/oauth2/authorize?&client_id=910495131646455808&scope=bot&permissions=536870912" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">this invite link</a> to invite <b>@BridgeBot#9505</b> to your server.<br/>
          <span className="text-gray-400 text-sm block mt-1">If you prefer, you can set up <a href="https://github.com/42wim/matterbridge/wiki/Discord-bot-setup" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">your own bot</a>. However, you will need to send the <b>Token</b> ID to @Glasgow if you want it bridged to existing Ergo chats. <b>The bot only needs permission to see/read messages and set webhooks in the channel you want to bridge.</b></span>
        </li>
        <li>
          Invite <a href="https://t.me/ErgoBridgeBot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ErgoBridgeBot</a> to your Telegram.<br/>
          <span className="text-gray-400 text-sm block mt-1">If Shieldy is enabled, you'll need to use <code>/allowInvitingBots</code>.</span>
        </li>
        <li>
          Notify <b>@Glasgow</b> about the channel/server you want to bridge so it can be added to the configuration.
        </li>
      </ol>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Known Limitations</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-2 mb-4">
        <li>
          Discord does not currently allow bots to reply to messages when spoofing someone.<br/>
          <a href="https://github.com/discord/discord-api-docs/discussions/3282" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Allow webhooks to use reply messages#3282</a>
        </li>
        <li>
          The <a href="https://github.com/42wim/matterbridge/wiki/FAQ#matterbridge-is-not-deleting-messages-from-telegram-to-other-bridges" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Telegram API does not report deleted messages</a>.
          <ol className="list-decimal pl-6 text-gray-400 text-sm mt-1">
            <li>This means any spam deleted on Telegram will remain visible on Discord.</li>
            <li><b>Workaround:</b> Restrict new Telegram users from speaking until they verify their identity. <a href="http://orgrobot.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">OrgRobot</a> is a useful tool for this, with a set of custom entry questions. This should stop most bots. (However, some spammers are real people and cannot be prevented.)</li>
          </ol>
        </li>
      </ol>
      <p className="text-gray-300 mb-4">
        Despite these limitations, the bridge works quite well.
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li>If set, names/profile-photos will be spoofed if they are similar on both platforms. (Names can also be manually mapped). However, profile photos need to be re-cached when a new bridge is added.</li>
        <li>Responses will reply to the message on Telegram platforms, triggering notifications. On Discord, the message will be quoted.</li>
      </ul>
    </>
  );
} 