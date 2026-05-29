"use client";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Blog } from "@/types";
import { CalendarDays, User, Eye, Bookmark } from "lucide-react";
import { useState } from "react";

// استخراج ملخص مختصر (من HTML إلى نص فقط)
function extractSummary(html: string, max = 120) {
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

export function BlogCard({ post }: { post: Blog & { slug?: string } }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const blogSlug = post.slug || `${slugify(post.title)}-${post.id}`;
  const href = `/blog/${blogSlug}`;

  return (
    <article className="card-modern rounded-[2rem] group overflow-hidden">
      <Link href={href} className="block relative">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          {!imageLoaded && <div className="absolute inset-0 bg-slate-200 animate-pulse" />}
          <Image
            src={post.cover_url || "/default-blog.png"}
            alt={`صورة توضيحية لـ ${post.title} - ستلايت الرجاء`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={`object-cover transition-transform duration-700 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"} group-hover:scale-105`}
            priority={false}
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-xs">
            <Bookmark size={12} />
            مقالة
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide px-3 py-1">
            محتوى جديد
          </span>
          <time dateTime={post.created_at} className="text-xs text-slate-500">
            {formatDate(post.created_at)}
          </time>
        </div>

        <Link href={href} className="group-hover:text-secondary">
          <h3 className="text-2xl font-extrabold text-slate-900 hover:text-secondary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {extractSummary(post.content)}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2">
              <CalendarDays size={16} className="text-primary" />
              <span>{formatDate(post.created_at)}</span>
            </div>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2">
              <Eye size={16} className="text-slate-500" />
              قراءة 3 دقائق
            </span>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-1 shadow-sm">
              <div className="flex items-center justify-center rounded-3xl bg-white p-3 text-primary">
                <User size={16} />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">ستلايت الرجاء</div>
              <div className="text-xs text-slate-500">خبير فني</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;