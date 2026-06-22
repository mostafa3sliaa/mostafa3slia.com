"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/portfolio";

import { useLanguage } from "@/contexts/LanguageContext";

export function StatsSection() {
  const { dict } = useLanguage();
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div
          className="glass-panel grid overflow-hidden rounded-[8px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative p-7 text-center sm:p-8">
              {index > 0 ? (
                <span className="absolute start-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/12 lg:block" />
              ) : null}
              <div className="text-4xl font-semibold text-white sm:text-5xl">
                {typeof stat.value === "number" && stat.animated ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  dict.data.stats[index].value
                )}
              </div>
              <p className="mt-3 text-sm font-medium uppercase text-gray-400">{dict.data.stats[index].label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
