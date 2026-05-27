"use client"

import { Link } from "@/i18n/navigation"
import { useLocalizedPath } from "@/hooks/use-localized-path"
import { useTranslations } from "next-intl"
import { Github } from "lucide-react"

const BRAND = "#F97316"

function ErgoMark({ className = "h-7 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ergo logo"
      className={className}
    >
      <polygon
        points="27.5,6.0289 72.5,6.0289 95,45 72.5,83.9711 27.5,83.9711 5,45"
        fill="none"
        stroke={BRAND}
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <path
        d="M62.2899 55.8772V61.8823H40.456V55.8772H62.2899ZM61.7853 27.5671V33.6059H41.2298V27.5671H61.7853ZM55.8306 44.5397V44.8929L43.4838 61.8823H37.6805V58.3499L48.0928 44.7247L37.6805 31.1332V27.5671H43.4838L55.8306 44.5397Z"
        fill={BRAND}
      />
    </svg>
  )
}

function DiscordIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  )
}

function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

interface FooterColumn {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}

export function Footer() {
  const t = useTranslations("footer")
  const localizedPath = useLocalizedPath()

  const columns: FooterColumn[] = [
    {
      title: t("platform") || "Platform",
      links: [
        { label: t("technology") || "Technology", href: localizedPath("technology") },
        { label: t("useCases") || "Use Cases", href: localizedPath("use") },
        { label: t("ecosystem") || "Ecosystem", href: localizedPath("ecosystem") },
        { label: "Ergo Watch", href: localizedPath("ergo-watch") },
        { label: t("compare") || "Compare", href: localizedPath("compare") },
        { label: t("wallets") || "Wallets", href: localizedPath("wallet") },
        { label: t("infographics") || "Infographics", href: localizedPath("infographics") },
      ],
    },
    {
      title: t("learnTitle") || "Learn",
      links: [
        { label: t("startHere") || "Start Here", href: localizedPath("start") },
        { label: t("documentation") || "Documentation", href: localizedPath("docs") },
        { label: t("glossary") || "Glossary", href: localizedPath("learn/glossary") },
        { label: t("faq") || "FAQ", href: localizedPath("faq") },
        { label: t("playbooks") || "Playbooks", href: localizedPath("playbooks") },
        { label: t("patterns") || "Dev Patterns", href: localizedPath("patterns") },
      ],
    },
    {
      title: t("community") || "Community",
      links: [
        { label: t("blog") || "Blog", href: "/blog" },
        { label: "Hodlers", href: localizedPath("hodlers") },
        { label: "Miners", href: localizedPath("miners") },
        { label: "Developers", href: localizedPath("developers") },
      ],
    },
    {
      title: "Build",
      links: [
        { label: "Agents", href: localizedPath("agents") },
        { label: "Agent Economy", href: localizedPath("agent-economy") },
        { label: "First Receipt", href: localizedPath("agent-economy/first-receipt") },
        { label: "ErgoConnect", href: localizedPath("build/ergo-connect") },
        { label: "Demos", href: localizedPath("demos") },
        { label: t("grants") || "Grants", href: localizedPath("ecosystem/grants") },
        { label: "GitHub", href: "https://github.com/ergoplatform", external: true },
      ],
    },
  ]

  const socials = [
    {
      label: "Discord",
      href: "https://discord.com/invite/ergo-platform-668903786361651200",
      icon: DiscordIcon,
    },
    {
      label: "Telegram",
      href: "https://t.me/ergoplatform",
      icon: TelegramIcon,
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/BuildOnErgo",
      icon: XIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/ergoplatform",
      icon: Github,
    },
  ]

  return (
    <footer
      className="border-t border-primary/30 bg-black relative overflow-hidden z-50"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle grid texture, faded at the edges so the footer doesn't feel
          like a stark cut-off from the section above. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]"
      />

      <div className="container relative z-20 px-4 sm:px-6 py-10 md:py-14">
        {/* Brand block: logo + wordmark + tagline + social icons.
            Sits as one cohesive unit so mobile users see a real footer
            opening, not a wall of links. */}
        <div className="flex flex-col gap-5 mb-10 md:mb-12 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex flex-col gap-3 max-w-md">
            <Link href="/" aria-label="Ergo home" className="inline-flex items-center gap-2.5 self-start">
              <ErgoMark className="h-7 w-8" />
              <span className="font-mono font-bold text-lg text-primary tracking-wider">ERGO</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Money without masters. Programmable settlement for autonomous agents — censorship-resistant, deterministic, eUTXO-native.
            </p>
          </div>

          {/* Social row — icon-only, 44px tap targets */}
          <nav aria-label="Ergo on social platforms" className="flex items-center gap-2 md:gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Link grid: 2 cols on mobile (paired sections fill both lanes —
            no orphan column), 4 cols ≥ md. Aligns the Build section
            on the same row as Community on mobile, eliminating the dead
            right-half that the previous 2-col grid left after Learn. */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-8">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="font-mono text-xs uppercase tracking-widest text-primary">
                {col.title}
              </div>
              <nav aria-label={col.title} className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <Link
                    key={`${col.title}-${link.label}`}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-gray-400 hover:text-primary transition-colors font-mono leading-tight min-h-[24px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip: copyright + legal pills + open-source CTA. Kept dense
          on mobile (single column, centered) and inlined on desktop. */}
      <div className="border-t border-primary/15 relative z-20">
        <div className="container px-4 sm:px-6 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500 font-mono text-center md:text-left">
            © {new Date().getFullYear()} ERGO {t("platform") || "Platform"}.{" "}
            <span className="text-gray-600">·</span>{" "}
            {t("openSource") || "Open source"}{" "}
            <span className="text-gray-600">·</span>{" "}
            <Link
              href="https://github.com/ergoplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary hover:underline"
            >
              {t("contributeOnGithub") || "Contribute on GitHub"}
            </Link>
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono md:justify-end"
          >
            <Link href={localizedPath("legal/privacy")} className="text-gray-500 hover:text-primary transition-colors">
              Privacy
            </Link>
            <span className="text-gray-700" aria-hidden="true">·</span>
            <Link href={localizedPath("legal/terms")} className="text-gray-500 hover:text-primary transition-colors">
              Terms
            </Link>
            <span className="text-gray-700" aria-hidden="true">·</span>
            <Link href={localizedPath("legal/risk")} className="text-gray-500 hover:text-primary transition-colors">
              Risk
            </Link>
            <span className="text-gray-700" aria-hidden="true">·</span>
            <Link href={localizedPath("legal/security")} className="text-gray-500 hover:text-primary transition-colors">
              Security
            </Link>
            <span className="text-gray-700" aria-hidden="true">·</span>
            <Link
              href={localizedPath("legal/official-domains")}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Official Domains
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
