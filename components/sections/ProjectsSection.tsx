"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { accentStyles, cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="المشاريع"
          title="أعمال مختارة عبر المواقع ولوحات التحكم وأنظمة النمو."
          description="تم تصميم كل مشروع ليكون احترافياً، سريع التحميل، ويوجه الزوار نحو اتخاذ إجراء فعال."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => {
            const styles = accentStyles[project.accent];

            return (
              <motion.div key={project.title} variants={fadeUp}>
                <GlassCard className="flex h-full flex-col p-3">
                  <ProjectVisual visual={project.visual} accent={project.accent} image={project.image} />

                  <div className="flex flex-1 flex-col p-3 pt-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1.5 text-xs font-medium text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-2 pt-6">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        className={cn(
                          "focus-ring inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-[8px] border px-3 text-sm font-semibold transition",
                          styles.border,
                          styles.bg,
                          "text-white hover:bg-white/10",
                        )}
                      >
                        <FiExternalLink aria-hidden className="size-4" />
                        عرض مباشر
                      </motion.a>
                      {project.sourceUrl && (
                        <motion.a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="الكود المصدري"
                          whileHover={{ y: -2 }}
                          className="focus-ring grid min-h-10 w-11 place-items-center rounded-[8px] border border-white/10 bg-white/[0.045] text-gray-300 transition hover:border-white/20 hover:text-white"
                        >
                          <FiGithub aria-hidden className="size-4" />
                        </motion.a>
                      )}
                    </div>
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
