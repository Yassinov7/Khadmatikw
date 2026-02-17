// app/blog/page.tsx

import { supabase } from "@/lib/supabase";
import { BlogClient } from "@/components/BlogClient";
import { Metadata } from "next";
import Link from "next/link";
import { Tag, BookOpen, TrendingUp } from "lucide-react";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: "مدونة ستلايت الرجاء | أحدث المقالات والنصائح الفنية | 50266068",
  description: "تابع أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات والصيانة والتركيب في الكويت. كل جديد من خبراء ستلايت الرجاء.",
  keywords: [
    "مدونة فنية",
    "خدمات الكويت",
    "الشاشات",
    "الستلايت",
    "الكاميرات",
    "تركيب شاشات",
    "صيانة الكاميرات",
    "نصائح فنية",
    "ستلايت الرجاء",
    "نصائح تركيب",
    "صيانة شاشات الكويت",
    "مقالات تقنية",
    "دليل الصيانة",
    "التقنية في الكويت"
  ],
  openGraph: {
    title: "مدونة ستلايت الرجاء | أحدث المقالات والنصائح الفنية",
    description: "مقالات ونصائح فنية حول الشاشات، الستلايت، الكاميرات والصيانة في الكويت. اكتشف أحدث التدوينات من ستلايت الرجاء.",
    url: "https://satellitealrajaa.com/blog",
    siteName: "ستلايت الرجاء",
    locale: "ar_KW",
    type: "website",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة ستلايت الرجاء | أحدث المقالات والنصائح الفنية | 50266068",
    description: "تابع المقالات والدروس والنصائح حول الخدمات الفنية في الكويت.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function BlogPage() {
  // جلب كل التدوينات الأحدث أولاً
  const { data: blogs, error } = await supabase
    .from("blog_posts")
    .select("id, title, cover_url, content, created_at")
    .order("created_at", { ascending: false });

  // Log any errors
  if (error) {
    console.error("Error fetching blog posts:", error);
  }

  // Structured data for SEO
  const blogPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "مدونة ستلايت الرجاء",
    "description": "تابع أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات والصيانة والتركيب في الكويت.",
    "url": "https://satellitealrajaa.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ستلايت الرجاء"
    },
    "blogPost": blogs?.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.created_at,
      "image": post.cover_url || "/default-blog.png"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageStructuredData) }}
      />

      {/* Enhanced CTA Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
        <Link
          href="/offers"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Tag size={20} />
          <span className="font-bold">عرض العروض الخاصة</span>
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <TrendingUp size={20} />
          <span className="font-bold">احصل على استشارة مجانية</span>
        </Link>
      </div>

      <BlogClient blogs={blogs ?? []} />

      {/* Additional SEO Section */}
      <section className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
            <BookOpen className="text-secondary" size={32} />
            لماذا تختار مدونة ستلايت الرجاء؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 text-primary">معلومات موثوقة</h3>
              <p className="text-gray-600">مقالات مكتوبة من قبل خبراء في مجال الشاشات والستلايت والكاميرات</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 text-primary">نصائح عملية</h3>
              <p className="text-gray-600">حلول عملية ونصائح يمكنك تطبيقها فوراً في منزلك</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 text-primary">محتوى محدث</h3>
              <p className="text-gray-600">مقالات جديدة تُنشر أسبوعياً لتبقى على اطلاع بأحدث التقنيات</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}