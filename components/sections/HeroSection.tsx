"use client";

import Image from "next/image";
import { FiCalendar, FiArrowDownRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { heroChips } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-20">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          
          {/* Text content - Left Bento */}
          <div className="glass-panel flex flex-col justify-center p-8 sm:p-12 lg:p-14 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff66]/30 bg-[#00ff66]/10 px-4 py-2 text-sm font-bold text-[#00ff66] uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,102,0.15)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00ff66] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#00ff66]" />
              </span>
              {t("hero.available")}
            </div>

            <h1 className="text-5xl font-black tracking-tight leading-[1.1] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              <span className="block">{t("hero.title1")}</span>
            </h1>

            <p className="mt-8 text-xl font-medium text-[#a1a1aa] sm:text-2xl lg:text-3xl leading-relaxed">
              {t("hero.title2")}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#a1a1aa]/80 sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/201061036045"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                      'send_to': 'AW-18257364372/Q1rICPH12sIcEJSL5YFE',
                      'value': 1.0,
                      'currency': 'EGP'
                    });
                  }
                }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#00ff66] px-8 min-h-[64px] text-lg font-bold text-black transition-all hover:bg-[#00e5ff] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]"
              >
                <FaWhatsapp className="size-6" />
                {t("hero.cta")}
                <FiArrowDownRight className="size-5 transition-transform group-hover:-rotate-45" />
              </a>
              <a
                href="https://cal.com/mostafa-3slia"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag('event', 'conversion', {
                      'send_to': 'AW-18257364372/Q1rICPH12sIcEJSL5YFE',
                      'value': 1.0,
                      'currency': 'EGP'
                    });
                  }
                }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 min-h-[64px] text-lg font-bold text-white transition-all hover:border-white/40 hover:bg-white/10 hover:scale-[1.02]"
              >
                <FiCalendar className="size-6" />
                {t("hero.bookCall")}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-block cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:-translate-y-[3px]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Image - Right Bento */}
          <div className="glass-panel relative min-h-[500px] overflow-hidden lg:min-h-[600px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/images/mostafa-new.webp"
              alt="Mostafa Ahmed portrait"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover object-top grayscale contrast-125 brightness-90 transition-transform duration-700 hover:scale-105 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 inset-x-0 p-8">
              <div className="inline-flex items-center justify-between gap-4 rounded-full border border-white/20 bg-black/50 px-6 py-4 backdrop-blur-xl">
                <span className="text-base font-bold text-white">{t("hero.tag")}</span>
                <span className="h-2 w-24 rounded-full bg-gradient-to-r from-[#00ff66] to-[#00e5ff]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
