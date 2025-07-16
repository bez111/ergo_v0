"use client"
import { useState } from "react"
import Link from "next/link"
import { menuData } from "../app/Docs/menuData"
import { usePathname, useRouter } from "next/navigation"

function MenuItem({ item, level = 0, parentPath = "" }: { item: any, level?: number, parentPath?: string }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.items?.length
  const pathname = usePathname() || "";
  const fullPath = item.href || parentPath;
  const isActive = item.href && pathname === item.href;
  const shouldForceOpen =
    (item.title === "Tooling" && pathname.startsWith("/Docs/miners/Miner-Tooling")) ||
    (hasChildren && item.items?.some((child: any) => child.href && pathname === child.href));
  const baseClass = level === 0
    ? `font-medium text-base text-gray-200 hover:text-orange-400${isActive ? " text-orange-400" : ""}`
    : `font-normal text-sm text-gray-400 hover:text-orange-300${isActive ? " text-orange-300" : ""}`;
  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      setOpen(true);
    }
  };
  return (
    <div className={`py-0.5 ${level > 0 ? "ml-4" : ""}`}> 
      <div
        className={`flex items-center justify-between select-none rounded px-2 transition-colors ${open || shouldForceOpen ? "bg-neutral-800" : ""} ${isActive ? "bg-neutral-800" : ""}`}
      >
        <div className="flex items-center gap-2 w-full">
          {item.href ? (
            <Link href={item.href} className={baseClass + " w-full block py-1 transition-colors"} onClick={handleLinkClick}>
              {item.title}
            </Link>
          ) : (
            <span className={baseClass + " w-full block py-1 transition-colors"}>{item.title}</span>
          )}
        </div>
        {hasChildren && (
          <span
            className={`ml-2 transition-transform text-gray-400 ${(open || shouldForceOpen) ? "rotate-90" : ""}`}
            onClick={e => { e.stopPropagation(); setOpen(v => !v); }}
            style={{ cursor: "pointer" }}
          >
            {">"}
          </span>
        )}
      </div>
      {hasChildren && (open || shouldForceOpen) && (
        <div className="mt-1">
          {item.items.map((child: any, idx: number) => (
            <MenuItem key={idx} item={child} level={level + 1} parentPath={fullPath} />
          ))}
        </div>
      )}
    </div>
  )
}

const sectionTabs = [
  { key: "Introduction", label: "Introduction", href: "/Docs" },
  { key: "Ecosystem", label: "Ecosystem", href: "/Docs/ecosystem" },
  { key: "Developers", label: "Developers", href: "/Docs/developers" },
  { key: "Miners", label: "Miners", href: "/Docs/miners" },
];

function getSectionKeyByPath(pathname: string) {
  if (pathname === "/Docs" || pathname.startsWith("/Docs/introduction")) return "Introduction";
  if (pathname.startsWith("/Docs/ecosystem")) return "Ecosystem";
  if (pathname.startsWith("/Docs/developers")) return "Developers";
  if (pathname.startsWith("/Docs/miners")) return "Miners";
  return "Introduction";
}

export default function SidebarMenu() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const [openSection, setOpenSection] = useState(() => getSectionKeyByPath(pathname));
  const activeSection = getSectionKeyByPath(pathname);

  // Always open the section matching the current path
  // const section = menuData.find((s: any) => typeof s.title === 'string' && s.title === openSection);

  const handleSectionClick = (tab: any) => {
    setOpenSection(tab.key);
    router.push(tab.href);
  };

  return (
    <aside className="w-full max-w-xs bg-neutral-900 text-white p-0 pt-6 rounded-none border-r border-neutral-800 h-full overflow-auto">
      {/* 4 Big Section Buttons + Accordions */}
      <div className="flex flex-col gap-3 px-6 pt-2 pb-4 mb-4 bg-neutral-900 z-10">
        {sectionTabs.map(tab => {
          const section = menuData.find((s: any) => typeof s.title === 'string' && s.title === tab.key);
          const isOpen = openSection === tab.key;
          return (
            <div key={tab.key}>
              <button
                onClick={() => handleSectionClick(tab)}
                className={`w-full px-5 py-3 rounded-lg text-base font-bold uppercase tracking-wider shadow-sm transition-colors duration-150 text-left ${
                  isOpen ? "bg-orange-400 text-white" : "bg-neutral-800 text-gray-300 hover:bg-orange-300 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
              {/* Подменю — без тайтла раздела */}
              {isOpen && section && (
                <div className="pl-2 pt-2">
                  {section.items?.map((item: any) => (
                    <MenuItem key={item.title} item={item} level={1} parentPath={""} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
} 