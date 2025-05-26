import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code, FileText, Github, Play, Terminal } from "lucide-react"

export default function BuildPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Developer Hub</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Everything you need to build decentralized applications on Ergo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Documentation</CardTitle>
              <CardDescription>Comprehensive guides and API references</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Getting Started</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>API Reference</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>SDK Documentation</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/build/docs">
                  View Documentation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Tutorials</CardTitle>
              <CardDescription>Step-by-step guides for developers</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Building Your First dApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Smart Contract Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Integration Guides</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/build/tutorials">
                  Explore Tutorials
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Playground</CardTitle>
              <CardDescription>Interactive environment to test and experiment</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>ErgoScript Playground</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Transaction Builder</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Smart Contract Templates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full gap-2">
                <Link href="/build/playground">
                  Open Playground
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="getting-started">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="tools">Developer Tools</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Start Building on Ergo</CardTitle>
                    <CardDescription>Follow these steps to begin your development journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold mt-0.5">1</div>
                        <div>
                          <strong>Set up your development environment</strong>
                          <p className="text-muted-foreground mt-1">
                            Install the necessary tools and SDKs for Ergo development.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold mt-0.5">2</div>
                        <div>
                          <strong>Learn ErgoScript basics</strong>
                          <p className="text-muted-foreground mt-1">
                            Understand the fundamentals of Ergo's smart contract language.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold mt-0.5">3</div>
                        <div>
                          <strong>Build your first dApp</strong>
                          <p className="text-muted-foreground mt-1">
                            Follow our step-by-step tutorial to create a simple application.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full gap-2">
                      <Link href="/build/getting-started">
                        View Complete Guide
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Start Templates</CardTitle>
                    <CardDescription>Get up and running quickly with starter templates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center gap-2">
                          <Github className="h-5 w-5" />
                          <h3 className="font-medium">Basic dApp Template</h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          A simple template for building Ergo dApps with React and Ergo SDK.
                        </p>
                        <Button asChild variant="outline" size="sm" className="mt-4 w-full gap-2">
                          <Link href="https://github.com/ergoplatform/ergo-dapp-template">
                            Use Template
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex items-center gap-2">
                          <Github className="h-5 w-5" />
                          <h3 className="font-medium">Smart Contract Starter</h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          A template for developing and testing ErgoScript contracts.
                        </p>
                        <Button asChild variant="outline" size="sm" className="mt-4 w-full gap-2">
                          <Link href="https://github.com/ergoplatform/ergo-contract-template">
                            Use Template
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Ergo SDK</CardTitle>
                    <CardDescription>Official software development kit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The Ergo SDK provides a comprehensive set of tools and libraries for building applications on the
                      Ergo blockchain.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link href="/build/tools/sdk">
                        View SDK
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AppKit</CardTitle>
                    <CardDescription>Java/Scala development toolkit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      AppKit is a library for building Ergo applications using Java or Scala, with support for
                      transaction creation and signing.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link href="/build/tools/appkit">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Node API</CardTitle>
                    <CardDescription>Interact with the Ergo blockchain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The Ergo Node API allows developers to interact directly with the Ergo blockchain through REST
                      endpoints.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <Link href="/build/tools/node-api">
                        View API Docs
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Resources</CardTitle>
                    <CardDescription>In-depth technical documentation and papers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <Link href="/technology/whitepaper" className="hover:underline">
                          Ergo Whitepaper
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <Link href="/technology/ergoscript" className="hover:underline">
                          ErgoScript Specification
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <Link href="/technology/eutxo" className="hover:underline">
                          eUTXO Model Explained
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <Link href="/technology/autolykos" className="hover:underline">
                          Autolykos Consensus Protocol
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Resources</CardTitle>
                    <CardDescription>Developer community and support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" />
                        <Link href="https://discord.gg/ergo-platform-668903786361651200" className="hover:underline">
                          Developer Discord Channel
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-primary" />
                        <Link href="https://github.com/ergoplatform" className="hover:underline">
                          GitHub Organization
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" />
                        <Link href="https://stackoverflow.com/questions/tagged/ergo" className="hover:underline">
                          Stack Overflow
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <Terminal className="h-4 w-4 text-primary" />
                        <Link href="/community/events" className="hover:underline">
                          Developer Meetups & Events
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 rounded-lg border p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Ready to start building?</h2>
              <p className="text-muted-foreground">
                Join the growing community of developers building innovative applications on Ergo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <Link href="/build/getting-started">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/community">
                  Join Developer Community
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
