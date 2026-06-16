import type { Accent } from "@/types/portfolio";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    glow: string;
    from: string;
    to: string;
  }
> = {
  blue: {
    text: "text-blue-300",
    border: "border-blue-300/25",
    bg: "bg-blue-400/10",
    glow: "shadow-blue-500/20",
    from: "from-blue-400",
    to: "to-cyan-300",
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-300/25",
    bg: "bg-purple-400/10",
    glow: "shadow-purple-500/20",
    from: "from-purple-400",
    to: "to-fuchsia-300",
  },
  green: {
    text: "text-green-300",
    border: "border-green-300/25",
    bg: "bg-green-400/10",
    glow: "shadow-green-500/20",
    from: "from-green-400",
    to: "to-emerald-300",
  },
};
