"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { UniversalCopyCodeBlock } from "@/components/ui/UniversalCopyCodeBlock";

export default function ErgoPayTutorialPage() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">ErgoPay Tutorial: Backend Integration</h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/tooling/payments/ergopay"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">What we’ll do in this tutorial</h2>
      <div className="text-gray-300 mb-6 max-w-2xl">
        This tutorial focuses on implementing the backend server-side for ErgoPay, building and preparing transactions. We’ll use <a href="https://spring.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spring Boot</a> to implement a simple ErgoPay REST API. Spring is JVM-based, and <a href="https://github.com/ergoplatform/ergo-appkit" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ergo-appkit</a> is also JVM-based. You can use any other language/framework, but this tutorial uses Java for simplicity. The UI side is not covered here, but the code for the ErgoPay showcase dApp is <a href="https://github.com/MrStahlfelge/ergopay-frontend-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">open-sourced</a>.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Starting your Spring Boot project</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        You can use any IDE. Install a Java Development Kit (JDK) if you don't have one. Use OpenJDK on Linux or <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Adoptium</a> on Windows. Generate a fresh Spring Boot project with the <a href="https://start.spring.io/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spring Initializr</a>. Add the “Spring web” dependency. Download, extract, and open the project in your IDE.
      </div>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Start your application with Gradle:
      </div>
      <UniversalCopyCodeBlock code={`./gradlew bootRun // MacOS/Linux
gradlew bootRun   // Windows`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        The server runs on <b>http://localhost:8080/</b>. To get familiar with REST APIs in Spring, follow the <a href="https://spring.io/quickstart" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Spring Quick Start</a> and implement a Hello World endpoint.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Adding an ErgoPay request endpoint</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        An ErgoPay endpoint is a GET REST API method that returns an “ErgoPayResponse” (JSON). First, declare this response type as a Java object:
      </div>
      <UniversalCopyCodeBlock code={`package org.ergoplatform.ergopay;

import com.fasterxml.jackson.annotation.JsonInclude;

public class ErgoPayResponse {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String message;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public Severity messageSeverity;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String address;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String reducedTx;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public String replyTo;

    enum Severity { NONE, INFORMATION, WARNING, ERROR }
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        To send this as a response, declare it as the return type of a RestController method:
      </div>
      <UniversalCopyCodeBlock code={`@GetMapping("/ergopay/")
public ErgoPayResponse ergoPayError() {
     ErgoPayResponse response = new ErgoPayResponse();
     response.messageSeverity = ErgoPayResponse.Severity.ERROR;
     response.message = "Nothing implemented yet.";
     return response;
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        This is a valid ErgoPay endpoint. If you start your Spring Boot app and open <b>http://localhost:8080/ergopay</b>, you’ll see the JSON response. To test in a wallet app, use a QR code with the URL (replace localhost with your IP):
      </div>
      <UniversalCopyCodeBlock code={`ergopay://192.168.0.1:8080/ergopay`} className="mb-4" />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Building and reducing a transaction</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        To build a transaction, add the Ergo SDK to your build.gradle:
      </div>
      <UniversalCopyCodeBlock code={`dependencies {
   implementation 'org.springframework.boot:spring-boot-starter-web'
   implementation 'org.ergoplatform:ergo-appkit_2.11:4.0.6'
   testImplementation 'org.springframework.boot:spring-boot-starter-test'
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        Add a helper method to build a reduced transaction:
      </div>
      <UniversalCopyCodeBlock code={`private ReducedTransaction getReducedSendTx(boolean isMainNet, long amountToSend, Address sender, Address recipient) {
    NetworkType networkType = isMainNet ? NetworkType.MAINNET : NetworkType.TESTNET;
    return RestApiErgoClient.create(
            getDefaultNodeUrl(isMainNet),
            networkType,
            "",
            RestApiErgoClient.getDefaultExplorerUrl(networkType)
    ).execute(ctx -> {
        ErgoTreeContract contract = new ErgoTreeContract(recipient.getErgoAddress().script());
        UnsignedTransaction unsignedTransaction = BoxOperations.putToContractTxUnsigned(ctx,
                Collections.singletonList(sender),
                contract, amountToSend, Collections.emptyList());
        return ctx.newProverBuilder().build().reduce(unsignedTransaction, 0);
    });
}

public static final String NODE_MAINNET = "http://213.239.193.208:9053/";
public static final String NODE_TESTNET = "http://213.239.193.208:9052/";

private static String getDefaultNodeUrl(boolean mainNet) {
    return mainNet ? NODE_MAINNET : NODE_TESTNET;
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        Add an endpoint to use this helper:
      </div>
      <UniversalCopyCodeBlock code={`@GetMapping("/roundTrip/{address}")
public ErgoPayResponse roundTrip(@PathVariable String address) {
    ErgoPayResponse response = new ErgoPayResponse();
    try {
        boolean isMainNet = isMainNetAddress(address);
        long amountToSend = 1000L * 1000L * 1000L;
        Address sender = Address.create(address);
        Address recipient = Address.create(address);
        byte[] reduced = getReducedSendTx(isMainNet, amountToSend, sender, recipient).toBytes();
        response.reducedTx = Base64.getUrlEncoder().encodeToString(reduced);
        response.address = address;
        response.message = "Here is your 1 ERG round trip.";
        response.messageSeverity = ErgoPayResponse.Severity.INFORMATION;
    } catch (Throwable t) {
        response.messageSeverity = ErgoPayResponse.Severity.ERROR;
        response.message = (t.getMessage());
    }
    return response;
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        Try the endpoint manually:
      </div>
      <UniversalCopyCodeBlock code={`http://localhost:8080/roundTrip/<address>`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        Or with a wallet app (replace placeholders):
      </div>
      <UniversalCopyCodeBlock code={`ergopay://<yourIP>:8080/roundTrip/#P2PK_ADDRESS#`} className="mb-4" />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Going further</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        Now experiment with building other types of transactions. See the <a href="https://github.com/MrStahlfelge/ergopay-server-example/blob/master/src/main/java/org/ergoplatform/ergopay/ErgoPaySampleController.java" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoPay example server</a> for endpoints like minting, burning, and spending boxes. You can use getReducedSendTx for payment services, knowing the transaction id in advance.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Connect a wallet to your UI</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        For some dApps, you may need the wallet address before building a transaction. Use a session id (uuid) to map a user’s address. Backend endpoints:
      </div>
      <UniversalCopyCodeBlock code={`@GetMapping("/getUserAddress/{sessionId}")
public String getUserAddress(@PathVariable String sessionId) {
    UserData userData = sessionService.getUserData(sessionId);
    return (userData.p2pkAddress != null) ? userData.p2pkAddress : "";
}

@GetMapping("/setAddress/{sessionId}/{address}")
public ErgoPayResponse setAddress(@PathVariable String sessionId, @PathVariable String address) {
    UserData userData = sessionService.getUserData(sessionId);
    ErgoPayResponse response = new ErgoPayResponse();
    try {
        boolean isMainNet = isMainNetAddress(address);
        response.address = address;
        userData.p2pkAddress = address;
        response.message = "Connected to your address " + address + ".\n\nYou can now continue using the dApp.";
        response.messageSeverity = ErgoPayResponse.Severity.INFORMATION;
    } catch (Throwable t) {
        response.messageSeverity = ErgoPayResponse.Severity.ERROR;
        response.message = (t.getMessage());
    }
    return response;
}`} className="mb-4" />
      <div className="text-gray-300 mb-4 max-w-2xl">
        The session service can be a simple HashMap for demo, but use a robust solution for production. To connect, show a QR code with:
      </div>
      <UniversalCopyCodeBlock code={`ergopay://<yourIP>:8080/setAddress/<sessionId>/#P2PK_ADDRESS#`} className="mb-4" />

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Your dApp UI on the same device as the wallet app</h2>
      <div className="text-gray-300 mb-4 max-w-2xl">
        If the dApp and wallet app are on the same device, show the ErgoPay URL as a link instead of a QR code. Clicking the link will open the wallet app if installed.
      </div>

      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Conclusion</h2>
      <div className="text-gray-300 mb-8 max-w-2xl">
        You’ve learned to build an ErgoPay-capable backend. See the <a href="https://github.com/MrStahlfelge/ergopay-server-example" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">full example on GitHub</a>. It is also deployed on Heroku, a free hosting service for web apps that you can use to start off with your own projects.
      </div>
    </>
  );
} 