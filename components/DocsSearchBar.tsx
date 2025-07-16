import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import DocsSearchModal from "./DocsSearchModal";

export default function DocsSearchBar() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Горячие клавиши для поиска
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K для открытия поиска
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      // Клавиша "/" для быстрого открытия поиска
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        // Проверяем, что пользователь не печатает в input или textarea
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setOpen(true);
        }
      }
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      <div className="w-full flex justify-center py-6 bg-transparent z-20">
        <div
          className="flex items-center w-full max-w-3xl bg-[#0c0e13] border border-[#2a2d36] rounded-full px-6 py-3 focus-within:border-orange-400 transition-colors duration-150 shadow-none group cursor-pointer"
          style={{ minHeight: 56 }}
          onClick={() => setOpen(true)}
        >
          <Search className="w-8 h-8 text-gray-400 mr-3 group-hover:text-orange-400 transition-colors" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation, code, tutorials... (Press / or ⌘K)"
            className="bg-transparent outline-none border-none w-full text-xl text-gray-200 placeholder-gray-400 font-medium cursor-pointer"
            readOnly
          />
          <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 bg-neutral-800 px-2 py-1 rounded">
            <span className="hidden md:inline">⌘</span>
            <span>K</span>
            <span className="text-gray-600 mx-1">or</span>
            <span>/</span>
          </div>
        </div>
      </div>
      <DocsSearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
} 