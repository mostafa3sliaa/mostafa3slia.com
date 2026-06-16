"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function StatsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="glass-panel grid overflow-hidden rounded-[8px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="relative p-7 text-center sm:p-8"
            >
              {index > 0 ? (
                <span className="absolute start-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-white/12 lg:block" />
              ) : null}
              <div className="text-4xl font-semibold text-white sm:text-5xl">
                {typeof stat.value === "number" && stat.animated ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <p className="mt-3 text-sm font-medium uppercase text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
