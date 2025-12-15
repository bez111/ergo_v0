// import dynamic from 'next/dynamic'

// // Динамические импорты для компонентов ниже фолда

// export const ShareButtonsDynamic = dynamic(
//   () => import('./share-buttons').then(mod => ({ default: mod.ShareButtons })),
//   { 
//     ssr: false,
//     loading: () => (
//       <div className="flex gap-2 animate-pulse">
//         <div className="h-10 w-20 bg-gray-700 rounded" />
//         <div className="h-10 w-20 bg-gray-700 rounded" />
//         <div className="h-10 w-20 bg-gray-700 rounded" />
//       </div>
//     )
//   }
// )

// export const BlogActionsDynamic = dynamic(
//   () => import('./blog-actions').then(mod => ({ default: mod.BlogActions })),
//   { 
//     ssr: false,
//     loading: () => (
//       <div className="flex flex-wrap gap-2 p-4 bg-gray-900/50 rounded-xl border border-gray-800 animate-pulse">
//         <div className="h-8 w-16 bg-gray-700 rounded" />
//         <div className="h-8 w-20 bg-gray-700 rounded" />
//         <div className="h-8 w-18 bg-gray-700 rounded" />
//         <div className="h-8 w-16 bg-gray-700 rounded" />
//       </div>
//     )
//   }
// )

// // Signature effects - только для визуального улучшения, не критичны для LCP
// export const SignatureEffectsDynamic = dynamic(
//   () => import('@/components/ui-kit/signature-effects').then(mod => ({
//     default: {
//       HexagonalGrid: mod.HexagonalGrid,
//       FloatingParticles: mod.FloatingParticles,
//       MathematicalPattern: mod.MathematicalPattern,
//       WatermarkHex: mod.WatermarkHex
//     }
//   })),
//   { 
//     ssr: false,
//     loading: () => null // Invisible loading state
//   }
// )

// // Framer Motion - тяжелая анимационная библиотека
// export const MotionDynamic = dynamic(
//   () => import('framer-motion').then(mod => ({ 
//     default: {
//       motion: mod.motion,
//       AnimatePresence: mod.AnimatePresence
//     }
//   })),
//   { 
//     ssr: false,
//     loading: () => null
//   }
// ) 