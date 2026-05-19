"use client"

import SidebarMenu from "@/components/SidebarMenu"

export function DocsLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid min-w-0 lg:grid-cols-[280px_1fr] gap-x-8">
          <aside className="lg:block hidden fixed lg:relative inset-0 z-40 lg:z-auto">
            <SidebarMenu />
          </aside>
          <main className="min-w-0 max-w-full lg:pl-8">
            <div className="prose prose-invert prose-lg w-full max-w-full lg:max-w-3xl prose-headings:font-bold prose-headings:text-white prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
