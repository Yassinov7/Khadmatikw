import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Blog } from "@/types";

// استخراج ملخص مختصر (من HTML إلى نص فقط)
function extractSummary(html: string, max = 70) {
  const text = html.replace(/<[^>]+>/g, ""); // إزالة الوسوم
  return text.length > max ? text.slice(0, max) + "..." : text;
}

// تنسيق التاريخ عربي
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: Blog }) {
  const href = `/blog/${slugify(post.title)}-${post.id}`;
  return (
    <article
      className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full transition hover:shadow-lg"
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link href={href}>
        <div className="w-full h-44 bg-gray-50 flex items-center justify-center rounded-t-2xl relative overflow-hidden">
          <Image
            src={post.cover_url || "/default-blog.png"}
            alt={`غلاف: ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover p-2"
            priority
            itemProp="image"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <Link href={href}>
          <h3
            className="text-lg font-bold text-primary hover:underline line-clamp-2"
            itemProp="headline"
          >
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 truncate" itemProp="description">
          {extractSummary(post.content)}
          {post.content.length > 70 && (
            <>
              ...{" "}
              <Link
                href={href}
                className="text-primary hover:underline font-medium"
              >
                اقرأ المزيد
              </Link>
            </>
          )}
        </p>

        <span className="text-xs text-gray-400 mt-auto" itemProp="datePublished">
          {formatDate(post.created_at)}
        </span>
      </div>
    </article>
  );
}

export default BlogCard;
