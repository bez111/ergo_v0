"use client"

import { ArrowRight, ExternalLink } from "lucide-react"

import { Link } from "@/i18n/navigation"

type PersonaPathStep = {
  label: string
  description: string
  href: string
  external?: boolean
}

type PersonaPathPanelProps = {
  eyebrow: string
  title: string
  description: string
  steps: PersonaPathStep[]
}

function StepLink({ step, index }: { step: PersonaPathStep; index: number }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 font-mono text-xs font-bold text-orange-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold text-white transition-colors group-hover:text-orange-300">
            {step.label}
          </h3>
        </div>
        {step.external ? (
          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-orange-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        ) : (
          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-orange-400 transition-transform group-hover:translate-x-1" />
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{step.description}</p>
    </>
  )

  const className =
    "group block h-full rounded-2xl border border-white/10 bg-black/55 p-5 transition-all duration-300 hover:border-orange-500/45 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-orange-500/60"

  if (step.external) {
    return (
      <a href={step.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link href={step.href} className={className}>
      {content}
    </Link>
  )
}

export function PersonaPathPanel({ eyebrow, title, description, steps }: PersonaPathPanelProps) {
  return (
    <section className="px-4 pb-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-orange-500/20 bg-black/70 p-5 shadow-2xl shadow-orange-950/10 backdrop-blur-sm md:p-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-400">
              {eyebrow}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
              {description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <StepLink key={`${step.label}-${step.href}`} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
