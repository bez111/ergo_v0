"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { Shield, Zap, Code2, Coins } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type TranslateFunction = ReturnType<typeof useTranslations>;

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
  hint: string;
  href?: string;
};

const BRAND = { orange: "#ff8800" };

export function BuildForScale() {
  const t = useTranslations('buildForScale');
  
  const items: StatItem[] = [
    {
      icon: <Zap className="w-4 h-4" />,
      value: t('stats.blockTime.value'),
      label: t('stats.blockTime.label'),
      hint: t('stats.blockTime.hint'),
      href: "/technology/subblocks",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      value: t('stats.mev.value'),
      label: t('stats.mev.label'),
      hint: t('stats.mev.hint'),
      href: "/questions/what-is-mev-resistance",
    },
    {
      icon: <Coins className="w-4 h-4" />,
      value: t('stats.fee.value'),
      label: t('stats.fee.label'),
      hint: t('stats.fee.hint'),
      href: "/technology/babel-fees",
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      value: t('stats.ergoscript.value'),
      label: t('stats.ergoscript.label'),
      hint: t('stats.ergoscript.hint'),
      href: "/technology/ergoscript",
    },
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-start gap-6 md:gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <LeftCopy t={t} />
        <RightMetrics items={items} />
      </div>
    </section>
  );
}

function LeftCopy({ t }: { t: TranslateFunction }) {
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
        {t('titlePrefix')} <span style={{ color: BRAND.orange }}>{t('titleHighlight')}</span>,{" "}
        {t('titleSuffix')}
      </h2>

      <p
        className="text-white/85 mb-8"
        style={{ 
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: 1.4,
          maxWidth: "60ch"
        }}
      >
        {t('subtitle')}
      </p>

        <ul className="space-y-3 text-white/90 mb-8">
        <Bullet>{t('bullets.0')}</Bullet>
        <Bullet>{t('bullets.1')}</Bullet>
        <Bullet>{t('bullets.2')}</Bullet>
      </ul>

      <p className="mt-4">
        <span className="font-semibold">{t('resultLabel')}</span>{" "}
        <span className="text-white/85">
          {t('resultText')}
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
    <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-2">
      {items.map((it, i) => (
        <StatCard key={i} {...it} />
      ))}
    </div>
  );
}

function StatCard({ icon, value, label, hint, href }: StatItem) {
  const cardContent = (
    <>
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
    </>
  );

  const className = "group flex min-h-[112px] md:min-h-[128px] flex-col rounded-2xl md:rounded-3xl border border-white/10 bg-black/80 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/30";

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={`${value} — ${label}${hint ? " — " + hint : ""}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={className}
      aria-label={`${value} — ${label}${hint ? " — " + hint : ""}`}
    >
      {cardContent}
    </div>
  );
}