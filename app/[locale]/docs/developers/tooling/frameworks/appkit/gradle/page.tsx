import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function GradlePage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Gradle</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/frameworks/appkit"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Appkit
        </Link>
      </div>
      <p className="text-gray-300 mb-4">
        Gradle is a build tool used for many JVM languages and frameworks. You can use it to set up and build Java and Kotlin projects, both client-side (for desktop or Android) or server-side applications (for example Spring).
      </p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Setting up the Gradle project</h2>
      <p className="text-gray-300 mb-4">The first step is setting up a plain Gradle project. How exactly this is done depends on the platform or framework you want to base on.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>Android: Install Android Studio and create a new project with your preferred language</li>
        <li>Spring: Use the <a href="https://start.spring.io/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Spring Initializr</a> to create a new project with your preferred language, don't forget to select Gradle. Open the project in the IDE of your choice</li>
        <li>For other frameworks, refer to their setup or starter guide</li>
      </ul>
      <p className="text-gray-300 mb-4">When that is done, you will find one or more <code>build.gradle</code> files that define parameters of your project, most important the libraries your project depends on. Search for a <code>dependencies</code> block (for Android, it is in <code>app/build.gradle</code>, for Spring in the root-level file). You need to add appkit here. Don't get confused with the <code>dependencies</code> block inside <code>buildscripts</code>, that's not for the project dependencies, but for dependencies Gradle needs to build the project.</p>
      <p className="text-gray-300 mb-4">For <b>desktop and server-side applications</b>, it is just one line to add.</p>
      <CodeBlock language="typescript">{`implementation ('org.ergoplatform:ergo-appkit_2.11:4.0.6')`}</CodeBlock>
      <p className="text-gray-300 mb-4">When you resync your project now, Gradle fetches Appkit and all needed libraries and add them to your classpath.</p>
      <p className="text-gray-300 mb-4">Things are a bit more complicated when targeting <b>Android</b>. Some older Android versions run an older version of Java, and while Appkit itself is compatible, some of the libraries it uses are not. So you need some more steps to do:</p>
      <p className="text-gray-300 mb-4">Make sure core library desugaring is enabled by checking if the app's <code>build.gradle</code> file contains the needed dependency and option <a href="https://developer.android.com/studio/write/java8-support#library-desugaring" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">as described here</a></p>
      <p className="text-gray-300 mb-4">Additionally, you have to tell gradle to exclude the libraries that are not compatible with Android, but to use compatible versions instead. That is done by changing the line above like this:</p>
      <CodeBlock language="typescript">{`implementation ('org.ergoplatform:ergo-appkit_2.11:4.0.6') {
    exclude group: 'org.bouncycastle', module: 'bcprov-jdk15on'
    exclude group: 'org.bitbucket.inkytonik.kiama', module: 'kiama_2.11'
}
// kiama needs an own build for JRE7 compatibility
implementation "com.github.MrStahlfelge.kiama:core_2.11:2.1.1"
implementation "com.github.MrStahlfelge.kiama:library_2.11:2.1.1"
implementation "org.bouncycastle:bcprov-jdk15to18:1.66"`}</CodeBlock>
      <p className="text-gray-300 mb-4">And there you go!</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">What to start with</h2>
      <p className="text-gray-300 mb-4">Now you have Appkit enabled in your project, but what can you do now? Appkit provides methods for the following tasks:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>Fetch data from Ergo Explorer API</li>
        <li>Interact with Ergo Node, both public and private methods</li>
        <li>Build transactions and sign them</li>
        <li>Helper methods to handle cryptographics like calculating PK addresses from secrets</li>
      </ul>
      <p className="text-gray-300 mb-4">So it is up to your plans what you will use! That's why here is just a brief starter on these topics</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Ergo Explorer API</h3>
      <p className="text-gray-300 mb-4">All data available on the <a href="https://explorer.ergoplatform.com/en/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Explorer</a> is available through an API as well. Appkit ships with classes defining this API to use with <a href="https://square.github.io/retrofit/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Retrofit</a>. Get started with the following Kotlin code:</p>
      <CodeBlock language="typescript">{`val retrofit = Retrofit.Builder()
            .baseUrl(RestApiErgoClient.defaultMainnetExplorerUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .build()

val ergoApiService = retrofit.create(DefaultApi::class.java)`}</CodeBlock>
      <p className="text-gray-300 mb-4">You can call Explorer API methods on the ergoApiService now. Check out Retrofit's documentation on how to interact with it.</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Interact with Ergo node, build transactions and sign them</h3>
      <p className="text-gray-300 mb-4">While Ergo Explorer is a central service to request information without the need to have the full blockchain, an Ergo node is part of the decentralized blockchain network. The node offers methods to the public, for example submitting a new transaction, while there are also private methods for its owner only to be used with an API key. These methods can be accessed through a <code>BlockchainContext</code> that you can obtain with the following code:</p>
      <CodeBlock language="typescript">{`val ergoClient = RestApiErgoClient.create(
    nodeApiAddress,
    NetworkType.MAINNET,
    "", // for private methods, give API key here
    RestApiErgoClient.defaultMainnetExplorerUrl
)
ergoClient.execute { ctx: BlockchainContext ->
    // do something here with the blockchain context
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">How to obtain the node address? A few known peers <a href="https://github.com/ergoplatform/ergo/blob/e68ce6180b13bffb024cf9e26c7c16a7be70a22c/src/main/resources/mainnet.conf#L43" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">are listed on the node configuration file</a>. Make sure to use the correct port to connect to the node API, it is 9053 for Mainnet (e.g. http://213.239.193.208:9053/).</p>
      <p className="text-gray-300 mb-4">Of course, the most interesting part here is to sign and send transactions with smart contracts. See below for examples.</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Helper methods</h3>
      <p className="text-gray-300 mb-4">Appkit provides a lot of helper methods to ease a developer's life and not reinvent the wheel that already is in use. For example, you can construct an Ergo address from a mnemonic, or an ErgoTree from an address. Check out the following classes and their inline documentation: <code>Address</code>, <code>BoxOperations</code>, <code>ErgoProverBuilder</code>, <code>Mnemonic</code>, <code>Parameters</code></p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Examples</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li>For sending ERG, check out the <a href="https://github.com/MrStahlfelge/ergo-wallet-android/blob/0e4e10d5ad18453ca43948514d73255c567fefd1/app/src/main/java/org/ergoplatform/android/ErgoFacade.kt#L86" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">code used in the Android wallet</a>.</li>
        <li>An example for a very simple smart contract freezing an amount of ERG to not to be spent before some time expired can be found on <a href="https://github.com/ergoplatform/ergo-appkit/blob/develop/README.md#using-from-java" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Appkit's main readme</a>.</li>
        <li>The <a href="https://github.com/ergoplatform/ergoscript-by-example" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergoscript by example</a> repository contains two additional smart contract examples (not using Appkit).</li>
        <li>How you can mint new tokens can be seen in <a href="https://github.com/ergoplatform/ergo-dex/blob/50596a92a465f52904b5d8015e8ae0d62e414176/src/main/scala-2.12/org/ergoplatform/dex/commands/IssueTokenCmd.scala" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ergo-dex repo</a>.</li>
        <li><a href="https://github.com/MrStahlfelge/ergopay-server-example/blob/master/src/main/java/org/ergoplatform/ergopay/ErgoPaySampleController.java" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoPay Server example</a> builds transactions for minting and burning token and spending a specific box.</li>
      </ul>
    </>
  );
} 