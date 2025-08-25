"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function MosaikErgoPayPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Ergo Mosaik: A UI system for Ergo dApps</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/pathways/mosaik/tutorial"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Part 4: Implementing Sending Funds screen</h2>
      <p className="text-gray-300 mb-4">Welcome back to the Ergo Mosaik tutorial series! In this part of the series, we want to implement a Send Funds screen as an example application on how to execute transactions on the ergo network based on user input. For this, we use the lessons learned in Part 2 (implementing a simple screen) and Part 3 (processing data) of this tutorial, and mix in some new knowledge regarding ErgoPay. You can find an in-depth tutorial for ErgoPay in <a href="https://medium.com/@bschulte19e/implement-a-dapp-using-ergopay-d95e17a51410" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[1]</a>, but we cover everything needed here as well.</p>
      <p className="text-gray-300 mb-4">Our plan is the following: We want to implement a screen where the user can connect his wallet and can enter a recipient and an ERG amount to send. When clicking send, the user should be able to sign a transaction reflecting the entered data - and we are done.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>We will lay out all elements in a Column</li>
        <li>Connecting the wallet is done with an “AddressChooseButton”</li>
        <li>Recipient address is done with an “ErgAddressInputField”</li>
        <li>Entering the ERG amount is done with a “FiatOrErgAmountInputField”</li>
        <li>User can send the amount by pushing a button</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Implementing the UI</h3>
      <p className="text-gray-300 mb-4">We will implement our new send funds app in our existing tutorial project, but we will add a new controller class and use a new endpoint to separate it from our former demo app we’ve implemented so far. This serves also as an example that a single Spring Boot process can serve multiple separated Mosaik apps, if this is needed. Our bare new controller will look like this (see Part 2 “A first simple screen”):</p>
      <CodeBlock language="python">{`@RestController

class SendFundsAppController {
   @GetMapping("/sendfunds")
   fun getSendFundsApp(): MosaikApp {

   }
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">So, let’s get to it and fill it with actual useful content!</p>
      <CodeBlock language="scala">{`private val idSenderAddress = "ergaddress"

private val idRecipient = "recipient"
private val idAmountToSend = "amount"

@GetMapping("/sendfunds")
fun getSendFundsApp(): MosaikApp {
   return mosaikApp(
       "Send Funds Mosaik App",
       appVersion = 1
   ) {
       card {
           column(Padding.DEFAULT) {

               ergoAddressChooser(idSenderAddress)

               ergAddressInputField(idRecipient, "Recipient", mandatory = true)

               ergAmountInputField(idAmountToSend, "Amount", canUseFiatInput = true) {
                   minValue = 1000 * 1000
               }

               button("Send")
           }
       }
   }
}`}</CodeBlock>
      {/* <img src="../../../assets/img/mosaik/tutorial4-1.png" alt="Mosaik 1" className="rounded-xl border border-neutral-700 mb-6" /> */}
      <p className="text-gray-300 mb-4">A remark regarding the functionality of the “Choose an address…” button: The desktop debugger will show an ugly input dialog to enter an address when clicked. This is of course not what an end user will see. When using the Android app and clicking the button, the user will get presented the known address selection dialog:</p>
      {/* <img src="../../../assets/img/mosaik/tutorial4-2.png" alt="Mosaik 2" className="rounded-xl border border-neutral-700 mb-6" /> */}
      <p className="text-gray-300 mb-4">What is missing is the actual action of the send button.</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">ErgoPay: Preparing a transaction for the user to sign</h3>
      <p className="text-gray-300 mb-4">When the Send button is clicked, we want to prepare a transaction with the entered data which the user needs to sign before submitting it to the ergo network. This is exactly what ErgoPay is intended for: ErgoPay is a protocol to transfer a prepared “reduced transaction” to a wallet and let the user sign and submit it. What is a “reduced transaction”? It is an unsigned transaction with all blockchain context-dependent variables already replaced by actual data (In case of a simple payment without any smart contracts, it is nearly the same as an unsigned transaction). That means we have three task to tackle:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>Building a reduced transaction based on user input</li>
        <li>wrap it into ErgoPay protocol</li>
        <li>make the send button use ErgoPay</li>
      </ul>
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">Building a reduced transaction based on user input</h4>
      <p className="text-gray-300 mb-4">This task is already completely covered by <a href="https://medium.com/@bschulte19e/implement-a-dapp-using-ergopay-d95e17a51410" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[1]</a>. We will do all necessary steps here together, but without much explanation - вы можете найти больше объяснений там.</p>
      <CodeBlock language="typescript">{`// ErgoPay

dependencies {
    implementation ("org.ergoplatform:ergo-appkit_2.12:4.0.10")
}`}</CodeBlock>
      <CodeBlock language="scala">{`private fun getReducedSendTx(

   amountToSend: Long,
   sender: Address,
   recipient: Address
): ReducedTransaction {
   val networkType = recipient.networkType
   return RestApiErgoClient.create(
       getDefaultNodeUrl(networkType),
       networkType,
       "",
       RestApiErgoClient.getDefaultExplorerUrl(networkType)
   ).execute { ctx: BlockchainContext ->
       val contract = recipient.toErgoContract()
       val unsignedTransaction = BoxOperations.createForSender(sender, ctx)
           .withAmountToSpend(amountToSend)
           .putToContractTxUnsigned(contract)
       ctx.newProverBuilder().build().reduce(unsignedTransaction, 0)
   }
}

// this class processes all requests from the an ErgoPay wallet application
val nodeMainnet = "http://213.239.193.208:9053/"
val nodeTestnet = "http://213.239.193.208:9052/"

private fun getDefaultNodeUrl(networkType: NetworkType): String =
   if (networkType == NetworkType.MAINNET) nodeMainnet else nodeTestnet`}</CodeBlock>
      <p className="text-gray-300 mb-4">You can change the node used here to your own, or find another one on <a href="https://api.tokenjay.app/peers/list" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[2]</a>.</p>
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">Wrapping the reduced transaction</h4>
      <p className="text-gray-300 mb-4">Now we have to wrap this transaction into the ErgoPay protocol. ErgoPay protocol is defined in <a href="https://github.com/ergoplatform/eips/blob/master/eip-0020.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[3]</a>: according to it, we need to wrap the transaction into a json with the following content:</p>
      <CodeBlock language="typescript">{`// transaction: ReducedTransaction (optional*)

// p2pkaddress: String (optional)
// message: String (optional*)
// messageSeverity: String (optional) "INFORMATION", "WARNING", "ERROR"
// replyToUrl: String (optional)`}</CodeBlock>
      <p className="text-gray-300 mb-4">Model classes like “ErgoPay for ErgoPay are already defined to be used in Spring projects in another dependency that we can pull in by adding it to our build.gradle.kts file:</p>
      <CodeBlock language="typescript">{`dependencies {

    implementation ("com.github.MrStahlfelge:ergoplatform-jackson:4.0.10")
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">The json should be served on an own http endpoint, so we add the ErgoPay endpoint to our SendFundsAppController class:</p>
      <CodeBlock language="scala">{`@GetMapping("/sendFunds/{sender}/{recipient}/{amount}")

fun sendFundsSigningRequest(
   @PathVariable sender: String,
   @PathVariable recipient: String,
   @PathVariable amount: Long
): ErgoPayResponse {
   val response = ErgoPayResponse()
   try {
       val reduced = getReducedSendTx(amount, Address.create(sender), Address.create(recipient)).toBytes()
       response.reducedTx = Base64.getUrlEncoder().encodeToString(reduced)
       response.address = sender
       response.message = "Please sign the transaction."
       response.messageSeverity = ErgoPayResponse.Severity.INFORMATION
   } catch (t: Throwable) {
       response.messageSeverity = ErgoPayResponse.Severity.ERROR
       response.message = t.message
   }
   return response
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">As you can see, the ErgoPay endpoint URL contains exactly the parameters the user can enter. Because we added the @PathVariable annotation, Spring will automatically map the URL path placeholders to the method parameters. The returned ErgoPayResponse object will be converted to json by Spring, too.</p>
      <h4 className="text-lg font-bold text-cyan-400 mt-4 mb-2">Make the Send button use ErgoPay</h4>
      <p className="text-gray-300 mb-4">All we have to do now is map the Mosaik user inputs to the ErgoPay endpoint URL and make the executing wallet application fetch it as an ErgoPay input.</p>
      <CodeBlock language="typescript">{`button("Send") {

   onClickAction(backendRequest("sendfundsClicked"))
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">We also need to provide the endpoint for this request:</p>
      <CodeBlock language="scala">{`@PostMapping("/sendfunds/sendfundsClicked")

fun sendFundsClicked(@RequestBody values: Map<String, Any?>, request: HttpServletRequest): FetchActionResponse {
   val sender = values[idSenderAddress] as? String
   val recipient = values[idRecipient] as? String
   val amount = (values[idAmountToSend] as? Number)?.toLong()   // 1

   // 2
   val ok =
       sender != null && recipient != null && amount != null && (amount >= Parameters.MinChangeValue)

   val responseAction: Action = if (!ok) {
       showDialog("Inputs are not valid", id = "errorDialog")
   } else {
       // 3
       val thisEndpointHostname = request.requestURL.toString().substringAfter("://").substringBefore("/")
       val ergoPayUrl = "ergopay://$thisEndpointHostname/sendFunds/$sender/$recipient/$amount"
       invokeErgoPay(ergoPayUrl, id = "epSendFunds")
   }

   return backendResponse(
       1,
       responseAction
   )
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">So far, this is how we’ve learned it, but there are some marked lines to comment on:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>1)</b> the cast to number and then conversion to long might surprise. We know that the ErgAmountInputField always use Long - what is going on here? To understand this, you must remind yourself that the actual long value is transmitted by JSON format and automatically converted back by Spring. JSON has only a number format, и когда Spring конвертирует это число обратно в объект JVM, он не знает, Long это или Integer, поэтому выбирает Integer, если значение не слишком большое. Поэтому amount может быть Integer или Long. Приведение к Number и преобразование в Long гарантирует, что amount будет Long.</li>
        <li><b>2)</b> наша проверка на стороне backend дублирует проверки на стороне клиента, но мы рекомендуем всегда делать двойную проверку.</li>
        <li><b>3)</b> ergoPay url строится с помощью request.requestUrl, чтобы всегда использовать тот hostname, по которому клиент обратился к вашему endpoint.</li>
      </ul>
      <p className="text-gray-300 mb-4">When you run this Mosaik app in the desktop debugger, it gives the expected behavior. Far more fun is it to run the app in the Android wallet app, which will really make a transaction on the ergo network. The only task left is a minor issue: When the ErgoPay transaction was performed, we are sent back to the Mosaik app which is still showing the former inputs. It is better to empty them by simply reloading the app. You will find this implemented in the GitHub repository for this example <a href="https://github.com/MrStahlfelge/mosaik-tutorial-series/blob/af520069f88163aa833d330a060cde136d7a070e/src/main/kotlin/com/example/ergomosaik/mosaikapp/SendFundsAppController.kt" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[4]</a>.</p>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Conclusion</h3>
      <p className="text-gray-300 mb-4">We implemented a Mosaik app that sends funds based on user inputs in a trustless way. Your app don’t need access to the user’s secrets, and the user can review every transaction made from your app before signing it. This is all done from a single simple codebase in Kotlin, served by a Spring Boot process.</p>
      <p className="text-gray-300 mb-4">The tutorial on implementations is now done. The next part will take a look at what comes next: Deployment, and how you can make your Mosaik app working on web browsers. See you next time!</p>
      <h3 className="text-xl font-bold text-cyan-400 mb-2 mt-8">References</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
        <li><a href="https://medium.com/@bschulte19e/implement-a-dapp-using-ergopay-d95e17a51410" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[1] Implement a dApp using ErgoPay</a></li>
        <li><a href="https://api.tokenjay.app/peers/list" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[2] List of public nodes</a></li>
        <li><a href="https://github.com/ergoplatform/eips/blob/master/eip-0020.md" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[3] ErgoPay protocol EIP-0020</a></li>
        <li><a href="https://github.com/MrStahlfelge/mosaik-tutorial-series/blob/af520069f88163aa833d330a060cde136d7a070e/src/main/kotlin/com/example/ergomosaik/mosaikapp/SendFundsAppController.kt" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">[4] Example project on GitHub</a></li>
      </ul>
    </>
  );
} 
