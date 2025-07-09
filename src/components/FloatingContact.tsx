// components/FloatingContact.tsx
"use client";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  const phone = "96550266068";
  const phonecall = "96550266068";

  return (
    <>
      {/* زر واتساب */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent("مرحبًا، أود الاستفسار عن خدماتكم.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-24 left-2 z-50 group flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg transition"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle size={20} />
        <span className="font-bold text-sm hidden sm:inline">واتساب مباشر</span>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none">
          نرد عليك فوراً!
        </span>
      </a>

      {/* زر اتصال */}
      <a
        href={`tel:${phonecall}`}
        className="fixed top-36 left-2 z-50 group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full shadow-lg transition"
        aria-label="اتصال مباشر"
      >
        <Phone size={20} />
        <span className="font-bold text-sm hidden sm:inline">اتصال مباشر</span>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none">
          نرد عليك حالاً!
        </span>
      </a>
    </>
  );
}
