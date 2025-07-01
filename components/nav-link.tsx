"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  href: string;
  title: string;
  icon?: React.ElementType;
  description: string;
  className?: string;
}

export default function NavLink({ href, title, icon: Icon, description, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-lg transition-colors ${
        isActive ? 'text-orange-400 font-bold bg-neutral-800' : 'text-gray-300 hover:text-white hover:bg-neutral-800/50'
      } ${className ?? ''}`}
    >
      {Icon ? (
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4" />
          <span className="font-medium text-base">{title}</span>
        </div>
      ) : (
        <span className="font-medium text-base mb-1 block">{title}</span>
      )}
      {description && (
        <p className="text-xs text-gray-500 ml-6">
          {description}
        </p>
      )}
    </Link>
  )
}
