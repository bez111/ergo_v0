// Unified Doc Styles based on UI Kit
// Строгий минималистичный дизайн без градиентов

export const docStyles = {
  // Page Layout
  page: "min-h-screen bg-black text-white",
  container: "max-w-6xl mx-auto px-4 sm:px-6 pt-0 pb-8",
  
  // Typography - БЕЗ ГРАДИЕНТОВ!
  h1: "text-4xl sm:text-5xl font-bold text-white mb-4", // Чистый белый
  h2: "text-2xl sm:text-3xl font-bold text-white mb-4", // Чистый белый
  h3: "text-xl sm:text-2xl font-semibold text-white mb-3", // Чистый белый
  h4: "text-lg sm:text-xl font-semibold text-white mb-2", // Чистый белый
  
  // Paragraphs
  lead: "text-xl text-gray-400 mb-6",
  body: "text-gray-300 mb-4",
  small: "text-sm text-gray-400",
  
  // Links
  link: "text-brand-primary-400 hover:text-brand-primary-300 transition-colors",
  
  // Buttons - Плоский дизайн
  buttonPrimary: "inline-flex items-center px-6 py-3 bg-brand-primary-500 text-black font-semibold rounded-lg hover:bg-brand-primary-400 transition-colors",
  buttonSecondary: "inline-flex items-center px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700",
  buttonOutline: "inline-flex items-center px-6 py-3 border border-brand-primary-500 text-brand-primary-400 font-semibold rounded-lg hover:bg-brand-primary-500/10 transition-colors",
  
  // Cards - Обновленный дизайн как на скриншоте
  card: "bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all",
  cardHighlight: "bg-gradient-to-br from-neutral-900 to-neutral-800 border border-brand-primary-500/20 rounded-2xl p-6",
  
  // Grids
  grid2: "grid md:grid-cols-2 gap-6",
  grid3: "grid md:grid-cols-3 gap-6",
  grid4: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // Sections
  section: "mb-12",
  sectionTitle: "text-2xl font-bold text-white mb-4 flex items-center gap-3",
  
  // Lists
  list: "space-y-2",
  listItem: "flex items-start gap-2 text-gray-300",
  
  // Code blocks
  codeBlock: "bg-neutral-900 border border-neutral-800 rounded-xl p-4 font-mono text-sm overflow-x-auto",
  codeInline: "bg-neutral-800 px-2 py-1 rounded text-brand-primary-400 font-mono text-sm",
  
  // Alerts/Callouts
  alertInfo: "bg-blue-500/10 border border-blue-500/20 rounded-xl p-6",
  alertWarning: "bg-orange-500/10 border border-orange-500/20 rounded-xl p-6",
  alertSuccess: "bg-green-500/10 border border-green-500/20 rounded-xl p-6",
  alertError: "bg-red-500/10 border border-red-500/20 rounded-xl p-6",
  
  // Icons
  iconPrimary: "text-brand-primary-400",
  iconSecondary: "text-gray-400",
  iconSuccess: "text-green-400",
  iconWarning: "text-orange-400",
  iconError: "text-red-400",
  
  // Badges
  badge: "inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-neutral-800 text-gray-300",
  badgePrimary: "inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-brand-primary-500/20 text-brand-primary-400",
  
  // Tables
  table: "w-full",
  tableHeader: "border-b border-neutral-800 pb-2 text-left text-gray-400 font-medium",
  tableCell: "py-3 text-gray-300",
  
  // Navigation
  navLink: "text-gray-400 hover:text-white transition-colors",
  navLinkActive: "text-brand-primary-400 font-semibold",
  
  // Dividers
  divider: "border-t border-neutral-800 my-8",
  
  // Feature Cards (для главных разделов) - обновленный стиль как на скриншоте
  featureCard: "group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 flex items-start gap-4 cursor-pointer overflow-hidden",
  
  // Chevron icon
  chevron: "w-5 h-5 text-gray-500 group-hover:text-brand-primary-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 absolute right-6 top-1/2 -translate-y-1/2",
}

// Helper function for combining classes
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
} 