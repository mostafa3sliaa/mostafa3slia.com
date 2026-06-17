"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [active, setActive] = useState("#home");
  const { t, locale, setLocale } = useLanguage();

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
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 1, 0.21, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/30 backdrop-blur-2xl"
    >
      <div className="section-shell flex min-h-[72px] sm:min-h-20 items-center justify-between gap-4">
        <Link href="#home" className="focus-ring group flex items-center gap-3 rounded-[8px]">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.06] text-sm font-black text-white shadow-2xl shadow-blue-500/10">
            <span className="absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-blue-400/18 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">MA</span>
          </span>
          <span className="text-xl font-black tracking-tight text-white">
            مصطفى أحمد
          </span>
        </Link>

        <nav className="hidden rounded-full border border-white/12 bg-white/[0.055] p-1 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive ? "text-white" : "text-gray-400 hover:text-blue-300 hover:bg-white/[0.03]",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 -z-10 rounded-full border border-white/12 bg-white/10 shadow-[0_0_32px_rgba(96,165,250,0.18)]"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                )}
                <span className="relative">{t(`nav.${item.key}`)}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              title={label}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="focus-ring inline-flex size-10 items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.055] text-gray-300 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              <Icon aria-hidden className="size-4" />
            </motion.a>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-1" />

          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-[8px] border border-white/12 bg-white/[0.055] text-sm font-bold text-gray-300 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            {locale === "ar" ? "EN" : "AR"}
          </motion.button>
        </div>
      </div>

      <div className="no-scrollbar flex w-full flex-nowrap overflow-x-auto px-4 sm:px-6 pb-3 lg:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "focus-ring shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-300",
              active === item.href
                ? "border-blue-300/30 bg-blue-400/10 text-white"
                : "border-white/10 bg-white/[0.04] text-gray-400 hover:border-blue-400/30 hover:bg-white/[0.08] hover:text-blue-300",
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
    </motion.header>
  );
}
