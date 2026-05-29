"use client";
import { Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const btnBase =
  "text-white rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-3 safe-bottom safe-right">
      <Link
        href="https://www.instagram.com/alrajaa_berlin8k?igsh=ZDI3ZjY4azdueTN1"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-3 sm:p-4`}
        aria-label="تابعنا على إنستغرام"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>

      <Link
        href="https://www.facebook.com/alrajaaberlin8k"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-[#1877F2] hover:bg-[#166FE5] p-3 sm:p-4`}
        aria-label="تابعنا على فيسبوك"
      >
        <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>

      <Link
        href="https://wa.me/96550266068"
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-green-500 hover:bg-green-600 p-3 sm:p-4`}
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>

      <Link
        href="tel:96550266068"
        className={`${btnBase} bg-primary hover:bg-primary/90 p-3 sm:p-4`}
        aria-label="اتصل الآن"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </div>
  );
}
