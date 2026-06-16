"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { accentStyles, cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="المهارات"
          title="التقنيات والأدوات الأساسية للنمو والتطوير."
          description="أفضل التقنيات لبناء واجهات سريعة وتطبيقات قوية متوافقة مع محركات البحث."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="glass-panel overflow-hidden rounded-[8px] p-4 sm:p-6 lg:p-8"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const styles = accentStyles[skill.accent];

              return (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="group rounded-[8px] border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-white/18 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                    <span className={cn("text-sm font-semibold", styles.text)}>{skill.level}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
                    <motion.span
                      className={cn("block h-full rounded-full bg-gradient-to-r", styles.from, styles.to)}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.15, ease: [0.21, 1, 0.21, 1] }}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase text-gray-500">
                    <span className={cn("size-1.5 rounded-full bg-gradient-to-r", styles.from, styles.to)} />
                    جاهز للإنتاج
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
