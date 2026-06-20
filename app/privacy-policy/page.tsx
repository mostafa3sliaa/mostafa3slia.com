"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function PrivacyPolicy() {
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
          {t("footer.privacyPolicy")}
        </h1>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p>
            {isRtl
              ? "توضح سياسة الخصوصية هذه كيف نقوم بجمع واستخدام وحماية بياناتك الشخصية عند زيارتك لموقعنا."
              : "This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website."}
          </p>
          
          <h2>{isRtl ? "1. جمع المعلومات" : "1. Information Collection"}</h2>
          <p>
            {isRtl
              ? "قد نقوم بجمع معلومات شخصية مثل الاسم، والبريد الإلكتروني، وغيرها من التفاصيل عندما تتواصل معنا عبر النماذج المتوفرة بالموقع."
              : "We may collect personal information such as your name, email address, and other details when you contact us through the forms provided on the site."}
          </p>

          <h2>{isRtl ? "2. استخدام المعلومات" : "2. Use of Information"}</h2>
          <p>
            {isRtl
              ? "نستخدم المعلومات التي نجمعها لفهم احتياجاتك، ولتقديم خدمة أفضل لك، بالإضافة إلى تحسين تجربة المستخدم على موقعنا."
              : "We use the information we collect to understand your needs, provide you with better service, and improve the user experience on our website."}
          </p>

          <h2>{isRtl ? "3. حماية البيانات" : "3. Data Protection"}</h2>
          <p>
            {isRtl
              ? "نحن ملتزمون بضمان أمان معلوماتك، ونستخدم الإجراءات التقنية والإدارية المناسبة لحمايتها من الوصول غير المصرح به."
              : "We are committed to ensuring that your information is secure and we use suitable technical and administrative measures to protect it from unauthorized access."}
          </p>
          
          <h2>{isRtl ? "4. ملفات تعريف الارتباط (Cookies)" : "4. Cookies"}</h2>
          <p>
            {isRtl
              ? "قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك تعطيل هذه الملفات من إعدادات المتصفح الخاص بك."
              : "Our website may use cookies to enhance your experience. You can disable these files from your browser settings."}
          </p>

          <h2>{isRtl ? "تواصل معنا" : "Contact Us"}</h2>
          <p>
            {isRtl
              ? "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يُرجى التواصل معنا."
              : "If you have any questions about this Privacy Policy, please contact us."}
          </p>
        </div>
      </div>
    </main>
  );
}
