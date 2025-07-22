"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function AppkitTutorialPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Appkit Tutorial</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/pathways/appkit"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Appkit
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Features</h2>
      <p className="text-gray-300 mb-4">
        <a href="https://github.com/aslesarenko/ergo-appkit" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Appkit</a> is a library for polyglot development of Ergo Applications based on <a href="https://www.graalvm.org/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">GraalVM</a>. GraalVM has many <a href="https://medium.com/graalvm/graalvm-ten-things-12d9111f307d" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">great use cases</a>. Expanding on that, in this article, we will go through some of the Appkit features inherited from GraalVM and take you step-by-step in learning how to take advantage of them.
      </p>

      <h3 className="text-xl font-bold text-orange-400 mb-2">Example Scenario</h3>
      <p className="text-gray-300 mb-4">
        We will create a simple console application (<a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/java-examples/src/main/java/org/ergoplatform/appkit/examples/FreezeCoin.java" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">FreezeCoin</a>) in Java which uses the Appkit library. By using Appkit, we will be able to easily send a new transaction to an Ergo node programmatically. The transaction will transfer a given amount of Erg into a new box protected by the following Ergo contract written in ErgoScript (see this <a href="https://ergoplatform.org/docs/ErgoScript.pdf" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">introduction</a> and more <a href="https://ergoplatform.org/docs/AdvancedErgoScriptTutorial.pdf" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">advanced examples</a> to learn more about ErgoScript).
      </p>
      <UniversalCopyCodeBlock code={`// Freezer Contract
{ 
  // Parameters
  // freezeDeadline: Int - some future block number after which the box can be spent
  // ownerPk: SigmaProp - public key of the new box owner
  sigmaProp(HEIGHT > freezeDeadline) && ownerPk
}`} />
      <p className="text-gray-300 mb-4">
        In short, a box (and therefore the funds within the box) are locked under a contract (or script) on the Ergo blockchain. In order for the box to be spent, the contract must evaluate to be true. Thus the individual who wishes to spend the box must ensure that the contract evaluates to true based on the encoded logic within it.
      </p>
      <ul className="list-decimal pl-6 text-gray-300 mb-4 space-y-1">
        <li>The current block number of the Ergo blockchain (aka blockchain HEIGHT) is greater than the specified deadline</li>
        <li>The spending transaction must be signed by the owner of the secret key corresponding to the ownerPk public key.</li>
      </ul>
      <p className="text-gray-300 mb-4">
        The first condition forbids anyone from spending the box before the Ergo blockchain grows to the given height. Because new blocks on the blockchain are mined approximately every 2 minutes on average, using the current blockchain height, it is easy to define any duration of delays we wish, such as 1 day, 1 week, or 1 month. <i>(i.e. (60 / 2) * 24 * 7 = 5040, which is the # of blocks per week)</i>.
      </p>
      <p className="text-gray-300 mb-4">
        We will now be going in-depth on how we can take this Freezer Contract and integrate it with the Appkit library in order to create the FreezeCoin console application so that anyone and everyone can choose to freeze their coins if they so wish. (Granted, this contract/dApp is not useful; however, it is an effective, simple example for displaying how this technology stack works so that you can build useful dApps down the line.)
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Java Ergo App Development</h2>
      <p className="text-gray-300 mb-2">Appkit aims to provide a set of interfaces that can be used idiomatically in Java. You will feel right at home using Appkit if you are a Java veteran.</p>
      <p className="text-gray-300 mb-2">Please follow the <a href="https://github.com/aslesarenko/ergo-appkit#setup" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">setup instructions</a> for GraalVM and Appkit if you wish to reproduce the examples below.</p>
      <p className="text-gray-300 mb-2">To use Appkit in our Java implementation of FreezeCoin, we must add the following dependency in the <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/java-examples/build.gradle.kts" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">gradle file</a>:</p>
      <UniversalCopyCodeBlock code={`dependencies {
    implementation("org.ergoplatform", "ergo-appkit_2.12", "3.1.0", "compile")
    ...
}`} />
      <p className="text-gray-300 mb-2">Furthermore, at runtime, Appkit/our application needs to connect with an Ergo Node via REST API. Often, the node will be running locally and made available at <code>http://localhost:9052/</code>. This is the standard scenario for anyone who has set up a full-node by following <a href="https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">these instructions</a> and is using the default configuration.</p>
      <p className="text-gray-300 mb-2">Henceforth we will assume that you have set up and started your Ergo Node so that it is available for testing of the application.</p>
      <p className="text-gray-300 mb-2">Next, our application will need to know how to be able to connect to our local running node, in addition to other various settings, in order to function properly. We will use a JSON file with the following configuration parameters which our FreezeCoin app will load at startup. <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/freeze_coin_config.json" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">freeze_coin_config.json</a>:</p>
      <UniversalCopyCodeBlock code={`{
  "node": {
    "nodeApi": {
      "apiUrl": "http://localhost:9052/",
      "apiKey": "put your secret apiKey generated during node setup here"
    },
    "wallet": {
      "mnemonic": "the mnemonic key used to initialize or restore the wallet of the node",
      "password": "the password you chose to protect the wallet",
      "mnemonicPassword": "the password you chose to protect the mnemonic"
    },
    "networkType": "TESTNET"
  },
  "parameters": {
    "newBoxSpendingDelay": "30",
    "ownerAddress": "3WzR39tWQ5cxxWWX6ys7wNdJKLijPeyaKgx72uqg9FJRBCdZPovL"
  }
}`} />
      <p className="text-gray-300 mb-2">Here <code>apiKey</code> is the secret key required for API authentication, which can be acquired as described <a href="https://github.com/ergoplatform/ergo/wiki/Ergo-REST-API#setting-an-api-key" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">here</a>. Your mnemonic is the secret phrase obtained during <a href="https://github.com/ergoplatform/ergo/wiki/Wallet-documentation" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">setup of a new wallet</a>.</p>
      <p className="text-gray-300 mb-2">How our app will work is that the user will launch it from the command line and provide one argument. This argument is the amount of value (in NanoErgs) which they wish to freeze/lock under the Freezer contract which we wrote above.</p>
      <p className="text-gray-300 mb-2">Our first step for our FreezeCoin app will be to read the configuration JSON file we just created and to accept the command line argument from the user:</p>
      <UniversalCopyCodeBlock code={`public static void main(String[] args) {
    long amountToSend = Long.parseLong(args[0]);  // positive value in NanoErg
    ErgoToolConfig conf = ErgoToolConfig.load("freeze_coin_config.json");
    // the rest of the code discussed below 
    ...
}`} />
      <p className="text-gray-300 mb-2">With these acquired, we can now obtain the spending delay and the owner address, which were defined in the JSON config file.</p>
      <UniversalCopyCodeBlock code={`int newBoxSpendingDelay = Integer.parseInt(conf.getParameters().get("newBoxSpendingDelay"));
Address ownerAddress = Address.create(conf.getParameters().get("ownerAddress"));`} />
      <p className="text-gray-300 mb-2">Next, we need to connect to the running Ergo node from our Java application so that we can use the data we just parsed and post something on-chain. This is done by creating an <code>ErgoClient</code> instance that uses our pre-defined values for our node from the JSON config file as well.</p>
      <UniversalCopyCodeBlock code={`ErgoNodeConfig nodeConf = conf.getNode();
ErgoClient ergoClient = RestApiErgoClient.create(nodeConf);`} />
      <p className="text-gray-300 mb-2">Now that we have an instance of <a href="https://github.com/aslesarenko/ergo-appkit/blob/master/lib-api/src/main/java/org/ergoplatform/appkit/ErgoClient.java" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">ErgoClient</a>, we can execute any block of code and have access to the current blockchain context.</p>
      <UniversalCopyCodeBlock code={`String txJson = ergoClient.execute((BlockchainContext ctx) -> {
    // use ctx here to create and sign a new transaction
    // then send it to the node 
});`} />
      <p className="text-gray-300 mb-2">The lambda passed to <code>execute</code> is called when the current blockchain context is loaded from the Ergo node. In this lambda, we shall put our application logic. First, we start with some auxiliary steps.</p>
      <UniversalCopyCodeBlock code={`// access the wallet embedded in the Ergo node 
// (using the wallet specified via mnemonic we put in freeze_coin_config.json)
ErgoWallet wallet = ctx.getWallet();

// calculate total amount of NanoErgs we need to send to the new box 
// including paying for transaction fees
long totalToSpend = amountToSend + Parameters.MinFee;

// request for unspent boxes that cover the required amount of NanoErgs from the wallet
Optional<List<InputBox>> boxes = wallet.getUnspentBoxes(totalToSpend);
if (!boxes.isPresent())
    throw new ErgoClientException(
        "Not enough coins in your specified wallet to pay " + totalToSpend, null);
    
// create a "prover", which is a special object that will be used for signing the transaction
// the prover should be configured with your wallet's secrets, which are necessary to generate signatures (aka proofs)
ErgoProver prover = ctx.newProverBuilder()
    .withMnemonic(
            nodeConf.getWallet().getMnemonic(),
            nodeConf.getWallet().getPassword())
    .build();`} />
      <p className="text-gray-300 mb-2">At this point, we have the input boxes chosen for our spending transaction, but we now need to create an output box with the specified <code>amountToSend</code> and locked under the Freezer contract.</p>
      <UniversalCopyCodeBlock code={`// the only way to create a transaction is using the tx builder obtained from the context
// the builder uses the context to access necessary blockchain data.
UnsignedTransactionBuilder txB = ctx.newTxBuilder();

// create new box using new builder obtained from the transaction builder
// in this case we compile a new ErgoContract from the Freezer ErgoScript code
OutBox newBox = txB.outBoxBuilder()
        .value(amountToPay)
        .contract(ctx.compileContract(
                ConstantsBuilder.create()
                        .item("freezeDeadline", ctx.getHeight() + newBoxSpendingDelay)
                        .item("ownerPk", ownerAddress.getPublicKey())
                        .build(),
                "{ sigmaProp(HEIGHT > freezeDeadline) && ownerPk }"))
        .build();`} />
      <p className="text-gray-300 mb-2">Note, in order to compile <code>ErgoContract</code> from the Freezer script source code, the <code>compileContract</code> method requires that we provide values for named constants that are used within the script. If no such constants are used, then <code>ConstantsBuilder.empty()</code> can be passed to it.</p>
      <p className="text-gray-300 mb-2">In this case, we pass the public key of the new box owner into the <code>ownerPk</code> placeholder in the script. To repeat from earlier, this means that the box can only be spent by the owner of the corresponding secret key.</p>
      <p className="text-gray-300 mb-2">Next, we create an unsigned transaction using all the data we've put together thus far.</p>
      <UniversalCopyCodeBlock code={`// provide the transaction builder with which boxes we are going to spend, which outputs
// should be created, the total transaction fees, and the address for change to be sent to
UnsignedTransaction tx = txB.boxesToSpend(boxes.get())
        .outputs(newBox)
        .fee(Parameters.MinFee)
        .sendChangeTo(prover.getP2PKAddress())
        .build();`} />
      <p className="text-gray-300 mb-2">And finally we:</p>
      <ol className="list-decimal pl-6 text-gray-300 mb-2">
        <li>Use the prover to sign the built transaction</li>
        <li>Thus, obtain a <code>SignedTransaction</code> instance</li>
        <li>Use the blockchain context to send the signed transaction to the Ergo node.</li>
      </ol>
      <UniversalCopyCodeBlock code={`SignedTransaction signed = prover.sign(tx);
String txId = ctx.sendTransaction(signed);
return signed.toJson(true);`} />
      <p className="text-gray-300 mb-2">As you may have noticed, for our final step, we show off that it is possible to serialize the signed transaction into a JSON string with pretty-printing turned on. Look at the <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/java-examples/src/main/java/org/ergoplatform/appkit/examples/FreezeCoin.java" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">full source code</a> of the example for more details and for using it as a template in your own application.</p>

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Low-footprint, Fast-startup Ergo Applications</h3>
      <p className="text-gray-300 mb-2">Using Java for short-running processes has drawbacks: long startup times and high memory usage. GraalVM solves this by compiling Java code ahead of time into a native executable image via <code>native-image</code>. This skips the JVM at runtime.</p>
      <UniversalCopyCodeBlock code={`$ /usr/bin/time -l java -cp build/libs/appkit-examples-3.1.0-all.jar \
   org.ergoplatform.appkit.examples.FreezeCoin 1000000000
...`} />
      <p className="text-gray-300 mb-2">With GraalVM:</p>
      <UniversalCopyCodeBlock code={`$ ./gradlew clean shadowJar
$ native-image --no-server \
 -cp build/libs/appkit-examples-3.1.0-all.jar\
 --report-unsupported-elements-at-runtime\
  --no-fallback -H:+TraceClassInitialization -H:+ReportExceptionStackTraces\
   -H:+AddAllCharsets -H:+AllowVMInspection -H:-RuntimeAssertions\
   --allow-incomplete-classpath \
    --enable-url-protocols=http,https org.ergoplatform.appkit.examples.FreezeCoin freezecoin`} />
      <UniversalCopyCodeBlock code={`$ DYLD_LIBRARY_PATH=$GRAAL_HOME/jre/lib /usr/bin/time -l ./freezecoin 1800000000
        0.43 real         0.15 user         0.03 sys
  81289216  maximum resident set size
         0  average shared memory size
         0  average unshared data size
         0  average unshared stack size
     20079  page reclaims
         0  page faults
         0  swaps
         0  block input operations
         0  block output operations
        13  messages sent
        86  messages received
         0  signals received
        11  voluntary context switches
       138  involuntary context switches`} />
      <p className="text-gray-300 mb-2">This is just one of the great benefits of GraalVM, which we get to take advantage of with Appkit.</p>

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Develop Ergo Applications in JavaScript, Python, Ruby</h3>
      <p className="text-gray-300 mb-2">GraalVM supports <i>polyglot programming</i> in which different components of an application can be developed using the most suitable language and then seamlessly combined together at runtime. See the <a href="https://github.com/aslesarenko/ergo-appkit-examples" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">examples repo</a> for details.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>JavaScript:</b> <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/js-examples/FreezeCoin.js" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">FreezeCoin.js</a></li>
        <li><b>Python:</b> <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/python-examples/FreezeCoin.py" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">FreezeCoin.py</a></li>
        <li><b>Ruby:</b> <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/ruby-examples/FreezeCoin.rb" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">FreezeCoin.rb</a></li>
      </ul>
      <p className="text-gray-300 mb-2">To support polyglot programming GraalVM platform has high-performance implementations of popular languages. We are going to take advantage of this for our FreezeCoin example project to show you how easy this is to use your preferred language.</p>
      <p className="text-gray-300 mb-2">Before running the examples below (in JavaScript, Python and Ruby), please make sure that you have the Java version of FreezeCoin working locally in order to ensure everything is set up correctly.</p>
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">JavaScript</h4>
      <UniversalCopyCodeBlock code={`$ node --jvm --vm.cp=build/libs/appkit-examples-3.1.0-all.jar \
  js-examples/FreezeCoin.js  1000000000`} />
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">Python</h4>
      <UniversalCopyCodeBlock code={`$ graalpython --jvm --polyglot --vm.cp=build/libs/appkit-examples-3.1.0-all.jar \
   python-examples/FreezeCoin.py 1900000000`} />
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">Ruby</h4>
      <UniversalCopyCodeBlock code={`$ truffleruby --polyglot --jvm --vm.cp=build/libs/appkit-examples-3.1.0-all.jar \
    ruby-examples/FreezeCoin.rb 1900000000`} />

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Ergo Native Shared Libraries</h3>
      <p className="text-gray-300 mb-2">Another great benefit of GraalVM is that we can compile Java classes down into a native shared library instead of an executable. To do this, we declare one or more static methods as the <code>@CEntryPoint</code>.</p>
      <UniversalCopyCodeBlock code={`public class FreezeCoin {
    ...
     /**
     * Entry point callable from C which wraps {@link FreezeCoin#sendTx}
     */
    @CEntryPoint(name = "sendTx")
    public static void sendTxEntryPoint(
            IsolateThread thread,
            SignedWord amountToSendW,
            CCharPointer configFileNameC,
            CCharPointer resBuffer, UnsignedWord bufferSize) throws FileNotFoundException {
        long amountToSend = amountToSendW.rawValue();
        // Convert the C strings to the target Java strings.
        String configFileName = CTypeConversion.toJavaString(configFileNameC);
        String txJson = sendTx(amountToSend, configFileName);

        // put resulting string into the provided buffer
        CTypeConversion.toCString(txJson, resBuffer, bufferSize);
    }  
    ...
}`} />
      <p className="text-gray-300 mb-2">We can then compile down to a shared library and an automatically generated header file. Notice the use of the <code>--shared</code> option.</p>
      <UniversalCopyCodeBlock code={`$ native-image --no-server \
 -cp build/libs/appkit-examples-3.1.0-all.jar\
 --report-unsupported-elements-at-runtime\
  --no-fallback -H:+TraceClassInitialization -H:+ReportExceptionStackTraces\
   -H:+AddAllCharsets -H:+AllowVMInspection -H:-RuntimeAssertions\
   --allow-incomplete-classpath \
    --enable-url-protocols=http,https \
    --shared -H:Name=libfreezecoin -H:Path=c-examples`} />
      <p className="text-gray-300 mb-2">Now we can write a <a href="https://github.com/aslesarenko/ergo-appkit-examples/blob/master/c-examples/freezecoin.c" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">C program</a> which uses the library.</p>
      <UniversalCopyCodeBlock code={`#include <stdlib.h>
#include <stdio.h>

#include <libfreezecoin.h>

int main(int argc, char **argv) {
  graal_isolate_t *isolate = NULL;
  graal_isolatethread_t *thread = NULL;
  
  if (graal_create_isolate(NULL, &isolate, &thread) != 0) {
    fprintf(stderr, "graal_create_isolate error\n");
    return 1;
  }

  char * configFileName = "freeze_coin_config.json";

  // get amountToSend from cmd args and call transaction creation
  long amountToSend = atol(argv[1]);
  char result[1024 * 16];
  sendTx(thread, amountToSend, configFileName, result, sizeof(result));

  // print out serialized result
  printf("%s\n", result);

  if (graal_detach_thread(thread) != 0) {
    fprintf(stderr, "graal_detach_thread error\n");
    return 1;
  }
  return 0;
}`} />
      <p className="text-gray-300 mb-2">We can compile this with our standard system tools and easily run our executable (set <code>LD_LIBRARY_PATH=.</code> on Linux).</p>
      <UniversalCopyCodeBlock code={`$ clang -Ic-examples -Lc-examples -lfreezecoin c-examples/freezecoin.c -o call_freezecoin
$ otool -L call_freezecoin
$ DYLD_LIBRARY_PATH=$GRAAL_HOME/jre/lib ./call_freezecoin 1000000000`} />

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Debugging Your Polyglot Ergo Application</h3>
      <p className="text-gray-300 mb-2">You can debug JS, Python and Ruby in IntelliJ, but if, for some reason, this doesn't work for you or fit with your preferred editor, GraalVM offers another option. All of the GraalVM languages (except for Java) are implemented using the common <a href="https://github.com/oracle/graal/tree/master/truffle" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Truffle framework</a>. Truffle allows for tooling like debuggers to be implemented once and be available for all supported languages.</p>
      <p className="text-gray-300 mb-2">As such, we can run our program with the flag <code>--inspect</code>, which will give us a link to open in Chrome and will pause the program in the debugger.</p>
      <UniversalCopyCodeBlock code={`$ ruby --polyglot --jvm --inspect --vm.cp=build/libs/appkit-examples-3.1.0-all.jar \
    ruby-examples/FreezeCoin.rb 1900000000
Debugger listening on port 9229.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/bundled/js_app.html?ws=127.0.0.1:9229/30c7da1e-7558a47d09b
...`} />
      <p className="text-gray-300 mb-2">From here, we can set breakpoints and continue execution. When it breaks, we’ll see values of the variables, can continue again until the next breakpoint, and do everything we've come to expect from debuggers.</p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Conclusions</h2>
      <p className="text-gray-300 mb-4">Appkit relies on the same core libraries which were used in implementing the Ergo consensus protocol. These libraries include the ErgoScript compiler, cryptography, byte code interpreter, data serialises and the other core components. Using GraalVM, we can reuse these tried and tested components in different application contexts without any modification or rewriting them ourselves.</p>
      <p className="text-gray-300 mb-4">No matter if you are using Java, JavaScript, Python or Ruby, you can take advantage of Appkit with GraalVM to drastically simplify the process of interacting with the Ergo blockchain while creating native-running (d)Apps.</p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">References</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li><a href="https://ergoplatform.org/en/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Site</a></li>
        <li><a href="https://github.com/ergoplatform/ergo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Sources</a></li>
        <li><a href="https://github.com/aslesarenko/ergo-appkit" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Appkit</a></li>
        <li><a href="https://github.com/aslesarenko/ergo-appkit-examples" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Ergo Appkit Examples</a></li>
        <li><a href="https://www.graalvm.org" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">GraalVM</a></li>
      </ul>
    </>
  );
} 