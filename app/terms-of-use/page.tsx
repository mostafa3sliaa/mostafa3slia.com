"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function TermsOfUse() {
  const { lang, t } = useLanguage();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? FiArrowRight : FiArrowLeft;

  return (
    <main className="min-h-screen py-24 sm:py-32 section-shell">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <Arrow className="size-4" />
          {t("nav.home")}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("footer.termsOfUse")}
        </h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            {isRtl
              ? "مرحباً بك في موقعنا. من خلال الوصول إلى هذا الموقع واستخدامه، فإنك توافق على الالتزام بشروط وأحكام الاستخدام الموضحة أدناه."
              : "Welcome to our website. By accessing and using this site, you agree to comply with and be bound by the terms and conditions of use set forth below."}
          </p>
          
          <h2>{isRtl ? "1. قبول الشروط" : "1. Acceptance of Terms"}</h2>
          <p>
            {isRtl
              ? "يعد تصفحك لهذا الموقع موافقة صريحة على الالتزام بجميع الأحكام المذكورة في هذه الصفحة."
              : "Your use of this site constitutes your explicit agreement to be bound by all the provisions stated on this page."}
          </p>

          <h2>{isRtl ? "2. حقوق الملكية الفكرية" : "2. Intellectual Property Rights"}</h2>
          <p>
            {isRtl
              ? "جميع المحتويات المتوفرة على هذا الموقع بما في ذلك النصوص والتصميمات والشعارات مملوكة لنا ولا يجوز نسخها أو إعادة استخدامها بدون إذن مسبق."
              : "All content available on this site, including texts, designs, and logos, is our property and may not be copied or reused without prior permission."}
          </p>

          <h2>{isRtl ? "3. إخلاء المسؤولية" : "3. Disclaimer"}</h2>
          <p>
            {isRtl
              ? "المعلومات المقدمة في هذا الموقع هي لأغراض عامة فقط. لا نقدم أي ضمانات حول دقة أو اكتمال هذه المعلومات."
              : "The information provided on this website is for general purposes only. We make no representations or warranties about the accuracy or completeness of this information."}
          </p>
          
          <h2>{isRtl ? "4. التعديلات على الشروط" : "4. Modifications to Terms"}</h2>
          <p>
            {isRtl
              ? "نحتفظ بالحق في تعديل هذه الشروط في أي وقت، ويعتبر استمرارك في استخدام الموقع بعد إجراء أي تعديلات موافقة منك عليها."
              : "We reserve the right to modify these terms at any time, and your continued use of the site following any modifications signifies your acceptance."}
          </p>

          <h2>{isRtl ? "تواصل معنا" : "Contact Us"}</h2>
          <p>
            {isRtl
              ? "إذا كانت لديك أي أسئلة حول شروط الاستخدام هذه، يُرجى التواصل معنا."
              : "If you have any questions about these Terms of Use, please contact us."}
          </p>
        </div>
      </div>
    </main>
  );
}
