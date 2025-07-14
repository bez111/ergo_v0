"use client";

import React from "react";
import { BookOpen } from "lucide-react";

export default function OffTheGridPage() {
  return (
    <div className="px-4 w-full">
      <div className="mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-blue-400" /> Off the Grid (Grid Trading)
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl">
          This page is under construction. More information about Off the Grid will be available soon.
        </p>
      </div>
    </div>
  );
} 