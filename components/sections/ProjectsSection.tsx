"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";
import { accentStyles, cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

export function ProjectsSection() {
  const { t , dict} = useLanguage();
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title2")}
          description={t("projects.description2")}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-[minmax(400px,auto)]">
          {projects.map((project, index) => {
            const dictProject = dict.data.projects[index];
            const title = dictProject.title;
            const description = dictProject.description;
            const styles = accentStyles[project.accent];
            
            const bentoClasses = cn(
              "glass-panel flex flex-col p-4 animate-fade-in-up",
            );

            return (
              <div key={title} className={bentoClasses} style={{ animationDelay: `${0.1 * index}s` }}>
                <div className={cn("relative overflow-hidden rounded-xl", "h-60")}>
                  <ProjectVisual visual={project.visual} accent={project.accent} image={project.image} />
                </div>

                <div className="flex flex-1 flex-col pt-8 px-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#a1a1aa]">{description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-8">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "focus-ring inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-bold transition-all hover:-translate-y-1 hover:shadow-lg",
                          styles.border,
                          styles.bg,
                          "text-white hover:bg-white/10",
                        )}
                      >
                        <FiExternalLink aria-hidden className="size-5" />
                        {t("projects.live")}
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={t("projects.code")}
                        className="focus-ring grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <FiGithub aria-hidden className="size-5" />
                      </a>
                    )}
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
