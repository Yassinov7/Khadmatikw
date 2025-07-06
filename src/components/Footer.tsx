"use client";

import { useEffect, useState } from "react";
import { MapPin, CodeXmlIcon, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="bg-slate-100 border-t border-gray-200 py-6 text-sm text-gray-700 relative"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* روابط التنقل */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/" className="hover:underline text-gray-600 font-medium">الرئيسية</Link>
          <Link href="/products" className="hover:underline text-gray-600 font-medium">الخدمات</Link>
          <Link href="/blog" className="hover:underline text-gray-600 font-medium">المدونة</Link>
          <Link href="/contact" className="hover:underline text-gray-600 font-medium">تواصل معنا</Link>
        </div>

        {/* الموقع */}
        <div className="flex items-center gap-1 justify-center text-primary font-bold">
          <MapPin size={16} /> الكويت، حولي
        </div>

        {/* الحقوق والتوقيع */}
        <div className="text-center md:text-end text-xs text-gray-500">
          <div>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary font-bold">خدماتي KW</span>
          </div>
          <div className="mt-1 text-[11px] text-gray-500 font-semibold">
            تم التطوير بكل حب بواسطة{" "}
            <a
              href="https://www.instagram.com/mhmmdyassine"
              target="_blank"
              rel="noopener"
              className="text-secondary hover:underline decoration-dotted font-bold relative group"
            >
              م. محمد
              <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
                تابعني على إنستغرام
              </span>
            </a>
            <CodeXmlIcon size={14} className="inline text-secondary ml-1" />
          </div>
        </div>
      </div>

      {/* تنبيه قانوني */}
      <div className="mt-4 text-center text-[10px] text-gray-400 px-4">
        هذا الموقع مخصص لعرض خدمات فنية فقط. جميع المعلومات والوسائط المقدمة تخضع للحقوق القانونية لصاحب الموقع، وأي استخدام غير مصرح به يعرض صاحبه للمساءلة.
      </div>

      {/* زر العودة لأعلى */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-lg transition"
          aria-label="العودة للأعلى"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
