"use client"
import { useState } from "react"
import Link from "next/link"
import { menuData } from "../app/Docs/menuData"

function MenuItem({ item, level = 0 }: { item: any, level?: number }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.items?.length

  // Определяем стиль для пункта
  const baseClass = level === 0
    ? "font-medium text-base text-gray-200 hover:text-orange-400"
    : "font-normal text-sm text-gray-400 hover:text-orange-300";

  return (
    <div className={`py-0.5 ${level > 0 ? "ml-4" : ""}`}> 
      <div
        className={`flex items-center justify-between cursor-pointer select-none rounded px-2 transition-colors ${open ? "bg-neutral-800" : ""}`}
        onClick={() => hasChildren && setOpen((v) => !v)}
      >
        <div className="flex items-center gap-2 w-full">
          {item.href ? (
            <Link href={item.href} className={baseClass + " w-full block py-1 transition-colors"}>
              {item.title}
            </Link>
          ) : (
            <span className={baseClass + " w-full block py-1 transition-colors"}>{item.title}</span>
          )}
        </div>
        {hasChildren && (
          <span className={`ml-2 transition-transform text-gray-400 ${open ? "rotate-90" : ""}`}>{">"}</span>
        )}
      </div>
      {hasChildren && open && (
        <div className="mt-1">
          {item.items.map((child: any, idx: number) => (
            <MenuItem key={idx} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const sectionTabs = [
  { key: "Introduction", label: "Introduction" },
  { key: "Ecosystem", label: "Ecosystem" },
  { key: "Developers", label: "Developers" },
  { key: "Miners", label: "Miners" },
];

export default function SidebarMenu() {
  const [activeSection, setActiveSection] = useState("Introduction")
  // Найти раздел по ключу
  const section = menuData.find((s: any) => s.title === activeSection)
  return (
    <aside className="w-full max-w-xs bg-neutral-900 text-white p-0 pt-6 rounded-none border-r border-neutral-800 h-full overflow-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 px-6 pt-2 pb-4 mb-4 bg-neutral-900 z-10 sticky top-0">
        {sectionTabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveSection(tab.key)}
            className={`px-5 py-2 rounded-lg text-base font-bold uppercase tracking-wider shadow-sm transition-colors duration-150
              ${activeSection === tab.key ? "bg-orange-400 text-white" : "bg-neutral-800 text-gray-300 hover:bg-orange-300 hover:text-white"}`}
            style={{ outline: "none", border: "none" }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Section content */}
      {section && (
        <div className="mb-6 px-6">
          <h2 className="font-semibold text-sm mb-3 text-orange-400 uppercase tracking-wider">{section.title}</h2>
          {section.items.map((item: any, idx: number) => (
            <MenuItem key={idx} item={item} />
          ))}
        </div>
      )}
    </aside>
  )
} 