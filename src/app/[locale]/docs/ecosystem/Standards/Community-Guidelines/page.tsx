
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function CommunityGuidelinesPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">Community Guidelines</h1>
      <p className="mb-4 text-gray-300">
        Welcome to our community! We believe in maintaining a positive and inclusive environment for all our members. To ensure this, we have set some guidelines that all members are expected to follow. These guidelines are not exhaustive and we encourage everyone to use their best judgement in all situations.
      </p>
      <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
        <li><b>Respect and kindness:</b> Treat all community members with respect. Hate speech and personal attacks are strictly prohibited.</li>
        <li><b>Open-mindedness:</b> Be open to different perspectives and opinions. This community values free speech, and members should be prepared to engage with diverse ideas.</li>
        <li><b>Constructive criticism:</b> Be open to receiving feedback and criticism constructively. This community is a place for learning and growth.</li>
        <li><b>Thoughtful comments:</b> As a topic becomes more divisive, comments should become more thoughtful and substantive, not less.</li>
        <li><b>Interpretation of statements:</b> Respond to the strongest plausible interpretation of what someone says, not a weaker one that's easier to criticise. Always assume good faith.</li>
        <li><b>No spamming or self-promotion:</b> Do not post promotional material for your projects or business without permission from the community moderators.</li>
        <li><b>Legal awareness:</b> Be mindful of the legal implications of your actions. </li>
        <li><b>Fact-checking:</b> Do not share unverified news or misinformation. Always verify the information before sharing it with the community.</li>
        <li><b>No price manipulation:</b> Do not engage in activities intended to manipulate the price of any crypto-related asset.</li>
        <li><b>Zero tolerance for scamming:</b> Any level of scamming will not be tolerated and will be reported to the relevant authorities if necessary.</li>
        <li><b>Security awareness:</b> Be aware of the risk of hacking and phishing scams. Never share your private keys or personal information with anyone.</li>
        <li><b>Personal security:</b> Keep your device and accounts secure. Be cautious when clicking on links or downloading files from unknown sources.</li>
        <li><b>Enjoy the community:</b> This community allows you to express your ideas freely and connect with others who share your interests. Have fun and enjoy!</li>
        <li><b>Moderation:</b> The community moderators reserve the right to remove content and/or ban members who consistently violate these guidelines.</li>
        <li><b>Exceptions:</b> The community moderators may make exceptions to these guidelines in cases where it is deemed necessary to maintain the safety and well-being of the community.</li>
      </ul>
      <p className="text-gray-400 text-sm mb-8">Thank you for helping us build a welcoming, safe, and productive Ergo community!</p>
      <h2 className="text-xl font-bold text-cyan-300 mb-2 mt-8">Related Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-1">
        <li><a href="../Community-Admin" className="text-cyan-400 underline">Moderation Guide</a></li>
      </ul>
    </>
  );
} 