import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, User, Code, Cpu, LineChart, BookOpen } from "lucide-react"

export default function StartPage() {
  const userTypes = [
    {
      icon: User,
      title: "New User",
      description: "Just getting started with Ergo and blockchain technology",
      href: "/start/new-user",
    },
    {
      icon: Code,
      title: "Developer",
      description: "Building applications and smart contracts on Ergo",
      href: "/start/developer",
    },
    {
      icon: Cpu,
      title: "Miner",
      description: "Contributing to network security through mining",
      href: "/start/miner",
    },
    {
      icon: LineChart,
      title: "Investor",
      description: "Interested in ERG as an investment or trading asset",
      href: "/start/investor",
    },
    {
      icon: BookOpen,
      title: "Researcher",
      description: "Studying blockchain technology and cryptography",
      href: "/start/researcher",
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started with Ergo</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose your path and discover personalized resources to help you get started with Ergo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {userTypes.map((type, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-3 w-fit">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full gap-2">
                  <Link href={type.href}>
                    View Resources
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-lg border p-8">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Take the Onboarding Quiz</h2>
              <p className="text-muted-foreground">
                Not sure where to start? Take our quick quiz to get personalized recommendations based on your interests
                and goals.
              </p>
            </div>
            <Button asChild className="w-fit gap-2">
              <Link href="/start/quiz">
                Start Quiz
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get up and running with Ergo in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold">1</div>
                  <span>Set up an Ergo wallet</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold">2</div>
                  <span>Get some ERG tokens</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-1 text-primary text-xs font-bold">3</div>
                  <span>Try a dApp in the ecosystem</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/start/quick-start">
                  View Guide
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Educational content for all knowledge levels</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Beginner's Guide to Blockchain</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Understanding Ergo's eUTXO Model</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Smart Contracts on Ergo</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/learn">
                  Explore Learning Hub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Support</CardTitle>
              <CardDescription>Get help from the Ergo community</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Discord Community Chat</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Ergo Forum</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Telegram Groups</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/community">
                  Join Community
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
