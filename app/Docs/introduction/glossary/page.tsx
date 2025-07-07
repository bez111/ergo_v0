"use client";

import React, { useState, useMemo, useRef } from "react";
import { glossaryData } from "./glossaryData";
import Head from "next/head";

const allTerms = glossaryData.flatMap(section => section.terms.map(term => ({ ...term, letter: section.letter })));

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "RU" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "tr", label: "TR" },
  { code: "pt", label: "PT" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [lang, setLang] = useState("en");
  const scrollToAnchorRef = useRef<string | null>(null);

  // Карта соответствий для seeAlso терминов
  const seeAlsoMapping: Record<string, string> = {
    "Proof-of-Work": "Proof of Work (PoW)",
    "Proof-of-Stake": "Proof-of-stake (PoS)",
    "DEX": "DEX (Decentralized Exchange)",
    "API": "API (Application Programming Interface)",
    "SDK": "SDK (Software Development Kit)",
    "GUI": "GUI (Graphical User Interface)",
    "CLI": "CLI (Command Line Interface)",
    "CEX": "CEX (Centralized Exchange)",
    "AML": "AML (Anti-Money Laundering)",
    "KYC": "KYC (Know Your Customer)",
    "DeFi": "DeFi (Decentralized Finance)",
    "DApp": "DApp (Decentralized Application)",
    "AMM": "AMM (Automated Market Maker)",
    "MEV": "MEV (Miner Extracted Value)",
    "TVL": "TVL (Total Value Locked)",
    "PoW": "Proof of Work (PoW)",
    "PoS": "Proof-of-stake (PoS)",
    "UTXO": "UTXO Model",
    "Layer 0": "Layer 0",
    "Layer 1": "Layer 1",
    "Layer 2": "Layer 2",
    "Layer 3": "Layer 3",
    "Cross-chain": "Cross-chain",
    "Rosen Bridge": "Rosen Bridge",
    "Bridge": "Bridge",
    "Interoperability": "Interoperability",
    "Non-custodial": "Non-custodial Wallet",
    "Custodial": "Custodial Wallet",
    "Hot Wallet": "Hot Wallet",
    "Seed Phrase": "Seed Phrase",
    "Hardware Wallet": "Hardware Wallet",
    "Cold Wallet": "Cold Wallet",
    "Bounty": "Bounty",
    "Ambassador": "Ambassador",
    "Foundation": "Ergo Foundation ('EF')",
    "Validator": "Validator",
    "Mining": "Mining",
    "Node": "Node",
    "Block": "Block",
    "Transaction": "Transaction",
    "Token": "Token",
    "Mint": "Mint",
    "Marketplace": "Marketplace",
    "Governance": "Governance",
    "DAO": "DAO (Decentralized Autonomous Organization)",
    "EIP": "EIP (Ergo Improvement Proposal)",
    "Treasury": "Treasury",
    "Testnet": "Testnet",
    "Genesis Block": "Genesis Block",
    "Emission": "Emission",
    "Privacy": "Privacy",
    "Ring Signature": "Ring Signature",
    "Sigma Protocol": "Sigma Protocols",
    "Pump": "Pump",
    "FOMO": "FOMO",
    "Meme": "Meme",
    "GM": "GM (Good Morning)",
    "WAGMI": "WAGMI",
    "NGMI": "NGMI",
    "Community": "Community",
    "Yield Farming": "Yield Farming",
    "Liquidity Pool": "Liquidity Pool",
    "Liquidity Provider": "Liquidity Provider",
    "Light Node": "Light Nodes",
    "Payment Channel": "Payment Channel",
    "Consensus": "Consensus",
    "Sidechain": "Sidechain",
    "Bitcoin": "Bitcoin",
    "Network": "Network",
    "Scam": "Scam",
    "Degen": "Degen"
  };

  // Функция для поиска anchor термина по названию
  const findTermAnchor = (termName: string): string | null => {
    const searchName = termName.toLowerCase().trim();
    
    // Сначала проверяем карту соответствий
    const mappedTerm = seeAlsoMapping[termName];
    if (mappedTerm) {
      const mappedSearchName = mappedTerm.toLowerCase().trim();
      for (const section of glossaryData) {
        for (const term of section.terms) {
          const title = typeof term.title === "string" 
            ? term.title 
            : (term.title as Record<string, string>).en || Object.values(term.title)[0];
          
          const titleLower = title.toLowerCase().trim();
          
          if (titleLower === mappedSearchName) {
            return term.anchor;
          }
        }
      }
    }
    
    // Если не найдено в карте, ищем обычным способом
    for (const section of glossaryData) {
      for (const term of section.terms) {
        const title = typeof term.title === "string" 
          ? term.title 
          : (term.title as Record<string, string>).en || Object.values(term.title)[0];
        
        const titleLower = title.toLowerCase().trim();
        
        // Точное совпадение
        if (titleLower === searchName) {
          return term.anchor;
        }
        
        // Частичное совпадение (для случаев типа "Proof-of-Work" vs "Proof of Work")
        if (titleLower.includes(searchName) || searchName.includes(titleLower)) {
          return term.anchor;
        }
        
        // Удаляем дефисы и пробелы для сравнения
        const normalizedTitle = titleLower.replace(/[-\s]/g, '');
        const normalizedSearch = searchName.replace(/[-\s]/g, '');
        if (normalizedTitle === normalizedSearch) {
          return term.anchor;
        }
      }
    }
    return null;
  };

  // Автоматическое определение языка пользователя
  React.useEffect(() => {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const supported = languages.map(l => l.code);
    if (supported.includes(navLang)) {
      setLang(navLang);
    }
  }, []);

  const isSearchActive = !!search.trim();

  const filteredData = useMemo(() => {
    if (isSearchActive) {
      // Собираем все термины в один массив
      const allTerms = glossaryData.flatMap(section => section.terms.map(term => ({ ...term, letter: section.letter })));
      // Ищем точное совпадение
      const exact = allTerms.find(term => {
        const title = typeof term.title === "string" ? term.title : String(term.title.en || Object.values(term.title)[0]);
        return title.toLowerCase().trim() === search.toLowerCase().trim();
      });
      if (exact) {
        // Показываем только точное совпадение
        return [
          {
            letter: exact.letter,
            terms: [exact]
          }
        ];
      }
      // Если точного совпадения нет — обычный поиск
      return glossaryData
        .map(section => ({
          ...section,
          terms: section.terms.filter(term => {
            const title = typeof term.title === "string" ? term.title : String(term.title.en || Object.values(term.title)[0]);
            const def = typeof term.definition === "string" ? term.definition : String(term.definition.en || Object.values(term.definition)[0]);
            return title.toLowerCase().includes(search.toLowerCase()) ||
              (def && def.toLowerCase().includes(search.toLowerCase()));
          })
        }))
        .filter(section => section.terms.length > 0);
    }
    if (activeLetter) {
      return glossaryData.filter(section => section.letter === activeLetter);
    }
    return glossaryData;
  }, [search, activeLetter, isSearchActive]);

  // A-Z навигация
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const availableLetters = glossaryData.map(s => s.letter);

  const breadcrumbs = [
    { label: { en: "Home", ru: "Главная", zh: "首页", ko: "홈", ja: "ホーム", tr: "Ana Sayfa", pt: "Início", de: "Startseite", es: "Inicio" }, href: "/" },
    { label: { en: "Glossary", ru: "Глоссарий", zh: "术语表", ko: "용어집", ja: "用語集", tr: "Sözlük", pt: "Glossário", de: "Glossar", es: "Glosario" }, href: "/Docs/introduction/glossary" }
  ];

  return (
    <div className="px-4">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GlossaryPage",
            "name": `Ergo Glossary`,
            "inLanguage": lang,
            "url": typeof window !== 'undefined' ? window.location.href : '',
            "hasPart": glossaryData.flatMap(section => section.terms.map(term => ({
              "@type": "DefinedTerm",
              "name": typeof term.title === "string" ? term.title : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || (term.title && Object.values(term.title)[0]) || ""),
              "description": typeof term.definition === "string" ? term.definition : ((term.definition as Record<string, string>)[lang] || (term.definition as Record<string, string>).en || (term.definition && Object.values(term.definition)[0]) || ""),
              "url": typeof window !== 'undefined' ? `${window.location.origin}/Docs/introduction/glossary#${term.anchor}` : `#${term.anchor}`
            })))
          })
        }} />
        {/* FAQPage JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": glossaryData.flatMap(section => section.terms.filter(term => 'example' in term && term.example).map(term => {
              const title = typeof term.title === "string" ? term.title : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || (term.title && Object.values(term.title)[0]) || "");
              const def = typeof term.definition === "string" ? term.definition : ((term.definition as Record<string, string>)[lang] || (term.definition as Record<string, string>).en || (term.definition && Object.values(term.definition)[0]) || "");
              const ex = 'example' in term && term.example ? (typeof term.example === "string" ? term.example : ((term.example as Record<string, string>)[lang] || (term.example as Record<string, string>).en || (term.example && Object.values(term.example)[0]) || "")) : "";
              return {
                "@type": "Question",
                "name": `What is ${title}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `${def}${ex ? ' ' + ex : ''}`
                }
              };
            }))
          })
        }} />
      </Head>
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-gray-400" aria-label="Breadcrumb">
        {breadcrumbs.map((b, i) => (
          <span key={b.href}>
            <a href={b.href} className="hover:underline text-orange-300">
              {(b.label as Record<string, string>)[lang] || b.label.en || Object.values(b.label)[0]}
            </a>
            {i < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
        Glossary
      </h1>
      {/* Language Switcher */}
      <div className="mb-4 flex gap-2">
        {languages.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1 rounded font-bold transition text-sm focus:outline-none border border-neutral-700 ${lang === l.code ? "bg-orange-400 text-white border-orange-400" : "bg-neutral-800 text-orange-300 hover:bg-orange-400 hover:text-white"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
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
                    {typeof term.title === "string"
                      ? term.title
                      : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || (term.title && Object.values(term.title)[0]) || "")}
                  </dt>
                  <dd className="mb-4 text-gray-300 text-base">
                    {typeof term.definition === "string"
                      ? term.definition
                      : ((term.definition as Record<string, string>)[lang] || (term.definition as Record<string, string>).en || (term.definition && Object.values(term.definition)[0]) || "")}
                    {'example' in term && term.example && (
                      <div className="text-sm text-cyan-400 mt-1 italic">
                        Example: {typeof term.example === "string"
                          ? term.example
                          : ((term.example as Record<string, string>)[lang] || (term.example as Record<string, string>).en || (term.example && Object.values(term.example)[0]) || "")}
                      </div>
                    )}
                    {'seeAlso' in term && term.seeAlso && (
                      <div className="text-sm text-gray-400 mt-1">
                        See also: {term.seeAlso.map((t: any, i: number) => {
                          let label: string;
                          if (typeof t === "string") {
                            label = t;
                          } else if (typeof t === "object" && t !== null) {
                            const v = Object.values(t)[0];
                            label = (t as Record<string, string>).en || (typeof v === 'string' ? v : String(v)) || "";
                          } else {
                            label = String(t);
                          }
                          const anchor = findTermAnchor(label);
                          const href = anchor ? `#${anchor}` : `#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                          return (
                            <React.Fragment key={label}>
                              <a
                                href={href}
                                className="underline text-orange-300 hover:text-orange-200 cursor-pointer"
                                onClick={e => {
                                  e.preventDefault();
                                  setActiveLetter(null);
                                  setSearch("");
                                  scrollToAnchorRef.current = anchor;
                                  setTimeout(() => {
                                    const el = document.getElementById(anchor || "");
                                    if (el) {
                                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }
                                  }, 100);
                                }}
                              >
                                {label}
                              </a>
                              {i < term.seeAlso.length - 1 && ', '}
                            </React.Fragment>
                          );
                        })}
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