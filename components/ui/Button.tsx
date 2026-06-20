"use client";

import Link from "next/link";

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
  onClick?: () => void;
};

export function Button({ href, children, icon: Icon = FiArrowRight, variant = "primary", className, target, rel, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-[3px] hover:scale-[1.02] active:scale-[0.98]",
        variant === "primary"
          ? "border-blue-300/30 bg-white text-black shadow-[0_0_44px_rgba(96,165,250,0.22)] hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          : "border-white/12 bg-white/[0.06] text-white backdrop-blur-xl hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]",
        className,
      )}
    >
      <span>{children}</span>
      <Icon aria-hidden className="size-4" />
    </Link>
  );
}
