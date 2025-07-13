import { notFound } from "next/navigation";
import { getAllBlogPostIds, getBlogPostById } from "@/lib/api";
import type { Metadata } from "next";
import { slugify } from "@/utils/slugify";
import { Camera, SatelliteDish, Tv2, Wrench } from "lucide-react";
import Image from "next/image";
import { ContactCard } from "@/components/ContactCard";

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
  const description = plainText.slice(0, 120);
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
    title: `${post.title} | 50266068`,
    description,
    keywords,
    openGraph: {
      title: `${post.title} | 50266068`,
      description,
      images: [post.cover_url || "/default-blog.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | 50266068`,
      description,
    },
    robots: "index, follow",
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

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 my-10">

  <div className="w-full h-64 mb-6 relative rounded-xl overflow-hidden group bg-gray-50 shadow-sm">
    <Image
      src={post.cover_url || "/default-blog.png"}
      alt={post.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      priority
    />
  </div>

  <h1 className="text-3xl font-extrabold text-primary mb-2 leading-snug">{post.title}</h1>

  <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10m-12 5h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    {formatDate(post.created_at)}
  </div>

  <div
    className="prose prose-slate max-w-none text-lg leading-loose prose-headings:text-blue-900 prose-p:text-gray-800"
    dir="rtl"
    dangerouslySetInnerHTML={{ __html: post.content }}
  />

  <section className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
    <h2 className="text-xl font-bold text-primary text-center mb-4">فنيونا جاهزون لخدمتك</h2>
    <p className="text-center text-gray-700 text-sm mb-6">
      إليك قائمة بأرقام التواصل المباشر مع الفنيين المختصين حسب مجالات الخدمة. يمكنك الاتصال أو المراسلة عبر واتساب.
    </p>
    <ContactCard contacts={CONTACTS} />
  </section>

</article>

    
  );
}
