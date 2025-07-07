// app/blog/page.tsx

import { supabase } from "@/lib/supabase";
import { BlogClient } from "@/components/BlogClient";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "مدونة ستلايت الرجاء",
  description: "تابع أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات والصيانة والتركيب في الكويت. كل جديد من خبراء ستلايت الرجاء .",
  keywords: [
    "مدونة فنية",
    "خدمات الكويت",
    "الشاشات",
    "الستلايت",
    "الكاميرات",
    "تركيب شاشات",
    "صيانة الكاميرات",
    "نصائح فنية",
    "ستلايت الرجاء ",
  ],
  openGraph: {
    title: "مدونة ستلايت الرجاء",
    description: "مقالات ونصائح فنية حول الشاشات، الستلايت، الكاميرات والصيانة في الكويت. اكتشف أحدث التدوينات من ستلايت الرجاء .",
    url: "https://satellitealrajaa.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة ستلايت الرجاء",
    description: "تابع المقالات والدروس والنصائح حول الخدمات الفنية في الكويت.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default async function BlogPage() {
  // جلب كل التدوينات الأحدث أولاً
  const { data: blogs, } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <BlogClient blogs={blogs ?? []} />
  );
}
