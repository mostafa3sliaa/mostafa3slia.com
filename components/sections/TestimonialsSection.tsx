"use client";

import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

export function TestimonialsSection() {
  const { locale, t , dict} = useLanguage();
  const isRtl = locale === "ar";
  const [active, setActive] = useState(0);
  const activeTestimonial = dict.data.testimonials[active];

  const PrevIcon = isRtl ? FiArrowRight : FiArrowLeft;
  const NextIcon = isRtl ? FiArrowLeft : FiArrowRight;

  const controls = useMemo(
    () => ({
      next: () => setActive((current) => (current + 1) % testimonials.length),
      previous: () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length),
    }),
    [],
  );

  useEffect(() => {
    const interval = window.setInterval(controls.next, 5200);
    return () => window.clearInterval(interval);
  }, [controls]);

  return (
    <section className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title2")}
          description={t("testimonials.description2")}
        />

        <div className="mx-auto max-w-4xl">
          <div className="glass-panel relative min-h-[360px] overflow-hidden rounded-[8px] p-6 sm:p-10">
            <div className="absolute end-0 top-0 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />
            <div key={activeTestimonial.name} className="relative">
              <div className="mb-8 flex gap-2 text-blue-200">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} aria-hidden className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl font-medium leading-snug text-white sm:text-3xl">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-[8px] border border-white/12 bg-white/[0.07] text-sm font-bold text-white">
                  {activeTestimonial.name
                    .split(" ")
                    .map((part: string) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-white">{activeTestimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => {
                const dictTestimonial = dict.data.testimonials[index];
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show testimonial from ${dictTestimonial.name}`}
                    onClick={() => setActive(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      active === index ? "w-8 bg-white" : "w-2.5 bg-white/25 hover:bg-white/45",
                    )}
                  />
                );
              })}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={controls.previous}
                className="focus-ring grid size-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.055] text-gray-300 transition hover:text-white hover:-translate-y-[2px]"
              >
                <PrevIcon aria-hidden className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={controls.next}
                className="focus-ring grid size-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.055] text-gray-300 transition hover:text-white hover:-translate-y-[2px]"
              >
                <NextIcon aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
