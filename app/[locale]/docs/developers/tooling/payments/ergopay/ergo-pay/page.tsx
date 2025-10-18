import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ErgoPayPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">ErgoPay</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks/appkit"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Payments
        </Link>
      </div>
      <p className="text-gray-300 mb-4">
        ErgoPay is Ergo's dedicated dApp connector for non-web wallet applications. It has been fully operational for some time now and has been thoroughly tested by end-users.
      </p>
      <p className="text-gray-300 mb-4">
        While many may associate a dApp connector with a bridge between a website-based dApp and a browser extension wallet, like Yoroi and Metamask, not all users prefer to use a web extension wallet, and not all dApps are websites. To cater to this diversity, ErgoPay was developed, a versatile connector that can link any wallet with any dApp. For a non-technical overview of ErgoPay, <a href="https://www.reddit.com/r/ergonauts/comments/sc9lbk/comment/hu9v6dk/?utm_source=share&utm_medium=web2x&context=3" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>.
      </p>
      <p className="text-gray-300 mb-4">
        ErgoPay was integrated into <b>Ergo Wallet App 1.6</b>, and a demonstration dApp for minting and burning tokens has been live for a while.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">How to Try ErgoPay</h2>
      <ol className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>Ensure you have installed Ergo Wallet App 1.6. It's available on Google Play (<a href="https://play.google.com/apps/testing/org.ergoplatform.android" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">join</a>) and on TestFlight (DM me your Apple ID to join). Alternatively, <a href="https://github.com/ergoplatform/ergo-wallet-app/releases" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">download the APK on GitHub</a> and sideload.</li>
        <li>Visit the demonstration app: <a href="https://golfgl.de/ergopayshowcase/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">https://golfgl.de/ergopayshowcase/</a>. ErgoPay supports both mobile and desktop devices, and even Cold wallets.</li>
        <li>The demonstration dApp has a menu on the left side where you can choose to mint a new token or burn a token. The dApp supports both testnet and mainnet, and will automatically detect this through the information provided by ErgoPay.</li>
        <li>To mint a token, enter the required information and scan the presented QR code with your wallet app if you are on a desktop. If you are on mobile, tap the button to open the wallet app. The wallet app will ask which wallet should process the request, and a confirmation screen will show you the transaction details.</li>
        <li>Confirm the transaction and wait for your new token to be minted once the transaction is confirmed. (<i>Note: Emojis in the token name are supported.</i>)</li>
        <li>To burn a token, select the "Burn a token" option from the demonstration dApp. For this, the dApp needs to connect to your wallet to display a list of available tokens to burn. Do this by scanning the QR code or tapping the button.</li>
        <li>Once your wallet is connected, you can select the token to burn. Be careful: You can burn any token, so avoid choosing valuable tokens unless you intend to.</li>
        <li>Follow the same procedure as before to confirm the transaction and burn the token.</li>
      </ol>
      <p className="text-gray-300 mb-4">
        We hope you enjoy exploring ErgoPay! We look forward to seeing more dApps implementing the ErgoPay protocol.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Implementing a dApp using ErgoPay</h2>
      <p className="text-gray-300 mb-4">
        Ergo Wallet App 1.6 and above support ErgoPay, a protocol that facilitates transaction data exchange with dApps. With ErgoPay, your dApp can prepare a transaction for the user to sign within their wallet app. The user can then choose to accept or decline the transaction. This ensures that the user's secrets never leave their device and they can verify the transaction before confirming it.
      </p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">ErgoPay vs web dApp connector</h3>
      <p className="text-gray-300 mb-4">
        ErgoPay differs from a web dApp connector like those provided by SAFEW and Nautilus wallet in its versatility. While a web dApp connector is limited to web extension wallets and website dApps, ErgoPay can connect any wallet with any dApp. However, this means that some of your dApp logic must run on a server that can be accessed by user’s wallet applications. For a website dApp, this means that some of your code needs to live on your backend. This doesn't necessarily complicate things. In fact, on the backend, you aren't restricted to using JavaScript or its derivatives. You are free to choose the language and framework that best suits your needs.
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li><a href="https://github.com/MrStahlfelge/ergopay-payment-portal" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergopay-payment-portal</a></li>
      </ul>
    </>
  );
} 