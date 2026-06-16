"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutHighlights } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="من أنا"
          title="مطور شغوف للشركات التي تحتاج لأكثر من مجرد موقع."
          description="يجمع مصطفى بين هندسة الواجهات الأمامية واستراتيجيات التسويق الرقمي في نظام واحد لنمو الأعمال."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {aboutHighlights.map(({ title, description, icon: Icon }) => (
            <motion.div key={title} variants={fadeUp}>
              <GlassCard className="h-full">
                <span className="mb-5 grid size-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.06] text-blue-200 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/10 group-hover:text-blue-300 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <Icon aria-hidden className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
