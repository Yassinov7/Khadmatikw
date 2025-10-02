import { notFound } from "next/navigation";
import { getAllBlogPostIds, getBlogPostById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import { Camera, SatelliteDish, Tv2, Wrench, Calendar, User, Share2, Clock, Bookmark } from "lucide-react";
import Image from "next/image";
import { ContactCard } from "@/components/ContactCard";
import Link from "next/link";

export const revalidate = 600;

const CONTACTS = [
  {
    name: "خبير",
    role: "تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Tv2 size={28} className="text-primary" />,
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <SatelliteDish size={28} className="text-primary" />,
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Camera size={28} className="text-primary" />,
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Wrench size={28} className="text-primary" />,
  },
];

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

// إنشاء المسارات الساكنة
export async function generateStaticParams() {
  const posts = await getAllBlogPostIds();
  return posts.map((p) => ({
    slugWithId: `${slugify(p.title)}-${p.id}`,
  }));
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
  const description = plainText.slice(0, 160);
  const canUrl = `https://satellitealrajaa.com/blog/${slugWithId}`;
  const baseKeywords = [
    "ستلايت الرجاء",
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
    title: `${post.title} | مدونة ستلايت الرجاء | 50266068`,
    description,
    keywords,
    openGraph: {
      title: `${post.title} | مدونة ستلايت الرجاء`,
      description,
      images: [post.cover_url || "/default-blog.png"],
      url: canUrl,
      siteName: "ستلايت الرجاء",
      locale: "ar_KW",
      type: "article",
      publishedTime: post.created_at,
      modifiedTime: post.created_at,
      authors: ["ستلايت الرجاء"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | مدونة ستلايت الرجاء`,
      description,
      images: [post.cover_url || "/default-blog.png"],
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
    alternates: {
      canonical: `${canUrl}`,
    },
  };
}

// صفحة تفاصيل التدوينة
export default async function BlogPostPage(props: { params: Promise<{ slugWithId: string }> }) {
  const { slugWithId } = await props.params;
  const id = extractId(slugWithId);
  if (!id) notFound();

  const post = await getBlogPostById(id);
  if (!post) notFound();

  // Structured data for SEO
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://satellitealrajaa.com/blog/${slugWithId}`
    },
    "headline": post.title,
    "description": post.content.replace(/<[^>]+>/g, " ").slice(0, 160),
    "datePublished": post.created_at,
    "dateModified": post.created_at,
    "image": post.cover_url || "/default-blog.png",
    "author": {
      "@type": "Organization",
      "name": "ستلايت الرجاء",
      "url": "https://satellitealrajaa.com"
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
    "articleBody": post.content.replace(/<[^>]+>/g, " ")
  };

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 my-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">الرئيسية</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-primary">المدونة</Link>
        <span>/</span>
        <span className="text-primary line-clamp-1">{post.title}</span>
      </nav>

      {/* Featured Image */}
      <div className="w-full h-80 mb-8 relative rounded-2xl overflow-hidden group bg-gradient-to-r from-primary/5 to-secondary/5 shadow-lg">
        <Image
          src={post.cover_url || "/default-blog.png"}
          alt={`صورة توضيحية لـ ${post.title} - ستلايت الرجاء`}
          fill
          className="object-contain p-6"
          priority
        />
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-primary font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
          <Bookmark size={18} />
          مقالة
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 p-4 bg-gray-50 rounded-2xl mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <User className="text-primary" size={20} />
            <span className="font-bold">ستلايت الرجاء</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="text-primary" size={20} />
            <time>{formatDate(post.created_at)}</time>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="text-primary" size={20} />
            <span>قراءة 3 دقائق</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Share2 className="text-primary" size={20} />
            <span>مشاركة</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-primary prose-p:text-gray-700 prose-a:text-primary hover:prose-a:text-secondary prose-strong:text-primary prose-blockquote:border-primary prose-li:marker:text-primary"
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-1">
              <div className="bg-white rounded-full p-1">
                <User size={24} className="text-primary" />
              </div>
            </div>
            <div>
              <div className="font-bold text-gray-800">ستلايت الرجاء</div>
              <div className="text-sm text-gray-600">خبير فني معتمد في مجال الشاشات والستلايت</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
              <Bookmark size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Link href="/contact" className="flex-1 min-w-[200px]">
            <button className="w-full px-6 py-4 rounded-xl text-white text-lg font-bold shadow transition bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1">
              شاهد خدمات موقعنا
            </button>
          </Link>
          <Link href="/blog" className="flex-1 min-w-[200px]">
            <button className="w-full px-6 py-4 rounded-xl text-white text-lg font-bold shadow transition bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 transform hover:-translate-y-1">
              شاهد التدوينات الأخرى
            </button>
          </Link>
          <Link href="/" className="flex-1 min-w-[200px]">
            <button className="w-full px-6 py-4 rounded-xl text-white text-lg font-bold shadow transition bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-1">
              العودة للصفحة الرئيسية
            </button>
          </Link>
        </div>
      </footer>

      {/* Contact Section */}
      <section className="mt-16 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-extrabold text-primary text-center mb-6">فنيونا جاهزون لخدمتك</h2>
        <p className="text-center text-gray-700 text-lg mb-8">
          إليك قائمة بأرقام التواصل المباشر مع الفنيين المختصين حسب مجالات الخدمة. يمكنك الاتصال أو المراسلة عبر واتساب.
        </p>
        <ContactCard contacts={CONTACTS} />
      </section>
    </article>
  );
}