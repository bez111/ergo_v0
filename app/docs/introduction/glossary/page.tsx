"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { glossaryData } from "./glossaryData";
import Head from "next/head";
import { useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [lang, setLang] = useState("en");
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const scrollToAnchorRef = useRef<string | null>(null);
  const router = useRouter();
  const [showModeration, setShowModeration] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState<any[]>([]);

  // Получаем все термины для поиска
  const allTerms = glossaryData.flatMap(section => section.terms);

  // Получаем статистику из localStorage
  const [topTerms, setTopTerms] = useState<string[]>([]);

  // Состояния для модального окна предложения улучшения
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [suggestTerm, setSuggestTerm] = useState<string | null>(null);
  const [suggestName, setSuggestName] = useState("");
  const [suggestEmail, setSuggestEmail] = useState("");
  const [suggestText, setSuggestText] = useState("");
  const [suggestSuccess, setSuggestSuccess] = useState(false);

  useEffect(() => {
    const stats: Record<string, number> = JSON.parse(localStorage.getItem('glossarySearchStats') || '{}');
    const sorted = Object.entries(stats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([term]) => term);
    setTopTerms(sorted);
  }, [search]);

  // Увеличиваем счетчик при поиске или выборе термина
  const incrementTermStat = (term: string) => {
    const stats: Record<string, number> = JSON.parse(localStorage.getItem('glossarySearchStats') || '{}');
    stats[term] = (stats[term] || 0) + 1;
    localStorage.setItem('glossarySearchStats', JSON.stringify(stats));
  };

  // Функция для получения подсказок автодополнения
  const getSuggestions = (query: string): string[] => {
    if (!query.trim()) return [];
    const suggestions: string[] = [];
    const queryLower = query.toLowerCase();
    allTerms.forEach(term => {
      const title = typeof term.title === "string"
        ? term.title
        : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || "");
      if (title.toLowerCase().includes(queryLower)) {
        suggestions.push(title);
      }
    });
    return suggestions.slice(0, 10);
  };

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

  // Функция для сохранения предложения
  const handleSuggestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const suggestions = JSON.parse(localStorage.getItem('glossarySuggestions') || '[]');
    suggestions.push({
      term: suggestTerm,
      name: suggestName,
      email: suggestEmail,
      text: suggestText,
      date: new Date().toISOString()
    });
    localStorage.setItem('glossarySuggestions', JSON.stringify(suggestions));
    setSuggestSuccess(true);
    setSuggestName("");
    setSuggestEmail("");
    setSuggestText("");
    setTimeout(() => {
      setShowSuggestModal(false);
      setSuggestSuccess(false);
    }, 2000);
  };

  // Проверяем query-параметр
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('mod') === '1') {
        setShowModeration(true);
      }
    }
  }, []);

  // Получаем предложения из localStorage
  const loadSuggestions = () => {
    const suggestions = JSON.parse(localStorage.getItem('glossarySuggestions') || '[]');
    setSuggestionsList(suggestions);
  };

  // Экспорт в CSV
  const exportCSV = () => {
    const suggestions = JSON.parse(localStorage.getItem('glossarySuggestions') || '[]');
    if (!suggestions.length) return;
    const header = Object.keys(suggestions[0]);
    const rows = suggestions.map((s: any) => header.map(h => '"' + String(s[h]).replace(/"/g, '""') + '"').join(','));
    const csv = [header.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'glossary_suggestions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="px-4 relative">
      {/* Уведомление о копировании */}
      {showCopyNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-right">
          ✅ Link copied to clipboard!
        </div>
      )}
      <Head>
        {/* SEO Meta Tags */}
        <title>
          {lang === "zh" ? "Ergo区块链词汇表 - 完整加密和区块链术语词典" :
           lang === "ru" ? "Глоссарий Ergo Blockchain - Полный словарь крипто и блокчейн терминов" :
           lang === "ko" ? "Ergo 블록체인 용어집 - 완전한 암호화폐 및 블록체인 용어 사전" :
           lang === "ja" ? "Ergoブロックチェーン用語集 - 完全な暗号通貨・ブロックチェーン用語辞典" :
           lang === "tr" ? "Ergo Blockchain Sözlüğü - Tam Kripto ve Blockchain Terimleri Sözlüğü" :
           lang === "pt" ? "Glossário Ergo Blockchain - Dicionário Completo de Termos de Cripto e Blockchain" :
           lang === "de" ? "Ergo Blockchain Glossar - Vollständiges Krypto- und Blockchain-Begriffslexikon" :
           lang === "es" ? "Glosario Ergo Blockchain - Diccionario Completo de Términos de Cripto y Blockchain" :
           "Ergo Blockchain Glossary - Complete Crypto & Blockchain Terms Dictionary"}
        </title>
        <meta name="description" content={
          lang === "zh" ? "全面的Ergo区块链词汇表，包含200多个加密术语、定义和示例。提供9种语言版本。" :
          lang === "ru" ? "Комплексный глоссарий Ergo blockchain с 200+ крипто терминами, определениями и примерами. Доступно на 9 языках." :
          lang === "ko" ? "200개 이상의 암호화폐 용어, 정의 및 예시가 포함된 포괄적인 Ergo 블록체인 용어집. 9개 언어로 제공됩니다." :
          lang === "ja" ? "200以上の暗号通貨用語、定義、例を含む包括的なErgoブロックチェーン用語集。9言語で提供。" :
          lang === "tr" ? "200+ kripto terimi, tanım ve örnek içeren kapsamlı Ergo blockchain sözlüğü. 9 dilde mevcuttur." :
          lang === "pt" ? "Glossário abrangente do Ergo blockchain com 200+ termos de cripto, definições e exemplos. Disponível em 9 idiomas." :
          lang === "de" ? "Umfassendes Ergo Blockchain Glossar mit 200+ Krypto-Begriffen, Definitionen und Beispielen. Verfügbar in 9 Sprachen." :
          lang === "es" ? "Glosario completo de Ergo blockchain con 200+ términos de cripto, definiciones y ejemplos. Disponible en 9 idiomas." :
          "Comprehensive Ergo blockchain glossary with 200+ crypto terms, definitions, and examples. Available in 9 languages including English, Chinese, Russian, Korean, Japanese, Turkish, Portuguese, German, and Spanish."
        } />
        <meta name="keywords" content="ergo, blockchain, cryptocurrency, glossary, terms, definitions, crypto dictionary, blockchain terms, ergo blockchain, proof of work, mining, smart contracts" />
        <meta name="author" content="Ergo Foundation" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ergo Blockchain Glossary - Complete Crypto & Blockchain Terms Dictionary" />
        <meta property="og:description" content="Comprehensive Ergo blockchain glossary with 200+ crypto terms, definitions, and examples. Available in 9 languages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ergo.org/Docs/introduction/glossary" />
        <meta property="og:site_name" content="Ergo Blockchain" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ergo Blockchain Glossary" />
        <meta name="twitter:description" content="200+ crypto terms explained in 9 languages" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ergo.org/Docs/introduction/glossary" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://ergo.org/Docs/introduction/glossary" />
        <link rel="alternate" hrefLang="zh" href="https://ergo.org/Docs/introduction/glossary?lang=zh" />
        <link rel="alternate" hrefLang="ru" href="https://ergo.org/Docs/introduction/glossary?lang=ru" />
        <link rel="alternate" hrefLang="ko" href="https://ergo.org/Docs/introduction/glossary?lang=ko" />
        <link rel="alternate" hrefLang="ja" href="https://ergo.org/Docs/introduction/glossary?lang=ja" />
        <link rel="alternate" hrefLang="tr" href="https://ergo.org/Docs/introduction/glossary?lang=tr" />
        <link rel="alternate" hrefLang="pt" href="https://ergo.org/Docs/introduction/glossary?lang=pt" />
        <link rel="alternate" hrefLang="de" href="https://ergo.org/Docs/introduction/glossary?lang=de" />
        <link rel="alternate" hrefLang="es" href="https://ergo.org/Docs/introduction/glossary?lang=es" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GlossaryPage",
            "name": "Ergo Blockchain Glossary",
            "description": "Comprehensive glossary of blockchain and cryptocurrency terms with 200+ definitions",
            "inLanguage": lang,
            "url": typeof window !== 'undefined' ? window.location.href : '',
            "numberOfItems": allTerms.length,
            "hasPart": glossaryData.flatMap(section => section.terms.map(term => ({
              "@type": "DefinedTerm",
              "name": typeof term.title === "string" ? term.title : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || (term.title && Object.values(term.title)[0]) || ""),
              "description": typeof term.definition === "string" ? term.definition : ((term.definition as Record<string, string>)[lang] || (term.definition as Record<string, string>).en || (term.definition && Object.values(term.definition)[0]) || ""),
              "url": typeof window !== 'undefined' ? `${window.location.origin}/Docs/introduction/glossary#${term.anchor}` : `#${term.anchor}`,
              "identifier": term.anchor,
              "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "name": "Ergo Blockchain Terms"
              }
            }))),
            "about": {
              "@type": "Thing",
              "name": "Blockchain Technology"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Blockchain developers, crypto enthusiasts, researchers"
            }
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
      {/* Breadcrumbs - скрыты по запросу */}
      {/* <nav className="mb-4 text-sm text-gray-400" aria-label="Breadcrumb">
        {breadcrumbs.map((b, i) => (
          <span key={b.href}>
            <a href={b.href} className="hover:underline text-orange-300">
              {(b.label as Record<string, string>)[lang] || b.label.en || Object.values(b.label)[0]}
            </a>
            {i < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav> */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-1">
        Glossary
      </h1>
      {/* Минималистичный, но интересный блок статистики Ergo */}
      <StatsSegment
        terms={allTerms.length}
        languages={languages.length}
        sections={glossaryData.length}
        topTerms={topTerms}
      />
      {/* Language Switcher */}
      <div className="mb-4 flex gap-2">
        {languages.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`px-3 py-1 rounded font-bold transition text-sm focus:outline-none border border-neutral-700 ${lang === l.code ? "bg-orange-400 text-white border border-orange-400" : "bg-neutral-800 text-orange-300 hover:bg-orange-400 hover:text-white"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
      {/* Поиск */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              if (e.target.value) setActiveLetter(null);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search terms..."
            className="w-full px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {/* Автодополнение */}
          {showSuggestions && search && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {getSuggestions(search).slice(0, 8).map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearch(suggestion);
                    setShowSuggestions(false);
                    incrementTermStat(suggestion);
                  }}
                  className="w-full px-4 py-2 text-left text-gray-200 hover:bg-neutral-700 transition-colors flex items-center"
                >
                  <span className="text-orange-400 mr-2">🔍</span>
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-1 justify-center md:justify-start max-w-full overflow-x-auto pb-2">
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
          <section key={section.letter} id={section.letter} className="mb-12" itemScope itemType="https://schema.org/DefinedTermSet">
            <h2 className="text-3xl font-bold mb-6 text-orange-300 tracking-wide">{section.letter}</h2>
            <dl>
              {section.terms.map((term, termIndex) => {
                const title = typeof term.title === "string"
                  ? term.title
                  : ((term.title as Record<string, string>)[lang] || (term.title as Record<string, string>).en || (term.title && Object.values(term.title)[0]) || "");
                return (
                  <React.Fragment key={`${section.letter}-${term.anchor}-${termIndex}`}>
                    <dt id={term.anchor} className="text-xl font-semibold mt-8 mb-2 text-cyan-300 scroll-mt-24 flex items-center justify-between group" itemScope itemProp="hasDefinedTerm" itemType="https://schema.org/DefinedTerm">
                      <span className="flex-1">
                        {(() => {
                          if (search && title.toLowerCase().includes(search.toLowerCase())) {
                            const parts = title.split(new RegExp(`(${search})`, 'gi'));
                            return (
                              <span>
                                {parts.map((part, index) => 
                                  part.toLowerCase() === search.toLowerCase() ? (
                                    <mark key={index} className="bg-orange-400 text-black px-1 rounded">
                                      {part}
                                    </mark>
                                  ) : (
                                    part
                                  )
                                )}
                              </span>
                            );
                          }
                          return title;
                        })()}
                      </span>
                      <meta itemProp="name" content={title} />
                      <button
                        onClick={() => {
                          const url = `${window.location.origin}${window.location.pathname}#${term.anchor}`;
                          navigator.clipboard.writeText(url);
                          setShowCopyNotification(true);
                          setTimeout(() => setShowCopyNotification(false), 1500);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 px-2 py-1 text-xs bg-neutral-700 hover:bg-neutral-600 text-gray-300 rounded"
                        title="Copy link to term"
                      >
                        🔗
                      </button>
                      <button
                        onClick={() => {
                          setSuggestTerm(title);
                          setShowSuggestModal(true);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 px-2 py-1 text-xs bg-neutral-700 hover:bg-neutral-600 text-gray-300 rounded"
                        title="Предложить улучшение"
                      >
                        💡
                      </button>
                    </dt>
                    <dd className="mb-4 text-gray-300 text-base transition-all duration-300 hover:bg-neutral-800 hover:bg-opacity-50 p-2 rounded" itemProp="description">
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
                );
              })}
            </dl>
          </section>
        ))
      )}
      {showSuggestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <form onSubmit={handleSuggestSubmit} className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-orange-400">Предложить улучшение для: <span className="text-cyan-300">{suggestTerm}</span></h2>
            <input
              type="text"
              placeholder="Ваше имя (необязательно)"
              value={suggestName}
              onChange={e => setSuggestName(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-gray-200"
            />
            <input
              type="email"
              placeholder="Email (необязательно)"
              value={suggestEmail}
              onChange={e => setSuggestEmail(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-gray-200"
            />
            <textarea
              required
              placeholder="Ваше предложение или комментарий..."
              value={suggestText}
              onChange={e => setSuggestText(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-gray-200 min-h-[80px]"
            />
            <div className="flex gap-2 justify-end">
              <button type="button" onClick={() => setShowSuggestModal(false)} className="px-4 py-2 rounded bg-neutral-700 text-gray-300 hover:bg-neutral-600">Отмена</button>
              <button type="submit" className="px-4 py-2 rounded bg-orange-400 text-white font-bold hover:bg-orange-500">Отправить</button>
            </div>
            {suggestSuccess && <div className="mt-2 text-green-400">Спасибо! Ваше предложение отправлено.</div>}
          </form>
        </div>
      )}
      {showModeration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-orange-400">Модерация предложений</h2>
            <button onClick={loadSuggestions} className="mb-2 px-3 py-1 rounded bg-orange-400 text-white font-bold hover:bg-orange-500">Обновить</button>
            <button onClick={exportCSV} className="mb-2 ml-2 px-3 py-1 rounded bg-cyan-400 text-white font-bold hover:bg-cyan-500">Экспорт в CSV</button>
            <div className="mt-2">
              {suggestionsList.length === 0 ? (
                <div className="text-gray-400">Нет предложений.</div>
              ) : (
                <table className="w-full text-sm border border-neutral-700">
                  <thead>
                    <tr>
                      <th className="border border-neutral-700 px-2 py-1">Термин</th>
                      <th className="border border-neutral-700 px-2 py-1">Имя</th>
                      <th className="border border-neutral-700 px-2 py-1">Email</th>
                      <th className="border border-neutral-700 px-2 py-1">Комментарий</th>
                      <th className="border border-neutral-700 px-2 py-1">Дата</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suggestionsList.map((s, i) => (
                      <tr key={i}>
                        <td className="border border-neutral-700 px-2 py-1">{s.term}</td>
                        <td className="border border-neutral-700 px-2 py-1">{s.name}</td>
                        <td className="border border-neutral-700 px-2 py-1">{s.email}</td>
                        <td className="border border-neutral-700 px-2 py-1">{s.text}</td>
                        <td className="border border-neutral-700 px-2 py-1">{s.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowModeration(false)} className="px-4 py-2 rounded bg-neutral-700 text-gray-300 hover:bg-neutral-600">Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatsSegment({ terms, languages, sections, topTerms }: { terms: number; languages: number; sections: number; topTerms: string[] }) {
  // Анимация count-up
  const [displayTerms, setDisplayTerms] = useState(0);
  const [displayLangs, setDisplayLangs] = useState(0);
  const [displaySections, setDisplaySections] = useState(0);
  useEffect(() => {
    let t = 0, l = 0, s = 0;
    const step = () => {
      let changed = false;
      if (t < terms) { t += Math.ceil((terms-t)/6); setDisplayTerms(Math.min(t, terms)); changed = true; }
      if (l < languages) { l += 1; setDisplayLangs(Math.min(l, languages)); changed = true; }
      if (s < sections) { s += 1; setDisplaySections(Math.min(s, sections)); changed = true; }
      if (changed) setTimeout(step, 30);
    };
    step();
  }, [terms, languages, sections]);
  return (
    <div className="mb-8 flex flex-wrap gap-x-12 gap-y-4 items-end text-base font-medium text-gray-200 select-none">
      <StatItem label="terms" value={displayTerms} />
      <StatItem label="languages" value={displayLangs} />
      <StatItem label="sections" value={displaySections} />
      {topTerms && topTerms.length > 0 && (
        <div className="flex flex-col min-w-[180px]">
          <span className="uppercase text-xs tracking-widest text-gray-400 mb-1">top searched</span>
          <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 pb-1">
            {topTerms.map(term => (
              <span key={term} className="bg-neutral-800 text-orange-300 px-3 py-1 rounded font-semibold text-sm whitespace-nowrap border border-orange-400/30 hover:border-orange-400 transition-colors duration-150 cursor-pointer">{term}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col items-start relative group min-w-[90px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="text-3xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
        {value}
      </span>
      <span className="uppercase text-xs tracking-widest text-gray-400 mt-1 mb-0.5" style={{ letterSpacing: "0.12em" }}>{label}</span>
      <span
        className={`absolute left-0 bottom-0 h-0.5 rounded-full transition-all duration-200 ${hover ? "w-8 bg-gradient-to-r from-orange-400 to-cyan-400 opacity-80" : "w-0 opacity-0"}`}
      />
    </div>
  );
} 