import { notFound } from "next/navigation";
import { getAllBlogPostIds, getBlogPostById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import Image from "next/image";

// استخراج id من نهاية السلاج
function extractId(slugWithId: string): number | null {
  const match = slugWithId.match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

// تحويل التاريخ لصيغة عربية
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const post = await getBlogPostById(id);
  if (!post) return {};

  const plainText = post.content.replace(/<[^>]+>/g, " ");
  const description = plainText.slice(0, 120);

  const baseKeywords = [
    "خدماتي KW",
    "مدونة فنية",
    "الشاشات",
    "الستلايت",
    "الكاميرات",
    "نصائح",
    "تركيب",
    "صيانة",
  ];

  const titleWords: string[] = post.title
    .split(" ")
    .filter((w: string) => w.length > 2);

  const contentWords: string[] = plainText
    .split(" ")
    .filter((w: string) => w.length > 4)
    .slice(0, 10);

  const keywords: string[] = [...new Set([...titleWords, ...contentWords, ...baseKeywords])];

  return {
    title: post.title,
    description,
    keywords,
    openGraph: {
      title: post.title,
      description,
      images: [post.cover_url || "/default-blog.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://khadmatikw.com/blog/${slugWithId}`,
    },
  };
}


// إنشاء المسارات الساكنة
export async function generateStaticParams() {
  const posts = await getAllBlogPostIds();
  return posts.map((p) => ({
    slugWithId: `${slugify(p.title)}-${p.id}`,
  }));
}

// صفحة تفاصيل التدوينة
export default async function BlogPostPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 my-8">
      <div className="w-full h-56 mb-4 relative rounded-xl overflow-hidden bg-gray-50">
        <Image
          src={post.cover_url || "/default-blog.png"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold text-primary mb-2">{post.title}</h1>
      <div className="text-xs text-gray-400 mb-4">{formatDate(post.created_at)}</div>
      <div
        className="prose prose-slate max-w-none text-lg"
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
