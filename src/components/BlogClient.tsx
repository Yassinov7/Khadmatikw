"use client";
import BlogCard from "./BlogCard";
import type { Blog } from "@/types";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, TrendingUp, Lightbulb, Users } from "lucide-react";

type Props = {
  blogs: Blog[];
  // categories?: Category[]; // لدعم التصنيفات مستقبلاً
};

export function BlogClient({ blogs }: Props) {
  // إذا أضفت تصنيفات مستقبلاً:
  // const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  // const filteredBlogs = selectedId
  //   ? blogs.filter((b) => b.category_id === selectedId)
  //   : blogs;

  return (
    <section className="flex flex-col gap-10 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
          <BookOpen size={20} />
          <span className="font-bold">مدونة ستلايت الرجاء</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          أحدث المقالات والنصائح الفنية
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          اكتشف أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات والصيانة والتركيب في الكويت
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
          <TrendingUp className="text-primary mx-auto mb-3" size={32} />
          <div className="text-2xl font-bold text-primary">{blogs.length}</div>
          <div className="text-gray-600">مقالة منشورة</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
          <Lightbulb className="text-primary mx-auto mb-3" size={32} />
          <div className="text-2xl font-bold text-primary">50+</div>
          <div className="text-gray-600">نصيحة تقنية</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
          <Users className="text-primary mx-auto mb-3" size={32} />
          <div className="text-2xl font-bold text-primary">10K+</div>
          <div className="text-gray-600">قارئ شهرياً</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
          <BookOpen className="text-primary mx-auto mb-3" size={32} />
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-gray-600">موضوع مختلف</div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      {blogs.length === 0 ? (
        <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg">
          <div className="text-gray-500 text-xl mb-4">لا توجد تدوينات حتى الآن.</div>
          <Link href="/" className="text-primary font-bold hover:underline">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <div key={post.id} className="transform transition-transform hover:-translate-y-2">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      )}

      {/* CTA Section */}
      {blogs.length > 0 && (
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">هل تبحث عن خدمات فنية موثوقة؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            اتصل بخبراء ستلايت الرجاء للحصول على أفضل الحلول التقنية في الكويت
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              اتصل بنا الآن
            </Link>
            <Link
              href="/offers"
              className="bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full hover:bg-white/30 transition-all border border-white/30"
            >
              اكتشف عروضنا
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default BlogClient;