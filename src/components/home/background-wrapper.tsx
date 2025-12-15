export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Preload critical background image for LCP */}
      <link 
        rel="preload" 
        href="/cyberpunk-grid.png" 
        as="image" 
        type="image/png"
        fetchPriority="high"
      />
      
      {/* Cyberpunk grid background image */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'url(/cyberpunk-grid.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      />
      
      {/* Vignette overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: 2
        }}
      />
      
      {/* Content on top */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
