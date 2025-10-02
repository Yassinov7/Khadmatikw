import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Monitor, SatelliteDish, Camera, PenTool, Tag, Wrench, Shield, Clock, Headphones, Star, CheckCircle, Award, Users } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { ProductCard } from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { OfferCard } from "@/components/OfferCard";
import { supabase } from "@/lib/supabase";

export const revalidate = 3600; // Revalidate every hour

const features = [
  {
    title: "تركيب وصيانة الشاشات",
    icon: <Monitor size={32} className="text-primary" />,
    desc: "خدمة احترافية لتركيب الشاشات بجميع الأحجام وال_TYPES، مع ضبط وتثبيت آمن.",
  },
  {
    title: "أنظمة الستلايت والريسيفر",
    icon: <SatelliteDish size={32} className="text-secondary" />,
    desc: "بيع، تركيب وبرمجة أنظمة الستلايت وأجهزة الاستقبال بأحدث التقنيات.",
  },
  {
    title: "كاميرات المراقبة",
    icon: <Camera size={32} className="text-primary" />,
    desc: "توريد وتركيب جميع أنواع كاميرات المراقبة السلكية واللاسلكية.",
  },
  {
    title: "دعم فني وصيانة سريعة",
    icon: <PenTool size={32} className="text-secondary" />,
    desc: "خدمات إصلاح فوري وصيانة دورية للأجهزة بأيدي خبراء محترفين.",
  },
];

const CONTACTS = [
  {
    name: "خبير",
    role: "تركيب شاشات",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Monitor size={32} className="text-primary" />,
    location: "الكويت"
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <SatelliteDish size={32} className="text-secondary" />,
    location: "الكويت"
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <Camera size={32} className="text-primary" />,
    location: "الكويت"
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96550266068",
    icon: <PenTool size={32} className="text-secondary" />,
    location: "الكويت"
  },
];

