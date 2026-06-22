"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/portfolio";
import { accentStyles, cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t , dict} = useLanguage();
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title2")}
          description={t("services.description2")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {services.map(({ icon: Icon, accent }, index) => {
            const {title, description} = dict.data.services[index];
            const styles = accentStyles[accent];

            return (
              <div key={title} className={`glass-panel group flex flex-col p-8 sm:p-10 animate-fade-in-up animation-delay-${Math.min(index * 100 + 100, 1000)}`}>
                <div
                  className={cn(
                    "mb-8 flex size-16 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110",
                    styles.border,
                    styles.bg,
                    styles.text,
                  )}
                >
                  <Icon aria-hidden className="size-7" />
                </div>
                
                <h3 className="text-3xl font-bold text-white tracking-tight">{title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-[#a1a1aa]">{description}</p>
                
                <div className="mt-auto pt-10 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm font-bold text-white/70 uppercase tracking-widest">
                    <span className={cn("size-2 rounded-full bg-gradient-to-r", styles.from, styles.to, "animate-pulse")} />
                    {t("services.tag")}
                  </div>
                  
                  <div className={cn("flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-reverse group-hover:-translate-x-2", styles.text)}>
                    →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
