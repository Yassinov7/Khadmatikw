// app/blog/page.tsx

import { supabase } from "@/lib/supabase";
import { BlogClient } from "@/components/BlogClient";
import { Metadata } from "next";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "مدونة خدماتي KW",
  description: "تابع أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات والصيانة والتركيب في الكويت. كل جديد من خبراء خدماتي KW.",
  openGraph: {
    title: "مدونة خدماتي KW",
    description: "مقالات ونصائح فنية حول الشاشات، الستلايت، الكاميرات والصيانة في الكويت. اكتشف أحدث التدوينات من خدماتي KW.",
    url: "https://khadmatikw.vercel.app/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://khadmatikw.vercel.app/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة خدماتي KW",
    description: "تابع المقالات والدروس والنصائح حول الخدمات الفنية في الكويت.",
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
