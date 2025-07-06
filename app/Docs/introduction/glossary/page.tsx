"use client";

import React, { useState, useMemo } from "react";
import { glossaryData } from "./glossaryData";

const allTerms = glossaryData.flatMap(section => section.terms.map(term => ({ ...term, letter: section.letter })));

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const isSearchActive = !!search.trim();

  const filteredData = useMemo(() => {
    if (isSearchActive) {
      // Только поиск, игнорируем буквы
      return glossaryData
        .map(section => ({
          ...section,
          terms: section.terms.filter(term =>
            term.title.toLowerCase().includes(search.toLowerCase()) ||
            (term.definition && term.definition.toLowerCase().includes(search.toLowerCase()))
          )
        }))
        .filter(section => section.terms.length > 0);
    }
    if (activeLetter) {
      // Только фильтр по букве
      return glossaryData.filter(section => section.letter === activeLetter);
    }
    // Без фильтров — все буквы
    return glossaryData;
  }, [search, activeLetter]);

  // A-Z навигация
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const availableLetters = glossaryData.map(s => s.letter);

  return (
    <div className="px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
        Glossary
      </h1>
      {/* Поиск */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            if (e.target.value) setActiveLetter(null);
          }}
          placeholder="Search terms..."
          className="w-full md:w-80 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <div className="flex flex-wrap gap-1 justify-center md:justify-start">
          {alphabet.map(letter => (
            <button
              key={letter}
              type="button"
              onClick={() => !isSearchActive && availableLetters.includes(letter) && setActiveLetter(letter)}
              className={`px-3 py-1 rounded font-bold transition text-sm focus:outline-none
                ${activeLetter === letter && !isSearchActive ? "bg-orange-400 text-white border border-orange-400" :
                  availableLetters.includes(letter) && !isSearchActive ? "bg-neutral-800 text-orange-300 hover:bg-orange-400 hover:text-white" : "bg-neutral-900 text-gray-700 cursor-not-allowed"}`}
              tabIndex={isSearchActive || !availableLetters.includes(letter) ? -1 : 0}
              disabled={isSearchActive || !availableLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
          <button
            type="button"
            onClick={() => !isSearchActive && setActiveLetter(null)}
            className={`px-3 py-1 rounded font-bold transition text-sm focus:outline-none
              ${!activeLetter && !isSearchActive ? "bg-orange-400 text-white border border-orange-400" : "bg-neutral-800 text-orange-300 hover:bg-orange-400 hover:text-white"}`}
            tabIndex={isSearchActive ? -1 : 0}
            disabled={isSearchActive}
          >
            All
          </button>
        </div>
      </div>
      {/* Глоссарий */}
      {filteredData.length === 0 ? (
        <div className="text-gray-400 text-center py-12">No terms found.</div>
      ) : (
        filteredData.map(section => (
          <section key={section.letter} id={section.letter} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-orange-300 tracking-wide">{section.letter}</h2>
            <dl>
              {section.terms.map(term => (
                <React.Fragment key={term.anchor}>
                  <dt id={term.anchor} className="text-xl font-semibold mt-8 mb-2 text-cyan-300 scroll-mt-24">
                    {term.title}
                  </dt>
                  <dd className="mb-4 text-gray-300 text-base">
                    {term.definition}
                    {term.example && (
                      <div className="text-sm text-cyan-400 mt-1 italic">Example: {term.example}</div>
                    )}
                    {term.seeAlso && (
                      <div className="text-sm text-gray-400 mt-1">
                        See also: {term.seeAlso.map((t, i) => (
                          <a key={t} href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="underline text-orange-300 hover:text-orange-200">{t}</a>
                        )).join(", ")}
                      </div>
                    )}
                  </dd>
                  <hr className="border-neutral-800 my-4" />
                </React.Fragment>
              ))}
            </dl>
          </section>
        ))
      )}
    </div>
  );
} 