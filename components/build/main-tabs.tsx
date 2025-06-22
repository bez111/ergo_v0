"use client"

import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { showcase, tools, community, resources } from "@/lib/build-page-data"

export function MainTabs() {
  return (
    <section className="mb-24">
      <SectionHeading text="Build Hub" />
      <Tabs defaultValue="tools" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-neutral-900/50 border border-neutral-700/50">
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="showcase">Showcase</TabsTrigger>
        </TabsList>
        <TabsContent value="tools">
          <Card className="bg-neutral-900/50 border-neutral-700/50 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map(tool => (
                <Link key={tool.name} href={tool.href} className="block group">
                  <h4 className="font-bold text-white group-hover:text-orange-400">{tool.name}</h4>
                  <p className="text-sm text-gray-400">{tool.description}</p>
                </Link>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="community">
          <Card className="bg-neutral-900/50 border-neutral-700/50 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {community.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  className="block group"
                >
                  <h4 className="font-bold text-white group-hover:text-orange-400">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="resources">
          <Card className="bg-neutral-900/50 border-neutral-700/50 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map(resource => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  target={resource.external ? "_blank" : "_self"}
                  className="block group"
                >
                  <div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-orange-500/5 transition">
                    <resource.icon className="w-7 h-7 text-orange-400 mb-1" />
                    <h4 className="font-bold text-white group-hover:text-orange-400">{resource.title}</h4>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="showcase">
          <Card className="bg-neutral-900/50 border-neutral-700/50 p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcase.map(project => (
                <Link key={project.title} href={project.href} target="_blank" className="block group">
                  <div className="p-4 rounded-xl border border-neutral-700/30 hover:border-orange-400 transition flex flex-col gap-3 bg-black/30 h-full">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-24 w-full object-cover rounded-md bg-neutral-800 mb-2"
                      />
                    )}
                    <div className="flex items-center gap-2">
                      <project.icon className="w-5 h-5 text-orange-400" />
                      <h4 className="font-bold text-white group-hover:text-orange-400">
                        {project.title}
                      </h4>
                      {project.featured && (
                        <span className="ml-auto px-2 py-0.5 bg-orange-500 text-xs rounded text-white">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
} 