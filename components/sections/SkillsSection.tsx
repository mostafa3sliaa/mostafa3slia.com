"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";
import { accentStyles, cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function SkillsSection() {
  const { t } = useLanguage();

  // Group skills by category
  const categories = ["frontend", "backend", "marketing", "design"] as const;

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title2")}
          description={t("skills.description2")}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div 
                key={category}
                className="glass-panel relative flex flex-col overflow-hidden rounded-[24px] p-8 sm:p-10 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute -start-20 -top-20 size-64 rounded-full bg-[#00e5ff]/5 blur-[80px]" />
                <div className="absolute -end-20 -bottom-20 size-64 rounded-full bg-[#00ff66]/5 blur-[80px]" />
                
                <h3 className="relative mb-8 text-2xl font-black text-white tracking-wide">
                  {t(`skills.categories.${category}`)}
                </h3>

                <div className="relative flex flex-wrap gap-4">
                  {categorySkills.map((skill) => {
                    const styles = accentStyles[skill.accent];
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                      >
                        <span className={cn("transition-colors duration-300", styles.text)}>
                          <Icon className="size-5" />
                        </span>
                        <span className="text-sm font-bold text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
