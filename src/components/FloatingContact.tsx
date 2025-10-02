// components/FloatingContact.tsx
"use client";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/96550266068"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle size={24} />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:96550266068"
        className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
        aria-label="اتصل الآن"
      >
        <Phone size={24} />
      </Link>
    </div>
  );
}
