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

  // Structured data for SEO
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": extractSummary(post.content, 160),
    "datePublished": post.created_at,
    "image": post.cover_url || "/default-blog.png",
    "author": {
      "@type": "Organization",
      "name": "ستلايت الرجاء"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ستلايت الرجاء",
      "logo": {
        "@type": "ImageObject",
        "url": "https://satellitealrajaa.com/logo.png"
      }
    },
    "articleSection": "Technical Blog",
    "articleBody": extractSummary(post.content, 300)
  };

  return (
    <article
      className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl overflow-hidden group"
      itemScope
      itemType="https://schema.org/Article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      {/* Image Section */}
      <Link href={href} className="block">
        <div className="relative aspect-video bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
          <Image
            src={post.cover_url || "/default-blog.png"}
            alt={`صورة توضيحية لـ ${post.title} - ستلايت الرجاء`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={`object-contain p-4 transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
            priority={false}
            onLoadingComplete={() => setImageLoaded(true)}
            itemProp="image"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-xs">
            <Bookmark size={12} />
            مقالة
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <Link href={href}>
          <h3
            className="text-xl font-extrabold text-primary hover:text-secondary line-clamp-2 transition-colors"
            itemProp="headline"
          >
            {post.title}
          </h3>
        </Link>

        <p
          className="text-gray-600 leading-relaxed line-clamp-3"
          itemProp="description"
        >
          {extractSummary(post.content)}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CalendarDays size={16} className="text-primary" />
              <time itemProp="datePublished">{formatDate(post.created_at)}</time>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded-full p-2">
              <Eye size={16} className="text-gray-500" />
            </div>
            <span className="text-xs text-gray-500">قراءة 3 دقائق</span>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-1">
            <div className="bg-white rounded-full p-1">
              <User size={16} className="text-primary" />
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800" itemProp="author">ستلايت الرجاء</div>
            <div className="text-xs text-gray-500">خبير فني</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;