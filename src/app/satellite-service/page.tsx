// app/[lang]/satellite-service/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Metadata } from "next";

// جميع مدن الكويت
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير",
  "الفنطاس", "السالمية", "الشفافيه", "الرقعي", "الفيحاء", "خيطان",
  "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الكلمات المفتاحية
const servicesKeywords = [
  "فني ستلايت الكويت",
  "تصليح الستلايت",
  "تركيب الستلايت الكويت",
  "خدمة ستلايت احترافية",
  "صيانة الستلايت الكويت",
  "اشتراكات IPTV",
  "اشتراك برلين",
  "اشتراك سبايدر"
];

export const metadata: Metadata = {
  title: "فني ستلايت محترف في الكويت – تركيب وصيانة واشتراكات IPTV",
  description:
    "خدمة تركيب وصيانة الستلايت في الكويت، بالإضافة لاشتراكات IPTV واشتراك برلين وسبايدر. تواصل معنا الآن للحصول على أفضل خدمة سريعة وموثوقة في جميع مدن الكويت.",
  keywords: [...servicesKeywords, ...kuwaitCities],
  openGraph: {
    title: "فني ستلايت محترف في الكويت – تركيب وصيانة واشتراكات IPTV",
    description:
      "خدمة تركيب وصيانة الستلايت في الكويت، بالإضافة لاشتراكات IPTV واشتراك برلين وسبايدر. تواصل معنا الآن للحصول على أفضل خدمة سريعة وموثوقة في جميع مدن الكويت.",
    url: "https://satellitealrajaa.com/satellite-service",
    type: "website",
    images: ["/default-blog.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "فني ستلايت محترف في الكويت – تركيب وصيانة واشتراكات IPTV",
    description:
      "تركيب وصيانة جميع أنواع الستلايت مع أفضل اشتراكات IPTV، برلين، وسبايدر في جميع مدن الكويت."
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/satellite-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SatelliteServicePage() {
  const serviceDescriptions = [
    { title: "اشتراكات IPTV", desc: "أفضل اشتراكات IPTV لجميع القنوات بجودة عالية وسرعة استجابة." },
    { title: "اشتراك برلين", desc: "اشتراك برلين لتشغيل القنوات الأوروبية والعالمية بأفضل الأسعار." },
    { title: "اشتراك سبايدر", desc: "اشتراك سبايدر لتجربة مشاهدة متكاملة للقنوات العربية والعالمية." },
  ];

  const works = [
    "/sattech/works/work1.jpg",
    "/sattech/works/work2.jpg",
    "/sattech/works/work3.jpg",
    "/sattech/works/work4.png",
    "/sattech/works/work5.webp",
    "/sattech/works/work6.webp"
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/80 to-green-600 text-white min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          فني ستلايت محترف في الكويت
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          تركيب وصيانة جميع أنواع الستلايت مع أفضل اشتراكات IPTV، برلين، وسبايدر في جميع مدن الكويت.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:96550266068"
            className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2"
          >
            <Phone size={18} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات الستلايت والاشتراكات."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-green-700 transition flex items-center gap-2"
          >
            <MessageCircle size={18} /> واتساب مباشر
          </a>
        </div>
      </section>

      {/* خدماتنا */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "تركيب ستلايت", desc: "تركيب جميع أنواع الستلايت مع ضمان جودة التركيب." },
            { title: "صيانة الستلايت", desc: "كشف الأعطال وإصلاحها لضمان أفضل استقبال للقنوات." },
            { title: "تصليح شامل", desc: "إصلاح الأعطال الفنية بسرعة واحترافية عالية." },
            { title: "ضبط الإشارة", desc: "توجيه الأقمار الصناعية للحصول على أفضل جودة صورة." },
            { title: "استشارات تقنية", desc: "نصائح وحلول لأفضل تجربة مشاهدة." },
            ...serviceDescriptions
          ].map((service, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* قسم أعمالنا */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">أعمالنا السابقة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {works.map((img, i) => (
            <div key={i} className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <Image src={img} alt={`عمل ستلايت ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* لماذا نحن؟ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">لماذا تختارنا؟</h2>
          <p className="text-gray-600 text-lg mb-6">
            نحن نضمن سرعة التنفيذ، جودة العمل، وأسعار مناسبة لجميع العملاء في الكويت.
            فريقنا محترف ويستخدم أفضل الأدوات لضمان رضاك الكامل.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex flex-col items-center">
              <Image src="/sattech/fast.png" alt="سرعة" width={60} height={60} />
              <span className="mt-2 text-gray-700 font-medium">سرعة الاستجابة</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/sattech/quality.avif" alt="جودة" width={60} height={60} />
              <span className="mt-2 text-gray-700 font-medium">جودة مضمونة</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/sattech/trusted.png" alt="ثقة" width={60} height={60} />
              <span className="mt-2 text-gray-700 font-medium">احترافية وثقة</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/sattech/safe.png" alt="امان" width={60} height={60} />
              <span className="mt-2 text-gray-700 font-medium">امان المنتجات</span>
            </div>
          </div>
        </div>
      </section>

      {/* أزرار للصفحات الأخرى */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">اكتشف المزيد</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href="/products" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow transition">
            خدمات أخرى
          </Link>
          <Link href="/blog" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow transition">
            مقالات ونصائح
          </Link>
        </div>
      </section>

      {/* أرقام التواصل */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="tel:96550266068"
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow"
          >
            <Phone size={20} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات الستلايت والاشتراكات."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow"
          >
            <MessageCircle size={20} /> واتساب مباشر
          </a>
        </div>
      </section>
    </main>
  );
}
