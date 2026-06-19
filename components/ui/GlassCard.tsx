"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  glow?: boolean;
};

export function GlassCard({ children, className, glow = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[8px] border border-white/12 bg-[#0d0d0d] md:bg-white/[0.055] p-6 max-md:shadow-none shadow-2xl shadow-black/25 max-md:backdrop-filter-none backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1",
        glow && "md:before:absolute md:before:inset-px md:before:rounded-[7px] md:before:bg-gradient-to-br md:before:from-white/10 md:before:to-transparent md:before:opacity-0 md:before:transition-opacity md:before:duration-300 hover:md:before:opacity-100",
        "md:after:absolute md:after:inset-x-0 md:after:mx-auto md:after:top-0 md:after:h-px md:after:w-1/2 md:after:bg-gradient-to-r md:after:from-transparent md:after:via-white/35 md:after:to-transparent",
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
