import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Download, Shield, Smartphone, HardDrive } from "lucide-react"

export default function WalletPage() {
  const wallets = {
    official: [
      {
        name: "Ergo Wallet",
        description: "Official Ergo wallet for desktop and mobile",
        image: "/placeholder.svg?height=80&width=80&query=Ergo Wallet",
        platforms: ["Windows", "macOS", "Linux", "iOS", "Android"],
        url: "https://ergoplatform.org/en/wallets/",
      },
    ],
    mobile: [
      {
        name: "Ergo Mobile",
        description: "Mobile wallet for iOS and Android",
        image: "/placeholder.svg?height=80&width=80&query=Ergo Mobile",
        platforms: ["iOS", "Android"],
        url: "https://ergoplatform.org/en/wallets/",
      },
      {
        name: "Terminus",
        description: "Feature-rich mobile wallet with dApp browser",
        image: "/placeholder.svg?height=80&width=80&query=Terminus",
        platforms: ["iOS", "Android"],
        url: "https://ergoplatform.org/en/wallets/",
      },
    ],
    hardware: [
      {
        name: "Ledger",
        description: "Hardware wallet with Ergo support",
        image: "/placeholder.svg?height=80&width=80&query=Ledger",
        platforms: ["Hardware"],
        url: "https://ergoplatform.org/en/wallets/",
      },
    ],
    browser: [
      {
        name: "Nautilus",
        description: "Browser extension wallet",
        image: "/placeholder.svg?height=80&width=80&query=Nautilus",
        platforms: ["Chrome", "Firefox", "Brave"],
        url: "https://ergoplatform.org/en/wallets/",
      },
      {
        name: "SAFEW",
        description: "Simple and fast Ergo web wallet",
        image: "/placeholder.svg?height=80&width=80&query=SAFEW",
        platforms: ["Web"],
        url: "https://ergoplatform.org/en/wallets/",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ergo Wallets</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Secure and manage your ERG and Ergo-based assets with these wallets.
          </p>
        </div>

        <div className="mt-4">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Wallets</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="browser">Browser</TabsTrigger>
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...wallets.official, ...wallets.mobile, ...wallets.browser, ...wallets.hardware].map(
                  (wallet, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Image
                            src={wallet.image || "/placeholder.svg"}
                            alt={wallet.name}
                            width={60}
                            height={60}
                            className="rounded-md"
                          />
                          <div>
                            <CardTitle>{wallet.name}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {wallet.platforms.map((platform, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                                >
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground">{wallet.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full gap-2">
                          <Link href={wallet.url}>
                            <Download className="h-4 w-4" />
                            Download
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wallets.mobile.map((wallet, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src={wallet.image || "/placeholder.svg"}
                          alt={wallet.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>{wallet.name}</CardTitle>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {wallet.platforms.map((platform, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">{wallet.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full gap-2">
                        <Link href={wallet.url}>
                          <Download className="h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="browser" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wallets.browser.map((wallet, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src={wallet.image || "/placeholder.svg"}
                          alt={wallet.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>{wallet.name}</CardTitle>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {wallet.platforms.map((platform, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">{wallet.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full gap-2">
                        <Link href={wallet.url}>
                          <Download className="h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hardware" className="mt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wallets.hardware.map((wallet, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Image
                          src={wallet.image || "/placeholder.svg"}
                          alt={wallet.name}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                        <div>
                          <CardTitle>{wallet.name}</CardTitle>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {wallet.platforms.map((platform, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground">{wallet.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full gap-2">
                        <Link href={wallet.url}>
                          <Download className="h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Wallet Security</CardTitle>
              <CardDescription>Best practices for keeping your assets safe</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Always backup your seed phrase in a secure location</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Never share your private keys or seed phrase with anyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Use hardware wallets for storing large amounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1" />
                  <span>Keep your wallet software updated</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/wallet/security">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Mobile Wallets</CardTitle>
              <CardDescription>Manage your assets on the go</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Mobile wallets offer convenience and accessibility, allowing you to manage your Ergo assets from
                anywhere.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>User-friendly interface</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Biometric authentication</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>dApp integration</span>
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/wallet/mobile">
                  View Mobile Wallets
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="rounded-full bg-primary/10 p-3 w-fit">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Hardware Wallets</CardTitle>
              <CardDescription>Maximum security for your assets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Hardware wallets provide the highest level of security by keeping your private keys offline.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Cold storage security</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Protection against malware</span>
                  <span className="text-green-500">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Physical backup</span>
                  <span className="text-green-500">✓</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" className="w-full gap-2">
                <Link href="/wallet/hardware">
                  View Hardware Wallets
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 rounded-lg border p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Need help with your wallet?</h2>
              <p className="text-muted-foreground">
                Check out our guides and tutorials or get support from the community.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <Link href="/wallet/guides">
                  View Guides
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/community">
                  Get Support
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
