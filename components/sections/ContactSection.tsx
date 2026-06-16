"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactMethods } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="تواصل معي"
          title="دعنا نبني شيئاً مذهلاً معاً"
          description="احجز استشارة مجانية أو أرسل رسالة لمناقشة موقعك أو خطة نمو التسويق الرقمي الخاصة بك."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel relative overflow-hidden rounded-[8px] p-6 sm:p-8 lg:p-10"
        >
          <div className="absolute start-0 top-0 h-56 w-56 bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 end-0 h-56 w-56 bg-purple-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div variants={fadeUp}>
              <h2 className="max-w-xl text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
                هل أنت مستعد لتحويل الانتباه إلى مبيعات وعملاء؟
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                شارك أهدافك الحالية والسوق المستهدف. سيساعدك مصطفى في رسم خطوة واضحة للنجاح.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="https://cal.com/mostafa-3slia" icon={FiCalendar}>
                  احجز استشارة
                </Button>
                <Button href="mailto:hello@mostafa3slia.com" icon={FiSend} variant="secondary">
                  أرسل رسالة
                </Button>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-3 sm:grid-cols-2">
              {contactMethods.map(({ label, value, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="focus-ring rounded-[8px] border border-white/10 bg-black/20 p-5 transition hover:border-blue-300/25 hover:bg-white/[0.06]"
                >
                  <span className="mb-5 grid size-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.06] text-blue-200">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <p className="text-sm font-medium uppercase text-gray-500">{label}</p>
                  <p className="mt-2 break-words text-sm font-semibold text-white sm:text-base">{value}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
