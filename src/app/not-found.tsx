// src/app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة | ستلايت الرجاء ",
  description: "الرابط الذي تحاول الوصول إليه غير متوفر أو تم حذفه. تصفح خدمات وعروضستلايت الرجاء .",
  robots: "noindex, follow",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-background">
      {/* صورة توضيحية */}
      

      <h1 className="text-5xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
        الصفحة غير موجودة
      </h2>
      <div className="relative w-80 h-80 mb-6">
        <Image
          src="/404-illustration.png"
          alt="لا توجد إشارة"
          fill
          className="object-contain"
          priority
        />
      </div>
      <p className="text-gray-600 max-w-md mb-6">
        يبدو أن الرابط غير صالح أو أن المحتوى لم يعد متاحًا. يمكنك العودة إلى الصفحة الرئيسية أو استعراض خدماتنا، أو يمكنك الاتصال بنا | 50266068.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-bold shadow transition"
        >
          العودة للرئيسية
        </Link>
        <Link
          href="/products"
          className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full font-bold shadow transition"
        >
          استعراض الخدمات
        </Link>
        <Link
          href="/contact"
          className="bg-green-500 hover:bg-green-500/90 text-white px-6 py-2 rounded-full font-bold shadow transition"
        >
          تواصل معنا
        </Link>
      </div>
    </section>
  );
}
