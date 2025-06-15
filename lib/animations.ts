import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export const slideIn: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Common transition configurations
export const transitions = {
  default: {
    duration: 0.3,
    ease: "easeOut",
  },
  smooth: {
    duration: 0.5,
    ease: "easeInOut",
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
}

// Common hover animations
export const hoverScale = {
  scale: 1.05,
  transition: transitions.default,
}

export const hoverLift = {
  y: -5,
  transition: transitions.default,
}

// Common tap animations
export const tapScale = {
  scale: 0.95,
  transition: transitions.default,
} 