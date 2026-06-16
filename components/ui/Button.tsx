"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: IconType;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({ href, children, icon: Icon = FiArrowRight, variant = "primary", className, target, rel }: ButtonProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] } }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border px-5 text-sm font-semibold transition duration-300",
          variant === "primary"
            ? "border-blue-300/30 bg-white text-black shadow-[0_0_44px_rgba(96,165,250,0.22)] transition-all duration-300 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
            : "border-white/12 bg-white/[0.06] text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
          className,
        )}
      >
        <span>{children}</span>
        <Icon aria-hidden className="size-4" />
      </Link>
    </motion.div>
  );
}
