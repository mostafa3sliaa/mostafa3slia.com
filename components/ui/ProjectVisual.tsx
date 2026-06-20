"use client";


import { FiActivity, FiCalendar, FiHome, FiMapPin, FiPieChart, FiStar } from "react-icons/fi";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

import Image from "next/image";

type ProjectVisualProps = {
  visual: Project["visual"];
  accent: Project["accent"];
  image?: string;
};

const accentMap = {
  blue: "from-blue-400/70 via-sky-300/40 to-cyan-300/30",
  purple: "from-purple-400/70 via-fuchsia-300/40 to-blue-300/30",
  green: "from-green-400/70 via-emerald-300/40 to-cyan-300/30",
};

const iconMap = {
  medical: FiActivity,
  maps: FiMapPin,
  growth: FiPieChart,
  saas: FiStar,
  realEstate: FiHome,
  restaurant: FiCalendar,
};

export function ProjectVisual({ visual, accent, image }: ProjectVisualProps) {
  if (image) {
    return (
      <div className="relative h-56 w-full overflow-hidden rounded-[8px]">
        <Image
          src={image}
          alt="Project Screenshot"
          fill
          className="object-cover object-center transition-all hover:scale-105"
        />
      </div>
    );
  }

  const Icon = iconMap[visual];

  return (
    <div className="relative h-56 overflow-hidden rounded-[8px] border border-white/10 bg-[#090909]">
      <div className={cn("absolute inset-x-0 top-0 h-32 bg-gradient-to-br opacity-70 blur-3xl", accentMap[accent])} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:24px_24px] opacity-45" />

      <div
        className="absolute inset-x-5 top-5 rounded-[8px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-700"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-[8px] border border-white/12 bg-white/10">
              <Icon className="size-4 text-white" />
            </span>
            <span className="h-2.5 w-24 rounded-full bg-white/22" />
          </div>
          <span className="h-7 w-16 rounded-full border border-white/10 bg-white/10" />
        </div>

        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
          <div className="space-y-3">
            <span className={cn("block h-20 rounded-[8px] bg-gradient-to-br", accentMap[accent])} />
            <div className="grid grid-cols-3 gap-2">
              <span className="h-10 rounded-[8px] bg-white/10" />
              <span className="h-10 rounded-[8px] bg-white/10" />
              <span className="h-10 rounded-[8px] bg-white/10" />
            </div>
          </div>
          <div className="space-y-2">
            <span className="block h-6 rounded-full bg-white/12" />
            <span className="block h-6 rounded-full bg-white/10" />
            <span className="block h-6 rounded-full bg-white/8" />
            <span className="block h-16 rounded-[8px] border border-white/10 bg-black/25" />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 inset-x-6 h-10 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl"
      >
        <div className="flex h-full items-center gap-2 px-3">
          <span className={cn("size-2 rounded-full bg-gradient-to-r", accentMap[accent])} />
          <span className="h-2 flex-1 rounded-full bg-white/15" />
          <span className="h-2 w-10 rounded-full bg-white/25" />
        </div>
      </div>
    </div>
  );
}
