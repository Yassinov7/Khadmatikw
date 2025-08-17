// app/[lang]/camera-service/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

// جميع المدن الكويتية
const kuwaitCities = [
  "مدينة الكويت", "حولى", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير", "الفنطاس", "السالمية",
  "الشفافيه", "الرقعي", "الفيحاء", "خيطان", "العبدلي", "مشرف", "الصباحية", "الجليب", "الظهر", "العزيزية"
];

// الخدمات والكلمات المفتاحية
const servicesKeywords = [
  "فني كاميرات الكويت",
  "تركيب كاميرات مراقبة",
  "صيانة كاميرات",
  "خدمة كاميرات احترافية",
  "تصليح كاميرات المراقبة",
  "كاميرات IP",
  "كاميرات لاسلكية",
  "كاميرات داخلية وخارجية"
].join(", ");

// Metadata
export const metadata: Metadata = {
  title: "فني كاميرات مراقبة في الكويت – تركيب وصيانة احترافية",
  description:
    "خدمة تركيب وصيانة كاميرات المراقبة في الكويت بجودة عالية وخبرة مميزة. نقدم جميع أنواع الكاميرات الداخلية والخارجية مع صيانة وضمان.",
  keywords: `${servicesKeywords}, ${kuwaitCities.join(", ")}`,
  openGraph: {
    title: "فني كاميرات مراقبة في الكويت – تركيب وصيانة احترافية",
    description:
      "أفضل خدمات تركيب وصيانة كاميرات المراقبة في جميع مدن الكويت، مع ضمان الجودة وخدمة ما بعد البيع.",
    images: ["/camera-service-og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فني كاميرات مراقبة في الكويت",
    description:
      "خدمة احترافية لتركيب وصيانة كاميرات المراقبة الداخلية والخارجية مع ضمان.",
  },
  alternates: {
    canonical: "https://satellitealrajaa.com/camera-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CameraServicePage() {
  const serviceDescriptions = [
    { title: "تركيب كاميرات مراقبة", desc: "تركيب جميع أنواع الكاميرات الداخلية والخارجية." },
    { title: "صيانة الكاميرات", desc: "كشف وإصلاح الأعطال بدقة لضمان أفضل أداء." },
    { title: "توصيل شبكي", desc: "ربط الكاميرات بالشبكة الداخلية أو الإنترنت." },
    { title: "كاميرات IP", desc: "حلول كاميرات المراقبة عبر بروتوكول الإنترنت." },
    { title: "كاميرات لاسلكية", desc: "تركيب كاميرات بدون أسلاك بجودة عالية." },
    { title: "خدمة ما بعد البيع", desc: "دعم فني وصيانة دورية لضمان استمرارية العمل." },
  ];

  const works = [
    "/sattech/cworks/work1.jpg",
    "/sattech/cworks/work2.jpg",
    "/sattech/cworks/work3.jpg",
    "/sattech/cworks/work4.webp",
    "/sattech/cworks/work5.jpg",
  ];


  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/80 to-green-600 text-white min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          فني كاميرات مراقبة محترف في الكويت
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl">
          تركيب وصيانة كاميرات المراقبة الداخلية والخارجية بجودة عالية في جميع مدن الكويت.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:96550266068"
            className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2"
          >
            <Phone size={18} /> اتصال مباشر
          </a>
          <a
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات تركيب وصيانة الكاميرات."
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
          {serviceDescriptions.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition"
            >
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
            <div
              key={i}
              className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image src={img} alt={`عمل كاميرات ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* لماذا نحن؟ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">لماذا تختارنا؟</h2>
          <p className="text-gray-600 text-lg mb-6">
            نقدم أفضل خدمة تركيب وصيانة كاميرات المراقبة بأسعار مناسبة وجودة عالية مع ضمان الخدمة.
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

      {/* أزرار الانتقال */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">اكتشف المزيد</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/products"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow transition"
          >
            خدمات أخرى
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold shadow transition"
          >
            مقالات ونصائح
          </Link>
        </div>
      </section>

      {/* تواصل معنا */}
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
            href="https://wa.me/96550266068?text=مرحبًا، أود الاستفسار عن خدمات تركيب وصيانة الكاميرات."
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
