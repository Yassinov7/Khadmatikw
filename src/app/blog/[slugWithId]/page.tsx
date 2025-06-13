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

// Metadata ديناميكي (SEO)
export async function generateMetadata(
  props: { params: Promise<{ slugWithId: string }> }
): Promise<Metadata> {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) return {};

  const post = await getBlogPostById(id);
  if (!post) return {};

  return {
    title: post.title,
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 120),
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 120),
      images: [post.cover_url || "/default-blog.png"],
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://khadmatikw.vercel.app/blog/${slugWithId}`,
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
