import type { Variants } from "framer-motion";

const premiumEase = [0.21, 1, 0.21, 1] as const;

// Helper to determine if we are on a small device to disable heavy blur animations
const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: isMobile ? 0 : 28, filter: isMobile ? "none" : "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: isMobile ? "none" : "blur(0px)",
    transition: { duration: isMobile ? 0.3 : 0.7, ease: premiumEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: isMobile ? "none" : "blur(12px)" },
  visible: {
    opacity: 1,
    filter: isMobile ? "none" : "blur(0px)",
    transition: { duration: isMobile ? 0.3 : 0.7, ease: premiumEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: isMobile ? 1 : 0.94, filter: isMobile ? "none" : "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: isMobile ? "none" : "blur(0px)",
    transition: { duration: isMobile ? 0.3 : 0.7, ease: premiumEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: isMobile ? 0.02 : 0.08,
      delayChildren: isMobile ? 0.02 : 0.08,
    },
  },
};

export const hoverLift = {
  y: isMobile ? 0 : -8,
  scale: isMobile ? 1 : 1.015,
  transition: { duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] },
};
