"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [active, setActive] = useState("#home");
  const { t, locale, setLocale , dict} = useLanguage();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl transition-all duration-700">
      <div className="section-shell flex min-h-[72px] sm:min-h-20 items-center justify-between gap-4">
        <Link href="#home" className="focus-ring group flex items-center gap-3 rounded-[8px]">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-[8px] border border-white/12 bg-white/5 text-sm font-black text-white transition-all duration-300 group-hover:border-[#00ff66]/50 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.2)]">
            <span className="relative">MA</span>
          </span>
          <span className="text-xl font-black tracking-tight text-white transition-colors group-hover:text-[#00ff66]">
            {dict.data.headerName}
          </span>
        </Link>

        <nav className="hidden rounded-full border border-white/10 bg-white/5 p-1.5 shadow-2xl backdrop-blur-2xl lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring relative rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  isActive ? "text-black" : "text-gray-400 hover:text-white",
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.3)]" />
                )}
                <span className="relative">{t(`nav.${item.key}`)}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              title={label}
              className="focus-ring hidden sm:inline-flex size-10 items-center justify-center gap-2 rounded-[8px] border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:-translate-y-[2px]"
            >
              <Icon aria-hidden className="size-4" />
            </a>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-1" />

          <button
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-sm font-black text-white transition-all duration-300 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/10 hover:text-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:-translate-y-[2px]"
          >
            {locale === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex w-full flex-nowrap gap-2 overflow-x-auto px-4 sm:px-6 pb-3 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "focus-ring shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
              active === item.href
                ? "border-[#00ff66] bg-[#00ff66] text-black"
                : "border-white/10 bg-white/5 text-gray-400 hover:border-[#00ff66]/50 hover:text-white",
            )}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t(`nav.${item.key}`)}
          </Link>
        ))}
      </div>
    </header>
  );
}
