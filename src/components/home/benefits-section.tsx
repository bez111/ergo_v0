import { Shield, Zap, Lock, RefreshCw, Layers, Cpu } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Resilient & Secure",
      description:
        "Built on Proof of Work consensus with ASIC-resistant mining algorithm for long-term security and decentralization.",
    },
    {
      icon: Zap,
      title: "Efficient & Scalable",
      description: "Optimized for performance with innovative solutions for throughput and storage efficiency.",
    },
    {
      icon: Lock,
      title: "Privacy-Focused",
      description:
        "Advanced cryptographic features that enable optional privacy while maintaining compliance capabilities.",
    },
    {
      icon: RefreshCw,
      title: "Sustainable",
      description: "Storage rent mechanism prevents blockchain bloat and ensures long-term economic sustainability.",
    },
    {
      icon: Layers,
      title: "eUTXO Model",
      description: "Extended UTXO model combines Bitcoin's security with Ethereum's programmability.",
    },
    {
      icon: Cpu,
      title: "ErgoScript",
      description: "Powerful smart contract language designed for secure financial contracts.",
    },
  ]

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Pillars</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Ergo combines proven principles with cutting-edge cryptography to create a secure and efficient platform.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-2 rounded-lg border p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
