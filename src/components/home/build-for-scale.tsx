"use client"

import React from "react";
import { Shield, Zap, Code2, Coins } from "lucide-react";

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
  hint: string;
  href?: string;
};

const BRAND = { orange: "#ff8800" };

export function BuildForScale() {
  const items: StatItem[] = [
    {
      icon: <Zap className="w-4 h-4" />,
      value: "~2 min",
      label: "Block time",
      hint: "Fast, predictable finality",
      href: "/metrics#block-time",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      value: "MEV-resistant",
      label: "Front-running",
      hint: "Local ordering, no global priority auctions",
      href: "/learn/mev",
    },
    {
      icon: <Coins className="w-4 h-4" />,
      value: "≈ $0.01",
      label: "Typical fee",
      hint: "Pennies, not dollars",
      href: "/metrics#fees",
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      value: "ErgoScript",
      label: "Smart contracts",
      hint: "Short, auditable logic",
      href: "/build/smart-contracts",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <LeftCopy />
        <RightMetrics items={items} />
      </div>
    </section>
  );
}

function LeftCopy() {
  return (
    <div>
      <h2
        className="font-extrabold tracking-tight mb-6"
        style={{ 
          fontSize: "clamp(32px, 4.5vw, 56px)",
          letterSpacing: "-0.02em",
          lineHeight: 1
        }}
      >
        Engineered for <span style={{ color: BRAND.orange }}>global</span>{" "}
        settlement
      </h2>

      <p
        className="text-white/85 mb-8"
        style={{ 
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: 1.4,
          maxWidth: "60ch"
        }}
      >
        Sound Money principles, Open Money access.
      </p>

        <ul className="space-y-3 text-white/90 mb-8">
        <Bullet>eUTXO = parallel, conflict-free flows</Bullet>
        <Bullet>Predictable fees & clear spend conditions</Bullet>
        <Bullet>MEV-resistant design (local ordering)</Bullet>
      </ul>

      <p className="mt-4">
        <span className="font-semibold">The result:</span>{" "}
        <span className="text-white/85">
          Financial infrastructure that actually works.
        </span>
      </p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-2 h-2 w-2 rounded-full"
        style={{ background: BRAND.orange }}
      />
      {children}
    </li>
  );
}

function RightMetrics({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((it, i) => (
        <StatCard key={i} {...it} />
      ))}
    </div>
  );
}

function StatCard({ icon, value, label, hint, href }: StatItem) {
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className="group flex min-h-[128px] flex-col rounded-3xl border border-white/10 bg-black/80 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/30"
      aria-label={`${value} — ${label}${hint ? " — " + hint : ""}`}
    >

      <div
        className="font-extrabold tracking-tight [text-wrap:balance] mb-2"
        style={{ fontSize: "clamp(18px,2.2vw,28px)" }}
      >
        {value}
      </div>

      <div className="text-xs text-white/90 md:text-sm">{label}</div>

      <div className="mt-auto pt-1 text-xs text-white/60 line-clamp-1">
        {hint}
      </div>
    </Wrapper>
  );
}