import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mostafa-ahmed.dev"),
  title: {
    default: "مصطفى أحمد | مطور ويب وخبير تسويق رقمي",
    template: "%s | مصطفى أحمد",
  },
  description:
    "مطور ويب متكامل (MERN Stack & Next.js) متخصص في بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية، بالإضافة إلى تقديم خدمات التسويق الرقمي.",
  keywords: [
    "مصطفى أحمد",
    "مطور ويب",
    "التسويق الرقمي",
    "Next.js",
    "MERN Stack",
    "SEO",
    "WordPress",
  ],
  authors: [{ name: "مصطفى أحمد" }],
  creator: "مصطفى أحمد",
  openGraph: {
    title: "مصطفى أحمد | مطور ويب وخبير تسويق رقمي",
    description:
      "مطور ويب متكامل (MERN Stack & Next.js) متخصص في بناء مواقع برمجية احترافية وسريعة، وتطوير المتاجر الإلكترونية، بالإضافة إلى تقديم خدمات التسويق الرقمي.",
    url: "https://mostafa-ahmed.dev",
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
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { LanguageProvider } from "@/contexts/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
