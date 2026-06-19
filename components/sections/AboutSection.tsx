"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutHighlights } from "@/data/portfolio";

import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t , dict} = useLanguage();
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("about.title2")}
          description={t("about.description3")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutHighlights.map(({ icon: Icon }, index) => {
            const dictItem = dict.data.aboutHighlights[index];
            return (
              <div key={index} className="glass-panel group flex flex-col p-6 sm:p-8 animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <span className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#00e5ff] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:border-[#00e5ff]/50 group-hover:bg-[#00e5ff]/10 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                  <Icon aria-hidden className="size-6 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{dictItem.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]">{dictItem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
