export const commonStyles = {
  // Container styles
  container: "container px-4 md:px-6",
  section: "py-16 relative overflow-hidden bg-black",
  sectionWithBorder: "py-16 relative overflow-hidden bg-black border-t border-b border-primary/30",

  // Background styles
  background: {
    base: "absolute inset-0 bg-black z-0",
    grid: "absolute inset-0 bg-[linear-gradient(0deg,rgba(255,136,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,136,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]",
  },

  // Text styles
  text: {
    heading: "text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent leading-snug pb-2 align-baseline block",
    subheading: "text-xl md:text-2xl text-gray-300 mb-2",
    body: "text-lg text-gray-400",
    mono: "font-mono",
  },

  // Button styles
  button: {
    primary: "bg-primary text-white hover:bg-primary/80 font-mono uppercase tracking-wider border-2 border-primary px-6 py-3 rounded-lg",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-mono uppercase tracking-wider px-6 py-3 rounded-lg",
    icon: "p-3 rounded-lg bg-primary/10 border border-primary/30",
  },

  // Card styles
  card: {
    base: "bg-black/60 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden",
    hover: "hover:border-primary/40 hover:scale-[1.02] transition-all duration-300",
  },

  // Grid styles
  grid: {
    base: "grid gap-6",
    cols2: "grid-cols-1 md:grid-cols-2",
    cols3: "grid-cols-1 md:grid-cols-3",
    cols4: "grid-cols-2 md:grid-cols-4",
  },

  // Flex styles
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    col: "flex flex-col",
  },

  // Spacing
  spacing: {
    section: "py-16",
    container: "px-4 md:px-6",
    gap: "gap-6",
  },

  // Animations
  animation: {
    hover: "transition-all duration-300",
    scale: "hover:scale-105 transition-transform duration-300",
    fade: "transition-opacity duration-300",
  },
} 