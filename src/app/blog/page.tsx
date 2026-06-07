import { supabase } from "@/lib/supabase";
import { BlogClient } from "@/components/BlogClient";
import Link from "next/link";
import { Tag, BookOpen, TrendingUp } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, buildPageMetadata, itemListJsonLd, webPageJsonLd } from "@/lib/seo";
import { slugify } from "@/utils/slugify";

export const revalidate = 3600;

const PAGE_TITLE = "مدونة ستلايت الرجاء | أحدث المقالات والنصائح الفنية | 50266068";
const PAGE_DESCRIPTION =
  "تابع أحدث المقالات والنصائح حول الشاشات والستلايت والكاميرات وعروض كأس العالم IPTV في الكويت.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/blog",
  keywords: ["مدونة فنية", "ستلايت الرجاء", "IPTV الكويت", "نصائح تركيب"],
});

export default async function BlogPage() {
  const { data: blogs, error } = await supabase
    .from("blog_posts")
    .select("id, title, cover_url, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error);
  }

  const listItems =
    blogs?.map((post) => ({
      name: post.title,
      url: absoluteUrl(`/blog/${slugify(post.title)}-${post.id}`),
    })) ?? [];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: absoluteUrl("/blog"),
          }),
          breadcrumbJsonLd([
            { name: "الرئيسية", path: "/" },
            { name: "المدونة", path: "/blog" },
          ]),
          itemListJsonLd({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: "/blog",
            items: listItems,
          }),
        ]}
      />

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
