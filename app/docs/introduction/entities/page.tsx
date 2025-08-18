import React from "react";
import Link from "next/link";
import { Users, Brain, Star, ChevronRight } from "lucide-react";

export default function EntitiesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight pb-1">
        Ergo Ecosystem Entities
      </h1>
      <p className="text-lg text-gray-400 mb-10">
        Meet the key organizations and community groups that drive the development, governance, and growth of the Ergo blockchain ecosystem.
      </p>
      <div className="grid gap-6">
        {/* Ergo Foundation */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-orange-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Ergo Foundation</h2>
              <p className="text-gray-400 text-sm max-w-md">
                Community-led, non-profit stewarding the development, adoption, and sustainability of the Ergo blockchain. Transparent treasury, open governance, and public accountability.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/ergo-foundation"
            className="inline-flex items-center px-4 py-2 bg-orange-500 rounded-lg font-semibold text-black hover:bg-orange-600 transition-colors mt-2 sm:mt-0"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        {/* DevDAO */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Brain className="w-10 h-10 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-300 to-blue-100 bg-clip-text text-transparent">DevDAO</h2>
              <p className="text-gray-400 text-sm max-w-md">
                Decentralized autonomous organization for research, development, and maintenance of the Ergo protocol. Focused on transparency, scalability, and community-driven core development.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/devdao"
            className="inline-flex items-center px-4 py-2 bg-cyan-500 rounded-lg font-semibold text-black hover:bg-cyan-600 transition-colors mt-2 sm:mt-0"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        {/* Sigmanauts */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <Star className="w-10 h-10 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-yellow-300 to-orange-100 bg-clip-text text-transparent">Sigmanauts</h2>
              <p className="text-gray-400 text-sm max-w-md">
                Grassroots community program empowering individuals to take ownership of Ergo, drive adoption, and shape the ecosystem’s future through collaboration, creativity, and education.
              </p>
            </div>
          </div>
          <Link
            href="/docs/introduction/sigmanauts"
            className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-lg font-semibold text-black hover:bg-yellow-500 transition-colors mt-2 sm:mt-0"
          >
            Learn More <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
