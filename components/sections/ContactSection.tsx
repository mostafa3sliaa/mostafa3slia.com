"use client";

import { FiCalendar, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactMethods } from "@/data/portfolio";

import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t , dict} = useLanguage();
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title2")}
          description={t("contact.description2")}
        />

        <div
          className="glass-panel relative overflow-hidden rounded-[8px] p-6 sm:p-8 lg:p-10"
        >
          <div className="absolute start-0 top-0 h-56 w-56 bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 end-0 h-56 w-56 bg-purple-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="max-w-xl text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
                {t("contact.box_title")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                {t("contact.box_desc")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button 
                  href="https://cal.com/mostafa-3slia" 
                  icon={FiCalendar}
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-18257364372/Q1rICPH12sIcEJSL5YFE',
                        'value': 1.0,
                        'currency': 'EGP'
                      });
                    }
                  }}
                >
                  {t("contact.box_btn1")}
                </Button>
                <Button 
                  href="mailto:hello@mostafa3slia.com" 
                  icon={FiSend} 
                  variant="secondary"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag('event', 'conversion', {
                        'send_to': 'AW-18257364372/Q1rICPH12sIcEJSL5YFE',
                        'value': 1.0,
                        'currency': 'EGP'
                      });
                    }
                  }}
                >
                  {t("contact.box_btn2")}
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactMethods.map(({ value, href, icon: Icon }, index) => {
                const dictMethod = dict.data.contactMethods[index];
                return (
                  <a
                    key={index}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag) {
                        (window as any).gtag('event', 'conversion', {
                          'send_to': 'AW-18257364372/Q1rICPH12sIcEJSL5YFE',
                          'value': 1.0,
                          'currency': 'EGP'
                        });
                      }
                    }}
                    className="focus-ring rounded-[8px] border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-blue-300/25 hover:bg-white/[0.06]"
                  >
                    <span className="mb-5 grid size-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.06] text-blue-200">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <p className="text-sm font-medium uppercase text-gray-500">{dictMethod.label}</p>
                    <p className="mt-2 break-words text-sm font-semibold text-white sm:text-base">{value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