export const metadata: Metadata = {
  title: "ستلايت الرجاء | أفضل خدمات الشاشات والستلايت والكاميرات في الكويت | 50266068",
  description: "منصة ستلايت الرجاء توفر جميع خدمات الشاشات، الستلايت، الريسيفر، تركيب وصيانة الكاميرات والأنظمة الذكية في الكويت. تواصل معنا للعروض والخصومات والدعم الفني السريع.",
  keywords: [
    "خدمات الشاشات في الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة الكويت",
    "ستلايت الرجاء",
    "أسعار الكاميرات",
    "صيانة ستلايت الكويت",
    "فني ستلايت",
    "فني كاميرات مراقبة",
    "تركيب شاشات الكويت",
    "IPTV الكويت",
    "برلين IPTV",
    "سبايدر IPTV"
  ],
  alternates: {
    canonical: "https://satellitealrajaa.com/",
  },
  openGraph: {
    title: "ستلايت الرجاء | أفضل خدمات الشاشات والستلايت والكاميرات في الكويت",
    description: "منصة ستلايت الرجاء توفر جميع خدمات الشاشات، الستلايت، الريسيفر، تركيب وصيانة الكاميرات والأنظمة الذكية في الكويت.",
    url: "https://satellitealrajaa.com/",
    siteName: "ستلايت الرجاء",
    locale: "ar_KW",
    type: "website",
    images: [
      {
        url: "https://satellitealrajaa.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ستلايت الرجاء - خدمات الشاشات والستلايت والكاميرات في الكويت"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ستلايت الرجاء | خدمات الشاشات والستلايت والكاميرات في الكويت",
    description: "جميع خدمات الشاشات، الستلايت، الريسيفر، تركيب وصيانة الكاميرات في الكويت.",
    images: ["https://satellitealrajaa.com/logo.png"],
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
};

export default async function HomePage() {
  const { data: products } = await supabase.from("products").select("*").order("id", { ascending: false }).limit(6);
  const { data: blogPosts } = await supabase.from("blog_posts").select("*").order("id", { ascending: false }).limit(3);
  const { data: offers } = await supabase.from("offers").select("*, product:products(name, category:categories(name))").order("created_at", { ascending: false }).limit(3);

  const safeBlogs = blogPosts ?? [];
  const safeProducts = products ?? [];
  const safeOffers = offers ?? [];

  // Structured data for SEO
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ستلايت الرجاء",
    "description": "منصة ستلايت الرجاء توفر جميع خدمات الشاشات، الستلايت، الريسيفر، تركيب وصيانة الكاميرات والأنظمة الذكية في الكويت.",
    "telephone": "+96550266068",
    "areaServed": "KW",
    "url": "https://satellitealrajaa.com/",
    "logo": "https://satellitealrajaa.com/logo.png",
    "sameAs": [
      // Add your social media links here if available
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الكويت",
      "addressRegion": "حولي"
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-10 font-[Noto Kufi Arabic,sans-serif]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />

      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col items-center gap-6 mb-16 text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/logo.png"
            alt="شعار ستلايت الرجاء"
            fill
            priority
            className="rounded-xl object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-primary">
          ستلايت الرجاء
        </h1>

        <p className="text-xl md:text-2xl text-center mb-6 text-secondary font-medium max-w-3xl">
          كل حلول الشاشات، الستلايت، والكاميرات تحت سقف واحد في الكويت.
        </p>

        <p className="text-lg md:text-xl text-center mb-6 text-gray-700 leading-relaxed max-w-3xl">
          فني ستلايت محترف يغطي جميع مناطق الكويت.<br />
          تركيب وصيانة ستلايت بجودة عالية وبسرعة فائقة.<br />
          محل ستلايت الرجاء جاهز لخدمتكم على مدار الساعة.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-8 w-full max-w-3xl">
          <p className="text-lg md:text-xl text-center text-cyan-700 font-semibold">
            استمتع بأفضل اشتراكات IPTV، اشتراك برلين، واشتراك سبايدر.<br />
            جودة عالية، أسعار مناسبة، وخدمة سريعة ومضمونة.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition mb-2 sm:mb-0 bg-primary hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-0.5">
              استعرض الخدمات
            </button>
          </Link>
          <Link href="/offers" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition mb-2 sm:mb-0 bg-red-500 hover:bg-red-600 hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
              <Tag size={20} />
              العروض الخاصة
            </button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg transition bg-secondary hover:bg-secondary/90 hover:shadow-xl transform hover:-translate-y-0.5">
              تواصل معنا
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-5xl my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Users className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-primary">1000+</div>
            <div className="text-gray-600">عميل راضي</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <CheckCircle className="text-secondary" size={32} />
            </div>
            <div className="text-2xl font-bold text-secondary">500+</div>
            <div className="text-gray-600">مشروع مكتمل</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Award className="text-primary" size={32} />
            </div>
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-gray-600">سنة خبرة</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center">
            <div className="flex justify-center mb-3">
              <Star className="text-secondary" size={32} />
            </div>
            <div className="text-2xl font-bold text-secondary">4.9/5</div>
            <div className="text-gray-600">تقييم العملاء</div>
          </div>
        </div>
      </section>

      {/* بطاقات التواصل */}
      <div className="w-full max-w-6xl my-12">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">تواصل مباشر</h2>
        <ContactCard contacts={CONTACTS} />
      </div>

      {/* المزايا */}
      <section className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-secondary mb-6 text-center">الخدمات المقدمة</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="flex items-start gap-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              <div className="shrink-0 mt-1 p-3 bg-primary/10 rounded-xl">{f.icon}</div>
              <div>
                <h2 className={`font-bold text-xl mb-2 ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>{f.title}</h2>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* العروض الخاصة */}
      {safeOffers?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">العروض الخاصة</h2>
            <Link href="/offers" className="text-red-500 hover:text-red-600 font-medium flex items-center gap-1 text-lg">
              عرض جميع العروض
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )}

      {/* المنتجات */}
      {safeProducts?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">أحدث الخدمات</h2>
            <Link href="/products" className="text-primary hover:text-secondary font-medium flex items-center gap-1 text-lg">
              عرض جميع الخدمات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* المدونة */}
      {safeBlogs?.length > 0 && (
        <section className="w-full max-w-6xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">أحدث المقالات</h2>
            <Link href="/blog" className="text-primary hover:text-secondary font-medium flex items-center gap-1 text-lg">
              عرض جميع المقالات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* لماذا تختار ستلايت الرجاء ؟ */}
      <section className="w-full max-w-5xl my-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-6">لماذا تختار ستلايت الرجاء ؟</h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          نقدم لك كل ما تحتاجه من خدمات التوصيل والتركيب والدعم الفني للأجهزة الإلكترونية باحترافية، وبخبرة طويلة في السوق الكويتي.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-right">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary" size={32} />
            </div>
            <h3 className="text-primary font-bold text-xl mb-2">جودة مضمونة</h3>
            <p className="text-gray-600">نستخدم أفضل المعدات ونتعامل مع منتجات موثوقة لضمان جودة التركيب والأداء.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-secondary" size={32} />
            </div>
            <h3 className="text-secondary font-bold text-xl mb-2">خبرة عائلية</h3>
            <p className="text-gray-600">عقود من الخبرة في خدمات الشاشات، الستلايت والكاميرات بلمسة شخصية موثوقة.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={32} />
            </div>
            <h3 className="text-primary font-bold text-xl mb-2">سرعة في الإنجاز</h3>
            <p className="text-gray-600">نصل إليك بسرعة وننجز العمل بنفس اليوم كلما أمكن، مع الالتزام بالمواعيد.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-secondary/30">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="text-secondary" size={32} />
            </div>
            <h3 className="text-secondary font-bold text-xl mb-2">دعم متواصل</h3>
            <p className="text-gray-600">خدمة ما بعد البيع عبر الاتصال أو الواتساب طوال أيام الأسبوع.</p>
          </div>
        </div>
      </section>

      {/* روابط سريعة */}
      <div className="text-sm text-center mt-8 text-gray-500 pb-6">
        تصفح صفحات الموقع:
        <Link href="/products" className="text-primary hover:underline font-medium mx-1">الخدمات</Link>|
        <Link href="/offers" className="text-red-500 hover:underline font-medium mx-1">العروض</Link>|
        <Link href="/blog" className="text-secondary hover:underline font-medium mx-1">المدونة</Link>|
        <Link href="/contact" className="text-primary hover:underline font-medium mx-1">التواصل</Link>|
        <Link href="/satellite-service" className="text-secondary hover:underline font-medium mx-1">فني ستلايت</Link>|
        <Link href="/camera-service" className="text-primary hover:underline font-medium mx-1">فني كاميرات</Link>|
        <Link href="/intercom-service" className="text-secondary hover:underline font-medium mx-1">فني انتركم</Link>
      </div>
    </div>
  );
}