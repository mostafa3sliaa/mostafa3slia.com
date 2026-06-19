"use client";

import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, dict } = useLanguage();
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500">
          {t("footer.copyright")} {new Date().getFullYear()} {dict.data.headerName}.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="focus-ring grid size-10 place-items-center rounded-[8px] border border-white/10 bg-white/[0.04] text-gray-400 transition hover:border-white/20 hover:text-white"
              title={label}
            >
              <Icon aria-hidden className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
