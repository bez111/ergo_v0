export const themeConfig = {
  colors: {
    primary: {
      DEFAULT: "hsl(30, 98%, 50%)", // Orange
      foreground: "hsl(0, 0%, 0%)",
    },
    background: {
      DEFAULT: "hsl(0, 0%, 0%)", // Black
      secondary: "hsl(0, 0%, 5%)",
    },
    cyberpunk: {
      neon: "#00ffff",
      glitch: "#ff00ff",
      warning: "#ffff00",
    },
  },
  animations: {
    glitch: "glitch 500ms infinite",
    scanline: "scanline 8s linear infinite",
    shimmer: "shimmer 2s infinite",
  },
}

export type ThemeConfig = typeof themeConfig
