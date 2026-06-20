import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafa3slia.com"),
  title: {
    default: "مصطفى أحمد | مطور ويب وخبير تسويق رقمي",
    template: "%s | مصطفى أحمد",
  },
  description:
    "مطور ويب متكامل (MERN Stack & Next.js) متخصص في بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية، بالإضافة إلى تقديم خدمات التسويق الرقمي.",
  keywords: [
    "مصطفى أحمد",
    "مطور ويب",
    "تصميم مواقع",
    "برمجة مواقع",
    "مطور واجهات مستخدم",
    "إنشاء متاجر إلكترونية",
    "تصميم موقع طبي",
    "سيستم عيادات",
    "التسويق الرقمي",
    "إعلانات جوجل",
    "تحسين محركات البحث",
    "SEO",
    "Next.js",
    "React.js",
    "MERN Stack",
    "Node.js",
    "لوحات تحكم SaaS",
    "مطور ويب مستقل",
    "Full Stack Developer",
    "تصميم مواقع احترافية",
    "WordPress",
  ],
  authors: [{ name: "مصطفى أحمد" }],
  creator: "مصطفى أحمد",
  alternates: {
    canonical: "https://mostafa3slia.com",
  },
  openGraph: {
    title: "مصطفى أحمد | مطور ويب وخبير تسويق رقمي",
    description:
      "مطور ويب متكامل (MERN Stack & Next.js) متخصص في بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية، بالإضافة إلى تقديم خدمات التسويق الرقمي.",
    url: "https://mostafa3slia.com",
    siteName: "محفظة مصطفى أحمد",
    images: [
      {
        url: "/images/mostafa-portrait.png",
        width: 1200,
        height: 1200,
        alt: "Mostafa Ahmed professional portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مصطفى أحمد | مطور ويب وخبير تسويق رقمي",
    description:
      "مطور ويب متكامل (MERN Stack & Next.js) متخصص في بناء مواقع برمجية احترافية وسريعة.",
    images: ["/images/mostafa-portrait.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "qUCAucCwBA7CQs1tis4gVakyZursEKMohRhwXVAFfpo",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import Script from "next/script";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18257364372"
        />
        <Script
          id="google-ads-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18257364372');
            `,
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
