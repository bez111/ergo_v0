"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CodeBlock } from "@/components/ui";

export default function MosaikDeploymentPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight pb-1">Ergo Mosaik: Build, dockerize and deploy</h1>
      <div className="mb-6">
        <Link
          href="/docs/developers/tooling/pathways/mosaik/tutorial"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>
      <p className="text-gray-300 mb-4">In our Mosaik tutorial series, we've built a Mosaik app using Spring Boot. It runs perfectly on our local machine, but what we really want is other people enjoying our application. These people might not want to deal with Gradle and Git, so let's see how we can bring our app to them!</p>
      <p className="text-gray-300 mb-4">All examples here are done to our Mosaik example app we've built in the tutorial series. You can find the <a href="https://github.com/MrStahlfelge/mosaik-tutorial-series" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">repository on GitHub</a>.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Building the jar</h2>
      <p className="text-gray-300 mb-4">Although we used Kotlin to write parts of our application, it compiles to a plain JAR file - a Java ARchive. That is a good thing: Java is a widely used language for applications and runs on all desktop and server systems. The only prerequisite to run a JAR file is installing a JRE - a Java Runtime Environment - first.</p>
      <p className="text-gray-300 mb-4">Building the jar file for your Mosaik app based on Spring Boot is quite simple: You do it with the <code>gradlew bootJar</code> command. When this finished, you will find your compiled jar in the <code>build/libs</code> subdirectory. It is named with the project name and version, so in our case it is <code>mosaikapp-0.0.1-SNAPSHOT.jar</code>. Try running it with <code>java -jar mosaikapp-0.0.1-SNAPSHOT.jar</code>: Your application starts up and the Mosaik app is served on your local network.</p>
      <p className="text-gray-300 mb-4">You can now give this JAR file to other people to run it, or run it on a server. For running it on a server, it often is needed to pack the application into a Docker container. We'll do that next!</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Dockerizing the jar</h2>
      <p className="text-gray-300 mb-4"><a href="https://docs.docker.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Docker</a> is an application to package and run your application within its own predefined container. You already know that you need a JRE to run the application. With Docker, you can build an image with an installed Java and your application, and with predefined commands to run your application. This is not aiming to end users: for end users it is better to download JRE and run your application manually. But on servers, it is very good to have an image defining what to spin up and how, and Docker is usually available. It is also prerequisite to host your application on <a href="https://runonflux.io/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Flux</a>, which is a natural fit for dAps and Ergo is partnering with.</p>
      <p className="text-gray-300 mb-4">To dockerize your application, place a plain text file named <code>dockerfile</code> on the root level of your Mosaik app repo (next to <code>gradlew</code> and <code>build.gradle</code> files) with the following content:</p>
      <CodeBlock language="typescript">{`# syntax=docker/dockerfile:1

FROM eclipse-temurin:17-jdk-jammy
COPY build/libs/mosaikapp-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]`}</CodeBlock>
      <p className="text-gray-300 mb-4">The first line is defining the docker file syntax and not interesting for us. The second line is the most powerful one: It defines that our Docker image will built up on the definitions of a Docker image called <code>eclipse-temurin:17-jdk-jammy</code> - it is an image shipping a Java 17 JDK. Find more information on the <a href="https://hub.docker.com/_/eclipse-temurin" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">project page</a>.</p>
      <p className="text-gray-300 mb-4">The third line copies our jar we've built before into the Docker image, and the last line defines running it is the "entry point" to the container image.</p>
      <p className="text-gray-300 mb-4">Our Spring Boot server runs on port 8080, so line 4 defines that this port is exposed when the image runs in a Docker container.</p>
      <p className="text-gray-300 mb-4">With this file, we can build a Docker image. You'll need to install Docker on your system for this. You'll find information how to do so on <a href="https://docs.docker.com/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Docker Docs</a>. When Docker is installed, you can build the Docker image with a command like the following</p>
    </>
  );
}
