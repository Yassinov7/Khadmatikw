import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { WorldCupOfferMarquee } from "@/components/WorldCupOfferMarquee";
import { JsonLd } from "@/components/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_ROBOTS,
  SITE_NAME,
  SITE_URL,
  WORLD_CUP_KEYWORDS,
  organizationJsonLd,
  webSiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ستلايت الرجاء | عروض كأس العالم IPTV الكويت | 50266068",
    template: "%s | ستلايت الرجاء",
  },
  description: "عروض كأس العالم 2026 IPTV في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و4K. اشتراك برلين وسبايدر مع خصومات خاصة. خدمات الشاشات والستلايت والكاميرات.",
  keywords: [...WORLD_CUP_KEYWORDS, "ستلايت الرجاء", "IPTV الكويت"],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: DEFAULT_ROBOTS,
  openGraph: {
    title: "ستلايت الرجاء | عروض كأس العالم IPTV الكويت",
    description: "عروض كأس العالم 2026 IPTV في الكويت. بث مباشر لجميع مباريات كأس العالم بجودة HD و4K مع اشتراك برلين وسبايدر.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ar_KW",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ستلايت الرجاء | عروض كأس العالم IPTV الكويت",
    description: "أفضل عروض كأس العالم IPTV في الكويت مع بث مباشر وجودة HD و4K.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport"
         content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D4ED8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="google-site-verification" content="oXCqPOZS_04y_vmGu_bEcjt98R74gt7-8EREK_Wr-Ic" />
        <meta name="google-site-verification" content="psU3BfZ9sgstoeZ9fPeZoAhFIzHZyxSxcAoR0zHyhKo" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" sizes="512x512" />
      </head>
      <body className="antialiased bg-background min-h-screen flex flex-col overflow-x-hidden"
        style={{ fontFamily: "'Noto Kufi Arabic', sans-serif" }}>
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        <header id="site-header" className="sticky top-0 z-[100] w-full shadow-sm">
          <Navbar />
          <WorldCupOfferMarquee />
        </header>
        <main className="flex-1 container mx-auto px-4 sm:px-6 pb-20 md:pb-10 overflow-visible pt-4 sm:pt-6">
          {children}
          <FloatingContact />
        </main>
        <Footer />
      </body>
    </html>
  );
}