"use client"

import SidebarMenu from "@/components/SidebarMenu"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-x-8">
          {/* Sidebar Navigation */}
          <aside className="lg:block hidden fixed lg:relative inset-0 z-40 lg:z-auto">
            <SidebarMenu />
          </aside>
          {/* Main Content */}
          <main className="lg:pl-8">
            <div className="prose prose-invert prose-lg max-w-3xl prose-headings:font-bold prose-headings:text-white prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 
