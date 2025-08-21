"use client";

import React, { useState, useMemo, useEffect } from "react";
import { glossaryData } from "./glossaryData";
import { Search } from "lucide-react";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [lang, setLang] = useState("en");

  // Все термины для поиска
  const allTerms = glossaryData.flatMap(section => section.terms);

  // Автоопределение языка пользователя
  useEffect(() => {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    if (["en", "ru", "de", "es", "pt"].includes(navLang)) {
      setLang(navLang);
    }
  }, []);

  // Фильтрация данных
  const filteredData = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    
    if (searchTerm) {
      return glossaryData
        .map(section => ({
          ...section,
          terms: section.terms.filter(term => {
            const title = typeof term.title === "string" 
              ? term.title 
              : (term.title as any)[lang] || (term.title as any).en || "";
            const definition = typeof term.definition === "string" 
              ? term.definition 
              : (term.definition as any)[lang] || (term.definition as any).en || "";
            
            return title.toLowerCase().includes(searchTerm) || 
                   definition.toLowerCase().includes(searchTerm);
          })
        }))
        .filter(section => section.terms.length > 0);
    }
    
    if (activeLetter) {
      return glossaryData.filter(section => section.letter === activeLetter);
    }
    
    return glossaryData;
  }, [search, activeLetter, lang]);

  // Доступные буквы
  const availableLetters = glossaryData.map(s => s.letter);

  return (
    <div className="px-4">
      {/* Заголовок */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-1 text-white">
        Glossary
      </h1>
        <p className="text-gray-400 text-sm">
          {allTerms.length} blockchain and cryptocurrency terms
        </p>
      </div>

      {/* Языки и поиск */}
      <div className="mb-4 space-y-3">
        {/* Языковой переключатель */}
        <div className="flex gap-2">
          {[
            { code: "en", label: "EN" },
            { code: "ru", label: "RU" },
            { code: "de", label: "DE" },
            { code: "es", label: "ES" },
            { code: "pt", label: "PT" }
          ].map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                lang === l.code 
                  ? "bg-orange-500 text-black" 
                  : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
              }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Поиск */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              if (e.target.value) setActiveLetter(null);
            }}
            placeholder="Search terms..."
            className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* A-Z навигация */}
      <div className="mb-4 flex flex-wrap gap-1">
            <button
          onClick={() => {
            setActiveLetter(null);
            setSearch("");
          }}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            !activeLetter && !search
              ? "bg-orange-500 text-black"
              : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
          }`}
        >
          All
            </button>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letter => (
          <button
            key={letter}
            onClick={() => {
              setActiveLetter(letter);
              setSearch("");
            }}
            disabled={!availableLetters.includes(letter)}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              activeLetter === letter
                ? "bg-orange-500 text-black"
                : availableLetters.includes(letter)
                  ? "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  : "bg-neutral-900 text-gray-600 cursor-not-allowed"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Термины */}
      <div className="space-y-6">
      {filteredData.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No terms found
          </div>
      ) : (
        filteredData.map(section => (
            <section key={section.letter}>
              <h2 className="text-2xl font-bold text-orange-400 mb-3">
                {section.letter}
              </h2>
              <div className="space-y-3">
                {section.terms.map((term, idx) => {
                const title = typeof term.title === "string"
                  ? term.title
                    : (term.title as any)[lang] || (term.title as any).en || "";
                  const definition = typeof term.definition === "string"
                    ? term.definition
                    : (term.definition as any)[lang] || (term.definition as any).en || "";
                  const example = (term as any).example
                    ? typeof (term as any).example === "string"
                      ? (term as any).example
                      : ((term as any).example as any)[lang] || ((term as any).example as any).en || ""
                    : null;

                return (
                    <div 
                      key={`${section.letter}-${idx}`}
                      id={term.anchor}
                      className="border-l-2 border-neutral-700 pl-4 hover:border-orange-500 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-cyan-300 mb-1">
                        {title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {definition}
                      </p>
                      {example && (
                        <div className="mt-2 text-sm text-gray-400 italic">
                          Example: {example}
                        </div>
                      )}
                    </div>
                            );
                          })}
                        </div>
          </section>
        ))
      )}
    </div>
    </div>
  );
} 