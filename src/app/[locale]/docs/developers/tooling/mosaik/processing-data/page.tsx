"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function MosaikProcessingDataPage() {
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
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">3: Processing data</h2>
      <p className="text-gray-300 mb-4">In Part 2 of this tutorial series for Ergo Mosaik, we learned how to define the first simple UI for a dApp that can be shown within Wallet applications (and by using the Mosaik web executors in web browsers as well).</p>
      {/* <img src="../../../assets/img/mosaik/tutorial3-1.png" alt="Mosaik UI" className="rounded-xl border border-neutral-700 mb-6" /> */}
      <p className="text-gray-300 mb-4">So far, we have seen how to show a card with a label and a button and how to run actions within Mosaik. I recommend you to take a look at the view elements demo again: Start the backend-demo-kotlin subproject from the mosaik repository and start the desktop debugger</p>
      <CodeBlock language="typescript">{`./gradlew backend-demo-kotlin:bootRun

./gradlew desktop-demo:run`}</CodeBlock>
      <p className="text-gray-300 mb-4">Then navigate to localhost:8080 on the desktop demo. Check out all the sub screens to get a feeling of how much is provided by Mosaik. Every page has a GitHub link at the top that brings you to the source code. Use this to learn how to describe the view elements in the code.</p>
      <p className="text-gray-300 mb-4">There is also an overview of available actions. Most actions are much like the showDialog action we already learned about: openBrowser, copyToClipboard etc work quite similar.</p>
      <p className="text-gray-300 mb-4">There are some actions that are more complex. Some enable Mosaik to have real interaction and to process data with your backend, namely backendRequest() and changeView(). Some others allow initiating a blockchain interaction, namely ErgoPay and ErgoAuth. We’ll take a look at the former ones now.</p>

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Process data with backendRequest</h3>
      <p className="text-gray-300 mb-4">backendRequest() is an action that executes a POST request to your backend containing all input values of the current screen and expects a response with an action to run subsequently. This enables you to write complex logic in your backend resulting in different outcomes for the Mosaik app user. Your logic can operate on input values by the user. To have any input values defined, we need to add an input view element on our current screen. We start with a simple text input field. Open your MosaikController from last time and add it to your card:</p>
      <CodeBlock language="typescript">{`card {

   column(Padding.DEFAULT) {
       label("Hello Ergo world!", LabelStyle.HEADLINE2)

       box(Padding.HALF_DEFAULT)

       // this is new - begin
       textInputField("inputId", "Enter your name")
       box(Padding.HALF_DEFAULT)
       // this is new - end

       button("Click me") {
           onClickAction(showDialog("You clicked the button.", "myaction"))
       }
   }
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">Start your Spring server process and navigate to your app in the desktop debugger. We can observe two things: First, unsurprisingly, is that the text input field is shown and ready for input. The second observation is less obvious and perhaps not expected: The debugger shows the current values for inputs on the right-hand side above the JSON sources with validity information:</p>
      {/* <img src="../../../assets/img/mosaik/tutorial3-2.png" alt="Mosaik input validity" className="rounded-xl border border-neutral-700 mb-6" /> */}
      <p className="text-gray-300 mb-4">When there is nothing entered (like in the screenshot above), the value for “inputId” is “null” which is valid. Enter something. You will see the value reflected and the type switches to String.</p>
      <p className="text-gray-300 mb-4">What is this validity? On many input types, you can add some properties defining restrictions on which inputs are valid. For example, we can define that only names with a length of 3 to 10 characters are valid by changing our app code like this:</p>
      <CodeBlock language="typescript">{`textInputField("inputId", "Enter your name") {

   minValue = 3
   maxValue = 10
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">Restart the app server and reload the app. You will now see that the text input field will indicate invalid inputs, and the desktop debugger will report them as invalid.</p>
      <p className="text-gray-300 mb-4">The validity information is not only used for indications to the user but also has an effect on the backendRequest(). But for this to see, we will have to introduce the backendRequest by changing the code for our button like this:</p>
      <CodeBlock language="typescript">{`button("Click me") {

   onClickAction(backendRequest("enteredName"))
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">Just making a backend request does not make much sense without providing an endpoint it can reach. Our endpoint URL is defined as “enteredName” in the code above, so we add the new endpoint with the following code:</p>
      <CodeBlock language="bash">{`@PostMapping("/enteredName")

fun userEnteredName(@RequestBody values: Map<String, Any?>) =
   backendResponse(
       1,
       showDialog("User entered \${values["inputId"]}")
   )`}</CodeBlock>
      <p className="text-gray-300 mb-4">Let’s break this down line by line.</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>@PostMapping</b> is an annotation to tell Spring POST requests on /enteredName should be mapped to the following method.</li>
        <li>the Kotlin method declaration. The method expects a Map object parameter, where the keys are Strings and the values can be of any nullable type. The @RequestBody annotation makes springs map the body of the POST request to this Map object. This means every input value of our screen will have a map entry in the values map.</li>
        <li>backendResponse is a function in our Mosaik DSL returning a response to backendRequest(), which is what we want to have here</li>
        <li>this repeats our current app version that we sent to the Mosaik executor when the main app was loaded. We used app version 1 in our main app definition, so we give 1 here, too.</li>
        <li>Here follows our subsequent action that should be run by the Mosaik app. We show a dialog here as we did before, filling it with what the user entered. In case the Kotlin sugar for string replacements and maps confuses you, the following code does exactly the same and might be more familiar and clear for some folks:</li>
      </ul>
      <CodeBlock language="typescript">{`button("Click me") {

   onClickAction(backendRequest("enteredName") {
       postValues = BackendRequestAction.PostValueType.VALID
   })
}`}</CodeBlock>
      <p className="text-gray-300 mb-4">The default value for post values is (enforce) “ALL”, now changing it to “VALID” makes the backendRequest action post in any case, but only sending valid inputs. Restart again and try what happens with invalid inputs.</p>
      <p className="text-gray-300 mb-4">We have now seen how to send data to the backend and process it. However, reacting with a dialog to all types of methods is not a good user experience. We will now take a look on how we can alter the screen content.</p>

      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-8">Alter the screen content with changeView()</h3>
      <p className="text-gray-300 mb-4">changeView() is an action that contains a new mosaikView view content to attach it to the current screen. A view content is what you already delivered with your first main screen: it is an object holding a list of actions, and a root view element.</p>
      <blockquote className="border-l-4 border-cyan-400 pl-4 text-gray-300 italic mb-6">
        <b>Excursus: View element, view group, view content</b><br />
        We already know all of these objects, but to make sure no one gets confused, we list a clarification definition here.<br />
        <b>View element</b> is a basic element in a Mosaik view, like a label or a button.<br />
        <b>View group</b> is a special view element containing other view elements, like Box, Column, Row, Card.<br />
        <b>View content</b> defines the state of what Mosaik shows for your app. It is made up of is a <i>root view element</i> and a <i>list of actions</i> (which can be empty). Usually, the root view element should be a view group - otherwise, the screen would look very boring.
      </blockquote>
      <p className="text-gray-300 mb-4">The behavior of changeView() action needs some more explanation regarding how it actually affects existing screen content:</p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li>the new actions defined by the view content of the changeView() action are added to the existing set of actions. (If any of the new actions’ IDs equal an ID of an already defined action, the new action replaces the existing one.)</li>
        <li>the view root of the view content of the changeView() action will replace an existing view with the same id. If no view is found, or if the view root does not have an ID, the complete view tree is replaced</li>
      </ul>
      <p className="text-gray-300 mb-4">This behavior allows to alter the entire screen, or only change some single view elements.</p>
      <p className="text-gray-300 mb-4">To demonstrate this, let’s use our existing screen, but instead of showing a message box when a name was submitted, we change the title of the screen to show the name.</p>
      <p className="text-gray-300 mb-4">We will give the full code here and explain the annotated changes below:</p>
      <CodeBlock language="bash">{`@RestController

@CrossOrigin
class MosaikAppController {
   @GetMapping("/")
   fun getMainPage(): MosaikApp {
       return mosaikApp(
           "First Mosaik App", // app name shown in executors
           1 // the app version
       ) {
           // define the view here
           card {
               column(Padding.DEFAULT) {
                   label("Hello Ergo world!", LabelStyle.HEADLINE2) {
                       id = "titleLabel" // (1)
                   }

                   box(Padding.HALF_DEFAULT)

                   textInputField("inputId", "Enter your name") {
                       minValue = 3
                       maxValue = 10
                   }

                   box(Padding.HALF_DEFAULT)

                   button("Click me") {
                       onClickAction(backendRequest("enteredName")) // (2)
                   }
               }
           }
       }
   }

   @PostMapping("/enteredName")
   fun userEnteredName(@RequestBody values: Map<String, Any?>) =
       backendResponse(
           1,
           changeView(mosaikView { // (3)
               box {
                   id = "titleLabel"

                   label(
                       "Hello, \${values["inputId"]}",
                       LabelStyle.HEADLINE2,
                       textColor = ForegroundColor.PRIMARY
                   )
               }
           })
       )
}`}</CodeBlock>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Change (1):</b> We have attached an ID “titleLabel” to the title label. With this ID, we can replace this element.</li>
        <li><b>Change (2):</b> We removed the postValues = BackendRequestAction.PostValueType.VALID so that invalid inputs are not allowed any more</li>
        <li><b>Change (3):</b> We replaced the showDialog() action with changeView(). The changeView() gets a mosaikView(). It does not contain any new actions, but a box as the root view. This box has the ID “titleLabel” assigned, which will make this box replace the former title label.</li>
        <li>The box contains exactly a new label.</li>
        <li>(Excursus: You might ask: Why is the new label wrapped in a box, isn’t using a new label as view root enough? The answer is: Yes. It would be enough. The reason why we are using a wrapping box here is caused by the  Mosaik DSL which only defines view groups as root elements.)</li>
      </ul>
      <p className="text-gray-300 mb-4">Restart the Spring server and reload the app in the desktop demo. You can now see the title label changing.</p>
      <p className="text-gray-300 mb-4">As you can not only replace single elements but complete view groups of elements and even the former view root. This way, the whole screen content can be replaced.</p>
      <p className="text-gray-300 mb-4">You will find some examples demonstrating the data flow and changing screen content in the two demo projects in the Mosaik repository. You can also take a look at the open-sourced AgeUSD Mosaik UI example <a href="https://github.com/MrStahlfelge/mosaik-ageusddemo" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">here</a>  (the AgeUSD and blockchain part is a mock so that you only have interface-relevant code here by intention).</p>
      <p className="text-gray-300 mb-4">You will find the example project in its state after completing this tutorial series part on <a href="https://github.com/MrStahlfelge/mosaik-tutorial-series/tree/656a3aff847d57892442309f3f8b3d58c4fba3f8" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p className="text-gray-300 mb-4">The next part of this tutorial series will demonstrate how to implement a Send Ergo amount screen: The user can choose one of his wallet addresses and an Ergo amount and start a transaction that gets submitted to the Ergo network. All in all, if you followed this course and also followed the <a href="ep-tutorial.md" className="text-cyan-400 hover:underline">ErgoPay introduction</a>, you have all ingredients together to do the job - we just have to mix it together.</p>
      <p className="text-gray-300 mb-4">We close this course with a sneak peek at how our example looks using the <a href="https://github.com/MrStahlfelge/mosaik-kt-js" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Mosaik web executor</a>. As you can see, it looks similar to how the desktop debugger and the Ergo Wallet App show our implemented screen, which is exactly how it should be.</p>
      {/* <img src="../../../assets/img/mosaik/tutorial3-3.png" alt="Mosaik web executor" className="rounded-xl border border-neutral-700 mb-6" /> */}
      <p className="text-gray-300 mb-4">See you in part 4!</p>
    </>
  );
} 
