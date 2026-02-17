import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://satellitealrajaa.com/"),
  title: "ستلايت الرجاء | 50266068",
  description: "كل خدماتك التي تريدها في الكويت متوفرة لدينا وبافضل الاسعار وانسب العروض، خدمات الشاشات، الستلايت والكاميرات بالكويت.",
  openGraph: {
    title: "ستلايت الرجاء",
  description: "كل خدماتك التي تريدها في الكويت متوفرة لدينا وبافضل الاسعار وانسب العروض، خدمات الشاشات، الستلايت والكاميرات بالكويت.",
    url: "https://satellitealrajaa.com",
    siteName: "ستلايت الرجاء",
    locale: "ar_KW",
    type: "website",
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
      <body className="antialiased bg-background min-h-screen flex flex-col"
      style={{ fontFamily: "'Noto Kufi Arabic', sans-serif" }}>
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-8">
          {children}
          <FloatingContact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
