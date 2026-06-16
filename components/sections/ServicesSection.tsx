"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { accentStyles, cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="الخدمات"
          title="خدمات نمو رقمي احترافية للأسواق والشركات المستهدفة."
          description="من تصميم الواجهات إلى استراتيجيات التسويق، كل خدمة مصممة لتحويل الانتباه إلى عملاء محتملين."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map(({ title, description, icon: Icon, accent }) => {
            const styles = accentStyles[accent];

            return (
              <motion.div key={title} variants={fadeUp}>
                <GlassCard className={cn("h-full shadow-2xl", styles.glow)}>
                  <div
                    className={cn(
                      "mb-6 grid size-12 place-items-center rounded-[8px] border transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-white/10",
                      styles.border,
                      styles.bg,
                      styles.text,
                    )}
                  >
                    <Icon aria-hidden className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{description}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-300">
                    <span className={cn("size-2 rounded-full bg-gradient-to-r", styles.from, styles.to)} />
                    تركز على التحويل
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
