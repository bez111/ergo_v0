import React from "react";

export default function ErgoTipperPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">ErgoTipper</h1>
      <p className="mb-4 text-gray-300">
        This page describes how to set up the <b>ErgoTipperBot</b> on each platform. This bot allows you to tip other members ERG, or any of the supported native tokens. Simply set up your wallet, fund it, and start tipping! If you tip someone without a wallet, one will automatically be generated for them.<br/>
        You can restore using the same seed phrase, and use the same tip wallet across all platforms.
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li><a href="https://github.com/Luivatra/ergotipper-tokens#supported-token-list" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Supported coins/tokens</a></li>
      </ul>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Adding a token</h2>
      <p className="text-gray-300 mb-4">
        To add a token to the list, simply create a pull request <a href="https://github.com/Luivatra/ergotipper-tokens#supported-token-list" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">on Github</a> that adds your token to the list. A token name should not contain whitespace, so if your token does have whitespace in the name make sure to replace/remove it. To avoid clutter in the token list add NFT's to the separate list below.
      </p>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Supported Platforms</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!start" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Reddit</a></li>
        <li><a href="https://discord.gg/SnTHHkcR6x" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Discord</a> (Ergo Tipper Bot[BETA]#0902)</li>
        <li><a href="https://t.me/ergotipperbot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Telegram</a></li>
        <li><a href="https://twitter.com/ErgoTipperBot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Twitter</a></li>
      </ul>

      <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6 text-yellow-200">
        <b>Security note:</b> This is a bot that runs on a server managed by u/Luivatra. It is not unhackable (nothing is). Do not use this as a main wallet! To have your token added to the bot, please start a poll in one of the community spaces.
      </div>

      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-6">Getting Started</h2>
      <h3 className="text-lg font-bold text-cyan-200 mt-4 mb-2">Reddit</h3>
      <ol className="list-decimal pl-6 text-gray-300 space-y-1 mb-4">
        <li>Send a <a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!start" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">private message</a> (not chat!) to u/ErgoTipperBot with the text: <code>!start</code></li>
        <li>Once the wallet is created, send a pm with <code>!address</code> to show your tip address.</li>
        <li>Copy your tip address and open your Yoroi wallet.</li>
        <li>Click the send tab and transfer some ERG's to the tip wallet address. (Any transaction requires at least 0.001 erg in fees, on top of that funds in utxo are stored in a box. Each box needs to have a small amount of erg in them. So on the tip bot a token tip will require 0.00115 erg)</li>
        <li>If you want to tip a token like Kushti for example, transfer the token to the same tip wallet address.</li>
        <li>Once the transactions are sent (~ 2 minutes), send a PM to u/ErgoTipperBot: <code>!balance</code></li>
        <li>Your balance should look like this:
          <table className="mt-2 mb-2 border border-cyan-700 text-sm">
            <thead><tr><th className="border border-cyan-700 px-2">token</th><th className="border border-cyan-700 px-2">amount</th></tr></thead>
            <tbody>
              <tr><td className="border border-cyan-700 px-2">Erg</td><td className="border border-cyan-700 px-2">0.1</td></tr>
              <tr><td className="border border-cyan-700 px-2">Kushti</td><td className="border border-cyan-700 px-2">100</td></tr>
            </tbody>
          </table>
        </li>
        <li>You are good to go! In one of the subreddits where u/ErgoTipperBot is activated write a comment to the person you want to tip with the following command (without the brackets):<br/><code>!tip &lt;amount&gt; &lt;token&gt; &lt;any remaining text will be stored in the transaction database so you can both view it later&gt;</code></li>
      </ol>
      <h4 className="font-bold text-cyan-200 mb-1">Reddit Commands</h4>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li><b>In comments:</b>
          <ul className="list-disc pl-6">
            <li><code>!tiphelp</code>: Show this message</li>
            <li><code>!tip &lt;amount&gt; &lt;token&gt; &lt;any remaining text...&gt;</code>: tip the person you reply to</li>
          </ul>
        </li>
        <li><b>In PM:</b>
          <ul className="list-disc pl-6">
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!start" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!start</a>: Initialize a tip wallet</li>
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!changepw%20%3CcurrentPassword%3E%20%3CnewPassword%3E" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!changepw &lt;currentPassword&gt; &lt;newPassword&gt;</a>: Change tip wallet pw</li>
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!address" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!address</a>: Show tip wallet address</li>
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!seed%20%3Cpassword%3E" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!seed &lt;password&gt;</a>: Show tip wallet seed phrase</li>
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!balance" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!balance</a>: Show tip wallet balance</li>
            <li><a href="https://www.reddit.com/message/compose/?to=ErgoTipperBot&subject=BotTalk&message=!restore%20%3Cpassword%3E%20%3Cseed%20phrase%3E" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">!restore &lt;password&gt; &lt;seed phrase&gt;</a>: Restore an existing wallet to be used as your tip wallet (use this to use the same wallet across Discord & Reddit)</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-lg font-bold text-cyan-200 mt-4 mb-2">Telegram</h3>
      <h4 className="font-bold text-cyan-200 mb-1">Telegram Commands</h4>
      <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
        <li><b>In comments:</b> <code>/t &lt;amount&gt; &lt;token&gt; &lt;any remaining text...&gt;</code>: tip the person you reply to, make sure to tag @ErgoTipperBot</li>
        <li><b>In DM with @ErgoTipperBot:</b>
          <ul className="list-disc pl-6">
            <li><code>/start</code>: Initialize a tip wallet</li>
            <li><code>/changepw currentPassword newPassword</code>: Change tip wallet pw</li>
            <li><code>/address</code>: Show tip wallet address</li>
            <li><code>/seed password</code>: Show tip wallet seed phrase (Note that the password you need to retrieve your seed phrase is the one given to you by the tipbot in its first message.)</li>
            <li><code>/balance</code>: Show tip wallet balance</li>
            <li><code>/restore password seedphrase</code>: Restore an existing wallet to be used as your tip wallet (use this to use the same wallet across Discord, Reddit, Twitter & Telegram)</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-lg font-bold text-cyan-200 mt-4 mb-2">Restoring</h3>
      <p className="text-gray-300 mb-4">You can restore the generated wallet in any supported Ergo wallet by using the retrieved seed.</p>

      <h3 className="text-lg font-bold text-cyan-200 mt-4 mb-2">Discord</h3>
      <p className="text-gray-300 mb-4">Simply DM the bot <b>Ergo Tipper Bot[BETA]#0902</b> on Discord and a menu will appear when you type <code>/</code></p>
      {/* <img src="/screenshot_2022-01-19_at_10.11.07.png" alt="Discord menu screenshot" className="rounded-lg border border-cyan-700 mb-4" /> */}

      <h3 className="text-lg font-bold text-cyan-200 mt-4 mb-2">Twitter</h3>
      <p className="text-gray-300 mb-4">Please note the bot on Twitter has a ~10min delay in responding.<br/>
      Send a direct message to <a href="https://twitter.com/ErgoTipperBot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">ErgoTipperBot</a> with <code>!start</code></p>
    </>
  );
} 