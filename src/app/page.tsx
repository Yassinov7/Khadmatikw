import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Monitor, SatelliteDish, Camera, PenTool } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { ProductCard } from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/lib/supabase";

const features = [
  {
    title: "تركيب وصيانة الشاشات",
    icon: <Monitor size={32} className="text-primary" />,
    desc: "خدمة احترافية لتركيب الشاشات بجميع الأحجام والأنواع، مع ضبط وتثبيت آمن.",
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
    whatsapp: "96565013345",
    icon: <Monitor size={32} className="text-primary" />,
  },
  {
    name: "خبير",
    role: "صيانة ستلايت",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <SatelliteDish size={32} className="text-secondary" />,
  },
  {
    name: "متخصص",
    role: "كاميرات مراقبة",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <Camera size={32} className="text-primary" />,
  },
  {
    name: "فني",
    role: "صيانة عامة",
    phone: "96550266068",
    whatsapp: "96565013345",
    icon: <PenTool size={32} className="text-secondary" />,
  },
];

export const metadata: Metadata = {
  title: "خدماتي KW | أفضل خدمات الشاشات والستلايت والكاميرات في الكويت",
  description: "منصة خدماتي KW توفر جميع خدمات الشاشات، الستلايت، الريسيفر، تركيب وصيانة الكاميرات والأنظمة الذكية في الكويت. تواصل معنا للعروض والخصومات والدعم الفني السريع.",
  keywords: [
    "خدمات الشاشات في الكويت",
    "تركيب ستلايت",
    "كاميرات مراقبة الكويت",
    "خدماتي KW",
    "أسعار الكاميرات",
  ],
  alternates: {
    canonical: "https://khadmatikw.com/",
  },
};

export default async function HomePage() {
   const { data: products } = await supabase.from("products").select("*").order("id", { ascending: false }).limit(6);
  const { data: blogPosts } = await supabase.from("blog_posts").select("*").order("id", { ascending: false }).limit(3);
    const safeBlogs = blogPosts ?? [];
    const safeProducts = products ?? [];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-10 font-[Noto Kufi Arabic,sans-serif]">
      <main className="w-full max-w-3xl flex flex-col items-center gap-6 mb-10">
        <Image
          src="/logo.png"
          alt="شعار خدماتي KW"
          width={120}
          height={120}
          priority
          className="rounded-xl mb-2"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-primary">
          خدماتي KW
        </h1>
        <p className="text-xl md:text-2xl text-center mb-4 text-secondary">
          كل حلول الشاشات، الستلايت والكاميرات في الكويت
        </p>


        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link href="/products" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition mb-2 sm:mb-0 bg-primary hover:bg-primary/80">
              استعرض الخدمات
            </button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 rounded-lg text-white text-lg font-bold shadow transition bg-primary hover:bg-primary/80">
              تواصل معنا
            </button>
          </Link>
        </div>
      </main>

      {/* بطاقات التواصل */}
      <div className="w-full max-w-5xl my-8">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">تواصل مباشر</h2>
        <ContactCard contacts={CONTACTS} />
      </div>
      {/* المزايا */} 
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-secondary mb-4 text-center">الخدمات المقدمة</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {features.map((f, i) => (
            <div key={f.title} className="flex items-start gap-4 bg-white rounded-2xl shadow p-5 border border-gray-100">
              <div className="shrink-0">{f.icon}</div>
              <div>
                <h2 className={`font-bold text-lg mb-1 ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>{f.title}</h2>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}</div>
          
        </section>
 {/* المنتجات */}
      {safeProducts?.length > 0 && (
        <section className="w-full max-w-6xl mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">أحدث المنتجات</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* العروض
      {safeOffers?.length > 0 && (
        <section className="w-full max-w-6xl mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-4 text-center">أحدث العروض</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>
      )} */}

      {/* المدونة */}
      {safeBlogs?.length > 0 && (
        <section className="w-full max-w-6xl mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">المدونة</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {safeBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
      {/* لماذا تختار خدماتي KW؟ */}
<section className="w-full max-w-5xl my-16 px-4 text-center">
  <h2 className="text-3xl font-bold text-secondary mb-6">لماذا تختار خدماتي KW؟</h2>
  <p className="text-gray-600 text-lg mb-10">
    نقدم لك كل ما تحتاجه من خدمات التوصيل والتركيب والدعم الفني للأجهزة الإلكترونية باحترافية، وبخبرة طويلة في السوق الكويتي.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-right">
    <div className="bg-white shadow rounded-2xl p-5 border border-gray-100">
      <h3 className="text-primary font-bold text-lg mb-2">جودة مضمونة</h3>
      <p className="text-gray-600 text-sm">نستخدم أفضل المعدات ونتعامل مع منتجات موثوقة لضمان جودة التركيب والأداء.</p>
    </div>
    <div className="bg-white shadow rounded-2xl p-5 border border-gray-100">
      <h3 className="text-secondary font-bold text-lg mb-2">خبرة عائلية</h3>
      <p className="text-gray-600 text-sm">عقود من الخبرة في خدمات الشاشات، الستلايت والكاميرات بلمسة شخصية موثوقة.</p>
    </div>
    <div className="bg-white shadow rounded-2xl p-5 border border-gray-100">
      <h3 className="text-primary font-bold text-lg mb-2">سرعة في الإنجاز</h3>
      <p className="text-gray-600 text-sm">نصل إليك بسرعة وننجز العمل بنفس اليوم كلما أمكن، مع الالتزام بالمواعيد.</p>
    </div>
    <div className="bg-white shadow rounded-2xl p-5 border border-gray-100">
      <h3 className="text-secondary font-bold text-lg mb-2">دعم متواصل</h3>
      <p className="text-gray-600 text-sm">خدمة ما بعد البيع عبر الاتصال أو الواتساب طوال أيام الأسبوع.</p>
    </div>
  </div>
</section>


      {/* روابط سريعة */}
      <div className="text-sm text-center mt-8 text-gray-500 pb-3">
        تصفح صفحات الموقع:
        <Link href="/products" className="text-primary hover:underline font-medium mx-1">الخدمات</Link>|
        <Link href="/blog" className="text-primary hover:underline font-medium mx-1">المدونة</Link>|
        <Link href="/contact" className="text-secondary hover:underline font-medium mx-1">التواصل</Link>
      </div>
    </div>
  );
}
