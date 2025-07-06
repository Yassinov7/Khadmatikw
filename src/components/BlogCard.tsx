import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Blog } from "@/types";
import { CalendarDays } from "lucide-react";

// استخراج ملخص مختصر (من HTML إلى نص فقط)
function extractSummary(html: string, max = 100) {
  const text = html.replace(/<[^>]+>/g, "");
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
      className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col h-full transition hover:shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link href={href} className="block group">
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={post.cover_url || "/default-blog.png"}
            alt={`غلاف: ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
            itemProp="image"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <Link href={href}>
          <h3
            className="text-lg font-bold text-primary hover:underline line-clamp-2"
            itemProp="headline"
          >
            {post.title}
          </h3>
        </Link>

        <p
          className="text-sm text-gray-700 leading-relaxed line-clamp-3"
          itemProp="description"
        >
          {extractSummary(post.content)}
        </p>

        <div className="mt-auto text-xs text-gray-500 flex items-center gap-1">
          <CalendarDays size={14} />
          <time itemProp="datePublished">{formatDate(post.created_at)}</time>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
