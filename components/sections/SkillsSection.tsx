"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";
import { accentStyles, cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title2")}
          description={t("skills.description2")}
        />

        <div className="glass-panel overflow-hidden p-8 sm:p-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const styles = accentStyles[skill.accent];

              return (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white tracking-wide">{skill.name}</h3>
                    <span className={cn("text-base font-black", styles.text)}>{skill.level}%</span>
                  </div>
                  
                  <div className="relative mt-6 h-2.5 overflow-hidden rounded-full bg-black/50 border border-white/5">
                    <span
                      className={cn("block h-full rounded-full bg-gradient-to-r shadow-[0_0_10px_rgba(255,255,255,0.3)]", styles.from, styles.to)}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  
                  <div className="relative mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50">
                    <span className={cn("size-2 rounded-full bg-gradient-to-r animate-pulse", styles.from, styles.to)} />
                    {t("skills.tag")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
