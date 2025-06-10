import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "خدماتي KW",
  description: "كل خدمات الشاشات، الستلايت والكاميرات بالكويت.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background min-h-screen flex flex-col font-[Noto Kufi Arabic,sans-serif]">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
