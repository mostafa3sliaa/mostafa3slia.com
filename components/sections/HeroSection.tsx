"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { heroChips } from "@/data/portfolio";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const portraitY = useTransform(scrollY, [0, 700], [0, -42]);
  const glowY = useTransform(scrollY, [0, 700], [0, 68]);

  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44">
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-x-0 mx-auto top-20 h-80 w-[min(720px,80vw)] rounded-full bg-blue-500/15 blur-3xl hidden md:block"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-shell"
      >
        <motion.div
          variants={fadeIn}
          className="glass-panel relative overflow-hidden rounded-[8px]"
        >
          <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.035] px-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="hidden h-5 w-44 rounded-full border border-white/8 bg-black/20 sm:block" />
            <div className="h-5 w-16 rounded-full border border-white/8 bg-white/[0.04]" />
          </div>

          <div className="relative grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:p-10 xl:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(96,165,250,0.15),transparent_28%),radial-gradient(circle_at_78%_40%,rgba(168,85,247,0.14),transparent_30%)] hidden md:block" />

            <motion.div
              style={{ y: portraitY }}
              variants={fadeUp}
              className="relative min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-[#080808] lg:min-h-[560px]"
            >
              <Image
                src="/images/mostafa-new.png"
                alt="Mostafa Ahmed cinematic monochrome portrait"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover object-center grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 flex items-center justify-between gap-3 rounded-[8px] border border-white/12 bg-black/45 p-3 backdrop-blur-xl">
                <span className="text-sm font-medium text-white">أنظمة نمو للشركات المحلية</span>
                <span className="h-2 w-16 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-green-300" />
              </div>
            </motion.div>

            <div className="relative flex flex-col justify-center py-2 lg:py-8">
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-green-300/25 bg-green-400/10 px-3 py-2 text-sm font-medium text-green-200 shadow-[0_0_40px_rgba(34,197,94,0.12)]"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-300 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-300" />
                </span>
                {t("hero.available")}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="metallic-text max-w-4xl text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                {t("hero.title1")}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg font-medium text-white sm:text-xl lg:text-2xl"
              >
                {t("hero.title2")}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
              >
                {t("hero.description")}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <Button href="https://wa.me/201061036045" target="_blank" rel="noopener noreferrer" icon={FaWhatsapp} className="font-semibold px-8 min-h-14 text-base">
                  {t("hero.cta")}
                </Button>
                <Button href="https://cal.com/mostafa-3slia" variant="secondary" icon={FiCalendar} className="font-semibold px-8 min-h-14 text-base">
                  {t("hero.bookCall")}
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
                {heroChips.map((chip) => (
                  <motion.span
                    key={chip}
                    whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.3, ease: [0.175, 0.885, 0.32, 1.275] } }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block cursor-default rounded-full border border-white/12 bg-white/[0.055] px-3 py-2 text-sm font-medium text-gray-300 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
